(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["player-skin"] = factory();
	else
		root["player-skin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(859);
	__webpack_require__(868);
	__webpack_require__(870);
	__webpack_require__(872);
	__webpack_require__(873);
	__webpack_require__(875);
	__webpack_require__(876);
	__webpack_require__(877);
	__webpack_require__(879);
	__webpack_require__(881);
	__webpack_require__(883);
	__webpack_require__(884);

/***/ },

/***/ 859:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 868:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	var Component = videojs.getComponent('Component');
	var Button = videojs.getComponent('Button');
	
	__webpack_require__(869);
	
	var StreamIconButton = function (_Button) {
	    _inherits(StreamIconButton, _Button);
	
	    function StreamIconButton(player, options) {
	        _classCallCheck(this, StreamIconButton);
	
	        options.name = 'streamIconButton';
	
	        var _this = _possibleConstructorReturn(this, (StreamIconButton.__proto__ || Object.getPrototypeOf(StreamIconButton)).call(this, player, options));
	
	        _this.el_.setAttribute('aria-label', _this.localize('View in Stream button'));
	        return _this;
	    }
	
	    _createClass(StreamIconButton, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-stream-icon ' + _get(StreamIconButton.prototype.__proto__ || Object.getPrototypeOf(StreamIconButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var externalLink = !!this.options && !!this.options() ? this.options().externalLink : null;
	            window.open(externalLink, "_blank");
	        }
	    }]);
	
	    return StreamIconButton;
	}(Button);
	
	StreamIconButton.prototype.controlText_ = 'View in Microsoft Stream';
	videojs.registerComponent('StreamIconButton', StreamIconButton);
	
	var StreamIconPlugin = function StreamIconPlugin(options) {
	    var player = this;
	    var externalLink = !!options ? options.externalLink : null;
	
	    player.on("loadedmetadata", function () {
	        var controlBarChildren = player.controlBar.children();
	        var streamIconButton = null;
	        for (var i = 0; i < controlBarChildren.length; i++) {
	            if (controlBarChildren[i].el() && controlBarChildren[i].el().className === "amp-controlbaricons-right") {
	                var rightControlBar = player.controlBar.children()[i];
	                var streamiconButton = this.controlBar.addChild('StreamIconButton', options);
	                streamIconButton = rightControlBar.addChild(streamiconButton);
	            }
	            if (streamIconButton) {
	                player.controlBar.streamIconButton = streamIconButton;
	            }
	        }
	    });
	};
	
	videojs.plugin('streamIconPlugin', StreamIconPlugin);

/***/ },

/***/ 869:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 870:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	var Component = videojs.getComponent('Component');
	var Button = videojs.getComponent('Button');
	
	__webpack_require__(871);
	
	var TheaterModeButton = function (_Button) {
	    _inherits(TheaterModeButton, _Button);
	
	    function TheaterModeButton(player, options) {
	        _classCallCheck(this, TheaterModeButton);
	
	        options.name = 'theaterModeButton';
	
	        var _this = _possibleConstructorReturn(this, (TheaterModeButton.__proto__ || Object.getPrototypeOf(TheaterModeButton)).call(this, player, options));
	
	        _this.controlText(_this.htmlEncode(_this.localize('Theater mode')));
	        _this.el_.setAttribute('aria-label', _this.localize('Theater mode'));
	        return _this;
	    }
	
	    _createClass(TheaterModeButton, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-theater-icon ' + _get(TheaterModeButton.prototype.__proto__ || Object.getPrototypeOf(TheaterModeButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            if (this.hasClass('amp-theater-exit-button')) {
	                this.removeClass('amp-theater-exit-button');
	                this.player().trigger('exitTheaterMode');
	                this.controlText(this.htmlEncode(this.localize('Theater mode')));
	                this.el_.setAttribute('aria-label', this.localize('Theater mode'));
	            } else {
	                this.addClass('amp-theater-exit-button');
	                this.player().trigger('enterTheaterMode');
	                this.controlText(this.htmlEncode(this.localize('Exit theater mode')));
	                this.el_.setAttribute('aria-label', this.localize('Exit theater mode'));
	            }
	        }
	    }]);
	
	    return TheaterModeButton;
	}(Button);
	
	TheaterModeButton.prototype.controlText_ = 'Theater mode';
	videojs.registerComponent('TheaterModeButton', TheaterModeButton);
	
	var TheaterModePlugin = function TheaterModePlugin(options) {
	    var player = this;
	    var externalLink = !!options ? options.externalLink : null;
	
	    player.on("loadedmetadata", function () {
	        var controlBarChildren = player.controlBar.children();
	        var theaterModeButton = null;
	        for (var i = 0; i < controlBarChildren.length; i++) {
	            if (controlBarChildren[i].el() && controlBarChildren[i].el().className === "amp-controlbaricons-right") {
	                var rightControlBar = player.controlBar.children()[i];
	                var theaterButton = this.controlBar.addChild('TheaterModeButton', options);
	                theaterModeButton = rightControlBar.el().insertBefore(theaterButton.el(), player.controlBar.fullscreenToggle.el());
	            }
	            if (theaterModeButton) {
	                player.controlBar.theaterModeButton = theaterModeButton;
	            }
	        }
	    });
	};
	
	videojs.plugin('theaterModePlugin', TheaterModePlugin);

/***/ },

/***/ 871:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 872:
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	var Component = videojs.getComponent('Component');
	var TextTrackMenuItem = videojs.getComponent('TextTrackMenuItem');
	
	var OffCaptionSubtitleMenuItem = function (_TextTrackMenuItem) {
	    _inherits(OffCaptionSubtitleMenuItem, _TextTrackMenuItem);
	
	    function OffCaptionSubtitleMenuItem(player, options) {
	        _classCallCheck(this, OffCaptionSubtitleMenuItem);
	
	        // Create pseudo track info
	        // Requires options['kind']
	        options['track'] = {
	            'kind': options['kind'],
	            'player': player,
	            'label': 'Off',
	            'default': false,
	            'mode': 'disabled'
	        };
	
	        // MenuItem is selectable
	        options['selectable'] = true;
	
	        var _this = _possibleConstructorReturn(this, (OffCaptionSubtitleMenuItem.__proto__ || Object.getPrototypeOf(OffCaptionSubtitleMenuItem)).call(this, player, options));
	
	        _this.selected(true);
	        return _this;
	    }
	
	    _createClass(OffCaptionSubtitleMenuItem, [{
	        key: 'handleTracksChange',
	        value: function handleTracksChange(event) {
	            var tracks = this.player().textTracks();
	            var selected = true;
	
	            for (var i = 0, l = tracks.length; i < l; i++) {
	                var track = tracks[i];
	                if (track['mode'] === 'showing') {
	                    selected = false;
	                    break;
	                }
	            }
	
	            this.selected(selected);
	        }
	    }]);
	
	    return OffCaptionSubtitleMenuItem;
	}(TextTrackMenuItem);
	
	Component.registerComponent('OffCaptionSubtitleMenuItem', OffCaptionSubtitleMenuItem);

/***/ },

/***/ 873:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(874);
	
	var Component = videojs.getComponent('Component');
	var MenuButton = videojs.getComponent('MenuButton');
	
	var CaptionSettingsButton = function (_MenuButton) {
	    _inherits(CaptionSettingsButton, _MenuButton);
	
	    function CaptionSettingsButton(player, options) {
	        _classCallCheck(this, CaptionSettingsButton);
	
	        return _possibleConstructorReturn(this, (CaptionSettingsButton.__proto__ || Object.getPrototypeOf(CaptionSettingsButton)).call(this, player, options));
	    }
	
	    _createClass(CaptionSettingsButton, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-captions-settings-button ' + _get(CaptionSettingsButton.prototype.__proto__ || Object.getPrototypeOf(CaptionSettingsButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'createMenu',
	        value: function createMenu() {
	            var menu = new Component(this.player_, {
	                el: videojs.createEl('li', {
	                    className: 'vjs-menu',
	                    tabindex: -1
	                })
	            });
	
	            menu.focus = function () {};
	
	            var menuTitleComponent = new Component(this.player_, {
	                el: videojs.createEl('li', {
	                    className: 'amp-menu-header',
	                    innerHTML: this.controlText_,
	                    tabindex: -1
	                })
	            });
	
	            menu.addChild(menuTitleComponent);
	            menu.addChild(new CaptionSettings(this.player_));
	
	            menu.on('click', function (event) {
	                event.stopImmediatePropagation();
	            });
	
	            return menu;
	        }
	    }]);
	
	    return CaptionSettingsButton;
	}(MenuButton);
	
	CaptionSettingsButton.prototype.controlText_ = 'Captions / Subtitles settings';
	Component.registerComponent('CaptionSettingsButton', CaptionSettingsButton);
	
	var CaptionSettings = function (_Component) {
	    _inherits(CaptionSettings, _Component);
	
	    function CaptionSettings(player, options) {
	        _classCallCheck(this, CaptionSettings);
	
	        var _this2 = _possibleConstructorReturn(this, (CaptionSettings.__proto__ || Object.getPrototypeOf(CaptionSettings)).call(this, player, options));
	
	        _this2.addClass('amp-non-clickable-element');
	
	        player.on('loadedmetadata', function () {
	            player.textTrackSettings = _this2;
	
	            var updateBackgroundTransparency = function updateBackgroundTransparency(event) {
	                var pressed = event.target.getAttribute("aria-pressed") === "true";
	                this.updateBgTransparencyToggle(!pressed);
	                this.updateDisplay();
	            };
	
	            var setDefaults = function setDefaults() {
	                this.setValues({
	                    'backgroundOpacity': '0',
	                    'fontPercent': '0.75',
	                    'textColorValue': 'whiteBlack'
	                });
	            };
	
	            var textColorChanged = function textColorChanged(event) {
	                this.updateTextColorText();
	                this.updateDisplay();
	            };
	
	            //Set defaults
	            setDefaults.call(_this2);
	
	            if (_this2.options_.persistTextTrackSettings) {
	                _this2.restoreSettings();
	            }
	
	            _this2.$('.amp-captions-background-transparency').addEventListener('click', updateBackgroundTransparency.bind(_this2));
	            _this2.$('.amp-font-size-group').addEventListener('click', _this2.updateDisplay.bind(_this2));
	            _this2.$('.amp-font-color-group').addEventListener('click', textColorChanged.bind(_this2));
	            _this2.$('.amp-caption-settings-reset').addEventListener('click', setDefaults.bind(_this2));
	
	            var controls = _this2.$$('.amp-caption-setting-container .outline-enabled-control');
	            for (var i = 0; i < controls.length; i++) {
	                controls[i].addEventListener('click', function (event) {
	                    if (event.type === 'click' && event.clientX !== 0 && event.clientY !== 0) {
	                        player.controlBar.removeClass('outline-enabled');
	                    }
	                });
	            }
	        });
	        return _this2;
	    }
	
	    _createClass(CaptionSettings, [{
	        key: 'createEl',
	        value: function createEl() {
	
	            return _get(CaptionSettings.prototype.__proto__ || Object.getPrototypeOf(CaptionSettings.prototype), 'createEl', this).call(this, 'li', {
	                className: 'amp-caption-settings-menu',
	                innerHTML: captionOptionsMenuTemplate.call(this),
	                tabIndex: -1
	            }, {});
	        }
	    }, {
	        key: 'updateDisplay',
	        value: function updateDisplay() {
	            var ttDisplay = this.player_.getChild('textTrackDisplay');
	            if (ttDisplay) {
	                ttDisplay.updateDisplay();
	                this.saveSettings();
	            }
	        }
	    }, {
	        key: 'getValues',
	        value: function getValues() {
	            //const fontFamily = getSelectedOptionValue(this.$('.vjs-font-family select'));
	            var fontPercent = this.$('input[name="fontSize"]:checked').value;
	            var textColorValue = this.$('input[name="fontColor"]:checked').value;
	            var fgColor = void 0;
	            var bgColor = void 0;
	            switch (textColorValue) {
	                case 'blackWhite':
	                    fgColor = '#000000';
	                    bgColor = '#ffffff';
	                    break;
	                case 'blackLightGray':
	                    fgColor = '#302926';
	                    bgColor = '#dddbd3';
	                    break;
	                case 'whiteGray':
	                    fgColor = '#dddbd3';
	                    bgColor = '#302926';
	                    break;
	                case 'whiteBlack':
	                default:
	                    fgColor = '#ffffff';
	                    bgColor = '#000000';
	
	            }
	
	            var bgTransparency = this.$('.amp-captions-background-transparency').getAttribute('aria-pressed');
	            var bgOpacity = bgTransparency === 'true' ? '0' : '1';
	
	            var result = {
	                'backgroundOpacity': bgOpacity,
	                //'fontFamily': fontFamily,
	                'color': fgColor,
	                'backgroundColor': bgColor,
	                'fontPercent': fontPercent,
	                'textColorValue': textColorValue
	            };
	            for (var name in result) {
	                if (result[name] === '' || result[name] === 'none' || name === 'fontPercent' && result[name] === 1.00) {
	                    delete result[name];
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'setValues',
	        value: function setValues(values) {
	            this.$('input[name="fontColor"][value="' + values.textColorValue + '"]').checked = true;
	            this.updateTextColorText();
	            this.$('input[name="fontSize"][value="' + values.fontPercent + '"]').checked = true;
	            this.updateBgTransparencyToggle(values.bgOpacity === 1);
	        }
	    }, {
	        key: 'updateBgTransparencyToggle',
	        value: function updateBgTransparencyToggle(isPressed) {
	            this.$('.amp-captions-background-transparency').setAttribute("aria-pressed", isPressed);
	            this.$('.amp-background-transparency .toggle-value').innerHTML = isPressed ? this.htmlEncode(this.localize("On")) : this.htmlEncode(this.localize("Off"));
	        }
	    }, {
	        key: 'updateTextColorText',
	        value: function updateTextColorText() {
	            var textColorValue = this.$('input[name="fontColor"]:checked').value;
	            var selectedColorText = '';
	            switch (textColorValue) {
	                case 'blackWhite':
	                    selectedColorText = this.htmlEncode(this.localize('Reverse standard'));
	                    break;
	                case 'blackLightGray':
	                    selectedColorText = this.htmlEncode(this.localize('Sepia'));
	                    break;
	                case 'whiteGray':
	                    selectedColorText = this.htmlEncode(this.localize('Reverse sepia'));
	                    break;
	                case 'whiteBlack':
	                default:
	                    selectedColorText = this.htmlEncode(this.localize('Standard'));
	            }
	
	            this.$('.amp-caption-color-selected-text').innerText = this.localize(selectedColorText);
	        }
	    }, {
	        key: 'saveSettings',
	        value: function saveSettings() {
	            if (!this.options_.persistTextTrackSettings) {
	                return;
	            }
	
	            var values = this.getValues();
	            try {
	                if (Object.getOwnPropertyNames(values).length > 0) {
	                    window.localStorage.setItem('vjs-text-track-options', JSON.stringify(values));
	                } else {
	                    window.localStorage.removeItem('vjs-text-track-options');
	                }
	            } catch (e) {
	                log.warn(e);
	            }
	        }
	    }, {
	        key: 'restoreSettings',
	        value: function restoreSettings() {
	            var err = void 0,
	                values = void 0;
	
	            try {
	                var _safeParseTuple = safeParseTuple(window.localStorage.getItem('vjs-text-track-options'));
	
	                var _safeParseTuple2 = _slicedToArray(_safeParseTuple, 2);
	
	                err = _safeParseTuple2[0];
	                values = _safeParseTuple2[1];
	
	
	                if (err) {
	                    log.error(err);
	                }
	            } catch (e) {
	                log.warn(e);
	            }
	
	            if (values) {
	                this.setValues(values);
	            }
	        }
	    }]);
	
	    return CaptionSettings;
	}(Component);
	
	function captionOptionsMenuTemplate() {
	
	    var template = '\n        <div class=\'amp-caption-setting-container\'>\n            <label class=\'amp-caption-settings-label\'>' + this.htmlEncode(this.localize("Text size: ")) + '</label>\n            <div class =\'amp-radio-button-group amp-font-size-group\'>\n                <label class =\'amp-radio-button amp-font-size\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'0.75\' class=\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Small")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.00\' class =\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Medium")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.50\' class =\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Large")) + '</span>\n                </label>\n            </div>\n\n            <label class =\'amp-caption-settings-label\'>' + this.htmlEncode(this.localize("Text color: ")) + '\n                <span class =\'amp-caption-color-selected-text\'></span>\n            </label>\n            <div class =\'amp-radio-button-group amp-font-color-group\'>\n                <label class =\'amp-radio-button amp-font-color\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteBlack\' class =\'amp-font-color-whiteBlack outline-enabled-control\' />\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteGray\' class =\'amp-font-color-whiteGray outline-enabled-control\' />\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackLightGray\' class =\'amp-font-color-blackLightGray outline-enabled-control\' />\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackWhite\' class =\'amp-font-color-blackWhite outline-enabled-control\'/>\n                    <span></span>\n                </label>\n            </div>\n\n            <div class =\'amp-background-transparency\'>\n                <span class =\'amp-caption-settings-label\'>' + this.htmlEncode(this.localize("Background transparency")) + '</span>\n                <div class=\'amp-toggle\'>\n                    <button type="button" aria-pressed="false" class=\'amp-captions-background-transparency outline-enabled-control\'></button>\n                    <span class =\'toggle-value\'>' + this.htmlEncode(this.localize("Off")) + '</span>\n                </div>\n            </div>\n            <div class =\'amp-caption-settings-reset-container\'>\n                <button type=\'button\' class =\'amp-caption-settings-reset amp-caption-settings-label outline-enabled-control\'>' + this.htmlEncode(this.localize("Revert to default settings")) + '</button>\n            </div>\n        </div>\n        ';
	
	    return template;
	}

/***/ },

/***/ 874:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 875:
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	var Component = videojs.getComponent('Component');
	var TextTrackButton = videojs.getComponent('TextTrackButton');
	var OffCaptionSubtitleMenuItem = videojs.getComponent('OffCaptionSubtitleMenuItem');
	var TextTrackMenuItem = videojs.getComponent('TextTrackMenuItem');
	
	var CaptionSubtitleButton = function (_TextTrackButton) {
	    _inherits(CaptionSubtitleButton, _TextTrackButton);
	
	    function CaptionSubtitleButton(player, options, ready) {
	        _classCallCheck(this, CaptionSubtitleButton);
	
	        var _this = _possibleConstructorReturn(this, (CaptionSubtitleButton.__proto__ || Object.getPrototypeOf(CaptionSubtitleButton)).call(this, player, options, ready));
	
	        _this.el_.setAttribute('aria-label', _this.localize('Captions / Subtitles'));
	        return _this;
	    }
	
	    _createClass(CaptionSubtitleButton, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'vjs-captions-subtitles-button ' + _get(CaptionSubtitleButton.prototype.__proto__ || Object.getPrototypeOf(CaptionSubtitleButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            _get(CaptionSubtitleButton.prototype.__proto__ || Object.getPrototypeOf(CaptionSubtitleButton.prototype), 'update', this).call(this);
	            // we add Subtitles Off as additional item so threshold is 1.
	            var threshold = 1;
	            if (this.items && this.items.length > threshold) {
	                this.show();
	            } else {
	                this.hide();
	            }
	        }
	    }, {
	        key: 'createItems',
	        value: function createItems(items) {
	            items = items || [];
	
	            var menuTitleComponent = new Component(this.player_, {
	                el: videojs.createEl('li', {
	                    className: 'amp-menu-header',
	                    innerHTML: this.controlText_,
	                    tabindex: -1
	                })
	            });
	            items.push(menuTitleComponent);
	
	            items.push(new OffCaptionSubtitleMenuItem(this.player_, { 'kind': this.kind_ }));
	
	            var tracks = this.player_.textTracks();
	            if (!tracks) {
	                return items;
	            }
	
	            for (var i = 0; i < tracks.length; i++) {
	                var track = tracks[i];
	
	                // only add tracks that are of the appropriate kind and have a label
	                if (track['kind'] === 'subtitles' || track['kind'] === 'captions') {
	                    var trackItem = new TextTrackMenuItem(this.player_, {
	                        // MenuItem is selectable
	                        'selectable': true,
	                        'track': track
	                    });
	
	                    if (track['kind'] === 'captions') {
	                        trackItem.el_.innerHTML = trackItem.el_.innerHTML + ' ' + this.localize('CC');
	                        var label = trackItem.options_['label'];
	                        trackItem.options_['label'] = label + this.localize(' [CC]');
	                        trackItem.el_.setAttribute('aria-label', label + this.localize(' [CC]'));
	                    }
	
	                    items.push(trackItem);
	                }
	            }
	            return items;
	        }
	    }]);
	
	    return CaptionSubtitleButton;
	}(TextTrackButton);
	
	CaptionSubtitleButton.prototype.kind_ = 'texttracks';
	CaptionSubtitleButton.prototype.controlText_ = 'Captions / Subtitles';
	
	TextTrackMenuItem.prototype.handleClick = function (event) {
	    var tracks = this.player_.textTracks();
	
	    if (!tracks) return;
	
	    for (var i = 0; i < tracks.length; i++) {
	        var track = tracks[i];
	
	        if (track['kind'] !== "subtitles" && track['kind'] !== "captions" && track['kind'] !== 'texttracks') {
	            continue;
	        }
	
	        if (track === this.track) {
	            track['mode'] = 'showing';
	        } else {
	            track['mode'] = 'disabled';
	        }
	
	        this.player_.captionToggle.update();
	    }
	};
	
	Component.registerComponent('CaptionSubtitleButton', CaptionSubtitleButton);

/***/ },

