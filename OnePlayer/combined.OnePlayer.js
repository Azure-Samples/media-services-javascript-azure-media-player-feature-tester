/**
 * @fileoverview Main function src.
 */

// HTML5 Shiv. Must be in <head> to support older browsers.
document.createElement('video');
document.createElement('audio');
document.createElement('track');

/**
 * Doubles as the main function for users to create a player instance and also
 * the main library object.
 *
 * **ALIASES** videojs, _V_ (deprecated)
 *
 * The `vjs` function can be used to initialize or retrieve a player.
 *
 *     var myPlayer = vjs('my_video_id');
 *
 * @param  {String|Element} id      Video element or video element ID
 * @param  {Object=} options        Optional options object for config/settings
 * @param  {Function=} ready        Optional ready callback
 * @return {vjs.Player}             A player instance
 * @namespace
 */
var vjs = function(id, options, ready){
  var tag; // Element of ID

  // Allow for element or ID to be passed in
  // String ID
  if (typeof id === 'string') {

    // Adjust for jQuery ID syntax
    if (id.indexOf('#') === 0) {
      id = id.slice(1);
    }

    // If a player instance has already been created for this ID return it.
    if (vjs.players[id]) {
      return vjs.players[id];

    // Otherwise get element for ID
    } else {
      tag = vjs.el(id);
    }

  // ID is a media element
  } else {
    tag = id;
  }

  // Check for a useable element
  if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
    throw new TypeError('The element or ID supplied is not valid. (videojs)'); // Returns
  }

  // Element may have a player attr referring to an already created player instance.
  // If not, set up a new player and return the instance.
  return tag['player'] || new vjs.Player(tag, options, ready);
};

// Extended name, also available externally, window.videojs
var videojs = window['videojs'] = vjs;

// CDN Version. Used to target right flash swf.
vjs.CDN_VERSION = '0.0';
vjs.ACCESS_PROTOCOL = ('https:' == document.location.protocol ? 'https://' : 'http://');

/**
 * Global Player instance options, surfaced from vjs.Player.prototype.options_
 * vjs.options = vjs.Player.prototype.options_
 * All options should use string keys so they avoid
 * renaming by closure compiler
 * @type {Object}
 */
vjs.options = {
  // Default order of fallback technology
  'techOrder': ['html5','flash'],
  // techOrder: ['flash','html5'],

  'html5': {},
  'flash': {},

  // Default of web browser is 300x150. Should rely on source width/height.
  'width': 300,
  'height': 150,
  // defaultVolume: 0.85,
  'defaultVolume': 0.00, // The freakin seaguls are driving me crazy!

  // default playback rates
  'playbackRates': [],
  // Add playback rate selection by adding rates
  // 'playbackRates': [0.5, 1, 1.5, 2],

  // Included control sets
  'children': {
    'mediaLoader': {},
    'posterImage': {},
    'textTrackDisplay': {},
    'loadingSpinner': {},
    'bigPlayButton': {},
    'controlBar': {},
    'errorDisplay': {}
  },

  'language': document.getElementsByTagName('html')[0].getAttribute('lang') || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || 'en',

  // locales and their language translations
  'languages': {},

  // Default message to show when a video cannot be played.
  'notSupportedMessage': 'No compatible source was found for this video.'
};

// Set CDN Version of swf
// The added (+) blocks the replace from changing this 0.0 string
if (vjs.CDN_VERSION !== 'GENERATED'+'_CDN_VSN') {
  videojs.options['flash']['swf'] = vjs.ACCESS_PROTOCOL + 'vjs.zencdn.net/'+vjs.CDN_VERSION+'/video-js.swf';
}

/**
 * Utility function for adding languages to the default options. Useful for
 * amending multiple language support at runtime.
 *
 * Example: vjs.addLanguage('es', {'Hello':'Hola'});
 *
 * @param  {String} code The language code or dictionary property
 * @param  {Object} data The data values to be translated
 * @return {Object} The resulting global languages dictionary object
 */
vjs.addLanguage = function(code, data){
  if(vjs.options['languages'][code] !== undefined) {
    vjs.options['languages'][code] = vjs.util.mergeOptions(vjs.options['languages'][code], data);
  } else {
    vjs.options['languages'][code] = data;
  }
  return vjs.options['languages'];
};

/**
 * Global player list
 * @type {Object}
 */
vjs.players = {};

/*!
 * Custom Universal Module Definition (UMD)
 *
 * Video.js will never be a non-browser lib so we can simplify UMD a bunch and
 * still support requirejs and browserify. This also needs to be closure
 * compiler compatible, so string keys are used.
 */
if (typeof define === 'function' && define['amd']) {
  define([], function(){ return videojs; });

// checking that module is an object too because of umdjs/umd#35
} else if (typeof exports === 'object' && typeof module === 'object') {
  module['exports'] = videojs;
}
/**
 * Core Object/Class for objects that use inheritance + contstructors
 *
 * To create a class that can be subclassed itself, extend the CoreObject class.
 *
 *     var Animal = CoreObject.extend();
 *     var Horse = Animal.extend();
 *
 * The constructor can be defined through the init property of an object argument.
 *
 *     var Animal = CoreObject.extend({
 *       init: function(name, sound){
 *         this.name = name;
 *       }
 *     });
 *
 * Other methods and properties can be added the same way, or directly to the
 * prototype.
 *
 *    var Animal = CoreObject.extend({
 *       init: function(name){
 *         this.name = name;
 *       },
 *       getName: function(){
 *         return this.name;
 *       },
 *       sound: '...'
 *    });
 *
 *    Animal.prototype.makeSound = function(){
 *      alert(this.sound);
 *    };
 *
 * To create an instance of a class, use the create method.
 *
 *    var fluffy = Animal.create('Fluffy');
 *    fluffy.getName(); // -> Fluffy
 *
 * Methods and properties can be overridden in subclasses.
 *
 *     var Horse = Animal.extend({
 *       sound: 'Neighhhhh!'
 *     });
 *
 *     var horsey = Horse.create('Horsey');
 *     horsey.getName(); // -> Horsey
 *     horsey.makeSound(); // -> Alert: Neighhhhh!
 *
 * @class
 * @constructor
 */
vjs.CoreObject = vjs['CoreObject'] = function(){};
// Manually exporting vjs['CoreObject'] here for Closure Compiler
// because of the use of the extend/create class methods
// If we didn't do this, those functions would get flattend to something like
// `a = ...` and `this.prototype` would refer to the global object instead of
// CoreObject

/**
 * Create a new object that inherits from this Object
 *
 *     var Animal = CoreObject.extend();
 *     var Horse = Animal.extend();
 *
 * @param {Object} props Functions and properties to be applied to the
 *                       new object's prototype
 * @return {vjs.CoreObject} An object that inherits from CoreObject
 * @this {*}
 */
vjs.CoreObject.extend = function(props){
  var init, subObj;

  props = props || {};
  // Set up the constructor using the supplied init method
  // or using the init of the parent object
  // Make sure to check the unobfuscated version for external libs
  init = props['init'] || props.init || this.prototype['init'] || this.prototype.init || function(){};
  // In Resig's simple class inheritance (previously used) the constructor
  //  is a function that calls `this.init.apply(arguments)`
  // However that would prevent us from using `ParentObject.call(this);`
  //  in a Child constuctor because the `this` in `this.init`
  //  would still refer to the Child and cause an inifinite loop.
  // We would instead have to do
  //    `ParentObject.prototype.init.apply(this, argumnents);`
  //  Bleh. We're not creating a _super() function, so it's good to keep
  //  the parent constructor reference simple.
  subObj = function(){
    init.apply(this, arguments);
  };

  // Inherit from this object's prototype
  subObj.prototype = vjs.obj.create(this.prototype);
  // Reset the constructor property for subObj otherwise
  // instances of subObj would have the constructor of the parent Object
  subObj.prototype.constructor = subObj;

  // Make the class extendable
  subObj.extend = vjs.CoreObject.extend;
  // Make a function for creating instances
  subObj.create = vjs.CoreObject.create;

  // Extend subObj's prototype with functions and other properties from props
  for (var name in props) {
    if (props.hasOwnProperty(name)) {
      subObj.prototype[name] = props[name];
    }
  }

  return subObj;
};

/**
 * Create a new instace of this Object class
 *
 *     var myAnimal = Animal.create();
 *
 * @return {vjs.CoreObject} An instance of a CoreObject subclass
 * @this {*}
 */
vjs.CoreObject.create = function(){
  // Create a new object that inherits from this object's prototype
  var inst = vjs.obj.create(this.prototype);

  // Apply this constructor function to the new object
  this.apply(inst, arguments);

  // Return the new object
  return inst;
};
/**
 * @fileoverview Event System (John Resig - Secrets of a JS Ninja http://jsninja.com/)
 * (Original book version wasn't completely usable, so fixed some things and made Closure Compiler compatible)
 * This should work very similarly to jQuery's events, however it's based off the book version which isn't as
 * robust as jquery's, so there's probably some differences.
 */

/**
 * Add an event listener to element
 * It stores the handler function in a separate cache object
 * and adds a generic handler to the element's event,
 * along with a unique id (guid) to the element.
 * @param  {Element|Object}   elem Element or object to bind listeners to
 * @param  {String|Array}   type Type of event to bind to.
 * @param  {Function} fn   Event listener.
 * @private
 */
vjs.on = function(elem, type, fn){
  if (vjs.obj.isArray(type)) {
    return _handleMultipleEvents(vjs.on, elem, type, fn);
  }

  var data = vjs.getData(elem);

  // We need a place to store all our handler data
  if (!data.handlers) data.handlers = {};

  if (!data.handlers[type]) data.handlers[type] = [];

  if (!fn.guid) fn.guid = vjs.guid++;

  data.handlers[type].push(fn);

  if (!data.dispatcher) {
    data.disabled = false;

    data.dispatcher = function (event){

      if (data.disabled) return;
      event = vjs.fixEvent(event);

      var handlers = data.handlers[event.type];

      if (handlers) {
        // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
        var handlersCopy = handlers.slice(0);

        for (var m = 0, n = handlersCopy.length; m < n; m++) {
          if (event.isImmediatePropagationStopped()) {
            break;
          } else {
            handlersCopy[m].call(elem, event);
          }
        }
      }
    };
  }

  if (data.handlers[type].length == 1) {
    if (elem.addEventListener) {
      elem.addEventListener(type, data.dispatcher);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + type, data.dispatcher);
    }
  }
};

/**
 * Removes event listeners from an element
 * @param  {Element|Object}   elem Object to remove listeners from
 * @param  {String|Array=}   type Type of listener to remove. Don't include to remove all events from element.
 * @param  {Function} fn   Specific listener to remove. Don't incldue to remove listeners for an event type.
 * @private
 */
vjs.off = function(elem, type, fn) {
  // Don't want to add a cache object through getData if not needed
  if (!vjs.hasData(elem)) return;

  var data = vjs.getData(elem);

  // If no events exist, nothing to unbind
  if (!data.handlers) { return; }

  if (vjs.obj.isArray(type)) {
    return _handleMultipleEvents(vjs.off, elem, type, fn);
  }

  // Utility function
  var removeType = function(t){
     data.handlers[t] = [];
     vjs.cleanUpEvents(elem,t);
  };

  // Are we removing all bound events?
  if (!type) {
    for (var t in data.handlers) removeType(t);
    return;
  }

  var handlers = data.handlers[type];

  // If no handlers exist, nothing to unbind
  if (!handlers) return;

  // If no listener was provided, remove all listeners for type
  if (!fn) {
    removeType(type);
    return;
  }

  // We're only removing a single handler
  if (fn.guid) {
    for (var n = 0; n < handlers.length; n++) {
      if (handlers[n].guid === fn.guid) {
        handlers.splice(n--, 1);
      }
    }
  }

  vjs.cleanUpEvents(elem, type);
};

/**
 * Clean up the listener cache and dispatchers
 * @param  {Element|Object} elem Element to clean up
 * @param  {String} type Type of event to clean up
 * @private
 */
vjs.cleanUpEvents = function(elem, type) {
  var data = vjs.getData(elem);

  // Remove the events of a particular type if there are none left
  if (data.handlers[type].length === 0) {
    delete data.handlers[type];
    // data.handlers[type] = null;
    // Setting to null was causing an error with data.handlers

    // Remove the meta-handler from the element
    if (elem.removeEventListener) {
      elem.removeEventListener(type, data.dispatcher, false);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + type, data.dispatcher);
    }
  }

  // Remove the events object if there are no types left
  if (vjs.isEmpty(data.handlers)) {
    delete data.handlers;
    delete data.dispatcher;
    delete data.disabled;

    // data.handlers = null;
    // data.dispatcher = null;
    // data.disabled = null;
  }

  // Finally remove the expando if there is no data left
  if (vjs.isEmpty(data)) {
    vjs.removeData(elem);
  }
};

/**
 * Fix a native event to have standard property values
 * @param  {Object} event Event object to fix
 * @return {Object}
 * @private
 */
vjs.fixEvent = function(event) {

  function returnTrue() { return true; }
  function returnFalse() { return false; }

  // Test if fixing up is needed
  // Used to check if !event.stopPropagation instead of isPropagationStopped
  // But native events return true for stopPropagation, but don't have
  // other expected methods like isPropagationStopped. Seems to be a problem
  // with the Javascript Ninja code. So we're just overriding all events now.
  if (!event || !event.isPropagationStopped) {
    var old = event || window.event;

    event = {};
    // Clone the old object so that we can modify the values event = {};
    // IE8 Doesn't like when you mess with native event properties
    // Firefox returns false for event.hasOwnProperty('type') and other props
    //  which makes copying more difficult.
    // TODO: Probably best to create a whitelist of event props
    for (var key in old) {
      // Safari 6.0.3 warns you if you try to copy deprecated layerX/Y
      // Chrome warns you if you try to copy deprecated keyboardEvent.keyLocation
      if (key !== 'layerX' && key !== 'layerY' && key !== 'keyboardEvent.keyLocation') {
        // Chrome 32+ warns if you try to copy deprecated returnValue, but
        // we still want to if preventDefault isn't supported (IE8).
        if (!(key == 'returnValue' && old.preventDefault)) {
          event[key] = old[key];
        }
      }
    }

    // The event occurred on this element
    if (!event.target) {
      event.target = event.srcElement || document;
    }

    // Handle which other element the event is related to
    event.relatedTarget = event.fromElement === event.target ?
      event.toElement :
      event.fromElement;

    // Stop the default browser action
    event.preventDefault = function () {
      if (old.preventDefault) {
        old.preventDefault();
      }
      event.returnValue = false;
      event.isDefaultPrevented = returnTrue;
      event.defaultPrevented = true;
    };

    event.isDefaultPrevented = returnFalse;
    event.defaultPrevented = false;

    // Stop the event from bubbling
    event.stopPropagation = function () {
      if (old.stopPropagation) {
        old.stopPropagation();
      }
      event.cancelBubble = true;
      event.isPropagationStopped = returnTrue;
    };

    event.isPropagationStopped = returnFalse;

    // Stop the event from bubbling and executing other handlers
    event.stopImmediatePropagation = function () {
      if (old.stopImmediatePropagation) {
        old.stopImmediatePropagation();
      }
      event.isImmediatePropagationStopped = returnTrue;
      event.stopPropagation();
    };

    event.isImmediatePropagationStopped = returnFalse;

    // Handle mouse position
    if (event.clientX != null) {
      var doc = document.documentElement, body = document.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // Handle key presses
    event.which = event.charCode || event.keyCode;

    // Fix button for mouse clicks:
    // 0 == left; 1 == middle; 2 == right
    if (event.button != null) {
      event.button = (event.button & 1 ? 0 :
        (event.button & 4 ? 1 :
          (event.button & 2 ? 2 : 0)));
    }
  }

  // Returns fixed-up instance
  return event;
};

/**
 * Trigger an event for an element
 * @param  {Element|Object}      elem  Element to trigger an event on
 * @param  {Event|Object|String} event A string (the type) or an event object with a type attribute
 * @private
 */
vjs.trigger = function(elem, event) {
  // Fetches element data and a reference to the parent (for bubbling).
  // Don't want to add a data object to cache for every parent,
  // so checking hasData first.
  var elemData = (vjs.hasData(elem)) ? vjs.getData(elem) : {};
  var parent = elem.parentNode || elem.ownerDocument;
      // type = event.type || event,
      // handler;

  // If an event name was passed as a string, creates an event out of it
  if (typeof event === 'string') {
    event = { type:event, target:elem };
  }
  // Normalizes the event properties.
  event = vjs.fixEvent(event);

  // If the passed element has a dispatcher, executes the established handlers.
  if (elemData.dispatcher) {
    elemData.dispatcher.call(elem, event);
  }

  // Unless explicitly stopped or the event does not bubble (e.g. media events)
    // recursively calls this function to bubble the event up the DOM.
    if (parent && !event.isPropagationStopped() && event.bubbles !== false) {
    vjs.trigger(parent, event);

  // If at the top of the DOM, triggers the default action unless disabled.
  } else if (!parent && !event.defaultPrevented) {
    var targetData = vjs.getData(event.target);

    // Checks if the target has a default action for this event.
    if (event.target[event.type]) {
      // Temporarily disables event dispatching on the target as we have already executed the handler.
      targetData.disabled = true;
      // Executes the default action.
      if (typeof event.target[event.type] === 'function') {
        event.target[event.type]();
      }
      // Re-enables event dispatching.
      targetData.disabled = false;
    }
  }

  // Inform the triggerer if the default was prevented by returning false
  return !event.defaultPrevented;
  /* Original version of js ninja events wasn't complete.
   * We've since updated to the latest version, but keeping this around
   * for now just in case.
   */
  // // Added in attion to book. Book code was broke.
  // event = typeof event === 'object' ?
  //   event[vjs.expando] ?
  //     event :
  //     new vjs.Event(type, event) :
  //   new vjs.Event(type);

  // event.type = type;
  // if (handler) {
  //   handler.call(elem, event);
  // }

  // // Clean up the event in case it is being reused
  // event.result = undefined;
  // event.target = elem;
};

/**
 * Trigger a listener only once for an event
 * @param  {Element|Object}   elem Element or object to
 * @param  {String|Array}   type
 * @param  {Function} fn
 * @private
 */
vjs.one = function(elem, type, fn) {
  if (vjs.obj.isArray(type)) {
    return _handleMultipleEvents(vjs.one, elem, type, fn);
  }
  var func = function(){
    vjs.off(elem, type, func);
    fn.apply(this, arguments);
  };
  // copy the guid to the new function so it can removed using the original function's ID
  func.guid = fn.guid = fn.guid || vjs.guid++;
  vjs.on(elem, type, func);
};

/**
 * Loops through an array of event types and calls the requested method for each type.
 * @param  {Function} fn   The event method we want to use.
 * @param  {Element|Object} elem Element or object to bind listeners to
 * @param  {String}   type Type of event to bind to.
 * @param  {Function} callback   Event listener.
 * @private
 */
function _handleMultipleEvents(fn, elem, type, callback) {
  vjs.arr.forEach(type, function(type) {
    fn(elem, type, callback); //Call the event method for each one of the types
  });
}
var hasOwnProp = Object.prototype.hasOwnProperty;

/**
 * Creates an element and applies properties.
 * @param  {String=} tagName    Name of tag to be created.
 * @param  {Object=} properties Element properties to be applied.
 * @return {Element}
 * @private
 */
vjs.createEl = function(tagName, properties){
  var el;

  tagName = tagName || 'div';
  properties = properties || {};

  el = document.createElement(tagName);

  vjs.obj.each(properties, function(propName, val){
    // Not remembering why we were checking for dash
    // but using setAttribute means you have to use getAttribute

    // The check for dash checks for the aria-* attributes, like aria-label, aria-valuemin.
    // The additional check for "role" is because the default method for adding attributes does not
    // add the attribute "role". My guess is because it's not a valid attribute in some namespaces, although
    // browsers handle the attribute just fine. The W3C allows for aria-* attributes to be used in pre-HTML5 docs.
    // http://www.w3.org/TR/wai-aria-primer/#ariahtml. Using setAttribute gets around this problem.
    if (propName.indexOf('aria-') !== -1 || propName == 'role') {
     el.setAttribute(propName, val);
    } else {
     el[propName] = val;
    }
  });

  return el;
};

/**
 * Uppercase the first letter of a string
 * @param  {String} string String to be uppercased
 * @return {String}
 * @private
 */
vjs.capitalize = function(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Object functions container
 * @type {Object}
 * @private
 */
vjs.obj = {};

/**
 * Object.create shim for prototypal inheritance
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
 *
 * @function
 * @param  {Object}   obj Object to use as prototype
 * @private
 */
vjs.obj.create = Object.create || function(obj){
  //Create a new function called 'F' which is just an empty object.
  function F() {}

  //the prototype of the 'F' function should point to the
  //parameter of the anonymous function.
  F.prototype = obj;

  //create a new constructor function based off of the 'F' function.
  return new F();
};

/**
 * Loop through each property in an object and call a function
 * whose arguments are (key,value)
 * @param  {Object}   obj Object of properties
 * @param  {Function} fn  Function to be called on each property.
 * @this {*}
 * @private
 */
vjs.obj.each = function(obj, fn, context){
  for (var key in obj) {
    if (hasOwnProp.call(obj, key)) {
      fn.call(context || this, key, obj[key]);
    }
  }
};

/**
 * Merge two objects together and return the original.
 * @param  {Object} obj1
 * @param  {Object} obj2
 * @return {Object}
 * @private
 */
vjs.obj.merge = function(obj1, obj2){
  if (!obj2) { return obj1; }
  for (var key in obj2){
    if (hasOwnProp.call(obj2, key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
};

/**
 * Merge two objects, and merge any properties that are objects
 * instead of just overwriting one. Uses to merge options hashes
 * where deeper default settings are important.
 * @param  {Object} obj1 Object to override
 * @param  {Object} obj2 Overriding object
 * @return {Object}      New object. Obj1 and Obj2 will be untouched.
 * @private
 */
vjs.obj.deepMerge = function(obj1, obj2){
  var key, val1, val2;

  // make a copy of obj1 so we're not ovewriting original values.
  // like prototype.options_ and all sub options objects
  obj1 = vjs.obj.copy(obj1);

  for (key in obj2){
    if (hasOwnProp.call(obj2, key)) {
      val1 = obj1[key];
      val2 = obj2[key];

      // Check if both properties are pure objects and do a deep merge if so
      if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2)) {
        obj1[key] = vjs.obj.deepMerge(val1, val2);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
};

/**
 * Make a copy of the supplied object
 * @param  {Object} obj Object to copy
 * @return {Object}     Copy of object
 * @private
 */
vjs.obj.copy = function(obj){
  return vjs.obj.merge({}, obj);
};

/**
 * Check if an object is plain, and not a dom node or any object sub-instance
 * @param  {Object} obj Object to check
 * @return {Boolean}     True if plain, false otherwise
 * @private
 */
vjs.obj.isPlain = function(obj){
  return !!obj
    && typeof obj === 'object'
    && obj.toString() === '[object Object]'
    && obj.constructor === Object;
};

/**
 * Check if an object is Array
*  Since instanceof Array will not work on arrays created in another frame we need to use Array.isArray, but since IE8 does not support Array.isArray we need this shim
 * @param  {Object} obj Object to check
 * @return {Boolean}     True if plain, false otherwise
 * @private
 */
vjs.obj.isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

/**
 * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
   It also stores a unique id on the function so it can be easily removed from events
 * @param  {*}   context The object to bind as scope
 * @param  {Function} fn      The function to be bound to a scope
 * @param  {Number=}   uid     An optional unique ID for the function to be set
 * @return {Function}
 * @private
 */
vjs.bind = function(context, fn, uid) {
  // Make sure the function has a unique ID
  if (!fn.guid) { fn.guid = vjs.guid++; }

  // Create the new function that changes the context
  var ret = function() {
    return fn.apply(context, arguments);
  };

  // Allow for the ability to individualize this function
  // Needed in the case where multiple objects might share the same prototype
  // IF both items add an event listener with the same function, then you try to remove just one
  // it will remove both because they both have the same guid.
  // when using this, you need to use the bind method when you remove the listener as well.
  // currently used in text tracks
  ret.guid = (uid) ? uid + '_' + fn.guid : fn.guid;

  return ret;
};

/**
 * Element Data Store. Allows for binding data to an element without putting it directly on the element.
 * Ex. Event listneres are stored here.
 * (also from jsninja.com, slightly modified and updated for closure compiler)
 * @type {Object}
 * @private
 */
vjs.cache = {};

/**
 * Unique ID for an element or function
 * @type {Number}
 * @private
 */
vjs.guid = 1;

/**
 * Unique attribute name to store an element's guid in
 * @type {String}
 * @constant
 * @private
 */
vjs.expando = 'vdata' + (new Date()).getTime();

/**
 * Returns the cache object where data for an element is stored
 * @param  {Element} el Element to store data for.
 * @return {Object}
 * @private
 */
vjs.getData = function(el){
  var id = el[vjs.expando];
  if (!id) {
    id = el[vjs.expando] = vjs.guid++;
    vjs.cache[id] = {};
  }
  return vjs.cache[id];
};

/**
 * Returns the cache object where data for an element is stored
 * @param  {Element} el Element to store data for.
 * @return {Object}
 * @private
 */
vjs.hasData = function(el){
  var id = el[vjs.expando];
  return !(!id || vjs.isEmpty(vjs.cache[id]));
};

/**
 * Delete data for the element from the cache and the guid attr from getElementById
 * @param  {Element} el Remove data for an element
 * @private
 */
vjs.removeData = function(el){
  var id = el[vjs.expando];
  if (!id) { return; }
  // Remove all stored data
  // Changed to = null
  // http://coding.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/
  // vjs.cache[id] = null;
  delete vjs.cache[id];

  // Remove the expando property from the DOM node
  try {
    delete el[vjs.expando];
  } catch(e) {
    if (el.removeAttribute) {
      el.removeAttribute(vjs.expando);
    } else {
      // IE doesn't appear to support removeAttribute on the document element
      el[vjs.expando] = null;
    }
  }
};

/**
 * Check if an object is empty
 * @param  {Object}  obj The object to check for emptiness
 * @return {Boolean}
 * @private
 */
vjs.isEmpty = function(obj) {
  for (var prop in obj) {
    // Inlude null properties as empty.
    if (obj[prop] !== null) {
      return false;
    }
  }
  return true;
};

/**
 * Add a CSS class name to an element
 * @param {Element} element    Element to add class name to
 * @param {String} classToAdd Classname to add
 * @private
 */
vjs.addClass = function(element, classToAdd){
  if ((' '+element.className+' ').indexOf(' '+classToAdd+' ') == -1) {
    element.className = element.className === '' ? classToAdd : element.className + ' ' + classToAdd;
  }
};

/**
 * Remove a CSS class name from an element
 * @param {Element} element    Element to remove from class name
 * @param {String} classToAdd Classname to remove
 * @private
 */
vjs.removeClass = function(element, classToRemove){
  var classNames, i;

  if (element.className.indexOf(classToRemove) == -1) { return; }

  classNames = element.className.split(' ');

  // no arr.indexOf in ie8, and we don't want to add a big shim
  for (i = classNames.length - 1; i >= 0; i--) {
    if (classNames[i] === classToRemove) {
      classNames.splice(i,1);
    }
  }

  element.className = classNames.join(' ');
};

/**
 * Element for testing browser HTML5 video capabilities
 * @type {Element}
 * @constant
 * @private
 */
vjs.TEST_VID = vjs.createEl('video');

/**
 * Useragent for browser testing.
 * @type {String}
 * @constant
 * @private
 */
vjs.USER_AGENT = navigator.userAgent;

/**
 * Device is an iPhone
 * @type {Boolean}
 * @constant
 * @private
 */
vjs.IS_IPHONE = (/iPhone/i).test(vjs.USER_AGENT);
vjs.IS_IPAD = (/iPad/i).test(vjs.USER_AGENT);
vjs.IS_IPOD = (/iPod/i).test(vjs.USER_AGENT);
vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD;

vjs.IOS_VERSION = (function(){
  var match = vjs.USER_AGENT.match(/OS (\d+)_/i);
  if (match && match[1]) { return match[1]; }
})();

vjs.IS_ANDROID = (/Android/i).test(vjs.USER_AGENT);
vjs.ANDROID_VERSION = (function() {
  // This matches Android Major.Minor.Patch versions
  // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
  var match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    major,
    minor;

  if (!match) {
    return null;
  }

  major = match[1] && parseFloat(match[1]);
  minor = match[2] && parseFloat(match[2]);

  if (major && minor) {
    return parseFloat(match[1] + '.' + match[2]);
  } else if (major) {
    return major;
  } else {
    return null;
  }
})();
// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && (/webkit/i).test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3;

vjs.IS_FIREFOX = (/Firefox/i).test(vjs.USER_AGENT);
vjs.IS_CHROME = (/Chrome/i).test(vjs.USER_AGENT);

vjs.TOUCH_ENABLED = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

/**
 * Apply attributes to an HTML element.
 * @param  {Element} el         Target element.
 * @param  {Object=} attributes Element attributes to be applied.
 * @private
 */
vjs.setElementAttributes = function(el, attributes){
  vjs.obj.each(attributes, function(attrName, attrValue) {
    if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false) {
      el.removeAttribute(attrName);
    } else {
      el.setAttribute(attrName, (attrValue === true ? '' : attrValue));
    }
  });
};

/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributs are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 * @param  {Element} tag Element from which to get tag attributes
 * @return {Object}
 * @private
 */
vjs.getElementAttributes = function(tag){
  var obj, knownBooleans, attrs, attrName, attrVal;

  obj = {};

  // known boolean attributes
  // we can check for matching boolean properties, but older browsers
  // won't know about HTML5 boolean attributes that we still read from
  knownBooleans = ','+'autoplay,controls,loop,muted,default'+',';

  if (tag && tag.attributes && tag.attributes.length > 0) {
    attrs = tag.attributes;

    for (var i = attrs.length - 1; i >= 0; i--) {
      attrName = attrs[i].name;
      attrVal = attrs[i].value;

      // check for known booleans
      // the matching element property will return a value for typeof
      if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(','+attrName+',') !== -1) {
        // the value of an included boolean attribute is typically an empty
        // string ('') which would equal false if we just check for a false value.
        // we also don't want support bad code like autoplay='false'
        attrVal = (attrVal !== null) ? true : false;
      }

      obj[attrName] = attrVal;
    }
  }

  return obj;
};

/**
 * Get the computed style value for an element
 * From http://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element/
 * @param  {Element} el        Element to get style value for
 * @param  {String} strCssRule Style name
 * @return {String}            Style value
 * @private
 */
vjs.getComputedDimension = function(el, strCssRule){
  var strValue = '';
  if(document.defaultView && document.defaultView.getComputedStyle){
    strValue = document.defaultView.getComputedStyle(el, '').getPropertyValue(strCssRule);

  } else if(el.currentStyle){
    // IE8 Width/Height support
    strValue = el['client'+strCssRule.substr(0,1).toUpperCase() + strCssRule.substr(1)] + 'px';
  }
  return strValue;
};

/**
 * Insert an element as the first child node of another
 * @param  {Element} child   Element to insert
 * @param  {[type]} parent Element to insert child into
 * @private
 */
vjs.insertFirst = function(child, parent){
  if (parent.firstChild) {
    parent.insertBefore(child, parent.firstChild);
  } else {
    parent.appendChild(child);
  }
};

/**
 * Object to hold browser support information
 * @type {Object}
 * @private
 */
vjs.browser = {};

/**
 * Shorthand for document.getElementById()
 * Also allows for CSS (jQuery) ID syntax. But nothing other than IDs.
 * @param  {String} id  Element ID
 * @return {Element}    Element with supplied ID
 * @private
 */
vjs.el = function(id){
  if (id.indexOf('#') === 0) {
    id = id.slice(1);
  }

  return document.getElementById(id);
};

/**
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 */
vjs.formatTime = function(seconds, guide) {
  // Default to using seconds as guide
  guide = guide || seconds;
  var s = Math.floor(seconds % 60),
      m = Math.floor(seconds / 60 % 60),
      h = Math.floor(seconds / 3600),
      gm = Math.floor(guide / 60 % 60),
      gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = (h > 0 || gh > 0) ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = (s < 10) ? '0' + s : s;

  return h + m + s;
};

// Attempt to block the ability to select text while dragging controls
vjs.blockTextSelection = function(){
  document.body.focus();
  document.onselectstart = function () { return false; };
};
// Turn off text selection blocking
vjs.unblockTextSelection = function(){ document.onselectstart = function () { return true; }; };

/**
 * Trim whitespace from the ends of a string.
 * @param  {String} string String to trim
 * @return {String}        Trimmed string
 * @private
 */
vjs.trim = function(str){
  return (str+'').replace(/^\s+|\s+$/g, '');
};

/**
 * Should round off a number to a decimal place
 * @param  {Number} num Number to round
 * @param  {Number} dec Number of decimal places to round to
 * @return {Number}     Rounded number
 * @private
 */
vjs.round = function(num, dec) {
  if (!dec) { dec = 0; }
  return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
};

/**
 * Should create a fake TimeRange object
 * Mimics an HTML5 time range instance, which has functions that
 * return the start and end times for a range
 * TimeRanges are returned by the buffered() method
 * @param  {Number} start Start time in seconds
 * @param  {Number} end   End time in seconds
 * @return {Object}       Fake TimeRange object
 * @private
 */
vjs.createTimeRange = function(start, end){
  return {
    length: 1,
    start: function() { return start; },
    end: function() { return end; }
  };
};

/**
 * Simple http request for retrieving external files (e.g. text tracks)
 * @param  {String}    url             URL of resource
 * @param  {Function} onSuccess       Success callback
 * @param  {Function=} onError         Error callback
 * @param  {Boolean=}   withCredentials Flag which allow credentials
 * @private
 */
vjs.get = function(url, onSuccess, onError, withCredentials){
  var fileUrl, request, urlInfo, winLoc, crossOrigin;

  onError = onError || function(){};

  if (typeof XMLHttpRequest === 'undefined') {
    // Shim XMLHttpRequest for older IEs
    window.XMLHttpRequest = function () {
      try { return new window.ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {}
      try { return new window.ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (f) {}
      try { return new window.ActiveXObject('Msxml2.XMLHTTP'); } catch (g) {}
      throw new Error('This browser does not support XMLHttpRequest.');
    };
  }

  request = new XMLHttpRequest();

  urlInfo = vjs.parseUrl(url);
  winLoc = window.location;
  // check if url is for another domain/origin
  // ie8 doesn't know location.origin, so we won't rely on it here
  crossOrigin = (urlInfo.protocol + urlInfo.host) !== (winLoc.protocol + winLoc.host);

  // Use XDomainRequest for IE if XMLHTTPRequest2 isn't available
  // 'withCredentials' is only available in XMLHTTPRequest2
  // Also XDomainRequest has a lot of gotchas, so only use if cross domain
  if(crossOrigin && window.XDomainRequest && !('withCredentials' in request)) {
    request = new window.XDomainRequest();
    request.onload = function() {
      onSuccess(request.responseText);
    };
    request.onerror = onError;
    // these blank handlers need to be set to fix ie9 http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
    request.onprogress = function() {};
    request.ontimeout = onError;

  // XMLHTTPRequest
  } else {
    fileUrl = (urlInfo.protocol == 'file:' || winLoc.protocol == 'file:');

    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200 || fileUrl && request.status === 0) {
          onSuccess(request.responseText);
        } else {
          onError(request.responseText);
        }
      }
    };
  }

  // open the connection
  try {
    // Third arg is async, or ignored by XDomainRequest
    request.open('GET', url, true);
    // withCredentials only supported by XMLHttpRequest2
    if(withCredentials) {
      request.withCredentials = true;
    }
  } catch(e) {
    onError(e);
    return;
  }

  // send the request
  try {
    request.send();
  } catch(e) {
    onError(e);
  }
};

/**
 * Add to local storage (may removeable)
 * @private
 */
vjs.setLocalStorage = function(key, value){
  try {
    // IE was throwing errors referencing the var anywhere without this
    var localStorage = window.localStorage || false;
    if (!localStorage) { return; }
    localStorage[key] = value;
  } catch(e) {
    if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
      vjs.log('LocalStorage Full (VideoJS)', e);
    } else {
      if (e.code == 18) {
        vjs.log('LocalStorage not allowed (VideoJS)', e);
      } else {
        vjs.log('LocalStorage Error (VideoJS)', e);
      }
    }
  }
};

/**
 * Get abosolute version of relative URL. Used to tell flash correct URL.
 * http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue
 * @param  {String} url URL to make absolute
 * @return {String}     Absolute URL
 * @private
 */
vjs.getAbsoluteURL = function(url){

  // Check if absolute URL
  if (!url.match(/^https?:\/\//)) {
    // Convert to absolute URL. Flash hosted off-site needs an absolute URL.
    url = vjs.createEl('div', {
      innerHTML: '<a href="'+url+'">x</a>'
    }).firstChild.href;
  }

  return url;
};


/**
 * Resolve and parse the elements of a URL
 * @param  {String} url The url to parse
 * @return {Object}     An object of url details
 */
vjs.parseUrl = function(url) {
  var div, a, addToBody, props, details;

  props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];

  // add the url to an anchor and let the browser parse the URL
  a = vjs.createEl('a', { href: url });

  // IE8 (and 9?) Fix
  // ie8 doesn't parse the URL correctly until the anchor is actually
  // added to the body, and an innerHTML is needed to trigger the parsing
  addToBody = (a.host === '' && a.protocol !== 'file:');
  if (addToBody) {
    div = vjs.createEl('div');
    div.innerHTML = '<a href="'+url+'"></a>';
    a = div.firstChild;
    // prevent the div from affecting layout
    div.setAttribute('style', 'display:none; position:absolute;');
    document.body.appendChild(div);
  }

  // Copy the specific URL properties to a new object
  // This is also needed for IE8 because the anchor loses its
  // properties when it's removed from the dom
  details = {};
  for (var i = 0; i < props.length; i++) {
    details[props[i]] = a[props[i]];
  }

  if (addToBody) {
    document.body.removeChild(div);
  }

  return details;
};

/**
 * Log messags to the console and history based on the type of message
 *
 * @param  {String} type The type of message, or `null` for `log`
 * @param  {[type]} args The args to be passed to the log
 * @private
 */
function _logType(type, args){
  var argsArray, noop, console;

  // convert args to an array to get array functions
  argsArray = Array.prototype.slice.call(args);
  // if there's no console then don't try to output messages
  // they will still be stored in vjs.log.history
  // Was setting these once outside of this function, but containing them
  // in the function makes it easier to test cases where console doesn't exist
  noop = function(){};
  console = window['console'] || {
    'log': noop,
    'warn': noop,
    'error': noop
  };

  if (type) {
    // add the type to the front of the message
    argsArray.unshift(type.toUpperCase()+':');
  } else {
    // default to log with no prefix
    type = 'log';
  }

  // add to history
  vjs.log.history.push(argsArray);

  // add console prefix after adding to history
  argsArray.unshift('VIDEOJS:');

  // call appropriate log function
  if (console[type].apply) {
    console[type].apply(console, argsArray);
  } else {
    // ie8 doesn't allow error.apply, but it will just join() the array anyway
    console[type](argsArray.join(' '));
  }
}

/**
 * Log plain debug messages
 */
vjs.log = function(){
  _logType(null, arguments);
};

/**
 * Keep a history of log messages
 * @type {Array}
 */
vjs.log.history = [];

/**
 * Log error messages
 */
vjs.log.error = function(){
  _logType('error', arguments);
};

/**
 * Log warning messages
 */
vjs.log.warn = function(){
  _logType('warn', arguments);
};

// Offset Left
// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
vjs.findPosition = function(el) {
  var box, docEl, body, clientLeft, scrollLeft, left, clientTop, scrollTop, top;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  docEl = document.documentElement;
  body = document.body;

  clientLeft = docEl.clientLeft || body.clientLeft || 0;
  scrollLeft = window.pageXOffset || body.scrollLeft;
  left = box.left + scrollLeft - clientLeft;

  clientTop = docEl.clientTop || body.clientTop || 0;
  scrollTop = window.pageYOffset || body.scrollTop;
  top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: vjs.round(left),
    top: vjs.round(top)
  };
};

/**
 * Array functions container
 * @type {Object}
 * @private
 */
vjs.arr = {};

/*
 * Loops through an array and runs a function for each item inside it.
 * @param  {Array}    array       The array
 * @param  {Function} callback    The function to be run for each item
 * @param  {*}        thisArg     The `this` binding of callback
 * @returns {Array}               The array
 * @private
 */
vjs.arr.forEach = function(array, callback, thisArg) {
  if (vjs.obj.isArray(array) && callback instanceof Function) {
    for (var i = 0, len = array.length; i < len; ++i) {
      callback.call(thisArg || vjs, array[i], i, array);
    }
  }

  return array;
};
/**
 * Utility functions namespace
 * @namespace
 * @type {Object}
 */
vjs.util = {};

/**
 * Merge two options objects, recursively merging any plain object properties as
 * well.  Previously `deepMerge`
 *
 * @param  {Object} obj1 Object to override values in
 * @param  {Object} obj2 Overriding object
 * @return {Object}      New object -- obj1 and obj2 will be untouched
 */
vjs.util.mergeOptions = function(obj1, obj2){
  var key, val1, val2;

  // make a copy of obj1 so we're not overwriting original values.
  // like prototype.options_ and all sub options objects
  obj1 = vjs.obj.copy(obj1);

  for (key in obj2){
    if (obj2.hasOwnProperty(key)) {
      val1 = obj1[key];
      val2 = obj2[key];

      // Check if both properties are pure objects and do a deep merge if so
      if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2)) {
        obj1[key] = vjs.util.mergeOptions(val1, val2);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
};/**
 * @fileoverview Player Component - Base class for all UI objects
 *
 */

/**
 * Base UI Component class
 *
 * Components are embeddable UI objects that are represented by both a
 * javascript object and an element in the DOM. They can be children of other
 * components, and can have many children themselves.
 *
 *     // adding a button to the player
 *     var button = player.addChild('button');
 *     button.el(); // -> button element
 *
 *     <div class="video-js">
 *       <div class="vjs-button">Button</div>
 *     </div>
 *
 * Components are also event emitters.
 *
 *     button.on('click', function(){
 *       console.log('Button Clicked!');
 *     });
 *
 *     button.trigger('customevent');
 *
 * @param {Object} player  Main Player
 * @param {Object=} options
 * @class
 * @constructor
 * @extends vjs.CoreObject
 */
vjs.Component = vjs.CoreObject.extend({
  /**
   * the constructor function for the class
   *
   * @constructor
   */
  init: function(player, options, ready){
    this.player_ = player;

    // Make a copy of prototype.options_ to protect against overriding global defaults
    this.options_ = vjs.obj.copy(this.options_);

    // Updated options with supplied options
    options = this.options(options);

    // Get ID from options, element, or create using player ID and unique ID
    this.id_ = options['id'] || ((options['el'] && options['el']['id']) ? options['el']['id'] : player.id() + '_component_' + vjs.guid++ );

    this.name_ = options['name'] || null;

    // Create element if one wasn't provided in options
    this.el_ = options['el'] || this.createEl();

    this.children_ = [];
    this.childIndex_ = {};
    this.childNameIndex_ = {};

    // Add any child components in options
    this.initChildren();

    this.ready(ready);
    // Don't want to trigger ready here or it will before init is actually
    // finished for all children that run this constructor

    if (options.reportTouchActivity !== false) {
      this.enableTouchActivity();
    }
  }
});

/**
 * Dispose of the component and all child components
 */
vjs.Component.prototype.dispose = function(){
  this.trigger({ type: 'dispose', 'bubbles': false });

  // Dispose all children.
  if (this.children_) {
    for (var i = this.children_.length - 1; i >= 0; i--) {
      if (this.children_[i].dispose) {
        this.children_[i].dispose();
      }
    }
  }

  // Delete child references
  this.children_ = null;
  this.childIndex_ = null;
  this.childNameIndex_ = null;

  // Remove all event listeners.
  this.off();

  // Remove element from DOM
  if (this.el_.parentNode) {
    this.el_.parentNode.removeChild(this.el_);
  }

  vjs.removeData(this.el_);
  this.el_ = null;
};

/**
 * Reference to main player instance
 *
 * @type {vjs.Player}
 * @private
 */
vjs.Component.prototype.player_ = true;

/**
 * Return the component's player
 *
 * @return {vjs.Player}
 */
vjs.Component.prototype.player = function(){
  return this.player_;
};

/**
 * The component's options object
 *
 * @type {Object}
 * @private
 */
vjs.Component.prototype.options_;

/**
 * Deep merge of options objects
 *
 * Whenever a property is an object on both options objects
 * the two properties will be merged using vjs.obj.deepMerge.
 *
 * This is used for merging options for child components. We
 * want it to be easy to override individual options on a child
 * component without having to rewrite all the other default options.
 *
 *     Parent.prototype.options_ = {
 *       children: {
 *         'childOne': { 'foo': 'bar', 'asdf': 'fdsa' },
 *         'childTwo': {},
 *         'childThree': {}
 *       }
 *     }
 *     newOptions = {
 *       children: {
 *         'childOne': { 'foo': 'baz', 'abc': '123' }
 *         'childTwo': null,
 *         'childFour': {}
 *       }
 *     }
 *
 *     this.options(newOptions);
 *
 * RESULT
 *
 *     {
 *       children: {
 *         'childOne': { 'foo': 'baz', 'asdf': 'fdsa', 'abc': '123' },
 *         'childTwo': null, // Disabled. Won't be initialized.
 *         'childThree': {},
 *         'childFour': {}
 *       }
 *     }
 *
 * @param  {Object} obj Object of new option values
 * @return {Object}     A NEW object of this.options_ and obj merged
 */
vjs.Component.prototype.options = function(obj){
  if (obj === undefined) return this.options_;

  return this.options_ = vjs.util.mergeOptions(this.options_, obj);
};

/**
 * The DOM element for the component
 *
 * @type {Element}
 * @private
 */
vjs.Component.prototype.el_;

/**
 * Create the component's DOM element
 *
 * @param  {String=} tagName  Element's node type. e.g. 'div'
 * @param  {Object=} attributes An object of element attributes that should be set on the element
 * @return {Element}
 */
vjs.Component.prototype.createEl = function(tagName, attributes){
  return vjs.createEl(tagName, attributes);
};

vjs.Component.prototype.localize = function(string){
  var lang = this.player_.language(),
      languages = this.player_.languages();
  if (languages && languages[lang] && languages[lang][string]) {
    return languages[lang][string];
  }
  return string;
};

/**
 * Get the component's DOM element
 *
 *     var domEl = myComponent.el();
 *
 * @return {Element}
 */
vjs.Component.prototype.el = function(){
  return this.el_;
};

/**
 * An optional element where, if defined, children will be inserted instead of
 * directly in `el_`
 *
 * @type {Element}
 * @private
 */
vjs.Component.prototype.contentEl_;

/**
 * Return the component's DOM element for embedding content.
 * Will either be el_ or a new element defined in createEl.
 *
 * @return {Element}
 */
vjs.Component.prototype.contentEl = function(){
  return this.contentEl_ || this.el_;
};

/**
 * The ID for the component
 *
 * @type {String}
 * @private
 */
vjs.Component.prototype.id_;

/**
 * Get the component's ID
 *
 *     var id = myComponent.id();
 *
 * @return {String}
 */
vjs.Component.prototype.id = function(){
  return this.id_;
};

/**
 * The name for the component. Often used to reference the component.
 *
 * @type {String}
 * @private
 */
vjs.Component.prototype.name_;

/**
 * Get the component's name. The name is often used to reference the component.
 *
 *     var name = myComponent.name();
 *
 * @return {String}
 */
vjs.Component.prototype.name = function(){
  return this.name_;
};

/**
 * Array of child components
 *
 * @type {Array}
 * @private
 */
vjs.Component.prototype.children_;

/**
 * Get an array of all child components
 *
 *     var kids = myComponent.children();
 *
 * @return {Array} The children
 */
vjs.Component.prototype.children = function(){
  return this.children_;
};

/**
 * Object of child components by ID
 *
 * @type {Object}
 * @private
 */
vjs.Component.prototype.childIndex_;

/**
 * Returns a child component with the provided ID
 *
 * @return {vjs.Component}
 */
vjs.Component.prototype.getChildById = function(id){
  return this.childIndex_[id];
};

/**
 * Object of child components by name
 *
 * @type {Object}
 * @private
 */
vjs.Component.prototype.childNameIndex_;

/**
 * Returns a child component with the provided name
 *
 * @return {vjs.Component}
 */
vjs.Component.prototype.getChild = function(name){
  return this.childNameIndex_[name];
};

/**
 * Adds a child component inside this component
 *
 *     myComponent.el();
 *     // -> <div class='my-component'></div>
 *     myComonent.children();
 *     // [empty array]
 *
 *     var myButton = myComponent.addChild('MyButton');
 *     // -> <div class='my-component'><div class="my-button">myButton<div></div>
 *     // -> myButton === myComonent.children()[0];
 *
 * Pass in options for child constructors and options for children of the child
 *
 *     var myButton = myComponent.addChild('MyButton', {
 *       text: 'Press Me',
 *       children: {
 *         buttonChildExample: {
 *           buttonChildOption: true
 *         }
 *       }
 *     });
 *
 * @param {String|vjs.Component} child The class name or instance of a child to add
 * @param {Object=} options Options, including options to be passed to children of the child.
 * @return {vjs.Component} The child component (created by this process if a string was used)
 * @suppress {accessControls|checkRegExp|checkTypes|checkVars|const|constantProperty|deprecated|duplicate|es5Strict|fileoverviewTags|globalThis|invalidCasts|missingProperties|nonStandardJsDocs|strictModuleDepCheck|undefinedNames|undefinedVars|unknownDefines|uselessCode|visibility}
 */
vjs.Component.prototype.addChild = function(child, options){
  var component, componentClass, componentName, componentId;

  // If string, create new component with options
  if (typeof child === 'string') {

    componentName = child;

    // Make sure options is at least an empty object to protect against errors
    options = options || {};

    // Assume name of set is a lowercased name of the UI Class (PlayButton, etc.)
    componentClass = options['componentClass'] || vjs.capitalize(componentName);

    // Set name through options
    options['name'] = componentName;

    // Create a new object & element for this controls set
    // If there's no .player_, this is a player
    // Closure Compiler throws an 'incomplete alias' warning if we use the vjs variable directly.
    // Every class should be exported, so this should never be a problem here.
    component = new window['videojs'][componentClass](this.player_ || this, options);

  // child is a component instance
  } else {
    component = child;
  }

  this.children_.push(component);

  if (typeof component.id === 'function') {
    this.childIndex_[component.id()] = component;
  }

  // If a name wasn't used to create the component, check if we can use the
  // name function of the component
  componentName = componentName || (component.name && component.name());

  if (componentName) {
    this.childNameIndex_[componentName] = component;
  }

  // Add the UI object's element to the container div (box)
  // Having an element is not required
  if (typeof component['el'] === 'function' && component['el']()) {
    this.contentEl().appendChild(component['el']());
  }

  // Return so it can stored on parent object if desired.
  return component;
};

/**
 * Remove a child component from this component's list of children, and the
 * child component's element from this component's element
 *
 * @param  {vjs.Component} component Component to remove
 */
vjs.Component.prototype.removeChild = function(component){
  if (typeof component === 'string') {
    component = this.getChild(component);
  }

  if (!component || !this.children_) return;

  var childFound = false;
  for (var i = this.children_.length - 1; i >= 0; i--) {
    if (this.children_[i] === component) {
      childFound = true;
      this.children_.splice(i,1);
      break;
    }
  }

  if (!childFound) return;

  this.childIndex_[component.id] = null;
  this.childNameIndex_[component.name] = null;

  var compEl = component.el();
  if (compEl && compEl.parentNode === this.contentEl()) {
    this.contentEl().removeChild(component.el());
  }
};

/**
 * Add and initialize default child components from options
 *
 *     // when an instance of MyComponent is created, all children in options
 *     // will be added to the instance by their name strings and options
 *     MyComponent.prototype.options_.children = {
 *       myChildComponent: {
 *         myChildOption: true
 *       }
 *     }
 *
 *     // Or when creating the component
 *     var myComp = new MyComponent(player, {
 *       children: {
 *         myChildComponent: {
 *           myChildOption: true
 *         }
 *       }
 *     });
 *
 * The children option can also be an Array of child names or
 * child options objects (that also include a 'name' key).
 *
 *     var myComp = new MyComponent(player, {
 *       children: [
 *         'button',
 *         {
 *           name: 'button',
 *           someOtherOption: true
 *         }
 *       ]
 *     });
 *
 */
vjs.Component.prototype.initChildren = function(){
  var parent, children, child, name, opts;

  parent = this;
  children = this.options()['children'];

  if (children) {
    // Allow for an array of children details to passed in the options
    if (vjs.obj.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];

        if (typeof child == 'string') {
          name = child;
          opts = {};
        } else {
          name = child.name;
          opts = child;
        }

        parent[name] = parent.addChild(name, opts);
      }
    } else {
      vjs.obj.each(children, function(name, opts){
        // Allow for disabling default components
        // e.g. vjs.options['children']['posterImage'] = false
        if (opts === false) return;

        // Set property name on player. Could cause conflicts with other prop names, but it's worth making refs easy.
        parent[name] = parent.addChild(name, opts);
      });
    }
  }
};

/**
 * Allows sub components to stack CSS class names
 *
 * @return {String} The constructed class name
 */
vjs.Component.prototype.buildCSSClass = function(){
    // Child classes can include a function that does:
    // return 'CLASS NAME' + this._super();
    return '';
};

/* Events
============================================================================= */

/**
 * Add an event listener to this component's element
 *
 *     var myFunc = function(){
 *       var myPlayer = this;
 *       // Do something when the event is fired
 *     };
 *
 *     myPlayer.on("eventName", myFunc);
 *
 * The context will be the component.
 *
 * @param  {String}   type The event type e.g. 'click'
 * @param  {Function} fn   The event listener
 * @return {vjs.Component} self
 */
vjs.Component.prototype.on = function(type, fn){
  vjs.on(this.el_, type, vjs.bind(this, fn));
  return this;
};

/**
 * Remove an event listener from the component's element
 *
 *     myComponent.off("eventName", myFunc);
 *
 * @param  {String=}   type Event type. Without type it will remove all listeners.
 * @param  {Function=} fn   Event listener. Without fn it will remove all listeners for a type.
 * @return {vjs.Component}
 */
vjs.Component.prototype.off = function(type, fn){
  vjs.off(this.el_, type, fn);
  return this;
};

/**
 * Add an event listener to be triggered only once and then removed
 *
 * @param  {String}   type Event type
 * @param  {Function} fn   Event listener
 * @return {vjs.Component}
 */
vjs.Component.prototype.one = function(type, fn) {
  vjs.one(this.el_, type, vjs.bind(this, fn));
  return this;
};

/**
 * Trigger an event on an element
 *
 *     myComponent.trigger('eventName');
 *     myComponent.trigger({'type':'eventName'});
 *
 * @param  {Event|Object|String} event  A string (the type) or an event object with a type attribute
 * @return {vjs.Component}       self
 */
vjs.Component.prototype.trigger = function(event){
  vjs.trigger(this.el_, event);
  return this;
};

/* Ready
================================================================================ */
/**
 * Is the component loaded
 * This can mean different things depending on the component.
 *
 * @private
 * @type {Boolean}
 */
vjs.Component.prototype.isReady_;

/**
 * Trigger ready as soon as initialization is finished
 *
 * Allows for delaying ready. Override on a sub class prototype.
 * If you set this.isReadyOnInitFinish_ it will affect all components.
 * Specially used when waiting for the Flash player to asynchrnously load.
 *
 * @type {Boolean}
 * @private
 */
vjs.Component.prototype.isReadyOnInitFinish_ = true;

/**
 * List of ready listeners
 *
 * @type {Array}
 * @private
 */
vjs.Component.prototype.readyQueue_;

/**
 * Bind a listener to the component's ready state
 *
 * Different from event listeners in that if the ready event has already happend
 * it will trigger the function immediately.
 *
 * @param  {Function} fn Ready listener
 * @return {vjs.Component}
 */
vjs.Component.prototype.ready = function(fn){
  if (fn) {
    if (this.isReady_) {
      fn.call(this);
    } else {
      if (this.readyQueue_ === undefined) {
        this.readyQueue_ = [];
      }
      this.readyQueue_.push(fn);
    }
  }
  return this;
};

/**
 * Trigger the ready listeners
 *
 * @return {vjs.Component}
 */
vjs.Component.prototype.triggerReady = function(){
  this.isReady_ = true;

  var readyQueue = this.readyQueue_;

  if (readyQueue && readyQueue.length > 0) {

    for (var i = 0, j = readyQueue.length; i < j; i++) {
      readyQueue[i].call(this);
    }

    // Reset Ready Queue
    this.readyQueue_ = [];

    // Allow for using event listeners also, in case you want to do something everytime a source is ready.
    this.trigger('ready');
  }
};

/* Display
============================================================================= */

/**
 * Add a CSS class name to the component's element
 *
 * @param {String} classToAdd Classname to add
 * @return {vjs.Component}
 */
vjs.Component.prototype.addClass = function(classToAdd){
  vjs.addClass(this.el_, classToAdd);
  return this;
};

/**
 * Remove a CSS class name from the component's element
 *
 * @param {String} classToRemove Classname to remove
 * @return {vjs.Component}
 */
vjs.Component.prototype.removeClass = function(classToRemove){
  vjs.removeClass(this.el_, classToRemove);
  return this;
};

/**
 * Show the component element if hidden
 *
 * @return {vjs.Component}
 */
vjs.Component.prototype.show = function(){
  this.el_.style.display = 'block';
  return this;
};

/**
 * Hide the component element if currently showing
 *
 * @return {vjs.Component}
 */
vjs.Component.prototype.hide = function(){
  this.el_.style.display = 'none';
  return this;
};

/**
 * Lock an item in its visible state
 * To be used with fadeIn/fadeOut.
 *
 * @return {vjs.Component}
 * @private
 */
vjs.Component.prototype.lockShowing = function(){
  this.addClass('vjs-lock-showing');
  return this;
};

/**
 * Unlock an item to be hidden
 * To be used with fadeIn/fadeOut.
 *
 * @return {vjs.Component}
 * @private
 */
vjs.Component.prototype.unlockShowing = function(){
  this.removeClass('vjs-lock-showing');
  return this;
};

/**
 * Disable component by making it unshowable
 *
 * Currently private because we're movign towards more css-based states.
 * @private
 */
vjs.Component.prototype.disable = function(){
  this.hide();
  this.show = function(){};
};

/**
 * Set or get the width of the component (CSS values)
 *
 * Setting the video tag dimension values only works with values in pixels.
 * Percent values will not work.
 * Some percents can be used, but width()/height() will return the number + %,
 * not the actual computed width/height.
 *
 * @param  {Number|String=} num   Optional width number
 * @param  {Boolean} skipListeners Skip the 'resize' event trigger
 * @return {vjs.Component} This component, when setting the width
 * @return {Number|String} The width, when getting
 */
vjs.Component.prototype.width = function(num, skipListeners){
  return this.dimension('width', num, skipListeners);
};

/**
 * Get or set the height of the component (CSS values)
 *
 * Setting the video tag dimension values only works with values in pixels.
 * Percent values will not work.
 * Some percents can be used, but width()/height() will return the number + %,
 * not the actual computed width/height.
 *
 * @param  {Number|String=} num     New component height
 * @param  {Boolean=} skipListeners Skip the resize event trigger
 * @return {vjs.Component} This component, when setting the height
 * @return {Number|String} The height, when getting
 */
vjs.Component.prototype.height = function(num, skipListeners){
  return this.dimension('height', num, skipListeners);
};

/**
 * Set both width and height at the same time
 *
 * @param  {Number|String} width
 * @param  {Number|String} height
 * @return {vjs.Component} The component
 */
vjs.Component.prototype.dimensions = function(width, height){
  // Skip resize listeners on width for optimization
  return this.width(width, true).height(height);
};

/**
 * Get or set width or height
 *
 * This is the shared code for the width() and height() methods.
 * All for an integer, integer + 'px' or integer + '%';
 *
 * Known issue: Hidden elements officially have a width of 0. We're defaulting
 * to the style.width value and falling back to computedStyle which has the
 * hidden element issue. Info, but probably not an efficient fix:
 * http://www.foliotek.com/devblog/getting-the-width-of-a-hidden-element-with-jquery-using-width/
 *
 * @param  {String} widthOrHeight  'width' or 'height'
 * @param  {Number|String=} num     New dimension
 * @param  {Boolean=} skipListeners Skip resize event trigger
 * @return {vjs.Component} The component if a dimension was set
 * @return {Number|String} The dimension if nothing was set
 * @private
 */
vjs.Component.prototype.dimension = function(widthOrHeight, num, skipListeners){
  if (num !== undefined) {

    // Check if using css width/height (% or px) and adjust
    if ((''+num).indexOf('%') !== -1 || (''+num).indexOf('px') !== -1) {
      this.el_.style[widthOrHeight] = num;
    } else if (num === 'auto') {
      this.el_.style[widthOrHeight] = '';
    } else {
      this.el_.style[widthOrHeight] = num+'px';
    }

    // skipListeners allows us to avoid triggering the resize event when setting both width and height
    if (!skipListeners) { this.trigger('resize'); }

    // Return component
    return this;
  }

  // Not setting a value, so getting it
  // Make sure element exists
  if (!this.el_) return 0;

  // Get dimension value from style
  var val = this.el_.style[widthOrHeight];
  var pxIndex = val.indexOf('px');
  if (pxIndex !== -1) {
    // Return the pixel value with no 'px'
    return parseInt(val.slice(0,pxIndex), 10);

  // No px so using % or no style was set, so falling back to offsetWidth/height
  // If component has display:none, offset will return 0
  // TODO: handle display:none and no dimension style using px
  } else {

    return parseInt(this.el_['offset'+vjs.capitalize(widthOrHeight)], 10);

    // ComputedStyle version.
    // Only difference is if the element is hidden it will return
    // the percent value (e.g. '100%'')
    // instead of zero like offsetWidth returns.
    // var val = vjs.getComputedStyleValue(this.el_, widthOrHeight);
    // var pxIndex = val.indexOf('px');

    // if (pxIndex !== -1) {
    //   return val.slice(0, pxIndex);
    // } else {
    //   return val;
    // }
  }
};

/**
 * Fired when the width and/or height of the component changes
 * @event resize
 */
vjs.Component.prototype.onResize;

/**
 * Emit 'tap' events when touch events are supported
 *
 * This is used to support toggling the controls through a tap on the video.
 *
 * We're requireing them to be enabled because otherwise every component would
 * have this extra overhead unnecessarily, on mobile devices where extra
 * overhead is especially bad.
 * @private
 */
vjs.Component.prototype.emitTapEvents = function(){
  var touchStart, firstTouch, touchTime, couldBeTap, noTap,
      xdiff, ydiff, touchDistance, tapMovementThreshold;

  // Track the start time so we can determine how long the touch lasted
  touchStart = 0;
  firstTouch = null;

  // Maximum movement allowed during a touch event to still be considered a tap
  tapMovementThreshold = 22;

  this.on('touchstart', function(event) {
    // If more than one finger, don't consider treating this as a click
    if (event.touches.length === 1) {
      firstTouch = event.touches[0];
      // Record start time so we can detect a tap vs. "touch and hold"
      touchStart = new Date().getTime();
      // Reset couldBeTap tracking
      couldBeTap = true;
    }
  });

  this.on('touchmove', function(event) {
    // If more than one finger, don't consider treating this as a click
    if (event.touches.length > 1) {
      couldBeTap = false;
    } else if (firstTouch) {
      // Some devices will throw touchmoves for all but the slightest of taps.
      // So, if we moved only a small distance, this could still be a tap
      xdiff = event.touches[0].pageX - firstTouch.pageX;
      ydiff = event.touches[0].pageY - firstTouch.pageY;
      touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
      if (touchDistance > tapMovementThreshold) {
        couldBeTap = false;
      }
    }
  });

  noTap = function(){
    couldBeTap = false;
  };
  // TODO: Listen to the original target. http://youtu.be/DujfpXOKUp8?t=13m8s
  this.on('touchleave', noTap);
  this.on('touchcancel', noTap);

  // When the touch ends, measure how long it took and trigger the appropriate
  // event
  this.on('touchend', function(event) {
    firstTouch = null;
    // Proceed only if the touchmove/leave/cancel event didn't happen
    if (couldBeTap === true) {
      // Measure how long the touch lasted
      touchTime = new Date().getTime() - touchStart;
      // The touch needs to be quick in order to consider it a tap
      if (touchTime < 250) {
        event.preventDefault(); // Don't let browser turn this into a click
        this.trigger('tap');
        // It may be good to copy the touchend event object and change the
        // type to tap, if the other event properties aren't exact after
        // vjs.fixEvent runs (e.g. event.target)
      }
    }
  });
};

/**
 * Report user touch activity when touch events occur
 *
 * User activity is used to determine when controls should show/hide. It's
 * relatively simple when it comes to mouse events, because any mouse event
 * should show the controls. So we capture mouse events that bubble up to the
 * player and report activity when that happens.
 *
 * With touch events it isn't as easy. We can't rely on touch events at the
 * player level, because a tap (touchstart + touchend) on the video itself on
 * mobile devices is meant to turn controls off (and on). User activity is
 * checked asynchronously, so what could happen is a tap event on the video
 * turns the controls off, then the touchend event bubbles up to the player,
 * which if it reported user activity, would turn the controls right back on.
 * (We also don't want to completely block touch events from bubbling up)
 *
 * Also a touchmove, touch+hold, and anything other than a tap is not supposed
 * to turn the controls back on on a mobile device.
 *
 * Here we're setting the default component behavior to report user activity
 * whenever touch events happen, and this can be turned off by components that
 * want touch events to act differently.
 */
vjs.Component.prototype.enableTouchActivity = function() {
  var report, touchHolding, touchEnd;

  // listener for reporting that the user is active
  report = vjs.bind(this.player(), this.player().reportUserActivity);

  this.on('touchstart', function() {
    report();
    // For as long as the they are touching the device or have their mouse down,
    // we consider them active even if they're not moving their finger or mouse.
    // So we want to continue to update that they are active
    clearInterval(touchHolding);
    // report at the same interval as activityCheck
    touchHolding = setInterval(report, 250);
  });

  touchEnd = function(event) {
    report();
    // stop the interval that maintains activity if the touch is holding
    clearInterval(touchHolding);
  };

  this.on('touchmove', report);
  this.on('touchend', touchEnd);
  this.on('touchcancel', touchEnd);
};

/* Button - Base class for all buttons
================================================================================ */
/**
 * Base class for all buttons
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.Button = vjs.Component.extend({
  /**
   * @constructor
   * @inheritDoc
   */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    this.emitTapEvents();

    this.on('tap', this.onClick);
    this.on('click', this.onClick);
    this.on('focus', this.onFocus);
    this.on('blur', this.onBlur);
  }
});

vjs.Button.prototype.createEl = function(type, props){
  var el;

  // Add standard Aria and Tabindex info
  props = vjs.obj.merge({
    className: this.buildCSSClass(),
    'role': 'button',
    'aria-live': 'polite', // let the screen reader user know that the text of the button may change
    tabIndex: 0
  }, props);

  el = vjs.Component.prototype.createEl.call(this, type, props);

  // if innerHTML hasn't been overridden (bigPlayButton), add content elements
  if (!props.innerHTML) {
    this.contentEl_ = vjs.createEl('div', {
      className: 'vjs-control-content'
    });

    this.controlText_ = vjs.createEl('span', {
      className: 'vjs-control-text',
      innerHTML: this.localize(this.buttonText) || 'Need Text'
    });

    this.contentEl_.appendChild(this.controlText_);
    el.appendChild(this.contentEl_);
  }

  return el;
};

vjs.Button.prototype.buildCSSClass = function(){
  // TODO: Change vjs-control to vjs-button?
  return 'vjs-control ' + vjs.Component.prototype.buildCSSClass.call(this);
};

  // Click - Override with specific functionality for button
vjs.Button.prototype.onClick = function(){};

  // Focus - Add keyboard functionality to element
vjs.Button.prototype.onFocus = function(){
  vjs.on(document, 'keydown', vjs.bind(this, this.onKeyPress));
};

  // KeyPress (document level) - Trigger click when keys are pressed
vjs.Button.prototype.onKeyPress = function(event){
  // Check for space bar (32) or enter (13) keys
  if (event.which == 32 || event.which == 13) {
    event.preventDefault();
    this.onClick();
  }
};

// Blur - Remove keyboard triggers
vjs.Button.prototype.onBlur = function(){
  vjs.off(document, 'keydown', vjs.bind(this, this.onKeyPress));
};
/* Slider
================================================================================ */
/**
 * The base functionality for sliders like the volume bar and seek bar
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.Slider = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    // Set property names to bar and handle to match with the child Slider class is looking for
    this.bar = this.getChild(this.options_['barName']);
    this.handle = this.getChild(this.options_['handleName']);

    this.on('mousedown', this.onMouseDown);
    this.on('touchstart', this.onMouseDown);
    this.on('focus', this.onFocus);
    this.on('blur', this.onBlur);
    this.on('click', this.onClick);

    this.player_.on('controlsvisible', vjs.bind(this, this.update));

    player.on(this.playerEvent, vjs.bind(this, this.update));

    this.boundEvents = {};


    this.boundEvents.move = vjs.bind(this, this.onMouseMove);
    this.boundEvents.end = vjs.bind(this, this.onMouseUp);
  }
});

vjs.Slider.prototype.createEl = function(type, props) {
  props = props || {};
  // Add the slider element class to all sub classes
  props.className = props.className + ' vjs-slider';
  props = vjs.obj.merge({
    'role': 'slider',
    'aria-valuenow': 0,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    tabIndex: 0
  }, props);

  return vjs.Component.prototype.createEl.call(this, type, props);
};

vjs.Slider.prototype.onMouseDown = function(event){
  event.preventDefault();
  vjs.blockTextSelection();
  this.addClass('vjs-sliding');

  vjs.on(document, 'mousemove', this.boundEvents.move);
  vjs.on(document, 'mouseup', this.boundEvents.end);
  vjs.on(document, 'touchmove', this.boundEvents.move);
  vjs.on(document, 'touchend', this.boundEvents.end);

  this.onMouseMove(event);
};

// To be overridden by a subclass
vjs.Slider.prototype.onMouseMove = function(){};

vjs.Slider.prototype.onMouseUp = function() {
  vjs.unblockTextSelection();
  this.removeClass('vjs-sliding');

  vjs.off(document, 'mousemove', this.boundEvents.move, false);
  vjs.off(document, 'mouseup', this.boundEvents.end, false);
  vjs.off(document, 'touchmove', this.boundEvents.move, false);
  vjs.off(document, 'touchend', this.boundEvents.end, false);

  this.update();
};

vjs.Slider.prototype.update = function(){
  // In VolumeBar init we have a setTimeout for update that pops and update to the end of the
  // execution stack. The player is destroyed before then update will cause an error
  if (!this.el_) return;

  // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
  // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
  // var progress =  (this.player_.scrubbing) ? this.player_.getCache().currentTime / this.player_.duration() : this.player_.currentTime() / this.player_.duration();

  var barProgress,
      progress = this.getPercent(),
      handle = this.handle,
      bar = this.bar;

  // Protect against no duration and other division issues
  if (isNaN(progress)) { progress = 0; }

  barProgress = progress;

  // If there is a handle, we need to account for the handle in our calculation for progress bar
  // so that it doesn't fall short of or extend past the handle.
  if (handle) {

    var box = this.el_,
        boxWidth = box.offsetWidth,

        handleWidth = handle.el().offsetWidth,

        // The width of the handle in percent of the containing box
        // In IE, widths may not be ready yet causing NaN
        handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

        // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
        // There is a margin of half the handle's width on both sides.
        boxAdjustedPercent = 1 - handlePercent,

        // Adjust the progress that we'll use to set widths to the new adjusted box width
        adjustedProgress = progress * boxAdjustedPercent;

    // The bar does reach the left side, so we need to account for this in the bar's width
    barProgress = adjustedProgress + (handlePercent / 2);

    // Move the handle from the left based on the adjected progress
    handle.el().style.left = vjs.round(adjustedProgress * 100, 2) + '%';
  }

  // Set the new bar width
  if (bar) {
    bar.el().style.width = vjs.round(barProgress * 100, 2) + '%';
  }
};

vjs.Slider.prototype.calculateDistance = function(event){
  var el, box, boxX, boxY, boxW, boxH, handle, pageX, pageY;

  el = this.el_;
  box = vjs.findPosition(el);
  boxW = boxH = el.offsetWidth;
  handle = this.handle;

  if (this.options()['vertical']) {
    boxY = box.top;

    if (event.changedTouches) {
      pageY = event.changedTouches[0].pageY;
    } else {
      pageY = event.pageY;
    }

    if (handle) {
      var handleH = handle.el().offsetHeight;
      // Adjusted X and Width, so handle doesn't go outside the bar
      boxY = boxY + (handleH / 2);
      boxH = boxH - handleH;
    }

    // Percent that the click is through the adjusted area
    return Math.max(0, Math.min(1, ((boxY - pageY) + boxH) / boxH));

  } else {
    boxX = box.left;

    if (event.changedTouches) {
      pageX = event.changedTouches[0].pageX;
    } else {
      pageX = event.pageX;
    }

    if (handle) {
      var handleW = handle.el().offsetWidth;

      // Adjusted X and Width, so handle doesn't go outside the bar
      boxX = boxX + (handleW / 2);
      boxW = boxW - handleW;
    }

    // Percent that the click is through the adjusted area
    return Math.max(0, Math.min(1, (pageX - boxX) / boxW));
  }
};

vjs.Slider.prototype.onFocus = function(){
  vjs.on(document, 'keyup', vjs.bind(this, this.onKeyPress));
};

vjs.Slider.prototype.onKeyPress = function(event){
  if (event.which == 37 || event.which == 40) { // Left and Down Arrows
    event.preventDefault();
    this.stepBack();
  } else if (event.which == 38 || event.which == 39) { // Up and Right Arrows
    event.preventDefault();
    this.stepForward();
  }
};

vjs.Slider.prototype.onBlur = function(){
  vjs.off(document, 'keyup', vjs.bind(this, this.onKeyPress));
};

/**
 * Listener for click events on slider, used to prevent clicks
 *   from bubbling up to parent elements like button menus.
 * @param  {Object} event Event object
 */
vjs.Slider.prototype.onClick = function(event){
  event.stopImmediatePropagation();
  event.preventDefault();
};

/**
 * SeekBar Behavior includes play progress bar, and seek handle
 * Needed so it can determine seek position based on handle position/size
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.SliderHandle = vjs.Component.extend();

/**
 * Default value of the slider
 *
 * @type {Number}
 * @private
 */
vjs.SliderHandle.prototype.defaultValue = 0;

/** @inheritDoc */
vjs.SliderHandle.prototype.createEl = function(type, props) {
  props = props || {};
  // Add the slider element class to all sub classes
  props.className = props.className + ' vjs-slider-handle';
  props = vjs.obj.merge({
    innerHTML: '<span class="vjs-control-text">'+this.defaultValue+'</span>'
  }, props);

  return vjs.Component.prototype.createEl.call(this, 'div', props);
};
/* Menu
================================================================================ */
/**
 * The Menu component is used to build pop up menus, including subtitle and
 * captions selection menus.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.Menu = vjs.Component.extend();

/**
 * Add a menu item to the menu
 * @param {Object|String} component Component or component type to add
 */
vjs.Menu.prototype.addItem = function(component){
  this.addChild(component);
  component.on('click', vjs.bind(this, function(){
    this.unlockShowing();
  }));
};

/** @inheritDoc */
vjs.Menu.prototype.createEl = function(){
  var contentElType = this.options().contentElType || 'ul';
  this.contentEl_ = vjs.createEl(contentElType, {
    className: 'vjs-menu-content'
  });
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    append: this.contentEl_,
    className: 'vjs-menu'
  });
  el.appendChild(this.contentEl_);

  // Prevent clicks from bubbling up. Needed for Menu Buttons,
  // where a click on the parent is significant
  vjs.on(el, 'click', function(event){
    event.preventDefault();
    event.stopImmediatePropagation();
  });

  return el;
};

/**
 * The component for a menu item. `<li>`
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.MenuItem = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);
    this.selected(options['selected']);
  }
});

/** @inheritDoc */
vjs.MenuItem.prototype.createEl = function(type, props){
  return vjs.Button.prototype.createEl.call(this, 'li', vjs.obj.merge({
    className: 'vjs-menu-item',
    innerHTML: this.options_['label']
  }, props));
};

/**
 * Handle a click on the menu item, and set it to selected
 */
vjs.MenuItem.prototype.onClick = function(){
  this.selected(true);
};

/**
 * Set this menu item as selected or not
 * @param  {Boolean} selected
 */
vjs.MenuItem.prototype.selected = function(selected){
  if (selected) {
    this.addClass('vjs-selected');
    this.el_.setAttribute('aria-selected',true);
  } else {
    this.removeClass('vjs-selected');
    this.el_.setAttribute('aria-selected',false);
  }
};


/**
 * A button class with a popup menu
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.MenuButton = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);

    this.menu = this.createMenu();

    // Add list to element
    this.addChild(this.menu);

    // Automatically hide empty menu buttons
    if (this.items && this.items.length === 0) {
      this.hide();
    }

    this.on('keyup', this.onKeyPress);
    this.el_.setAttribute('aria-haspopup', true);
    this.el_.setAttribute('role', 'button');
  }
});

/**
 * Track the state of the menu button
 * @type {Boolean}
 * @private
 */
vjs.MenuButton.prototype.buttonPressed_ = false;

vjs.MenuButton.prototype.createMenu = function(){
  var menu = new vjs.Menu(this.player_);

  // Add a title list item to the top
  if (this.options().title) {
    menu.contentEl().appendChild(vjs.createEl('li', {
      className: 'vjs-menu-title',
      innerHTML: vjs.capitalize(this.options().title),
      tabindex: -1
    }));
  }

  this.items = this['createItems']();

  if (this.items) {
    // Add menu items to the menu
    for (var i = 0; i < this.items.length; i++) {
      menu.addItem(this.items[i]);
    }
  }

  return menu;
};

/**
 * Create the list of menu items. Specific to each subclass.
 */
vjs.MenuButton.prototype.createItems = function(){};

/** @inheritDoc */
vjs.MenuButton.prototype.buildCSSClass = function(){
  return this.className + ' vjs-menu-button ' + vjs.Button.prototype.buildCSSClass.call(this);
};

// Focus - Add keyboard functionality to element
// This function is not needed anymore. Instead, the keyboard functionality is handled by
// treating the button as triggering a submenu. When the button is pressed, the submenu
// appears. Pressing the button again makes the submenu disappear.
vjs.MenuButton.prototype.onFocus = function(){};
// Can't turn off list display that we turned on with focus, because list would go away.
vjs.MenuButton.prototype.onBlur = function(){};

vjs.MenuButton.prototype.onClick = function(){
  // When you click the button it adds focus, which will show the menu indefinitely.
  // So we'll remove focus when the mouse leaves the button.
  // Focus is needed for tab navigation.
  this.one('mouseout', vjs.bind(this, function(){
    this.menu.unlockShowing();
    this.el_.blur();
  }));
  if (this.buttonPressed_){
    this.unpressButton();
  } else {
    this.pressButton();
  }
};

vjs.MenuButton.prototype.onKeyPress = function(event){
  event.preventDefault();

  // Check for space bar (32) or enter (13) keys
  if (event.which == 32 || event.which == 13) {
    if (this.buttonPressed_){
      this.unpressButton();
    } else {
      this.pressButton();
    }
  // Check for escape (27) key
  } else if (event.which == 27){
    if (this.buttonPressed_){
      this.unpressButton();
    }
  }
};

vjs.MenuButton.prototype.pressButton = function(){
  this.buttonPressed_ = true;
  this.menu.lockShowing();
  this.el_.setAttribute('aria-pressed', true);
  if (this.items && this.items.length > 0) {
    this.items[0].el().focus(); // set the focus to the title of the submenu
  }
};

vjs.MenuButton.prototype.unpressButton = function(){
  this.buttonPressed_ = false;
  this.menu.unlockShowing();
  this.el_.setAttribute('aria-pressed', false);
};

/**
 * Custom MediaError to mimic the HTML5 MediaError
 * @param {Number} code The media error code
 */
vjs.MediaError = function(code){
  if (typeof code === 'number') {
    this.code = code;
  } else if (typeof code === 'string') {
    // default code is zero, so this is a custom error
    this.message = code;
  } else if (typeof code === 'object') { // object
    vjs.obj.merge(this, code);
  }

  if (!this.message) {
    this.message = vjs.MediaError.defaultMessages[this.code] || '';
  }
};

/**
 * The error code that refers two one of the defined
 * MediaError types
 * @type {Number}
 */
vjs.MediaError.prototype.code = 0;

/**
 * An optional message to be shown with the error.
 * Message is not part of the HTML5 video spec
 * but allows for more informative custom errors.
 * @type {String}
 */
vjs.MediaError.prototype.message = '';

/**
 * An optional status code that can be set by plugins
 * to allow even more detail about the error.
 * For example the HLS plugin might provide the specific
 * HTTP status code that was returned when the error
 * occurred, then allowing a custom error overlay
 * to display more information.
 * @type {[type]}
 */
vjs.MediaError.prototype.status = null;

vjs.MediaError.errorTypes = [
  'MEDIA_ERR_CUSTOM',            // = 0
  'MEDIA_ERR_ABORTED',           // = 1
  'MEDIA_ERR_NETWORK',           // = 2
  'MEDIA_ERR_DECODE',            // = 3
  'MEDIA_ERR_SRC_NOT_SUPPORTED', // = 4
  'MEDIA_ERR_ENCRYPTED'          // = 5
];

vjs.MediaError.defaultMessages = {
  1: 'You aborted the video playback',
  2: 'A network error caused the video download to fail part-way.',
  3: 'The video playback was aborted due to a corruption problem or because the video used features your browser did not support.',
  4: 'The video could not be loaded, either because the server or network failed or because the format is not supported.',
  5: 'The video is encrypted and we do not have the keys to decrypt it.'
};

// Add types as properties on MediaError
// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) {
  vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum;
  // values should be accessible on both the class and instance
  vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
}
(function(){
  var apiMap, specApi, browserApi, i;

  /**
   * Store the browser-specifc methods for the fullscreen API
   * @type {Object|undefined}
   * @private
   */
  vjs.browser.fullscreenAPI;

  // browser API methods
  // map approach from Screenful.js - https://github.com/sindresorhus/screenfull.js
  apiMap = [
    // Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
    [
      'requestFullscreen',
      'exitFullscreen',
      'fullscreenElement',
      'fullscreenEnabled',
      'fullscreenchange',
      'fullscreenerror'
    ],
    // WebKit
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    // Old WebKit (Safari 5.1)
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror'
    ],
    // Mozilla
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror'
    ],
    // Microsoft
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError'
    ]
  ];

  specApi = apiMap[0];

  // determine the supported set of functions
  for (i=0; i<apiMap.length; i++) {
    // check for exitFullscreen function
    if (apiMap[i][1] in document) {
      browserApi = apiMap[i];
      break;
    }
  }

  // map the browser API names to the spec API names
  // or leave vjs.browser.fullscreenAPI undefined
  if (browserApi) {
    vjs.browser.fullscreenAPI = {};

    for (i=0; i<browserApi.length; i++) {
      vjs.browser.fullscreenAPI[specApi[i]] = browserApi[i];
    }
  }

})();
/**
 * An instance of the `vjs.Player` class is created when any of the Video.js setup methods are used to initialize a video.
 *
 * ```js
 * var myPlayer = videojs('example_video_1');
 * ```
 *
 * In the following example, the `data-setup` attribute tells the Video.js library to create a player instance when the library is ready.
 *
 * ```html
 * <video id="example_video_1" data-setup='{}' controls>
 *   <source src="my-source.mp4" type="video/mp4">
 * </video>
 * ```
 *
 * After an instance has been created it can be accessed globally using `Video('example_video_1')`.
 *
 * @class
 * @extends vjs.Component
 */
vjs.Player = vjs.Component.extend({

  /**
   * player's constructor function
   *
   * @constructs
   * @method init
   * @param {Element} tag        The original video tag used for configuring options
   * @param {Object=} options    Player options
   * @param {Function=} ready    Ready callback function
   */
  init: function(tag, options, ready){
    this.tag = tag; // Store the original tag used to set options

    // Make sure tag ID exists
    tag.id = tag.id || 'vjs_video_' + vjs.guid++;

    // Store the tag attributes used to restore html5 element
    this.tagAttributes = tag && vjs.getElementAttributes(tag);

    // Set Options
    // The options argument overrides options set in the video tag
    // which overrides globally set options.
    // This latter part coincides with the load order
    // (tag must exist before Player)
    options = vjs.obj.merge(this.getTagSettings(tag), options);

    // Update Current Language
    this.language_ = options['language'] || vjs.options['language'];

    // Update Supported Languages
    this.languages_ = options['languages'] || vjs.options['languages'];

    // Cache for video property values.
    this.cache_ = {};

    // Set poster
    this.poster_ = options['poster'];
    // Set controls
    this.controls_ = options['controls'];
    // Original tag settings stored in options
    // now remove immediately so native controls don't flash.
    // May be turned back on by HTML5 tech if nativeControlsForTouch is true
    tag.controls = false;

    // we don't want the player to report touch activity on itself
    // see enableTouchActivity in Component
    options.reportTouchActivity = false;

    // Run base component initializing with new options.
    // Builds the element through createEl()
    // Inits and embeds any child components in opts
    vjs.Component.call(this, this, options, ready);

    // Update controls className. Can't do this when the controls are initially
    // set because the element doesn't exist yet.
    if (this.controls()) {
      this.addClass('vjs-controls-enabled');
    } else {
      this.addClass('vjs-controls-disabled');
    }

    // TODO: Make this smarter. Toggle user state between touching/mousing
    // using events, since devices can have both touch and mouse events.
    // if (vjs.TOUCH_ENABLED) {
    //   this.addClass('vjs-touch-enabled');
    // }

    // Make player easily findable by ID
    vjs.players[this.id_] = this;

    if (options['plugins']) {
      vjs.obj.each(options['plugins'], function(key, val){
        this[key](val);
      }, this);
    }

    this.listenForUserActivity();
  }
});

/**
 * The players's stored language code
 *
 * @type {String}
 * @private
 */
vjs.Player.prototype.language_;

/**
 * The player's language code
 * @param  {String} languageCode  The locale string
 * @return {String}             The locale string when getting
 * @return {vjs.Player}         self, when setting
 */
vjs.Player.prototype.language = function (languageCode) {
  if (languageCode === undefined) {
    return this.language_;
  }

  this.language_ = languageCode;
  return this;
};

/**
 * The players's stored language dictionary
 *
 * @type {Object}
 * @private
 */
vjs.Player.prototype.languages_;

vjs.Player.prototype.languages = function(){
  return this.languages_;
};

/**
 * Player instance options, surfaced using vjs.options
 * vjs.options = vjs.Player.prototype.options_
 * Make changes in vjs.options, not here.
 * All options should use string keys so they avoid
 * renaming by closure compiler
 * @type {Object}
 * @private
 */
vjs.Player.prototype.options_ = vjs.options;

/**
 * Destroys the video player and does any necessary cleanup
 *
 *     myPlayer.dispose();
 *
 * This is especially helpful if you are dynamically adding and removing videos
 * to/from the DOM.
 */
vjs.Player.prototype.dispose = function(){
  this.trigger('dispose');
  // prevent dispose from being called twice
  this.off('dispose');

  // Kill reference to this player
  vjs.players[this.id_] = null;
  if (this.tag && this.tag['player']) { this.tag['player'] = null; }
  if (this.el_ && this.el_['player']) { this.el_['player'] = null; }

  if (this.tech) { this.tech.dispose(); }

  // Component dispose
  vjs.Component.prototype.dispose.call(this);
};

vjs.Player.prototype.getTagSettings = function(tag){
  var options = {
    'sources': [],
    'tracks': []
  };

  vjs.obj.merge(options, vjs.getElementAttributes(tag));

  // Get tag children settings
  if (tag.hasChildNodes()) {
    var children, child, childName, i, j;

    children = tag.childNodes;

    for (i=0,j=children.length; i<j; i++) {
      child = children[i];
      // Change case needed: http://ejohn.org/blog/nodename-case-sensitivity/
      childName = child.nodeName.toLowerCase();
      if (childName === 'source') {
        options['sources'].push(vjs.getElementAttributes(child));
      } else if (childName === 'track') {
        options['tracks'].push(vjs.getElementAttributes(child));
      }
    }
  }

  return options;
};

vjs.Player.prototype.createEl = function(){
  var
    el = this.el_ = vjs.Component.prototype.createEl.call(this, 'div'),
    tag = this.tag,
    attrs;

  // Remove width/height attrs from tag so CSS can make it 100% width/height
  tag.removeAttribute('width');
  tag.removeAttribute('height');
  // Empty video tag tracks so the built-in player doesn't use them also.
  // This may not be fast enough to stop HTML5 browsers from reading the tags
  // so we'll need to turn off any default tracks if we're manually doing
  // captions and subtitles. videoElement.textTracks
  if (tag.hasChildNodes()) {
    var nodes, nodesLength, i, node, nodeName, removeNodes;

    nodes = tag.childNodes;
    nodesLength = nodes.length;
    removeNodes = [];

    while (nodesLength--) {
      node = nodes[nodesLength];
      nodeName = node.nodeName.toLowerCase();
      if (nodeName === 'track') {
        removeNodes.push(node);
      }
    }

    for (i=0; i<removeNodes.length; i++) {
      tag.removeChild(removeNodes[i]);
    }
  }

  // Copy over all the attributes from the tag, including ID and class
  // ID will now reference player box, not the video tag
  attrs = vjs.getElementAttributes(tag);
  vjs.obj.each(attrs, function(attr) {
    el.setAttribute(attr, attrs[attr]);
  });

  // Update tag id/class for use as HTML5 playback tech
  // Might think we should do this after embedding in container so .vjs-tech class
  // doesn't flash 100% width/height, but class only applies with .video-js parent
  tag.id += '_html5_api';
  tag.className = 'vjs-tech';

  // Make player findable on elements
  tag['player'] = el['player'] = this;
  // Default state of video is paused
  this.addClass('vjs-paused');

  // Make box use width/height of tag, or rely on default implementation
  // Enforce with CSS since width/height attrs don't work on divs
  this.width(this.options_['width'], true); // (true) Skip resize listener on load
  this.height(this.options_['height'], true);

  // Wrap video tag in div (el/box) container
  if (tag.parentNode) {
    tag.parentNode.insertBefore(el, tag);
  }
  vjs.insertFirst(tag, el); // Breaks iPhone, fixed in HTML5 setup.

  // The event listeners need to be added before the children are added
  // in the component init because the tech (loaded with mediaLoader) may
  // fire events, like loadstart, that these events need to capture.
  // Long term it might be better to expose a way to do this in component.init
  // like component.initEventListeners() that runs between el creation and
  // adding children
  this.el_ = el;
  this.on('loadstart', this.onLoadStart);
  this.on('waiting', this.onWaiting);
  this.on(['canplay', 'canplaythrough', 'playing', 'ended'], this.onWaitEnd);
  this.on('seeking', this.onSeeking);
  this.on('seeked', this.onSeeked);
  this.on('ended', this.onEnded);
  this.on('play', this.onPlay);
  this.on('firstplay', this.onFirstPlay);
  this.on('pause', this.onPause);
  this.on('progress', this.onProgress);
  this.on('durationchange', this.onDurationChange);
  this.on('fullscreenchange', this.onFullscreenChange);

  return el;
};

// /* Media Technology (tech)
// ================================================================================ */
// Load/Create an instance of playback technlogy including element and API methods
// And append playback element in player div.
vjs.Player.prototype.loadTech = function(techName, source){

  // Pause and remove current playback technology
  if (this.tech) {
    this.unloadTech();
  }

  // get rid of the HTML5 video tag as soon as we are using another tech
  if (techName !== 'Html5' && this.tag) {
    vjs.Html5.disposeMediaElement(this.tag);
    this.tag = null;
  }

  this.techName = techName;

  // Turn off API access because we're loading a new tech that might load asynchronously
  this.isReady_ = false;

  var techReady = function(){
    this.player_.triggerReady();
  };

  // Grab tech-specific options from player options and add source and parent element to use.
  var techOptions = vjs.obj.merge({ 'source': source, 'parentEl': this.el_ }, this.options_[techName.toLowerCase()]);

  if (source) {
    this.currentType_ = source.type;
    if (source.src == this.cache_.src && this.cache_.currentTime > 0) {
      techOptions['startTime'] = this.cache_.currentTime;
    }

    this.cache_.src = source.src;
  }

  // Initialize tech instance
  this.tech = new window['videojs'][techName](this, techOptions);

  this.tech.ready(techReady);
};

vjs.Player.prototype.unloadTech = function(){
  this.isReady_ = false;

  this.tech.dispose();

  this.tech = false;
};

// There's many issues around changing the size of a Flash (or other plugin) object.
// First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
// Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
// To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
// reloadTech: function(betweenFn){
//   vjs.log('unloadingTech')
//   this.unloadTech();
//   vjs.log('unloadedTech')
//   if (betweenFn) { betweenFn.call(); }
//   vjs.log('LoadingTech')
//   this.loadTech(this.techName, { src: this.cache_.src })
//   vjs.log('loadedTech')
// },


// /* Player event handlers (how the player reacts to certain events)
// ================================================================================ */

/**
 * Fired when the user agent begins looking for media data
 * @event loadstart
 */
vjs.Player.prototype.onLoadStart = function() {
  // TODO: Update to use `emptied` event instead. See #1277.

  // reset the error state
  this.error(null);

  // If it's already playing we want to trigger a firstplay event now.
  // The firstplay event relies on both the play and loadstart events
  // which can happen in any order for a new source
  if (!this.paused()) {
    this.trigger('firstplay');
  } else {
    // reset the hasStarted state
    this.hasStarted(false);
    this.one('play', function(){
      this.hasStarted(true);
    });
  }
};

vjs.Player.prototype.hasStarted_ = false;

vjs.Player.prototype.hasStarted = function(hasStarted){
  if (hasStarted !== undefined) {
    // only update if this is a new value
    if (this.hasStarted_ !== hasStarted) {
      this.hasStarted_ = hasStarted;
      if (hasStarted) {
        this.addClass('vjs-has-started');
        // trigger the firstplay event if this newly has played
        this.trigger('firstplay');
      } else {
        this.removeClass('vjs-has-started');
      }
    }
    return this;
  }
  return this.hasStarted_;
};

/**
 * Fired when the player has initial duration and dimension information
 * @event loadedmetadata
 */
vjs.Player.prototype.onLoadedMetaData;

/**
 * Fired when the player has downloaded data at the current playback position
 * @event loadeddata
 */
vjs.Player.prototype.onLoadedData;

/**
 * Fired when the player has finished downloading the source data
 * @event loadedalldata
 */
vjs.Player.prototype.onLoadedAllData;

/**
 * Fired whenever the media begins or resumes playback
 * @event play
 */
vjs.Player.prototype.onPlay = function(){
  this.removeClass('vjs-paused');
  this.addClass('vjs-playing');
};

/**
 * Fired whenever the media begins wating
 * @event waiting
 */
vjs.Player.prototype.onWaiting = function(){
  this.addClass('vjs-waiting');
};

/**
 * A handler for events that signal that waiting has eneded
 * which is not consistent between browsers. See #1351
 */
vjs.Player.prototype.onWaitEnd = function(){
  this.removeClass('vjs-waiting');
};

/**
 * Fired whenever the player is jumping to a new time
 * @event seeking
 */
vjs.Player.prototype.onSeeking = function(){
  this.addClass('vjs-seeking');
};

/**
 * Fired when the player has finished jumping to a new time
 * @event seeked
 */
vjs.Player.prototype.onSeeked = function(){
  this.removeClass('vjs-seeking');
};

/**
 * Fired the first time a video is played
 *
 * Not part of the HLS spec, and we're not sure if this is the best
 * implementation yet, so use sparingly. If you don't have a reason to
 * prevent playback, use `myPlayer.one('play');` instead.
 *
 * @event firstplay
 */
vjs.Player.prototype.onFirstPlay = function(){
    //If the first starttime attribute is specified
    //then we will start at the given offset in seconds
    if(this.options_['starttime']){
      this.currentTime(this.options_['starttime']);
    }

    this.addClass('vjs-has-started');
};

/**
 * Fired whenever the media has been paused
 * @event pause
 */
vjs.Player.prototype.onPause = function(){
  this.removeClass('vjs-playing');
  this.addClass('vjs-paused');
};

/**
 * Fired when the current playback position has changed
 *
 * During playback this is fired every 15-250 milliseconds, depnding on the
 * playback technology in use.
 * @event timeupdate
 */
vjs.Player.prototype.onTimeUpdate;

/**
 * Fired while the user agent is downloading media data
 * @event progress
 */
vjs.Player.prototype.onProgress = function(){
  // Add custom event for when source is finished downloading.
  if (this.bufferedPercent() == 1) {
    this.trigger('loadedalldata');
  }
};

/**
 * Fired when the end of the media resource is reached (currentTime == duration)
 * @event ended
 */
vjs.Player.prototype.onEnded = function(){
  if (this.options_['loop']) {
    this.currentTime(0);
    this.play();
  }
};

/**
 * Fired when the duration of the media resource is first known or changed
 * @event durationchange
 */
vjs.Player.prototype.onDurationChange = function(){
  // Allows for cacheing value instead of asking player each time.
  // We need to get the techGet response and check for a value so we don't
  // accidentally cause the stack to blow up.
  var duration = this.techGet('duration');
  if (duration) {
    if (duration < 0) {
      duration = Infinity;
    }
    this.duration(duration);
    // Determine if the stream is live and propagate styles down to UI.
    if (duration === Infinity) {
      this.addClass('vjs-live');
    } else {
      this.removeClass('vjs-live');
    }
  }
};

/**
 * Fired when the volume changes
 * @event volumechange
 */
vjs.Player.prototype.onVolumeChange;

/**
 * Fired when the player switches in or out of fullscreen mode
 * @event fullscreenchange
 */
vjs.Player.prototype.onFullscreenChange = function() {
  if (this.isFullscreen()) {
    this.addClass('vjs-fullscreen');
  } else {
    this.removeClass('vjs-fullscreen');
  }
};

// /* Player API
// ================================================================================ */

/**
 * Object for cached values.
 * @private
 */
vjs.Player.prototype.cache_;

vjs.Player.prototype.getCache = function(){
  return this.cache_;
};

// Pass values to the playback tech
vjs.Player.prototype.techCall = function(method, arg){
  // If it's not ready yet, call method when it is
  if (this.tech && !this.tech.isReady_) {
    this.tech.ready(function(){
      this[method](arg);
    });

  // Otherwise call method now
  } else {
    try {
      this.tech[method](arg);
    } catch(e) {
      vjs.log(e);
      throw e;
    }
  }
};

// Get calls can't wait for the tech, and sometimes don't need to.
vjs.Player.prototype.techGet = function(method){
  if (this.tech && this.tech.isReady_) {

    // Flash likes to die and reload when you hide or reposition it.
    // In these cases the object methods go away and we get errors.
    // When that happens we'll catch the errors and inform tech that it's not ready any more.
    try {
      return this.tech[method]();
    } catch(e) {
      // When building additional tech libs, an expected method may not be defined yet
      if (this.tech[method] === undefined) {
        vjs.log('Video.js: ' + method + ' method not defined for '+this.techName+' playback technology.', e);
      } else {
        // When a method isn't available on the object it throws a TypeError
        if (e.name == 'TypeError') {
          vjs.log('Video.js: ' + method + ' unavailable on '+this.techName+' playback technology element.', e);
          this.tech.isReady_ = false;
        } else {
          vjs.log(e);
        }
      }
      throw e;
    }
  }

  return;
};

/**
 * start media playback
 *
 *     myPlayer.play();
 *
 * @return {vjs.Player} self
 */
vjs.Player.prototype.play = function(){
  this.techCall('play');
  return this;
};

/**
 * Pause the video playback
 *
 *     myPlayer.pause();
 *
 * @return {vjs.Player} self
 */
vjs.Player.prototype.pause = function(){
  this.techCall('pause');
  return this;
};

/**
 * Check if the player is paused
 *
 *     var isPaused = myPlayer.paused();
 *     var isPlaying = !myPlayer.paused();
 *
 * @return {Boolean} false if the media is currently playing, or true otherwise
 */
vjs.Player.prototype.paused = function(){
  // The initial state of paused should be true (in Safari it's actually false)
  return (this.techGet('paused') === false) ? false : true;
};

/**
 * Get or set the current time (in seconds)
 *
 *     // get
 *     var whereYouAt = myPlayer.currentTime();
 *
 *     // set
 *     myPlayer.currentTime(120); // 2 minutes into the video
 *
 * @param  {Number|String=} seconds The time to seek to
 * @return {Number}        The time in seconds, when not setting
 * @return {vjs.Player}    self, when the current time is set
 */
vjs.Player.prototype.currentTime = function(seconds){
  if (seconds !== undefined) {

    this.techCall('setCurrentTime', seconds);

    return this;
  }

  // cache last currentTime and return. default to 0 seconds
  //
  // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
  // currentTime when scrubbing, but may not provide much performace benefit afterall.
  // Should be tested. Also something has to read the actual current time or the cache will
  // never get updated.
  return this.cache_.currentTime = (this.techGet('currentTime') || 0);
};

/**
 * Get the length in time of the video in seconds
 *
 *     var lengthOfVideo = myPlayer.duration();
 *
 * **NOTE**: The video must have started loading before the duration can be
 * known, and in the case of Flash, may not be known until the video starts
 * playing.
 *
 * @return {Number} The duration of the video in seconds
 */
vjs.Player.prototype.duration = function(seconds){
  if (seconds !== undefined) {

    // cache the last set value for optimiized scrubbing (esp. Flash)
    this.cache_.duration = parseFloat(seconds);

    return this;
  }

  if (this.cache_.duration === undefined) {
    this.onDurationChange();
  }

  return this.cache_.duration || 0;
};

// Calculates how much time is left. Not in spec, but useful.
vjs.Player.prototype.remainingTime = function(){
  return this.duration() - this.currentTime();
};

// http://dev.w3.org/html5/spec/video.html#dom-media-buffered
// Buffered returns a timerange object.
// Kind of like an array of portions of the video that have been downloaded.

/**
 * Get a TimeRange object with the times of the video that have been downloaded
 *
 * If you just want the percent of the video that's been downloaded,
 * use bufferedPercent.
 *
 *     // Number of different ranges of time have been buffered. Usually 1.
 *     numberOfRanges = bufferedTimeRange.length,
 *
 *     // Time in seconds when the first range starts. Usually 0.
 *     firstRangeStart = bufferedTimeRange.start(0),
 *
 *     // Time in seconds when the first range ends
 *     firstRangeEnd = bufferedTimeRange.end(0),
 *
 *     // Length in seconds of the first time range
 *     firstRangeLength = firstRangeEnd - firstRangeStart;
 *
 * @return {Object} A mock TimeRange object (following HTML spec)
 */
vjs.Player.prototype.buffered = function(){
  var buffered = this.techGet('buffered');

  if (!buffered || !buffered.length) {
    buffered = vjs.createTimeRange(0,0);
  }

  return buffered;
};

/**
 * Get the percent (as a decimal) of the video that's been downloaded
 *
 *     var howMuchIsDownloaded = myPlayer.bufferedPercent();
 *
 * 0 means none, 1 means all.
 * (This method isn't in the HTML5 spec, but it's very convenient)
 *
 * @return {Number} A decimal between 0 and 1 representing the percent
 */
vjs.Player.prototype.bufferedPercent = function(){
  var duration = this.duration(),
      buffered = this.buffered(),
      bufferedDuration = 0,
      start, end;

  if (!duration) {
    return 0;
  }

  for (var i=0; i<buffered.length; i++){
    start = buffered.start(i);
    end   = buffered.end(i);

    // buffered end can be bigger than duration by a very small fraction
    if (end > duration) {
      end = duration;
    }

    bufferedDuration += end - start;
  }

  return bufferedDuration / duration;
};

/**
 * Get the ending time of the last buffered time range
 *
 * This is used in the progress bar to encapsulate all time ranges.
 * @return {Number} The end of the last buffered time range
 */
vjs.Player.prototype.bufferedEnd = function(){
  var buffered = this.buffered(),
      duration = this.duration(),
      end = buffered.end(buffered.length-1);

  if (end > duration) {
    end = duration;
  }

  return end;
};

/**
 * Get or set the current volume of the media
 *
 *     // get
 *     var howLoudIsIt = myPlayer.volume();
 *
 *     // set
 *     myPlayer.volume(0.5); // Set volume to half
 *
 * 0 is off (muted), 1.0 is all the way up, 0.5 is half way.
 *
 * @param  {Number} percentAsDecimal The new volume as a decimal percent
 * @return {Number}                  The current volume, when getting
 * @return {vjs.Player}              self, when setting
 */
vjs.Player.prototype.volume = function(percentAsDecimal){
  var vol;

  if (percentAsDecimal !== undefined) {
    vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
    this.cache_.volume = vol;
    this.techCall('setVolume', vol);
    vjs.setLocalStorage('volume', vol);
    return this;
  }

  // Default to 1 when returning current volume.
  vol = parseFloat(this.techGet('volume'));
  return (isNaN(vol)) ? 1 : vol;
};


/**
 * Get the current muted state, or turn mute on or off
 *
 *     // get
 *     var isVolumeMuted = myPlayer.muted();
 *
 *     // set
 *     myPlayer.muted(true); // mute the volume
 *
 * @param  {Boolean=} muted True to mute, false to unmute
 * @return {Boolean} True if mute is on, false if not, when getting
 * @return {vjs.Player} self, when setting mute
 */
vjs.Player.prototype.muted = function(muted){
  if (muted !== undefined) {
    this.techCall('setMuted', muted);
    return this;
  }
  return this.techGet('muted') || false; // Default to false
};

// Check if current tech can support native fullscreen
// (e.g. with built in controls lik iOS, so not our flash swf)
vjs.Player.prototype.supportsFullScreen = function(){
  return this.techGet('supportsFullScreen') || false;
};

/**
 * is the player in fullscreen
 * @type {Boolean}
 * @private
 */
vjs.Player.prototype.isFullscreen_ = false;

/**
 * Check if the player is in fullscreen mode
 *
 *     // get
 *     var fullscreenOrNot = myPlayer.isFullscreen();
 *
 *     // set
 *     myPlayer.isFullscreen(true); // tell the player it's in fullscreen
 *
 * NOTE: As of the latest HTML5 spec, isFullscreen is no longer an official
 * property and instead document.fullscreenElement is used. But isFullscreen is
 * still a valuable property for internal player workings.
 *
 * @param  {Boolean=} isFS Update the player's fullscreen state
 * @return {Boolean} true if fullscreen, false if not
 * @return {vjs.Player} self, when setting
 */
vjs.Player.prototype.isFullscreen = function(isFS){
  if (isFS !== undefined) {
    this.isFullscreen_ = !!isFS;
    return this;
  }
  return this.isFullscreen_;
};

/**
 * Old naming for isFullscreen()
 * @deprecated for lowercase 's' version
 */
vjs.Player.prototype.isFullScreen = function(isFS){
  vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
  return this.isFullscreen(isFS);
};

/**
 * Increase the size of the video to full screen
 *
 *     myPlayer.requestFullscreen();
 *
 * In some browsers, full screen is not supported natively, so it enters
 * "full window mode", where the video fills the browser window.
 * In browsers and devices that support native full screen, sometimes the
 * browser's default controls will be shown, and not the Video.js custom skin.
 * This includes most mobile devices (iOS, Android) and older versions of
 * Safari.
 *
 * @return {vjs.Player} self
 */
vjs.Player.prototype.requestFullscreen = function(){
  var fsApi = vjs.browser.fullscreenAPI;

  this.isFullscreen(true);

  if (fsApi) {
    // the browser supports going fullscreen at the element level so we can
    // take the controls fullscreen as well as the video

    // Trigger fullscreenchange event after change
    // We have to specifically add this each time, and remove
    // when cancelling fullscreen. Otherwise if there's multiple
    // players on a page, they would all be reacting to the same fullscreen
    // events
    vjs.on(document, fsApi['fullscreenchange'], vjs.bind(this, function(e){
      this.isFullscreen(document[fsApi.fullscreenElement]);

      // If cancelling fullscreen, remove event listener.
      if (this.isFullscreen() === false) {
        vjs.off(document, fsApi['fullscreenchange'], arguments.callee);
      }

      this.trigger('fullscreenchange');
    }));

    this.el_[fsApi.requestFullscreen]();

  } else if (this.tech.supportsFullScreen()) {
    // we can't take the video.js controls fullscreen but we can go fullscreen
    // with native controls
    this.techCall('enterFullScreen');
  } else {
    // fullscreen isn't supported so we'll just stretch the video element to
    // fill the viewport
    this.enterFullWindow();
    this.trigger('fullscreenchange');
  }

  return this;
};

/**
 * Old naming for requestFullscreen
 * @deprecated for lower case 's' version
 */
vjs.Player.prototype.requestFullScreen = function(){
  vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
  return this.requestFullscreen();
};


/**
 * Return the video to its normal size after having been in full screen mode
 *
 *     myPlayer.exitFullscreen();
 *
 * @return {vjs.Player} self
 */
vjs.Player.prototype.exitFullscreen = function(){
  var fsApi = vjs.browser.fullscreenAPI;
  this.isFullscreen(false);

  // Check for browser element fullscreen support
  if (fsApi) {
    document[fsApi.exitFullscreen]();
  } else if (this.tech.supportsFullScreen()) {
   this.techCall('exitFullScreen');
  } else {
   this.exitFullWindow();
   this.trigger('fullscreenchange');
  }

  return this;
};

/**
 * Old naming for exitFullscreen
 * @deprecated for exitFullscreen
 */
vjs.Player.prototype.cancelFullScreen = function(){
  vjs.log.warn('player.cancelFullScreen() has been deprecated, use player.exitFullscreen()');
  return this.exitFullscreen();
};

// When fullscreen isn't supported we can stretch the video container to as wide as the browser will let us.
vjs.Player.prototype.enterFullWindow = function(){
  this.isFullWindow = true;

  // Storing original doc overflow value to return to when fullscreen is off
  this.docOrigOverflow = document.documentElement.style.overflow;

  // Add listener for esc key to exit fullscreen
  vjs.on(document, 'keydown', vjs.bind(this, this.fullWindowOnEscKey));

  // Hide any scroll bars
  document.documentElement.style.overflow = 'hidden';

  // Apply fullscreen styles
  vjs.addClass(document.body, 'vjs-full-window');

  this.trigger('enterFullWindow');
};
vjs.Player.prototype.fullWindowOnEscKey = function(event){
  if (event.keyCode === 27) {
    if (this.isFullscreen() === true) {
      this.exitFullscreen();
    } else {
      this.exitFullWindow();
    }
  }
};

vjs.Player.prototype.exitFullWindow = function(){
  this.isFullWindow = false;
  vjs.off(document, 'keydown', this.fullWindowOnEscKey);

  // Unhide scroll bars.
  document.documentElement.style.overflow = this.docOrigOverflow;

  // Remove fullscreen styles
  vjs.removeClass(document.body, 'vjs-full-window');

  // Resize the box, controller, and poster to original sizes
  // this.positionAll();
  this.trigger('exitFullWindow');
};

vjs.Player.prototype.selectSource = function(sources){

  // Loop through each playback technology in the options order
  for (var i=0,j=this.options_['techOrder'];i<j.length;i++) {
    var techName = vjs.capitalize(j[i]),
        tech = window['videojs'][techName];

    // Check if the current tech is defined before continuing
    if (!tech) {
      vjs.log.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
      continue;
    }

    // Check if the browser supports this technology
    if (tech.isSupported()) {
      // Loop through each source object
      for (var a=0,b=sources;a<b.length;a++) {
        var source = b[a];

        // Check if source can be played with this technology
        if (tech['canPlaySource'](source)) {
          return { source: source, tech: techName };
        }
      }
    }
  }

  return false;
};

/**
 * The source function updates the video source
 *
 * There are three types of variables you can pass as the argument.
 *
 * **URL String**: A URL to the the video file. Use this method if you are sure
 * the current playback technology (HTML5/Flash) can support the source you
 * provide. Currently only MP4 files can be used in both HTML5 and Flash.
 *
 *     myPlayer.src("http://www.example.com/path/to/video.mp4");
 *
 * **Source Object (or element):** A javascript object containing information
 * about the source file. Use this method if you want the player to determine if
 * it can support the file using the type information.
 *
 *     myPlayer.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });
 *
 * **Array of Source Objects:** To provide multiple versions of the source so
 * that it can be played using HTML5 across browsers you can use an array of
 * source objects. Video.js will detect which version is supported and load that
 * file.
 *
 *     myPlayer.src([
 *       { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
 *       { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
 *       { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
 *     ]);
 *
 * @param  {String|Object|Array=} source The source URL, object, or array of sources
 * @return {String} The current video source when getting
 * @return {String} The player when setting
 */
vjs.Player.prototype.src = function(source){
  if (source === undefined) {
    return this.techGet('src');
  }

  // case: Array of source objects to choose from and pick the best to play
  if (vjs.obj.isArray(source)) {
    this.sourceList_(source);

  // case: URL String (http://myvideo...)
  } else if (typeof source === 'string') {
    // create a source object from the string
    this.src({ src: source });

  // case: Source object { src: '', type: '' ... }
  } else if (source instanceof Object) {
    // check if the source has a type and the loaded tech cannot play the source
    // if there's no type we'll just try the current tech
    if (source.type && !window['videojs'][this.techName]['canPlaySource'](source)) {
      // create a source list with the current source and send through
      // the tech loop to check for a compatible technology
      this.sourceList_([source]);
    } else {
      this.cache_.src = source.src;
      this.currentType_ = source.type || '';

      // wait until the tech is ready to set the source
      this.ready(function(){
        this.techCall('src', source.src);

        if (this.options_['preload'] == 'auto') {
          this.load();
        }

        if (this.options_['autoplay']) {
          this.play();
        }
      });
    }
  }

  return this;
};

/**
 * Handle an array of source objects
 * @param  {[type]} sources Array of source objects
 * @private
 */
vjs.Player.prototype.sourceList_ = function(sources){
  var sourceTech = this.selectSource(sources);

  if (sourceTech) {
    if (sourceTech.tech === this.techName) {
      // if this technology is already loaded, set the source
      this.src(sourceTech.source);
    } else {
      // load this technology with the chosen source
      this.loadTech(sourceTech.tech, sourceTech.source);
    }
  } else {
    this.error({ code: 4, message: this.localize(this.options()['notSupportedMessage']) });
    // we could not find an appropriate tech, but let's still notify the delegate that this is it
    // this needs a better comment about why this is needed
    this.triggerReady();
  }
};

// Begin loading the src data
// http://dev.w3.org/html5/spec/video.html#dom-media-load
vjs.Player.prototype.load = function(){
  this.techCall('load');
  return this;
};

// http://dev.w3.org/html5/spec/video.html#dom-media-currentsrc
vjs.Player.prototype.currentSrc = function(){
  return this.techGet('currentSrc') || this.cache_.src || '';
};

/**
 * Get the current source type e.g. video/mp4
 * This can allow you rebuild the current source object so that you could load the same
 * source and tech later
 * @return {String} The source MIME type
 */
vjs.Player.prototype.currentType = function(){
    return this.currentType_ || '';
};

// Attributes/Options
vjs.Player.prototype.preload = function(value){
  if (value !== undefined) {
    this.techCall('setPreload', value);
    this.options_['preload'] = value;
    return this;
  }
  return this.techGet('preload');
};
vjs.Player.prototype.autoplay = function(value){
  if (value !== undefined) {
    this.techCall('setAutoplay', value);
    this.options_['autoplay'] = value;
    return this;
  }
  return this.techGet('autoplay', value);
};
vjs.Player.prototype.loop = function(value){
  if (value !== undefined) {
    this.techCall('setLoop', value);
    this.options_['loop'] = value;
    return this;
  }
  return this.techGet('loop');
};

/**
 * the url of the poster image source
 * @type {String}
 * @private
 */
vjs.Player.prototype.poster_;

/**
 * get or set the poster image source url
 *
 * ##### EXAMPLE:
 *
 *     // getting
 *     var currentPoster = myPlayer.poster();
 *
 *     // setting
 *     myPlayer.poster('http://example.com/myImage.jpg');
 *
 * @param  {String=} [src] Poster image source URL
 * @return {String} poster URL when getting
 * @return {vjs.Player} self when setting
 */
vjs.Player.prototype.poster = function(src){
  if (src === undefined) {
    return this.poster_;
  }

  // update the internal poster variable
  this.poster_ = src;

  // update the tech's poster
  this.techCall('setPoster', src);

  // alert components that the poster has been set
  this.trigger('posterchange');
};

/**
 * Whether or not the controls are showing
 * @type {Boolean}
 * @private
 */
vjs.Player.prototype.controls_;

/**
 * Get or set whether or not the controls are showing.
 * @param  {Boolean} controls Set controls to showing or not
 * @return {Boolean}    Controls are showing
 */
vjs.Player.prototype.controls = function(bool){
  if (bool !== undefined) {
    bool = !!bool; // force boolean
    // Don't trigger a change event unless it actually changed
    if (this.controls_ !== bool) {
      this.controls_ = bool;
      if (bool) {
        this.removeClass('vjs-controls-disabled');
        this.addClass('vjs-controls-enabled');
        this.trigger('controlsenabled');
      } else {
        this.removeClass('vjs-controls-enabled');
        this.addClass('vjs-controls-disabled');
        this.trigger('controlsdisabled');
      }
    }
    return this;
  }
  return this.controls_;
};

vjs.Player.prototype.usingNativeControls_;

/**
 * Toggle native controls on/off. Native controls are the controls built into
 * devices (e.g. default iPhone controls), Flash, or other techs
 * (e.g. Vimeo Controls)
 *
 * **This should only be set by the current tech, because only the tech knows
 * if it can support native controls**
 *
 * @param  {Boolean} bool    True signals that native controls are on
 * @return {vjs.Player}      Returns the player
 * @private
 */
vjs.Player.prototype.usingNativeControls = function(bool){
  if (bool !== undefined) {
    bool = !!bool; // force boolean
    // Don't trigger a change event unless it actually changed
    if (this.usingNativeControls_ !== bool) {
      this.usingNativeControls_ = bool;
      if (bool) {
        this.addClass('vjs-using-native-controls');

        /**
         * player is using the native device controls
         *
         * @event usingnativecontrols
         * @memberof vjs.Player
         * @instance
         * @private
         */
        this.trigger('usingnativecontrols');
      } else {
        this.removeClass('vjs-using-native-controls');

        /**
         * player is using the custom HTML controls
         *
         * @event usingcustomcontrols
         * @memberof vjs.Player
         * @instance
         * @private
         */
        this.trigger('usingcustomcontrols');
      }
    }
    return this;
  }
  return this.usingNativeControls_;
};

/**
 * Store the current media error
 * @type {Object}
 * @private
 */
vjs.Player.prototype.error_ = null;

/**
 * Set or get the current MediaError
 * @param  {*} err A MediaError or a String/Number to be turned into a MediaError
 * @return {vjs.MediaError|null}     when getting
 * @return {vjs.Player}              when setting
 */
vjs.Player.prototype.error = function(err){
  if (err === undefined) {
    return this.error_;
  }

  // restoring to default
  if (err === null) {
    this.error_ = err;
    this.removeClass('vjs-error');
    return this;
  }

  // error instance
  if (err instanceof vjs.MediaError) {
    this.error_ = err;
  } else {
    this.error_ = new vjs.MediaError(err);
  }

  // fire an error event on the player
  this.trigger('error');

  // add the vjs-error classname to the player
  this.addClass('vjs-error');

  // log the name of the error type and any message
  // ie8 just logs "[object object]" if you just log the error object
  vjs.log.error('(CODE:'+this.error_.code+' '+vjs.MediaError.errorTypes[this.error_.code]+')', this.error_.message, this.error_);

  return this;
};

vjs.Player.prototype.ended = function(){ return this.techGet('ended'); };
vjs.Player.prototype.seeking = function(){ return this.techGet('seeking'); };

// When the player is first initialized, trigger activity so components
// like the control bar show themselves if needed
vjs.Player.prototype.userActivity_ = true;
vjs.Player.prototype.reportUserActivity = function(event){
  this.userActivity_ = true;
};

vjs.Player.prototype.userActive_ = true;
vjs.Player.prototype.userActive = function(bool){
  if (bool !== undefined) {
    bool = !!bool;
    if (bool !== this.userActive_) {
      this.userActive_ = bool;
      if (bool) {
        // If the user was inactive and is now active we want to reset the
        // inactivity timer
        this.userActivity_ = true;
        this.removeClass('vjs-user-inactive');
        this.addClass('vjs-user-active');
        this.trigger('useractive');
      } else {
        // We're switching the state to inactive manually, so erase any other
        // activity
        this.userActivity_ = false;

        // Chrome/Safari/IE have bugs where when you change the cursor it can
        // trigger a mousemove event. This causes an issue when you're hiding
        // the cursor when the user is inactive, and a mousemove signals user
        // activity. Making it impossible to go into inactive mode. Specifically
        // this happens in fullscreen when we really need to hide the cursor.
        //
        // When this gets resolved in ALL browsers it can be removed
        // https://code.google.com/p/chromium/issues/detail?id=103041
        if(this.tech) {
          this.tech.one('mousemove', function(e){
            e.stopPropagation();
            e.preventDefault();
          });
        }

        this.removeClass('vjs-user-active');
        this.addClass('vjs-user-inactive');
        this.trigger('userinactive');
      }
    }
    return this;
  }
  return this.userActive_;
};

vjs.Player.prototype.listenForUserActivity = function(){
  var onActivity, onMouseMove, onMouseDown, mouseInProgress, onMouseUp,
      activityCheck, inactivityTimeout, lastMoveX, lastMoveY;

  onActivity = vjs.bind(this, this.reportUserActivity);

  onMouseMove = function(e) {
    // #1068 - Prevent mousemove spamming
    // Chrome Bug: https://code.google.com/p/chromium/issues/detail?id=366970
    if(e.screenX != lastMoveX || e.screenY != lastMoveY) {
      lastMoveX = e.screenX;
      lastMoveY = e.screenY;
      onActivity();
    }
  };

  onMouseDown = function() {
    onActivity();
    // For as long as the they are touching the device or have their mouse down,
    // we consider them active even if they're not moving their finger or mouse.
    // So we want to continue to update that they are active
    clearInterval(mouseInProgress);
    // Setting userActivity=true now and setting the interval to the same time
    // as the activityCheck interval (250) should ensure we never miss the
    // next activityCheck
    mouseInProgress = setInterval(onActivity, 250);
  };

  onMouseUp = function(event) {
    onActivity();
    // Stop the interval that maintains activity if the mouse/touch is down
    clearInterval(mouseInProgress);
  };

  // Any mouse movement will be considered user activity
  this.on('mousedown', onMouseDown);
  this.on('mousemove', onMouseMove);
  this.on('mouseup', onMouseUp);

  // Listen for keyboard navigation
  // Shouldn't need to use inProgress interval because of key repeat
  this.on('keydown', onActivity);
  this.on('keyup', onActivity);

  // Run an interval every 250 milliseconds instead of stuffing everything into
  // the mousemove/touchmove function itself, to prevent performance degradation.
  // `this.reportUserActivity` simply sets this.userActivity_ to true, which
  // then gets picked up by this loop
  // http://ejohn.org/blog/learning-from-twitter/
  activityCheck = setInterval(vjs.bind(this, function() {
    // Check to see if mouse/touch activity has happened
    if (this.userActivity_) {
      // Reset the activity tracker
      this.userActivity_ = false;

      // If the user state was inactive, set the state to active
      this.userActive(true);

      // Clear any existing inactivity timeout to start the timer over
      clearTimeout(inactivityTimeout);

      // In X seconds, if no more activity has occurred the user will be
      // considered inactive
      inactivityTimeout = setTimeout(vjs.bind(this, function() {
        // Protect against the case where the inactivityTimeout can trigger just
        // before the next user activity is picked up by the activityCheck loop
        // causing a flicker
        if (!this.userActivity_) {
          this.userActive(false);
        }
      }), 2000);
    }
  }), 250);

  // Clean up the intervals when we kill the player
  this.on('dispose', function(){
    clearInterval(activityCheck);
    clearTimeout(inactivityTimeout);
  });
};

vjs.Player.prototype.playbackRate = function(rate) {
  if (rate !== undefined) {
    this.techCall('setPlaybackRate', rate);
    return this;
  }

  if (this.tech && this.tech.features && this.tech.features['playbackRate']) {
    return this.techGet('playbackRate');
  } else {
    return 1.0;
  }

};

// Methods to add support for
// networkState: function(){ return this.techCall('networkState'); },
// readyState: function(){ return this.techCall('readyState'); },
// initialTime: function(){ return this.techCall('initialTime'); },
// startOffsetTime: function(){ return this.techCall('startOffsetTime'); },
// played: function(){ return this.techCall('played'); },
// seekable: function(){ return this.techCall('seekable'); },
// videoTracks: function(){ return this.techCall('videoTracks'); },
// audioTracks: function(){ return this.techCall('audioTracks'); },
// videoWidth: function(){ return this.techCall('videoWidth'); },
// videoHeight: function(){ return this.techCall('videoHeight'); },
// defaultPlaybackRate: function(){ return this.techCall('defaultPlaybackRate'); },
// mediaGroup: function(){ return this.techCall('mediaGroup'); },
// controller: function(){ return this.techCall('controller'); },
// defaultMuted: function(){ return this.techCall('defaultMuted'); }

// TODO
// currentSrcList: the array of sources including other formats and bitrates
// playList: array of source lists in order of playback
/**
 * Container of main controls
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 * @extends vjs.Component
 */
vjs.ControlBar = vjs.Component.extend();

vjs.ControlBar.prototype.options_ = {
  loadEvent: 'play',
  children: {
    'playToggle': {},
    'currentTimeDisplay': {},
    'timeDivider': {},
    'durationDisplay': {},
    'remainingTimeDisplay': {},
    'liveDisplay': {},
    'progressControl': {},
    'fullscreenToggle': {},
    'volumeControl': {},
    'muteToggle': {},
    // 'volumeMenuButton': {},
    'playbackRateMenuButton': {}
  }
};

vjs.ControlBar.prototype.createEl = function(){
  return vjs.createEl('div', {
    className: 'vjs-control-bar'
  });
};
/**
 * Displays the live indicator
 * TODO - Future make it click to snap to live
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.LiveDisplay = vjs.Component.extend({
  init: function(player, options){
    vjs.Component.call(this, player, options);
  }
});

vjs.LiveDisplay.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-live-controls vjs-control'
  });

  this.contentEl_ = vjs.createEl('div', {
    className: 'vjs-live-display',
    innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE'),
    'aria-live': 'off'
  });

  el.appendChild(this.contentEl_);

  return el;
};
/**
 * Button to toggle between play and pause
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.PlayToggle = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);

    player.on('play', vjs.bind(this, this.onPlay));
    player.on('pause', vjs.bind(this, this.onPause));
  }
});

vjs.PlayToggle.prototype.buttonText = 'Play';

vjs.PlayToggle.prototype.buildCSSClass = function(){
  return 'vjs-play-control ' + vjs.Button.prototype.buildCSSClass.call(this);
};

// OnClick - Toggle between play and pause
vjs.PlayToggle.prototype.onClick = function(){
  if (this.player_.paused()) {
    this.player_.play();
  } else {
    this.player_.pause();
  }
};

  // OnPlay - Add the vjs-playing class to the element so it can change appearance
vjs.PlayToggle.prototype.onPlay = function(){
  vjs.removeClass(this.el_, 'vjs-paused');
  vjs.addClass(this.el_, 'vjs-playing');
  this.el_.children[0].children[0].innerHTML = this.localize('Pause'); // change the button text to "Pause"
};

  // OnPause - Add the vjs-paused class to the element so it can change appearance
vjs.PlayToggle.prototype.onPause = function(){
  vjs.removeClass(this.el_, 'vjs-playing');
  vjs.addClass(this.el_, 'vjs-paused');
  this.el_.children[0].children[0].innerHTML = this.localize('Play'); // change the button text to "Play"
};
/**
 * Displays the current time
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.CurrentTimeDisplay = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    player.on('timeupdate', vjs.bind(this, this.updateContent));
  }
});

vjs.CurrentTimeDisplay.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-current-time vjs-time-controls vjs-control'
  });

  this.contentEl_ = vjs.createEl('div', {
    className: 'vjs-current-time-display',
    innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00', // label the current time for screen reader users
    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
  });

  el.appendChild(this.contentEl_);
  return el;
};

vjs.CurrentTimeDisplay.prototype.updateContent = function(){
  // Allows for smooth scrubbing, when player can't keep up.
  var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
  this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Current Time') + '</span> ' + vjs.formatTime(time, this.player_.duration());
};

/**
 * Displays the duration
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.DurationDisplay = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    // this might need to be changed to 'durationchange' instead of 'timeupdate' eventually,
    // however the durationchange event fires before this.player_.duration() is set,
    // so the value cannot be written out using this method.
    // Once the order of durationchange and this.player_.duration() being set is figured out,
    // this can be updated.
    player.on('timeupdate', vjs.bind(this, this.updateContent));
  }
});

vjs.DurationDisplay.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-duration vjs-time-controls vjs-control'
  });

  this.contentEl_ = vjs.createEl('div', {
    className: 'vjs-duration-display',
    innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + '0:00', // label the duration time for screen reader users
    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
  });

  el.appendChild(this.contentEl_);
  return el;
};

vjs.DurationDisplay.prototype.updateContent = function(){
  var duration = this.player_.duration();
  if (duration) {
      this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + vjs.formatTime(duration); // label the duration time for screen reader users
  }
};

/**
 * The separator between the current time and duration
 *
 * Can be hidden if it's not needed in the design.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.TimeDivider = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);
  }
});

vjs.TimeDivider.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-time-divider',
    innerHTML: '<div><span>/</span></div>'
  });
};

/**
 * Displays the time left in the video
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.RemainingTimeDisplay = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    player.on('timeupdate', vjs.bind(this, this.updateContent));
  }
});

vjs.RemainingTimeDisplay.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-remaining-time vjs-time-controls vjs-control'
  });

  this.contentEl_ = vjs.createEl('div', {
    className: 'vjs-remaining-time-display',
    innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-0:00', // label the remaining time for screen reader users
    'aria-live': 'off' // tell screen readers not to automatically read the time as it changes
  });

  el.appendChild(this.contentEl_);
  return el;
};

vjs.RemainingTimeDisplay.prototype.updateContent = function(){
  if (this.player_.duration()) {
    this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-'+ vjs.formatTime(this.player_.remainingTime());
  }

  // Allows for smooth scrubbing, when player can't keep up.
  // var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
  // this.contentEl_.innerHTML = vjs.formatTime(time, this.player_.duration());
};
/**
 * Toggle fullscreen video
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @extends vjs.Button
 */
vjs.FullscreenToggle = vjs.Button.extend({
  /**
   * @constructor
   * @memberof vjs.FullscreenToggle
   * @instance
   */
  init: function(player, options){
    vjs.Button.call(this, player, options);
  }
});

vjs.FullscreenToggle.prototype.buttonText = 'Fullscreen';

vjs.FullscreenToggle.prototype.buildCSSClass = function(){
  return 'vjs-fullscreen-control ' + vjs.Button.prototype.buildCSSClass.call(this);
};

vjs.FullscreenToggle.prototype.onClick = function(){
  if (!this.player_.isFullscreen()) {
    this.player_.requestFullscreen();
    this.controlText_.innerHTML = this.localize('Non-Fullscreen');
  } else {
    this.player_.exitFullscreen();
    this.controlText_.innerHTML = this.localize('Fullscreen');
  }
};
/**
 * The Progress Control component contains the seek bar, load progress,
 * and play progress
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.ProgressControl = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);
  }
});

vjs.ProgressControl.prototype.options_ = {
  children: {
    'seekBar': {}
  }
};

vjs.ProgressControl.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-progress-control vjs-control'
  });
};

/**
 * Seek Bar and holder for the progress bars
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.SeekBar = vjs.Slider.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Slider.call(this, player, options);
    player.on('timeupdate', vjs.bind(this, this.updateARIAAttributes));
    player.ready(vjs.bind(this, this.updateARIAAttributes));
  }
});

vjs.SeekBar.prototype.options_ = {
  children: {
    'loadProgressBar': {},
    'playProgressBar': {},
    'seekHandle': {}
  },
  'barName': 'playProgressBar',
  'handleName': 'seekHandle'
};

vjs.SeekBar.prototype.playerEvent = 'timeupdate';

vjs.SeekBar.prototype.createEl = function(){
  return vjs.Slider.prototype.createEl.call(this, 'div', {
    className: 'vjs-progress-holder',
    'aria-label': 'video progress bar'
  });
};

vjs.SeekBar.prototype.updateARIAAttributes = function(){
    // Allows for smooth scrubbing, when player can't keep up.
    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute('aria-valuenow',vjs.round(this.getPercent()*100, 2)); // machine readable value of progress bar (percentage complete)
    this.el_.setAttribute('aria-valuetext',vjs.formatTime(time, this.player_.duration())); // human readable value of progress bar (time complete)
};

vjs.SeekBar.prototype.getPercent = function(){
  return this.player_.currentTime() / this.player_.duration();
};

vjs.SeekBar.prototype.onMouseDown = function(event){
  vjs.Slider.prototype.onMouseDown.call(this, event);

  this.player_.scrubbing = true;

  this.videoWasPlaying = !this.player_.paused();
  this.player_.pause();
};

vjs.SeekBar.prototype.onMouseMove = function(event){
  var newTime = this.calculateDistance(event) * this.player_.duration();

  // Don't let video end while scrubbing.
  if (newTime == this.player_.duration()) { newTime = newTime - 0.1; }

  // Set new time (tell player to seek to new time)
  this.player_.currentTime(newTime);
};

vjs.SeekBar.prototype.onMouseUp = function(event){
  vjs.Slider.prototype.onMouseUp.call(this, event);

  this.player_.scrubbing = false;
  if (this.videoWasPlaying) {
    this.player_.play();
  }
};

vjs.SeekBar.prototype.stepForward = function(){
  this.player_.currentTime(this.player_.currentTime() + 5); // more quickly fast forward for keyboard-only users
};

vjs.SeekBar.prototype.stepBack = function(){
  this.player_.currentTime(this.player_.currentTime() - 5); // more quickly rewind for keyboard-only users
};

/**
 * Shows load progress
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.LoadProgressBar = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);
    player.on('progress', vjs.bind(this, this.update));
  }
});

vjs.LoadProgressBar.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-load-progress',
    innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
  });
};

vjs.LoadProgressBar.prototype.update = function(){
  var i, start, end, part,
      buffered = this.player_.buffered(),
      duration = this.player_.duration(),
      bufferedEnd = this.player_.bufferedEnd(),
      children = this.el_.children,
      // get the percent width of a time compared to the total end
      percentify = function (time, end){
        var percent = (time / end) || 0; // no NaN
        return (percent * 100) + '%';
      };

  // update the width of the progress bar
  this.el_.style.width = percentify(bufferedEnd, duration);

  // add child elements to represent the individual buffered time ranges
  for (i = 0; i < buffered.length; i++) {
    start = buffered.start(i),
    end = buffered.end(i),
    part = children[i];

    if (!part) {
      part = this.el_.appendChild(vjs.createEl())
    };

    // set the percent based on the width of the progress bar (bufferedEnd)
    part.style.left = percentify(start, bufferedEnd);
    part.style.width = percentify(end - start, bufferedEnd);
  };

  // remove unused buffered range elements
  for (i = children.length; i > buffered.length; i--) {
    this.el_.removeChild(children[i-1]);
  }
};

/**
 * Shows play progress
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.PlayProgressBar = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);
  }
});

vjs.PlayProgressBar.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-play-progress',
    innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
  });
};

/**
 * The Seek Handle shows the current position of the playhead during playback,
 * and can be dragged to adjust the playhead.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.SeekHandle = vjs.SliderHandle.extend({
  init: function(player, options) {
    vjs.SliderHandle.call(this, player, options);
    player.on('timeupdate', vjs.bind(this, this.updateContent));
  }
});

/**
 * The default value for the handle content, which may be read by screen readers
 *
 * @type {String}
 * @private
 */
vjs.SeekHandle.prototype.defaultValue = '00:00';

/** @inheritDoc */
vjs.SeekHandle.prototype.createEl = function() {
  return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
    className: 'vjs-seek-handle',
    'aria-live': 'off'
  });
};

vjs.SeekHandle.prototype.updateContent = function() {
  var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
  this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(time, this.player_.duration()) + '</span>';
};
/**
 * The component for controlling the volume level
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.VolumeControl = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    // hide volume controls when they're not supported by the current tech
    if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false) {
      this.addClass('vjs-hidden');
    }
    player.on('loadstart', vjs.bind(this, function(){
      if (player.tech.features && player.tech.features['volumeControl'] === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    }));
  }
});

vjs.VolumeControl.prototype.options_ = {
  children: {
    'volumeBar': {}
  }
};

vjs.VolumeControl.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-volume-control vjs-control'
  });
};

/**
 * The bar that contains the volume level and can be clicked on to adjust the level
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.VolumeBar = vjs.Slider.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Slider.call(this, player, options);
    player.on('volumechange', vjs.bind(this, this.updateARIAAttributes));
    player.ready(vjs.bind(this, this.updateARIAAttributes));
  }
});

vjs.VolumeBar.prototype.updateARIAAttributes = function(){
  // Current value of volume bar as a percentage
  this.el_.setAttribute('aria-valuenow',vjs.round(this.player_.volume()*100, 2));
  this.el_.setAttribute('aria-valuetext',vjs.round(this.player_.volume()*100, 2)+'%');
};

vjs.VolumeBar.prototype.options_ = {
  children: {
    'volumeLevel': {},
    'volumeHandle': {}
  },
  'barName': 'volumeLevel',
  'handleName': 'volumeHandle'
};

vjs.VolumeBar.prototype.playerEvent = 'volumechange';

vjs.VolumeBar.prototype.createEl = function(){
  return vjs.Slider.prototype.createEl.call(this, 'div', {
    className: 'vjs-volume-bar',
    'aria-label': 'volume level'
  });
};

vjs.VolumeBar.prototype.onMouseMove = function(event) {
  if (this.player_.muted()) {
    this.player_.muted(false);
  }

  this.player_.volume(this.calculateDistance(event));
};

vjs.VolumeBar.prototype.getPercent = function(){
  if (this.player_.muted()) {
    return 0;
  } else {
    return this.player_.volume();
  }
};

vjs.VolumeBar.prototype.stepForward = function(){
  this.player_.volume(this.player_.volume() + 0.1);
};

vjs.VolumeBar.prototype.stepBack = function(){
  this.player_.volume(this.player_.volume() - 0.1);
};

/**
 * Shows volume level
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.VolumeLevel = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);
  }
});

vjs.VolumeLevel.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-volume-level',
    innerHTML: '<span class="vjs-control-text"></span>'
  });
};

/**
 * The volume handle can be dragged to adjust the volume level
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
 vjs.VolumeHandle = vjs.SliderHandle.extend();

 vjs.VolumeHandle.prototype.defaultValue = '00:00';

 /** @inheritDoc */
 vjs.VolumeHandle.prototype.createEl = function(){
   return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
     className: 'vjs-volume-handle'
   });
 };
/**
 * A button component for muting the audio
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.MuteToggle = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);

    player.on('volumechange', vjs.bind(this, this.update));

    // hide mute toggle if the current tech doesn't support volume control
    if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false) {
      this.addClass('vjs-hidden');
    }
    player.on('loadstart', vjs.bind(this, function(){
      if (player.tech.features && player.tech.features['volumeControl'] === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    }));
  }
});

vjs.MuteToggle.prototype.createEl = function(){
  return vjs.Button.prototype.createEl.call(this, 'div', {
    className: 'vjs-mute-control vjs-control',
    innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
  });
};

vjs.MuteToggle.prototype.onClick = function(){
  this.player_.muted( this.player_.muted() ? false : true );
};

vjs.MuteToggle.prototype.update = function(){
  var vol = this.player_.volume(),
      level = 3;

  if (vol === 0 || this.player_.muted()) {
    level = 0;
  } else if (vol < 0.33) {
    level = 1;
  } else if (vol < 0.67) {
    level = 2;
  }

  // Don't rewrite the button text if the actual text doesn't change.
  // This causes unnecessary and confusing information for screen reader users.
  // This check is needed because this function gets called every time the volume level is changed.
  if(this.player_.muted()){
      if(this.el_.children[0].children[0].innerHTML!=this.localize('Unmute')){
          this.el_.children[0].children[0].innerHTML = this.localize('Unmute'); // change the button text to "Unmute"
      }
  } else {
      if(this.el_.children[0].children[0].innerHTML!=this.localize('Mute')){
          this.el_.children[0].children[0].innerHTML = this.localize('Mute'); // change the button text to "Mute"
      }
  }

  /* TODO improve muted icon classes */
  for (var i = 0; i < 4; i++) {
    vjs.removeClass(this.el_, 'vjs-vol-'+i);
  }
  vjs.addClass(this.el_, 'vjs-vol-'+level);
};
/**
 * Menu button with a popup for showing the volume slider.
 * @constructor
 */
vjs.VolumeMenuButton = vjs.MenuButton.extend({
  /** @constructor */
  init: function(player, options){
    vjs.MenuButton.call(this, player, options);

    // Same listeners as MuteToggle
    player.on('volumechange', vjs.bind(this, this.update));

    // hide mute toggle if the current tech doesn't support volume control
    if (player.tech && player.tech.features && player.tech.features.volumeControl === false) {
      this.addClass('vjs-hidden');
    }
    player.on('loadstart', vjs.bind(this, function(){
      if (player.tech.features && player.tech.features.volumeControl === false) {
        this.addClass('vjs-hidden');
      } else {
        this.removeClass('vjs-hidden');
      }
    }));
    this.addClass('vjs-menu-button');
  }
});

vjs.VolumeMenuButton.prototype.createMenu = function(){
  var menu = new vjs.Menu(this.player_, {
    contentElType: 'div'
  });
  var vc = new vjs.VolumeBar(this.player_, vjs.obj.merge({'vertical': true}, this.options_.volumeBar));
  menu.addChild(vc);
  return menu;
};

vjs.VolumeMenuButton.prototype.onClick = function(){
  vjs.MuteToggle.prototype.onClick.call(this);
  vjs.MenuButton.prototype.onClick.call(this);
};

vjs.VolumeMenuButton.prototype.createEl = function(){
  return vjs.Button.prototype.createEl.call(this, 'div', {
    className: 'vjs-volume-menu-button vjs-menu-button vjs-control',
    innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
  });
};
vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update;
/**
 * The component for controlling the playback rate
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
  /** @constructor */
  init: function(player, options){
    vjs.MenuButton.call(this, player, options);

    this.updateVisibility();
    this.updateLabel();

    player.on('loadstart', vjs.bind(this, this.updateVisibility));
    player.on('ratechange', vjs.bind(this, this.updateLabel));
  }
});

vjs.PlaybackRateMenuButton.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-playback-rate vjs-menu-button vjs-control',
    innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + this.localize('Playback Rate') + '</span></div>'
  });

  this.labelEl_ = vjs.createEl('div', {
    className: 'vjs-playback-rate-value',
    innerHTML: 1.0
  });

  el.appendChild(this.labelEl_);

  return el;
};

// Menu creation
vjs.PlaybackRateMenuButton.prototype.createMenu = function(){
  var menu = new vjs.Menu(this.player());
  var rates = this.player().options()['playbackRates'];

  if (rates) {
    for (var i = rates.length - 1; i >= 0; i--) {
      menu.addChild(
        new vjs.PlaybackRateMenuItem(this.player(), { 'rate': rates[i] + 'x'})
        );
    };
  }

  return menu;
};

vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function(){
  // Current playback rate
  this.el().setAttribute('aria-valuenow', this.player().playbackRate());
};

vjs.PlaybackRateMenuButton.prototype.onClick = function(){
  // select next rate option
  var currentRate = this.player().playbackRate();
  var rates = this.player().options()['playbackRates'];
  // this will select first one if the last one currently selected
  var newRate = rates[0];
  for (var i = 0; i <rates.length ; i++) {
    if (rates[i] > currentRate) {
      newRate = rates[i];
      break;
    }
  };
  this.player().playbackRate(newRate);
};

vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function(){
  return this.player().tech
    && this.player().tech.features['playbackRate']
    && this.player().options()['playbackRates']
    && this.player().options()['playbackRates'].length > 0
  ;
};

/**
 * Hide playback rate controls when they're no playback rate options to select
 */
vjs.PlaybackRateMenuButton.prototype.updateVisibility = function(){
  if (this.playbackRateSupported()) {
    this.removeClass('vjs-hidden');
  } else {
    this.addClass('vjs-hidden');
  }
};

/**
 * Update button label when rate changed
 */
vjs.PlaybackRateMenuButton.prototype.updateLabel = function(){
  if (this.playbackRateSupported()) {
    this.labelEl_.innerHTML = this.player().playbackRate() + 'x';
  }
};

/**
 * The specific menu item type for selecting a playback rate
 *
 * @constructor
 */
vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
  contentElType: 'button',
  /** @constructor */
  init: function(player, options){
    var label = this.label = options['rate'];
    var rate = this.rate = parseFloat(label, 10);

    // Modify options for parent MenuItem class's init.
    options['label'] = label;
    options['selected'] = rate === 1;
    vjs.MenuItem.call(this, player, options);

    this.player().on('ratechange', vjs.bind(this, this.update));
  }
});

vjs.PlaybackRateMenuItem.prototype.onClick = function(){
  vjs.MenuItem.prototype.onClick.call(this);
  this.player().playbackRate(this.rate);
};

vjs.PlaybackRateMenuItem.prototype.update = function(){
  this.selected(this.player().playbackRate() == this.rate);
};
/* Poster Image
================================================================================ */
/**
 * The component that handles showing the poster image.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.PosterImage = vjs.Button.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Button.call(this, player, options);

    if (player.poster()) {
      this.src(player.poster());
    }

    if (!player.poster() || !player.controls()) {
      this.hide();
    }

    player.on('posterchange', vjs.bind(this, function(){
      this.src(player.poster());
    }));

    player.on('play', vjs.bind(this, this.hide));
  }
});

// use the test el to check for backgroundSize style support
var _backgroundSizeSupported = 'backgroundSize' in vjs.TEST_VID.style;

vjs.PosterImage.prototype.createEl = function(){
  var el = vjs.createEl('div', {
    className: 'vjs-poster',

    // Don't want poster to be tabbable.
    tabIndex: -1
  });

  if (!_backgroundSizeSupported) {
    // setup an img element as a fallback for IE8
    el.appendChild(vjs.createEl('img'));
  }

  return el;
};

vjs.PosterImage.prototype.src = function(url){
  var el = this.el();

  // getter
  // can't think of a need for a getter here
  // see #838 if on is needed in the future
  // still don't want a getter to set src as undefined
  if (url === undefined) {
    return;
  }

  // setter
  // To ensure the poster image resizes while maintaining its original aspect
  // ratio, use a div with `background-size` when available. For browsers that
  // do not support `background-size` (e.g. IE8), fall back on using a regular
  // img element.
  if (_backgroundSizeSupported) {
    el.style.backgroundImage = 'url("' + url + '")';
  } else {
    el.firstChild.src = url;
  }
};

vjs.PosterImage.prototype.onClick = function(){
  // Only accept clicks when controls are enabled
  if (this.player().controls()) {
    this.player_.play();
  }
};
/* Loading Spinner
================================================================================ */
/**
 * Loading spinner for waiting events
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.LoadingSpinner = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    // MOVING DISPLAY HANDLING TO CSS

    // player.on('canplay', vjs.bind(this, this.hide));
    // player.on('canplaythrough', vjs.bind(this, this.hide));
    // player.on('playing', vjs.bind(this, this.hide));
    // player.on('seeking', vjs.bind(this, this.show));

    // in some browsers seeking does not trigger the 'playing' event,
    // so we also need to trap 'seeked' if we are going to set a
    // 'seeking' event
    // player.on('seeked', vjs.bind(this, this.hide));

    // player.on('ended', vjs.bind(this, this.hide));

    // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
    // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
    // player.on('stalled', vjs.bind(this, this.show));

    // player.on('waiting', vjs.bind(this, this.show));
  }
});

vjs.LoadingSpinner.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-loading-spinner'
  });
};
/* Big Play Button
================================================================================ */
/**
 * Initial play button. Shows before the video has played. The hiding of the
 * big play button is done via CSS and player states.
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */
vjs.BigPlayButton = vjs.Button.extend();

vjs.BigPlayButton.prototype.createEl = function(){
  return vjs.Button.prototype.createEl.call(this, 'div', {
    className: 'vjs-big-play-button',
    innerHTML: '<span aria-hidden="true"></span>',
    'aria-label': 'play video'
  });
};

vjs.BigPlayButton.prototype.onClick = function(){
  this.player_.play();
};
/**
 * Display that an error has occurred making the video unplayable
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.ErrorDisplay = vjs.Component.extend({
  init: function(player, options){
    vjs.Component.call(this, player, options);

    this.update();
    player.on('error', vjs.bind(this, this.update));
  }
});

vjs.ErrorDisplay.prototype.createEl = function(){
  var el = vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-error-display'
  });

  this.contentEl_ = vjs.createEl('div');
  el.appendChild(this.contentEl_);

  return el;
};

vjs.ErrorDisplay.prototype.update = function(){
  if (this.player().error()) {
    this.contentEl_.innerHTML = this.localize(this.player().error().message);
  }
};
/**
 * @fileoverview Media Technology Controller - Base class for media playback
 * technology controllers like Flash and HTML5
 */

/**
 * Base class for media (HTML5 Video, Flash) controllers
 * @param {vjs.Player|Object} player  Central player instance
 * @param {Object=} options Options object
 * @constructor
 */
vjs.MediaTechController = vjs.Component.extend({
  /** @constructor */
  init: function(player, options, ready){
    options = options || {};
    // we don't want the tech to report user activity automatically.
    // This is done manually in addControlsListeners
    options.reportTouchActivity = false;
    vjs.Component.call(this, player, options, ready);

    // Manually track progress in cases where the browser/flash player doesn't report it.
    if (!this.features['progressEvents']) {
      this.manualProgressOn();
    }

    // Manually track timeudpates in cases where the browser/flash player doesn't report it.
    if (!this.features['timeupdateEvents']) {
      this.manualTimeUpdatesOn();
    }

    this.initControlsListeners();
  }
});

/**
 * Set up click and touch listeners for the playback element
 * On desktops, a click on the video itself will toggle playback,
 * on a mobile device a click on the video toggles controls.
 * (toggling controls is done by toggling the user state between active and
 * inactive)
 *
 * A tap can signal that a user has become active, or has become inactive
 * e.g. a quick tap on an iPhone movie should reveal the controls. Another
 * quick tap should hide them again (signaling the user is in an inactive
 * viewing state)
 *
 * In addition to this, we still want the user to be considered inactive after
 * a few seconds of inactivity.
 *
 * Note: the only part of iOS interaction we can't mimic with this setup
 * is a touch and hold on the video element counting as activity in order to
 * keep the controls showing, but that shouldn't be an issue. A touch and hold on
 * any controls will still keep the user active
 */
vjs.MediaTechController.prototype.initControlsListeners = function(){
  var player, tech, activateControls, deactivateControls;

  tech = this;
  player = this.player();

  var activateControls = function(){
    if (player.controls() && !player.usingNativeControls()) {
      tech.addControlsListeners();
    }
  };

  deactivateControls = vjs.bind(tech, tech.removeControlsListeners);

  // Set up event listeners once the tech is ready and has an element to apply
  // listeners to
  this.ready(activateControls);
  player.on('controlsenabled', activateControls);
  player.on('controlsdisabled', deactivateControls);

  // if we're loading the playback object after it has started loading or playing the
  // video (often with autoplay on) then the loadstart event has already fired and we
  // need to fire it manually because many things rely on it.
  // Long term we might consider how we would do this for other events like 'canplay'
  // that may also have fired.
  this.ready(function(){
    if (this.networkState && this.networkState() > 0) {
      this.player().trigger('loadstart');
    }
  });
};

vjs.MediaTechController.prototype.addControlsListeners = function(){
  var userWasActive;

  // Some browsers (Chrome & IE) don't trigger a click on a flash swf, but do
  // trigger mousedown/up.
  // http://stackoverflow.com/questions/1444562/javascript-onclick-event-over-flash-object
  // Any touch events are set to block the mousedown event from happening
  this.on('mousedown', this.onClick);

  // If the controls were hidden we don't want that to change without a tap event
  // so we'll check if the controls were already showing before reporting user
  // activity
  this.on('touchstart', function(event) {
    userWasActive = this.player_.userActive();
  });

  this.on('touchmove', function(event) {
    if (userWasActive){
      this.player().reportUserActivity();
    }
  });

  this.on('touchend', function(event) {
    // Stop the mouse events from also happening
    event.preventDefault();
  });

  // Turn on component tap events
  this.emitTapEvents();

  // The tap listener needs to come after the touchend listener because the tap
  // listener cancels out any reportedUserActivity when setting userActive(false)
  this.on('tap', this.onTap);
};

/**
 * Remove the listeners used for click and tap controls. This is needed for
 * toggling to controls disabled, where a tap/touch should do nothing.
 */
vjs.MediaTechController.prototype.removeControlsListeners = function(){
  // We don't want to just use `this.off()` because there might be other needed
  // listeners added by techs that extend this.
  this.off('tap');
  this.off('touchstart');
  this.off('touchmove');
  this.off('touchleave');
  this.off('touchcancel');
  this.off('touchend');
  this.off('click');
  this.off('mousedown');
};

/**
 * Handle a click on the media element. By default will play/pause the media.
 */
vjs.MediaTechController.prototype.onClick = function(event){
  // We're using mousedown to detect clicks thanks to Flash, but mousedown
  // will also be triggered with right-clicks, so we need to prevent that
  if (event.button !== 0) return;

  // When controls are disabled a click should not toggle playback because
  // the click is considered a control
  if (this.player().controls()) {
    if (this.player().paused()) {
      this.player().play();
    } else {
      this.player().pause();
    }
  }
};

/**
 * Handle a tap on the media element. By default it will toggle the user
 * activity state, which hides and shows the controls.
 */
vjs.MediaTechController.prototype.onTap = function(){
  this.player().userActive(!this.player().userActive());
};

/* Fallbacks for unsupported event types
================================================================================ */
// Manually trigger progress events based on changes to the buffered amount
// Many flash players and older HTML5 browsers don't send progress or progress-like events
vjs.MediaTechController.prototype.manualProgressOn = function(){
  this.manualProgress = true;

  // Trigger progress watching when a source begins loading
  this.trackProgress();
};

vjs.MediaTechController.prototype.manualProgressOff = function(){
  this.manualProgress = false;
  this.stopTrackingProgress();
};

vjs.MediaTechController.prototype.trackProgress = function(){

  this.progressInterval = setInterval(vjs.bind(this, function(){
    // Don't trigger unless buffered amount is greater than last time

    var bufferedPercent = this.player().bufferedPercent();

    if (this.bufferedPercent_ != bufferedPercent) {
      this.player().trigger('progress');
    }

    this.bufferedPercent_ = bufferedPercent;

    if (bufferedPercent === 1) {
      this.stopTrackingProgress();
    }
  }), 500);
};
vjs.MediaTechController.prototype.stopTrackingProgress = function(){ clearInterval(this.progressInterval); };

/*! Time Tracking -------------------------------------------------------------- */
vjs.MediaTechController.prototype.manualTimeUpdatesOn = function(){
  this.manualTimeUpdates = true;

  this.player().on('play', vjs.bind(this, this.trackCurrentTime));
  this.player().on('pause', vjs.bind(this, this.stopTrackingCurrentTime));
  // timeupdate is also called by .currentTime whenever current time is set

  // Watch for native timeupdate event
  this.one('timeupdate', function(){
    // Update known progress support for this playback technology
    this.features['timeupdateEvents'] = true;
    // Turn off manual progress tracking
    this.manualTimeUpdatesOff();
  });
};

vjs.MediaTechController.prototype.manualTimeUpdatesOff = function(){
  this.manualTimeUpdates = false;
  this.stopTrackingCurrentTime();
  this.off('play', this.trackCurrentTime);
  this.off('pause', this.stopTrackingCurrentTime);
};

vjs.MediaTechController.prototype.trackCurrentTime = function(){
  if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
  this.currentTimeInterval = setInterval(vjs.bind(this, function(){
    this.player().trigger('timeupdate');
  }), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
};

// Turn off play progress tracking (when paused or dragging)
vjs.MediaTechController.prototype.stopTrackingCurrentTime = function(){
  clearInterval(this.currentTimeInterval);

  // #1002 - if the video ends right before the next timeupdate would happen,
  // the progress bar won't make it all the way to the end
  this.player().trigger('timeupdate');
};

vjs.MediaTechController.prototype.dispose = function() {
  // Turn off any manual progress or timeupdate tracking
  if (this.manualProgress) { this.manualProgressOff(); }

  if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

  vjs.Component.prototype.dispose.call(this);
};

vjs.MediaTechController.prototype.setCurrentTime = function() {
  // improve the accuracy of manual timeupdates
  if (this.manualTimeUpdates) { this.player().trigger('timeupdate'); }
};

/**
 * Provide a default setPoster method for techs
 *
 * Poster support for techs should be optional, so we don't want techs to
 * break if they don't have a way to set a poster.
 */
vjs.MediaTechController.prototype.setPoster = function(){};

vjs.MediaTechController.prototype.features = {
  'volumeControl': true,

  // Resizing plugins using request fullscreen reloads the plugin
  'fullscreenResize': false,
  'playbackRate': false,

  // Optional events that we can manually mimic with timers
  // currently not triggered by video-js-swf
  'progressEvents': false,
  'timeupdateEvents': false
};

vjs.media = {};
/**
 * @fileoverview HTML5 Media Controller - Wrapper for HTML5 Media API
 */

/**
 * HTML5 Media Controller - Wrapper for HTML5 Media API
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @param {Function=} ready
 * @constructor
 */
vjs.Html5 = vjs.MediaTechController.extend({
  /** @constructor */
  init: function(player, options, ready){
    // volume cannot be changed from 1 on iOS
    this.features['volumeControl'] = vjs.Html5.canControlVolume();

    // just in case; or is it excessively...
    this.features['playbackRate'] = vjs.Html5.canControlPlaybackRate();

    // In iOS, if you move a video element in the DOM, it breaks video playback.
    this.features['movingMediaElementInDOM'] = !vjs.IS_IOS;

    // HTML video is able to automatically resize when going to fullscreen
    this.features['fullscreenResize'] = true;

    // HTML video supports progress events
    this.features['progressEvents'] = true;

    vjs.MediaTechController.call(this, player, options, ready);
    this.setupTriggers();

    var source = options['source'];

    // set the source if one was provided
    if (source && this.el_.currentSrc !== source.src) {
      this.el_.src = source.src;
    }

    // Determine if native controls should be used
    // Our goal should be to get the custom controls on mobile solid everywhere
    // so we can remove this all together. Right now this will block custom
    // controls on touch enabled laptops like the Chrome Pixel
    if (vjs.TOUCH_ENABLED && player.options()['nativeControlsForTouch'] !== false) {
      this.useNativeControls();
    }

    // Chrome and Safari both have issues with autoplay.
    // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
    // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
    // This fixes both issues. Need to wait for API, so it updates displays correctly
    player.ready(function(){
      if (this.tag && this.options_['autoplay'] && this.paused()) {
        delete this.tag['poster']; // Chrome Fix. Fixed in Chrome v16.
        this.play();
      }
    });

    this.triggerReady();
  }
});

vjs.Html5.prototype.dispose = function(){
  vjs.Html5.disposeMediaElement(this.el_);
  vjs.MediaTechController.prototype.dispose.call(this);
};

vjs.Html5.prototype.createEl = function(){
  var player = this.player_,
      // If possible, reuse original tag for HTML5 playback technology element
      el = player.tag,
      newEl,
      clone;

  // Check if this browser supports moving the element into the box.
  // On the iPhone video will break if you move the element,
  // So we have to create a brand new element.
  if (!el || this.features['movingMediaElementInDOM'] === false) {

    // If the original tag is still there, clone and remove it.
    if (el) {
      clone = el.cloneNode(false);
      vjs.Html5.disposeMediaElement(el);
      el = clone;
      player.tag = null;
    } else {
      el = vjs.createEl('video');
      vjs.setElementAttributes(el,
        vjs.obj.merge(player.tagAttributes || {}, {
          id:player.id() + '_html5_api',
          'class':'vjs-tech'
        })
      );
    }
    // associate the player with the new tag
    el['player'] = player;

    vjs.insertFirst(el, player.el());
  }

  // Update specific tag settings, in case they were overridden
  var settingsAttrs = ['autoplay','preload','loop','muted'];
  for (var i = settingsAttrs.length - 1; i >= 0; i--) {
    var attr = settingsAttrs[i];
    var overwriteAttrs = {};
    if (typeof player.options_[attr] !== 'undefined') {
      overwriteAttrs[attr] = player.options_[attr];
    }
    vjs.setElementAttributes(el, overwriteAttrs);
  }

  return el;
  // jenniisawesome = true;
};

// Make video events trigger player events
// May seem verbose here, but makes other APIs possible.
// Triggers removed using this.off when disposed
vjs.Html5.prototype.setupTriggers = function(){
  for (var i = vjs.Html5.Events.length - 1; i >= 0; i--) {
    vjs.on(this.el_, vjs.Html5.Events[i], vjs.bind(this, this.eventHandler));
  }
};

vjs.Html5.prototype.eventHandler = function(evt){
  // In the case of an error, set the error prop on the player
  // and let the player handle triggering the event.
  if (evt.type == 'error') {
    this.player().error(this.error().code);

  // in some cases we pass the event directly to the player
  } else {
    // No need for media events to bubble up.
    evt.bubbles = false;

    this.player().trigger(evt);
  }
};

vjs.Html5.prototype.useNativeControls = function(){
  var tech, player, controlsOn, controlsOff, cleanUp;

  tech = this;
  player = this.player();

  // If the player controls are enabled turn on the native controls
  tech.setControls(player.controls());

  // Update the native controls when player controls state is updated
  controlsOn = function(){
    tech.setControls(true);
  };
  controlsOff = function(){
    tech.setControls(false);
  };
  player.on('controlsenabled', controlsOn);
  player.on('controlsdisabled', controlsOff);

  // Clean up when not using native controls anymore
  cleanUp = function(){
    player.off('controlsenabled', controlsOn);
    player.off('controlsdisabled', controlsOff);
  };
  tech.on('dispose', cleanUp);
  player.on('usingcustomcontrols', cleanUp);

  // Update the state of the player to using native controls
  player.usingNativeControls(true);
};


vjs.Html5.prototype.play = function(){ this.el_.play(); };
vjs.Html5.prototype.pause = function(){ this.el_.pause(); };
vjs.Html5.prototype.paused = function(){ return this.el_.paused; };

vjs.Html5.prototype.currentTime = function(){ return this.el_.currentTime; };
vjs.Html5.prototype.setCurrentTime = function(seconds){
  try {
    this.el_.currentTime = seconds;
  } catch(e) {
    vjs.log(e, 'Video is not ready. (Video.js)');
    // this.warning(VideoJS.warnings.videoNotReady);
  }
};

vjs.Html5.prototype.duration = function(){ return this.el_.duration || 0; };
vjs.Html5.prototype.buffered = function(){ return this.el_.buffered; };

vjs.Html5.prototype.volume = function(){ return this.el_.volume; };
vjs.Html5.prototype.setVolume = function(percentAsDecimal){ this.el_.volume = percentAsDecimal; };
vjs.Html5.prototype.muted = function(){ return this.el_.muted; };
vjs.Html5.prototype.setMuted = function(muted){ this.el_.muted = muted; };

vjs.Html5.prototype.width = function(){ return this.el_.offsetWidth; };
vjs.Html5.prototype.height = function(){ return this.el_.offsetHeight; };

vjs.Html5.prototype.supportsFullScreen = function(){
  if (typeof this.el_.webkitEnterFullScreen == 'function') {

    // Seems to be broken in Chromium/Chrome && Safari in Leopard
    if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)) {
      return true;
    }
  }
  return false;
};

vjs.Html5.prototype.enterFullScreen = function(){
  var video = this.el_;
  if (video.paused && video.networkState <= video.HAVE_METADATA) {
    // attempt to prime the video element for programmatic access
    // this isn't necessary on the desktop but shouldn't hurt
    this.el_.play();

    // playing and pausing synchronously during the transition to fullscreen
    // can get iOS ~6.1 devices into a play/pause loop
    setTimeout(function(){
      video.pause();
      video.webkitEnterFullScreen();
    }, 0);
  } else {
    video.webkitEnterFullScreen();
  }
};
vjs.Html5.prototype.exitFullScreen = function(){
  this.el_.webkitExitFullScreen();
};
vjs.Html5.prototype.src = function(src) {
  if (src === undefined) {
    return this.el_.src;
  } else {
    this.el_.src = src;
  }
};
vjs.Html5.prototype.load = function(){ this.el_.load(); };
vjs.Html5.prototype.currentSrc = function(){ return this.el_.currentSrc; };

vjs.Html5.prototype.poster = function(){ return this.el_.poster; };
vjs.Html5.prototype.setPoster = function(val){ this.el_.poster = val; };

vjs.Html5.prototype.preload = function(){ return this.el_.preload; };
vjs.Html5.prototype.setPreload = function(val){ this.el_.preload = val; };

vjs.Html5.prototype.autoplay = function(){ return this.el_.autoplay; };
vjs.Html5.prototype.setAutoplay = function(val){ this.el_.autoplay = val; };

vjs.Html5.prototype.controls = function(){ return this.el_.controls; };
vjs.Html5.prototype.setControls = function(val){ this.el_.controls = !!val; };

vjs.Html5.prototype.loop = function(){ return this.el_.loop; };
vjs.Html5.prototype.setLoop = function(val){ this.el_.loop = val; };

vjs.Html5.prototype.error = function(){ return this.el_.error; };
vjs.Html5.prototype.seeking = function(){ return this.el_.seeking; };
vjs.Html5.prototype.ended = function(){ return this.el_.ended; };
vjs.Html5.prototype.defaultMuted = function(){ return this.el_.defaultMuted; };

vjs.Html5.prototype.playbackRate = function(){ return this.el_.playbackRate; };
vjs.Html5.prototype.setPlaybackRate = function(val){ this.el_.playbackRate = val; };

vjs.Html5.prototype.networkState = function(){ return this.el_.networkState; };

/* HTML5 Support Testing ---------------------------------------------------- */

vjs.Html5.isSupported = function(){
  // ie9 with no Media Player is a LIAR! (#984)
  try {
    vjs.TEST_VID['volume'] = 0.5;
  } catch (e) {
    return false;
  }

  return !!vjs.TEST_VID.canPlayType;
};

vjs.Html5.canPlaySource = function(srcObj){
  // IE9 on Windows 7 without MediaPlayer throws an error here
  // https://github.com/videojs/video.js/issues/519
  try {
    return !!vjs.TEST_VID.canPlayType(srcObj.type);
  } catch(e) {
    return '';
  }
  // TODO: Check Type
  // If no Type, check ext
  // Check Media Type
};

vjs.Html5.canControlVolume = function(){
  var volume =  vjs.TEST_VID.volume;
  vjs.TEST_VID.volume = (volume / 2) + 0.1;
  return volume !== vjs.TEST_VID.volume;
};

vjs.Html5.canControlPlaybackRate = function(){
  var playbackRate =  vjs.TEST_VID.playbackRate;
  vjs.TEST_VID.playbackRate = (playbackRate / 2) + 0.1;
  return playbackRate !== vjs.TEST_VID.playbackRate;
};

// HTML5 Feature detection and Device Fixes --------------------------------- //
(function() {
  var canPlayType,
      mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
      mp4RE = /^video\/mp4/i;

  vjs.Html5.patchCanPlayType = function() {
    // Android 4.0 and above can play HLS to some extent but it reports being unable to do so
    if (vjs.ANDROID_VERSION >= 4.0) {
      if (!canPlayType) {
        canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType;
      }

      vjs.TEST_VID.constructor.prototype.canPlayType = function(type) {
        if (type && mpegurlRE.test(type)) {
          return 'maybe';
        }
        return canPlayType.call(this, type);
      };
    }

    // Override Android 2.2 and less canPlayType method which is broken
    if (vjs.IS_OLD_ANDROID) {
      if (!canPlayType) {
        canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType;
      }

      vjs.TEST_VID.constructor.prototype.canPlayType = function(type){
        if (type && mp4RE.test(type)) {
          return 'maybe';
        }
        return canPlayType.call(this, type);
      };
    }
  };

  vjs.Html5.unpatchCanPlayType = function() {
    var r = vjs.TEST_VID.constructor.prototype.canPlayType;
    vjs.TEST_VID.constructor.prototype.canPlayType = canPlayType;
    canPlayType = null;
    return r;
  };

  // by default, patch the video element
  vjs.Html5.patchCanPlayType();
})();

// List of all HTML5 events (various uses).
vjs.Html5.Events = 'loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange'.split(',');

vjs.Html5.disposeMediaElement = function(el){
  if (!el) { return; }

  el['player'] = null;

  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }

  // remove any child track or source nodes to prevent their loading
  while(el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }

  // remove any src reference. not setting `src=''` because that causes a warning
  // in firefox
  el.removeAttribute('src');

  // force the media element to update its loading state by calling load()
  // however IE on Windows 7N has a bug that throws an error so need a try/catch (#793)
  if (typeof el.load === 'function') {
    // wrapping in an iife so it's not deoptimized (#1060#discussion_r10324473)
    (function() {
      try {
        el.load();
      } catch (e) {
        // not supported
      }
    })();
  }
};
/**
 * @fileoverview VideoJS-SWF - Custom Flash Player with HTML5-ish API
 * https://github.com/zencoder/video-js-swf
 * Not using setupTriggers. Using global onEvent func to distribute events
 */

/**
 * Flash Media Controller - Wrapper for fallback SWF API
 *
 * @param {vjs.Player} player
 * @param {Object=} options
 * @param {Function=} ready
 * @constructor
 */
vjs.Flash = vjs.MediaTechController.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.MediaTechController.call(this, player, options, ready);

    var source = options['source'],

        // Which element to embed in
        parentEl = options['parentEl'],

        // Create a temporary element to be replaced by swf object
        placeHolder = this.el_ = vjs.createEl('div', { id: player.id() + '_temp_flash' }),

        // Generate ID for swf object
        objId = player.id()+'_flash_api',

        // Store player options in local var for optimization
        // TODO: switch to using player methods instead of options
        // e.g. player.autoplay();
        playerOptions = player.options_,

        // Merge default flashvars with ones passed in to init
        flashVars = vjs.obj.merge({

          // SWF Callback Functions
          'readyFunction': 'videojs.Flash.onReady',
          'eventProxyFunction': 'videojs.Flash.onEvent',
          'errorEventProxyFunction': 'videojs.Flash.onError',

          // Player Settings
          'autoplay': playerOptions.autoplay,
          'preload': playerOptions.preload,
          'loop': playerOptions.loop,
          'muted': playerOptions.muted

        }, options['flashVars']),

        // Merge default parames with ones passed in
        params = vjs.obj.merge({
          'wmode': 'opaque', // Opaque is needed to overlay controls, but can affect playback performance
          'bgcolor': '#000000' // Using bgcolor prevents a white flash when the object is loading
        }, options['params']),

        // Merge default attributes with ones passed in
        attributes = vjs.obj.merge({
          'id': objId,
          'name': objId, // Both ID and Name needed or swf to identifty itself
          'class': 'vjs-tech'
        }, options['attributes'])
    ;

    // If source was supplied pass as a flash var.
    if (source) {
      if (source.type && vjs.Flash.isStreamingType(source.type)) {
        var parts = vjs.Flash.streamToParts(source.src);
        flashVars['rtmpConnection'] = encodeURIComponent(parts.connection);
        flashVars['rtmpStream'] = encodeURIComponent(parts.stream);
      }
      else {
        flashVars['src'] = encodeURIComponent(vjs.getAbsoluteURL(source.src));
      }
    }

    // Add placeholder to player div
    vjs.insertFirst(placeHolder, parentEl);

    // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
    // This allows resetting the playhead when we catch the reload
    if (options['startTime']) {
      this.ready(function(){
        this.load();
        this.play();
        this['currentTime'](options['startTime']);
      });
    }

    // firefox doesn't bubble mousemove events to parent. videojs/video-js-swf#37
    // bugzilla bug: https://bugzilla.mozilla.org/show_bug.cgi?id=836786
    if (vjs.IS_FIREFOX) {
      this.ready(function(){
        vjs.on(this.el(), 'mousemove', vjs.bind(this, function(){
          // since it's a custom event, don't bubble higher than the player
          this.player().trigger({ 'type':'mousemove', 'bubbles': false });
        }));
      });
    }

    // native click events on the SWF aren't triggered on IE11, Win8.1RT
    // use stageclick events triggered from inside the SWF instead
    player.on('stageclick', player.reportUserActivity);

    this.el_ = vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes);
  }
});

vjs.Flash.prototype.dispose = function(){
  vjs.MediaTechController.prototype.dispose.call(this);
};

vjs.Flash.prototype.play = function(){
  this.el_.vjs_play();
};

vjs.Flash.prototype.pause = function(){
  this.el_.vjs_pause();
};

vjs.Flash.prototype.src = function(src){
  if (src === undefined) {
    return this['currentSrc']();
  }

  if (vjs.Flash.isStreamingSrc(src)) {
    src = vjs.Flash.streamToParts(src);
    this.setRtmpConnection(src.connection);
    this.setRtmpStream(src.stream);
  } else {
    // Make sure source URL is abosolute.
    src = vjs.getAbsoluteURL(src);
    this.el_.vjs_src(src);
  }

  // Currently the SWF doesn't autoplay if you load a source later.
  // e.g. Load player w/ no source, wait 2s, set src.
  if (this.player_.autoplay()) {
    var tech = this;
    setTimeout(function(){ tech.play(); }, 0);
  }
};

vjs.Flash.prototype['setCurrentTime'] = function(time){
  this.lastSeekTarget_ = time;
  this.el_.vjs_setProperty('currentTime', time);
  vjs.MediaTechController.prototype.setCurrentTime.call(this);
};

vjs.Flash.prototype['currentTime'] = function(time){
  // when seeking make the reported time keep up with the requested time
  // by reading the time we're seeking to
  if (this.seeking()) {
    return this.lastSeekTarget_ || 0;
  }
  return this.el_.vjs_getProperty('currentTime');
};

vjs.Flash.prototype['currentSrc'] = function(){
  var src = this.el_.vjs_getProperty('currentSrc');
  // no src, check and see if RTMP
  if (src == null) {
    var connection = this['rtmpConnection'](),
        stream = this['rtmpStream']();

    if (connection && stream) {
      src = vjs.Flash.streamFromParts(connection, stream);
    }
  }
  return src;
};

vjs.Flash.prototype.load = function(){
  this.el_.vjs_load();
};

vjs.Flash.prototype.poster = function(){
  this.el_.vjs_getProperty('poster');
};
vjs.Flash.prototype['setPoster'] = function(){
  // poster images are not handled by the Flash tech so make this a no-op
};

vjs.Flash.prototype.buffered = function(){
  return vjs.createTimeRange(0, this.el_.vjs_getProperty('buffered'));
};

vjs.Flash.prototype.supportsFullScreen = function(){
  return false; // Flash does not allow fullscreen through javascript
};

vjs.Flash.prototype.enterFullScreen = function(){
  return false;
};

(function(){
  // Create setters and getters for attributes
  var api = vjs.Flash.prototype,
    readWrite = 'rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(','),
    readOnly = 'error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks'.split(','),
    // Overridden: buffered, currentTime, currentSrc
    i;

  function createSetter(attr){
    var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
    api['set'+attrUpper] = function(val){ return this.el_.vjs_setProperty(attr, val); };
  };
  function createGetter(attr) {
    api[attr] = function(){ return this.el_.vjs_getProperty(attr); };
  };

  // Create getter and setters for all read/write attributes
  for (i = 0; i < readWrite.length; i++) {
    createGetter(readWrite[i]);
    createSetter(readWrite[i]);
  }

  // Create getters for read-only attributes
  for (i = 0; i < readOnly.length; i++) {
    createGetter(readOnly[i]);
  }
})();

/* Flash Support Testing -------------------------------------------------------- */

vjs.Flash.isSupported = function(){
  return vjs.Flash.version()[0] >= 10;
  // return swfobject.hasFlashPlayerVersion('10');
};

vjs.Flash.canPlaySource = function(srcObj){
  var type;

  if (!srcObj.type) {
    return '';
  }

  type = srcObj.type.replace(/;.*/,'').toLowerCase();
  if (type in vjs.Flash.formats || type in vjs.Flash.streamingFormats) {
    return 'maybe';
  }
};

vjs.Flash.formats = {
  'video/flv': 'FLV',
  'video/x-flv': 'FLV',
  'video/mp4': 'MP4',
  'video/m4v': 'MP4'
};

vjs.Flash.streamingFormats = {
  'rtmp/mp4': 'MP4',
  'rtmp/flv': 'FLV'
};

vjs.Flash['onReady'] = function(currSwf){
  var el, player;

  el = vjs.el(currSwf);

  // get player from the player div property
  player = el && el.parentNode && el.parentNode['player'];

  // if there is no el or player then the tech has been disposed
  // and the tech element was removed from the player div
  if (player) {
    // reference player on tech element
    el['player'] = player;
    // check that the flash object is really ready
    vjs.Flash['checkReady'](player.tech);
  }
};

// The SWF isn't always ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
vjs.Flash['checkReady'] = function(tech){
  // stop worrying if the tech has been disposed
  if (!tech.el()) {
    return;
  }

  // check if API property exists
  if (tech.el().vjs_getProperty) {
    // tell tech it's ready
    tech.triggerReady();
  } else {
    // wait longer
    setTimeout(function(){
      vjs.Flash['checkReady'](tech);
    }, 50);
  }
};

// Trigger events from the swf on the player
vjs.Flash['onEvent'] = function(swfID, eventName){
  var player = vjs.el(swfID)['player'];
  player.trigger(eventName);
};

// Log errors from the swf
vjs.Flash['onError'] = function(swfID, err){
  var player = vjs.el(swfID)['player'];
  var msg = 'FLASH: '+err;

  if (err == 'srcnotfound') {
    player.error({ code: 4, message: msg });

  // errors we haven't categorized into the media errors
  } else {
    player.error(msg);
  }
};

// Flash Version Check
vjs.Flash.version = function(){
  var version = '0,0,0';

  // IE
  try {
    version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

  // other browsers
  } catch(e) {
    try {
      if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin){
        version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
      }
    } catch(err) {}
  }
  return version.split(',');
};

// Flash embedding method. Only used in non-iframe mode
vjs.Flash.embed = function(swf, placeHolder, flashVars, params, attributes){
  var code = vjs.Flash.getEmbedCode(swf, flashVars, params, attributes),

      // Get element by embedding code and retrieving created element
      obj = vjs.createEl('div', { innerHTML: code }).childNodes[0],

      par = placeHolder.parentNode
  ;

  placeHolder.parentNode.replaceChild(obj, placeHolder);

  // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
  // This is a dumb fix
  var newObj = par.childNodes[0];
  setTimeout(function(){
    newObj.style.display = 'block';
  }, 1000);

  return obj;

};

vjs.Flash.getEmbedCode = function(swf, flashVars, params, attributes){

  var objTag = '<object type="application/x-shockwave-flash"',
      flashVarsString = '',
      paramsString = '',
      attrsString = '';

  // Convert flash vars to string
  if (flashVars) {
    vjs.obj.each(flashVars, function(key, val){
      flashVarsString += (key + '=' + val + '&amp;');
    });
  }

  // Add swf, flashVars, and other default params
  params = vjs.obj.merge({
    'movie': swf,
    'flashvars': flashVarsString,
    'allowScriptAccess': 'always', // Required to talk to swf
    'allowNetworking': 'all' // All should be default, but having security issues.
  }, params);

  // Create param tags string
  vjs.obj.each(params, function(key, val){
    paramsString += '<param name="'+key+'" value="'+val+'" />';
  });

  attributes = vjs.obj.merge({
    // Add swf to attributes (need both for IE and Others to work)
    'data': swf,

    // Default to 100% width/height
    'width': '100%',
    'height': '100%'

  }, attributes);

  // Create Attributes string
  vjs.obj.each(attributes, function(key, val){
    attrsString += (key + '="' + val + '" ');
  });

  return objTag + attrsString + '>' + paramsString + '</object>';
};

vjs.Flash.streamFromParts = function(connection, stream) {
  return connection + '&' + stream;
};

vjs.Flash.streamToParts = function(src) {
  var parts = {
    connection: '',
    stream: ''
  };

  if (! src) {
    return parts;
  }

  // Look for the normal URL separator we expect, '&'.
  // If found, we split the URL into two pieces around the
  // first '&'.
  var connEnd = src.indexOf('&');
  var streamBegin;
  if (connEnd !== -1) {
    streamBegin = connEnd + 1;
  }
  else {
    // If there's not a '&', we use the last '/' as the delimiter.
    connEnd = streamBegin = src.lastIndexOf('/') + 1;
    if (connEnd === 0) {
      // really, there's not a '/'?
      connEnd = streamBegin = src.length;
    }
  }
  parts.connection = src.substring(0, connEnd);
  parts.stream = src.substring(streamBegin, src.length);

  return parts;
};

vjs.Flash.isStreamingType = function(srcType) {
  return srcType in vjs.Flash.streamingFormats;
};

// RTMP has four variations, any string starting
// with one of these protocols should be valid
vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i;

vjs.Flash.isStreamingSrc = function(src) {
  return vjs.Flash.RTMP_RE.test(src);
};
/**
 * The Media Loader is the component that decides which playback technology to load
 * when the player is initialized.
 *
 * @constructor
 */
vjs.MediaLoader = vjs.Component.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.Component.call(this, player, options, ready);

    // If there are no sources when the player is initialized,
    // load the first supported playback technology.
    if (!player.options_['sources'] || player.options_['sources'].length === 0) {
      for (var i=0,j=player.options_['techOrder']; i<j.length; i++) {
        var techName = vjs.capitalize(j[i]),
            tech = window['videojs'][techName];

        // Check if the browser supports this technology
        if (tech && tech.isSupported()) {
          player.loadTech(techName);
          break;
        }
      }
    } else {
      // // Loop through playback technologies (HTML5, Flash) and check for support.
      // // Then load the best source.
      // // A few assumptions here:
      // //   All playback technologies respect preload false.
      player.src(player.options_['sources']);
    }
  }
});
/**
 * @fileoverview Text Tracks
 * Text tracks are tracks of timed text events.
 * Captions - text displayed over the video for the hearing impared
 * Subtitles - text displayed over the video for those who don't understand langauge in the video
 * Chapters - text displayed in a menu allowing the user to jump to particular points (chapters) in the video
 * Descriptions (not supported yet) - audio descriptions that are read back to the user by a screen reading device
 */

// Player Additions - Functions add to the player object for easier access to tracks

/**
 * List of associated text tracks
 * @type {Array}
 * @private
 */
vjs.Player.prototype.textTracks_;

/**
 * Get an array of associated text tracks. captions, subtitles, chapters, descriptions
 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-texttracks
 * @return {Array}           Array of track objects
 * @private
 */
vjs.Player.prototype.textTracks = function(){
  this.textTracks_ = this.textTracks_ || [];
  return this.textTracks_;
};

/**
 * Add a text track
 * In addition to the W3C settings we allow adding additional info through options.
 * http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#dom-media-addtexttrack
 * @param {String}  kind        Captions, subtitles, chapters, descriptions, or metadata
 * @param {String=} label       Optional label
 * @param {String=} language    Optional language
 * @param {Object=} options     Additional track options, like src
 * @private
 */
vjs.Player.prototype.addTextTrack = function(kind, label, language, options){
  var tracks = this.textTracks_ = this.textTracks_ || [];
  options = options || {};

  options['kind'] = kind;
  options['label'] = label;
  options['language'] = language;

  // HTML5 Spec says default to subtitles.
  // Uppercase first letter to match class names
  var Kind = vjs.capitalize(kind || 'subtitles');

  // Create correct texttrack class. CaptionsTrack, etc.
  var track = new window['videojs'][Kind + 'Track'](this, options);

  tracks.push(track);

  // If track.dflt() is set, start showing immediately
  // TODO: Add a process to deterime the best track to show for the specific kind
  // Incase there are mulitple defaulted tracks of the same kind
  // Or the user has a set preference of a specific language that should override the default
  // Note: The setTimeout is a workaround because with the html5 tech, the player is 'ready'
 //  before it's child components (including the textTrackDisplay) have finished loading.
  if (track.dflt()) {
    this.ready(function(){
      setTimeout(function(){
        track.player().showTextTrack(track.id());
      }, 0);
    });
  }

  return track;
};

/**
 * Add an array of text tracks. captions, subtitles, chapters, descriptions
 * Track objects will be stored in the player.textTracks() array
 * @param {Array} trackList Array of track elements or objects (fake track elements)
 * @private
 */
vjs.Player.prototype.addTextTracks = function(trackList){
  var trackObj;

  for (var i = 0; i < trackList.length; i++) {
    trackObj = trackList[i];
    this.addTextTrack(trackObj['kind'], trackObj['label'], trackObj['language'], trackObj);
  }

  return this;
};

// Show a text track
// disableSameKind: disable all other tracks of the same kind. Value should be a track kind (captions, etc.)
vjs.Player.prototype.showTextTrack = function(id, disableSameKind){
  var tracks = this.textTracks_,
      i = 0,
      j = tracks.length,
      track, showTrack, kind;

  // Find Track with same ID
  for (;i<j;i++) {
    track = tracks[i];
    if (track.id() === id) {
      track.show();
      showTrack = track;

    // Disable tracks of the same kind
    } else if (disableSameKind && track.kind() == disableSameKind && track.mode() > 0) {
      track.disable();
    }
  }

  // Get track kind from shown track or disableSameKind
  kind = (showTrack) ? showTrack.kind() : ((disableSameKind) ? disableSameKind : false);

  // Trigger trackchange event, captionstrackchange, subtitlestrackchange, etc.
  if (kind) {
    this.trigger(kind+'trackchange');
  }

  return this;
};

/**
 * The base class for all text tracks
 *
 * Handles the parsing, hiding, and showing of text track cues
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
vjs.TextTrack = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    // Apply track info to track object
    // Options will often be a track element

    // Build ID if one doesn't exist
    this.id_ = options['id'] || ('vjs_' + options['kind'] + '_' + options['language'] + '_' + vjs.guid++);
    this.src_ = options['src'];
    // 'default' is a reserved keyword in js so we use an abbreviated version
    this.dflt_ = options['default'] || options['dflt'];
    this.title_ = options['title'];
    this.language_ = options['srclang'];
    this.label_ = options['label'];
    this.cues_ = [];
    this.activeCues_ = [];
    this.readyState_ = 0;
    this.mode_ = 0;

    this.player_.on('fullscreenchange', vjs.bind(this, this.adjustFontSize));
  }
});

/**
 * Track kind value. Captions, subtitles, etc.
 * @private
 */
vjs.TextTrack.prototype.kind_;

/**
 * Get the track kind value
 * @return {String}
 */
vjs.TextTrack.prototype.kind = function(){
  return this.kind_;
};

/**
 * Track src value
 * @private
 */
vjs.TextTrack.prototype.src_;

/**
 * Get the track src value
 * @return {String}
 */
vjs.TextTrack.prototype.src = function(){
  return this.src_;
};

/**
 * Track default value
 * If default is used, subtitles/captions to start showing
 * @private
 */
vjs.TextTrack.prototype.dflt_;

/**
 * Get the track default value. ('default' is a reserved keyword)
 * @return {Boolean}
 */
vjs.TextTrack.prototype.dflt = function(){
  return this.dflt_;
};

/**
 * Track title value
 * @private
 */
vjs.TextTrack.prototype.title_;

/**
 * Get the track title value
 * @return {String}
 */
vjs.TextTrack.prototype.title = function(){
  return this.title_;
};

/**
 * Language - two letter string to represent track language, e.g. 'en' for English
 * Spec def: readonly attribute DOMString language;
 * @private
 */
vjs.TextTrack.prototype.language_;

/**
 * Get the track language value
 * @return {String}
 */
vjs.TextTrack.prototype.language = function(){
  return this.language_;
};

/**
 * Track label e.g. 'English'
 * Spec def: readonly attribute DOMString label;
 * @private
 */
vjs.TextTrack.prototype.label_;

/**
 * Get the track label value
 * @return {String}
 */
vjs.TextTrack.prototype.label = function(){
  return this.label_;
};

/**
 * All cues of the track. Cues have a startTime, endTime, text, and other properties.
 * Spec def: readonly attribute TextTrackCueList cues;
 * @private
 */
vjs.TextTrack.prototype.cues_;

/**
 * Get the track cues
 * @return {Array}
 */
vjs.TextTrack.prototype.cues = function(){
  return this.cues_;
};

/**
 * ActiveCues is all cues that are currently showing
 * Spec def: readonly attribute TextTrackCueList activeCues;
 * @private
 */
vjs.TextTrack.prototype.activeCues_;

/**
 * Get the track active cues
 * @return {Array}
 */
vjs.TextTrack.prototype.activeCues = function(){
  return this.activeCues_;
};

/**
 * ReadyState describes if the text file has been loaded
 * const unsigned short NONE = 0;
 * const unsigned short LOADING = 1;
 * const unsigned short LOADED = 2;
 * const unsigned short ERROR = 3;
 * readonly attribute unsigned short readyState;
 * @private
 */
vjs.TextTrack.prototype.readyState_;

/**
 * Get the track readyState
 * @return {Number}
 */
vjs.TextTrack.prototype.readyState = function(){
  return this.readyState_;
};

/**
 * Mode describes if the track is showing, hidden, or disabled
 * const unsigned short OFF = 0;
 * const unsigned short HIDDEN = 1; (still triggering cuechange events, but not visible)
 * const unsigned short SHOWING = 2;
 * attribute unsigned short mode;
 * @private
 */
vjs.TextTrack.prototype.mode_;

/**
 * Get the track mode
 * @return {Number}
 */
vjs.TextTrack.prototype.mode = function(){
  return this.mode_;
};

/**
 * Change the font size of the text track to make it larger when playing in fullscreen mode
 * and restore it to its normal size when not in fullscreen mode.
 */
vjs.TextTrack.prototype.adjustFontSize = function(){
    if (this.player_.isFullScreen()) {
        // Scale the font by the same factor as increasing the video width to the full screen window width.
        // Additionally, multiply that factor by 1.4, which is the default font size for
        // the caption track (from the CSS)
        this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + '%';
    } else {
        // Change the font size of the text track back to its original non-fullscreen size
        this.el_.style.fontSize = '';
    }
};

/**
 * Create basic div to hold cue text
 * @return {Element}
 */
vjs.TextTrack.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-' + this.kind_ + ' vjs-text-track'
  });
};

/**
 * Show: Mode Showing (2)
 * Indicates that the text track is active. If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
 * The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
 * In addition, for text tracks whose kind is subtitles or captions, the cues are being displayed over the video as appropriate;
 * for text tracks whose kind is descriptions, the user agent is making the cues available to the user in a non-visual fashion;
 * and for text tracks whose kind is chapters, the user agent is making available to the user a mechanism by which the user can navigate to any point in the media resource by selecting a cue.
 * The showing by default state is used in conjunction with the default attribute on track elements to indicate that the text track was enabled due to that attribute.
 * This allows the user agent to override the state if a later track is discovered that is more appropriate per the user's preferences.
 */
vjs.TextTrack.prototype.show = function(){
  this.activate();

  this.mode_ = 2;

  // Show element.
  vjs.Component.prototype.show.call(this);
};

/**
 * Hide: Mode Hidden (1)
 * Indicates that the text track is active, but that the user agent is not actively displaying the cues.
 * If no attempt has yet been made to obtain the track's cues, the user agent will perform such an attempt momentarily.
 * The user agent is maintaining a list of which cues are active, and events are being fired accordingly.
 */
vjs.TextTrack.prototype.hide = function(){
  // When hidden, cues are still triggered. Disable to stop triggering.
  this.activate();

  this.mode_ = 1;

  // Hide element.
  vjs.Component.prototype.hide.call(this);
};

/**
 * Disable: Mode Off/Disable (0)
 * Indicates that the text track is not active. Other than for the purposes of exposing the track in the DOM, the user agent is ignoring the text track.
 * No cues are active, no events are fired, and the user agent will not attempt to obtain the track's cues.
 */
vjs.TextTrack.prototype.disable = function(){
  // If showing, hide.
  if (this.mode_ == 2) { this.hide(); }

  // Stop triggering cues
  this.deactivate();

  // Switch Mode to Off
  this.mode_ = 0;
};

/**
 * Turn on cue tracking. Tracks that are showing OR hidden are active.
 */
vjs.TextTrack.prototype.activate = function(){
  // Load text file if it hasn't been yet.
  if (this.readyState_ === 0) { this.load(); }

  // Only activate if not already active.
  if (this.mode_ === 0) {
    // Update current cue on timeupdate
    // Using unique ID for bind function so other tracks don't remove listener
    this.player_.on('timeupdate', vjs.bind(this, this.update, this.id_));

    // Reset cue time on media end
    this.player_.on('ended', vjs.bind(this, this.reset, this.id_));

    // Add to display
    if (this.kind_ === 'captions' || this.kind_ === 'subtitles') {
      this.player_.getChild('textTrackDisplay').addChild(this);
    }
  }
};

/**
 * Turn off cue tracking.
 */
vjs.TextTrack.prototype.deactivate = function(){
  // Using unique ID for bind function so other tracks don't remove listener
  this.player_.off('timeupdate', vjs.bind(this, this.update, this.id_));
  this.player_.off('ended', vjs.bind(this, this.reset, this.id_));
  this.reset(); // Reset

  // Remove from display
  this.player_.getChild('textTrackDisplay').removeChild(this);
};

// A readiness state
// One of the following:
//
// Not loaded
// Indicates that the text track is known to exist (e.g. it has been declared with a track element), but its cues have not been obtained.
//
// Loading
// Indicates that the text track is loading and there have been no fatal errors encountered so far. Further cues might still be added to the track.
//
// Loaded
// Indicates that the text track has been loaded with no fatal errors. No new cues will be added to the track except if the text track corresponds to a MutableTextTrack object.
//
// Failed to load
// Indicates that the text track was enabled, but when the user agent attempted to obtain it, this failed in some way (e.g. URL could not be resolved, network error, unknown text track format). Some or all of the cues are likely missing and will not be obtained.
vjs.TextTrack.prototype.load = function(){

  // Only load if not loaded yet.
  if (this.readyState_ === 0) {
    this.readyState_ = 1;
    vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError));
  }

};

vjs.TextTrack.prototype.onError = function(err){
  this.error = err;
  this.readyState_ = 3;
  this.trigger('error');
};

// Parse the WebVTT text format for cue times.
// TODO: Separate parser into own class so alternative timed text formats can be used. (TTML, DFXP)
vjs.TextTrack.prototype.parseCues = function(srcContent) {
  var cue, time, text,
      lines = srcContent.split('\n'),
      line = '', id;

  for (var i=1, j=lines.length; i<j; i++) {
    // Line 0 should be 'WEBVTT', so skipping i=0

    line = vjs.trim(lines[i]); // Trim whitespace and linebreaks

    if (line) { // Loop until a line with content

      // First line could be an optional cue ID
      // Check if line has the time separator
      if (line.indexOf('-->') == -1) {
        id = line;
        // Advance to next line for timing.
        line = vjs.trim(lines[++i]);
      } else {
        id = this.cues_.length;
      }

      // First line - Number
      cue = {
        id: id, // Cue Number
        index: this.cues_.length // Position in Array
      };

      // Timing line
      time = line.split(/[\t ]+/);
      cue.startTime = this.parseCueTime(time[0]);
      cue.endTime = this.parseCueTime(time[2]);

      // Additional lines - Cue Text
      text = [];

      // Loop until a blank line or end of lines
      // Assumeing trim('') returns false for blank lines
      while (lines[++i] && (line = vjs.trim(lines[i]))) {
        text.push(line);
      }

      cue.text = text.join('<br/>');

      // Add this cue
      this.cues_.push(cue);
    }
  }

  this.readyState_ = 2;
  this.trigger('loaded');
};


vjs.TextTrack.prototype.parseCueTime = function(timeText) {
  var parts = timeText.split(':'),
      time = 0,
      hours, minutes, other, seconds, ms;

  // Check if optional hours place is included
  // 00:00:00.000 vs. 00:00.000
  if (parts.length == 3) {
    hours = parts[0];
    minutes = parts[1];
    other = parts[2];
  } else {
    hours = 0;
    minutes = parts[0];
    other = parts[1];
  }

  // Break other (seconds, milliseconds, and flags) by spaces
  // TODO: Make additional cue layout settings work with flags
  other = other.split(/\s+/);
  // Remove seconds. Seconds is the first part before any spaces.
  seconds = other.splice(0,1)[0];
  // Could use either . or , for decimal
  seconds = seconds.split(/\.|,/);
  // Get milliseconds
  ms = parseFloat(seconds[1]);
  seconds = seconds[0];

  // hours => seconds
  time += parseFloat(hours) * 3600;
  // minutes => seconds
  time += parseFloat(minutes) * 60;
  // Add seconds
  time += parseFloat(seconds);
  // Add milliseconds
  if (ms) { time += ms/1000; }

  return time;
};

// Update active cues whenever timeupdate events are triggered on the player.
vjs.TextTrack.prototype.update = function(){
  if (this.cues_.length > 0) {

    // Get current player time, adjust for track offset
    var offset = this.player_.options()['trackTimeOffset'] || 0;
    var time = this.player_.currentTime() + offset;

    // Check if the new time is outside the time box created by the the last update.
    if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time) {
      var cues = this.cues_,

          // Create a new time box for this state.
          newNextChange = this.player_.duration(), // Start at beginning of the timeline
          newPrevChange = 0, // Start at end

          reverse = false, // Set the direction of the loop through the cues. Optimized the cue check.
          newCues = [], // Store new active cues.

          // Store where in the loop the current active cues are, to provide a smart starting point for the next loop.
          firstActiveIndex, lastActiveIndex,
          cue, i; // Loop vars

      // Check if time is going forwards or backwards (scrubbing/rewinding)
      // If we know the direction we can optimize the starting position and direction of the loop through the cues array.
      if (time >= this.nextChange || this.nextChange === undefined) { // NextChange should happen
        // Forwards, so start at the index of the first active cue and loop forward
        i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0;
      } else {
        // Backwards, so start at the index of the last active cue and loop backward
        reverse = true;
        i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1;
      }

      while (true) { // Loop until broken
        cue = cues[i];

        // Cue ended at this point
        if (cue.endTime <= time) {
          newPrevChange = Math.max(newPrevChange, cue.endTime);

          if (cue.active) {
            cue.active = false;
          }

          // No earlier cues should have an active start time.
          // Nevermind. Assume first cue could have a duration the same as the video.
          // In that case we need to loop all the way back to the beginning.
          // if (reverse && cue.startTime) { break; }

        // Cue hasn't started
        } else if (time < cue.startTime) {
          newNextChange = Math.min(newNextChange, cue.startTime);

          if (cue.active) {
            cue.active = false;
          }

          // No later cues should have an active start time.
          if (!reverse) { break; }

        // Cue is current
        } else {

          if (reverse) {
            // Add cue to front of array to keep in time order
            newCues.splice(0,0,cue);

            // If in reverse, the first current cue is our lastActiveCue
            if (lastActiveIndex === undefined) { lastActiveIndex = i; }
            firstActiveIndex = i;
          } else {
            // Add cue to end of array
            newCues.push(cue);

            // If forward, the first current cue is our firstActiveIndex
            if (firstActiveIndex === undefined) { firstActiveIndex = i; }
            lastActiveIndex = i;
          }

          newNextChange = Math.min(newNextChange, cue.endTime);
          newPrevChange = Math.max(newPrevChange, cue.startTime);

          cue.active = true;
        }

        if (reverse) {
          // Reverse down the array of cues, break if at first
          if (i === 0) { break; } else { i--; }
        } else {
          // Walk up the array fo cues, break if at last
          if (i === cues.length - 1) { break; } else { i++; }
        }

      }

      this.activeCues_ = newCues;
      this.nextChange = newNextChange;
      this.prevChange = newPrevChange;
      this.firstActiveIndex = firstActiveIndex;
      this.lastActiveIndex = lastActiveIndex;

      this.updateDisplay();

      this.trigger('cuechange');
    }
  }
};

// Add cue HTML to display
vjs.TextTrack.prototype.updateDisplay = function(){
  var cues = this.activeCues_,
      html = '',
      i=0,j=cues.length;

  for (;i<j;i++) {
    html += '<span class="vjs-tt-cue">'+cues[i].text+'</span>';
  }

  this.el_.innerHTML = html;
};

// Set all loop helper values back
vjs.TextTrack.prototype.reset = function(){
  this.nextChange = 0;
  this.prevChange = this.player_.duration();
  this.firstActiveIndex = 0;
  this.lastActiveIndex = 0;
};

// Create specific track types
/**
 * The track component for managing the hiding and showing of captions
 *
 * @constructor
 */
vjs.CaptionsTrack = vjs.TextTrack.extend();
vjs.CaptionsTrack.prototype.kind_ = 'captions';
// Exporting here because Track creation requires the track kind
// to be available on global object. e.g. new window['videojs'][Kind + 'Track']

/**
 * The track component for managing the hiding and showing of subtitles
 *
 * @constructor
 */
vjs.SubtitlesTrack = vjs.TextTrack.extend();
vjs.SubtitlesTrack.prototype.kind_ = 'subtitles';

/**
 * The track component for managing the hiding and showing of chapters
 *
 * @constructor
 */
vjs.ChaptersTrack = vjs.TextTrack.extend();
vjs.ChaptersTrack.prototype.kind_ = 'chapters';


/* Text Track Display
============================================================================= */
// Global container for both subtitle and captions text. Simple div container.

/**
 * The component for displaying text track cues
 *
 * @constructor
 */
vjs.TextTrackDisplay = vjs.Component.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.Component.call(this, player, options, ready);

    // This used to be called during player init, but was causing an error
    // if a track should show by default and the display hadn't loaded yet.
    // Should probably be moved to an external track loader when we support
    // tracks that don't need a display.
    if (player.options_['tracks'] && player.options_['tracks'].length > 0) {
      this.player_.addTextTracks(player.options_['tracks']);
    }
  }
});

vjs.TextTrackDisplay.prototype.createEl = function(){
  return vjs.Component.prototype.createEl.call(this, 'div', {
    className: 'vjs-text-track-display'
  });
};


/**
 * The specific menu item type for selecting a language within a text track kind
 *
 * @constructor
 */
vjs.TextTrackMenuItem = vjs.MenuItem.extend({
  /** @constructor */
  init: function(player, options){
    var track = this.track = options['track'];

    // Modify options for parent MenuItem class's init.
    options['label'] = track.label();
    options['selected'] = track.dflt();
    vjs.MenuItem.call(this, player, options);

    this.player_.on(track.kind() + 'trackchange', vjs.bind(this, this.update));
  }
});

vjs.TextTrackMenuItem.prototype.onClick = function(){
  vjs.MenuItem.prototype.onClick.call(this);
  this.player_.showTextTrack(this.track.id_, this.track.kind());
};

vjs.TextTrackMenuItem.prototype.update = function(){
  this.selected(this.track.mode() == 2);
};

/**
 * A special menu item for turning of a specific type of text track
 *
 * @constructor
 */
vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
  /** @constructor */
  init: function(player, options){
    // Create pseudo track info
    // Requires options['kind']
    options['track'] = {
      kind: function() { return options['kind']; },
      player: player,
      label: function(){ return options['kind'] + ' off'; },
      dflt: function(){ return false; },
      mode: function(){ return false; }
    };
    vjs.TextTrackMenuItem.call(this, player, options);
    this.selected(true);
  }
});

vjs.OffTextTrackMenuItem.prototype.onClick = function(){
  vjs.TextTrackMenuItem.prototype.onClick.call(this);
  this.player_.showTextTrack(this.track.id_, this.track.kind());
};

vjs.OffTextTrackMenuItem.prototype.update = function(){
  var tracks = this.player_.textTracks(),
      i=0, j=tracks.length, track,
      off = true;

  for (;i<j;i++) {
    track = tracks[i];
    if (track.kind() == this.track.kind() && track.mode() == 2) {
      off = false;
    }
  }

  this.selected(off);
};

/**
 * The base class for buttons that toggle specific text track types (e.g. subtitles)
 *
 * @constructor
 */
vjs.TextTrackButton = vjs.MenuButton.extend({
  /** @constructor */
  init: function(player, options){
    vjs.MenuButton.call(this, player, options);

    if (this.items.length <= 1) {
      this.hide();
    }
  }
});

// vjs.TextTrackButton.prototype.buttonPressed = false;

// vjs.TextTrackButton.prototype.createMenu = function(){
//   var menu = new vjs.Menu(this.player_);

//   // Add a title list item to the top
//   // menu.el().appendChild(vjs.createEl('li', {
//   //   className: 'vjs-menu-title',
//   //   innerHTML: vjs.capitalize(this.kind_),
//   //   tabindex: -1
//   // }));

//   this.items = this.createItems();

//   // Add menu items to the menu
//   for (var i = 0; i < this.items.length; i++) {
//     menu.addItem(this.items[i]);
//   }

//   // Add list to element
//   this.addChild(menu);

//   return menu;
// };

// Create a menu item for each text track
vjs.TextTrackButton.prototype.createItems = function(){
  var items = [], track;

  // Add an OFF menu item to turn all tracks off
  items.push(new vjs.OffTextTrackMenuItem(this.player_, { 'kind': this.kind_ }));

  for (var i = 0; i < this.player_.textTracks().length; i++) {
    track = this.player_.textTracks()[i];
    if (track.kind() === this.kind_) {
      items.push(new vjs.TextTrackMenuItem(this.player_, {
        'track': track
      }));
    }
  }

  return items;
};

/**
 * The button component for toggling and selecting captions
 *
 * @constructor
 */
vjs.CaptionsButton = vjs.TextTrackButton.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label','Captions Menu');
  }
});
vjs.CaptionsButton.prototype.kind_ = 'captions';
vjs.CaptionsButton.prototype.buttonText = 'Captions';
vjs.CaptionsButton.prototype.className = 'vjs-captions-button';

/**
 * The button component for toggling and selecting subtitles
 *
 * @constructor
 */
vjs.SubtitlesButton = vjs.TextTrackButton.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label','Subtitles Menu');
  }
});
vjs.SubtitlesButton.prototype.kind_ = 'subtitles';
vjs.SubtitlesButton.prototype.buttonText = 'Subtitles';
vjs.SubtitlesButton.prototype.className = 'vjs-subtitles-button';

// Chapters act much differently than other text tracks
// Cues are navigation vs. other tracks of alternative languages
/**
 * The button component for toggling and selecting chapters
 *
 * @constructor
 */
vjs.ChaptersButton = vjs.TextTrackButton.extend({
  /** @constructor */
  init: function(player, options, ready){
    vjs.TextTrackButton.call(this, player, options, ready);
    this.el_.setAttribute('aria-label','Chapters Menu');
  }
});
vjs.ChaptersButton.prototype.kind_ = 'chapters';
vjs.ChaptersButton.prototype.buttonText = 'Chapters';
vjs.ChaptersButton.prototype.className = 'vjs-chapters-button';

// Create a menu item for each text track
vjs.ChaptersButton.prototype.createItems = function(){
  var items = [], track;

  for (var i = 0; i < this.player_.textTracks().length; i++) {
    track = this.player_.textTracks()[i];
    if (track.kind() === this.kind_) {
      items.push(new vjs.TextTrackMenuItem(this.player_, {
        'track': track
      }));
    }
  }

  return items;
};

vjs.ChaptersButton.prototype.createMenu = function(){
  var tracks = this.player_.textTracks(),
      i = 0,
      j = tracks.length,
      track, chaptersTrack,
      items = this.items = [];

  for (;i<j;i++) {
    track = tracks[i];
    if (track.kind() == this.kind_) {
      if (track.readyState() === 0) {
        track.load();
        track.on('loaded', vjs.bind(this, this.createMenu));
      } else {
        chaptersTrack = track;
        break;
      }
    }
  }

  var menu = this.menu;
  if (menu === undefined) {
    menu = new vjs.Menu(this.player_);
    menu.contentEl().appendChild(vjs.createEl('li', {
      className: 'vjs-menu-title',
      innerHTML: vjs.capitalize(this.kind_),
      tabindex: -1
    }));
  }

  if (chaptersTrack) {
    var cues = chaptersTrack.cues_, cue, mi;
    i = 0;
    j = cues.length;

    for (;i<j;i++) {
      cue = cues[i];

      mi = new vjs.ChaptersTrackMenuItem(this.player_, {
        'track': chaptersTrack,
        'cue': cue
      });

      items.push(mi);

      menu.addChild(mi);
    }
    this.addChild(menu);
  }

  if (this.items.length > 0) {
    this.show();
  }

  return menu;
};


/**
 * @constructor
 */
vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
  /** @constructor */
  init: function(player, options){
    var track = this.track = options['track'],
        cue = this.cue = options['cue'],
        currentTime = player.currentTime();

    // Modify options for parent MenuItem class's init.
    options['label'] = cue.text;
    options['selected'] = (cue.startTime <= currentTime && currentTime < cue.endTime);
    vjs.MenuItem.call(this, player, options);

    track.on('cuechange', vjs.bind(this, this.update));
  }
});

vjs.ChaptersTrackMenuItem.prototype.onClick = function(){
  vjs.MenuItem.prototype.onClick.call(this);
  this.player_.currentTime(this.cue.startTime);
  this.update(this.cue.startTime);
};

vjs.ChaptersTrackMenuItem.prototype.update = function(){
  var cue = this.cue,
      currentTime = this.player_.currentTime();

  // vjs.log(currentTime, cue.startTime);
  this.selected(cue.startTime <= currentTime && currentTime < cue.endTime);
};

// Add Buttons to controlBar
vjs.obj.merge(vjs.ControlBar.prototype.options_['children'], {
  'subtitlesButton': {},
  'captionsButton': {},
  'chaptersButton': {}
});

// vjs.Cue = vjs.Component.extend({
//   /** @constructor */
//   init: function(player, options){
//     vjs.Component.call(this, player, options);
//   }
// });
/**
 * @fileoverview Add JSON support
 * @suppress {undefinedVars}
 * (Compiler doesn't like JSON not being declared)
 */

/**
 * Javascript JSON implementation
 * (Parse Method Only)
 * https://github.com/douglascrockford/JSON-js/blob/master/json2.js
 * Only using for parse method when parsing data-setup attribute JSON.
 * @suppress {undefinedVars}
 * @namespace
 * @private
 */
vjs.JSON;

if (typeof window.JSON !== 'undefined' && window.JSON.parse === 'function') {
  vjs.JSON = window.JSON;

} else {
  vjs.JSON = {};

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

  /**
   * parse the json
   *
   * @memberof vjs.JSON
   * @param {String} text The JSON string to parse
   * @param {Function=} [reviver] Optional function that can transform the results
   * @return {Object|Array} The parsed JSON
   */
  vjs.JSON.parse = function (text, reviver) {
      var j;

      function walk(holder, key) {
          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = walk(value, k);
                      if (v !== undefined) {
                          value[k] = v;
                      } else {
                          delete value[k];
                      }
                  }
              }
          }
          return reviver.call(holder, key, value);
      }
      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
          text = text.replace(cx, function (a) {
              return '\\u' +
                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
      }

      if (/^[\],:{}\s]*$/
              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

          j = eval('(' + text + ')');

          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
      }

      throw new SyntaxError('JSON.parse(): invalid or malformed JSON data');
  };
}
/**
 * @fileoverview Functions for automatically setting up a player
 * based on the data-setup attribute of the video tag
 */

// Automatically set up any tags that have a data-setup attribute
vjs.autoSetup = function(){
  var options, vid, player,
      vids = document.getElementsByTagName('video');

  // Check if any media elements exist
  if (vids && vids.length > 0) {

    for (var i=0,j=vids.length; i<j; i++) {
      vid = vids[i];

      // Check if element exists, has getAttribute func.
      // IE seems to consider typeof el.getAttribute == 'object' instead of 'function' like expected, at least when loading the player immediately.
      if (vid && vid.getAttribute) {

        // Make sure this player hasn't already been set up.
        if (vid['player'] === undefined) {
          options = vid.getAttribute('data-setup');

          // Check if data-setup attr exists.
          // We only auto-setup if they've added the data-setup attr.
          if (options !== null) {

            // Parse options JSON
            // If empty string, make it a parsable json object.
            options = vjs.JSON.parse(options || '{}');

            // Create new video.js instance.
            player = videojs(vid, options);
          }
        }

      // If getAttribute isn't defined, we need to wait for the DOM.
      } else {
        vjs.autoSetupTimeout(1);
        break;
      }
    }

  // No videos were found, so keep looping unless page is finished loading.
  } else if (!vjs.windowLoaded) {
    vjs.autoSetupTimeout(1);
  }
};

// Pause to let the DOM keep processing
vjs.autoSetupTimeout = function(wait){
  setTimeout(vjs.autoSetup, wait);
};

if (document.readyState === 'complete') {
  vjs.windowLoaded = true;
} else {
  vjs.one(window, 'load', function(){
    vjs.windowLoaded = true;
  });
}

// Run Auto-load players
// You have to wait at least once in case this script is loaded after your video in the DOM (weird behavior only with minified version)
vjs.autoSetupTimeout(1);
/**
 * the method for registering a video.js plugin
 *
 * @param  {String} name The name of the plugin
 * @param  {Function} init The function that is run when the player inits
 */
vjs.plugin = function(name, init){
  vjs.Player.prototype[name] = init;
};
/**
 * videojs-osmfss-controller
 *
 * Use OSMF STROBE player with Smooth Streaming plugin to playback Smooth and DASH streams inside of Video.js
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @param {Function=} ready
 * @constructor
 */
videojs.Osmfss = videojs.MediaTechController.extend({
    init: function (player, options, ready) {
        vjs.MediaTechController.call(this, player, options, ready);

        var source = options['source'],

            // Which element to embed in
            parentEl = options['parentEl'],

            // Create a temporary element to be replaced by swf object
            placeHolder = this.el_ = vjs.createEl('div', { id: player.id() + '_temp_flash' }),

            // Generate ID for swf object
            objId = player.id()+'_osmfss_api',

            // Store player options in local var for optimization
            // TODO: switch to using player methods instead of options
            // e.g. player.autoplay();
            playerOptions = player.options_,

            // Merge default flashvars with ones passed in to init
            flashVars = vjs.obj.merge({

                'playerId': player.id(),
                'controlBarMode': 'none',
                'playButtonOverlay': 'false',
                'plugin_AdaptiveStreamingPlugin': 'MSAdaptiveStreamingPlugin-v1.0.11-osmf2.0.swf',
                'AdaptiveStreamingPlugin_retryLive': 'true',

                // SWF Callback Function
                'javascriptCallbackFunction': 'videojs.Osmfss.onEvent',

                // Player Settings
                'autoPlay': playerOptions.autoplay,
                'preload': playerOptions.preload,
                'loop': playerOptions.loop,
                'muted': playerOptions.muted

            }, options['flashVars']),

            // Merge default parames with ones passed in
            params = vjs.obj.merge({
                'wmode': 'opaque', // Opaque is needed to overlay controls, but can affect playback performance
                'bgcolor': '#000000' // Using bgcolor prevents a white flash when the object is loading
            }, options['params']),

            // Merge default attributes with ones passed in
            attributes = vjs.obj.merge({
                'id': objId,
                'name': objId, // Both ID and Name needed or swf to identifty itself
                'class': 'vjs-tech'
            }, options['attributes'])
        ;

        options.swf = playerOptions.osmfss.swf;

        player.osmfss = this;
        player.osmfss.seeking_ = false;
        player.osmfss.lastSeekTarget_ = NaN;

        // If source was supplied pass as a flash var.
        if (source) {
            flashVars['src'] = encodeURIComponent(vjs.getAbsoluteURL(source.src));
        }

        // Add placeholder to player div
        vjs.insertFirst(placeHolder, parentEl);

        // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
        // This allows resetting the playhead when we catch the reload
        if (options['startTime']) {
            this.ready(function () {
                this.load();
                this.play();
                this['currentTime'](options['startTime']);
            });
        }

        // firefox doesn't bubble mousemove events to parent. videojs/video-js-swf#37
        // bugzilla bug: https://bugzilla.mozilla.org/show_bug.cgi?id=836786
        if (vjs.IS_FIREFOX) {
            this.ready(function () {
                vjs.on(this.el(), 'mousemove', vjs.bind(this, function () {
                    // since it's a custom event, don't bubble higher than the player
                    this.player().trigger({ 'type': 'mousemove', 'bubbles': false });
                }));
            });
        }

        // native click events on the SWF aren't triggered on IE11, Win8.1RT
        // use stageclick events triggered from inside the SWF instead
        player.on('stageclick', player.reportUserActivity);

        this.el_ = vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes);
    }
});


(function () {
    // Create setters and getters for attributes
    var api = videojs.Osmfss.prototype,
        readWrite = 'autoplay,controller,controls,defaultMuted,defaultPlaybackRate,loop,mediaGroup,muted,playbackRate,preload,volume'.split(','),
        readOnly = 'audioTracks,currentSrc,duration,ended,error,initialTime,paused,played,readyState,seekable,seeking,startOffsetTime,textTracks,videoHeight,videoTracks,videoWidth'.split(','),
        // Overridden: buffered, currentTime
        i;

    function createSetter(attr) {
        var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
        api['set' + attrUpper] = function (val) {
            return this.el_['set' + attrUpper](val);
        };
    };

    function createGetter(attr) {
        api[attr] = function () {
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            return this.el_['get' + attrUpper]();
        };
    };

    // Create getter and setters for all read/write attributes
    for (i = 0; i < readWrite.length; i++) {
        createGetter(readWrite[i]);
        createSetter(readWrite[i]);
    }

    // Create getters for read-only attributes
    for (i = 0; i < readOnly.length; i++) {
        createGetter(readOnly[i]);
    }
})();

/* Flash Support Testing -------------------------------------------------------- */

videojs.Osmfss.isSupported = function () {
    return vjs.Flash.isSupported();
};

videojs.Osmfss.canPlaySource = function (srcObj) {
    var type;

    if (!srcObj.type) {
        return '';
    }

    type = srcObj.type.replace(/;.*/, '').toLowerCase();

    if (type in videojs.Osmfss.formats) {
        return 'maybe';
    }
};

videojs.Osmfss.prototype.dispose = function () {
    vjs.MediaTechController.prototype.dispose.call(this);
};

// TODO: Figure out network state
videojs.Osmfss.prototype.networkState = function () {
    return 1;
};

videojs.Osmfss.prototype.load = function () {
    this.el_.load();
};

videojs.Osmfss.prototype.play = function () {
    this.el_.play2();
};

videojs.Osmfss.prototype.pause = function () {
    this.el_.pause();
};

videojs.Osmfss.prototype.currentTime = function () {
    // when seeking make the reported time keep up with the requested time
    // by reading the time we're seeking to
    if (this.seeking()) {
        return this.lastSeekTarget_ || 0;
    }
    return this.el_.getCurrentTime();
};

videojs.Osmfss.prototype.setCurrentTime = function (time) {
    // seek only after pause event is signaled
    this.seeking_ = true;
    this.lastSeekTarget_ = time;
    this.el_.pause();
};

// TODO: handle discontinuities
videojs.Osmfss.prototype.buffered = function () {
    return videojs.createTimeRange(0, this.el_.getBufferTime());
};

videojs.Osmfss.prototype.supportsFullScreen = function () {
    return false; // Flash does not allow fullscreen through javascript
};

videojs.Osmfss.prototype.enterFullScreen = function () {
    return false;
};

videojs.Osmfss.formats = {
    'application/vnd.ms-sstr+xml': 'ISMC',
    'application/dash+xml': 'MPD'
};

videojs.Osmfss.onReady = function (currentSwf) {
    videojs.log(currentSwf, 'Ready');

    var el, player;

    el = vjs.el(currentSwf);
    this.el_ = el;

    // get player from the player div property
    player = el && el.parentNode && el.parentNode['player'];

    // if there is no el or player then the tech has been disposed
    // and the tech element was removed from the player div
    if (player) {
        // reference player on tech element
        el['player'] = player;

        // check that the flash object is really ready
        if(videojs.Osmfss.checkReady(player.osmfss)) {
            var source = player.currentSrc();
            if (source && source.length > 0) {
                el.setSrc(source);
            }
        }
    }
};

// The SWF isn't always ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
videojs.Osmfss.checkReady = function (tech) {
    // stop worrying if the tech has been disposed
    if (!tech.el()) {
        return false;
    }

    // check if API getBufferTime exists
    if (tech.el().getBufferTime) {
        // tell tech it's ready
        tech.triggerReady();
        return true;
    } else {
        // wait longer
        setTimeout(function () {
            videojs.Osmfss.checkReady(tech);
        }, 50);
    }
    return false;
};

// Trigger events from the swf on the player
videojs.Osmfss.onEvent = function (currentSwf, event) {

    try {
        if ('onJavaScriptBridgeCreated' === event) {
            videojs.Osmfss.onReady(currentSwf);
            return;
        }

        var player = videojs.el(currentSwf)['player'];

        if ('play' === event) {
            videojs.log(currentSwf, 'Event: playing');
            player.trigger('playing');
        }

        if ('pause' === event ) {
            if (player.osmfss.seeking_) {
                // Complete seek operation
                player.osmfss.el_.setCurrentTime(player.osmfss.lastSeekTarget_);
                player.osmfss.seeking_ = false;
            }
        }

        if ('seeked' === event) {
            // Resume play after seek
            player.osmfss.play();
        }

        // Trigger events from the swf on the player
        player.trigger(event);

        if ('timeupdate' !== event) {
            videojs.log(currentSwf, 'Event:', event);
        }
    }
    catch (e) {
        // Exceptions in the Flash callback function get caught by
        // the Flash bridge and would go unreported without this.
        videojs.log(currentSwf, 'Event:', event, e);
        throw e;
    }
};


// Add this to the top of the list of available media playback technologies
videojs.options.techOrder.unshift('osmfss');

videojs.options.osmfss = {};
/**
 * videojs-onePlayer-controller
 *
 * Use OnePlayer.js to playback multiple formats inside of Video.js
 * 
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @param {Function=} ready
 * @constructor
 */
videojs.OnePlayer = videojs.Html5.extend({
    init: function(player, options, ready) {
        var source, context, mediaPlayer;

        source = options.source;
        // need to remove the source so the HTML5 controller
        // doesn't try to use it
        delete options.source;

        // run the init of the HTML5 controller
        videojs.Html5.call(this, player, options, ready);

        // disable native element controls
        this.el().controls = false;

        mediaPlayer = OnePlayer.CreateVideoElement(this.el());

        mediaPlayer.autoplay = options.autoplay;

        // Attach the source if one was provided
        if (source && this.el_.currentSrc !== source.src) {
            mediaPlayer.src = source.src;
        }

        player.mediaPlayer = mediaPlayer;
    }
});

videojs.OnePlayer.prototype.src = function (src) {
    if (src === undefined) {
        return this.player().mediaPlayer.src;
    } else {
        this.player().mediaPlayer.src = src;
    }
}

// TODO: remove - This method is only needed until we add
// support for setting currentTime on the video element
videojs.OnePlayer.prototype.setCurrentTime = function (time) {
    this.player().mediaPlayer.currentTime = time;
};

videojs.OnePlayer.isSupported = function() {
    return !!window.MediaSource;
};

videojs.OnePlayer.canPlaySource = function(srcObj) {
    if (srcObj.type === 'application/dash+xml') {
        // TODO: allow codec info and check browser support
        return 'maybe';
    } else {
        return '';
    }
};

// add this to the top of the list of available media playback technologies
videojs.options.techOrder.unshift('onePlayer');
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a;a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var b="Promise"in a&&"resolve"in a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){if(!v(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof i))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],k(b,c,d,f);a._subscribers=null}function n(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(u(b)&&(d=b.then,v(d)))return d.call(b,function(d){return c?!0:(c=!0,b!==d?o(a,d):p(a,d),void 0)},function(b){return c?!0:(c=!0,q(a,b),void 0)}),!0}catch(e){return c?!0:(q(a,e),!0)}return!1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)})}else l(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}();/*
 Copyright 2011 Abdulla Abdurakhmanov
 Original sources are available at https://code.google.com/p/x2js/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

function X2JS(matchers, attrPrefix, ignoreRoot) {
    if (attrPrefix === null || attrPrefix === undefined) {
        attrPrefix = "_";
    }
    
    if (ignoreRoot === null || ignoreRoot === undefined) {
        ignoreRoot = false;
    }
    
	var VERSION = "1.0.11";
	var escapeMode = false;

	var DOMNodeTypes = {
		ELEMENT_NODE 	   : 1,
		TEXT_NODE    	   : 3,
		CDATA_SECTION_NODE : 4,
		COMMENT_NODE       : 8,
		DOCUMENT_NODE 	   : 9
	};
	
	function getNodeLocalName( node ) {
		var nodeLocalName = node.localName;			
		if(nodeLocalName == null) // Yeah, this is IE!! 
			nodeLocalName = node.baseName;
		if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
			nodeLocalName = node.nodeName;
		return nodeLocalName;
	}
	
	function getNodePrefix(node) {
		return node.prefix;
	}
		
	function escapeXmlChars(str) {
		if(typeof(str) == "string")
			return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
		else
			return str;
	}

	function unescapeXmlChars(str) {
		return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, '\/')
	}	

	function parseDOMChildren( node ) {
		if(node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
			var result,
			    child = node.firstChild,
			    i,
			    len; 
			
			// get the first node that isn't a comment
			for(i = 0, len = node.childNodes.length; i < len; i += 1) {
			   if (node.childNodes[i].nodeType !== DOMNodeTypes.COMMENT_NODE) {
			       child = node.childNodes[i];
			       break;
			   } 
			}
			
			if ( ignoreRoot ) {
			    result = parseDOMChildren(child);
			} else {
			    result = {};
			    var childName = getNodeLocalName(child);
                result[childName] = parseDOMChildren(child);
			}
			
			return result;
		}
		else
		if(node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
			var result = new Object;
			result.__cnt=0;
			
			var nodeChildren = node.childNodes;
			
			// Children nodes
			for(var cidx=0; cidx <nodeChildren.length; cidx++) {
				var child = nodeChildren.item(cidx); // nodeChildren[cidx];
				var childName = getNodeLocalName(child);
				
				result.__cnt++;
				if(result[childName] == null) {
					result[childName] = parseDOMChildren(child);
					result[childName+"_asArray"] = new Array(1);
					result[childName+"_asArray"][0] = result[childName];
				}
				else {
					if(result[childName] != null) {
						if( !(result[childName] instanceof Array)) {
							var tmpObj = result[childName];
							result[childName] = new Array();
							result[childName][0] = tmpObj;
							
							result[childName+"_asArray"] = result[childName];
						}
					}
					var aridx = 0;
					while(result[childName][aridx]!=null) aridx++;
					(result[childName])[aridx] = parseDOMChildren(child);
				}			
			}
			
			// Attributes
			for(var aidx=0; aidx <node.attributes.length; aidx++) {
				var attr = node.attributes.item(aidx); // [aidx];
				result.__cnt++;
				
				var value2 = attr.value;
				for(var m=0, ml=matchers.length; m < ml; m++) {
				    var matchobj = matchers[m];
				    if (matchobj.test.call(this, attr.value))
				        value2 = matchobj.converter.call(this, attr.value);
				}
				
				result[attrPrefix+attr.name]=value2;
			}
			
			// Node namespace prefix
			var nodePrefix = getNodePrefix(node);
			if(nodePrefix!=null && nodePrefix!="") {
				result.__cnt++;
				result.__prefix=nodePrefix;
			}
			
			if( result.__cnt == 1 && result["#text"]!=null  ) {
				result = result["#text"];
			} 
			
			if(result["#text"]!=null) {
				result.__text = result["#text"];
				if(escapeMode)
					result.__text = unescapeXmlChars(result.__text)
				delete result["#text"];
				delete result["#text_asArray"];
			}
			if(result["#cdata-section"]!=null) {
				result.__cdata = result["#cdata-section"];
				delete result["#cdata-section"];
				delete result["#cdata-section_asArray"];
			}
			
			if(result.__text!=null || result.__cdata!=null) {
				result.toString = function() {
					return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
				}
			}
			return result;
		}
		else
		if(node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
			return node.nodeValue;
		}	
		else
		if(node.nodeType == DOMNodeTypes.COMMENT_NODE) {
		    return null;
		}
	}
	
	function startTag(jsonObj, element, attrList, closed) {
		var resultStr = "<"+ ( (jsonObj!=null && jsonObj.__prefix!=null)? (jsonObj.__prefix+":"):"") + element;
		if(attrList!=null) {
			for(var aidx = 0; aidx < attrList.length; aidx++) {
				var attrName = attrList[aidx];
				var attrVal = jsonObj[attrName];
				resultStr+=" "+attrName.substr(1)+"='"+attrVal+"'";
			}
		}
		if(!closed)
			resultStr+=">";
		else
			resultStr+="/>";
		return resultStr;
	}
	
	function endTag(jsonObj,elementName) {
		return "</"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"")+elementName+">";
	}
	
	function endsWith(str, suffix) {
	    return str.indexOf(suffix, str.length - suffix.length) !== -1;
	}
	
	function jsonXmlSpecialElem ( jsonObj, jsonObjField ) {
		if(endsWith(jsonObjField.toString(),("_asArray")) 
				|| jsonObjField.toString().indexOf("_")==0 
				|| (jsonObj[jsonObjField] instanceof Function) )
			return true;
		else
			return false;
	}
	
	function jsonXmlElemCount ( jsonObj ) {
		var elementsCnt = 0;
		if(jsonObj instanceof Object ) {
			for( var it in jsonObj  ) {
				if(jsonXmlSpecialElem ( jsonObj, it) )
					continue;			
				elementsCnt++;
			}
		}
		return elementsCnt;
	}
	
	function parseJSONAttributes ( jsonObj ) {
		var attrList = [];
		if(jsonObj instanceof Object ) {
			for( var ait in jsonObj  ) {
				if(ait.toString().indexOf("__")== -1 && ait.toString().indexOf("_")==0) {
					attrList.push(ait);
				}
			}
		}
		return attrList;
	}
	
	function parseJSONTextAttrs ( jsonTxtObj ) {
		var result ="";
		
		if(jsonTxtObj.__cdata!=null) {										
			result+="<![CDATA["+jsonTxtObj.__cdata+"]]>";					
		}
		
		if(jsonTxtObj.__text!=null) {			
			if(escapeMode)
				result+=escapeXmlChars(jsonTxtObj.__text);
			else
				result+=jsonTxtObj.__text;
		}
		return result
	}
	
	function parseJSONTextObject ( jsonTxtObj ) {
		var result ="";

		if( jsonTxtObj instanceof Object ) {
			result+=parseJSONTextAttrs ( jsonTxtObj )
		}
		else
			if(jsonTxtObj!=null) {
				if(escapeMode)
					result+=escapeXmlChars(jsonTxtObj);
				else
					result+=jsonTxtObj;
			}
		
		return result;
	}
	
	function parseJSONArray ( jsonArrRoot, jsonArrObj, attrList ) {
		var result = ""; 
		if(jsonArrRoot.length == 0) {
			result+=startTag(jsonArrRoot, jsonArrObj, attrList, true);
		}
		else {
			for(var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {
				result+=startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
				result+=parseJSONObject(jsonArrRoot[arIdx]);
				result+=endTag(jsonArrRoot[arIdx],jsonArrObj);						
			}
		}
		return result;
	}
	
	function parseJSONObject ( jsonObj ) {
		var result = "";	

		var elementsCnt = jsonXmlElemCount ( jsonObj );
		
		if(elementsCnt > 0) {
			for( var it in jsonObj ) {
				
				if(jsonXmlSpecialElem ( jsonObj, it) )
					continue;			
				
				var subObj = jsonObj[it];						
				
				var attrList = parseJSONAttributes( subObj )
				
				if(subObj == null || subObj == undefined) {
					result+=startTag(subObj, it, attrList, true)
				}
				else
				if(subObj instanceof Object) {
					
					if(subObj instanceof Array) {					
						result+=parseJSONArray( subObj, it, attrList )					
					}
					else {
						var subObjElementsCnt = jsonXmlElemCount ( subObj );
						if(subObjElementsCnt > 0 || subObj.__text!=null || subObj.__cdata!=null) {
							result+=startTag(subObj, it, attrList, false);
							result+=parseJSONObject(subObj);
							result+=endTag(subObj,it);
						}
						else {
							result+=startTag(subObj, it, attrList, true);
						}
					}
				}
				else {
					result+=startTag(subObj, it, attrList, false);
					result+=parseJSONTextObject(subObj);
					result+=endTag(subObj,it);
				}
			}
		}
		result+=parseJSONTextObject(jsonObj);
		
		return result;
	}
	
	this.parseXmlString = function(xmlDocStr) {
		var xmlDoc;
		if (window.DOMParser) {
			var parser=new window.DOMParser();			
			xmlDoc = parser.parseFromString( xmlDocStr, "text/xml" );
		}
		else {
			// IE :(
			if(xmlDocStr.indexOf("<?")==0) {
				xmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf("?>") + 2 );
			}
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async="false";
			xmlDoc.loadXML(xmlDocStr);
		}
		return xmlDoc;
	}

	this.xml2json = function (xmlDoc) {
		return parseDOMChildren ( xmlDoc );
	}
	
	this.xml_str2json = function (xmlDocStr) {
		var xmlDoc = this.parseXmlString(xmlDocStr);	
		return this.xml2json(xmlDoc);
	}

	this.json2xml_str = function (jsonObj) {
		return parseJSONObject ( jsonObj );
	}

	this.json2xml = function (jsonObj) {
		var xmlDocStr = this.json2xml_str (jsonObj);
		return this.parseXmlString(xmlDocStr);
	}
	
	this.getVersion = function () {
		return VERSION;
	}		
	
	this.escapeMode = function(enabled) {
		escapeMode = enabled;
	}
}/*
 * The copyright in this software is being made available under the BSD License, included below. This software may be subject to other third party and contributor rights, including patent rights, and no such rights are granted under this license.
 * 
 * Copyright (c) 2013, Digital Primates
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * •  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * •  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * •  Neither the name of the Digital Primates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*jshint -W020 */
Dash = (function () {
    "use strict";

    return {
        modules: {},
        dependencies: {},
        vo: {},
        di: {}
    };
}());/*
 * The copyright in this software is being made available under the BSD License, included below. This software may be subject to other third party and contributor rights, including patent rights, and no such rights are granted under this license.
 * 
 * Copyright (c) 2013, Digital Primates
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * •  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * •  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * •  Neither the name of the Digital Primates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
Dash.dependencies.DashParser = function () {
    "use strict";

    var SECONDS_IN_YEAR = 365 * 24 * 60 * 60,
        SECONDS_IN_MONTH = 30 * 24 * 60 * 60, // not precise!
        SECONDS_IN_DAY = 24 * 60 * 60,
        SECONDS_IN_HOUR = 60 * 60,
        SECONDS_IN_MIN = 60,
        MINUTES_IN_HOUR = 60,
        MILLISECONDS_IN_SECONDS = 1000,
        durationRegex = /^P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
        datetimeRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})([0-9]{2}))?/,
        numericRegex = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
        matchers = [
            {
                type: "duration",
                test: function (str) {
                    return durationRegex.test(str);
                },
                converter: function (str) {
                    //str = "P10Y10M10DT10H10M10.1S";
                    var match = durationRegex.exec(str);
                    return (parseFloat(match[2] || 0) * SECONDS_IN_YEAR +
                            parseFloat(match[4] || 0) * SECONDS_IN_MONTH +
                            parseFloat(match[6] || 0) * SECONDS_IN_DAY +
                            parseFloat(match[8] || 0) * SECONDS_IN_HOUR +
                            parseFloat(match[10] || 0) * SECONDS_IN_MIN +
                            parseFloat(match[12] || 0));
                }
            },
            {
                type: "datetime",
                test: function (str) {
                    return datetimeRegex.test(str);
                },
                converter: function (str) {
                    var match = datetimeRegex.exec(str),
                        utcDate;
                    // If the string does not contain a timezone offset different browsers can interpret it either
                    // as UTC or as a local time so we have to parse the string manually to normalize the given date value for
                    // all browsers
                    utcDate = Date.UTC(
                        parseInt(match[1], 10),
                        parseInt(match[2], 10)-1, // months start from zero
                        parseInt(match[3], 10),
                        parseInt(match[4], 10),
                        parseInt(match[5], 10),
                        (match[6] && parseInt(match[6], 10) || 0),
                        (match[7] && parseFloat(match[7]) * MILLISECONDS_IN_SECONDS) || 0);
                    // If the date has timezone offset take it into account as well
                    if (match[9] && match[10]) {
                        var timezoneOffset = parseInt(match[9], 10) * MINUTES_IN_HOUR + parseInt(match[10], 10);
                        utcDate += (match[8] === '+' ? -1 : +1) * timezoneOffset * SECONDS_IN_MIN * MILLISECONDS_IN_SECONDS;
                    }

                    return new Date(utcDate);
                }
            },
            {
                type: "numeric",
                test: function (str) {
                    return numericRegex.test(str);
                },
                converter: function (str) {
                    return parseFloat(str);
                }
            }
        ],

        getCommonValuesMap = function () {
            var adaptationSet,
                representation,
                subRepresentation,
                common;

            common = [
                {
                    name: 'profiles',
                    merge: false
                },
                {
                    name: 'width',
                    merge: false
                },
                {
                    name: 'height',
                    merge: false
                },
                {
                    name: 'sar',
                    merge: false
                },
                {
                    name: 'frameRate',
                    merge: false
                },
                {
                    name: 'audioSamplingRate',
                    merge: false
                },
                {
                    name: 'mimeType',
                    merge: false
                },
                {
                    name: 'segmentProfiles',
                    merge: false
                },
                {
                    name: 'codecs',
                    merge: false
                },
                {
                    name: 'maximumSAPPeriod',
                    merge: false
                },
                {
                    name: 'startsWithSap',
                    merge: false
                },
                {
                    name: 'maxPlayoutRate',
                    merge: false
                },
                {
                    name: 'codingDependency',
                    merge: false
                },
                {
                    name: 'scanType',
                    merge: false
                },
                {
                    name: 'FramePacking',
                    merge: true
                },
                {
                    name: 'AudioChannelConfiguration',
                    merge: true
                },
                {
                    name: 'ContentProtection',
                    merge: true
                }
            ];

            adaptationSet = {};
            adaptationSet.name = "AdaptationSet";
            adaptationSet.isRoot = false;
            adaptationSet.isArray = true;
            adaptationSet.parent = null;
            adaptationSet.children = [];
            adaptationSet.properties = common;

            representation = {};
            representation.name = "Representation";
            representation.isRoot = false;
            representation.isArray = true;
            representation.parent = adaptationSet;
            representation.children = [];
            representation.properties = common;
            adaptationSet.children.push(representation);

            subRepresentation = {};
            subRepresentation.name = "SubRepresentation";
            subRepresentation.isRoot = false;
            subRepresentation.isArray = true;
            subRepresentation.parent = representation;
            subRepresentation.children = [];
            subRepresentation.properties = common;
            representation.children.push(subRepresentation);

            return adaptationSet;
        },

        getSegmentValuesMap = function () {
            var period,
                adaptationSet,
                representation,
                common;

            common = [
                {
                    name: 'SegmentBase',
                    merge: true
                },
                {
                    name: 'SegmentTemplate',
                    merge: true
                },
                {
                    name: 'SegmentList',
                    merge: true
                }
            ];

            period = {};
            period.name = "Period";
            period.isRoot = false;
            period.isArray = true;
            period.parent = null;
            period.children = [];
            period.properties = common;

            adaptationSet = {};
            adaptationSet.name = "AdaptationSet";
            adaptationSet.isRoot = false;
            adaptationSet.isArray = true;
            adaptationSet.parent = period;
            adaptationSet.children = [];
            adaptationSet.properties = common;
            period.children.push(adaptationSet);

            representation = {};
            representation.name = "Representation";
            representation.isRoot = false;
            representation.isArray = true;
            representation.parent = adaptationSet;
            representation.children = [];
            representation.properties = common;
            adaptationSet.children.push(representation);

            return period;
        },

        getBaseUrlValuesMap = function () {
            var mpd,
                period,
                adaptationSet,
                representation,
                common;

            common = [
                {
                    name: 'BaseURL',
                    merge: true,
                    mergeFunction: function (parentValue, childValue) {
                        var mergedValue;

                        // child is absolute, don't merge
                        if (childValue.indexOf("http://") === 0) {
                            mergedValue = childValue;
                        } else {
                            mergedValue = parentValue + childValue;
                        }

                        return mergedValue;
                    }
                }
            ];

            mpd = {};
            mpd.name = "mpd";
            mpd.isRoot = true;
            mpd.isArray = true;
            mpd.parent = null;
            mpd.children = [];
            mpd.properties = common;

            period = {};
            period.name = "Period";
            period.isRoot = false;
            period.isArray = true;
            period.parent = null;
            period.children = [];
            period.properties = common;
            mpd.children.push(period);

            adaptationSet = {};
            adaptationSet.name = "AdaptationSet";
            adaptationSet.isRoot = false;
            adaptationSet.isArray = true;
            adaptationSet.parent = period;
            adaptationSet.children = [];
            adaptationSet.properties = common;
            period.children.push(adaptationSet);

            representation = {};
            representation.name = "Representation";
            representation.isRoot = false;
            representation.isArray = true;
            representation.parent = adaptationSet;
            representation.children = [];
            representation.properties = common;
            adaptationSet.children.push(representation);

            return mpd;
        },

        getDashMap = function () {
            var result = [];

            result.push(getCommonValuesMap());
            result.push(getSegmentValuesMap());
            result.push(getBaseUrlValuesMap());

            return result;
        },

        internalParse = function (data, baseUrl) {
            //this.debug.log("Doing parse.");

            var manifest,
                converter = new X2JS(matchers, '', true),
                iron = new ObjectIron(getDashMap()),
                start = new Date(),
                json = null,
                ironed = null;

            try {
                //this.debug.log("Converting from XML.");
                manifest = converter.xml_str2json(data);
                json = new Date();

                if (!manifest.hasOwnProperty("BaseURL")) {
                    //this.debug.log("Setting baseURL: " + baseUrl);
                    manifest.BaseURL = baseUrl;
                } else {
                    // Setting manifest's BaseURL to the first BaseURL
                    manifest.BaseURL = manifest.BaseURL_asArray[0];

                    if (manifest.BaseURL.toString().indexOf("http") !== 0) {
                        manifest.BaseURL = baseUrl + manifest.BaseURL;
                    }
                }

                //this.debug.log("Flatten manifest properties.");
                iron.run(manifest);
                ironed = new Date();

                this.debug.log("Parsing complete: ( xml2json: " + (json.getTime() - start.getTime()) + "ms, objectiron: " + (ironed.getTime() - json.getTime()) + "ms, total: " + ((ironed.getTime() - start.getTime()) / 1000) + "s)");
            } catch (err) {
                this.errHandler.manifestError("parsing the manifest failed", "parse", data);
                return null;
            }
            return manifest;
        };

    return {
        debug: undefined,
        errHandler: undefined,
        parse: internalParse
    };
};

Dash.dependencies.DashParser.prototype = {
    constructor: Dash.dependencies.DashParser
};
/*
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * author Digital Primates
 * copyright dash-if 2012
 */

/*
 * var parent,
 *     child,
 *     properties = [
                    {
                        name: 'profiles',
                        merge: false
                    }
                ];
 *
 * parent = {};
 * parent.name = "ParentNode";
 * parent.isRoor = false;
 * parent.isArray = false;
 * parent.parent = null;
 * parent.children = [];
 * parent.properties = properties;
 *
 * child = {};
 * child.name = "ChildNode";
 * child.isRoor = false;
 * child.isArray = true;
 * child.parent = parent;
 * child.children = null;
 * child.properties = properties;
 * parent.children.push(child);
 *
 */

function ObjectIron(map) {

    var lookup;

    // create a list of top level items to search for
    lookup = [];
    for (i = 0, len = map.length; i < len; i += 1) {
        if (map[i].isRoot) {
            lookup.push("root");
        } else {
            lookup.push(map[i].name);
        }
    }

    var mergeValues = function (parentItem, childItem) {
            var name,
                parentValue,
                childValue;

            if (parentItem === null || childItem === null) {
                return;
            }

            for (name in parentItem) {
                if (parentItem.hasOwnProperty(name)) {
                    if (!childItem.hasOwnProperty(name)) {
                        childItem[name] = parentItem[name];
                    }
                }
            }
        },

        mapProperties = function (properties, parent, child) {
            var i,
                len,
                property,
                parentValue,
                childValue;

            if (properties === null || properties.length === 0) {
                return;
            }

            for (i = 0, len = properties.length; i < len; i += 1) {
                property = properties[i];

                if (parent.hasOwnProperty(property.name)) {
                    if (child.hasOwnProperty(property.name)) {
                        // check to see if we should merge
                        if (property.merge) {
                           parentValue = parent[property.name];
                           childValue = child[property.name];

                            // complex objects; merge properties
                            if (typeof parentValue === 'object' && typeof childValue === 'object') {
                                mergeValues(parentValue, childValue);
                            }
                            // simple objects; merge them together
                            else {
                                if (property.mergeFunction != null) {
                                    child[property.name] = property.mergeFunction(parentValue, childValue);
                                } else {
                                    child[property.name] = parentValue + childValue;
                                }
                            }
                        }
                    } else {
                        // just add the property
                        child[property.name] = parent[property.name];
                    }
                }
            }
        },

        mapItem = function (obj, node) {
            var item = obj,
                i,
                len,
                v,
                len2,
                array,
                childItem,
                childNode,
                property;

            if (item.children === null || item.children.length === 0) {
                return;
            }

            for (i = 0, len = item.children.length; i < len; i += 1) {
                childItem = item.children[i];

                if (node.hasOwnProperty(childItem.name)) {
                    if (childItem.isArray) {
                        array = node[childItem.name + "_asArray"];
                        for (v = 0, len2 = array.length; v < len2; v += 1) {
                            childNode = array[v];
                            mapProperties(item.properties, node, childNode);
                            mapItem(childItem, childNode);
                        }
                    } else {
                        childNode = node[childItem.name];
                        mapProperties(item.properties, node, childNode);
                        mapItem(childItem, childNode);
                    }
                }
            }
        },

        performMapping = function (source) {
            var i,
                len,
                pi,
                pp,
                item,
                node,
                array;

            if (source === null) {
                return source;
            }

            if (typeof source !== 'object') {
                return source;
            }

            // first look to see if anything cares about the root node
            for (i = 0, len = lookup.length; i < len; i += 1) {
                if (lookup[i] === "root") {
                    item = map[i];
                    node = source;
                    mapItem(item, node);
                }
            }

            // iterate over the objects and look for any of the items we care about
            for (pp in source) {
                if (source.hasOwnProperty(pp)) {
                    pi = lookup.indexOf(pp);
                    if (pi !== -1) {
                        item = map[pi];

                        if (item.isArray) {
                            array = source[pp + "_asArray"];
                            for (i = 0, len = array.length; i < len; i += 1) {
                                node = array[i];
                                mapItem(item, node);
                            }
                        } else {
                            node = source[pp];
                            mapItem(item, node);
                        }
                    }
                    // now check this to see if he has any of the properties we care about
                    performMapping(source[pp]);
                }
            }

            return source;
        };

    return {
        run: performMapping
    };
}var OnePlayer;
(function (OnePlayer) {
    (function (Events) {
        "use strict";

        /**
        * Manages the handlers that register for events
        */
        var Manager = (function () {
            function Manager() {
                this._registrations = {};
            }
            Manager.prototype.dispose = function () {
                this._registrations = null;
            };

            /**
            * Gets the handlers that are registered for an event.
            * @param name Name of the event.
            * @return A list of Handlers registered for the event.
            */
            Manager.prototype.getHandlers = function (name) {
                if (!(name in this._registrations)) {
                    this._registrations[name] = [];
                }

                return this._registrations[name];
            };

            /**
            * Add handler to an event.
            * @param name Name of the event.
            * @param functionHandler Function to register for the event.
            * @param callerInstance Instance of the object calling the handler function
            */
            Manager.prototype.addHandler = function (name, functionHandler, callerInstance) {
                var newHandler = new Handler(callerInstance, functionHandler);
                var handlers = this.getHandlers(name);

                handlers[handlers.length] = newHandler;
            };

            /**
            * Removes a handler that is registered for an event.
            * @param name Name of the event.
            * @param functionHandler Function to register for the event.
            */
            Manager.prototype.removeHandler = function (name, functionHandler) {
                var handlers = this.getHandlers(name);
                var idx = this._findHandlerByFunction(handlers, functionHandler);
                while (idx !== -1) {
                    handlers.splice(idx, 1);
                    idx = this._findHandlerByFunction(handlers, functionHandler);
                }
            };

            /**
            * When the event occurs, call all the registered handlers.
            * @param evt The information about the event.
            */
            Manager.prototype.dispatchEvent = function (evt) {
                var self = this;
                var i = 0;
                var handlers = this.getHandlers(evt.name).slice();

                function callNext() {
                    handlers[i].functionHandler.call(self, evt);
                    if (++i < handlers.length) {
                        setTimeout(callNext, 0);
                    }
                }

                if (handlers.length > 0) {
                    setTimeout(callNext, 0);
                }
            };

            /*
            * Find the Handler by given function pointer.
            * @param handlers List of handlers.
            * @param functionHandler FunctionHandler we are searching for.
            */
            Manager.prototype._findHandlerByFunction = function (handlers, functionHandler) {
                var index = -1;
                for (var i = 0; i < handlers.length; i++) {
                    if (handlers[i].functionHandler === functionHandler) {
                        index = i;
                        break;
                    }
                }
                return index;
            };
            return Manager;
        })();
        Events.Manager = Manager;

        /**
        * Holds the event information
        */
        var Info = (function () {
            function Info(t, d) {
                if (typeof d === "undefined") { d = null; }
                this.name = t;
                this.data = d;
            }
            return Info;
        })();
        Events.Info = Info;

        /**
        * Holds the caller instance and the function handler
        */
        var Handler = (function () {
            function Handler(instance, func) {
                this.callerInstance = instance;
                this.functionHandler = func;
            }
            return Handler;
        })();
        Events.Handler = Handler;
    })(OnePlayer.Events || (OnePlayer.Events = {}));
    var Events = OnePlayer.Events;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=EventManager.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Log) {
        "use strict";

        /**
        * Logging levels
        */
        (function (Level) {
            Level[Level["none"] = 0] = "none";
            Level[Level["error"] = 1] = "error";
            Level[Level["warning"] = 2] = "warning";
            Level[Level["verbose"] = 3] = "verbose";
        })(Log.Level || (Log.Level = {}));
        var Level = Log.Level;

        /**
        * Logging areas
        */
        (function (Area) {
            Area[Area["workflowSequencer"] = 0] = "workflowSequencer";
            Area[Area["workflowCoordinator"] = 1] = "workflowCoordinator";
            Area[Area["htmlAdapter"] = 2] = "htmlAdapter";
            Area[Area["videoElementAdapter"] = 3] = "videoElementAdapter";
            Area[Area["manifestParser"] = 4] = "manifestParser";
            Area[Area["httpDataRetriever"] = 5] = "httpDataRetriever";
            Area[Area["dashUrlFormatter"] = 6] = "dashUrlFormatter";
            Area[Area["onePlayerVideoElement"] = 7] = "onePlayerVideoElement";
            Area[Area["heuristics"] = 8] = "heuristics";
            Area[Area["segmentLocator"] = 9] = "segmentLocator";
            Area[Area["functionalTest"] = 10] = "functionalTest";
            Area[Area["max"] = 11] = "max";
        })(Log.Area || (Log.Area = {}));
        var Area = Log.Area;

        /**
        * Log verbose information.
        *
        * @param area The area to log.
        * @param message The message to log.
        */
        function verbose(area, message) {
            _writeEntry(area, 3 /* verbose */, message);
        }
        Log.verbose = verbose;

        /**
        * Log warning information.
        *
        * @param area The area to log.
        * @param message The message to log.
        */
        function warning(area, message) {
            _writeEntry(area, 2 /* warning */, message);
        }
        Log.warning = warning;

        /**
        * Log error information.
        *
        * @param area The area to log.
        * @param message The message to log.
        */
        function error(area, message) {
            _writeEntry(area, 1 /* error */, message);
        }
        Log.error = error;

        /**
        * Enables logging of specific level messages to the browser console.
        *
        * @param value The level and levels below to be enabled.
        */
        function setConsoleOutputByLevel(value) {
            levelEnabled = value;
        }
        Log.setConsoleOutputByLevel = setConsoleOutputByLevel;

        /**
        * Enables logging of specific area messages to the browser console.
        *
        * @param level The area which is to be enabled. If not specified, all areas are enabled.
        */
        function enableConsoleOutputByArea(value) {
            if (undefined === value || null === value) {
                areasEnabled.forEach(function (arrayVal, index, array) {
                    array[index] = true;
                });
            } else {
                areasEnabled[value] = true;
            }
        }
        Log.enableConsoleOutputByArea = enableConsoleOutputByArea;

        /**
        * Disables logging of specific area messages to the browser console.
        *
        * @param level The area which is to be disabled. If not specified, all areas are disabled.
        */
        function disableConsoleOutputByArea(value) {
            if (undefined === value || null === value) {
                areasEnabled.forEach(function (arrayVal, index, array) {
                    array[index] = false;
                });
            } else {
                areasEnabled[value] = false;
            }
        }
        Log.disableConsoleOutputByArea = disableConsoleOutputByArea;

        /**
        * Logs event.
        *
        * @param area Name of information area.
        * @param level Information level type.
        * @param message Information that is to be logged.
        */
        function _writeEntry(area, level, message) {
            var time = new Date(Date.now());
            if (level <= levelEnabled && areasEnabled[area]) {
                console.log("[" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ":" + time.getMilliseconds() + "] " + Level[level] + ": " + Area[area] + ": " + message);
            }
        }

        // Default to devMode for now
        var devMode = true;

        // Keeps track of level enabled
        var levelEnabled = 0 /* none */;

        // Sets the area names and defaults to disabling all areas
        var areasEnabled = [];
        for (var i = 0; i < 11 /* max */; i++) {
            areasEnabled.push(false);
        }

        // enable all areas by default
        Log.enableConsoleOutputByArea();

        // devMode enable verbose by default, otherwise only errors
        Log.setConsoleOutputByLevel(devMode ? 3 /* verbose */ : 1 /* error */);
    })(OnePlayer.Log || (OnePlayer.Log = {}));
    var Log = OnePlayer.Log;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=Log.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (PlayerDetector) {
        "use strict";

        (function (Type) {
            Type[Type["type1"] = 0] = "type1";
            Type[Type["type2"] = 1] = "type2";
            Type[Type["type3"] = 2] = "type3";
        })(PlayerDetector.Type || (PlayerDetector.Type = {}));
        var Type = PlayerDetector.Type;
        ;

        /**
        * Detects whether the platform supports MSE
        *
        * @param videoElement An HTMLVideoElement
        * @return true or false
        */
        function MseSupported(videoElement) {
            var mse = null;

            if (window.hasOwnProperty('MediaSource') || window.hasOwnProperty('WebKitMediaSource')) {
                mse = window["MediaSource"] || window["WebKitMediaSource"];
            } else {
                return false;
            }

            var hasMp4 = videoElement && videoElement.canPlayType && !!videoElement.canPlayType("video/mp4");

            var MseSupportsH264 = mse && mse.isTypeSupported && mse.isTypeSupported("video/mp4; codecs=\"avc1.4d404f\"");

            return hasMp4 && MseSupportsH264;
        }
        PlayerDetector.MseSupported = MseSupported;

        /**
        * Detects whether the platform supports HLS type 1
        *
        * @param videoElement An HTMLVideoElement
        * @return true or false
        */
        function HlsType1Supported(videoElement) {
            var result = false;

            if (videoElement && videoElement.canPlayType) {
                var canPlay = videoElement.canPlayType("application/vnd.apple.mpegurl");
                if (canPlay === 'maybe' || canPlay === 'probably') {
                    result = true;
                }
            }

            return result;
        }
        PlayerDetector.HlsType1Supported = HlsType1Supported;

        /**
        * Detects whether the platform supports Mp4 type 1
        *
        * @param videoElement An HTMLVideoElement
        * @return true or false
        */
        function Mp4Type1Supported(videoElement) {
            var result = false;

            if (videoElement && videoElement.canPlayType) {
                var canPlay = videoElement.canPlayType("video/mp4");
                if (canPlay === 'maybe' || canPlay === 'probably') {
                    result = true;
                }
            }

            return result;
        }
        PlayerDetector.Mp4Type1Supported = Mp4Type1Supported;
    })(OnePlayer.PlayerDetector || (OnePlayer.PlayerDetector = {}));
    var PlayerDetector = OnePlayer.PlayerDetector;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=PlayerDetector.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (PlayerType) {
        "use strict";

        (function (Format) {
            Format[Format["hls"] = 0] = "hls";
            Format[Format["mp4"] = 1] = "mp4";
            Format[Format["dash"] = 2] = "dash";
        })(PlayerType.Format || (PlayerType.Format = {}));
        var Format = PlayerType.Format;
        ;

        var _azureMediaFormatTags = {
            "m3u8-aapl-v3": 0 /* hls */,
            "m3u8-aapl-v4": 0 /* hls */,
            "mpd-time-csf": 2 /* dash */
        };

        var _fileExtensions = {
            "mp4": 1 /* mp4 */,
            "m3u8": 0 /* hls */
        };

        function getType(url, htmlVideo) {
            var playerType = null;

            var fileExt = _getFileExtension(url);

            // url contain .ism find the format tag
            if (url.lastIndexOf(".ism/") > -1) {
                var tag = _getAzureMediaFormatTag(url);
                if (_azureMediaFormatTags[tag]) {
                    playerType = _getPlayerTypeByFormat(_azureMediaFormatTags[tag], htmlVideo);
                }
            }

            if (null == playerType) {
                if (_fileExtensions[fileExt]) {
                    playerType = _getPlayerTypeByFormat(_fileExtensions[fileExt], htmlVideo);
                }
            }

            return playerType;
        }
        PlayerType.getType = getType;

        // This function is export for unit test only
        function _getFileExtension(url) {
            var fileExt = null, periodIndex = url.lastIndexOf("."), nextSlashIndex = url.indexOf("/", periodIndex);

            if (periodIndex > -1) {
                fileExt = url.substring(periodIndex + 1, nextSlashIndex !== -1 ? nextSlashIndex : url.length);
            }

            return fileExt;
        }
        PlayerType._getFileExtension = _getFileExtension;

        // This function is export for unit test only
        function _getAzureMediaFormatTag(url) {
            var formatTag = null, trimmedUrl = url, formatVerb = "(format=", queryIndex = url.lastIndexOf("?");

            if (queryIndex > -1) {
                trimmedUrl = url.substring(0, queryIndex);
            }

            var formatBeginIndex = trimmedUrl.lastIndexOf(formatVerb);

            if (formatBeginIndex > -1) {
                var formatEndIndex = trimmedUrl.lastIndexOf(")");

                if (formatEndIndex > formatBeginIndex) {
                    formatTag = trimmedUrl.substring(formatBeginIndex + formatVerb.length, formatEndIndex);
                }
            }
            return formatTag;
        }
        PlayerType._getAzureMediaFormatTag = _getAzureMediaFormatTag;

        // This function is export for unit test only
        function _getPlayerTypeByFormat(format, htmlVideo) {
            var type = null;
            switch (format) {
                case 0 /* hls */:
                    if (OnePlayer.PlayerDetector.HlsType1Supported(htmlVideo)) {
                        type = 0 /* type1 */;
                    }
                    break;
                case 1 /* mp4 */:
                    if (OnePlayer.PlayerDetector.Mp4Type1Supported(htmlVideo)) {
                        type = 0 /* type1 */;
                    }
                    break;
                case 2 /* dash */:
                    if (OnePlayer.PlayerDetector.MseSupported(htmlVideo)) {
                        type = 2 /* type3 */;
                    }
                    break;
            }
            return type;
        }
        PlayerType._getPlayerTypeByFormat = _getPlayerTypeByFormat;
    })(OnePlayer.PlayerType || (OnePlayer.PlayerType = {}));
    var PlayerType = OnePlayer.PlayerType;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=PlayerType.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Common) {
        "use strict";

        /**
        * Class describing a time range.
        */
        var TimeRange = (function () {
            function TimeRange(rangeStart, rangeEnd) {
                this.startInSec = rangeStart;
                this.endInSec = rangeEnd;
            }
            return TimeRange;
        })();
        Common.TimeRange = TimeRange;

        /**
        * Class describing a segment.
        */
        var SegmentData = (function () {
            function SegmentData(data, timestampInSec, durationInSec) {
                this.timestampInSec = timestampInSec;
                this.durationInSec = durationInSec;
                this.data = data;
            }
            return SegmentData;
        })();
        Common.SegmentData = SegmentData;

        

        /**
        * Binary search function.
        *
        * @param key The key to search.
        * @param array The sorted collection for searching.
        * @param compare The compare function.
        * @return On success the index, -1 if not found.
        */
        function binarySearch(key, array, compare) {
            var start = 0, end = array.length - 1, middle = 0;

            while (start <= end) {
                middle = Math.floor((start + end) / 2);

                var cmp = compare(key, array[middle]);

                if (cmp < 0) {
                    end = middle - 1;
                } else if (cmp > 0) {
                    start = middle + 1;
                } else {
                    //exact match
                    return middle;
                }
            }

            return (-1);
        }
        Common.binarySearch = binarySearch;
    })(OnePlayer.Common || (OnePlayer.Common = {}));
    var Common = OnePlayer.Common;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=Common.js.map
/**
* Find the first element in the Array which matches the given predicate.
*/
Array.prototype.findFirst = function (predicate) {
    for (var idx = 0; idx < this.length; idx++) {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this))) {
            return value;
        }
    }
    return null;
};

/**
* Find the last element in the Array which matches the given predicate.
*/
Array.prototype.findLast = function (predicate) {
    for (var idx = this.length - 1; idx >= 0; idx--) {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this))) {
            return value;
        }
    }
    return null;
};

/**
* Find the index of the first element in the Array which matches the given predicate.
*/
Array.prototype.findIndexOf = function (predicate) {
    for (var idx = 0; idx < this.length; idx++) {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this))) {
            return idx;
        }
    }
    return -1;
};

/**
* Find the first element in the Array which matches the given predicate.
*/
Array.prototype.removeFirst = function (predicate) {
    var index = this.findIndexOf(predicate);
    var value = null;

    if (index !== -1) {
        value = this.splice(index, 1)[0];
    }
    return value;
};
//# sourceMappingURL=ArrayUtil.js.map
var Err;
(function (Err) {
    "use strict";

    /**
    * error codes
    */
    (function (ErrorCode) {
        ErrorCode[ErrorCode["success"] = 0] = "success";

        // range 1-99 is reserved for streaming failures
        ErrorCode[ErrorCode["streamingFailureStart"] = 1] = "streamingFailureStart";
        ErrorCode[ErrorCode["unknownStreamingFailure"] = 1] = "unknownStreamingFailure";
        ErrorCode[ErrorCode["internalServerFailure"] = 2] = "internalServerFailure";
        ErrorCode[ErrorCode["badUrlFormat"] = 3] = "badUrlFormat";
        ErrorCode[ErrorCode["urlNotFound"] = 4] = "urlNotFound";
        ErrorCode[ErrorCode["streamingFailureEnd"] = 99] = "streamingFailureEnd";

        // range 100 - 110 is reserved for authorization failure
        ErrorCode[ErrorCode["userAuthFailureStart"] = 100] = "userAuthFailureStart";
        ErrorCode[ErrorCode["userAuthRequired"] = 100] = "userAuthRequired";
        ErrorCode[ErrorCode["userForbidden"] = 101] = "userForbidden";
        ErrorCode[ErrorCode["userAuthFailureEnd"] = 110] = "userAuthFailureEnd";
    })(Err.ErrorCode || (Err.ErrorCode = {}));
    var ErrorCode = Err.ErrorCode;
    ;

    /**
    * Keeps track of error information
    */
    var Record = (function () {
        function Record(originModuleId, errorCode, errorMessage) {
            this.originModuleId = originModuleId;

            this.errorCode = errorCode;
        }
        Record.prototype.toString = function () {
            var errorRecord;
            errorRecord = "Module = " + this.originModuleId + " errorcode = " + this.errorCode + " " + this.errorMessage;

            return errorRecord;
        };
        return Record;
    })();
    Err.Record = Record;

    /**
    * Translates http status code to error code
    * @param statusCode http status code.
    */
    function TranslateHttpStatusToErrorCode(statusCode) {
        var errorCode;

        if (statusCode < 400) {
            // this should never happen
            return 0 /* success */;
        } else if (statusCode >= 400 && statusCode < 500) {
            switch (statusCode) {
                case 401:
                    errorCode = 100 /* userAuthRequired */;
                    break;
                case 403:
                    errorCode = 101 /* userForbidden */;
                    break;
                case 404:
                    errorCode = 4 /* urlNotFound */;
                    break;
                default:
                    errorCode = 1 /* unknownStreamingFailure */;
                    break;
            }
        } else if (statusCode >= 500) {
            errorCode = 2 /* internalServerFailure */;
        }

        return errorCode;
    }
    Err.TranslateHttpStatusToErrorCode = TranslateHttpStatusToErrorCode;

    /**
    * Attaches the error record to the request context
    * @param request Request context
    * @param originModuleId string identifer for module originating the error.
    * @param statusCode http status code.
    */
    function AttachErrorToRequest(request, originModuleId, statusCode) {
        var errorRecord = new Record(originModuleId, statusCode);

        if (null != request) {
            request.errorRecord = errorRecord;
        }
    }
    Err.AttachErrorToRequest = AttachErrorToRequest;
})(Err || (Err = {}));
//# sourceMappingURL=Error.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Util) {
        "use strict";

        var UrlFormatter = (function () {
            function UrlFormatter() {
            }
            UrlFormatter.FormatDashMediaUrl = function (urlTemplate, bitrate, timestamp) {
                if (!urlTemplate) {
                    throw new Error("url Template is not set");
                }

                var urlFormatted = urlTemplate;
                if (bitrate !== null && bitrate !== undefined && bitrate !== "") {
                    urlFormatted = urlFormatted.replace("$Bandwidth$", bitrate);
                }

                if (timestamp !== null && timestamp !== undefined && timestamp !== "") {
                    urlFormatted = urlFormatted.replace("$Time$", timestamp);
                }

                return urlFormatted;
            };

            UrlFormatter.FormatDashInitUrl = function (urlTemplate, bitrate) {
                return Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate, null);
            };
            return UrlFormatter;
        })();
        Util.UrlFormatter = UrlFormatter;
    })(OnePlayer.Util || (OnePlayer.Util = {}));
    var Util = OnePlayer.Util;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=UrlFormatter.js.map
var WorkflowModule;
(function (WorkflowModule) {
    "use strict";

    
})(WorkflowModule || (WorkflowModule = {}));
//# sourceMappingURL=IModule.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Workflow) {
        "use strict";

        /**
        * Workflow types
        */
        (function (Type) {
            Type[Type["presentation"] = 0] = "presentation";
            Type[Type["media"] = 1] = "media";
            Type[Type["max"] = 2] = "max";
        })(Workflow.Type || (Workflow.Type = {}));
        var Type = Workflow.Type;
        ;

        

        
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=IWorkflow.js.map
var OnePlayer;
(function (OnePlayer) {
    "use strict";
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=IOnePlayer.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Presentation) {
        "use strict";

        /**
        * Stream types
        */
        (function (StreamType) {
            StreamType[StreamType["video"] = 0] = "video";
            StreamType[StreamType["audio"] = 1] = "audio";
            StreamType[StreamType["text"] = 2] = "text";
        })(Presentation.StreamType || (Presentation.StreamType = {}));
        var StreamType = Presentation.StreamType;

        

        

        

        

        

        
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=IPresentation.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (VideoElementAdapter) {
        "use strict";

        /**
        * State of the video element adapter
        */
        (function (ReadyState) {
            ReadyState[ReadyState["closed"] = 0] = "closed";
            ReadyState[ReadyState["open"] = 1] = "open";
            ReadyState[ReadyState["ended"] = 2] = "ended";
        })(VideoElementAdapter.ReadyState || (VideoElementAdapter.ReadyState = {}));
        var ReadyState = VideoElementAdapter.ReadyState;
        ;

        

        
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=IVideoElementAdapter.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (SegmentLocator) {
        "use strict";

        /**
        * Implements a segment locator.
        */
        var Dash = (function () {
            function Dash() {
                this._moduleId = "SegmentLocator.Dash";
                this._disposed = false;
            }
            Dash.prototype.init = function (sessionContext) {
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                //
                // register for event steps for media workflow
                //
                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onFindSegment, this);
            };

            Dash.prototype.dispose = function () {
                this._disposed = true;
            };

            Dash.prototype.onFindSegment = function (reqContext) {
                OnePlayer.Log.verbose(9 /* segmentLocator */, "onFindSegment");
                reqContext.currentModuleId = this._moduleId;
                var that = this;

                return new Promise(function (resolve, reject) {
                    if (that._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    var currentStream = reqContext.requestedStream;
                    var segmentContainer = currentStream.segments;

                    // handle when seeks occured
                    if (null !== currentStream.streamingInfo.pendingSeekPositionInSec) {
                        currentStream.streamingInfo.currentSegment = segmentContainer.getPreviousByTimestamp(currentStream.streamingInfo.pendingSeekPositionInSec);
                        currentStream.streamingInfo.pendingSeekPositionInSec = null;
                    } else if (!currentStream.streamingInfo.currentSegment) {
                        currentStream.streamingInfo.currentSegment = segmentContainer.first;
                    } else {
                        currentStream.streamingInfo.currentSegment = currentStream.streamingInfo.currentSegment.next;
                    }

                    // signal EOS
                    if (null === currentStream.streamingInfo.currentSegment) {
                        reqContext.state = 1 /* endOfStream */;
                        reject("End of stream reached.");
                        return;
                    }

                    resolve();
                });
            };
            return Dash;
        })();
        SegmentLocator.Dash = Dash;
    })(OnePlayer.SegmentLocator || (OnePlayer.SegmentLocator = {}));
    var SegmentLocator = OnePlayer.SegmentLocator;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=SegmentLocator.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (DataRetriever) {
        "use strict";

        var HttpStatus;
        (function (HttpStatus) {
            HttpStatus[HttpStatus["success"] = 200] = "success";
            HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
            HttpStatus[HttpStatus["badGateway"] = 502] = "badGateway";
        })(HttpStatus || (HttpStatus = {}));

        /**
        * Class that retrieves data from HTTP
        */
        var HttpDataRetriever = (function () {
            function HttpDataRetriever() {
                this._moduleId = "httpDataRetriever";
                this._requestList = [];
                this._disposed = false;
                this._bandwidthData = new OnePlayer.Heuristics.BandwidthTracker();
            }
            /**
            * See interface
            */
            HttpDataRetriever.prototype.dispose = function () {
                while (this._requestList.length > 0) {
                    var currentItem = this._requestList.pop();

                    // TODO. Commenting out abort call, till we figure out how to abort on all browsers.
                    // looks like when aborted chrome keeps the incomplete response in the cache.
                    //currentItem.request.abort;
                    currentItem.request = null;
                    currentItem = null;
                }
                this._disposed = true;
            };

            /**
            * See interface
            */
            HttpDataRetriever.prototype.init = function (sessionContext) {
                var presentationWorkflow = sessionContext.workflows[0 /* presentation */];
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                //
                // register for event steps for presentation workflow
                //
                presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestBegin, this.onGetData, this);

                presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onGetData, this);

                //
                // register for event steps for media workflow
                //
                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onReportHeuristicData, this);
                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onGetData, this);
            };

            HttpDataRetriever.prototype.onReportHeuristicData = function (reqContext) {
                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "onReportHeuristicData");
                reqContext.currentModuleId = this._moduleId;
                var that = this;
                return new Promise(function (resolve, reject) {
                    if (that._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (reqContext.requestedStream.type !== 0 /* video */) {
                        resolve();
                        return;
                    }

                    that._bandwidthData.reportHeuristicsData(reqContext.heuristicData);
                    resolve();
                });
            };

            /**
            * Sends the request and populate context with the received data.
            * @param reqContext The request context.
            */
            HttpDataRetriever.prototype.onGetData = function (reqContext) {
                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "onGetData");
                reqContext.currentModuleId = this._moduleId;
                var self = this;

                return new Promise(function (resolve, reject) {
                    if (self._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (reqContext.urlsToRetrieve.length === 0) {
                        throw new Error("Failed to start the download as urlsToRetrieve is empty.");
                    }

                    // send the first request.
                    var index = 0;
                    sendNextRequest(index);

                    function sendNextRequest(index) {
                        if (!reqContext.urlsToRetrieve[index]) {
                            throw new Error("Failed to start the download as urlToRetrieve at index " + index + " is null");
                        }
                        if (!reqContext.urlsToRetrieve[index].url) {
                            throw new Error("Failed to start the download as urlToRetrieve at index " + index + " is empty");
                        }

                        // if the data is already downloaded by other data retrievers.
                        if ((reqContext.urlsToRetrieve[index].responseType === 0 /* arraybuffer */ && reqContext.urlsToRetrieve[index].mediaData != null) || reqContext.urlsToRetrieve[index].responseType === 4 /* text */ && reqContext.urlsToRetrieve[index].presentationData != null) {
                            index++;
                            if (index >= reqContext.urlsToRetrieve.length) {
                                resolve();
                            } else {
                                sendNextRequest(index);
                            }
                        } else {
                            var req = new XMLHttpRequest();
                            req.open('GET', reqContext.urlsToRetrieve[index].url);
                            req.onprogress = requestProgressHandler;
                            req.onload = requestLoadedHandler;
                            req.onerror = requestErrorHandler;

                            if (reqContext.urlsToRetrieve[index].responseType === 0 /* arraybuffer */) {
                                req.responseType = OnePlayer.Context.ResponseType[0 /* arraybuffer */];
                            }

                            if (req['msCaching']) {
                                req.msCaching = 'disabled';
                            }

                            // add the request to the requestList.
                            var newRequest = new RequestInfo(reqContext.urlsToRetrieve[index], req);

                            if (reqContext.requestedStream && reqContext.requestedStream.type == 0 /* video */ && reqContext.selectedTrack) {
                                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "Network Suggested Track: " + reqContext.selectedTrack.bitrate + " currentBw: " + self._bandwidthData.latestInKbps + " averageBw: " + self._bandwidthData.averageBandwidthInKbps + " StreamType: " + reqContext.requestedStream.type + " time: " + reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.timestampInSec + " url: " + reqContext.urlsToRetrieve[index].url);
                            }

                            self._requestList.push(newRequest);
                            req.send();
                        }
                    }

                    function requestProgressHandler(event) {
                        var _this = this;
                        if (self._disposed) {
                            return;
                        }

                        var currentTime = new Date().getTime();
                        var currentRequestInfo = self._requestList.findFirst(function (l) {
                            return l.request === _this;
                        });

                        if (!currentRequestInfo) {
                            throw new Error("cannot find the request in the request queue");
                        }

                        if (!currentRequestInfo.bandwidthInfo.responseStartTimeInMS) {
                            if (!event.lengthComputable || (event.lengthComputable && event.total != event.loaded)) {
                                currentRequestInfo.bandwidthInfo.responseStartTimeInMS = currentTime;
                            }
                        }
                    }

                    function requestLoadedHandler(event) {
                        var _this = this;
                        var contentLengthInBytes;
                        if (self._disposed) {
                            return;
                        }

                        var currentRequestInfo = self._requestList.removeFirst(function (l) {
                            return l.request === _this;
                        });
                        if (!currentRequestInfo) {
                            throw new Error("cannot find the request in the request queue");
                        }

                        currentRequestInfo.bandwidthInfo.responseEndTimeInMS = new Date().getTime();

                        var urlIndex = reqContext.urlsToRetrieve.indexOf(currentRequestInfo.urlRequest);
                        reqContext.urlsToRetrieve[urlIndex].httpResposeContentType = this.getResponseHeader("Content-Type");
                        reqContext.urlsToRetrieve[urlIndex].httpResponseCode = this.status;
                        switch (this.status) {
                            case 200 /* success */:
                                switch (currentRequestInfo.urlRequest.responseType) {
                                    case 0 /* arraybuffer */:
                                        reqContext.urlsToRetrieve[urlIndex].mediaData = this.response;
                                        currentRequestInfo.bandwidthInfo.responseLengthInBytes = reqContext.urlsToRetrieve[urlIndex].mediaData.byteLength;
                                        break;
                                    case 4 /* text */:
                                        reqContext.urlsToRetrieve[urlIndex].presentationData = this.response;
                                        currentRequestInfo.bandwidthInfo.responseLengthInBytes = reqContext.urlsToRetrieve[urlIndex].presentationData.length;
                                        break;
                                    default:
                                        throw new Error("Unexpected response Type in the request Context");
                                }

                                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "Download Finished for :" + currentRequestInfo.urlRequest.url);

                                if (reqContext.requestedStream) {
                                    //Update BandWidthData
                                    if (reqContext.requestedStream.type === 0 /* video */) {
                                        self._bandwidthData.updateBandwidthInfo(currentRequestInfo.bandwidthInfo);
                                    }

                                    reqContext.requestedStream.streamingInfo.lastDownloadedTrack = reqContext.selectedTrack;
                                }

                                //TODO. change this value when we do retries
                                index++;
                                if (index >= reqContext.urlsToRetrieve.length) {
                                    resolve();
                                } else {
                                    sendNextRequest(index);
                                }
                                break;
                            default:
                                OnePlayer.Failure.AttachFailureToRequest(reqContext, reqContext.currentModuleId, OnePlayer.Failure.TranslateHttpStatusToCode(this.status));
                                reject("failed to download with StatusCode: " + this.status + "  Url: " + currentRequestInfo.urlRequest.url);
                                break;
                        }
                    }

                    function requestErrorHandler(error) {
                        var _this = this;
                        if (self._disposed) {
                            return;
                        }

                        var currentRequestInfo = self._requestList.removeFirst(function (l) {
                            return l.request === _this;
                        });
                        if (!currentRequestInfo) {
                            throw new Error("cannot find the request in the request queue");
                        }

                        OnePlayer.Failure.AttachFailureToRequest(reqContext, reqContext.currentModuleId, 1 /* unknownStreamingFailure */);
                        reject("request failed for url: " + currentRequestInfo.urlRequest.url);
                    }
                });
            };
            return HttpDataRetriever;
        })();
        DataRetriever.HttpDataRetriever = HttpDataRetriever;

        /**
        * Class to hold the request info
        */
        var RequestInfo = (function () {
            function RequestInfo(url, req) {
                this.urlRequest = url;
                this.request = req;
                this.bandwidthInfo = new OnePlayer.Heuristics.BandwidthInfo();
            }
            return RequestInfo;
        })();
    })(OnePlayer.DataRetriever || (OnePlayer.DataRetriever = {}));
    var DataRetriever = OnePlayer.DataRetriever;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=HttpDataRetriever.js.map
/// <reference path="../Interfaces/IPresentation.ts" />
/// <reference path="../Utilities/Common.ts" />
/// <reference path="../Utilities/Log.ts" />
var OnePlayer;
(function (OnePlayer) {
    (function (Presentation) {
        "use strict";

        /**
        * Implements a media segment info.
        */
        var MediaSegmentInfo = (function () {
            function MediaSegmentInfo() {
            }
            return MediaSegmentInfo;
        })();
        Presentation.MediaSegmentInfo = MediaSegmentInfo;

        /**
        * Implements a media segment info iterator.
        */
        var MediaSegmentInfoIterator = (function () {
            function MediaSegmentInfoIterator(container, currentSegment, runEntryRepeatPosition) {
                this._container = container;
                this._currentSegmentInfo = currentSegment;
                this._runEntryRepeatPosition = runEntryRepeatPosition;

                var segmentInfo = new MediaSegmentInfo();
                segmentInfo.index = currentSegment.index + runEntryRepeatPosition;
                segmentInfo.timestamp = currentSegment.timestamp + runEntryRepeatPosition * currentSegment.duration;
                segmentInfo.timestampInSec = segmentInfo.timestamp / this._container.timescale;
                segmentInfo.durationInSec = currentSegment.durationInSec;
                segmentInfo.runEntryIndex = currentSegment.runEntryIndex;

                this.segmentInfo = segmentInfo;
            }
            Object.defineProperty(MediaSegmentInfoIterator.prototype, "next", {
                // TODO: need to support live with rolling DVR window
                get: function () {
                    if (this._runEntryRepeatPosition + 1 > this._currentSegmentInfo.repeat) {
                        // Advance to next run entry
                        var nextRunEntry = this._currentSegmentInfo.runEntryIndex + 1;

                        if (nextRunEntry < this._container.segmentTable.length) {
                            this._currentSegmentInfo = this._container.segmentTable[nextRunEntry];
                            this._runEntryRepeatPosition = 0;
                        } else {
                            OnePlayer.Log.warning(4 /* manifestParser */, "Cannot get next iterator");
                            return null;
                        }
                    } else {
                        this._runEntryRepeatPosition++;
                    }
                    return new MediaSegmentInfoIterator(this._container, this._currentSegmentInfo, this._runEntryRepeatPosition);
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MediaSegmentInfoIterator.prototype, "prev", {
                // TODO: need to support live with rolling DVR window
                get: function () {
                    if (this._runEntryRepeatPosition === 0) {
                        // Move back to previous run entry
                        var prevRunEntry = this._currentSegmentInfo.runEntryIndex - 1;

                        if (prevRunEntry >= 0) {
                            this._currentSegmentInfo = this._container.segmentTable[prevRunEntry];
                            this._runEntryRepeatPosition = this._currentSegmentInfo.repeat;
                        } else {
                            OnePlayer.Log.warning(4 /* manifestParser */, "Cannot get previous iterator");
                            return null;
                        }
                    } else {
                        this._runEntryRepeatPosition--;
                    }
                    return new MediaSegmentInfoIterator(this._container, this._currentSegmentInfo, this._runEntryRepeatPosition);
                },
                enumerable: true,
                configurable: true
            });
            return MediaSegmentInfoIterator;
        })();
        Presentation.MediaSegmentInfoIterator = MediaSegmentInfoIterator;

        /**
        * Implements a media segment info.
        */
        var MediaSegmentInfoContainer = (function () {
            function MediaSegmentInfoContainer(timescale) {
                this.timescale = timescale;
                this.segmentTable = [];
            }
            MediaSegmentInfoContainer.prototype.dispose = function () {
                this.segmentTable.forEach(function (entry) {
                    entry = null;
                });
                this.first = null;
                this.last = null;
            };

            Object.defineProperty(MediaSegmentInfoContainer.prototype, "first", {
                /**
                * Accessor for the first segment info.
                */
                get: function () {
                    var iter = null;

                    if (this.segmentTable.length > 0) {
                        iter = new MediaSegmentInfoIterator(this, this.segmentTable[0], 0);
                    }
                    return iter;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(MediaSegmentInfoContainer.prototype, "last", {
                /**
                * Accessor for the last segment info.
                */
                get: function () {
                    var entry, iter = null;

                    if (this.segmentTable.length > 0) {
                        entry = this.segmentTable[this.segmentTable.length - 1];
                        iter = new MediaSegmentInfoIterator(this, entry, entry.repeat);
                    }
                    return iter;
                },
                enumerable: true,
                configurable: true
            });

            MediaSegmentInfoContainer.prototype.addMediaSegmentInfo = function (newSegmentInfo) {
                var lastEntry = null, lastEntryEnd = 0;

                if (this.segmentTable.length > 0) {
                    lastEntry = this.segmentTable[this.segmentTable.length - 1];
                    lastEntryEnd = lastEntry.timestamp + lastEntry.duration * (lastEntry.repeat + 1);

                    if (lastEntryEnd > newSegmentInfo.timestamp) {
                        OnePlayer.Log.error(4 /* manifestParser */, "Cannot add segment with timestamp " + newSegmentInfo.timestamp + " to middle of table [" + this.segmentTable[0].timestamp + "," + lastEntryEnd + "]");
                        newSegmentInfo = null;
                    }
                }

                if (newSegmentInfo) {
                    this.segmentTable.push(newSegmentInfo);
                    OnePlayer.Log.verbose(4 /* manifestParser */, "Added segment with timestamp " + newSegmentInfo.timestamp);
                }
            };

            MediaSegmentInfoContainer.prototype.getNextByIndex = function (index, maxDistance) {
                // TODO
                return null;
            };

            /**
            * See interface.
            */
            MediaSegmentInfoContainer.prototype.getNextByTimestamp = function (timestampInSec, maxDistanceInSec) {
                var iter = null, timestamp, idx;

                if (!maxDistanceInSec) {
                    maxDistanceInSec = Infinity;
                }

                timestamp = timestampInSec * this.timescale;

                idx = OnePlayer.Common.binarySearch(timestamp, this.segmentTable, this._compareTimestamp);
                if (idx !== -1) {
                    // Found segment run entry
                    var segmentInfo = this.segmentTable[idx], segmentEnd = segmentInfo.timestamp + segmentInfo.duration * (segmentInfo.repeat + 1), repeatPosition;

                    // Find nearest greater or equal timestamp
                    repeatPosition = Math.ceil((timestamp - segmentInfo.timestamp) / segmentInfo.duration);

                    if (segmentInfo.timestamp + repeatPosition * segmentInfo.duration >= segmentEnd && idx + 1 < this.segmentTable.length) {
                        // Target timestamp is beyond last segment in this run, advance to next
                        segmentInfo = this.segmentTable[idx + 1];
                        repeatPosition = 0;
                    }

                    iter = new MediaSegmentInfoIterator(this, segmentInfo, repeatPosition);
                }

                if (!iter) {
                    OnePlayer.Log.verbose(4 /* manifestParser */, "Entry after timestamp " + timestamp + " not found");
                } else if (iter.segmentInfo.timestampInSec - timestampInSec > maxDistanceInSec) {
                    OnePlayer.Log.error(4 /* manifestParser */, "Entry after timestamp " + timestamp + " farther than max distance");
                    iter = null;
                }

                return iter;
            };

            MediaSegmentInfoContainer.prototype.getPreviousByIndex = function (index, maxDistance) {
                // TODO
                return null;
            };

            /**
            * See interface.
            */
            MediaSegmentInfoContainer.prototype.getPreviousByTimestamp = function (timestampInSec, maxDistanceInSec) {
                var iter = null, timestamp, idx;

                if (!maxDistanceInSec) {
                    maxDistanceInSec = Infinity;
                }

                timestamp = timestampInSec * this.timescale;

                idx = OnePlayer.Common.binarySearch(timestamp, this.segmentTable, this._compareTimestamp);
                if (idx !== -1) {
                    // Found segment run entry
                    var segmentInfo = this.segmentTable[idx], repeatPosition;

                    // Find nearest lower timestamp
                    repeatPosition = Math.floor((timestamp - segmentInfo.timestamp) / segmentInfo.duration);

                    iter = new MediaSegmentInfoIterator(this, segmentInfo, repeatPosition);
                }

                if (!iter) {
                    OnePlayer.Log.verbose(4 /* manifestParser */, "Entry before timestamp " + timestamp + " not found");
                } else if (timestampInSec - iter.segmentInfo.timestampInSec > maxDistanceInSec) {
                    OnePlayer.Log.error(4 /* manifestParser */, "Entry before timestamp " + timestamp + " farther than max distance");
                    iter = null;
                }

                return iter;
            };

            /**
            * See Common.compareFn interface.
            */
            MediaSegmentInfoContainer.prototype._compareTimestamp = function (timestamp, entry) {
                var retVal = 0;
                if (timestamp < entry.timestamp) {
                    retVal = -1;
                } else if (timestamp >= entry.timestamp + (entry.repeat + 1) * entry.duration) {
                    retVal = 1;
                }
                return retVal;
            };
            return MediaSegmentInfoContainer;
        })();
        Presentation.MediaSegmentInfoContainer = MediaSegmentInfoContainer;

        /**
        * Class the holds streaming information for a stream
        */
        var MediaStreamStreamingInfo = (function () {
            function MediaStreamStreamingInfo() {
                this.selected = false;
                this.fetchInitSegment = true;
                this.currentSegment = null;
                this.pendingSeekPositionInSec = null;
                this.endOfStream = false;
                this.sourceBuffer = null;
                this.lastDownloadedTrack = null;
            }
            MediaStreamStreamingInfo.prototype.dispose = function () {
                this.currentSegment = null;

                if (this.sourceBuffer) {
                    this.sourceBuffer.dispose();
                    this.sourceBuffer = null;
                }

                this.lastDownloadedTrack = null;
            };
            return MediaStreamStreamingInfo;
        })();
        Presentation.MediaStreamStreamingInfo = MediaStreamStreamingInfo;

        /**
        * Class the holds streaming information for a track
        */
        var MediaTrackStreamingInfo = (function () {
            function MediaTrackStreamingInfo() {
                this.selectable = true;
            }
            return MediaTrackStreamingInfo;
        })();
        Presentation.MediaTrackStreamingInfo = MediaTrackStreamingInfo;
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=Presentation.js.map
/// <reference path="../Interfaces/IPresentation.ts" />
/// <reference path="../Interfaces/IWorkflow.ts" />
/// <reference path="../Utilities/Log.ts" />
var OnePlayer;
(function (OnePlayer) {
    (function (DashPresentation) {
        "use strict";

        /**
        * Implements a DASH media presentation parser module.
        */
        var Parser = (function () {
            function Parser() {
                this._moduleId = "DashPresentationParser";
            }
            Parser.prototype.dispose = function () {
            };

            Parser.prototype.init = function (sessionContext) {
                var presentationWorkflow = sessionContext.workflows[0 /* presentation */];

                // Register for event steps for presentation workflow
                presentationWorkflow.addHandler(presentationWorkflow.stepEvents.dataRetrieved, this.onParse, this);
            };

            Parser.prototype.onParse = function (reqContext) {
                reqContext.currentModuleId = this._moduleId;
                return new Promise(function (resolve, reject) {
                    var sessionContext, presentationUrl, defaultBaseUrlEnd, defaultBaseUrl, dashPresentation;

                    if (!reqContext.urlsToRetrieve[0].presentationData) {
                        reject("no presentation data found");
                        return;
                    }

                    sessionContext = reqContext.sessionContext;

                    // Derive default base URL from presentation URL,
                    // this might be overwritten by BaseURL in the MPD.
                    presentationUrl = sessionContext.presentationUrl;
                    defaultBaseUrlEnd = presentationUrl.lastIndexOf("/"); // TODO: not sure if this derivation works in the general case!!!
                    defaultBaseUrl = presentationUrl.slice(0, defaultBaseUrlEnd + 1);

                    // Generate the media presentation description
                    dashPresentation = new Mpd(reqContext.urlsToRetrieve[0].presentationData, defaultBaseUrl);

                    if (!dashPresentation) {
                        reject("failed to generate DASH presentation");
                        return;
                    }

                    // Update session context
                    sessionContext.commonPresentation = dashPresentation;
                    sessionContext.presentationJson = dashPresentation.toJson();

                    resolve();
                });
            };
            return Parser;
        })();
        DashPresentation.Parser = Parser;

        /**
        * Implements a DASH media presentation description.
        */
        var Mpd = (function () {
            function Mpd(manifest, defaultBaseUrl) {
                var dashParser, streams = [];

                // Set DashParser.js
                dashParser = Dash.dependencies.DashParser();
                dashParser.debug = new DebugLog;
                dashParser.errHandler = new ErrorLog;

                // Parse the manifest
                this._manifest = dashParser.parse(manifest, defaultBaseUrl);

                // Extract streams
                if ("Period_asArray" in this._manifest && this._manifest.Period_asArray.length === 1) {
                    var period = this._manifest.Period_asArray[0];
                    if ("AdaptationSet_asArray" in period) {
                        period.AdaptationSet_asArray.forEach(function (value) {
                            streams.push(new AdaptationSet(value));
                        });
                    } else {
                        // Only single period supported for now
                        OnePlayer.Log.error(4 /* manifestParser */, "Multiple periods not supported");
                    }
                }
                this._streams = streams;
            }
            Mpd.prototype.dispose = function () {
                this._streams.forEach(function (stream) {
                    stream.dispose();
                });
                this._manifest = null;
                this._lastRetrievalTime = null;
            };

            Object.defineProperty(Mpd.prototype, "startTime", {
                get: function () {
                    var start = null;
                    if ("availabilityStartTime" in this._manifest) {
                        start = new Date(this._manifest.availabilityStartTime);
                    }
                    return start;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Mpd.prototype, "publishTime", {
                get: function () {
                    var pubTime;
                    if ("publishTime" in this._manifest) {
                        pubTime = new Date(this._manifest.publishTime);
                    } else {
                        pubTime = this._lastRetrievalTime;
                    }
                    return pubTime;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Mpd.prototype, "isLive", {
                get: function () {
                    return this._manifest.type === "dynamic";
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Mpd.prototype, "durationInSec", {
                get: function () {
                    var duration = 0;
                    if ("mediaPresentationDuration" in this._manifest) {
                        duration = this._manifest.mediaPresentationDuration;
                    }
                    return duration;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Mpd.prototype, "streams", {
                get: function () {
                    return this._streams;
                },
                enumerable: true,
                configurable: true
            });

            Mpd.prototype.toJson = function () {
                return this._manifest;
            };
            return Mpd;
        })();
        DashPresentation.Mpd = Mpd;

        /**
        * Implements a DASH adaptation set.
        */
        var AdaptationSet = (function () {
            function AdaptationSet(stream) {
                var representations = [];
                this._adaptationSet = stream;
                this.streamingInfo = new OnePlayer.Presentation.MediaStreamStreamingInfo();

                // Extract segment template
                if ("SegmentTemplate" in stream) {
                    this._segmentTemplate = stream.SegmentTemplate;

                    // Build segment info container
                    if ("SegmentTimeline" in this._segmentTemplate) {
                        var timeline, timescale, segments;

                        timeline = this._segmentTemplate.SegmentTimeline;
                        timescale = this._segmentTemplate.timescale;
                        segments = new OnePlayer.Presentation.MediaSegmentInfoContainer(timescale);

                        if ("S_asArray" in timeline) {
                            var nextTimestamp = 0;
                            for (var idx = 0; idx < timeline.S_asArray.length; idx++) {
                                var dashSegment, segmentInfo;

                                dashSegment = timeline.S_asArray[idx];
                                segmentInfo = new OnePlayer.Presentation.MediaSegmentInfo();
                                segmentInfo.duration = dashSegment.d;
                                segmentInfo.durationInSec = dashSegment.d / timescale;
                                segmentInfo.runEntryIndex = idx;

                                if ("t" in dashSegment) {
                                    segmentInfo.timestamp = dashSegment.t;
                                    segmentInfo.timestampInSec = dashSegment.t / timescale;
                                } else {
                                    segmentInfo.timestamp = nextTimestamp;
                                    segmentInfo.timestampInSec = nextTimestamp / timescale;
                                }

                                if ("r" in dashSegment) {
                                    segmentInfo.repeat = dashSegment.r;
                                } else {
                                    segmentInfo.repeat = 0; // zero based
                                }

                                nextTimestamp = segmentInfo.timestamp + segmentInfo.duration * (segmentInfo.repeat + 1);

                                segments.addMediaSegmentInfo(segmentInfo);
                            }
                            this.segments = segments;
                        }
                    }
                }

                // Extract representations
                if ("Representation" in stream) {
                    stream.Representation_asArray.forEach(function (value) {
                        representations.push(new Representation(value));
                    });
                }
                this._tracks = representations.sort(function (a, b) {
                    return a.bitrate - b.bitrate;
                });
            }
            AdaptationSet.prototype.dispose = function () {
                this._tracks.forEach(function (track) {
                    track.dispose();
                });

                this._tracks = [];

                if (this.segments) {
                    this.segments.dispose();
                    this.segments = null;
                }

                if (this.streamingInfo) {
                    this.streamingInfo.dispose();
                    this.streamingInfo = null;
                }

                this._adaptationSet = null;
                this._segmentTemplate = null;
            };

            Object.defineProperty(AdaptationSet.prototype, "codec", {
                get: function () {
                    var adaptationSet = this._adaptationSet;

                    // Returns the string expected by SourceBuffer.addSourceBuffer()
                    return adaptationSet.mimeType + ";codecs=\"" + adaptationSet.codecs + "\"";
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "type", {
                get: function () {
                    var streamType;
                    switch (this._adaptationSet.contentType) {
                        case "video":
                            streamType = 0 /* video */;
                            break;

                        case "audio":
                            streamType = 1 /* audio */;
                            break;

                        default:
                            OnePlayer.Log.error(4 /* manifestParser */, "Stream type not supported: " + this._adaptationSet.contentType);
                            break;
                    }
                    return streamType;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "id", {
                get: function () {
                    var id = null;

                    if ("id" in this._adaptationSet) {
                        id = this._adaptationSet.id.toString();
                    }
                    return id;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "language", {
                get: function () {
                    var lang = null;

                    if ("lang" in this._adaptationSet) {
                        lang = this._adaptationSet.lang;
                    }
                    return lang;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "initUrlTemplate", {
                get: function () {
                    var initUrl = null;

                    if ("initialization" in this._segmentTemplate) {
                        initUrl = this._adaptationSet.BaseURL + this._segmentTemplate.initialization;
                    }
                    return initUrl;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "mediaUrlTemplate", {
                get: function () {
                    var mediaUrl = null;

                    if ("media" in this._segmentTemplate) {
                        mediaUrl = this._adaptationSet.BaseURL + this._segmentTemplate.media;
                    }
                    return mediaUrl;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(AdaptationSet.prototype, "tracks", {
                get: function () {
                    return this._tracks;
                },
                enumerable: true,
                configurable: true
            });
            return AdaptationSet;
        })();
        DashPresentation.AdaptationSet = AdaptationSet;

        /**
        * Implements a DASH representation.
        */
        var Representation = (function () {
            function Representation(representation) {
                this._bitrate = ("bandwidth" in representation) ? representation.bandwidth : undefined;
                this._height = ("height" in representation) ? representation.height : undefined;
                this._width = ("width" in representation) ? representation.width : undefined;
                this.streamingInfo = new OnePlayer.Presentation.MediaTrackStreamingInfo();
            }
            Object.defineProperty(Representation.prototype, "bitrate", {
                get: function () {
                    return this._bitrate;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Representation.prototype, "height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Representation.prototype, "width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });

            Representation.prototype.dispose = function () {
                // TODO
            };
            return Representation;
        })();
        DashPresentation.Representation = Representation;

        /**
        * Helper class for logging debug messages with DASH.js.
        */
        var DebugLog = (function () {
            function DebugLog() {
                this.log = function (message) {
                    OnePlayer.Log.verbose(4 /* manifestParser */, message);
                };
            }
            return DebugLog;
        })();

        /**
        * Helper class for handling errors with DASH.js. Currently just logging error messages,
        * no event is generated.
        */
        var ErrorLog = (function () {
            function ErrorLog() {
                this.manifestError = function (message, id, manifest) {
                    OnePlayer.Log.error(4 /* manifestParser */, message);
                };
            }
            return ErrorLog;
        })();
    })(OnePlayer.DashPresentation || (OnePlayer.DashPresentation = {}));
    var DashPresentation = OnePlayer.DashPresentation;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=DashPresentation.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (UrlBuilder) {
        "use strict";

        /**
        * Implements a generic URL formatter. It expects requested stream to provide
        * url template in a generic format that is uniform irrespective of mpd format
        */
        var DashUrlFormatter = (function () {
            function DashUrlFormatter() {
                this._moduleId = "DashUrlFormatter";
            }
            DashUrlFormatter.prototype.init = function (sessionContext) {
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                //
                // register for event steps for media workflow
                //
                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onUrlFormat, this);
            };

            DashUrlFormatter.prototype.dispose = function () {
            };

            DashUrlFormatter.prototype.onUrlFormat = function (reqContext) {
                reqContext.currentModuleId = this._moduleId;

                return new Promise(function (resolve, reject) {
                    // Expectation is that MPD parser has already put url template in a normalized format.
                    // e.g. "/QualityLevels($Bandwidth$)/Fragments(audio=$Time$,format=mpd-time-csf)"
                    // Currently, it only supports "bandwidth" and "time"
                    if (!reqContext.selectedTrack) {
                        throw new Error("Selected Track not set");
                    }
                    var bitrate = reqContext.selectedTrack.bitrate;
                    if (bitrate === null || bitrate === undefined) {
                        throw new Error("incorrect bitrate");
                    }

                    // We add init url when init segment is requested
                    if (reqContext.requestedStream.streamingInfo.fetchInitSegment) {
                        var initUrlTemplate = reqContext.requestedStream.initUrlTemplate;
                        if (!initUrlTemplate) {
                            throw new Error("no initial url template for the stream");
                        }

                        var initUrlFormatted = OnePlayer.Util.UrlFormatter.FormatDashInitUrl(initUrlTemplate, bitrate.toString());

                        reqContext.requestedStream.streamingInfo.fetchInitSegment = false;
                        reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(initUrlFormatted));
                    }

                    var urlTemplate = reqContext.requestedStream.mediaUrlTemplate;
                    if (!urlTemplate) {
                        throw new Error("media url template is not set for the stream");
                    }

                    if (!reqContext.requestedStream.streamingInfo.currentSegment) {
                        throw new Error("current segment not selected.");
                    }

                    // fetch segment timestamp
                    var requestedTimestamp = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.timestamp;
                    var urlFormatted = OnePlayer.Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate.toString(), requestedTimestamp.toString());

                    reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(urlFormatted, 0 /* arraybuffer */, reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.timestampInSec, reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec));

                    resolve();
                });
            };
            return DashUrlFormatter;
        })();
        UrlBuilder.DashUrlFormatter = DashUrlFormatter;
    })(OnePlayer.UrlBuilder || (OnePlayer.UrlBuilder = {}));
    var UrlBuilder = OnePlayer.UrlBuilder;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=DashUrlFormatter.js.map
/// <reference path="../Interfaces/IPresentation.ts" />
var OnePlayer;
(function (OnePlayer) {
    (function (Presentation) {
        "use strict";

        /**
        * Class that selects the default streams.
        */
        var InitialStreamSelector = (function () {
            function InitialStreamSelector() {
                this._moduleId = "streamSelector";
                this._disposed = false;
                this._initial = true;
            }
            /**
            * See interface
            */
            InitialStreamSelector.prototype.dispose = function () {
                this._disposed = true;
            };

            /**
            * See interface
            */
            InitialStreamSelector.prototype.init = function (sessionContext) {
                var presentationWorkflow = sessionContext.workflows[0 /* presentation */];

                // register for event steps for presentation workflow
                presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onSelectStreams, this);
            };

            InitialStreamSelector.prototype.onSelectStreams = function (reqContext) {
                var _this = this;
                reqContext.currentModuleId = this._moduleId;

                return new Promise(function (resolve, reject) {
                    var videoFound = false, audioFound = false, presentation = reqContext.sessionContext.commonPresentation;

                    if (_this._disposed) {
                        reject("Disposed");
                        return;
                    }

                    if (!_this._initial) {
                        resolve();
                        return;
                    }

                    if (!presentation) {
                        throw new Error("CommonPresentation is empty");
                    }

                    // clear any previously selected
                    presentation.streams.forEach(function (element) {
                        element.streamingInfo.selected = false;
                    });

                    for (var idx = 0; idx < presentation.streams.length; idx++) {
                        if (0 /* video */ === presentation.streams[idx].type && !videoFound) {
                            videoFound = true;
                            presentation.streams[idx].streamingInfo.selected = true;
                        } else if (1 /* audio */ === presentation.streams[idx].type && !audioFound) {
                            audioFound = true;
                            presentation.streams[idx].streamingInfo.selected = true;
                        }
                    }

                    // video and audio is only supported for now, no audio/video only
                    if (!videoFound || !audioFound) {
                        reject("Video or audio streams not found");
                        return;
                    }

                    _this._initial = false;
                    resolve();
                });
            };
            return InitialStreamSelector;
        })();
        Presentation.InitialStreamSelector = InitialStreamSelector;
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=InitialStreamSelector.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Heuristics) {
        "use strict";

        /**
        * Class that makes Heuristic decision.
        */
        var Engine = (function () {
            function Engine() {
                this._moduleId = "heuristics.Engine";
                this._disposed = false;
            }
            /**
            * See interface
            */
            Engine.prototype.dispose = function () {
                this._disposed = true;
            };

            /**
            * See interface
            */
            Engine.prototype.init = function (sessionContext) {
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                //
                // register for event steps for media workflow
                //
                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onGetIndex, this);
            };

            Engine.prototype.onGetIndex = function (reqContext) {
                var _this = this;
                OnePlayer.Log.verbose(8 /* heuristics */, "OnGetIndex");
                reqContext.currentModuleId = this._moduleId;
                var self = this;

                return new Promise(function (resolve, reject) {
                    if (_this._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (reqContext.requestedStream.type !== 0 /* video */) {
                        reqContext.selectedTrack = reqContext.requestedStream.tracks[0];
                        resolveInternal();
                        return;
                    }

                    // select the last one as default, where we cannot get any info from heuristic modules
                    var firstTrackInfoSelectable = reqContext.heuristicData.tracksData.findFirst(function (l) {
                        return l.selectable === true;
                    });
                    if (firstTrackInfoSelectable) {
                        reqContext.selectedTrack = firstTrackInfoSelectable.trackInfo;
                    } else {
                        reqContext.selectedTrack = reqContext.heuristicData.tracksData[0].trackInfo;
                        resolveInternal();
                        return;
                    }

                    var currentBufferLevel = reqContext.requestedStream.streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec();

                    // Find max time we want to spend to download a chunk.
                    var maxTimeToDownloadInSec = 5;
                    if (!reqContext.requestedStream.streamingInfo.currentSegment) {
                        resolveInternal();
                        return;
                    }

                    maxTimeToDownloadInSec = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec;
                    if (!reqContext.requestedStream.streamingInfo.currentSegment) {
                        throw new Error("current segment not selected.");
                    }

                    // Find max time we want to spend to download a chunk.
                    var maxTimeToDownloadInSec = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec;

                    var vodStableBufferLevelInSec = reqContext.sessionContext.maxBufferInSec() * OnePlayer.Context.HeuristicSettings.vodStableBufferLevelPercent;
                    var vodDowngradeBufferLevelInSec = reqContext.sessionContext.maxBufferInSec() * OnePlayer.Context.HeuristicSettings.vodDowngradeBufferLevelPercent;

                    if (currentBufferLevel < vodDowngradeBufferLevelInSec) {
                        maxTimeToDownloadInSec *= OnePlayer.Context.HeuristicSettings.belowStableBufferLevelDownloadTimeFactor;
                    }

                    // Find the track based on network conditions
                    var selectedTrack = findHighestTrack(maxTimeToDownloadInSec);

                    // If nothing is selected by network, or if the buffer is full and network is bad, then choose the last selected Track.
                    if (!selectedTrack || (currentBufferLevel > vodStableBufferLevelInSec && selectedTrack.bitrate < reqContext.requestedStream.streamingInfo.lastDownloadedTrack.bitrate)) {
                        // If the last downloaded track is still in current selected tracks.
                        if (reqContext.heuristicData.tracksData.findFirst(function (l) {
                            return l.trackInfo === reqContext.requestedStream.streamingInfo.lastDownloadedTrack;
                        })) {
                            selectedTrack = reqContext.requestedStream.streamingInfo.lastDownloadedTrack;
                        }
                    }

                    // If we made any selection based on network conditions.
                    if (selectedTrack) {
                        reqContext.selectedTrack = selectedTrack;
                    }

                    resolveInternal();

                    // internal resolve, to do any final actions before resolve
                    function resolveInternal() {
                        checkAndEnableInitSegmentDownload();
                        resolve();
                    }
                });

                // enable init segment download, everytime bitrate changes.
                function checkAndEnableInitSegmentDownload() {
                    if (reqContext.selectedTrack !== reqContext.requestedStream.streamingInfo.lastDownloadedTrack) {
                        reqContext.requestedStream.streamingInfo.fetchInitSegment = true;
                    }
                }

                function findHighestTrack(timeEstimationThresholdInSec) {
                    for (var idx = reqContext.heuristicData.tracksData.length - 1; idx >= 0; idx--) {
                        if (reqContext.heuristicData.tracksData[idx].selectable) {
                            if (reqContext.heuristicData.tracksData[idx].dataRetrieverEstimationInSec < timeEstimationThresholdInSec) {
                                return reqContext.heuristicData.tracksData[idx].trackInfo;
                            }
                        }
                    }

                    return null;
                }
            };
            return Engine;
        })();
        Heuristics.Engine = Engine;
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=HeuristicsEngine.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Heuristics) {
        "use strict";

        /**
        * Class that decides Step Rules for Heuristics
        */
        var StepRule = (function () {
            function StepRule() {
                this._moduleId = "stepRule";
                this._disposed = false;
                this._currentTrackSegmentCount = 0;
                this._previousTrackSelected = null;
                this._currentSelectedVideoStream = null;
            }
            /**
            * See interface
            */
            StepRule.prototype.dispose = function () {
                this._disposed = true;
                this._previousTrackSelected = null;
                this._currentSelectedVideoStream = null;
            };

            /**
            * See interface
            */
            StepRule.prototype.init = function (sessionContext) {
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onRunStepRule, this);
            };

            /**
            * select the tracks based on step rules.
            */
            StepRule.prototype.onRunStepRule = function (reqContext) {
                var _this = this;
                OnePlayer.Log.verbose(8 /* heuristics */, "onRunStepRule");
                reqContext.currentModuleId = this._moduleId;
                var that = this;

                return new Promise(function (resolve, reject) {
                    if (that._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (reqContext.requestedStream.streamingInfo.lastDownloadedTrack === null || reqContext.requestedStream.type !== 0 /* video */) {
                        resolve();
                        return;
                    }

                    // If Video stream is changed.
                    if (reqContext.requestedStream !== _this._currentSelectedVideoStream) {
                        that._currentSelectedVideoStream = reqContext.requestedStream;
                        that._previousTrackSelected = null;
                    }

                    // check if the current track is same as the last track
                    if (reqContext.requestedStream.streamingInfo.lastDownloadedTrack === that._previousTrackSelected) {
                        that._currentTrackSegmentCount++;
                    } else {
                        that._previousTrackSelected = reqContext.requestedStream.streamingInfo.lastDownloadedTrack;
                        that._currentTrackSegmentCount = 1;
                    }

                    // check if upgrade or downgrade is eligible
                    var canDowngrade = (that._currentTrackSegmentCount >= OnePlayer.Context.HeuristicSettings.minSegmentsBeforeDowngrade);
                    var canUpgrade = (that._currentTrackSegmentCount >= OnePlayer.Context.HeuristicSettings.minSegmentsBeforeUpgrade);

                    var lastDownloadedTrackIndex = reqContext.requestedStream.tracks.indexOf(that._previousTrackSelected);
                    var lowestAllowedTrackIndex = lastDownloadedTrackIndex;
                    var highestAllowedTrackIndex = lastDownloadedTrackIndex;

                    if (canDowngrade && OnePlayer.Context.HeuristicSettings.maxStepDownInQuality > 0) {
                        lowestAllowedTrackIndex = Math.max(0, lastDownloadedTrackIndex - OnePlayer.Context.HeuristicSettings.maxStepDownInQuality);
                    }

                    if (canUpgrade && OnePlayer.Context.HeuristicSettings.maxStepUpInQuality > 0) {
                        highestAllowedTrackIndex = Math.min(reqContext.heuristicData.tracksData.length - 1, lastDownloadedTrackIndex + OnePlayer.Context.HeuristicSettings.maxStepUpInQuality);
                    }

                    for (var idx = 0; idx < reqContext.heuristicData.tracksData.length; idx++) {
                        if (idx > highestAllowedTrackIndex || idx < lowestAllowedTrackIndex) {
                            reqContext.heuristicData.tracksData[idx].selectable = false;
                        }
                    }

                    resolve();
                });
            };
            return StepRule;
        })();
        Heuristics.StepRule = StepRule;
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=HeuristicStepRule.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Heuristics) {
        "use strict";

        var HttpStatus;
        (function (HttpStatus) {
            HttpStatus[HttpStatus["success"] = 200] = "success";
            HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
            HttpStatus[HttpStatus["badGateway"] = 502] = "badGateway";
        })(HttpStatus || (HttpStatus = {}));

        /**
        * Class that retrieves data from HTTP
        */
        var InitialBandwidthDataUrlFormatter = (function () {
            function InitialBandwidthDataUrlFormatter() {
                this._moduleId = "InitialBandwidthDataUrlFormatter";
                this._disposed = false;
            }
            /**
            * See interface
            */
            InitialBandwidthDataUrlFormatter.prototype.dispose = function () {
                this._disposed = true;
            };

            InitialBandwidthDataUrlFormatter.prototype.init = function (sessionContext) {
                var presentationWorkflow = sessionContext.workflows[0 /* presentation */];

                presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onPreFetchUrlFormat, this);
            };

            InitialBandwidthDataUrlFormatter.prototype.onPreFetchUrlFormat = function (reqContext) {
                OnePlayer.Log.verbose(6 /* dashUrlFormatter */, "OnPreFetchUrlFormat");
                reqContext.currentModuleId = this._moduleId;
                var that = this;

                return new Promise(function (resolve, reject) {
                    if (that._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (!OnePlayer.Context.HeuristicSettings.preFetchDataEnabled) {
                        resolve();
                        return;
                    }

                    var streams = reqContext.sessionContext.commonPresentation.streams;
                    var videostream = streams.findFirst(function (l) {
                        return l.type === 0 /* video */;
                    });
                    reqContext.requestedStream = videostream;

                    var bitrate = videostream.tracks[0].bitrate;
                    if (bitrate === null || bitrate === undefined) {
                        throw new Error("bitrate of first video track not set in presentation");
                    }

                    var urlTemplate = reqContext.requestedStream.mediaUrlTemplate;
                    if (!urlTemplate) {
                        throw new Error("media url template is not set for the video stream");
                    }

                    var segmentContainer = videostream.segments;

                    // fetch first segment timestamp
                    var requestedSegment = segmentContainer.first.segmentInfo;

                    var urlFormatted = OnePlayer.Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate.toString(), requestedSegment.timestamp.toString());

                    reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(urlFormatted));

                    resolve();
                });
            };
            return InitialBandwidthDataUrlFormatter;
        })();
        Heuristics.InitialBandwidthDataUrlFormatter = InitialBandwidthDataUrlFormatter;
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=InitialBandwidthDataUrlFormatter.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Heuristics) {
        "use strict";

        /**
        * Class that selects tracks based on Window size
        */
        var WindowSizeRule = (function () {
            function WindowSizeRule() {
                this._moduleId = "windowSizeRule";
                this._disposed = false;
                this._windowHeight = 0;
                this._windowWidth = 0;
                this._highestTrackIndexAllowed = -1;
                this._currentSelectedVideoStream = null;
            }
            /**
            * See interface
            */
            WindowSizeRule.prototype.dispose = function () {
                this._disposed = true;
                this._currentSelectedVideoStream = null;
            };

            /**
            * See interface
            */
            WindowSizeRule.prototype.init = function (sessionContext) {
                var mediaWorkflow = sessionContext.workflows[1 /* media */];

                mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onRunWindowSizeRule, this);
            };

            /**
            * select the tracks based on window dimensions.
            */
            WindowSizeRule.prototype.onRunWindowSizeRule = function (reqContext) {
                var _this = this;
                OnePlayer.Log.verbose(8 /* heuristics */, "onRunWindowSizeRule");
                reqContext.currentModuleId = this._moduleId;
                var that = this;
                return new Promise(function (resolve, reject) {
                    if (that._disposed) {
                        reject("object is already disposed.");
                        return;
                    }

                    if (!OnePlayer.Context.HeuristicSettings.windowSizeHeuristicsEnabled || reqContext.requestedStream.type !== 0 /* video */) {
                        resolve();
                        return;
                    }

                    // If Video stream is changed.
                    if (reqContext.requestedStream !== _this._currentSelectedVideoStream) {
                        that._currentSelectedVideoStream = reqContext.requestedStream;
                        that._highestTrackIndexAllowed = -1;
                    }

                    var windowWidth = Math.max(reqContext.sessionContext.videoTag.scrollWidth, reqContext.sessionContext.videoTag.width);
                    var windowHeight = Math.max(reqContext.sessionContext.videoTag.scrollHeight, reqContext.sessionContext.videoTag.height);

                    if (windowHeight === 0 || windowWidth === 0) {
                        OnePlayer.Log.warning(8 /* heuristics */, "Ignoring window size heuristic rule, as one of the window dimensions is 0.");
                        resolve();
                        return;
                    }

                    // if window dimensions didn't change.
                    if (that._windowWidth !== windowWidth || that._windowHeight !== windowHeight) {
                        that._windowWidth = windowWidth;
                        that._windowHeight = windowHeight;
                        that._highestTrackIndexAllowed = -1;
                    }

                    var trackDataList = reqContext.heuristicData.tracksData;
                    for (var idx = trackDataList.length - 1; idx > _this._highestTrackIndexAllowed; idx--) {
                        if (trackDataList[idx].selectable) {
                            if (trackDataList[idx].trackInfo.width > windowWidth || trackDataList[idx].trackInfo.height > windowHeight) {
                                trackDataList[idx].selectable = false;
                            } else {
                                _this._highestTrackIndexAllowed = idx;
                                break;
                            }
                        }
                    }
                    resolve();
                });
            };
            return WindowSizeRule;
        })();
        Heuristics.WindowSizeRule = WindowSizeRule;
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=HeuristicWindowSizeRule.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Heuristics) {
        "use strict";

        /**
        * Class that holds BandwidthData
        */
        var BandwidthTracker = (function () {
            function BandwidthTracker() {
                this._slidingHistory = [];
                this._latestInKbps = 0;
                this._sumInKbps = 0;
            }
            Object.defineProperty(BandwidthTracker.prototype, "averageBandwidthInKbps", {
                /**
                * Gives the current Average Bandwidth
                */
                get: function () {
                    if (this._slidingHistory.length === 0) {
                        return 0;
                    }
                    return this._sumInKbps / this._slidingHistory.length;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(BandwidthTracker.prototype, "latestInKbps", {
                /**
                * Gives the latest Bandwidth
                */
                get: function () {
                    return this._latestInKbps;
                },
                enumerable: true,
                configurable: true
            });

            /**
            * Updates bandwidth info with the data given bandwidth info
            * @param bandwidthInfo bandwidthInfo to use to update bandwidth tracker.
            */
            BandwidthTracker.prototype.updateBandwidthInfo = function (bandwidthInfo) {
                if (!bandwidthInfo.responseStartTimeInMS || bandwidthInfo.responseStartTimeInMS === bandwidthInfo.responseEndTimeInMS) {
                    OnePlayer.Log.verbose(5 /* httpDataRetriever */, "Ignoring bandwidth data, 0 ms to download the content.");
                    return;
                }

                if (bandwidthInfo.responseLengthInBytes < OnePlayer.Context.HeuristicSettings.bandwidthDataSizeThresholdInBytes) {
                    OnePlayer.Log.verbose(5 /* httpDataRetriever */, "Ignoring Bandwidth data as data size :" + bandwidthInfo.responseLengthInBytes + " which is less that the limit :" + OnePlayer.Context.HeuristicSettings.bandwidthDataSizeThresholdInBytes);
                    return;
                }

                var timeTookInMS = bandwidthInfo.responseEndTimeInMS - bandwidthInfo.requestStartTimeInMS;
                var bandwidthInKbps = (bandwidthInfo.responseLengthInBytes * 8) / timeTookInMS;

                if (this._slidingHistory.length >= OnePlayer.Context.HeuristicSettings.maxBandwidthHistoryCount) {
                    var removeItem = this._slidingHistory.splice(0, 1);
                    this._sumInKbps -= removeItem[0];
                }

                this._slidingHistory.push(bandwidthInKbps);
                this._latestInKbps = bandwidthInKbps;
                this._sumInKbps += bandwidthInKbps;

                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "updateBandWidthInfo - " + " currentBw: " + this._latestInKbps + " averageBw: " + this.averageBandwidthInKbps + " size: " + bandwidthInfo.responseLengthInBytes + " time Took:" + timeTookInMS);
            };

            /**
            * Reports heuristics data to the request context
            * @param heuristicData heuristicData object where the data is saved.
            */
            BandwidthTracker.prototype.reportHeuristicsData = function (heuristicData) {
                var avgBandWidthInBitsPerSec = this.averageBandwidthInKbps * 1000;
                var usableAvgBwInBitsPerSec = avgBandWidthInBitsPerSec * OnePlayer.Context.HeuristicSettings.bandwidthUsabilityPercent;
                OnePlayer.Log.verbose(5 /* httpDataRetriever */, "averageBW reporting is : " + usableAvgBwInBitsPerSec);

                for (var idx = 0; idx < heuristicData.tracksData.length; idx++) {
                    if (heuristicData.tracksData[idx].selectable) {
                        // TODO. Change the 2 sec assumption to use reqContext.requestedStream.currentSegment.segmentInfo.DurationInSec,
                        // once we move the segmentlocation to start of the workflow.
                        var estimatedChunkSizeInBits = heuristicData.tracksData[idx].trackInfo.bitrate * 2;

                        if (!usableAvgBwInBitsPerSec) {
                            heuristicData.tracksData[idx].dataRetrieverEstimationInSec = Infinity;
                        } else {
                            heuristicData.tracksData[idx].dataRetrieverEstimationInSec = (estimatedChunkSizeInBits / usableAvgBwInBitsPerSec);
                        }
                    }
                }
            };
            return BandwidthTracker;
        })();
        Heuristics.BandwidthTracker = BandwidthTracker;

        var BandwidthInfo = (function () {
            function BandwidthInfo() {
                this.requestStartTimeInMS = new Date().getTime();
                this.responseStartTimeInMS = null;
                this.responseEndTimeInMS = null;
                this.responseLengthInBytes = 0;
            }
            return BandwidthInfo;
        })();
        Heuristics.BandwidthInfo = BandwidthInfo;
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=BandwidthTracker.js.map
var OnePlayer;
(function (OnePlayer) {
    "use strict";

    /**
    * Function to create the workflow coordinator
    */
    function CreateVideoElement(htmlVideo, userConfig) {
        return new VideoElement(htmlVideo, userConfig);
    }
    OnePlayer.CreateVideoElement = CreateVideoElement;

    /**
    * Class that is the top level of OnePlayer Video Element
    */
    var VideoElement = (function () {
        function VideoElement(htmlVideo, userConfig) {
            this._sessionContext = new OnePlayer.Context.Session(htmlVideo, userConfig);
            this._playerType = null;
            this._autoplay = true;
        }

        Object.defineProperty(VideoElement.prototype, "src", {
            /**
            * See interface
            */
            get: function () {
                return this._sessionContext.videoTag.src;
            },
            /**
            * See interface
            */
            set: function (url) {
                // determine type of player for this url
                this._playerType = OnePlayer.PlayerType.getType(url, this._sessionContext.videoTag);
                OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "src: " + url + " player: " + (null === this._playerType ? "not known" : OnePlayer.PlayerDetector.Type[this._playerType]));

                //tear down existing session
                if (this._workflowCoordinator) {
                    this._workflowCoordinator.dispose();
                    this._workflowCoordinator = null;
                }

                if (this._playerType === 0 /* type1 */) {
                    this._sessionContext.videoTag.autoplay = this._autoplay;
                    this._sessionContext.videoTag.src = url;
                } else if (this._playerType === 2 /* type3 */) {
                    this._workflowCoordinator = OnePlayer.Workflow.CreateCoordinator(this._sessionContext);

                    // overriding the video tag autoplay behavior
                    this._sessionContext.videoTag.autoplay = false;
                    this._workflowCoordinator.autoplay = this._autoplay;

                    this._workflowCoordinator.src = url;
                } else {
                    throw new Error(url + " not supported by OnePlayer Video Element");
                }
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(VideoElement.prototype, "currentTime", {
            /**
            * See interface
            */
            get: function () {
                return this._sessionContext.videoTag.currentTime;
            },
            /**
            * See interface
            */
            set: function (timeInSec) {
                OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "currentTime: " + timeInSec.toString + " sec");

                if (this._workflowCoordinator) {
                    this._workflowCoordinator.currentTime = timeInSec;
                } else {
                    this._sessionContext.videoTag.currentTime = timeInSec;
                }
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(VideoElement.prototype, "volume", {
            /**
            * See interface
            */
            get: function () {
                return this._sessionContext.videoTag.volume;
            },
            /**
            * See interface
            */
            set: function (level) {
                OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "volume: " + level.toString);

                var setLevel = level;
                if (NaN === level || undefined === level || null === level) {
                    return;
                }

                if (level < 0) {
                    setLevel = 0;
                } else if (level > 1) {
                    setLevel = 1;
                }

                this._sessionContext.videoTag.volume = setLevel;
            },
            enumerable: true,
            configurable: true
        });


        Object.defineProperty(VideoElement.prototype, "autoplay", {
            /**
            * See interface
            */
            get: function () {
                return this._autoplay;
            },
            /**
            * See interface
            */
            set: function (value) {
                OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "autoplay: " + value);
                this._autoplay = value;
            },
            enumerable: true,
            configurable: true
        });

        /**
        * See interface
        */
        VideoElement.prototype.play = function () {
            OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "play");

            if (this._workflowCoordinator) {
                this._workflowCoordinator.play();
            } else {
                this._sessionContext.videoTag.play();
            }
        };

        /**
        * See interface
        */
        VideoElement.prototype.pause = function () {
            OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "pause");

            if (this._workflowCoordinator) {
                this._workflowCoordinator.pause();
            } else {
                this._sessionContext.videoTag.pause();
            }
        };

        /**
        * See interface
        */
        VideoElement.prototype.requestFullscreen = function () {
            OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "requestFullscreen");

            var videoTag = this._sessionContext.videoTag;

            if (videoTag['requestFullscreen']) {
                videoTag['requestFullscreen()'];
            } else if (videoTag['msRequestFullscreen']) {
                videoTag['msRequestFullscreen']();
            } else if (videoTag['webkitRequestFullscreen']) {
                videoTag['webkitRequestFullscreen']();
            } else if (videoTag['mozRequestFullScreen']) {
                videoTag['mozRequestFullScreen']();
            }
        };

        /**
        * See interface
        */
        VideoElement.prototype.exitFullscreen = function () {
            OnePlayer.Log.verbose(7 /* onePlayerVideoElement */, "exitFullscreen");

            var fullscreenElement = document['fullscreenElement'] || document['webkitFullscreenElement'] || document['mozFullScreenElement'] || document['msFullscreenElement'];

            if (fullscreenElement !== this._sessionContext.videoTag) {
                return;
            }

            if (document['exitFullscreen']) {
                document['exitFullscreen']();
            } else if (document['webkitExitFullscreen']) {
                document['webkitExitFullscreen']();
            } else if (document['mozCancelFullScreen']) {
                document['mozCancelFullScreen']();
            } else if (document['msExitFullscreen']) {
                document['msExitFullscreen']();
            }
        };
        return VideoElement;
    })();
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=OnePlayerVideoElement.js.map
/// <reference path="../Interfaces/IVideoElementAdapter.ts" />
/// <reference path="../Utilities/Log.ts" />
var OnePlayer;
(function (OnePlayer) {
    /// <reference path="VideoElementAdapterBuffer.ts" />
    (function (_VideoElementAdapter) {
        "use strict";

        /**
        * Function to create the video element adapter
        */
        function CreateAdapter() {
            return new VideoElementAdapter();
        }
        _VideoElementAdapter.CreateAdapter = CreateAdapter;

        var _ReadyStateMap = {
            "closed": 0 /* closed */,
            "open": 1 /* open */,
            "ended": 2 /* ended */
        };

        /**
        * Implements the interface to the video element adapter.
        */
        var VideoElementAdapter = (function () {
            function VideoElementAdapter() {
                this._mediaSource = new MediaSource();
                this._adapterSourceBuffers = new AdapterSourceBuffers();
                this._disposed = false;
                this._videoTag = null;
            }
            /**
            * See interface.
            */
            VideoElementAdapter.prototype.dispose = function () {
                if (!this._disposed) {
                    this._mediaSource = null;
                    this._adapterSourceBuffers.dispose();
                    this._adapterSourceBuffers = null;
                    this._videoTag = null;
                    this._disposed = true;
                }
            };

            Object.defineProperty(VideoElementAdapter.prototype, "readyState", {
                /**
                * ReadyState accessor.
                */
                get: function () {
                    if (this._disposed) {
                        return 0 /* closed */;
                    }
                    return _ReadyStateMap[this._mediaSource.readyState];
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(VideoElementAdapter.prototype, "durationInSec", {
                /**
                * Duration accessors.
                */
                get: function () {
                    if (this._disposed) {
                        return NaN;
                    }
                    return this._mediaSource.duration;
                },
                set: function (duration) {
                    if (this._disposed) {
                        return;
                    }
                    this._mediaSource.duration = duration;
                },
                enumerable: true,
                configurable: true
            });


            Object.defineProperty(VideoElementAdapter.prototype, "adapterBuffers", {
                /**
                * Property matching adapterBuffers in IVideoElementAdapter.
                */
                get: function () {
                    if (this._disposed) {
                        return null;
                    }
                    return this._adapterSourceBuffers.adapterBuffers;
                },
                enumerable: true,
                configurable: true
            });

            /**
            * See interface.
            */
            VideoElementAdapter.prototype.supported = function (mediaType) {
                var mse = null;

                if (window.hasOwnProperty('MediaSource') || window.hasOwnProperty('WebKitMediaSource')) {
                    mse = window["MediaSource"] || window["WebKitMediaSource"];
                } else {
                    return false;
                }

                return mse && mse.isTypeSupported && mse.isTypeSupported(mediaType);
            };

            /**
            * See interface.
            */
            VideoElementAdapter.prototype.setVideoElementSrcAsync = function (videoElement) {
                var self = this;
                this._videoTag = videoElement;

                return new Promise(function (resolve, reject) {
                    if (self._disposed) {
                        reject("VideoElementAdapter already disposed");
                        return;
                    }

                    // Add source open event handler
                    self._mediaSource.addEventListener("sourceopen", function () {
                        if (self._disposed) {
                            reject("VideoElementAdapter already disposed");
                            return;
                        }
                        resolve();
                    });

                    videoElement.src = URL.createObjectURL(self._mediaSource);
                });
            };

            /**
            * See interface.
            */
            VideoElementAdapter.prototype.addAdapterBuffer = function (mediaType, maxBufferInSec) {
                if (this._disposed) {
                    return null;
                }

                var sourceBuffer;
                var adapterBuffer = null;

                try  {
                    sourceBuffer = this._mediaSource.addSourceBuffer(mediaType);
                    adapterBuffer = new _VideoElementAdapter.VideoElementAdapterBuffer(maxBufferInSec, this._videoTag, sourceBuffer);

                    this._adapterSourceBuffers.add(adapterBuffer, sourceBuffer);

                    OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Adapter buffer added: " + mediaType + " Adapter buffer total: " + this._adapterSourceBuffers.length);
                } catch (err) {
                    OnePlayer.Log.error(3 /* videoElementAdapter */, "Failed to add SourceBuffer to MediaSource: " + err);
                }

                return adapterBuffer;
            };

            /**
            * See interface.
            */
            VideoElementAdapter.prototype.removeAdapterBuffer = function (adapterBuffer) {
                if (this._disposed) {
                    return;
                }

                var idx;

                idx = this._adapterSourceBuffers.find(adapterBuffer);
                if (-1 !== idx) {
                    this._mediaSource.removeSourceBuffer(this._adapterSourceBuffers.sourceBuffers[idx]);
                    this._adapterSourceBuffers.remove(idx);

                    OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Adapter buffer removed, remaining: " + this._adapterSourceBuffers.length);
                } else {
                    OnePlayer.Log.error(3 /* videoElementAdapter */, "Failed to remove adapter buffer: instance not found");
                    // TODO: add debug assert?
                }
            };

            /**
            * See interface.
            */
            VideoElementAdapter.prototype.endOfStream = function (error) {
                if (this._disposed) {
                    return;
                }

                if (error) {
                    this._mediaSource.endOfStream(error);
                } else {
                    this._mediaSource.endOfStream();
                }
                OnePlayer.Log.verbose(3 /* videoElementAdapter */, "End of stream signaled");
            };
            return VideoElementAdapter;
        })();

        /**
        * Helper class for storing matching buffer elements.
        */
        var AdapterSourceBuffers = (function () {
            function AdapterSourceBuffers() {
                this.adapterBuffers = [];
                this.sourceBuffers = [];
            }
            AdapterSourceBuffers.prototype.dispose = function () {
                for (var i = this.adapterBuffers.length - 1; i >= 0; i--) {
                    this.adapterBuffers[i].dispose();
                    this.adapterBuffers[i] = null;
                }
                for (var i = this.sourceBuffers.length - 1; i >= 0; i--) {
                    this.sourceBuffers[i] = null;
                }
            };

            Object.defineProperty(AdapterSourceBuffers.prototype, "length", {
                get: function () {
                    // TODO: dbg_assert(this.sourceBuffers.length === this.adapterBuffers.length);
                    return this.sourceBuffers.length;
                },
                enumerable: true,
                configurable: true
            });

            AdapterSourceBuffers.prototype.find = function (adapterBuffer) {
                return this.adapterBuffers.indexOf(adapterBuffer);
            };

            AdapterSourceBuffers.prototype.add = function (adapterBuffer, sourceBuffer) {
                this.adapterBuffers.push(adapterBuffer);
                this.sourceBuffers.push(sourceBuffer);
            };

            AdapterSourceBuffers.prototype.remove = function (idx) {
                this.sourceBuffers.splice(idx, 1);
                this.adapterBuffers.splice(idx, 1);
            };
            return AdapterSourceBuffers;
        })();
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=VideoElementAdapter.js.map
/// <reference path="../Interfaces/IVideoElementAdapter.ts" />
/// <reference path="../Utilities/Log.ts" />
var OnePlayer;
(function (OnePlayer) {
    (function (VideoElementAdapter) {
        "use strict";

        /**
        * Implements the interface to the video element adapter buffer.
        */
        var VideoElementAdapterBuffer = (function () {
            function VideoElementAdapterBuffer(maxAdapterBufferInSec, videoTag, sourceBuffer) {
                var that = this;
                this.timestampOffsetInSec = 0;
                this._pendingBufferedInSec = 0;
                this._sourceBuffer = sourceBuffer;
                this._maxAdapterBufferInSec = maxAdapterBufferInSec;
                this._videoTag = videoTag;
                this._pendingBuffer = [];
                this._pendingRemove = [];

                this._sourceBuffer.addEventListener("update", _sourceBufferUpdated);
                this._sourceBuffer.addEventListener("error", _sourceBufferError);

                /**
                * Handler for SourceBuffer "update" event.
                */
                function _sourceBufferUpdated() {
                    OnePlayer.Log.verbose(3 /* videoElementAdapter */, "SourceBuffer 'update' event completed.");

                    _sourceBufferContinue();
                }

                /**
                * Handler for SourceBuffer "error" event.
                */
                function _sourceBufferError() {
                    OnePlayer.Log.error(3 /* videoElementAdapter */, "SourceBuffer append failed with 'error' event.");

                    _sourceBufferContinue();
                }

                /**
                * Continue interaction with SourceBuffer.
                */
                function _sourceBufferContinue() {
                    // First try to remove unwanted data
                    that._tryInternalRemove();

                    // Try to move more data forward
                    that._tryInternalAppend();
                }
            }
            Object.defineProperty(VideoElementAdapterBuffer.prototype, "audioTracks", {
                get: function () {
                    return this._sourceBuffer.audioTracks;
                },
                enumerable: true,
                configurable: true
            });

            VideoElementAdapterBuffer.prototype.getBufferedAheadOfCurrentTimeInSec = function () {
                // this function only supports forward playback, more changes are needed to support
                // backwards trickplay
                var outBufferedInSec = 0, buffered = this._sourceBuffer.buffered, currentTime = this._videoTag.currentTime;

                for (var i = 0; i < buffered.length; i++) {
                    if (currentTime >= buffered.start(i) && currentTime <= buffered.end(i)) {
                        // discontinuity is not yet supported, adding _pendingBufferedInSec is incorrect
                        return (buffered.end(i) - currentTime + this._pendingBufferedInSec);
                    }
                }

                return -1;
            };

            VideoElementAdapterBuffer.prototype.bufferFull = function () {
                return (this.getBufferedAheadOfCurrentTimeInSec() > this._maxAdapterBufferInSec);
            };

            /**
            * See interface.
            */
            VideoElementAdapterBuffer.prototype.dispose = function () {
                for (var i = this._pendingBuffer.length - 1; i >= 0; i--) {
                    this._pendingBuffer[i] = null;
                }
                this._sourceBuffer = null;
                for (var i = this._pendingRemove.length - 1; i >= 0; i--) {
                    this._pendingRemove[i] = null;
                }
            };

            /**
            * See interface.
            */
            VideoElementAdapterBuffer.prototype.append = function (data, timestampInSec, durationInSec) {
                var segment;

                segment = new OnePlayer.Common.SegmentData(data, timestampInSec, durationInSec);

                this._pendingBuffer.push(segment);
                this._pendingBufferedInSec += durationInSec;

                OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Appending segment: " + timestampInSec + " sec " + data.byteLength + " bytes");

                // Try to move data forward
                this._tryInternalAppend();
            };

            /**
            * See interface.
            */
            VideoElementAdapterBuffer.prototype.remove = function (startTimestampInSec, endTimestampInSec) {
                var range;

                range = new OnePlayer.Common.TimeRange(startTimestampInSec, endTimestampInSec);

                this._pendingRemove.push(range);

                OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Added to remove pending list [" + startTimestampInSec + "," + endTimestampInSec + ")");

                // Try to remove segments from _sourceBuffer
                this._tryInternalRemove();
            };

            /**
            * See interface.
            */
            VideoElementAdapterBuffer.prototype.flush = function () {
                var buffered = this._sourceBuffer.buffered;

                // abort append in progress
                if (this._sourceBuffer.updating) {
                    this._sourceBuffer.abort();
                }

                var startTime = 0;
                var endTime = 0;

                // find start time
                if (buffered.length > 0) {
                    startTime = buffered.start(0);
                } else if (this._pendingBuffer.length > 0) {
                    startTime = this._pendingBuffer[0].timestampInSec;
                }

                // find endTime
                if (this._pendingBuffer.length > 0) {
                    endTime = this._pendingBuffer[0].timestampInSec + this._pendingBufferedInSec;
                } else if (buffered.length > 0) {
                    endTime = buffered.end(buffered.length - 1);
                }

                if (endTime > startTime) {
                    this.remove(startTime, endTime);
                }
            };

            /**
            * Tries to transfer segments from _pendingBuffer to _sourceBuffer.
            */
            VideoElementAdapterBuffer.prototype._tryInternalAppend = function () {
                if (this._pendingBuffer && this._sourceBuffer && 0 !== this._pendingBuffer.length && !this._sourceBuffer.updating) {
                    try  {
                        this._sourceBuffer.appendBuffer(this._pendingBuffer[0].data);
                        OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Appended segment to SourceBuffer: " + this._pendingBuffer[0].timestampInSec + " sec " + this._pendingBuffer[0].data.byteLength + " bytes");

                        this._pendingBufferedInSec -= this._pendingBuffer[0].durationInSec;
                        this._pendingBuffer.splice(0, 1);
                    } catch (err) {
                        // TODO: need to ignore INVALID_STATE_ERR and QUOTA_EXCEEDED_ERR for retry
                        // TODO: fail on other exceptions
                        OnePlayer.Log.error(3 /* videoElementAdapter */, "Failed to append segment to SourceBuffer, will retry: " + err);
                    }
                }
            };

            /**
            * Tries to remove segments from _pendingBuffer and _sourceBuffer.
            */
            VideoElementAdapterBuffer.prototype._tryInternalRemove = function () {
                if (!this._pendingBuffer || !this._sourceBuffer) {
                    return;
                }

                while (0 !== this._pendingRemove.length && !this._sourceBuffer.updating) {
                    var range;

                    range = this._pendingRemove[0];

                    for (var i = this._pendingBuffer.length - 1; i >= 0; i--) {
                        var segment, segmentStart, segmentDuration;

                        segment = this._pendingBuffer[i];
                        segmentStart = segment.timestampInSec;
                        segmentDuration = segment.durationInSec;

                        if (segmentStart >= range.startInSec && segmentStart < range.endInSec) {
                            if (segmentStart + segmentDuration <= range.endInSec) {
                                this._pendingBuffer.splice(i, 1);
                                this._pendingBufferedInSec -= segmentDuration;
                                OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Segment removed: " + range.startInSec);
                            } else {
                                OnePlayer.Log.error(3 /* videoElementAdapter */, "Failed to remove segment, range ends mid-segment.");
                                // TODO: dbg_assert ?
                            }
                        }
                    }

                    try  {
                        this._sourceBuffer.remove(range.startInSec, range.endInSec);
                        this._pendingRemove.pop();
                        OnePlayer.Log.verbose(3 /* videoElementAdapter */, "Removing range from SourceBuffer: [" + range.startInSec + "," + range.endInSec + ")");
                    } catch (err) {
                        OnePlayer.Log.error(3 /* videoElementAdapter */, "Failed to remove segment from SourceBuffer, will retry: " + err);
                    }
                }
            };
            return VideoElementAdapterBuffer;
        })();
        VideoElementAdapter.VideoElementAdapterBuffer = VideoElementAdapterBuffer;
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=VideoElementAdapterBuffer.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Workflow) {
        "use strict";

        /**
        * Function to create the workflow coordinator
        */
        function CreateCoordinator(sessionContext) {
            return new Coordinator(sessionContext);
        }
        Workflow.CreateCoordinator = CreateCoordinator;

        /**
        * Class that coordinates between the sequencer and video element adapter
        */
        var Coordinator = (function () {
            function Coordinator(sessionContext) {
                this._sessionContext = sessionContext;
                this._workflowSeq = Workflow.CreateSequencer(this._sessionContext);
                this._mediaSource = null;
                this._pendingStreams = [];
                this._disposed = false;
                this._pendingPlay = true; // default to autoplay
                this._pendingTryMediaRequestCount = 0;
            }
            /**
            * See interface
            */
            Coordinator.prototype.dispose = function () {
                if (!this._disposed) {
                    this._disposed = true;
                    this._sessionContext = null;
                    this._pendingStreams = null;

                    if (this._mediaSource) {
                        this._mediaSource.dispose();
                        this._mediaSource = null;
                    }

                    if (this._workflowSeq) {
                        this._workflowSeq.dispose();
                        this._workflowSeq = null;
                    }
                }
            };

            Object.defineProperty(Coordinator.prototype, "src", {
                /**
                * See interface
                */
                set: function (url) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "src(" + url + ")");

                    var that = this;

                    this._sessionContext.presentationUrl = url;

                    this._workflowSeq.presentationRequestAsync().then(_presentationRequestResolved, _presentationRequestRejected);

                    function _presentationRequestResolved(context) {
                        var presentation = null;

                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "presentationRequestResolved");

                        if (that._disposed) {
                            return;
                        }

                        if (null === context.sessionContext.commonPresentation) {
                            throw new Error("presentationRequestResolved: unexpected null values");
                        }

                        presentation = context.sessionContext.commonPresentation;

                        // create video element adapter
                        that._mediaSource = OnePlayer.VideoElementAdapter.CreateAdapter();
                        that._mediaSource.setVideoElementSrcAsync(context.sessionContext.videoTag).then(_setVideoElementSrcResolved, _setVideoElementSrcRejected);

                        function _setVideoElementSrcResolved() {
                            if (that._disposed) {
                                return;
                            }

                            //create source buffers for selected streams
                            presentation.streams.forEach(function (stream) {
                                if (stream.streamingInfo.selected) {
                                    stream.streamingInfo.sourceBuffer = that._mediaSource.addAdapterBuffer(stream.codec, context.sessionContext.maxBufferInSec());

                                    if (null == stream.streamingInfo.sourceBuffer) {
                                        throw new Error("presentationRequestResolved: Failed to create source " + "buffer for stream " + stream.type);
                                    }
                                }
                            });

                            that._mediaSource.durationInSec = presentation.durationInSec;
                            that._registerVideoTagEvents();

                            // start media requests for selected streams
                            presentation.streams.forEach(function (stream) {
                                if (stream.streamingInfo.selected) {
                                    that._checkMediaWorkflow(stream);
                                }
                            });
                        }

                        function _setVideoElementSrcRejected(err) {
                            throw new Error(err);
                        }
                    }

                    function _presentationRequestRejected(context) {
                        OnePlayer.Log.error(1 /* workflowCoordinator */, "presentationRequestRejected: " + context.currentModuleId);
                        // TODO: add code to pass error as event
                        // we should always have error context information associated for the
                        // errors that we want to handle in our layer. If we don't have any
                        // error context associated, we should rethrow it.
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Coordinator.prototype, "currentTime", {
                /**
                * See interface
                */
                set: function (timeInSec) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "currentTime(" + timeInSec.toFixed(3) + ")");

                    var streams = this._sessionContext.commonPresentation.streams;
                    var shouldCheckForPause = false;

                    this._sessionContext.videoTag.currentTime = timeInSec;

                    for (var idx = 0; idx < streams.length; idx++) {
                        if (streams[idx].streamingInfo.selected) {
                            // buffers doesn't contain the seeked position, flush the buffers
                            if (-1 === streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec()) {
                                streams[idx].streamingInfo.pendingSeekPositionInSec = timeInSec;
                                streams[idx].streamingInfo.sourceBuffer.flush();
                                shouldCheckForPause = true;
                                streams[idx].streamingInfo.endOfStream = false;
                            }

                            this._checkMediaWorkflow(streams[idx]);
                        }
                    }

                    // check if playback should be paused if the seek position is too close to the end of the buffer
                    if (!shouldCheckForPause && !this._canStartPlayback() && !this._endOfSelectedStreams()) {
                        shouldCheckForPause = true;
                    }

                    if (shouldCheckForPause) {
                        if (!this._sessionContext.videoTag.paused) {
                            this._pendingPlay = true;
                            this._sessionContext.videoTag.pause();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Coordinator.prototype, "autoplay", {
                /**
                * See interface
                */
                set: function (value) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "autoplay(" + value + ")");
                    this._pendingPlay = value;
                },
                enumerable: true,
                configurable: true
            });

            /**
            * See interface
            */
            Coordinator.prototype.play = function () {
                OnePlayer.Log.verbose(1 /* workflowCoordinator */, "play()");

                // Check if playback should start immediately
                if (this._canStartPlayback()) {
                    this._startPlayback();
                } else {
                    this._pendingPlay = true;
                }
            };

            /**
            * See interface
            */
            Coordinator.prototype.pause = function () {
                OnePlayer.Log.verbose(1 /* workflowCoordinator */, "pause()");

                if (this._pendingPlay) {
                    this._pendingPlay = false;
                }

                this._sessionContext.videoTag.pause();
            };

            /**
            * Checks to see if a media workflow should be requested to the sequencer
            */
            Coordinator.prototype._checkMediaWorkflow = function (stream) {
                var that = this;

                // add to pending streams if it doesn't already exist
                if (-1 === that._pendingStreams.indexOf(stream)) {
                    that._pendingStreams.push(stream);
                }

                this._pendingTryMediaRequestCount++;
                setTimeout(_doCheckMediaWorkflow, 0);

                function _doCheckMediaWorkflow() {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "_doCheckMediaWorkflow");

                    var streamsToRemove = [];
                    that._pendingTryMediaRequestCount--;

                    if (that._disposed) {
                        return;
                    }

                    for (var idx = 0; idx < that._pendingStreams.length; idx++) {
                        if (that._pendingStreams[idx].streamingInfo.endOfStream) {
                            // note the removal any stream that is already at end of stream
                            streamsToRemove.push(that._pendingStreams[idx]);
                        } else if (!that._pendingStreams[idx].streamingInfo.sourceBuffer.bufferFull()) {
                            // go ahead and request if there is room in the buffer
                            OnePlayer.Log.verbose(1 /* workflowCoordinator */, "starting media workflow " + OnePlayer.Presentation.StreamType[stream.type]);

                            // note the removal any stream that is fulfilled
                            streamsToRemove.push(that._pendingStreams[idx]);

                            that._workflowSeq.mediaRequestAsync(that._pendingStreams[idx]).then(_mediaRequestResolved, _mediaRequestRejected);
                        }
                    }

                    for (var idx = 0; idx < streamsToRemove.length; idx++) {
                        that._removeStream(streamsToRemove[idx], that._pendingStreams);
                    }

                    //try again later if there are streams left that haven't been requested
                    if (that._pendingStreams.length > 0 && 0 === that._pendingTryMediaRequestCount) {
                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "_doCheckMediaWorkflow: schedule try again");
                        that._pendingTryMediaRequestCount++;
                        setTimeout(_doCheckMediaWorkflow, Coordinator._mediaSegmentTimeoutInMSec);
                    }
                }

                function _mediaRequestResolved(context) {
                    if (that._disposed) {
                        return;
                    }

                    if (0 /* proceed */ !== context.state) {
                        throw new Error("mediaRequestResolved: unexpected state: " + context.state);
                    }

                    for (var idx = 0; idx < context.urlsToRetrieve.length; idx++) {
                        if (null === context.urlsToRetrieve[idx].mediaData) {
                            throw new Error("mediaRequestResolved: data is null url: " + context.urlsToRetrieve[idx].url);
                        }

                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "mediaRequestResolved appending url: " + context.urlsToRetrieve[idx].url + "(" + context.urlsToRetrieve[idx].httpResposeContentType + ", " + context.urlsToRetrieve[idx].mediaData.byteLength + ")");

                        if (null === context.requestedStream.streamingInfo.pendingSeekPositionInSec) {
                            context.requestedStream.streamingInfo.sourceBuffer.append(context.urlsToRetrieve[idx].mediaData, context.urlsToRetrieve[idx].timestampInSec, context.urlsToRetrieve[idx].durationInSec);
                        }
                    }

                    if (that._pendingPlay && that._canStartPlayback()) {
                        that._startPlayback();
                    }

                    that._checkMediaWorkflow(context.requestedStream);
                }

                function _mediaRequestRejected(context) {
                    if (that._disposed) {
                        return;
                    }

                    // TODO: add code to pass error as event
                    // we should always have error context information associated for the
                    // errors that we want to handle in our layer. If we don't have any
                    // error context associated, it is safe to throw it
                    if (1 /* endOfStream */ === context.state) {
                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "mediaRequestRejected: " + OnePlayer.Presentation.StreamType[context.requestedStream.type] + " end of stream");

                        context.requestedStream.streamingInfo.endOfStream = true;

                        if (that._endOfSelectedStreams()) {
                            OnePlayer.Log.verbose(1 /* workflowCoordinator */, "End of selected streams");
                            that._mediaSource.endOfStream();

                            // preroll may not have been met, start the playback
                            if (that._pendingPlay) {
                                that._startPlayback();
                            }
                        }
                    } else {
                        OnePlayer.Log.error(1 /* workflowCoordinator */, "mediaRequestRejected: " + OnePlayer.Presentation.StreamType[context.requestedStream.type] + " module: " + context.currentModuleId);
                    }
                }
            };

            /**
            * Removes stream from an array of streams
            */
            Coordinator.prototype._removeStream = function (stream, array) {
                var removedStreams = [];
                var idx = array.indexOf(stream);

                if (idx !== -1) {
                    removedStreams = array.splice(idx, 1);
                }

                return ((removedStreams.length > 0) ? removedStreams[0] : null);
            };

            /**
            * Checks to see if all selected streams are at the end of stream
            */
            Coordinator.prototype._endOfSelectedStreams = function () {
                var streams = this._sessionContext.commonPresentation.streams;
                for (var i = 0; i < streams.length; i++) {
                    if (streams[i].streamingInfo.selected && !streams[i].streamingInfo.endOfStream) {
                        return false;
                    }
                }

                return true;
            };

            /**
            * Checks to see preroll has been fullfilled on selected streams
            */
            Coordinator.prototype._canStartPlayback = function () {
                var videoTag = this._sessionContext.videoTag;
                var streams = this._sessionContext.commonPresentation.streams;
                if (videoTag.HAVE_ENOUGH_DATA !== videoTag.readyState) {
                    return false;
                }

                for (var idx = 0; idx < streams.length; idx++) {
                    if (streams[idx].streamingInfo.selected && streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec() < this._sessionContext.prerollBufferInSec()) {
                        return false;
                    }
                }

                return true;
            };

            /**
            * Starts playback
            */
            Coordinator.prototype._startPlayback = function () {
                this._pendingPlay = false;
                this._sessionContext.videoTag.play();
            };

            /**
            * Central location to register and handle video element events
            */
            Coordinator.prototype._registerVideoTagEvents = function () {
                var that = this;
                var videoTag = that._sessionContext.videoTag;
                videoTag.addEventListener("canplaythrough", _canPlayThroughEvent);

                function _canPlayThroughEvent(ev) {
                    if (that._pendingPlay && that._canStartPlayback()) {
                        that._startPlayback();
                    }
                }
            };
            Coordinator._mediaSegmentTimeoutInMSec = 2000;
            return Coordinator;
        })();
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=WorkflowCoordinator.js.map
/// <reference path="../Interfaces/IWorkflow.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OnePlayer;
(function (OnePlayer) {
    (function (Workflow) {
        "use strict";

        /**
        * Function to create the presentation workflow
        */
        function CreatePresentation() {
            return new Presentation();
        }
        Workflow.CreatePresentation = CreatePresentation;

        /**
        * Function to create the media workflow
        */
        function CreateMedia() {
            return new Media();
        }
        Workflow.CreateMedia = CreateMedia;

        /**
        * Base class used by other workflows
        */
        var Base = (function () {
            function Base(eventsOrdered) {
                this._eventManager = new OnePlayer.Events.Manager();
                this._eventsOrdered = eventsOrdered;
                this._stepList = [];
            }
            /**
            * See interface
            */
            Base.prototype.dispose = function () {
                this._eventManager.dispose();
                this._eventManager = null;

                this._eventsOrdered = null;
                this._stepList = null;
            };

            /**
            * See interface
            */
            Base.prototype.addHandler = function (event, handler, callerInstance) {
                this._eventManager.addHandler(event, handler, callerInstance);
            };

            /**
            * See interface
            */
            Base.prototype.createSteps = function () {
                var _this = this;
                var stepIdx = 0;
                for (var evtIdx in this._eventsOrdered) {
                    var handlers = this._eventManager.getHandlers(this._eventsOrdered[evtIdx]);
                    handlers.forEach(function (handler) {
                        _this._stepList[stepIdx++] = handler;
                    });
                }
            };

            Object.defineProperty(Base.prototype, "stepList", {
                /**
                * See interface
                */
                get: function () {
                    return this._stepList;
                },
                enumerable: true,
                configurable: true
            });
            return Base;
        })();

        /**
        * Class for presentation workflows
        */
        var Presentation = (function (_super) {
            __extends(Presentation, _super);
            function Presentation() {
                var eventsOrdered = [
                    this.stepEvents.requestBegin,
                    this.stepEvents.requestSend,
                    this.stepEvents.dataRetrieved,
                    this.stepEvents.requestEnd
                ];

                _super.call(this, eventsOrdered);
            }
            Object.defineProperty(Presentation.prototype, "stepEvents", {
                /**
                * See interface
                */
                get: function () {
                    return {
                        requestBegin: "requestBegin",
                        requestSend: "requestSend",
                        dataRetrieved: "dataRetrieved",
                        requestEnd: "requestEnd"
                    };
                },
                enumerable: true,
                configurable: true
            });
            return Presentation;
        })(Base);

        /**
        * Class for media workflows
        */
        var Media = (function (_super) {
            __extends(Media, _super);
            function Media() {
                var eventsOrdered = [
                    this.stepEvents.requestBegin,
                    this.stepEvents.requestSend,
                    this.stepEvents.dataRetrieved,
                    this.stepEvents.requestEnd
                ];

                _super.call(this, eventsOrdered);
            }
            Object.defineProperty(Media.prototype, "stepEvents", {
                /**
                * See interface
                */
                get: function () {
                    return {
                        requestBegin: "requestBegin",
                        requestSend: "requestSend",
                        dataRetrieved: "dataRetrieved",
                        requestEnd: "requestEnd"
                    };
                },
                enumerable: true,
                configurable: true
            });
            return Media;
        })(Base);
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=Workflows.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Context) {
        "use strict";

        /**
        * State of the requested workflow
        */
        (function (RequestState) {
            RequestState[RequestState["proceed"] = 0] = "proceed";
            RequestState[RequestState["endOfStream"] = 1] = "endOfStream";
            RequestState[RequestState["failed"] = 2] = "failed";
        })(Context.RequestState || (Context.RequestState = {}));
        var RequestState = Context.RequestState;
        ;

        (function (ResponseType) {
            ResponseType[ResponseType["arraybuffer"] = 0] = "arraybuffer";
            ResponseType[ResponseType["blob"] = 1] = "blob";
            ResponseType[ResponseType["document"] = 2] = "document";
            ResponseType[ResponseType["json"] = 3] = "json";
            ResponseType[ResponseType["text"] = 4] = "text";
        })(Context.ResponseType || (Context.ResponseType = {}));
        var ResponseType = Context.ResponseType;

        /**
        * Keeps information that is useful across multiple and different workflows
        */
        var Session = (function () {
            function Session(htmlVideo, userConfig) {
                this.videoTag = htmlVideo;
                this.appConfig = userConfig;

                this.workflows = null;
                this.presentationUrl = null;
                this.presentationJson = null;
                this.commonPresentation = null;
            }
            Session.prototype.dispose = function () {
                this.videoTag = null;
                this.appConfig = null;

                if (this.workflows) {
                    this.workflows.forEach(function (workFlow) {
                        workFlow.dispose();
                    });
                }

                this.workflows = null;
                this.presentationUrl = null;
                this.presentationJson = null;

                //TODO: uncomment this when dispose is implemented
                //this.commonPresentation.dispose();
                this.commonPresentation = null;
            };

            Session.prototype.maxBufferInSec = function () {
                if (this.appConfig && this.appConfig.maxBufferInSec && this.appConfig.maxBufferInSec != "0") {
                    return parseInt(this.appConfig.maxBufferInSec);
                }

                return Session._maxBufferInSec;
            };

            Session.prototype.prerollBufferInSec = function () {
                return this.maxBufferInSec() * Session._prerollPercent;
            };
            Session._maxBufferInSec = 30;

            Session._prerollPercent = .25;
            return Session;
        })();
        Context.Session = Session;

        /**
        * Keeps information that is useful within a single workflow
        */
        var Request = (function () {
            function Request(workflowType, sessionContext) {
                this.workflowType = workflowType;
                this.sessionContext = sessionContext;
                this.state = 0 /* proceed */;

                this.currentModuleId = null;
                this.requestedStream = null;
                this.urlsToRetrieve = [];
                this.selectedTrack = null;
                this.heuristicData = null;
                this.failRecord = null;
            }
            return Request;
        })();
        Context.Request = Request;

        /**
        * Class which holds urlRequest and reponse data.
        */
        var UrlRequest = (function () {
            function UrlRequest(url, responseType, timestampInSec, durationInSec) {
                if (typeof responseType === "undefined") { responseType = 0 /* arraybuffer */; }
                if (typeof timestampInSec === "undefined") { timestampInSec = 0; }
                if (typeof durationInSec === "undefined") { durationInSec = 0; }
                this.url = url;
                this.httpResponseCode = -1;
                this.httpResposeContentType = "";

                this.mediaData = null;
                this.presentationData = null;
                this.timestampInSec = timestampInSec;
                this.durationInSec = durationInSec;
                this.responseType = responseType;
            }
            return UrlRequest;
        })();
        Context.UrlRequest = UrlRequest;

        /**
        * Class which holds heuristic data for the Request
        */
        var HeuristicData = (function () {
            function HeuristicData(stream) {
                var hData = [];
                stream.tracks.forEach(function (track) {
                    if (track.streamingInfo.selectable) {
                        hData.push(new TrackData(track));
                    }
                });

                this.tracksData = hData;
            }
            return HeuristicData;
        })();
        Context.HeuristicData = HeuristicData;

        /**
        * class which holds the heuristic data for each track.
        */
        var TrackData = (function () {
            function TrackData(track) {
                this.trackInfo = track;
                this.selectable = true;
                this.dataRetrieverEstimationInSec = null;
            }
            return TrackData;
        })();
        Context.TrackData = TrackData;

        /**
        * Class which holds OnePlayer Settings.
        */
        var HeuristicSettings = (function () {
            function HeuristicSettings() {
            }
            HeuristicSettings.minSegmentsBeforeDowngrade = 0;
            HeuristicSettings.minSegmentsBeforeUpgrade = 2;
            HeuristicSettings.maxStepDownInQuality = 10;
            HeuristicSettings.maxStepUpInQuality = 3;

            HeuristicSettings.windowSizeHeuristicsEnabled = true;
            HeuristicSettings.preFetchDataEnabled = true;

            HeuristicSettings.bandwidthUsabilityPercent = 0.85;
            HeuristicSettings.bandwidthDataSizeThresholdInBytes = 10000;
            HeuristicSettings.maxBandwidthHistoryCount = 5;

            HeuristicSettings.vodStableBufferLevelPercent = .70;
            HeuristicSettings.vodDowngradeBufferLevelPercent = .15;

            HeuristicSettings.belowStableBufferLevelDownloadTimeFactor = .75;
            return HeuristicSettings;
        })();
        Context.HeuristicSettings = HeuristicSettings;
    })(OnePlayer.Context || (OnePlayer.Context = {}));
    var Context = OnePlayer.Context;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=Context.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Workflow) {
        "use strict";

        /**
        * Function to create the workflow coordinator
        */
        function CreateCoordinator(sessionContext) {
            return new Coordinator(sessionContext);
        }
        Workflow.CreateCoordinator = CreateCoordinator;

        /**
        * Class that coordinates between the sequencer and video element adapter
        */
        var Coordinator = (function () {
            function Coordinator(sessionContext) {
                this._sessionContext = sessionContext;
                this._workflowSeq = Workflow.CreateSequencer(this._sessionContext);
                this._mediaSource = null;
                this._pendingStreams = [];
                this._disposed = false;
                this._pendingPlay = true; // default to autoplay
                this._pendingTryMediaRequestCount = 0;
            }
            /**
            * See interface
            */
            Coordinator.prototype.dispose = function () {
                if (!this._disposed) {
                    this._disposed = true;
                    this._sessionContext = null;
                    this._pendingStreams = null;

                    if (this._mediaSource) {
                        this._mediaSource.dispose();
                        this._mediaSource = null;
                    }

                    if (this._workflowSeq) {
                        this._workflowSeq.dispose();
                        this._workflowSeq = null;
                    }
                }
            };

            Object.defineProperty(Coordinator.prototype, "src", {
                /**
                * See interface
                */
                set: function (url) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "src(" + url + ")");

                    var that = this;

                    this._sessionContext.presentationUrl = url;

                    this._workflowSeq.presentationRequestAsync().then(_presentationRequestResolved, _presentationRequestRejected);

                    function _presentationRequestResolved(context) {
                        var presentation = null;

                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "presentationRequestResolved");

                        if (that._disposed) {
                            return;
                        }

                        if (null === context.sessionContext.commonPresentation) {
                            throw new Error("presentationRequestResolved: unexpected null values");
                        }

                        presentation = context.sessionContext.commonPresentation;

                        // create video element adapter
                        that._mediaSource = OnePlayer.VideoElementAdapter.CreateAdapter();
                        that._mediaSource.setVideoElementSrcAsync(context.sessionContext.videoTag).then(_setVideoElementSrcResolved, _setVideoElementSrcRejected);

                        function _setVideoElementSrcResolved() {
                            if (that._disposed) {
                                return;
                            }

                            //create source buffers for selected streams
                            presentation.streams.forEach(function (stream) {
                                if (stream.streamingInfo.selected) {
                                    stream.streamingInfo.sourceBuffer = that._mediaSource.addAdapterBuffer(stream.codec, context.sessionContext.maxBufferInSec());

                                    if (null == stream.streamingInfo.sourceBuffer) {
                                        throw new Error("presentationRequestResolved: Failed to create source " + "buffer for stream " + stream.type);
                                    }
                                }
                            });

                            that._mediaSource.durationInSec = presentation.durationInSec;
                            that._registerVideoTagEvents();

                            // start media requests for selected streams
                            presentation.streams.forEach(function (stream) {
                                if (stream.streamingInfo.selected) {
                                    that._checkMediaWorkflow(stream);
                                }
                            });
                        }

                        function _setVideoElementSrcRejected(err) {
                            throw new Error(err);
                        }
                    }

                    function _presentationRequestRejected(context) {
                        OnePlayer.Log.error(1 /* workflowCoordinator */, "presentationRequestRejected: " + context.currentModuleId);
                        // TODO: add code to pass error as event
                        // we should always have error context information associated for the
                        // errors that we want to handle in our layer. If we don't have any
                        // error context associated, we should rethrow it.
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Coordinator.prototype, "currentTime", {
                /**
                * See interface
                */
                set: function (timeInSec) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "currentTime(" + timeInSec.toFixed(3) + ")");

                    var streams = this._sessionContext.commonPresentation.streams;
                    var shouldCheckForPause = false;

                    this._sessionContext.videoTag.currentTime = timeInSec;

                    for (var idx = 0; idx < streams.length; idx++) {
                        if (streams[idx].streamingInfo.selected) {
                            // buffers doesn't contain the seeked position, flush the buffers
                            if (-1 === streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec()) {
                                streams[idx].streamingInfo.pendingSeekPositionInSec = timeInSec;
                                streams[idx].streamingInfo.sourceBuffer.flush();
                                shouldCheckForPause = true;
                                streams[idx].streamingInfo.endOfStream = false;
                            }

                            this._checkMediaWorkflow(streams[idx]);
                        }
                    }

                    // check if playback should be paused if the seek position is too close to the end of the buffer
                    if (!shouldCheckForPause && !this._canStartPlayback() && !this._endOfSelectedStreams()) {
                        shouldCheckForPause = true;
                    }

                    if (shouldCheckForPause) {
                        if (!this._sessionContext.videoTag.paused) {
                            this._pendingPlay = true;
                            this._sessionContext.videoTag.pause();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Coordinator.prototype, "autoplay", {
                /**
                * See interface
                */
                set: function (value) {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "autoplay(" + value + ")");
                    this._pendingPlay = value;
                },
                enumerable: true,
                configurable: true
            });

            /**
            * See interface
            */
            Coordinator.prototype.play = function () {
                OnePlayer.Log.verbose(1 /* workflowCoordinator */, "play()");

                // Check if playback should start immediately
                if (this._canStartPlayback()) {
                    this._startPlayback();
                } else {
                    this._pendingPlay = true;
                }
            };

            /**
            * See interface
            */
            Coordinator.prototype.pause = function () {
                OnePlayer.Log.verbose(1 /* workflowCoordinator */, "pause()");

                if (this._pendingPlay) {
                    this._pendingPlay = false;
                }

                this._sessionContext.videoTag.pause();
            };

            /**
            * Checks to see if a media workflow should be requested to the sequencer
            */
            Coordinator.prototype._checkMediaWorkflow = function (stream) {
                var that = this;

                // add to pending streams if it doesn't already exist
                if (-1 === that._pendingStreams.indexOf(stream)) {
                    that._pendingStreams.push(stream);
                }

                this._pendingTryMediaRequestCount++;
                setTimeout(_doCheckMediaWorkflow, 0);

                function _doCheckMediaWorkflow() {
                    OnePlayer.Log.verbose(1 /* workflowCoordinator */, "_doCheckMediaWorkflow");

                    var streamsToRemove = [];
                    that._pendingTryMediaRequestCount--;

                    if (that._disposed) {
                        return;
                    }

                    for (var idx = 0; idx < that._pendingStreams.length; idx++) {
                        if (that._pendingStreams[idx].streamingInfo.endOfStream) {
                            // note the removal any stream that is already at end of stream
                            streamsToRemove.push(that._pendingStreams[idx]);
                        } else if (!that._pendingStreams[idx].streamingInfo.sourceBuffer.bufferFull()) {
                            // go ahead and request if there is room in the buffer
                            OnePlayer.Log.verbose(1 /* workflowCoordinator */, "starting media workflow " + OnePlayer.Presentation.StreamType[stream.type]);

                            // note the removal any stream that is fulfilled
                            streamsToRemove.push(that._pendingStreams[idx]);

                            that._workflowSeq.mediaRequestAsync(that._pendingStreams[idx]).then(_mediaRequestResolved, _mediaRequestRejected);
                        }
                    }

                    for (var idx = 0; idx < streamsToRemove.length; idx++) {
                        that._removeStream(streamsToRemove[idx], that._pendingStreams);
                    }

                    //try again later if there are streams left that haven't been requested
                    if (that._pendingStreams.length > 0 && 0 === that._pendingTryMediaRequestCount) {
                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "_doCheckMediaWorkflow: schedule try again");
                        that._pendingTryMediaRequestCount++;
                        setTimeout(_doCheckMediaWorkflow, Coordinator._mediaSegmentTimeoutInMSec);
                    }
                }

                function _mediaRequestResolved(context) {
                    if (that._disposed) {
                        return;
                    }

                    if (0 /* proceed */ !== context.state) {
                        throw new Error("mediaRequestResolved: unexpected state: " + context.state);
                    }

                    for (var idx = 0; idx < context.urlsToRetrieve.length; idx++) {
                        if (null === context.urlsToRetrieve[idx].mediaData) {
                            throw new Error("mediaRequestResolved: data is null url: " + context.urlsToRetrieve[idx].url);
                        }

                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "mediaRequestResolved appending url: " + context.urlsToRetrieve[idx].url + "(" + context.urlsToRetrieve[idx].httpResposeContentType + ", " + context.urlsToRetrieve[idx].mediaData.byteLength + ")");

                        if (null === context.requestedStream.streamingInfo.pendingSeekPositionInSec) {
                            context.requestedStream.streamingInfo.sourceBuffer.append(context.urlsToRetrieve[idx].mediaData, context.urlsToRetrieve[idx].timestampInSec, context.urlsToRetrieve[idx].durationInSec);
                        }
                    }

                    if (that._pendingPlay && that._canStartPlayback()) {
                        that._startPlayback();
                    }

                    that._checkMediaWorkflow(context.requestedStream);
                }

                function _mediaRequestRejected(context) {
                    if (that._disposed) {
                        return;
                    }

                    // TODO: add code to pass error as event
                    // we should always have error context information associated for the
                    // errors that we want to handle in our layer. If we don't have any
                    // error context associated, it is safe to throw it
                    if (1 /* endOfStream */ === context.state) {
                        OnePlayer.Log.verbose(1 /* workflowCoordinator */, "mediaRequestRejected: " + OnePlayer.Presentation.StreamType[context.requestedStream.type] + " end of stream");

                        context.requestedStream.streamingInfo.endOfStream = true;

                        if (that._endOfSelectedStreams()) {
                            OnePlayer.Log.verbose(1 /* workflowCoordinator */, "End of selected streams");
                            that._mediaSource.endOfStream();

                            // preroll may not have been met, start the playback
                            if (that._pendingPlay) {
                                that._startPlayback();
                            }
                        }
                    } else {
                        OnePlayer.Log.error(1 /* workflowCoordinator */, "mediaRequestRejected: " + OnePlayer.Presentation.StreamType[context.requestedStream.type] + " module: " + context.currentModuleId);
                    }
                }
            };

            /**
            * Removes stream from an array of streams
            */
            Coordinator.prototype._removeStream = function (stream, array) {
                var removedStreams = [];
                var idx = array.indexOf(stream);

                if (idx !== -1) {
                    removedStreams = array.splice(idx, 1);
                }

                return ((removedStreams.length > 0) ? removedStreams[0] : null);
            };

            /**
            * Checks to see if all selected streams are at the end of stream
            */
            Coordinator.prototype._endOfSelectedStreams = function () {
                var streams = this._sessionContext.commonPresentation.streams;
                for (var i = 0; i < streams.length; i++) {
                    if (streams[i].streamingInfo.selected && !streams[i].streamingInfo.endOfStream) {
                        return false;
                    }
                }

                return true;
            };

            /**
            * Checks to see preroll has been fullfilled on selected streams
            */
            Coordinator.prototype._canStartPlayback = function () {
                var videoTag = this._sessionContext.videoTag;
                var streams = this._sessionContext.commonPresentation.streams;
                if (videoTag.HAVE_ENOUGH_DATA !== videoTag.readyState) {
                    return false;
                }

                for (var idx = 0; idx < streams.length; idx++) {
                    if (streams[idx].streamingInfo.selected && streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec() < this._sessionContext.prerollBufferInSec()) {
                        return false;
                    }
                }

                return true;
            };

            /**
            * Starts playback
            */
            Coordinator.prototype._startPlayback = function () {
                this._pendingPlay = false;
                this._sessionContext.videoTag.play();
            };

            /**
            * Central location to register and handle video element events
            */
            Coordinator.prototype._registerVideoTagEvents = function () {
                var that = this;
                var videoTag = that._sessionContext.videoTag;
                videoTag.addEventListener("canplaythrough", _canPlayThroughEvent);

                function _canPlayThroughEvent(ev) {
                    if (that._pendingPlay && that._canStartPlayback()) {
                        that._startPlayback();
                    }
                }
            };
            Coordinator._mediaSegmentTimeoutInMSec = 2000;
            return Coordinator;
        })();
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=WorkflowCoordinator.js.map
var OnePlayer;
(function (OnePlayer) {
    (function (Workflow) {
        "use strict";

        /**
        * Function to create the workflow sequencer
        */
        function CreateSequencer(sessionContext) {
            return new Sequencer(sessionContext);
        }
        Workflow.CreateSequencer = CreateSequencer;

        /**
        * Class that executes the workflow step list
        */
        var Sequencer = (function () {
            function Sequencer(sessionContext) {
                this._sessionContext = sessionContext;

                this._orderedModules = [
                    new OnePlayer.SegmentLocator.Dash(),
                    new OnePlayer.Heuristics.InitialBandwidthDataUrlFormatter(),
                    new OnePlayer.Heuristics.WindowSizeRule(),
                    new OnePlayer.Heuristics.StepRule(),
                    new OnePlayer.Heuristics.Engine(),
                    new OnePlayer.UrlBuilder.DashUrlFormatter(),
                    new OnePlayer.DataRetriever.HttpDataRetriever(),
                    new OnePlayer.DashPresentation.Parser(),
                    new OnePlayer.Presentation.InitialStreamSelector()
                ];

                this._createWorkflows(sessionContext);
            }
            /**
            * See interface
            */
            Sequencer.prototype.dispose = function () {
                this._orderedModules.forEach(function (seqModule) {
                    seqModule.dispose();
                });

                this._orderedModules = null;
                this._sessionContext = null;
            };

            /**
            * See interface
            */
            Sequencer.prototype.presentationRequestAsync = function () {
                var _this = this;
                var that = this;
                return new Promise(function (resolve, reject) {
                    // create request context
                    var reqContext = new OnePlayer.Context.Request(0 /* presentation */, that._sessionContext);

                    reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(that._sessionContext.presentationUrl, 4 /* text */));
                    _this._processSteps(reqContext, resolve, reject);
                });
            };

            /**
            * See interface
            */
            Sequencer.prototype.mediaRequestAsync = function (stream) {
                var that = this;
                return new Promise(function (resolve, reject) {
                    // create request context
                    var reqContext = new OnePlayer.Context.Request(1 /* media */, that._sessionContext);

                    reqContext.requestedStream = stream;
                    reqContext.heuristicData = new OnePlayer.Context.HeuristicData(stream);

                    that._processSteps(reqContext, resolve, reject);
                });
            };

            /**
            * For a request, loop through the step list.
            * @param reqContext The request context.
            * @param resolve Function to call on success.
            * @param reject Function to call on failure.
            */
            Sequencer.prototype._processSteps = function (reqContext, resolve, reject) {
                if (reqContext.workflowType === 1 /* media */) {
                    OnePlayer.Log.verbose(0 /* workflowSequencer */, "Starting process steps for " + OnePlayer.Presentation.StreamType[reqContext.requestedStream.type] + " media workflow");
                } else {
                    OnePlayer.Log.verbose(0 /* workflowSequencer */, "Starting process steps for presentation workflow");
                }

                var stepIdx = 0;
                function processNext() {
                    // clear any errors from previous step
                    reqContext.failRecord = null;

                    if (stepIdx === reqContext.sessionContext.workflows[reqContext.workflowType].stepList.length) {
                        if (reqContext.workflowType === 1 /* media */) {
                            OnePlayer.Log.verbose(0 /* workflowSequencer */, "Finished process steps for " + OnePlayer.Presentation.StreamType[reqContext.requestedStream.type] + " media workflow");
                        } else {
                            OnePlayer.Log.verbose(0 /* workflowSequencer */, "Finished process steps for presentation workflow");
                        }

                        resolve(reqContext);
                        return;
                    }

                    var currentHandler = reqContext.sessionContext.workflows[reqContext.workflowType].stepList[stepIdx];
                    var promise = currentHandler.functionHandler.call(currentHandler.callerInstance, reqContext);

                    stepIdx++;
                    promise.then(stepResolved, stepRejected);
                }

                function stepResolved() {
                    handleResult();
                }

                function stepRejected(err) {
                    var errorMessage;
                    if (null != reqContext.failRecord) {
                        errorMessage = reqContext.failRecord.toString();
                    }

                    OnePlayer.Log.error(0 /* workflowSequencer */, "stepRejected: " + errorMessage + " " + err);

                    reject(reqContext);
                }

                function handleResult() {
                    switch (reqContext.state) {
                        case 0 /* proceed */:
                            setTimeout(processNext(), 0);
                            break;
                        case 1 /* endOfStream */:
                            reject(reqContext);
                            break;
                        default:
                            throw new Error("processSteps unexpected state" + reqContext.state);
                            break;
                    }
                }
                setTimeout(processNext(), 0);
            };

            /**
            * Creates the workflows.
            * @param sessionContext The session context.
            */
            Sequencer.prototype._createWorkflows = function (sessionContext) {
                sessionContext.workflows = [
                    Workflow.CreatePresentation(),
                    Workflow.CreateMedia()
                ];

                // loop through and call each module init to give them a
                // chance to register handlers for step events
                this._orderedModules.forEach(function (orderedModule) {
                    orderedModule.init(sessionContext);
                });

                // now that all the modules have registered, create
                // the steps for each workflow
                this._sessionContext.workflows.forEach(function (workflow) {
                    workflow.createSteps();
                });
            };
            return Sequencer;
        })();
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow;
})(OnePlayer || (OnePlayer = {}));
//# sourceMappingURL=WorkflowSequencer.js.map
