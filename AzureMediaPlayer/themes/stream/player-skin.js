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
	
	__webpack_require__(926);
	__webpack_require__(934);
	__webpack_require__(936);
	__webpack_require__(938);
	__webpack_require__(939);
	__webpack_require__(941);
	__webpack_require__(942);
	__webpack_require__(943);
	__webpack_require__(945);
	__webpack_require__(947);
	__webpack_require__(949);
	__webpack_require__(950);
	__webpack_require__(951);
	__webpack_require__(953);

/***/ },

/***/ 926:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 934:
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
	
	__webpack_require__(935);
	
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

/***/ 935:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 936:
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
	
	__webpack_require__(937);
	
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

/***/ 937:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 938:
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

/***/ 939:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(940);
	
	var Component = videojs.getComponent('Component');
	var MenuButton = videojs.getComponent('MenuButton');
	
	var CaptionSettingsButton = function (_MenuButton) {
	    _inherits(CaptionSettingsButton, _MenuButton);
	
	    function CaptionSettingsButton(player, options) {
	        _classCallCheck(this, CaptionSettingsButton);
	
	        var _this = _possibleConstructorReturn(this, (CaptionSettingsButton.__proto__ || Object.getPrototypeOf(CaptionSettingsButton)).call(this, player, options));
	
	        _this.buttonText = _this.htmlEncode(_this.localize('Captions / Subtitles settings'));
	
	        player.on('loadedmetadata', function () {
	            var tracks = _this.player_.textTracks();
	            if (!tracks || !tracks.length) {
	                _this.hide();
	                return;
	            }
	        });
	
	        return _this;
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
	                    innerHTML: this.htmlEncode(this.localize('Captions / Subtitles settings')),
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
	
	Component.registerComponent('CaptionSettingsButton', CaptionSettingsButton);
	
	var CaptionSettings = function (_Component) {
	    _inherits(CaptionSettings, _Component);
	
	    function CaptionSettings(player, options) {
	        _classCallCheck(this, CaptionSettings);
	
	        var _this2 = _possibleConstructorReturn(this, (CaptionSettings.__proto__ || Object.getPrototypeOf(CaptionSettings)).call(this, player, options));
	
	        _this2.addClass('amp-non-clickable-element');
	
	        player.on('loadedmetadata', function () {
	            _this2.show();
	
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
	                role: 'presentation',
	                innerHTML: captionOptionsMenuTemplate.call(this, this.id_),
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
	
	function captionOptionsMenuTemplate(uniqueId) {
	
	    var template = '\n        <div class=\'amp-caption-setting-container\'>\n            <label class =\'amp-caption-settings-label\' for="captions-text-size-' + uniqueId + '">' + this.htmlEncode(this.localize("Text size: ")) + '</label>\n            <div class =\'amp-radio-button-group amp-font-size-group\' id="captions-text-size-' + uniqueId + '" role=\'menu\'>\n                <label class =\'amp-radio-button amp-font-size\' role=\'menuitem\' aria-label=\'' + this.localize("Small") + '\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'0.75\' class=\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Small")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\' role=\'menuitem\' >\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.00\' class =\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Medium")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\' role=\'menuitem\' >\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.50\' class =\'outline-enabled-control\' />\n                    <span>' + this.htmlEncode(this.localize("Large")) + '</span>\n                </label>\n            </div>\n\n            <label class =\'amp-caption-settings-label\' for="captions-text-color-' + uniqueId + '">' + this.htmlEncode(this.localize("Text color: ")) + '\n                <span class =\'amp-caption-color-selected-text\'></span>\n            </label>\n            <div class =\'amp-radio-button-group amp-font-color-group\' id="caption-text-color-' + uniqueId + '" role=\'menu\'>\n                <label class =\'amp-radio-button amp-font-color\' role=\'menuitem\' >\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteBlack\' class =\'amp-font-color-whiteBlack outline-enabled-control\' aria-label=\'' + this.localize('Standard') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'menuitem\' >\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteGray\' class =\'amp-font-color-whiteGray outline-enabled-control\' aria-label=\'' + this.localize('Reverse sepia') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'menuitem\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackLightGray\' class =\'amp-font-color-blackLightGray outline-enabled-control\' aria-label=\'' + this.localize('Sepia') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'menuitem\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackWhite\' class =\'amp-font-color-blackWhite outline-enabled-control\' aria-label=\'' + this.localize('Reverse standard') + '\'/>\n                    <span></span>\n                </label>\n            </div>\n\n            <div class =\'amp-background-transparency amp-row-with-button\'>\n                <span class =\'amp-caption-settings-label\'>' + this.htmlEncode(this.localize("Background transparency")) + '</span>\n                <div class=\'amp-toggle\'>\n                    <button type="button" aria-pressed="false" class =\'amp-captions-background-transparency outline-enabled-control\' aria-label=\'' + this.localize("Background transparency") + '\'></button>\n                    <span class =\'toggle-value\'>' + this.htmlEncode(this.localize("Off")) + '</span>\n                </div>\n            </div>\n            <div class =\'amp-caption-settings-reset-container\'>\n                <button type=\'button\' class =\'amp-caption-settings-reset amp-caption-settings-label outline-enabled-control\'>' + this.htmlEncode(this.localize("Revert to default settings")) + '</button>\n            </div>\n        </div>\n        ';
	
	    return template;
	}

/***/ },

/***/ 940:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 941:
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
	
	        _this.buttonText = _this.htmlEncode(_this.localize('Captions / Subtitles'));
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
	
	            var tracks = this.player_.textTracks();
	            if (!tracks || !tracks.length) {
	                this.hide();
	                return;
	            }
	            this.show();
	        }
	    }, {
	        key: 'createItems',
	        value: function createItems(items) {
	            items = items || [];
	
	            var menuTitleComponent = new Component(this.player_, {
	                el: videojs.createEl('li', {
	                    className: 'amp-menu-header',
	                    innerHTML: this.htmlEncode(this.localize('Captions / Subtitles')),
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

/***/ 942:
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
	
	            if (event.which === 27) {
	                // esc clicked
	                this.settingsButton.hideDialog();
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
	
	            if (event.which === 27) {
	                // esc clicked
	                this.settingsButton.hideDialog();
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
	                backButton.el_.innerHTML = '<span class="vjs-back-button-text">' + this.htmlEncode(this.localize(headerChild.el_.innerHTML)) + "</span>";
	            } else {
	                backButton = this.subMenu.menu.addChild('MenuItem', {}, 0);
	                backButton.el_.innerHTML = '<span class="vjs-control-text">' + this.htmlEncode(this.localize("Back to main menu")) + '</span>';
	                backButton.el_.innerText = '';
	            }
	            backButton.name_ = 'BackButton';
	            backButton.el_.setAttribute('aria-label', this.localize('Back to main menu'));
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
	            this.settingsSubMenuTitleEl_.innerHTML = this.htmlEncode(this.localize(this.subMenu.controlText_ || this.subMenu.buttonText));
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
	                    _this5.subMenu.el_.removeAttribute("aria-label");
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

/***/ 943:
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
	
	__webpack_require__(944);
	
	var Menu = videojs.getComponent('Menu');
	var Component = videojs.getComponent('Component');
	var ClickableComponent = videojs.getComponent('ClickableComponent');
	var MoreOptionsMenuItem = videojs.getComponent('MoreOptionsMenuItem');
	
	var MoreOptionsButton = function (_ClickableComponent) {
	    _inherits(MoreOptionsButton, _ClickableComponent);
	
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
	        _this.el_.setAttribute('role', 'group');
	
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
	}(ClickableComponent);
	
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
	                'role': 'presentation',
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

/***/ 944:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 945:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component = videojs.getComponent('Component');
	var Button = videojs.getComponent('Button');
	
	__webpack_require__(946);
	
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

/***/ 946:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
	var Component = videojs.getComponent('Component');
	
	__webpack_require__(948);
	
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

/***/ 948:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 949:
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

/***/ 950:
/***/ function(module, exports) {

	"use strict";
	
	amp.options.languages["en"]["Background transparency"] = "Background transparency";
	amp.options.languages["en"]["Captions off"] = "Captions off";
	amp.options.languages["en"]["Captions on"] = "Captions on";
	amp.options.languages["en"]["Captions / Subtitles"] = "Captions / Subtitles";
	amp.options.languages["en"]["Captions / Subtitles settings"] = "Captions / Subtitles settings";
	amp.options.languages["en"]["Reverse sepia"] = "Reverse sepia";
	amp.options.languages["en"]["Reverse standard"] = "Reverse standard";
	amp.options.languages["en"]["Sepia"] = "Sepia";
	amp.options.languages["en"]["Standard"] = "Standard";
	amp.options.languages["en"]["Large"] = "Large";
	amp.options.languages["en"]["Medium"] = "Medium";
	amp.options.languages["en"]["Small"] = "Small";
	amp.options.languages["en"]["Full screen"] = "Full screen";
	amp.options.languages["en"]["Exit full screen"] = "Exit full screen";
	amp.options.languages["en"]["Off"] = "Off";
	amp.options.languages["en"]["Playback speed"] = "Playback speed";
	amp.options.languages["en"]["Revert to default settings"] = "Revert to default settings";
	amp.options.languages["en"]["Settings"] = "Settings";
	amp.options.languages["en"]["Subtitles on"] = "Subtitles on";
	amp.options.languages["en"]["Subtitles off"] = "Subtitles off";
	amp.options.languages["en"]["Theater mode"] = "Theater mode";
	amp.options.languages["en"]["Exit theater mode"] = "Exit theater mode";
	amp.options.languages["en"]["Video quality"] = "Video quality";
	amp.options.languages["en"]["View in Microsoft Stream"] = "View in Microsoft Stream";
	amp.options.languages["en"]["Search"] = "Search";
	amp.options.languages["en"]["Auto"] = "Auto";
	amp.options.languages["en"]["CC"] = "CC";
	amp.options.languages["en"]["On"] = "On";
	amp.options.languages["en"]["Text color: "] = "Text color: ";
	amp.options.languages["en"]["Text size: "] = "Text size: ";
	amp.options.languages["en"]["Back to main menu"] = "Back to main menu";
	amp.options.languages["ar"]["Background transparency"] = "شفافية الخلفية";
	amp.options.languages["ar"]["Captions off"] = "إيقاف تشغيل التسميات التوضيحية";
	amp.options.languages["ar"]["Captions on"] = "تشغيل التسميات التوضيحية";
	amp.options.languages["ar"]["Captions / Subtitles"] = "التسميات التوضيحية / العناوين الفرعية";
	amp.options.languages["ar"]["Captions / Subtitles settings"] = "إعدادات التسميات التوضيحية / العناوين الفرعية";
	amp.options.languages["ar"]["Reverse sepia"] = "عكس البني الداكن";
	amp.options.languages["ar"]["Reverse standard"] = "عكس القياسي";
	amp.options.languages["ar"]["Sepia"] = "البني الداكن";
	amp.options.languages["ar"]["Standard"] = "قياسي";
	amp.options.languages["ar"]["Large"] = "كبير";
	amp.options.languages["ar"]["Medium"] = "متوسط";
	amp.options.languages["ar"]["Small"] = "صغير";
	amp.options.languages["ar"]["Full screen"] = "ملء الشاشة";
	amp.options.languages["ar"]["Exit full screen"] = "إنهاء عرض ملء الشاشة";
	amp.options.languages["ar"]["Off"] = "‏‏إيقاف التشغيل";
	amp.options.languages["ar"]["Playback speed"] = "سرعة التشغيل";
	amp.options.languages["ar"]["Revert to default settings"] = "الرجوع إلى الإعدادات الافتراضية";
	amp.options.languages["ar"]["Settings"] = "إعدادات";
	amp.options.languages["ar"]["Subtitles on"] = "تشغيل العناوين الفرعية";
	amp.options.languages["ar"]["Subtitles off"] = "إيقاف تشغيل العناوين الفرعية";
	amp.options.languages["ar"]["Theater mode"] = "وضع المسرح";
	amp.options.languages["ar"]["Exit theater mode"] = "إنهاء عرض وضع المسرح";
	amp.options.languages["ar"]["Video quality"] = "جودة مقطع الفيديو";
	amp.options.languages["ar"]["View in Microsoft Stream"] = "عرض في Microsoft Stream";
	amp.options.languages["ar"]["Search"] = "بحث";
	amp.options.languages["ar"]["Auto"] = "تلقائي";
	amp.options.languages["ar"]["CC"] = "نسخة إلى";
	amp.options.languages["ar"]["On"] = "‏‏تشغيل";
	amp.options.languages["ar"]["Text color: "] = "لون النص: ";
	amp.options.languages["ar"]["Text size: "] = "حجم النص: ";
	amp.options.languages["ar"]["Back to main menu"] = "العودة إلى القائمة الرئيسية";
	amp.options.languages["bg"]["Background transparency"] = "Прозрачност на фона";
	amp.options.languages["bg"]["Captions off"] = "Надписи изключени";
	amp.options.languages["bg"]["Captions on"] = "Надписи включени";
	amp.options.languages["bg"]["Captions / Subtitles"] = "Надписи/субтитри";
	amp.options.languages["bg"]["Captions / Subtitles settings"] = "Настройки на надписи/субтитри";
	amp.options.languages["bg"]["Reverse sepia"] = "Обръщане на сепия";
	amp.options.languages["bg"]["Reverse standard"] = "Обръщане на стандартни цветове";
	amp.options.languages["bg"]["Sepia"] = "Сепия";
	amp.options.languages["bg"]["Standard"] = "Стандартно";
	amp.options.languages["bg"]["Large"] = "Голямо";
	amp.options.languages["bg"]["Medium"] = "Средно";
	amp.options.languages["bg"]["Small"] = "Малко";
	amp.options.languages["bg"]["Full screen"] = "Цял екран";
	amp.options.languages["bg"]["Exit full screen"] = "Изход от цял екран";
	amp.options.languages["bg"]["Off"] = "Изключено";
	amp.options.languages["bg"]["Playback speed"] = "Скорост на възпроизвеждане";
	amp.options.languages["bg"]["Revert to default settings"] = "Връщане до настройки по подразбиране";
	amp.options.languages["bg"]["Settings"] = "Настройки";
	amp.options.languages["bg"]["Subtitles on"] = "Субтитри включени";
	amp.options.languages["bg"]["Subtitles off"] = "Субтитри изключени";
	amp.options.languages["bg"]["Theater mode"] = "Режим „кино“";
	amp.options.languages["bg"]["Exit theater mode"] = "Изход от режим „кино“";
	amp.options.languages["bg"]["Video quality"] = "Качество на видеоклипа";
	amp.options.languages["bg"]["View in Microsoft Stream"] = "Преглед в Microsoft Stream";
	amp.options.languages["bg"]["Search"] = "Търсене";
	amp.options.languages["bg"]["Auto"] = "Автоматично";
	amp.options.languages["bg"]["CC"] = "ЯК";
	amp.options.languages["bg"]["On"] = "Вкл.";
	amp.options.languages["bg"]["Text color: "] = "Цвят на текста: ";
	amp.options.languages["bg"]["Text size: "] = "Размер на текста: ";
	amp.options.languages["bg"]["Back to main menu"] = "Назад към главното меню";
	amp.options.languages["ca"]["Background transparency"] = "Transparència del fons";
	amp.options.languages["ca"]["Captions off"] = "Subtítols desactivats";
	amp.options.languages["ca"]["Captions on"] = "Subtítols activats";
	amp.options.languages["ca"]["Captions / Subtitles"] = "Subtítols";
	amp.options.languages["ca"]["Captions / Subtitles settings"] = "Configuració dels subtítols";
	amp.options.languages["ca"]["Reverse sepia"] = "Sèpia invers";
	amp.options.languages["ca"]["Reverse standard"] = "Estàndard invers";
	amp.options.languages["ca"]["Sepia"] = "Sèpia";
	amp.options.languages["ca"]["Standard"] = "Estàndard";
	amp.options.languages["ca"]["Large"] = "Gran";
	amp.options.languages["ca"]["Medium"] = "Mitjà";
	amp.options.languages["ca"]["Small"] = "Petit";
	amp.options.languages["ca"]["Full screen"] = "Pantalla sencera";
	amp.options.languages["ca"]["Exit full screen"] = "Surt de la pantalla sencera";
	amp.options.languages["ca"]["Off"] = "Desactivat";
	amp.options.languages["ca"]["Playback speed"] = "Velocitat de reproducció";
	amp.options.languages["ca"]["Revert to default settings"] = "Torna a la configuració per defecte";
	amp.options.languages["ca"]["Settings"] = "Configuració";
	amp.options.languages["ca"]["Subtitles on"] = "Subtítols activats";
	amp.options.languages["ca"]["Subtitles off"] = "Subtítols desactivats";
	amp.options.languages["ca"]["Theater mode"] = "Mode de pantalla sencera";
	amp.options.languages["ca"]["Exit theater mode"] = "Surt del mode de pantalla sencera";
	amp.options.languages["ca"]["Video quality"] = "Qualitat de vídeo";
	amp.options.languages["ca"]["View in Microsoft Stream"] = "Visualitza-ho al Microsoft Stream";
	amp.options.languages["ca"]["Search"] = "Cerca";
	amp.options.languages["ca"]["Auto"] = "Automàtic";
	amp.options.languages["ca"]["CC"] = "A/C";
	amp.options.languages["ca"]["On"] = "Activat";
	amp.options.languages["ca"]["Text color: "] = "Color del text: ";
	amp.options.languages["ca"]["Text size: "] = "Mida del text: ";
	amp.options.languages["ca"]["Back to main menu"] = "Torna al menú principal";
	amp.options.languages["cs"]["Background transparency"] = "Průhlednost pozadí";
	amp.options.languages["cs"]["Captions off"] = "Popisky vypnuty";
	amp.options.languages["cs"]["Captions on"] = "Popisky zapnuty";
	amp.options.languages["cs"]["Captions / Subtitles"] = "Popisky nebo titulky";
	amp.options.languages["cs"]["Captions / Subtitles settings"] = "Nastavení pro popisky nebo titulky";
	amp.options.languages["cs"]["Reverse sepia"] = "Obrátit sépiový tón";
	amp.options.languages["cs"]["Reverse standard"] = "Obrátit standardní tón";
	amp.options.languages["cs"]["Sepia"] = "Sépiový tón";
	amp.options.languages["cs"]["Standard"] = "Standard";
	amp.options.languages["cs"]["Large"] = "Velký";
	amp.options.languages["cs"]["Medium"] = "Střední";
	amp.options.languages["cs"]["Small"] = "Malý";
	amp.options.languages["cs"]["Full screen"] = "Celá obrazovka";
	amp.options.languages["cs"]["Exit full screen"] = "Ukončit režim celé obrazovky";
	amp.options.languages["cs"]["Off"] = "Vypnuto";
	amp.options.languages["cs"]["Playback speed"] = "Rychlost přehrávání";
	amp.options.languages["cs"]["Revert to default settings"] = "Vrátit výchozí nastavení";
	amp.options.languages["cs"]["Settings"] = "Nastavení";
	amp.options.languages["cs"]["Subtitles on"] = "Titulky zapnuty";
	amp.options.languages["cs"]["Subtitles off"] = "Titulky vypnuty";
	amp.options.languages["cs"]["Theater mode"] = "Režim celé obrazovky";
	amp.options.languages["cs"]["Exit theater mode"] = "Ukončit režim celé obrazovky";
	amp.options.languages["cs"]["Video quality"] = "Kvalita videa";
	amp.options.languages["cs"]["View in Microsoft Stream"] = "Zobrazit ve službě Microsoft Stream";
	amp.options.languages["cs"]["Search"] = "Hledat";
	amp.options.languages["cs"]["Auto"] = "Automaticky";
	amp.options.languages["cs"]["CC"] = "Kopie";
	amp.options.languages["cs"]["On"] = "Zapnuto";
	amp.options.languages["cs"]["Text color: "] = "Barva textu: ";
	amp.options.languages["cs"]["Text size: "] = "Velikost textu: ";
	amp.options.languages["cs"]["Back to main menu"] = "Zpět na hlavní nabídku";
	amp.options.languages["da"]["Background transparency"] = "Baggrundsgennemsigtighed";
	amp.options.languages["da"]["Captions off"] = "Undertekster fra";
	amp.options.languages["da"]["Captions on"] = "Undertekster til";
	amp.options.languages["da"]["Captions / Subtitles"] = "Undertekster";
	amp.options.languages["da"]["Captions / Subtitles settings"] = "Indstillinger for undertekster";
	amp.options.languages["da"]["Reverse sepia"] = "Tilbagefør sepia";
	amp.options.languages["da"]["Reverse standard"] = "Tilbagefør til standard";
	amp.options.languages["da"]["Sepia"] = "Sepia";
	amp.options.languages["da"]["Standard"] = "Standard";
	amp.options.languages["da"]["Large"] = "Stor";
	amp.options.languages["da"]["Medium"] = "Mellem";
	amp.options.languages["da"]["Small"] = "Lille";
	amp.options.languages["da"]["Full screen"] = "Fuld skærm";
	amp.options.languages["da"]["Exit full screen"] = "Afslut fuld skærm";
	amp.options.languages["da"]["Off"] = "Fra";
	amp.options.languages["da"]["Playback speed"] = "Afspilningshastighed";
	amp.options.languages["da"]["Revert to default settings"] = "Gendan standardindstillingerne";
	amp.options.languages["da"]["Settings"] = "Indstillinger";
	amp.options.languages["da"]["Subtitles on"] = "Undertekster til";
	amp.options.languages["da"]["Subtitles off"] = "Undertekster fra";
	amp.options.languages["da"]["Theater mode"] = "Biograftilstand";
	amp.options.languages["da"]["Exit theater mode"] = "Afslut biograftilstand";
	amp.options.languages["da"]["Video quality"] = "Videokvalitet";
	amp.options.languages["da"]["View in Microsoft Stream"] = "Vis i Microsoft Stream";
	amp.options.languages["da"]["Search"] = "Søg";
	amp.options.languages["da"]["Auto"] = "Automatisk";
	amp.options.languages["da"]["CC"] = "Cc";
	amp.options.languages["da"]["On"] = "Til";
	amp.options.languages["da"]["Text color: "] = "Tekstfarve:";
	amp.options.languages["da"]["Text size: "] = "Tekststørrelse:";
	amp.options.languages["da"]["Back to main menu"] = "Tilbage til hovedmenuen";
	amp.options.languages["de"]["Background transparency"] = "Hintergrundtransparenz";
	amp.options.languages["de"]["Captions off"] = "Untertitel für Hörgeschädigte deaktivieren";
	amp.options.languages["de"]["Captions on"] = "Untertitel für Hörgeschädigte aktivieren";
	amp.options.languages["de"]["Captions / Subtitles"] = "Untertitel für Hörgeschädigte/Untertitel";
	amp.options.languages["de"]["Captions / Subtitles settings"] = "Einstellungen für Untertitel für Hörgeschädigte/Untertitel";
	amp.options.languages["de"]["Reverse sepia"] = "Invertiert Sepia";
	amp.options.languages["de"]["Reverse standard"] = "Invertiert Standard";
	amp.options.languages["de"]["Sepia"] = "Sepia";
	amp.options.languages["de"]["Standard"] = "Standard";
	amp.options.languages["de"]["Large"] = "Groß";
	amp.options.languages["de"]["Medium"] = "Mittel";
	amp.options.languages["de"]["Small"] = "Klein";
	amp.options.languages["de"]["Full screen"] = "Vollbildmodus";
	amp.options.languages["de"]["Exit full screen"] = "Vollbildschirm beenden";
	amp.options.languages["de"]["Off"] = "Aus";
	amp.options.languages["de"]["Playback speed"] = "Wiedergabegeschwindigkeit";
	amp.options.languages["de"]["Revert to default settings"] = "Standardeinstellungen wiederherstellen";
	amp.options.languages["de"]["Settings"] = "Einstellungen";
	amp.options.languages["de"]["Subtitles on"] = "Untertitel aktivieren";
	amp.options.languages["de"]["Subtitles off"] = "Untertitel deaktivieren";
	amp.options.languages["de"]["Theater mode"] = "Kinomodus";
	amp.options.languages["de"]["Exit theater mode"] = "Kinomodus beenden";
	amp.options.languages["de"]["Video quality"] = "Videoqualität";
	amp.options.languages["de"]["View in Microsoft Stream"] = "In Microsoft Stream anzeigen";
	amp.options.languages["de"]["Search"] = "Suchen";
	amp.options.languages["de"]["Auto"] = "Automatisch";
	amp.options.languages["de"]["CC"] = "Cc";
	amp.options.languages["de"]["On"] = "Ein";
	amp.options.languages["de"]["Text color: "] = "Textfarbe: ";
	amp.options.languages["de"]["Text size: "] = "Textgröße: ";
	amp.options.languages["de"]["Back to main menu"] = "Zurück zum Hauptmenü";
	amp.options.languages["el"]["Background transparency"] = "Διαφάνεια φόντου";
	amp.options.languages["el"]["Captions off"] = "Απενεργοποίηση λεζαντών";
	amp.options.languages["el"]["Captions on"] = "Ενεργοποίηση λεζαντών";
	amp.options.languages["el"]["Captions / Subtitles"] = "Λεζάντες/υπότιτλοι";
	amp.options.languages["el"]["Captions / Subtitles settings"] = "Ρυθμίσεις λεζαντών/υπότιτλων";
	amp.options.languages["el"]["Reverse sepia"] = "Σέπια με αντιστροφή";
	amp.options.languages["el"]["Reverse standard"] = "Τυπική αντιστροφή";
	amp.options.languages["el"]["Sepia"] = "Σέπια";
	amp.options.languages["el"]["Standard"] = "Τυπικό";
	amp.options.languages["el"]["Large"] = "Μεγάλο";
	amp.options.languages["el"]["Medium"] = "Μεσαία";
	amp.options.languages["el"]["Small"] = "Μικρό";
	amp.options.languages["el"]["Full screen"] = "Πλήρης οθόνη";
	amp.options.languages["el"]["Exit full screen"] = "Έξοδος από την πλήρη οθόνη";
	amp.options.languages["el"]["Off"] = "Ανενεργό";
	amp.options.languages["el"]["Playback speed"] = "Ταχύτητα αναπαραγωγής";
	amp.options.languages["el"]["Revert to default settings"] = "Επαναφορά στις προεπιλεγμένες ρυθμίσεις";
	amp.options.languages["el"]["Settings"] = "Ρυθμίσεις";
	amp.options.languages["el"]["Subtitles on"] = "Ενεργοποίηση υπότιτλων";
	amp.options.languages["el"]["Subtitles off"] = "Απενεργοποίηση υπότιτλων";
	amp.options.languages["el"]["Theater mode"] = "Λειτουργία κινηματογράφου";
	amp.options.languages["el"]["Exit theater mode"] = "Έξοδος από τη λειτουργία κινηματογράφου";
	amp.options.languages["el"]["Video quality"] = "Ποιότητα βίντεο";
	amp.options.languages["el"]["View in Microsoft Stream"] = "Προβολή στο Microsoft Stream";
	amp.options.languages["el"]["Search"] = "Αναζήτηση";
	amp.options.languages["el"]["Auto"] = "Αυτόματο";
	amp.options.languages["el"]["CC"] = "Κοιν.";
	amp.options.languages["el"]["On"] = "Ενεργό";
	amp.options.languages["el"]["Text color: "] = "Χρώμα κειμένου:";
	amp.options.languages["el"]["Text size: "] = "Μέγεθος κειμένου:";
	amp.options.languages["el"]["Back to main menu"] = "Επιστροφή στο κύριο μενού";
	amp.options.languages["es"]["Background transparency"] = "Transparencia en segundo plano";
	amp.options.languages["es"]["Captions off"] = "Desactivar títulos";
	amp.options.languages["es"]["Captions on"] = "Activar títulos";
	amp.options.languages["es"]["Captions / Subtitles"] = "Títulos/subtítulos";
	amp.options.languages["es"]["Captions / Subtitles settings"] = "Configuración de títulos/subtítulos";
	amp.options.languages["es"]["Reverse sepia"] = "Invertir sepia";
	amp.options.languages["es"]["Reverse standard"] = "Invertir estándar";
	amp.options.languages["es"]["Sepia"] = "Sepia";
	amp.options.languages["es"]["Standard"] = "Estándar";
	amp.options.languages["es"]["Large"] = "Grande";
	amp.options.languages["es"]["Medium"] = "Media";
	amp.options.languages["es"]["Small"] = "Pequeño";
	amp.options.languages["es"]["Full screen"] = "Pantalla completa";
	amp.options.languages["es"]["Exit full screen"] = "Salir de pantalla completa";
	amp.options.languages["es"]["Off"] = "Desactivado";
	amp.options.languages["es"]["Playback speed"] = "Velocidad de reproducción";
	amp.options.languages["es"]["Revert to default settings"] = "Revertir a la configuración predeterminada";
	amp.options.languages["es"]["Settings"] = "Configuración";
	amp.options.languages["es"]["Subtitles on"] = "Activar subtítulos";
	amp.options.languages["es"]["Subtitles off"] = "Desactivar subtítulos";
	amp.options.languages["es"]["Theater mode"] = "Modo de pantalla completa";
	amp.options.languages["es"]["Exit theater mode"] = "Salir del modo de pantalla completa";
	amp.options.languages["es"]["Video quality"] = "Calidad de vídeo";
	amp.options.languages["es"]["View in Microsoft Stream"] = "Ver en Microsoft Stream";
	amp.options.languages["es"]["Search"] = "Buscar";
	amp.options.languages["es"]["Auto"] = "Automático";
	amp.options.languages["es"]["CC"] = "CC";
	amp.options.languages["es"]["On"] = "Activado";
	amp.options.languages["es"]["Text color: "] = "Color del texto: ";
	amp.options.languages["es"]["Text size: "] = "Tamaño del texto: ";
	amp.options.languages["es"]["Back to main menu"] = "Volver al menú principal";
	amp.options.languages["et"]["Background transparency"] = "Tausta läbipaistvus";
	amp.options.languages["et"]["Captions off"] = "Lülita pealdised välja";
	amp.options.languages["et"]["Captions on"] = "Lülita pealdised sisse";
	amp.options.languages["et"]["Captions / Subtitles"] = "Pealdised/subtiitrid";
	amp.options.languages["et"]["Captions / Subtitles settings"] = "Pealdiste/subtiitrite sätted";
	amp.options.languages["et"]["Reverse sepia"] = "Tühista seepia";
	amp.options.languages["et"]["Reverse standard"] = "Tühista standardne";
	amp.options.languages["et"]["Sepia"] = "Seepia";
	amp.options.languages["et"]["Standard"] = "Standard";
	amp.options.languages["et"]["Large"] = "Suur";
	amp.options.languages["et"]["Medium"] = "Keskmine";
	amp.options.languages["et"]["Small"] = "Väike";
	amp.options.languages["et"]["Full screen"] = "Täisekraan";
	amp.options.languages["et"]["Exit full screen"] = "Välju täisekraanist";
	amp.options.languages["et"]["Off"] = "Väljas";
	amp.options.languages["et"]["Playback speed"] = "Taasesituse kiirus";
	amp.options.languages["et"]["Revert to default settings"] = "Ennista vaikesätted";
	amp.options.languages["et"]["Settings"] = "Sätted";
	amp.options.languages["et"]["Subtitles on"] = "Lülita subtiitrid sisse";
	amp.options.languages["et"]["Subtitles off"] = "Lülita subtiitrid välja";
	amp.options.languages["et"]["Theater mode"] = "Teatrirežiim";
	amp.options.languages["et"]["Exit theater mode"] = "Välju teatrirežiimist";
	amp.options.languages["et"]["Video quality"] = "Video kvaliteet";
	amp.options.languages["et"]["View in Microsoft Stream"] = "Kuva Microsoft Streamis";
	amp.options.languages["et"]["Search"] = "Otsing";
	amp.options.languages["et"]["Auto"] = "Automaatne";
	amp.options.languages["et"]["CC"] = "Koopia";
	amp.options.languages["et"]["On"] = "Sees";
	amp.options.languages["et"]["Text color: "] = "Teksti värv: ";
	amp.options.languages["et"]["Text size: "] = "Teksti suurus: ";
	amp.options.languages["et"]["Back to main menu"] = "Tagasi peamenüüsse";
	amp.options.languages["eu"]["Background transparency"] = "Atzeko planoaren gardentasuna";
	amp.options.languages["eu"]["Captions off"] = "Epigrafeak desaktibatuta";
	amp.options.languages["eu"]["Captions on"] = "Epigrafeak aktibatuta";
	amp.options.languages["eu"]["Captions / Subtitles"] = "Epigrafeak/Azpitituluak";
	amp.options.languages["eu"]["Captions / Subtitles settings"] = "Epigrafeen edo azpitituluen ezarpenak";
	amp.options.languages["eu"]["Reverse sepia"] = "Sepia-tonua alderantzikatua";
	amp.options.languages["eu"]["Reverse standard"] = "Estandar alderantzikatua";
	amp.options.languages["eu"]["Sepia"] = "Sepia-tonua";
	amp.options.languages["eu"]["Standard"] = "Estandarra";
	amp.options.languages["eu"]["Large"] = "Handia";
	amp.options.languages["eu"]["Medium"] = "Ertaina";
	amp.options.languages["eu"]["Small"] = "Txikia";
	amp.options.languages["eu"]["Full screen"] = "Pantaila osoa";
	amp.options.languages["eu"]["Exit full screen"] = "Irten pantaila osoko modutik";
	amp.options.languages["eu"]["Off"] = "Desaktibatuta";
	amp.options.languages["eu"]["Playback speed"] = "Erreprodukzioaren abiadura";
	amp.options.languages["eu"]["Revert to default settings"] = "Leheneratu ezarpen lehenetsiak";
	amp.options.languages["eu"]["Settings"] = "Ezarpenak";
	amp.options.languages["eu"]["Subtitles on"] = "Azpitituluak aktibatuta";
	amp.options.languages["eu"]["Subtitles off"] = "Azpitituluak desaktibatuta";
	amp.options.languages["eu"]["Theater mode"] = "Zinema modua";
	amp.options.languages["eu"]["Exit theater mode"] = "Irten zinema modutik";
	amp.options.languages["eu"]["Video quality"] = "Bideo-kalitatea";
	amp.options.languages["eu"]["View in Microsoft Stream"] = "Ikusi Microsoft Stream-en";
	amp.options.languages["eu"]["Search"] = "Bilatu";
	amp.options.languages["eu"]["Auto"] = "Automatikoa";
	amp.options.languages["eu"]["CC"] = "CC";
	amp.options.languages["eu"]["On"] = "Aktibatuta";
	amp.options.languages["eu"]["Text color: "] = "Testuaren kolorea: ";
	amp.options.languages["eu"]["Text size: "] = "Testuaren tamaina: ";
	amp.options.languages["eu"]["Back to main menu"] = "Itzuli menu nagusira";
	amp.options.languages["fi"]["Background transparency"] = "Taustan läpinäkyvyys";
	amp.options.languages["fi"]["Captions off"] = "Tekstitys ei käytössä";
	amp.options.languages["fi"]["Captions on"] = "Tekstitys käytössä";
	amp.options.languages["fi"]["Captions / Subtitles"] = "Tekstitys";
	amp.options.languages["fi"]["Captions / Subtitles settings"] = "Tekstitysasetukset";
	amp.options.languages["fi"]["Reverse sepia"] = "Käänteinen seepia";
	amp.options.languages["fi"]["Reverse standard"] = "Käänteinen vakio";
	amp.options.languages["fi"]["Sepia"] = "Seepia";
	amp.options.languages["fi"]["Standard"] = "Normaali";
	amp.options.languages["fi"]["Large"] = "Suuri";
	amp.options.languages["fi"]["Medium"] = "Normaali";
	amp.options.languages["fi"]["Small"] = "Pieni";
	amp.options.languages["fi"]["Full screen"] = "Koko näyttö";
	amp.options.languages["fi"]["Exit full screen"] = "Poistu koko näytön tilasta";
	amp.options.languages["fi"]["Off"] = "Ei käytössä";
	amp.options.languages["fi"]["Playback speed"] = "Toistonopeus";
	amp.options.languages["fi"]["Revert to default settings"] = "Palauta oletusasetukset";
	amp.options.languages["fi"]["Settings"] = "Asetukset";
	amp.options.languages["fi"]["Subtitles on"] = "Tekstitys käytössä";
	amp.options.languages["fi"]["Subtitles off"] = "Tekstitys pois käytöstä";
	amp.options.languages["fi"]["Theater mode"] = "Teatteritila";
	amp.options.languages["fi"]["Exit theater mode"] = "Poistu teatteritilasta";
	amp.options.languages["fi"]["Video quality"] = "Videon laatu";
	amp.options.languages["fi"]["View in Microsoft Stream"] = "Näytä Microsoft Streamissä";
	amp.options.languages["fi"]["Search"] = "Hae";
	amp.options.languages["fi"]["Auto"] = "Automaattinen";
	amp.options.languages["fi"]["CC"] = "Kopio";
	amp.options.languages["fi"]["On"] = "Käytössä";
	amp.options.languages["fi"]["Text color: "] = "Tekstin väri: ";
	amp.options.languages["fi"]["Text size: "] = "Tekstin koko: ";
	amp.options.languages["fi"]["Back to main menu"] = "Takaisin päävalikkoon";
	amp.options.languages["fr"]["Background transparency"] = "Transparence de l'arrière-plan";
	amp.options.languages["fr"]["Captions off"] = "Légendes désactivées";
	amp.options.languages["fr"]["Captions on"] = "Légendes activées";
	amp.options.languages["fr"]["Captions / Subtitles"] = "Légendes/sous-titres";
	amp.options.languages["fr"]["Captions / Subtitles settings"] = "Paramètres des légendes/sous-titres";
	amp.options.languages["fr"]["Reverse sepia"] = "Annuler le ton sépia";
	amp.options.languages["fr"]["Reverse standard"] = "Rétablir la couleur standard";
	amp.options.languages["fr"]["Sepia"] = "Sépia";
	amp.options.languages["fr"]["Standard"] = "Standard";
	amp.options.languages["fr"]["Large"] = "Grand";
	amp.options.languages["fr"]["Medium"] = "Moyenne";
	amp.options.languages["fr"]["Small"] = "Petite";
	amp.options.languages["fr"]["Full screen"] = "Plein écran";
	amp.options.languages["fr"]["Exit full screen"] = "Quitter le plein écran";
	amp.options.languages["fr"]["Off"] = "Désactivé";
	amp.options.languages["fr"]["Playback speed"] = "Vitesse de lecture";
	amp.options.languages["fr"]["Revert to default settings"] = "Rétablir les paramètres par défaut";
	amp.options.languages["fr"]["Settings"] = "Paramètres";
	amp.options.languages["fr"]["Subtitles on"] = "Sous-titres activés";
	amp.options.languages["fr"]["Subtitles off"] = "Sous-titres désactivés";
	amp.options.languages["fr"]["Theater mode"] = "Mode cinéma";
	amp.options.languages["fr"]["Exit theater mode"] = "Quitter le mode cinéma";
	amp.options.languages["fr"]["Video quality"] = "Qualité vidéo";
	amp.options.languages["fr"]["View in Microsoft Stream"] = "Afficher dans Microsoft Stream";
	amp.options.languages["fr"]["Search"] = "Rechercher";
	amp.options.languages["fr"]["Auto"] = "Automatique";
	amp.options.languages["fr"]["CC"] = "CC";
	amp.options.languages["fr"]["On"] = "Activé";
	amp.options.languages["fr"]["Text color: "] = "Couleur du texte : ";
	amp.options.languages["fr"]["Text size: "] = "Taille du texte : ";
	amp.options.languages["fr"]["Back to main menu"] = "Retour au menu principal";
	amp.options.languages["gl"]["Background transparency"] = "Transparencia do fondo";
	amp.options.languages["gl"]["Captions off"] = "Subtítulos desactivados";
	amp.options.languages["gl"]["Captions on"] = "Subtítulos activados";
	amp.options.languages["gl"]["Captions / Subtitles"] = "Subtítulos";
	amp.options.languages["gl"]["Captions / Subtitles settings"] = "Configuración de subtítulos";
	amp.options.languages["gl"]["Reverse sepia"] = "Inverter sepia";
	amp.options.languages["gl"]["Reverse standard"] = "Inverter estándar inverso";
	amp.options.languages["gl"]["Sepia"] = "Sepia";
	amp.options.languages["gl"]["Standard"] = "Estándar";
	amp.options.languages["gl"]["Large"] = "Grande";
	amp.options.languages["gl"]["Medium"] = "Media";
	amp.options.languages["gl"]["Small"] = "Pequeno";
	amp.options.languages["gl"]["Full screen"] = "Pantalla completa";
	amp.options.languages["gl"]["Exit full screen"] = "Saír da pantalla completa";
	amp.options.languages["gl"]["Off"] = "Desactivado";
	amp.options.languages["gl"]["Playback speed"] = "Velocidade de reprodución";
	amp.options.languages["gl"]["Revert to default settings"] = "Inverter á configuración predefinida";
	amp.options.languages["gl"]["Settings"] = "Configuración";
	amp.options.languages["gl"]["Subtitles on"] = "Subtítulos activados";
	amp.options.languages["gl"]["Subtitles off"] = "Subtítulos desactivados";
	amp.options.languages["gl"]["Theater mode"] = "Modo cine";
	amp.options.languages["gl"]["Exit theater mode"] = "Saír do modo cine";
	amp.options.languages["gl"]["Video quality"] = "Calidade de vídeo";
	amp.options.languages["gl"]["View in Microsoft Stream"] = "Ver en Microsoft Stream";
	amp.options.languages["gl"]["Search"] = "Buscar";
	amp.options.languages["gl"]["Auto"] = "Automático";
	amp.options.languages["gl"]["CC"] = "CC";
	amp.options.languages["gl"]["On"] = "On";
	amp.options.languages["gl"]["Text color: "] = "Cor do texto: ";
	amp.options.languages["gl"]["Text size: "] = "Tamaño do texto: ";
	amp.options.languages["gl"]["Back to main menu"] = "Volver ao menú principal";
	amp.options.languages["he"]["Background transparency"] = "שקיפות רקע";
	amp.options.languages["he"]["Captions off"] = "כתוביות לכבדי שמיעה כבויות";
	amp.options.languages["he"]["Captions on"] = "כתוביות לכבדי שמיעה פועלות";
	amp.options.languages["he"]["Captions / Subtitles"] = "כתוביות לכבדי שמיעה / כתוביות רגילות";
	amp.options.languages["he"]["Captions / Subtitles settings"] = "הגדרות כתוביות לכבדי שמיעה / כתוביות רגילות";
	amp.options.languages["he"]["Reverse sepia"] = "חום כהה הפוך";
	amp.options.languages["he"]["Reverse standard"] = "צבע רגיל הפוך";
	amp.options.languages["he"]["Sepia"] = "חום כהה";
	amp.options.languages["he"]["Standard"] = "רגיל";
	amp.options.languages["he"]["Large"] = "גדול";
	amp.options.languages["he"]["Medium"] = "בינוני";
	amp.options.languages["he"]["Small"] = "קטן";
	amp.options.languages["he"]["Full screen"] = "מסך מלא";
	amp.options.languages["he"]["Exit full screen"] = "צא ממסך מלא";
	amp.options.languages["he"]["Off"] = "‏‏כבוי";
	amp.options.languages["he"]["Playback speed"] = "מהירות הפעלה";
	amp.options.languages["he"]["Revert to default settings"] = "חזור להגדרות ברירת המחדל";
	amp.options.languages["he"]["Settings"] = "הגדרות";
	amp.options.languages["he"]["Subtitles on"] = "כתוביות פועלות";
	amp.options.languages["he"]["Subtitles off"] = "כתוביות כבויות";
	amp.options.languages["he"]["Theater mode"] = "מצב קולנוע";
	amp.options.languages["he"]["Exit theater mode"] = "צא ממצב קולנוע";
	amp.options.languages["he"]["Video quality"] = "איכות וידאו";
	amp.options.languages["he"]["View in Microsoft Stream"] = "הצג ב- Microsoft Stream";
	amp.options.languages["he"]["Search"] = "חפש";
	amp.options.languages["he"]["Auto"] = "אוטומטי";
	amp.options.languages["he"]["CC"] = "כתוביות מקודדות";
	amp.options.languages["he"]["On"] = "‏‏פועל";
	amp.options.languages["he"]["Text color: "] = "צבע טקסט: ";
	amp.options.languages["he"]["Text size: "] = "גודל טקסט: ";
	amp.options.languages["he"]["Back to main menu"] = "חזרה לתפריט הראשי";
	amp.options.languages["hi"]["Background transparency"] = "पृष्ठभूमि पारदर्शिता";
	amp.options.languages["hi"]["Captions off"] = "कैप्शन बंद करें";
	amp.options.languages["hi"]["Captions on"] = "कैप्शन चालू करें";
	amp.options.languages["hi"]["Captions / Subtitles"] = "कैप्शन / उपशीर्षक";
	amp.options.languages["hi"]["Captions / Subtitles settings"] = "कैप्शन / उपशीर्षक सेटिंग्स";
	amp.options.languages["hi"]["Reverse sepia"] = "रिवर्स सेपिया";
	amp.options.languages["hi"]["Reverse standard"] = "रिवर्स मानक";
	amp.options.languages["hi"]["Sepia"] = "सेपिया";
	amp.options.languages["hi"]["Standard"] = "मानक";
	amp.options.languages["hi"]["Large"] = "बड़ा";
	amp.options.languages["hi"]["Medium"] = "मध्यम";
	amp.options.languages["hi"]["Small"] = "छोटा";
	amp.options.languages["hi"]["Full screen"] = "पूर्ण स्क्रीन";
	amp.options.languages["hi"]["Exit full screen"] = "पूर्ण स्क्रीन से बाहर निकलें";
	amp.options.languages["hi"]["Off"] = "बंद";
	amp.options.languages["hi"]["Playback speed"] = "प्लेबैक स्पीड";
	amp.options.languages["hi"]["Revert to default settings"] = "डिफ़ॉल्ट सेटिंग्स की पूर्वस्थिति पर लाएँ";
	amp.options.languages["hi"]["Settings"] = "सेटिंग्स";
	amp.options.languages["hi"]["Subtitles on"] = "उपशीर्षक चालू करें";
	amp.options.languages["hi"]["Subtitles off"] = "उपशीर्षक बंद करें";
	amp.options.languages["hi"]["Theater mode"] = "थियेटर मोड";
	amp.options.languages["hi"]["Exit theater mode"] = "थियेटर मोड से बाहर निकलें";
	amp.options.languages["hi"]["Video quality"] = "वीडियो गुणवत्ता";
	amp.options.languages["hi"]["View in Microsoft Stream"] = "Microsoft Stream में देखें";
	amp.options.languages["hi"]["Search"] = "खोजें";
	amp.options.languages["hi"]["Auto"] = "स्वचालित";
	amp.options.languages["hi"]["CC"] = "प्रतिलिपि";
	amp.options.languages["hi"]["On"] = "चालू";
	amp.options.languages["hi"]["Text color: "] = "पाठ का रंग: ";
	amp.options.languages["hi"]["Text size: "] = "पाठ का आकार: ";
	amp.options.languages["hi"]["Back to main menu"] = "मुख्य मेनू पर वापस जाएँ";
	amp.options.languages["hr"]["Background transparency"] = "Prozirnost pozadine";
	amp.options.languages["hr"]["Captions off"] = "Titlovi isključeni";
	amp.options.languages["hr"]["Captions on"] = "Titlovi uključeni";
	amp.options.languages["hr"]["Captions / Subtitles"] = "TItlovi / podnaslovi";
	amp.options.languages["hr"]["Captions / Subtitles settings"] = "Postavke titlova / podnaslova";
	amp.options.languages["hr"]["Reverse sepia"] = "Obrnuta sepija";
	amp.options.languages["hr"]["Reverse standard"] = "Obrnuti standard";
	amp.options.languages["hr"]["Sepia"] = "Sepija";
	amp.options.languages["hr"]["Standard"] = "Standardno";
	amp.options.languages["hr"]["Large"] = "Veliko";
	amp.options.languages["hr"]["Medium"] = "Srednje";
	amp.options.languages["hr"]["Small"] = "Malo";
	amp.options.languages["hr"]["Full screen"] = "Cijeli zaslon";
	amp.options.languages["hr"]["Exit full screen"] = "Izlaz iz cijelog zaslona";
	amp.options.languages["hr"]["Off"] = "Isključeno";
	amp.options.languages["hr"]["Playback speed"] = "Brzina reprodukcije";
	amp.options.languages["hr"]["Revert to default settings"] = "Vraćanje na zadane postavke";
	amp.options.languages["hr"]["Settings"] = "Postavke";
	amp.options.languages["hr"]["Subtitles on"] = "Podnaslovi uključeni";
	amp.options.languages["hr"]["Subtitles off"] = "Podnaslovi isključeni";
	amp.options.languages["hr"]["Theater mode"] = "Način kino-prikaza";
	amp.options.languages["hr"]["Exit theater mode"] = "Izlaz iz načina kino-prikaza";
	amp.options.languages["hr"]["Video quality"] = "Kvaliteta videozapisa";
	amp.options.languages["hr"]["View in Microsoft Stream"] = "Prikaz u značajci Microsoft Stream";
	amp.options.languages["hr"]["Search"] = "Pretraživanje";
	amp.options.languages["hr"]["Auto"] = "Automatski";
	amp.options.languages["hr"]["CC"] = "Kopija";
	amp.options.languages["hr"]["On"] = "Uključeno";
	amp.options.languages["hr"]["Text color: "] = "Boja teksta: ";
	amp.options.languages["hr"]["Text size: "] = "Veličina teksta: ";
	amp.options.languages["hr"]["Back to main menu"] = "Natrag na glavni izbornik";
	amp.options.languages["hu"]["Background transparency"] = "Háttér áttetszősége";
	amp.options.languages["hu"]["Captions off"] = "Akadálymentes feliratok kikapcsolása";
	amp.options.languages["hu"]["Captions on"] = "Akadálymentes feliratok bekapcsolása";
	amp.options.languages["hu"]["Captions / Subtitles"] = "Akadálymentes feliratok/feliratok";
	amp.options.languages["hu"]["Captions / Subtitles settings"] = "Akadálymentes feliratok/feliratok beállításai";
	amp.options.languages["hu"]["Reverse sepia"] = "Fordított szépia";
	amp.options.languages["hu"]["Reverse standard"] = "Fordított normál";
	amp.options.languages["hu"]["Sepia"] = "Szépia";
	amp.options.languages["hu"]["Standard"] = "Normál";
	amp.options.languages["hu"]["Large"] = "Nagy";
	amp.options.languages["hu"]["Medium"] = "Közepes";
	amp.options.languages["hu"]["Small"] = "Kicsi";
	amp.options.languages["hu"]["Full screen"] = "Teljes képernyő";
	amp.options.languages["hu"]["Exit full screen"] = "Teljes képernyős mód bezárása";
	amp.options.languages["hu"]["Off"] = "Kikapcsolva";
	amp.options.languages["hu"]["Playback speed"] = "Lejátszás sebessége";
	amp.options.languages["hu"]["Revert to default settings"] = "Alapértelmezett beállítások visszaállítása";
	amp.options.languages["hu"]["Settings"] = "Beállítások";
	amp.options.languages["hu"]["Subtitles on"] = "Feliratok bekapcsolása";
	amp.options.languages["hu"]["Subtitles off"] = "Feliratok kikapcsolása";
	amp.options.languages["hu"]["Theater mode"] = "Mozi mód";
	amp.options.languages["hu"]["Exit theater mode"] = "Kilépés a mozi módból";
	amp.options.languages["hu"]["Video quality"] = "Videó minősége";
	amp.options.languages["hu"]["View in Microsoft Stream"] = "Megtekintés a Microsoft Streamben";
	amp.options.languages["hu"]["Search"] = "Keresés";
	amp.options.languages["hu"]["Auto"] = "Automatikus";
	amp.options.languages["hu"]["CC"] = "Másolatot kap";
	amp.options.languages["hu"]["On"] = "Bekapcsolva";
	amp.options.languages["hu"]["Text color: "] = "Szöveg színe: ";
	amp.options.languages["hu"]["Text size: "] = "Szöveg mérete: ";
	amp.options.languages["hu"]["Back to main menu"] = "Vissza a főmenübe";
	amp.options.languages["id"]["Background transparency"] = "Transparansi latar belakang";
	amp.options.languages["id"]["Captions off"] = "Keterangan nonaktif";
	amp.options.languages["id"]["Captions on"] = "Keterangan aktif";
	amp.options.languages["id"]["Captions / Subtitles"] = "Keterangan / Subtitel";
	amp.options.languages["id"]["Captions / Subtitles settings"] = "Pengaturan Keterangan / Subtitel";
	amp.options.languages["id"]["Reverse sepia"] = "Sepia balik";
	amp.options.languages["id"]["Reverse standard"] = "Standar bali";
	amp.options.languages["id"]["Sepia"] = "Sepia";
	amp.options.languages["id"]["Standard"] = "Standar";
	amp.options.languages["id"]["Large"] = "Besar";
	amp.options.languages["id"]["Medium"] = "Medium";
	amp.options.languages["id"]["Small"] = "Kecil";
	amp.options.languages["id"]["Full screen"] = "Layar penuh";
	amp.options.languages["id"]["Exit full screen"] = "Keluar dari layar penuh";
	amp.options.languages["id"]["Off"] = "Nonaktif";
	amp.options.languages["id"]["Playback speed"] = "Kecepatan pemutaran";
	amp.options.languages["id"]["Revert to default settings"] = "Kembalikan ke pengaturan default";
	amp.options.languages["id"]["Settings"] = "Pengaturan";
	amp.options.languages["id"]["Subtitles on"] = "Subtitel aktif";
	amp.options.languages["id"]["Subtitles off"] = "Subtitel nonaktif";
	amp.options.languages["id"]["Theater mode"] = "Mode teater";
	amp.options.languages["id"]["Exit theater mode"] = "Keluar dari mode teater";
	amp.options.languages["id"]["Video quality"] = "Kualitas video";
	amp.options.languages["id"]["View in Microsoft Stream"] = "Lihat di Microsoft Stream";
	amp.options.languages["id"]["Search"] = "Cari";
	amp.options.languages["id"]["Auto"] = "Otomatis";
	amp.options.languages["id"]["CC"] = "CC";
	amp.options.languages["id"]["On"] = "Aktif";
	amp.options.languages["id"]["Text color: "] = "Warna teks: ";
	amp.options.languages["id"]["Text size: "] = "Ukuran teks: ";
	amp.options.languages["id"]["Back to main menu"] = "Kembali ke menu utama";
	amp.options.languages["it"]["Background transparency"] = "Trasparenza sfondo";
	amp.options.languages["it"]["Captions off"] = "Sottotitoli disattivati";
	amp.options.languages["it"]["Captions on"] = "Sottotitoli attivati";
	amp.options.languages["it"]["Captions / Subtitles"] = "Sottotitoli";
	amp.options.languages["it"]["Captions / Subtitles settings"] = "Impostazioni sottotitoli";
	amp.options.languages["it"]["Reverse sepia"] = "Seppia invertito";
	amp.options.languages["it"]["Reverse standard"] = "Standard invertito";
	amp.options.languages["it"]["Sepia"] = "Seppia";
	amp.options.languages["it"]["Standard"] = "Standard";
	amp.options.languages["it"]["Large"] = "Grande";
	amp.options.languages["it"]["Medium"] = "Media";
	amp.options.languages["it"]["Small"] = "Piccolo";
	amp.options.languages["it"]["Full screen"] = "Schermo intero";
	amp.options.languages["it"]["Exit full screen"] = "Chiudi la visualizzazione schermo intero";
	amp.options.languages["it"]["Off"] = "Disattivato";
	amp.options.languages["it"]["Playback speed"] = "Velocità riproduzione";
	amp.options.languages["it"]["Revert to default settings"] = "Ripristina impostazioni predefinite";
	amp.options.languages["it"]["Settings"] = "Impostazioni";
	amp.options.languages["it"]["Subtitles on"] = "Sottotitoli attivati";
	amp.options.languages["it"]["Subtitles off"] = "Sottotitoli disattivati";
	amp.options.languages["it"]["Theater mode"] = "Modalità schermo intero";
	amp.options.languages["it"]["Exit theater mode"] = "Esci dalla modalità schermo intero";
	amp.options.languages["it"]["Video quality"] = "Qualità video";
	amp.options.languages["it"]["View in Microsoft Stream"] = "Visualizza in Microsoft Stream";
	amp.options.languages["it"]["Search"] = "Cerca";
	amp.options.languages["it"]["Auto"] = "Automatico";
	amp.options.languages["it"]["CC"] = "Cc";
	amp.options.languages["it"]["On"] = "Sì";
	amp.options.languages["it"]["Text color: "] = "Colore testo: ";
	amp.options.languages["it"]["Text size: "] = "Dimensioni testo: ";
	amp.options.languages["it"]["Back to main menu"] = "Torna al menu principale";
	amp.options.languages["ja"]["Background transparency"] = "背景の透明度";
	amp.options.languages["ja"]["Captions off"] = "字幕オフ";
	amp.options.languages["ja"]["Captions on"] = "字幕オン";
	amp.options.languages["ja"]["Captions / Subtitles"] = "字幕";
	amp.options.languages["ja"]["Captions / Subtitles settings"] = "字幕の設定";
	amp.options.languages["ja"]["Reverse sepia"] = "セピアを元に戻す";
	amp.options.languages["ja"]["Reverse standard"] = "標準に戻す";
	amp.options.languages["ja"]["Sepia"] = "セピア";
	amp.options.languages["ja"]["Standard"] = "標準";
	amp.options.languages["ja"]["Large"] = "大";
	amp.options.languages["ja"]["Medium"] = "中";
	amp.options.languages["ja"]["Small"] = "小";
	amp.options.languages["ja"]["Full screen"] = "全画面表示";
	amp.options.languages["ja"]["Exit full screen"] = "全画面表示を終了";
	amp.options.languages["ja"]["Off"] = "オフ";
	amp.options.languages["ja"]["Playback speed"] = "再生速度";
	amp.options.languages["ja"]["Revert to default settings"] = "既定の設定に戻す";
	amp.options.languages["ja"]["Settings"] = "設定";
	amp.options.languages["ja"]["Subtitles on"] = "字幕オン";
	amp.options.languages["ja"]["Subtitles off"] = "字幕オフ";
	amp.options.languages["ja"]["Theater mode"] = "シアター モード";
	amp.options.languages["ja"]["Exit theater mode"] = "シアター モードの終了";
	amp.options.languages["ja"]["Video quality"] = "動画の画質";
	amp.options.languages["ja"]["View in Microsoft Stream"] = "Microsoft Stream で表示";
	amp.options.languages["ja"]["Search"] = "検索";
	amp.options.languages["ja"]["Auto"] = "自動";
	amp.options.languages["ja"]["CC"] = "CC";
	amp.options.languages["ja"]["On"] = "オン";
	amp.options.languages["ja"]["Text color: "] = "テキストの色:";
	amp.options.languages["ja"]["Text size: "] = "テキスト サイズ:";
	amp.options.languages["ja"]["Back to main menu"] = "メイン メニューに戻る";
	amp.options.languages["kk"]["Background transparency"] = "Фон мөлдірлігі";
	amp.options.languages["kk"]["Captions off"] = "Субтитрлер өшірулі";
	amp.options.languages["kk"]["Captions on"] = "Субтитрлер қосулы";
	amp.options.languages["kk"]["Captions / Subtitles"] = "Субтитрлер / Тақырыптар";
	amp.options.languages["kk"]["Captions / Subtitles settings"] = "Субтитрлер / Тақырыптар параметрлері";
	amp.options.languages["kk"]["Reverse sepia"] = "Кері сепия";
	amp.options.languages["kk"]["Reverse standard"] = "Кері стандарт";
	amp.options.languages["kk"]["Sepia"] = "Сепия";
	amp.options.languages["kk"]["Standard"] = "Стандартты";
	amp.options.languages["kk"]["Large"] = "Үлкен";
	amp.options.languages["kk"]["Medium"] = "Орташа";
	amp.options.languages["kk"]["Small"] = "Кіші";
	amp.options.languages["kk"]["Full screen"] = "Толық экран";
	amp.options.languages["kk"]["Exit full screen"] = "Толық экраннан шығу";
	amp.options.languages["kk"]["Off"] = "Өшірулі";
	amp.options.languages["kk"]["Playback speed"] = "Ойнату жылдамдығы";
	amp.options.languages["kk"]["Revert to default settings"] = "Әдепкі параметрлерді қайтару";
	amp.options.languages["kk"]["Settings"] = "Параметрлер";
	amp.options.languages["kk"]["Subtitles on"] = "Субтитрлер қосылған";
	amp.options.languages["kk"]["Subtitles off"] = "Субтитрлер өшірілген";
	amp.options.languages["kk"]["Theater mode"] = "Театр режимі";
	amp.options.languages["kk"]["Exit theater mode"] = "Театр режимінен шығу";
	amp.options.languages["kk"]["Video quality"] = "Бейне сапасы";
	amp.options.languages["kk"]["View in Microsoft Stream"] = "Microsoft Stream қызметінде көру";
	amp.options.languages["kk"]["Search"] = "Іздеу";
	amp.options.languages["kk"]["Auto"] = "Автоматты";
	amp.options.languages["kk"]["CC"] = "Көшірме";
	amp.options.languages["kk"]["On"] = "Қосу";
	amp.options.languages["kk"]["Text color: "] = "Мәтін түсі: ";
	amp.options.languages["kk"]["Text size: "] = "Мәтін өлшемі: ";
	amp.options.languages["kk"]["Back to main menu"] = "Басты мәзірге оралу";
	amp.options.languages["ko"]["Background transparency"] = "배경 투명도";
	amp.options.languages["ko"]["Captions off"] = "캡션 끔";
	amp.options.languages["ko"]["Captions on"] = "캡션 켬";
	amp.options.languages["ko"]["Captions / Subtitles"] = "캡션/자막";
	amp.options.languages["ko"]["Captions / Subtitles settings"] = "캡션/자막 설정";
	amp.options.languages["ko"]["Reverse sepia"] = "세피아 반전";
	amp.options.languages["ko"]["Reverse standard"] = "표준 반전";
	amp.options.languages["ko"]["Sepia"] = "세피아";
	amp.options.languages["ko"]["Standard"] = "표준";
	amp.options.languages["ko"]["Large"] = "크게";
	amp.options.languages["ko"]["Medium"] = "보통";
	amp.options.languages["ko"]["Small"] = "작게";
	amp.options.languages["ko"]["Full screen"] = "전체 화면";
	amp.options.languages["ko"]["Exit full screen"] = "전체 화면 끝내기";
	amp.options.languages["ko"]["Off"] = "꺼짐";
	amp.options.languages["ko"]["Playback speed"] = "재생 속도";
	amp.options.languages["ko"]["Revert to default settings"] = "기본 설정으로 되돌리기";
	amp.options.languages["ko"]["Settings"] = "설정";
	amp.options.languages["ko"]["Subtitles on"] = "자막 켬";
	amp.options.languages["ko"]["Subtitles off"] = "자막 끔";
	amp.options.languages["ko"]["Theater mode"] = "극장 모드";
	amp.options.languages["ko"]["Exit theater mode"] = "극장 모드 끝내기";
	amp.options.languages["ko"]["Video quality"] = "비디오 화질";
	amp.options.languages["ko"]["View in Microsoft Stream"] = "Microsoft Stream에서 보기";
	amp.options.languages["ko"]["Search"] = "검색";
	amp.options.languages["ko"]["Auto"] = "자동";
	amp.options.languages["ko"]["CC"] = "참조";
	amp.options.languages["ko"]["On"] = "설정";
	amp.options.languages["ko"]["Text color: "] = "텍스트 색: ";
	amp.options.languages["ko"]["Text size: "] = "텍스트 크기: ";
	amp.options.languages["ko"]["Back to main menu"] = "기본 메뉴로 돌아가기";
	amp.options.languages["lt"]["Background transparency"] = "Fono skaidrumas";
	amp.options.languages["lt"]["Captions off"] = "Išjungti vaizdo aprašus";
	amp.options.languages["lt"]["Captions on"] = "Įjungti vaizdo aprašus";
	amp.options.languages["lt"]["Captions / Subtitles"] = "Vaizdo aprašai / subtitrai";
	amp.options.languages["lt"]["Captions / Subtitles settings"] = "Vaizdo aprašų / subtitrų parametrai";
	amp.options.languages["lt"]["Reverse sepia"] = "Atšaukti sepiją";
	amp.options.languages["lt"]["Reverse standard"] = "Atšaukti standartinę";
	amp.options.languages["lt"]["Sepia"] = "Sepija";
	amp.options.languages["lt"]["Standard"] = "Standartinis";
	amp.options.languages["lt"]["Large"] = "Didelis";
	amp.options.languages["lt"]["Medium"] = "Vidutinis";
	amp.options.languages["lt"]["Small"] = "Mažas";
	amp.options.languages["lt"]["Full screen"] = "Visas ekranas";
	amp.options.languages["lt"]["Exit full screen"] = "Išjungti rodymą visame ekrane";
	amp.options.languages["lt"]["Off"] = "Išjungta";
	amp.options.languages["lt"]["Playback speed"] = "Leidimo greitis";
	amp.options.languages["lt"]["Revert to default settings"] = "Grąžinti numatytuosius parametrus";
	amp.options.languages["lt"]["Settings"] = "Parametrai";
	amp.options.languages["lt"]["Subtitles on"] = "Įjungti subtitrus";
	amp.options.languages["lt"]["Subtitles off"] = "Išjungti subtitrus";
	amp.options.languages["lt"]["Theater mode"] = "„Scenos“ režimas";
	amp.options.languages["lt"]["Exit theater mode"] = "Išeiti iš „scenos“ režimo";
	amp.options.languages["lt"]["Video quality"] = "Vaizdo kokybė";
	amp.options.languages["lt"]["View in Microsoft Stream"] = "Rodyti naudojant „Microsoft Stream“";
	amp.options.languages["lt"]["Search"] = "Ieškoti";
	amp.options.languages["lt"]["Auto"] = "Automatinis";
	amp.options.languages["lt"]["CC"] = "Kopija";
	amp.options.languages["lt"]["On"] = "Įjungta";
	amp.options.languages["lt"]["Text color: "] = "Teksto spalva: ";
	amp.options.languages["lt"]["Text size: "] = "Teksto dydis: ";
	amp.options.languages["lt"]["Back to main menu"] = "Grįžti į pagrindinį meniu";
	amp.options.languages["lv"]["Background transparency"] = "Fona caurspīdīgums";
	amp.options.languages["lv"]["Captions off"] = "Izslēgt titrus";
	amp.options.languages["lv"]["Captions on"] = "Ieslēgt titrus";
	amp.options.languages["lv"]["Captions / Subtitles"] = "Titri/subtitri";
	amp.options.languages["lv"]["Captions / Subtitles settings"] = "Titru/subtitru iestatījumi";
	amp.options.languages["lv"]["Reverse sepia"] = "Apgriezta sēpija";
	amp.options.languages["lv"]["Reverse standard"] = "Apgriezta standarta krāsa";
	amp.options.languages["lv"]["Sepia"] = "Sēpija";
	amp.options.languages["lv"]["Standard"] = "Standarta";
	amp.options.languages["lv"]["Large"] = "Liels";
	amp.options.languages["lv"]["Medium"] = "Vidējs";
	amp.options.languages["lv"]["Small"] = "Mazs";
	amp.options.languages["lv"]["Full screen"] = "Pilnekrāna režīms";
	amp.options.languages["lv"]["Exit full screen"] = "Iziet no pilnekrāna režīma";
	amp.options.languages["lv"]["Off"] = "Izslēgts";
	amp.options.languages["lv"]["Playback speed"] = "Atskaņošanas ātrums";
	amp.options.languages["lv"]["Revert to default settings"] = "Atjaunot noklusējuma iestatījumus";
	amp.options.languages["lv"]["Settings"] = "Iestatījumi";
	amp.options.languages["lv"]["Subtitles on"] = "Ieslēgt subtitrus";
	amp.options.languages["lv"]["Subtitles off"] = "Izslēgt subtitrus";
	amp.options.languages["lv"]["Theater mode"] = "Teātra režīms";
	amp.options.languages["lv"]["Exit theater mode"] = "Iziet no teātra režīma";
	amp.options.languages["lv"]["Video quality"] = "Video kvalitāte";
	amp.options.languages["lv"]["View in Microsoft Stream"] = "Skatīt pakalpojumā Microsoft Stream";
	amp.options.languages["lv"]["Search"] = "Meklēt";
	amp.options.languages["lv"]["Auto"] = "Automātiski";
	amp.options.languages["lv"]["CC"] = "Kopija";
	amp.options.languages["lv"]["On"] = "Ieslēgts";
	amp.options.languages["lv"]["Text color: "] = "Teksta krāsa: ";
	amp.options.languages["lv"]["Text size: "] = "Teksta lielums: ";
	amp.options.languages["lv"]["Back to main menu"] = "Atgriezties galvenajā izvēlnē";
	amp.options.languages["ms"]["Background transparency"] = "Kelutsinaran latar belakang";
	amp.options.languages["ms"]["Captions off"] = "Kapsyen tidak aktif";
	amp.options.languages["ms"]["Captions on"] = "Kapsyen aktif";
	amp.options.languages["ms"]["Captions / Subtitles"] = "Kapsyen / Sari kata";
	amp.options.languages["ms"]["Captions / Subtitles settings"] = "Tetapan Kapsyen / Sari kata";
	amp.options.languages["ms"]["Reverse sepia"] = "Terbalikkan sepia";
	amp.options.languages["ms"]["Reverse standard"] = "Terbalikkan standard";
	amp.options.languages["ms"]["Sepia"] = "Sepia";
	amp.options.languages["ms"]["Standard"] = "Standard";
	amp.options.languages["ms"]["Large"] = "Besar";
	amp.options.languages["ms"]["Medium"] = "Sederhana";
	amp.options.languages["ms"]["Small"] = "Kecil";
	amp.options.languages["ms"]["Full screen"] = "Skrin penuh";
	amp.options.languages["ms"]["Exit full screen"] = "Keluar skrin penuh";
	amp.options.languages["ms"]["Off"] = "Mati";
	amp.options.languages["ms"]["Playback speed"] = "Kelajuan main balik";
	amp.options.languages["ms"]["Revert to default settings"] = "Kembali kepada tetapan lalai";
	amp.options.languages["ms"]["Settings"] = "Seting";
	amp.options.languages["ms"]["Subtitles on"] = "Sari kata aktif";
	amp.options.languages["ms"]["Subtitles off"] = "Sari kata tidak aktif";
	amp.options.languages["ms"]["Theater mode"] = "Mod teater";
	amp.options.languages["ms"]["Exit theater mode"] = "Keluar mod pawagam";
	amp.options.languages["ms"]["Video quality"] = "Kualiti video";
	amp.options.languages["ms"]["View in Microsoft Stream"] = "Lihat dalam Microsoft Stream";
	amp.options.languages["ms"]["Search"] = "Cari";
	amp.options.languages["ms"]["Auto"] = "Auto";
	amp.options.languages["ms"]["CC"] = "SK";
	amp.options.languages["ms"]["On"] = "Hidup";
	amp.options.languages["ms"]["Text color: "] = "Warna teks: ";
	amp.options.languages["ms"]["Text size: "] = "Saiz teks: ";
	amp.options.languages["ms"]["Back to main menu"] = "Kembali ke menu utama";
	amp.options.languages["nb"]["Background transparency"] = "Gjennomsiktighet for bakgrunnen";
	amp.options.languages["nb"]["Captions off"] = "Teksting av";
	amp.options.languages["nb"]["Captions on"] = "Teksting på";
	amp.options.languages["nb"]["Captions / Subtitles"] = "Teksting/undertekster";
	amp.options.languages["nb"]["Captions / Subtitles settings"] = "Innstillinger for teksting/undertekster";
	amp.options.languages["nb"]["Reverse sepia"] = "Omvendt sepia";
	amp.options.languages["nb"]["Reverse standard"] = "Omvendt standard";
	amp.options.languages["nb"]["Sepia"] = "Sepia";
	amp.options.languages["nb"]["Standard"] = "Standard";
	amp.options.languages["nb"]["Large"] = "Stor";
	amp.options.languages["nb"]["Medium"] = "Middels";
	amp.options.languages["nb"]["Small"] = "Liten";
	amp.options.languages["nb"]["Full screen"] = "Full skjerm";
	amp.options.languages["nb"]["Exit full screen"] = "Avslutt fullskjerm";
	amp.options.languages["nb"]["Off"] = "Av";
	amp.options.languages["nb"]["Playback speed"] = "Avspillingshastighet";
	amp.options.languages["nb"]["Revert to default settings"] = "Gå tilbake til standardinnstillingene";
	amp.options.languages["nb"]["Settings"] = "Innstillinger";
	amp.options.languages["nb"]["Subtitles on"] = "Undertekster på";
	amp.options.languages["nb"]["Subtitles off"] = "Undertekster av";
	amp.options.languages["nb"]["Theater mode"] = "Kinomodus";
	amp.options.languages["nb"]["Exit theater mode"] = "Avslutt kinomodus";
	amp.options.languages["nb"]["Video quality"] = "Videokvalitet";
	amp.options.languages["nb"]["View in Microsoft Stream"] = "Vis i Microsoft Stream";
	amp.options.languages["nb"]["Search"] = "Søk";
	amp.options.languages["nb"]["Auto"] = "Auto";
	amp.options.languages["nb"]["CC"] = "Kopi";
	amp.options.languages["nb"]["On"] = "På";
	amp.options.languages["nb"]["Text color: "] = "Tekstfarge:";
	amp.options.languages["nb"]["Text size: "] = "Tekststørrelse:";
	amp.options.languages["nb"]["Back to main menu"] = "Back to main menu";
	amp.options.languages["nl"]["Background transparency"] = "Doorzichtigheid van achtergrond";
	amp.options.languages["nl"]["Captions off"] = "Bijschriften uitgeschakeld";
	amp.options.languages["nl"]["Captions on"] = "Bijschriften ingeschakeld";
	amp.options.languages["nl"]["Captions / Subtitles"] = "Bijschriften/ondertitels";
	amp.options.languages["nl"]["Captions / Subtitles settings"] = "Instellingen voor bijschriften/ondertitels";
	amp.options.languages["nl"]["Reverse sepia"] = "Omgekeerde sepia";
	amp.options.languages["nl"]["Reverse standard"] = "Omgekeerde standaard";
	amp.options.languages["nl"]["Sepia"] = "Sepia";
	amp.options.languages["nl"]["Standard"] = "Standard";
	amp.options.languages["nl"]["Large"] = "Groot";
	amp.options.languages["nl"]["Medium"] = "Gemiddeld";
	amp.options.languages["nl"]["Small"] = "Klein";
	amp.options.languages["nl"]["Full screen"] = "Volledig scherm";
	amp.options.languages["nl"]["Exit full screen"] = "Volledig scherm uitschakelen";
	amp.options.languages["nl"]["Off"] = "Uit";
	amp.options.languages["nl"]["Playback speed"] = "Afspeelsnelheid";
	amp.options.languages["nl"]["Revert to default settings"] = "Herstellen naar standaardinstellingen";
	amp.options.languages["nl"]["Settings"] = "Instellingen";
	amp.options.languages["nl"]["Subtitles on"] = "Ondertitels ingeschakeld";
	amp.options.languages["nl"]["Subtitles off"] = "Ondertitels uitgeschakeld";
	amp.options.languages["nl"]["Theater mode"] = "Theatermodus";
	amp.options.languages["nl"]["Exit theater mode"] = "Theatermodus afsluiten";
	amp.options.languages["nl"]["Video quality"] = "Videokwaliteit";
	amp.options.languages["nl"]["View in Microsoft Stream"] = "Weergeven in Microsoft Stream";
	amp.options.languages["nl"]["Search"] = "Zoeken";
	amp.options.languages["nl"]["Auto"] = "Automatisch";
	amp.options.languages["nl"]["CC"] = "CK";
	amp.options.languages["nl"]["On"] = "Aan";
	amp.options.languages["nl"]["Text color: "] = "Tekstkleur: ";
	amp.options.languages["nl"]["Text size: "] = "Tekengrootte: ";
	amp.options.languages["nl"]["Back to main menu"] = "Terug naar het hoofdmenu";
	amp.options.languages["pl"]["Background transparency"] = "Przezroczystość tła";
	amp.options.languages["pl"]["Captions off"] = "Podpisy wyłączone";
	amp.options.languages["pl"]["Captions on"] = "Podpisy włączone";
	amp.options.languages["pl"]["Captions / Subtitles"] = "Podpisy/napisy";
	amp.options.languages["pl"]["Captions / Subtitles settings"] = "Ustawienia podpisów/napisów";
	amp.options.languages["pl"]["Reverse sepia"] = "Odwrócona sepia";
	amp.options.languages["pl"]["Reverse standard"] = "Odwrócony standardowy";
	amp.options.languages["pl"]["Sepia"] = "Sepia";
	amp.options.languages["pl"]["Standard"] = "Standardowa";
	amp.options.languages["pl"]["Large"] = "Duży";
	amp.options.languages["pl"]["Medium"] = "Średni";
	amp.options.languages["pl"]["Small"] = "Mały";
	amp.options.languages["pl"]["Full screen"] = "Pełny ekran";
	amp.options.languages["pl"]["Exit full screen"] = "Zamknij widok pełnoekranowy";
	amp.options.languages["pl"]["Off"] = "Wyłączone";
	amp.options.languages["pl"]["Playback speed"] = "Szybkość odtwarzania";
	amp.options.languages["pl"]["Revert to default settings"] = "Przywróć ustawienia domyślne";
	amp.options.languages["pl"]["Settings"] = "Ustawienia";
	amp.options.languages["pl"]["Subtitles on"] = "Napisy włączone";
	amp.options.languages["pl"]["Subtitles off"] = "Napisy wyłączone";
	amp.options.languages["pl"]["Theater mode"] = "Tryb kinowy";
	amp.options.languages["pl"]["Exit theater mode"] = "Wyjdź z trybu kinowego";
	amp.options.languages["pl"]["Video quality"] = "Jakość wideo";
	amp.options.languages["pl"]["View in Microsoft Stream"] = "Wyświetl w usłudze Microsoft Stream";
	amp.options.languages["pl"]["Search"] = "Wyszukaj";
	amp.options.languages["pl"]["Auto"] = "Automatyczne";
	amp.options.languages["pl"]["CC"] = "BK";
	amp.options.languages["pl"]["On"] = "Włączone";
	amp.options.languages["pl"]["Text color: "] = "Kolor tekstu:";
	amp.options.languages["pl"]["Text size: "] = "Rozmiar tekstu:";
	amp.options.languages["pl"]["Back to main menu"] = "Powrót do menu głównego";
	amp.options.languages["pt-br"]["Background transparency"] = "Transparência do plano de fundo";
	amp.options.languages["pt-br"]["Captions off"] = "Legendas desativadas";
	amp.options.languages["pt-br"]["Captions on"] = "Legendas ativadas";
	amp.options.languages["pt-br"]["Captions / Subtitles"] = "Legendas";
	amp.options.languages["pt-br"]["Captions / Subtitles settings"] = "Configurações das legendas";
	amp.options.languages["pt-br"]["Reverse sepia"] = "Sépia inversa";
	amp.options.languages["pt-br"]["Reverse standard"] = "Padrão inverso";
	amp.options.languages["pt-br"]["Sepia"] = "Sépia";
	amp.options.languages["pt-br"]["Standard"] = "Standard";
	amp.options.languages["pt-br"]["Large"] = "Grande";
	amp.options.languages["pt-br"]["Medium"] = "Média";
	amp.options.languages["pt-br"]["Small"] = "Pequeno";
	amp.options.languages["pt-br"]["Full screen"] = "Tela inteira";
	amp.options.languages["pt-br"]["Exit full screen"] = "Sair de tela inteira";
	amp.options.languages["pt-br"]["Off"] = "Desativado";
	amp.options.languages["pt-br"]["Playback speed"] = "Velocidade de reprodução";
	amp.options.languages["pt-br"]["Revert to default settings"] = "Reverter para configurações padrão";
	amp.options.languages["pt-br"]["Settings"] = "Configurações";
	amp.options.languages["pt-br"]["Subtitles on"] = "Legendas ativadas";
	amp.options.languages["pt-br"]["Subtitles off"] = "Legendas desativadas";
	amp.options.languages["pt-br"]["Theater mode"] = "Modo de teatro";
	amp.options.languages["pt-br"]["Exit theater mode"] = "Sair do modo de teatro";
	amp.options.languages["pt-br"]["Video quality"] = "Qualidade de vídeo";
	amp.options.languages["pt-br"]["View in Microsoft Stream"] = "Exibir no Microsoft Stream";
	amp.options.languages["pt-br"]["Search"] = "Pesquisar";
	amp.options.languages["pt-br"]["Auto"] = "Automático";
	amp.options.languages["pt-br"]["CC"] = "CC";
	amp.options.languages["pt-br"]["On"] = "Ligar";
	amp.options.languages["pt-br"]["Text color: "] = "Cor do texto: ";
	amp.options.languages["pt-br"]["Text size: "] = "Tamanho do texto: ";
	amp.options.languages["pt-br"]["Back to main menu"] = "Voltar ao menu principal";
	amp.options.languages["pt-pt"]["Background transparency"] = "Transparência de fundo";
	amp.options.languages["pt-pt"]["Captions off"] = "Legendas desativadas";
	amp.options.languages["pt-pt"]["Captions on"] = "Legendas ativadas";
	amp.options.languages["pt-pt"]["Captions / Subtitles"] = "Legendas / Subtítulos";
	amp.options.languages["pt-pt"]["Captions / Subtitles settings"] = "Definições de Legendas / Subtítulos";
	amp.options.languages["pt-pt"]["Reverse sepia"] = "Inverter sépia";
	amp.options.languages["pt-pt"]["Reverse standard"] = "Reverter padrão";
	amp.options.languages["pt-pt"]["Sepia"] = "Sépia";
	amp.options.languages["pt-pt"]["Standard"] = "Standard";
	amp.options.languages["pt-pt"]["Large"] = "Grande";
	amp.options.languages["pt-pt"]["Medium"] = "Média";
	amp.options.languages["pt-pt"]["Small"] = "Pequeno";
	amp.options.languages["pt-pt"]["Full screen"] = "Ecrã inteiro";
	amp.options.languages["pt-pt"]["Exit full screen"] = "Sair do ecrã inteiro";
	amp.options.languages["pt-pt"]["Off"] = "Desativado";
	amp.options.languages["pt-pt"]["Playback speed"] = "Velocidade de reprodução";
	amp.options.languages["pt-pt"]["Revert to default settings"] = "Reverter para predefinições";
	amp.options.languages["pt-pt"]["Settings"] = "Definições";
	amp.options.languages["pt-pt"]["Subtitles on"] = "Subtítulos ativados";
	amp.options.languages["pt-pt"]["Subtitles off"] = "Subtítulos desativados";
	amp.options.languages["pt-pt"]["Theater mode"] = "Modo de cinema";
	amp.options.languages["pt-pt"]["Exit theater mode"] = "Sair do modo de cinema";
	amp.options.languages["pt-pt"]["Video quality"] = "Qualidade de vídeo";
	amp.options.languages["pt-pt"]["View in Microsoft Stream"] = "Vista no Microsoft Stream";
	amp.options.languages["pt-pt"]["Search"] = "Pesquisar";
	amp.options.languages["pt-pt"]["Auto"] = "Automático";
	amp.options.languages["pt-pt"]["CC"] = "CC";
	amp.options.languages["pt-pt"]["On"] = "Ativado";
	amp.options.languages["pt-pt"]["Text color: "] = "Cor do texto: ";
	amp.options.languages["pt-pt"]["Text size: "] = "Tamanho do texto: ";
	amp.options.languages["pt-pt"]["Back to main menu"] = "Volte ao menu principal";
	amp.options.languages["ro"]["Background transparency"] = "Transparență fundal";
	amp.options.languages["ro"]["Captions off"] = "Legende dezactivate";
	amp.options.languages["ro"]["Captions on"] = "Legende activate";
	amp.options.languages["ro"]["Captions / Subtitles"] = "Legende/subtitrări";
	amp.options.languages["ro"]["Captions / Subtitles settings"] = "Setări pentru legende/subtitrări";
	amp.options.languages["ro"]["Reverse sepia"] = "Sepia invers";
	amp.options.languages["ro"]["Reverse standard"] = "Standard inversat";
	amp.options.languages["ro"]["Sepia"] = "Sepia";
	amp.options.languages["ro"]["Standard"] = "Standard";
	amp.options.languages["ro"]["Large"] = "Mare";
	amp.options.languages["ro"]["Medium"] = "Mediu";
	amp.options.languages["ro"]["Small"] = "Mic";
	amp.options.languages["ro"]["Full screen"] = "Ecran complet";
	amp.options.languages["ro"]["Exit full screen"] = "Ieșiți din modul ecran complet";
	amp.options.languages["ro"]["Off"] = "Dezactivat";
	amp.options.languages["ro"]["Playback speed"] = "Viteză de redare";
	amp.options.languages["ro"]["Revert to default settings"] = "Reveniți la setările implicite";
	amp.options.languages["ro"]["Settings"] = "Setări";
	amp.options.languages["ro"]["Subtitles on"] = "Subtitrări activate";
	amp.options.languages["ro"]["Subtitles off"] = "Subtitrări dezactivate";
	amp.options.languages["ro"]["Theater mode"] = "Modul teatru";
	amp.options.languages["ro"]["Exit theater mode"] = "Ieșiți din modul teatru";
	amp.options.languages["ro"]["Video quality"] = "Calitate video";
	amp.options.languages["ro"]["View in Microsoft Stream"] = "Vedeți în Microsoft Stream";
	amp.options.languages["ro"]["Search"] = "Căutare";
	amp.options.languages["ro"]["Auto"] = "Automat";
	amp.options.languages["ro"]["CC"] = "CC";
	amp.options.languages["ro"]["On"] = "Activat";
	amp.options.languages["ro"]["Text color: "] = "Culoare text: ";
	amp.options.languages["ro"]["Text size: "] = "Dimensiune text: ";
	amp.options.languages["ro"]["Back to main menu"] = "Înapoi la meniul principal";
	amp.options.languages["ru"]["Background transparency"] = "Прозрачность фона";
	amp.options.languages["ru"]["Captions off"] = "Субтитры отключены";
	amp.options.languages["ru"]["Captions on"] = "Субтитры включены";
	amp.options.languages["ru"]["Captions / Subtitles"] = "Субтитры";
	amp.options.languages["ru"]["Captions / Subtitles settings"] = "Параметры субтитров";
	amp.options.languages["ru"]["Reverse sepia"] = "Изменить на сепию";
	amp.options.languages["ru"]["Reverse standard"] = "Изменить на стандартный цвет";
	amp.options.languages["ru"]["Sepia"] = "Сепия";
	amp.options.languages["ru"]["Standard"] = "Стандартный";
	amp.options.languages["ru"]["Large"] = "Большой";
	amp.options.languages["ru"]["Medium"] = "Средний";
	amp.options.languages["ru"]["Small"] = "Мелкий";
	amp.options.languages["ru"]["Full screen"] = "Во весь экран";
	amp.options.languages["ru"]["Exit full screen"] = "Выйти из полноэкранного режима";
	amp.options.languages["ru"]["Off"] = "Откл.";
	amp.options.languages["ru"]["Playback speed"] = "Скорость воспроизведения";
	amp.options.languages["ru"]["Revert to default settings"] = "Вернуть к параметрам по умолчанию";
	amp.options.languages["ru"]["Settings"] = "Параметры";
	amp.options.languages["ru"]["Subtitles on"] = "Субтитры включены";
	amp.options.languages["ru"]["Subtitles off"] = "Субтитры отключены";
	amp.options.languages["ru"]["Theater mode"] = "Режим театра";
	amp.options.languages["ru"]["Exit theater mode"] = "Выйти из режима театра";
	amp.options.languages["ru"]["Video quality"] = "Качество видео";
	amp.options.languages["ru"]["View in Microsoft Stream"] = "Просмотреть в Microsoft Stream";
	amp.options.languages["ru"]["Search"] = "Поиск";
	amp.options.languages["ru"]["Auto"] = "Автоматический";
	amp.options.languages["ru"]["CC"] = "CC";
	amp.options.languages["ru"]["On"] = "Включен";
	amp.options.languages["ru"]["Text color: "] = "Цвет текста: ";
	amp.options.languages["ru"]["Text size: "] = "Размер текста: ";
	amp.options.languages["ru"]["Back to main menu"] = "Возврат к основному меню";
	amp.options.languages["sk"]["Background transparency"] = "Priehľadnosť pozadia";
	amp.options.languages["sk"]["Captions off"] = "Titulky vypnuté";
	amp.options.languages["sk"]["Captions on"] = "Titulky zapnuté";
	amp.options.languages["sk"]["Captions / Subtitles"] = "Titulky";
	amp.options.languages["sk"]["Captions / Subtitles settings"] = "Nastavenia titulkov";
	amp.options.languages["sk"]["Reverse sepia"] = "Zrušiť sépiové zobrazenie";
	amp.options.languages["sk"]["Reverse standard"] = "Zrušiť štandardné zobrazenie";
	amp.options.languages["sk"]["Sepia"] = "Sépia";
	amp.options.languages["sk"]["Standard"] = "Štandardné";
	amp.options.languages["sk"]["Large"] = "Veľké";
	amp.options.languages["sk"]["Medium"] = "Stredné";
	amp.options.languages["sk"]["Small"] = "Malé";
	amp.options.languages["sk"]["Full screen"] = "Celá obrazovka";
	amp.options.languages["sk"]["Exit full screen"] = "Skončiť režim celej obrazovky";
	amp.options.languages["sk"]["Off"] = "Vypnuté";
	amp.options.languages["sk"]["Playback speed"] = "Rýchlosť prehrávania";
	amp.options.languages["sk"]["Revert to default settings"] = "Vrátiť na predvolené nastavenia";
	amp.options.languages["sk"]["Settings"] = "Nastavenia";
	amp.options.languages["sk"]["Subtitles on"] = "Titulky zapnuté";
	amp.options.languages["sk"]["Subtitles off"] = "Titulky vypnuté";
	amp.options.languages["sk"]["Theater mode"] = "Režim kina";
	amp.options.languages["sk"]["Exit theater mode"] = "Ukončiť režim kina";
	amp.options.languages["sk"]["Video quality"] = "Kvalita videa";
	amp.options.languages["sk"]["View in Microsoft Stream"] = "Zobraziť v Microsoft Streame";
	amp.options.languages["sk"]["Search"] = "Hľadať";
	amp.options.languages["sk"]["Auto"] = "Automatické";
	amp.options.languages["sk"]["CC"] = "Kópia";
	amp.options.languages["sk"]["On"] = "Zapnuté";
	amp.options.languages["sk"]["Text color: "] = "Farba textu: ";
	amp.options.languages["sk"]["Text size: "] = "Veľkosť textu: ";
	amp.options.languages["sk"]["Back to main menu"] = "Späť na hlavnú ponuku";
	amp.options.languages["sl"]["Background transparency"] = "Prosojnost ozadja";
	amp.options.languages["sl"]["Captions off"] = "Izklopi napise";
	amp.options.languages["sl"]["Captions on"] = "Vklopi napise";
	amp.options.languages["sl"]["Captions / Subtitles"] = "Napisi/podnaslovi";
	amp.options.languages["sl"]["Captions / Subtitles settings"] = "Nastavitve napisov/podnaslovov";
	amp.options.languages["sl"]["Reverse sepia"] = "Obratna sepia";
	amp.options.languages["sl"]["Reverse standard"] = "Obratna standardna";
	amp.options.languages["sl"]["Sepia"] = "Sepia";
	amp.options.languages["sl"]["Standard"] = "Standardno";
	amp.options.languages["sl"]["Large"] = "Velika";
	amp.options.languages["sl"]["Medium"] = "Srednje velika";
	amp.options.languages["sl"]["Small"] = "Majhna";
	amp.options.languages["sl"]["Full screen"] = "Celozaslonski način";
	amp.options.languages["sl"]["Exit full screen"] = "Zapri celozaslonski način";
	amp.options.languages["sl"]["Off"] = "Izklopljeno";
	amp.options.languages["sl"]["Playback speed"] = "Hitrost predvajanja";
	amp.options.languages["sl"]["Revert to default settings"] = "Povrni na privzete nastavitve";
	amp.options.languages["sl"]["Settings"] = "Nastavitve";
	amp.options.languages["sl"]["Subtitles on"] = "Vklopi podnaslove";
	amp.options.languages["sl"]["Subtitles off"] = "Izklopi podnaslove";
	amp.options.languages["sl"]["Theater mode"] = "Način kina";
	amp.options.languages["sl"]["Exit theater mode"] = "Zapri način kina";
	amp.options.languages["sl"]["Video quality"] = "Kakovost videoposnetka";
	amp.options.languages["sl"]["View in Microsoft Stream"] = "Prikaži v aplikaciji Microsoft Stream";
	amp.options.languages["sl"]["Search"] = "Iskanje";
	amp.options.languages["sl"]["Auto"] = "Samodejno";
	amp.options.languages["sl"]["CC"] = "Kp";
	amp.options.languages["sl"]["On"] = "Vklopljeno";
	amp.options.languages["sl"]["Text color: "] = "Barva besedila: ";
	amp.options.languages["sl"]["Text size: "] = "Velikost besedila: ";
	amp.options.languages["sl"]["Back to main menu"] = "Nazaj na glavni meni";
	amp.options.languages["sr-cyrl-cs"]["Background transparency"] = "Транспарентност позадине";
	amp.options.languages["sr-cyrl-cs"]["Captions off"] = "Натписи су искључени";
	amp.options.languages["sr-cyrl-cs"]["Captions on"] = "Натписи су укључени";
	amp.options.languages["sr-cyrl-cs"]["Captions / Subtitles"] = "Натписи / поднаслови";
	amp.options.languages["sr-cyrl-cs"]["Captions / Subtitles settings"] = "Пoставке натписа / поднаслова";
	amp.options.languages["sr-cyrl-cs"]["Reverse sepia"] = "Обрнути sepia";
	amp.options.languages["sr-cyrl-cs"]["Reverse standard"] = "Обрнуто стандардно";
	amp.options.languages["sr-cyrl-cs"]["Sepia"] = "Sepia";
	amp.options.languages["sr-cyrl-cs"]["Standard"] = "Стандардно";
	amp.options.languages["sr-cyrl-cs"]["Large"] = "Велико";
	amp.options.languages["sr-cyrl-cs"]["Medium"] = "Средње";
	amp.options.languages["sr-cyrl-cs"]["Small"] = "Мало";
	amp.options.languages["sr-cyrl-cs"]["Full screen"] = "Цео екран";
	amp.options.languages["sr-cyrl-cs"]["Exit full screen"] = "Напусти приказ преко целог екрана";
	amp.options.languages["sr-cyrl-cs"]["Off"] = "Искључено";
	amp.options.languages["sr-cyrl-cs"]["Playback speed"] = "Брзина репродукција";
	amp.options.languages["sr-cyrl-cs"]["Revert to default settings"] = "Врати на подразумеване поставке";
	amp.options.languages["sr-cyrl-cs"]["Settings"] = "Поставке";
	amp.options.languages["sr-cyrl-cs"]["Subtitles on"] = "Поднаслови су укључени";
	amp.options.languages["sr-cyrl-cs"]["Subtitles off"] = "Поднаслови су искључени";
	amp.options.languages["sr-cyrl-cs"]["Theater mode"] = "Позоришни режим";
	amp.options.languages["sr-cyrl-cs"]["Exit theater mode"] = "Напусти позоришни режим";
	amp.options.languages["sr-cyrl-cs"]["Video quality"] = "Квалитет видео записа";
	amp.options.languages["sr-cyrl-cs"]["View in Microsoft Stream"] = "Прикажи у услузи Microsoft Stream";
	amp.options.languages["sr-cyrl-cs"]["Search"] = "Претражи";
	amp.options.languages["sr-cyrl-cs"]["Auto"] = "Аутоматски";
	amp.options.languages["sr-cyrl-cs"]["CC"] = "CC";
	amp.options.languages["sr-cyrl-cs"]["On"] = "Укључено";
	amp.options.languages["sr-cyrl-cs"]["Text color: "] = "Боја текста: ";
	amp.options.languages["sr-cyrl-cs"]["Text size: "] = "Величина текста: ";
	amp.options.languages["sr-cyrl-cs"]["Back to main menu"] = "Назад на главни мени";
	amp.options.languages["sr-latn-rs"]["Background transparency"] = "Transparentnost pozadine";
	amp.options.languages["sr-latn-rs"]["Captions off"] = "Natpisi su isključeni";
	amp.options.languages["sr-latn-rs"]["Captions on"] = "Natpisi su uključeni";
	amp.options.languages["sr-latn-rs"]["Captions / Subtitles"] = "Natpisi / podnaslovi";
	amp.options.languages["sr-latn-rs"]["Captions / Subtitles settings"] = "Postavke natpisa / podnaslova";
	amp.options.languages["sr-latn-rs"]["Reverse sepia"] = "Obrnuti sepia";
	amp.options.languages["sr-latn-rs"]["Reverse standard"] = "Obrnuto standardno";
	amp.options.languages["sr-latn-rs"]["Sepia"] = "Sepia";
	amp.options.languages["sr-latn-rs"]["Standard"] = "Standardni";
	amp.options.languages["sr-latn-rs"]["Large"] = "Veliko";
	amp.options.languages["sr-latn-rs"]["Medium"] = "Srednja";
	amp.options.languages["sr-latn-rs"]["Small"] = "Malo";
	amp.options.languages["sr-latn-rs"]["Full screen"] = "Ceo ekran";
	amp.options.languages["sr-latn-rs"]["Exit full screen"] = "Napusti prikaz preko celog ekrana";
	amp.options.languages["sr-latn-rs"]["Off"] = "Isključeno";
	amp.options.languages["sr-latn-rs"]["Playback speed"] = "Brzina reprodukcija";
	amp.options.languages["sr-latn-rs"]["Revert to default settings"] = "Vrati na podrazumevane postavke";
	amp.options.languages["sr-latn-rs"]["Settings"] = "Postavke";
	amp.options.languages["sr-latn-rs"]["Subtitles on"] = "Podnaslovi su uključeni";
	amp.options.languages["sr-latn-rs"]["Subtitles off"] = "Podnaslovi su isključeni";
	amp.options.languages["sr-latn-rs"]["Theater mode"] = "Pozorišni režim";
	amp.options.languages["sr-latn-rs"]["Exit theater mode"] = "Napusti pozorišni režim";
	amp.options.languages["sr-latn-rs"]["Video quality"] = "Kvalitet video zapisa";
	amp.options.languages["sr-latn-rs"]["View in Microsoft Stream"] = "Prikaži u usluzi Microsoft Stream";
	amp.options.languages["sr-latn-rs"]["Search"] = "Pretraži";
	amp.options.languages["sr-latn-rs"]["Auto"] = "Automatski";
	amp.options.languages["sr-latn-rs"]["CC"] = "CC";
	amp.options.languages["sr-latn-rs"]["On"] = "Uključeno";
	amp.options.languages["sr-latn-rs"]["Text color: "] = "Boja teksta: ";
	amp.options.languages["sr-latn-rs"]["Text size: "] = "Veličina teksta: ";
	amp.options.languages["sr-latn-rs"]["Back to main menu"] = "Nazad na glavni meni";
	amp.options.languages["sv"]["Background transparency"] = "Bakgrundstransparens";
	amp.options.languages["sv"]["Captions off"] = "Bildtexter av";
	amp.options.languages["sv"]["Captions on"] = "Bildtexter på";
	amp.options.languages["sv"]["Captions / Subtitles"] = "Bildtexter/undertexter";
	amp.options.languages["sv"]["Captions / Subtitles settings"] = "Inställningar för bildtexter/undertexter";
	amp.options.languages["sv"]["Reverse sepia"] = "Ändra sepia";
	amp.options.languages["sv"]["Reverse standard"] = "Ändra standard";
	amp.options.languages["sv"]["Sepia"] = "Sepia";
	amp.options.languages["sv"]["Standard"] = "Standard";
	amp.options.languages["sv"]["Large"] = "Stor";
	amp.options.languages["sv"]["Medium"] = "Medel";
	amp.options.languages["sv"]["Small"] = "Liten";
	amp.options.languages["sv"]["Full screen"] = "Helskärm";
	amp.options.languages["sv"]["Exit full screen"] = "Avsluta fullskärmsläge";
	amp.options.languages["sv"]["Off"] = "Av";
	amp.options.languages["sv"]["Playback speed"] = "Uppspelningshastighet";
	amp.options.languages["sv"]["Revert to default settings"] = "Återställ till standardinställningar";
	amp.options.languages["sv"]["Settings"] = "Inställningar";
	amp.options.languages["sv"]["Subtitles on"] = "Undertexter på";
	amp.options.languages["sv"]["Subtitles off"] = "Undertexter av";
	amp.options.languages["sv"]["Theater mode"] = "Biografläge";
	amp.options.languages["sv"]["Exit theater mode"] = "Avsluta biografläge";
	amp.options.languages["sv"]["Video quality"] = "Videokvalitet";
	amp.options.languages["sv"]["View in Microsoft Stream"] = "Visa i Microsoft Stream";
	amp.options.languages["sv"]["Search"] = "Sök";
	amp.options.languages["sv"]["Auto"] = "Auto";
	amp.options.languages["sv"]["CC"] = "Kopia";
	amp.options.languages["sv"]["On"] = "På";
	amp.options.languages["sv"]["Text color: "] = "Textfärg: ";
	amp.options.languages["sv"]["Text size: "] = "Textstorlek: ";
	amp.options.languages["sv"]["Back to main menu"] = "Tillbaka till huvudmenyn";
	amp.options.languages["th"]["Background transparency"] = "ความโปร่งใสของพื้นหลัง";
	amp.options.languages["th"]["Captions off"] = "ปิดคำบรรยาย";
	amp.options.languages["th"]["Captions on"] = "เปิดคำบรรยาย";
	amp.options.languages["th"]["Captions / Subtitles"] = "คำบรรยาย / ซับไตเติล";
	amp.options.languages["th"]["Captions / Subtitles settings"] = "การตั้งค่าคำบรรยาย / ซับไตเติล";
	amp.options.languages["th"]["Reverse sepia"] = "รีเวิร์สซีเปีย";
	amp.options.languages["th"]["Reverse standard"] = "รีเวิร์สมาตรฐาน";
	amp.options.languages["th"]["Sepia"] = "ซีเปีย";
	amp.options.languages["th"]["Standard"] = "มาตรฐาน";
	amp.options.languages["th"]["Large"] = "ขนาดใหญ่";
	amp.options.languages["th"]["Medium"] = "ปานกลาง";
	amp.options.languages["th"]["Small"] = "ขนาดเล็ก";
	amp.options.languages["th"]["Full screen"] = "เต็มจอ";
	amp.options.languages["th"]["Exit full screen"] = "ออกจากเต็มจอ";
	amp.options.languages["th"]["Off"] = "ไม่ได้ใช้งาน";
	amp.options.languages["th"]["Playback speed"] = "ความเร็วในการเล่น";
	amp.options.languages["th"]["Revert to default settings"] = "เปลี่ยนกลับเป็นการตั้งค่าเริ่มต้น";
	amp.options.languages["th"]["Settings"] = "การตั้งค่า";
	amp.options.languages["th"]["Subtitles on"] = "เปิดซับไตเติล";
	amp.options.languages["th"]["Subtitles off"] = "ปิดซับไตเติล";
	amp.options.languages["th"]["Theater mode"] = "โหมดโรงภาพยนตร์";
	amp.options.languages["th"]["Exit theater mode"] = "ออกจากโหมดโรงภาพยนตร์";
	amp.options.languages["th"]["Video quality"] = "คุณภาพของวิดีโอ";
	amp.options.languages["th"]["View in Microsoft Stream"] = "ดูใน Microsoft Stream";
	amp.options.languages["th"]["Search"] = "ค้นหา";
	amp.options.languages["th"]["Auto"] = "อัตโนมัติ";
	amp.options.languages["th"]["CC"] = "สำเนาถึง";
	amp.options.languages["th"]["On"] = "ใช้งานอยู่";
	amp.options.languages["th"]["Text color: "] = "สีข้อความ: ";
	amp.options.languages["th"]["Text size: "] = "ขนาดแบบอักษร: ";
	amp.options.languages["th"]["Back to main menu"] = "กลับไปที่เมนูหลัก";
	amp.options.languages["tr"]["Background transparency"] = "Arka plan saydamlığı";
	amp.options.languages["tr"]["Captions off"] = "Açıklamalı alt yazılar kapalı";
	amp.options.languages["tr"]["Captions on"] = "Açıklamalı alt yazılar açık";
	amp.options.languages["tr"]["Captions / Subtitles"] = "Açıklamalı alt yazılar / Alt yazılar";
	amp.options.languages["tr"]["Captions / Subtitles settings"] = "Açıklamalı alt yazı / Alt yazı ayarları";
	amp.options.languages["tr"]["Reverse sepia"] = "Sepya rengi değiştir";
	amp.options.languages["tr"]["Reverse standard"] = "Standart rengi değiştir";
	amp.options.languages["tr"]["Sepia"] = "Sepya";
	amp.options.languages["tr"]["Standard"] = "Standart";
	amp.options.languages["tr"]["Large"] = "Büyük";
	amp.options.languages["tr"]["Medium"] = "Orta";
	amp.options.languages["tr"]["Small"] = "Küçük";
	amp.options.languages["tr"]["Full screen"] = "Tam ekran";
	amp.options.languages["tr"]["Exit full screen"] = "Tam ekrandan çık";
	amp.options.languages["tr"]["Off"] = "Kapalı";
	amp.options.languages["tr"]["Playback speed"] = "Kayıttan yürütme hızı";
	amp.options.languages["tr"]["Revert to default settings"] = "Varsayılan ayarlara geri dön";
	amp.options.languages["tr"]["Settings"] = "Ayarlar";
	amp.options.languages["tr"]["Subtitles on"] = "Alt yazılar açık";
	amp.options.languages["tr"]["Subtitles off"] = "Alt yazılar kapalı";
	amp.options.languages["tr"]["Theater mode"] = "Tiyatro modu";
	amp.options.languages["tr"]["Exit theater mode"] = "Tiyatro modundan çık";
	amp.options.languages["tr"]["Video quality"] = "Video kalitesi";
	amp.options.languages["tr"]["View in Microsoft Stream"] = "Microsoft Stream'de görüntüle";
	amp.options.languages["tr"]["Search"] = "Ara";
	amp.options.languages["tr"]["Auto"] = "Otomatik";
	amp.options.languages["tr"]["CC"] = "CC";
	amp.options.languages["tr"]["On"] = "Açık";
	amp.options.languages["tr"]["Text color: "] = "Metin rengi:";
	amp.options.languages["tr"]["Text size: "] = "Metin boyutu: ";
	amp.options.languages["tr"]["Back to main menu"] = "Ana menüye dön";
	amp.options.languages["uk"]["Background transparency"] = "Прозорість фону";
	amp.options.languages["uk"]["Captions off"] = "Вимкнути підписи";
	amp.options.languages["uk"]["Captions on"] = "Увімкнути підписи";
	amp.options.languages["uk"]["Captions / Subtitles"] = "Підписи та субтитри";
	amp.options.languages["uk"]["Captions / Subtitles settings"] = "Налаштування підписів і субтитрів";
	amp.options.languages["uk"]["Reverse sepia"] = "Обернена сепія";
	amp.options.languages["uk"]["Reverse standard"] = "Обернений стандартний колір";
	amp.options.languages["uk"]["Sepia"] = "Сепія";
	amp.options.languages["uk"]["Standard"] = "Стандартний";
	amp.options.languages["uk"]["Large"] = "Великий";
	amp.options.languages["uk"]["Medium"] = "Середній";
	amp.options.languages["uk"]["Small"] = "Малий";
	amp.options.languages["uk"]["Full screen"] = "Повний екран";
	amp.options.languages["uk"]["Exit full screen"] = "Вийти з повноекранного режиму";
	amp.options.languages["uk"]["Off"] = "Вимкнуто";
	amp.options.languages["uk"]["Playback speed"] = "Швидкість відтворення";
	amp.options.languages["uk"]["Revert to default settings"] = "Повернутися до стандартних налаштувань";
	amp.options.languages["uk"]["Settings"] = "Настройки";
	amp.options.languages["uk"]["Subtitles on"] = "Увімкнути субтитри";
	amp.options.languages["uk"]["Subtitles off"] = "Вимкнути субтитри";
	amp.options.languages["uk"]["Theater mode"] = "Режим театру";
	amp.options.languages["uk"]["Exit theater mode"] = "Вийти з режиму театру";
	amp.options.languages["uk"]["Video quality"] = "Якість відео";
	amp.options.languages["uk"]["View in Microsoft Stream"] = "Переглянути в Microsoft Stream";
	amp.options.languages["uk"]["Search"] = "Пошук";
	amp.options.languages["uk"]["Auto"] = "Авто";
	amp.options.languages["uk"]["CC"] = "Копія";
	amp.options.languages["uk"]["On"] = "Вимкнуто";
	amp.options.languages["uk"]["Text color: "] = "Колір тексту: ";
	amp.options.languages["uk"]["Text size: "] = "Розмір тексту: ";
	amp.options.languages["uk"]["Back to main menu"] = "Повернутися до головного меню";
	amp.options.languages["vi"]["Background transparency"] = "Nền trong suốt";
	amp.options.languages["vi"]["Captions off"] = "Tắt phụ đề";
	amp.options.languages["vi"]["Captions on"] = "Bật phụ đề";
	amp.options.languages["vi"]["Captions / Subtitles"] = "Phụ đề";
	amp.options.languages["vi"]["Captions / Subtitles settings"] = "Thiết đặt phụ đề";
	amp.options.languages["vi"]["Reverse sepia"] = "Quay lại màu nâu đỏ";
	amp.options.languages["vi"]["Reverse standard"] = "Quay lại màu tiêu chuẩn";
	amp.options.languages["vi"]["Sepia"] = "Màu nâu đỏ";
	amp.options.languages["vi"]["Standard"] = "Tiêu chuẩn";
	amp.options.languages["vi"]["Large"] = "Lớn";
	amp.options.languages["vi"]["Medium"] = "Trung bình";
	amp.options.languages["vi"]["Small"] = "Nhỏ";
	amp.options.languages["vi"]["Full screen"] = "Toàn màn hình";
	amp.options.languages["vi"]["Exit full screen"] = "Thoát toàn màn hình";
	amp.options.languages["vi"]["Off"] = "Tắt";
	amp.options.languages["vi"]["Playback speed"] = "Tốc độ phát lại";
	amp.options.languages["vi"]["Revert to default settings"] = "Trở lại thiết đặt mặc định";
	amp.options.languages["vi"]["Settings"] = "Thiết đặt";
	amp.options.languages["vi"]["Subtitles on"] = "Bật phụ đề";
	amp.options.languages["vi"]["Subtitles off"] = "Tắt phụ đề";
	amp.options.languages["vi"]["Theater mode"] = "Chế độ rạp hát";
	amp.options.languages["vi"]["Exit theater mode"] = "Thoát chế độ rạp hát";
	amp.options.languages["vi"]["Video quality"] = "Chất lượng video";
	amp.options.languages["vi"]["View in Microsoft Stream"] = "Xem trong Microsoft Stream";
	amp.options.languages["vi"]["Search"] = "Tìm kiếm";
	amp.options.languages["vi"]["Auto"] = "Tự động";
	amp.options.languages["vi"]["CC"] = "CC";
	amp.options.languages["vi"]["On"] = "Bật";
	amp.options.languages["vi"]["Text color: "] = "Màu văn bản: ";
	amp.options.languages["vi"]["Text size: "] = "Kích thước văn bản: ";
	amp.options.languages["vi"]["Back to main menu"] = "Quay lại menu chính";
	amp.options.languages["zh-hans"]["Background transparency"] = "背景透明度";
	amp.options.languages["zh-hans"]["Captions off"] = "关闭解释性字幕";
	amp.options.languages["zh-hans"]["Captions on"] = "开启解释性字幕";
	amp.options.languages["zh-hans"]["Captions / Subtitles"] = "解释性字幕/对白字幕";
	amp.options.languages["zh-hans"]["Captions / Subtitles settings"] = "解释性字幕/对白字幕设置";
	amp.options.languages["zh-hans"]["Reverse sepia"] = "反向棕褐色";
	amp.options.languages["zh-hans"]["Reverse standard"] = "反向标准色";
	amp.options.languages["zh-hans"]["Sepia"] = "棕褐色";
	amp.options.languages["zh-hans"]["Standard"] = "标准";
	amp.options.languages["zh-hans"]["Large"] = "大";
	amp.options.languages["zh-hans"]["Medium"] = "中";
	amp.options.languages["zh-hans"]["Small"] = "小";
	amp.options.languages["zh-hans"]["Full screen"] = "全屏";
	amp.options.languages["zh-hans"]["Exit full screen"] = "退出全屏";
	amp.options.languages["zh-hans"]["Off"] = "关";
	amp.options.languages["zh-hans"]["Playback speed"] = "播放速度";
	amp.options.languages["zh-hans"]["Revert to default settings"] = "还原为默认设置";
	amp.options.languages["zh-hans"]["Settings"] = "设置";
	amp.options.languages["zh-hans"]["Subtitles on"] = "开启对白字幕";
	amp.options.languages["zh-hans"]["Subtitles off"] = "关闭对白字幕";
	amp.options.languages["zh-hans"]["Theater mode"] = "影院模式";
	amp.options.languages["zh-hans"]["Exit theater mode"] = "退出影院模式";
	amp.options.languages["zh-hans"]["Video quality"] = "视频质量";
	amp.options.languages["zh-hans"]["View in Microsoft Stream"] = "在 Microsoft Stream 中查看";
	amp.options.languages["zh-hans"]["Search"] = "搜索";
	amp.options.languages["zh-hans"]["Auto"] = "自动";
	amp.options.languages["zh-hans"]["CC"] = "抄送";
	amp.options.languages["zh-hans"]["On"] = "开";
	amp.options.languages["zh-hans"]["Text color: "] = "文本颜色: ";
	amp.options.languages["zh-hans"]["Text size: "] = "文本大小: ";
	amp.options.languages["zh-hans"]["Back to main menu"] = "返回主菜单";
	amp.options.languages["zh-hant"]["Background transparency"] = "背景透明度";
	amp.options.languages["zh-hant"]["Captions off"] = "關閉字幕";
	amp.options.languages["zh-hant"]["Captions on"] = "開啟字幕";
	amp.options.languages["zh-hant"]["Captions / Subtitles"] = "字幕";
	amp.options.languages["zh-hant"]["Captions / Subtitles settings"] = "字幕設定";
	amp.options.languages["zh-hant"]["Reverse sepia"] = "還原復古";
	amp.options.languages["zh-hant"]["Reverse standard"] = "還原標準";
	amp.options.languages["zh-hant"]["Sepia"] = "復古";
	amp.options.languages["zh-hant"]["Standard"] = "標準";
	amp.options.languages["zh-hant"]["Large"] = "大";
	amp.options.languages["zh-hant"]["Medium"] = "中";
	amp.options.languages["zh-hant"]["Small"] = "小";
	amp.options.languages["zh-hant"]["Full screen"] = "全螢幕";
	amp.options.languages["zh-hant"]["Exit full screen"] = "結束全螢幕";
	amp.options.languages["zh-hant"]["Off"] = "關閉";
	amp.options.languages["zh-hant"]["Playback speed"] = "播放速度";
	amp.options.languages["zh-hant"]["Revert to default settings"] = "還原為預設設定";
	amp.options.languages["zh-hant"]["Settings"] = "設定";
	amp.options.languages["zh-hant"]["Subtitles on"] = "開啟字幕";
	amp.options.languages["zh-hant"]["Subtitles off"] = "關閉字幕";
	amp.options.languages["zh-hant"]["Theater mode"] = "劇院模式";
	amp.options.languages["zh-hant"]["Exit theater mode"] = "結束劇院模式";
	amp.options.languages["zh-hant"]["Video quality"] = "影片品質";
	amp.options.languages["zh-hant"]["View in Microsoft Stream"] = "在 Microsoft Stream 中檢視";
	amp.options.languages["zh-hant"]["Search"] = "搜尋";
	amp.options.languages["zh-hant"]["Auto"] = "自動";
	amp.options.languages["zh-hant"]["CC"] = "副本";
	amp.options.languages["zh-hant"]["On"] = "開啟";
	amp.options.languages["zh-hant"]["Text color: "] = "文字色彩: ";
	amp.options.languages["zh-hant"]["Text size: "] = "文字大小: ";
	amp.options.languages["zh-hant"]["Back to main menu"] = "回到主功能表";

/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	__webpack_require__(952);
	
	amp.StreamSkinPlugin = amp.extend(amp.getComponent('Component'), {
	    init: function init(player, options) {
	        "use strict";
	
	        player.options_ = player.options_ || {};
	        player.options_["inactivityTimeout"] = 3000;
	
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
	                speedLevels: [{ name: '2.0x', value: 2 }, { name: '1.75x', value: 1.75 }, { name: '1.5x', value: 1.5 }, { name: '1.25x', value: 1.25 }, { name: '1.0x', value: 1 }, { name: '0.5x', value: 0.5 }]
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
	
	        player.on("canplaythrough", function () {
	            player.captionToggle.update();
	            player.moreOptionsButton.update();
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

/***/ 952:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 953:
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
	
	__webpack_require__(954);
	
	var SearchButton = function (_Button) {
	    _inherits(SearchButton, _Button);
	
	    function SearchButton(player, options) {
	        _classCallCheck(this, SearchButton);
	
	        options.name = 'searchButton';
	        return _possibleConstructorReturn(this, (SearchButton.__proto__ || Object.getPrototypeOf(SearchButton)).call(this, player, options));
	    }
	
	    _createClass(SearchButton, [{
	        key: 'buildCSSClass',
	        value: function buildCSSClass() {
	            return 'amp-search-icon ' + _get(SearchButton.prototype.__proto__ || Object.getPrototypeOf(SearchButton.prototype), 'buildCSSClass', this).call(this);
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.player().trigger('searchPlugin');
	        }
	    }]);
	
	    return SearchButton;
	}(Button);
	
	SearchButton.prototype.controlText_ = 'Search';
	videojs.registerComponent('SearchButton', SearchButton);
	
	var SearchPlugin = function SearchPlugin(options) {
	    var player = this;
	    var externalLink = !!options ? options.externalLink : null;
	
	    player.on("loadedmetadata", function () {
	        var controlBarChildren = player.controlBar.children();
	        var searchPlugin = null;
	        for (var i = 0; i < controlBarChildren.length; i++) {
	            if (controlBarChildren[i].el() && controlBarChildren[i].el().className === "amp-controlbaricons-right") {
	                var rightControlBar = player.controlBar.children()[i];
	                var searchButton = this.controlBar.addChild('SearchButton', options);
	                searchButton = rightControlBar.el().insertBefore(searchButton.el(), player.controlBar.captionToggle.el());
	            }
	            if (searchButton) {
	                player.controlBar.searchButton = searchButton;
	            }
	        }
	    });
	};
	
	videojs.plugin('searchPlugin', SearchPlugin);

/***/ },

/***/ 954:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMzZjgxY2ZkMmVhMjNkMzEyZjZiPzg1MzgqIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvUGxheWVyTG9jU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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QUosRUFBa0I7QUFDZCx3QkFBTyxVQUFQLENBQWtCLFlBQWxCLEdBQWlDLFlBQWpDLENBRGM7Y0FBbEI7VUFOSjtNQUh3QixDQUE1QixDQUpvQztFQUFuQjs7QUFvQnJCLFNBQVEsTUFBUixDQUFlLGNBQWYsRUFBK0IsWUFBL0IsRTs7Ozs7OztBQ2pEQSwwQyIsImZpbGUiOiJidW5kbGVzL0RlYnVnL3BsYXllci1za2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGxheWVyLXNraW5cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGxheWVyLXNraW5cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDMzZjgxY2ZkMmVhMjNkMzEyZjZiXG4gKiovIiwicmVxdWlyZShcIi4vc3R5bGVzL3RoZW1lcy9zdHJlYW0tc2tpbi9tYWluLnNjc3NcIik7XHJcbnJlcXVpcmUoXCIuL1N0cmVhbUljb24vU3RyZWFtSWNvbi5qc1wiKTtcclxucmVxdWlyZShcIi4vVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25TdWJ0aXRsZS9PZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbS5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblNldHRpbmdzL0NhcHRpb25TZXR0aW5ncy5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblN1YnRpdGxlL0NhcHRpb25TdWJ0aXRsZVwiKTtcclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMvTW9yZU9wdGlvbnNNZW51SXRlbS5qc1wiKTtcclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMvTW9yZU9wdGlvbnMuanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5qc1wiKTtcclxucmVxdWlyZShcIi4vTW91c2VUaW1lVG9vbHRpcC9Nb3VzZVRpbWVUb29sdGlwLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qc1wiKTtcclxucmVxdWlyZShcIi4vUGxheWVyTG9jU3RyaW5ncy5qc1wiKTtcclxucmVxdWlyZShcIi4vU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9TZWFyY2hQbHVnaW4vU2VhcmNoUGx1Z2luLmpzXCIpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJQbHVnaW4uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvc3R5bGVzL3RoZW1lcy9zdHJlYW0tc2tpbi9tYWluLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL1N0cmVhbUljb24uc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFN0cmVhbUljb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ3N0cmVhbUljb25CdXR0b24nO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnVmlldyBpbiBTdHJlYW0gYnV0dG9uJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtc3RyZWFtLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgZXh0ZXJuYWxMaW5rID0gISF0aGlzLm9wdGlvbnMgJiYgISF0aGlzLm9wdGlvbnMoKSA/IHRoaXMub3B0aW9ucygpLmV4dGVybmFsTGluayA6IG51bGw7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oZXh0ZXJuYWxMaW5rLCBcIl9ibGFua1wiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblN0cmVhbUljb25CdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW0nO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTdHJlYW1JY29uQnV0dG9uJywgU3RyZWFtSWNvbkJ1dHRvbik7XHJcblxyXG5jb25zdCBTdHJlYW1JY29uUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHN0cmVhbUljb25CdXR0b24gPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKSAmJiBjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKS5jbGFzc05hbWUgPT09IFwiYW1wLWNvbnRyb2xiYXJpY29ucy1yaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRDb250cm9sQmFyID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKVtpXTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJlYW1pY29uQnV0dG9uID0gdGhpcy5jb250cm9sQmFyLmFkZENoaWxkKCdTdHJlYW1JY29uQnV0dG9uJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JY29uQnV0dG9uID0gcmlnaHRDb250cm9sQmFyLmFkZENoaWxkKHN0cmVhbWljb25CdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW1JY29uQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5zdHJlYW1JY29uQnV0dG9uID0gc3RyZWFtSWNvbkJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmlkZW9qcy5wbHVnaW4oJ3N0cmVhbUljb25QbHVnaW4nLCBTdHJlYW1JY29uUGx1Z2luKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtSWNvbi9TdHJlYW1JY29uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5MzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL1RoZWF0ZXJNb2RlLnNjc3NcIik7XHJcblxyXG5jbGFzcyBUaGVhdGVyTW9kZUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSAndGhlYXRlck1vZGVCdXR0b24nO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sVGV4dCh0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAgdGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtdGhlYXRlci1pY29uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygnYW1wLXRoZWF0ZXItZXhpdC1idXR0b24nKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIoKS50cmlnZ2VyKCdleGl0VGhlYXRlck1vZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sVGV4dCh0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpKTtcclxuICAgICAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgIHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZW50ZXJUaGVhdGVyTW9kZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdFeGl0IHRoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICB0aGlzLmxvY2FsaXplKCdFeGl0IHRoZWF0ZXIgbW9kZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblRoZWF0ZXJNb2RlQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnVGhlYXRlciBtb2RlJztcclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnVGhlYXRlck1vZGVCdXR0b24nLCBUaGVhdGVyTW9kZUJ1dHRvbik7XHJcblxyXG5jb25zdCBUaGVhdGVyTW9kZVBsdWdpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBsZXQgcGxheWVyID0gdGhpcztcclxuICAgIGxldCBleHRlcm5hbExpbmsgPSAhIW9wdGlvbnMgPyBvcHRpb25zLmV4dGVybmFsTGluayA6IG51bGw7XHJcblxyXG4gICAgcGxheWVyLm9uKFwibG9hZGVkbWV0YWRhdGFcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciB0aGVhdGVyTW9kZUJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoZWF0ZXJCdXR0b24gPSB0aGlzLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ1RoZWF0ZXJNb2RlQnV0dG9uJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGVhdGVyTW9kZUJ1dHRvbiA9IHJpZ2h0Q29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZSh0aGVhdGVyQnV0dG9uLmVsKCksIHBsYXllci5jb250cm9sQmFyLmZ1bGxzY3JlZW5Ub2dnbGUuZWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoZWF0ZXJNb2RlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci50aGVhdGVyTW9kZUJ1dHRvbiA9IHRoZWF0ZXJNb2RlQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbigndGhlYXRlck1vZGVQbHVnaW4nLCBUaGVhdGVyTW9kZVBsdWdpbik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDkzN1xuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgVGV4dFRyYWNrTWVudUl0ZW0gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnVGV4dFRyYWNrTWVudUl0ZW0nKTtcclxuXHJcbmNsYXNzIE9mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtIGV4dGVuZHMgVGV4dFRyYWNrTWVudUl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucyl7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHBzZXVkbyB0cmFjayBpbmZvXHJcbiAgICAgICAgLy8gUmVxdWlyZXMgb3B0aW9uc1sna2luZCddXHJcbiAgICAgICAgb3B0aW9uc1sndHJhY2snXSA9IHtcclxuICAgICAgICAgICAgJ2tpbmQnOiBvcHRpb25zWydraW5kJ10sXHJcbiAgICAgICAgICAgICdwbGF5ZXInOiBwbGF5ZXIsXHJcbiAgICAgICAgICAgICdsYWJlbCc6ICdPZmYnLFxyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IGZhbHNlLFxyXG4gICAgICAgICAgICAnbW9kZSc6ICdkaXNhYmxlZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBNZW51SXRlbSBpcyBzZWxlY3RhYmxlXHJcbiAgICAgICAgb3B0aW9uc1snc2VsZWN0YWJsZSddID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRyYWNrc0NoYW5nZShldmVudCl7XHJcbiAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyKCkudGV4dFRyYWNrcygpO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdHJhY2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XHJcbiAgICAgICAgICAgIGlmICh0cmFja1snbW9kZSddID09PSAnc2hvd2luZycpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZChzZWxlY3RlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0nLCBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzXG4gKiovIiwicmVxdWlyZSgnLi9DYXB0aW9uU2V0dGluZ3Muc2NzcycpO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBNZW51QnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVCdXR0b24nKTtcclxuXHJcbmNsYXNzIENhcHRpb25TZXR0aW5nc0J1dHRvbiBleHRlbmRzIE1lbnVCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3MnKSk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG4gICAgICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYGFtcC1jYXB0aW9ucy1zZXR0aW5ncy1idXR0b24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNZW51KCkge1xyXG4gICAgICAgIGxldCBtZW51ID0gbmV3IENvbXBvbmVudCh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgZWw6IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLW1lbnUnLFxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lbnUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7IH07XHJcblxyXG4gICAgICAgIGxldCBtZW51VGl0bGVDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMucGxheWVyXywge1xyXG4gICAgICAgICAgICBlbDogdmlkZW9qcy5jcmVhdGVFbCgnbGknLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhbXAtbWVudS1oZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3MnKSksXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRDaGlsZChtZW51VGl0bGVDb21wb25lbnQpO1xyXG4gICAgICAgIG1lbnUuYWRkQ2hpbGQobmV3IENhcHRpb25TZXR0aW5ncyh0aGlzLnBsYXllcl8pKTtcclxuXHJcbiAgICAgICAgbWVudS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NhcHRpb25TZXR0aW5nc0J1dHRvbicsIENhcHRpb25TZXR0aW5nc0J1dHRvbik7XHJcblxyXG5jbGFzcyBDYXB0aW9uU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKCdhbXAtbm9uLWNsaWNrYWJsZS1lbGVtZW50Jyk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnRleHRUcmFja1NldHRpbmdzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlc3NlZCA9IChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJnVHJhbnNwYXJlbmN5VG9nZ2xlKCFwcmVzc2VkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRPcGFjaXR5JzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb250UGVyY2VudCc6ICcwLjc1JyxcclxuICAgICAgICAgICAgICAgICAgICAndGV4dENvbG9yVmFsdWUnOiAnd2hpdGVCbGFjaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dENvbG9yQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0Q29sb3JUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgZGVmYXVsdHNcclxuICAgICAgICAgICAgc2V0RGVmYXVsdHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNfLnBlcnNpc3RUZXh0VHJhY2tTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kKGAuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtZm9udC1zaXplLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZURpc3BsYXkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCgnLmFtcC1mb250LWNvbG9yLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZXh0Q29sb3JDaGFuZ2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0RGVmYXVsdHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udHJvbHMgPSB0aGlzLiQkKCcuYW1wLWNhcHRpb24tc2V0dGluZy1jb250YWluZXIgLm91dGxpbmUtZW5hYmxlZC1jb250cm9sJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuY2xpZW50WCAhPT0gMCAmJiBldmVudC5jbGllbnRZICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNsYXNzKCdvdXRsaW5lLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLWNhcHRpb24tc2V0dGluZ3MtbWVudScsXHJcbiAgICAgICAgICAgIHJvbGU6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6IGNhcHRpb25PcHRpb25zTWVudVRlbXBsYXRlLmNhbGwodGhpcywgdGhpcy5pZF8pLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURpc3BsYXkoKSB7XHJcbiAgICAgICAgbGV0IHR0RGlzcGxheSA9IHRoaXMucGxheWVyXy5nZXRDaGlsZCgndGV4dFRyYWNrRGlzcGxheScpO1xyXG4gICAgICAgIGlmICh0dERpc3BsYXkpIHtcclxuICAgICAgICAgICAgdHREaXNwbGF5LnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZvbnRQZXJjZW50ID0gdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udFNpemVcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvclZhbHVlID0gdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgZmdDb2xvcjtcclxuICAgICAgICBsZXQgYmdDb2xvcjtcclxuICAgICAgICBzd2l0Y2ggKHRleHRDb2xvclZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrV2hpdGUnOlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tMaWdodEdyYXknOlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjMzAyOTI2JztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnI2RkZGJkMyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2hpdGVHcmF5JzpcclxuICAgICAgICAgICAgICAgIGZnQ29sb3IgPSAnI2RkZGJkMyc7XHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yID0gJyMzMDI5MjYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlQmxhY2snOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnIzAwMDAwMCc7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJnVHJhbnNwYXJlbmN5ID0gdGhpcy4kKCcuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5JykuZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKTtcclxuICAgICAgICBjb25zdCBiZ09wYWNpdHkgPSBiZ1RyYW5zcGFyZW5jeSA9PT0gJ3RydWUnID8gJzAnIDogJzEnO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAnYmFja2dyb3VuZE9wYWNpdHknOiBiZ09wYWNpdHksXHJcbiAgICAgICAgICAgICdjb2xvcic6IGZnQ29sb3IsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBiZ0NvbG9yLFxyXG4gICAgICAgICAgICAnZm9udFBlcmNlbnQnOiBmb250UGVyY2VudCxcclxuICAgICAgICAgICAgJ3RleHRDb2xvclZhbHVlJzogdGV4dENvbG9yVmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0gPT09ICcnIHx8IHJlc3VsdFtuYW1lXSA9PT0gJ25vbmUnIHx8IChuYW1lID09PSAnZm9udFBlcmNlbnQnICYmIHJlc3VsdFtuYW1lXSA9PT0gMS4wMCkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZXModmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdW3ZhbHVlPVwiJyArIHZhbHVlcy50ZXh0Q29sb3JWYWx1ZSArICdcIl0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHRDb2xvclRleHQoKTtcclxuICAgICAgICB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250U2l6ZVwiXVt2YWx1ZT1cIicgKyB2YWx1ZXMuZm9udFBlcmNlbnQgKyAnXCJdJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZSh2YWx1ZXMuYmdPcGFjaXR5ID09PSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZShpc1ByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLiQoYC5hbXAtY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3lgKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIiwgaXNQcmVzc2VkKTtcclxuICAgICAgICB0aGlzLiQoJy5hbXAtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgLnRvZ2dsZS12YWx1ZScpLmlubmVySFRNTCA9IGlzUHJlc3NlZCA/IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiT25cIikpIDogdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRleHRDb2xvclRleHQoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yVmFsdWUgPSB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250Q29sb3JcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yVGV4dCA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodGV4dENvbG9yVmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tXaGl0ZSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHN0YW5kYXJkJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrTGlnaHRHcmF5JzpcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JUZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1NlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlR3JheSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHNlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlQmxhY2snOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnU3RhbmRhcmQnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1jb2xvci1zZWxlY3RlZC10ZXh0JykuaW5uZXJUZXh0ID0gdGhpcy5sb2NhbGl6ZShzZWxlY3RlZENvbG9yVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zXy5wZXJzaXN0VGV4dFRyYWNrU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2anMtdGV4dC10cmFjay1vcHRpb25zJywgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTZXR0aW5ncygpIHtcclxuICAgICAgICBsZXQgZXJyLCB2YWx1ZXM7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFtlcnIsIHZhbHVlc10gPSBzYWZlUGFyc2VUdXBsZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXB0aW9uT3B0aW9uc01lbnVUZW1wbGF0ZSh1bmlxdWVJZCkge1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdhbXAtY2FwdGlvbi1zZXR0aW5nLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJyBmb3I9XCJjYXB0aW9ucy10ZXh0LXNpemUtJHt1bmlxdWVJZH1cIj4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiVGV4dCBzaXplOiBcIikpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uLWdyb3VwIGFtcC1mb250LXNpemUtZ3JvdXAnIGlkPVwiY2FwdGlvbnMtdGV4dC1zaXplLSR7dW5pcXVlSWR9XCIgcm9sZT0nbWVudSc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LXNpemUnIHJvbGU9J21lbnVpdGVtJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoXCJTbWFsbFwiKX0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udFNpemUnIHZhbHVlPScwLjc1JyBjbGFzcz0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlNtYWxsXCIpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1zaXplJyByb2xlPSdtZW51aXRlbScgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udFNpemUnIHZhbHVlPScxLjAwJyBjbGFzcyA9J291dGxpbmUtZW5hYmxlZC1jb250cm9sJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJNZWRpdW1cIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LXNpemUnIHJvbGU9J21lbnVpdGVtJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzEuNTAnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIkxhcmdlXCIpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJyBmb3I9XCJjYXB0aW9ucy10ZXh0LWNvbG9yLSR7dW5pcXVlSWR9XCI+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlRleHQgY29sb3I6IFwiKSl9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9J2FtcC1jYXB0aW9uLWNvbG9yLXNlbGVjdGVkLXRleHQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24tZ3JvdXAgYW1wLWZvbnQtY29sb3ItZ3JvdXAnIGlkPVwiY2FwdGlvbi10ZXh0LWNvbG9yLSR7dW5pcXVlSWR9XCIgcm9sZT0nbWVudSc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJyByb2xlPSdtZW51aXRlbScgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udENvbG9yJyB2YWx1ZT0nd2hpdGVCbGFjaycgY2xhc3MgPSdhbXAtZm9udC1jb2xvci13aGl0ZUJsYWNrIG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1N0YW5kYXJkJyl9Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtY29sb3InIHJvbGU9J21lbnVpdGVtJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250Q29sb3InIHZhbHVlPSd3aGl0ZUdyYXknIGNsYXNzID0nYW1wLWZvbnQtY29sb3Itd2hpdGVHcmF5IG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1JldmVyc2Ugc2VwaWEnKX0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1jb2xvcicgcm9sZT0nbWVudWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udENvbG9yJyB2YWx1ZT0nYmxhY2tMaWdodEdyYXknIGNsYXNzID0nYW1wLWZvbnQtY29sb3ItYmxhY2tMaWdodEdyYXkgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtbGFiZWw9JyR7dGhpcy5sb2NhbGl6ZSgnU2VwaWEnKX0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1jb2xvcicgcm9sZT0nbWVudWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udENvbG9yJyB2YWx1ZT0nYmxhY2tXaGl0ZScgY2xhc3MgPSdhbXAtZm9udC1jb2xvci1ibGFja1doaXRlIG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1JldmVyc2Ugc3RhbmRhcmQnKX0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgYW1wLXJvdy13aXRoLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FtcC10b2dnbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCIgY2xhc3MgPSdhbXAtY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtbGFiZWw9JyR7dGhpcy5sb2NhbGl6ZShcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCIpfSc+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSd0b2dnbGUtdmFsdWUnPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLXJlc2V0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCBhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCIpKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TZXR0aW5ncy9DYXB0aW9uU2V0dGluZ3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk0MFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgVGV4dFRyYWNrQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1RleHRUcmFja0J1dHRvbicpO1xyXG5jb25zdCBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbScpO1xyXG5jb25zdCBUZXh0VHJhY2tNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdUZXh0VHJhY2tNZW51SXRlbScpO1xyXG5cclxuY2xhc3MgQ2FwdGlvblN1YnRpdGxlQnV0dG9uIGV4dGVuZHMgVGV4dFRyYWNrQnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMsIHJlYWR5KSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zLCByZWFkeSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ0NhcHRpb25zIC8gU3VidGl0bGVzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGB2anMtY2FwdGlvbnMtc3VidGl0bGVzLWJ1dHRvbiAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgaWYgKCF0cmFja3MgfHwgIXRyYWNrcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbXMoaXRlbXMpIHtcclxuICAgICAgICBpdGVtcyA9IGl0ZW1zIHx8IFtdO1xyXG5cclxuICAgICAgICB2YXIgbWVudVRpdGxlQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgZWw6IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLW1lbnUtaGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ0NhcHRpb25zIC8gU3VidGl0bGVzJykpLFxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXRlbXMucHVzaChtZW51VGl0bGVDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBpdGVtcy5wdXNoKG5ldyBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSh0aGlzLnBsYXllcl8sIHsgJ2tpbmQnOiB0aGlzLmtpbmRfIH0pKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBvbmx5IGFkZCB0cmFja3MgdGhhdCBhcmUgb2YgdGhlIGFwcHJvcHJpYXRlIGtpbmQgYW5kIGhhdmUgYSBsYWJlbFxyXG4gICAgICAgICAgICBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ3N1YnRpdGxlcycgfHwgdHJhY2tbJ2tpbmQnXSA9PT0gJ2NhcHRpb25zJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyYWNrSXRlbSA9IG5ldyBUZXh0VHJhY2tNZW51SXRlbSh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNZW51SXRlbSBpcyBzZWxlY3RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdGFibGUnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFjayc6IHRyYWNrXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ2NhcHRpb25zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrSXRlbS5lbF8uaW5uZXJIVE1MID0gdHJhY2tJdGVtLmVsXy5pbm5lckhUTUwgKyAnICcgKyB0aGlzLmxvY2FsaXplKCdDQycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRyYWNrSXRlbS5vcHRpb25zX1snbGFiZWwnXTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja0l0ZW0ub3B0aW9uc19bJ2xhYmVsJ10gPSBsYWJlbCArIHRoaXMubG9jYWxpemUoJyBbQ0NdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJdGVtLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAgbGFiZWwgKyB0aGlzLmxvY2FsaXplKCcgW0NDXScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHRyYWNrSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uU3VidGl0bGVCdXR0b24ucHJvdG90eXBlLmtpbmRfID0gJ3RleHR0cmFja3MnO1xyXG5cclxuVGV4dFRyYWNrTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG5cclxuICAgIGlmICghdHJhY2tzKSByZXR1cm47XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XHJcblxyXG4gICAgICAgIGlmICh0cmFja1sna2luZCddICE9PSBcInN1YnRpdGxlc1wiICYmIHRyYWNrWydraW5kJ10gIT09IFwiY2FwdGlvbnNcIiAmJiB0cmFja1sna2luZCddICE9PSAndGV4dHRyYWNrcycpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhY2sgPT09IHRoaXMudHJhY2spIHtcclxuICAgICAgICAgICAgdHJhY2tbJ21vZGUnXSA9ICdzaG93aW5nJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmFja1snbW9kZSddID0gJ2Rpc2FibGVkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyXy5jYXB0aW9uVG9nZ2xlLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NhcHRpb25TdWJ0aXRsZUJ1dHRvbicsIENhcHRpb25TdWJ0aXRsZUJ1dHRvbik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL0NhcHRpb25TdWJ0aXRsZS5qc1xuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51SXRlbScpO1xyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc01lbnVJdGVtIGV4dGVuZHMgTWVudUl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucywgZW50cnksIG1lbnVCdXR0b24pIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uID0gbWVudUJ1dHRvbjtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRoaXMuc2V0dGluZ3NCdXR0b24uZGlhbG9nO1xyXG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSB0aGlzLnNldHRpbmdzQnV0dG9uLm1lbnU7XHJcbiAgICAgICAgdGhpcy5wYW5lbCA9IHRoaXMuZGlhbG9nLmdldENoaWxkKCdzZXR0aW5nc1BhbmVsJyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkID0gdGhpcy5wYW5lbC5nZXRDaGlsZCgnc2V0dGluZ3NQYW5lbENoaWxkJyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkRWwgPSB0aGlzLnBhbmVsQ2hpbGQuZWxfO1xyXG5cclxuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBrZWVwIHN0YXRlIG9mIHdoYXQgbWVudSB0eXBlIGlzIGxvYWRpbmcgbmV4dFxyXG4gICAgICAgIHRoaXMubWVudVRvTG9hZCA9ICdtYWlubWVudSc7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnVOYW1lID0gZW50cnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlbnRyeS5zbGljZSgxKTtcclxuICAgICAgICBjb25zdCBTdWJNZW51Q29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoc3ViTWVudU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIVN1Yk1lbnVDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgJHtzdWJNZW51TmFtZX0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdWJNZW51ID0gbmV3IFN1Yk1lbnVDb21wb25lbnQodGhpcy5wbGF5ZXIoKSwgb3B0aW9ucywgbWVudUJ1dHRvbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRTdWJNZW51QnV0dG9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycygpO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50SGFuZGxlcnMoKSB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgTWVudUJ1dHRvbnMga2V5UHJlc3MgRXZlbnQgdG8gbm90IHByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIHRoaXMuc3ViTWVudS5oYW5kbGVLZXlQcmVzcyA9IHRoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3ViTWVudUtleVByZXNzSGFuZGxlciA9IHRoaXMub25TdWJNZW51S2V5UHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN1Ym1lbnVDbGlja0hhbmRsZXIgPSB0aGlzLm9uU3VibWVudUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlciA9IHRoaXMub25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlQcmVzcyhldmVudCl7XHJcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMiB8fCBldmVudC53aGljaCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7IC8vIGVzYyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Yk1lbnVLZXlQcmVzcyhldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQud2hpY2ggPT09IDEzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL2V2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU3VibWVudUNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHsgLy8gZXNjIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWVudUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtYmFjay1idXR0b24nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRNYWluTWVudSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUbyB1cGRhdGUgdGhlIHN1YiBtZW51IHZhbHVlIG9uIGNsaWNrLCBzZXRUaW1lb3V0IGlzIG5lZWRlZCBiZWNhdXNlXHJcbiAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHZhbHVlIGlzIG5vdCBpbnN0YW50XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50KTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICBjb25zdCBlbCA9IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtbWVudS1pdGVtJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kU3ViTWVudUJ1dHRvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1zdWItbWVudS10aXRsZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVWYWx1ZUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51LXZhbHVlJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1Yk1lbnUuZWxfLmFwcGVuZENoaWxkKHRoaXMuc2V0dGluZ3NTdWJNZW51VmFsdWVFbF8pO1xyXG4gICAgICAgIHRoaXMuc3ViTWVudS5yZW1vdmVDbGFzcyhcInZqcy1jb250cm9sXCIpO1xyXG4gICAgICAgIHRoaXMuc3ViTWVudS5hZGRDbGFzcyhcInZqcy1tZW51LWl0ZW1cIik7XHJcbiAgICAgICAgdGhpcy5lbF8gPSB0aGlzLnN1Yk1lbnUuZWxfO1xyXG4gICAgICAgIHRoaXMuZWxfLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5vbihbJ3RhcCcsICdjbGljayddLCB0aGlzLmhhbmRsZUNsaWNrKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlS2V5UHJlc3MoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LndoaWNoID09IDkpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlci5oYW5kbGVLZXlQcmVzcyhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVudVRvTG9hZCA9ICdzdWJtZW51JztcclxuICAgICAgICAvLyBSZW1vdmUgb3BlbiBjbGFzcyB0byBlbnN1cmUgb25seSB0aGUgb3BlbiBzdWJtZW51IGdldHMgdGhpcyBjbGFzc1xyXG4gICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcblxyXG4gICAgICAgIHN1cGVyLmhhbmRsZUNsaWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbk1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgLy8gV2V0aGVyIHRvIGFkZCBvciByZW1vdmUgdmpzLWhpZGRlbiBjbGFzcyBvbiB0aGUgc2V0dGluZ3NTdWJNZW51RWwgZWxlbWVudFxyXG4gICAgICAgIGlmICh2aWRlb2pzLmhhc0NsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBhbmltYXRpb24gbm90IHBsYXllZCB3aXRob3V0IHRpbWVvdXRcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8uc3R5bGUubWFyZ2luUmlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLnNldERpYWxvZ1NpemUodGhpcy5zaXplKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fWzBdLmVsXy5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlckNoaWxkO1xyXG4gICAgICAgIGxldCBoZWFkZXJDaGlsZEluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGJhY2tCdXR0b247XHJcbiAgICAgICAgbGV0IHN1Yk1lbnVDaGlsZHJlbiA9IHRoaXMuc3ViTWVudS5tZW51LmNoaWxkcmVuXztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yk1lbnVDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihzdWJNZW51Q2hpbGRyZW5baV0uaGFzQ2xhc3MoXCJhbXAtbWVudS1oZWFkZXJcIikpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ2hpbGQgPSBzdWJNZW51Q2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoZWFkZXJDaGlsZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViTWVudS5tZW51LnJlbW92ZUNoaWxkKGhlYWRlckNoaWxkKTsvLy5jaGlsZHJlbl8uc3BsaWNlKGhlYWRlckNoaWxkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uID0gdGhpcy5zdWJNZW51Lm1lbnUuYWRkQ2hpbGQoJ01lbnVJdGVtJywge30sIDApO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmVsXy5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtYmFjay1idXR0b24tdGV4dFwiPicgKyB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShoZWFkZXJDaGlsZC5lbF8uaW5uZXJIVE1MKSkgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYmFja0J1dHRvbiA9IHRoaXMuc3ViTWVudS5tZW51LmFkZENoaWxkKCdNZW51SXRlbScsIHt9LCAwKTtcclxuICAgICAgICAgICAgYmFja0J1dHRvbi5lbF8uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPicgKyB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIkJhY2sgdG8gbWFpbiBtZW51XCIpKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgYmFja0J1dHRvbi5lbF8uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tCdXR0b24ubmFtZV8gPSAnQmFja0J1dHRvbic7XHJcbiAgICAgICAgYmFja0J1dHRvbi5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnQmFjayB0byBtYWluIG1lbnUnKSk7XHJcbiAgICAgICAgYmFja0J1dHRvbi5hZGRDbGFzcygndmpzLWJhY2stYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJlZml4ZWRFdmVudChlbGVtZW50LCB0eXBlLCBjYWxsYmFjaywgYWN0aW9uID0gJ2FkZEV2ZW50Jykge1xyXG4gICAgICAgIGxldCBwcmVmaXggPSBbJ3dlYmtpdCcsICdtb3onLCAnTVMnLCAnbycsICcnXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwcmVmaXgubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgaWYgKCFwcmVmaXhbcF0pIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdhZGRFdmVudCcpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihwcmVmaXhbcF0gKyB0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3JlbW92ZUV2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHByZWZpeFtwXSArIHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSAhPT0gJ21hcmdpbi1yaWdodCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVudVRvTG9hZCA9PT0gJ21haW5tZW51Jykge1xyXG4gICAgICAgICAgICAvLyBoaWRlIHN1Ym1lbnVcclxuICAgICAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgdG8gMFxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5zZXRNYXJnaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFpbk1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51VG9Mb2FkID0gJ21haW5tZW51JztcclxuICAgICAgICB0aGlzLm1haW5NZW51LnNob3coKTtcclxuICAgICAgICB0aGlzLm1haW5NZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cclxuICAgICAgICAvLyBiYWNrIGJ1dHRvbiB3aWxsIGFsd2F5cyB0YWtlIHlvdSB0byBtYWluIG1lbnUsIHNvIHNldCBkaWFsb2cgc2l6ZXNcclxuICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLnNldERpYWxvZ1NpemUoW3RoaXMubWFpbk1lbnUud2lkdGgsIHRoaXMubWFpbk1lbnUuaGVpZ2h0XSk7XHJcblxyXG4gICAgICAgIC8vIGFuaW1hdGlvbiBub3QgdHJpZ2dlcmVkIHdpdGhvdXQgdGltZW91dCAoc29tZSBhc3luYyBzdHVmZiA/IT8pXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFuaXRtYXRlIG1hcmdpbiBhbmQgb3BhY2l0eSBiZWZvcmUgaGlkaW5nIHRoZSBzdWJtZW51XHJcbiAgICAgICAgICAgIC8vIHRoaXMgdHJpZ2dlcnMgQ1NTIFRyYW5zaXRpb24gZXZlbnRcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVudS5lbF8uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVudS5mb2N1cygpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8uaW5uZXJIVE1MID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUodGhpcy5zdWJNZW51LmNvbnRyb2xUZXh0XyB8fCB0aGlzLnN1Yk1lbnUuYnV0dG9uVGV4dCkpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLmFwcGVuZENoaWxkKHRoaXMuc3ViTWVudS5tZW51LmVsXyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkRWwuYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja0J1dHRvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0gPSB0aGlzLnN1Yk1lbnU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyW3RoaXMuc3ViTWVudS5uYW1lKCldLnNldEluaXRpYWxWYWx1ZXMpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0uc2V0SW5pdGlhbFZhbHVlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdWJNZW51Lmhhc0NsYXNzKFwidmpzLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByZWZpeGVkIGV2ZW50IGxpc3RlbmVycyBmb3IgQ1NTIFRyYW5zaXRpb25FbmRcclxuICAgICAgICB0aGlzLlByZWZpeGVkRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLFxyXG4gICAgICAgICAgICAnVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgICdhZGRFdmVudCdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICogVXBkYXRlIHRoZSBzdWIgbWVudXNcclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAbWV0aG9kIHVwZGF0ZVxyXG4gICAgICAgICovXHJcbiAgICB1cGRhdGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc3ViTWVudSA9IHRoaXMuc3ViTWVudS5uYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fLmZvckVhY2goKHN1Yk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKHN1Yk1lbnVJdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViTWVudUl0ZW0uaGFzQ2xhc3MoJ3Zqcy1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfLmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoc3ViTWVudUl0ZW0ub3B0aW9uc18ubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zqcy1iYWNrLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ2xpY2tFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW4oKS5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSB8fCBpdGVtLmhhc0NsYXNzKCdhbXAtbm9uLWNsaWNrYWJsZS1lbGVtZW50JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLm9uKFsndGFwJywgJ2NsaWNrJ10sIHRoaXMuc3VibWVudUNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGl0ZW0ub24oJ2tleWRvd24nLCB0aGlzLnN1Yk1lbnVLZXlQcmVzc0hhbmRsZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2F2ZSBzaXplIG9mIHN1Ym1lbnVzIG9uIGZpcnN0IGluaXRcclxuICAgIC8vIGlmIG51bWJlciBvZiBzdWJtZW51IGl0ZW1zIGNoYW5nZSBkaW5hbWljYWxseSBtb3JlIGxvZ2ljIHdpbGwgYmUgbmVlZGVkXHJcbiAgICBnZXRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnJlbW92ZUNsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5nZXRDb21wb25lbnRTaXplKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfKTtcclxuICAgICAgICB0aGlzLnNldE1hcmdpbigpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmFkZENsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXJnaW4oKSB7XHJcbiAgICAgICAgbGV0IFt3aWR0aF0gPSB0aGlzLnNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm1hcmdpblJpZ2h0ID0gYC0ke3dpZHRofXB4YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAqIEhpZGUgdGhlIHN1YiBtZW51XHJcbiAgICAgICAgKi9cclxuICAgIGhpZGVTdWJNZW51KCkge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nIHNldHRpbmdzIGl0ZW0gdGhpcy5lbF8gPT09IG51bGxcclxuICAgICAgICBpZiAoIXRoaXMuZWxfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2aWRlb2pzLmhhc0NsYXNzKHRoaXMuZWxfLCAnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuTW9yZU9wdGlvbnNNZW51SXRlbS5wcm90b3R5cGUuY29udGVudEVsVHlwZSA9ICdidXR0b24nO1xyXG5cclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTW9yZU9wdGlvbnNNZW51SXRlbScsIE1vcmVPcHRpb25zTWVudUl0ZW0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMuc2Nzc1wiKTtcclxuXHJcbmNvbnN0IE1lbnUgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudScpO1xyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IENsaWNrYWJsZUNvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDbGlja2FibGVDb21wb25lbnQnKTtcclxuY29uc3QgTW9yZU9wdGlvbnNNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb3JlT3B0aW9uc01lbnVJdGVtJyk7XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc0J1dHRvbiBleHRlbmRzIENsaWNrYWJsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50ID0gcGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHRoaXMuYWRkQ2hpbGQoJ21vcmVPcHRpb25zRGlhbG9nJyk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dFbCA9IHRoaXMuZGlhbG9nLmVsXztcclxuICAgICAgICB0aGlzLm1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSB0aGlzLmRpYWxvZy5hZGRDaGlsZCgnc2V0dGluZ3NQYW5lbCcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZCA9IHRoaXMucGFuZWwuYWRkQ2hpbGQoJ3NldHRpbmdzUGFuZWxDaGlsZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtc2V0dGluZ3MnKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsaXplKCdTZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgaGFuZGxlcnNcclxuICAgICAgICB0aGlzLmFkZFNldHRpbmdzSXRlbUhhbmRsZXIgPSB0aGlzLm9uQWRkU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlU2V0dGluZ3NJdGVtSGFuZGxlciA9IHRoaXMub25EaXNwb3NlU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDbGlja0hhbmRsZXIgPSB0aGlzLm9uUGxheWVyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIgPSB0aGlzLm9uVXNlckluYWN0aXZlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3JlT3B0aW9uc0J1dHRvbiA9IHRoaXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJDbGljayhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nLmhhc0NsYXNzKCd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzcG9zZVNldHRpbmdzSXRlbShldmVudCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5tZW51LmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnJlbW92ZUNoaWxkKGNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tZW51LmdldENoaWxkKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnNfLmVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRTZXR0aW5nc0l0ZW0oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBsZXQgW2VudHJ5LCBvcHRpb25zXSA9IGRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTWVudUl0ZW0oZW50cnksIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJJbmFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQ29tcG9uZW50LnBhdXNlZCgpICYmICF0aGlzLmRpYWxvZy5oYXNDbGFzcygndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCdjbGljaycsIHRoaXMucGxheWVyQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignYWRkc2V0dGluZ3NpdGVtJywgdGhpcy5hZGRTZXR0aW5nc0l0ZW1IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignZGlzcG9zZXNldHRpbmdzaXRlbScsIHRoaXMuZGlzcG9zZVNldHRpbmdzSXRlbUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCd1c2VyaW5hY3RpdmUnLCB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtbW9yZS1vcHRpb25zLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICAgICAgLy90aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWFsb2cuaGFzQ2xhc3MoJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC53aGljaCA9PT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5oYW5kbGVLZXlQcmVzcyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtbm8tdG9vbHRpcCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZF8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1uby10b29sdGlwJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkXyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXNzQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucHJlc3NCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzSnVzdEJlZW5DbGlja2VkKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRTaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBudWxsO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDb3VsZCBiZSBjb21wb25lbnQgb3IganVzdCBET00gZWxlbWVudFxyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5lbF8ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZWxfLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIGtlZXAgd2lkdGgvaGVpZ2h0IGFzIHByb3BlcnRpZXMgZm9yIGRpcmVjdCB1c2VcclxuICAgICAgICAgICAgZWxlbWVudC53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBlbGVtZW50LmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaWFsb2dTaXplKFt3aWR0aCwgaGVpZ2h0XSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gNDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IHRoaXMucGxheWVyQ29tcG9uZW50LmVsXy5vZmZzZXRIZWlnaHQgLSBvZmZzZXQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aCArPSAxNztcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWwuZWxfLnN0eWxlLm1heEhlaWdodCAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ0VsLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRWwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICBpZihoZWlnaHQgPiAwKXtcclxuICAgICAgICAgICAgbGV0IHByb2dyZXNzQmFyID0gdGhpcy5wbGF5ZXJDb21wb25lbnQuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuZWxfO1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ0VsLnN0eWxlLnJpZ2h0ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgLSBcclxuICAgICAgICAgICAgICAgIChwcm9ncmVzc0Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCAtIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUocHJvZ3Jlc3NCYXIpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcy5wbGF5ZXIoKSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENsYXNzKCd2anMtbWFpbi1tZW51Jyk7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9wdGlvbnNfLmVudHJpZXM7XHJcblxyXG4gICAgICAgIGlmKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbENoaWxkLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XHJcbiAgICAgICAgICAgIGxldCBzdWJJdGVtID0gdGhpcy5hZGRNZW51SXRlbShlbnRyeSwgdGhpcy5vcHRpb25zXyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZC5hZGRDaGlsZCh0aGlzLm1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1lbnVJdGVtKGVudHJ5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3Qgb3BlblN1Yk1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5lbF8sICdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuZWxfLCAnb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gZW50cnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlbnRyeS5zbGljZSgxKTtcclxuICAgICAgICBsZXQgbW9yZU9wdGlvbnNNZW51SXRlbSA9IG5ldyBNb3JlT3B0aW9uc01lbnVJdGVtKHRoaXMucGxheWVyKCksIG9wdGlvbnMsIGVudHJ5LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENoaWxkKG1vcmVPcHRpb25zTWVudUl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBIaWRlIGNoaWxkcmVuIHRvIGF2b2lkIHN1YiBtZW51cyBzdGFja2luZyBvbiB0b3Agb2YgZWFjaCBvdGhlclxyXG4gICAgICAgIC8vIG9yIGhhdmluZyBtdWx0aXBsZSBtZW51cyBvcGVuXHJcbiAgICAgICAgbW9yZU9wdGlvbnNNZW51SXRlbS5vbignY2xpY2snLCB2aWRlb2pzLmJpbmQodGhpcywgdGhpcy5oaWRlQ2hpbGRyZW4pKTtcclxuXHJcbiAgICAgICAgLy8gV2V0aGVyIHRvIGFkZCBvciByZW1vdmUgc2VsZWN0ZWQgY2xhc3Mgb24gdGhlIHNldHRpbmdzIHN1YiBtZW51IGVsZW1lbnRcclxuICAgICAgICBtb3JlT3B0aW9uc01lbnVJdGVtLm9uKCdjbGljaycsIG9wZW5TdWJNZW51KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vcmVPcHRpb25zTWVudUl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDaGlsZHJlbigpIHtcclxuICAgICAgICB0aGlzLm1lbnUuY2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uKG1lbnVDaGlsZCkge1xyXG4gICAgICAgICAgICBtZW51Q2hpbGQucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgYWxsIHRoZSBzdWIgbWVudXNcclxuICAgICAqL1xyXG4gICAgaGlkZUNoaWxkcmVuKCkge1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5oaWRlU3ViTWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXBhbmVsJyxcclxuICAgICAgICAgICAgaW5uZXJIVE1MOiAnJyxcclxuICAgICAgICAgICAgdGFiSW5kZXg6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzUGFuZWxDaGlsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3MtcGFuZWwtY2hpbGQgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTW9yZU9wdGlvbnNEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuaWRfO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0xhYmVsSWQgPSAnVFRzZXR0aW5nc01vcmVPcHRpb25zRGlhbG9nTGFiZWwtJyArIHVuaXF1ZUlkO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0Rlc2NyaXB0aW9uSWQgPSAnVFRNb3JlT3B0aW9uc0RpYWxvZ0Rlc2NyaXB0aW9uLScgKyB1bmlxdWVJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tb3Jlb3B0aW9ucy1kaWFsb2cgdmpzLW1vZGFsLW92ZXJsYXknLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBkaWFsb2dMYWJlbElkLFxyXG4gICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGRpYWxvZ0Rlc2NyaXB0aW9uSWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk1vcmVPcHRpb25zQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnU2V0dGluZ3MnO1xyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNb3JlT3B0aW9uc0J1dHRvbicsIE1vcmVPcHRpb25zQnV0dG9uKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNb3JlT3B0aW9uc0RpYWxvZycsIE1vcmVPcHRpb25zRGlhbG9nKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc1BhbmVsJywgU2V0dGluZ3NQYW5lbCk7XHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2V0dGluZ3NQYW5lbENoaWxkJywgU2V0dGluZ3NQYW5lbENoaWxkKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCJjb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL0NhcHRpb25Ub2dnbGUuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIENhcHRpb25Ub2dnbGUgZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ2NhcHRpb25Ub2dnbGUnO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHJhY2tMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5jYXB0aW9uVG9nZ2xlID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzW2ldWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnIHx8IHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0xpc3QucHVzaCh0cmFja3NbaV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmFja0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRoaXMudHJhY2tMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtY2FwdGlvbi10b2dnbGUgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvblByZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdHJhY2tUb1NlbGVjdFsnbW9kZSddID0gJ3Nob3dpbmcnO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrID0gdHJhY2tUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyXy5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhY2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrTGlzdFtpXVsnbW9kZSddID0gJ2Rpc2FibGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl8ubW9yZU9wdGlvbnNCdXR0b24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0cmFja1RvU2VsZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja3NbaV1bJ21vZGUnXSA9PT0gJ3Nob3dpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUcmFjayA9IHRyYWNrc1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFja1RvU2VsZWN0KHRyYWNrcykge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja1RvU2VsZWN0ID0gdHJhY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0cmFja1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRyYWNrVG9TZWxlY3QgPSB0cmFja3NbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cmFja1RvU2VsZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cmluZ3ModHJhY2ssIGNsaWNrZWQpIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycgJiYgIWNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0cmFja1sna2luZCddID09PSAnY2FwdGlvbnMnICYmIGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdDYXB0aW9ucyBvZmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0cmFja1sna2luZCddID09PSAnc3VidGl0bGVzJyAmJiAhY2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ1N1YnRpdGxlcyBvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnICYmIGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdTdWJ0aXRsZXMgb2ZmJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250cm9sVGV4dCh0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSh0ZXh0KSkpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUodGV4dCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uVG9nZ2xlLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnU3VidGl0bGVzL0NDJztcclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblRvZ2dsZScsIENhcHRpb25Ub2dnbGUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk0NlxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwidmFyIE1vdXNlVGltZURpc3BsYXkgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW91c2VUaW1lRGlzcGxheScpO1xyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcblxyXG5yZXF1aXJlKCcuL01vdXNlVGltZVRvb2x0aXAuc2NzcycpO1xyXG5cclxuY2xhc3MgTW91c2VUaW1lVG9vbHRpcCBleHRlbmRzIE1vdXNlVGltZURpc3BsYXkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy50b29sdGlwU3BhbiA9IHZpZGVvanMuY3JlYXRlRWwoJ3NwYW4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FtcC10aW1lLXRvb2x0aXAtdGV4dCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwU3Bhbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG5ld1RpbWUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKG5ld1RpbWUsIHBvc2l0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy50b29sdGlwU3Bhbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTcGFuLmlubmVyVGV4dCA9IHRoaXMuZWxfLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW50LXRpbWUnKTtcclxuICAgICAgICAgICAgdGhpcy50b29sdGlwU3Bhbi5pbm5lckh0bWwgPSB0aGlzLmVsXy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVudC10aW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vdXNlVGltZVRvb2x0aXAnLCBNb3VzZVRpbWVUb29sdGlwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvTW91c2VUaW1lVG9vbHRpcC9Nb3VzZVRpbWVUb29sdGlwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5NDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vIENoYW5naW5nIGhvdmVyIHRvIGNsaWNrcyBvbiBjb250cm9sIGJ1dHRvbnMuXHJcbnZhciBNZW51QnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVCdXR0b24nKTtcclxudmFyIE1vdXNlVGltZURpc3BsYXkgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW91c2VUaW1lRGlzcGxheScpO1xyXG5cclxuTWVudUJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvblByZXNzZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVCdXR0b24ucHJvdG90eXBlLmhhbmRsZU1vdXNlT3ZlciA9IGZ1bmN0aW9uICgpIHsgfVxyXG5NZW51QnV0dG9uLnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkgeyB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9hbXBPdmVycmlkZXMuanNcbiAqKi8iLCJhbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQ2FwdGlvbnMgb2ZmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkNhcHRpb25zIG9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkNhcHRpb25zIC8gU3VidGl0bGVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiUmV2ZXJzZSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlJldmVyc2Ugc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJMYXJnZVwiXSA9IFwiTGFyZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGl1bVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlNtYWxsXCJdID0gXCJTbWFsbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJGdWxsIHNjcmVlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkV4aXQgZnVsbCBzY3JlZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJPZmZcIl0gPSBcIk9mZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJQbGF5YmFjayBzcGVlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlNldHRpbmdzXCJdID0gXCJTZXR0aW5nc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidGl0bGVzIG9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0bGVzIG9mZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGhlYXRlciBtb2RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkV4aXQgdGhlYXRlciBtb2RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW8gcXVhbGl0eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU2VhcmNoXCJdID0gXCJTZWFyY2hcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJBdXRvXCJdID0gXCJBdXRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiT25cIl0gPSBcIk9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXh0IGNvbG9yOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGV4dCBzaXplOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiQmFjayB0byBtYWluIG1lbnVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi2LTZgdin2YHZitipINin2YTYrtmE2YHZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLYpdmK2YLYp9mBINiq2LTYutmK2YQg2KfZhNiq2LPZhdmK2KfYqiDYp9mE2KrZiNi22YrYrdmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi2KrYtNi62YrZhCDYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqSAvINin2YTYudmG2KfZiNmK2YYg2KfZhNmB2LHYudmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi2KXYudiv2KfYr9in2Kog2KfZhNiq2LPZhdmK2KfYqiDYp9mE2KrZiNi22YrYrdmK2KkgLyDYp9mE2LnZhtin2YjZitmGINin2YTZgdix2LnZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi2LnZg9izINin2YTYqNmG2Yog2KfZhNiv2KfZg9mGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi2LnZg9izINin2YTZgtmK2KfYs9mKXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU2VwaWFcIl0gPSBcItin2YTYqNmG2Yog2KfZhNiv2KfZg9mGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU3RhbmRhcmRcIl0gPSBcItmC2YrYp9iz2YpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJMYXJnZVwiXSA9IFwi2YPYqNmK2LFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJNZWRpdW1cIl0gPSBcItmF2KrZiNiz2LdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTbWFsbFwiXSA9IFwi2LXYutmK2LFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi2YXZhNihINin2YTYtNin2LTYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItil2YbZh9in2KEg2LnYsdi2INmF2YTYoSDYp9mE2LTYp9i02KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJPZmZcIl0gPSBcIuKAj+KAj9il2YrZgtin2YEg2KfZhNiq2LTYutmK2YRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi2LPYsdi52Kkg2KfZhNiq2LTYutmK2YRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi2KfZhNix2KzZiNi5INil2YTZiSDYp9mE2KXYudiv2KfYr9in2Kog2KfZhNin2YHYqtix2KfYttmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTZXR0aW5nc1wiXSA9IFwi2KXYudiv2KfYr9in2KpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItiq2LTYutmK2YQg2KfZhNi52YbYp9mI2YrZhiDYp9mE2YHYsdi52YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItil2YrZgtin2YEg2KrYtNi62YrZhCDYp9mE2LnZhtin2YjZitmGINin2YTZgdix2LnZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLZiNi22Lkg2KfZhNmF2LPYsditXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItil2YbZh9in2KEg2LnYsdi2INmI2LbYuSDYp9mE2YXYs9ix2K1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLYrNmI2K/YqSDZhdmC2LfYuSDYp9mE2YHZitiv2YrZiFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwi2LnYsdi2INmB2YogTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlNlYXJjaFwiXSA9IFwi2KjYrdirXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQXV0b1wiXSA9IFwi2KrZhNmC2KfYptmKXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQ0NcIl0gPSBcItmG2LPYrtipINil2YTZiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIk9uXCJdID0gXCLigI/igI/Yqti02LrZitmEXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLZhNmI2YYg2KfZhNmG2LU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLYrdis2YUg2KfZhNmG2LU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLYp9mE2LnZiNiv2Kkg2KXZhNmJINin2YTZgtin2KbZhdipINin2YTYsdim2YrYs9mK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfRgNCw0YfQvdC+0YHRgiDQvdCwINGE0L7QvdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQndCw0LTQv9C40YHQuCDQuNC30LrQu9GO0YfQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0J3QsNC00L/QuNGB0Lgg0LLQutC70Y7Rh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLQndCw0LTQv9C40YHQuC/RgdGD0LHRgtC40YLRgNC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcItCd0LDRgdGC0YDQvtC50LrQuCDQvdCwINC90LDQtNC/0LjRgdC4L9GB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQntCx0YDRitGJ0LDQvdC1INC90LAg0YHQtdC/0LjRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCe0LHRgNGK0YnQsNC90LUg0L3QsCDRgdGC0LDQvdC00LDRgNGC0L3QuCDRhtCy0LXRgtC+0LLQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiTGFyZ2VcIl0gPSBcItCT0L7Qu9GP0LzQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIk1lZGl1bVwiXSA9IFwi0KHRgNC10LTQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU21hbGxcIl0gPSBcItCc0LDQu9C60L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi0KbRj9C7INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQmNC30YXQvtC0INC+0YIg0YbRj9C7INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJPZmZcIl0gPSBcItCY0LfQutC70Y7Rh9C10L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQodC60L7RgNC+0YHRgiDQvdCwINCy0YrQt9C/0YDQvtC40LfQstC10LbQtNCw0L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQktGA0YrRidCw0L3QtSDQtNC+INC90LDRgdGC0YDQvtC50LrQuCDQv9C+INC/0L7QtNGA0LDQt9Cx0LjRgNCw0L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlNldHRpbmdzXCJdID0gXCLQndCw0YHRgtGA0L7QudC60LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCh0YPQsdGC0LjRgtGA0Lgg0LLQutC70Y7Rh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0Lgg0LjQt9C60LvRjtGH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQoNC10LbQuNC8IOKAntC60LjQvdC+4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCY0LfRhdC+0LQg0L7RgiDRgNC10LbQuNC8IOKAntC60LjQvdC+4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0JrQsNGH0LXRgdGC0LLQviDQvdCwINCy0LjQtNC10L7QutC70LjQv9CwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9GA0LXQs9C70LXQtCDQsiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU2VhcmNoXCJdID0gXCLQotGK0YDRgdC10L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkF1dG9cIl0gPSBcItCQ0LLRgtC+0LzQsNGC0LjRh9C90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDQ1wiXSA9IFwi0K/QmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIk9uXCJdID0gXCLQktC60LsuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQptCy0Y/RgiDQvdCwINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCg0LDQt9C80LXRgCDQvdCwINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCd0LDQt9Cw0LQg0LrRitC8INCz0LvQsNCy0L3QvtGC0L4g0LzQtdC90Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXLDqG5jaWEgZGVsIGZvbnNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlN1YnTDrXRvbHMgZGVzYWN0aXZhdHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU3VidMOtdG9scyBhY3RpdmF0c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJTdWJ0w610b2xzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7MgZGVscyBzdWJ0w610b2xzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU8OocGlhIGludmVyc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkVzdMOgbmRhcmQgaW52ZXJzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU2VwaWFcIl0gPSBcIlPDqHBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3TDoG5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiTGFyZ2VcIl0gPSBcIkdyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJNZWRpdW1cIl0gPSBcIk1pdGrDoFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlNtYWxsXCJdID0gXCJQZXRpdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU3VydCBkZSBsYSBwYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiT2ZmXCJdID0gXCJEZXNhY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaXRhdCBkZSByZXByb2R1Y2Npw7NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVG9ybmEgYSBsYSBjb25maWd1cmFjacOzIHBlciBkZWZlY3RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnTDrXRvbHMgYWN0aXZhdHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610b2xzIGRlc2FjdGl2YXRzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RlIGRlIHBhbnRhbGxhIHNlbmNlcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiU3VydCBkZWwgbW9kZSBkZSBwYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGl0YXQgZGUgdsOtZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXN1YWxpdHphLWhvIGFsIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTZWFyY2hcIl0gPSBcIkNlcmNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQXV0b1wiXSA9IFwiQXV0b23DoHRpY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNDXCJdID0gXCJBL0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJPblwiXSA9IFwiQWN0aXZhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29sb3IgZGVsIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJNaWRhIGRlbCB0ZXh0OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVG9ybmEgYWwgbWVuw7ogcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByxa9obGVkbm9zdCBwb3phZMOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJQb3Bpc2t5IHZ5cG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiUG9waXNreSB6YXBudXR5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlBvcGlza3kgbmVibyB0aXR1bGt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuw60gcHJvIHBvcGlza3kgbmVibyB0aXR1bGt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiT2Jyw6F0aXQgc8OpcGlvdsO9IHTDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPYnLDoXRpdCBzdGFuZGFyZG7DrSB0w7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpb3bDvSB0w7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiTGFyZ2VcIl0gPSBcIlZlbGvDvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIk1lZGl1bVwiXSA9IFwiU3TFmWVkbsOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU21hbGxcIl0gPSBcIk1hbMO9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkNlbMOhIG9icmF6b3ZrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlVrb27EjWl0IHJlxb5pbSBjZWzDqSBvYnJhem92a3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJPZmZcIl0gPSBcIlZ5cG51dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiUnljaGxvc3QgcMWZZWhyw6F2w6Fuw61cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVnLDoXRpdCB2w71jaG96w60gbmFzdGF2ZW7DrVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlNldHRpbmdzXCJdID0gXCJOYXN0YXZlbsOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJUaXR1bGt5IHphcG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlJlxb5pbSBjZWzDqSBvYnJhem92a3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVWtvbsSNaXQgcmXFvmltIGNlbMOpIG9icmF6b3ZreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkt2YWxpdGEgdmlkZWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlpvYnJheml0IHZlIHNsdcW+YsSbIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTZWFyY2hcIl0gPSBcIkhsZWRhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpY2t5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ0NcIl0gPSBcIktvcGllXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiT25cIl0gPSBcIlphcG51dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJhcnZhIHRleHR1OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVmVsaWtvc3QgdGV4dHU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJacMSbdCBuYSBobGF2bsOtIG5hYsOtZGt1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkJhZ2dydW5kc2dlbm5lbXNpZ3RpZ2hlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVW5kZXJ0ZWtzdGVyIGZyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJVbmRlcnRla3N0ZXIgdGlsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlVuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbmRzdGlsbGluZ2VyIGZvciB1bmRlcnRla3N0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJUaWxiYWdlZsO4ciBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlRpbGJhZ2Vmw7hyIHRpbCBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiTWVkaXVtXCJdID0gXCJNZWxsZW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJTbWFsbFwiXSA9IFwiTGlsbGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiRnVsZCBza8Omcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJBZnNsdXQgZnVsZCBza8Omcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJPZmZcIl0gPSBcIkZyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBZnNwaWxuaW5nc2hhc3RpZ2hlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHZW5kYW4gc3RhbmRhcmRpbmRzdGlsbGluZ2VybmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5kc3RpbGxpbmdlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiVW5kZXJ0ZWtzdGVyIHRpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlVuZGVydGVrc3RlciBmcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIkJpb2dyYWZ0aWxzdGFuZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJBZnNsdXQgYmlvZ3JhZnRpbHN0YW5kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW9rdmFsaXRldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmlzIGkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNlYXJjaFwiXSA9IFwiU8O4Z1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpc2tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJDQ1wiXSA9IFwiQ2NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJPblwiXSA9IFwiVGlsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGZhcnZlOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdHN0w7hycmVsc2U6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlRpbGJhZ2UgdGlsIGhvdmVkbWVudWVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkhpbnRlcmdydW5kdHJhbnNwYXJlbnpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlIGRlYWt0aXZpZXJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJVbnRlcnRpdGVsIGbDvHIgSMO2cmdlc2Now6RkaWd0ZSBha3RpdmllcmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlL1VudGVydGl0ZWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiRWluc3RlbGx1bmdlbiBmw7xyIFVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlL1VudGVydGl0ZWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJJbnZlcnRpZXJ0IFNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiSW52ZXJ0aWVydCBTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkxhcmdlXCJdID0gXCJHcm/Dn1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIk1lZGl1bVwiXSA9IFwiTWl0dGVsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU21hbGxcIl0gPSBcIktsZWluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlZvbGxiaWxkbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsYmlsZHNjaGlybSBiZWVuZGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiT2ZmXCJdID0gXCJBdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiV2llZGVyZ2FiZWdlc2Nod2luZGlna2VpdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJTdGFuZGFyZGVpbnN0ZWxsdW5nZW4gd2llZGVyaGVyc3RlbGxlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlNldHRpbmdzXCJdID0gXCJFaW5zdGVsbHVuZ2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJVbnRlcnRpdGVsIGFrdGl2aWVyZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJVbnRlcnRpdGVsIGRlYWt0aXZpZXJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiS2lub21vZHVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktpbm9tb2R1cyBiZWVuZGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW9xdWFsaXTDpHRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkluIE1pY3Jvc29mdCBTdHJlYW0gYW56ZWlnZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTZWFyY2hcIl0gPSBcIlN1Y2hlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpc2NoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQ0NcIl0gPSBcIkNjXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiT25cIl0gPSBcIkVpblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGV4dGZhcmJlOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGV4dGdyw7bDn2U6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJadXLDvGNrIHp1bSBIYXVwdG1lbsO8XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIs6UzrnOsc+GzqzOvc61zrnOsSDPhs+Mzr3PhM6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIs6Rz4DOtc69zrXPgc6zzr/PgM6/zq/Ot8+DzrcgzrvOtc62zrHOvc+Ez47OvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLOlc69zrXPgc6zzr/PgM6/zq/Ot8+DzrcgzrvOtc62zrHOvc+Ez47OvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLOm861zrbOrM69z4TOtc+CL8+Fz4DPjM+EzrnPhM67zr/OuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLOoc+FzrjOvM6vz4POtc65z4IgzrvOtc62zrHOvc+Ez47OvS/Phc+Az4zPhM65z4TOu8+Jzr1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLOo86tz4DOuc6xIM68zrUgzrHOvc+EzrnPg8+Ez4HOv8+Gzq5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLOpM+Fz4DOuc66zq4gzrHOvc+EzrnPg8+Ez4HOv8+Gzq5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZXBpYVwiXSA9IFwizqPOrc+AzrnOsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlN0YW5kYXJkXCJdID0gXCLOpM+Fz4DOuc66z4xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJMYXJnZVwiXSA9IFwizpzOtc6zzqzOu86/XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiTWVkaXVtXCJdID0gXCLOnM61z4POsc6vzrFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTbWFsbFwiXSA9IFwizpzOuc66z4HPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLOoM67zq7Pgc63z4Igzr/OuM+Mzr3Ot1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIs6Izr7Ov860zr/PgiDOsc+Az4wgz4TOt869IM+AzrvOrs+Bzrcgzr/OuM+Mzr3Ot1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIk9mZlwiXSA9IFwizpHOvc61zr3Otc+BzrPPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLOpM6xz4fPjc+EzrfPhM6xIM6xzr3Osc+AzrHPgc6xzrPPic6zzq7PglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLOlc+AzrHOvc6xz4bOv8+Bzqwgz4PPhM65z4Igz4DPgc6/zrXPgM65zrvOtc6zzrzOrc69zrXPgiDPgc+FzrjOvM6vz4POtc65z4JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZXR0aW5nc1wiXSA9IFwizqHPhc64zrzOr8+DzrXOuc+CXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLOlc69zrXPgc6zzr/PgM6/zq/Ot8+Dzrcgz4XPgM+Mz4TOuc+EzrvPic69XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwizpHPgM61zr3Otc+BzrPOv8+Azr/Or863z4POtyDPhc+Az4zPhM65z4TOu8+Jzr1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIs6bzrXOuc+Ezr/Phc+BzrPOr86xIM66zrnOvc63zrzOsc+Ezr/Os8+BzqzPhs6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwizojOvs6/zrTOv8+CIM6xz4DPjCDPhM63IM67zrXOuc+Ezr/Phc+BzrPOr86xIM66zrnOvc63zrzOsc+Ezr/Os8+BzqzPhs6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLOoM6/zrnPjM+EzrfPhM6xIM6yzq/Ovc+EzrXOv1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwizqDPgc6/zrLOv867zq4gz4PPhM6/IE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZWFyY2hcIl0gPSBcIs6Rzr3Osc62zq7PhM63z4POt1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkF1dG9cIl0gPSBcIs6Rz4XPhM+MzrzOsc+Ezr9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJDQ1wiXSA9IFwizprOv865zr0uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiT25cIl0gPSBcIs6Vzr3Otc+BzrPPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwizqfPgc+OzrzOsSDOus61zrnOvM6tzr3Ov8+FOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLOnM6tzrPOtc64zr/PgiDOus61zrnOvM6tzr3Ov8+FOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLOlc+AzrnPg8+Ez4HOv8+Gzq4gz4PPhM6/IM66z43Pgc65zr8gzrzOtc69zr/PjVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuY2lhIGVuIHNlZ3VuZG8gcGxhbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkRlc2FjdGl2YXIgdMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQWN0aXZhciB0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUw610dWxvcy9zdWJ0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJDb25maWd1cmFjacOzbiBkZSB0w610dWxvcy9zdWJ0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkludmVydGlyIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiSW52ZXJ0aXIgZXN0w6FuZGFyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIkVzdMOhbmRhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU21hbGxcIl0gPSBcIlBlcXVlw7FvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2FsaXIgZGUgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJPZmZcIl0gPSBcIkRlc2FjdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZCBkZSByZXByb2R1Y2Npw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGlyIGEgbGEgY29uZmlndXJhY2nDs24gcHJlZGV0ZXJtaW5hZGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkFjdGl2YXIgc3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJEZXNhY3RpdmFyIHN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RvIGRlIHBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlNhbGlyIGRlbCBtb2RvIGRlIHBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQ2FsaWRhZCBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlciBlbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU2VhcmNoXCJdID0gXCJCdXNjYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJBdXRvXCJdID0gXCJBdXRvbcOhdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIk9uXCJdID0gXCJBY3RpdmFkb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29sb3IgZGVsIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGFtYcOxbyBkZWwgdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWb2x2ZXIgYWwgbWVuw7ogcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRhdXN0YSBsw6RiaXBhaXN0dnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMw7xsaXRhIHBlYWxkaXNlZCB2w6RsamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTMO8bGl0YSBwZWFsZGlzZWQgc2lzc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiUGVhbGRpc2VkL3N1YnRpaXRyaWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUGVhbGRpc3RlL3N1YnRpaXRyaXRlIHPDpHR0ZWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJUw7xoaXN0YSBzZWVwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJUw7xoaXN0YSBzdGFuZGFyZG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2VwaWFcIl0gPSBcIlNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkxhcmdlXCJdID0gXCJTdXVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiTWVkaXVtXCJdID0gXCJLZXNrbWluZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlNtYWxsXCJdID0gXCJWw6Rpa2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiVMOkaXNla3JhYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWw6RsanUgdMOkaXNla3JhYW5pc3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJPZmZcIl0gPSBcIlbDpGxqYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVGFhc2VzaXR1c2Uga2lpcnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkVubmlzdGEgdmFpa2Vzw6R0dGVkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIlPDpHR0ZWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkzDvGxpdGEgc3VidGlpdHJpZCBzaXNzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkzDvGxpdGEgc3VidGlpdHJpZCB2w6RsamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlRlYXRyaXJlxb5paW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVsOkbGp1IHRlYXRyaXJlxb5paW1pc3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBrdmFsaXRlZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkt1dmEgTWljcm9zb2Z0IFN0cmVhbWlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2VhcmNoXCJdID0gXCJPdHNpbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWFhdG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQ0NcIl0gPSBcIktvb3BpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIk9uXCJdID0gXCJTZWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGkgdsOkcnY6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdGkgc3V1cnVzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGFnYXNpIHBlYW1lbsO8w7xzc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiQXR6ZWtvIHBsYW5vYXJlbiBnYXJkZW50YXN1bmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkVwaWdyYWZlYWsgZGVzYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJFcGlncmFmZWFrIGFrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiRXBpZ3JhZmVhay9BenBpdGl0dWx1YWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiRXBpZ3JhZmVlbiBlZG8gYXpwaXRpdHVsdWVuIGV6YXJwZW5ha1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlNlcGlhLXRvbnVhIGFsZGVyYW50emlrYXR1YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkVzdGFuZGFyIGFsZGVyYW50emlrYXR1YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYS10b251YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3RhbmRhcnJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiTGFyZ2VcIl0gPSBcIkhhbmRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIk1lZGl1bVwiXSA9IFwiRXJ0YWluYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlNtYWxsXCJdID0gXCJUeGlraWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGFudGFpbGEgb3NvYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIklydGVuIHBhbnRhaWxhIG9zb2tvIG1vZHV0aWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJPZmZcIl0gPSBcIkRlc2FrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiRXJyZXByb2R1a3ppb2FyZW4gYWJpYWR1cmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiTGVoZW5lcmF0dSBlemFycGVuIGxlaGVuZXRzaWFrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkV6YXJwZW5ha1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiQXpwaXRpdHVsdWFrIGFrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJBenBpdGl0dWx1YWsgZGVzYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiWmluZW1hIG1vZHVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIklydGVuIHppbmVtYSBtb2R1dGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQmlkZW8ta2FsaXRhdGVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJJa3VzaSBNaWNyb3NvZnQgU3RyZWFtLWVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU2VhcmNoXCJdID0gXCJCaWxhdHVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWtvYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIk9uXCJdID0gXCJBa3RpYmF0dXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXN0dWFyZW4ga29sb3JlYTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRlc3R1YXJlbiB0YW1haW5hOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiSXR6dWxpIG1lbnUgbmFndXNpcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVGF1c3RhbiBsw6RwaW7DpGt5dnl5c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGVrc3RpdHlzIGVpIGvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlRla3N0aXR5cyBrw6R5dMO2c3PDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUZWtzdGl0eXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGVrc3RpdHlzYXNldHVrc2V0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiS8Okw6RudGVpbmVuIHNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkvDpMOkbnRlaW5lbiB2YWtpb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlNlcGlhXCJdID0gXCJTZWVwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTdGFuZGFyZFwiXSA9IFwiTm9ybWFhbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJMYXJnZVwiXSA9IFwiU3V1cmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJNZWRpdW1cIl0gPSBcIk5vcm1hYWxpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU21hbGxcIl0gPSBcIlBpZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIktva28gbsOkeXR0w7ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJQb2lzdHUga29rbyBuw6R5dMO2biB0aWxhc3RhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiT2ZmXCJdID0gXCJFaSBrw6R5dMO2c3PDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJUb2lzdG9ub3BldXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUGFsYXV0YSBvbGV0dXNhc2V0dWtzZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQXNldHVrc2V0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJUZWtzdGl0eXMga8OkeXTDtnNzw6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUZWtzdGl0eXMgcG9pcyBrw6R5dMO2c3TDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGVhdHRlcml0aWxhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlBvaXN0dSB0ZWF0dGVyaXRpbGFzdGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb24gbGFhdHVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIk7DpHl0w6QgTWljcm9zb2Z0IFN0cmVhbWlzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU2VhcmNoXCJdID0gXCJIYWVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWFhdHRpbmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ0NcIl0gPSBcIktvcGlvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiT25cIl0gPSBcIkvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGluIHbDpHJpOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RpbiBrb2tvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGFrYWlzaW4gcMOkw6R2YWxpa2tvb25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXJlbmNlIGRlIGwnYXJyacOocmUtcGxhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTMOpZ2VuZGVzIGTDqXNhY3RpdsOpZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTMOpZ2VuZGVzIGFjdGl2w6llc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMw6lnZW5kZXMvc291cy10aXRyZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUGFyYW3DqHRyZXMgZGVzIGzDqWdlbmRlcy9zb3VzLXRpdHJlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkFubnVsZXIgbGUgdG9uIHPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlLDqXRhYmxpciBsYSBjb3VsZXVyIHN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIk1lZGl1bVwiXSA9IFwiTW95ZW5uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlNtYWxsXCJdID0gXCJQZXRpdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGxlaW4gw6ljcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiUXVpdHRlciBsZSBwbGVpbiDDqWNyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJPZmZcIl0gPSBcIkTDqXNhY3RpdsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZpdGVzc2UgZGUgbGVjdHVyZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSw6l0YWJsaXIgbGVzIHBhcmFtw6h0cmVzIHBhciBkw6lmYXV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBhcmFtw6h0cmVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTb3VzLXRpdHJlcyBhY3RpdsOpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlNvdXMtdGl0cmVzIGTDqXNhY3RpdsOpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kZSBjaW7DqW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlF1aXR0ZXIgbGUgbW9kZSBjaW7DqW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGl0w6kgdmlkw6lvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJBZmZpY2hlciBkYW5zIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJTZWFyY2hcIl0gPSBcIlJlY2hlcmNoZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aXF1ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIk9uXCJdID0gXCJBY3RpdsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb3VsZXVyIGR1IHRleHRlwqA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYWlsbGUgZHUgdGV4dGXCoDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlJldG91ciBhdSBtZW51IHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuY2lhIGRvIGZvbmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU3VidMOtdHVsb3MgYWN0aXZhZG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NuIGRlIHN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiSW52ZXJ0ZXIgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJJbnZlcnRlciBlc3TDoW5kYXIgaW52ZXJzb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3TDoW5kYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlNtYWxsXCJdID0gXCJQZXF1ZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2HDrXIgZGEgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJPZmZcIl0gPSBcIkRlc2FjdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdWNpw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkludmVydGVyIMOhIGNvbmZpZ3VyYWNpw7NuIHByZWRlZmluaWRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTdWJ0w610dWxvcyBhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZG8gY2luZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTYcOtciBkbyBtb2RvIGNpbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJDYWxpZGFkZSBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlciBlbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU2VhcmNoXCJdID0gXCJCdXNjYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJBdXRvXCJdID0gXCJBdXRvbcOhdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIk9uXCJdID0gXCJPblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29yIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGFtYcOxbyBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlZvbHZlciBhbyBtZW7DuiBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi16nXp9eZ16TXldeqINeo16fXolwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi15vXqteV15HXmdeV16og15zXm9eR15PXmSDXqdee15nXoteUINeb15HXldeZ15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLXm9eq15XXkdeZ15XXqiDXnNeb15HXk9eZINep157Xmdei15Qg16TXldei15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIteb16rXldeR15nXldeqINec15vXkdeT15kg16nXnteZ16LXlCAvINeb16rXldeR15nXldeqINeo15LXmdec15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLXlNeS15PXqNeV16og15vXqteV15HXmdeV16og15zXm9eR15PXmSDXqdee15nXoteUIC8g15vXqteV15HXmdeV16og16jXkteZ15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi15fXldedINeb15TXlCDXlNek15XXmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItem15HXoiDXqNeS15nXnCDXlNek15XXmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlNlcGlhXCJdID0gXCLXl9eV150g15vXlNeUXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU3RhbmRhcmRcIl0gPSBcIteo15LXmdecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiTGFyZ2VcIl0gPSBcIteS15PXldecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiTWVkaXVtXCJdID0gXCLXkdeZ16DXldeg15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTbWFsbFwiXSA9IFwi16fXmNefXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItee16HXmiDXntec15BcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLXpteQINee157XodeaINee15zXkFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIk9mZlwiXSA9IFwi4oCP4oCP15vXkdeV15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi157XlNeZ16jXldeqINeU16TXotec15RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi15fXlteV16gg15zXlNeS15PXqNeV16og15HXqNeZ16jXqiDXlNee15fXk9ecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU2V0dGluZ3NcIl0gPSBcIteU15LXk9eo15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi15vXqteV15HXmdeV16og16TXldei15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi15vXqteV15HXmdeV16og15vXkdeV15nXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLXntem15Eg16fXldec16DXldeiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItem15Ag157Xntem15Eg16fXldec16DXldeiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi15DXmdeb15XXqiDXldeZ15PXkNeVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLXlNem15Ig15EtIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTZWFyY2hcIl0gPSBcIteX16TXqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkF1dG9cIl0gPSBcIteQ15XXmNeV157XmNeZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ0NcIl0gPSBcIteb16rXldeR15nXldeqINee16fXldeT15PXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiT25cIl0gPSBcIuKAj+KAj9ek15XXotecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLXpteR16Ig15jXp9eh15g6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLXkteV15PXnCDXmNen16HXmDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIteX15bXqNeUINec16rXpNeo15nXmCDXlNeo15DXqdeZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuCkquClg+Ckt+CljeCkoOCkreClguCkruCkvyDgpKrgpL7gpLDgpKbgpLDgpY3gpLbgpL/gpKTgpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuCkleCliOCkquCljeCktuCkqCDgpKzgpILgpKYg4KSV4KSw4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIuCkleCliOCkquCljeCktuCkqCDgpJrgpL7gpLLgpYIg4KSV4KSw4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuCkleCliOCkquCljeCktuCkqCAvIOCkieCkquCktuClgOCksOCljeCkt+CklVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLgpJXgpYjgpKrgpY3gpLbgpKggLyDgpIngpKrgpLbgpYDgpLDgpY3gpLfgpJUg4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi4KSw4KS/4KS14KSw4KWN4KS4IOCkuOClh+CkquCkv+Ckr+CkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIuCksOCkv+CkteCksOCljeCkuCDgpK7gpL7gpKjgpJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTZXBpYVwiXSA9IFwi4KS44KWH4KSq4KS/4KSv4KS+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU3RhbmRhcmRcIl0gPSBcIuCkruCkvuCkqOCklVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkxhcmdlXCJdID0gXCLgpKzgpKHgpLzgpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJNZWRpdW1cIl0gPSBcIuCkruCkp+CljeCkr+CkrlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlNtYWxsXCJdID0gXCLgpJvgpYvgpJ/gpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi4KSq4KWC4KSw4KWN4KSjIOCkuOCljeCkleCljeCksOClgOCkqFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIuCkquClguCksOCljeCkoyDgpLjgpY3gpJXgpY3gpLDgpYDgpKgg4KS44KWHIOCkrOCkvuCkueCksCDgpKjgpL/gpJXgpLLgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJPZmZcIl0gPSBcIuCkrOCkguCkplwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLgpKrgpY3gpLLgpYfgpKzgpYjgpJUg4KS44KWN4KSq4KWA4KShXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIuCkoeCkv+Ckq+CkvOClieCksuCljeCknyDgpLjgpYfgpJ/gpL/gpILgpJfgpY3gpLgg4KSV4KWAIOCkquClguCksOCljeCkteCkuOCljeCkpeCkv+CkpOCkvyDgpKrgpLAg4KSy4KS+4KSP4KSBXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuCkuOClh+Ckn+Ckv+CkguCkl+CljeCkuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi4KSJ4KSq4KS24KWA4KSw4KWN4KS34KSVIOCkmuCkvuCksuClgiDgpJXgpLDgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLgpIngpKrgpLbgpYDgpLDgpY3gpLfgpJUg4KSs4KSC4KSmIOCkleCksOClh+CkglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi4KSl4KS/4KSv4KWH4KSf4KSwIOCkruCli+CkoVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLgpKXgpL/gpK/gpYfgpJ/gpLAg4KSu4KWL4KShIOCkuOClhyDgpKzgpL7gpLngpLAg4KSo4KS/4KSV4KSy4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi4KS14KWA4KSh4KS/4KSv4KWLIOCkl+ClgeCko+CkteCkpOCljeCkpOCkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSDgpK7gpYfgpIIg4KSm4KWH4KSW4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU2VhcmNoXCJdID0gXCLgpJbgpYvgpJzgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJBdXRvXCJdID0gXCLgpLjgpY3gpLXgpJrgpL7gpLLgpL/gpKRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDQ1wiXSA9IFwi4KSq4KWN4KSw4KSk4KS/4KSy4KS/4KSq4KS/XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiT25cIl0gPSBcIuCkmuCkvuCksuClglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi4KSq4KS+4KSgIOCkleCkviDgpLDgpILgpJc6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLgpKrgpL7gpKAg4KSV4KS+IOCkhuCkleCkvuCksDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuCkruClgeCkluCljeCkryDgpK7gpYfgpKjgpYIg4KSq4KSwIOCkteCkvuCkquCkuCDgpJzgpL7gpI/gpIFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiUHJvemlybm9zdCBwb3phZGluZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGl0bG92aSBpc2tsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJUaXRsb3ZpIHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVEl0bG92aSAvIHBvZG5hc2xvdmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2UgdGl0bG92YSAvIHBvZG5hc2xvdmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJudXRhIHNlcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9icm51dGkgc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJMYXJnZVwiXSA9IFwiVmVsaWtvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiTWVkaXVtXCJdID0gXCJTcmVkbmplXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU21hbGxcIl0gPSBcIk1hbG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2lqZWxpIHphc2xvblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkl6bGF6IGl6IGNpamVsb2cgemFzbG9uYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIk9mZlwiXSA9IFwiSXNrbGp1xI1lbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQnJ6aW5hIHJlcHJvZHVrY2lqZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcmHEh2FuamUgbmEgemFkYW5lIHBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJQb2RuYXNsb3ZpIHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJQb2RuYXNsb3ZpIGlza2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJOYcSNaW4ga2luby1wcmlrYXphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkl6bGF6IGl6IG5hxI1pbmEga2luby1wcmlrYXphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3ZhbGl0ZXRhIHZpZGVvemFwaXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJQcmlrYXogdSB6bmHEjWFqY2kgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlNlYXJjaFwiXSA9IFwiUHJldHJhxb5pdmFuamVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0c2tpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiQ0NcIl0gPSBcIktvcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIk9uXCJdID0gXCJVa2xqdcSNZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJCb2phIHRla3N0YTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlbGnEjWluYSB0ZWtzdGE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJOYXRyYWcgbmEgZ2xhdm5pIGl6Ym9ybmlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkjDoXR0w6lyIMOhdHRldHN6xZFzw6lnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rIGtpa2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rIGJla2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rL2ZlbGlyYXRva1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJBa2Fkw6FseW1lbnRlcyBmZWxpcmF0b2svZmVsaXJhdG9rIGJlw6FsbMOtdMOhc2FpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiRm9yZMOtdG90dCBzesOpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiRm9yZMOtdG90dCBub3Jtw6FsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU2VwaWFcIl0gPSBcIlN6w6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJTdGFuZGFyZFwiXSA9IFwiTm9ybcOhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkxhcmdlXCJdID0gXCJOYWd5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiTWVkaXVtXCJdID0gXCJLw7Z6ZXBlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNtYWxsXCJdID0gXCJLaWNzaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJUZWxqZXMga8OpcGVybnnFkVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlRlbGplcyBrw6lwZXJuecWRcyBtw7NkIGJlesOhcsOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJPZmZcIl0gPSBcIktpa2FwY3NvbHZhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkxlasOhdHN6w6FzIHNlYmVzc8OpZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiQWxhcMOpcnRlbG1lemV0dCBiZcOhbGzDrXTDoXNvayB2aXNzemHDoWxsw610w6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNldHRpbmdzXCJdID0gXCJCZcOhbGzDrXTDoXNva1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiRmVsaXJhdG9rIGJla2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJGZWxpcmF0b2sga2lrYXBjc29sw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW96aSBtw7NkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktpbMOpcMOpcyBhIG1vemkgbcOzZGLDs2xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlw7MgbWluxZFzw6lnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWVndGVraW50w6lzIGEgTWljcm9zb2Z0IFN0cmVhbWJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNlYXJjaFwiXSA9IFwiS2VyZXPDqXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWt1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNDXCJdID0gXCJNw6Fzb2xhdG90IGthcFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIk9uXCJdID0gXCJCZWthcGNzb2x2YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiU3rDtnZlZyBzesOtbmU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJTesO2dmVnIG3DqXJldGU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWaXNzemEgYSBmxZFtZW7DvGJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyYW5zaSBsYXRhciBiZWxha2FuZ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiS2V0ZXJhbmdhbiBub25ha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJLZXRlcmFuZ2FuIGFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIktldGVyYW5nYW4gLyBTdWJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJQZW5nYXR1cmFuIEtldGVyYW5nYW4gLyBTdWJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlNlcGlhIGJhbGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiU3RhbmRhciBiYWxpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJMYXJnZVwiXSA9IFwiQmVzYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGl1bVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlNtYWxsXCJdID0gXCJLZWNpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJMYXlhciBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIktlbHVhciBkYXJpIGxheWFyIHBlbnVoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiT2ZmXCJdID0gXCJOb25ha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJLZWNlcGF0YW4gcGVtdXRhcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIktlbWJhbGlrYW4ga2UgcGVuZ2F0dXJhbiBkZWZhdWx0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBlbmdhdHVyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnRpdGVsIGFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0ZWwgbm9uYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZGUgdGVhdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktlbHVhciBkYXJpIG1vZGUgdGVhdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3VhbGl0YXMgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkxpaGF0IGRpIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTZWFyY2hcIl0gPSBcIkNhcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJBdXRvXCJdID0gXCJPdG9tYXRpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIk9uXCJdID0gXCJBa3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiV2FybmEgdGVrczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlVrdXJhbiB0ZWtzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiS2VtYmFsaSBrZSBtZW51IHV0YW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYXNwYXJlbnphIHNmb25kb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiU290dG90aXRvbGkgZGlzYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU290dG90aXRvbGkgYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiU290dG90aXRvbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiSW1wb3N0YXppb25pIHNvdHRvdGl0b2xpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VwcGlhIGludmVydGl0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkIGludmVydGl0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNlcGlhXCJdID0gXCJTZXBwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNtYWxsXCJdID0gXCJQaWNjb2xvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlNjaGVybW8gaW50ZXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiQ2hpdWRpIGxhIHZpc3VhbGl6emF6aW9uZSBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIk9mZlwiXSA9IFwiRGlzYXR0aXZhdG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpdMOgIHJpcHJvZHV6aW9uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSaXByaXN0aW5hIGltcG9zdGF6aW9uaSBwcmVkZWZpbml0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNldHRpbmdzXCJdID0gXCJJbXBvc3RhemlvbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlNvdHRvdGl0b2xpIGF0dGl2YXRpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU290dG90aXRvbGkgZGlzYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZGFsaXTDoCBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJFc2NpIGRhbGxhIG1vZGFsaXTDoCBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlF1YWxpdMOgIHZpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXN1YWxpenphIGluIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTZWFyY2hcIl0gPSBcIkNlcmNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNDXCJdID0gXCJDY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIk9uXCJdID0gXCJTw6xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvbG9yZSB0ZXN0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIkRpbWVuc2lvbmkgdGVzdG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUb3JuYSBhbCBtZW51IHByaW5jaXBhbGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi6IOM5pmv44Gu6YCP5piO5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLlrZfluZXjgqrjg5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi5a2X5bmV44Kq44OzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLlrZfluZXjga7oqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLjgrvjg5TjgqLjgpLlhYPjgavmiLvjgZlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLmqJnmupbjgavmiLvjgZlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJTZXBpYVwiXSA9IFwi44K744OU44KiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU3RhbmRhcmRcIl0gPSBcIuaomea6llwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkxhcmdlXCJdID0gXCLlpKdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNtYWxsXCJdID0gXCLlsI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi5YWo55S76Z2i6KGo56S6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi5YWo55S76Z2i6KGo56S644KS57WC5LqGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiT2ZmXCJdID0gXCLjgqrjg5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi5YaN55Sf6YCf5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIuaXouWumuOBruioreWumuOBq+aIu+OBmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNldHRpbmdzXCJdID0gXCLoqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIuWtl+W5leOCquODs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuWtl+W5leOCquODlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi44K344Ki44K/44O8IOODouODvOODiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLjgrfjgqLjgr/jg7wg44Oi44O844OJ44Gu57WC5LqGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi5YuV55S744Gu55S76LOqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFtIOOBp+ihqOekulwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNlYXJjaFwiXSA9IFwi5qSc57SiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQXV0b1wiXSA9IFwi6Ieq5YuVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiT25cIl0gPSBcIuOCquODs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi44OG44Kt44K544OI44Gu6ImyOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLjg4bjgq3jgrnjg4gg44K144Kk44K6OlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLjg6HjgqTjg7Mg44Oh44OL44Ol44O844Gr5oi744KLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcItCk0L7QvSDQvNOp0LvQtNGW0YDQu9GW0LPRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg06nRiNGW0YDRg9C70ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg0pvQvtGB0YPQu9GLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCh0YPQsdGC0LjRgtGA0LvQtdGAIC8g0KLQsNKb0YvRgNGL0L/RgtCw0YBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAgLyDQotCw0pvRi9GA0YvQv9GC0LDRgCDQv9Cw0YDQsNC80LXRgtGA0LvQtdGA0ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQmtC10YDRliDRgdC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi0JrQtdGA0ZYg0YHRgtCw0L3QtNCw0YDRglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLRgtGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiTGFyZ2VcIl0gPSBcItKu0LvQutC10L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJNZWRpdW1cIl0gPSBcItCe0YDRgtCw0YjQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNtYWxsXCJdID0gXCLQmtGW0YjRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLQotC+0LvRi9KbINGN0LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQotC+0LvRi9KbINGN0LrRgNCw0L3QvdCw0L0g0YjRi9KT0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJPZmZcIl0gPSBcItOo0YjRltGA0YPQu9GWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCe0LnQvdCw0YLRgyDQttGL0LvQtNCw0LzQtNGL0pPRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLTmNC00LXQv9C60ZYg0L/QsNGA0LDQvNC10YLRgNC70LXRgNC00ZYg0pvQsNC50YLQsNGA0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJTZXR0aW5nc1wiXSA9IFwi0J/QsNGA0LDQvNC10YLRgNC70LXRgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg0pvQvtGB0YvQu9KT0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0LvQtdGAINOp0YjRltGA0ZbQu9Cz0LXQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi0KLQtdCw0YLRgCDRgNC10LbQuNC80ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi0KLQtdCw0YLRgCDRgNC10LbQuNC80ZbQvdC10L0g0YjRi9KT0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLQkdC10LnQvdC1INGB0LDQv9Cw0YHRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSDSm9GL0LfQvNC10YLRltC90LTQtSDQutOp0YDRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNlYXJjaFwiXSA9IFwi0IbQt9C00LXRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkF1dG9cIl0gPSBcItCQ0LLRgtC+0LzQsNGC0YLRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNDXCJdID0gXCLQmtOp0YjRltGA0LzQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIk9uXCJdID0gXCLSmtC+0YHRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi0JzTmdGC0ZbQvSDRgtKv0YHRljogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCc05nRgtGW0L0g06nQu9GI0LXQvNGWOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi0JHQsNGB0YLRiyDQvNOZ0LfRltGA0LPQtSDQvtGA0LDQu9GDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuuwsOqyvSDtiKzrqoXrj4RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuy6oeyFmCDrgZRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi7Lqh7IWYIOy8rFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLsuqHshZgv7J6Q66eJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuy6oeyFmC/snpDrp4kg7ISk7KCVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi7IS47ZS87JWEIOuwmOyghFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIu2RnOykgCDrsJjsoIRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTZXBpYVwiXSA9IFwi7IS47ZS87JWEXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiU3RhbmRhcmRcIl0gPSBcIu2RnOykgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkxhcmdlXCJdID0gXCLtgazqsoxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJNZWRpdW1cIl0gPSBcIuuztO2GtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNtYWxsXCJdID0gXCLsnpHqsoxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi7KCE7LK0IO2ZlOuptFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIuyghOyytCDtmZTrqbQg64Gd64K06riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiT2ZmXCJdID0gXCLqurzsp5BcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi7J6s7IOdIOyGjeuPhFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLquLDrs7gg7ISk7KCV7Jy866GcIOuQmOuPjOumrOq4sFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNldHRpbmdzXCJdID0gXCLshKTsoJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIuyekOuniSDsvKxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLsnpDrp4kg64GUXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLqt7nsnqUg66qo65OcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIuq3ueyepSDrqqjrk5wg64Gd64K06riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi67mE65SU7JikIO2ZlOyniFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbeyXkOyEnCDrs7TquLBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTZWFyY2hcIl0gPSBcIuqygOyDiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkF1dG9cIl0gPSBcIuyekOuPmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNDXCJdID0gXCLssLjsobBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJPblwiXSA9IFwi7ISk7KCVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLthY3siqTtirgg7IOJOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi7YWN7Iqk7Yq4IO2BrOq4sDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuq4sOuzuCDrqZTribTroZwg64+M7JWE6rCA6riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkZvbm8gc2thaWRydW1hc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiScWhanVuZ3RpIHZhaXpkbyBhcHJhxaF1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLErmp1bmd0aSB2YWl6ZG8gYXByYcWhdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVmFpemRvIGFwcmHFoWFpIC8gc3VidGl0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlZhaXpkbyBhcHJhxaHFsyAvIHN1YnRpdHLFsyBwYXJhbWV0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiQXTFoWF1a3RpIHNlcGlqxIVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJBdMWhYXVrdGkgc3RhbmRhcnRpbsSZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFydGluaXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJMYXJnZVwiXSA9IFwiRGlkZWxpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk1lZGl1bVwiXSA9IFwiVmlkdXRpbmlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU21hbGxcIl0gPSBcIk1hxb5hc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJWaXNhcyBla3JhbmFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiScWhanVuZ3RpIHJvZHltxIUgdmlzYW1lIGVrcmFuZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk9mZlwiXSA9IFwiScWhanVuZ3RhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkxlaWRpbW8gZ3JlaXRpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHcsSFxb5pbnRpIG51bWF0eXR1b3NpdXMgcGFyYW1ldHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlNldHRpbmdzXCJdID0gXCJQYXJhbWV0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLErmp1bmd0aSBzdWJ0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJJxaFqdW5ndGkgc3VidGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLigJ5TY2Vub3PigJwgcmXFvmltYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiScWhZWl0aSBpxaEg4oCec2Nlbm9z4oCcIHJlxb5pbW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWYWl6ZG8ga29reWLEl1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiUm9keXRpIG5hdWRvamFudCDigJ5NaWNyb3NvZnQgU3RyZWFt4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU2VhcmNoXCJdID0gXCJJZcWha290aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpbmlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ0NcIl0gPSBcIktvcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk9uXCJdID0gXCLErmp1bmd0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGVrc3RvIHNwYWx2YTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRla3N0byBkeWRpczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkdyxK/FvnRpIMSvIHBhZ3JpbmRpbsSvIG1lbml1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkZvbmEgY2F1cnNwxKtkxKtndW1zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJJenNsxJNndCB0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiSWVzbMSTZ3QgdGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlRpdHJpL3N1YnRpdHJpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlRpdHJ1L3N1YnRpdHJ1IGllc3RhdMSranVtaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkFwZ3JpZXp0YSBzxJNwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiQXBncmllenRhIHN0YW5kYXJ0YSBrcsSBc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTZXBpYVwiXSA9IFwiU8STcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFydGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJMYXJnZVwiXSA9IFwiTGllbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJNZWRpdW1cIl0gPSBcIlZpZMSTanNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTbWFsbFwiXSA9IFwiTWF6c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQaWxuZWtyxIFuYSByZcW+xKttc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkl6aWV0IG5vIHBpbG5la3LEgW5hIHJlxb7Eq21hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiT2ZmXCJdID0gXCJJenNsxJNndHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQXRza2HFhm/FoWFuYXMgxIF0cnVtc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJBdGphdW5vdCBub2tsdXPEk2p1bWEgaWVzdGF0xKtqdW11c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNldHRpbmdzXCJdID0gXCJJZXN0YXTEq2p1bWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkllc2zEk2d0IHN1YnRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkl6c2zEk2d0IHN1YnRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGXEgXRyYSByZcW+xKttc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJJemlldCBubyB0ZcSBdHJhIHJlxb7Eq21hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW8ga3ZhbGl0xIF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiU2thdMSrdCBwYWthbHBvanVtxIEgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNlYXJjaFwiXSA9IFwiTWVrbMSTdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkF1dG9cIl0gPSBcIkF1dG9txIF0aXNraVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkNDXCJdID0gXCJLb3BpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJPblwiXSA9IFwiSWVzbMSTZ3RzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGEga3LEgXNhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RhIGxpZWx1bXM6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJBdGdyaWV6dGllcyBnYWx2ZW5hasSBIGl6dsSTbG7Ek1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJLZWx1dHNpbmFyYW4gbGF0YXIgYmVsYWthbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkthcHN5ZW4gdGlkYWsgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiS2Fwc3llbiBha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJLYXBzeWVuIC8gU2FyaSBrYXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlRldGFwYW4gS2Fwc3llbiAvIFNhcmkga2F0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlRlcmJhbGlra2FuIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiVGVyYmFsaWtrYW4gc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJMYXJnZVwiXSA9IFwiQmVzYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJNZWRpdW1cIl0gPSBcIlNlZGVyaGFuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNtYWxsXCJdID0gXCJLZWNpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJTa3JpbiBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIktlbHVhciBza3JpbiBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIk9mZlwiXSA9IFwiTWF0aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJLZWxhanVhbiBtYWluIGJhbGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIktlbWJhbGkga2VwYWRhIHRldGFwYW4gbGFsYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiU2V0aW5nXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTYXJpIGthdGEgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTYXJpIGthdGEgdGlkYWsgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZCB0ZWF0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiS2VsdWFyIG1vZCBwYXdhZ2FtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3VhbGl0aSB2aWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTGloYXQgZGFsYW0gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNlYXJjaFwiXSA9IFwiQ2FyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDQ1wiXSA9IFwiU0tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJPblwiXSA9IFwiSGlkdXBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIldhcm5hIHRla3M6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJTYWl6IHRla3M6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJLZW1iYWxpIGtlIG1lbnUgdXRhbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiR2plbm5vbXNpa3RpZ2hldCBmb3IgYmFrZ3J1bm5lblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGVrc3RpbmcgYXZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVGVrc3RpbmcgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlRla3N0aW5nL3VuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbm5zdGlsbGluZ2VyIGZvciB0ZWtzdGluZy91bmRlcnRla3N0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPbXZlbmR0IHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT212ZW5kdCBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiTWVkaXVtXCJdID0gXCJNaWRkZWxzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU21hbGxcIl0gPSBcIkxpdGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkZ1bGwgc2tqZXJtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiQXZzbHV0dCBmdWxsc2tqZXJtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiT2ZmXCJdID0gXCJBdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBdnNwaWxsaW5nc2hhc3RpZ2hldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHw6UgdGlsYmFrZSB0aWwgc3RhbmRhcmRpbm5zdGlsbGluZ2VuZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlNldHRpbmdzXCJdID0gXCJJbm5zdGlsbGluZ2VyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJVbmRlcnRla3N0ZXIgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiVW5kZXJ0ZWtzdGVyIGF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJLaW5vbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiQXZzbHV0dCBraW5vbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb2t2YWxpdGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXMgaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU2VhcmNoXCJdID0gXCJTw7hrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQXV0b1wiXSA9IFwiQXV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNDXCJdID0gXCJLb3BpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiT25cIl0gPSBcIlDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGVrc3RmYXJnZTpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RzdMO4cnJlbHNlOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJCYWNrIHRvIG1haW4gbWVudVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJEb29yemljaHRpZ2hlaWQgdmFuIGFjaHRlcmdyb25kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJCaWpzY2hyaWZ0ZW4gdWl0Z2VzY2hha2VsZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJCaWpzY2hyaWZ0ZW4gaW5nZXNjaGFrZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkJpanNjaHJpZnRlbi9vbmRlcnRpdGVsc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbnN0ZWxsaW5nZW4gdm9vciBiaWpzY2hyaWZ0ZW4vb25kZXJ0aXRlbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPbWdla2VlcmRlIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT21nZWtlZXJkZSBzdGFuZGFhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJMYXJnZVwiXSA9IFwiR3Jvb3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJNZWRpdW1cIl0gPSBcIkdlbWlkZGVsZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNtYWxsXCJdID0gXCJLbGVpblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsZWRpZyBzY2hlcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsZWRpZyBzY2hlcm0gdWl0c2NoYWtlbGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiT2ZmXCJdID0gXCJVaXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQWZzcGVlbHNuZWxoZWlkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkhlcnN0ZWxsZW4gbmFhciBzdGFuZGFhcmRpbnN0ZWxsaW5nZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5zdGVsbGluZ2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJPbmRlcnRpdGVscyBpbmdlc2NoYWtlbGRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJPbmRlcnRpdGVscyB1aXRnZXNjaGFrZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUaGVhdGVybW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVGhlYXRlcm1vZHVzIGFmc2x1aXRlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVva3dhbGl0ZWl0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJXZWVyZ2V2ZW4gaW4gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNlYXJjaFwiXSA9IFwiWm9la2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGlzY2hcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJDQ1wiXSA9IFwiQ0tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJPblwiXSA9IFwiQWFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGtsZXVyOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrZW5ncm9vdHRlOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGVydWcgbmFhciBoZXQgaG9vZmRtZW51XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByemV6cm9jenlzdG/Fm8SHIHTFgmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlBvZHBpc3kgd3nFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiUG9kcGlzeSB3xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlBvZHBpc3kvbmFwaXN5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlVzdGF3aWVuaWEgcG9kcGlzw7N3L25hcGlzw7N3XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiT2R3csOzY29uYSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9kd3LDs2Nvbnkgc3RhbmRhcmRvd3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRvd2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJMYXJnZVwiXSA9IFwiRHXFvHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJNZWRpdW1cIl0gPSBcIsWacmVkbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTbWFsbFwiXSA9IFwiTWHFgnlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGXFgm55IGVrcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiWmFta25paiB3aWRvayBwZcWCbm9la3Jhbm93eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIk9mZlwiXSA9IFwiV3nFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiU3p5YmtvxZvEhyBvZHR3YXJ6YW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJQcnp5d3LDs8SHIHVzdGF3aWVuaWEgZG9tecWbbG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlVzdGF3aWVuaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIk5hcGlzeSB3xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiTmFwaXN5IHd5xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUcnliIGtpbm93eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJXeWpkxbogeiB0cnlidSBraW5vd2Vnb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkpha2/Fm8SHIHdpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJXecWbd2lldGwgdyB1c8WCdWR6ZSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU2VhcmNoXCJdID0gXCJXeXN6dWthalwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXR5Y3puZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkNDXCJdID0gXCJCS1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIk9uXCJdID0gXCJXxYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJLb2xvciB0ZWtzdHU6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlJvem1pYXIgdGVrc3R1OlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJQb3dyw7N0IGRvIG1lbnUgZ8WCw7N3bmVnb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcsOqbmNpYSBkbyBwbGFubyBkZSBmdW5kb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTGVnZW5kYXMgZGVzYXRpdmFkYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTGVnZW5kYXMgYXRpdmFkYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiTGVnZW5kYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhw6fDtWVzIGRhcyBsZWdlbmRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlPDqXBpYSBpbnZlcnNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUGFkcsOjbyBpbnZlcnNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJNZWRpdW1cIl0gPSBcIk3DqWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlNtYWxsXCJdID0gXCJQZXF1ZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRlbGEgaW50ZWlyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlNhaXIgZGUgdGVsYSBpbnRlaXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiT2ZmXCJdID0gXCJEZXNhdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdcOnw6NvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGVyIHBhcmEgY29uZmlndXJhw6fDtWVzIHBhZHLDo29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhw6fDtWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJMZWdlbmRhcyBhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkxlZ2VuZGFzIGRlc2F0aXZhZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RvIGRlIHRlYXRyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTYWlyIGRvIG1vZG8gZGUgdGVhdHJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGlkYWRlIGRlIHbDrWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiRXhpYmlyIG5vIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTZWFyY2hcIl0gPSBcIlBlc3F1aXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiT25cIl0gPSBcIkxpZ2FyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb3IgZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYW1hbmhvIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVm9sdGFyIGFvIG1lbnUgcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyw6puY2lhIGRlIGZ1bmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMZWdlbmRhcyBkZXNhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMZWdlbmRhcyBhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMZWdlbmRhcyAvIFN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkRlZmluacOnw7VlcyBkZSBMZWdlbmRhcyAvIFN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiSW52ZXJ0ZXIgc8OpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUmV2ZXJ0ZXIgcGFkcsOjb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlNlcGlhXCJdID0gXCJTw6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiTWVkaXVtXCJdID0gXCJNw6lkaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTbWFsbFwiXSA9IFwiUGVxdWVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJFY3LDoyBpbnRlaXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2FpciBkbyBlY3LDoyBpbnRlaXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiT2ZmXCJdID0gXCJEZXNhdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdcOnw6NvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGVyIHBhcmEgcHJlZGVmaW5pw6fDtWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkRlZmluacOnw7Vlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidMOtdHVsb3MgYXRpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kbyBkZSBjaW5lbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiU2FpciBkbyBtb2RvIGRlIGNpbmVtYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlF1YWxpZGFkZSBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpc3RhIG5vIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTZWFyY2hcIl0gPSBcIlBlc3F1aXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiT25cIl0gPSBcIkF0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvciBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRhbWFuaG8gZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWb2x0ZSBhbyBtZW51IHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuyJvEgyBmdW5kYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkxlZ2VuZGUgZGV6YWN0aXZhdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTGVnZW5kZSBhY3RpdmF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMZWdlbmRlL3N1YnRpdHLEg3JpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlNldMSDcmkgcGVudHJ1IGxlZ2VuZGUvc3VidGl0csSDcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJTZXBpYSBpbnZlcnNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZCBpbnZlcnNhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkxhcmdlXCJdID0gXCJNYXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpdVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlNtYWxsXCJdID0gXCJNaWNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiRWNyYW4gY29tcGxldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkllyJlpyJtpIGRpbiBtb2R1bCBlY3JhbiBjb21wbGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiT2ZmXCJdID0gXCJEZXphY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZpdGV6xIMgZGUgcmVkYXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVuacibaSBsYSBzZXTEg3JpbGUgaW1wbGljaXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlNldMSDcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnRpdHLEg3JpIGFjdGl2YXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0csSDcmkgZGV6YWN0aXZhdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZHVsIHRlYXRydVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJJZciZacibaSBkaW4gbW9kdWwgdGVhdHJ1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQ2FsaXRhdGUgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlZGXIm2kgw65uIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTZWFyY2hcIl0gPSBcIkPEg3V0YXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIk9uXCJdID0gXCJBY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDdWxvYXJlIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJEaW1lbnNpdW5lIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLDjm5hcG9pIGxhIG1lbml1bCBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINGE0L7QvdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQodGD0LHRgtC40YLRgNGLINC+0YLQutC70Y7Rh9C10L3Ri1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLQodGD0LHRgtC40YLRgNGLINCy0LrQu9GO0YfQtdC90YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi0KHRg9Cx0YLQuNGC0YDRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQn9Cw0YDQsNC80LXRgtGA0Ysg0YHRg9Cx0YLQuNGC0YDQvtCyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi0JjQt9C80LXQvdC40YLRjCDQvdCwINGB0LXQv9C40Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLQmNC30LzQtdC90LjRgtGMINC90LAg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDRhtCy0LXRglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLQvdGL0LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJMYXJnZVwiXSA9IFwi0JHQvtC70YzRiNC+0LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJNZWRpdW1cIl0gPSBcItCh0YDQtdC00L3QuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU21hbGxcIl0gPSBcItCc0LXQu9C60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLQktC+INCy0LXRgdGMINGN0LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQktGL0LnRgtC4INC40Lcg0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LPQviDRgNC10LbQuNC80LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJPZmZcIl0gPSBcItCe0YLQutC7LlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQodC60L7RgNC+0YHRgtGMINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQktC10YDQvdGD0YLRjCDQuiDQv9Cw0YDQsNC80LXRgtGA0LDQvCDQv9C+INGD0LzQvtC70YfQsNC90LjRjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlNldHRpbmdzXCJdID0gXCLQn9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0LLQutC70Y7Rh9C10L3Ri1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0L7RgtC60LvRjtGH0LXQvdGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQoNC10LbQuNC8INGC0LXQsNGC0YDQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLQktGL0LnRgtC4INC40Lcg0YDQtdC20LjQvNCwINGC0LXQsNGC0YDQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItCa0LDRh9C10YHRgtCy0L4g0LLQuNC00LXQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwi0J/RgNC+0YHQvNC+0YLRgNC10YLRjCDQsiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU2VhcmNoXCJdID0gXCLQn9C+0LjRgdC6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQXV0b1wiXSA9IFwi0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIk9uXCJdID0gXCLQktC60LvRjtGH0LXQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi0KbQstC10YIg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0KDQsNC30LzQtdGAINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCS0L7Qt9Cy0YDQsNGCINC6INC+0YHQvdC+0LLQvdC+0LzRgyDQvNC10L3RjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJQcmllaMS+YWRub3PFpSBwb3phZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlRpdHVsa3kgemFwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVGl0dWxreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJOYXN0YXZlbmlhIHRpdHVsa292XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiWnJ1xaFpxaUgc8OpcGlvdsOpIHpvYnJhemVuaWVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJacnXFoWnFpSDFoXRhbmRhcmRuw6kgem9icmF6ZW5pZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlNlcGlhXCJdID0gXCJTw6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdGFuZGFyZFwiXSA9IFwixaB0YW5kYXJkbsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiTGFyZ2VcIl0gPSBcIlZlxL5rw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJNZWRpdW1cIl0gPSBcIlN0cmVkbsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU21hbGxcIl0gPSBcIk1hbMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkNlbMOhIG9icmF6b3ZrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlNrb27EjWnFpSByZcW+aW0gY2VsZWogb2JyYXpvdmt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiT2ZmXCJdID0gXCJWeXBudXTDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJSw71jaGxvc8WlIHByZWhyw6F2YW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcsOhdGnFpSBuYSBwcmVkdm9sZW7DqSBuYXN0YXZlbmlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlRpdHVsa3kgemFwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJSZcW+aW0ga2luYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJVa29uxI1pxaUgcmXFvmltIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdmFsaXRhIHZpZGVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJab2JyYXppxaUgdiBNaWNyb3NvZnQgU3RyZWFtZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlNlYXJjaFwiXSA9IFwiSMS+YWRhxaVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWNrw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDQ1wiXSA9IFwiS8OzcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiT25cIl0gPSBcIlphcG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJGYXJiYSB0ZXh0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlxL5rb3PFpSB0ZXh0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlNww6TFpSBuYSBobGF2bsO6IHBvbnVrdVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJQcm9zb2pub3N0IG96YWRqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiSXprbG9waSBuYXBpc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVmtsb3BpIG5hcGlzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJOYXBpc2kvcG9kbmFzbG92aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJOYXN0YXZpdHZlIG5hcGlzb3YvcG9kbmFzbG92b3ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJhdG5hIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT2JyYXRuYSBzdGFuZGFyZG5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJMYXJnZVwiXSA9IFwiVmVsaWthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiTWVkaXVtXCJdID0gXCJTcmVkbmplIHZlbGlrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNtYWxsXCJdID0gXCJNYWpobmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2Vsb3phc2xvbnNraSBuYcSNaW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJaYXByaSBjZWxvemFzbG9uc2tpIG5hxI1pblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIk9mZlwiXSA9IFwiSXprbG9wbGplbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiSGl0cm9zdCBwcmVkdmFqYW5qYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJQb3ZybmkgbmEgcHJpdnpldGUgbmFzdGF2aXR2ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNldHRpbmdzXCJdID0gXCJOYXN0YXZpdHZlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJWa2xvcGkgcG9kbmFzbG92ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkl6a2xvcGkgcG9kbmFzbG92ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTmHEjWluIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiWmFwcmkgbmHEjWluIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLYWtvdm9zdCB2aWRlb3Bvc25ldGthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJQcmlrYcW+aSB2IGFwbGlrYWNpamkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNlYXJjaFwiXSA9IFwiSXNrYW5qZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkF1dG9cIl0gPSBcIlNhbW9kZWpub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNDXCJdID0gXCJLcFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIk9uXCJdID0gXCJWa2xvcGxqZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJCYXJ2YSBiZXNlZGlsYTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlbGlrb3N0IGJlc2VkaWxhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiTmF6YWogbmEgZ2xhdm5pIG1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLQotGA0LDQvdGB0L/QsNGA0LXQvdGC0L3QvtGB0YIg0L/QvtC30LDQtNC40L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQndCw0YLQv9C40YHQuCDRgdGDINC40YHQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcItCd0LDRgtC/0LjRgdC4INGB0YMg0YPQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCd0LDRgtC/0LjRgdC4IC8g0L/QvtC00L3QsNGB0LvQvtCy0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQn2/RgdGC0LDQstC60LUg0L3QsNGC0L/QuNGB0LAgLyDQv9C+0LTQvdCw0YHQu9C+0LLQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi0J7QsdGA0L3Rg9GC0Lggc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCe0LHRgNC90YPRgtC+INGB0YLQsNC90LTQsNGA0LTQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlN0YW5kYXJkXCJdID0gXCLQodGC0LDQvdC00LDRgNC00L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiTGFyZ2VcIl0gPSBcItCS0LXQu9C40LrQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiTWVkaXVtXCJdID0gXCLQodGA0LXQtNGa0LVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlNtYWxsXCJdID0gXCLQnNCw0LvQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCm0LXQviDQtdC60YDQsNC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQndCw0L/Rg9GB0YLQuCDQv9GA0LjQutCw0Lcg0L/RgNC10LrQviDRhtC10LvQvtCzINC10LrRgNCw0L3QsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiT2ZmXCJdID0gXCLQmNGB0LrRmdGD0YfQtdC90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQkdGA0LfQuNC90LAg0YDQtdC/0YDQvtC00YPQutGG0LjRmNCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi0JLRgNCw0YLQuCDQvdCwINC/0L7QtNGA0LDQt9GD0LzQtdCy0LDQvdC1INC/0L7RgdGC0LDQstC60LVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlNldHRpbmdzXCJdID0gXCLQn9C+0YHRgtCw0LLQutC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCf0L7QtNC90LDRgdC70L7QstC4INGB0YMg0YPQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi0J/QvtC00L3QsNGB0LvQvtCy0Lgg0YHRgyDQuNGB0LrRmdGD0YfQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi0J/QvtC30L7RgNC40YjQvdC4INGA0LXQttC40LxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLQndCw0L/Rg9GB0YLQuCDQv9C+0LfQvtGA0LjRiNC90Lgg0YDQtdC20LjQvFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0JrQstCw0LvQuNGC0LXRgiDQstC40LTQtdC+INC30LDQv9C40YHQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9GA0LjQutCw0LbQuCDRgyDRg9GB0LvRg9C30LggTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU2VhcmNoXCJdID0gXCLQn9GA0LXRgtGA0LDQttC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJBdXRvXCJdID0gXCLQkNGD0YLQvtC80LDRgtGB0LrQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJPblwiXSA9IFwi0KPQutGZ0YPRh9C10L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQkdC+0ZjQsCDRgtC10LrRgdGC0LA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCS0LXQu9C40YfQuNC90LAg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLQndCw0LfQsNC0INC90LAg0LPQu9Cw0LLQvdC4INC80LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXJlbnRub3N0IHBvemFkaW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIk5hdHBpc2kgc3UgaXNrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJOYXRwaXNpIHN1IHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJOYXRwaXNpIC8gcG9kbmFzbG92aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlBvc3RhdmtlIG5hdHBpc2EgLyBwb2RuYXNsb3ZhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJudXRpIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPYnJudXRvIHN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkxhcmdlXCJdID0gXCJWZWxpa29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIk1lZGl1bVwiXSA9IFwiU3JlZG5qYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU21hbGxcIl0gPSBcIk1hbG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJDZW8gZWtyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIk5hcHVzdGkgcHJpa2F6IHByZWtvIGNlbG9nIGVrcmFuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiT2ZmXCJdID0gXCJJc2tsanXEjWVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkJyemluYSByZXByb2R1a2NpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcmF0aSBuYSBwb2RyYXp1bWV2YW5lIHBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiUG9kbmFzbG92aSBzdSB1a2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJQb2RuYXNsb3ZpIHN1IGlza2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlBvem9yacWhbmkgcmXFvmltXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiTmFwdXN0aSBwb3pvcmnFoW5pIHJlxb5pbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3ZhbGl0ZXQgdmlkZW8gemFwaXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlByaWthxb5pIHUgdXNsdXppIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlNlYXJjaFwiXSA9IFwiUHJldHJhxb5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0c2tpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIk9uXCJdID0gXCJVa2xqdcSNZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJvamEgdGVrc3RhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJWZWxpxI1pbmEgdGVrc3RhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJOYXphZCBuYSBnbGF2bmkgbWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJCYWtncnVuZHN0cmFuc3BhcmVuc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQmlsZHRleHRlciBhdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJCaWxkdGV4dGVyIHDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJCaWxkdGV4dGVyL3VuZGVydGV4dGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkluc3TDpGxsbmluZ2FyIGbDtnIgYmlsZHRleHRlci91bmRlcnRleHRlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIsOEbmRyYSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIsOEbmRyYSBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiTWVkaXVtXCJdID0gXCJNZWRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNtYWxsXCJdID0gXCJMaXRlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJIZWxza8Okcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJBdnNsdXRhIGZ1bGxza8Okcm1zbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJPZmZcIl0gPSBcIkF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlVwcHNwZWxuaW5nc2hhc3RpZ2hldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLDhXRlcnN0w6RsbCB0aWxsIHN0YW5kYXJkaW5zdMOkbGxuaW5nYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5zdMOkbGxuaW5nYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlVuZGVydGV4dGVyIHDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlVuZGVydGV4dGVyIGF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJCaW9ncmFmbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiQXZzbHV0YSBiaW9ncmFmbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb2t2YWxpdGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXNhIGkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNlYXJjaFwiXSA9IFwiU8O2a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkF1dG9cIl0gPSBcIkF1dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJDQ1wiXSA9IFwiS29waWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJPblwiXSA9IFwiUMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXh0ZsOkcmc6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZXh0c3RvcmxlazogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlRpbGxiYWthIHRpbGwgaHV2dWRtZW55blwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLguITguKfguLLguKHguYLguJvguKPguYjguIfguYPguKrguILguK3guIfguJ7guLfguYnguJnguKvguKXguLHguIdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuC4m+C4tOC4lOC4hOC4s+C4muC4o+C4o+C4ouC4suC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLguYDguJvguLTguJTguITguLPguJrguKPguKPguKLguLLguKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi4LiE4Liz4Lia4Lij4Lij4Lii4Liy4LiiIC8g4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuC4geC4suC4o+C4leC4seC5ieC4h+C4hOC5iOC4suC4hOC4s+C4muC4o+C4o+C4ouC4suC4oiAvIOC4i+C4seC4muC5hOC4leC5gOC4leC4tOC4pVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIuC4o+C4teC5gOC4p+C4tOC4o+C5jOC4quC4i+C4teC5gOC4m+C4teC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIuC4o+C4teC5gOC4p+C4tOC4o+C5jOC4quC4oeC4suC4leC4o+C4kOC4suC4mVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlNlcGlhXCJdID0gXCLguIvguLXguYDguJvguLXguKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJTdGFuZGFyZFwiXSA9IFwi4Lih4Liy4LiV4Lij4LiQ4Liy4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiTGFyZ2VcIl0gPSBcIuC4guC4meC4suC4lOC5g+C4q+C4jeC5iFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIk1lZGl1bVwiXSA9IFwi4Lib4Liy4LiZ4LiB4Lil4Liy4LiHXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU21hbGxcIl0gPSBcIuC4guC4meC4suC4lOC5gOC4peC5h+C4gVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLguYDguJXguYfguKHguIjguK1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLguK3guK3guIHguIjguLLguIHguYDguJXguYfguKHguIjguK1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJPZmZcIl0gPSBcIuC5hOC4oeC5iOC5hOC4lOC5ieC5g+C4iuC5ieC4h+C4suC4mVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLguITguKfguLLguKHguYDguKPguYfguKfguYPguJnguIHguLLguKPguYDguKXguYjguJlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi4LmA4Lib4Lil4Li14LmI4Lii4LiZ4LiB4Lil4Lix4Lia4LmA4Lib4LmH4LiZ4LiB4Liy4Lij4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4LmA4Lij4Li04LmI4Lih4LiV4LmJ4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuC4geC4suC4o+C4leC4seC5ieC4h+C4hOC5iOC4slwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi4LmA4Lib4Li04LiU4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi4Lib4Li04LiU4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLguYLguKvguKHguJTguYLguKPguIfguKDguLLguJ7guKLguJnguJXguKPguYxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi4Lit4Lit4LiB4LiI4Liy4LiB4LmC4Lir4Lih4LiU4LmC4Lij4LiH4Lig4Liy4Lie4Lii4LiZ4LiV4Lij4LmMXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi4LiE4Li44LiT4Lig4Liy4Lie4LiC4Lit4LiH4Lin4Li04LiU4Li14LmC4LitXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLguJTguLnguYPguJkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlNlYXJjaFwiXSA9IFwi4LiE4LmJ4LiZ4Lir4LiyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQXV0b1wiXSA9IFwi4Lit4Lix4LiV4LmC4LiZ4Lih4Lix4LiV4Li0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQ0NcIl0gPSBcIuC4quC4s+C5gOC4meC4suC4luC4tuC4h1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIk9uXCJdID0gXCLguYPguIrguYnguIfguLLguJnguK3guKLguLnguYhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIuC4quC4teC4guC5ieC4reC4hOC4p+C4suC4oTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuC4guC4meC4suC4lOC5geC4muC4muC4reC4seC4geC4qeC4ozogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuC4geC4peC4seC4muC5hOC4m+C4l+C4teC5iOC5gOC4oeC4meC4ueC4q+C4peC4seC4gVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJBcmthIHBsYW4gc2F5ZGFtbMSxxJ/EsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLFsYXIga2FwYWzEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJBw6fEsWtsYW1hbMSxIGFsdCB5YXrEsWxhciBhw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLFsYXIgLyBBbHQgeWF6xLFsYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLEgLyBBbHQgeWF6xLEgYXlhcmxhcsSxXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VweWEgcmVuZ2kgZGXEn2nFn3RpclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJ0IHJlbmdpIGRlxJ9pxZ90aXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTZXBpYVwiXSA9IFwiU2VweWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcnRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJMYXJnZVwiXSA9IFwiQsO8ecO8a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIk1lZGl1bVwiXSA9IFwiT3J0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlNtYWxsXCJdID0gXCJLw7zDp8O8a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJUYW0gZWtyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJUYW0gZWtyYW5kYW4gw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJPZmZcIl0gPSBcIkthcGFsxLFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiS2F5xLF0dGFuIHnDvHLDvHRtZSBoxLF6xLFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVmFyc2F5xLFsYW4gYXlhcmxhcmEgZ2VyaSBkw7ZuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkF5YXJsYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkFsdCB5YXrEsWxhciBhw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJBbHQgeWF6xLFsYXIga2FwYWzEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGl5YXRybyBtb2R1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlRpeWF0cm8gbW9kdW5kYW4gw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBrYWxpdGVzaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSdkZSBnw7Zyw7xudMO8bGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTZWFyY2hcIl0gPSBcIkFyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkF1dG9cIl0gPSBcIk90b21hdGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiT25cIl0gPSBcIkHDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiTWV0aW4gcmVuZ2k6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIk1ldGluIGJveXV0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkFuYSBtZW7DvHllIGTDtm5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfQvtGA0ZbRgdGC0Ywg0YTQvtC90YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItCS0LjQvNC60L3Rg9GC0Lgg0L/RltC00L/QuNGB0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0KPQstGW0LzQutC90YPRgtC4INC/0ZbQtNC/0LjRgdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCf0ZbQtNC/0LjRgdC4INGC0LAg0YHRg9Cx0YLQuNGC0YDQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0L/RltC00L/QuNGB0ZbQsiDRliDRgdGD0LHRgtC40YLRgNGW0LJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQntCx0LXRgNC90LXQvdCwINGB0LXQv9GW0Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLQntCx0LXRgNC90LXQvdC40Lkg0YHRgtCw0L3QtNCw0YDRgtC90LjQuSDQutC+0LvRltGAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU2VwaWFcIl0gPSBcItCh0LXQv9GW0Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTdGFuZGFyZFwiXSA9IFwi0KHRgtCw0L3QtNCw0YDRgtC90LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkxhcmdlXCJdID0gXCLQktC10LvQuNC60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIk1lZGl1bVwiXSA9IFwi0KHQtdGA0LXQtNC90ZbQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlNtYWxsXCJdID0gXCLQnNCw0LvQuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCf0L7QstC90LjQuSDQtdC60YDQsNC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi0JLQuNC50YLQuCDQtyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INGA0LXQttC40LzRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIk9mZlwiXSA9IFwi0JLQuNC80LrQvdGD0YLQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQqNCy0LjQtNC60ZbRgdGC0Ywg0LLRltC00YLQstC+0YDQtdC90L3Rj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQn9C+0LLQtdGA0L3Rg9GC0LjRgdGPINC00L4g0YHRgtCw0L3QtNCw0YDRgtC90LjRhSDQvdCw0LvQsNGI0YLRg9Cy0LDQvdGMXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU2V0dGluZ3NcIl0gPSBcItCd0LDRgdGC0YDQvtC50LrQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KPQstGW0LzQutC90YPRgtC4INGB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLQktC40LzQutC90YPRgtC4INGB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItCg0LXQttC40Lwg0YLQtdCw0YLRgNGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCS0LjQudGC0Lgg0Lcg0YDQtdC20LjQvNGDINGC0LXQsNGC0YDRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItCv0LrRltGB0YLRjCDQstGW0LTQtdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9C10YDQtdCz0LvRj9C90YPRgtC4INCyIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTZWFyY2hcIl0gPSBcItCf0L7RiNGD0LpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJBdXRvXCJdID0gXCLQkNCy0YLQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNDXCJdID0gXCLQmtC+0L/RltGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiT25cIl0gPSBcItCS0LjQvNC60L3Rg9GC0L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItCa0L7Qu9GW0YAg0YLQtdC60YHRgtGDOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0KDQvtC30LzRltGAINGC0LXQutGB0YLRgzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCf0L7QstC10YDQvdGD0YLQuNGB0Y8g0LTQviDQs9C+0LvQvtCy0L3QvtCz0L4g0LzQtdC90Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiTsOqzIBuIHRyb25nIHN1w7TMgXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlTEg8yBdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQsOizKN0IHBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJQaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGhpw6rMgXQgxJHEg8yjdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJRdWF5IGxhzKNpIG1hzIB1IG7DonUgxJFvzIlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJRdWF5IGxhzKNpIG1hzIB1IHRpw6p1IGNodcOizIluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU2VwaWFcIl0gPSBcIk1hzIB1IG7DonUgxJFvzIlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdGFuZGFyZFwiXSA9IFwiVGnDqnUgY2h1w6LMiW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJMYXJnZVwiXSA9IFwiTOG7m25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJNZWRpdW1cIl0gPSBcIlRydW5nIGLDrG5oXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU21hbGxcIl0gPSBcIk5o4buPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRvw6BuIG3DoG4gaMOsbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJUaG9hzIF0IHRvYcyAbiBtYcyAbiBoacyAbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJPZmZcIl0gPSBcIlThuq90XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlTDtMyBYyDEkcO0zKMgcGhhzIF0IGxhzKNpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlRyxqHMiSBsYcyjaSB0aGnDqsyBdCDEkcSDzKN0IG3Eg8yjYyDEkWnMo25oXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlRoacOqzIF0IMSRxIPMo3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkLDosyjdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUxIPMgXQgcGh1zKMgxJHDqsyAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJDaMOqzIEgxJHDtMyjIHJhzKNwIGhhzIF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlRob2HMgXQgY2jDqsyBIMSRw7TMoyByYcyjcCBoYcyBdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkNow6LMgXQgbMawxqHMo25nIHZpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJYZW0gdHJvbmcgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlNlYXJjaFwiXSA9IFwiVMOsbSBraeG6v21cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJBdXRvXCJdID0gXCJU4buxIMSR4buZbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJPblwiXSA9IFwiQsOizKN0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJNYcyAdSB2xINuIGJhzIluOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiS2nMgWNoIHRoxrDGocyBYyB2xINuIGJhzIluOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiUXVheSBsYcyjaSBtZW51IGNoacyBbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLog4zmma/pgI/mmI7luqZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi5YWz6Zet6Kej6YeK5oCn5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi5byA5ZCv6Kej6YeK5oCn5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi6Kej6YeK5oCn5a2X5bmVL+WvueeZveWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuino+mHiuaAp+Wtl+W5lS/lr7nnmb3lrZfluZXorr7nva5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIuWPjeWQkeajleikkOiJslwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi5Y+N5ZCR5qCH5YeG6ImyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTZXBpYVwiXSA9IFwi5qOV6KSQ6ImyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTdGFuZGFyZFwiXSA9IFwi5qCH5YeGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJMYXJnZVwiXSA9IFwi5aSnXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU21hbGxcIl0gPSBcIuWwj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIuWFqOWxj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi6YCA5Ye65YWo5bGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJPZmZcIl0gPSBcIuWFs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuaSreaUvumAn+W6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIui/mOWOn+S4uum7mOiupOiuvue9rlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuiuvue9rlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLlvIDlkK/lr7nnmb3lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuWFs+mXreWvueeZveWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLlvbHpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLpgIDlh7rlvbHpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIuinhumikei0qOmHj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLlnKggTWljcm9zb2Z0IFN0cmVhbSDkuK3mn6XnnItcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlNlYXJjaFwiXSA9IFwi5pCc57SiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJBdXRvXCJdID0gXCLoh6rliqhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNDXCJdID0gXCLmioTpgIFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIk9uXCJdID0gXCLlvIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi5paH5pys6aKc6ImyOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLmlofmnKzlpKflsI86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIui/lOWbnuS4u+iPnOWNlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuiDjOaZr+mAj+aYjuW6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLpl5zplonlrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLplovllZ/lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLlrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLlrZfluZXoqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIumChOWOn+W+qeWPpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi6YKE5Y6f5qiZ5rqWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTZXBpYVwiXSA9IFwi5b6p5Y+kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTdGFuZGFyZFwiXSA9IFwi5qiZ5rqWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJMYXJnZVwiXSA9IFwi5aSnXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU21hbGxcIl0gPSBcIuWwj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIuWFqOieouW5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi57WQ5p2f5YWo6J6i5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJPZmZcIl0gPSBcIumXnOmWiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuaSreaUvumAn+W6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIumChOWOn+eCuumgkOioreioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU2V0dGluZ3NcIl0gPSBcIuioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLplovllZ/lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIumXnOmWieWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLliofpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLntZDmnZ/liofpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIuW9seeJh+WTgeizqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLlnKggTWljcm9zb2Z0IFN0cmVhbSDkuK3mqqLoppZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlNlYXJjaFwiXSA9IFwi5pCc5bCLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJBdXRvXCJdID0gXCLoh6rli5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNDXCJdID0gXCLlia/mnKxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIk9uXCJdID0gXCLplovllZ9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi5paH5a2X6Imy5b2pOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLmloflrZflpKflsI86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuWbnuWIsOS4u+WKn+iDveihqFwiO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJMb2NTdHJpbmdzLmpzXG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnJlcXVpcmUoJy4vU3RyZWFtU2tpblBsdWdpbi5zY3NzJyk7XHJcblxyXG5hbXAuU3RyZWFtU2tpblBsdWdpbiA9IGFtcC5leHRlbmQoYW1wLmdldENvbXBvbmVudCgnQ29tcG9uZW50JyksIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAgICAgcGxheWVyLm9wdGlvbnNfID0gcGxheWVyLm9wdGlvbnNfIHx8IHt9O1xyXG4gICAgICAgIHBsYXllci5vcHRpb25zX1tcImluYWN0aXZpdHlUaW1lb3V0XCJdID0gMzAwMDtcclxuXHJcbiAgICAgICAgdmFyIGxvZ28gPSBwbGF5ZXIub3B0aW9uc18ubG9nbyxcclxuICAgICAgICAgICAgZW5hYmxlZCA9ICEhbG9nbyAmJiBsb2dvLmVuYWJsZWQgIT09IHVuZGVmaW5lZCA/IGxvZ28uZW5hYmxlZCA6IHRydWUsXHJcbiAgICAgICAgICAgIG9wYWNpdHkgPSAhIWxvZ28gJiYgISFsb2dvLm9wYWNpdHkgPyBsb2dvLm9wYWNpdHkgOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldFVybCA9ICEhbG9nbyAmJiAhIWxvZ28udGFyZ2V0VXJsID8gbG9nby50YXJnZXRVcmwgOiBudWxsLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSAhIWxvZ28gJiYgISFsb2dvLmhvcml6b250YWxQb3NpdGlvbiA/IGxvZ28uaG9yaXpvbnRhbFBvc2l0aW9uIDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uID0gISFsb2dvICYmICEhbG9nby52ZXJ0aWNhbFBvc2l0aW9uID8gbG9nby52ZXJ0aWNhbFBvc2l0aW9uIDogJ3RvcCc7XHJcblxyXG4gICAgICAgIC8vIEFkZCBza2luIHBsdWdpbnNcclxuICAgICAgICB2YXIgc2tpblBsdWdpbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHBsYXllci5vcHRpb25zXy50aXRsZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwbGF5ZXIub3B0aW9uc18uZGVzY3JpcHRpb24gfHwgJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nbzoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRVcmw6IHRhcmdldFVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplQ2xhc3NlczogcGxheWVyLm9wdGlvbnNfLnNpemVDbGFzc2VzIHx8IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFRvRG86IHdlIG5lZWQgdG8gdHJhbnNsYXRlIHRoZSBtZW51IHRpdGxlc1xyXG4gICAgICAgICAgICBsaXZlOiB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sVGV4dDogJ0xJVkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlZENhcHRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZTogJ0Nsb3NlZCBDYXB0aW9uaW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdWFsaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBtZW51VGl0bGU6ICdRdWFsaXR5JyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGF5YmFja1NwZWVkOiBwbGF5ZXIub3B0aW9uc18ucGxheWJhY2tTcGVlZCB8fCB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWRMZXZlbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcyLjB4JywgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjc1eCcsIHZhbHVlOiAxLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMS41eCcsIHZhbHVlOiAxLjUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjI1eCcsIHZhbHVlOiAxLjI1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMS4weCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMC41eCcsIHZhbHVlOiAwLjUgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW1wVm9sdW1lTWVudUJ1dHRvbjogeyB2ZXJ0aWNhbDogZmFsc2UgfSxcclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xCYXJJY29uczoge1xyXG4gICAgICAgICAgICAgICAgbGVmdEljb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsYXlUb2dnbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhbXBWb2x1bWVNZW51QnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGl2ZUluZGljYXRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnRUaW1lRGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWVEaXZpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb25EaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAncmVtYWluaW5nVGltZURpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1pZGRsZUljb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0NvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnY2FwdGlvblRvZ2dsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21vcmVPcHRpb25zQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnVsbHNjcmVlblRvZ2dsZSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmVPdGhlckljb25zOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlPbk1lbnVJdGVtczogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEl0J3MgdG9vIGxhdGUgdG8gbWVyZ2UgcGx1Z2luIG9wdGlvbnMgdG8gcGxheWVyIG9wdGlvbnMsXHJcbiAgICAgICAgLy8gZXhwbGljaXRseSBzdGFydCBlYWNoIHBsdWdpbiBpbnN0ZWFkXHJcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2tpblBsdWdpbnMpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHBsYXllcltwbHVnaW5OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyW3BsdWdpbk5hbWVdKHNraW5QbHVnaW5zW3BsdWdpbk5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udHJvbEJhckNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbUljb25CdXR0b24gPSBudWxsO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xCYXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZS5pbmRleE9mKCdhbXAtY29udHJvbGJhcmljb25zJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YkNvbnRyb2xiYXIgPSBjb250cm9sQmFyQ2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkQ29udHJvbHMgPSBzdWJDb250cm9sYmFyLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQ29udHJvbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGNoaWxkQ29udHJvbHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSXRlbS5vbignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhck90aGVyTWVudXMoY2hpbGRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKFwiY2FucGxheXRocm91Z2hcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIuY2FwdGlvblRvZ2dsZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgcGxheWVyLm1vcmVPcHRpb25zQnV0dG9uLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbGVhck90aGVyTWVudXMoY2hpbGRJdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtSWNvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lLmluZGV4T2YoJ2FtcC1jb250cm9sYmFyaWNvbnMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViQ29udHJvbGJhciA9IGNvbnRyb2xCYXJDaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250cm9scyA9IHN1YkNvbnRyb2xiYXIuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb250cm9scy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRDb250cm9sc1tqXSAhPT0gY2hpbGRJdGVtICYmIGNoaWxkQ29udHJvbHNbal0udW5wcmVzc0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250cm9sc1tqXS51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIERpc3Bvc2UgbWV0aG9kLlxyXG4gKiBOb3QgZG9pbmcgYW55dGhpbmcsIGFzIHRoaXMgaXMgbm90IGFuIGFjdHVhbCBjb250cm9sLlxyXG4gKi9cclxuYW1wLlN0cmVhbVNraW5QbHVnaW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IH07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgU3RyZWFtU2tpblBsdWdpbiBjb21wb25lbnRcclxuICovXHJcbmFtcC5yZWdpc3RlckNvbXBvbmVudCgnc3RyZWFtU2tpblBsdWdpbicsIGFtcC5TdHJlYW1Ta2luUGx1Z2luKTtcclxuXHJcbmFtcC5nZXRDb21wb25lbnQoJ0NvbnRyb2xCYXInKS5wcm90b3R5cGUub3B0aW9uc18gPSB7XHJcbiAgICBsb2FkRXZlbnQ6ICdwbGF5JyxcclxuICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgJ3BsYXlUb2dnbGUnOiB7fSxcclxuICAgICAgICAnY3VycmVudFRpbWVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3RpbWVEaXZpZGVyJzoge30sXHJcbiAgICAgICAgJ2R1cmF0aW9uRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdyZW1haW5pbmdUaW1lRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdsaXZlRGlzcGxheSc6IHt9LFxyXG4gICAgICAgICdwcm9ncmVzc0NvbnRyb2wnOiB7fSxcclxuICAgICAgICAnZnVsbHNjcmVlblRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdUZXh0VHJhY2tMaXN0Jzoge30sXHJcbiAgICAgICAgJ2NhcHRpb25zQnV0dG9uJzoge30sXHJcbiAgICAgICAgJ3N0cmVhbVNraW5QbHVnaW4nOiB7fSxcclxuICAgICAgICAnY2FwdGlvblRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdtb3JlT3B0aW9uc0J1dHRvbic6IHtcclxuICAgICAgICAgICAgZW50cmllczogW1xyXG4gICAgICAgICAgICAgICAgJ3BsYXliYWNrU3BlZWRCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgJ2NhcHRpb25TdWJ0aXRsZUJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAnY2FwdGlvblNldHRpbmdzQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICdxdWFsaXR5QnV0dG9uJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufTtcclxuXHJcbnZpZGVvanMuZ2V0Q29tcG9uZW50KCdTZWVrQmFyJykucHJvdG90eXBlLm9wdGlvbnNfID0ge1xyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgJ2xvYWRQcm9ncmVzc0JhcicsXHJcbiAgICAgICdtb3VzZVRpbWVUb29sdGlwJyxcclxuICAgICAgJ3BsYXlQcm9ncmVzc0JhcicsXHJcbiAgICAgICdzZWVrSGFuZGxlJ1xyXG4gICAgXSxcclxuICAgICdiYXJOYW1lJzogJ3BsYXlQcm9ncmVzc0JhcicsXHJcbiAgICAnaGFuZGxlTmFtZSc6ICdzZWVrSGFuZGxlJ1xyXG59O1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbVNraW5QbHVnaW4vU3RyZWFtU2tpblBsdWdpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG5yZXF1aXJlKFwiLi9TZWFyY2hQbHVnaW4uc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFNlYXJjaEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSAnc2VhcmNoQnV0dG9uJztcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtc2VhcmNoLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnBsYXllcigpLnRyaWdnZXIoJ3NlYXJjaFBsdWdpbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZWFyY2hCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdTZWFyY2gnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTZWFyY2hCdXR0b24nLCBTZWFyY2hCdXR0b24pO1xyXG5cclxuY29uc3QgU2VhcmNoUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHNlYXJjaFBsdWdpbiA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaEJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnU2VhcmNoQnV0dG9uJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdXR0b24gPSByaWdodENvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoc2VhcmNoQnV0dG9uLmVsKCksIHBsYXllci5jb250cm9sQmFyLmNhcHRpb25Ub2dnbGUuZWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc2VhcmNoQnV0dG9uID0gc2VhcmNoQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbignc2VhcmNoUGx1Z2luJywgU2VhcmNoUGx1Z2luKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TZWFyY2hQbHVnaW4vU2VhcmNoUGx1Z2luLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1NlYXJjaFBsdWdpbi9TZWFyY2hQbHVnaW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk1NFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==