/***/ 876:
/***/ function(module, exports) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	var MenuItem = videojs.getComponent('MenuItem');
	var Component = videojs.getComponent('Component');
	
	var MoreOptionsMenuItem = function (_MenuItem) {
	    _inherits(MoreOptionsMenuItem, _MenuItem);
	
	    function MoreOptionsMenuItem(player, options, entry, menuButton) {
	        _classCallCheck(this, MoreOptionsMenuItem);
	
	        var _this = _possibleConstructorReturn(this, (MoreOptionsMenuItem.__proto__ || Object.getPrototypeOf(MoreOptionsMenuItem)).call(this, player, options));
	
	        _this.settingsButton = menuButton;
	        _this.dialog = _this.settingsButton.dialog;
	        _this.mainMenu = _this.settingsButton.menu;
	        _this.panel = _this.dialog.getChild('settingsPanel');
	        _this.panelChild = _this.panel.getChild('settingsPanelChild');
	        _this.panelChildEl = _this.panelChild.el_;
	
	        _this.size = null;
	
	        // keep state of what menu type is loading next
	        _this.menuToLoad = 'mainmenu';
	
	        var subMenuName = entry.charAt(0).toUpperCase() + entry.slice(1);
	        var SubMenuComponent = videojs.getComponent(subMenuName);
	
	        if (!SubMenuComponent) {
	            throw new Error('Component ' + subMenuName + ' does not exist');
	        }
	        _this.subMenu = new SubMenuComponent(_this.player(), options, menuButton, _this);
	        _this.appendSubMenuButton();
	
	        _this.eventHandlers();
	
	        player.on("loadedmetadata", function () {
	            _this.build();
	            _this.reset();
	        });
	        return _this;
	    }
	
	    _createClass(MoreOptionsMenuItem, [{
	        key: 'eventHandlers',
	        value: function eventHandlers() {
	            // override MenuButtons keyPress Event to not prevent default
	            this.subMenu.handleKeyPress = this.onKeyPress.bind(this);
	            this.subMenuKeyPressHandler = this.onSubMenuKeyPress.bind(this);
	            this.submenuClickHandler = this.onSubmenuClick.bind(this);
	            this.transitionEndHandler = this.onTransitionEnd.bind(this);
	        }
	    }, {
	        key: 'onKeyPress',
	        value: function onKeyPress(event) {
	            if (event.which === 32 || event.which === 13) {
	                this.handleClick(event);
	            }
	        }
	    }, {
	        key: 'onSubMenuKeyPress',
	        value: function onSubMenuKeyPress(event) {
	            if (event.which === 13) {
	                //event.preventDefault();
	                //event.stopImmediatePropagation();
	                this.onSubmenuClick(event);
	            }
	        }
	    }, {
	        key: 'onSubmenuClick',
	        value: function onSubmenuClick(event) {
	            var _this2 = this;
	
	            var target = null;
	
	            if (event.type === 'tap') {
	                target = event.target;
	            } else {
	                target = event.currentTarget;
	            }
	
	            if (target.classList.contains('vjs-back-button')) {
	                this.loadMainMenu();
	                return;
	            }
	
	            // To update the sub menu value on click, setTimeout is needed because
	            // updating the value is not instant
	            setTimeout(function () {
	                _this2.update(event);
	            }, 0);
	        }
	    }, {
	        key: 'createEl',
	        value: function createEl() {
	            var el = videojs.createEl('li', {
	                className: 'vjs-menu-item'
	            });
	
	            this.settingsSubMenuEl_ = videojs.createEl('div', {
	                className: 'vjs-settings-sub-menu'
	            });
	
	            return el;
	        }
	    }, {
	        key: 'appendSubMenuButton',
	        value: function appendSubMenuButton() {
	            this.settingsSubMenuTitleEl_ = videojs.createEl('div', {
	                className: 'vjs-settings-sub-menu-title'
	            });
	
	            this.subMenu.el_.appendChild(this.settingsSubMenuTitleEl_);
	
	            this.settingsSubMenuValueEl_ = videojs.createEl('div', {
	                className: 'vjs-settings-sub-menu-value'
	            });
	
	            this.subMenu.el_.appendChild(this.settingsSubMenuValueEl_);
	            this.subMenu.removeClass("vjs-control");
	            this.subMenu.addClass("vjs-menu-item");
	            this.el_ = this.subMenu.el_;
	            this.el_.tabIndex = -1;
	            this.on(['tap', 'click'], this.handleClick);
	        }
	    }, {
	        key: 'handleKeyPress',
	        value: function handleKeyPress(event) {
	            if (event.which == 9) {
	                event.preventDefault();
	                event.stopImmediatePropagation();
	                this.settingsButton.hideDialog();
	            } else {
	                _get(MoreOptionsMenuItem.prototype.__proto__ || Object.getPrototypeOf(MoreOptionsMenuItem.prototype), 'handleKeyPress', this).call(this, event);
	            }
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(event) {
	            var _this3 = this;
	
	            event.preventDefault();
	            event.stopImmediatePropagation();
	
	            this.menuToLoad = 'submenu';
	            // Remove open class to ensure only the open submenu gets this class
	            videojs.removeClass(this.el_, 'open');
	
	            _get(MoreOptionsMenuItem.prototype.__proto__ || Object.getPrototypeOf(MoreOptionsMenuItem.prototype), 'handleClick', this).call(this);
	
	            this.mainMenu.el_.style.opacity = '0';
	            // Wether to add or remove vjs-hidden class on the settingsSubMenuEl element
	            if (videojs.hasClass(this.settingsSubMenuEl_, 'vjs-hidden')) {
	                videojs.removeClass(this.settingsSubMenuEl_, 'vjs-hidden');
	
	                // animation not played without timeout
	                setTimeout(function () {
	                    _this3.settingsSubMenuEl_.style.opacity = '1';
	                    _this3.settingsSubMenuEl_.style.marginRight = '0px';
	                }, 0);
	
	                this.settingsButton.setDialogSize(this.size);
	                this.subMenu.menu.children_[0].el_.focus();
	            } else {
	                videojs.addClass(this.settingsSubMenuEl_, 'vjs-hidden');
	            }
	        }
	    }, {
	        key: 'createBackButton',
	        value: function createBackButton() {
	            var headerChild = void 0;
	            var headerChildIndex = -1;
	            var backButton = void 0;
	            var subMenuChildren = this.subMenu.menu.children_;
	            for (var i = 0; i < subMenuChildren.length; i++) {
	                if (subMenuChildren[i].hasClass("amp-menu-header")) {
	                    headerChild = subMenuChildren[i];
	                    headerChildIndex = i;
	                    break;
	                }
	            }
	
	            if (headerChild) {
	                this.subMenu.menu.removeChild(headerChild); //.children_.splice(headerChildIndex, 1);
	                backButton = this.subMenu.menu.addChild('MenuItem', {}, 0);
	                backButton.el_.innerHTML = '<span class="vjs-back-button-text">' + headerChild.el_.innerHTML + "</span>";
	            } else {
	                backButton = this.subMenu.menu.addChild('MenuItem', {}, 0);
	                backButton.el_.innerHTML = '<span class="vjs-control-text">Back to main menu</span>';
	                backButton.el_.innerText = '';
	            }
	            backButton.name_ = 'BackButton';
	            backButton.el_.setAttribute('aria-label', 'Back to main menu');
	            backButton.addClass('vjs-back-button');
	        }
	    }, {
	        key: 'PrefixedEvent',
	        value: function PrefixedEvent(element, type, callback) {
	            var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'addEvent';
	
	            var prefix = ['webkit', 'moz', 'MS', 'o', ''];
	
	            for (var p = 0; p < prefix.length; p++) {
	                if (!prefix[p]) {
	                    type = type.toLowerCase();
	                }
	
	                if (action === 'addEvent') {
	                    element.addEventListener(prefix[p] + type, callback, false);
	                } else if (action === 'removeEvent') {
	                    element.removeEventListener(prefix[p] + type, callback, false);
	                }
	            }
	        }
	    }, {
	        key: 'onTransitionEnd',
	        value: function onTransitionEnd(event) {
	            if (event.propertyName !== 'margin-right') {
	                return;
	            }
	
	            if (this.menuToLoad === 'mainmenu') {
	                // hide submenu
	                videojs.addClass(this.settingsSubMenuEl_, 'vjs-hidden');
	
	                // reset opacity to 0
	                this.settingsSubMenuEl_.style.opacity = '0';
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            videojs.addClass(this.settingsSubMenuEl_, 'vjs-hidden');
	            this.settingsSubMenuEl_.style.opacity = '0';
	            this.setMargin();
	        }
	    }, {
	        key: 'loadMainMenu',
	        value: function loadMainMenu() {
	            var _this4 = this;
	
	            this.menuToLoad = 'mainmenu';
	            this.mainMenu.show();
	            this.mainMenu.el_.style.opacity = '0';
	
	            // back button will always take you to main menu, so set dialog sizes
	            this.settingsButton.setDialogSize([this.mainMenu.width, this.mainMenu.height]);
	
	            // animation not triggered without timeout (some async stuff ?!?)
	            setTimeout(function () {
	                // anitmate margin and opacity before hiding the submenu
	                // this triggers CSS Transition event
	                _this4.setMargin();
	                _this4.mainMenu.el_.style.opacity = '1';
	                _this4.mainMenu.focus();
	            }, 0);
	        }
	    }, {
	        key: 'build',
	        value: function build() {
	            this.settingsSubMenuTitleEl_.innerHTML = this.subMenu.controlText_ || this.subMenu.buttonText;
	            this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_);
	            this.panelChildEl.appendChild(this.settingsSubMenuEl_);
	
	            this.update();
	            this.createBackButton();
	
	            this.player().controlBar[this.subMenu.name()] = this.subMenu;
	            if (this.player().controlBar[this.subMenu.name()].setInitialValues) {
	                this.player().controlBar[this.subMenu.name()].setInitialValues();
	            }
	
	            this.getSize();
	            this.bindClickEvents();
	
	            if (this.subMenu.hasClass("vjs-hidden")) {
	                this.hide();
	            }
	
	            // prefixed event listeners for CSS TransitionEnd
	            this.PrefixedEvent(this.settingsSubMenuEl_, 'TransitionEnd', this.transitionEndHandler, 'addEvent');
	        }
	
	        /**
	            * Update the sub menus
	            *
	            * @method update
	            */
	
	    }, {
	        key: 'update',
	        value: function update(event) {
	            var _this5 = this;
	
	            var target = null;
	            var subMenu = this.subMenu.name();
	
	            if (event && event.type === 'tap') {
	                target = event.target;
	            } else if (event) {
	                target = event.currentTarget;
	            }
	
	            this.subMenu.menu.children_.forEach(function (subMenuItem) {
	                if (!(subMenuItem instanceof Component)) {
	                    return;
	                }
	
	                if (subMenuItem.hasClass('vjs-selected')) {
	                    _this5.settingsSubMenuValueEl_.innerHTML = _this5.localize(subMenuItem.options_.label);
	                }
	            });
	
	            if (target && !target.classList.contains('vjs-back-button')) {
	                this.settingsButton.hideDialog();
	            }
	        }
	    }, {
	        key: 'bindClickEvents',
	        value: function bindClickEvents() {
	            var _this6 = this;
	
	            this.subMenu.menu.children().forEach(function (item) {
	                if (!(item instanceof Component) || item.hasClass('amp-non-clickable-element')) {
	                    return;
	                }
	                item.on(['tap', 'click'], _this6.submenuClickHandler);
	                item.on('keydown', _this6.subMenuKeyPressHandler);
	            });
	        }
	
	        // save size of submenus on first init
	        // if number of submenu items change dinamically more logic will be needed
	
	    }, {
	        key: 'getSize',
	        value: function getSize() {
	            this.dialog.removeClass('vjs-hidden');
	            this.size = this.settingsButton.getComponentSize(this.settingsSubMenuEl_);
	            this.setMargin();
	            this.dialog.addClass('vjs-hidden');
	            videojs.addClass(this.settingsSubMenuEl_, 'vjs-hidden');
	        }
	    }, {
	        key: 'setMargin',
	        value: function setMargin() {
	            var _size = _slicedToArray(this.size, 1),
	                width = _size[0];
	
	            this.settingsSubMenuEl_.style.marginRight = '-' + width + 'px';
	        }
	
	        /**
	            * Hide the sub menu
	            */
	
	    }, {
	        key: 'hideSubMenu',
	        value: function hideSubMenu() {
	            // after removing settings item this.el_ === null
	            if (!this.el_) {
	                return;
	            }
	
	            if (videojs.hasClass(this.el_, 'open')) {
	                videojs.addClass(this.settingsSubMenuEl_, 'vjs-hidden');
	                videojs.removeClass(this.el_, 'open');
	            }
	        }
	    }]);
	
	    return MoreOptionsMenuItem;
	}(MenuItem);
	
	MoreOptionsMenuItem.prototype.contentElType = 'button';
	
	videojs.registerComponent('MoreOptionsMenuItem', MoreOptionsMenuItem);

/***/ },

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	__webpack_require__(878);
	
	var Button = videojs.getComponent('Button');
	var Menu = videojs.getComponent('Menu');
	var Component = videojs.getComponent('Component');
	var MoreOptionsMenuItem = videojs.getComponent('MoreOptionsMenuItem');
	
	var MoreOptionsButton = function (_Button) {
	    _inherits(MoreOptionsButton, _Button);
	
	    function MoreOptionsButton(player, options) {
	        _classCallCheck(this, MoreOptionsButton);
	
	        var _this = _possibleConstructorReturn(this, (MoreOptionsButton.__proto__ || Object.getPrototypeOf(MoreOptionsButton)).call(this, player, options));
	
	        _this.playerComponent = player;
	
	        _this.dialog = _this.addChild('moreOptionsDialog');
	        _this.dialogEl = _this.dialog.el_;
	        _this.menu = null;
	        _this.panel = _this.dialog.addChild('settingsPanel');
	        _this.panelChild = _this.panel.addChild('settingsPanelChild');
	
	        _this.addClass('vjs-settings');
	        _this.el_.setAttribute('aria-label', _this.localize('Settings'));
	
	        // Event handlers
	        _this.addSettingsItemHandler = _this.onAddSettingsItem.bind(_this);
	        _this.disposeSettingsItemHandler = _this.onDisposeSettingsItem.bind(_this);
	        _this.playerClickHandler = _this.onPlayerClick.bind(_this);
	        _this.userInactiveHandler = _this.onUserInactive.bind(_this);
	
	        _this.buildMenu();
	        _this.bindEvents();
	
	        player.on('loadedmetadata', function () {
	            player.moreOptionsButton = _this;
	        });
	        return _this;
	    }
	
	    _createClass(MoreOptionsButton, [{
	        key: 'onPlayerClick',
	        value: function onPlayerClick(event) {
	            if (event.target.classList.contains('vjs-settings')) {
	                return;
	            }
	
	            if (!this.dialog.hasClass('vjs-hidden')) {
	                this.hideDialog();
	            }
	        }
	    }, {
	        key: 'onDisposeSettingsItem',
	        value: function onDisposeSettingsItem(event, name) {
	            if (name === undefined) {
	                var children = this.menu.children();
	
	                while (children.length > 0) {
	                    children[0].dispose();
	                    this.menu.removeChild(children[0]);
	                }
	
	                this.addClass('vjs-hidden');
	            } else {
	                var item = this.menu.getChild(name);
	
	                if (item) {
	                    item.dispose();
	                    this.menu.removeChild(item);
	                }
	            }
	
	            this.hideDialog();
	
	            if (this.options_.entries.length === 0) {
	                this.addClass('vjs-hidden');
	            }
	        }
	    }, {
	        key: 'onAddSettingsItem',
	        value: function onAddSettingsItem(event, data) {
	            var _data = _slicedToArray(data, 2),
	                entry = _data[0],
	                options = _data[1];
	
	            this.addMenuItem(entry, options);
	            this.removeClass('vjs-hidden');
	        }
	    }, {
	        key: 'onUserInactive',
	        value: function onUserInactive() {
	            if (!this.playerComponent.paused() && !this.dialog.hasClass('vjs-hidden')) {
	                this.hideDialog();
	            }
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            this.playerComponent.on('click', this.playerClickHandler);
	            this.playerComponent.on('addsettingsitem', this.addSettingsItemHandler);
	            this.playerComponent.on('disposesettingsitem', this.disposeSettingsItemHandler);
	            this.playerComponent.on('userinactive', this.userInactiveHandler);
	        }
	    }, {
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-more-options-icon ' + _get(MoreOptionsButton.prototype.__proto__ || Object.getPrototypeOf(MoreOptionsButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            if (!this.hasJustBeenClicked()) {
	                //this.clearOtherMenus();
	                if (this.dialog.hasClass('vjs-hidden')) {
	                    this.pressButton();
	                } else {
	                    this.unpressButton();
	                    this.el_.focus();
	                }
	            }
	        }
	    }, {
	        key: 'handleKeyPress',
	        value: function handleKeyPress(event) {
	            if (event.which === 9) {
	                this.hideDialog();
	            }
	            _get(MoreOptionsButton.prototype.__proto__ || Object.getPrototypeOf(MoreOptionsButton.prototype), 'handleKeyPress', this).call(this, event);
	        }
	    }, {
	        key: 'showDialog',
	        value: function showDialog() {
	            this.menu.el_.style.opacity = '1';
	            this.dialog.show();
	            this.setDialogSize(this.getComponentSize(this.menu));
	            this.menu.focus();
	            this.el_.setAttribute('aria-expanded', 'true');
	            this.addClass('vjs-no-tooltip');
	            this.buttonPressed_ = true;
	        }
	    }, {
	        key: 'hideDialog',
	        value: function hideDialog() {
	            this.dialog.hide();
	            this.setDialogSize(this.getComponentSize(this.menu));
	            this.menu.el_.style.opacity = '1';
	            this.resetChildren();
	            this.el_.setAttribute('aria-expanded', 'false');
	            this.removeClass('vjs-no-tooltip');
	            this.buttonPressed_ = false;
	        }
	    }, {
	        key: 'pressButton',
	        value: function pressButton() {
	            this.showDialog();
	        }
	    }, {
	        key: 'unpressButton',
	        value: function unpressButton() {
	            this.hideDialog();
	        }
	    }, {
	        key: 'hasJustBeenClicked',
	        value: function hasJustBeenClicked() {
	            return false;
	        }
	    }, {
	        key: 'getComponentSize',
	        value: function getComponentSize(element) {
	            var width = null;
	            var height = null;
	
	            // Could be component or just DOM element
	            if (element instanceof Component) {
	                width = element.el_.offsetWidth;
	                height = element.el_.offsetHeight;
	
	                // keep width/height as properties for direct use
	                element.width = width;
	                element.height = height;
	            } else {
	                width = element.offsetWidth;
	                height = element.offsetHeight;
	            }
	
	            return [width, height];
	        }
	    }, {
	        key: 'setDialogSize',
	        value: function setDialogSize(_ref) {
	            var _ref2 = _slicedToArray(_ref, 2),
	                width = _ref2[0],
	                height = _ref2[1];
	
	            if (typeof height !== 'number') {
	                return;
	            }
	
	            var offset = 40;
	            var maxHeight = this.playerComponent.el_.offsetHeight - offset;
	
	            if (height > maxHeight) {
	                height = maxHeight;
	                width += 17;
	                this.panel.el_.style.maxHeight = height + 'px';
	            } else if (this.panel.el_.style.maxHeight !== '') {
	                this.panel.el_.style.maxHeight = '';
	            }
	
	            this.dialogEl.style.width = width + 'px';
	            this.dialogEl.style.height = height + 'px';
	            if (height > 0) {
	                var progressBar = this.playerComponent.controlBar.progressControl.el_;
	                this.dialogEl.style.right = this.el_.getBoundingClientRect().right - (progressBar.getBoundingClientRect().right - parseFloat(window.getComputedStyle(progressBar).getPropertyValue('padding-right')));
	            }
	        }
	    }, {
	        key: 'buildMenu',
	        value: function buildMenu() {
	            var _this2 = this;
	
	            this.menu = new Menu(this.player());
	            this.menu.addClass('vjs-main-menu');
	            var entries = this.options_.entries;
	
	            if (entries.length === 0) {
	                this.addClass('vjs-hidden');
	                this.panelChild.addChild(this.menu);
	                return;
	            }
	
	            entries.forEach(function (entry) {
	                var subItem = _this2.addMenuItem(entry, _this2.options_);
	            });
	
	            this.panelChild.addChild(this.menu);
	        }
	    }, {
	        key: 'addMenuItem',
	        value: function addMenuItem(entry, options) {
	            var openSubMenu = function openSubMenu() {
	                if (videojs.hasClass(this.el_, 'open')) {
	                    videojs.removeClass(this.el_, 'open');
	                } else {
	                    videojs.addClass(this.el_, 'open');
	                }
	            };
	
	            options.name = entry.charAt(0).toUpperCase() + entry.slice(1);
	            var moreOptionsMenuItem = new MoreOptionsMenuItem(this.player(), options, entry, this);
	
	            this.menu.addChild(moreOptionsMenuItem);
	
	            // Hide children to avoid sub menus stacking on top of each other
	            // or having multiple menus open
	            moreOptionsMenuItem.on('click', videojs.bind(this, this.hideChildren));
	
	            // Wether to add or remove selected class on the settings sub menu element
	            moreOptionsMenuItem.on('click', openSubMenu);
	
	            return moreOptionsMenuItem;
	        }
	    }, {
	        key: 'resetChildren',
	        value: function resetChildren() {
	            this.menu.children().forEach(function (menuChild) {
	                menuChild.reset();
	            });
	        }
	
	        /**
	         * Hide all the sub menus
	         */
	
	    }, {
	        key: 'hideChildren',
	        value: function hideChildren() {
	            this.menu.children().forEach(function (menuChild) {
	                menuChild.hideSubMenu();
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.menu.children().forEach(function (menuChild) {
	                menuChild.update();
	            });
	        }
	    }]);
	
	    return MoreOptionsButton;
	}(Button);
	
	var SettingsPanel = function (_Component) {
	    _inherits(SettingsPanel, _Component);
	
	    function SettingsPanel(player, options) {
	        _classCallCheck(this, SettingsPanel);
	
	        return _possibleConstructorReturn(this, (SettingsPanel.__proto__ || Object.getPrototypeOf(SettingsPanel)).call(this, player, options));
	    }
	
	    _createClass(SettingsPanel, [{
	        key: 'createEl',
	        value: function createEl() {
	            return _get(SettingsPanel.prototype.__proto__ || Object.getPrototypeOf(SettingsPanel.prototype), 'createEl', this).call(this, 'div', {
	                className: 'vjs-settings-panel',
	                innerHTML: '',
	                tabIndex: -1
	            });
	        }
	    }]);
	
	    return SettingsPanel;
	}(Component);
	
	var SettingsPanelChild = function (_Component2) {
	    _inherits(SettingsPanelChild, _Component2);
	
	    function SettingsPanelChild(player, options) {
	        _classCallCheck(this, SettingsPanelChild);
	
	        return _possibleConstructorReturn(this, (SettingsPanelChild.__proto__ || Object.getPrototypeOf(SettingsPanelChild)).call(this, player, options));
	    }
	
	    _createClass(SettingsPanelChild, [{
	        key: 'createEl',
	        value: function createEl() {
	            return _get(SettingsPanelChild.prototype.__proto__ || Object.getPrototypeOf(SettingsPanelChild.prototype), 'createEl', this).call(this, 'div', {
	                className: 'vjs-settings-panel-child outline-enabled-control',
	                innerHTML: '',
	                tabIndex: -1
	            });
	        }
	    }]);
	
	    return SettingsPanelChild;
	}(Component);
	
	var MoreOptionsDialog = function (_Component3) {
	    _inherits(MoreOptionsDialog, _Component3);
	
	    function MoreOptionsDialog(player, options) {
	        _classCallCheck(this, MoreOptionsDialog);
	
	        var _this5 = _possibleConstructorReturn(this, (MoreOptionsDialog.__proto__ || Object.getPrototypeOf(MoreOptionsDialog)).call(this, player, options));
	
	        _this5.hide();
	        return _this5;
	    }
	
	    _createClass(MoreOptionsDialog, [{
	        key: 'createEl',
	        value: function createEl() {
	            var uniqueId = this.id_;
	            var dialogLabelId = 'TTsettingsMoreOptionsDialogLabel-' + uniqueId;
	            var dialogDescriptionId = 'TTMoreOptionsDialogDescription-' + uniqueId;
	
	            return _get(MoreOptionsDialog.prototype.__proto__ || Object.getPrototypeOf(MoreOptionsDialog.prototype), 'createEl', this).call(this, 'div', {
	                className: 'vjs-moreoptions-dialog vjs-modal-overlay',
	                innerHTML: '',
	                tabIndex: -1
	            }, {
	                'role': 'dialog',
	                'aria-labelledby': dialogLabelId,
	                'aria-describedby': dialogDescriptionId
	            });
	        }
	    }]);
	
	    return MoreOptionsDialog;
	}(Component);
	
	MoreOptionsButton.prototype.controlText_ = 'Settings';
	
	Component.registerComponent('MoreOptionsButton', MoreOptionsButton);
	Component.registerComponent('MoreOptionsDialog', MoreOptionsDialog);
	Component.registerComponent('SettingsPanel', SettingsPanel);
	Component.registerComponent('SettingsPanelChild', SettingsPanelChild);

