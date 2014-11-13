document.createElement('video');
document.createElement('audio');
document.createElement('track');
var vjs = function(id, options, ready)
    {
        var tag;
        if (typeof id === 'string')
        {
            if (id.indexOf('#') === 0)
            {
                id = id.slice(1)
            }
            if (vjs.players[id])
            {
                return vjs.players[id]
            }
            else
            {
                tag = vjs.el(id)
            }
        }
        else
        {
            tag = id
        }
        if (!tag || !tag.nodeName)
        {
            throw new TypeError('The element or ID supplied is not valid. (videojs)');
        }
        return tag['player'] || new vjs.Player(tag, options, ready)
    };
var videojs = window['videojs'] = vjs;
vjs.CDN_VERSION = 'GENERATED_CDN_VSN';
vjs.ACCESS_PROTOCOL = ('https:' == document.location.protocol ? 'https://' : 'http://');
vjs.options = {
    techOrder: ['html5', 'flash'], html5: {}, flash: {}, width: 300, height: 150, defaultVolume: 0.00, playbackRates: [], children: {
            mediaLoader: {}, posterImage: {}, textTrackDisplay: {}, loadingSpinner: {}, bigPlayButton: {}, controlBar: {}, errorDisplay: {}
        }, language: document.getElementsByTagName('html')[0].getAttribute('lang') || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || 'en', languages: {}, notSupportedMessage: 'No compatible source was found for this video.'
};
if (vjs.CDN_VERSION !== 'GENERATED' + '_CDN_VSN')
{
    videojs.options['flash']['swf'] = vjs.ACCESS_PROTOCOL + 'vjs.zencdn.net/' + vjs.CDN_VERSION + '/video-js.swf'
}
vjs.addLanguage = function(code, data)
{
    if (vjs.options['languages'][code] !== undefined)
    {
        vjs.options['languages'][code] = vjs.util.mergeOptions(vjs.options['languages'][code], data)
    }
    else
    {
        vjs.options['languages'][code] = data
    }
    return vjs.options['languages']
};
vjs.players = {};
/*!
 * Custom Universal Module Definition (UMD)
 *
 * Video.js will never be a non-browser lib so we can simplify UMD a bunch and
 * still support requirejs and browserify. This also needs to be closure
 * compiler compatible, so string keys are used.
 */
if (typeof define === 'function' && define['amd'])
{
    define([], function()
    {
        return videojs
    })
}
else if (typeof exports === 'object' && typeof module === 'object')
{
    module['exports'] = videojs
}
;
vjs.CoreObject = vjs['CoreObject'] = function(){};
vjs.CoreObject.extend = function(props)
{
    var init,
        subObj;
    props = props || {};
    init = props['init'] || props.init || this.prototype['init'] || this.prototype.init || function(){};
    subObj = function()
    {
        init.apply(this, arguments)
    };
    subObj.prototype = vjs.obj.create(this.prototype);
    subObj.prototype.constructor = subObj;
    subObj.extend = vjs.CoreObject.extend;
    subObj.create = vjs.CoreObject.create;
    for (var name in props)
    {
        if (props.hasOwnProperty(name))
        {
            subObj.prototype[name] = props[name]
        }
    }
    return subObj
};
vjs.CoreObject.create = function()
{
    var inst = vjs.obj.create(this.prototype);
    this.apply(inst, arguments);
    return inst
};
vjs.on = function(elem, type, fn)
{
    if (vjs.obj.isArray(type))
    {
        return _handleMultipleEvents(vjs.on, elem, type, fn)
    }
    var data = vjs.getData(elem);
    if (!data.handlers)
        data.handlers = {};
    if (!data.handlers[type])
        data.handlers[type] = [];
    if (!fn.guid)
        fn.guid = vjs.guid++;
    data.handlers[type].push(fn);
    if (!data.dispatcher)
    {
        data.disabled = false;
        data.dispatcher = function(event)
        {
            if (data.disabled)
                return;
            event = vjs.fixEvent(event);
            var handlers = data.handlers[event.type];
            if (handlers)
            {
                var handlersCopy = handlers.slice(0);
                for (var m = 0, n = handlersCopy.length; m < n; m++)
                {
                    if (event.isImmediatePropagationStopped())
                    {
                        break
                    }
                    else
                    {
                        handlersCopy[m].call(elem, event)
                    }
                }
            }
        }
    }
    if (data.handlers[type].length == 1)
    {
        if (elem.addEventListener)
        {
            elem.addEventListener(type, data.dispatcher)
        }
        else if (elem.attachEvent)
        {
            elem.attachEvent('on' + type, data.dispatcher)
        }
    }
};
vjs.off = function(elem, type, fn)
{
    if (!vjs.hasData(elem))
        return;
    var data = vjs.getData(elem);
    if (!data.handlers)
    {
        return
    }
    if (vjs.obj.isArray(type))
    {
        return _handleMultipleEvents(vjs.off, elem, type, fn)
    }
    var removeType = function(t)
        {
            data.handlers[t] = [];
            vjs.cleanUpEvents(elem, t)
        };
    if (!type)
    {
        for (var t in data.handlers)
            removeType(t);
        return
    }
    var handlers = data.handlers[type];
    if (!handlers)
        return;
    if (!fn)
    {
        removeType(type);
        return
    }
    if (fn.guid)
    {
        for (var n = 0; n < handlers.length; n++)
        {
            if (handlers[n].guid === fn.guid)
            {
                handlers.splice(n--, 1)
            }
        }
    }
    vjs.cleanUpEvents(elem, type)
};
vjs.cleanUpEvents = function(elem, type)
{
    var data = vjs.getData(elem);
    if (data.handlers[type].length === 0)
    {
        delete data.handlers[type];
        if (elem.removeEventListener)
        {
            elem.removeEventListener(type, data.dispatcher, false)
        }
        else if (elem.detachEvent)
        {
            elem.detachEvent('on' + type, data.dispatcher)
        }
    }
    if (vjs.isEmpty(data.handlers))
    {
        delete data.handlers;
        delete data.dispatcher;
        delete data.disabled
    }
    if (vjs.isEmpty(data))
    {
        vjs.removeData(elem)
    }
};
vjs.fixEvent = function(event)
{
    function returnTrue()
    {
        return true
    }
    function returnFalse()
    {
        return false
    }
    if (!event || !event.isPropagationStopped)
    {
        var old = event || window.event;
        event = {};
        for (var key in old)
        {
            if (key !== 'layerX' && key !== 'layerY' && key !== 'keyboardEvent.keyLocation')
            {
                if (!(key == 'returnValue' && old.preventDefault))
                {
                    event[key] = old[key]
                }
            }
        }
        if (!event.target)
        {
            event.target = event.srcElement || document
        }
        event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
        event.preventDefault = function()
        {
            if (old.preventDefault)
            {
                old.preventDefault()
            }
            event.returnValue = false;
            event.isDefaultPrevented = returnTrue;
            event.defaultPrevented = true
        };
        event.isDefaultPrevented = returnFalse;
        event.defaultPrevented = false;
        event.stopPropagation = function()
        {
            if (old.stopPropagation)
            {
                old.stopPropagation()
            }
            event.cancelBubble = true;
            event.isPropagationStopped = returnTrue
        };
        event.isPropagationStopped = returnFalse;
        event.stopImmediatePropagation = function()
        {
            if (old.stopImmediatePropagation)
            {
                old.stopImmediatePropagation()
            }
            event.isImmediatePropagationStopped = returnTrue;
            event.stopPropagation()
        };
        event.isImmediatePropagationStopped = returnFalse;
        if (event.clientX != null)
        {
            var doc = document.documentElement,
                body = document.body;
            event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
        }
        event.which = event.charCode || event.keyCode;
        if (event.button != null)
        {
            event.button = (event.button & 1 ? 0 : (event.button & 4 ? 1 : (event.button & 2 ? 2 : 0)))
        }
    }
    return event
};
vjs.trigger = function(elem, event)
{
    var elemData = (vjs.hasData(elem)) ? vjs.getData(elem) : {};
    var parent = elem.parentNode || elem.ownerDocument;
    if (typeof event === 'string')
    {
        event = {
            type: event, target: elem
        }
    }
    event = vjs.fixEvent(event);
    if (elemData.dispatcher)
    {
        elemData.dispatcher.call(elem, event)
    }
    if (parent && !event.isPropagationStopped() && event.bubbles !== false)
    {
        vjs.trigger(parent, event)
    }
    else if (!parent && !event.defaultPrevented)
    {
        var targetData = vjs.getData(event.target);
        if (event.target[event.type])
        {
            targetData.disabled = true;
            if (typeof event.target[event.type] === 'function')
            {
                event.target[event.type]()
            }
            targetData.disabled = false
        }
    }
    return !event.defaultPrevented
};
vjs.one = function(elem, type, fn)
{
    if (vjs.obj.isArray(type))
    {
        return _handleMultipleEvents(vjs.one, elem, type, fn)
    }
    var func = function()
        {
            vjs.off(elem, type, func);
            fn.apply(this, arguments)
        };
    func.guid = fn.guid = fn.guid || vjs.guid++;
    vjs.on(elem, type, func)
};
function _handleMultipleEvents(fn, elem, type, callback)
{
    vjs.arr.forEach(type, function(type)
    {
        fn(elem, type, callback)
    })
}
;
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function(tagName, properties)
{
    var el;
    tagName = tagName || 'div';
    properties = properties || {};
    el = document.createElement(tagName);
    vjs.obj.each(properties, function(propName, val)
    {
        if (propName.indexOf('aria-') !== -1 || propName == 'role')
        {
            el.setAttribute(propName, val)
        }
        else
        {
            el[propName] = val
        }
    });
    return el
};
vjs.capitalize = function(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1)
};
vjs.obj = {};
vjs.obj.create = Object.create || function(obj)
{
    function F(){}
    F.prototype = obj;
    return new F
};
vjs.obj.each = function(obj, fn, context)
{
    for (var key in obj)
    {
        if (hasOwnProp.call(obj, key))
        {
            fn.call(context || this, key, obj[key])
        }
    }
};
vjs.obj.merge = function(obj1, obj2)
{
    if (!obj2)
    {
        return obj1
    }
    for (var key in obj2)
    {
        if (hasOwnProp.call(obj2, key))
        {
            obj1[key] = obj2[key]
        }
    }
    return obj1
};
vjs.obj.deepMerge = function(obj1, obj2)
{
    var key,
        val1,
        val2;
    obj1 = vjs.obj.copy(obj1);
    for (key in obj2)
    {
        if (hasOwnProp.call(obj2, key))
        {
            val1 = obj1[key];
            val2 = obj2[key];
            if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2))
            {
                obj1[key] = vjs.obj.deepMerge(val1, val2)
            }
            else
            {
                obj1[key] = obj2[key]
            }
        }
    }
    return obj1
};
vjs.obj.copy = function(obj)
{
    return vjs.obj.merge({}, obj)
};
vjs.obj.isPlain = function(obj)
{
    return !!obj && typeof obj === 'object' && obj.toString() === '[object Object]' && obj.constructor === Object
};
vjs.obj.isArray = Array.isArray || function(arr)
{
    return Object.prototype.toString.call(arr) === '[object Array]'
};
vjs.bind = function(context, fn, uid)
{
    if (!fn.guid)
    {
        fn.guid = vjs.guid++
    }
    var ret = function()
        {
            return fn.apply(context, arguments)
        };
    ret.guid = (uid) ? uid + '_' + fn.guid : fn.guid;
    return ret
};
vjs.cache = {};
vjs.guid = 1;
vjs.expando = 'vdata' + (new Date).getTime();
vjs.getData = function(el)
{
    var id = el[vjs.expando];
    if (!id)
    {
        id = el[vjs.expando] = vjs.guid++;
        vjs.cache[id] = {}
    }
    return vjs.cache[id]
};
vjs.hasData = function(el)
{
    var id = el[vjs.expando];
    return !(!id || vjs.isEmpty(vjs.cache[id]))
};
vjs.removeData = function(el)
{
    var id = el[vjs.expando];
    if (!id)
    {
        return
    }
    delete vjs.cache[id];
    try
    {
        delete el[vjs.expando]
    }
    catch(e)
    {
        if (el.removeAttribute)
        {
            el.removeAttribute(vjs.expando)
        }
        else
        {
            el[vjs.expando] = null
        }
    }
};
vjs.isEmpty = function(obj)
{
    for (var prop in obj)
    {
        if (obj[prop] !== null)
        {
            return false
        }
    }
    return true
};
vjs.addClass = function(element, classToAdd)
{
    if ((' ' + element.className + ' ').indexOf(' ' + classToAdd + ' ') == -1)
    {
        element.className = element.className === '' ? classToAdd : element.className + ' ' + classToAdd
    }
};
vjs.removeClass = function(element, classToRemove)
{
    var classNames,
        i;
    if (element.className.indexOf(classToRemove) == -1)
    {
        return
    }
    classNames = element.className.split(' ');
    for (i = classNames.length - 1; i >= 0; i--)
    {
        if (classNames[i] === classToRemove)
        {
            classNames.splice(i, 1)
        }
    }
    element.className = classNames.join(' ')
};
vjs.TEST_VID = vjs.createEl('video');
vjs.USER_AGENT = navigator.userAgent;
vjs.IS_IPHONE = (/iPhone/i).test(vjs.USER_AGENT);
vjs.IS_IPAD = (/iPad/i).test(vjs.USER_AGENT);
vjs.IS_IPOD = (/iPod/i).test(vjs.USER_AGENT);
vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD;
vjs.IOS_VERSION = (function()
{
    var match = vjs.USER_AGENT.match(/OS (\d+)_/i);
    if (match && match[1])
    {
        return match[1]
    }
})();
vjs.IS_ANDROID = (/Android/i).test(vjs.USER_AGENT);
vjs.ANDROID_VERSION = (function()
{
    var match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        major,
        minor;
    if (!match)
    {
        return null
    }
    major = match[1] && parseFloat(match[1]);
    minor = match[2] && parseFloat(match[2]);
    if (major && minor)
    {
        return parseFloat(match[1] + '.' + match[2])
    }
    else if (major)
    {
        return major
    }
    else
    {
        return null
    }
})();
vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && (/webkit/i).test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3;
vjs.IS_FIREFOX = (/Firefox/i).test(vjs.USER_AGENT);
vjs.IS_CHROME = (/Chrome/i).test(vjs.USER_AGENT);
vjs.TOUCH_ENABLED = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);
vjs.setElementAttributes = function(el, attributes)
{
    vjs.obj.each(attributes, function(attrName, attrValue)
    {
        if (attrValue === null || typeof attrValue === 'undefined' || attrValue === false)
        {
            el.removeAttribute(attrName)
        }
        else
        {
            el.setAttribute(attrName, (attrValue === true ? '' : attrValue))
        }
    })
};
vjs.getElementAttributes = function(tag)
{
    var obj,
        knownBooleans,
        attrs,
        attrName,
        attrVal;
    obj = {};
    knownBooleans = ',' + 'autoplay,controls,loop,muted,default' + ',';
    if (tag && tag.attributes && tag.attributes.length > 0)
    {
        attrs = tag.attributes;
        for (var i = attrs.length - 1; i >= 0; i--)
        {
            attrName = attrs[i].name;
            attrVal = attrs[i].value;
            if (typeof tag[attrName] === 'boolean' || knownBooleans.indexOf(',' + attrName + ',') !== -1)
            {
                attrVal = (attrVal !== null) ? true : false
            }
            obj[attrName] = attrVal
        }
    }
    return obj
};
vjs.getComputedDimension = function(el, strCssRule)
{
    var strValue = '';
    if (document.defaultView && document.defaultView.getComputedStyle)
    {
        strValue = document.defaultView.getComputedStyle(el, '').getPropertyValue(strCssRule)
    }
    else if (el.currentStyle)
    {
        strValue = el['client' + strCssRule.substr(0, 1).toUpperCase() + strCssRule.substr(1)] + 'px'
    }
    return strValue
};
vjs.insertFirst = function(child, parent)
{
    if (parent.firstChild)
    {
        parent.insertBefore(child, parent.firstChild)
    }
    else
    {
        parent.appendChild(child)
    }
};
vjs.browser = {};
vjs.el = function(id)
{
    if (id.indexOf('#') === 0)
    {
        id = id.slice(1)
    }
    return document.getElementById(id)
};
vjs.formatTime = function(seconds, guide)
{
    guide = guide || seconds;
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600);
    if (isNaN(seconds) || seconds === Infinity)
    {
        h = m = s = '-'
    }
    h = (h > 0 || gh > 0) ? h + ':' : '';
    m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';
    s = (s < 10) ? '0' + s : s;
    return h + m + s
};
vjs.blockTextSelection = function()
{
    document.body.focus();
    document.onselectstart = function()
    {
        return false
    }
};
vjs.unblockTextSelection = function()
{
    document.onselectstart = function()
    {
        return true
    }
};
vjs.trim = function(str)
{
    return (str + '').replace(/^\s+|\s+$/g, '')
};
vjs.round = function(num, dec)
{
    if (!dec)
    {
        dec = 0
    }
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
};
vjs.createTimeRange = function(start, end)
{
    return {
            length: 1, start: function()
                {
                    return start
                }, end: function()
                {
                    return end
                }
        }
};
vjs.get = function(url, onSuccess, onError, withCredentials)
{
    var fileUrl,
        request,
        urlInfo,
        winLoc,
        crossOrigin;
    onError = onError || function(){};
    if (typeof XMLHttpRequest === 'undefined')
    {
        window.XMLHttpRequest = function()
        {
            try
            {
                return new window.ActiveXObject('Msxml2.XMLHTTP.6.0')
            }
            catch(e) {}
            try
            {
                return new window.ActiveXObject('Msxml2.XMLHTTP.3.0')
            }
            catch(f) {}
            try
            {
                return new window.ActiveXObject('Msxml2.XMLHTTP')
            }
            catch(g) {}
            throw new Error('This browser does not support XMLHttpRequest.');
        }
    }
    request = new XMLHttpRequest;
    urlInfo = vjs.parseUrl(url);
    winLoc = window.location;
    crossOrigin = (urlInfo.protocol + urlInfo.host) !== (winLoc.protocol + winLoc.host);
    if (crossOrigin && window.XDomainRequest && !('withCredentials' in request))
    {
        request = new window.XDomainRequest;
        request.onload = function()
        {
            onSuccess(request.responseText)
        };
        request.onerror = onError;
        request.onprogress = function(){};
        request.ontimeout = onError
    }
    else
    {
        fileUrl = (urlInfo.protocol == 'file:' || winLoc.protocol == 'file:');
        request.onreadystatechange = function()
        {
            if (request.readyState === 4)
            {
                if (request.status === 200 || fileUrl && request.status === 0)
                {
                    onSuccess(request.responseText)
                }
                else
                {
                    onError(request.responseText)
                }
            }
        }
    }
    try
    {
        request.open('GET', url, true);
        if (withCredentials)
        {
            request.withCredentials = true
        }
    }
    catch(e)
    {
        onError(e);
        return
    }
    try
    {
        request.send()
    }
    catch(e)
    {
        onError(e)
    }
};
vjs.setLocalStorage = function(key, value)
{
    try
    {
        var localStorage = window.localStorage || false;
        if (!localStorage)
        {
            return
        }
        localStorage[key] = value
    }
    catch(e)
    {
        if (e.code == 22 || e.code == 1014)
        {
            vjs.log('LocalStorage Full (VideoJS)', e)
        }
        else
        {
            if (e.code == 18)
            {
                vjs.log('LocalStorage not allowed (VideoJS)', e)
            }
            else
            {
                vjs.log('LocalStorage Error (VideoJS)', e)
            }
        }
    }
};
vjs.getAbsoluteURL = function(url)
{
    if (!url.match(/^https?:\/\//))
    {
        url = vjs.createEl('div', {innerHTML: '<a href="' + url + '">x</a>'}).firstChild.href
    }
    return url
};
vjs.parseUrl = function(url)
{
    var div,
        a,
        addToBody,
        props,
        details;
    props = ['protocol', 'hostname', 'port', 'pathname', 'search', 'hash', 'host'];
    a = vjs.createEl('a', {href: url});
    addToBody = (a.host === '' && a.protocol !== 'file:');
    if (addToBody)
    {
        div = vjs.createEl('div');
        div.innerHTML = '<a href="' + url + '"></a>';
        a = div.firstChild;
        div.setAttribute('style', 'display:none; position:absolute;');
        document.body.appendChild(div)
    }
    details = {};
    for (var i = 0; i < props.length; i++)
    {
        details[props[i]] = a[props[i]]
    }
    if (addToBody)
    {
        document.body.removeChild(div)
    }
    return details
};
function _logType(type, args)
{
    var argsArray,
        noop,
        console;
    argsArray = Array.prototype.slice.call(args);
    noop = function(){};
    console = window['console'] || {
        log: noop, warn: noop, error: noop
    };
    if (type)
    {
        argsArray.unshift(type.toUpperCase() + ':')
    }
    else
    {
        type = 'log'
    }
    vjs.log.history.push(argsArray);
    argsArray.unshift('VIDEOJS:');
    if (console[type].apply)
    {
        console[type].apply(console, argsArray)
    }
    else
    {
        console[type](argsArray.join(' '))
    }
}
vjs.log = function()
{
    _logType(null, arguments)
};
vjs.log.history = [];
vjs.log.error = function()
{
    _logType('error', arguments)
};
vjs.log.warn = function()
{
    _logType('warn', arguments)
};
vjs.findPosition = function(el)
{
    var box,
        docEl,
        body,
        clientLeft,
        scrollLeft,
        left,
        clientTop,
        scrollTop,
        top;
    if (el.getBoundingClientRect && el.parentNode)
    {
        box = el.getBoundingClientRect()
    }
    if (!box)
    {
        return {
                left: 0, top: 0
            }
    }
    docEl = document.documentElement;
    body = document.body;
    clientLeft = docEl.clientLeft || body.clientLeft || 0;
    scrollLeft = window.pageXOffset || body.scrollLeft;
    left = box.left + scrollLeft - clientLeft;
    clientTop = docEl.clientTop || body.clientTop || 0;
    scrollTop = window.pageYOffset || body.scrollTop;
    top = box.top + scrollTop - clientTop;
    return {
            left: vjs.round(left), top: vjs.round(top)
        }
};
vjs.arr = {};
vjs.arr.forEach = function(array, callback, thisArg)
{
    if (vjs.obj.isArray(array) && callback instanceof Function)
    {
        for (var i = 0, len = array.length; i < len; ++i)
        {
            callback.call(thisArg || vjs, array[i], i, array)
        }
    }
    return array
};
vjs.util = {};
vjs.util.mergeOptions = function(obj1, obj2)
{
    var key,
        val1,
        val2;
    obj1 = vjs.obj.copy(obj1);
    for (key in obj2)
    {
        if (obj2.hasOwnProperty(key))
        {
            val1 = obj1[key];
            val2 = obj2[key];
            if (vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2))
            {
                obj1[key] = vjs.util.mergeOptions(val1, val2)
            }
            else
            {
                obj1[key] = obj2[key]
            }
        }
    }
    return obj1
};
vjs.Component = vjs.CoreObject.extend({init: function(player, options, ready)
    {
        this.player_ = player;
        this.options_ = vjs.obj.copy(this.options_);
        options = this.options(options);
        this.id_ = options['id'] || ((options['el'] && options['el']['id']) ? options['el']['id'] : player.id() + '_component_' + vjs.guid++);
        this.name_ = options['name'] || null;
        this.el_ = options['el'] || this.createEl();
        this.children_ = [];
        this.childIndex_ = {};
        this.childNameIndex_ = {};
        this.initChildren();
        this.ready(ready);
        if (options.reportTouchActivity !== false)
        {
            this.enableTouchActivity()
        }
    }});
vjs.Component.prototype.dispose = function()
{
    this.trigger({
        type: 'dispose', bubbles: false
    });
    if (this.children_)
    {
        for (var i = this.children_.length - 1; i >= 0; i--)
        {
            if (this.children_[i].dispose)
            {
                this.children_[i].dispose()
            }
        }
    }
    this.children_ = null;
    this.childIndex_ = null;
    this.childNameIndex_ = null;
    this.off();
    if (this.el_.parentNode)
    {
        this.el_.parentNode.removeChild(this.el_)
    }
    vjs.removeData(this.el_);
    this.el_ = null
};
vjs.Component.prototype.player_ = true;
vjs.Component.prototype.player = function()
{
    return this.player_
};
vjs.Component.prototype.options_;
vjs.Component.prototype.options = function(obj)
{
    if (obj === undefined)
        return this.options_;
    return this.options_ = vjs.util.mergeOptions(this.options_, obj)
};
vjs.Component.prototype.el_;
vjs.Component.prototype.createEl = function(tagName, attributes)
{
    return vjs.createEl(tagName, attributes)
};
vjs.Component.prototype.localize = function(string)
{
    var lang = this.player_.language(),
        languages = this.player_.languages();
    if (languages && languages[lang] && languages[lang][string])
    {
        return languages[lang][string]
    }
    return string
};
vjs.Component.prototype.el = function()
{
    return this.el_
};
vjs.Component.prototype.contentEl_;
vjs.Component.prototype.contentEl = function()
{
    return this.contentEl_ || this.el_
};
vjs.Component.prototype.id_;
vjs.Component.prototype.id = function()
{
    return this.id_
};
vjs.Component.prototype.name_;
vjs.Component.prototype.name = function()
{
    return this.name_
};
vjs.Component.prototype.children_;
vjs.Component.prototype.children = function()
{
    return this.children_
};
vjs.Component.prototype.childIndex_;
vjs.Component.prototype.getChildById = function(id)
{
    return this.childIndex_[id]
};
vjs.Component.prototype.childNameIndex_;
vjs.Component.prototype.getChild = function(name)
{
    return this.childNameIndex_[name]
};
vjs.Component.prototype.addChild = function(child, options)
{
    var component,
        componentClass,
        componentName,
        componentId;
    if (typeof child === 'string')
    {
        componentName = child;
        options = options || {};
        componentClass = options['componentClass'] || vjs.capitalize(componentName);
        options['name'] = componentName;
        component = new window['videojs'][componentClass](this.player_ || this, options)
    }
    else
    {
        component = child
    }
    this.children_.push(component);
    if (typeof component.id === 'function')
    {
        this.childIndex_[component.id()] = component
    }
    componentName = componentName || (component.name && component.name());
    if (componentName)
    {
        this.childNameIndex_[componentName] = component
    }
    if (typeof component['el'] === 'function' && component['el']())
    {
        this.contentEl().appendChild(component['el']())
    }
    return component
};
vjs.Component.prototype.removeChild = function(component)
{
    if (typeof component === 'string')
    {
        component = this.getChild(component)
    }
    if (!component || !this.children_)
        return;
    var childFound = false;
    for (var i = this.children_.length - 1; i >= 0; i--)
    {
        if (this.children_[i] === component)
        {
            childFound = true;
            this.children_.splice(i, 1);
            break
        }
    }
    if (!childFound)
        return;
    this.childIndex_[component.id] = null;
    this.childNameIndex_[component.name] = null;
    var compEl = component.el();
    if (compEl && compEl.parentNode === this.contentEl())
    {
        this.contentEl().removeChild(component.el())
    }
};
vjs.Component.prototype.initChildren = function()
{
    var parent,
        children,
        child,
        name,
        opts;
    parent = this;
    children = this.options()['children'];
    if (children)
    {
        if (vjs.obj.isArray(children))
        {
            for (var i = 0; i < children.length; i++)
            {
                child = children[i];
                if (typeof child == 'string')
                {
                    name = child;
                    opts = {}
                }
                else
                {
                    name = child.name;
                    opts = child
                }
                parent[name] = parent.addChild(name, opts)
            }
        }
        else
        {
            vjs.obj.each(children, function(name, opts)
            {
                if (opts === false)
                    return;
                parent[name] = parent.addChild(name, opts)
            })
        }
    }
};
vjs.Component.prototype.buildCSSClass = function()
{
    return ''
};
vjs.Component.prototype.on = function(type, fn)
{
    vjs.on(this.el_, type, vjs.bind(this, fn));
    return this
};
vjs.Component.prototype.off = function(type, fn)
{
    vjs.off(this.el_, type, fn);
    return this
};
vjs.Component.prototype.one = function(type, fn)
{
    vjs.one(this.el_, type, vjs.bind(this, fn));
    return this
};
vjs.Component.prototype.trigger = function(event)
{
    vjs.trigger(this.el_, event);
    return this
};
vjs.Component.prototype.isReady_;
vjs.Component.prototype.isReadyOnInitFinish_ = true;
vjs.Component.prototype.readyQueue_;
vjs.Component.prototype.ready = function(fn)
{
    if (fn)
    {
        if (this.isReady_)
        {
            fn.call(this)
        }
        else
        {
            if (this.readyQueue_ === undefined)
            {
                this.readyQueue_ = []
            }
            this.readyQueue_.push(fn)
        }
    }
    return this
};
vjs.Component.prototype.triggerReady = function()
{
    this.isReady_ = true;
    var readyQueue = this.readyQueue_;
    if (readyQueue && readyQueue.length > 0)
    {
        for (var i = 0, j = readyQueue.length; i < j; i++)
        {
            readyQueue[i].call(this)
        }
        this.readyQueue_ = [];
        this.trigger('ready')
    }
};
vjs.Component.prototype.addClass = function(classToAdd)
{
    vjs.addClass(this.el_, classToAdd);
    return this
};
vjs.Component.prototype.removeClass = function(classToRemove)
{
    vjs.removeClass(this.el_, classToRemove);
    return this
};
vjs.Component.prototype.show = function()
{
    this.el_.style.display = 'block';
    return this
};
vjs.Component.prototype.hide = function()
{
    this.el_.style.display = 'none';
    return this
};
vjs.Component.prototype.lockShowing = function()
{
    this.addClass('vjs-lock-showing');
    return this
};
vjs.Component.prototype.unlockShowing = function()
{
    this.removeClass('vjs-lock-showing');
    return this
};
vjs.Component.prototype.disable = function()
{
    this.hide();
    this.show = function(){}
};
vjs.Component.prototype.width = function(num, skipListeners)
{
    return this.dimension('width', num, skipListeners)
};
vjs.Component.prototype.height = function(num, skipListeners)
{
    return this.dimension('height', num, skipListeners)
};
vjs.Component.prototype.dimensions = function(width, height)
{
    return this.width(width, true).height(height)
};
vjs.Component.prototype.dimension = function(widthOrHeight, num, skipListeners)
{
    if (num !== undefined)
    {
        if (('' + num).indexOf('%') !== -1 || ('' + num).indexOf('px') !== -1)
        {
            this.el_.style[widthOrHeight] = num
        }
        else if (num === 'auto')
        {
            this.el_.style[widthOrHeight] = ''
        }
        else
        {
            this.el_.style[widthOrHeight] = num + 'px'
        }
        if (!skipListeners)
        {
            this.trigger('resize')
        }
        return this
    }
    if (!this.el_)
        return 0;
    var val = this.el_.style[widthOrHeight];
    var pxIndex = val.indexOf('px');
    if (pxIndex !== -1)
    {
        return parseInt(val.slice(0, pxIndex), 10)
    }
    else
    {
        return parseInt(this.el_['offset' + vjs.capitalize(widthOrHeight)], 10)
    }
};
vjs.Component.prototype.onResize;
vjs.Component.prototype.emitTapEvents = function()
{
    var touchStart,
        firstTouch,
        touchTime,
        couldBeTap,
        noTap,
        xdiff,
        ydiff,
        touchDistance,
        tapMovementThreshold;
    touchStart = 0;
    firstTouch = null;
    tapMovementThreshold = 22;
    this.on('touchstart', function(event)
    {
        if (event.touches.length === 1)
        {
            firstTouch = event.touches[0];
            touchStart = (new Date).getTime();
            couldBeTap = true
        }
    });
    this.on('touchmove', function(event)
    {
        if (event.touches.length > 1)
        {
            couldBeTap = false
        }
        else if (firstTouch)
        {
            xdiff = event.touches[0].pageX - firstTouch.pageX;
            ydiff = event.touches[0].pageY - firstTouch.pageY;
            touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
            if (touchDistance > tapMovementThreshold)
            {
                couldBeTap = false
            }
        }
    });
    noTap = function()
    {
        couldBeTap = false
    };
    this.on('touchleave', noTap);
    this.on('touchcancel', noTap);
    this.on('touchend', function(event)
    {
        firstTouch = null;
        if (couldBeTap === true)
        {
            touchTime = (new Date).getTime() - touchStart;
            if (touchTime < 250)
            {
                event.preventDefault();
                this.trigger('tap')
            }
        }
    })
};
vjs.Component.prototype.enableTouchActivity = function()
{
    var report,
        touchHolding,
        touchEnd;
    report = vjs.bind(this.player(), this.player().reportUserActivity);
    this.on('touchstart', function()
    {
        report();
        clearInterval(touchHolding);
        touchHolding = setInterval(report, 250)
    });
    touchEnd = function(event)
    {
        report();
        clearInterval(touchHolding)
    };
    this.on('touchmove', report);
    this.on('touchend', touchEnd);
    this.on('touchcancel', touchEnd)
};
vjs.Button = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        this.emitTapEvents();
        this.on('tap', this.onClick);
        this.on('click', this.onClick);
        this.on('focus', this.onFocus);
        this.on('blur', this.onBlur)
    }});
vjs.Button.prototype.createEl = function(type, props)
{
    var el;
    props = vjs.obj.merge({
        className: this.buildCSSClass(), role: 'button', 'aria-live': 'polite', tabIndex: 0
    }, props);
    el = vjs.Component.prototype.createEl.call(this, type, props);
    if (!props.innerHTML)
    {
        this.contentEl_ = vjs.createEl('div', {className: 'vjs-control-content'});
        this.controlText_ = vjs.createEl('span', {
            className: 'vjs-control-text', innerHTML: this.localize(this.buttonText) || 'Need Text'
        });
        this.contentEl_.appendChild(this.controlText_);
        el.appendChild(this.contentEl_)
    }
    return el
};
vjs.Button.prototype.buildCSSClass = function()
{
    return 'vjs-control ' + vjs.Component.prototype.buildCSSClass.call(this)
};
vjs.Button.prototype.onClick = function(){};
vjs.Button.prototype.onFocus = function()
{
    vjs.on(document, 'keydown', vjs.bind(this, this.onKeyPress))
};
vjs.Button.prototype.onKeyPress = function(event)
{
    if (event.which == 32 || event.which == 13)
    {
        event.preventDefault();
        this.onClick()
    }
};
vjs.Button.prototype.onBlur = function()
{
    vjs.off(document, 'keydown', vjs.bind(this, this.onKeyPress))
};
vjs.Slider = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
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
        this.boundEvents.end = vjs.bind(this, this.onMouseUp)
    }});
vjs.Slider.prototype.createEl = function(type, props)
{
    props = props || {};
    props.className = props.className + ' vjs-slider';
    props = vjs.obj.merge({
        role: 'slider', 'aria-valuenow': 0, 'aria-valuemin': 0, 'aria-valuemax': 100, tabIndex: 0
    }, props);
    return vjs.Component.prototype.createEl.call(this, type, props)
};
vjs.Slider.prototype.onMouseDown = function(event)
{
    event.preventDefault();
    vjs.blockTextSelection();
    this.addClass('vjs-sliding');
    vjs.on(document, 'mousemove', this.boundEvents.move);
    vjs.on(document, 'mouseup', this.boundEvents.end);
    vjs.on(document, 'touchmove', this.boundEvents.move);
    vjs.on(document, 'touchend', this.boundEvents.end);
    this.onMouseMove(event)
};
vjs.Slider.prototype.onMouseMove = function(){};
vjs.Slider.prototype.onMouseUp = function()
{
    vjs.unblockTextSelection();
    this.removeClass('vjs-sliding');
    vjs.off(document, 'mousemove', this.boundEvents.move, false);
    vjs.off(document, 'mouseup', this.boundEvents.end, false);
    vjs.off(document, 'touchmove', this.boundEvents.move, false);
    vjs.off(document, 'touchend', this.boundEvents.end, false);
    this.update()
};
vjs.Slider.prototype.update = function()
{
    if (!this.el_)
        return;
    var barProgress,
        progress = this.getPercent(),
        handle = this.handle,
        bar = this.bar;
    if (isNaN(progress))
    {
        progress = 0
    }
    barProgress = progress;
    if (handle)
    {
        var box = this.el_,
            boxWidth = box.offsetWidth,
            handleWidth = handle.el().offsetWidth,
            handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,
            boxAdjustedPercent = 1 - handlePercent,
            adjustedProgress = progress * boxAdjustedPercent;
        barProgress = adjustedProgress + (handlePercent / 2);
        handle.el().style.left = vjs.round(adjustedProgress * 100, 2) + '%'
    }
    if (bar)
    {
        bar.el().style.width = vjs.round(barProgress * 100, 2) + '%'
    }
};
vjs.Slider.prototype.calculateDistance = function(event)
{
    var el,
        box,
        boxX,
        boxY,
        boxW,
        boxH,
        handle,
        pageX,
        pageY;
    el = this.el_;
    box = vjs.findPosition(el);
    boxW = boxH = el.offsetWidth;
    handle = this.handle;
    if (this.options()['vertical'])
    {
        boxY = box.top;
        if (event.changedTouches)
        {
            pageY = event.changedTouches[0].pageY
        }
        else
        {
            pageY = event.pageY
        }
        if (handle)
        {
            var handleH = handle.el().offsetHeight;
            boxY = boxY + (handleH / 2);
            boxH = boxH - handleH
        }
        return Math.max(0, Math.min(1, ((boxY - pageY) + boxH) / boxH))
    }
    else
    {
        boxX = box.left;
        if (event.changedTouches)
        {
            pageX = event.changedTouches[0].pageX
        }
        else
        {
            pageX = event.pageX
        }
        if (handle)
        {
            var handleW = handle.el().offsetWidth;
            boxX = boxX + (handleW / 2);
            boxW = boxW - handleW
        }
        return Math.max(0, Math.min(1, (pageX - boxX) / boxW))
    }
};
vjs.Slider.prototype.onFocus = function()
{
    vjs.on(document, 'keyup', vjs.bind(this, this.onKeyPress))
};
vjs.Slider.prototype.onKeyPress = function(event)
{
    if (event.which == 37 || event.which == 40)
    {
        event.preventDefault();
        this.stepBack()
    }
    else if (event.which == 38 || event.which == 39)
    {
        event.preventDefault();
        this.stepForward()
    }
};
vjs.Slider.prototype.onBlur = function()
{
    vjs.off(document, 'keyup', vjs.bind(this, this.onKeyPress))
};
vjs.Slider.prototype.onClick = function(event)
{
    event.stopImmediatePropagation();
    event.preventDefault()
};
vjs.SliderHandle = vjs.Component.extend();
vjs.SliderHandle.prototype.defaultValue = 0;
vjs.SliderHandle.prototype.createEl = function(type, props)
{
    props = props || {};
    props.className = props.className + ' vjs-slider-handle';
    props = vjs.obj.merge({innerHTML: '<span class="vjs-control-text">' + this.defaultValue + '</span>'}, props);
    return vjs.Component.prototype.createEl.call(this, 'div', props)
};
vjs.Menu = vjs.Component.extend();
vjs.Menu.prototype.addItem = function(component)
{
    this.addChild(component);
    component.on('click', vjs.bind(this, function()
    {
        this.unlockShowing()
    }))
};
vjs.Menu.prototype.createEl = function()
{
    var contentElType = this.options().contentElType || 'ul';
    this.contentEl_ = vjs.createEl(contentElType, {className: 'vjs-menu-content'});
    var el = vjs.Component.prototype.createEl.call(this, 'div', {
            append: this.contentEl_, className: 'vjs-menu'
        });
    el.appendChild(this.contentEl_);
    vjs.on(el, 'click', function(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation()
    });
    return el
};
vjs.MenuItem = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options);
        this.selected(options['selected'])
    }});
vjs.MenuItem.prototype.createEl = function(type, props)
{
    return vjs.Button.prototype.createEl.call(this, 'li', vjs.obj.merge({
            className: 'vjs-menu-item', innerHTML: this.options_['label']
        }, props))
};
vjs.MenuItem.prototype.onClick = function()
{
    this.selected(true)
};
vjs.MenuItem.prototype.selected = function(selected)
{
    if (selected)
    {
        this.addClass('vjs-selected');
        this.el_.setAttribute('aria-selected', true)
    }
    else
    {
        this.removeClass('vjs-selected');
        this.el_.setAttribute('aria-selected', false)
    }
};
vjs.MenuButton = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options);
        this.menu = this.createMenu();
        this.addChild(this.menu);
        if (this.items && this.items.length === 0)
        {
            this.hide()
        }
        this.on('keyup', this.onKeyPress);
        this.el_.setAttribute('aria-haspopup', true);
        this.el_.setAttribute('role', 'button')
    }});
vjs.MenuButton.prototype.buttonPressed_ = false;
vjs.MenuButton.prototype.createMenu = function()
{
    var menu = new vjs.Menu(this.player_);
    if (this.options().title)
    {
        menu.contentEl().appendChild(vjs.createEl('li', {
            className: 'vjs-menu-title', innerHTML: vjs.capitalize(this.options().title), tabindex: -1
        }))
    }
    this.items = this['createItems']();
    if (this.items)
    {
        for (var i = 0; i < this.items.length; i++)
        {
            menu.addItem(this.items[i])
        }
    }
    return menu
};
vjs.MenuButton.prototype.createItems = function(){};
vjs.MenuButton.prototype.buildCSSClass = function()
{
    return this.className + ' vjs-menu-button ' + vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.MenuButton.prototype.onFocus = function(){};
vjs.MenuButton.prototype.onBlur = function(){};
vjs.MenuButton.prototype.onClick = function()
{
    this.one('mouseout', vjs.bind(this, function()
    {
        this.menu.unlockShowing();
        this.el_.blur()
    }));
    if (this.buttonPressed_)
    {
        this.unpressButton()
    }
    else
    {
        this.pressButton()
    }
};
vjs.MenuButton.prototype.onKeyPress = function(event)
{
    event.preventDefault();
    if (event.which == 32 || event.which == 13)
    {
        if (this.buttonPressed_)
        {
            this.unpressButton()
        }
        else
        {
            this.pressButton()
        }
    }
    else if (event.which == 27)
    {
        if (this.buttonPressed_)
        {
            this.unpressButton()
        }
    }
};
vjs.MenuButton.prototype.pressButton = function()
{
    this.buttonPressed_ = true;
    this.menu.lockShowing();
    this.el_.setAttribute('aria-pressed', true);
    if (this.items && this.items.length > 0)
    {
        this.items[0].el().focus()
    }
};
vjs.MenuButton.prototype.unpressButton = function()
{
    this.buttonPressed_ = false;
    this.menu.unlockShowing();
    this.el_.setAttribute('aria-pressed', false)
};
vjs.MediaError = function(code)
{
    if (typeof code === 'number')
    {
        this.code = code
    }
    else if (typeof code === 'string')
    {
        this.message = code
    }
    else if (typeof code === 'object')
    {
        vjs.obj.merge(this, code)
    }
    if (!this.message)
    {
        this.message = vjs.MediaError.defaultMessages[this.code] || ''
    }
};
vjs.MediaError.prototype.code = 0;
vjs.MediaError.prototype.message = '';
vjs.MediaError.prototype.status = null;
vjs.MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
vjs.MediaError.defaultMessages = {
    1: 'You aborted the video playback', 2: 'A network error caused the video download to fail part-way.', 3: 'The video playback was aborted due to a corruption problem or because the video used features your browser did not support.', 4: 'The video could not be loaded, either because the server or network failed or because the format is not supported.', 5: 'The video is encrypted and we do not have the keys to decrypt it.'
};
for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++)
{
    vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum;
    vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum
}
;
(function()
{
    var apiMap,
        specApi,
        browserApi,
        i;
    vjs.browser.fullscreenAPI;
    apiMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    specApi = apiMap[0];
    for (i = 0; i < apiMap.length; i++)
    {
        if (apiMap[i][1] in document)
        {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi)
    {
        vjs.browser.fullscreenAPI = {};
        for (i = 0; i < browserApi.length; i++)
        {
            vjs.browser.fullscreenAPI[specApi[i]] = browserApi[i]
        }
    }
})();
vjs.Player = vjs.Component.extend({init: function(tag, options, ready)
    {
        this.tag = tag;
        tag.id = tag.id || 'vjs_video_' + vjs.guid++;
        this.tagAttributes = tag && vjs.getElementAttributes(tag);
        options = vjs.obj.merge(this.getTagSettings(tag), options);
        this.language_ = options['language'] || vjs.options['language'];
        this.languages_ = options['languages'] || vjs.options['languages'];
        this.cache_ = {};
        this.poster_ = options['poster'];
        this.controls_ = options['controls'];
        tag.controls = false;
        options.reportTouchActivity = false;
        vjs.Component.call(this, this, options, ready);
        if (this.controls())
        {
            this.addClass('vjs-controls-enabled')
        }
        else
        {
            this.addClass('vjs-controls-disabled')
        }
        vjs.players[this.id_] = this;
        if (options['plugins'])
        {
            vjs.obj.each(options['plugins'], function(key, val)
            {
                this[key](val)
            }, this)
        }
        this.listenForUserActivity()
    }});
vjs.Player.prototype.language_;
vjs.Player.prototype.language = function(languageCode)
{
    if (languageCode === undefined)
    {
        return this.language_
    }
    this.language_ = languageCode;
    return this
};
vjs.Player.prototype.languages_;
vjs.Player.prototype.languages = function()
{
    return this.languages_
};
vjs.Player.prototype.options_ = vjs.options;
vjs.Player.prototype.dispose = function()
{
    this.trigger('dispose');
    this.off('dispose');
    vjs.players[this.id_] = null;
    if (this.tag && this.tag['player'])
    {
        this.tag['player'] = null
    }
    if (this.el_ && this.el_['player'])
    {
        this.el_['player'] = null
    }
    if (this.tech)
    {
        this.tech.dispose()
    }
    vjs.Component.prototype.dispose.call(this)
};
vjs.Player.prototype.getTagSettings = function(tag)
{
    var options = {
            sources: [], tracks: []
        };
    vjs.obj.merge(options, vjs.getElementAttributes(tag));
    if (tag.hasChildNodes())
    {
        var children,
            child,
            childName,
            i,
            j;
        children = tag.childNodes;
        for (i = 0, j = children.length; i < j; i++)
        {
            child = children[i];
            childName = child.nodeName.toLowerCase();
            if (childName === 'source')
            {
                options['sources'].push(vjs.getElementAttributes(child))
            }
            else if (childName === 'track')
            {
                options['tracks'].push(vjs.getElementAttributes(child))
            }
        }
    }
    return options
};
vjs.Player.prototype.createEl = function()
{
    var el = this.el_ = vjs.Component.prototype.createEl.call(this, 'div'),
        tag = this.tag,
        attrs;
    tag.removeAttribute('width');
    tag.removeAttribute('height');
    if (tag.hasChildNodes())
    {
        var nodes,
            nodesLength,
            i,
            node,
            nodeName,
            removeNodes;
        nodes = tag.childNodes;
        nodesLength = nodes.length;
        removeNodes = [];
        while (nodesLength--)
        {
            node = nodes[nodesLength];
            nodeName = node.nodeName.toLowerCase();
            if (nodeName === 'track')
            {
                removeNodes.push(node)
            }
        }
        for (i = 0; i < removeNodes.length; i++)
        {
            tag.removeChild(removeNodes[i])
        }
    }
    attrs = vjs.getElementAttributes(tag);
    vjs.obj.each(attrs, function(attr)
    {
        el.setAttribute(attr, attrs[attr])
    });
    tag.id += '_html5_api';
    tag.className = 'vjs-tech';
    tag['player'] = el['player'] = this;
    this.addClass('vjs-paused');
    this.width(this.options_['width'], true);
    this.height(this.options_['height'], true);
    if (tag.parentNode)
    {
        tag.parentNode.insertBefore(el, tag)
    }
    vjs.insertFirst(tag, el);
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
    return el
};
vjs.Player.prototype.loadTech = function(techName, source)
{
    if (this.tech)
    {
        this.unloadTech()
    }
    if (techName !== 'Html5' && this.tag)
    {
        vjs.Html5.disposeMediaElement(this.tag);
        this.tag = null
    }
    this.techName = techName;
    this.isReady_ = false;
    var techReady = function()
        {
            this.player_.triggerReady()
        };
    var techOptions = vjs.obj.merge({
            source: source, parentEl: this.el_
        }, this.options_[techName.toLowerCase()]);
    if (source)
    {
        this.currentType_ = source.type;
        if (source.src == this.cache_.src && this.cache_.currentTime > 0)
        {
            techOptions['startTime'] = this.cache_.currentTime
        }
        this.cache_.src = source.src
    }
    this.tech = new window['videojs'][techName](this, techOptions);
    this.tech.ready(techReady)
};
vjs.Player.prototype.unloadTech = function()
{
    this.isReady_ = false;
    this.tech.dispose();
    this.tech = false
};
vjs.Player.prototype.onLoadStart = function()
{
    this.error(null);
    if (!this.paused())
    {
        this.trigger('firstplay')
    }
    else
    {
        this.hasStarted(false);
        this.one('play', function()
        {
            this.hasStarted(true)
        })
    }
};
vjs.Player.prototype.hasStarted_ = false;
vjs.Player.prototype.hasStarted = function(hasStarted)
{
    if (hasStarted !== undefined)
    {
        if (this.hasStarted_ !== hasStarted)
        {
            this.hasStarted_ = hasStarted;
            if (hasStarted)
            {
                this.addClass('vjs-has-started');
                this.trigger('firstplay')
            }
            else
            {
                this.removeClass('vjs-has-started')
            }
        }
        return this
    }
    return this.hasStarted_
};
vjs.Player.prototype.onLoadedMetaData;
vjs.Player.prototype.onLoadedData;
vjs.Player.prototype.onLoadedAllData;
vjs.Player.prototype.onPlay = function()
{
    this.removeClass('vjs-paused');
    this.addClass('vjs-playing')
};
vjs.Player.prototype.onWaiting = function()
{
    this.addClass('vjs-waiting')
};
vjs.Player.prototype.onWaitEnd = function()
{
    this.removeClass('vjs-waiting')
};
vjs.Player.prototype.onSeeking = function()
{
    this.addClass('vjs-seeking')
};
vjs.Player.prototype.onSeeked = function()
{
    this.removeClass('vjs-seeking')
};
vjs.Player.prototype.onFirstPlay = function()
{
    if (this.options_['starttime'])
    {
        this.currentTime(this.options_['starttime'])
    }
    this.addClass('vjs-has-started')
};
vjs.Player.prototype.onPause = function()
{
    this.removeClass('vjs-playing');
    this.addClass('vjs-paused')
};
vjs.Player.prototype.onTimeUpdate;
vjs.Player.prototype.onProgress = function()
{
    if (this.bufferedPercent() == 1)
    {
        this.trigger('loadedalldata')
    }
};
vjs.Player.prototype.onEnded = function()
{
    if (this.options_['loop'])
    {
        this.currentTime(0);
        this.play()
    }
};
vjs.Player.prototype.onDurationChange = function()
{
    var duration = this.techGet('duration');
    if (duration)
    {
        if (duration < 0)
        {
            duration = Infinity
        }
        this.duration(duration);
        if (duration === Infinity)
        {
            this.addClass('vjs-live')
        }
        else
        {
            this.removeClass('vjs-live')
        }
    }
};
vjs.Player.prototype.onVolumeChange;
vjs.Player.prototype.onFullscreenChange = function()
{
    if (this.isFullscreen())
    {
        this.addClass('vjs-fullscreen')
    }
    else
    {
        this.removeClass('vjs-fullscreen')
    }
};
vjs.Player.prototype.cache_;
vjs.Player.prototype.getCache = function()
{
    return this.cache_
};
vjs.Player.prototype.techCall = function(method, arg)
{
    if (this.tech && !this.tech.isReady_)
    {
        this.tech.ready(function()
        {
            this[method](arg)
        })
    }
    else
    {
        try
        {
            this.tech[method](arg)
        }
        catch(e)
        {
            vjs.log(e);
            throw e;
        }
    }
};
vjs.Player.prototype.techGet = function(method)
{
    if (this.tech && this.tech.isReady_)
    {
        try
        {
            return this.tech[method]()
        }
        catch(e)
        {
            if (this.tech[method] === undefined)
            {
                vjs.log('Video.js: ' + method + ' method not defined for ' + this.techName + ' playback technology.', e)
            }
            else
            {
                if (e.name == 'TypeError')
                {
                    vjs.log('Video.js: ' + method + ' unavailable on ' + this.techName + ' playback technology element.', e);
                    this.tech.isReady_ = false
                }
                else
                {
                    vjs.log(e)
                }
            }
            throw e;
        }
    }
    return
};
vjs.Player.prototype.play = function()
{
    this.techCall('play');
    return this
};
vjs.Player.prototype.pause = function()
{
    this.techCall('pause');
    return this
};
vjs.Player.prototype.paused = function()
{
    return (this.techGet('paused') === false) ? false : true
};
vjs.Player.prototype.currentTime = function(seconds)
{
    if (seconds !== undefined)
    {
        this.techCall('setCurrentTime', seconds);
        return this
    }
    return this.cache_.currentTime = (this.techGet('currentTime') || 0)
};
vjs.Player.prototype.duration = function(seconds)
{
    if (seconds !== undefined)
    {
        this.cache_.duration = parseFloat(seconds);
        return this
    }
    if (this.cache_.duration === undefined)
    {
        this.onDurationChange()
    }
    return this.cache_.duration || 0
};
vjs.Player.prototype.remainingTime = function()
{
    return this.duration() - this.currentTime()
};
vjs.Player.prototype.buffered = function()
{
    var buffered = this.techGet('buffered');
    if (!buffered || !buffered.length)
    {
        buffered = vjs.createTimeRange(0, 0)
    }
    return buffered
};
vjs.Player.prototype.bufferedPercent = function()
{
    var duration = this.duration(),
        buffered = this.buffered(),
        bufferedDuration = 0,
        start,
        end;
    if (!duration)
    {
        return 0
    }
    for (var i = 0; i < buffered.length; i++)
    {
        start = buffered.start(i);
        end = buffered.end(i);
        if (end > duration)
        {
            end = duration
        }
        bufferedDuration += end - start
    }
    return bufferedDuration / duration
};
vjs.Player.prototype.bufferedEnd = function()
{
    var buffered = this.buffered(),
        duration = this.duration(),
        end = buffered.end(buffered.length - 1);
    if (end > duration)
    {
        end = duration
    }
    return end
};
vjs.Player.prototype.volume = function(percentAsDecimal)
{
    var vol;
    if (percentAsDecimal !== undefined)
    {
        vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
        this.cache_.volume = vol;
        this.techCall('setVolume', vol);
        vjs.setLocalStorage('volume', vol);
        return this
    }
    vol = parseFloat(this.techGet('volume'));
    return (isNaN(vol)) ? 1 : vol
};
vjs.Player.prototype.muted = function(muted)
{
    if (muted !== undefined)
    {
        this.techCall('setMuted', muted);
        return this
    }
    return this.techGet('muted') || false
};
vjs.Player.prototype.supportsFullScreen = function()
{
    return this.techGet('supportsFullScreen') || false
};
vjs.Player.prototype.isFullscreen_ = false;
vjs.Player.prototype.isFullscreen = function(isFS)
{
    if (isFS !== undefined)
    {
        this.isFullscreen_ = !!isFS;
        return this
    }
    return this.isFullscreen_
};
vjs.Player.prototype.isFullScreen = function(isFS)
{
    vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
    return this.isFullscreen(isFS)
};
vjs.Player.prototype.requestFullscreen = function()
{
    var fsApi = vjs.browser.fullscreenAPI;
    this.isFullscreen(true);
    if (fsApi)
    {
        vjs.on(document, fsApi['fullscreenchange'], vjs.bind(this, function(e)
        {
            this.isFullscreen(document[fsApi.fullscreenElement]);
            if (this.isFullscreen() === false)
            {
                vjs.off(document, fsApi['fullscreenchange'], arguments.callee)
            }
            this.trigger('fullscreenchange')
        }));
        this.el_[fsApi.requestFullscreen]()
    }
    else if (this.tech.supportsFullScreen())
    {
        this.techCall('enterFullScreen')
    }
    else
    {
        this.enterFullWindow();
        this.trigger('fullscreenchange')
    }
    return this
};
vjs.Player.prototype.requestFullScreen = function()
{
    vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
    return this.requestFullscreen()
};
vjs.Player.prototype.exitFullscreen = function()
{
    var fsApi = vjs.browser.fullscreenAPI;
    this.isFullscreen(false);
    if (fsApi)
    {
        document[fsApi.exitFullscreen]()
    }
    else if (this.tech.supportsFullScreen())
    {
        this.techCall('exitFullScreen')
    }
    else
    {
        this.exitFullWindow();
        this.trigger('fullscreenchange')
    }
    return this
};
vjs.Player.prototype.cancelFullScreen = function()
{
    vjs.log.warn('player.cancelFullScreen() has been deprecated, use player.exitFullscreen()');
    return this.exitFullscreen()
};
vjs.Player.prototype.enterFullWindow = function()
{
    this.isFullWindow = true;
    this.docOrigOverflow = document.documentElement.style.overflow;
    vjs.on(document, 'keydown', vjs.bind(this, this.fullWindowOnEscKey));
    document.documentElement.style.overflow = 'hidden';
    vjs.addClass(document.body, 'vjs-full-window');
    this.trigger('enterFullWindow')
};
vjs.Player.prototype.fullWindowOnEscKey = function(event)
{
    if (event.keyCode === 27)
    {
        if (this.isFullscreen() === true)
        {
            this.exitFullscreen()
        }
        else
        {
            this.exitFullWindow()
        }
    }
};
vjs.Player.prototype.exitFullWindow = function()
{
    this.isFullWindow = false;
    vjs.off(document, 'keydown', this.fullWindowOnEscKey);
    document.documentElement.style.overflow = this.docOrigOverflow;
    vjs.removeClass(document.body, 'vjs-full-window');
    this.trigger('exitFullWindow')
};
vjs.Player.prototype.selectSource = function(sources)
{
    for (var i = 0, j = this.options_['techOrder']; i < j.length; i++)
    {
        var techName = vjs.capitalize(j[i]),
            tech = window['videojs'][techName];
        if (!tech)
        {
            vjs.log.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.');
            continue
        }
        if (tech.isSupported())
        {
            for (var a = 0, b = sources; a < b.length; a++)
            {
                var source = b[a];
                if (tech['canPlaySource'](source))
                {
                    return {
                            source: source, tech: techName
                        }
                }
            }
        }
    }
    return false
};
vjs.Player.prototype.src = function(source)
{
    if (source === undefined)
    {
        return this.techGet('src')
    }
    if (vjs.obj.isArray(source))
    {
        this.sourceList_(source)
    }
    else if (typeof source === 'string')
    {
        this.src({src: source})
    }
    else if (source instanceof Object)
    {
        if (source.type && !window['videojs'][this.techName]['canPlaySource'](source))
        {
            this.sourceList_([source])
        }
        else
        {
            this.cache_.src = source.src;
            this.currentType_ = source.type || '';
            this.ready(function()
            {
                this.techCall('src', source.src);
                if (this.options_['preload'] == 'auto')
                {
                    this.load()
                }
                if (this.options_['autoplay'])
                {
                    this.play()
                }
            })
        }
    }
    return this
};
vjs.Player.prototype.sourceList_ = function(sources)
{
    var sourceTech = this.selectSource(sources);
    if (sourceTech)
    {
        if (sourceTech.tech === this.techName)
        {
            this.src(sourceTech.source)
        }
        else
        {
            this.loadTech(sourceTech.tech, sourceTech.source)
        }
    }
    else
    {
        this.error({
            code: 4, message: this.localize(this.options()['notSupportedMessage'])
        });
        this.triggerReady()
    }
};
vjs.Player.prototype.load = function()
{
    this.techCall('load');
    return this
};
vjs.Player.prototype.currentSrc = function()
{
    return this.techGet('currentSrc') || this.cache_.src || ''
};
vjs.Player.prototype.currentType = function()
{
    return this.currentType_ || ''
};
vjs.Player.prototype.preload = function(value)
{
    if (value !== undefined)
    {
        this.techCall('setPreload', value);
        this.options_['preload'] = value;
        return this
    }
    return this.techGet('preload')
};
vjs.Player.prototype.autoplay = function(value)
{
    if (value !== undefined)
    {
        this.techCall('setAutoplay', value);
        this.options_['autoplay'] = value;
        return this
    }
    return this.techGet('autoplay', value)
};
vjs.Player.prototype.loop = function(value)
{
    if (value !== undefined)
    {
        this.techCall('setLoop', value);
        this.options_['loop'] = value;
        return this
    }
    return this.techGet('loop')
};
vjs.Player.prototype.poster_;
vjs.Player.prototype.poster = function(src)
{
    if (src === undefined)
    {
        return this.poster_
    }
    this.poster_ = src;
    this.techCall('setPoster', src);
    this.trigger('posterchange')
};
vjs.Player.prototype.controls_;
vjs.Player.prototype.controls = function(bool)
{
    if (bool !== undefined)
    {
        bool = !!bool;
        if (this.controls_ !== bool)
        {
            this.controls_ = bool;
            if (bool)
            {
                this.removeClass('vjs-controls-disabled');
                this.addClass('vjs-controls-enabled');
                this.trigger('controlsenabled')
            }
            else
            {
                this.removeClass('vjs-controls-enabled');
                this.addClass('vjs-controls-disabled');
                this.trigger('controlsdisabled')
            }
        }
        return this
    }
    return this.controls_
};
vjs.Player.prototype.usingNativeControls_;
vjs.Player.prototype.usingNativeControls = function(bool)
{
    if (bool !== undefined)
    {
        bool = !!bool;
        if (this.usingNativeControls_ !== bool)
        {
            this.usingNativeControls_ = bool;
            if (bool)
            {
                this.addClass('vjs-using-native-controls');
                this.trigger('usingnativecontrols')
            }
            else
            {
                this.removeClass('vjs-using-native-controls');
                this.trigger('usingcustomcontrols')
            }
        }
        return this
    }
    return this.usingNativeControls_
};
vjs.Player.prototype.error_ = null;
vjs.Player.prototype.error = function(err)
{
    if (err === undefined)
    {
        return this.error_
    }
    if (err === null)
    {
        this.error_ = err;
        this.removeClass('vjs-error');
        return this
    }
    if (err instanceof vjs.MediaError)
    {
        this.error_ = err
    }
    else
    {
        this.error_ = new vjs.MediaError(err)
    }
    this.trigger('error');
    this.addClass('vjs-error');
    vjs.log.error('(CODE:' + this.error_.code + ' ' + vjs.MediaError.errorTypes[this.error_.code] + ')', this.error_.message, this.error_);
    return this
};
vjs.Player.prototype.ended = function()
{
    return this.techGet('ended')
};
vjs.Player.prototype.seeking = function()
{
    return this.techGet('seeking')
};
vjs.Player.prototype.userActivity_ = true;
vjs.Player.prototype.reportUserActivity = function(event)
{
    this.userActivity_ = true
};
vjs.Player.prototype.userActive_ = true;
vjs.Player.prototype.userActive = function(bool)
{
    if (bool !== undefined)
    {
        bool = !!bool;
        if (bool !== this.userActive_)
        {
            this.userActive_ = bool;
            if (bool)
            {
                this.userActivity_ = true;
                this.removeClass('vjs-user-inactive');
                this.addClass('vjs-user-active');
                this.trigger('useractive')
            }
            else
            {
                this.userActivity_ = false;
                if (this.tech)
                {
                    this.tech.one('mousemove', function(e)
                    {
                        e.stopPropagation();
                        e.preventDefault()
                    })
                }
                this.removeClass('vjs-user-active');
                this.addClass('vjs-user-inactive');
                this.trigger('userinactive')
            }
        }
        return this
    }
    return this.userActive_
};
vjs.Player.prototype.listenForUserActivity = function()
{
    var onActivity,
        onMouseMove,
        onMouseDown,
        mouseInProgress,
        onMouseUp,
        activityCheck,
        inactivityTimeout,
        lastMoveX,
        lastMoveY;
    onActivity = vjs.bind(this, this.reportUserActivity);
    onMouseMove = function(e)
    {
        if (e.screenX != lastMoveX || e.screenY != lastMoveY)
        {
            lastMoveX = e.screenX;
            lastMoveY = e.screenY;
            onActivity()
        }
    };
    onMouseDown = function()
    {
        onActivity();
        clearInterval(mouseInProgress);
        mouseInProgress = setInterval(onActivity, 250)
    };
    onMouseUp = function(event)
    {
        onActivity();
        clearInterval(mouseInProgress)
    };
    this.on('mousedown', onMouseDown);
    this.on('mousemove', onMouseMove);
    this.on('mouseup', onMouseUp);
    this.on('keydown', onActivity);
    this.on('keyup', onActivity);
    activityCheck = setInterval(vjs.bind(this, function()
    {
        if (this.userActivity_)
        {
            this.userActivity_ = false;
            this.userActive(true);
            clearTimeout(inactivityTimeout);
            inactivityTimeout = setTimeout(vjs.bind(this, function()
            {
                if (!this.userActivity_)
                {
                    this.userActive(false)
                }
            }), 2000)
        }
    }), 250);
    this.on('dispose', function()
    {
        clearInterval(activityCheck);
        clearTimeout(inactivityTimeout)
    })
};
vjs.Player.prototype.playbackRate = function(rate)
{
    if (rate !== undefined)
    {
        this.techCall('setPlaybackRate', rate);
        return this
    }
    if (this.tech && this.tech.features && this.tech.features['playbackRate'])
    {
        return this.techGet('playbackRate')
    }
    else
    {
        return 1.0
    }
};
;
vjs.ControlBar = vjs.Component.extend();
vjs.ControlBar.prototype.options_ = {
    loadEvent: 'play', children: {
            playToggle: {}, currentTimeDisplay: {}, timeDivider: {}, durationDisplay: {}, remainingTimeDisplay: {}, liveDisplay: {}, progressControl: {}, fullscreenToggle: {}, volumeControl: {}, muteToggle: {}, playbackRateMenuButton: {}
        }
};
vjs.ControlBar.prototype.createEl = function()
{
    return vjs.createEl('div', {className: 'vjs-control-bar'})
};
vjs.LiveDisplay = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.LiveDisplay.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-live-controls vjs-control'});
    this.contentEl_ = vjs.createEl('div', {
        className: 'vjs-live-display', innerHTML: '<span class="vjs-control-text">' + this.localize('Stream Type') + '</span>' + this.localize('LIVE'), 'aria-live': 'off'
    });
    el.appendChild(this.contentEl_);
    return el
};
vjs.PlayToggle = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options);
        player.on('play', vjs.bind(this, this.onPlay));
        player.on('pause', vjs.bind(this, this.onPause))
    }});
vjs.PlayToggle.prototype.buttonText = 'Play';
vjs.PlayToggle.prototype.buildCSSClass = function()
{
    return 'vjs-play-control ' + vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.PlayToggle.prototype.onClick = function()
{
    if (this.player_.paused())
    {
        this.player_.play()
    }
    else
    {
        this.player_.pause()
    }
};
vjs.PlayToggle.prototype.onPlay = function()
{
    vjs.removeClass(this.el_, 'vjs-paused');
    vjs.addClass(this.el_, 'vjs-playing');
    this.el_.children[0].children[0].innerHTML = this.localize('Pause')
};
vjs.PlayToggle.prototype.onPause = function()
{
    vjs.removeClass(this.el_, 'vjs-playing');
    vjs.addClass(this.el_, 'vjs-paused');
    this.el_.children[0].children[0].innerHTML = this.localize('Play')
};
vjs.CurrentTimeDisplay = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        player.on('timeupdate', vjs.bind(this, this.updateContent))
    }});
vjs.CurrentTimeDisplay.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-current-time vjs-time-controls vjs-control'});
    this.contentEl_ = vjs.createEl('div', {
        className: 'vjs-current-time-display', innerHTML: '<span class="vjs-control-text">Current Time </span>' + '0:00', 'aria-live': 'off'
    });
    el.appendChild(this.contentEl_);
    return el
};
vjs.CurrentTimeDisplay.prototype.updateContent = function()
{
    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Current Time') + '</span> ' + vjs.formatTime(time, this.player_.duration())
};
vjs.DurationDisplay = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        player.on('timeupdate', vjs.bind(this, this.updateContent))
    }});
vjs.DurationDisplay.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-duration vjs-time-controls vjs-control'});
    this.contentEl_ = vjs.createEl('div', {
        className: 'vjs-duration-display', innerHTML: '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + '0:00', 'aria-live': 'off'
    });
    el.appendChild(this.contentEl_);
    return el
};
vjs.DurationDisplay.prototype.updateContent = function()
{
    var duration = this.player_.duration();
    if (duration)
    {
        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Duration Time') + '</span> ' + vjs.formatTime(duration)
    }
};
vjs.TimeDivider = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.TimeDivider.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {
            className: 'vjs-time-divider', innerHTML: '<div><span>/</span></div>'
        })
};
vjs.RemainingTimeDisplay = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        player.on('timeupdate', vjs.bind(this, this.updateContent))
    }});
vjs.RemainingTimeDisplay.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-remaining-time vjs-time-controls vjs-control'});
    this.contentEl_ = vjs.createEl('div', {
        className: 'vjs-remaining-time-display', innerHTML: '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-0:00', 'aria-live': 'off'
    });
    el.appendChild(this.contentEl_);
    return el
};
vjs.RemainingTimeDisplay.prototype.updateContent = function()
{
    if (this.player_.duration())
    {
        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize('Remaining Time') + '</span> ' + '-' + vjs.formatTime(this.player_.remainingTime())
    }
};
vjs.FullscreenToggle = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options)
    }});
vjs.FullscreenToggle.prototype.buttonText = 'Fullscreen';
vjs.FullscreenToggle.prototype.buildCSSClass = function()
{
    return 'vjs-fullscreen-control ' + vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.FullscreenToggle.prototype.onClick = function()
{
    if (!this.player_.isFullscreen())
    {
        this.player_.requestFullscreen();
        this.controlText_.innerHTML = this.localize('Non-Fullscreen')
    }
    else
    {
        this.player_.exitFullscreen();
        this.controlText_.innerHTML = this.localize('Fullscreen')
    }
};
vjs.ProgressControl = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.ProgressControl.prototype.options_ = {children: {seekBar: {}}};
vjs.ProgressControl.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-progress-control vjs-control'})
};
vjs.SeekBar = vjs.Slider.extend({init: function(player, options)
    {
        vjs.Slider.call(this, player, options);
        player.on('timeupdate', vjs.bind(this, this.updateARIAAttributes));
        player.ready(vjs.bind(this, this.updateARIAAttributes))
    }});
vjs.SeekBar.prototype.options_ = {
    children: {
        loadProgressBar: {}, playProgressBar: {}, seekHandle: {}
    }, barName: 'playProgressBar', handleName: 'seekHandle'
};
vjs.SeekBar.prototype.playerEvent = 'timeupdate';
vjs.SeekBar.prototype.createEl = function()
{
    return vjs.Slider.prototype.createEl.call(this, 'div', {
            className: 'vjs-progress-holder', 'aria-label': 'video progress bar'
        })
};
vjs.SeekBar.prototype.updateARIAAttributes = function()
{
    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute('aria-valuenow', vjs.round(this.getPercent() * 100, 2));
    this.el_.setAttribute('aria-valuetext', vjs.formatTime(time, this.player_.duration()))
};
vjs.SeekBar.prototype.getPercent = function()
{
    return this.player_.currentTime() / this.player_.duration()
};
vjs.SeekBar.prototype.onMouseDown = function(event)
{
    vjs.Slider.prototype.onMouseDown.call(this, event);
    this.player_.scrubbing = true;
    this.videoWasPlaying = !this.player_.paused();
    this.player_.pause()
};
vjs.SeekBar.prototype.onMouseMove = function(event)
{
    var newTime = this.calculateDistance(event) * this.player_.duration();
    if (newTime == this.player_.duration())
    {
        newTime = newTime - 0.1
    }
    this.player_.currentTime(newTime)
};
vjs.SeekBar.prototype.onMouseUp = function(event)
{
    vjs.Slider.prototype.onMouseUp.call(this, event);
    this.player_.scrubbing = false;
    if (this.videoWasPlaying)
    {
        this.player_.play()
    }
};
vjs.SeekBar.prototype.stepForward = function()
{
    this.player_.currentTime(this.player_.currentTime() + 5)
};
vjs.SeekBar.prototype.stepBack = function()
{
    this.player_.currentTime(this.player_.currentTime() - 5)
};
vjs.LoadProgressBar = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        player.on('progress', vjs.bind(this, this.update))
    }});
vjs.LoadProgressBar.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {
            className: 'vjs-load-progress', innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Loaded') + '</span>: 0%</span>'
        })
};
vjs.LoadProgressBar.prototype.update = function()
{
    var i,
        start,
        end,
        part,
        buffered = this.player_.buffered(),
        duration = this.player_.duration(),
        bufferedEnd = this.player_.bufferedEnd(),
        children = this.el_.children,
        percentify = function(time, end)
        {
            var percent = (time / end) || 0;
            return (percent * 100) + '%'
        };
    this.el_.style.width = percentify(bufferedEnd, duration);
    for (i = 0; i < buffered.length; i++)
    {
        start = buffered.start(i),
        end = buffered.end(i),
        part = children[i];
        if (!part)
        {
            part = this.el_.appendChild(vjs.createEl())
        }
        ;
        part.style.left = percentify(start, bufferedEnd);
        part.style.width = percentify(end - start, bufferedEnd)
    }
    ;
    for (i = children.length; i > buffered.length; i--)
    {
        this.el_.removeChild(children[i - 1])
    }
};
vjs.PlayProgressBar = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.PlayProgressBar.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {
            className: 'vjs-play-progress', innerHTML: '<span class="vjs-control-text"><span>' + this.localize('Progress') + '</span>: 0%</span>'
        })
};
vjs.SeekHandle = vjs.SliderHandle.extend({init: function(player, options)
    {
        vjs.SliderHandle.call(this, player, options);
        player.on('timeupdate', vjs.bind(this, this.updateContent))
    }});
vjs.SeekHandle.prototype.defaultValue = '00:00';
vjs.SeekHandle.prototype.createEl = function()
{
    return vjs.SliderHandle.prototype.createEl.call(this, 'div', {
            className: 'vjs-seek-handle', 'aria-live': 'off'
        })
};
vjs.SeekHandle.prototype.updateContent = function()
{
    var time = (this.player_.scrubbing) ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(time, this.player_.duration()) + '</span>'
};
vjs.VolumeControl = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false)
        {
            this.addClass('vjs-hidden')
        }
        player.on('loadstart', vjs.bind(this, function()
        {
            if (player.tech.features && player.tech.features['volumeControl'] === false)
            {
                this.addClass('vjs-hidden')
            }
            else
            {
                this.removeClass('vjs-hidden')
            }
        }))
    }});
vjs.VolumeControl.prototype.options_ = {children: {volumeBar: {}}};
vjs.VolumeControl.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-volume-control vjs-control'})
};
vjs.VolumeBar = vjs.Slider.extend({init: function(player, options)
    {
        vjs.Slider.call(this, player, options);
        player.on('volumechange', vjs.bind(this, this.updateARIAAttributes));
        player.ready(vjs.bind(this, this.updateARIAAttributes))
    }});
vjs.VolumeBar.prototype.updateARIAAttributes = function()
{
    this.el_.setAttribute('aria-valuenow', vjs.round(this.player_.volume() * 100, 2));
    this.el_.setAttribute('aria-valuetext', vjs.round(this.player_.volume() * 100, 2) + '%')
};
vjs.VolumeBar.prototype.options_ = {
    children: {
        volumeLevel: {}, volumeHandle: {}
    }, barName: 'volumeLevel', handleName: 'volumeHandle'
};
vjs.VolumeBar.prototype.playerEvent = 'volumechange';
vjs.VolumeBar.prototype.createEl = function()
{
    return vjs.Slider.prototype.createEl.call(this, 'div', {
            className: 'vjs-volume-bar', 'aria-label': 'volume level'
        })
};
vjs.VolumeBar.prototype.onMouseMove = function(event)
{
    if (this.player_.muted())
    {
        this.player_.muted(false)
    }
    this.player_.volume(this.calculateDistance(event))
};
vjs.VolumeBar.prototype.getPercent = function()
{
    if (this.player_.muted())
    {
        return 0
    }
    else
    {
        return this.player_.volume()
    }
};
vjs.VolumeBar.prototype.stepForward = function()
{
    this.player_.volume(this.player_.volume() + 0.1)
};
vjs.VolumeBar.prototype.stepBack = function()
{
    this.player_.volume(this.player_.volume() - 0.1)
};
vjs.VolumeLevel = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.VolumeLevel.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {
            className: 'vjs-volume-level', innerHTML: '<span class="vjs-control-text"></span>'
        })
};
vjs.VolumeHandle = vjs.SliderHandle.extend();
vjs.VolumeHandle.prototype.defaultValue = '00:00';
vjs.VolumeHandle.prototype.createEl = function()
{
    return vjs.SliderHandle.prototype.createEl.call(this, 'div', {className: 'vjs-volume-handle'})
};
vjs.MuteToggle = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options);
        player.on('volumechange', vjs.bind(this, this.update));
        if (player.tech && player.tech.features && player.tech.features['volumeControl'] === false)
        {
            this.addClass('vjs-hidden')
        }
        player.on('loadstart', vjs.bind(this, function()
        {
            if (player.tech.features && player.tech.features['volumeControl'] === false)
            {
                this.addClass('vjs-hidden')
            }
            else
            {
                this.removeClass('vjs-hidden')
            }
        }))
    }});
vjs.MuteToggle.prototype.createEl = function()
{
    return vjs.Button.prototype.createEl.call(this, 'div', {
            className: 'vjs-mute-control vjs-control', innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
        })
};
vjs.MuteToggle.prototype.onClick = function()
{
    this.player_.muted(this.player_.muted() ? false : true)
};
vjs.MuteToggle.prototype.update = function()
{
    var vol = this.player_.volume(),
        level = 3;
    if (vol === 0 || this.player_.muted())
    {
        level = 0
    }
    else if (vol < 0.33)
    {
        level = 1
    }
    else if (vol < 0.67)
    {
        level = 2
    }
    if (this.player_.muted())
    {
        if (this.el_.children[0].children[0].innerHTML != this.localize('Unmute'))
        {
            this.el_.children[0].children[0].innerHTML = this.localize('Unmute')
        }
    }
    else
    {
        if (this.el_.children[0].children[0].innerHTML != this.localize('Mute'))
        {
            this.el_.children[0].children[0].innerHTML = this.localize('Mute')
        }
    }
    for (var i = 0; i < 4; i++)
    {
        vjs.removeClass(this.el_, 'vjs-vol-' + i)
    }
    vjs.addClass(this.el_, 'vjs-vol-' + level)
};
vjs.VolumeMenuButton = vjs.MenuButton.extend({init: function(player, options)
    {
        vjs.MenuButton.call(this, player, options);
        player.on('volumechange', vjs.bind(this, this.update));
        if (player.tech && player.tech.features && player.tech.features.volumeControl === false)
        {
            this.addClass('vjs-hidden')
        }
        player.on('loadstart', vjs.bind(this, function()
        {
            if (player.tech.features && player.tech.features.volumeControl === false)
            {
                this.addClass('vjs-hidden')
            }
            else
            {
                this.removeClass('vjs-hidden')
            }
        }));
        this.addClass('vjs-menu-button')
    }});
vjs.VolumeMenuButton.prototype.createMenu = function()
{
    var menu = new vjs.Menu(this.player_, {contentElType: 'div'});
    var vc = new vjs.VolumeBar(this.player_, vjs.obj.merge({vertical: true}, this.options_.volumeBar));
    menu.addChild(vc);
    return menu
};
vjs.VolumeMenuButton.prototype.onClick = function()
{
    vjs.MuteToggle.prototype.onClick.call(this);
    vjs.MenuButton.prototype.onClick.call(this)
};
vjs.VolumeMenuButton.prototype.createEl = function()
{
    return vjs.Button.prototype.createEl.call(this, 'div', {
            className: 'vjs-volume-menu-button vjs-menu-button vjs-control', innerHTML: '<div><span class="vjs-control-text">' + this.localize('Mute') + '</span></div>'
        })
};
vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update;
vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({init: function(player, options)
    {
        vjs.MenuButton.call(this, player, options);
        this.updateVisibility();
        this.updateLabel();
        player.on('loadstart', vjs.bind(this, this.updateVisibility));
        player.on('ratechange', vjs.bind(this, this.updateLabel))
    }});
vjs.PlaybackRateMenuButton.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {
            className: 'vjs-playback-rate vjs-menu-button vjs-control', innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + this.localize('Playback Rate') + '</span></div>'
        });
    this.labelEl_ = vjs.createEl('div', {
        className: 'vjs-playback-rate-value', innerHTML: 1.0
    });
    el.appendChild(this.labelEl_);
    return el
};
vjs.PlaybackRateMenuButton.prototype.createMenu = function()
{
    var menu = new vjs.Menu(this.player());
    var rates = this.player().options()['playbackRates'];
    if (rates)
    {
        for (var i = rates.length - 1; i >= 0; i--)
        {
            menu.addChild(new vjs.PlaybackRateMenuItem(this.player(), {rate: rates[i] + 'x'}))
        }
        ;
    }
    return menu
};
vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function()
{
    this.el().setAttribute('aria-valuenow', this.player().playbackRate())
};
vjs.PlaybackRateMenuButton.prototype.onClick = function()
{
    var currentRate = this.player().playbackRate();
    var rates = this.player().options()['playbackRates'];
    var newRate = rates[0];
    for (var i = 0; i < rates.length; i++)
    {
        if (rates[i] > currentRate)
        {
            newRate = rates[i];
            break
        }
    }
    ;
    this.player().playbackRate(newRate)
};
vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function()
{
    return this.player().tech && this.player().tech.features['playbackRate'] && this.player().options()['playbackRates'] && this.player().options()['playbackRates'].length > 0
};
vjs.PlaybackRateMenuButton.prototype.updateVisibility = function()
{
    if (this.playbackRateSupported())
    {
        this.removeClass('vjs-hidden')
    }
    else
    {
        this.addClass('vjs-hidden')
    }
};
vjs.PlaybackRateMenuButton.prototype.updateLabel = function()
{
    if (this.playbackRateSupported())
    {
        this.labelEl_.innerHTML = this.player().playbackRate() + 'x'
    }
};
vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
    contentElType: 'button', init: function(player, options)
        {
            var label = this.label = options['rate'];
            var rate = this.rate = parseFloat(label, 10);
            options['label'] = label;
            options['selected'] = rate === 1;
            vjs.MenuItem.call(this, player, options);
            this.player().on('ratechange', vjs.bind(this, this.update))
        }
});
vjs.PlaybackRateMenuItem.prototype.onClick = function()
{
    vjs.MenuItem.prototype.onClick.call(this);
    this.player().playbackRate(this.rate)
};
vjs.PlaybackRateMenuItem.prototype.update = function()
{
    this.selected(this.player().playbackRate() == this.rate)
};
vjs.PosterImage = vjs.Button.extend({init: function(player, options)
    {
        vjs.Button.call(this, player, options);
        if (player.poster())
        {
            this.src(player.poster())
        }
        if (!player.poster() || !player.controls())
        {
            this.hide()
        }
        player.on('posterchange', vjs.bind(this, function()
        {
            this.src(player.poster())
        }));
        player.on('play', vjs.bind(this, this.hide))
    }});
var _backgroundSizeSupported = 'backgroundSize' in vjs.TEST_VID.style;
vjs.PosterImage.prototype.createEl = function()
{
    var el = vjs.createEl('div', {
            className: 'vjs-poster', tabIndex: -1
        });
    if (!_backgroundSizeSupported)
    {
        el.appendChild(vjs.createEl('img'))
    }
    return el
};
vjs.PosterImage.prototype.src = function(url)
{
    var el = this.el();
    if (url === undefined)
    {
        return
    }
    if (_backgroundSizeSupported)
    {
        el.style.backgroundImage = 'url("' + url + '")'
    }
    else
    {
        el.firstChild.src = url
    }
};
vjs.PosterImage.prototype.onClick = function()
{
    if (this.player().controls())
    {
        this.player_.play()
    }
};
vjs.LoadingSpinner = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options)
    }});
vjs.LoadingSpinner.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-loading-spinner'})
};
vjs.BigPlayButton = vjs.Button.extend();
vjs.BigPlayButton.prototype.createEl = function()
{
    return vjs.Button.prototype.createEl.call(this, 'div', {
            className: 'vjs-big-play-button', innerHTML: '<span aria-hidden="true"></span>', 'aria-label': 'play video'
        })
};
vjs.BigPlayButton.prototype.onClick = function()
{
    this.player_.play()
};
vjs.ErrorDisplay = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        this.update();
        player.on('error', vjs.bind(this, this.update))
    }});
vjs.ErrorDisplay.prototype.createEl = function()
{
    var el = vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-error-display'});
    this.contentEl_ = vjs.createEl('div');
    el.appendChild(this.contentEl_);
    return el
};
vjs.ErrorDisplay.prototype.update = function()
{
    if (this.player().error())
    {
        this.contentEl_.innerHTML = this.localize(this.player().error().message)
    }
};
vjs.MediaTechController = vjs.Component.extend({init: function(player, options, ready)
    {
        options = options || {};
        options.reportTouchActivity = false;
        vjs.Component.call(this, player, options, ready);
        if (!this.features['progressEvents'])
        {
            this.manualProgressOn()
        }
        if (!this.features['timeupdateEvents'])
        {
            this.manualTimeUpdatesOn()
        }
        this.initControlsListeners()
    }});
vjs.MediaTechController.prototype.initControlsListeners = function()
{
    var player,
        tech,
        activateControls,
        deactivateControls;
    tech = this;
    player = this.player();
    var activateControls = function()
        {
            if (player.controls() && !player.usingNativeControls())
            {
                tech.addControlsListeners()
            }
        };
    deactivateControls = vjs.bind(tech, tech.removeControlsListeners);
    this.ready(activateControls);
    player.on('controlsenabled', activateControls);
    player.on('controlsdisabled', deactivateControls);
    this.ready(function()
    {
        if (this.networkState && this.networkState() > 0)
        {
            this.player().trigger('loadstart')
        }
    })
};
vjs.MediaTechController.prototype.addControlsListeners = function()
{
    var userWasActive;
    this.on('mousedown', this.onClick);
    this.on('touchstart', function(event)
    {
        userWasActive = this.player_.userActive()
    });
    this.on('touchmove', function(event)
    {
        if (userWasActive)
        {
            this.player().reportUserActivity()
        }
    });
    this.on('touchend', function(event)
    {
        event.preventDefault()
    });
    this.emitTapEvents();
    this.on('tap', this.onTap)
};
vjs.MediaTechController.prototype.removeControlsListeners = function()
{
    this.off('tap');
    this.off('touchstart');
    this.off('touchmove');
    this.off('touchleave');
    this.off('touchcancel');
    this.off('touchend');
    this.off('click');
    this.off('mousedown')
};
vjs.MediaTechController.prototype.onClick = function(event)
{
    if (event.button !== 0)
        return;
    if (this.player().controls())
    {
        if (this.player().paused())
        {
            this.player().play()
        }
        else
        {
            this.player().pause()
        }
    }
};
vjs.MediaTechController.prototype.onTap = function()
{
    this.player().userActive(!this.player().userActive())
};
vjs.MediaTechController.prototype.manualProgressOn = function()
{
    this.manualProgress = true;
    this.trackProgress()
};
vjs.MediaTechController.prototype.manualProgressOff = function()
{
    this.manualProgress = false;
    this.stopTrackingProgress()
};
vjs.MediaTechController.prototype.trackProgress = function()
{
    this.progressInterval = setInterval(vjs.bind(this, function()
    {
        var bufferedPercent = this.player().bufferedPercent();
        if (this.bufferedPercent_ != bufferedPercent)
        {
            this.player().trigger('progress')
        }
        this.bufferedPercent_ = bufferedPercent;
        if (bufferedPercent === 1)
        {
            this.stopTrackingProgress()
        }
    }), 500)
};
vjs.MediaTechController.prototype.stopTrackingProgress = function()
{
    clearInterval(this.progressInterval)
};
/*! Time Tracking -------------------------------------------------------------- */
vjs.MediaTechController.prototype.manualTimeUpdatesOn = function()
{
    this.manualTimeUpdates = true;
    this.player().on('play', vjs.bind(this, this.trackCurrentTime));
    this.player().on('pause', vjs.bind(this, this.stopTrackingCurrentTime));
    this.one('timeupdate', function()
    {
        this.features['timeupdateEvents'] = true;
        this.manualTimeUpdatesOff()
    })
};
vjs.MediaTechController.prototype.manualTimeUpdatesOff = function()
{
    this.manualTimeUpdates = false;
    this.stopTrackingCurrentTime();
    this.off('play', this.trackCurrentTime);
    this.off('pause', this.stopTrackingCurrentTime)
};
vjs.MediaTechController.prototype.trackCurrentTime = function()
{
    if (this.currentTimeInterval)
    {
        this.stopTrackingCurrentTime()
    }
    this.currentTimeInterval = setInterval(vjs.bind(this, function()
    {
        this.player().trigger('timeupdate')
    }), 250)
};
vjs.MediaTechController.prototype.stopTrackingCurrentTime = function()
{
    clearInterval(this.currentTimeInterval);
    this.player().trigger('timeupdate')
};
vjs.MediaTechController.prototype.dispose = function()
{
    if (this.manualProgress)
    {
        this.manualProgressOff()
    }
    if (this.manualTimeUpdates)
    {
        this.manualTimeUpdatesOff()
    }
    vjs.Component.prototype.dispose.call(this)
};
vjs.MediaTechController.prototype.setCurrentTime = function()
{
    if (this.manualTimeUpdates)
    {
        this.player().trigger('timeupdate')
    }
};
vjs.MediaTechController.prototype.setPoster = function(){};
vjs.MediaTechController.prototype.features = {
    volumeControl: true, fullscreenResize: false, playbackRate: false, progressEvents: false, timeupdateEvents: false
};
vjs.media = {};
vjs.Html5 = vjs.MediaTechController.extend({init: function(player, options, ready)
    {
        this.features['volumeControl'] = vjs.Html5.canControlVolume();
        this.features['playbackRate'] = vjs.Html5.canControlPlaybackRate();
        this.features['movingMediaElementInDOM'] = !vjs.IS_IOS;
        this.features['fullscreenResize'] = true;
        this.features['progressEvents'] = true;
        vjs.MediaTechController.call(this, player, options, ready);
        this.setupTriggers();
        var source = options['source'];
        if (source && this.el_.currentSrc !== source.src)
        {
            this.el_.src = source.src
        }
        if (vjs.TOUCH_ENABLED && player.options()['nativeControlsForTouch'] !== false)
        {
            this.useNativeControls()
        }
        player.ready(function()
        {
            if (this.tag && this.options_['autoplay'] && this.paused())
            {
                delete this.tag['poster'];
                this.play()
            }
        });
        this.triggerReady()
    }});
vjs.Html5.prototype.dispose = function()
{
    vjs.Html5.disposeMediaElement(this.el_);
    vjs.MediaTechController.prototype.dispose.call(this)
};
vjs.Html5.prototype.createEl = function()
{
    var player = this.player_,
        el = player.tag,
        newEl,
        clone;
    if (!el || this.features['movingMediaElementInDOM'] === false)
    {
        if (el)
        {
            clone = el.cloneNode(false);
            vjs.Html5.disposeMediaElement(el);
            el = clone;
            player.tag = null
        }
        else
        {
            el = vjs.createEl('video');
            vjs.setElementAttributes(el, vjs.obj.merge(player.tagAttributes || {}, {
                id: player.id() + '_html5_api', 'class': 'vjs-tech'
            }))
        }
        el['player'] = player;
        vjs.insertFirst(el, player.el())
    }
    var settingsAttrs = ['autoplay', 'preload', 'loop', 'muted'];
    for (var i = settingsAttrs.length - 1; i >= 0; i--)
    {
        var attr = settingsAttrs[i];
        var overwriteAttrs = {};
        if (typeof player.options_[attr] !== 'undefined')
        {
            overwriteAttrs[attr] = player.options_[attr]
        }
        vjs.setElementAttributes(el, overwriteAttrs)
    }
    return el
};
vjs.Html5.prototype.setupTriggers = function()
{
    for (var i = vjs.Html5.Events.length - 1; i >= 0; i--)
    {
        vjs.on(this.el_, vjs.Html5.Events[i], vjs.bind(this, this.eventHandler))
    }
};
vjs.Html5.prototype.eventHandler = function(evt)
{
    if (evt.type == 'error')
    {
        this.player().error(this.error().code)
    }
    else
    {
        evt.bubbles = false;
        this.player().trigger(evt)
    }
};
vjs.Html5.prototype.useNativeControls = function()
{
    var tech,
        player,
        controlsOn,
        controlsOff,
        cleanUp;
    tech = this;
    player = this.player();
    tech.setControls(player.controls());
    controlsOn = function()
    {
        tech.setControls(true)
    };
    controlsOff = function()
    {
        tech.setControls(false)
    };
    player.on('controlsenabled', controlsOn);
    player.on('controlsdisabled', controlsOff);
    cleanUp = function()
    {
        player.off('controlsenabled', controlsOn);
        player.off('controlsdisabled', controlsOff)
    };
    tech.on('dispose', cleanUp);
    player.on('usingcustomcontrols', cleanUp);
    player.usingNativeControls(true)
};
vjs.Html5.prototype.play = function()
{
    this.el_.play()
};
vjs.Html5.prototype.pause = function()
{
    this.el_.pause()
};
vjs.Html5.prototype.paused = function()
{
    return this.el_.paused
};
vjs.Html5.prototype.currentTime = function()
{
    return this.el_.currentTime
};
vjs.Html5.prototype.setCurrentTime = function(seconds)
{
    try
    {
        this.el_.currentTime = seconds
    }
    catch(e)
    {
        vjs.log(e, 'Video is not ready. (Video.js)')
    }
};
vjs.Html5.prototype.duration = function()
{
    return this.el_.duration || 0
};
vjs.Html5.prototype.buffered = function()
{
    return this.el_.buffered
};
vjs.Html5.prototype.volume = function()
{
    return this.el_.volume
};
vjs.Html5.prototype.setVolume = function(percentAsDecimal)
{
    this.el_.volume = percentAsDecimal
};
vjs.Html5.prototype.muted = function()
{
    return this.el_.muted
};
vjs.Html5.prototype.setMuted = function(muted)
{
    this.el_.muted = muted
};
vjs.Html5.prototype.width = function()
{
    return this.el_.offsetWidth
};
vjs.Html5.prototype.height = function()
{
    return this.el_.offsetHeight
};
vjs.Html5.prototype.supportsFullScreen = function()
{
    if (typeof this.el_.webkitEnterFullScreen == 'function')
    {
        if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
        {
            return true
        }
    }
    return false
};
vjs.Html5.prototype.enterFullScreen = function()
{
    var video = this.el_;
    if (video.paused && video.networkState <= video.HAVE_METADATA)
    {
        this.el_.play();
        setTimeout(function()
        {
            video.pause();
            video.webkitEnterFullScreen()
        }, 0)
    }
    else
    {
        video.webkitEnterFullScreen()
    }
};
vjs.Html5.prototype.exitFullScreen = function()
{
    this.el_.webkitExitFullScreen()
};
vjs.Html5.prototype.src = function(src)
{
    if (src === undefined)
    {
        return this.el_.src
    }
    else
    {
        this.el_.src = src
    }
};
vjs.Html5.prototype.load = function()
{
    this.el_.load()
};
vjs.Html5.prototype.currentSrc = function()
{
    return this.el_.currentSrc
};
vjs.Html5.prototype.poster = function()
{
    return this.el_.poster
};
vjs.Html5.prototype.setPoster = function(val)
{
    this.el_.poster = val
};
vjs.Html5.prototype.preload = function()
{
    return this.el_.preload
};
vjs.Html5.prototype.setPreload = function(val)
{
    this.el_.preload = val
};
vjs.Html5.prototype.autoplay = function()
{
    return this.el_.autoplay
};
vjs.Html5.prototype.setAutoplay = function(val)
{
    this.el_.autoplay = val
};
vjs.Html5.prototype.controls = function()
{
    return this.el_.controls
};
vjs.Html5.prototype.setControls = function(val)
{
    this.el_.controls = !!val
};
vjs.Html5.prototype.loop = function()
{
    return this.el_.loop
};
vjs.Html5.prototype.setLoop = function(val)
{
    this.el_.loop = val
};
vjs.Html5.prototype.error = function()
{
    return this.el_.error
};
vjs.Html5.prototype.seeking = function()
{
    return this.el_.seeking
};
vjs.Html5.prototype.ended = function()
{
    return this.el_.ended
};
vjs.Html5.prototype.defaultMuted = function()
{
    return this.el_.defaultMuted
};
vjs.Html5.prototype.playbackRate = function()
{
    return this.el_.playbackRate
};
vjs.Html5.prototype.setPlaybackRate = function(val)
{
    this.el_.playbackRate = val
};
vjs.Html5.prototype.networkState = function()
{
    return this.el_.networkState
};
vjs.Html5.isSupported = function()
{
    try
    {
        vjs.TEST_VID['volume'] = 0.5
    }
    catch(e)
    {
        return false
    }
    return !!vjs.TEST_VID.canPlayType
};
vjs.Html5.canPlaySource = function(srcObj)
{
    try
    {
        return !!vjs.TEST_VID.canPlayType(srcObj.type)
    }
    catch(e)
    {
        return ''
    }
};
vjs.Html5.canControlVolume = function()
{
    var volume = vjs.TEST_VID.volume;
    vjs.TEST_VID.volume = (volume / 2) + 0.1;
    return volume !== vjs.TEST_VID.volume
};
vjs.Html5.canControlPlaybackRate = function()
{
    var playbackRate = vjs.TEST_VID.playbackRate;
    vjs.TEST_VID.playbackRate = (playbackRate / 2) + 0.1;
    return playbackRate !== vjs.TEST_VID.playbackRate
};
(function()
{
    var canPlayType,
        mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
        mp4RE = /^video\/mp4/i;
    vjs.Html5.patchCanPlayType = function()
    {
        if (vjs.ANDROID_VERSION >= 4.0)
        {
            if (!canPlayType)
            {
                canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType
            }
            vjs.TEST_VID.constructor.prototype.canPlayType = function(type)
            {
                if (type && mpegurlRE.test(type))
                {
                    return 'maybe'
                }
                return canPlayType.call(this, type)
            }
        }
        if (vjs.IS_OLD_ANDROID)
        {
            if (!canPlayType)
            {
                canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType
            }
            vjs.TEST_VID.constructor.prototype.canPlayType = function(type)
            {
                if (type && mp4RE.test(type))
                {
                    return 'maybe'
                }
                return canPlayType.call(this, type)
            }
        }
    };
    vjs.Html5.unpatchCanPlayType = function()
    {
        var r = vjs.TEST_VID.constructor.prototype.canPlayType;
        vjs.TEST_VID.constructor.prototype.canPlayType = canPlayType;
        canPlayType = null;
        return r
    };
    vjs.Html5.patchCanPlayType()
})();
vjs.Html5.Events = 'loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange'.split(',');
vjs.Html5.disposeMediaElement = function(el)
{
    if (!el)
    {
        return
    }
    el['player'] = null;
    if (el.parentNode)
    {
        el.parentNode.removeChild(el)
    }
    while (el.hasChildNodes())
    {
        el.removeChild(el.firstChild)
    }
    el.removeAttribute('src');
    if (typeof el.load === 'function')
    {
        (function()
        {
            try
            {
                el.load()
            }
            catch(e) {}
        })()
    }
};
vjs.Flash = vjs.MediaTechController.extend({init: function(player, options, ready)
    {
        vjs.MediaTechController.call(this, player, options, ready);
        var source = options['source'],
            parentEl = options['parentEl'],
            placeHolder = this.el_ = vjs.createEl('div', {id: player.id() + '_temp_flash'}),
            objId = player.id() + '_flash_api',
            playerOptions = player.options_,
            flashVars = vjs.obj.merge({
                readyFunction: 'videojs.Flash.onReady', eventProxyFunction: 'videojs.Flash.onEvent', errorEventProxyFunction: 'videojs.Flash.onError', autoplay: playerOptions.autoplay, preload: playerOptions.preload, loop: playerOptions.loop, muted: playerOptions.muted
            }, options['flashVars']),
            params = vjs.obj.merge({
                wmode: 'opaque', bgcolor: '#000000'
            }, options['params']),
            attributes = vjs.obj.merge({
                id: objId, name: objId, 'class': 'vjs-tech'
            }, options['attributes']);
        if (source)
        {
            if (source.type && vjs.Flash.isStreamingType(source.type))
            {
                var parts = vjs.Flash.streamToParts(source.src);
                flashVars['rtmpConnection'] = encodeURIComponent(parts.connection);
                flashVars['rtmpStream'] = encodeURIComponent(parts.stream)
            }
            else
            {
                flashVars['src'] = encodeURIComponent(vjs.getAbsoluteURL(source.src))
            }
        }
        vjs.insertFirst(placeHolder, parentEl);
        if (options['startTime'])
        {
            this.ready(function()
            {
                this.load();
                this.play();
                this['currentTime'](options['startTime'])
            })
        }
        if (vjs.IS_FIREFOX)
        {
            this.ready(function()
            {
                vjs.on(this.el(), 'mousemove', vjs.bind(this, function()
                {
                    this.player().trigger({
                        type: 'mousemove', bubbles: false
                    })
                }))
            })
        }
        player.on('stageclick', player.reportUserActivity);
        this.el_ = vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes)
    }});
vjs.Flash.prototype.dispose = function()
{
    vjs.MediaTechController.prototype.dispose.call(this)
};
vjs.Flash.prototype.play = function()
{
    this.el_.vjs_play()
};
vjs.Flash.prototype.pause = function()
{
    this.el_.vjs_pause()
};
vjs.Flash.prototype.src = function(src)
{
    if (src === undefined)
    {
        return this['currentSrc']()
    }
    if (vjs.Flash.isStreamingSrc(src))
    {
        src = vjs.Flash.streamToParts(src);
        this.setRtmpConnection(src.connection);
        this.setRtmpStream(src.stream)
    }
    else
    {
        src = vjs.getAbsoluteURL(src);
        this.el_.vjs_src(src)
    }
    if (this.player_.autoplay())
    {
        var tech = this;
        setTimeout(function()
        {
            tech.play()
        }, 0)
    }
};
vjs.Flash.prototype['setCurrentTime'] = function(time)
{
    this.lastSeekTarget_ = time;
    this.el_.vjs_setProperty('currentTime', time);
    vjs.MediaTechController.prototype.setCurrentTime.call(this)
};
vjs.Flash.prototype['currentTime'] = function(time)
{
    if (this.seeking())
    {
        return this.lastSeekTarget_ || 0
    }
    return this.el_.vjs_getProperty('currentTime')
};
vjs.Flash.prototype['currentSrc'] = function()
{
    var src = this.el_.vjs_getProperty('currentSrc');
    if (src == null)
    {
        var connection = this['rtmpConnection'](),
            stream = this['rtmpStream']();
        if (connection && stream)
        {
            src = vjs.Flash.streamFromParts(connection, stream)
        }
    }
    return src
};
vjs.Flash.prototype.load = function()
{
    this.el_.vjs_load()
};
vjs.Flash.prototype.poster = function()
{
    this.el_.vjs_getProperty('poster')
};
vjs.Flash.prototype['setPoster'] = function(){};
vjs.Flash.prototype.buffered = function()
{
    return vjs.createTimeRange(0, this.el_.vjs_getProperty('buffered'))
};
vjs.Flash.prototype.supportsFullScreen = function()
{
    return false
};
vjs.Flash.prototype.enterFullScreen = function()
{
    return false
};
(function()
{
    var api = vjs.Flash.prototype,
        readWrite = 'rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted'.split(','),
        readOnly = 'error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks'.split(','),
        i;
    function createSetter(attr)
    {
        var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
        api['set' + attrUpper] = function(val)
        {
            return this.el_.vjs_setProperty(attr, val)
        }
    }
    ;
    function createGetter(attr)
    {
        api[attr] = function()
        {
            return this.el_.vjs_getProperty(attr)
        }
    }
    ;
    for (i = 0; i < readWrite.length; i++)
    {
        createGetter(readWrite[i]);
        createSetter(readWrite[i])
    }
    for (i = 0; i < readOnly.length; i++)
    {
        createGetter(readOnly[i])
    }
})();
vjs.Flash.isSupported = function()
{
    return vjs.Flash.version()[0] >= 10
};
vjs.Flash.canPlaySource = function(srcObj)
{
    var type;
    if (!srcObj.type)
    {
        return ''
    }
    type = srcObj.type.replace(/;.*/, '').toLowerCase();
    if (type in vjs.Flash.formats || type in vjs.Flash.streamingFormats)
    {
        return 'maybe'
    }
};
vjs.Flash.formats = {
    'video/flv': 'FLV', 'video/x-flv': 'FLV', 'video/mp4': 'MP4', 'video/m4v': 'MP4'
};
vjs.Flash.streamingFormats = {
    'rtmp/mp4': 'MP4', 'rtmp/flv': 'FLV'
};
vjs.Flash['onReady'] = function(currSwf)
{
    var el,
        player;
    el = vjs.el(currSwf);
    player = el && el.parentNode && el.parentNode['player'];
    if (player)
    {
        el['player'] = player;
        vjs.Flash['checkReady'](player.tech)
    }
};
vjs.Flash['checkReady'] = function(tech)
{
    if (!tech.el())
    {
        return
    }
    if (tech.el().vjs_getProperty)
    {
        tech.triggerReady()
    }
    else
    {
        setTimeout(function()
        {
            vjs.Flash['checkReady'](tech)
        }, 50)
    }
};
vjs.Flash['onEvent'] = function(swfID, eventName)
{
    var player = vjs.el(swfID)['player'];
    player.trigger(eventName)
};
vjs.Flash['onError'] = function(swfID, err)
{
    var player = vjs.el(swfID)['player'];
    var msg = 'FLASH: ' + err;
    if (err == 'srcnotfound')
    {
        player.error({
            code: 4, message: msg
        })
    }
    else
    {
        player.error(msg)
    }
};
vjs.Flash.version = function()
{
    var version = '0,0,0';
    try
    {
        version = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1]
    }
    catch(e)
    {
        try
        {
            if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
            {
                version = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1]
            }
        }
        catch(err) {}
    }
    return version.split(',')
};
vjs.Flash.embed = function(swf, placeHolder, flashVars, params, attributes)
{
    var code = vjs.Flash.getEmbedCode(swf, flashVars, params, attributes),
        obj = vjs.createEl('div', {innerHTML: code}).childNodes[0],
        par = placeHolder.parentNode;
    placeHolder.parentNode.replaceChild(obj, placeHolder);
    var newObj = par.childNodes[0];
    setTimeout(function()
    {
        newObj.style.display = 'block'
    }, 1000);
    return obj
};
vjs.Flash.getEmbedCode = function(swf, flashVars, params, attributes)
{
    var objTag = '<object type="application/x-shockwave-flash"',
        flashVarsString = '',
        paramsString = '',
        attrsString = '';
    if (flashVars)
    {
        vjs.obj.each(flashVars, function(key, val)
        {
            flashVarsString += (key + '=' + val + '&amp;')
        })
    }
    params = vjs.obj.merge({
        movie: swf, flashvars: flashVarsString, allowScriptAccess: 'always', allowNetworking: 'all'
    }, params);
    vjs.obj.each(params, function(key, val)
    {
        paramsString += '<param name="' + key + '" value="' + val + '" />'
    });
    attributes = vjs.obj.merge({
        data: swf, width: '100%', height: '100%'
    }, attributes);
    vjs.obj.each(attributes, function(key, val)
    {
        attrsString += (key + '="' + val + '" ')
    });
    return objTag + attrsString + '>' + paramsString + '</object>'
};
vjs.Flash.streamFromParts = function(connection, stream)
{
    return connection + '&' + stream
};
vjs.Flash.streamToParts = function(src)
{
    var parts = {
            connection: '', stream: ''
        };
    if (!src)
    {
        return parts
    }
    var connEnd = src.indexOf('&');
    var streamBegin;
    if (connEnd !== -1)
    {
        streamBegin = connEnd + 1
    }
    else
    {
        connEnd = streamBegin = src.lastIndexOf('/') + 1;
        if (connEnd === 0)
        {
            connEnd = streamBegin = src.length
        }
    }
    parts.connection = src.substring(0, connEnd);
    parts.stream = src.substring(streamBegin, src.length);
    return parts
};
vjs.Flash.isStreamingType = function(srcType)
{
    return srcType in vjs.Flash.streamingFormats
};
vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i;
vjs.Flash.isStreamingSrc = function(src)
{
    return vjs.Flash.RTMP_RE.test(src)
};
vjs.MediaLoader = vjs.Component.extend({init: function(player, options, ready)
    {
        vjs.Component.call(this, player, options, ready);
        if (!player.options_['sources'] || player.options_['sources'].length === 0)
        {
            for (var i = 0, j = player.options_['techOrder']; i < j.length; i++)
            {
                var techName = vjs.capitalize(j[i]),
                    tech = window['videojs'][techName];
                if (tech && tech.isSupported())
                {
                    player.loadTech(techName);
                    break
                }
            }
        }
        else
        {
            player.src(player.options_['sources'])
        }
    }});
vjs.Player.prototype.textTracks_;
vjs.Player.prototype.textTracks = function()
{
    this.textTracks_ = this.textTracks_ || [];
    return this.textTracks_
};
vjs.Player.prototype.addTextTrack = function(kind, label, language, options)
{
    var tracks = this.textTracks_ = this.textTracks_ || [];
    options = options || {};
    options['kind'] = kind;
    options['label'] = label;
    options['language'] = language;
    var Kind = vjs.capitalize(kind || 'subtitles');
    var track = new window['videojs'][Kind + 'Track'](this, options);
    tracks.push(track);
    if (track.dflt())
    {
        this.ready(function()
        {
            setTimeout(function()
            {
                track.player().showTextTrack(track.id())
            }, 0)
        })
    }
    return track
};
vjs.Player.prototype.addTextTracks = function(trackList)
{
    var trackObj;
    for (var i = 0; i < trackList.length; i++)
    {
        trackObj = trackList[i];
        this.addTextTrack(trackObj['kind'], trackObj['label'], trackObj['language'], trackObj)
    }
    return this
};
vjs.Player.prototype.showTextTrack = function(id, disableSameKind)
{
    var tracks = this.textTracks_,
        i = 0,
        j = tracks.length,
        track,
        showTrack,
        kind;
    for (; i < j; i++)
    {
        track = tracks[i];
        if (track.id() === id)
        {
            track.show();
            showTrack = track
        }
        else if (disableSameKind && track.kind() == disableSameKind && track.mode() > 0)
        {
            track.disable()
        }
    }
    kind = (showTrack) ? showTrack.kind() : ((disableSameKind) ? disableSameKind : false);
    if (kind)
    {
        this.trigger(kind + 'trackchange')
    }
    return this
};
vjs.TextTrack = vjs.Component.extend({init: function(player, options)
    {
        vjs.Component.call(this, player, options);
        this.id_ = options['id'] || ('vjs_' + options['kind'] + '_' + options['language'] + '_' + vjs.guid++);
        this.src_ = options['src'];
        this.dflt_ = options['default'] || options['dflt'];
        this.title_ = options['title'];
        this.language_ = options['srclang'];
        this.label_ = options['label'];
        this.cues_ = [];
        this.activeCues_ = [];
        this.readyState_ = 0;
        this.mode_ = 0;
        this.player_.on('fullscreenchange', vjs.bind(this, this.adjustFontSize))
    }});
vjs.TextTrack.prototype.kind_;
vjs.TextTrack.prototype.kind = function()
{
    return this.kind_
};
vjs.TextTrack.prototype.src_;
vjs.TextTrack.prototype.src = function()
{
    return this.src_
};
vjs.TextTrack.prototype.dflt_;
vjs.TextTrack.prototype.dflt = function()
{
    return this.dflt_
};
vjs.TextTrack.prototype.title_;
vjs.TextTrack.prototype.title = function()
{
    return this.title_
};
vjs.TextTrack.prototype.language_;
vjs.TextTrack.prototype.language = function()
{
    return this.language_
};
vjs.TextTrack.prototype.label_;
vjs.TextTrack.prototype.label = function()
{
    return this.label_
};
vjs.TextTrack.prototype.cues_;
vjs.TextTrack.prototype.cues = function()
{
    return this.cues_
};
vjs.TextTrack.prototype.activeCues_;
vjs.TextTrack.prototype.activeCues = function()
{
    return this.activeCues_
};
vjs.TextTrack.prototype.readyState_;
vjs.TextTrack.prototype.readyState = function()
{
    return this.readyState_
};
vjs.TextTrack.prototype.mode_;
vjs.TextTrack.prototype.mode = function()
{
    return this.mode_
};
vjs.TextTrack.prototype.adjustFontSize = function()
{
    if (this.player_.isFullScreen())
    {
        this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + '%'
    }
    else
    {
        this.el_.style.fontSize = ''
    }
};
vjs.TextTrack.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-' + this.kind_ + ' vjs-text-track'})
};
vjs.TextTrack.prototype.show = function()
{
    this.activate();
    this.mode_ = 2;
    vjs.Component.prototype.show.call(this)
};
vjs.TextTrack.prototype.hide = function()
{
    this.activate();
    this.mode_ = 1;
    vjs.Component.prototype.hide.call(this)
};
vjs.TextTrack.prototype.disable = function()
{
    if (this.mode_ == 2)
    {
        this.hide()
    }
    this.deactivate();
    this.mode_ = 0
};
vjs.TextTrack.prototype.activate = function()
{
    if (this.readyState_ === 0)
    {
        this.load()
    }
    if (this.mode_ === 0)
    {
        this.player_.on('timeupdate', vjs.bind(this, this.update, this.id_));
        this.player_.on('ended', vjs.bind(this, this.reset, this.id_));
        if (this.kind_ === 'captions' || this.kind_ === 'subtitles')
        {
            this.player_.getChild('textTrackDisplay').addChild(this)
        }
    }
};
vjs.TextTrack.prototype.deactivate = function()
{
    this.player_.off('timeupdate', vjs.bind(this, this.update, this.id_));
    this.player_.off('ended', vjs.bind(this, this.reset, this.id_));
    this.reset();
    this.player_.getChild('textTrackDisplay').removeChild(this)
};
vjs.TextTrack.prototype.load = function()
{
    if (this.readyState_ === 0)
    {
        this.readyState_ = 1;
        vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError))
    }
};
vjs.TextTrack.prototype.onError = function(err)
{
    this.error = err;
    this.readyState_ = 3;
    this.trigger('error')
};
vjs.TextTrack.prototype.parseCues = function(srcContent)
{
    var cue,
        time,
        text,
        lines = srcContent.split('\n'),
        line = '',
        id;
    for (var i = 1, j = lines.length; i < j; i++)
    {
        line = vjs.trim(lines[i]);
        if (line)
        {
            if (line.indexOf('-->') == -1)
            {
                id = line;
                line = vjs.trim(lines[++i])
            }
            else
            {
                id = this.cues_.length
            }
            cue = {
                id: id, index: this.cues_.length
            };
            time = line.split(/[\t ]+/);
            cue.startTime = this.parseCueTime(time[0]);
            cue.endTime = this.parseCueTime(time[2]);
            text = [];
            while (lines[++i] && (line = vjs.trim(lines[i])))
            {
                text.push(line)
            }
            cue.text = text.join('<br/>');
            this.cues_.push(cue)
        }
    }
    this.readyState_ = 2;
    this.trigger('loaded')
};
vjs.TextTrack.prototype.parseCueTime = function(timeText)
{
    var parts = timeText.split(':'),
        time = 0,
        hours,
        minutes,
        other,
        seconds,
        ms;
    if (parts.length == 3)
    {
        hours = parts[0];
        minutes = parts[1];
        other = parts[2]
    }
    else
    {
        hours = 0;
        minutes = parts[0];
        other = parts[1]
    }
    other = other.split(/\s+/);
    seconds = other.splice(0, 1)[0];
    seconds = seconds.split(/\.|,/);
    ms = parseFloat(seconds[1]);
    seconds = seconds[0];
    time += parseFloat(hours) * 3600;
    time += parseFloat(minutes) * 60;
    time += parseFloat(seconds);
    if (ms)
    {
        time += ms / 1000
    }
    return time
};
vjs.TextTrack.prototype.update = function()
{
    if (this.cues_.length > 0)
    {
        var offset = this.player_.options()['trackTimeOffset'] || 0;
        var time = this.player_.currentTime() + offset;
        if (this.prevChange === undefined || time < this.prevChange || this.nextChange <= time)
        {
            var cues = this.cues_,
                newNextChange = this.player_.duration(),
                newPrevChange = 0,
                reverse = false,
                newCues = [],
                firstActiveIndex,
                lastActiveIndex,
                cue,
                i;
            if (time >= this.nextChange || this.nextChange === undefined)
            {
                i = (this.firstActiveIndex !== undefined) ? this.firstActiveIndex : 0
            }
            else
            {
                reverse = true;
                i = (this.lastActiveIndex !== undefined) ? this.lastActiveIndex : cues.length - 1
            }
            while (true)
            {
                cue = cues[i];
                if (cue.endTime <= time)
                {
                    newPrevChange = Math.max(newPrevChange, cue.endTime);
                    if (cue.active)
                    {
                        cue.active = false
                    }
                }
                else if (time < cue.startTime)
                {
                    newNextChange = Math.min(newNextChange, cue.startTime);
                    if (cue.active)
                    {
                        cue.active = false
                    }
                    if (!reverse)
                    {
                        break
                    }
                }
                else
                {
                    if (reverse)
                    {
                        newCues.splice(0, 0, cue);
                        if (lastActiveIndex === undefined)
                        {
                            lastActiveIndex = i
                        }
                        firstActiveIndex = i
                    }
                    else
                    {
                        newCues.push(cue);
                        if (firstActiveIndex === undefined)
                        {
                            firstActiveIndex = i
                        }
                        lastActiveIndex = i
                    }
                    newNextChange = Math.min(newNextChange, cue.endTime);
                    newPrevChange = Math.max(newPrevChange, cue.startTime);
                    cue.active = true
                }
                if (reverse)
                {
                    if (i === 0)
                    {
                        break
                    }
                    else
                    {
                        i--
                    }
                }
                else
                {
                    if (i === cues.length - 1)
                    {
                        break
                    }
                    else
                    {
                        i++
                    }
                }
            }
            this.activeCues_ = newCues;
            this.nextChange = newNextChange;
            this.prevChange = newPrevChange;
            this.firstActiveIndex = firstActiveIndex;
            this.lastActiveIndex = lastActiveIndex;
            this.updateDisplay();
            this.trigger('cuechange')
        }
    }
};
vjs.TextTrack.prototype.updateDisplay = function()
{
    var cues = this.activeCues_,
        html = '',
        i = 0,
        j = cues.length;
    for (; i < j; i++)
    {
        html += '<span class="vjs-tt-cue">' + cues[i].text + '</span>'
    }
    this.el_.innerHTML = html
};
vjs.TextTrack.prototype.reset = function()
{
    this.nextChange = 0;
    this.prevChange = this.player_.duration();
    this.firstActiveIndex = 0;
    this.lastActiveIndex = 0
};
vjs.CaptionsTrack = vjs.TextTrack.extend();
vjs.CaptionsTrack.prototype.kind_ = 'captions';
vjs.SubtitlesTrack = vjs.TextTrack.extend();
vjs.SubtitlesTrack.prototype.kind_ = 'subtitles';
vjs.ChaptersTrack = vjs.TextTrack.extend();
vjs.ChaptersTrack.prototype.kind_ = 'chapters';
vjs.TextTrackDisplay = vjs.Component.extend({init: function(player, options, ready)
    {
        vjs.Component.call(this, player, options, ready);
        if (player.options_['tracks'] && player.options_['tracks'].length > 0)
        {
            this.player_.addTextTracks(player.options_['tracks'])
        }
    }});
vjs.TextTrackDisplay.prototype.createEl = function()
{
    return vjs.Component.prototype.createEl.call(this, 'div', {className: 'vjs-text-track-display'})
};
vjs.TextTrackMenuItem = vjs.MenuItem.extend({init: function(player, options)
    {
        var track = this.track = options['track'];
        options['label'] = track.label();
        options['selected'] = track.dflt();
        vjs.MenuItem.call(this, player, options);
        this.player_.on(track.kind() + 'trackchange', vjs.bind(this, this.update))
    }});
vjs.TextTrackMenuItem.prototype.onClick = function()
{
    vjs.MenuItem.prototype.onClick.call(this);
    this.player_.showTextTrack(this.track.id_, this.track.kind())
};
vjs.TextTrackMenuItem.prototype.update = function()
{
    this.selected(this.track.mode() == 2)
};
vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({init: function(player, options)
    {
        options['track'] = {
            kind: function()
            {
                return options['kind']
            }, player: player, label: function()
                {
                    return options['kind'] + ' off'
                }, dflt: function()
                {
                    return false
                }, mode: function()
                {
                    return false
                }
        };
        vjs.TextTrackMenuItem.call(this, player, options);
        this.selected(true)
    }});
vjs.OffTextTrackMenuItem.prototype.onClick = function()
{
    vjs.TextTrackMenuItem.prototype.onClick.call(this);
    this.player_.showTextTrack(this.track.id_, this.track.kind())
};
vjs.OffTextTrackMenuItem.prototype.update = function()
{
    var tracks = this.player_.textTracks(),
        i = 0,
        j = tracks.length,
        track,
        off = true;
    for (; i < j; i++)
    {
        track = tracks[i];
        if (track.kind() == this.track.kind() && track.mode() == 2)
        {
            off = false
        }
    }
    this.selected(off)
};
vjs.TextTrackButton = vjs.MenuButton.extend({init: function(player, options)
    {
        vjs.MenuButton.call(this, player, options);
        if (this.items.length <= 1)
        {
            this.hide()
        }
    }});
vjs.TextTrackButton.prototype.createItems = function()
{
    var items = [],
        track;
    items.push(new vjs.OffTextTrackMenuItem(this.player_, {kind: this.kind_}));
    for (var i = 0; i < this.player_.textTracks().length; i++)
    {
        track = this.player_.textTracks()[i];
        if (track.kind() === this.kind_)
        {
            items.push(new vjs.TextTrackMenuItem(this.player_, {track: track}))
        }
    }
    return items
};
vjs.CaptionsButton = vjs.TextTrackButton.extend({init: function(player, options, ready)
    {
        vjs.TextTrackButton.call(this, player, options, ready);
        this.el_.setAttribute('aria-label', 'Captions Menu')
    }});
vjs.CaptionsButton.prototype.kind_ = 'captions';
vjs.CaptionsButton.prototype.buttonText = 'Captions';
vjs.CaptionsButton.prototype.className = 'vjs-captions-button';
vjs.SubtitlesButton = vjs.TextTrackButton.extend({init: function(player, options, ready)
    {
        vjs.TextTrackButton.call(this, player, options, ready);
        this.el_.setAttribute('aria-label', 'Subtitles Menu')
    }});
vjs.SubtitlesButton.prototype.kind_ = 'subtitles';
vjs.SubtitlesButton.prototype.buttonText = 'Subtitles';
vjs.SubtitlesButton.prototype.className = 'vjs-subtitles-button';
vjs.ChaptersButton = vjs.TextTrackButton.extend({init: function(player, options, ready)
    {
        vjs.TextTrackButton.call(this, player, options, ready);
        this.el_.setAttribute('aria-label', 'Chapters Menu')
    }});
vjs.ChaptersButton.prototype.kind_ = 'chapters';
vjs.ChaptersButton.prototype.buttonText = 'Chapters';
vjs.ChaptersButton.prototype.className = 'vjs-chapters-button';
vjs.ChaptersButton.prototype.createItems = function()
{
    var items = [],
        track;
    for (var i = 0; i < this.player_.textTracks().length; i++)
    {
        track = this.player_.textTracks()[i];
        if (track.kind() === this.kind_)
        {
            items.push(new vjs.TextTrackMenuItem(this.player_, {track: track}))
        }
    }
    return items
};
vjs.ChaptersButton.prototype.createMenu = function()
{
    var tracks = this.player_.textTracks(),
        i = 0,
        j = tracks.length,
        track,
        chaptersTrack,
        items = this.items = [];
    for (; i < j; i++)
    {
        track = tracks[i];
        if (track.kind() == this.kind_)
        {
            if (track.readyState() === 0)
            {
                track.load();
                track.on('loaded', vjs.bind(this, this.createMenu))
            }
            else
            {
                chaptersTrack = track;
                break
            }
        }
    }
    var menu = this.menu;
    if (menu === undefined)
    {
        menu = new vjs.Menu(this.player_);
        menu.contentEl().appendChild(vjs.createEl('li', {
            className: 'vjs-menu-title', innerHTML: vjs.capitalize(this.kind_), tabindex: -1
        }))
    }
    if (chaptersTrack)
    {
        var cues = chaptersTrack.cues_,
            cue,
            mi;
        i = 0;
        j = cues.length;
        for (; i < j; i++)
        {
            cue = cues[i];
            mi = new vjs.ChaptersTrackMenuItem(this.player_, {
                track: chaptersTrack, cue: cue
            });
            items.push(mi);
            menu.addChild(mi)
        }
        this.addChild(menu)
    }
    if (this.items.length > 0)
    {
        this.show()
    }
    return menu
};
vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({init: function(player, options)
    {
        var track = this.track = options['track'],
            cue = this.cue = options['cue'],
            currentTime = player.currentTime();
        options['label'] = cue.text;
        options['selected'] = (cue.startTime <= currentTime && currentTime < cue.endTime);
        vjs.MenuItem.call(this, player, options);
        track.on('cuechange', vjs.bind(this, this.update))
    }});
vjs.ChaptersTrackMenuItem.prototype.onClick = function()
{
    vjs.MenuItem.prototype.onClick.call(this);
    this.player_.currentTime(this.cue.startTime);
    this.update(this.cue.startTime)
};
vjs.ChaptersTrackMenuItem.prototype.update = function()
{
    var cue = this.cue,
        currentTime = this.player_.currentTime();
    this.selected(cue.startTime <= currentTime && currentTime < cue.endTime)
};
vjs.obj.merge(vjs.ControlBar.prototype.options_['children'], {
    subtitlesButton: {}, captionsButton: {}, chaptersButton: {}
});
vjs.JSON;
if (typeof window.JSON !== 'undefined' && window.JSON.parse === 'function')
{
    vjs.JSON = window.JSON
}
else
{
    vjs.JSON = {};
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function(text, reviver)
    {
        var j;
        function walk(holder, key)
        {
            var k,
                v,
                value = holder[key];
            if (value && typeof value === 'object')
            {
                for (k in value)
                {
                    if (Object.prototype.hasOwnProperty.call(value, k))
                    {
                        v = walk(value, k);
                        if (v !== undefined)
                        {
                            value[k] = v
                        }
                        else
                        {
                            delete value[k]
                        }
                    }
                }
            }
            return reviver.call(holder, key, value)
        }
        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text))
        {
            text = text.replace(cx, function(a)
            {
                return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
            })
        }
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
        {
            j = eval('(' + text + ')');
            return typeof reviver === 'function' ? walk({'': j}, '') : j
        }
        throw new SyntaxError('JSON.parse(): invalid or malformed JSON data');
    }
}
;
vjs.autoSetup = function()
{
    var options,
        vid,
        player,
        vids = document.getElementsByTagName('video');
    if (vids && vids.length > 0)
    {
        for (var i = 0, j = vids.length; i < j; i++)
        {
            vid = vids[i];
            if (vid && vid.getAttribute)
            {
                if (vid['player'] === undefined)
                {
                    options = vid.getAttribute('data-setup');
                    if (options !== null)
                    {
                        options = vjs.JSON.parse(options || '{}');
                        player = videojs(vid, options)
                    }
                }
            }
            else
            {
                vjs.autoSetupTimeout(1);
                break
            }
        }
    }
    else if (!vjs.windowLoaded)
    {
        vjs.autoSetupTimeout(1)
    }
};
vjs.autoSetupTimeout = function(wait)
{
    setTimeout(vjs.autoSetup, wait)
};
if (document.readyState === 'complete')
{
    vjs.windowLoaded = true
}
else
{
    vjs.one(window, 'load', function()
    {
        vjs.windowLoaded = true
    })
}
vjs.autoSetupTimeout(1);
vjs.plugin = function(name, init)
{
    vjs.Player.prototype[name] = init
};
videojs.OnePlayer = videojs.Html5.extend({init: function(player, options, ready)
    {
        var source,
            context,
            mediaPlayer;
        source = options.source;
        delete options.source;
        videojs.Html5.call(this, player, options, ready);
        this.el().controls = false;
        mediaPlayer = OnePlayer.CreateVideoElement(this.el());
        mediaPlayer.autoplay = player.options_.autoplay;
        if (source && this.el_.currentSrc !== source.src)
        {
            mediaPlayer.setSrc(source.src, source.type)
        }
        player.mediaPlayer = mediaPlayer
    }});
videojs.OnePlayer.prototype.src = function(src)
{
    if (src === undefined)
    {
        return this.player().mediaPlayer.src
    }
    else
    {
        this.player().mediaPlayer.src = src
    }
};
videojs.OnePlayer.prototype.setCurrentTime = function(time)
{
    this.player().mediaPlayer.currentTime = time
};
videojs.OnePlayer.isSupported = function()
{
    return !!window.MediaSource
};
videojs.OnePlayer.canPlaySource = function(srcObj)
{
    if (srcObj.type === 'application/dash+xml')
    {
        return 'maybe'
    }
    else
    {
        return ''
    }
};
videojs.options.techOrder.unshift('onePlayer');
videojs.Osmfss = videojs.MediaTechController.extend({init: function(player, options, ready)
    {
        vjs.MediaTechController.call(this, player, options, ready);
        var source = options['source'],
            parentEl = options['parentEl'],
            placeHolder = this.el_ = vjs.createEl('div', {id: player.id() + '_temp_flash'}),
            objId = player.id() + '_osmfss_api',
            playerOptions = player.options_,
            flashVars = vjs.obj.merge({
                playerId: player.id(), controlBarMode: 'none', playButtonOverlay: 'false', plugin_AdaptiveStreamingPlugin: playerOptions.osmfss.plugin, AdaptiveStreamingPlugin_retryLive: 'true', javascriptCallbackFunction: 'videojs.Osmfss.onEvent', autoPlay: playerOptions.autoplay, preload: playerOptions.preload, loop: playerOptions.loop, muted: playerOptions.muted
            }, options['flashVars']),
            params = vjs.obj.merge({
                wmode: 'opaque', bgcolor: '#000000'
            }, options['params']),
            attributes = vjs.obj.merge({
                id: objId, name: objId, 'class': 'vjs-tech'
            }, options['attributes']);
        options.swf = playerOptions.osmfss.swf;
        player.osmfss = this;
        player.osmfss.seeking_ = false;
        player.osmfss.lastSeekTarget_ = NaN;
        if (source)
        {
            flashVars['src'] = encodeURIComponent(vjs.getAbsoluteURL(source.src))
        }
        vjs.insertFirst(placeHolder, parentEl);
        if (options['startTime'])
        {
            this.ready(function()
            {
                this.load();
                this.play();
                this['currentTime'](options['startTime'])
            })
        }
        if (vjs.IS_FIREFOX)
        {
            this.ready(function()
            {
                vjs.on(this.el(), 'mousemove', vjs.bind(this, function()
                {
                    this.player().trigger({
                        type: 'mousemove', bubbles: false
                    })
                }))
            })
        }
        player.on('stageclick', player.reportUserActivity);
        this.el_ = vjs.Flash.embed(options['swf'], placeHolder, flashVars, params, attributes)
    }});
(function()
{
    var api = videojs.Osmfss.prototype,
        readWrite = 'autoplay,controller,controls,defaultMuted,defaultPlaybackRate,loop,mediaGroup,muted,playbackRate,preload,volume'.split(','),
        readOnly = 'audioTracks,currentSrc,duration,ended,error,initialTime,paused,played,readyState,seekable,seeking,startOffsetTime,textTracks,videoHeight,videoTracks,videoWidth'.split(','),
        i;
    function createSetter(attr)
    {
        var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
        api['set' + attrUpper] = function(val)
        {
            return this.el_['set' + attrUpper](val)
        }
    }
    ;
    function createGetter(attr)
    {
        api[attr] = function()
        {
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            return this.el_['get' + attrUpper]()
        }
    }
    ;
    for (i = 0; i < readWrite.length; i++)
    {
        createGetter(readWrite[i]);
        createSetter(readWrite[i])
    }
    for (i = 0; i < readOnly.length; i++)
    {
        createGetter(readOnly[i])
    }
})();
videojs.Osmfss.isSupported = function()
{
    return vjs.Flash.isSupported()
};
videojs.Osmfss.canPlaySource = function(srcObj)
{
    var type;
    if (!srcObj.type)
    {
        return ''
    }
    type = srcObj.type.replace(/;.*/, '').toLowerCase();
    if (type in videojs.Osmfss.formats)
    {
        return 'maybe'
    }
};
videojs.Osmfss.prototype.dispose = function()
{
    vjs.MediaTechController.prototype.dispose.call(this)
};
videojs.Osmfss.prototype.networkState = function()
{
    return 1
};
videojs.Osmfss.prototype.src = function(src)
{
    if (src === undefined)
    {
        return this.currentSrc()
    }
    else
    {
        this.el_.setSrc(vjs.getAbsoluteURL(src))
    }
};
videojs.Osmfss.prototype.load = function()
{
    this.el_.load()
};
videojs.Osmfss.prototype.play = function()
{
    this.el_.play2()
};
videojs.Osmfss.prototype.pause = function()
{
    this.el_.pause()
};
videojs.Osmfss.prototype.currentTime = function()
{
    if (this.seeking())
    {
        return this.lastSeekTarget_ || 0
    }
    return this.el_.getCurrentTime()
};
videojs.Osmfss.prototype.setCurrentTime = function(time)
{
    this.seeking_ = true;
    this.lastSeekTarget_ = time;
    this.el_.pause()
};
videojs.Osmfss.prototype.buffered = function()
{
    return videojs.createTimeRange(0, this.el_.getBufferTime())
};
videojs.Osmfss.prototype.supportsFullScreen = function()
{
    return false
};
videojs.Osmfss.prototype.enterFullScreen = function()
{
    return false
};
videojs.Osmfss.formats = {
    'application/vnd.ms-sstr+xml': 'ISMC', 'application/dash+xml': 'MPD'
};
videojs.Osmfss.onReady = function(currentSwf)
{
    videojs.log(currentSwf, 'Ready');
    var el,
        player;
    el = vjs.el(currentSwf);
    this.el_ = el;
    player = el && el.parentNode && el.parentNode['player'];
    if (player)
    {
        el['player'] = player;
        videojs.Osmfss.checkReady(player.osmfss)
    }
};
videojs.Osmfss.checkReady = function(tech)
{
    if (!tech.el())
    {
        return false
    }
    if (tech.el().getBufferTime)
    {
        tech.triggerReady();
        return true
    }
    else
    {
        setTimeout(function()
        {
            videojs.Osmfss.checkReady(tech)
        }, 50)
    }
    return false
};
videojs.Osmfss.onEvent = function(currentSwf, event)
{
    try
    {
        if ('onJavaScriptBridgeCreated' === event)
        {
            videojs.Osmfss.onReady(currentSwf);
            return
        }
        var player = videojs.el(currentSwf)['player'];
        if ('play' === event)
        {
            videojs.log(currentSwf, 'Event: playing');
            player.trigger('playing')
        }
        if ('pause' === event)
        {
            if (player.osmfss.seeking_)
            {
                player.osmfss.el_.setCurrentTime(player.osmfss.lastSeekTarget_);
                player.osmfss.seeking_ = false
            }
        }
        if ('seeked' === event)
        {
            player.osmfss.play()
        }
        player.trigger(event);
        if ('timeupdate' !== event)
        {
            videojs.log(currentSwf, 'Event:', event)
        }
    }
    catch(e)
    {
        videojs.log(currentSwf, 'Event:', event, e);
        throw e;
    }
};
videojs.options.techOrder.unshift('osmfss');
videojs.options.osmfss = {};
var UrlRewriter;
(function(UrlRewriter)
{
    "use strict";
    var _azureMediaSmooth = "SMOOTH",
        _azureMediaDash = "DASH",
        _azureMediaHlsV3 = "HLS-V3",
        _azureMediaHlsV4 = "HLS-V4";
    var _azureMediaFormat = [_azureMediaSmooth, _azureMediaDash, _azureMediaHlsV3, _azureMediaHlsV4];
    var _azureMediaFormatString = {
            DASH: "mpd-time-csf", "HLS-V3": "m3u8-aapl-v3", "HLS-V4": "m3u8-aapl-v4"
        };
    var _azureMediaMime = {
            SMOOTH: "application/vnd.ms-sstr+xml", DASH: "application/dash+xml", "HLS-V3": "application/vnd.apple.mpegurl", "HLS-V4": "application/vnd.apple.mpegurl"
        };
    var streamSrc = (function()
        {
            function streamSrc(src, type)
            {
                this.src = src;
                this.type = type
            }
            return streamSrc
        })();
    UrlRewriter.streamSrc = streamSrc;
    function setMediaFormats(formats)
    {
        if (formats && formats.length > 0)
        {
            for (var i = 0; i < formats.length; i++)
            {
                if (-1 === _azureMediaFormat.indexOf(formats[i]))
                {
                    throw new Error("Format \"" + formats[i] + "\" not supported");
                }
            }
            _azureMediaFormat = formats
        }
    }
    UrlRewriter.setMediaFormats = setMediaFormats;
    function expandSourceTags(formats)
    {
        var vids,
            vidTag,
            sources,
            sourceTag,
            sourceObjs,
            newSourceTag,
            newSrcs;
        setMediaFormats(formats);
        vids = document.getElementsByTagName("video");
        for (var i = 0; vids && i < vids.length; i++)
        {
            vidTag = vids[i];
            if (vidTag)
            {
                sourceObjs = [];
                sources = vidTag.getElementsByTagName("source");
                if (sources && sources.length > 0)
                {
                    for (var j = sources.length - 1; j >= 0; j--)
                    {
                        sourceTag = sources[j];
                        var sourceSrc = sourceTag.getAttribute("src"),
                            sourceType = sourceTag.getAttribute("type");
                        if (sourceSrc)
                        {
                            sourceObjs.unshift(new streamSrc(sourceSrc, sourceType));
                            sourceTag.parentNode.removeChild(sourceTag)
                        }
                        else
                        {
                            throw new Error("Source tag needs \"src\" attribute");
                        }
                    }
                }
                newSrcs = expandSources(sourceObjs);
                var firstChild = vidTag.firstChild;
                for (var k = 0; newSrcs && k < newSrcs.length; k++)
                {
                    newSourceTag = document.createElement("source");
                    newSourceTag.setAttribute("src", newSrcs[k].src);
                    newSourceTag.setAttribute("type", newSrcs[k].type);
                    vidTag.insertBefore(newSourceTag, firstChild)
                }
            }
        }
    }
    UrlRewriter.expandSourceTags = expandSourceTags;
    function expandSources(sourceList)
    {
        var allNewSrcs = [],
            newSrcs,
            normalizedUrl,
            doneList = [];
        for (var i = 0; sourceList && i < sourceList.length; i++)
        {
            if (_getFileExtension(sourceList[i].src) === "ism")
            {
                normalizedUrl = _getNormalizedUrl(sourceList[i].src);
                if (doneList.indexOf(normalizedUrl) === -1)
                {
                    doneList.push(normalizedUrl);
                    newSrcs = _addFormats(sourceList[i].src);
                    if (newSrcs)
                    {
                        allNewSrcs = allNewSrcs.concat(newSrcs)
                    }
                }
            }
            else
            {
                allNewSrcs.push(sourceList[i])
            }
        }
        return allNewSrcs.length > 0 ? allNewSrcs : null
    }
    UrlRewriter.expandSources = expandSources;
    function _getFileExtension(url)
    {
        var fileExt = null,
            periodIndex = url.lastIndexOf("."),
            nextSlashIndex = url.indexOf("/", periodIndex);
        if (periodIndex > -1)
        {
            fileExt = url.substring(periodIndex + 1, nextSlashIndex !== -1 ? nextSlashIndex : url.length);
            fileExt = fileExt.toLowerCase()
        }
        return fileExt
    }
    function _getNormalizedUrl(url)
    {
        var trimmedUrl = url.trim(),
            ismString = ".ism/manifest",
            ismIndex = trimmedUrl.search(/\.ism\/manifest/i);
        return trimmedUrl.substr(0, ismIndex + ismString.length)
    }
    function _addFormats(url)
    {
        var trimmedUrl = url.trim(),
            formatBeginIndex = trimmedUrl.search(/format=/i),
            newUrlList = [],
            matchArr,
            extraStr = "";
        if (formatBeginIndex > -1)
        {
            trimmedUrl = trimmedUrl.replace(/format=[^,)]*[ ,]*/i, "");
            trimmedUrl = trimmedUrl.replace(/\(\s*\)/, "")
        }
        matchArr = trimmedUrl.match(/\([^)]*\)/);
        if (matchArr && matchArr.length > 0)
        {
            extraStr = matchArr[0].substr(1).trim();
            trimmedUrl = trimmedUrl.substr(0, trimmedUrl.indexOf("("))
        }
        for (var i = 0; i < _azureMediaFormat.length; i++)
        {
            var format,
                formatString = "",
                mimeType,
                newUrl;
            format = _azureMediaFormat[i];
            mimeType = _azureMediaMime[format];
            if (format !== _azureMediaSmooth)
            {
                formatString = "(format=" + _azureMediaFormatString[format];
                formatString += extraStr ? ", " + extraStr : ")"
            }
            else if (extraStr)
            {
                formatString = "(" + extraStr
            }
            newUrl = new streamSrc(trimmedUrl + formatString, mimeType);
            newUrlList.push(newUrl)
        }
        return newUrlList.length > 0 ? newUrlList : null
    }
})(UrlRewriter || (UrlRewriter = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Context)
    {
        "use strict";
        (function(RequestState)
        {
            RequestState[RequestState["proceed"] = 0] = "proceed";
            RequestState[RequestState["endOfStream"] = 1] = "endOfStream";
            RequestState[RequestState["retry"] = 2] = "retry"
        })(Context.RequestState || (Context.RequestState = {}));
        var RequestState = Context.RequestState;
        ;
        (function(ResponseType)
        {
            ResponseType[ResponseType["arraybuffer"] = 0] = "arraybuffer";
            ResponseType[ResponseType["blob"] = 1] = "blob";
            ResponseType[ResponseType["document"] = 2] = "document";
            ResponseType[ResponseType["json"] = 3] = "json";
            ResponseType[ResponseType["text"] = 4] = "text"
        })(Context.ResponseType || (Context.ResponseType = {}));
        var ResponseType = Context.ResponseType;
        var Session = (function()
            {
                function Session(videoElement, htmlVideo, userConfig)
                {
                    this.videoTag = htmlVideo;
                    this.appConfig = userConfig;
                    this.eventMgr = new OnePlayer.Events.Manager(videoElement, false);
                    this.workflows = null;
                    this.presentationUrl = null;
                    this.presentationJson = null;
                    this.commonPresentation = null;
                    this.startPositionInSec = NaN;
                    this.heuristicSettings = new OnePlayer.Settings.Heuristics;
                    this.httpRetryPolicySettings = new OnePlayer.Settings.HttpRetryPolicy;
                    this.httpDataRetrieverSettings = new OnePlayer.Settings.HttpDataRetriever;
                    this._disposed = false
                }
                Session.prototype.dispose = function()
                {
                    if (!this._disposed)
                    {
                        this._disposed = true;
                        this.videoTag = null;
                        this.appConfig = null;
                        if (this.workflows)
                        {
                            this.workflows.forEach(function(workFlow)
                            {
                                workFlow.dispose()
                            })
                        }
                        this.workflows = null;
                        this.presentationUrl = null;
                        this.presentationJson = null;
                        if (this.eventMgr)
                        {
                            this.eventMgr.dispose();
                            this.eventMgr = null
                        }
                        if (this.commonPresentation)
                        {
                            this.commonPresentation.dispose();
                            this.commonPresentation = null
                        }
                        this.heuristicSettings = null
                    }
                };
                Object.defineProperty(Session.prototype, "disposed", {
                    get: function()
                    {
                        return this._disposed
                    }, enumerable: true, configurable: true
                });
                Session.prototype.reset = function()
                {
                    this.presentationUrl = null;
                    this.presentationJson = null;
                    this.startPositionInSec = NaN;
                    if (this.commonPresentation)
                    {
                        this.commonPresentation.dispose();
                        this.commonPresentation = null
                    }
                };
                Session.prototype.maxBufferInSec = function()
                {
                    if (this.appConfig && this.appConfig.maxBufferInSec && this.appConfig.maxBufferInSec != "0")
                    {
                        return parseInt(this.appConfig.maxBufferInSec)
                    }
                    return this.heuristicSettings.buffer.maxBufferInSec
                };
                Session.prototype.prerollBufferInSec = function()
                {
                    return this.maxBufferInSec() * this.heuristicSettings.buffer.prerollPercent
                };
                Session.prototype.lowBufferInSec = function()
                {
                    return this.maxBufferInSec() * this.heuristicSettings.vodDowngradeBufferLevelPercent * this.heuristicSettings.buffer.lowBufferPercent
                };
                Session.prototype.liveStartBufferInSec = function()
                {
                    return this.maxBufferInSec() * (this.heuristicSettings.buffer.prerollPercent + this.heuristicSettings.buffer.livePlaybackOffsetPercent)
                };
                Session.prototype.updatePresentation = function(newPresentation)
                {
                    if (this.commonPresentation)
                    {
                        this.commonPresentation.transferPresentationState(newPresentation);
                        this.presentationJson = newPresentation.toJson();
                        newPresentation.dispose()
                    }
                    else
                    {
                        this.commonPresentation = newPresentation;
                        this.presentationJson = newPresentation.toJson()
                    }
                };
                return Session
            })();
        Context.Session = Session;
        var Request = (function()
            {
                function Request(workflowType, sessionContext)
                {
                    this.workflowType = workflowType;
                    this.sessionContext = sessionContext;
                    this.state = 0;
                    this.retryWaitTimeMSec = 0;
                    this.currentModuleId = null;
                    this.requestedStream = null;
                    this.urlsToRetrieve = [];
                    this.selectedTrack = null;
                    this.selectedSegment = null;
                    this.heuristicData = null;
                    this.externalFailure = null;
                    this.failTracker = new FailTracker;
                    this._disposed = false
                }
                Request.prototype.dispose = function()
                {
                    if (!this._disposed)
                    {
                        this._disposed = true;
                        this.workflowType = null;
                        this.sessionContext = null;
                        this.state = null;
                        this.currentModuleId = null;
                        this.requestedStream = null;
                        this.urlsToRetrieve.forEach(function(value, idx, array)
                        {
                            array[idx].dispose()
                        });
                        this.urlsToRetrieve = [];
                        this.selectedTrack = null;
                        this.selectedSegment = null;
                        if (this.heuristicData)
                        {
                            this.heuristicData.dispose();
                            this.heuristicData = null
                        }
                        if (this.externalFailure)
                        {
                            this.externalFailure.dispose();
                            this.externalFailure = null
                        }
                        if (this.failTracker)
                        {
                            this.failTracker.dispose();
                            this.failTracker = null
                        }
                    }
                };
                Request.prototype.reset = function()
                {
                    this.state = 0;
                    this.retryWaitTimeMSec = 0;
                    this.currentModuleId = null;
                    this.urlsToRetrieve = [];
                    this.selectedTrack = null;
                    this.selectedSegment = null;
                    this.heuristicData.reset();
                    this.externalFailure = null
                };
                Object.defineProperty(Request.prototype, "disposed", {
                    get: function()
                    {
                        return this._disposed
                    }, enumerable: true, configurable: true
                });
                return Request
            })();
        Context.Request = Request;
        var UrlRequest = (function()
            {
                function UrlRequest(url, responseType, presTimeInSec, durationInSec)
                {
                    if (typeof responseType === "undefined")
                    {
                        responseType = 0
                    }
                    if (typeof presTimeInSec === "undefined")
                    {
                        presTimeInSec = 0
                    }
                    if (typeof durationInSec === "undefined")
                    {
                        durationInSec = 0
                    }
                    this.url = url;
                    this.httpResponseCode = -1;
                    this.httpResposeContentType = "";
                    this.mediaData = null;
                    this.presentationData = null;
                    this.presTimeInSec = presTimeInSec;
                    this.durationInSec = durationInSec;
                    this.responseType = responseType
                }
                UrlRequest.prototype.dispose = function()
                {
                    this.url = null;
                    this.httpResponseCode = null;
                    this.httpResposeContentType = "";
                    this.mediaData = null;
                    this.presentationData = null;
                    this.presTimeInSec = null;
                    this.durationInSec = null;
                    this.responseType = null
                };
                return UrlRequest
            })();
        Context.UrlRequest = UrlRequest;
        var HeuristicData = (function()
            {
                function HeuristicData(stream)
                {
                    var hData = [];
                    stream.tracks.forEach(function(track)
                    {
                        if (track.streamingInfo.selectable)
                        {
                            hData.push(new TrackData(track))
                        }
                    });
                    this.tracksData = hData
                }
                HeuristicData.prototype.dispose = function()
                {
                    this.tracksData.forEach(function(val, idx, arr)
                    {
                        arr[idx].dispose()
                    });
                    this.tracksData = []
                };
                HeuristicData.prototype.reset = function()
                {
                    this.tracksData.forEach(function(val, idx, arr)
                    {
                        arr[idx].reset()
                    })
                };
                return HeuristicData
            })();
        Context.HeuristicData = HeuristicData;
        var TrackData = (function()
            {
                function TrackData(track)
                {
                    this.trackInfo = track;
                    this.selectable = true;
                    this.dataRetrieverEstimationInSec = null
                }
                TrackData.prototype.dispose = function()
                {
                    this.trackInfo = null;
                    this.selectable = null;
                    this.dataRetrieverEstimationInSec = null
                };
                TrackData.prototype.reset = function()
                {
                    this.selectable = true;
                    this.dataRetrieverEstimationInSec = null
                };
                return TrackData
            })();
        Context.TrackData = TrackData;
        var FailTracker = (function()
            {
                function FailTracker()
                {
                    this.lastFailure = null;
                    this.lastTrack = null;
                    this.totalRetried = 0;
                    this.tracksToTry = [];
                    this.trackToTryIdx = 0;
                    this.sameSegmentRetried = 0;
                    this.segmentsSkipped = 0
                }
                FailTracker.prototype.dispose = function()
                {
                    this.lastFailure = null;
                    this.lastTrack = null;
                    this.tracksToTry = []
                };
                FailTracker.prototype.resetForSegment = function()
                {
                    this.sameSegmentRetried = 0;
                    this.trackToTryIdx = 0
                };
                FailTracker.prototype.log = function(record, track)
                {
                    this.lastFailure = record;
                    this.lastTrack = track
                };
                FailTracker.prototype.isNone = function()
                {
                    return (null === this.lastFailure)
                };
                FailTracker.prototype.isLastNetworkFail = function()
                {
                    return (this.lastFailure.code >= 2164262089 && this.lastFailure.code < 2164262143)
                };
                return FailTracker
            })();
        Context.FailTracker = FailTracker
    })(OnePlayer.Context || (OnePlayer.Context = {}));
    var Context = OnePlayer.Context
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    "use strict";
    function CreateVideoElement(htmlVideo, userConfig)
    {
        return new VideoElement(htmlVideo, userConfig)
    }
    OnePlayer.CreateVideoElement = CreateVideoElement;
    (function(ExtendedCode)
    {
        ExtendedCode[ExtendedCode["internalErrStart"] = 0x81000000] = "internalErrStart";
        ExtendedCode[ExtendedCode["internalErrDisposed"] = 0x81000000] = "internalErrDisposed";
        ExtendedCode[ExtendedCode["internalErrEnd"] = 0x810000FF] = "internalErrEnd"
    })(OnePlayer.ExtendedCode || (OnePlayer.ExtendedCode = {}));
    var ExtendedCode = OnePlayer.ExtendedCode;
    var InternalEventName = (function()
        {
            function InternalEventName(){}
            InternalEventName.exception = "exception";
            return InternalEventName
        })();
    OnePlayer.InternalEventName = InternalEventName;
    var VideoElement = (function()
        {
            function VideoElement(htmlVideo, userConfig)
            {
                this._sessionContext = new OnePlayer.Context.Session(this, htmlVideo, userConfig);
                this._playerType = null;
                this._autoplay = true;
                this._type = "";
                this._passThroughEventNames = [OnePlayer.EventName.volumechange, OnePlayer.EventName.ended, OnePlayer.EventName.timeupdate, OnePlayer.EventName.pause, OnePlayer.EventName.play, OnePlayer.EventName.playing, OnePlayer.EventName.seeking, OnePlayer.EventName.seeked, OnePlayer.EventName.loadstart, OnePlayer.EventName.loadeddata];
                this._conditionalEventNames = [OnePlayer.EventName.waiting, OnePlayer.EventName.canplaythrough, OnePlayer.EventName.error];
                this._registerVideoTagEvents();
                this._registerInternalEvents()
            }
            Object.defineProperty(VideoElement.prototype, "src", {
                get: function()
                {
                    if (this._workflowCoordinator)
                    {
                        return this._workflowCoordinator.src
                    }
                    return this._sessionContext.videoTag.src
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "type", {
                get: function()
                {
                    return this._type
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "currentTime", {
                get: function()
                {
                    return this._sessionContext.videoTag.currentTime
                }, set: function(timeInSec)
                    {
                        OnePlayer.Log.verbose(7, "currentTime: " + timeInSec + " sec");
                        if (this._workflowCoordinator)
                        {
                            this._workflowCoordinator.currentTime = timeInSec
                        }
                        else
                        {
                            this._sessionContext.videoTag.currentTime = timeInSec
                        }
                    }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "volume", {
                get: function()
                {
                    return this._sessionContext.videoTag.volume
                }, set: function(level)
                    {
                        OnePlayer.Log.verbose(7, "volume: " + level.toString);
                        var setLevel = level;
                        if (NaN === level || undefined === level || null === level)
                        {
                            return
                        }
                        if (level < 0)
                        {
                            setLevel = 0
                        }
                        else if (level > 1)
                        {
                            setLevel = 1
                        }
                        this._sessionContext.videoTag.volume = setLevel
                    }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "autoplay", {
                get: function()
                {
                    return this._autoplay
                }, set: function(value)
                    {
                        OnePlayer.Log.verbose(7, "autoplay: " + value);
                        this._autoplay = value
                    }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "paused", {
                get: function()
                {
                    return this._sessionContext.videoTag.paused
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "seeking", {
                get: function()
                {
                    return this._sessionContext.videoTag.seeking
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "ended", {
                get: function()
                {
                    return this._sessionContext.videoTag.ended
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "height", {
                get: function()
                {
                    return this._sessionContext.videoTag.height
                }, set: function(value)
                    {
                        this._sessionContext.videoTag.height = value
                    }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "width", {
                get: function()
                {
                    return this._sessionContext.videoTag.width
                }, set: function(value)
                    {
                        this._sessionContext.videoTag.width = value
                    }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "videoHeight", {
                get: function()
                {
                    return this._sessionContext.videoTag.videoHeight
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "videoWidth", {
                get: function()
                {
                    return this._sessionContext.videoTag.videoWidth
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "isFullScreen", {
                get: function()
                {
                    var fullscreenElement = document['fullscreenElement'] || document['webkitFullscreenElement'] || document['mozFullScreenElement'] || document['msFullscreenElement'];
                    if (fullscreenElement === this._sessionContext.videoTag)
                    {
                        return document['fullscreenEnabled'] || document['webkitFullscreenEnabled'] || document['mozFullScreenEnabled'] || document['msFullscreenEnabled']
                    }
                    return false
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "duration", {
                get: function()
                {
                    return this._sessionContext.videoTag.duration
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "buffered", {
                get: function()
                {
                    if (this._workflowCoordinator)
                    {
                        return this._workflowCoordinator.buffered
                    }
                    else
                    {
                        return this._sessionContext.videoTag.buffered
                    }
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(VideoElement.prototype, "error", {
                get: function()
                {
                    if (this._workflowCoordinator && this._workflowCoordinator.error)
                    {
                        return this._workflowCoordinator.error
                    }
                    var error = null;
                    if (this._sessionContext.videoTag.error)
                    {
                        error = new OnePlayer.Failure.External;
                        error.translateMediaError(this._sessionContext.videoTag.error)
                    }
                    return error
                }, enumerable: true, configurable: true
            });
            VideoElement.prototype.canPlayType = function(type)
            {
                if (OnePlayer.PlayerType.getByPresentationType(type, this._sessionContext.videoTag))
                {
                    return "maybe"
                }
                return ""
            };
            VideoElement.prototype.setSrc = function(url, type)
            {
                this._type = type;
                this._playerType = OnePlayer.PlayerType.getByPresentationType(type, this._sessionContext.videoTag);
                if (!this._playerType)
                {
                    this._playerType = OnePlayer.PlayerType.getByUrl(url, this._sessionContext.videoTag)
                }
                OnePlayer.Log.verbose(7, "src: " + url + " type: " + type + " player: " + (null === this._playerType ? "not known" : OnePlayer.PlayerDetector.Type[this._playerType]));
                if (this._workflowCoordinator)
                {
                    this._workflowCoordinator.dispose();
                    this._workflowCoordinator = null
                }
                this._sessionContext.reset();
                if (this._playerType === 1)
                {
                    this._sessionContext.videoTag.autoplay = this._autoplay;
                    this._sessionContext.videoTag.src = url
                }
                else if (this._playerType === 3)
                {
                    this._workflowCoordinator = OnePlayer.Workflow.CreateCoordinator(this._sessionContext);
                    this._sessionContext.videoTag.autoplay = false;
                    this._workflowCoordinator.autoplay = this._autoplay;
                    this._workflowCoordinator.src = url
                }
                else
                {
                    throw new Error(url + " not supported by OnePlayer Video Element");
                }
            };
            VideoElement.prototype.play = function()
            {
                OnePlayer.Log.verbose(7, "play");
                if (this._workflowCoordinator)
                {
                    this._workflowCoordinator.play()
                }
                else
                {
                    this._sessionContext.videoTag.play()
                }
            };
            VideoElement.prototype.pause = function()
            {
                OnePlayer.Log.verbose(7, "pause");
                if (this._workflowCoordinator)
                {
                    this._workflowCoordinator.pause()
                }
                else
                {
                    this._sessionContext.videoTag.pause()
                }
            };
            VideoElement.prototype.requestFullscreen = function()
            {
                OnePlayer.Log.verbose(7, "requestFullscreen");
                var handled = false;
                if (this.isFullScreen)
                {
                    return
                }
                var videoTag = this._sessionContext.videoTag;
                if (videoTag['requestFullscreen'])
                {
                    handled = true;
                    videoTag['requestFullscreen']()
                }
                else if (videoTag['msRequestFullscreen'])
                {
                    handled = true;
                    videoTag['msRequestFullscreen']()
                }
                else if (videoTag['webkitRequestFullscreen'])
                {
                    handled = true;
                    videoTag['webkitRequestFullscreen']()
                }
                else if (videoTag['mozRequestFullScreen'])
                {
                    handled = true;
                    videoTag['mozRequestFullScreen']()
                }
                if (handled)
                {
                    this._sessionContext.eventMgr.dispatchEvent(OnePlayer.EventName.fullscreenchange)
                }
            };
            VideoElement.prototype.exitFullscreen = function()
            {
                OnePlayer.Log.verbose(7, "exitFullscreen");
                var handled = false;
                if (!this.isFullScreen)
                {
                    return
                }
                if (document['exitFullscreen'])
                {
                    handled = true;
                    document['exitFullscreen']()
                }
                else if (document['webkitExitFullscreen'])
                {
                    handled = true;
                    document['webkitExitFullscreen']()
                }
                else if (document['mozCancelFullScreen'])
                {
                    handled = true;
                    document['mozCancelFullScreen']()
                }
                else if (document['msExitFullscreen'])
                {
                    handled = true;
                    document['msExitFullscreen']()
                }
                if (handled)
                {
                    this._sessionContext.eventMgr.dispatchEvent(OnePlayer.EventName.fullscreenchange)
                }
            };
            VideoElement.prototype.addEventListener = function(eventName, handler, caller)
            {
                if (typeof caller === "undefined")
                {
                    caller = null
                }
                this._sessionContext.eventMgr.addHandler(eventName, handler, caller)
            };
            VideoElement.prototype.removeEventListener = function(eventName, handler)
            {
                this._sessionContext.eventMgr.removeHandler(eventName, handler)
            };
            VideoElement.prototype._registerVideoTagEvents = function()
            {
                var _this = this;
                var that = this;
                this._passThroughEventNames.forEach(function(value)
                {
                    _this._sessionContext.videoTag.addEventListener(value, passThroughEventHandler)
                });
                this._conditionalEventNames.forEach(function(value)
                {
                    _this._sessionContext.videoTag.addEventListener(value, conditionalEventHandler)
                });
                function passThroughEventHandler(evt)
                {
                    OnePlayer.Log.verbose(7, "dispatching event: " + evt.type);
                    that._sessionContext.eventMgr.dispatchEvent(evt.type)
                }
                function conditionalEventHandler(evt)
                {
                    if (OnePlayer.EventName.error === evt.type)
                    {
                        if (!that._workflowCoordinator || !that._workflowCoordinator.error)
                        {
                            if (that._workflowCoordinator)
                            {
                                OnePlayer.Log.verbose(7, "Disposing WorkflowCoordinator b/c " + OnePlayer.Failure.mediaErrorToString(that._sessionContext.videoTag.error) + " occurred on videoTag");
                                that._workflowCoordinator.dispose();
                                that._workflowCoordinator = null
                            }
                            OnePlayer.Log.verbose(7, "dispatching event: " + evt.type);
                            that._sessionContext.eventMgr.dispatchEvent(evt.type)
                        }
                    }
                    else
                    {
                        if (!that._workflowCoordinator)
                        {
                            OnePlayer.Log.verbose(7, "dispatching event: " + evt.type);
                            that._sessionContext.eventMgr.dispatchEvent(evt.type)
                        }
                    }
                }
            };
            VideoElement.prototype._registerInternalEvents = function()
            {
                this._sessionContext.eventMgr.addHandler(InternalEventName.exception, handler, this);
                function handler(evt)
                {
                    if (evt.message)
                    {
                        OnePlayer.Log.error(7, "Throwing error " + evt.message);
                        throw new Error(evt.message);
                    }
                }
            };
            return VideoElement
        })()
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Settings)
    {
        "use strict";
        var Heuristics = (function()
            {
                function Heuristics()
                {
                    this.windowSizeHeuristicsEnabled = Heuristics._windowSizeHeuristicsEnabledDefault;
                    this.preFetchDataEnabled = Heuristics._preFetchDataEnabledDefault;
                    this.vodStableBufferLevelPercent = Heuristics._vodStableBufferLevelPercentDefault;
                    this.vodDowngradeBufferLevelPercent = Heuristics._vodDowngradeBufferLevelPercentDefault;
                    this.belowDowngradeBufferLevelDownloadTimeFactor = Heuristics._belowDowngradeBufferLevelDownloadTimeFactorDefault;
                    this.bandwidth = null;
                    this.stepRule = null;
                    this.buffer = null;
                    this.bandwidth = new Bandwidth;
                    this.stepRule = new StepRule;
                    this.buffer = new Buffer
                }
                Heuristics.prototype.reset = function()
                {
                    this.windowSizeHeuristicsEnabled = Heuristics._windowSizeHeuristicsEnabledDefault;
                    this.preFetchDataEnabled = Heuristics._preFetchDataEnabledDefault;
                    this.vodStableBufferLevelPercent = Heuristics._vodStableBufferLevelPercentDefault;
                    this.vodDowngradeBufferLevelPercent = Heuristics._vodDowngradeBufferLevelPercentDefault;
                    this.belowDowngradeBufferLevelDownloadTimeFactor = Heuristics._belowDowngradeBufferLevelDownloadTimeFactorDefault;
                    this.bandwidth.reset();
                    this.stepRule.reset();
                    this.buffer.reset()
                };
                Heuristics._windowSizeHeuristicsEnabledDefault = true;
                Heuristics._preFetchDataEnabledDefault = true;
                Heuristics._vodStableBufferLevelPercentDefault = .70;
                Heuristics._vodDowngradeBufferLevelPercentDefault = .15;
                Heuristics._belowDowngradeBufferLevelDownloadTimeFactorDefault = .75;
                return Heuristics
            })();
        Settings.Heuristics = Heuristics;
        var Bandwidth = (function()
            {
                function Bandwidth()
                {
                    this.bandwidthUsabilityPercent = Bandwidth._bandwidthUsabilityPercentDefault;
                    this.bandwidthDataSizeThresholdInBytes = Bandwidth._bandwidthDataSizeThresholdInBytesDefault;
                    this.maxBandwidthHistoryCount = Bandwidth._maxBandwidthHistoryCountDefault
                }
                Bandwidth.prototype.reset = function()
                {
                    this.bandwidthUsabilityPercent = Bandwidth._bandwidthUsabilityPercentDefault;
                    this.bandwidthDataSizeThresholdInBytes = Bandwidth._bandwidthDataSizeThresholdInBytesDefault;
                    this.maxBandwidthHistoryCount = Bandwidth._maxBandwidthHistoryCountDefault
                };
                Bandwidth._bandwidthUsabilityPercentDefault = 0.85;
                Bandwidth._bandwidthDataSizeThresholdInBytesDefault = 10000;
                Bandwidth._maxBandwidthHistoryCountDefault = 5;
                return Bandwidth
            })();
        Settings.Bandwidth = Bandwidth;
        var StepRule = (function()
            {
                function StepRule()
                {
                    this.minSegmentsBeforeDowngrade = StepRule._minSegmentsBeforeDowngradeDefault;
                    this.minSegmentsBeforeUpgrade = StepRule._minSegmentsBeforeUpgradeDefault;
                    this.maxStepDownInQuality = StepRule._maxStepDownInQualityDefault;
                    this.maxStepUpInQuality = StepRule._maxStepUpInQualityDefault
                }
                StepRule.prototype.reset = function()
                {
                    this.minSegmentsBeforeDowngrade = StepRule._minSegmentsBeforeDowngradeDefault;
                    this.minSegmentsBeforeUpgrade = StepRule._minSegmentsBeforeUpgradeDefault;
                    this.maxStepDownInQuality = StepRule._maxStepDownInQualityDefault;
                    this.maxStepUpInQuality = StepRule._maxStepUpInQualityDefault
                };
                StepRule._minSegmentsBeforeDowngradeDefault = 0;
                StepRule._minSegmentsBeforeUpgradeDefault = 2;
                StepRule._maxStepDownInQualityDefault = 10;
                StepRule._maxStepUpInQualityDefault = 3;
                return StepRule
            })();
        Settings.StepRule = StepRule;
        var Buffer = (function()
            {
                function Buffer()
                {
                    this.maxBufferInSec = Buffer._maxBufferInSecDefault;
                    this.prerollPercent = Buffer._prerollPercentDefault;
                    this.livePlaybackOffsetPercent = Buffer._livePlaybackOffsetPercentDefault;
                    this.lowBufferPercent = Buffer._lowBufferPercentDefault
                }
                Buffer.prototype.reset = function()
                {
                    this.maxBufferInSec = Buffer._maxBufferInSecDefault;
                    this.prerollPercent = Buffer._prerollPercentDefault;
                    this.lowBufferPercent = Buffer._lowBufferPercentDefault;
                    this.livePlaybackOffsetPercent = Buffer._livePlaybackOffsetPercentDefault
                };
                Buffer._maxBufferInSecDefault = 30;
                Buffer._prerollPercentDefault = .25;
                Buffer._lowBufferPercentDefault = .25;
                Buffer._livePlaybackOffsetPercentDefault = .25;
                return Buffer
            })();
        Settings.Buffer = Buffer;
        var HttpRetryPolicy = (function()
            {
                function HttpRetryPolicy()
                {
                    this.maxTotalRetries = HttpRetryPolicy._maxTotalRetriesDefault;
                    this.maxRetryPerSegment = HttpRetryPolicy._maxRetryPerSegmentDefault;
                    this.maxSkipSegments = HttpRetryPolicy._maxSkipSegmentsDefault;
                    this.retryLowerBitrateOnly = false
                }
                HttpRetryPolicy._maxTotalRetriesDefault = 50;
                HttpRetryPolicy._maxRetryPerSegmentDefault = 10;
                HttpRetryPolicy._maxSkipSegmentsDefault = 0;
                return HttpRetryPolicy
            })();
        Settings.HttpRetryPolicy = HttpRetryPolicy;
        var HttpDataRetriever = (function()
            {
                function HttpDataRetriever()
                {
                    this.timeoutInMSec = HttpDataRetriever._timoutInMSecDefault
                }
                HttpDataRetriever._timoutInMSecDefault = 5000;
                return HttpDataRetriever
            })();
        Settings.HttpDataRetriever = HttpDataRetriever
    })(OnePlayer.Settings || (OnePlayer.Settings = {}));
    var Settings = OnePlayer.Settings
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(_VideoElementAdapter)
    {
        "use strict";
        function CreateAdapter()
        {
            return new VideoElementAdapter
        }
        _VideoElementAdapter.CreateAdapter = CreateAdapter;
        function supported(mediaType)
        {
            var mse = null;
            if (window.hasOwnProperty('MediaSource') || window.hasOwnProperty('WebKitMediaSource'))
            {
                mse = window["MediaSource"] || window["WebKitMediaSource"]
            }
            else
            {
                return false
            }
            return mse && mse.isTypeSupported && mse.isTypeSupported(mediaType)
        }
        _VideoElementAdapter.supported = supported;
        var _ReadyStateMap = {
                closed: 0, open: 1, ended: 2
            };
        var StartTimeInfo = (function()
            {
                function StartTimeInfo(idx, start, end)
                {
                    this.bufferIndex = idx;
                    this.startTime = start;
                    this.endTime = end
                }
                return StartTimeInfo
            })();
        var VideoElementAdapter = (function()
            {
                function VideoElementAdapter()
                {
                    this._mediaSource = new MediaSource;
                    this._adapterSourceBuffers = new AdapterSourceBuffers;
                    this._disposed = false;
                    this._videoTag = null;
                    this._buffered = null
                }
                VideoElementAdapter.prototype.dispose = function()
                {
                    if (!this._disposed)
                    {
                        this._mediaSource = null;
                        this._adapterSourceBuffers.dispose();
                        this._adapterSourceBuffers = null;
                        if (this._videoTag)
                        {
                            this._videoTag.src = null;
                            this._videoTag = null
                        }
                        this._disposed = true
                    }
                };
                Object.defineProperty(VideoElementAdapter.prototype, "readyState", {
                    get: function()
                    {
                        if (this._disposed)
                        {
                            return 0
                        }
                        return _ReadyStateMap[this._mediaSource.readyState]
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(VideoElementAdapter.prototype, "durationInSec", {
                    get: function()
                    {
                        if (this._disposed)
                        {
                            return NaN
                        }
                        return this._mediaSource.duration
                    }, set: function(duration)
                        {
                            if (this._disposed)
                            {
                                return
                            }
                            this._mediaSource.duration = duration
                        }, enumerable: true, configurable: true
                });
                Object.defineProperty(VideoElementAdapter.prototype, "adapterBuffers", {
                    get: function()
                    {
                        if (this._disposed)
                        {
                            return null
                        }
                        return this._adapterSourceBuffers.adapterBuffers
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(VideoElementAdapter.prototype, "buffered", {
                    get: function()
                    {
                        return this._buffered
                    }, enumerable: true, configurable: true
                });
                VideoElementAdapter.prototype.setVideoElementSrcAsync = function(videoElement)
                {
                    var _this = this;
                    this._videoTag = videoElement;
                    return new Promise(function(resolve, reject)
                        {
                            if (_this._disposed)
                            {
                                reject("VideoElementAdapter already disposed");
                                return
                            }
                            _this._mediaSource.addEventListener("sourceopen", function()
                            {
                                if (_this._disposed)
                                {
                                    reject("VideoElementAdapter already disposed");
                                    return
                                }
                                resolve()
                            });
                            videoElement.src = URL.createObjectURL(_this._mediaSource)
                        })
                };
                VideoElementAdapter.prototype.setStartTime = function(time)
                {
                    var that = this;
                    setStartTimeInternal();
                    function setStartTimeInternal()
                    {
                        if (that._disposed || !that._videoTag || that._videoTag.currentTime !== 0)
                        {
                            return
                        }
                        if (that._videoTag.readyState !== HTMLMediaElement.HAVE_NOTHING)
                        {
                            that._videoTag.currentTime = time;
                            OnePlayer.Log.verbose(3, "StartTime set: " + time)
                        }
                        else
                        {
                            OnePlayer.Log.verbose(3, "Video tag not ready, will retry to set StartTime to " + time);
                            setTimeout(setStartTimeInternal, VideoElementAdapter._setCurrentTimeTimeoutInMSec)
                        }
                    }
                };
                VideoElementAdapter.prototype.addAdapterBuffer = function(mediaType, maxBufferInSec)
                {
                    if (this._disposed)
                    {
                        return null
                    }
                    var that = this;
                    var sourceBuffer;
                    var adapterBuffer = null;
                    function updateBuffered()
                    {
                        that._updateBuffered()
                    }
                    try
                    {
                        sourceBuffer = this._mediaSource.addSourceBuffer(mediaType);
                        adapterBuffer = new _VideoElementAdapter.VideoElementAdapterBuffer(maxBufferInSec, this._videoTag, sourceBuffer, updateBuffered);
                        this._adapterSourceBuffers.add(adapterBuffer, sourceBuffer);
                        OnePlayer.Log.verbose(3, "Adapter buffer added: " + mediaType + " Adapter buffer total: " + this._adapterSourceBuffers.length)
                    }
                    catch(ex)
                    {
                        OnePlayer.Log.error(3, "Failed to add SourceBuffer to MediaSource: " + ex)
                    }
                    return adapterBuffer
                };
                VideoElementAdapter.prototype.removeAdapterBuffer = function(adapterBuffer)
                {
                    if (this._disposed)
                    {
                        return
                    }
                    var idx;
                    idx = this._adapterSourceBuffers.find(adapterBuffer);
                    if (-1 !== idx)
                    {
                        this._mediaSource.removeSourceBuffer(this._adapterSourceBuffers.sourceBuffers[idx]);
                        this._adapterSourceBuffers.remove(idx);
                        OnePlayer.Log.verbose(3, "Adapter buffer removed, remaining: " + this._adapterSourceBuffers.length)
                    }
                    else
                    {
                        OnePlayer.Log.error(3, "Failed to remove adapter buffer: instance not found")
                    }
                };
                VideoElementAdapter.prototype.endOfStream = function(error)
                {
                    if (this._disposed)
                    {
                        return
                    }
                    if (error)
                    {
                        this._mediaSource.endOfStream(error)
                    }
                    else
                    {
                        this._mediaSource.endOfStream()
                    }
                    OnePlayer.Log.verbose(3, "End of stream signaled")
                };
                VideoElementAdapter.prototype._updateBuffered = function()
                {
                    if (this._disposed)
                    {
                        return
                    }
                    var buffers = this._adapterSourceBuffers.adapterBuffers;
                    var intersectingTimeRanges = new OnePlayer.Common.TimeRangeSet;
                    var uniqueStartTimes = this._findUniqueStartTimes();
                    for (var i = 0; i < uniqueStartTimes.length; i++)
                    {
                        var startTime = uniqueStartTimes[i].startTime;
                        var minEndTime = uniqueStartTimes[i].endTime;
                        var intersectionFound = true;
                        for (var j = 0; j < buffers.length; j++)
                        {
                            var timeRanges = buffers[j].buffered;
                            if (j === uniqueStartTimes[i].bufferIndex)
                            {
                                continue
                            }
                            var startTimeFound = false;
                            for (var k = 0; k < timeRanges.length; k++)
                            {
                                if (timeRanges.start(k) <= startTime && startTime <= timeRanges.end(k))
                                {
                                    startTimeFound = true;
                                    if (timeRanges.end(k) < minEndTime)
                                    {
                                        minEndTime = timeRanges.end(k)
                                    }
                                    break
                                }
                            }
                            if (!startTimeFound)
                            {
                                intersectionFound = false;
                                break
                            }
                        }
                        if (intersectionFound)
                        {
                            OnePlayer.Log.verbose(3, "Intersecting buffer found (" + uniqueStartTimes[i].startTime + ", " + minEndTime + ")");
                            intersectingTimeRanges.addRange(new OnePlayer.Common.TimeRange(uniqueStartTimes[i].startTime, minEndTime))
                        }
                    }
                    this._buffered = intersectingTimeRanges
                };
                VideoElementAdapter.prototype._findUniqueStartTimes = function()
                {
                    var startTimes = [];
                    var buffers = this._adapterSourceBuffers.adapterBuffers;
                    for (var i = 0; i < buffers.length; i++)
                    {
                        var ranges = buffers[i].buffered;
                        for (var j = 0; j < ranges.length; j++)
                        {
                            if (-1 === startTimes.findIndexOf(function(l)
                            {
                                return l.startTime === ranges.start(j)
                            }))
                            {
                                startTimes.push(new StartTimeInfo(i, ranges.start(j), ranges.end(j)))
                            }
                        }
                    }
                    startTimes.sort(function(a, b)
                    {
                        return a.startTime - b.startTime
                    });
                    return startTimes
                };
                VideoElementAdapter._setCurrentTimeTimeoutInMSec = 500;
                return VideoElementAdapter
            })();
        var AdapterSourceBuffers = (function()
            {
                function AdapterSourceBuffers()
                {
                    this.adapterBuffers = [];
                    this.sourceBuffers = []
                }
                AdapterSourceBuffers.prototype.dispose = function()
                {
                    for (var i = this.adapterBuffers.length - 1; i >= 0; i--)
                    {
                        this.adapterBuffers[i].dispose();
                        this.adapterBuffers[i] = null
                    }
                    for (var i = this.sourceBuffers.length - 1; i >= 0; i--)
                    {
                        this.sourceBuffers[i] = null
                    }
                };
                Object.defineProperty(AdapterSourceBuffers.prototype, "length", {
                    get: function()
                    {
                        if (this.sourceBuffers.length !== this.adapterBuffers.length)
                        {
                            throw new Error("AdapterSourceBuffers in invalid state");
                        }
                        return this.sourceBuffers.length
                    }, enumerable: true, configurable: true
                });
                AdapterSourceBuffers.prototype.find = function(adapterBuffer)
                {
                    return this.adapterBuffers.indexOf(adapterBuffer)
                };
                AdapterSourceBuffers.prototype.add = function(adapterBuffer, sourceBuffer)
                {
                    this.adapterBuffers.push(adapterBuffer);
                    this.sourceBuffers.push(sourceBuffer)
                };
                AdapterSourceBuffers.prototype.remove = function(idx)
                {
                    if (idx >= 0 && idx < this.sourceBuffers.length)
                    {
                        this.sourceBuffers.splice(idx, 1);
                        this.adapterBuffers.splice(idx, 1)
                    }
                };
                return AdapterSourceBuffers
            })()
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(VideoElementAdapter)
    {
        "use strict";
        var VideoElementAdapterBuffer = (function()
            {
                function VideoElementAdapterBuffer(maxAdapterBufferInSec, videoTag, sourceBuffer, notifyBufferUpdated)
                {
                    var that = this;
                    this._pendingBufferRanges = new OnePlayer.Common.TimeRangeSet;
                    this._sourceBuffer = sourceBuffer;
                    this._maxAdapterBufferInSec = maxAdapterBufferInSec;
                    this._videoTag = videoTag;
                    this._notifyBufferUpdated = notifyBufferUpdated;
                    this._pendingBuffer = [];
                    this._pendingRemove = [];
                    this._sourceBuffer.addEventListener("update", _sourceBufferUpdated);
                    this._sourceBuffer.addEventListener("error", _sourceBufferError);
                    function _sourceBufferUpdated()
                    {
                        OnePlayer.Log.verbose(3, "SourceBuffer 'update' event completed.");
                        _sourceBufferContinue()
                    }
                    function _sourceBufferError()
                    {
                        OnePlayer.Log.error(3, "SourceBuffer append failed with 'error' event.");
                        _sourceBufferContinue()
                    }
                    function _sourceBufferContinue()
                    {
                        that._notifyBufferUpdated();
                        that._tryInternalRemove();
                        that._tryInternalAppend()
                    }
                }
                Object.defineProperty(VideoElementAdapterBuffer.prototype, "buffered", {
                    get: function()
                    {
                        var totalRanges = new OnePlayer.Common.TimeRangeSet,
                            range,
                            lastEnd;
                        totalRanges.addRanges(this._sourceBuffer.buffered);
                        lastEnd = (totalRanges.length > 0) ? totalRanges.end(totalRanges.length - 1) : NaN;
                        for (var i = 0; i < this._pendingBufferRanges.length; i++)
                        {
                            var startInSec = this._pendingBufferRanges.start(i),
                                endInSec = this._pendingBufferRanges.end(i);
                            if (OnePlayer.Common.diffTimes(startInSec, lastEnd) === 0)
                            {
                                totalRanges.extendLast(endInSec)
                            }
                            else
                            {
                                range = new OnePlayer.Common.TimeRange(startInSec, endInSec);
                                totalRanges.addRange(range)
                            }
                            lastEnd = endInSec
                        }
                        return totalRanges
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(VideoElementAdapterBuffer.prototype, "presentationTimeOffsetInSec", {
                    get: function()
                    {
                        return this._sourceBuffer.timestampOffset
                    }, set: function(value)
                        {
                            this._sourceBuffer.timestampOffset = value
                        }, enumerable: true, configurable: true
                });
                Object.defineProperty(VideoElementAdapterBuffer.prototype, "audioTracks", {
                    get: function()
                    {
                        return this._sourceBuffer.audioTracks
                    }, enumerable: true, configurable: true
                });
                VideoElementAdapterBuffer.prototype.getBufferedAheadOfCurrentTimeInSec = function()
                {
                    var buffered = this.buffered,
                        currentTime = this._videoTag.currentTime;
                    for (var i = 0; i < buffered.length; i++)
                    {
                        if (buffered.start(i) <= currentTime && currentTime <= buffered.end(i))
                        {
                            return (buffered.end(i) - currentTime)
                        }
                    }
                    return -1
                };
                VideoElementAdapterBuffer.prototype.bufferFull = function()
                {
                    return (this.getBufferedAheadOfCurrentTimeInSec() > this._maxAdapterBufferInSec)
                };
                VideoElementAdapterBuffer.prototype.dispose = function()
                {
                    for (var i = this._pendingBuffer.length - 1; i >= 0; i--)
                    {
                        this._pendingBuffer[i] = null
                    }
                    this._sourceBuffer = null;
                    for (var i = this._pendingRemove.length - 1; i >= 0; i--)
                    {
                        this._pendingRemove[i] = null
                    }
                    if (this._pendingBufferRanges)
                    {
                        this._pendingBufferRanges.dispose();
                        this._pendingBufferRanges = null
                    }
                };
                VideoElementAdapterBuffer.prototype.append = function(data, presTimeInSec, durationInSec)
                {
                    var segment,
                        leftBuffer,
                        rightBuffer,
                        idx;
                    for (idx = 0; idx < this._pendingBuffer.length; idx++)
                    {
                        if (presTimeInSec < this._pendingBuffer[idx].presTimeInSec)
                        {
                            break
                        }
                    }
                    if (idx > 0)
                    {
                        leftBuffer = this._pendingBuffer[idx - 1];
                        var diff = OnePlayer.Common.diffTimes(presTimeInSec, leftBuffer.presTimeInSec + leftBuffer.durationInSec);
                        if (diff > 0)
                        {
                            throw new Error("append (" + presTimeInSec + "," + durationInSec + ") failed, " + "overlaps with (" + leftBuffer.presTimeInSec + "," + leftBuffer.durationInSec + ")");
                        }
                    }
                    if (idx < this._pendingBuffer.length)
                    {
                        rightBuffer = this._pendingBuffer[idx];
                        var diff = OnePlayer.Common.diffTimes(rightBuffer.presTimeInSec, presTimeInSec + durationInSec);
                        if (diff > 0)
                        {
                            throw new Error("append (" + presTimeInSec + "," + durationInSec + ") failed, " + "overlaps with (" + rightBuffer.presTimeInSec + "," + rightBuffer.durationInSec + ")");
                        }
                    }
                    segment = new OnePlayer.Common.SegmentData(data, presTimeInSec, durationInSec);
                    this._pendingBuffer.splice(idx, 0, segment);
                    this._updatePendingRanges();
                    OnePlayer.Log.verbose(3, "Appending segment: " + presTimeInSec + " sec " + data.byteLength + " bytes");
                    this._tryInternalAppend();
                    this._notifyBufferUpdated()
                };
                VideoElementAdapterBuffer.prototype.remove = function(startTimestampInSec, endTimestampInSec)
                {
                    var range;
                    range = new OnePlayer.Common.TimeRange(startTimestampInSec, endTimestampInSec);
                    this._pendingRemove.push(range);
                    OnePlayer.Log.verbose(3, "Added to remove pending list [" + startTimestampInSec + "," + endTimestampInSec + ")");
                    this._tryInternalRemove()
                };
                VideoElementAdapterBuffer.prototype.flush = function()
                {
                    var buffered = this._sourceBuffer.buffered;
                    if (this._sourceBuffer.updating)
                    {
                        this._sourceBuffer.abort()
                    }
                    var startTime = 0;
                    var endTime = 0;
                    if (buffered.length > 0)
                    {
                        startTime = buffered.start(0)
                    }
                    if (this._pendingBuffer.length > 0)
                    {
                        startTime = Math.min(startTime, this._pendingBuffer[0].presTimeInSec)
                    }
                    if (this._pendingBuffer.length > 0)
                    {
                        var lastBuffer = this._pendingBuffer[this._pendingBuffer.length - 1];
                        endTime = lastBuffer.presTimeInSec + lastBuffer.durationInSec
                    }
                    if (buffered.length > 0)
                    {
                        endTime = Math.max(endTime, buffered.end(buffered.length - 1))
                    }
                    if (endTime > startTime)
                    {
                        this.remove(startTime, endTime)
                    }
                    else if (0 !== startTime || 0 !== endTime)
                    {
                        throw new Error("flush failed, endTime (" + endTime + ") not greater than startime (" + startTime + ")");
                    }
                };
                VideoElementAdapterBuffer.prototype._tryInternalAppend = function()
                {
                    if (this._pendingBuffer && this._sourceBuffer && 0 !== this._pendingBuffer.length && !this._sourceBuffer.updating)
                    {
                        try
                        {
                            this._sourceBuffer.appendBuffer(this._pendingBuffer[0].data);
                            OnePlayer.Log.verbose(3, "Appended segment to SourceBuffer: " + this._pendingBuffer[0].presTimeInSec + " sec " + this._pendingBuffer[0].data.byteLength + " bytes");
                            this._pendingBuffer.splice(0, 1);
                            this._updatePendingRanges()
                        }
                        catch(ex)
                        {
                            switch (ex.code)
                            {
                                case DOMException.INVALID_STATE_ERR:
                                case DOMException.QUOTA_EXCEEDED_ERR:
                                    OnePlayer.Log.error(3, "Failed to append segment to SourceBuffer, will retry: " + ex);
                                    break;
                                default:
                                    OnePlayer.Log.error(3, "Failed to append segment to SourceBuffer: " + ex);
                                    throw ex;
                            }
                        }
                    }
                };
                VideoElementAdapterBuffer.prototype._tryInternalRemove = function()
                {
                    if (!this._pendingBuffer || !this._sourceBuffer || !this._pendingRemove)
                    {
                        return
                    }
                    while (0 !== this._pendingRemove.length && !this._sourceBuffer.updating)
                    {
                        var range;
                        range = this._pendingRemove[0];
                        for (var i = this._pendingBuffer.length - 1; i >= 0; i--)
                        {
                            var segment,
                                segmentStart,
                                segmentDuration;
                            segment = this._pendingBuffer[i];
                            segmentStart = segment.presTimeInSec;
                            segmentDuration = segment.durationInSec;
                            if (segmentStart >= range.startInSec && segmentStart < range.endInSec)
                            {
                                if (segmentStart + segmentDuration <= range.endInSec)
                                {
                                    this._pendingBuffer.splice(i, 1);
                                    this._updatePendingRanges();
                                    this._notifyBufferUpdated();
                                    OnePlayer.Log.verbose(3, "Segment removed: " + range.startInSec)
                                }
                                else
                                {
                                    throw new Error("Failed to remove pending segment, range ends mid-segment");
                                }
                            }
                        }
                        try
                        {
                            this._sourceBuffer.remove(range.startInSec, range.endInSec);
                            this._pendingRemove.splice(0, 1);
                            OnePlayer.Log.verbose(3, "Removing range from SourceBuffer: [" + range.startInSec + "," + range.endInSec + ")")
                        }
                        catch(ex)
                        {
                            switch (ex.code)
                            {
                                case DOMException.INVALID_ACCESS_ERR:
                                case DOMException.INVALID_STATE_ERR:
                                    OnePlayer.Log.error(3, "Failed to remove segment from SourceBuffer, will retry: " + ex);
                                    break;
                                default:
                                    OnePlayer.Log.error(3, "Failed to remove segment from SourceBuffer: " + ex);
                                    throw ex;
                            }
                        }
                    }
                };
                VideoElementAdapterBuffer.prototype._updatePendingRanges = function()
                {
                    var _this = this;
                    var range,
                        lastEnd = NaN;
                    if (this._pendingBufferRanges)
                    {
                        this._pendingBufferRanges.dispose();
                        this._pendingBufferRanges = null
                    }
                    this._pendingBufferRanges = new OnePlayer.Common.TimeRangeSet;
                    this._pendingBuffer.forEach(function(segment)
                    {
                        if (OnePlayer.Common.diffTimes(segment.presTimeInSec, lastEnd) === 0)
                        {
                            _this._pendingBufferRanges.extendLast(segment.endTimestampInSec)
                        }
                        else
                        {
                            range = new OnePlayer.Common.TimeRange(segment.presTimeInSec, segment.endTimestampInSec);
                            _this._pendingBufferRanges.addRange(range)
                        }
                        lastEnd = segment.endTimestampInSec
                    })
                };
                return VideoElementAdapterBuffer
            })();
        VideoElementAdapter.VideoElementAdapterBuffer = VideoElementAdapterBuffer
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Workflow)
    {
        "use strict";
        function CreateCoordinator(sessionContext)
        {
            return new Coordinator(sessionContext)
        }
        Workflow.CreateCoordinator = CreateCoordinator;
        var Coordinator = (function()
            {
                function Coordinator(sessionContext)
                {
                    this._sessionContext = sessionContext;
                    this._workflowSeq = Workflow.CreateSequencer(this._sessionContext);
                    this._mediaSource = null;
                    this._pendingPresentation = new Date;
                    this._disposed = false;
                    this._pendingPlay = true;
                    this._pendingTryMediaRequestCount = 0;
                    this._prerollMet = false;
                    this._error = null
                }
                Coordinator.prototype.dispose = function()
                {
                    if (!this._disposed)
                    {
                        this._disposed = true;
                        this._sessionContext = null;
                        this._pendingPresentation = null;
                        if (this._mediaSource)
                        {
                            this._mediaSource.dispose();
                            this._mediaSource = null
                        }
                        if (this._workflowSeq)
                        {
                            this._workflowSeq.dispose();
                            this._workflowSeq = null
                        }
                    }
                };
                Object.defineProperty(Coordinator.prototype, "src", {
                    get: function()
                    {
                        return this._sessionContext.presentationUrl
                    }, set: function(url)
                        {
                            OnePlayer.Log.verbose(1, "src(" + url + ")");
                            var that = this;
                            this._sessionContext.presentationUrl = url;
                            this._presentationWorkflowAsync(_presentationWorkflowResolved, _presentationWorkflowRejected);
                            function _presentationWorkflowResolved(context)
                            {
                                var presentation = null;
                                OnePlayer.Log.verbose(1, "presentationWorkflowResolved");
                                if (that._disposed)
                                {
                                    return
                                }
                                if (null === context.sessionContext.commonPresentation)
                                {
                                    throw new Error("presentationWorkflowResolved: unexpected null values");
                                }
                                presentation = context.sessionContext.commonPresentation;
                                that._mediaSource = OnePlayer.VideoElementAdapter.CreateAdapter();
                                that._mediaSource.setVideoElementSrcAsync(context.sessionContext.videoTag).then(_setVideoElementSrcResolved, _setVideoElementSrcRejected).catch(function(err)
                                {
                                    that._sessionContext.eventMgr.dispatchEvent(OnePlayer.InternalEventName.exception, err)
                                });
                                function _setVideoElementSrcResolved()
                                {
                                    if (that._disposed)
                                    {
                                        return
                                    }
                                    presentation.periods[0].streams.forEach(function(stream)
                                    {
                                        if (stream.streamingInfo.selected)
                                        {
                                            stream.streamingInfo.sourceBuffer = that._mediaSource.addAdapterBuffer(stream.codec, context.sessionContext.maxBufferInSec());
                                            if (null == stream.streamingInfo.sourceBuffer)
                                            {
                                                throw new Error("presentationWorkflowResolved: Failed to create source buffer for stream " + OnePlayer.Presentation.StreamType[stream.type]);
                                            }
                                            stream.streamingInfo.sourceBuffer.presentationTimeOffsetInSec = stream.presentationTimeOffsetInSec
                                        }
                                    });
                                    that._updateLiveStartPosition();
                                    that._mediaSource.durationInSec = presentation.durationInSec;
                                    that._registerVideoTagEvents();
                                    that._checkMediaWorkflow();
                                    context.dispose()
                                }
                                function _setVideoElementSrcRejected(err)
                                {
                                    throw new Error(err);
                                }
                            }
                            function _presentationWorkflowRejected(context)
                            {
                                OnePlayer.Log.error(1, "presentationWorkflowRejected: " + context.currentModuleId);
                                if (that._disposed)
                                {
                                    return
                                }
                                if (context.externalFailure && OnePlayer.Failure.isExternalError(context.externalFailure.code))
                                {
                                    that._error = new OnePlayer.Failure.External;
                                    that._error.translateRecord(context.externalFailure);
                                    OnePlayer.Log.error(1, "Dispatching error: " + that.error.toString());
                                    context.sessionContext.eventMgr.dispatchEvent(OnePlayer.EventName.error)
                                }
                                context.dispose()
                            }
                        }, enumerable: true, configurable: true
                });
                Object.defineProperty(Coordinator.prototype, "currentTime", {
                    set: function(timeInSec)
                    {
                        OnePlayer.Log.verbose(1, "currentTime(" + timeInSec.toFixed(3) + ")");
                        var streams = this._sessionContext.commonPresentation.periods[0].streams;
                        var shouldCheckForPause = false;
                        this._sessionContext.videoTag.currentTime = timeInSec;
                        for (var idx = 0; idx < streams.length; idx++)
                        {
                            if (streams[idx].streamingInfo.selected)
                            {
                                if (-1 === streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec())
                                {
                                    streams[idx].streamingInfo.pendingSeekPositionInSec = timeInSec;
                                    streams[idx].streamingInfo.sourceBuffer.flush();
                                    shouldCheckForPause = true;
                                    if (2 === streams[idx].streamingInfo.workflowState)
                                    {
                                        streams[idx].streamingInfo.workflowState = 0
                                    }
                                }
                            }
                        }
                        this._checkMediaWorkflow();
                        if (!shouldCheckForPause && !this._buffersAbovePreroll() && !this._endOfSelectedStreams())
                        {
                            shouldCheckForPause = true
                        }
                        if (shouldCheckForPause)
                        {
                            if (!this._sessionContext.videoTag.paused)
                            {
                                this._pendingPlay = true;
                                this._sessionContext.videoTag.pause()
                            }
                        }
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Coordinator.prototype, "autoplay", {
                    set: function(value)
                    {
                        OnePlayer.Log.verbose(1, "autoplay(" + value + ")");
                        this._pendingPlay = value
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Coordinator.prototype, "buffered", {
                    get: function()
                    {
                        return (this._mediaSource) ? this._mediaSource.buffered : null
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Coordinator.prototype, "error", {
                    get: function()
                    {
                        return this._error
                    }, enumerable: true, configurable: true
                });
                Coordinator.prototype.play = function()
                {
                    OnePlayer.Log.verbose(1, "play()");
                    if (this._buffersAbovePreroll() || (this._endOfSelectedStreams()))
                    {
                        this._startPlayback()
                    }
                    else
                    {
                        this._pendingPlay = true
                    }
                };
                Coordinator.prototype.pause = function()
                {
                    OnePlayer.Log.verbose(1, "pause()");
                    if (this._pendingPlay)
                    {
                        this._pendingPlay = false
                    }
                    this._sessionContext.videoTag.pause()
                };
                Coordinator.prototype._presentationWorkflowAsync = function(resolvedFn, rejectedFn)
                {
                    var that = this;
                    setTimeout(_doPresentationWorkflowAsync, 0);
                    function _doPresentationWorkflowAsync()
                    {
                        if (that._disposed)
                        {
                            return
                        }
                        if (!that._sessionContext.commonPresentation || that._sessionContext.commonPresentation.isLive)
                        {
                            that._workflowSeq.presentationRequestAsync().then(_presentationRequestResolved, _presentationRequestRejected).catch(function(err)
                            {
                                that._sessionContext.eventMgr.dispatchEvent(OnePlayer.InternalEventName.exception, err)
                            })
                        }
                    }
                    function _presentationRequestResolved(context)
                    {
                        OnePlayer.Log.verbose(1, "presentationRequestResolved");
                        if (that._disposed)
                        {
                            return
                        }
                        if (null === context.sessionContext.commonPresentation)
                        {
                            throw new Error("presentationRequestResolved: unexpected null values");
                        }
                        var timeNow = new Date;
                        if (context.sessionContext.commonPresentation.isLive && that._pendingPresentation <= timeNow)
                        {
                            that._pendingPresentation.setTime(timeNow.getTime() + 2000);
                            setTimeout(_doPresentationWorkflowAsync, 2000)
                        }
                        if (resolvedFn)
                        {
                            resolvedFn(context);
                            resolvedFn = null
                        }
                    }
                    function _presentationRequestRejected(context)
                    {
                        OnePlayer.Log.error(1, "presentationRequestRejected: " + context.currentModuleId);
                        if (rejectedFn)
                        {
                            rejectedFn(context)
                        }
                    }
                };
                Coordinator.prototype._checkMediaWorkflow = function()
                {
                    var that = this,
                        sessionCtx = that._sessionContext;
                    this._pendingTryMediaRequestCount++;
                    setTimeout(_doCheckMediaWorkflow, 0);
                    function _doCheckMediaWorkflow()
                    {
                        OnePlayer.Log.verbose(1, "_doCheckMediaWorkflow");
                        var streamsToRemove = [];
                        that._pendingTryMediaRequestCount--;
                        if (that._disposed)
                        {
                            return
                        }
                        if (!sessionCtx.videoTag.paused && !that._endOfSelectedStreams() && that._buffersNearEmpty())
                        {
                            sessionCtx.eventMgr.dispatchEvent(OnePlayer.EventName.waiting);
                            that._pendingPlay = true;
                            sessionCtx.videoTag.pause()
                        }
                        else
                        {
                            if (that._buffersAbovePreroll())
                            {
                                if (!that._prerollMet)
                                {
                                    that._prerollMet = true;
                                    sessionCtx.eventMgr.dispatchEvent(OnePlayer.EventName.canplaythrough)
                                }
                                if (that._pendingPlay)
                                {
                                    that._startPlayback()
                                }
                            }
                        }
                        var needRetry = false;
                        for (var idx = 0; idx < sessionCtx.commonPresentation.periods[0].streams.length; idx++)
                        {
                            var stream = sessionCtx.commonPresentation.periods[0].streams[idx];
                            if (stream.streamingInfo.selected && 0 === stream.streamingInfo.workflowState)
                            {
                                if (!stream.streamingInfo.sourceBuffer.bufferFull())
                                {
                                    OnePlayer.Log.verbose(1, "starting media workflow " + OnePlayer.Presentation.StreamType[stream.type]);
                                    stream.streamingInfo.workflowState = 1;
                                    that._workflowSeq.mediaRequestAsync(stream).then(_mediaRequestResolved, _mediaRequestRejected).catch(function(err)
                                    {
                                        sessionCtx.eventMgr.dispatchEvent(OnePlayer.InternalEventName.exception, err)
                                    })
                                }
                                else
                                {
                                    needRetry = true
                                }
                            }
                        }
                        if (needRetry && 0 === that._pendingTryMediaRequestCount)
                        {
                            OnePlayer.Log.verbose(1, "_doCheckMediaWorkflow: schedule try again");
                            that._pendingTryMediaRequestCount++;
                            setTimeout(_doCheckMediaWorkflow, Coordinator._mediaSegmentTimeoutInMSec)
                        }
                    }
                    function _mediaRequestResolved(context)
                    {
                        var stream = context.requestedStream;
                        if (that._disposed)
                        {
                            return
                        }
                        stream.streamingInfo.workflowState = 0;
                        if (1 === context.state)
                        {
                            if (null === stream.streamingInfo.pendingSeekPositionInSec)
                            {
                                OnePlayer.Log.verbose(1, "mediaRequestResolved: " + OnePlayer.Presentation.StreamType[stream.type] + " end of stream");
                                stream.streamingInfo.workflowState = 2;
                                if (that._endOfSelectedStreams())
                                {
                                    OnePlayer.Log.verbose(1, "End of selected streams");
                                    that._mediaSource.endOfStream();
                                    if (that._pendingPlay)
                                    {
                                        that._startPlayback()
                                    }
                                }
                            }
                        }
                        for (var idx = 0; idx < context.urlsToRetrieve.length; idx++)
                        {
                            if (null === context.urlsToRetrieve[idx].mediaData)
                            {
                                throw new Error("mediaRequestResolved: data is null url: " + context.urlsToRetrieve[idx].url);
                            }
                            if (null === stream.streamingInfo.pendingSeekPositionInSec)
                            {
                                OnePlayer.Log.verbose(1, "mediaRequestResolved appending url: " + context.urlsToRetrieve[idx].url + "(" + context.urlsToRetrieve[idx].httpResposeContentType + ", " + context.urlsToRetrieve[idx].mediaData.byteLength + ")");
                                stream.streamingInfo.sourceBuffer.append(context.urlsToRetrieve[idx].mediaData, context.urlsToRetrieve[idx].presTimeInSec, context.urlsToRetrieve[idx].durationInSec)
                            }
                            else
                            {
                                OnePlayer.Log.verbose(1, "mediaRequestResolved discarding, seek in progress url: " + context.urlsToRetrieve[idx].url + "(" + context.urlsToRetrieve[idx].httpResposeContentType + ", " + context.urlsToRetrieve[idx].mediaData.byteLength + ")")
                            }
                        }
                        that._checkMediaWorkflow();
                        context.dispose()
                    }
                    function _mediaRequestRejected(context)
                    {
                        if (that._disposed)
                        {
                            return
                        }
                        OnePlayer.Log.error(1, "mediaRequestRejected: " + OnePlayer.Presentation.StreamType[context.requestedStream.type] + " module: " + context.currentModuleId);
                        if (context.externalFailure && OnePlayer.Failure.isExternalError(context.externalFailure.code))
                        {
                            that._error = new OnePlayer.Failure.External;
                            that._error.translateRecord(context.externalFailure);
                            OnePlayer.Log.error(1, "Dispatching error: " + that.error.toString());
                            sessionCtx.eventMgr.dispatchEvent(OnePlayer.EventName.error)
                        }
                        context.dispose()
                    }
                };
                Coordinator.prototype._updateLiveStartPosition = function()
                {
                    var sessionCtx = this._sessionContext,
                        presentation = sessionCtx.commonPresentation,
                        streams,
                        liveStartBuffer = sessionCtx.liveStartBufferInSec(),
                        sessionStartTime = Infinity;
                    if (!presentation || !presentation.isLive || !presentation.periods || presentation.periods.length < 1 || !presentation.periods[0].streams || !isNaN(sessionCtx.startPositionInSec))
                    {
                        return
                    }
                    streams = presentation.periods[0].streams;
                    streams.forEach(function(stream)
                    {
                        var lastSegmentInfo,
                            startTime;
                        lastSegmentInfo = stream.segments.last.segmentInfo;
                        startTime = Math.max(0, lastSegmentInfo.presTimeInSec + lastSegmentInfo.durationInSec - liveStartBuffer);
                        sessionStartTime = Math.min(startTime, sessionStartTime)
                    });
                    for (var i = 0; i < streams.length; i++)
                    {
                        if (sessionStartTime < streams[i].segments.first.segmentInfo.presTimeInSec)
                        {
                            sessionStartTime = Infinity;
                            break
                        }
                    }
                    if (isFinite(sessionStartTime))
                    {
                        this._mediaSource.setStartTime(sessionStartTime);
                        sessionCtx.startPositionInSec = sessionStartTime
                    }
                    else
                    {
                        OnePlayer.Log.warning(1, "Failed to set live start position")
                    }
                };
                Coordinator.prototype._endOfSelectedStreams = function()
                {
                    var streams = this._sessionContext.commonPresentation.periods[0].streams;
                    for (var i = 0; i < streams.length; i++)
                    {
                        if (streams[i].streamingInfo.selected && 2 !== streams[i].streamingInfo.workflowState)
                        {
                            return false
                        }
                    }
                    return true
                };
                Coordinator.prototype._buffersAbovePreroll = function()
                {
                    var ret = true;
                    var videoTag = this._sessionContext.videoTag;
                    var streams = this._sessionContext.commonPresentation.periods[0].streams;
                    if (videoTag.HAVE_ENOUGH_DATA !== videoTag.readyState)
                    {
                        ret = false
                    }
                    else
                    {
                        for (var idx = 0; idx < streams.length; idx++)
                        {
                            if (streams[idx].streamingInfo.selected && streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec() < this._sessionContext.prerollBufferInSec())
                            {
                                ret = false;
                                break
                            }
                        }
                    }
                    return ret
                };
                Coordinator.prototype._buffersNearEmpty = function()
                {
                    var streams = this._sessionContext.commonPresentation.periods[0].streams;
                    for (var idx = 0; idx < streams.length; idx++)
                    {
                        if (streams[idx].streamingInfo.selected && streams[idx].streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec() < this._sessionContext.lowBufferInSec())
                        {
                            return true
                        }
                    }
                    return false
                };
                Coordinator.prototype._startPlayback = function()
                {
                    this._pendingPlay = false;
                    this._sessionContext.videoTag.play()
                };
                Coordinator.prototype._registerVideoTagEvents = function()
                {
                    var that = this;
                    var videoTag = that._sessionContext.videoTag;
                    videoTag.addEventListener("canplaythrough", _canPlayThroughEvent);
                    function _canPlayThroughEvent(ev)
                    {
                        if (that._disposed)
                        {
                            return
                        }
                        if (that._pendingPlay && that._buffersAbovePreroll())
                        {
                            that._startPlayback()
                        }
                    }
                };
                Coordinator._mediaSegmentTimeoutInMSec = 2000;
                return Coordinator
            })()
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow
})(OnePlayer || (OnePlayer = {}));
var __extends = this.__extends || function(d, b)
    {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __()
        {
            this.constructor = d
        }
        __.prototype = b.prototype;
        d.prototype = new __
    };
var OnePlayer;
(function(OnePlayer)
{
    (function(Workflow)
    {
        "use strict";
        function CreatePresentation()
        {
            return new Presentation
        }
        Workflow.CreatePresentation = CreatePresentation;
        function CreateMedia()
        {
            return new Media
        }
        Workflow.CreateMedia = CreateMedia;
        var Base = (function()
            {
                function Base(eventsOrdered)
                {
                    this._eventManager = new OnePlayer.Events.Manager;
                    this._eventsOrdered = eventsOrdered;
                    this._stepList = []
                }
                Base.prototype.dispose = function()
                {
                    this._eventManager.dispose();
                    this._eventManager = null;
                    this._eventsOrdered = null;
                    this._stepList = null
                };
                Base.prototype.addHandler = function(event, handler, callerInstance)
                {
                    this._eventManager.addHandler(event, handler, callerInstance)
                };
                Base.prototype.createSteps = function()
                {
                    var _this = this;
                    var stepIdx = 0;
                    for (var evtIdx in this._eventsOrdered)
                    {
                        var handlers = this._eventManager.getHandlers(this._eventsOrdered[evtIdx]);
                        handlers.forEach(function(handler)
                        {
                            _this._stepList[stepIdx++] = handler
                        })
                    }
                };
                Object.defineProperty(Base.prototype, "stepList", {
                    get: function()
                    {
                        return this._stepList
                    }, enumerable: true, configurable: true
                });
                return Base
            })();
        var Presentation = (function(_super)
            {
                __extends(Presentation, _super);
                function Presentation()
                {
                    var eventsOrdered = [this.stepEvents.requestBegin, this.stepEvents.requestSend, this.stepEvents.dataRetrieved, this.stepEvents.requestEnd];
                    _super.call(this, eventsOrdered)
                }
                Object.defineProperty(Presentation.prototype, "stepEvents", {
                    get: function()
                    {
                        return {
                                requestBegin: "requestBegin", requestSend: "requestSend", dataRetrieved: "dataRetrieved", requestEnd: "requestEnd"
                            }
                    }, enumerable: true, configurable: true
                });
                return Presentation
            })(Base);
        var Media = (function(_super)
            {
                __extends(Media, _super);
                function Media()
                {
                    var eventsOrdered = [this.stepEvents.requestBegin, this.stepEvents.requestSend, this.stepEvents.dataRetrieved, this.stepEvents.requestEnd];
                    _super.call(this, eventsOrdered)
                }
                Object.defineProperty(Media.prototype, "stepEvents", {
                    get: function()
                    {
                        return {
                                requestBegin: "requestBegin", requestSend: "requestSend", dataRetrieved: "dataRetrieved", requestEnd: "requestEnd"
                            }
                    }, enumerable: true, configurable: true
                });
                return Media
            })(Base)
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Workflow)
    {
        "use strict";
        function CreateSequencer(sessionContext)
        {
            return new Sequencer(sessionContext)
        }
        Workflow.CreateSequencer = CreateSequencer;
        var Sequencer = (function()
            {
                function Sequencer(sessionContext)
                {
                    this._sessionContext = sessionContext;
                    this._orderedModules = [new OnePlayer.DataRetriever.HttpRetryPolicy, new OnePlayer.SegmentLocator.Dash, new OnePlayer.Heuristics.InitialBandwidthDataUrlFormatter, new OnePlayer.Heuristics.WindowSizeRule, new OnePlayer.Heuristics.StepRule, new OnePlayer.Heuristics.Engine, new OnePlayer.UrlBuilder.DashUrlFormatter, new OnePlayer.DataRetriever.HttpDataRetriever(sessionContext), new OnePlayer.DashPresentation.Parser, new OnePlayer.DashMediaSegment.Parser, new OnePlayer.Presentation.InitialStreamSelector];
                    this._createWorkflows(sessionContext)
                }
                Sequencer.prototype.dispose = function()
                {
                    this._orderedModules.forEach(function(seqModule)
                    {
                        seqModule.dispose()
                    });
                    this._orderedModules = null;
                    this._sessionContext = null
                };
                Sequencer.prototype.presentationRequestAsync = function()
                {
                    var _this = this;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            var reqContext = new OnePlayer.Context.Request(0, that._sessionContext);
                            reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(that._sessionContext.presentationUrl, 4));
                            _this._processSteps(reqContext, resolve, reject)
                        })
                };
                Sequencer.prototype.mediaRequestAsync = function(stream)
                {
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            var reqContext = new OnePlayer.Context.Request(1, that._sessionContext);
                            reqContext.requestedStream = stream;
                            reqContext.heuristicData = new OnePlayer.Context.HeuristicData(stream);
                            that._processSteps(reqContext, resolve, reject)
                        })
                };
                Sequencer.prototype._processSteps = function(reqContext, resolve, reject)
                {
                    if (reqContext.workflowType === 1)
                    {
                        OnePlayer.Log.verbose(0, "Starting process steps for " + OnePlayer.Presentation.StreamType[reqContext.requestedStream.type] + " media workflow")
                    }
                    else
                    {
                        OnePlayer.Log.verbose(0, "Starting process steps for presentation workflow")
                    }
                    var stepIdx = 0;
                    function processNext()
                    {
                        if (reqContext.disposed || reqContext.sessionContext.disposed)
                        {
                            reject();
                            return
                        }
                        if (stepIdx === reqContext.sessionContext.workflows[reqContext.workflowType].stepList.length)
                        {
                            if (reqContext.workflowType === 1)
                            {
                                OnePlayer.Log.verbose(0, "Finished process steps for " + OnePlayer.Presentation.StreamType[reqContext.requestedStream.type] + " media workflow")
                            }
                            else
                            {
                                OnePlayer.Log.verbose(0, "Finished process steps for presentation workflow")
                            }
                            resolve(reqContext);
                            return
                        }
                        var currentHandler = reqContext.sessionContext.workflows[reqContext.workflowType].stepList[stepIdx];
                        var promise = currentHandler.functionHandler.call(currentHandler.callerInstance, reqContext);
                        stepIdx++;
                        promise.then(stepResolved, stepRejected)
                    }
                    function stepResolved()
                    {
                        switch (reqContext.state)
                        {
                            case 0:
                                setTimeout(processNext, 0);
                                break;
                            case 2:
                                stepIdx = 0;
                                setTimeout(processNext, reqContext.retryWaitTimeMSec);
                                reqContext.reset();
                                break;
                            case 1:
                                resolve(reqContext);
                                break;
                            default:
                                throw new Error("processSteps unexpected state" + reqContext.state);
                                break
                        }
                    }
                    function stepRejected(err)
                    {
                        if (null === reqContext.externalFailure)
                        {
                            reqContext.sessionContext.eventMgr.dispatchEvent(OnePlayer.InternalEventName.exception, err);
                            return
                        }
                        var logMsg = "stepRejected: " + reqContext.externalFailure.toString();
                        if (err)
                        {
                            logMsg += err
                        }
                        OnePlayer.Log.error(0, logMsg);
                        reject(reqContext)
                    }
                    setTimeout(processNext, 0)
                };
                Sequencer.prototype._createWorkflows = function(sessionContext)
                {
                    sessionContext.workflows = [Workflow.CreatePresentation(), Workflow.CreateMedia()];
                    this._orderedModules.forEach(function(orderedModule)
                    {
                        orderedModule.init(sessionContext)
                    });
                    this._sessionContext.workflows.forEach(function(workflow)
                    {
                        workflow.createSteps()
                    })
                };
                return Sequencer
            })()
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    "use strict";
    var EventName = (function()
        {
            function EventName(){}
            EventName.volumechange = "volumechange";
            EventName.ended = "ended";
            EventName.timeupdate = "timeupdate";
            EventName.pause = "pause";
            EventName.play = "play";
            EventName.playing = "playing";
            EventName.seeking = "seeking";
            EventName.seeked = "seeked";
            EventName.loadstart = "loadstart";
            EventName.loadeddata = "loadeddata";
            EventName.fullscreenchange = "fullscreenchange";
            EventName.waiting = "waiting";
            EventName.canplaythrough = "canplaythrough";
            EventName.error = "error";
            return EventName
        })();
    OnePlayer.EventName = EventName;
    (function(ExtendedCode)
    {
        ExtendedCode[ExtendedCode["abortedErrStart"] = 0x81000100] = "abortedErrStart";
        ExtendedCode[ExtendedCode["abortedErrUnknown"] = 0x81000100] = "abortedErrUnknown";
        ExtendedCode[ExtendedCode["abortedErrNotImplemented"] = 0x81000101] = "abortedErrNotImplemented";
        ExtendedCode[ExtendedCode["abortedErrEnd"] = 0x810001FF] = "abortedErrEnd";
        ExtendedCode[ExtendedCode["decodeErrStart"] = 0x81000200] = "decodeErrStart";
        ExtendedCode[ExtendedCode["decodeErrEnd"] = 0x810002FF] = "decodeErrEnd";
        ExtendedCode[ExtendedCode["srcErrStart"] = 0x81000300] = "srcErrStart";
        ExtendedCode[ExtendedCode["srcErrParsePresentation"] = 0x81000300] = "srcErrParsePresentation";
        ExtendedCode[ExtendedCode["srcErrParseSegment"] = 0x81000301] = "srcErrParseSegment";
        ExtendedCode[ExtendedCode["srcErrUnsupportedPresentation"] = 0x81000302] = "srcErrUnsupportedPresentation";
        ExtendedCode[ExtendedCode["srcErrUnsupportedSegment"] = 0x81000303] = "srcErrUnsupportedSegment";
        ExtendedCode[ExtendedCode["srcErrInvalidPresentation"] = 0x81000304] = "srcErrInvalidPresentation";
        ExtendedCode[ExtendedCode["srcErrInvalidSegment"] = 0x81000305] = "srcErrInvalidSegment";
        ExtendedCode[ExtendedCode["srcErrEnd"] = 0x810003FF] = "srcErrEnd";
        ExtendedCode[ExtendedCode["networkErrStart"] = 0x81000400] = "networkErrStart";
        ExtendedCode[ExtendedCode["networkErrHttpBadUrlFormat"] = 0x81000400] = "networkErrHttpBadUrlFormat";
        ExtendedCode[ExtendedCode["networkErrHttpUserAuthRequired"] = 0x81000401] = "networkErrHttpUserAuthRequired";
        ExtendedCode[ExtendedCode["networkErrHttpUserForbidden"] = 0x81000402] = "networkErrHttpUserForbidden";
        ExtendedCode[ExtendedCode["networkErrHttpUrlNotFound"] = 0x81000403] = "networkErrHttpUrlNotFound";
        ExtendedCode[ExtendedCode["networkErrHttpInternalServerFailure"] = 0x81000404] = "networkErrHttpInternalServerFailure";
        ExtendedCode[ExtendedCode["networkErrHttpBadGateway"] = 0x81000405] = "networkErrHttpBadGateway";
        ExtendedCode[ExtendedCode["networkErrHttpServiceUnavailable"] = 0x81000406] = "networkErrHttpServiceUnavailable";
        ExtendedCode[ExtendedCode["networkErrHttpGatewayTimeout"] = 0x81000407] = "networkErrHttpGatewayTimeout";
        ExtendedCode[ExtendedCode["networkErrHttpUnknown"] = 0x810004C8] = "networkErrHttpUnknown";
        ExtendedCode[ExtendedCode["networkErrTimeout"] = 0x810004C9] = "networkErrTimeout";
        ExtendedCode[ExtendedCode["networkErrUnknown"] = 0x810004CA] = "networkErrUnknown";
        ExtendedCode[ExtendedCode["networkErrEnd"] = 0x810004FF] = "networkErrEnd"
    })(OnePlayer.ExtendedCode || (OnePlayer.ExtendedCode = {}));
    var ExtendedCode = OnePlayer.ExtendedCode
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Presentation)
    {
        "use strict";
        (function(StreamType)
        {
            StreamType[StreamType["video"] = 0] = "video";
            StreamType[StreamType["audio"] = 1] = "audio";
            StreamType[StreamType["text"] = 2] = "text"
        })(Presentation.StreamType || (Presentation.StreamType = {}));
        var StreamType = Presentation.StreamType
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(VideoElementAdapter)
    {
        "use strict";
        (function(ReadyState)
        {
            ReadyState[ReadyState["closed"] = 0] = "closed";
            ReadyState[ReadyState["open"] = 1] = "open";
            ReadyState[ReadyState["ended"] = 2] = "ended"
        })(VideoElementAdapter.ReadyState || (VideoElementAdapter.ReadyState = {}));
        var ReadyState = VideoElementAdapter.ReadyState;
        ;
    })(OnePlayer.VideoElementAdapter || (OnePlayer.VideoElementAdapter = {}));
    var VideoElementAdapter = OnePlayer.VideoElementAdapter
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Workflow)
    {
        "use strict";
        (function(Type)
        {
            Type[Type["presentation"] = 0] = "presentation";
            Type[Type["media"] = 1] = "media";
            Type[Type["max"] = 2] = "max"
        })(Workflow.Type || (Workflow.Type = {}));
        var Type = Workflow.Type;
        ;
    })(OnePlayer.Workflow || (OnePlayer.Workflow = {}));
    var Workflow = OnePlayer.Workflow
})(OnePlayer || (OnePlayer = {}));
Dash = (function()
{
    "use strict";
    return {
            modules: {}, dependencies: {}, vo: {}, di: {}
        }
}());
Dash.dependencies.DashParser = function()
{
    "use strict";
    var SECONDS_IN_YEAR = 365 * 24 * 60 * 60,
        SECONDS_IN_MONTH = 30 * 24 * 60 * 60,
        SECONDS_IN_DAY = 24 * 60 * 60,
        SECONDS_IN_HOUR = 60 * 60,
        SECONDS_IN_MIN = 60,
        MINUTES_IN_HOUR = 60,
        MILLISECONDS_IN_SECONDS = 1000,
        durationRegex = /^P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
        datetimeRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})([0-9]{2}))?/,
        numericRegex = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
        matchers = [{
                type: "duration", test: function(str)
                    {
                        return durationRegex.test(str)
                    }, converter: function(str)
                    {
                        var match = durationRegex.exec(str);
                        return (parseFloat(match[2] || 0) * SECONDS_IN_YEAR + parseFloat(match[4] || 0) * SECONDS_IN_MONTH + parseFloat(match[6] || 0) * SECONDS_IN_DAY + parseFloat(match[8] || 0) * SECONDS_IN_HOUR + parseFloat(match[10] || 0) * SECONDS_IN_MIN + parseFloat(match[12] || 0))
                    }
            }, {
                type: "datetime", test: function(str)
                    {
                        return datetimeRegex.test(str)
                    }, converter: function(str)
                    {
                        var match = datetimeRegex.exec(str),
                            utcDate;
                        utcDate = Date.UTC(parseInt(match[1], 10), parseInt(match[2], 10) - 1, parseInt(match[3], 10), parseInt(match[4], 10), parseInt(match[5], 10), (match[6] && parseInt(match[6], 10) || 0), (match[7] && parseFloat(match[7]) * MILLISECONDS_IN_SECONDS) || 0);
                        if (match[9] && match[10])
                        {
                            var timezoneOffset = parseInt(match[9], 10) * MINUTES_IN_HOUR + parseInt(match[10], 10);
                            utcDate += (match[8] === '+' ? -1 : +1) * timezoneOffset * SECONDS_IN_MIN * MILLISECONDS_IN_SECONDS
                        }
                        return new Date(utcDate)
                    }
            }, {
                type: "numeric", test: function(str)
                    {
                        return numericRegex.test(str)
                    }, converter: function(str)
                    {
                        return parseFloat(str)
                    }
            }],
        getCommonValuesMap = function()
        {
            var adaptationSet,
                representation,
                subRepresentation,
                common;
            common = [{
                    name: 'profiles', merge: false
                }, {
                    name: 'width', merge: false
                }, {
                    name: 'height', merge: false
                }, {
                    name: 'sar', merge: false
                }, {
                    name: 'frameRate', merge: false
                }, {
                    name: 'audioSamplingRate', merge: false
                }, {
                    name: 'mimeType', merge: false
                }, {
                    name: 'segmentProfiles', merge: false
                }, {
                    name: 'codecs', merge: false
                }, {
                    name: 'maximumSAPPeriod', merge: false
                }, {
                    name: 'startsWithSap', merge: false
                }, {
                    name: 'maxPlayoutRate', merge: false
                }, {
                    name: 'codingDependency', merge: false
                }, {
                    name: 'scanType', merge: false
                }, {
                    name: 'FramePacking', merge: true
                }, {
                    name: 'AudioChannelConfiguration', merge: true
                }, {
                    name: 'ContentProtection', merge: true
                }];
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
            return adaptationSet
        },
        getSegmentValuesMap = function()
        {
            var period,
                adaptationSet,
                representation,
                common;
            common = [{
                    name: 'SegmentBase', merge: true
                }, {
                    name: 'SegmentTemplate', merge: true
                }, {
                    name: 'SegmentList', merge: true
                }];
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
            return period
        },
        getBaseUrlValuesMap = function()
        {
            var mpd,
                period,
                adaptationSet,
                representation,
                common;
            common = [{
                    name: 'BaseURL', merge: true, mergeFunction: function(parentValue, childValue)
                        {
                            var mergedValue;
                            if (childValue.indexOf("http://") === 0)
                            {
                                mergedValue = childValue
                            }
                            else
                            {
                                mergedValue = parentValue + childValue
                            }
                            return mergedValue
                        }
                }];
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
            return mpd
        },
        getDashMap = function()
        {
            var result = [];
            result.push(getCommonValuesMap());
            result.push(getSegmentValuesMap());
            result.push(getBaseUrlValuesMap());
            return result
        },
        internalParse = function(data, baseUrl)
        {
            var manifest,
                converter = new X2JS(matchers, '', true),
                iron = new ObjectIron(getDashMap()),
                start = new Date,
                json = null,
                ironed = null;
            try
            {
                manifest = converter.xml_str2json(data);
                json = new Date;
                if (!manifest.hasOwnProperty("BaseURL"))
                {
                    manifest.BaseURL = baseUrl
                }
                else
                {
                    manifest.BaseURL = manifest.BaseURL_asArray[0];
                    if (manifest.BaseURL.toString().indexOf("http") !== 0)
                    {
                        manifest.BaseURL = baseUrl + manifest.BaseURL
                    }
                }
                iron.run(manifest);
                ironed = new Date;
                this.debug.log("Parsing complete: ( xml2json: " + (json.getTime() - start.getTime()) + "ms, objectiron: " + (ironed.getTime() - json.getTime()) + "ms, total: " + ((ironed.getTime() - start.getTime()) / 1000) + "s)")
            }
            catch(err)
            {
                this.errHandler.manifestError("parsing the manifest failed", "parse", data);
                return null
            }
            return manifest
        };
    return {
            debug: undefined, errHandler: undefined, parse: internalParse
        }
};
Dash.dependencies.DashParser.prototype = {constructor: Dash.dependencies.DashParser};
function ObjectIron(map)
{
    var lookup;
    lookup = [];
    for (i = 0, len = map.length; i < len; i += 1)
    {
        if (map[i].isRoot)
        {
            lookup.push("root")
        }
        else
        {
            lookup.push(map[i].name)
        }
    }
    var mergeValues = function(parentItem, childItem)
        {
            var name,
                parentValue,
                childValue;
            if (parentItem === null || childItem === null)
            {
                return
            }
            for (name in parentItem)
            {
                if (parentItem.hasOwnProperty(name))
                {
                    if (!childItem.hasOwnProperty(name))
                    {
                        childItem[name] = parentItem[name]
                    }
                }
            }
        },
        mapProperties = function(properties, parent, child)
        {
            var i,
                len,
                property,
                parentValue,
                childValue;
            if (properties === null || properties.length === 0)
            {
                return
            }
            for (i = 0, len = properties.length; i < len; i += 1)
            {
                property = properties[i];
                if (parent.hasOwnProperty(property.name))
                {
                    if (child.hasOwnProperty(property.name))
                    {
                        if (property.merge)
                        {
                            parentValue = parent[property.name];
                            childValue = child[property.name];
                            if (typeof parentValue === 'object' && typeof childValue === 'object')
                            {
                                mergeValues(parentValue, childValue)
                            }
                            else
                            {
                                if (property.mergeFunction != null)
                                {
                                    child[property.name] = property.mergeFunction(parentValue, childValue)
                                }
                                else
                                {
                                    child[property.name] = parentValue + childValue
                                }
                            }
                        }
                    }
                    else
                    {
                        child[property.name] = parent[property.name]
                    }
                }
            }
        },
        mapItem = function(obj, node)
        {
            var item = obj,
                i,
                len,
                v,
                len2,
                array,
                childItem,
                childNode,
                property;
            if (item.children === null || item.children.length === 0)
            {
                return
            }
            for (i = 0, len = item.children.length; i < len; i += 1)
            {
                childItem = item.children[i];
                if (node.hasOwnProperty(childItem.name))
                {
                    if (childItem.isArray)
                    {
                        array = node[childItem.name + "_asArray"];
                        for (v = 0, len2 = array.length; v < len2; v += 1)
                        {
                            childNode = array[v];
                            mapProperties(item.properties, node, childNode);
                            mapItem(childItem, childNode)
                        }
                    }
                    else
                    {
                        childNode = node[childItem.name];
                        mapProperties(item.properties, node, childNode);
                        mapItem(childItem, childNode)
                    }
                }
            }
        },
        performMapping = function(source)
        {
            var i,
                len,
                pi,
                pp,
                item,
                node,
                array;
            if (source === null)
            {
                return source
            }
            if (typeof source !== 'object')
            {
                return source
            }
            for (i = 0, len = lookup.length; i < len; i += 1)
            {
                if (lookup[i] === "root")
                {
                    item = map[i];
                    node = source;
                    mapItem(item, node)
                }
            }
            for (pp in source)
            {
                if (source.hasOwnProperty(pp))
                {
                    pi = lookup.indexOf(pp);
                    if (pi !== -1)
                    {
                        item = map[pi];
                        if (item.isArray)
                        {
                            array = source[pp + "_asArray"];
                            for (i = 0, len = array.length; i < len; i += 1)
                            {
                                node = array[i];
                                mapItem(item, node)
                            }
                        }
                        else
                        {
                            node = source[pp];
                            mapItem(item, node)
                        }
                    }
                    performMapping(source[pp])
                }
            }
            return source
        };
    return {run: performMapping}
}
;
!function()
{
    var a,
        b,
        c,
        d;
    !function()
    {
        var e = {},
            f = {};
        a = function(a, b, c)
        {
            e[a] = {
                deps: b, callback: c
            }
        },
        d = c = b = function(a)
        {
            function c(b)
            {
                if ("." !== b.charAt(0))
                    return b;
                for (var c = b.split("/"), d = a.split("/").slice(0, -1), e = 0, f = c.length; f > e; e++)
                {
                    var g = c[e];
                    if (".." === g)
                        d.pop();
                    else
                    {
                        if ("." === g)
                            continue;
                        d.push(g)
                    }
                }
                return d.join("/")
            }
            if (d._eak_seen = e, f[a])
                return f[a];
            if (f[a] = {}, !e[a])
                throw new Error("Could not find module " + a);
            for (var g, h = e[a], i = h.deps, j = h.callback, k = [], l = 0, m = i.length; m > l; l++)
                "exports" === i[l] ? k.push(g = {}) : k.push(b(c(i[l])));
            var n = j.apply(this, k);
            return f[a] = g || n
        }
    }(),
    a("promise/all", ["./utils", "exports"], function(a, b)
    {
        "use strict";
        function c(a)
        {
            var b = this;
            if (!d(a))
                throw new TypeError("You must pass an array to all.");
            return new b(function(b, c)
                {
                    function d(a)
                    {
                        return function(b)
                            {
                                f(a, b)
                            }
                    }
                    function f(a, c)
                    {
                        h[a] = c,
                        0 === --i && b(h)
                    }
                    var g,
                        h = [],
                        i = a.length;
                    0 === i && b([]);
                    for (var j = 0; j < a.length; j++)
                        g = a[j],
                        g && e(g.then) ? g.then(d(j), c) : f(j, g)
                })
        }
        var d = a.isArray,
            e = a.isFunction;
        b.all = c
    }),
    a("promise/asap", ["exports"], function(a)
    {
        "use strict";
        function b()
        {
            return function()
                {
                    process.nextTick(e)
                }
        }
        function c()
        {
            var a = 0,
                b = new i(e),
                c = document.createTextNode("");
            return b.observe(c, {characterData: !0}), function()
                {
                    c.data = a = ++a % 2
                }
        }
        function d()
        {
            return function()
                {
                    j.setTimeout(e, 1)
                }
        }
        function e()
        {
            for (var a = 0; a < k.length; a++)
            {
                var b = k[a],
                    c = b[0],
                    d = b[1];
                c(d)
            }
            k = []
        }
        function f(a, b)
        {
            var c = k.push([a, b]);
            1 === c && g()
        }
        var g,
            h = "undefined" != typeof window ? window : {},
            i = h.MutationObserver || h.WebKitMutationObserver,
            j = "undefined" != typeof global ? global : void 0 === this ? window : this,
            k = [];
        g = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? b() : i ? c() : d(),
        a.asap = f
    }),
    a("promise/config", ["exports"], function(a)
    {
        "use strict";
        function b(a, b)
        {
            return 2 !== arguments.length ? c[a] : (c[a] = b, void 0)
        }
        var c = {instrument: !1};
        a.config = c,
        a.configure = b
    }),
    a("promise/polyfill", ["./promise", "./utils", "exports"], function(a, b, c)
    {
        "use strict";
        function d()
        {
            var a;
            a = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
            var b = "Promise" in a && "resolve" in a.Promise && "reject" in a.Promise && "all" in a.Promise && "race" in a.Promise && function()
                {
                    var b;
                    return new a.Promise(function(a)
                        {
                            b = a
                        }), f(b)
                }();
            b || (a.Promise = e)
        }
        var e = a.Promise,
            f = b.isFunction;
        c.polyfill = d
    }),
    a("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(a, b, c, d, e, f, g, h)
    {
        "use strict";
        function i(a)
        {
            if (!v(a))
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof i))
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [],
            j(a, this)
        }
        function j(a, b)
        {
            function c(a)
            {
                o(b, a)
            }
            function d(a)
            {
                q(b, a)
            }
            try
            {
                a(c, d)
            }
            catch(e)
            {
                d(e)
            }
        }
        function k(a, b, c, d)
        {
            var e,
                f,
                g,
                h,
                i = v(c);
            if (i)
                try
                {
                    e = c(d),
                    g = !0
                }
                catch(j)
                {
                    h = !0,
                    f = j
                }
            else
                e = d,
                g = !0;
            n(b, e) || (i && g ? o(b, e) : h ? q(b, f) : a === D ? o(b, e) : a === E && q(b, e))
        }
        function l(a, b, c, d)
        {
            var e = a._subscribers,
                f = e.length;
            e[f] = b,
            e[f + D] = c,
            e[f + E] = d
        }
        function m(a, b)
        {
            for (var c, d, e = a._subscribers, f = a._detail, g = 0; g < e.length; g += 3)
                c = e[g],
                d = e[g + b],
                k(b, c, d, f);
            a._subscribers = null
        }
        function n(a, b)
        {
            var c,
                d = null;
            try
            {
                if (a === b)
                    throw new TypeError("A promises callback cannot return that same promise.");
                if (u(b) && (d = b.then, v(d)))
                    return d.call(b, function(d)
                        {
                            return c ? !0 : (c = !0, b !== d ? o(a, d) : p(a, d), void 0)
                        }, function(b)
                        {
                            return c ? !0 : (c = !0, q(a, b), void 0)
                        }), !0
            }
            catch(e)
            {
                return c ? !0 : (q(a, e), !0)
            }
            return !1
        }
        function o(a, b)
        {
            a === b ? p(a, b) : n(a, b) || p(a, b)
        }
        function p(a, b)
        {
            a._state === B && (a._state = C, a._detail = b, t.async(r, a))
        }
        function q(a, b)
        {
            a._state === B && (a._state = C, a._detail = b, t.async(s, a))
        }
        function r(a)
        {
            m(a, a._state = D)
        }
        function s(a)
        {
            m(a, a._state = E)
        }
        var t = a.config,
            u = (a.configure, b.objectOrFunction),
            v = b.isFunction,
            w = (b.now, c.all),
            x = d.race,
            y = e.resolve,
            z = f.reject,
            A = g.asap;
        t.async = A;
        var B = void 0,
            C = 0,
            D = 1,
            E = 2;
        i.prototype = {
            constructor: i, _state: void 0, _detail: void 0, _subscribers: void 0, then: function(a, b)
                {
                    var c = this,
                        d = new this.constructor(function(){});
                    if (this._state)
                    {
                        var e = arguments;
                        t.async(function()
                        {
                            k(c._state, d, e[c._state - 1], c._detail)
                        })
                    }
                    else
                        l(this, d, a, b);
                    return d
                }, "catch": function(a)
                {
                    return this.then(null, a)
                }
        },
        i.all = w,
        i.race = x,
        i.resolve = y,
        i.reject = z,
        h.Promise = i
    }),
    a("promise/race", ["./utils", "exports"], function(a, b)
    {
        "use strict";
        function c(a)
        {
            var b = this;
            if (!d(a))
                throw new TypeError("You must pass an array to race.");
            return new b(function(b, c)
                {
                    for (var d, e = 0; e < a.length; e++)
                        d = a[e],
                        d && "function" == typeof d.then ? d.then(b, c) : b(d)
                })
        }
        var d = a.isArray;
        b.race = c
    }),
    a("promise/reject", ["exports"], function(a)
    {
        "use strict";
        function b(a)
        {
            var b = this;
            return new b(function(b, c)
                {
                    c(a)
                })
        }
        a.reject = b
    }),
    a("promise/resolve", ["exports"], function(a)
    {
        "use strict";
        function b(a)
        {
            if (a && "object" == typeof a && a.constructor === this)
                return a;
            var b = this;
            return new b(function(b)
                {
                    b(a)
                })
        }
        a.resolve = b
    }),
    a("promise/utils", ["exports"], function(a)
    {
        "use strict";
        function b(a)
        {
            return c(a) || "object" == typeof a && null !== a
        }
        function c(a)
        {
            return "function" == typeof a
        }
        function d(a)
        {
            return "[object Array]" === Object.prototype.toString.call(a)
        }
        var e = Date.now || function()
            {
                return (new Date).getTime()
            };
        a.objectOrFunction = b,
        a.isFunction = c,
        a.isArray = d,
        a.now = e
    }),
    b("promise/polyfill").polyfill()
}();
function X2JS(matchers, attrPrefix, ignoreRoot)
{
    if (attrPrefix === null || attrPrefix === undefined)
    {
        attrPrefix = "_"
    }
    if (ignoreRoot === null || ignoreRoot === undefined)
    {
        ignoreRoot = false
    }
    var VERSION = "1.0.11";
    var escapeMode = false;
    var DOMNodeTypes = {
            ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9
        };
    function getNodeLocalName(node)
    {
        var nodeLocalName = node.localName;
        if (nodeLocalName == null)
            nodeLocalName = node.baseName;
        if (nodeLocalName == null || nodeLocalName == "")
            nodeLocalName = node.nodeName;
        return nodeLocalName
    }
    function getNodePrefix(node)
    {
        return node.prefix
    }
    function escapeXmlChars(str)
    {
        if (typeof(str) == "string")
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
        else
            return str
    }
    function unescapeXmlChars(str)
    {
        return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, '\/')
    }
    function parseDOMChildren(node)
    {
        if (node.nodeType == DOMNodeTypes.DOCUMENT_NODE)
        {
            var result,
                child = node.firstChild,
                i,
                len;
            for (i = 0, len = node.childNodes.length; i < len; i += 1)
            {
                if (node.childNodes[i].nodeType !== DOMNodeTypes.COMMENT_NODE)
                {
                    child = node.childNodes[i];
                    break
                }
            }
            if (ignoreRoot)
            {
                result = parseDOMChildren(child)
            }
            else
            {
                result = {};
                var childName = getNodeLocalName(child);
                result[childName] = parseDOMChildren(child)
            }
            return result
        }
        else if (node.nodeType == DOMNodeTypes.ELEMENT_NODE)
        {
            var result = new Object;
            result.__cnt = 0;
            var nodeChildren = node.childNodes;
            for (var cidx = 0; cidx < nodeChildren.length; cidx++)
            {
                var child = nodeChildren.item(cidx);
                var childName = getNodeLocalName(child);
                result.__cnt++;
                if (result[childName] == null)
                {
                    result[childName] = parseDOMChildren(child);
                    result[childName + "_asArray"] = new Array(1);
                    result[childName + "_asArray"][0] = result[childName]
                }
                else
                {
                    if (result[childName] != null)
                    {
                        if (!(result[childName] instanceof Array))
                        {
                            var tmpObj = result[childName];
                            result[childName] = new Array;
                            result[childName][0] = tmpObj;
                            result[childName + "_asArray"] = result[childName]
                        }
                    }
                    var aridx = 0;
                    while (result[childName][aridx] != null)
                        aridx++;
                    (result[childName])[aridx] = parseDOMChildren(child)
                }
            }
            for (var aidx = 0; aidx < node.attributes.length; aidx++)
            {
                var attr = node.attributes.item(aidx);
                result.__cnt++;
                var value2 = attr.value;
                for (var m = 0, ml = matchers.length; m < ml; m++)
                {
                    var matchobj = matchers[m];
                    if (matchobj.test.call(this, attr.value))
                        value2 = matchobj.converter.call(this, attr.value)
                }
                result[attrPrefix + attr.name] = value2
            }
            var nodePrefix = getNodePrefix(node);
            if (nodePrefix != null && nodePrefix != "")
            {
                result.__cnt++;
                result.__prefix = nodePrefix
            }
            if (result.__cnt == 1 && result["#text"] != null)
            {
                result = result["#text"]
            }
            if (result["#text"] != null)
            {
                result.__text = result["#text"];
                if (escapeMode)
                    result.__text = unescapeXmlChars(result.__text);
                delete result["#text"];
                delete result["#text_asArray"]
            }
            if (result["#cdata-section"] != null)
            {
                result.__cdata = result["#cdata-section"];
                delete result["#cdata-section"];
                delete result["#cdata-section_asArray"]
            }
            if (result.__text != null || result.__cdata != null)
            {
                result.toString = function()
                {
                    return (this.__text != null ? this.__text : '') + (this.__cdata != null ? this.__cdata : '')
                }
            }
            return result
        }
        else if (node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE)
        {
            return node.nodeValue
        }
        else if (node.nodeType == DOMNodeTypes.COMMENT_NODE)
        {
            return null
        }
    }
    function startTag(jsonObj, element, attrList, closed)
    {
        var resultStr = "<" + ((jsonObj != null && jsonObj.__prefix != null) ? (jsonObj.__prefix + ":") : "") + element;
        if (attrList != null)
        {
            for (var aidx = 0; aidx < attrList.length; aidx++)
            {
                var attrName = attrList[aidx];
                var attrVal = jsonObj[attrName];
                resultStr += " " + attrName.substr(1) + "='" + attrVal + "'"
            }
        }
        if (!closed)
            resultStr += ">";
        else
            resultStr += "/>";
        return resultStr
    }
    function endTag(jsonObj, elementName)
    {
        return "</" + (jsonObj.__prefix != null ? (jsonObj.__prefix + ":") : "") + elementName + ">"
    }
    function endsWith(str, suffix)
    {
        return str.indexOf(suffix, str.length - suffix.length) !== -1
    }
    function jsonXmlSpecialElem(jsonObj, jsonObjField)
    {
        if (endsWith(jsonObjField.toString(), ("_asArray")) || jsonObjField.toString().indexOf("_") == 0 || (jsonObj[jsonObjField] instanceof Function))
            return true;
        else
            return false
    }
    function jsonXmlElemCount(jsonObj)
    {
        var elementsCnt = 0;
        if (jsonObj instanceof Object)
        {
            for (var it in jsonObj)
            {
                if (jsonXmlSpecialElem(jsonObj, it))
                    continue;
                elementsCnt++
            }
        }
        return elementsCnt
    }
    function parseJSONAttributes(jsonObj)
    {
        var attrList = [];
        if (jsonObj instanceof Object)
        {
            for (var ait in jsonObj)
            {
                if (ait.toString().indexOf("__") == -1 && ait.toString().indexOf("_") == 0)
                {
                    attrList.push(ait)
                }
            }
        }
        return attrList
    }
    function parseJSONTextAttrs(jsonTxtObj)
    {
        var result = "";
        if (jsonTxtObj.__cdata != null)
        {
            result += "<![CDATA[" + jsonTxtObj.__cdata + "]]>"
        }
        if (jsonTxtObj.__text != null)
        {
            if (escapeMode)
                result += escapeXmlChars(jsonTxtObj.__text);
            else
                result += jsonTxtObj.__text
        }
        return result
    }
    function parseJSONTextObject(jsonTxtObj)
    {
        var result = "";
        if (jsonTxtObj instanceof Object)
        {
            result += parseJSONTextAttrs(jsonTxtObj)
        }
        else if (jsonTxtObj != null)
        {
            if (escapeMode)
                result += escapeXmlChars(jsonTxtObj);
            else
                result += jsonTxtObj
        }
        return result
    }
    function parseJSONArray(jsonArrRoot, jsonArrObj, attrList)
    {
        var result = "";
        if (jsonArrRoot.length == 0)
        {
            result += startTag(jsonArrRoot, jsonArrObj, attrList, true)
        }
        else
        {
            for (var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++)
            {
                result += startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
                result += parseJSONObject(jsonArrRoot[arIdx]);
                result += endTag(jsonArrRoot[arIdx], jsonArrObj)
            }
        }
        return result
    }
    function parseJSONObject(jsonObj)
    {
        var result = "";
        var elementsCnt = jsonXmlElemCount(jsonObj);
        if (elementsCnt > 0)
        {
            for (var it in jsonObj)
            {
                if (jsonXmlSpecialElem(jsonObj, it))
                    continue;
                var subObj = jsonObj[it];
                var attrList = parseJSONAttributes(subObj);
                if (subObj == null || subObj == undefined)
                {
                    result += startTag(subObj, it, attrList, true)
                }
                else if (subObj instanceof Object)
                {
                    if (subObj instanceof Array)
                    {
                        result += parseJSONArray(subObj, it, attrList)
                    }
                    else
                    {
                        var subObjElementsCnt = jsonXmlElemCount(subObj);
                        if (subObjElementsCnt > 0 || subObj.__text != null || subObj.__cdata != null)
                        {
                            result += startTag(subObj, it, attrList, false);
                            result += parseJSONObject(subObj);
                            result += endTag(subObj, it)
                        }
                        else
                        {
                            result += startTag(subObj, it, attrList, true)
                        }
                    }
                }
                else
                {
                    result += startTag(subObj, it, attrList, false);
                    result += parseJSONTextObject(subObj);
                    result += endTag(subObj, it)
                }
            }
        }
        result += parseJSONTextObject(jsonObj);
        return result
    }
    this.parseXmlString = function(xmlDocStr)
    {
        var xmlDoc;
        if (window.DOMParser)
        {
            var parser = new window.DOMParser;
            xmlDoc = parser.parseFromString(xmlDocStr, "text/xml")
        }
        else
        {
            if (xmlDocStr.indexOf("<?") == 0)
            {
                xmlDocStr = xmlDocStr.substr(xmlDocStr.indexOf("?>") + 2)
            }
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(xmlDocStr)
        }
        return xmlDoc
    };
    this.xml2json = function(xmlDoc)
    {
        return parseDOMChildren(xmlDoc)
    };
    this.xml_str2json = function(xmlDocStr)
    {
        var xmlDoc = this.parseXmlString(xmlDocStr);
        return this.xml2json(xmlDoc)
    };
    this.json2xml_str = function(jsonObj)
    {
        return parseJSONObject(jsonObj)
    };
    this.json2xml = function(jsonObj)
    {
        var xmlDocStr = this.json2xml_str(jsonObj);
        return this.parseXmlString(xmlDocStr)
    };
    this.getVersion = function()
    {
        return VERSION
    };
    this.escapeMode = function(enabled)
    {
        escapeMode = enabled
    }
}
;
var OnePlayer;
(function(OnePlayer)
{
    (function(Heuristics)
    {
        "use strict";
        var BandwidthTracker = (function()
            {
                function BandwidthTracker(bandwidthSettings)
                {
                    this._bandwidthSettings = bandwidthSettings;
                    this._averageCalc = new OnePlayer.Util.AverageCalculator(this._bandwidthSettings.maxBandwidthHistoryCount)
                }
                Object.defineProperty(BandwidthTracker.prototype, "averageBandwidthInKbps", {
                    get: function()
                    {
                        return this._averageCalc.average
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(BandwidthTracker.prototype, "latestInKbps", {
                    get: function()
                    {
                        return this._averageCalc.latest
                    }, enumerable: true, configurable: true
                });
                BandwidthTracker.prototype.updateBandwidthInfo = function(bandwidthInfo)
                {
                    if (bandwidthInfo.responseLengthInBytes < this._bandwidthSettings.bandwidthDataSizeThresholdInBytes)
                    {
                        OnePlayer.Log.verbose(5, "Ignoring Bandwidth data as data size :" + bandwidthInfo.responseLengthInBytes + " which is less that the limit :" + this._bandwidthSettings.bandwidthDataSizeThresholdInBytes);
                        return
                    }
                    var timeTookInMS = bandwidthInfo.responseEndTimeInMS - bandwidthInfo.requestStartTimeInMS;
                    var bandwidthInKbps = (bandwidthInfo.responseLengthInBytes * 8) / timeTookInMS;
                    this._averageCalc.addValue(bandwidthInKbps);
                    OnePlayer.Log.verbose(5, "updateBandWidthInfo - " + " currentBw: " + this._averageCalc.latest + " averageBw: " + this._averageCalc.average + " size: " + bandwidthInfo.responseLengthInBytes + " time Took:" + timeTookInMS)
                };
                BandwidthTracker.prototype.reportHeuristicsData = function(heuristicData, chunkDuration)
                {
                    var avgBandWidthInBitsPerSec = this._averageCalc.average * 1000;
                    var usableAvgBwInBitsPerSec = avgBandWidthInBitsPerSec * this._bandwidthSettings.bandwidthUsabilityPercent;
                    OnePlayer.Log.verbose(5, "averageBW reporting is : " + usableAvgBwInBitsPerSec);
                    for (var idx = 0; idx < heuristicData.tracksData.length; idx++)
                    {
                        if (heuristicData.tracksData[idx].selectable)
                        {
                            var estimatedChunkSizeInBits = heuristicData.tracksData[idx].trackInfo.bitrate * chunkDuration;
                            if (!usableAvgBwInBitsPerSec)
                            {
                                heuristicData.tracksData[idx].dataRetrieverEstimationInSec = Infinity
                            }
                            else
                            {
                                heuristicData.tracksData[idx].dataRetrieverEstimationInSec = (estimatedChunkSizeInBits / usableAvgBwInBitsPerSec)
                            }
                        }
                    }
                };
                return BandwidthTracker
            })();
        Heuristics.BandwidthTracker = BandwidthTracker;
        var BandwidthInfo = (function()
            {
                function BandwidthInfo()
                {
                    this.requestStartTimeInMS = (new Date).getTime();
                    this.responseStartTimeInMS = null;
                    this.responseEndTimeInMS = null;
                    this.responseLengthInBytes = 0
                }
                return BandwidthInfo
            })();
        Heuristics.BandwidthInfo = BandwidthInfo
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(DashMediaSegment)
    {
        "use strict";
        var Parser = (function()
            {
                function Parser()
                {
                    this._moduleId = "DashMediaSegmentParser"
                }
                Parser.prototype.dispose = function(){};
                Parser.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.dataRetrieved, this.onGetData, this)
                };
                Parser.prototype.onGetData = function(reqContext)
                {
                    reqContext.currentModuleId = this._moduleId;
                    return new Promise(function(resolve, reject)
                        {
                            var mediaSegment,
                                mp4Box,
                                moofBox,
                                trafBox,
                                tfhdBox,
                                trunBox,
                                tfdtBox,
                                segDuration,
                                currentSegment;
                            currentSegment = reqContext.requestedStream.streamingInfo.currentSegment;
                            if (!reqContext.sessionContext.commonPresentation.isLive || currentSegment.segmentInfo.mediaDuration)
                            {
                                resolve();
                                return
                            }
                            if (!reqContext.urlsToRetrieve[0].mediaData)
                            {
                                throw new Error(reqContext.urlsToRetrieve[0].url + ": no media segment data found");
                            }
                            mediaSegment = new DataView(reqContext.urlsToRetrieve[0].mediaData);
                            moofBox = OnePlayer.Mp4Util.GetBoxByType(mediaSegment, "moof");
                            if (!moofBox)
                            {
                                OnePlayer.Log.warning(11, "moof not found");
                                resolve();
                                return
                            }
                            trafBox = OnePlayer.Mp4Util.GetBoxByType(moofBox.data, "traf");
                            if (!trafBox)
                            {
                                OnePlayer.Log.warning(11, "traf not found");
                                resolve();
                                return
                            }
                            tfhdBox = OnePlayer.Mp4Util.GetTfhdBox(trafBox.data);
                            if (!tfhdBox)
                            {
                                resolve();
                                return
                            }
                            trunBox = OnePlayer.Mp4Util.GetTrunBox(trafBox.data);
                            if (!trunBox)
                            {
                                resolve();
                                return
                            }
                            tfdtBox = OnePlayer.Mp4Util.GetTfdtBox(trafBox.data);
                            if (!tfdtBox)
                            {
                                resolve();
                                return
                            }
                            if (OnePlayer.Common.diffTimes(tfdtBox.baseMediaDecodeTime, currentSegment.segmentInfo.mediaTimestamp))
                            {
                                throw new Error("Segment mismatch, requested: " + currentSegment.segmentInfo.mediaTimestamp + " got: " + tfdtBox.baseMediaDecodeTime);
                            }
                            segDuration = getSegmentDuration(tfhdBox, trunBox);
                            OnePlayer.Log.verbose(11, "Segment duration: " + segDuration);
                            currentSegment.segmentInfo.mediaDuration = segDuration;
                            resolve()
                        });
                    function getSegmentDuration(tfhdBox, trunBox)
                    {
                        var segDuration = 0;
                        if (trunBox.flags & OnePlayer.Mp4Util.TrunBox.flags_sampleDurationPresent)
                        {
                            trunBox.sampleInfoArray.forEach(function(sampleInfo)
                            {
                                segDuration += sampleInfo.sampleDuration
                            })
                        }
                        else if (tfhdBox.defaultSampleDuration)
                        {
                            segDuration = tfhdBox.defaultSampleDuration * trunBox.sampleCount
                        }
                        else
                        {
                            OnePlayer.Log.warning(11, "Cannot calculate segment duration from 'tfhd' and 'trun'")
                        }
                        return segDuration
                    }
                };
                return Parser
            })();
        DashMediaSegment.Parser = Parser
    })(OnePlayer.DashMediaSegment || (OnePlayer.DashMediaSegment = {}));
    var DashMediaSegment = OnePlayer.DashMediaSegment
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(DashPresentation)
    {
        "use strict";
        var Parser = (function()
            {
                function Parser()
                {
                    this._moduleId = "DashPresentationParser"
                }
                Parser.prototype.dispose = function(){};
                Parser.prototype.init = function(sessionContext)
                {
                    var presentationWorkflow = sessionContext.workflows[0];
                    presentationWorkflow.addHandler(presentationWorkflow.stepEvents.dataRetrieved, this.onParse, this)
                };
                Parser.prototype.onParse = function(reqContext)
                {
                    reqContext.currentModuleId = this._moduleId;
                    return new Promise(function(resolve, reject)
                        {
                            var sessionContext,
                                presentationUrl,
                                defaultBaseUrlEnd,
                                defaultBaseUrl,
                                dashPresentation;
                            if (!reqContext.urlsToRetrieve[0].presentationData)
                            {
                                throw new Error(reqContext.urlsToRetrieve[0].url + ": no presentation data found");
                            }
                            sessionContext = reqContext.sessionContext;
                            presentationUrl = sessionContext.presentationUrl;
                            defaultBaseUrlEnd = presentationUrl.lastIndexOf("/");
                            defaultBaseUrl = presentationUrl.slice(0, defaultBaseUrlEnd + 1);
                            dashPresentation = new Mpd(reqContext.urlsToRetrieve[0].presentationData, defaultBaseUrl);
                            if (!dashPresentation)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164261632, reqContext.urlsToRetrieve[0].url + ": failed to generate DASH presentation");
                                reject("failed to generate DASH presentation");
                                return
                            }
                            sessionContext.updatePresentation(dashPresentation);
                            OnePlayer.Log.verbose(4, "MPD updated");
                            resolve()
                        })
                };
                return Parser
            })();
        DashPresentation.Parser = Parser;
        var Mpd = (function()
            {
                function Mpd(manifest, defaultBaseUrl)
                {
                    var _this = this;
                    var dashParser,
                        periods = [];
                    this._lastRetrievalTime = new Date;
                    dashParser = Dash.dependencies.DashParser();
                    dashParser.debug = new DebugLog;
                    dashParser.errHandler = new ErrorLog;
                    this._manifest = dashParser.parse(manifest, defaultBaseUrl);
                    if ("Period_asArray" in this._manifest && this._manifest.Period_asArray.length > 0)
                    {
                        this._manifest.Period_asArray.forEach(function(value)
                        {
                            periods.push(new Period(value, _this.publishTime))
                        })
                    }
                    this._periods = periods;
                    if (periods.length > 1)
                    {
                        throw new Error("Error parsing MPD: multiple periods not supported");
                    }
                }
                Mpd.prototype.dispose = function()
                {
                    if (this._periods)
                    {
                        this._periods.forEach(function(period)
                        {
                            period.dispose()
                        });
                        this._periods = []
                    }
                    this._manifest = null;
                    this._lastRetrievalTime = null
                };
                Object.defineProperty(Mpd.prototype, "startTime", {
                    get: function()
                    {
                        var start = null;
                        if ("availabilityStartTime" in this._manifest)
                        {
                            start = new Date(this._manifest.availabilityStartTime)
                        }
                        return start
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Mpd.prototype, "publishTime", {
                    get: function()
                    {
                        var pubTime;
                        if ("publishTime" in this._manifest)
                        {
                            pubTime = new Date(this._manifest.publishTime)
                        }
                        else
                        {
                            pubTime = this._lastRetrievalTime
                        }
                        return pubTime
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Mpd.prototype, "isLive", {
                    get: function()
                    {
                        return this._manifest.type === "dynamic"
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Mpd.prototype, "durationInSec", {
                    get: function()
                    {
                        var duration = 0;
                        if ("mediaPresentationDuration" in this._manifest)
                        {
                            duration = this._manifest.mediaPresentationDuration
                        }
                        return duration
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Mpd.prototype, "periods", {
                    get: function()
                    {
                        return this._periods
                    }, enumerable: true, configurable: true
                });
                Mpd.prototype.toJson = function()
                {
                    return this._manifest
                };
                Mpd.prototype.transferPresentationState = function(newPresentation)
                {
                    var newMpd = newPresentation,
                        oldPeriods = [],
                        newPeriods = [];
                    this._manifest = newMpd._manifest;
                    this._lastRetrievalTime = newMpd._lastRetrievalTime;
                    this.periods.forEach(function(value)
                    {
                        oldPeriods.push(value)
                    });
                    newMpd.periods.forEach(function(value)
                    {
                        newPeriods.push(value)
                    });
                    for (var i = 0; i < newPeriods.length; i++)
                    {
                        for (var j = 0; j < oldPeriods.length; j++)
                        {
                            if (oldPeriods[j] && newPeriods[i].startInSec === oldPeriods[j].startInSec)
                            {
                                oldPeriods[j].transferPeriodState(newPeriods[i]);
                                newPeriods[i] = null;
                                oldPeriods[j] = null;
                                break
                            }
                        }
                    }
                    oldPeriods = oldPeriods.filter(function(value)
                    {
                        return !!value
                    });
                    newPeriods = newPeriods.filter(function(value)
                    {
                        return !!value
                    });
                    if (oldPeriods.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Periods removed from MPD: " + oldPeriods.length)
                    }
                    if (newPeriods.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Periods added to MPD: " + newPeriods.length)
                    }
                };
                return Mpd
            })();
        DashPresentation.Mpd = Mpd;
        var Period = (function()
            {
                function Period(period, publishTime)
                {
                    var _this = this;
                    var streams = [];
                    if ("start" in period)
                    {
                        this.startInSec = period.start
                    }
                    else
                    {
                        this.startInSec = 0
                    }
                    if ("AdaptationSet_asArray" in period && period.AdaptationSet_asArray.length > 0)
                    {
                        period.AdaptationSet_asArray.forEach(function(value)
                        {
                            streams.push(new AdaptationSet(value, publishTime, _this.startInSec))
                        })
                    }
                    this._streams = streams
                }
                Object.defineProperty(Period.prototype, "streams", {
                    get: function()
                    {
                        return this._streams
                    }, enumerable: true, configurable: true
                });
                Period.prototype.dispose = function()
                {
                    if (this._streams)
                    {
                        this._streams.forEach(function(stream)
                        {
                            stream.dispose()
                        });
                        this._streams = []
                    }
                };
                Period.prototype.transferPeriodState = function(newPeriod)
                {
                    var oldStreams = [],
                        newStreams = [];
                    this.streams.forEach(function(value)
                    {
                        oldStreams.push(value)
                    });
                    newPeriod.streams.forEach(function(value)
                    {
                        newStreams.push(value)
                    });
                    for (var i = 0; i < newStreams.length; i++)
                    {
                        for (var j = 0; j < oldStreams.length; j++)
                        {
                            if (oldStreams[j] && newStreams[i].id === oldStreams[j].id)
                            {
                                oldStreams[j].transferStreamState(newStreams[i]);
                                newStreams[i] = null;
                                oldStreams[j] = null;
                                break
                            }
                        }
                    }
                    oldStreams = oldStreams.filter(function(value)
                    {
                        return !!value
                    });
                    newStreams = newStreams.filter(function(value)
                    {
                        return !!value
                    });
                    if (oldStreams.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Adaptation Sets removed from period: " + oldStreams.length)
                    }
                    if (newStreams.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Adaptation Sets added to period: " + newStreams.length)
                    }
                };
                return Period
            })();
        DashPresentation.Period = Period;
        var AdaptationSet = (function()
            {
                function AdaptationSet(stream, pubtime, periodStartInSec)
                {
                    var representations = [];
                    this._adaptationSet = stream;
                    this.streamingInfo = new OnePlayer.Presentation.MediaStreamStreamingInfo;
                    if ("SegmentTemplate" in stream)
                    {
                        this._segmentTemplate = stream.SegmentTemplate;
                        if ("SegmentTimeline" in this._segmentTemplate)
                        {
                            var timeline,
                                timescale,
                                timeOffset,
                                segments;
                            timeline = this._segmentTemplate.SegmentTimeline;
                            timescale = this._segmentTemplate.timescale ? this._segmentTemplate.timescale : 1;
                            timeOffset = periodStartInSec * timescale;
                            timeOffset -= this._segmentTemplate.presentationTimeOffset ? this._segmentTemplate.presentationTimeOffset : 0;
                            this._normalizedPtoInSec = timeOffset / timescale;
                            segments = new OnePlayer.Presentation.MediaSegmentInfoContainer(timescale, timeOffset, pubtime);
                            if ("S_asArray" in timeline)
                            {
                                var nextTimestamp = 0,
                                    nextIndex;
                                nextIndex = this._segmentTemplate.startNumber ? this._segmentTemplate.startNumber : 0;
                                for (var idx = 0; idx < timeline.S_asArray.length; idx++)
                                {
                                    var dashSegment,
                                        mediaTimestamp,
                                        repeat,
                                        segmentRun;
                                    dashSegment = timeline.S_asArray[idx];
                                    mediaTimestamp = ("t" in dashSegment) ? dashSegment.t : nextTimestamp;
                                    repeat = ("r" in dashSegment) ? dashSegment.r : 0;
                                    segmentRun = new OnePlayer.Presentation.SegmentRunEntry(nextIndex, mediaTimestamp, dashSegment.d, timeOffset, timescale, repeat, idx);
                                    segments.addMediaSegmentRun(segmentRun);
                                    nextIndex += repeat + 1;
                                    nextTimestamp = mediaTimestamp + dashSegment.d * (repeat + 1)
                                }
                                this.segments = segments
                            }
                        }
                    }
                    if ("Representation" in stream)
                    {
                        stream.Representation_asArray.forEach(function(value)
                        {
                            representations.push(new Representation(value))
                        })
                    }
                    this._tracks = representations.sort(function(a, b)
                    {
                        return a.bitrate - b.bitrate
                    })
                }
                AdaptationSet.prototype.dispose = function()
                {
                    if (this._tracks)
                    {
                        this._tracks.forEach(function(track)
                        {
                            track.dispose()
                        });
                        this._tracks = []
                    }
                    if (this.segments)
                    {
                        this.segments.dispose();
                        this.segments = null
                    }
                    if (this.streamingInfo)
                    {
                        this.streamingInfo.dispose();
                        this.streamingInfo = null
                    }
                    this._adaptationSet = null;
                    this._segmentTemplate = null
                };
                Object.defineProperty(AdaptationSet.prototype, "codec", {
                    get: function()
                    {
                        var adaptationSet = this._adaptationSet;
                        return adaptationSet.mimeType + ";codecs=\"" + adaptationSet.codecs + "\""
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "type", {
                    get: function()
                    {
                        var streamType;
                        switch (this._adaptationSet.contentType)
                        {
                            case"video":
                                streamType = 0;
                                break;
                            case"audio":
                                streamType = 1;
                                break;
                            default:
                                OnePlayer.Log.error(4, "Stream type not supported: " + this._adaptationSet.contentType);
                                break
                        }
                        return streamType
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "id", {
                    get: function()
                    {
                        var id = null;
                        if ("id" in this._adaptationSet)
                        {
                            id = this._adaptationSet.id.toString()
                        }
                        else
                        {
                            id = this._adaptationSet.codecs;
                            if ("lang" in this._adaptationSet)
                            {
                                id += this._adaptationSet.lang
                            }
                        }
                        return id
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "language", {
                    get: function()
                    {
                        var lang = null;
                        if ("lang" in this._adaptationSet)
                        {
                            lang = this._adaptationSet.lang
                        }
                        return lang
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "initUrlTemplate", {
                    get: function()
                    {
                        var initUrl = null;
                        if ("initialization" in this._segmentTemplate)
                        {
                            initUrl = this._adaptationSet.BaseURL + this._segmentTemplate.initialization
                        }
                        return initUrl
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "mediaUrlTemplate", {
                    get: function()
                    {
                        var mediaUrl = null;
                        if ("media" in this._segmentTemplate)
                        {
                            mediaUrl = this._adaptationSet.BaseURL + this._segmentTemplate.media
                        }
                        return mediaUrl
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "presentationTimeOffsetInSec", {
                    get: function()
                    {
                        return this._normalizedPtoInSec
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AdaptationSet.prototype, "tracks", {
                    get: function()
                    {
                        return this._tracks
                    }, enumerable: true, configurable: true
                });
                AdaptationSet.prototype.transferStreamState = function(newStream)
                {
                    var oldTracks = [],
                        newTracks = [];
                    this.tracks.forEach(function(value)
                    {
                        oldTracks.push(value)
                    });
                    newStream.tracks.forEach(function(value)
                    {
                        newTracks.push(value)
                    });
                    for (var i = 0; i < newTracks.length; i++)
                    {
                        for (var j = 0; j < oldTracks.length; j++)
                        {
                            if (oldTracks[j] && newTracks[i].id === oldTracks[j].id)
                            {
                                newTracks[i] = null;
                                oldTracks[j] = null;
                                break
                            }
                        }
                    }
                    oldTracks = oldTracks.filter(function(value)
                    {
                        return !!value
                    });
                    newTracks = newTracks.filter(function(value)
                    {
                        return !!value
                    });
                    if (oldTracks.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Representations removed from MPD: " + oldTracks.length)
                    }
                    if (newTracks.length > 0)
                    {
                        OnePlayer.Log.verbose(4, "Representations added to MPD: " + newTracks.length)
                    }
                    this.segments.update(newStream.segments)
                };
                return AdaptationSet
            })();
        DashPresentation.AdaptationSet = AdaptationSet;
        var Representation = (function()
            {
                function Representation(representation)
                {
                    if ("id" in representation)
                    {
                        this._id = representation.id
                    }
                    else
                    {
                        throw new Error("Representation missing @id");
                    }
                    if ("bandwidth" in representation)
                    {
                        this._bitrate = representation.bandwidth
                    }
                    else
                    {
                        throw new Error("Representation missing @bandwidth");
                    }
                    this._height = representation.height;
                    this._width = representation.width;
                    this.streamingInfo = new OnePlayer.Presentation.MediaTrackStreamingInfo
                }
                Object.defineProperty(Representation.prototype, "id", {
                    get: function()
                    {
                        return this._id
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Representation.prototype, "bitrate", {
                    get: function()
                    {
                        return this._bitrate
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Representation.prototype, "height", {
                    get: function()
                    {
                        return this._height
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(Representation.prototype, "width", {
                    get: function()
                    {
                        return this._width
                    }, enumerable: true, configurable: true
                });
                Representation.prototype.dispose = function(){};
                return Representation
            })();
        DashPresentation.Representation = Representation;
        var DebugLog = (function()
            {
                function DebugLog()
                {
                    this.log = function(message)
                    {
                        OnePlayer.Log.verbose(4, message)
                    }
                }
                return DebugLog
            })();
        var ErrorLog = (function()
            {
                function ErrorLog()
                {
                    this.manifestError = function(message, id, manifest)
                    {
                        OnePlayer.Log.error(4, message)
                    }
                }
                return ErrorLog
            })()
    })(OnePlayer.DashPresentation || (OnePlayer.DashPresentation = {}));
    var DashPresentation = OnePlayer.DashPresentation
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(UrlBuilder)
    {
        "use strict";
        var DashUrlFormatter = (function()
            {
                function DashUrlFormatter()
                {
                    this._moduleId = "DashUrlFormatter"
                }
                DashUrlFormatter.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onUrlFormat, this)
                };
                DashUrlFormatter.prototype.dispose = function(){};
                DashUrlFormatter.prototype.onUrlFormat = function(reqContext)
                {
                    reqContext.currentModuleId = this._moduleId;
                    return new Promise(function(resolve, reject)
                        {
                            if (!reqContext.selectedTrack)
                            {
                                throw new Error("Selected Track not set");
                            }
                            var bitrate = reqContext.selectedTrack.bitrate;
                            if (bitrate === null || bitrate === undefined)
                            {
                                throw new Error("incorrect bitrate");
                            }
                            if (reqContext.requestedStream.streamingInfo.fetchInitSegment)
                            {
                                var initUrlTemplate = reqContext.requestedStream.initUrlTemplate;
                                if (!initUrlTemplate)
                                {
                                    throw new Error("no initial url template for the stream");
                                }
                                var initUrlFormatted = OnePlayer.Util.UrlFormatter.FormatDashInitUrl(initUrlTemplate, bitrate.toString());
                                reqContext.requestedStream.streamingInfo.fetchInitSegment = false;
                                reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(initUrlFormatted))
                            }
                            var urlTemplate = reqContext.requestedStream.mediaUrlTemplate;
                            if (!urlTemplate)
                            {
                                throw new Error("media url template is not set for the stream");
                            }
                            if (!reqContext.requestedStream.streamingInfo.currentSegment)
                            {
                                throw new Error("current segment not selected.");
                            }
                            var requestedTimestamp = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.mediaTimestamp;
                            var urlFormatted = OnePlayer.Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate.toString(), requestedTimestamp.toString());
                            reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(urlFormatted, 0, reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.presTimeInSec, reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec));
                            resolve()
                        })
                };
                return DashUrlFormatter
            })();
        UrlBuilder.DashUrlFormatter = DashUrlFormatter
    })(OnePlayer.UrlBuilder || (OnePlayer.UrlBuilder = {}));
    var UrlBuilder = OnePlayer.UrlBuilder
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Heuristics)
    {
        "use strict";
        var Engine = (function()
            {
                function Engine()
                {
                    this._moduleId = "heuristics.Engine";
                    this._disposed = false
                }
                Engine.prototype.dispose = function()
                {
                    this._disposed = true
                };
                Engine.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onGetIndex, this)
                };
                Engine.prototype.onGetIndex = function(reqContext)
                {
                    var _this = this;
                    OnePlayer.Log.verbose(8, "OnGetIndex");
                    reqContext.currentModuleId = this._moduleId;
                    var self = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (_this._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (reqContext.selectedTrack)
                            {
                                resolveInternal();
                                return
                            }
                            if (reqContext.requestedStream.type !== 0)
                            {
                                reqContext.selectedTrack = reqContext.requestedStream.tracks[0];
                                resolveInternal();
                                return
                            }
                            var firstTrackInfoSelectable = reqContext.heuristicData.tracksData.findFirst(function(l)
                                {
                                    return l.selectable === true
                                });
                            if (firstTrackInfoSelectable)
                            {
                                reqContext.selectedTrack = firstTrackInfoSelectable.trackInfo
                            }
                            else
                            {
                                reqContext.selectedTrack = reqContext.heuristicData.tracksData[0].trackInfo;
                                resolveInternal();
                                return
                            }
                            var currentBufferLevel = reqContext.requestedStream.streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec();
                            var maxTimeToDownloadInSec = 5;
                            if (!reqContext.requestedStream.streamingInfo.currentSegment)
                            {
                                resolveInternal();
                                return
                            }
                            maxTimeToDownloadInSec = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec;
                            if (!reqContext.requestedStream.streamingInfo.currentSegment)
                            {
                                throw new Error("current segment not selected.");
                            }
                            var maxTimeToDownloadInSec = reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec;
                            var vodStableBufferLevelInSec = reqContext.sessionContext.maxBufferInSec() * reqContext.sessionContext.heuristicSettings.vodStableBufferLevelPercent;
                            var vodDowngradeBufferLevelInSec = reqContext.sessionContext.maxBufferInSec() * reqContext.sessionContext.heuristicSettings.vodDowngradeBufferLevelPercent;
                            if (currentBufferLevel < vodDowngradeBufferLevelInSec)
                            {
                                maxTimeToDownloadInSec *= reqContext.sessionContext.heuristicSettings.belowDowngradeBufferLevelDownloadTimeFactor
                            }
                            var selectedTrack = findHighestTrack(maxTimeToDownloadInSec);
                            if (!selectedTrack || (currentBufferLevel > vodStableBufferLevelInSec && selectedTrack.bitrate < reqContext.requestedStream.streamingInfo.lastDownloadedTrack.bitrate))
                            {
                                if (reqContext.heuristicData.tracksData.findFirst(function(l)
                                {
                                    return l.trackInfo === reqContext.requestedStream.streamingInfo.lastDownloadedTrack && l.selectable
                                }))
                                {
                                    selectedTrack = reqContext.requestedStream.streamingInfo.lastDownloadedTrack
                                }
                            }
                            if (selectedTrack)
                            {
                                reqContext.selectedTrack = selectedTrack
                            }
                            resolveInternal();
                            function resolveInternal()
                            {
                                checkAndEnableInitSegmentDownload();
                                resolve()
                            }
                        });
                    function checkAndEnableInitSegmentDownload()
                    {
                        if (reqContext.selectedTrack !== reqContext.requestedStream.streamingInfo.lastDownloadedTrack)
                        {
                            reqContext.requestedStream.streamingInfo.fetchInitSegment = true
                        }
                    }
                    function findHighestTrack(timeEstimationThresholdInSec)
                    {
                        for (var idx = reqContext.heuristicData.tracksData.length - 1; idx >= 0; idx--)
                        {
                            if (reqContext.heuristicData.tracksData[idx].selectable)
                            {
                                if (reqContext.heuristicData.tracksData[idx].dataRetrieverEstimationInSec < timeEstimationThresholdInSec)
                                {
                                    return reqContext.heuristicData.tracksData[idx].trackInfo
                                }
                            }
                        }
                        return null
                    }
                };
                return Engine
            })();
        Heuristics.Engine = Engine
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Heuristics)
    {
        "use strict";
        var StepRule = (function()
            {
                function StepRule()
                {
                    this._moduleId = "stepRule";
                    this._disposed = false;
                    this._currentTrackSegmentCount = 0;
                    this._previousTrackSelected = null;
                    this._currentSelectedVideoStream = null
                }
                StepRule.prototype.dispose = function()
                {
                    this._disposed = true;
                    this._previousTrackSelected = null;
                    this._currentSelectedVideoStream = null
                };
                StepRule.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onRunStepRule, this)
                };
                StepRule.prototype.onRunStepRule = function(reqContext)
                {
                    var _this = this;
                    OnePlayer.Log.verbose(8, "onRunStepRule");
                    reqContext.currentModuleId = this._moduleId;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (that._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (reqContext.selectedTrack || reqContext.requestedStream.streamingInfo.lastDownloadedTrack === null || reqContext.requestedStream.type !== 0)
                            {
                                resolve();
                                return
                            }
                            if (reqContext.requestedStream !== _this._currentSelectedVideoStream)
                            {
                                that._currentSelectedVideoStream = reqContext.requestedStream;
                                that._previousTrackSelected = null
                            }
                            if (reqContext.requestedStream.streamingInfo.lastDownloadedTrack === that._previousTrackSelected)
                            {
                                that._currentTrackSegmentCount++
                            }
                            else
                            {
                                that._previousTrackSelected = reqContext.requestedStream.streamingInfo.lastDownloadedTrack;
                                that._currentTrackSegmentCount = 1
                            }
                            var canDowngrade = (that._currentTrackSegmentCount >= reqContext.sessionContext.heuristicSettings.stepRule.minSegmentsBeforeDowngrade);
                            var canUpgrade = (that._currentTrackSegmentCount >= reqContext.sessionContext.heuristicSettings.stepRule.minSegmentsBeforeUpgrade);
                            var lastDownloadedTrackIndex = reqContext.requestedStream.tracks.indexOf(that._previousTrackSelected);
                            var lowestAllowedTrackIndex = lastDownloadedTrackIndex;
                            var highestAllowedTrackIndex = lastDownloadedTrackIndex;
                            if (canDowngrade && reqContext.sessionContext.heuristicSettings.stepRule.maxStepDownInQuality > 0)
                            {
                                lowestAllowedTrackIndex = Math.max(0, lastDownloadedTrackIndex - reqContext.sessionContext.heuristicSettings.stepRule.maxStepDownInQuality)
                            }
                            if (canUpgrade && reqContext.sessionContext.heuristicSettings.stepRule.maxStepUpInQuality > 0)
                            {
                                highestAllowedTrackIndex = Math.min(reqContext.heuristicData.tracksData.length - 1, lastDownloadedTrackIndex + reqContext.sessionContext.heuristicSettings.stepRule.maxStepUpInQuality)
                            }
                            for (var idx = 0; idx < reqContext.heuristicData.tracksData.length; idx++)
                            {
                                if (idx > highestAllowedTrackIndex || idx < lowestAllowedTrackIndex)
                                {
                                    reqContext.heuristicData.tracksData[idx].selectable = false
                                }
                            }
                            resolve()
                        })
                };
                return StepRule
            })();
        Heuristics.StepRule = StepRule
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Heuristics)
    {
        "use strict";
        var WindowSizeRule = (function()
            {
                function WindowSizeRule()
                {
                    this._moduleId = "windowSizeRule";
                    this._disposed = false;
                    this._windowHeight = 0;
                    this._windowWidth = 0;
                    this._highestTrackIndexAllowed = -1;
                    this._currentSelectedVideoStream = null
                }
                WindowSizeRule.prototype.dispose = function()
                {
                    this._disposed = true;
                    this._currentSelectedVideoStream = null
                };
                WindowSizeRule.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onRunWindowSizeRule, this)
                };
                WindowSizeRule.prototype.onRunWindowSizeRule = function(reqContext)
                {
                    var _this = this;
                    OnePlayer.Log.verbose(8, "onRunWindowSizeRule");
                    reqContext.currentModuleId = this._moduleId;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (that._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (reqContext.selectedTrack || !reqContext.sessionContext.heuristicSettings.windowSizeHeuristicsEnabled || reqContext.requestedStream.type !== 0)
                            {
                                resolve();
                                return
                            }
                            if (reqContext.requestedStream !== _this._currentSelectedVideoStream)
                            {
                                that._currentSelectedVideoStream = reqContext.requestedStream;
                                that._highestTrackIndexAllowed = -1
                            }
                            var windowWidth = Math.max(reqContext.sessionContext.videoTag.scrollWidth, reqContext.sessionContext.videoTag.width);
                            var windowHeight = Math.max(reqContext.sessionContext.videoTag.scrollHeight, reqContext.sessionContext.videoTag.height);
                            if (windowHeight === 0 || windowWidth === 0)
                            {
                                OnePlayer.Log.warning(8, "Ignoring window size heuristic rule, as one of the window dimensions is 0.");
                                resolve();
                                return
                            }
                            if (that._windowWidth !== windowWidth || that._windowHeight !== windowHeight)
                            {
                                that._windowWidth = windowWidth;
                                that._windowHeight = windowHeight;
                                that._highestTrackIndexAllowed = -1
                            }
                            var trackDataList = reqContext.heuristicData.tracksData;
                            for (var idx = trackDataList.length - 1; idx > that._highestTrackIndexAllowed; idx--)
                            {
                                if (trackDataList[idx].selectable)
                                {
                                    if (trackDataList[idx].trackInfo.width > windowWidth || trackDataList[idx].trackInfo.height > windowHeight)
                                    {
                                        trackDataList[idx].selectable = false
                                    }
                                    else
                                    {
                                        that._highestTrackIndexAllowed = idx;
                                        break
                                    }
                                }
                            }
                            resolve()
                        })
                };
                return WindowSizeRule
            })();
        Heuristics.WindowSizeRule = WindowSizeRule
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(DataRetriever)
    {
        "use strict";
        var HttpStatus;
        (function(HttpStatus)
        {
            HttpStatus[HttpStatus["success"] = 200] = "success";
            HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
            HttpStatus[HttpStatus["badGateway"] = 502] = "badGateway"
        })(HttpStatus || (HttpStatus = {}));
        var HttpDataRetriever = (function()
            {
                function HttpDataRetriever(sessionContext)
                {
                    this._moduleId = "httpDataRetriever";
                    this._requestList = [];
                    this._disposed = false;
                    this._bandwidthData = new OnePlayer.Heuristics.BandwidthTracker(sessionContext.heuristicSettings.bandwidth)
                }
                HttpDataRetriever.prototype.dispose = function()
                {
                    while (this._requestList.length > 0)
                    {
                        var currentItem = this._requestList.pop();
                        currentItem.request = null;
                        currentItem = null
                    }
                    this._disposed = true
                };
                HttpDataRetriever.prototype.init = function(sessionContext)
                {
                    var presentationWorkflow = sessionContext.workflows[0];
                    var mediaWorkflow = sessionContext.workflows[1];
                    presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestBegin, this.onGetData, this);
                    presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onGetData, this);
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onReportHeuristicData, this);
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestSend, this.onGetData, this)
                };
                HttpDataRetriever.prototype.onReportHeuristicData = function(reqContext)
                {
                    OnePlayer.Log.verbose(5, "onReportHeuristicData");
                    reqContext.currentModuleId = this._moduleId;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (that._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (reqContext.requestedStream.type !== 0)
                            {
                                resolve();
                                return
                            }
                            that._bandwidthData.reportHeuristicsData(reqContext.heuristicData, reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec);
                            resolve()
                        })
                };
                HttpDataRetriever.prototype.onGetData = function(reqContext)
                {
                    OnePlayer.Log.verbose(5, "onGetData");
                    reqContext.currentModuleId = this._moduleId;
                    var self = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (self._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (reqContext.urlsToRetrieve.length === 0)
                            {
                                throw new Error("Failed to start the download as urlsToRetrieve is empty.");
                            }
                            var index = 0;
                            sendNextRequest();
                            function sendNextRequest()
                            {
                                if (!reqContext.urlsToRetrieve[index])
                                {
                                    throw new Error("Failed to start the download as urlToRetrieve at index " + index + " is null");
                                }
                                if (!reqContext.urlsToRetrieve[index].url)
                                {
                                    throw new Error("Failed to start the download as urlToRetrieve at index " + index + " is empty");
                                }
                                if ((reqContext.urlsToRetrieve[index].responseType === 0 && reqContext.urlsToRetrieve[index].mediaData != null) || reqContext.urlsToRetrieve[index].responseType === 4 && reqContext.urlsToRetrieve[index].presentationData != null)
                                {
                                    index++;
                                    if (index >= reqContext.urlsToRetrieve.length)
                                    {
                                        resolve()
                                    }
                                    else
                                    {
                                        sendNextRequest()
                                    }
                                }
                                else
                                {
                                    var req = new XMLHttpRequest;
                                    req.open('GET', reqContext.urlsToRetrieve[index].url);
                                    req.onprogress = requestProgressHandler;
                                    req.onload = requestLoadedHandler;
                                    req.onerror = requestErrorHandler;
                                    req.ontimeout = requestTimeoutHandler;
                                    if (reqContext.urlsToRetrieve[index].responseType === 0)
                                    {
                                        req.responseType = OnePlayer.Context.ResponseType[0]
                                    }
                                    if (req['msCaching'])
                                    {
                                        req.msCaching = 'disabled'
                                    }
                                    req.timeout = reqContext.sessionContext.httpDataRetrieverSettings.timeoutInMSec;
                                    var newRequest = new RequestInfo(reqContext.urlsToRetrieve[index], req);
                                    if (reqContext.requestedStream && reqContext.requestedStream.type == 0 && reqContext.selectedTrack)
                                    {
                                        OnePlayer.Log.verbose(5, "HeuristicInfo:" + " SuggestedBr: " + reqContext.selectedTrack.bitrate + " CurrentBw: " + self._bandwidthData.latestInKbps + " AverageBw: " + self._bandwidthData.averageBandwidthInKbps + " BufferSize: " + reqContext.requestedStream.streamingInfo.sourceBuffer.getBufferedAheadOfCurrentTimeInSec() + " StreamType: " + OnePlayer.Presentation.StreamType[reqContext.requestedStream.type] + " StreamName: " + reqContext.requestedStream.language + " Index: " + reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.index + " Time: " + reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.presTimeInSec + " Duration: " + reqContext.requestedStream.streamingInfo.currentSegment.segmentInfo.durationInSec + " Url: " + reqContext.urlsToRetrieve[index].url)
                                    }
                                    self._requestList.push(newRequest);
                                    req.send()
                                }
                            }
                            function requestProgressHandler(event)
                            {
                                var _this = this;
                                if (self._disposed)
                                {
                                    return
                                }
                                var currentTime = (new Date).getTime();
                                var currentRequestInfo = self._requestList.findFirst(function(l)
                                    {
                                        return l.request === _this
                                    });
                                if (!currentRequestInfo)
                                {
                                    throw new Error("cannot find the request in the request queue");
                                }
                                if (!currentRequestInfo.bandwidthInfo.responseStartTimeInMS)
                                {
                                    if (!event.lengthComputable || (event.lengthComputable && event.total != event.loaded))
                                    {
                                        currentRequestInfo.bandwidthInfo.responseStartTimeInMS = currentTime
                                    }
                                }
                            }
                            function requestLoadedHandler(event)
                            {
                                var _this = this;
                                var contentLengthInBytes;
                                if (self._disposed)
                                {
                                    return
                                }
                                var currentRequestInfo = self._requestList.removeFirst(function(l)
                                    {
                                        return l.request === _this
                                    });
                                if (!currentRequestInfo)
                                {
                                    throw new Error("cannot find the request in the request queue");
                                }
                                currentRequestInfo.bandwidthInfo.responseEndTimeInMS = (new Date).getTime();
                                var urlIndex = reqContext.urlsToRetrieve.indexOf(currentRequestInfo.urlRequest);
                                reqContext.urlsToRetrieve[urlIndex].httpResposeContentType = this.getResponseHeader("Content-Type");
                                reqContext.urlsToRetrieve[urlIndex].httpResponseCode = this.status;
                                if (200 === this.status)
                                {
                                    switch (currentRequestInfo.urlRequest.responseType)
                                    {
                                        case 0:
                                            reqContext.urlsToRetrieve[urlIndex].mediaData = this.response;
                                            currentRequestInfo.bandwidthInfo.responseLengthInBytes = reqContext.urlsToRetrieve[urlIndex].mediaData.byteLength;
                                            break;
                                        case 4:
                                            reqContext.urlsToRetrieve[urlIndex].presentationData = this.response;
                                            currentRequestInfo.bandwidthInfo.responseLengthInBytes = reqContext.urlsToRetrieve[urlIndex].presentationData.length;
                                            break;
                                        default:
                                            throw new Error("Unexpected response Type in the request Context");
                                    }
                                    OnePlayer.Log.verbose(5, "Download Finished for :" + currentRequestInfo.urlRequest.url);
                                    if (reqContext.requestedStream)
                                    {
                                        if (self._bandwidthData && reqContext.requestedStream.type === 0)
                                        {
                                            self._bandwidthData.updateBandwidthInfo(currentRequestInfo.bandwidthInfo)
                                        }
                                        reqContext.requestedStream.streamingInfo.lastDownloadedTrack = reqContext.selectedTrack
                                    }
                                    index++;
                                    if (index >= reqContext.urlsToRetrieve.length)
                                    {
                                        resolve();
                                        return
                                    }
                                    else
                                    {
                                        sendNextRequest()
                                    }
                                }
                                else
                                {
                                    OnePlayer.Log.error(5, currentRequestInfo.urlRequest + " failed, httpStatus: " + this.status);
                                    _handlerError(OnePlayer.Failure.translateHttpStatusToCode(this.status), currentRequestInfo.urlRequest.url)
                                }
                            }
                            function requestErrorHandler(error)
                            {
                                var _this = this;
                                if (self._disposed)
                                {
                                    return
                                }
                                var currentRequestInfo = self._requestList.removeFirst(function(l)
                                    {
                                        return l.request === _this
                                    });
                                if (!currentRequestInfo)
                                {
                                    throw new Error("cannot find the request in the request queue");
                                }
                                OnePlayer.Log.error(5, currentRequestInfo.urlRequest + " failed, error: " + OnePlayer.Failure.errorEventToString(error));
                                _handlerError(2164262090, currentRequestInfo.urlRequest.url)
                            }
                            function requestTimeoutHandler()
                            {
                                var _this = this;
                                if (self._disposed)
                                {
                                    return
                                }
                                var currentRequestInfo = self._requestList.removeFirst(function(l)
                                    {
                                        return l.request === _this
                                    });
                                if (!currentRequestInfo)
                                {
                                    throw new Error("cannot find the request in the request queue");
                                }
                                OnePlayer.Log.error(5, currentRequestInfo.urlRequest + " failed, timed out");
                                _handlerError(2164262089, currentRequestInfo.urlRequest.url)
                            }
                            function _handlerError(code, msg)
                            {
                                var record = new OnePlayer.Failure.Record(reqContext.currentModuleId, code, msg);
                                if (reqContext.requestedStream)
                                {
                                    reqContext.state = 2;
                                    reqContext.retryWaitTimeMSec = 0;
                                    reqContext.failTracker.log(record, reqContext.selectedTrack);
                                    OnePlayer.Log.warning(5, "failed to download: " + msg);
                                    resolve()
                                }
                                else
                                {
                                    reqContext.externalFailure = record;
                                    reject()
                                }
                            }
                        })
                };
                return HttpDataRetriever
            })();
        DataRetriever.HttpDataRetriever = HttpDataRetriever;
        var RequestInfo = (function()
            {
                function RequestInfo(url, req)
                {
                    this.urlRequest = url;
                    this.request = req;
                    this.bandwidthInfo = new OnePlayer.Heuristics.BandwidthInfo
                }
                return RequestInfo
            })()
    })(OnePlayer.DataRetriever || (OnePlayer.DataRetriever = {}));
    var DataRetriever = OnePlayer.DataRetriever
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(DataRetriever)
    {
        "use strict";
        var Action;
        (function(Action)
        {
            Action[Action["noRetry"] = 0] = "noRetry";
            Action[Action["nextTrack"] = 1] = "nextTrack";
            Action[Action["nextSegment"] = 2] = "nextSegment";
            Action[Action["same"] = 3] = "same"
        })(Action || (Action = {}));
        ;
        var HttpRetryPolicy = (function()
            {
                function HttpRetryPolicy()
                {
                    this._moduleId = "httpRetryPolicy";
                    this._disposed = false
                }
                HttpRetryPolicy.prototype.dispose = function()
                {
                    if (!this._disposed)
                    {
                        this._disposed = true
                    }
                };
                HttpRetryPolicy.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onRetry, this)
                };
                HttpRetryPolicy.prototype.onRetry = function(reqContext)
                {
                    var _this = this;
                    OnePlayer.Log.verbose(5, "onRetry");
                    reqContext.currentModuleId = this._moduleId;
                    return new Promise(function(resolve, reject)
                        {
                            if (_this._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (!reqContext.requestedStream)
                            {
                                resolve();
                                return
                            }
                            var failInfo = reqContext.failTracker;
                            var streamingInfo = reqContext.requestedStream.streamingInfo;
                            var settings = reqContext.sessionContext.httpRetryPolicySettings;
                            if (failInfo.isNone() || null !== streamingInfo.pendingSeekPositionInSec)
                            {
                                resolve();
                                return
                            }
                            if (0 === failInfo.totalRetried)
                            {
                                failInfo.tracksToTry = _this._createTrackToTry(settings, reqContext.requestedStream, failInfo.lastTrack)
                            }
                            var nextAction = _this._getAction(settings, reqContext.failTracker);
                            switch (nextAction)
                            {
                                case 0:
                                    reqContext.externalFailure = failInfo.lastFailure;
                                    OnePlayer.Log.verbose(5, "onRetry: onRetry," + "mediaTimestamp: " + streamingInfo.currentSegment.segmentInfo.mediaTimestamp);
                                    reject();
                                    return;
                                case 1:
                                    failInfo.sameSegmentRetried++;
                                    reqContext.selectedSegment = streamingInfo.currentSegment;
                                    reqContext.selectedTrack = failInfo.tracksToTry[++failInfo.trackToTryIdx];
                                    break;
                                case 2:
                                    if (streamingInfo.currentSegment.next)
                                    {
                                        streamingInfo.currentSegment = streamingInfo.currentSegment.next;
                                        failInfo.segmentsSkipped++;
                                        failInfo.resetForSegment();
                                        reqContext.selectedSegment = streamingInfo.currentSegment;
                                        reqContext.selectedTrack = failInfo.tracksToTry[0]
                                    }
                                    else
                                    {
                                        reqContext.externalFailure = failInfo.lastFailure;
                                        OnePlayer.Log.verbose(5, "onRetry: noRetry, EOS" + " mediaTimestamp: " + streamingInfo.currentSegment.segmentInfo.mediaTimestamp);
                                        reject();
                                        return
                                    }
                                    break;
                                case 3:
                                    failInfo.sameSegmentRetried++;
                                    reqContext.selectedSegment = streamingInfo.currentSegment;
                                    reqContext.selectedTrack = failInfo.tracksToTry[0];
                                    break;
                                default:
                                    throw new Error("unexpected retry action: " + nextAction);
                                    break
                            }
                            failInfo.totalRetried++;
                            OnePlayer.Log.verbose(5, "onRetry: " + Action[nextAction] + " bitrate: " + reqContext.selectedTrack.bitrate + " mediaTimestamp: " + reqContext.selectedSegment.segmentInfo.mediaTimestamp);
                            resolve()
                        })
                };
                HttpRetryPolicy.prototype._getAction = function(settings, failInfo)
                {
                    if (failInfo.totalRetried + 1 > settings.maxTotalRetries)
                    {
                        return 0
                    }
                    var action;
                    if (failInfo.isLastNetworkFail())
                    {
                        action = 3
                    }
                    else
                    {
                        action = (failInfo.trackToTryIdx + 1 < failInfo.tracksToTry.length) ? 1 : 2
                    }
                    if (3 === action || 1 === action)
                    {
                        if (failInfo.sameSegmentRetried + 1 > settings.maxRetryPerSegment)
                        {
                            action = 2
                        }
                    }
                    if (2 == action && failInfo.segmentsSkipped + 1 > settings.maxSkipSegments)
                    {
                        action = 0
                    }
                    return action
                };
                HttpRetryPolicy.prototype._createTrackToTry = function(settings, stream, firstTrack)
                {
                    var tracksToTry = [];
                    var initialTrackIdx = stream.tracks.indexOf(firstTrack);
                    var trackCount = stream.tracks.length;
                    tracksToTry.push(stream.tracks[initialTrackIdx]);
                    for (var idx = initialTrackIdx - 1; idx >= 0; idx--)
                    {
                        if (stream.tracks[idx].streamingInfo.selectable)
                        {
                            tracksToTry.push(stream.tracks[idx])
                        }
                    }
                    if (!settings.retryLowerBitrateOnly)
                    {
                        for (var idx = initialTrackIdx + 1; idx < trackCount; idx++)
                        {
                            if (stream.tracks[idx].streamingInfo.selectable)
                            {
                                tracksToTry.push(stream.tracks[idx])
                            }
                        }
                    }
                    return tracksToTry
                };
                return HttpRetryPolicy
            })();
        DataRetriever.HttpRetryPolicy = HttpRetryPolicy
    })(OnePlayer.DataRetriever || (OnePlayer.DataRetriever = {}));
    var DataRetriever = OnePlayer.DataRetriever
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Heuristics)
    {
        "use strict";
        var HttpStatus;
        (function(HttpStatus)
        {
            HttpStatus[HttpStatus["success"] = 200] = "success";
            HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
            HttpStatus[HttpStatus["badGateway"] = 502] = "badGateway"
        })(HttpStatus || (HttpStatus = {}));
        var InitialBandwidthDataUrlFormatter = (function()
            {
                function InitialBandwidthDataUrlFormatter()
                {
                    this._moduleId = "InitialBandwidthDataUrlFormatter";
                    this._disposed = false
                }
                InitialBandwidthDataUrlFormatter.prototype.dispose = function()
                {
                    this._disposed = true
                };
                InitialBandwidthDataUrlFormatter.prototype.init = function(sessionContext)
                {
                    var presentationWorkflow = sessionContext.workflows[0];
                    presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onPreFetchUrlFormat, this)
                };
                InitialBandwidthDataUrlFormatter.prototype.onPreFetchUrlFormat = function(reqContext)
                {
                    OnePlayer.Log.verbose(6, "OnPreFetchUrlFormat");
                    reqContext.currentModuleId = this._moduleId;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (that._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            if (!reqContext.sessionContext.heuristicSettings.preFetchDataEnabled)
                            {
                                resolve();
                                return
                            }
                            var streams = reqContext.sessionContext.commonPresentation.periods[0].streams;
                            var videostream = streams.findFirst(function(l)
                                {
                                    return l.type === 0
                                });
                            reqContext.requestedStream = videostream;
                            var bitrate = videostream.tracks[0].bitrate;
                            if (bitrate === null || bitrate === undefined)
                            {
                                throw new Error("bitrate of first video track not set in presentation");
                            }
                            var urlTemplate = reqContext.requestedStream.mediaUrlTemplate;
                            if (!urlTemplate)
                            {
                                throw new Error("media url template is not set for the video stream");
                            }
                            var segmentContainer = videostream.segments;
                            var requestedSegment = segmentContainer.first.segmentInfo;
                            var urlFormatted = OnePlayer.Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate.toString(), requestedSegment.mediaTimestamp.toString());
                            reqContext.urlsToRetrieve.push(new OnePlayer.Context.UrlRequest(urlFormatted));
                            reqContext.sessionContext.heuristicSettings.preFetchDataEnabled = false;
                            resolve()
                        })
                };
                return InitialBandwidthDataUrlFormatter
            })();
        Heuristics.InitialBandwidthDataUrlFormatter = InitialBandwidthDataUrlFormatter
    })(OnePlayer.Heuristics || (OnePlayer.Heuristics = {}));
    var Heuristics = OnePlayer.Heuristics
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Presentation)
    {
        "use strict";
        var InitialStreamSelector = (function()
            {
                function InitialStreamSelector()
                {
                    this._moduleId = "streamSelector";
                    this._disposed = false;
                    this._initial = true
                }
                InitialStreamSelector.prototype.dispose = function()
                {
                    this._disposed = true
                };
                InitialStreamSelector.prototype.init = function(sessionContext)
                {
                    var presentationWorkflow = sessionContext.workflows[0];
                    presentationWorkflow.addHandler(presentationWorkflow.stepEvents.requestEnd, this.onSelectStreams, this)
                };
                InitialStreamSelector.prototype.onSelectStreams = function(reqContext)
                {
                    var _this = this;
                    reqContext.currentModuleId = this._moduleId;
                    return new Promise(function(resolve, reject)
                        {
                            var videoFound = false,
                                audioFound = false,
                                presentation = reqContext.sessionContext.commonPresentation;
                            if (_this._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("Disposed");
                                return
                            }
                            if (!_this._initial)
                            {
                                resolve();
                                return
                            }
                            if (!presentation)
                            {
                                throw new Error("CommonPresentation is empty");
                            }
                            presentation.periods[0].streams.forEach(function(element)
                            {
                                element.streamingInfo.selected = false
                            });
                            for (var idx = 0; idx < presentation.periods[0].streams.length; idx++)
                            {
                                if (0 === presentation.periods[0].streams[idx].type && !videoFound)
                                {
                                    videoFound = true;
                                    presentation.periods[0].streams[idx].streamingInfo.selected = true
                                }
                                else if (1 === presentation.periods[0].streams[idx].type && !audioFound)
                                {
                                    audioFound = true;
                                    presentation.periods[0].streams[idx].streamingInfo.selected = true
                                }
                            }
                            if (!videoFound || !audioFound)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164261634);
                                reject("Video or audio streams not found");
                                return
                            }
                            _this._initial = false;
                            resolve()
                        })
                };
                return InitialStreamSelector
            })();
        Presentation.InitialStreamSelector = InitialStreamSelector
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Presentation)
    {
        "use strict";
        var MediaSegmentInfo = (function()
            {
                function MediaSegmentInfo(index, mediaTimestamp, mediaDuration, presentationOffset, timescale)
                {
                    this.index = index;
                    this._timescale = timescale;
                    this._mediaTimestamp = mediaTimestamp;
                    this._presTimeInSec = (this._mediaTimestamp + presentationOffset) / timescale;
                    if (mediaDuration)
                    {
                        this._mediaDuration = mediaDuration;
                        this._durationInSec = mediaDuration / timescale
                    }
                }
                Object.defineProperty(MediaSegmentInfo.prototype, "mediaTimestamp", {
                    get: function()
                    {
                        return this._mediaTimestamp
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(MediaSegmentInfo.prototype, "mediaDuration", {
                    get: function()
                    {
                        return this._mediaDuration
                    }, set: function(value)
                        {
                            this._mediaDuration = value;
                            this._durationInSec = value / this._timescale
                        }, enumerable: true, configurable: true
                });
                Object.defineProperty(MediaSegmentInfo.prototype, "presTimeInSec", {
                    get: function()
                    {
                        return this._presTimeInSec
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(MediaSegmentInfo.prototype, "durationInSec", {
                    get: function()
                    {
                        return this._durationInSec
                    }, enumerable: true, configurable: true
                });
                return MediaSegmentInfo
            })();
        Presentation.MediaSegmentInfo = MediaSegmentInfo;
        var SegmentRunEntry = (function()
            {
                function SegmentRunEntry(index, mediaTimestamp, mediaDuration, presentationOffset, timescale, repeat, containerIndex)
                {
                    this.firstSegment = new MediaSegmentInfo(index, mediaTimestamp, mediaDuration, presentationOffset, timescale);
                    this.repeat = repeat;
                    this.containerIndex = containerIndex
                }
                return SegmentRunEntry
            })();
        Presentation.SegmentRunEntry = SegmentRunEntry;
        var MediaSegmentInfoIterator = (function()
            {
                function MediaSegmentInfoIterator(container, currentRunEntry, runEntryRepeatPosition)
                {
                    this._container = container;
                    this._pubTime = container.pubTime;
                    this._runEntry = currentRunEntry;
                    this._runEntryRepeatPosition = runEntryRepeatPosition;
                    this.segmentInfo = new MediaSegmentInfo(currentRunEntry.firstSegment.index + runEntryRepeatPosition, currentRunEntry.firstSegment.mediaTimestamp + runEntryRepeatPosition * currentRunEntry.firstSegment.mediaDuration, currentRunEntry.firstSegment.mediaDuration, container.presentationTimeOffset, container.timescale)
                }
                Object.defineProperty(MediaSegmentInfoIterator.prototype, "next", {
                    get: function()
                    {
                        this._updateIterator();
                        var nextRunEntry = this._runEntry,
                            nextRunEntryRepeat = 0;
                        if (this._runEntryRepeatPosition + 1 > this._runEntry.repeat)
                        {
                            var nextRunEntryIdx = this._runEntry.containerIndex + 1;
                            if (nextRunEntryIdx < this._container.segmentTable.length)
                            {
                                nextRunEntry = this._container.segmentTable[nextRunEntryIdx]
                            }
                            else
                            {
                                OnePlayer.Log.warning(4, "Cannot get next iterator");
                                return null
                            }
                        }
                        else
                        {
                            nextRunEntryRepeat = this._runEntryRepeatPosition + 1
                        }
                        return new MediaSegmentInfoIterator(this._container, nextRunEntry, nextRunEntryRepeat)
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(MediaSegmentInfoIterator.prototype, "prev", {
                    get: function()
                    {
                        this._updateIterator();
                        var prevRunEntry = this._runEntry,
                            prevRunEntryRepeat;
                        if (this._runEntryRepeatPosition === 0)
                        {
                            var prevRunEntryIdx = this._runEntry.containerIndex - 1;
                            if (prevRunEntryIdx >= 0)
                            {
                                prevRunEntry = this._container.segmentTable[prevRunEntryIdx];
                                prevRunEntryRepeat = prevRunEntry.repeat
                            }
                            else
                            {
                                OnePlayer.Log.warning(4, "Cannot get previous iterator");
                                return null
                            }
                        }
                        else
                        {
                            prevRunEntryRepeat = this._runEntryRepeatPosition - 1
                        }
                        return new MediaSegmentInfoIterator(this._container, prevRunEntry, prevRunEntryRepeat)
                    }, enumerable: true, configurable: true
                });
                MediaSegmentInfoIterator.prototype._updateIterator = function()
                {
                    if (this._container.pubTime.getTime() > this._pubTime.getTime())
                    {
                        this._pubTime = this._container.pubTime;
                        var tentativeRunEntryIdx = this._runEntry.containerIndex,
                            tentativeRunEntry = this._container.segmentTable[tentativeRunEntryIdx];
                        while (!tentativeRunEntry && tentativeRunEntryIdx > 0)
                        {
                            tentativeRunEntryIdx--;
                            tentativeRunEntry = this._container.segmentTable[tentativeRunEntryIdx]
                        }
                        if (tentativeRunEntry)
                        {
                            if (tentativeRunEntry.firstSegment.index <= this.segmentInfo.index && this.segmentInfo.index <= tentativeRunEntry.firstSegment.index + tentativeRunEntry.repeat)
                            {
                                this._runEntry = tentativeRunEntry;
                                this._runEntryRepeatPosition = this.segmentInfo.index - tentativeRunEntry.firstSegment.index;
                                return
                            }
                            if (this.segmentInfo.index > tentativeRunEntry.firstSegment.index + tentativeRunEntry.repeat && this._container.segmentTable.length > tentativeRunEntryIdx + 1)
                            {
                                var nextRunEntry = this._container.segmentTable[tentativeRunEntryIdx + 1];
                                if (this.segmentInfo.index <= nextRunEntry.firstSegment.index + nextRunEntry.repeat)
                                {
                                    this._runEntry = nextRunEntry;
                                    this._runEntryRepeatPosition = this.segmentInfo.index - nextRunEntry.firstSegment.index;
                                    return
                                }
                            }
                        }
                        var newIter = this._container.getByIndex(this.segmentInfo.index);
                        if (!newIter)
                        {
                            throw new Error("Referenced segment not found in presentation");
                        }
                        this._runEntry = newIter._runEntry;
                        this._runEntryRepeatPosition = newIter._runEntryRepeatPosition
                    }
                };
                return MediaSegmentInfoIterator
            })();
        Presentation.MediaSegmentInfoIterator = MediaSegmentInfoIterator;
        var MediaSegmentInfoContainer = (function()
            {
                function MediaSegmentInfoContainer(timescale, presentationTimeOffset, pubTime)
                {
                    this.timescale = timescale;
                    this.presentationTimeOffset = presentationTimeOffset;
                    this.pubTime = pubTime;
                    this.segmentTable = []
                }
                MediaSegmentInfoContainer.prototype.dispose = function()
                {
                    this.segmentTable.length = 0
                };
                Object.defineProperty(MediaSegmentInfoContainer.prototype, "first", {
                    get: function()
                    {
                        var iter = null;
                        if (this.segmentTable.length > 0)
                        {
                            iter = new MediaSegmentInfoIterator(this, this.segmentTable[0], 0)
                        }
                        return iter
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(MediaSegmentInfoContainer.prototype, "last", {
                    get: function()
                    {
                        var entry,
                            iter = null;
                        if (this.segmentTable.length > 0)
                        {
                            entry = this.segmentTable[this.segmentTable.length - 1];
                            iter = new MediaSegmentInfoIterator(this, entry, entry.repeat)
                        }
                        return iter
                    }, enumerable: true, configurable: true
                });
                MediaSegmentInfoContainer.prototype.addMediaSegmentRun = function(newSegmentRunEntry)
                {
                    var lastEntry = null,
                        lastEntryEnd = 0;
                    if (this.segmentTable.length > 0)
                    {
                        lastEntry = this.segmentTable[this.segmentTable.length - 1];
                        lastEntryEnd = lastEntry.firstSegment.mediaTimestamp + lastEntry.firstSegment.mediaDuration * (lastEntry.repeat + 1);
                        if (lastEntryEnd > newSegmentRunEntry.firstSegment.mediaTimestamp)
                        {
                            OnePlayer.Log.error(4, "Cannot add segment with timestamp " + newSegmentRunEntry.firstSegment.mediaTimestamp + " to middle of table [" + this.segmentTable[0].firstSegment.mediaTimestamp + "," + lastEntryEnd + "]");
                            newSegmentRunEntry = null
                        }
                    }
                    if (newSegmentRunEntry)
                    {
                        this.segmentTable.push(newSegmentRunEntry);
                        OnePlayer.Log.verbose(4, "Added segment with t=" + newSegmentRunEntry.firstSegment.mediaTimestamp + " r=" + newSegmentRunEntry.repeat)
                    }
                };
                MediaSegmentInfoContainer.prototype.getByIndex = function(index)
                {
                    var iter = null,
                        idx;
                    if (0 === this.segmentTable.length)
                    {
                        return null
                    }
                    idx = OnePlayer.Common.binarySearch(index, this.segmentTable, this._compareIndex);
                    if (idx !== -1)
                    {
                        var runEntry = this.segmentTable[idx],
                            repeatPosition = index - runEntry.firstSegment.index;
                        iter = new MediaSegmentInfoIterator(this, runEntry, repeatPosition)
                    }
                    if (!iter)
                    {
                        OnePlayer.Log.verbose(4, "Entry with index " + index + " not found")
                    }
                    return iter
                };
                MediaSegmentInfoContainer.prototype.getBySegmentStartTime = function(presTimeInSec, maxErrorInSec)
                {
                    var iter = null,
                        idx;
                    if (0 === this.segmentTable.length)
                    {
                        return null
                    }
                    if (!maxErrorInSec)
                    {
                        maxErrorInSec = OnePlayer.Common.timestampDeltaThreshold
                    }
                    if (Math.abs(presTimeInSec - this.segmentTable[0].firstSegment.presTimeInSec) < maxErrorInSec)
                    {
                        return this.first
                    }
                    idx = OnePlayer.Common.binarySearch(presTimeInSec, this.segmentTable, this._compareTimestampInSec);
                    if (idx !== -1)
                    {
                        var runEntry = this.segmentTable[idx],
                            repeatPosition;
                        repeatPosition = Math.round((presTimeInSec - runEntry.firstSegment.presTimeInSec) / runEntry.firstSegment.durationInSec);
                        if (repeatPosition > runEntry.repeat)
                        {
                            if (idx + 1 < this.segmentTable.length)
                            {
                                runEntry = this.segmentTable[idx + 1];
                                repeatPosition = 0
                            }
                            else
                            {
                                OnePlayer.Log.verbose(4, "Cannot find match for " + presTimeInSec);
                                return null
                            }
                        }
                        var timeFoundInSec = runEntry.firstSegment.presTimeInSec + repeatPosition * runEntry.firstSegment.durationInSec;
                        if (Math.abs(presTimeInSec - timeFoundInSec) > maxErrorInSec)
                        {
                            OnePlayer.Log.verbose(4, "Cannot find match within error range for " + presTimeInSec);
                            return null
                        }
                        iter = new MediaSegmentInfoIterator(this, runEntry, repeatPosition)
                    }
                    return iter
                };
                MediaSegmentInfoContainer.prototype.getByInSegmentTimestamp = function(presTimeInSec)
                {
                    var iter = null,
                        idx;
                    if (0 === this.segmentTable.length)
                    {
                        return null
                    }
                    idx = OnePlayer.Common.binarySearch(presTimeInSec, this.segmentTable, this._compareTimestampInSec);
                    if (idx !== -1)
                    {
                        var runEntry = this.segmentTable[idx],
                            repeatPosition;
                        repeatPosition = Math.floor((presTimeInSec - runEntry.firstSegment.presTimeInSec) / runEntry.firstSegment.durationInSec);
                        iter = new MediaSegmentInfoIterator(this, runEntry, repeatPosition)
                    }
                    if (!iter)
                    {
                        OnePlayer.Log.verbose(4, "Entry including timestamp " + presTimeInSec + " not found")
                    }
                    return iter
                };
                MediaSegmentInfoContainer.prototype.update = function(newIContainer)
                {
                    var _this = this;
                    var newContainer = newIContainer,
                        iter = null,
                        idxOffset = 0;
                    if (newContainer.pubTime.getTime() <= this.pubTime.getTime())
                    {
                        return
                    }
                    this.pubTime = newContainer.pubTime;
                    iter = this.getBySegmentStartTime(newContainer.first.segmentInfo.presTimeInSec);
                    if (iter && iter.segmentInfo.index !== newContainer.first.segmentInfo.index)
                    {
                        idxOffset = iter.segmentInfo.index;
                        if (OnePlayer.Common.diffTimes(newContainer.first.segmentInfo.presTimeInSec, iter.segmentInfo.presTimeInSec))
                        {
                            throw new Error("Segment mismatch during container update");
                        }
                    }
                    this.segmentTable.length = 0;
                    newContainer.segmentTable.forEach(function(value)
                    {
                        value.firstSegment.index += idxOffset;
                        _this.segmentTable.push(value)
                    })
                };
                MediaSegmentInfoContainer.prototype._compareTimestampInSec = function(presTimeInSec, entry)
                {
                    var retVal = 0;
                    if (presTimeInSec < entry.firstSegment.presTimeInSec)
                    {
                        retVal = -1
                    }
                    else if (presTimeInSec >= entry.firstSegment.presTimeInSec + (entry.repeat + 1) * entry.firstSegment.durationInSec)
                    {
                        retVal = 1
                    }
                    return retVal
                };
                MediaSegmentInfoContainer.prototype._compareIndex = function(index, entry)
                {
                    var retVal = 0;
                    if (index < entry.firstSegment.index)
                    {
                        retVal = -1
                    }
                    else if (index >= entry.firstSegment.index + (entry.repeat + 1))
                    {
                        retVal = 1
                    }
                    return retVal
                };
                return MediaSegmentInfoContainer
            })();
        Presentation.MediaSegmentInfoContainer = MediaSegmentInfoContainer;
        (function(WorkflowState)
        {
            WorkflowState[WorkflowState["needsToBeScheduled"] = 0] = "needsToBeScheduled";
            WorkflowState[WorkflowState["inProgress"] = 1] = "inProgress";
            WorkflowState[WorkflowState["endOfStream"] = 2] = "endOfStream"
        })(Presentation.WorkflowState || (Presentation.WorkflowState = {}));
        var WorkflowState = Presentation.WorkflowState;
        var MediaStreamStreamingInfo = (function()
            {
                function MediaStreamStreamingInfo()
                {
                    this.selected = false;
                    this.fetchInitSegment = true;
                    this.currentSegment = null;
                    this.pendingSeekPositionInSec = null;
                    this.workflowState = 0;
                    this.sourceBuffer = null;
                    this.lastDownloadedTrack = null
                }
                MediaStreamStreamingInfo.prototype.dispose = function()
                {
                    this.currentSegment = null;
                    if (this.sourceBuffer)
                    {
                        this.sourceBuffer.dispose();
                        this.sourceBuffer = null
                    }
                    this.lastDownloadedTrack = null
                };
                return MediaStreamStreamingInfo
            })();
        Presentation.MediaStreamStreamingInfo = MediaStreamStreamingInfo;
        var MediaTrackStreamingInfo = (function()
            {
                function MediaTrackStreamingInfo()
                {
                    this.selectable = true
                }
                return MediaTrackStreamingInfo
            })();
        Presentation.MediaTrackStreamingInfo = MediaTrackStreamingInfo
    })(OnePlayer.Presentation || (OnePlayer.Presentation = {}));
    var Presentation = OnePlayer.Presentation
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(SegmentLocator)
    {
        "use strict";
        var Dash = (function()
            {
                function Dash()
                {
                    this._moduleId = "SegmentLocator.Dash";
                    this._disposed = false
                }
                Dash.prototype.init = function(sessionContext)
                {
                    var mediaWorkflow = sessionContext.workflows[1];
                    mediaWorkflow.addHandler(mediaWorkflow.stepEvents.requestBegin, this.onFindSegment, this)
                };
                Dash.prototype.dispose = function()
                {
                    this._disposed = true
                };
                Dash.prototype.onFindSegment = function(reqContext)
                {
                    OnePlayer.Log.verbose(9, "onFindSegment");
                    reqContext.currentModuleId = this._moduleId;
                    var that = this;
                    return new Promise(function(resolve, reject)
                        {
                            if (that._disposed)
                            {
                                OnePlayer.Failure.attachFailureToRequest(reqContext, reqContext.currentModuleId, 2164260864);
                                reject("object is already disposed.");
                                return
                            }
                            var currentStream = reqContext.requestedStream,
                                currentSegment = currentStream.streamingInfo.currentSegment,
                                segmentContainer = currentStream.segments;
                            if (reqContext.selectedSegment)
                            {
                                resolve();
                                return
                            }
                            if (null !== currentStream.streamingInfo.pendingSeekPositionInSec)
                            {
                                currentStream.streamingInfo.currentSegment = segmentContainer.getByInSegmentTimestamp(currentStream.streamingInfo.pendingSeekPositionInSec);
                                currentStream.streamingInfo.pendingSeekPositionInSec = null
                            }
                            else if (!currentSegment)
                            {
                                var sessionCtx = reqContext.sessionContext;
                                if (isNaN(sessionCtx.startPositionInSec))
                                {
                                    currentStream.streamingInfo.currentSegment = segmentContainer.first
                                }
                                else
                                {
                                    currentStream.streamingInfo.currentSegment = segmentContainer.getByInSegmentTimestamp(sessionCtx.startPositionInSec)
                                }
                            }
                            else
                            {
                                currentStream.streamingInfo.currentSegment = currentSegment.next
                            }
                            if (null === currentStream.streamingInfo.currentSegment)
                            {
                                if (reqContext.sessionContext.commonPresentation.isLive)
                                {
                                    reqContext.state = 2;
                                    reqContext.retryWaitTimeMSec = Dash._retryWaitTimeMSec;
                                    currentStream.streamingInfo.currentSegment = currentSegment
                                }
                                else
                                {
                                    reqContext.state = 1
                                }
                            }
                            resolve()
                        })
                };
                Dash._retryWaitTimeMSec = 2000;
                return Dash
            })();
        SegmentLocator.Dash = Dash
    })(OnePlayer.SegmentLocator || (OnePlayer.SegmentLocator = {}));
    var SegmentLocator = OnePlayer.SegmentLocator
})(OnePlayer || (OnePlayer = {}));
Array.prototype.findFirst = function(predicate)
{
    for (var idx = 0; idx < this.length; idx++)
    {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this)))
        {
            return value
        }
    }
    return null
};
Array.prototype.findLast = function(predicate)
{
    for (var idx = this.length - 1; idx >= 0; idx--)
    {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this)))
        {
            return value
        }
    }
    return null
};
Array.prototype.findIndexOf = function(predicate)
{
    for (var idx = 0; idx < this.length; idx++)
    {
        var value = this[idx];
        if (predicate.call(this, value, idx, Object(this)))
        {
            return idx
        }
    }
    return -1
};
Array.prototype.removeFirst = function(predicate)
{
    var index = this.findIndexOf(predicate);
    var value = null;
    if (index !== -1)
    {
        value = this.splice(index, 1)[0]
    }
    return value
};
Uint8Array.prototype.isEqual = function(otherArray)
{
    if (this.length === otherArray.length)
    {
        for (var i = 0; i < this.length; i++)
        {
            if (this[i] !== otherArray[i])
            {
                return false
            }
        }
        return true
    }
    return false
};
var OnePlayer;
(function(OnePlayer)
{
    (function(Util)
    {
        "use strict";
        var AverageCalculator = (function()
            {
                function AverageCalculator(maxWindowLength)
                {
                    this._slidingWindow = [];
                    this._sum = 0;
                    this._maxWindowLength = maxWindowLength;
                    if (maxWindowLength < 1)
                    {
                        throw new Error("window length for average class should be greater than 0");
                    }
                }
                AverageCalculator.prototype.dispose = function()
                {
                    this._slidingWindow = null
                };
                Object.defineProperty(AverageCalculator.prototype, "average", {
                    get: function()
                    {
                        if (this._slidingWindow.length === 0)
                        {
                            return 0
                        }
                        return this._sum / this._slidingWindow.length
                    }, enumerable: true, configurable: true
                });
                Object.defineProperty(AverageCalculator.prototype, "latest", {
                    get: function()
                    {
                        if (this._slidingWindow.length === 0)
                        {
                            return 0
                        }
                        return this._slidingWindow[this._slidingWindow.length - 1]
                    }, enumerable: true, configurable: true
                });
                AverageCalculator.prototype.addValue = function(value)
                {
                    if (this._slidingWindow.length >= this._maxWindowLength)
                    {
                        var removeItem = this._slidingWindow.splice(0, 1);
                        this._sum -= removeItem[0]
                    }
                    this._slidingWindow.push(value);
                    this._sum += value
                };
                return AverageCalculator
            })();
        Util.AverageCalculator = AverageCalculator
    })(OnePlayer.Util || (OnePlayer.Util = {}));
    var Util = OnePlayer.Util
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Common)
    {
        "use strict";
        Common.timestampDeltaThreshold = 0.000001;
        function diffTimes(time1, time2, maxError)
        {
            if (typeof maxError === "undefined")
            {
                maxError = Common.timestampDeltaThreshold
            }
            var difference = time2 - time1;
            if (Math.abs(difference) < maxError)
            {
                difference = 0
            }
            return difference
        }
        Common.diffTimes = diffTimes;
        var TimeRange = (function()
            {
                function TimeRange(rangeStart, rangeEnd)
                {
                    this.startInSec = rangeStart;
                    this.endInSec = rangeEnd
                }
                return TimeRange
            })();
        Common.TimeRange = TimeRange;
        var TimeRangeSet = (function()
            {
                function TimeRangeSet()
                {
                    this._timeRanges = []
                }
                TimeRangeSet.prototype.dispose = function()
                {
                    this._timeRanges = null
                };
                Object.defineProperty(TimeRangeSet.prototype, "length", {
                    get: function()
                    {
                        return this._timeRanges.length
                    }, enumerable: true, configurable: true
                });
                TimeRangeSet.prototype.start = function(index)
                {
                    return this._timeRanges[index].startInSec
                };
                TimeRangeSet.prototype.end = function(index)
                {
                    return this._timeRanges[index].endInSec
                };
                TimeRangeSet.prototype.duration = function(index)
                {
                    return this._timeRanges[index].endInSec - this._timeRanges[index].startInSec
                };
                TimeRangeSet.prototype.extendLast = function(newEndInSec)
                {
                    this._timeRanges[this._timeRanges.length - 1].endInSec = newEndInSec
                };
                TimeRangeSet.prototype.addRange = function(range)
                {
                    this._timeRanges.push(range)
                };
                TimeRangeSet.prototype.addRanges = function(ranges)
                {
                    for (var i = 0; i < ranges.length; i++)
                    {
                        this.addRange(new TimeRange(ranges.start(i), ranges.end(i)))
                    }
                };
                return TimeRangeSet
            })();
        Common.TimeRangeSet = TimeRangeSet;
        var SegmentData = (function()
            {
                function SegmentData(data, presTimeInSec, durationInSec)
                {
                    this.presTimeInSec = presTimeInSec;
                    this.durationInSec = durationInSec;
                    this.data = data
                }
                Object.defineProperty(SegmentData.prototype, "endTimestampInSec", {
                    get: function()
                    {
                        return this.presTimeInSec + this.durationInSec
                    }, enumerable: true, configurable: true
                });
                return SegmentData
            })();
        Common.SegmentData = SegmentData;
        function binarySearch(key, array, compare)
        {
            var start = 0,
                end = array.length - 1,
                middle = 0;
            while (start <= end)
            {
                middle = Math.floor((start + end) / 2);
                var cmp = compare(key, array[middle]);
                if (cmp < 0)
                {
                    end = middle - 1
                }
                else if (cmp > 0)
                {
                    start = middle + 1
                }
                else
                {
                    return middle
                }
            }
            return (-1)
        }
        Common.binarySearch = binarySearch
    })(OnePlayer.Common || (OnePlayer.Common = {}));
    var Common = OnePlayer.Common
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(DataViewReaderWriter)
    {
        "use strict";
        var Reader = (function()
            {
                function Reader(data, startOffset)
                {
                    if (typeof startOffset === "undefined")
                    {
                        startOffset = 0
                    }
                    this.data = data;
                    this.readPos = startOffset
                }
                Reader.prototype.getUint8 = function()
                {
                    return this.data.getUint8(this.readPos++)
                };
                Reader.prototype.getUint32 = function()
                {
                    var retVal = this.data.getUint32(this.readPos);
                    this.readPos += 4;
                    return retVal
                };
                Reader.prototype.getInt32 = function()
                {
                    var retVal = this.data.getInt32(this.readPos);
                    this.readPos += 4;
                    return retVal
                };
                Reader.prototype.getBytes = function(len)
                {
                    var retVal = new Uint8Array(len);
                    for (var i = 0; i < len; i++)
                    {
                        retVal[i] = this.getUint8()
                    }
                    return retVal
                };
                Reader.prototype.readString = function(len)
                {
                    var retVal = "";
                    for (var i = 0; i < len; i++)
                    {
                        retVal += String.fromCharCode(this.getUint8())
                    }
                    return retVal
                };
                return Reader
            })();
        DataViewReaderWriter.Reader = Reader;
        var Writer = (function()
            {
                function Writer(data, startOffset)
                {
                    if (typeof startOffset === "undefined")
                    {
                        startOffset = 0
                    }
                    this.data = data;
                    this.writePos = startOffset
                }
                Writer.prototype.setUint8 = function(value)
                {
                    this.data.setUint8(this.writePos++, value)
                };
                Writer.prototype.setUint32 = function(value)
                {
                    this.data.setUint32(this.writePos, value);
                    this.writePos += 4
                };
                Writer.prototype.setInt32 = function(value)
                {
                    this.data.setInt32(this.writePos, value);
                    this.writePos += 4;
                    ;
                };
                Writer.prototype.setString = function(str)
                {
                    for (var i = 0; i < str.length; i++)
                    {
                        this.setUint8(str.charCodeAt(i))
                    }
                };
                Writer.prototype.setBytes = function(data)
                {
                    for (var i = 0; i < data.length; i++)
                    {
                        this.setUint8(data[i])
                    }
                };
                return Writer
            })();
        DataViewReaderWriter.Writer = Writer
    })(OnePlayer.DataViewReaderWriter || (OnePlayer.DataViewReaderWriter = {}));
    var DataViewReaderWriter = OnePlayer.DataViewReaderWriter
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Events)
    {
        "use strict";
        var Manager = (function()
            {
                function Manager(videoElement, allowDuplicateHandlers)
                {
                    if (typeof videoElement === "undefined")
                    {
                        videoElement = null
                    }
                    if (typeof allowDuplicateHandlers === "undefined")
                    {
                        allowDuplicateHandlers = true
                    }
                    this._videoElement = videoElement;
                    this._allowDuplicateHandlers = allowDuplicateHandlers;
                    this._registrations = {}
                }
                Manager.prototype.dispose = function()
                {
                    this._registrations = null
                };
                Manager.prototype.getHandlers = function(name)
                {
                    if (!(name in this._registrations))
                    {
                        this._registrations[name] = []
                    }
                    return this._registrations[name]
                };
                Manager.prototype.addHandler = function(name, functionHandler, callerInstance)
                {
                    var handlers = this.getHandlers(name);
                    if (this._allowDuplicateHandlers || -1 === this._findHandlerByFunction(handlers, functionHandler))
                    {
                        var newHandler = new Handler(callerInstance, functionHandler);
                        handlers[handlers.length] = newHandler
                    }
                };
                Manager.prototype.removeHandler = function(name, functionHandler)
                {
                    var handlers = this.getHandlers(name);
                    var idx = this._findHandlerByFunction(handlers, functionHandler);
                    while (idx !== -1)
                    {
                        handlers.splice(idx, 1);
                        idx = this._findHandlerByFunction(handlers, functionHandler)
                    }
                };
                Manager.prototype.dispatchEvent = function(name, message)
                {
                    var that = this;
                    var i = 0;
                    var handlers = this.getHandlers(name).slice();
                    function callNext()
                    {
                        var eventInfo = new EventInfo(name, that._videoElement, message);
                        handlers[i].functionHandler.call(handlers[i].callerInstance, eventInfo);
                        if (++i < handlers.length)
                        {
                            setTimeout(callNext, 0)
                        }
                    }
                    if (handlers.length > 0)
                    {
                        setTimeout(callNext, 0)
                    }
                };
                Manager.prototype._findHandlerByFunction = function(handlers, functionHandler)
                {
                    var index = -1;
                    for (var i = 0; i < handlers.length; i++)
                    {
                        if (handlers[i].functionHandler === functionHandler)
                        {
                            index = i;
                            break
                        }
                    }
                    return index
                };
                return Manager
            })();
        Events.Manager = Manager;
        var EventInfo = (function()
            {
                function EventInfo(type, videoElement, message)
                {
                    this.type = type;
                    this.currentDate = new Date;
                    this.videoElement = videoElement;
                    this.presentationTimeInSec = (videoElement) ? videoElement.currentTime : 0;
                    this.message = message
                }
                return EventInfo
            })();
        Events.EventInfo = EventInfo;
        var Handler = (function()
            {
                function Handler(instance, func)
                {
                    this.callerInstance = instance;
                    this.functionHandler = func
                }
                return Handler
            })();
        Events.Handler = Handler
    })(OnePlayer.Events || (OnePlayer.Events = {}));
    var Events = OnePlayer.Events
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Failure)
    {
        "use strict";
        var Record = (function()
            {
                function Record(originModuleId, code, message)
                {
                    this.originModuleId = originModuleId;
                    this.code = code;
                    this.message = message
                }
                Record.prototype.dispose = function()
                {
                    this.originModuleId = null;
                    this.code = null;
                    this.message = null
                };
                Record.prototype.toString = function()
                {
                    var failRecord;
                    failRecord = "Module = " + this.originModuleId + " FailureCode = " + _toHexString(this.code);
                    if (this.message)
                    {
                        failRecord += " " + this.message
                    }
                    return failRecord
                };
                return Record
            })();
        Failure.Record = Record;
        function translateHttpStatusToCode(statusCode)
        {
            switch (statusCode)
            {
                case 400:
                    return 2164261888;
                case 401:
                    return 2164261889;
                case 403:
                    return 2164261890;
                case 404:
                    return 2164261891;
                case 500:
                    return 2164261892;
                case 502:
                    return 2164261893;
                case 503:
                    return 2164261894;
                case 504:
                    return 2164261895;
                default:
                    return 2164262088
            }
        }
        Failure.translateHttpStatusToCode = translateHttpStatusToCode;
        function errorEventToString(err)
        {
            var msg;
            if (err.filename)
            {
                msg += " file: " + err.filename
            }
            if (err.lineno)
            {
                msg += " line: " + err.lineno
            }
            if (err.colno)
            {
                msg += " colno: " + err.colno
            }
            if (err.error)
            {
                msg += "error: " + err.error
            }
            if (err.message)
            {
                msg += "msg: " + err.message
            }
            return msg
        }
        Failure.errorEventToString = errorEventToString;
        function mediaErrorToString(error)
        {
            if (undefined === error || null === error)
            {
                return "undefined"
            }
            var errorDesc = _mediaErrorCodeToString(error.code);
            if (error.msExtendedCode)
            {
                errorDesc += ", extendedCode: " + _toHexString(error.msExtendedCode)
            }
            return errorDesc
        }
        Failure.mediaErrorToString = mediaErrorToString;
        function attachFailureToRequest(request, originModuleId, code, message)
        {
            var failRecord = new Record(originModuleId, code, message);
            if (null != request)
            {
                request.externalFailure = failRecord
            }
        }
        Failure.attachFailureToRequest = attachFailureToRequest;
        function _mediaErrorCodeToString(code)
        {
            switch (code)
            {
                case MediaError.MEDIA_ERR_ABORTED:
                    return "MEDIA_ERR_ABORTED";
                    break;
                case MediaError.MEDIA_ERR_NETWORK:
                    return "MEDIA_ERR_NETWORK";
                    break;
                case MediaError.MEDIA_ERR_DECODE:
                    return "MEDIA_ERR_DECODE";
                    break;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    return "MEDIA_ERR_SRC_NOT_SUPPORTED";
                    break;
                default:
                    return code.toString()
            }
        }
        function _toHexString(n)
        {
            if (n < 0)
            {
                n = 0xFFFFFFFF + n + 1
            }
            return "0x" + ("00000000" + n.toString(16).toUpperCase()).substr(-8)
        }
        function isExternalError(code)
        {
            return (code > 2164261119)
        }
        Failure.isExternalError = isExternalError;
        var External = (function()
            {
                function External()
                {
                    this.code = 0;
                    this.extendedCode = null;
                    this.message = null
                }
                External.prototype.translateMediaError = function(mediaError)
                {
                    this.code = mediaError.code;
                    if (mediaError.msExtendedCode)
                    {
                        this.extendedCode = mediaError.msExtendedCode
                    }
                };
                External.prototype.translateRecord = function(record)
                {
                    this.code = this._mapExtendedCodeToCode(record.code);
                    this.extendedCode = record.code;
                    this.message = record.message
                };
                External.prototype.toString = function()
                {
                    var output = "code: " + _mediaErrorCodeToString(this.code);
                    if (this.extendedCode)
                    {
                        output += ", extendedCode: " + _toHexString(this.extendedCode)
                    }
                    if (this.message)
                    {
                        output += ", msg: " + this.message
                    }
                    return output
                };
                External.prototype._mapExtendedCodeToCode = function(code)
                {
                    if (2164261120 <= code && code <= 2164261375)
                    {
                        return MediaError.MEDIA_ERR_ABORTED
                    }
                    if (2164261376 <= code && code <= 2164261631)
                    {
                        return MediaError.MEDIA_ERR_DECODE
                    }
                    if (2164261632 <= code && code <= 2164261887)
                    {
                        return MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED
                    }
                    if (2164261888 <= code && code <= 2164262143)
                    {
                        return MediaError.MEDIA_ERR_NETWORK
                    }
                    return Number.MAX_VALUE
                };
                return External
            })();
        Failure.External = External
    })(OnePlayer.Failure || (OnePlayer.Failure = {}));
    var Failure = OnePlayer.Failure
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Log)
    {
        "use strict";
        (function(Level)
        {
            Level[Level["none"] = 0] = "none";
            Level[Level["error"] = 1] = "error";
            Level[Level["warning"] = 2] = "warning";
            Level[Level["verbose"] = 3] = "verbose"
        })(Log.Level || (Log.Level = {}));
        var Level = Log.Level;
        (function(Area)
        {
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
            Area[Area["mediaParser"] = 11] = "mediaParser";
            Area[Area["mp4Parser"] = 12] = "mp4Parser";
            Area[Area["max"] = 13] = "max"
        })(Log.Area || (Log.Area = {}));
        var Area = Log.Area;
        function verbose(area, message)
        {
            _writeEntry(area, 3, message)
        }
        Log.verbose = verbose;
        function warning(area, message)
        {
            _writeEntry(area, 2, message)
        }
        Log.warning = warning;
        function error(area, message)
        {
            _writeEntry(area, 1, message)
        }
        Log.error = error;
        function setConsoleOutputByLevel(value)
        {
            levelEnabled = value
        }
        Log.setConsoleOutputByLevel = setConsoleOutputByLevel;
        function enableConsoleOutputByArea(value)
        {
            if (undefined === value || null === value)
            {
                areasEnabled.forEach(function(arrayVal, index, array)
                {
                    array[index] = true
                })
            }
            else
            {
                areasEnabled[value] = true
            }
        }
        Log.enableConsoleOutputByArea = enableConsoleOutputByArea;
        function disableConsoleOutputByArea(value)
        {
            if (undefined === value || null === value)
            {
                areasEnabled.forEach(function(arrayVal, index, array)
                {
                    array[index] = false
                })
            }
            else
            {
                areasEnabled[value] = false
            }
        }
        Log.disableConsoleOutputByArea = disableConsoleOutputByArea;
        function enableMemoryLog(enabled)
        {
            if (typeof enabled === "undefined")
            {
                enabled = true
            }
            memoryLogEnabled = enabled
        }
        Log.enableMemoryLog = enableMemoryLog;
        function getMemoryLog(flush)
        {
            if (typeof flush === "undefined")
            {
                flush = true
            }
            var currentMemoryLog = memoryLog;
            if (flush)
            {
                memoryLog = ""
            }
            return currentMemoryLog
        }
        Log.getMemoryLog = getMemoryLog;
        function _writeEntry(area, level, message)
        {
            var time = new Date(Date.now());
            if (level <= levelEnabled && areasEnabled[area])
            {
                var currentLogMsg = "[" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "." + time.getMilliseconds() + "] " + Level[level] + ": " + Area[area] + ": " + message;
                if (memoryLogEnabled)
                {
                    memoryLog += "\n" + currentLogMsg
                }
                console.log(currentLogMsg)
            }
        }
        var devMode = true;
        var levelEnabled = 0;
        var areasEnabled = [];
        for (var i = 0; i < 13; i++)
        {
            areasEnabled.push(false)
        }
        var memoryLogEnabled = false;
        var memoryLog = "";
        Log.enableConsoleOutputByArea();
        Log.setConsoleOutputByLevel(devMode ? 3 : 1)
    })(OnePlayer.Log || (OnePlayer.Log = {}));
    var Log = OnePlayer.Log
})(OnePlayer || (OnePlayer = {}));
var __extends = this.__extends || function(d, b)
    {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __()
        {
            this.constructor = d
        }
        __.prototype = b.prototype;
        d.prototype = new __
    };
var OnePlayer;
(function(OnePlayer)
{
    (function(Mp4Util)
    {
        "use strict";
        var Mp4Box = (function()
            {
                function Mp4Box(data, offset)
                {
                    if (data && typeof offset !== "undefined")
                    {
                        this.data = data;
                        this.reader = new OnePlayer.DataViewReaderWriter.Reader(data, offset)
                    }
                }
                Mp4Box.prototype.getUint32 = function()
                {
                    return this.reader.getUint32()
                };
                Mp4Box.prototype.getInt32 = function()
                {
                    return this.reader.getInt32()
                };
                Mp4Box.prototype.getUint8 = function()
                {
                    return this.reader.getUint8()
                };
                Mp4Box.prototype.getBytes = function(len)
                {
                    return this.reader.getBytes(len)
                };
                Mp4Box.prototype.readString = function(len)
                {
                    return this.reader.readString(len)
                };
                Object.defineProperty(Mp4Box.prototype, "readPosition", {
                    get: function()
                    {
                        return this.reader.readPos
                    }, enumerable: true, configurable: true
                });
                return Mp4Box
            })();
        Mp4Util.Mp4Box = Mp4Box;
        var Mp4FullBox = (function(_super)
            {
                __extends(Mp4FullBox, _super);
                function Mp4FullBox(fullBox)
                {
                    _super.call(this);
                    if (fullBox)
                    {
                        this.size = fullBox.size;
                        this.type = fullBox.type;
                        this.usertype = fullBox.usertype;
                        this.data = fullBox.data;
                        this.reader = new OnePlayer.DataViewReaderWriter.Reader(this.data);
                        this._versionFlags = fullBox._versionFlags
                    }
                }
                Mp4FullBox.parse = function(box)
                {
                    var fullBox = null;
                    if (box.data.byteLength < 4)
                    {
                        OnePlayer.Log.error(12, "Full box parsing error, not enough bytes");
                        return null
                    }
                    fullBox = new Mp4FullBox;
                    fullBox.size = box.size;
                    fullBox.type = box.type;
                    fullBox.usertype = box.usertype;
                    fullBox._versionFlags = box.data.getUint32(0);
                    fullBox.data = new DataView(box.data.buffer, box.data.byteOffset + 4, box.data.byteLength - 4);
                    fullBox.reader = new OnePlayer.DataViewReaderWriter.Reader(fullBox.data);
                    return fullBox
                };
                Mp4FullBox.serialize = function(fullBox, calculatedSize)
                {
                    var boxHeaderSize = ((fullBox.type === "uuid") ? 16 : 0) + 12;
                    var totalBoxSize = calculatedSize + boxHeaderSize;
                    var array = new ArrayBuffer(totalBoxSize);
                    var dataView = new DataView(array);
                    var writer = new OnePlayer.DataViewReaderWriter.Writer(dataView);
                    if (totalBoxSize > 0xFFFFFFFF)
                    {
                        throw new Error("Mp4FullBox::serialize, large size is not supported");
                    }
                    writer.setUint32(totalBoxSize);
                    writer.setString(fullBox.type);
                    if (fullBox.type === "uuid")
                    {
                        writer.setString(fullBox.usertype)
                    }
                    writer.setUint32(fullBox._versionFlags);
                    if (writer.writePos !== boxHeaderSize)
                    {
                        throw new Error("Mp4FullBox::serialize, inconsistent bytes written");
                    }
                    return writer
                };
                Object.defineProperty(Mp4FullBox.prototype, "version", {
                    get: function()
                    {
                        return this._versionFlags >> 24
                    }, set: function(value)
                        {
                            this._versionFlags &= 0x00FFFFFF;
                            this._versionFlags |= (value << 24)
                        }, enumerable: true, configurable: true
                });
                Object.defineProperty(Mp4FullBox.prototype, "flags", {
                    get: function()
                    {
                        return this._versionFlags & 0xFFFFFF
                    }, set: function(value)
                        {
                            this._versionFlags &= 0xFF000000;
                            this._versionFlags |= (value & 0x00FFFFFF)
                        }, enumerable: true, configurable: true
                });
                Mp4FullBox.prototype.getUint32Cond = function(flag)
                {
                    var retVal;
                    if (flag & this.flags)
                    {
                        retVal = this.reader.getUint32()
                    }
                    return retVal
                };
                return Mp4FullBox
            })(Mp4Box);
        Mp4Util.Mp4FullBox = Mp4FullBox;
        var TfhdBox = (function(_super)
            {
                __extends(TfhdBox, _super);
                function TfhdBox(fullBox)
                {
                    _super.call(this, fullBox)
                }
                TfhdBox.parse = function(box)
                {
                    var tfhdBox = null,
                        fullBox = null;
                    fullBox = Mp4FullBox.parse(box);
                    if (!fullBox)
                    {
                        return null
                    }
                    tfhdBox = new TfhdBox(fullBox);
                    if (fullBox.data.byteLength < tfhdBox._calculatedSize())
                    {
                        OnePlayer.Log.error(12, "tfhd box parsing error, not enough data");
                        return null
                    }
                    tfhdBox.trackId = tfhdBox.getUint32();
                    tfhdBox.baseDataOffsetHi = tfhdBox.getUint32Cond(TfhdBox.flags_baseDataOffsetPresent);
                    tfhdBox.baseDataOffsetLo = tfhdBox.getUint32Cond(TfhdBox.flags_baseDataOffsetPresent);
                    tfhdBox.sampleDescriptionIndex = tfhdBox.getUint32Cond(TfhdBox.flags_sampleDescriptionIndexPresent);
                    tfhdBox.defaultSampleDuration = tfhdBox.getUint32Cond(TfhdBox.flags_defaultSampleDurationPresent);
                    tfhdBox.defaultSampleSize = tfhdBox.getUint32Cond(TfhdBox.flags_defaultSampleSizePresent);
                    tfhdBox.defaultSampleFlags = tfhdBox.getUint32Cond(TfhdBox.flags_defaultSampleFlagsPresent);
                    return tfhdBox
                };
                TfhdBox.prototype._calculatedSize = function()
                {
                    var retVal = 4;
                    retVal += (this.flags & TfhdBox.flags_baseDataOffsetPresent) ? 8 : 0;
                    retVal += (this.flags & TfhdBox.flags_sampleDescriptionIndexPresent) ? 4 : 0;
                    retVal += (this.flags & TfhdBox.flags_defaultSampleDurationPresent) ? 4 : 0;
                    retVal += (this.flags & TfhdBox.flags_defaultSampleSizePresent) ? 4 : 0;
                    retVal += (this.flags & TfhdBox.flags_defaultSampleFlagsPresent) ? 4 : 0;
                    return retVal
                };
                TfhdBox.typeStr = "tfhd";
                TfhdBox.flags_baseDataOffsetPresent = 0x1;
                TfhdBox.flags_sampleDescriptionIndexPresent = 0x2;
                TfhdBox.flags_defaultSampleDurationPresent = 0x8;
                TfhdBox.flags_defaultSampleSizePresent = 0x10;
                TfhdBox.flags_defaultSampleFlagsPresent = 0x20;
                TfhdBox.flags_durationIsEmpty = 0x10000;
                TfhdBox.flags_defaultBaseIsMoof = 0x20000;
                return TfhdBox
            })(Mp4FullBox);
        Mp4Util.TfhdBox = TfhdBox;
        var TrunBox = (function(_super)
            {
                __extends(TrunBox, _super);
                function TrunBox(fullBox)
                {
                    _super.call(this, fullBox)
                }
                TrunBox.parse = function(box)
                {
                    var trunBox = null,
                        fullBox = null;
                    fullBox = Mp4FullBox.parse(box);
                    if (!fullBox)
                    {
                        return null
                    }
                    trunBox = new TrunBox(fullBox);
                    if (fullBox.data.byteLength < 4)
                    {
                        OnePlayer.Log.error(12, "trun box parsing error, not enough data");
                        return null
                    }
                    trunBox.sampleCount = trunBox.getUint32();
                    if (fullBox.data.byteLength < trunBox._calculatedSize())
                    {
                        OnePlayer.Log.error(12, "trun box parsing error, not enough data");
                        return null
                    }
                    trunBox.dataOffset = trunBox.getUint32Cond(TrunBox.flags_dataOffsetPresent);
                    trunBox.firstSampleFlags = trunBox.getUint32Cond(TrunBox.flags_firstSampleFlagsPresent);
                    trunBox.sampleInfoArray = [];
                    for (var i = 0; i < trunBox.sampleCount; i++)
                    {
                        var sampleInfo = new TrunSampleInfo;
                        sampleInfo.sampleDuration = trunBox.getUint32Cond(TrunBox.flags_sampleDurationPresent);
                        sampleInfo.sampleSize = trunBox.getUint32Cond(TrunBox.flags_sampleSizePresent);
                        sampleInfo.sampleFlags = trunBox.getUint32Cond(TrunBox.flags_sampleFlagsPresent);
                        if (trunBox.flags & TrunBox.flags_sampleCompositionTimeOffsetsPresent)
                        {
                            if (trunBox.version === 0)
                            {
                                sampleInfo.sampleCompositionTimeOffset = trunBox.getUint32()
                            }
                            else
                            {
                                sampleInfo.sampleCompositionTimeOffset = trunBox.getInt32()
                            }
                        }
                        trunBox.sampleInfoArray.push(sampleInfo)
                    }
                    return trunBox
                };
                TrunBox.prototype._calculatedSize = function()
                {
                    var retVal = 4,
                        samples;
                    retVal += (this.flags & TrunBox.flags_dataOffsetPresent) ? 4 : 0;
                    retVal += (this.flags & TrunBox.flags_firstSampleFlagsPresent) ? 4 : 0;
                    samples = (this.flags & TrunBox.flags_sampleDurationPresent) ? 4 : 0;
                    samples += (this.flags & TrunBox.flags_sampleSizePresent) ? 4 : 0;
                    samples += (this.flags & TrunBox.flags_sampleFlagsPresent) ? 4 : 0;
                    samples += (this.flags & TrunBox.flags_sampleCompositionTimeOffsetsPresent) ? 4 : 0;
                    retVal += this.sampleCount * samples;
                    return retVal
                };
                TrunBox.typeStr = "trun";
                TrunBox.flags_dataOffsetPresent = 0x1;
                TrunBox.flags_firstSampleFlagsPresent = 0x4;
                TrunBox.flags_sampleDurationPresent = 0x100;
                TrunBox.flags_sampleSizePresent = 0x200;
                TrunBox.flags_sampleFlagsPresent = 0x400;
                TrunBox.flags_sampleCompositionTimeOffsetsPresent = 0x800;
                return TrunBox
            })(Mp4FullBox);
        Mp4Util.TrunBox = TrunBox;
        var TrunSampleInfo = (function()
            {
                function TrunSampleInfo(){}
                return TrunSampleInfo
            })();
        Mp4Util.TrunSampleInfo = TrunSampleInfo;
        var TfdtBox = (function(_super)
            {
                __extends(TfdtBox, _super);
                function TfdtBox(fullBox)
                {
                    _super.call(this, fullBox);
                    this.baseMediaDecodeTime = 0
                }
                TfdtBox.parse = function(box)
                {
                    var tfdtBox = null,
                        fullBox = null;
                    fullBox = Mp4FullBox.parse(box);
                    if (!fullBox)
                    {
                        return null
                    }
                    tfdtBox = new TfdtBox(fullBox);
                    if (fullBox.data.byteLength < tfdtBox._calculatedSize())
                    {
                        OnePlayer.Log.error(12, "tfdt box parsing error, not enough data");
                        return null
                    }
                    if (tfdtBox.version === 1)
                    {
                        tfdtBox.baseMediaDecodeTime = tfdtBox.getUint32() * 0x100000000
                    }
                    tfdtBox.baseMediaDecodeTime += tfdtBox.getUint32();
                    if (tfdtBox.baseMediaDecodeTime >= 0x20000000000000)
                    {
                        OnePlayer.Log.warning(12, "tfdt timestamp greater than 53 bits, possible precision loss")
                    }
                    return tfdtBox
                };
                TfdtBox.prototype._calculatedSize = function()
                {
                    return (this.version === 1) ? 8 : 4
                };
                TfdtBox.typeStr = "tfdt";
                return TfdtBox
            })(Mp4FullBox);
        Mp4Util.TfdtBox = TfdtBox;
        var PsshBox = (function(_super)
            {
                __extends(PsshBox, _super);
                function PsshBox(fullBox)
                {
                    if (fullBox)
                    {
                        _super.call(this, fullBox)
                    }
                    else
                    {
                        this.type = PsshBox.typeStr
                    }
                    this._keyIds = []
                }
                PsshBox.parse = function(box)
                {
                    var psshBox = null,
                        fullBox = null;
                    fullBox = Mp4FullBox.parse(box);
                    if (!fullBox)
                    {
                        return null
                    }
                    psshBox = new PsshBox(fullBox);
                    if (fullBox.data.byteLength < psshBox._calculatedSize())
                    {
                        OnePlayer.Log.error(12, "pssh box parsing error, not enough data");
                        return null
                    }
                    psshBox.systemId = psshBox.getBytes(16);
                    var keyIdCount = 0;
                    if (psshBox.version > 0)
                    {
                        keyIdCount = psshBox.getUint32();
                        psshBox._keyIds.length = keyIdCount;
                        if (fullBox.data.byteLength < psshBox._calculatedSize())
                        {
                            OnePlayer.Log.error(12, "pssh box parsing error, not enough data");
                            return null
                        }
                        for (var i = 0; i < keyIdCount; i++)
                        {
                            var kid = psshBox.getBytes(16);
                            psshBox._keyIds[i] = kid
                        }
                    }
                    var dataSize = psshBox.getUint32();
                    if (fullBox.data.byteLength < psshBox._calculatedSize(dataSize))
                    {
                        OnePlayer.Log.error(12, "pssh box parsing error, not enough data");
                        return null
                    }
                    psshBox.specificData = psshBox.getBytes(dataSize);
                    return psshBox
                };
                PsshBox.prototype.addKeyId = function(keyId)
                {
                    if (keyId.length !== 16)
                    {
                        throw new Error("keyId must be 16 bytes");
                    }
                    this.version = 1;
                    this._keyIds.push(keyId)
                };
                Object.defineProperty(PsshBox.prototype, "keyIds", {
                    get: function()
                    {
                        return this._keyIds
                    }, enumerable: true, configurable: true
                });
                PsshBox.prototype._calculatedSize = function(dataSize)
                {
                    if (typeof dataSize === "undefined")
                    {
                        dataSize = 0
                    }
                    var bytes = 16 + 4 + dataSize;
                    if (this.version > 0)
                    {
                        bytes += 4 + this._keyIds.length * 16
                    }
                    return bytes
                };
                PsshBox.prototype.serialize = function()
                {
                    var writer = Mp4FullBox.serialize(this, this._calculatedSize(this.specificData.byteLength));
                    if (!this.systemId)
                    {
                        throw new Error("systemId is not set");
                    }
                    writer.setBytes(this.systemId);
                    if (this.version > 0)
                    {
                        writer.setUint32(this._keyIds.length);
                        this._keyIds.forEach(function(value)
                        {
                            writer.setBytes(value)
                        })
                    }
                    if (!this.specificData)
                    {
                        throw new Error("specificData is not set");
                    }
                    writer.setUint32(this.specificData.byteLength);
                    writer.setBytes(this.specificData);
                    if (writer.writePos != writer.data.buffer.byteLength)
                    {
                        throw new Error("Failed to write to end of buffer");
                    }
                    return writer.data.buffer
                };
                PsshBox.typeStr = "pssh";
                return PsshBox
            })(Mp4FullBox);
        Mp4Util.PsshBox = PsshBox;
        function GetBoxByType(data, type, startOffset)
        {
            if (typeof startOffset === "undefined")
            {
                startOffset = 0
            }
            var box,
                offset = startOffset;
            if (!type || type.length !== 4)
            {
                OnePlayer.Log.error(12, "Parameter error, box type must have four characters");
                return null
            }
            if (!data || data.byteLength < 8)
            {
                OnePlayer.Log.error(12, "Parameter error, not enough data");
                return null
            }
            while (offset < data.byteLength)
            {
                box = ReadMp4Box(data, offset);
                if (!box)
                {
                    break
                }
                if (box.type === type)
                {
                    return box
                }
                else
                {
                    offset += box.size
                }
            }
            return null
        }
        Mp4Util.GetBoxByType = GetBoxByType;
        function ReadMp4Box(data, offset)
        {
            if (!data || data.byteLength - offset < 8)
            {
                OnePlayer.Log.error(12, "MP4 box parsing error, not enough data for box header");
                return null
            }
            var box = new Mp4Box(data, offset);
            box.size = box.getUint32();
            box.type = box.readString(4);
            if (box.size === 1)
            {
                if (data.byteLength - offset < 16)
                {
                    OnePlayer.Log.error(12, "MP4 box parsing error, not enough data for largesize");
                    return null
                }
                box.size = box.getUint32() << 32;
                box.size += box.getUint32();
                if (box.size > 0x1FFFFFFFFFFFFF)
                {
                    OnePlayer.Log.error(12, "Box size too big for precise representation as Javascript number");
                    return null
                }
            }
            else if (box.size === 0)
            {
                box.size = data.byteLength
            }
            if (box.size > data.byteLength - offset)
            {
                return null
            }
            if (box.type === "uuid")
            {
                if (data.byteLength - box.readPosition < 16)
                {
                    OnePlayer.Log.error(12, "MP4 box parsing error, not enough data for usertype");
                    return null
                }
                box.usertype = box.readString(16)
            }
            box.data = new DataView(data.buffer, data.byteOffset + box.readPosition, data.byteLength - box.readPosition);
            return box
        }
        function GetTfhdBox(data)
        {
            var mp4Box,
                tfhdBox = null;
            mp4Box = GetBoxByType(data, "tfhd");
            if (!mp4Box)
            {
                OnePlayer.Log.warning(12, "tfhd not found");
                return null
            }
            tfhdBox = TfhdBox.parse(mp4Box);
            if (!tfhdBox)
            {
                OnePlayer.Log.warning(12, "Parsing of tfhd failed")
            }
            return tfhdBox
        }
        Mp4Util.GetTfhdBox = GetTfhdBox;
        function GetTrunBox(data)
        {
            var mp4Box,
                trunBox = null;
            mp4Box = GetBoxByType(data, "trun");
            if (!mp4Box)
            {
                OnePlayer.Log.warning(12, "trun not found");
                return null
            }
            trunBox = TrunBox.parse(mp4Box);
            if (!trunBox)
            {
                OnePlayer.Log.warning(12, "Parsing of trun failed")
            }
            return trunBox
        }
        Mp4Util.GetTrunBox = GetTrunBox;
        function GetTfdtBox(data)
        {
            var mp4Box,
                tfdtBox = null;
            mp4Box = GetBoxByType(data, "tfdt");
            if (!mp4Box)
            {
                OnePlayer.Log.warning(12, "tfdt not found");
                return null
            }
            tfdtBox = TfdtBox.parse(mp4Box);
            if (!tfdtBox)
            {
                OnePlayer.Log.warning(12, "Parsing of tfdt failed")
            }
            return tfdtBox
        }
        Mp4Util.GetTfdtBox = GetTfdtBox;
        function GetPsshBoxes(data)
        {
            var mp4Box,
                psshBoxes = [],
                offset = 0;
            while (offset < data.byteLength)
            {
                mp4Box = GetBoxByType(data, PsshBox.typeStr, offset);
                if (!mp4Box)
                {
                    OnePlayer.Log.warning(12, "pssh not found");
                    return psshBoxes
                }
                var psshBox = PsshBox.parse(mp4Box);
                if (!psshBox)
                {
                    OnePlayer.Log.warning(12, "Parsing of pssh failed")
                }
                else
                {
                    psshBoxes.push(psshBox)
                }
                offset += mp4Box.size
            }
            return psshBoxes
        }
        Mp4Util.GetPsshBoxes = GetPsshBoxes
    })(OnePlayer.Mp4Util || (OnePlayer.Mp4Util = {}));
    var Mp4Util = OnePlayer.Mp4Util
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(PlayerDetector)
    {
        "use strict";
        (function(Type)
        {
            Type[Type["type1"] = 1] = "type1";
            Type[Type["type2"] = 2] = "type2";
            Type[Type["type3"] = 3] = "type3"
        })(PlayerDetector.Type || (PlayerDetector.Type = {}));
        var Type = PlayerDetector.Type;
        ;
        function MseSupported(videoElement)
        {
            return OnePlayer.VideoElementAdapter.supported("video/mp4; codecs=\"avc1.4d404f\"")
        }
        PlayerDetector.MseSupported = MseSupported;
        function HlsType1Supported(videoElement)
        {
            var result = false;
            if (videoElement && videoElement.canPlayType)
            {
                var canPlay = videoElement.canPlayType("application/vnd.apple.mpegurl");
                if (canPlay === 'maybe' || canPlay === 'probably')
                {
                    result = true
                }
            }
            return result
        }
        PlayerDetector.HlsType1Supported = HlsType1Supported;
        function Mp4Type1Supported(videoElement)
        {
            var result = false;
            if (videoElement && videoElement.canPlayType)
            {
                var canPlay = videoElement.canPlayType("video/mp4");
                if (canPlay === 'maybe' || canPlay === 'probably')
                {
                    result = true
                }
            }
            return result
        }
        PlayerDetector.Mp4Type1Supported = Mp4Type1Supported
    })(OnePlayer.PlayerDetector || (OnePlayer.PlayerDetector = {}));
    var PlayerDetector = OnePlayer.PlayerDetector
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(PlayerType)
    {
        "use strict";
        (function(Format)
        {
            Format[Format["hls"] = 1] = "hls";
            Format[Format["mp4"] = 2] = "mp4";
            Format[Format["dash"] = 3] = "dash"
        })(PlayerType.Format || (PlayerType.Format = {}));
        var Format = PlayerType.Format;
        ;
        var _azureMediaFormatTags = {
                "m3u8-aapl-v3": 1, "m3u8-aapl-v4": 1, "mpd-time-csf": 3
            };
        var _fileExtensions = {
                mp4: 2, m3u8: 1
            };
        var _presentationType = {
                "video/mp4": 2, "application/dash+xml": 3, "application/vnd.apple.mpegurl": 1
            };
        function getByPresentationType(type, htmlVideo)
        {
            var playerType = null;
            if (type && type.length > 0)
            {
                var trimmedType = type.trim().toLowerCase();
                if (_presentationType[trimmedType])
                {
                    return _getPlayerTypeByFormat(_presentationType[trimmedType], htmlVideo)
                }
            }
        }
        PlayerType.getByPresentationType = getByPresentationType;
        function getByUrl(url, htmlVideo)
        {
            var trimmedUrl = url.trim().toLowerCase();
            if (trimmedUrl.lastIndexOf(".ism/") > -1)
            {
                var tag = _getAzureMediaFormatTag(trimmedUrl);
                if (_azureMediaFormatTags[tag])
                {
                    return _getPlayerTypeByFormat(_azureMediaFormatTags[tag], htmlVideo)
                }
            }
            var fileExt = _getFileExtension(trimmedUrl);
            if (_fileExtensions[fileExt])
            {
                return _getPlayerTypeByFormat(_fileExtensions[fileExt], htmlVideo)
            }
            return null
        }
        PlayerType.getByUrl = getByUrl;
        function _getFileExtension(url)
        {
            var fileExt = null,
                periodIndex = url.lastIndexOf("."),
                nextSlashIndex = url.indexOf("/", periodIndex);
            if (periodIndex > -1)
            {
                fileExt = url.substring(periodIndex + 1, nextSlashIndex !== -1 ? nextSlashIndex : url.length)
            }
            return fileExt
        }
        PlayerType._getFileExtension = _getFileExtension;
        function _getAzureMediaFormatTag(url)
        {
            var formatTag = null,
                trimmedUrl = url,
                formatVerb = "(format=",
                queryIndex = url.lastIndexOf("?");
            if (queryIndex > -1)
            {
                trimmedUrl = url.substring(0, queryIndex)
            }
            var formatBeginIndex = trimmedUrl.lastIndexOf(formatVerb);
            if (formatBeginIndex > -1)
            {
                var formatEndIndex = trimmedUrl.lastIndexOf(")");
                if (formatEndIndex > formatBeginIndex)
                {
                    formatTag = trimmedUrl.substring(formatBeginIndex + formatVerb.length, formatEndIndex);
                    var commaIndex = formatTag.indexOf(",");
                    if (commaIndex > -1)
                    {
                        formatTag = formatTag.substring(0, commaIndex)
                    }
                }
            }
            return formatTag
        }
        PlayerType._getAzureMediaFormatTag = _getAzureMediaFormatTag;
        function _getPlayerTypeByFormat(format, htmlVideo)
        {
            var type = null;
            switch (format)
            {
                case 1:
                    if (OnePlayer.PlayerDetector.HlsType1Supported(htmlVideo))
                    {
                        type = 1
                    }
                    break;
                case 2:
                    if (OnePlayer.PlayerDetector.Mp4Type1Supported(htmlVideo))
                    {
                        type = 1
                    }
                    break;
                case 3:
                    if (OnePlayer.PlayerDetector.MseSupported(htmlVideo))
                    {
                        type = 3
                    }
                    break
            }
            return type
        }
        PlayerType._getPlayerTypeByFormat = _getPlayerTypeByFormat
    })(OnePlayer.PlayerType || (OnePlayer.PlayerType = {}));
    var PlayerType = OnePlayer.PlayerType
})(OnePlayer || (OnePlayer = {}));
var OnePlayer;
(function(OnePlayer)
{
    (function(Util)
    {
        "use strict";
        var UrlFormatter = (function()
            {
                function UrlFormatter(){}
                UrlFormatter.FormatDashMediaUrl = function(urlTemplate, bitrate, timestamp)
                {
                    if (!urlTemplate)
                    {
                        throw new Error("url Template is not set");
                    }
                    var urlFormatted = urlTemplate;
                    if (bitrate !== null && bitrate !== undefined && bitrate !== "")
                    {
                        urlFormatted = urlFormatted.replace("$Bandwidth$", bitrate)
                    }
                    if (timestamp !== null && timestamp !== undefined && timestamp !== "")
                    {
                        urlFormatted = urlFormatted.replace("$Time$", timestamp)
                    }
                    return urlFormatted
                };
                UrlFormatter.FormatDashInitUrl = function(urlTemplate, bitrate)
                {
                    return Util.UrlFormatter.FormatDashMediaUrl(urlTemplate, bitrate, null)
                };
                return UrlFormatter
            })();
        Util.UrlFormatter = UrlFormatter
    })(OnePlayer.Util || (OnePlayer.Util = {}));
    var Util = OnePlayer.Util
})(OnePlayer || (OnePlayer = {}))