/***/ },

/***/ 878:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 879:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component = videojs.getComponent('Component');
	var Button = videojs.getComponent('Button');
	
	__webpack_require__(880);
	
	var CaptionToggle = function (_Button) {
	    _inherits(CaptionToggle, _Button);
	
	    function CaptionToggle(player, options) {
	        _classCallCheck(this, CaptionToggle);
	
	        options.name = 'captionToggle';
	
	        var _this = _possibleConstructorReturn(this, (CaptionToggle.__proto__ || Object.getPrototypeOf(CaptionToggle)).call(this, player, options));
	
	        _this.buttonPressed = false;
	        _this.lastSelectedTrack = null;
	        _this.trackList = [];
	
	        player.on('loadedmetadata', function () {
	            player.captionToggle = _this;
	            var tracks = _this.player_.textTracks();
	            if (!tracks || !tracks.length) {
	                _this.hide();
	                return;
	            };
	
	            for (var i = 0; i < tracks.length; i++) {
	                if (tracks[i]['kind'] === 'subtitles' || tracks[i]['kind'] === 'captions') {
	                    _this.trackList.push(tracks[i]);
	                }
	            }
	
	            if (!_this.trackList.length) {
	                _this.hide();
	                return;
	            };
	
	            var trackToSelect = _this.getTrackToSelect(_this.trackList);
	            _this.setStrings(trackToSelect, false);
	
	            _this.show();
	        });
	        return _this;
	    }
	
	    _createClass(CaptionToggle, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-caption-toggle ' + _get(CaptionToggle.prototype.__proto__ || Object.getPrototypeOf(CaptionToggle.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var tracks = this.player_.textTracks();
	            if (!tracks || !tracks.length) {
	                this.hide();
	                return;
	            };
	
	            var trackToSelect = this.getTrackToSelect(tracks);
	            if (!this.buttonPressed) {
	                this.el_.setAttribute('aria-pressed', 'true');
	                this.buttonPressed = true;
	
	                trackToSelect['mode'] = 'showing';
	                this.lastSelectedTrack = trackToSelect;
	
	                this.setStrings(this.lastSelectedTrack, true);
	
	                this.player_.moreOptionsButton.update();
	            } else {
	                this.el_.setAttribute('aria-pressed', 'false');
	                this.buttonPressed = false;
	                for (var i = 0; i < this.trackList.length; i++) {
	                    this.trackList[i]['mode'] = 'disabled';
	                }
	                this.player_.moreOptionsButton.update();
	                this.setStrings(trackToSelect, false);
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var tracks = this.player_.textTracks();
	            if (!tracks || !tracks.length) {
	                this.hide();
	                return;
	            };
	
	            for (var i = 0; i < tracks.length; i++) {
	                if (tracks[i]['mode'] === 'showing') {
	                    this.el_.setAttribute('aria-pressed', 'true');
	                    this.buttonPressed = true;
	                    this.lastSelectedTrack = tracks[i];
	                    this.setStrings(this.lastSelectedTrack, true);
	                    return;
	                }
	            }
	            this.el_.setAttribute('aria-pressed', 'false');
	            var trackToSelect = this.getTrackToSelect(tracks);
	            this.setStrings(trackToSelect, false);
	            this.buttonPressed = false;
	        }
	    }, {
	        key: 'getTrackToSelect',
	        value: function getTrackToSelect(tracks) {
	            if (this.lastSelectedTrack) {
	                return this.lastSelectedTrack;
	            }
	
	            var trackToSelect = void 0;
	            for (var i = 0; i < tracks.length; i++) {
	                if (tracks[i]['kind'] === 'captions') {
	                    trackToSelect = tracks[i];
	                    break;
	                }
	            }
	            if (!trackToSelect) {
	                trackToSelect = tracks[0];
	            }
	            return trackToSelect;
	        }
	    }, {
	        key: 'setStrings',
	        value: function setStrings(track, clicked) {
	            var text = 'Captions on';
	            if (track['kind'] === 'captions' && !clicked) {
	                text = 'Captions on';
	            } else if (track['kind'] === 'captions' && clicked) {
	                text = 'Captions off';
	            } else if (track['kind'] === 'subtitles' && !clicked) {
	                text = 'Subtitles on';
	            } else if (track['kind'] === 'subtitles' && clicked) {
	                text = 'Subtitles off';
	            }
	
	            this.controlText(this.htmlEncode(this.localize(text)));
	            this.el_.setAttribute('aria-label', this.localize(text));
	        }
	    }]);
	
	    return CaptionToggle;
	}(Button);
	
	CaptionToggle.prototype.controlText_ = 'Subtitles/CC';
	videojs.registerComponent('CaptionToggle', CaptionToggle);

/***/ },

/***/ 880:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 881:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
	var Component = videojs.getComponent('Component');
	
	__webpack_require__(882);
	
	var MouseTimeTooltip = function (_MouseTimeDisplay) {
	    _inherits(MouseTimeTooltip, _MouseTimeDisplay);
	
	    function MouseTimeTooltip(player, options) {
	        _classCallCheck(this, MouseTimeTooltip);
	
	        var _this = _possibleConstructorReturn(this, (MouseTimeTooltip.__proto__ || Object.getPrototypeOf(MouseTimeTooltip)).call(this, player, options));
	
	        _this.tooltipSpan = videojs.createEl('span', {
	            className: 'amp-time-tooltip-text'
	        });
	
	        _this.el_.appendChild(_this.tooltipSpan);
	        return _this;
	    }
	
	    _createClass(MouseTimeTooltip, [{
	        key: 'update',
	        value: function update(newTime, position) {
	            _get(MouseTimeTooltip.prototype.__proto__ || Object.getPrototypeOf(MouseTimeTooltip.prototype), 'update', this).call(this, newTime, position);
	            if (this.tooltipSpan) {
	                this.tooltipSpan.innerText = this.el_.getAttribute('data-current-time');
	                this.tooltipSpan.innerHtml = this.el_.getAttribute('data-current-time');
	            }
	        }
	    }]);
	
	    return MouseTimeTooltip;
	}(MouseTimeDisplay);
	
	Component.registerComponent('MouseTimeTooltip', MouseTimeTooltip);

/***/ },

/***/ 882:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 883:
/***/ function(module, exports) {

	'use strict';
	
	// Changing hover to clicks on control buttons.
	var MenuButton = videojs.getComponent('MenuButton');
	var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
	
	MenuButton.prototype.handleClick = function () {
	    if (!this.hasJustBeenClicked()) {
	        this.clearOtherMenus();
	        if (this.buttonPressed_) {
	            this.unpressButton();
	        } else {
	            this.pressButton();
	        }
	    }
	};
	
	MenuButton.prototype.handleMouseOver = function () {};
	MenuButton.prototype.handleMouseLeave = function () {};

/***/ },

/***/ 884:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	__webpack_require__(885);
	
	amp.StreamSkinPlugin = amp.extend(amp.getComponent('Component'), {
	    init: function init(player, options) {
	        "use strict";
	
	        player.options_ = player.options_ || {};
	        player.options_["inactivityTimeout"] = 6000;
	
	        var logo = player.options_.logo,
	            enabled = !!logo && logo.enabled !== undefined ? logo.enabled : true,
	            opacity = !!logo && !!logo.opacity ? logo.opacity : 0.5,
	            targetUrl = !!logo && !!logo.targetUrl ? logo.targetUrl : null,
	            horizontalPosition = !!logo && !!logo.horizontalPosition ? logo.horizontalPosition : 'left',
	            verticalPosition = !!logo && !!logo.verticalPosition ? logo.verticalPosition : 'top';
	
	        // Add skin plugins
	        var skinPlugins = {
	            contentTitle: {
	                title: player.options_.title || '',
	                description: player.options_.description || ''
	            },
	            logo: {
	                enabled: enabled,
	                opacity: opacity,
	                targetUrl: targetUrl
	            },
	            responsive: {
	                sizeClasses: player.options_.sizeClasses || {}
	            },
	            // ToDo: we need to translate the menu titles
	            live: {
	                controlText: 'LIVE'
	            },
	            closedCaption: {
	                menuTitle: 'Closed Captioning'
	            },
	            quality: {
	                menuTitle: 'Quality',
	                selectedItem: 0
	            },
	            playbackSpeed: player.options_.playbackSpeed || {
	                enabled: true,
	                speedLevels: [{ name: '2.0x', value: 2 }, { name: '1.25x', value: 1.25 }, { name: '1.5x', value: 1.5 }, { name: '1.75x', value: 1.75 }, { name: '1.0x', value: 1 }, { name: '0.5x', value: 0.5 }]
	            },
	            ampVolumeMenuButton: { vertical: false },
	
	            controlBarIcons: {
	                leftIcons: ['playToggle', 'ampVolumeMenuButton', 'liveIndicator', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'remainingTimeDisplay'],
	                middleIcons: ["progressControl"],
	                rightIcons: ['captionToggle', 'moreOptionsButton', 'fullscreenToggle'],
	                removeOtherIcons: true
	            },
	            outline: {
	                displayOnMenuItems: true
	            }
	        };
	
	        // It's too late to merge plugin options to player options,
	        // explicitly start each plugin instead
	        Object.getOwnPropertyNames(skinPlugins).forEach(function (pluginName) {
	            if (player[pluginName]) {
	                player[pluginName](skinPlugins[pluginName]);
	            }
	        });
	
	        player.on("loadedmetadata", function () {
	
	            var controlBarChildren = player.controlBar.children();
	            var streamIconButton = null;
	            for (var i = 0; i < controlBarChildren.length; i++) {
	                if (controlBarChildren[i].el() && controlBarChildren[i].el().className.indexOf('amp-controlbaricons') !== -1) {
	                    var subControlbar = controlBarChildren[i];
	                    var childControls = subControlbar.children();
	
	                    var _loop = function _loop(j) {
	                        var childItem = childControls[j];
	                        childItem.on('focus', function () {
	                            clearOtherMenus(childItem);
	                        });
	                    };
	
	                    for (var j = 0; j < childControls.length; j++) {
	                        _loop(j);
	                    }
	                }
	            }
	        });
	
	        player.on("loadeddata", function () {
	            player.captionToggle.update();
	            player.moreOptionsButton.update();
	        });
	
	        player.ready(function () {
	            player.el().appendChild(videojs.createEl('div', {
	                className: 'amp-controls-background'
	            }));
	
	            var hideControlsBackground = function hideControlsBackground(hideBg) {
	                var backgroundControl = this.$('.amp-controls-background');
	                if (hideBg && backgroundControl.className.indexOf('amp-controls-background-hide') === -1) {
	                    backgroundControl.classList.add('amp-controls-background-hide');
	                } else {
	                    this.$('.amp-controls-background').classList.remove('amp-controls-background-hide');
	                }
	            };
	            player.on('userinactive', hideControlsBackground.bind(this, true));
	            player.on('useractive', hideControlsBackground.bind(this, false));
	        });
	
	        function clearOtherMenus(childItem) {
	            var controlBarChildren = player.controlBar.children();
	            var streamIconButton = null;
	            for (var i = 0; i < controlBarChildren.length; i++) {
	                if (controlBarChildren[i].el() && controlBarChildren[i].el().className.indexOf('amp-controlbaricons') !== -1) {
	                    var subControlbar = controlBarChildren[i];
	                    var childControls = subControlbar.children();
	                    for (var j = 0; j < childControls.length; j++) {
	                        if (childControls[j] !== childItem && childControls[j].unpressButton) {
	                            childControls[j].unpressButton();
	                        }
	                    }
	                }
	            }
	        }
	    }
	});
	
	/**
	 * Dispose method.
	 * Not doing anything, as this is not an actual control.
	 */
	amp.StreamSkinPlugin.prototype.dispose = function () {};
	
	/**
	 * Register StreamSkinPlugin component
	 */
	amp.registerComponent('streamSkinPlugin', amp.StreamSkinPlugin);
	
	amp.getComponent('ControlBar').prototype.options_ = {
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
	        'TextTrackList': {},
	        'captionsButton': {},
	        'streamSkinPlugin': {},
	        'captionToggle': {},
	        'moreOptionsButton': {
	            entries: ['playbackSpeedButton', 'captionSubtitleButton', 'captionSettingsButton', 'qualityButton']
	        }
	    }
	};
	
	videojs.getComponent('SeekBar').prototype.options_ = {
	    children: ['loadProgressBar', 'mouseTimeTooltip', 'playProgressBar', 'seekHandle'],
	    'barName': 'playProgressBar',
	    'handleName': 'seekHandle'
	};

/***/ },

/***/ 885:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMzMTY5NzcxZDFhZDA5YzQwZTlkPzAyNDcqIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdB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K0JBQXNCLEVBQXRCO0FBQ0Esd0JBQWUsRUFBZjtBQUNBLDRCQUFtQixFQUFuQjtBQUNBLGlDQUF3QixFQUF4QjtBQUNBLHdCQUFlLEVBQWY7QUFDQSw0QkFBbUIsRUFBbkI7QUFDQSw2QkFBb0IsRUFBcEI7QUFDQSwwQkFBaUIsRUFBakI7QUFDQSwyQkFBa0IsRUFBbEI7QUFDQSw2QkFBb0IsRUFBcEI7QUFDQSwwQkFBaUIsRUFBakI7QUFDQSw4QkFBcUI7QUFDakIsc0JBQVMsQ0FDTCxxQkFESyxFQUVMLHVCQUZLLEVBR0wsdUJBSEssRUFJTCxlQUpLLENBQVQ7VUFESjtNQWJKO0VBRko7O0FBMEJBLFNBQVEsWUFBUixDQUFxQixTQUFyQixFQUFnQyxTQUFoQyxDQUEwQyxRQUExQyxHQUFxRDtBQUNqRCxlQUFVLENBQ1IsaUJBRFEsRUFFUixrQkFGUSxFQUdSLGlCQUhRLEVBSVIsWUFKUSxDQUFWO0FBTUEsZ0JBQVcsaUJBQVg7QUFDQSxtQkFBYyxZQUFkO0VBUkosQzs7Ozs7OztBQzVMQSwwQyIsImZpbGUiOiJidW5kbGVzL0RlYnVnL3BsYXllci1za2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGxheWVyLXNraW5cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGxheWVyLXNraW5cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMzMTY5NzcxZDFhZDA5YzQwZTlkXG4gKiovIiwicmVxdWlyZShcIi4vc3R5bGVzL3RoZW1lcy9zdHJlYW0tc2tpbi9tYWluLnNjc3NcIik7XHJcbnJlcXVpcmUoXCIuL1N0cmVhbUljb24vU3RyZWFtSWNvbi5qc1wiKTtcclxucmVxdWlyZShcIi4vVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25TdWJ0aXRsZS9PZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbS5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblNldHRpbmdzL0NhcHRpb25TZXR0aW5ncy5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblN1YnRpdGxlL0NhcHRpb25TdWJ0aXRsZVwiKTtcclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMvTW9yZU9wdGlvbnNNZW51SXRlbS5qc1wiKTtcclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMvTW9yZU9wdGlvbnMuanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5qc1wiKTtcclxucmVxdWlyZShcIi4vTW91c2VUaW1lVG9vbHRpcC9Nb3VzZVRpbWVUb29sdGlwLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qc1wiKTtcclxucmVxdWlyZShcIi4vU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1BsYXllclBsdWdpbi5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9zdHlsZXMvdGhlbWVzL3N0cmVhbS1za2luL21haW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg1OVxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xyXG5cclxucmVxdWlyZShcIi4vU3RyZWFtSWNvbi5zY3NzXCIpO1xyXG5cclxuY2xhc3MgU3RyZWFtSWNvbkJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSAnc3RyZWFtSWNvbkJ1dHRvbic7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsaXplKCdWaWV3IGluIFN0cmVhbSBidXR0b24nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYGFtcC1zdHJlYW0taWNvbiAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGxldCBleHRlcm5hbExpbmsgPSAhIXRoaXMub3B0aW9ucyAmJiAhIXRoaXMub3B0aW9ucygpID8gdGhpcy5vcHRpb25zKCkuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuICAgICAgICB3aW5kb3cub3BlbihleHRlcm5hbExpbmssIFwiX2JsYW5rXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuU3RyZWFtSWNvbkJ1dHRvbi5wcm90b3R5cGUuY29udHJvbFRleHRfID0gJ1ZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbSc7XHJcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1N0cmVhbUljb25CdXR0b24nLCBTdHJlYW1JY29uQnV0dG9uKTtcclxuXHJcbmNvbnN0IFN0cmVhbUljb25QbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbGV0IHBsYXllciA9IHRoaXM7XHJcbiAgICBsZXQgZXh0ZXJuYWxMaW5rID0gISFvcHRpb25zID8gb3B0aW9ucy5leHRlcm5hbExpbmsgOiBudWxsO1xyXG5cclxuICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udHJvbEJhckNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgc3RyZWFtSWNvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cmVhbWljb25CdXR0b24gPSB0aGlzLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ1N0cmVhbUljb25CdXR0b24nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHN0cmVhbUljb25CdXR0b24gPSByaWdodENvbnRyb2xCYXIuYWRkQ2hpbGQoc3RyZWFtaWNvbkJ1dHRvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0cmVhbUljb25CdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLnN0cmVhbUljb25CdXR0b24gPSBzdHJlYW1JY29uQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbignc3RyZWFtSWNvblBsdWdpbicsIFN0cmVhbUljb25QbHVnaW4pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg2OVxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xyXG5cclxucmVxdWlyZShcIi4vVGhlYXRlck1vZGUuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFRoZWF0ZXJNb2RlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMubmFtZSA9ICd0aGVhdGVyTW9kZUJ1dHRvbic7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdUaGVhdGVyIG1vZGUnKSkpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICB0aGlzLmxvY2FsaXplKCdUaGVhdGVyIG1vZGUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYGFtcC10aGVhdGVyLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDbGFzcygnYW1wLXRoZWF0ZXItZXhpdC1idXR0b24nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCdhbXAtdGhlYXRlci1leGl0LWJ1dHRvbicpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcigpLnRyaWdnZXIoJ2V4aXRUaGVhdGVyTW9kZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdUaGVhdGVyIG1vZGUnKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAgdGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygnYW1wLXRoZWF0ZXItZXhpdC1idXR0b24nKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIoKS50cmlnZ2VyKCdlbnRlclRoZWF0ZXJNb2RlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ0V4aXQgdGhlYXRlciBtb2RlJykpKTtcclxuICAgICAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgIHRoaXMubG9jYWxpemUoJ0V4aXQgdGhlYXRlciBtb2RlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuVGhlYXRlck1vZGVCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdUaGVhdGVyIG1vZGUnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdUaGVhdGVyTW9kZUJ1dHRvbicsIFRoZWF0ZXJNb2RlQnV0dG9uKTtcclxuXHJcbmNvbnN0IFRoZWF0ZXJNb2RlUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHRoZWF0ZXJNb2RlQnV0dG9uID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xCYXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lID09PSBcImFtcC1jb250cm9sYmFyaWNvbnMtcmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0Q29udHJvbEJhciA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKClbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhlYXRlckJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnVGhlYXRlck1vZGVCdXR0b24nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoZWF0ZXJNb2RlQnV0dG9uID0gcmlnaHRDb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKHRoZWF0ZXJCdXR0b24uZWwoKSwgcGxheWVyLmNvbnRyb2xCYXIuZnVsbHNjcmVlblRvZ2dsZS5lbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhlYXRlck1vZGVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLnRoZWF0ZXJNb2RlQnV0dG9uID0gdGhlYXRlck1vZGVCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZpZGVvanMucGx1Z2luKCd0aGVhdGVyTW9kZVBsdWdpbicsIFRoZWF0ZXJNb2RlUGx1Z2luKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gODcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBUZXh0VHJhY2tNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdUZXh0VHJhY2tNZW51SXRlbScpO1xyXG5cclxuY2xhc3MgT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0gZXh0ZW5kcyBUZXh0VHJhY2tNZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKXtcclxuICAgICAgICAvLyBDcmVhdGUgcHNldWRvIHRyYWNrIGluZm9cclxuICAgICAgICAvLyBSZXF1aXJlcyBvcHRpb25zWydraW5kJ11cclxuICAgICAgICBvcHRpb25zWyd0cmFjayddID0ge1xyXG4gICAgICAgICAgICAna2luZCc6IG9wdGlvbnNbJ2tpbmQnXSxcclxuICAgICAgICAgICAgJ3BsYXllcic6IHBsYXllcixcclxuICAgICAgICAgICAgJ2xhYmVsJzogJ09mZicsXHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogZmFsc2UsXHJcbiAgICAgICAgICAgICdtb2RlJzogJ2Rpc2FibGVkJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIE1lbnVJdGVtIGlzIHNlbGVjdGFibGVcclxuICAgICAgICBvcHRpb25zWydzZWxlY3RhYmxlJ10gPSB0cnVlO1xyXG5cclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVHJhY2tzQ2hhbmdlKGV2ZW50KXtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXIoKS50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0cmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcclxuICAgICAgICAgICAgaWYgKHRyYWNrWydtb2RlJ10gPT09ICdzaG93aW5nJykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkKHNlbGVjdGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbScsIE9mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU3VidGl0bGUvT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0uanNcbiAqKi8iLCJyZXF1aXJlKCcuL0NhcHRpb25TZXR0aW5ncy5zY3NzJyk7XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IE1lbnVCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUJ1dHRvbicpO1xyXG5cclxuY2xhc3MgQ2FwdGlvblNldHRpbmdzQnV0dG9uIGV4dGVuZHMgTWVudUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtY2FwdGlvbnMtc2V0dGluZ3MtYnV0dG9uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVudSgpIHtcclxuICAgICAgICBsZXQgbWVudSA9IG5ldyBDb21wb25lbnQodGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgIGVsOiB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tZW51JyxcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiAtMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZW51LmZvY3VzID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5cclxuICAgICAgICBsZXQgbWVudVRpdGxlQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgZWw6IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLW1lbnUtaGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGhpcy5jb250cm9sVGV4dF8sXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRDaGlsZChtZW51VGl0bGVDb21wb25lbnQpO1xyXG4gICAgICAgIG1lbnUuYWRkQ2hpbGQobmV3IENhcHRpb25TZXR0aW5ncyh0aGlzLnBsYXllcl8pKTtcclxuXHJcbiAgICAgICAgbWVudS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uU2V0dGluZ3NCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5ncyc7XHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblNldHRpbmdzQnV0dG9uJywgQ2FwdGlvblNldHRpbmdzQnV0dG9uKTtcclxuXHJcbmNsYXNzIENhcHRpb25TZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2FtcC1ub24tY2xpY2thYmxlLWVsZW1lbnQnKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLnRleHRUcmFja1NldHRpbmdzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlc3NlZCA9IChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJnVHJhbnNwYXJlbmN5VG9nZ2xlKCFwcmVzc2VkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRPcGFjaXR5JzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb250UGVyY2VudCc6ICcwLjc1JyxcclxuICAgICAgICAgICAgICAgICAgICAndGV4dENvbG9yVmFsdWUnOiAnd2hpdGVCbGFjaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dENvbG9yQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0Q29sb3JUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgZGVmYXVsdHNcclxuICAgICAgICAgICAgc2V0RGVmYXVsdHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNfLnBlcnNpc3RUZXh0VHJhY2tTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kKGAuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtZm9udC1zaXplLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZURpc3BsYXkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCgnLmFtcC1mb250LWNvbG9yLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZXh0Q29sb3JDaGFuZ2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0RGVmYXVsdHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udHJvbHMgPSB0aGlzLiQkKCcuYW1wLWNhcHRpb24tc2V0dGluZy1jb250YWluZXIgLm91dGxpbmUtZW5hYmxlZC1jb250cm9sJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuY2xpZW50WCAhPT0gMCAmJiBldmVudC5jbGllbnRZICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNsYXNzKCdvdXRsaW5lLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLWNhcHRpb24tc2V0dGluZ3MtbWVudScsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogY2FwdGlvbk9wdGlvbnNNZW51VGVtcGxhdGUuY2FsbCh0aGlzKSxcclxuICAgICAgICAgICAgdGFiSW5kZXg6IC0xXHJcbiAgICAgICAgfSwge30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEaXNwbGF5KCkge1xyXG4gICAgICAgIGxldCB0dERpc3BsYXkgPSB0aGlzLnBsYXllcl8uZ2V0Q2hpbGQoJ3RleHRUcmFja0Rpc3BsYXknKTtcclxuICAgICAgICBpZiAodHREaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIHR0RGlzcGxheS51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlcygpIHtcclxuICAgICAgICAvL2NvbnN0IGZvbnRGYW1pbHkgPSBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKHRoaXMuJCgnLnZqcy1mb250LWZhbWlseSBzZWxlY3QnKSk7XHJcbiAgICAgICAgY29uc3QgZm9udFBlcmNlbnQgPSB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250U2l6ZVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yVmFsdWUgPSB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250Q29sb3JcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBmZ0NvbG9yO1xyXG4gICAgICAgIGxldCBiZ0NvbG9yO1xyXG4gICAgICAgIHN3aXRjaCAodGV4dENvbG9yVmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tXaGl0ZSc6XHJcbiAgICAgICAgICAgICAgICBmZ0NvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGFja0xpZ2h0R3JheSc6XHJcbiAgICAgICAgICAgICAgICBmZ0NvbG9yID0gJyMzMDI5MjYnO1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvciA9ICcjZGRkYmQzJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3aGl0ZUdyYXknOlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjZGRkYmQzJztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnIzMwMjkyNic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2hpdGVCbGFjayc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBmZ0NvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvciA9ICcjMDAwMDAwJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmdUcmFuc3BhcmVuY3kgPSB0aGlzLiQoJy5hbXAtY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3knKS5nZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcpO1xyXG4gICAgICAgIGNvbnN0IGJnT3BhY2l0eSA9IGJnVHJhbnNwYXJlbmN5ID09PSAndHJ1ZScgPyAnMCcgOiAnMSc7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kT3BhY2l0eSc6IGJnT3BhY2l0eSxcclxuICAgICAgICAgICAgLy8nZm9udEZhbWlseSc6IGZvbnRGYW1pbHksXHJcbiAgICAgICAgICAgICdjb2xvcic6IGZnQ29sb3IsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBiZ0NvbG9yLFxyXG4gICAgICAgICAgICAnZm9udFBlcmNlbnQnOiBmb250UGVyY2VudCxcclxuICAgICAgICAgICAgJ3RleHRDb2xvclZhbHVlJzogdGV4dENvbG9yVmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0gPT09ICcnIHx8IHJlc3VsdFtuYW1lXSA9PT0gJ25vbmUnIHx8IChuYW1lID09PSAnZm9udFBlcmNlbnQnICYmIHJlc3VsdFtuYW1lXSA9PT0gMS4wMCkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZXModmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdW3ZhbHVlPVwiJyArIHZhbHVlcy50ZXh0Q29sb3JWYWx1ZSArICdcIl0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHRDb2xvclRleHQoKTtcclxuICAgICAgICB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250U2l6ZVwiXVt2YWx1ZT1cIicgKyB2YWx1ZXMuZm9udFBlcmNlbnQgKyAnXCJdJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZSh2YWx1ZXMuYmdPcGFjaXR5ID09PSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZShpc1ByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLiQoYC5hbXAtY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3lgKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIiwgaXNQcmVzc2VkKTtcclxuICAgICAgICB0aGlzLiQoJy5hbXAtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgLnRvZ2dsZS12YWx1ZScpLmlubmVySFRNTCA9IGlzUHJlc3NlZCA/IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiT25cIikpIDogdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRleHRDb2xvclRleHQoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yVmFsdWUgPSB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250Q29sb3JcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yVGV4dCA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodGV4dENvbG9yVmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tXaGl0ZSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHN0YW5kYXJkJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrTGlnaHRHcmF5JzpcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JUZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1NlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlR3JheSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHNlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlQmxhY2snOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnU3RhbmRhcmQnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1jb2xvci1zZWxlY3RlZC10ZXh0JykuaW5uZXJUZXh0ID0gdGhpcy5sb2NhbGl6ZShzZWxlY3RlZENvbG9yVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zXy5wZXJzaXN0VGV4dFRyYWNrU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2anMtdGV4dC10cmFjay1vcHRpb25zJywgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTZXR0aW5ncygpIHtcclxuICAgICAgICBsZXQgZXJyLCB2YWx1ZXM7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFtlcnIsIHZhbHVlc10gPSBzYWZlUGFyc2VUdXBsZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXB0aW9uT3B0aW9uc01lbnVUZW1wbGF0ZSgpIHtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nYW1wLWNhcHRpb24tc2V0dGluZy1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiVGV4dCBzaXplOiBcIikpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uLWdyb3VwIGFtcC1mb250LXNpemUtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1zaXplJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRTaXplJyB2YWx1ZT0nMC43NScgY2xhc3M9J291dGxpbmUtZW5hYmxlZC1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJTbWFsbFwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzEuMDAnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIk1lZGl1bVwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtc2l6ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzEuNTAnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIkxhcmdlXCIpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiVGV4dCBjb2xvcjogXCIpKX1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0nYW1wLWNhcHRpb24tY29sb3Itc2VsZWN0ZWQtdGV4dCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbi1ncm91cCBhbXAtZm9udC1jb2xvci1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J3doaXRlQmxhY2snIGNsYXNzID0nYW1wLWZvbnQtY29sb3Itd2hpdGVCbGFjayBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1jb2xvcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250Q29sb3InIHZhbHVlPSd3aGl0ZUdyYXknIGNsYXNzID0nYW1wLWZvbnQtY29sb3Itd2hpdGVHcmF5IG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J2JsYWNrTGlnaHRHcmF5JyBjbGFzcyA9J2FtcC1mb250LWNvbG9yLWJsYWNrTGlnaHRHcmF5IG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J2JsYWNrV2hpdGUnIGNsYXNzID0nYW1wLWZvbnQtY29sb3ItYmxhY2tXaGl0ZSBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FtcC10b2dnbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCIgY2xhc3M9J2FtcC1jYXB0aW9ucy1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeSBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCc+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSd0b2dnbGUtdmFsdWUnPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLXJlc2V0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCBhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCIpKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TZXR0aW5ncy9DYXB0aW9uU2V0dGluZ3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg3NFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgVGV4dFRyYWNrQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1RleHRUcmFja0J1dHRvbicpO1xyXG5jb25zdCBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbScpO1xyXG5jb25zdCBUZXh0VHJhY2tNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdUZXh0VHJhY2tNZW51SXRlbScpO1xyXG5cclxuY2xhc3MgQ2FwdGlvblN1YnRpdGxlQnV0dG9uIGV4dGVuZHMgVGV4dFRyYWNrQnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMsIHJlYWR5KSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zLCByZWFkeSk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYHZqcy1jYXB0aW9ucy1zdWJ0aXRsZXMtYnV0dG9uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vIHdlIGFkZCBTdWJ0aXRsZXMgT2ZmIGFzIGFkZGl0aW9uYWwgaXRlbSBzbyB0aHJlc2hvbGQgaXMgMS4gXHJcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVUaXRsZUNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgIGVsOiB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FtcC1tZW51LWhlYWRlcicsXHJcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMuY29udHJvbFRleHRfLFxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXRlbXMucHVzaChtZW51VGl0bGVDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBpdGVtcy5wdXNoKG5ldyBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSh0aGlzLnBsYXllcl8sIHsgJ2tpbmQnOiB0aGlzLmtpbmRfIH0pKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBvbmx5IGFkZCB0cmFja3MgdGhhdCBhcmUgb2YgdGhlIGFwcHJvcHJpYXRlIGtpbmQgYW5kIGhhdmUgYSBsYWJlbFxyXG4gICAgICAgICAgICBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ3N1YnRpdGxlcycgfHwgdHJhY2tbJ2tpbmQnXSA9PT0gJ2NhcHRpb25zJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrSXRlbSA9IG5ldyBUZXh0VHJhY2tNZW51SXRlbSh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNZW51SXRlbSBpcyBzZWxlY3RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdGFibGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFjayc6IHRyYWNrXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ2NhcHRpb25zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrSXRlbS5lbF8uaW5uZXJIVE1MID0gdHJhY2tJdGVtLmVsXy5pbm5lckhUTUwgKyAnICcgKyB0aGlzLmxvY2FsaXplKCdDQycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRyYWNrSXRlbS5vcHRpb25zX1snbGFiZWwnXTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja0l0ZW0ub3B0aW9uc19bJ2xhYmVsJ10gPSBsYWJlbCArIHRoaXMubG9jYWxpemUoJyBbQ0NdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJdGVtLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAgbGFiZWwgKyB0aGlzLmxvY2FsaXplKCcgW0NDXScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRyYWNrSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uU3VidGl0bGVCdXR0b24ucHJvdG90eXBlLmtpbmRfID0gJ3RleHR0cmFja3MnO1xyXG5DYXB0aW9uU3VidGl0bGVCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdDYXB0aW9ucyAvIFN1YnRpdGxlcyc7XHJcblxyXG5UZXh0VHJhY2tNZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcblxyXG4gICAgaWYgKCF0cmFja3MpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gIT09IFwic3VidGl0bGVzXCIgJiYgdHJhY2tbJ2tpbmQnXSAhPT0gXCJjYXB0aW9uc1wiICYmIHRyYWNrWydraW5kJ10gIT09ICd0ZXh0dHJhY2tzJykge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFjayA9PT0gdGhpcy50cmFjaykge1xyXG4gICAgICAgICAgICB0cmFja1snbW9kZSddID0gJ3Nob3dpbmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYWNrWydtb2RlJ10gPSAnZGlzYWJsZWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfLmNhcHRpb25Ub2dnbGUudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblN1YnRpdGxlQnV0dG9uJywgQ2FwdGlvblN1YnRpdGxlQnV0dG9uKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU3VidGl0bGUvQ2FwdGlvblN1YnRpdGxlLmpzXG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVJdGVtJyk7XHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuXHJcbmNsYXNzIE1vcmVPcHRpb25zTWVudUl0ZW0gZXh0ZW5kcyBNZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zLCBlbnRyeSwgbWVudUJ1dHRvbikge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24gPSBtZW51QnV0dG9uO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5kaWFsb2c7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IHRoaXMuc2V0dGluZ3NCdXR0b24ubWVudTtcclxuICAgICAgICB0aGlzLnBhbmVsID0gdGhpcy5kaWFsb2cuZ2V0Q2hpbGQoJ3NldHRpbmdzUGFuZWwnKTtcclxuICAgICAgICB0aGlzLnBhbmVsQ2hpbGQgPSB0aGlzLnBhbmVsLmdldENoaWxkKCdzZXR0aW5nc1BhbmVsQ2hpbGQnKTtcclxuICAgICAgICB0aGlzLnBhbmVsQ2hpbGRFbCA9IHRoaXMucGFuZWxDaGlsZC5lbF87XHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgc3RhdGUgb2Ygd2hhdCBtZW51IHR5cGUgaXMgbG9hZGluZyBuZXh0XHJcbiAgICAgICAgdGhpcy5tZW51VG9Mb2FkID0gJ21haW5tZW51JztcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViTWVudU5hbWUgPSBlbnRyeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVudHJ5LnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IFN1Yk1lbnVDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudChzdWJNZW51TmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghU3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCAke3N1Yk1lbnVOYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Yk1lbnUgPSBuZXcgU3ViTWVudUNvbXBvbmVudCh0aGlzLnBsYXllcigpLCBvcHRpb25zLCBtZW51QnV0dG9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFwcGVuZFN1Yk1lbnVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICAvLyBvdmVycmlkZSBNZW51QnV0dG9ucyBrZXlQcmVzcyBFdmVudCB0byBub3QgcHJldmVudCBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmhhbmRsZUtleVByZXNzID0gdGhpcy5vbktleVByZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51S2V5UHJlc3NIYW5kbGVyID0gdGhpcy5vblN1Yk1lbnVLZXlQcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3VibWVudUNsaWNrSGFuZGxlciA9IHRoaXMub25TdWJtZW51Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyID0gdGhpcy5vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyIHx8IGV2ZW50LndoaWNoID09PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJNZW51S2V5UHJlc3MoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LndoaWNoID09PSAxMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy9ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5vblN1Ym1lbnVDbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWVudUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtYmFjay1idXR0b24nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRNYWluTWVudSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUbyB1cGRhdGUgdGhlIHN1YiBtZW51IHZhbHVlIG9uIGNsaWNrLCBzZXRUaW1lb3V0IGlzIG5lZWRlZCBiZWNhdXNlXHJcbiAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHZhbHVlIGlzIG5vdCBpbnN0YW50XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50KTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtbWVudS1pdGVtJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kU3ViTWVudUJ1dHRvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1zdWItbWVudS10aXRsZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVWYWx1ZUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51LXZhbHVlJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1Yk1lbnUuZWxfLmFwcGVuZENoaWxkKHRoaXMuc2V0dGluZ3NTdWJNZW51VmFsdWVFbF8pO1xyXG4gICAgICAgIHRoaXMuc3ViTWVudS5yZW1vdmVDbGFzcyhcInZqcy1jb250cm9sXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViTWVudS5hZGRDbGFzcyhcInZqcy1tZW51LWl0ZW1cIik7XHJcbiAgICAgICAgdGhpcy5lbF8gPSB0aGlzLnN1Yk1lbnUuZWxfO1xyXG4gICAgICAgIHRoaXMuZWxfLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5vbihbJ3RhcCcsICdjbGljayddLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlS2V5UHJlc3MoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LndoaWNoID09IDkpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlci5oYW5kbGVLZXlQcmVzcyhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudVRvTG9hZCA9ICdzdWJtZW51JztcclxuICAgICAgICAvLyBSZW1vdmUgb3BlbiBjbGFzcyB0byBlbnN1cmUgb25seSB0aGUgb3BlbiBzdWJtZW51IGdldHMgdGhpcyBjbGFzc1xyXG4gICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcblxyXG4gICAgICAgIHN1cGVyLmhhbmRsZUNsaWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbk1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgLy8gV2V0aGVyIHRvIGFkZCBvciByZW1vdmUgdmpzLWhpZGRlbiBjbGFzcyBvbiB0aGUgc2V0dGluZ3NTdWJNZW51RWwgZWxlbWVudFxyXG4gICAgICAgIGlmICh2aWRlb2pzLmhhc0NsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBhbmltYXRpb24gbm90IHBsYXllZCB3aXRob3V0IHRpbWVvdXRcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8uc3R5bGUubWFyZ2luUmlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLnNldERpYWxvZ1NpemUodGhpcy5zaXplKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fWzBdLmVsXy5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlckNoaWxkO1xyXG4gICAgICAgIGxldCBoZWFkZXJDaGlsZEluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGJhY2tCdXR0b247XHJcbiAgICAgICAgbGV0IHN1Yk1lbnVDaGlsZHJlbiA9IHRoaXMuc3ViTWVudS5tZW51LmNoaWxkcmVuXztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yk1lbnVDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihzdWJNZW51Q2hpbGRyZW5baV0uaGFzQ2xhc3MoXCJhbXAtbWVudS1oZWFkZXJcIikpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ2hpbGQgPSBzdWJNZW51Q2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoZWFkZXJDaGlsZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViTWVudS5tZW51LnJlbW92ZUNoaWxkKGhlYWRlckNoaWxkKTsvLy5jaGlsZHJlbl8uc3BsaWNlKGhlYWRlckNoaWxkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uID0gdGhpcy5zdWJNZW51Lm1lbnUuYWRkQ2hpbGQoJ01lbnVJdGVtJywge30sIDApO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmVsXy5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtYmFjay1idXR0b24tdGV4dFwiPicgKyBoZWFkZXJDaGlsZC5lbF8uaW5uZXJIVE1MICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24gPSB0aGlzLnN1Yk1lbnUubWVudS5hZGRDaGlsZCgnTWVudUl0ZW0nLCB7fSwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24uZWxfLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj5CYWNrIHRvIG1haW4gbWVudTwvc3Bhbj4nO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmVsXy5pbm5lclRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0J1dHRvbi5uYW1lXyA9ICdCYWNrQnV0dG9uJztcclxuICAgICAgICBiYWNrQnV0dG9uLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQmFjayB0byBtYWluIG1lbnUnKTtcclxuICAgICAgICBiYWNrQnV0dG9uLmFkZENsYXNzKCd2anMtYmFjay1idXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICBQcmVmaXhlZEV2ZW50KGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrLCBhY3Rpb24gPSAnYWRkRXZlbnQnKSB7XHJcbiAgICAgICAgbGV0IHByZWZpeCA9IFsnd2Via2l0JywgJ21veicsICdNUycsICdvJywgJyddO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHByZWZpeC5sZW5ndGg7IHArKykge1xyXG4gICAgICAgICAgICBpZiAoIXByZWZpeFtwXSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2FkZEV2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHByZWZpeFtwXSArIHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAncmVtb3ZlRXZlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIocHJlZml4W3BdICsgdHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRyYW5zaXRpb25FbmQoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lICE9PSAnbWFyZ2luLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZW51VG9Mb2FkID09PSAnbWFpbm1lbnUnKSB7XHJcbiAgICAgICAgICAgIC8vIGhpZGUgc3VibWVudVxyXG4gICAgICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSB0byAwXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICB0aGlzLnNldE1hcmdpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNYWluTWVudSgpIHtcclxuICAgICAgICB0aGlzLm1lbnVUb0xvYWQgPSAnbWFpbm1lbnUnO1xyXG4gICAgICAgIHRoaXMubWFpbk1lbnUuc2hvdygpO1xyXG4gICAgICAgIHRoaXMubWFpbk1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcblxyXG4gICAgICAgIC8vIGJhY2sgYnV0dG9uIHdpbGwgYWx3YXlzIHRha2UgeW91IHRvIG1haW4gbWVudSwgc28gc2V0IGRpYWxvZyBzaXplc1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uc2V0RGlhbG9nU2l6ZShbdGhpcy5tYWluTWVudS53aWR0aCwgdGhpcy5tYWluTWVudS5oZWlnaHRdKTtcclxuXHJcbiAgICAgICAgLy8gYW5pbWF0aW9uIG5vdCB0cmlnZ2VyZWQgd2l0aG91dCB0aW1lb3V0IChzb21lIGFzeW5jIHN0dWZmID8hPylcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gYW5pdG1hdGUgbWFyZ2luIGFuZCBvcGFjaXR5IGJlZm9yZSBoaWRpbmcgdGhlIHN1Ym1lbnVcclxuICAgICAgICAgICAgLy8gdGhpcyB0cmlnZ2VycyBDU1MgVHJhbnNpdGlvbiBldmVudFxyXG4gICAgICAgICAgICB0aGlzLnNldE1hcmdpbigpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZW51LmZvY3VzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVUaXRsZUVsXy5pbm5lckhUTUwgPSB0aGlzLnN1Yk1lbnUuY29udHJvbFRleHRfIHx8IHRoaXMuc3ViTWVudS5idXR0b25UZXh0O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLmFwcGVuZENoaWxkKHRoaXMuc3ViTWVudS5tZW51LmVsXyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkRWwuYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja0J1dHRvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0gPSB0aGlzLnN1Yk1lbnU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyW3RoaXMuc3ViTWVudS5uYW1lKCldLnNldEluaXRpYWxWYWx1ZXMpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0uc2V0SW5pdGlhbFZhbHVlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdWJNZW51Lmhhc0NsYXNzKFwidmpzLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByZWZpeGVkIGV2ZW50IGxpc3RlbmVycyBmb3IgQ1NTIFRyYW5zaXRpb25FbmRcclxuICAgICAgICB0aGlzLlByZWZpeGVkRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLFxyXG4gICAgICAgICAgICAnVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgICdhZGRFdmVudCdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICogVXBkYXRlIHRoZSBzdWIgbWVudXNcclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAbWV0aG9kIHVwZGF0ZVxyXG4gICAgICAgICovXHJcbiAgICB1cGRhdGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc3ViTWVudSA9IHRoaXMuc3ViTWVudS5uYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fLmZvckVhY2goKHN1Yk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKHN1Yk1lbnVJdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViTWVudUl0ZW0uaGFzQ2xhc3MoJ3Zqcy1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfLmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoc3ViTWVudUl0ZW0ub3B0aW9uc18ubGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zqcy1iYWNrLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ2xpY2tFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW4oKS5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSB8fCBpdGVtLmhhc0NsYXNzKCdhbXAtbm9uLWNsaWNrYWJsZS1lbGVtZW50JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLm9uKFsndGFwJywgJ2NsaWNrJ10sIHRoaXMuc3VibWVudUNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGl0ZW0ub24oJ2tleWRvd24nLCB0aGlzLnN1Yk1lbnVLZXlQcmVzc0hhbmRsZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2F2ZSBzaXplIG9mIHN1Ym1lbnVzIG9uIGZpcnN0IGluaXRcclxuICAgIC8vIGlmIG51bWJlciBvZiBzdWJtZW51IGl0ZW1zIGNoYW5nZSBkaW5hbWljYWxseSBtb3JlIGxvZ2ljIHdpbGwgYmUgbmVlZGVkXHJcbiAgICBnZXRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnJlbW92ZUNsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5nZXRDb21wb25lbnRTaXplKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfKTtcclxuICAgICAgICB0aGlzLnNldE1hcmdpbigpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmFkZENsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXJnaW4oKSB7XHJcbiAgICAgICAgbGV0IFt3aWR0aF0gPSB0aGlzLnNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm1hcmdpblJpZ2h0ID0gYC0ke3dpZHRofXB4YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAqIEhpZGUgdGhlIHN1YiBtZW51XHJcbiAgICAgICAgKi9cclxuICAgIGhpZGVTdWJNZW51KCkge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nIHNldHRpbmdzIGl0ZW0gdGhpcy5lbF8gPT09IG51bGxcclxuICAgICAgICBpZiAoIXRoaXMuZWxfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2aWRlb2pzLmhhc0NsYXNzKHRoaXMuZWxfLCAnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuTW9yZU9wdGlvbnNNZW51SXRlbS5wcm90b3R5cGUuY29udGVudEVsVHlwZSA9ICdidXR0b24nO1xyXG5cclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTW9yZU9wdGlvbnNNZW51SXRlbScsIE1vcmVPcHRpb25zTWVudUl0ZW0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMuc2Nzc1wiKTtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuY29uc3QgTWVudSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51Jyk7XHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgTW9yZU9wdGlvbnNNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb3JlT3B0aW9uc01lbnVJdGVtJyk7XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc0J1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50ID0gcGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRoaXMuYWRkQ2hpbGQoJ21vcmVPcHRpb25zRGlhbG9nJyk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dFbCA9IHRoaXMuZGlhbG9nLmVsXztcclxuICAgICAgICB0aGlzLm1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSB0aGlzLmRpYWxvZy5hZGRDaGlsZCgnc2V0dGluZ3NQYW5lbCcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZCA9IHRoaXMucGFuZWwuYWRkQ2hpbGQoJ3NldHRpbmdzUGFuZWxDaGlsZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtc2V0dGluZ3MnKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsaXplKCdTZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgaGFuZGxlcnNcclxuICAgICAgICB0aGlzLmFkZFNldHRpbmdzSXRlbUhhbmRsZXIgPSB0aGlzLm9uQWRkU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlU2V0dGluZ3NJdGVtSGFuZGxlciA9IHRoaXMub25EaXNwb3NlU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDbGlja0hhbmRsZXIgPSB0aGlzLm9uUGxheWVyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIgPSB0aGlzLm9uVXNlckluYWN0aXZlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3JlT3B0aW9uc0J1dHRvbiA9IHRoaXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJDbGljayhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nLmhhc0NsYXNzKCd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzcG9zZVNldHRpbmdzSXRlbShldmVudCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5tZW51LmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnJlbW92ZUNoaWxkKGNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tZW51LmdldENoaWxkKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnNfLmVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRTZXR0aW5nc0l0ZW0oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBsZXQgW2VudHJ5LCBvcHRpb25zXSA9IGRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTWVudUl0ZW0oZW50cnksIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJJbmFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQ29tcG9uZW50LnBhdXNlZCgpICYmICF0aGlzLmRpYWxvZy5oYXNDbGFzcygndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCdjbGljaycsIHRoaXMucGxheWVyQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignYWRkc2V0dGluZ3NpdGVtJywgdGhpcy5hZGRTZXR0aW5nc0l0ZW1IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignZGlzcG9zZXNldHRpbmdzaXRlbScsIHRoaXMuZGlzcG9zZVNldHRpbmdzSXRlbUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCd1c2VyaW5hY3RpdmUnLCB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtbW9yZS1vcHRpb25zLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICAgICAgLy90aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWFsb2cuaGFzQ2xhc3MoJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC53aGljaCA9PT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5oYW5kbGVLZXlQcmVzcyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtbm8tdG9vbHRpcCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZF8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1uby10b29sdGlwJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkXyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXNzQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucHJlc3NCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzSnVzdEJlZW5DbGlja2VkKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRTaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBudWxsO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDb3VsZCBiZSBjb21wb25lbnQgb3IganVzdCBET00gZWxlbWVudFxyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5lbF8ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZWxfLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIGtlZXAgd2lkdGgvaGVpZ2h0IGFzIHByb3BlcnRpZXMgZm9yIGRpcmVjdCB1c2VcclxuICAgICAgICAgICAgZWxlbWVudC53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBlbGVtZW50LmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaWFsb2dTaXplKFt3aWR0aCwgaGVpZ2h0XSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gNDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IHRoaXMucGxheWVyQ29tcG9uZW50LmVsXy5vZmZzZXRIZWlnaHQgLSBvZmZzZXQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aCArPSAxNztcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWwuZWxfLnN0eWxlLm1heEhlaWdodCAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ0VsLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRWwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICBpZihoZWlnaHQgPiAwKXtcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gdGhpcy5wbGF5ZXJDb21wb25lbnQuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZWxfO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0VsLnN0eWxlLnJpZ2h0ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgLSBcclxuICAgICAgICAgICAgICAgIChwcm9ncmVzc0Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCAtIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUocHJvZ3Jlc3NCYXIpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcy5wbGF5ZXIoKSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENsYXNzKCd2anMtbWFpbi1tZW51Jyk7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9wdGlvbnNfLmVudHJpZXM7XHJcblxyXG4gICAgICAgIGlmKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbENoaWxkLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XHJcbiAgICAgICAgICAgIGxldCBzdWJJdGVtID0gdGhpcy5hZGRNZW51SXRlbShlbnRyeSwgdGhpcy5vcHRpb25zXyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZC5hZGRDaGlsZCh0aGlzLm1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1lbnVJdGVtKGVudHJ5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3Qgb3BlblN1Yk1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5lbF8sICdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuZWxfLCAnb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gZW50cnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlbnRyeS5zbGljZSgxKTtcclxuICAgICAgICBsZXQgbW9yZU9wdGlvbnNNZW51SXRlbSA9IG5ldyBNb3JlT3B0aW9uc01lbnVJdGVtKHRoaXMucGxheWVyKCksIG9wdGlvbnMsIGVudHJ5LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENoaWxkKG1vcmVPcHRpb25zTWVudUl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGNoaWxkcmVuIHRvIGF2b2lkIHN1YiBtZW51cyBzdGFja2luZyBvbiB0b3Agb2YgZWFjaCBvdGhlclxyXG4gICAgICAgIC8vIG9yIGhhdmluZyBtdWx0aXBsZSBtZW51cyBvcGVuXHJcbiAgICAgICAgbW9yZU9wdGlvbnNNZW51SXRlbS5vbignY2xpY2snLCB2aWRlb2pzLmJpbmQodGhpcywgdGhpcy5oaWRlQ2hpbGRyZW4pKTtcclxuXHJcbiAgICAgICAgLy8gV2V0aGVyIHRvIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIHNldHRpbmdzIHN1YiBtZW51IGVsZW1lbnRcclxuICAgICAgICBtb3JlT3B0aW9uc01lbnVJdGVtLm9uKCdjbGljaycsIG9wZW5TdWJNZW51KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vcmVPcHRpb25zTWVudUl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDaGlsZHJlbigpIHtcclxuICAgICAgICB0aGlzLm1lbnUuY2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uKG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgYWxsIHRoZSBzdWIgbWVudXNcclxuICAgICAqL1xyXG4gICAgaGlkZUNoaWxkcmVuKCkge1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5oaWRlU3ViTWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXBhbmVsJyxcclxuICAgICAgICAgICAgaW5uZXJIVE1MOiAnJyxcclxuICAgICAgICAgICAgdGFiSW5kZXg6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzUGFuZWxDaGlsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3MtcGFuZWwtY2hpbGQgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9yZU9wdGlvbnNEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuaWRfO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0xhYmVsSWQgPSAnVFRzZXR0aW5nc01vcmVPcHRpb25zRGlhbG9nTGFiZWwtJyArIHVuaXF1ZUlkO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0Rlc2NyaXB0aW9uSWQgPSAnVFRNb3JlT3B0aW9uc0RpYWxvZ0Rlc2NyaXB0aW9uLScgKyB1bmlxdWVJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tb3Jlb3B0aW9ucy1kaWFsb2cgdmpzLW1vZGFsLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdyb2xlJzogJ2RpYWxvZycsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBkaWFsb2dMYWJlbElkLFxyXG4gICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGRpYWxvZ0Rlc2NyaXB0aW9uSWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk1vcmVPcHRpb25zQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnU2V0dGluZ3MnO1xyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNb3JlT3B0aW9uc0J1dHRvbicsIE1vcmVPcHRpb25zQnV0dG9uKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNb3JlT3B0aW9uc0RpYWxvZycsIE1vcmVPcHRpb25zRGlhbG9nKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc1BhbmVsJywgU2V0dGluZ3NQYW5lbCk7XHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2V0dGluZ3NQYW5lbENoaWxkJywgU2V0dGluZ3NQYW5lbENoaWxkKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzXG4gKiogbW9kdWxlIGlkID0gODc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCJjb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL0NhcHRpb25Ub2dnbGUuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIENhcHRpb25Ub2dnbGUgZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ2NhcHRpb25Ub2dnbGUnO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHJhY2tMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5jYXB0aW9uVG9nZ2xlID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzW2ldWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnIHx8IHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0xpc3QucHVzaCh0cmFja3NbaV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmFja0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRoaXMudHJhY2tMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtY2FwdGlvbi10b2dnbGUgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvblByZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdHJhY2tUb1NlbGVjdFsnbW9kZSddID0gJ3Nob3dpbmcnO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrID0gdHJhY2tUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyXy5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhY2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrTGlzdFtpXVsnbW9kZSddID0gJ2Rpc2FibGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl8ubW9yZU9wdGlvbnNCdXR0b24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0cmFja1RvU2VsZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja3NbaV1bJ21vZGUnXSA9PT0gJ3Nob3dpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUcmFjayA9IHRyYWNrc1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFja1RvU2VsZWN0KHRyYWNrcykge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja1RvU2VsZWN0ID0gdHJhY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0cmFja1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRyYWNrVG9TZWxlY3QgPSB0cmFja3NbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cmFja1RvU2VsZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cmluZ3ModHJhY2ssIGNsaWNrZWQpIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycgJiYgIWNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0cmFja1sna2luZCddID09PSAnY2FwdGlvbnMnICYmIGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdDYXB0aW9ucyBvZmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0cmFja1sna2luZCddID09PSAnc3VidGl0bGVzJyAmJiAhY2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ1N1YnRpdGxlcyBvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnICYmIGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdTdWJ0aXRsZXMgb2ZmJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250cm9sVGV4dCh0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSh0ZXh0KSkpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUodGV4dCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uVG9nZ2xlLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnU3VidGl0bGVzL0NDJztcclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblRvZ2dsZScsIENhcHRpb25Ub2dnbGUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg4MFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwidmFyIE1vdXNlVGltZURpc3BsYXkgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW91c2VUaW1lRGlzcGxheScpO1xyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcblxyXG5yZXF1aXJlKCcuL01vdXNlVGltZVRvb2x0aXAuc2NzcycpO1xyXG5cclxuY2xhc3MgTW91c2VUaW1lVG9vbHRpcCBleHRlbmRzIE1vdXNlVGltZURpc3BsYXkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy50b29sdGlwU3BhbiA9IHZpZGVvanMuY3JlYXRlRWwoJ3NwYW4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FtcC10aW1lLXRvb2x0aXAtdGV4dCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwU3Bhbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG5ld1RpbWUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKG5ld1RpbWUsIHBvc2l0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwU3Bhbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTcGFuLmlubmVyVGV4dCA9IHRoaXMuZWxfLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50LXRpbWUnKTtcclxuICAgICAgICAgICAgdGhpcy50b29sdGlwU3Bhbi5pbm5lckh0bWwgPSB0aGlzLmVsXy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC10aW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vdXNlVGltZVRvb2x0aXAnLCBNb3VzZVRpbWVUb29sdGlwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvTW91c2VUaW1lVG9vbHRpcC9Nb3VzZVRpbWVUb29sdGlwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4ODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vIENoYW5naW5nIGhvdmVyIHRvIGNsaWNrcyBvbiBjb250cm9sIGJ1dHRvbnMuXHJcbnZhciBNZW51QnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVCdXR0b24nKTtcclxudmFyIE1vdXNlVGltZURpc3BsYXkgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW91c2VUaW1lRGlzcGxheScpO1xyXG5cclxuTWVudUJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvblByZXNzZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVCdXR0b24ucHJvdG90eXBlLmhhbmRsZU1vdXNlT3ZlciA9IGZ1bmN0aW9uICgpIHsgfVxyXG5NZW51QnV0dG9uLnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkgeyB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9hbXBPdmVycmlkZXMuanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZSgnLi9TdHJlYW1Ta2luUGx1Z2luLnNjc3MnKTtcclxuXHJcbmFtcC5TdHJlYW1Ta2luUGx1Z2luID0gYW1wLmV4dGVuZChhbXAuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKSwge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICAgICBwbGF5ZXIub3B0aW9uc18gPSBwbGF5ZXIub3B0aW9uc18gfHwge307XHJcbiAgICAgICAgcGxheWVyLm9wdGlvbnNfW1wiaW5hY3Rpdml0eVRpbWVvdXRcIl0gPSA2MDAwO1xyXG5cclxuICAgICAgICB2YXIgbG9nbyA9IHBsYXllci5vcHRpb25zXy5sb2dvLFxyXG4gICAgICAgICAgICBlbmFibGVkID0gISFsb2dvICYmIGxvZ28uZW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gbG9nby5lbmFibGVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgb3BhY2l0eSA9ICEhbG9nbyAmJiAhIWxvZ28ub3BhY2l0eSA/IGxvZ28ub3BhY2l0eSA6IDAuNSxcclxuICAgICAgICAgICAgdGFyZ2V0VXJsID0gISFsb2dvICYmICEhbG9nby50YXJnZXRVcmwgPyBsb2dvLnRhcmdldFVybCA6IG51bGwsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9ICEhbG9nbyAmJiAhIWxvZ28uaG9yaXpvbnRhbFBvc2l0aW9uID8gbG9nby5ob3Jpem9udGFsUG9zaXRpb24gOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb24gPSAhIWxvZ28gJiYgISFsb2dvLnZlcnRpY2FsUG9zaXRpb24gPyBsb2dvLnZlcnRpY2FsUG9zaXRpb24gOiAndG9wJztcclxuXHJcbiAgICAgICAgLy8gQWRkIHNraW4gcGx1Z2luc1xyXG4gICAgICAgIHZhciBza2luUGx1Z2lucyA9IHtcclxuICAgICAgICAgICAgY29udGVudFRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcGxheWVyLm9wdGlvbnNfLnRpdGxlIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHBsYXllci5vcHRpb25zXy5kZXNjcmlwdGlvbiB8fCAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgICAgICAgICAgICAgIHRhcmdldFVybDogdGFyZ2V0VXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgIHNpemVDbGFzc2VzOiBwbGF5ZXIub3B0aW9uc18uc2l6ZUNsYXNzZXMgfHwge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gVG9Ebzogd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhlIG1lbnUgdGl0bGVzXHJcbiAgICAgICAgICAgIGxpdmU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xUZXh0OiAnTElWRSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2VkQ2FwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbWVudVRpdGxlOiAnQ2xvc2VkIENhcHRpb25pbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IHtcclxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZTogJ1F1YWxpdHknLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYXliYWNrU3BlZWQ6IHBsYXllci5vcHRpb25zXy5wbGF5YmFja1NwZWVkIHx8IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZExldmVsczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzIuMHgnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzEuMjV4JywgdmFsdWU6IDEuMjUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjV4JywgdmFsdWU6IDEuNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzEuNzV4JywgdmFsdWU6IDEuNzUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjB4JywgdmFsdWU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcwLjV4JywgdmFsdWU6IDAuNSB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbXBWb2x1bWVNZW51QnV0dG9uOiB7IHZlcnRpY2FsOiBmYWxzZSB9LFxyXG5cclxuICAgICAgICAgICAgY29udHJvbEJhckljb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0SWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAncGxheVRvZ2dsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FtcFZvbHVtZU1lbnVCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaXZlSW5kaWNhdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3VycmVudFRpbWVEaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZURpdmlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbkRpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1haW5pbmdUaW1lRGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWlkZGxlSWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRJY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdjYXB0aW9uVG9nZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbW9yZU9wdGlvbnNCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuVG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZU90aGVySWNvbnM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU9uTWVudUl0ZW1zOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSXQncyB0b28gbGF0ZSB0byBtZXJnZSBwbHVnaW4gb3B0aW9ucyB0byBwbGF5ZXIgb3B0aW9ucyxcclxuICAgICAgICAvLyBleHBsaWNpdGx5IHN0YXJ0IGVhY2ggcGx1Z2luIGluc3RlYWRcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhza2luUGx1Z2lucykuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyW3BsdWdpbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJbcGx1Z2luTmFtZV0oc2tpblBsdWdpbnNbcGx1Z2luTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtSWNvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lLmluZGV4T2YoJ2FtcC1jb250cm9sYmFyaWNvbnMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViQ29udHJvbGJhciA9IGNvbnRyb2xCYXJDaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250cm9scyA9IHN1YkNvbnRyb2xiYXIuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb250cm9scy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gY2hpbGRDb250cm9sc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLm9uKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyT3RoZXJNZW51cyhjaGlsZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oXCJsb2FkZWRkYXRhXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyLmNhcHRpb25Ub2dnbGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQodmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLWNvbnRyb2xzLWJhY2tncm91bmQnLFxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlkZUNvbnRyb2xzQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChoaWRlQmcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kQ29udHJvbCA9IHRoaXMuJCgnLmFtcC1jb250cm9scy1iYWNrZ3JvdW5kJylcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlQmcgJiYgYmFja2dyb3VuZENvbnRyb2wuY2xhc3NOYW1lLmluZGV4T2YoJ2FtcC1jb250cm9scy1iYWNrZ3JvdW5kLWhpZGUnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29udHJvbC5jbGFzc0xpc3QuYWRkKCdhbXAtY29udHJvbHMtYmFja2dyb3VuZC1oaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiQoJy5hbXAtY29udHJvbHMtYmFja2dyb3VuZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FtcC1jb250cm9scy1iYWNrZ3JvdW5kLWhpZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwbGF5ZXIub24oJ3VzZXJpbmFjdGl2ZScsIGhpZGVDb250cm9sc0JhY2tncm91bmQuYmluZCh0aGlzLCB0cnVlKSk7XHJcbiAgICAgICAgICAgIHBsYXllci5vbigndXNlcmFjdGl2ZScsIGhpZGVDb250cm9sc0JhY2tncm91bmQuYmluZCh0aGlzLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGVhck90aGVyTWVudXMoY2hpbGRJdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtSWNvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lLmluZGV4T2YoJ2FtcC1jb250cm9sYmFyaWNvbnMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViQ29udHJvbGJhciA9IGNvbnRyb2xCYXJDaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250cm9scyA9IHN1YkNvbnRyb2xiYXIuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb250cm9scy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRDb250cm9sc1tqXSAhPT0gY2hpbGRJdGVtICYmIGNoaWxkQ29udHJvbHNbal0udW5wcmVzc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250cm9sc1tqXS51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIERpc3Bvc2UgbWV0aG9kLlxyXG4gKiBOb3QgZG9pbmcgYW55dGhpbmcsIGFzIHRoaXMgaXMgbm90IGFuIGFjdHVhbCBjb250cm9sLlxyXG4gKi9cclxuYW1wLlN0cmVhbVNraW5QbHVnaW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IH07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgU3RyZWFtU2tpblBsdWdpbiBjb21wb25lbnRcclxuICovXHJcbmFtcC5yZWdpc3RlckNvbXBvbmVudCgnc3RyZWFtU2tpblBsdWdpbicsIGFtcC5TdHJlYW1Ta2luUGx1Z2luKTtcclxuXHJcbmFtcC5nZXRDb21wb25lbnQoJ0NvbnRyb2xCYXInKS5wcm90b3R5cGUub3B0aW9uc18gPSB7XHJcbiAgICBsb2FkRXZlbnQ6ICdwbGF5JyxcclxuICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgJ3BsYXlUb2dnbGUnOiB7fSxcclxuICAgICAgICAnY3VycmVudFRpbWVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3RpbWVEaXZpZGVyJzoge30sXHJcbiAgICAgICAgJ2R1cmF0aW9uRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdyZW1haW5pbmdUaW1lRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdsaXZlRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdwcm9ncmVzc0NvbnRyb2wnOiB7fSxcclxuICAgICAgICAnZnVsbHNjcmVlblRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdUZXh0VHJhY2tMaXN0Jzoge30sXHJcbiAgICAgICAgJ2NhcHRpb25zQnV0dG9uJzoge30sXHJcbiAgICAgICAgJ3N0cmVhbVNraW5QbHVnaW4nOiB7fSxcclxuICAgICAgICAnY2FwdGlvblRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdtb3JlT3B0aW9uc0J1dHRvbic6IHtcclxuICAgICAgICAgICAgZW50cmllczogW1xyXG4gICAgICAgICAgICAgICAgJ3BsYXliYWNrU3BlZWRCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgJ2NhcHRpb25TdWJ0aXRsZUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAnY2FwdGlvblNldHRpbmdzQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICdxdWFsaXR5QnV0dG9uJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuXHJcbnZpZGVvanMuZ2V0Q29tcG9uZW50KCdTZWVrQmFyJykucHJvdG90eXBlLm9wdGlvbnNfID0ge1xyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgJ2xvYWRQcm9ncmVzc0JhcicsXHJcbiAgICAgICdtb3VzZVRpbWVUb29sdGlwJyxcclxuICAgICAgJ3BsYXlQcm9ncmVzc0JhcicsXHJcbiAgICAgICdzZWVrSGFuZGxlJ1xyXG4gICAgXSxcclxuICAgICdiYXJOYW1lJzogJ3BsYXlQcm9ncmVzc0JhcicsXHJcbiAgICAnaGFuZGxlTmFtZSc6ICdzZWVrSGFuZGxlJ1xyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbVNraW5QbHVnaW4vU3RyZWFtU2tpblBsdWdpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gODg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9