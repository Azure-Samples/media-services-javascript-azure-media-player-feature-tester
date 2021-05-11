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
	
	__webpack_require__(1053);
	__webpack_require__(1061);
	__webpack_require__(1063);
	__webpack_require__(1065);
	__webpack_require__(1066);
	__webpack_require__(1068);
	__webpack_require__(1069);
	__webpack_require__(1070);
	__webpack_require__(1072);
	__webpack_require__(1074);
	__webpack_require__(1076);
	__webpack_require__(1077);
	__webpack_require__(1078);
	__webpack_require__(1080);

/***/ },

/***/ 1053:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1061:
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
	
	__webpack_require__(1062);
	
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

/***/ 1062:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1063:
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
	
	__webpack_require__(1064);
	
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
	            this.toggleTheaterMode();
	        }
	    }, {
	        key: 'toggleTheaterMode',
	        value: function toggleTheaterMode() {
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
	        var theaterButton = null;
	        for (var i = 0; i < controlBarChildren.length; i++) {
	            if (controlBarChildren[i].el() && controlBarChildren[i].el().className === "amp-controlbaricons-right") {
	                var rightControlBar = player.controlBar.children()[i];
	                theaterButton = this.controlBar.addChild('TheaterModeButton', options);
	                theaterModeButton = rightControlBar.el().insertBefore(theaterButton.el(), player.controlBar.fullscreenToggle.el());
	            }
	            if (theaterModeButton && theaterButton) {
	                player.controlBar.theaterModeButton = theaterButton;
	            }
	
	            //Register function to execute theater mode outside player
	            videojs.getComponent('Player').prototype.toggleTheaterMode = function () {
	                if (this.controlBar.theaterModeButton) {
	                    this.controlBar.theaterModeButton.toggleTheaterMode();
	                }
	            };
	        }
	    });
	};
	
	videojs.plugin('theaterModePlugin', TheaterModePlugin);

/***/ },

/***/ 1064:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1065:
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

/***/ 1066:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(1067);
	
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
	                    className: 'amp-menu-header dialog-header',
	                    innerHTML: this.htmlEncode(this.localize('Captions / Subtitles settings')),
	                    tabindex: -1
	                })
	            });
	
	            menuTitleComponent.on("keydown", function (event) {
	                if (event.which === 27) {
	                    event.stopImmediatePropagation();
	                }
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
	
	            _this2.on('keydown', _this2.handleKeyPress.bind(_this2));
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
	        key: 'handleKeyPress',
	        value: function handleKeyPress(event) {
	            if (event.which === 9) {
	                var focusableElements = this.$$('.outline-enabled-control');
	                if (event.target === focusableElements[focusableElements.length - 1]) {
	                    this.player_.moreOptionsButton.hideDialog(true);
	                }
	            }
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
	
	    var template = '\n        <div class=\'amp-caption-setting-container\'>\n            <label class =\'amp-caption-settings-label\' id=\'captions-text-size-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Text size: ")) + '</label>\n            <div class =\'amp-radio-button-group amp-font-size-group\' role=\'radiogroup\' aria-labelledby=\'captions-text-size-' + uniqueId + '\'>\n                <label class =\'amp-radio-button amp-font-size\' role=\'radio\' aria-labelledby=\'captions-text-size-small-' + uniqueId + '\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'0.75\' class =\'outline-enabled-control\' aria-setsize=\'3\' aria-posinset=\'1\' />\n                    <span id=\'captions-text-size-small-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Small")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\' role=\'radio\' aria-labelledby=\'captions-text-size-medium-' + uniqueId + '\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.00\' class =\'outline-enabled-control\' aria-setsize=\'3\' aria-posinset=\'2\' />\n                    <span id=\'captions-text-size-medium-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Medium")) + '</span>\n                </label>\n                <label class =\'amp-radio-button amp-font-size\' role=\'radio\' aria-labelledby=\'captions-text-size-large-' + uniqueId + '\'>\n                    <input type=\'radio\' name=\'fontSize\' value=\'1.50\' class =\'outline-enabled-control\' aria-setsize=\'3\' aria-posinset=\'3\'/>\n                    <span id=\'captions-text-size-large-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Large")) + '</span>\n                </label>\n            </div>\n\n            <label class =\'amp-caption-settings-label\' for=\'captions-text-color-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Text color: ")) + '\n                <span class =\'amp-caption-color-selected-text\'></span>\n            </label>\n            <div class =\'amp-radio-button-group amp-font-color-group\' id=\'caption-text-color-' + uniqueId + '\' role=\'radiogroup\' aria-label=\'' + this.localize("Text color: ") + '\'>\n                <label class =\'amp-radio-button amp-font-color\' role=\'radio\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteBlack\' aria-setsize=\'4\' aria-posinset=\'1\' class =\'amp-font-color-whiteBlack outline-enabled-control\' aria-label=\'' + this.localize('Standard') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'radio\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'whiteGray\' aria-setsize=\'4\' aria-posinset=\'2\' class =\'amp-font-color-whiteGray outline-enabled-control\' aria-label=\'' + this.localize('Reverse sepia') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'radio\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackLightGray\' aria-setsize=\'4\' aria-posinset=\'3\' class =\'amp-font-color-blackLightGray outline-enabled-control\' aria-label=\'' + this.localize('Sepia') + '\'/>\n                    <span></span>\n                </label>\n                <label class =\'amp-radio-button amp-font-color\' role=\'radio\'>\n                    <input type=\'radio\' name=\'fontColor\' value=\'blackWhite\' aria-setsize=\'4\' aria-posinset=\'4\' class =\'amp-font-color-blackWhite outline-enabled-control\' aria-label=\'' + this.localize('Reverse standard') + '\'/>\n                    <span></span>\n                </label>\n            </div>\n\n            <div class =\'amp-background-transparency amp-row-with-button\'>\n                <label class =\'amp-caption-settings-label\' id=\'captions-background-transparency-label-' + uniqueId + '\'>' + this.htmlEncode(this.localize("Background transparency")) + '</label>\n                <div class=\'amp-toggle\'>\n                    <button type="button" role="button" aria-pressed="false" class =\'amp-captions-background-transparency outline-enabled-control\' aria-labelledby=\'captions-background-transparency-label-' + uniqueId + '\'></button>\n                    <span class =\'toggle-value\'>' + this.htmlEncode(this.localize("Off")) + '</span>\n                </div>\n            </div>\n            <div class =\'amp-caption-settings-reset-container\'>\n                <button type=\'button\' class =\'amp-caption-settings-reset amp-caption-settings-label outline-enabled-control\'>' + this.htmlEncode(this.localize("Revert to default settings")) + '</button>\n            </div>\n        </div>\n        ';
	
	    return template;
	}

/***/ },

/***/ 1067:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1068:
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

/***/ 1069:
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
	            } else if (event.which === 27 || event.which === 9) {
	                // esc clicked
	                this.settingsButton.hideDialog(true);
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
	
	            if (event.which === 27 || event.which === 9 && event.target.className.indexOf("dialog-header") === -1) {
	                // esc clicked
	                this.settingsButton.hideDialog(true);
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
	            } else {
	                this.settingsButton.el_.focus();
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
	                    _this3.size = _this3.settingsButton.getComponentSize(_this3.settingsSubMenuEl_);
	                    _this3.settingsButton.setDialogSize(_this3.size);
	                }, 0);
	
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
	                if (headerChild.hasClass("dialog-header")) {
	                    backButton.addClass("dialog-header");
	                }
	            } else {
	                backButton = this.subMenu.menu.addChild('MenuItem', {}, 0);
	                backButton.el_.innerHTML = '<span class="vjs-control-text">' + this.htmlEncode(this.localize("Back to main menu")) + '</span>';
	                backButton.el_.innerText = this.htmlEncode(this.localize("Back to main menu"));
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
	    }, {
	        key: 'rebuild',
	        value: function rebuild() {
	            this.settingsSubMenuEl_.removeChild(this.settingsSubMenuEl_.lastChild);
	            this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_);
	
	            this.update();
	            this.createBackButton();
	
	            this.getSize();
	            this.bindClickEvents();
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

/***/ 1070:
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
	
	__webpack_require__(1071);
	
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
	
	        _this.dialog = player.addChild('moreOptionsDialog');
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
	
	        player.on('canplaythrough', function () {
	            // work around for the outline, because the dialog is not part of the control bar now.
	            var controls = _this.$$('.vjs-menu-item', _this.dialog);
	            for (var i = 0; i < controls.length; i++) {
	                controls[i].classList.add("outline-enabled-control");
	            }
	
	            var clickableControls = player.$$('.outline-enabled-control, .vjs-control');
	            for (var _i = 0; _i < clickableControls.length; _i++) {
	                clickableControls[_i].addEventListener('click', function (event) {
	                    if (event.type === 'click' && event.clientX !== 0 && event.clientY !== 0) {
	                        player.removeClass('outline-enabled');
	                    }
	                });
	                clickableControls[_i].addEventListener('keydown', function (event) {
	                    player.addClass('outline-enabled');
	                });
	            }
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
	                this.hideDialog(true);
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
	            var focusToButton = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	            this.dialog.hide();
	            this.setDialogSize(this.getComponentSize(this.menu));
	            this.menu.el_.style.opacity = '1';
	            this.resetChildren();
	            this.el_.setAttribute('aria-expanded', 'false');
	            this.removeClass('vjs-no-tooltip');
	            this.buttonPressed_ = false;
	            if (focusToButton) {
	                this.el_.focus();
	            }
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
	
	            this.player()["MoreOptions" + entry] = moreOptionsMenuItem;
	
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

/***/ 1071:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1072:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component = videojs.getComponent('Component');
	var Button = videojs.getComponent('Button');
	
	__webpack_require__(1073);
	
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
	                this.buttonPressed = true;
	                trackToSelect['mode'] = 'showing';
	                this.lastSelectedTrack = trackToSelect;
	                this.setStrings(this.lastSelectedTrack, true);
	                this.el_.setAttribute('aria-pressed', 'true');
	                this.player_.moreOptionsButton.update();
	            } else {
	                this.buttonPressed = false;
	                for (var i = 0; i < this.trackList.length; i++) {
	                    this.trackList[i]['mode'] = 'disabled';
	                }
	                this.player_.moreOptionsButton.update();
	                this.setStrings(trackToSelect, false);
	                this.el_.setAttribute('aria-pressed', 'false');
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
	            var ariaLabel = 'Captions are currently off, Caption toggle';
	            if (track['kind'] === 'captions' && !clicked) {
	                text = 'Captions on';
	                ariaLabel = 'Captions are currently off, Caption toggle';
	            } else if (track['kind'] === 'captions' && clicked) {
	                text = 'Captions off';
	                ariaLabel = 'Captions are currently on, Caption toggle';
	            } else if (track['kind'] === 'subtitles' && !clicked) {
	                text = 'Subtitles on';
	                ariaLabel = 'Subtitles are currently off, Subtitle toggle';
	            } else if (track['kind'] === 'subtitles' && clicked) {
	                text = 'Subtitles off';
	                ariaLabel = 'Subtitles are currently on, Subtitle toggle';
	            }
	
	            this.controlText(this.htmlEncode(this.localize(text)));
	            this.el_.setAttribute('aria-label', this.localize(ariaLabel));
	        }
	    }]);
	
	    return CaptionToggle;
	}(Button);
	
	CaptionToggle.prototype.controlText_ = 'Subtitles/CC';
	videojs.registerComponent('CaptionToggle', CaptionToggle);

/***/ },

/***/ 1073:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1074:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
	var Component = videojs.getComponent('Component');
	
	__webpack_require__(1075);
	
	var MouseTimeTooltip = function (_MouseTimeDisplay) {
	    _inherits(MouseTimeTooltip, _MouseTimeDisplay);
	
	    function MouseTimeTooltip(player, options) {
	        _classCallCheck(this, MouseTimeTooltip);
	
	        var _this = _possibleConstructorReturn(this, (MouseTimeTooltip.__proto__ || Object.getPrototypeOf(MouseTimeTooltip)).call(this, player, options));
	
	        _this.tooltipPointer = videojs.createEl('span', {
	            className: 'amp-time-tooltip-pointer'
	        });
	
	        _this.el_.appendChild(_this.tooltipPointer);
	        return _this;
	    }
	
	    _createClass(MouseTimeTooltip, [{
	        key: 'update',
	        value: function update(newTime, position) {
	            _get(MouseTimeTooltip.prototype.__proto__ || Object.getPrototypeOf(MouseTimeTooltip.prototype), 'update', this).call(this, newTime, position);
	        }
	    }, {
	        key: 'clampAmpTooltipPosition_',
	        value: function clampAmpTooltipPosition_(position) {
	            if (this.player().controlBar && this.player().controlBar.progressControl && this.player().controlBar.progressControl.seekBar) {
	                var seekBarWidth = this.player().controlBar.progressControl.seekBar.width();
	                var playerWidth = this.player().width();
	                var seekBarPadding = (playerWidth - seekBarWidth) / 2;
	                var tooltipWidthHalf = this.tooltipSpan.offsetWidth / 2;
	                var actualPosition = position;
	
	                if (position < tooltipWidthHalf - seekBarPadding) {
	                    actualPosition = Math.ceil(this.tooltipSpan.getBoundingClientRect().width - position - seekBarPadding);
	                } else if (position > seekBarWidth - tooltipWidthHalf + seekBarPadding) {
	                    actualPosition = Math.floor(seekBarWidth - position + seekBarPadding);
	                } else {
	                    actualPosition = tooltipWidthHalf;
	                }
	                this.tooltipSpan.style.right = -actualPosition + 'px';
	            }
	        }
	    }]);
	
	    return MouseTimeTooltip;
	}(MouseTimeDisplay);
	
	Component.registerComponent('MouseTimeTooltip', MouseTimeTooltip);

/***/ },

/***/ 1075:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1076:
/***/ function(module, exports) {

	'use strict';
	
	// Changing hover to clicks on control buttons.
	var MenuButton = videojs.getComponent('MenuButton');
	
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

/***/ 1077:
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

/***/ 1078:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//-----------------------------------------------------------------------
	// <copyright company="Microsoft Corporation">
	//        Copyright (c) Microsoft Corporation.  All rights reserved.
	// </copyright>
	//-----------------------------------------------------------------------
	
	__webpack_require__(1079);
	
	amp.StreamSkinPlugin = amp.extend(amp.getComponent('Component'), {
	    init: function init(player, options) {
	        "use strict";
	
	        player.options_ = player.options_ || {};
	        player.options_["inactivityTimeout"] = 2250;
	
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
	            ampVolumeMenuButton: {
	                vertical: false,
	                hideVolumeBarOnInActivity: false
	            },
	
	            controlBarIcons: {
	                leftIcons: ['playToggle', 'volumeControl', 'liveDisplay', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'remainingTimeDisplay'],
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
	
	        // while using mouse volume bar should only hide when we leave the left control bar.
	        var VolumeControl = videojs.getComponent('VolumeControl');
	        VolumeControl.prototype.handleMouseLeave = function () {};
	        player.on("loadedmetadata", function () {
	            var controlBarChildren = player.controlBar.children();
	            for (var i = 0; i < controlBarChildren.length; i++) {
	                var subControlBar = controlBarChildren[i];
	                if (subControlBar.el() && subControlBar.el().className === "amp-controlbaricons-left") {
	                    subControlBar.on("mouseleave", function () {
	                        player.controlBar.volumeControl.unpressButton();
	                    });
	                }
	            }
	        });
	
	        var playbackSpeedUpdateHandler = function playbackSpeedUpdateHandler() {
	            player["MoreOptionsplaybackSpeedButton"].rebuild();
	        };
	
	        player.on("loadedmetadata", function () {
	            var _this = this;
	
	            var controlBarChildren = player.controlBar.children();
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
	
	            player.on("playingAtLiveDVREdge", function () {
	                player.controlBar.liveDisplay.controlText(_this.htmlEncode(_this.localize('Viewing live broadcast')));
	                player.controlBar.liveDisplay.el_.setAttribute("aria-label", _this.htmlEncode(_this.localize('Viewing live broadcast')));
	                playbackSpeedUpdateHandler();
	            });
	
	            player.on("playingAtStartDVREdge", playbackSpeedUpdateHandler.bind(this));
	            player.on("playingInDVR", function () {
	                player.controlBar.liveDisplay.controlText(_this.htmlEncode(_this.localize('Skip to live broadcast')));
	                player.controlBar.liveDisplay.el_.setAttribute("aria-label", _this.htmlEncode(_this.localize('Skip to live broadcast')));
	                playbackSpeedUpdateHandler();
	            });
	        });
	
	        player.on("canplaythrough", function () {
	            player.captionToggle.update();
	            player.moreOptionsButton.update();
	        });
	
	        function clearOtherMenus(childItem) {
	            var controlBarChildren = player.controlBar.children();
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

/***/ 1079:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1080:
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
	
	__webpack_require__(1081);
	
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

/***/ 1081:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NGNkYjZjMmEzNzM4OTA5NjUyNz9lMTc5Iiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvUGxheWVyTG9jU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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QUFSLENBQWUsY0FBZixFQUErQixZQUEvQixFOzs7Ozs7O0FDakRBLDBDIiwiZmlsZSI6ImJ1bmRsZXMvRGVidWcvcGxheWVyLXNraW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwbGF5ZXItc2tpblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwbGF5ZXItc2tpblwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzRjZGI2YzJhMzczODkwOTY1MjdcbiAqKi8iLCJyZXF1aXJlKFwiLi9zdHlsZXMvdGhlbWVzL3N0cmVhbS1za2luL21haW4uc2Nzc1wiKTtcclxucmVxdWlyZShcIi4vU3RyZWFtSWNvbi9TdHJlYW1JY29uLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9DYXB0aW9uU3VidGl0bGUvQ2FwdGlvblN1YnRpdGxlXCIpO1xyXG5yZXF1aXJlKFwiLi9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9uc01lbnVJdGVtLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5qc1wiKTtcclxucmVxdWlyZShcIi4vQ2FwdGlvblRvZ2dsZS9DYXB0aW9uVG9nZ2xlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanNcIik7XHJcbnJlcXVpcmUoXCIuL1N0cmVhbVNraW5QbHVnaW4vYW1wT3ZlcnJpZGVzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9QbGF5ZXJMb2NTdHJpbmdzLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uanNcIik7XHJcbnJlcXVpcmUoXCIuL1NlYXJjaFBsdWdpbi9TZWFyY2hQbHVnaW4uanNcIik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1BsYXllclBsdWdpbi5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9zdHlsZXMvdGhlbWVzL3N0cmVhbS1za2luL21haW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL1N0cmVhbUljb24uc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFN0cmVhbUljb25CdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ3N0cmVhbUljb25CdXR0b24nO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnVmlldyBpbiBTdHJlYW0gYnV0dG9uJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtc3RyZWFtLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgZXh0ZXJuYWxMaW5rID0gISF0aGlzLm9wdGlvbnMgJiYgISF0aGlzLm9wdGlvbnMoKSA/IHRoaXMub3B0aW9ucygpLmV4dGVybmFsTGluayA6IG51bGw7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oZXh0ZXJuYWxMaW5rLCBcIl9ibGFua1wiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblN0cmVhbUljb25CdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW0nO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTdHJlYW1JY29uQnV0dG9uJywgU3RyZWFtSWNvbkJ1dHRvbik7XHJcblxyXG5jb25zdCBTdHJlYW1JY29uUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHN0cmVhbUljb25CdXR0b24gPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKSAmJiBjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKS5jbGFzc05hbWUgPT09IFwiYW1wLWNvbnRyb2xiYXJpY29ucy1yaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRDb250cm9sQmFyID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKVtpXTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJlYW1pY29uQnV0dG9uID0gdGhpcy5jb250cm9sQmFyLmFkZENoaWxkKCdTdHJlYW1JY29uQnV0dG9uJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW1JY29uQnV0dG9uID0gcmlnaHRDb250cm9sQmFyLmFkZENoaWxkKHN0cmVhbWljb25CdXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW1JY29uQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5zdHJlYW1JY29uQnV0dG9uID0gc3RyZWFtSWNvbkJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxudmlkZW9qcy5wbHVnaW4oJ3N0cmVhbUljb25QbHVnaW4nLCBTdHJlYW1JY29uUGx1Z2luKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtSWNvbi9TdHJlYW1JY29uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG5yZXF1aXJlKFwiLi9UaGVhdGVyTW9kZS5zY3NzXCIpO1xyXG5cclxuY2xhc3MgVGhlYXRlck1vZGVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ3RoZWF0ZXJNb2RlQnV0dG9uJztcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtdGhlYXRlci1pY29uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUaGVhdGVyTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRoZWF0ZXJNb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKCdhbXAtdGhlYXRlci1leGl0LWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZXhpdFRoZWF0ZXJNb2RlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZW50ZXJUaGVhdGVyTW9kZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdFeGl0IHRoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ0V4aXQgdGhlYXRlciBtb2RlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuVGhlYXRlck1vZGVCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdUaGVhdGVyIG1vZGUnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdUaGVhdGVyTW9kZUJ1dHRvbicsIFRoZWF0ZXJNb2RlQnV0dG9uKTtcclxuXHJcbmNvbnN0IFRoZWF0ZXJNb2RlUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoZWF0ZXJNb2RlQnV0dG9uID0gbnVsbDtcclxuICAgICAgICBsZXQgdGhlYXRlckJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhlYXRlckJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnVGhlYXRlck1vZGVCdXR0b24nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoZWF0ZXJNb2RlQnV0dG9uID0gcmlnaHRDb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKHRoZWF0ZXJCdXR0b24uZWwoKSwgcGxheWVyLmNvbnRyb2xCYXIuZnVsbHNjcmVlblRvZ2dsZS5lbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhlYXRlck1vZGVCdXR0b24gJiYgdGhlYXRlckJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIudGhlYXRlck1vZGVCdXR0b24gPSB0aGVhdGVyQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1JlZ2lzdGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgdGhlYXRlciBtb2RlIG91dHNpZGUgcGxheWVyXHJcbiAgICAgICAgICAgIHZpZGVvanMuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5wcm90b3R5cGUudG9nZ2xlVGhlYXRlck1vZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sQmFyLnRoZWF0ZXJNb2RlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sQmFyLnRoZWF0ZXJNb2RlQnV0dG9uLnRvZ2dsZVRoZWF0ZXJNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbigndGhlYXRlck1vZGVQbHVnaW4nLCBUaGVhdGVyTW9kZVBsdWdpbik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1RoZWF0ZXJNb2RlL1RoZWF0ZXJNb2RlLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1RoZWF0ZXJNb2RlL1RoZWF0ZXJNb2RlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBUZXh0VHJhY2tNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdUZXh0VHJhY2tNZW51SXRlbScpO1xyXG5cclxuY2xhc3MgT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0gZXh0ZW5kcyBUZXh0VHJhY2tNZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKXtcclxuICAgICAgICAvLyBDcmVhdGUgcHNldWRvIHRyYWNrIGluZm9cclxuICAgICAgICAvLyBSZXF1aXJlcyBvcHRpb25zWydraW5kJ11cclxuICAgICAgICBvcHRpb25zWyd0cmFjayddID0ge1xyXG4gICAgICAgICAgICAna2luZCc6IG9wdGlvbnNbJ2tpbmQnXSxcclxuICAgICAgICAgICAgJ3BsYXllcic6IHBsYXllcixcclxuICAgICAgICAgICAgJ2xhYmVsJzogJ09mZicsXHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogZmFsc2UsXHJcbiAgICAgICAgICAgICdtb2RlJzogJ2Rpc2FibGVkJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIE1lbnVJdGVtIGlzIHNlbGVjdGFibGVcclxuICAgICAgICBvcHRpb25zWydzZWxlY3RhYmxlJ10gPSB0cnVlO1xyXG5cclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVHJhY2tzQ2hhbmdlKGV2ZW50KXtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXIoKS50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0cmFja3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcclxuICAgICAgICAgICAgaWYgKHRyYWNrWydtb2RlJ10gPT09ICdzaG93aW5nJykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkKHNlbGVjdGVkKTtcclxuICAgIH1cclxufVxyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbScsIE9mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU3VidGl0bGUvT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0uanNcbiAqKi8iLCJyZXF1aXJlKCcuL0NhcHRpb25TZXR0aW5ncy5zY3NzJyk7XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IE1lbnVCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUJ1dHRvbicpO1xyXG5cclxuY2xhc3MgQ2FwdGlvblNldHRpbmdzQnV0dG9uIGV4dGVuZHMgTWVudUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZENTU0NsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBgYW1wLWNhcHRpb25zLXNldHRpbmdzLWJ1dHRvbiAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lbnUoKSB7XHJcbiAgICAgICAgbGV0IG1lbnUgPSBuZXcgQ29tcG9uZW50KHRoaXMucGxheWVyXywge1xyXG4gICAgICAgICAgICBlbDogdmlkZW9qcy5jcmVhdGVFbCgnbGknLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtbWVudScsXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudS5mb2N1cyA9IGZ1bmN0aW9uICgpIHsgfTtcclxuXHJcbiAgICAgICAgbGV0IG1lbnVUaXRsZUNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgIGVsOiB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FtcC1tZW51LWhlYWRlciBkaWFsb2ctaGVhZGVyJyxcclxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ0NhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzJykpLFxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lbnVUaXRsZUNvbXBvbmVudC5vbihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lbnUuYWRkQ2hpbGQobWVudVRpdGxlQ29tcG9uZW50KTtcclxuICAgICAgICBtZW51LmFkZENoaWxkKG5ldyBDYXB0aW9uU2V0dGluZ3ModGhpcy5wbGF5ZXJfKSk7XHJcblxyXG4gICAgICAgIG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVudTtcclxuICAgIH1cclxufVxyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDYXB0aW9uU2V0dGluZ3NCdXR0b24nLCBDYXB0aW9uU2V0dGluZ3NCdXR0b24pO1xyXG5cclxuY2xhc3MgQ2FwdGlvblNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcygnYW1wLW5vbi1jbGlja2FibGUtZWxlbWVudCcpO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci50ZXh0VHJhY2tTZXR0aW5ncyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQmFja2dyb3VuZFRyYW5zcGFyZW5jeSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXNzZWQgPSAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtcHJlc3NlZFwiKSA9PT0gXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZSghcHJlc3NlZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kT3BhY2l0eSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAnZm9udFBlcmNlbnQnOiAnMC43NScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHRDb2xvclZhbHVlJzogJ3doaXRlQmxhY2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRleHRDb2xvckNoYW5nZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dENvbG9yVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vU2V0IGRlZmF1bHRzXHJcbiAgICAgICAgICAgIHNldERlZmF1bHRzLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zXy5wZXJzaXN0VGV4dFRyYWNrU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuJChgLmFtcC1jYXB0aW9ucy1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQmFja2dyb3VuZFRyYW5zcGFyZW5jeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy4kKCcuYW1wLWZvbnQtc2l6ZS1ncm91cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cGRhdGVEaXNwbGF5LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtZm9udC1jb2xvci1ncm91cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGV4dENvbG9yQ2hhbmdlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy4kKCcuYW1wLWNhcHRpb24tc2V0dGluZ3MtcmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldERlZmF1bHRzLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLWNhcHRpb24tc2V0dGluZ3MtbWVudScsXHJcbiAgICAgICAgICAgIHJvbGU6ICdwcmVzZW50YXRpb24nLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6IGNhcHRpb25PcHRpb25zTWVudVRlbXBsYXRlLmNhbGwodGhpcywgdGhpcy5pZF8pLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDkpIHtcclxuICAgICAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy4kJCgnLm91dGxpbmUtZW5hYmxlZC1jb250cm9sJyk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcl8ubW9yZU9wdGlvbnNCdXR0b24uaGlkZURpYWxvZyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEaXNwbGF5KCkge1xyXG4gICAgICAgIGxldCB0dERpc3BsYXkgPSB0aGlzLnBsYXllcl8uZ2V0Q2hpbGQoJ3RleHRUcmFja0Rpc3BsYXknKTtcclxuICAgICAgICBpZiAodHREaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIHR0RGlzcGxheS51cGRhdGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlcygpIHtcclxuICAgICAgICBjb25zdCBmb250UGVyY2VudCA9IHRoaXMuJCgnaW5wdXRbbmFtZT1cImZvbnRTaXplXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29sb3JWYWx1ZSA9IHRoaXMuJCgnaW5wdXRbbmFtZT1cImZvbnRDb2xvclwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGZnQ29sb3I7XHJcbiAgICAgICAgbGV0IGJnQ29sb3I7XHJcbiAgICAgICAgc3dpdGNoICh0ZXh0Q29sb3JWYWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdibGFja1doaXRlJzpcclxuICAgICAgICAgICAgICAgIGZnQ29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrTGlnaHRHcmF5JzpcclxuICAgICAgICAgICAgICAgIGZnQ29sb3IgPSAnIzMwMjkyNic7XHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yID0gJyNkZGRiZDMnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlR3JheSc6XHJcbiAgICAgICAgICAgICAgICBmZ0NvbG9yID0gJyNkZGRiZDMnO1xyXG4gICAgICAgICAgICAgICAgYmdDb2xvciA9ICcjMzAyOTI2JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3aGl0ZUJsYWNrJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGZnQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yID0gJyMwMDAwMDAnO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiZ1RyYW5zcGFyZW5jeSA9IHRoaXMuJCgnLmFtcC1jYXB0aW9ucy1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeScpLmdldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyk7XHJcbiAgICAgICAgY29uc3QgYmdPcGFjaXR5ID0gYmdUcmFuc3BhcmVuY3kgPT09ICd0cnVlJyA/ICcwJyA6ICcxJztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgJ2JhY2tncm91bmRPcGFjaXR5JzogYmdPcGFjaXR5LFxyXG4gICAgICAgICAgICAnY29sb3InOiBmZ0NvbG9yLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZENvbG9yJzogYmdDb2xvcixcclxuICAgICAgICAgICAgJ2ZvbnRQZXJjZW50JzogZm9udFBlcmNlbnQsXHJcbiAgICAgICAgICAgICd0ZXh0Q29sb3JWYWx1ZSc6IHRleHRDb2xvclZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdID09PSAnJyB8fCByZXN1bHRbbmFtZV0gPT09ICdub25lJyB8fCAobmFtZSA9PT0gJ2ZvbnRQZXJjZW50JyAmJiByZXN1bHRbbmFtZV0gPT09IDEuMDApKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVzKHZhbHVlcykge1xyXG4gICAgICAgIHRoaXMuJCgnaW5wdXRbbmFtZT1cImZvbnRDb2xvclwiXVt2YWx1ZT1cIicgKyB2YWx1ZXMudGV4dENvbG9yVmFsdWUgKyAnXCJdJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0Q29sb3JUZXh0KCk7XHJcbiAgICAgICAgdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udFNpemVcIl1bdmFsdWU9XCInICsgdmFsdWVzLmZvbnRQZXJjZW50ICsgJ1wiXScpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmdUcmFuc3BhcmVuY3lUb2dnbGUodmFsdWVzLmJnT3BhY2l0eSA9PT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQmdUcmFuc3BhcmVuY3lUb2dnbGUoaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy4kKGAuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5YCkuc2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIsIGlzUHJlc3NlZCk7XHJcbiAgICAgICAgdGhpcy4kKCcuYW1wLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5IC50b2dnbGUtdmFsdWUnKS5pbm5lckhUTUwgPSBpc1ByZXNzZWQgPyB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIk9uXCIpKSA6IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiT2ZmXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUZXh0Q29sb3JUZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvclZhbHVlID0gdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWRDb2xvclRleHQgPSAnJztcclxuICAgICAgICBzd2l0Y2ggKHRleHRDb2xvclZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrV2hpdGUnOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnUmV2ZXJzZSBzdGFuZGFyZCcpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdibGFja0xpZ2h0R3JheSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdTZXBpYScpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3aGl0ZUdyYXknOlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnUmV2ZXJzZSBzZXBpYScpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3aGl0ZUJsYWNrJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JUZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1N0YW5kYXJkJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kKCcuYW1wLWNhcHRpb24tY29sb3Itc2VsZWN0ZWQtdGV4dCcpLmlubmVyVGV4dCA9IHRoaXMubG9jYWxpemUoc2VsZWN0ZWRDb2xvclRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9uc18ucGVyc2lzdFRleHRUcmFja1NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZXMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndmpzLXRleHQtdHJhY2stb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd2anMtdGV4dC10cmFjay1vcHRpb25zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy53YXJuKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgbGV0IGVyciwgdmFsdWVzO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBbZXJyLCB2YWx1ZXNdID0gc2FmZVBhcnNlVHVwbGUod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2anMtdGV4dC10cmFjay1vcHRpb25zJykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy53YXJuKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FwdGlvbk9wdGlvbnNNZW51VGVtcGxhdGUodW5pcXVlSWQpIHtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nYW1wLWNhcHRpb24tc2V0dGluZy1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCcgaWQ9J2NhcHRpb25zLXRleHQtc2l6ZS0ke3VuaXF1ZUlkfSc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlRleHQgc2l6ZTogXCIpKX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbi1ncm91cCBhbXAtZm9udC1zaXplLWdyb3VwJyByb2xlPSdyYWRpb2dyb3VwJyBhcmlhLWxhYmVsbGVkYnk9J2NhcHRpb25zLXRleHQtc2l6ZS0ke3VuaXF1ZUlkfSc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LXNpemUnIHJvbGU9J3JhZGlvJyBhcmlhLWxhYmVsbGVkYnk9J2NhcHRpb25zLXRleHQtc2l6ZS1zbWFsbC0ke3VuaXF1ZUlkfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzAuNzUnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtc2V0c2l6ZT0nMycgYXJpYS1wb3NpbnNldD0nMScgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nY2FwdGlvbnMtdGV4dC1zaXplLXNtYWxsLSR7dW5pcXVlSWR9Jz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiU21hbGxcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LXNpemUnIHJvbGU9J3JhZGlvJyBhcmlhLWxhYmVsbGVkYnk9J2NhcHRpb25zLXRleHQtc2l6ZS1tZWRpdW0tJHt1bmlxdWVJZH0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udFNpemUnIHZhbHVlPScxLjAwJyBjbGFzcyA9J291dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLXNldHNpemU9JzMnIGFyaWEtcG9zaW5zZXQ9JzInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2NhcHRpb25zLXRleHQtc2l6ZS1tZWRpdW0tJHt1bmlxdWVJZH0nPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJNZWRpdW1cIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LXNpemUnIHJvbGU9J3JhZGlvJyBhcmlhLWxhYmVsbGVkYnk9J2NhcHRpb25zLXRleHQtc2l6ZS1sYXJnZS0ke3VuaXF1ZUlkfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzEuNTAnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtc2V0c2l6ZT0nMycgYXJpYS1wb3NpbnNldD0nMycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdjYXB0aW9ucy10ZXh0LXNpemUtbGFyZ2UtJHt1bmlxdWVJZH0nPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJMYXJnZVwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCcgZm9yPSdjYXB0aW9ucy10ZXh0LWNvbG9yLSR7dW5pcXVlSWR9Jz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiVGV4dCBjb2xvcjogXCIpKX1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzID0nYW1wLWNhcHRpb24tY29sb3Itc2VsZWN0ZWQtdGV4dCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbi1ncm91cCBhbXAtZm9udC1jb2xvci1ncm91cCcgaWQ9J2NhcHRpb24tdGV4dC1jb2xvci0ke3VuaXF1ZUlkfScgcm9sZT0ncmFkaW9ncm91cCcgYXJpYS1sYWJlbD0nJHt0aGlzLmxvY2FsaXplKFwiVGV4dCBjb2xvcjogXCIpfSc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJyByb2xlPSdyYWRpbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250Q29sb3InIHZhbHVlPSd3aGl0ZUJsYWNrJyBhcmlhLXNldHNpemU9JzQnIGFyaWEtcG9zaW5zZXQ9JzEnIGNsYXNzID0nYW1wLWZvbnQtY29sb3Itd2hpdGVCbGFjayBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgYXJpYS1sYWJlbD0nJHt0aGlzLmxvY2FsaXplKCdTdGFuZGFyZCcpfScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJyByb2xlPSdyYWRpbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250Q29sb3InIHZhbHVlPSd3aGl0ZUdyYXknIGFyaWEtc2V0c2l6ZT0nNCcgYXJpYS1wb3NpbnNldD0nMicgY2xhc3MgPSdhbXAtZm9udC1jb2xvci13aGl0ZUdyYXkgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtbGFiZWw9JyR7dGhpcy5sb2NhbGl6ZSgnUmV2ZXJzZSBzZXBpYScpfScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uIGFtcC1mb250LWNvbG9yJyByb2xlPSdyYWRpbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250Q29sb3InIHZhbHVlPSdibGFja0xpZ2h0R3JheScgYXJpYS1zZXRzaXplPSc0JyBhcmlhLXBvc2luc2V0PSczJyBjbGFzcyA9J2FtcC1mb250LWNvbG9yLWJsYWNrTGlnaHRHcmF5IG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1NlcGlhJyl9Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtY29sb3InIHJvbGU9J3JhZGlvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J2JsYWNrV2hpdGUnIGFyaWEtc2V0c2l6ZT0nNCcgYXJpYS1wb3NpbnNldD0nNCcgY2xhc3MgPSdhbXAtZm9udC1jb2xvci1ibGFja1doaXRlIG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1JldmVyc2Ugc3RhbmRhcmQnKX0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgYW1wLXJvdy13aXRoLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCcgaWQ9J2NhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5LWxhYmVsLSR7dW5pcXVlSWR9Jz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIikpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhbXAtdG9nZ2xlJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBjbGFzcyA9J2FtcC1jYXB0aW9ucy1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeSBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgYXJpYS1sYWJlbGxlZGJ5PSdjYXB0aW9ucy1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeS1sYWJlbC0ke3VuaXF1ZUlkfSc+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSd0b2dnbGUtdmFsdWUnPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLXJlc2V0LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3MgPSdhbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCBhbXAtY2FwdGlvbi1zZXR0aW5ncy1sYWJlbCBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCIpKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TZXR0aW5ncy9DYXB0aW9uU2V0dGluZ3Muc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IFRleHRUcmFja0J1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdUZXh0VHJhY2tCdXR0b24nKTtcclxuY29uc3QgT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0nKTtcclxuY29uc3QgVGV4dFRyYWNrTWVudUl0ZW0gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnVGV4dFRyYWNrTWVudUl0ZW0nKTtcclxuXHJcbmNsYXNzIENhcHRpb25TdWJ0aXRsZUJ1dHRvbiBleHRlbmRzIFRleHRUcmFja0J1dHRvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zLCByZWFkeSkge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucywgcmVhZHkpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdDYXB0aW9ucyAvIFN1YnRpdGxlcycpKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENTU0NsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBgdmpzLWNhcHRpb25zLXN1YnRpdGxlcy1idXR0b24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG4gICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcclxuXHJcbiAgICAgICAgdmFyIG1lbnVUaXRsZUNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgIGVsOiB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FtcC1tZW51LWhlYWRlcicsXHJcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdDYXB0aW9ucyAvIFN1YnRpdGxlcycpKSxcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiAtMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobWVudVRpdGxlQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaXRlbXMucHVzaChuZXcgT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0odGhpcy5wbGF5ZXJfLCB7ICdraW5kJzogdGhpcy5raW5kXyB9KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgaWYgKCF0cmFja3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrID0gdHJhY2tzW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gb25seSBhZGQgdHJhY2tzIHRoYXQgYXJlIG9mIHRoZSBhcHByb3ByaWF0ZSBraW5kIGFuZCBoYXZlIGEgbGFiZWxcclxuICAgICAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnIHx8IHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFja0l0ZW0gPSBuZXcgVGV4dFRyYWNrTWVudUl0ZW0odGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVudUl0ZW0gaXMgc2VsZWN0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICdzZWxlY3RhYmxlJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAndHJhY2snOiB0cmFja1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja0l0ZW0uZWxfLmlubmVySFRNTCA9IHRyYWNrSXRlbS5lbF8uaW5uZXJIVE1MICsgJyAnICsgdGhpcy5sb2NhbGl6ZSgnQ0MnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSB0cmFja0l0ZW0ub3B0aW9uc19bJ2xhYmVsJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJdGVtLm9wdGlvbnNfWydsYWJlbCddID0gbGFiZWwgKyB0aGlzLmxvY2FsaXplKCcgW0NDXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrSXRlbS5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgIGxhYmVsICsgdGhpcy5sb2NhbGl6ZSgnIFtDQ10nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh0cmFja0l0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufVxyXG5cclxuQ2FwdGlvblN1YnRpdGxlQnV0dG9uLnByb3RvdHlwZS5raW5kXyA9ICd0ZXh0dHJhY2tzJztcclxuXHJcblRleHRUcmFja01lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuXHJcbiAgICBpZiAoIXRyYWNrcykgcmV0dXJuO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRyYWNrID0gdHJhY2tzW2ldO1xyXG5cclxuICAgICAgICBpZiAodHJhY2tbJ2tpbmQnXSAhPT0gXCJzdWJ0aXRsZXNcIiAmJiB0cmFja1sna2luZCddICE9PSBcImNhcHRpb25zXCIgJiYgdHJhY2tbJ2tpbmQnXSAhPT0gJ3RleHR0cmFja3MnKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYWNrID09PSB0aGlzLnRyYWNrKSB7XHJcbiAgICAgICAgICAgIHRyYWNrWydtb2RlJ10gPSAnc2hvd2luZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhY2tbJ21vZGUnXSA9ICdkaXNhYmxlZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllcl8uY2FwdGlvblRvZ2dsZS51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDYXB0aW9uU3VidGl0bGVCdXR0b24nLCBDYXB0aW9uU3VidGl0bGVCdXR0b24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGUuanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgTWVudUl0ZW0gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUl0ZW0nKTtcclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5cclxuY2xhc3MgTW9yZU9wdGlvbnNNZW51SXRlbSBleHRlbmRzIE1lbnVJdGVtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMsIGVudHJ5LCBtZW51QnV0dG9uKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbiA9IG1lbnVCdXR0b247XHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0aGlzLnNldHRpbmdzQnV0dG9uLmRpYWxvZztcclxuICAgICAgICB0aGlzLm1haW5NZW51ID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5tZW51O1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSB0aGlzLmRpYWxvZy5nZXRDaGlsZCgnc2V0dGluZ3NQYW5lbCcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZCA9IHRoaXMucGFuZWwuZ2V0Q2hpbGQoJ3NldHRpbmdzUGFuZWxDaGlsZCcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZEVsID0gdGhpcy5wYW5lbENoaWxkLmVsXztcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBzdGF0ZSBvZiB3aGF0IG1lbnUgdHlwZSBpcyBsb2FkaW5nIG5leHRcclxuICAgICAgICB0aGlzLm1lbnVUb0xvYWQgPSAnbWFpbm1lbnUnO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJNZW51TmFtZSA9IGVudHJ5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZW50cnkuc2xpY2UoMSk7XHJcbiAgICAgICAgY29uc3QgU3ViTWVudUNvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KHN1Yk1lbnVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCFTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50ICR7c3ViTWVudU5hbWV9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3ViTWVudSA9IG5ldyBTdWJNZW51Q29tcG9uZW50KHRoaXMucGxheWVyKCksIG9wdGlvbnMsIG1lbnVCdXR0b24sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kU3ViTWVudUJ1dHRvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudEhhbmRsZXJzKCkge1xyXG4gICAgICAgIC8vIG92ZXJyaWRlIE1lbnVCdXR0b25zIGtleVByZXNzIEV2ZW50IHRvIG5vdCBwcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICB0aGlzLnN1Yk1lbnUuaGFuZGxlS2V5UHJlc3MgPSB0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN1Yk1lbnVLZXlQcmVzc0hhbmRsZXIgPSB0aGlzLm9uU3ViTWVudUtleVByZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdWJtZW51Q2xpY2tIYW5kbGVyID0gdGhpcy5vblN1Ym1lbnVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIgPSB0aGlzLm9uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5UHJlc3MoZXZlbnQpe1xyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIgfHwgZXZlbnQud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMjcgfHwgZXZlbnQud2hpY2ggPT09IDkpIHsgLy8gZXNjIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5oaWRlRGlhbG9nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Yk1lbnVLZXlQcmVzcyhldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQud2hpY2ggPT09IDEzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvL2V2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU3VibWVudUNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcgfHwgKGV2ZW50LndoaWNoID09PSA5ICYmIGV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImRpYWxvZy1oZWFkZXJcIikgPT09IC0xKSkgeyAvLyBlc2MgY2xpY2tlZFxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLmhpZGVEaWFsb2codHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWVudUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtYmFjay1idXR0b24nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRNYWluTWVudSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLmVsXy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVG8gdXBkYXRlIHRoZSBzdWIgbWVudSB2YWx1ZSBvbiBjbGljaywgc2V0VGltZW91dCBpcyBuZWVkZWQgYmVjYXVzZVxyXG4gICAgICAgIC8vIHVwZGF0aW5nIHRoZSB2YWx1ZSBpcyBub3QgaW5zdGFudFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShldmVudCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWwoKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLW1lbnUtaXRlbSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1zdWItbWVudSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZFN1Yk1lbnVCdXR0b24oKXtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3Mtc3ViLW1lbnUtdGl0bGUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViTWVudS5lbF8uYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVUaXRsZUVsXyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VmFsdWVFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1zdWItbWVudS12YWx1ZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfKTtcclxuICAgICAgICB0aGlzLnN1Yk1lbnUucmVtb3ZlQ2xhc3MoXCJ2anMtY29udHJvbFwiKTtcclxuICAgICAgICB0aGlzLnN1Yk1lbnUuYWRkQ2xhc3MoXCJ2anMtbWVudS1pdGVtXCIpO1xyXG4gICAgICAgIHRoaXMuZWxfID0gdGhpcy5zdWJNZW51LmVsXztcclxuICAgICAgICB0aGlzLmVsXy50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMub24oWyd0YXAnLCAnY2xpY2snXSwgdGhpcy5oYW5kbGVDbGljayk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC53aGljaCA9PSA5KXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3VwZXIuaGFuZGxlS2V5UHJlc3MoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVUb0xvYWQgPSAnc3VibWVudSc7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9wZW4gY2xhc3MgdG8gZW5zdXJlIG9ubHkgdGhlIG9wZW4gc3VibWVudSBnZXRzIHRoaXMgY2xhc3NcclxuICAgICAgICB2aWRlb2pzLnJlbW92ZUNsYXNzKHRoaXMuZWxfLCAnb3BlbicpO1xyXG5cclxuICAgICAgICBzdXBlci5oYW5kbGVDbGljaygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW5NZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIC8vIFdldGhlciB0byBhZGQgb3IgcmVtb3ZlIHZqcy1oaWRkZW4gY2xhc3Mgb24gdGhlIHNldHRpbmdzU3ViTWVudUVsIGVsZW1lbnRcclxuICAgICAgICBpZiAodmlkZW9qcy5oYXNDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICB2aWRlb2pzLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gYW5pbWF0aW9uIG5vdCBwbGF5ZWQgd2l0aG91dCB0aW1lb3V0XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSB0aGlzLnNldHRpbmdzQnV0dG9uLmdldENvbXBvbmVudFNpemUodGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5zZXREaWFsb2dTaXplKHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fWzBdLmVsXy5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlckNoaWxkO1xyXG4gICAgICAgIGxldCBoZWFkZXJDaGlsZEluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGJhY2tCdXR0b247XHJcbiAgICAgICAgbGV0IHN1Yk1lbnVDaGlsZHJlbiA9IHRoaXMuc3ViTWVudS5tZW51LmNoaWxkcmVuXztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Yk1lbnVDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihzdWJNZW51Q2hpbGRyZW5baV0uaGFzQ2xhc3MoXCJhbXAtbWVudS1oZWFkZXJcIikpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyQ2hpbGQgPSBzdWJNZW51Q2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDaGlsZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoZWFkZXJDaGlsZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViTWVudS5tZW51LnJlbW92ZUNoaWxkKGhlYWRlckNoaWxkKTsvLy5jaGlsZHJlbl8uc3BsaWNlKGhlYWRlckNoaWxkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uID0gdGhpcy5zdWJNZW51Lm1lbnUuYWRkQ2hpbGQoJ01lbnVJdGVtJywge30sIDApO1xyXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmVsXy5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ2anMtYmFjay1idXR0b24tdGV4dFwiPicgKyB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShoZWFkZXJDaGlsZC5lbF8uaW5uZXJIVE1MKSkgKyBcIjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgaWYoaGVhZGVyQ2hpbGQuaGFzQ2xhc3MoXCJkaWFsb2ctaGVhZGVyXCIpKXtcclxuICAgICAgICAgICAgICAgIGJhY2tCdXR0b24uYWRkQ2xhc3MoXCJkaWFsb2ctaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24gPSB0aGlzLnN1Yk1lbnUubWVudS5hZGRDaGlsZCgnTWVudUl0ZW0nLCB7fSwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24uZWxfLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj4nICsgdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJCYWNrIHRvIG1haW4gbWVudVwiKSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24uZWxfLmlubmVyVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiQmFjayB0byBtYWluIG1lbnVcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrQnV0dG9uLm5hbWVfID0gJ0JhY2tCdXR0b24nO1xyXG4gICAgICAgIGJhY2tCdXR0b24uZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ0JhY2sgdG8gbWFpbiBtZW51JykpO1xyXG4gICAgICAgIGJhY2tCdXR0b24uYWRkQ2xhc3MoJ3Zqcy1iYWNrLWJ1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIFByZWZpeGVkRXZlbnQoZWxlbWVudCwgdHlwZSwgY2FsbGJhY2ssIGFjdGlvbiA9ICdhZGRFdmVudCcpIHtcclxuICAgICAgICBsZXQgcHJlZml4ID0gWyd3ZWJraXQnLCAnbW96JywgJ01TJywgJ28nLCAnJ107XHJcblxyXG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcHJlZml4Lmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZml4W3BdKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnYWRkRXZlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocHJlZml4W3BdICsgdHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZW1vdmVFdmVudCcpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihwcmVmaXhbcF0gKyB0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVHJhbnNpdGlvbkVuZChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgIT09ICdtYXJnaW4tcmlnaHQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lbnVUb0xvYWQgPT09ICdtYWlubWVudScpIHtcclxuICAgICAgICAgICAgLy8gaGlkZSBzdWJtZW51XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IHRvIDBcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc2V0TWFyZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1haW5NZW51KCkge1xyXG4gICAgICAgIHRoaXMubWVudVRvTG9hZCA9ICdtYWlubWVudSc7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudS5lbF8uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuXHJcbiAgICAgICAgLy8gYmFjayBidXR0b24gd2lsbCBhbHdheXMgdGFrZSB5b3UgdG8gbWFpbiBtZW51LCBzbyBzZXQgZGlhbG9nIHNpemVzXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5zZXREaWFsb2dTaXplKFt0aGlzLm1haW5NZW51LndpZHRoLCB0aGlzLm1haW5NZW51LmhlaWdodF0pO1xyXG5cclxuICAgICAgICAvLyBhbmltYXRpb24gbm90IHRyaWdnZXJlZCB3aXRob3V0IHRpbWVvdXQgKHNvbWUgYXN5bmMgc3R1ZmYgPyE/KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhbml0bWF0ZSBtYXJnaW4gYW5kIG9wYWNpdHkgYmVmb3JlIGhpZGluZyB0aGUgc3VibWVudVxyXG4gICAgICAgICAgICAvLyB0aGlzIHRyaWdnZXJzIENTUyBUcmFuc2l0aW9uIGV2ZW50XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFyZ2luKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lbnUuZm9jdXMoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfLmlubmVySFRNTCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKHRoaXMuc3ViTWVudS5jb250cm9sVGV4dF8gfHwgdGhpcy5zdWJNZW51LmJ1dHRvblRleHQpKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5hcHBlbmRDaGlsZCh0aGlzLnN1Yk1lbnUubWVudS5lbF8pO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZEVsLmFwcGVuZENoaWxkKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tCdXR0b24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyW3RoaXMuc3ViTWVudS5uYW1lKCldID0gdGhpcy5zdWJNZW51O1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKCkuY29udHJvbEJhclt0aGlzLnN1Yk1lbnUubmFtZSgpXS5zZXRJbml0aWFsVmFsdWVzKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyW3RoaXMuc3ViTWVudS5uYW1lKCldLnNldEluaXRpYWxWYWx1ZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZENsaWNrRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3ViTWVudS5oYXNDbGFzcyhcInZqcy1oaWRkZW5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcmVmaXhlZCBldmVudCBsaXN0ZW5lcnMgZm9yIENTUyBUcmFuc2l0aW9uRW5kXHJcbiAgICAgICAgdGhpcy5QcmVmaXhlZEV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXyxcclxuICAgICAgICAgICAgJ1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyLFxyXG4gICAgICAgICAgICAnYWRkRXZlbnQnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8ucmVtb3ZlQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8ubGFzdENoaWxkKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5hcHBlbmRDaGlsZCh0aGlzLnN1Yk1lbnUubWVudS5lbF8pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja0J1dHRvbigpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFNpemUoKTtcclxuICAgICAgICB0aGlzLmJpbmRDbGlja0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICogVXBkYXRlIHRoZSBzdWIgbWVudXNcclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAbWV0aG9kIHVwZGF0ZVxyXG4gICAgICAgICovXHJcbiAgICB1cGRhdGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc3ViTWVudSA9IHRoaXMuc3ViTWVudS5uYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fLmZvckVhY2goKHN1Yk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKHN1Yk1lbnVJdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViTWVudUl0ZW0uaGFzQ2xhc3MoJ3Zqcy1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfLmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoc3ViTWVudUl0ZW0ub3B0aW9uc18ubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zqcy1iYWNrLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYmluZENsaWNrRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc3ViTWVudS5tZW51LmNoaWxkcmVuKCkuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICAgICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIENvbXBvbmVudCkgfHwgaXRlbS5oYXNDbGFzcygnYW1wLW5vbi1jbGlja2FibGUtZWxlbWVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5vbihbJ3RhcCcsICdjbGljayddLCB0aGlzLnN1Ym1lbnVDbGlja0hhbmRsZXIpO1xyXG4gICAgICAgICAgICBpdGVtLm9uKCdrZXlkb3duJywgdGhpcy5zdWJNZW51S2V5UHJlc3NIYW5kbGVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNhdmUgc2l6ZSBvZiBzdWJtZW51cyBvbiBmaXJzdCBpbml0XHJcbiAgICAvLyBpZiBudW1iZXIgb2Ygc3VibWVudSBpdGVtcyBjaGFuZ2UgZGluYW1pY2FsbHkgbW9yZSBsb2dpYyB3aWxsIGJlIG5lZWRlZFxyXG4gICAgZ2V0U2l6ZSgpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5yZW1vdmVDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2V0dGluZ3NCdXR0b24uZ2V0Q29tcG9uZW50U2l6ZSh0aGlzLnNldHRpbmdzU3ViTWVudUVsXyk7XHJcbiAgICAgICAgdGhpcy5zZXRNYXJnaW4oKTtcclxuICAgICAgICB0aGlzLmRpYWxvZy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFyZ2luKCkge1xyXG4gICAgICAgIGxldCBbd2lkdGhdID0gdGhpcy5zaXplO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5tYXJnaW5SaWdodCA9IGAtJHt3aWR0aH1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAgKiBIaWRlIHRoZSBzdWIgbWVudVxyXG4gICAgICAgICovXHJcbiAgICBoaWRlU3ViTWVudSgpIHtcclxuICAgICAgICAvLyBhZnRlciByZW1vdmluZyBzZXR0aW5ncyBpdGVtIHRoaXMuZWxfID09PSBudWxsXHJcbiAgICAgICAgaWYgKCF0aGlzLmVsXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlkZW9qcy5oYXNDbGFzcyh0aGlzLmVsXywgJ29wZW4nKSkge1xyXG4gICAgICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB2aWRlb2pzLnJlbW92ZUNsYXNzKHRoaXMuZWxfLCAnb3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbk1vcmVPcHRpb25zTWVudUl0ZW0ucHJvdG90eXBlLmNvbnRlbnRFbFR5cGUgPSAnYnV0dG9uJztcclxuXHJcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ01vcmVPcHRpb25zTWVudUl0ZW0nLCBNb3JlT3B0aW9uc01lbnVJdGVtKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9uc01lbnVJdGVtLmpzXG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnJlcXVpcmUoXCIuL01vcmVPcHRpb25zLnNjc3NcIik7XHJcblxyXG5jb25zdCBNZW51ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnUnKTtcclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBDbGlja2FibGVDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ2xpY2thYmxlQ29tcG9uZW50Jyk7XHJcbmNvbnN0IE1vcmVPcHRpb25zTWVudUl0ZW0gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTW9yZU9wdGlvbnNNZW51SXRlbScpO1xyXG5cclxuY2xhc3MgTW9yZU9wdGlvbnNCdXR0b24gZXh0ZW5kcyBDbGlja2FibGVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudCA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBwbGF5ZXIuYWRkQ2hpbGQoJ21vcmVPcHRpb25zRGlhbG9nJyk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dFbCA9IHRoaXMuZGlhbG9nLmVsXztcclxuICAgICAgICB0aGlzLm1lbnUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFuZWwgPSB0aGlzLmRpYWxvZy5hZGRDaGlsZCgnc2V0dGluZ3NQYW5lbCcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZCA9IHRoaXMucGFuZWwuYWRkQ2hpbGQoJ3NldHRpbmdzUGFuZWxDaGlsZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtc2V0dGluZ3MnKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsaXplKCdTZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgaGFuZGxlcnNcclxuICAgICAgICB0aGlzLmFkZFNldHRpbmdzSXRlbUhhbmRsZXIgPSB0aGlzLm9uQWRkU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlU2V0dGluZ3NJdGVtSGFuZGxlciA9IHRoaXMub25EaXNwb3NlU2V0dGluZ3NJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDbGlja0hhbmRsZXIgPSB0aGlzLm9uUGxheWVyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIgPSB0aGlzLm9uVXNlckluYWN0aXZlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3JlT3B0aW9uc0J1dHRvbiA9IHRoaXM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHdvcmsgYXJvdW5kIGZvciB0aGUgb3V0bGluZSwgYmVjYXVzZSB0aGUgZGlhbG9nIGlzIG5vdCBwYXJ0IG9mIHRoZSBjb250cm9sIGJhciBub3cuIFxyXG4gICAgICAgICAgICBsZXQgY29udHJvbHMgPSB0aGlzLiQkKCcudmpzLW1lbnUtaXRlbScsIHRoaXMuZGlhbG9nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbHNbaV0uY2xhc3NMaXN0LmFkZChcIm91dGxpbmUtZW5hYmxlZC1jb250cm9sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY2xpY2thYmxlQ29udHJvbHMgPSBwbGF5ZXIuJCQoJy5vdXRsaW5lLWVuYWJsZWQtY29udHJvbCwgLnZqcy1jb250cm9sJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2thYmxlQ29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUNvbnRyb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiYgZXZlbnQuY2xpZW50WCAhPT0gMCAmJiBldmVudC5jbGllbnRZICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVDbGFzcygnb3V0bGluZS1lbmFibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGVDb250cm9sc1tpXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZENsYXNzKCdvdXRsaW5lLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QbGF5ZXJDbGljayhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2anMtc2V0dGluZ3MnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nLmhhc0NsYXNzKCd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzcG9zZVNldHRpbmdzSXRlbShldmVudCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5tZW51LmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnJlbW92ZUNoaWxkKGNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5tZW51LmdldENoaWxkKG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnNfLmVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRTZXR0aW5nc0l0ZW0oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBsZXQgW2VudHJ5LCBvcHRpb25zXSA9IGRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTWVudUl0ZW0oZW50cnksIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJJbmFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxheWVyQ29tcG9uZW50LnBhdXNlZCgpICYmICF0aGlzLmRpYWxvZy5oYXNDbGFzcygndmpzLWhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignY2xpY2snLCB0aGlzLnBsYXllckNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb21wb25lbnQub24oJ2FkZHNldHRpbmdzaXRlbScsIHRoaXMuYWRkU2V0dGluZ3NJdGVtSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb21wb25lbnQub24oJ2Rpc3Bvc2VzZXR0aW5nc2l0ZW0nLCB0aGlzLmRpc3Bvc2VTZXR0aW5nc0l0ZW1IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbigndXNlcmluYWN0aXZlJywgdGhpcy51c2VySW5hY3RpdmVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENTU0NsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBgYW1wLW1vcmUtb3B0aW9ucy1pY29uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0p1c3RCZWVuQ2xpY2tlZCgpKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jbGVhck90aGVyTWVudXMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlhbG9nLmhhc0NsYXNzKCd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NCdXR0b24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbF8uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlQcmVzcyhldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQud2hpY2ggPT09IDkpe1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuaGFuZGxlS2V5UHJlc3MoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5tZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnNob3coKTtcclxuICAgICAgICB0aGlzLnNldERpYWxvZ1NpemUodGhpcy5nZXRDb21wb25lbnRTaXplKHRoaXMubWVudSkpO1xyXG4gICAgICAgIHRoaXMubWVudS5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLW5vLXRvb2x0aXAnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWRfID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRGlhbG9nKGZvY3VzVG9CdXR0b24gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNldERpYWxvZ1NpemUodGhpcy5nZXRDb21wb25lbnRTaXplKHRoaXMubWVudSkpO1xyXG4gICAgICAgIHRoaXMubWVudS5lbF8uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd2anMtbm8tdG9vbHRpcCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZF8gPSBmYWxzZTtcclxuICAgICAgICBpZihmb2N1c1RvQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXNzQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucHJlc3NCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzSnVzdEJlZW5DbGlja2VkKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnRTaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBudWxsO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDb3VsZCBiZSBjb21wb25lbnQgb3IganVzdCBET00gZWxlbWVudFxyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5lbF8ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZWxfLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIGtlZXAgd2lkdGgvaGVpZ2h0IGFzIHByb3BlcnRpZXMgZm9yIGRpcmVjdCB1c2VcclxuICAgICAgICAgICAgZWxlbWVudC53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBlbGVtZW50LmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFt3aWR0aCwgaGVpZ2h0XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaWFsb2dTaXplKFt3aWR0aCwgaGVpZ2h0XSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gNDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IHRoaXMucGxheWVyQ29tcG9uZW50LmVsXy5vZmZzZXRIZWlnaHQgLSBvZmZzZXQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aCArPSAxNztcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWwuZWxfLnN0eWxlLm1heEhlaWdodCAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ0VsLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRWwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUodGhpcy5wbGF5ZXIoKSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENsYXNzKCd2anMtbWFpbi1tZW51Jyk7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSB0aGlzLm9wdGlvbnNfLmVudHJpZXM7XHJcblxyXG4gICAgICAgIGlmKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbENoaWxkLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XHJcbiAgICAgICAgICAgIGxldCBzdWJJdGVtID0gdGhpcy5hZGRNZW51SXRlbShlbnRyeSwgdGhpcy5vcHRpb25zXyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxDaGlsZC5hZGRDaGlsZCh0aGlzLm1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1lbnVJdGVtKGVudHJ5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3Qgb3BlblN1Yk1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5lbF8sICdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuZWxfLCAnb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gZW50cnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlbnRyeS5zbGljZSgxKTtcclxuICAgICAgICBsZXQgbW9yZU9wdGlvbnNNZW51SXRlbSA9IG5ldyBNb3JlT3B0aW9uc01lbnVJdGVtKHRoaXMucGxheWVyKCksIG9wdGlvbnMsIGVudHJ5LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51LmFkZENoaWxkKG1vcmVPcHRpb25zTWVudUl0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcigpW1wiTW9yZU9wdGlvbnNcIiArIGVudHJ5XSA9IG1vcmVPcHRpb25zTWVudUl0ZW07XHJcblxyXG4gICAgICAgIC8vIEhpZGUgY2hpbGRyZW4gdG8gYXZvaWQgc3ViIG1lbnVzIHN0YWNraW5nIG9uIHRvcCBvZiBlYWNoIG90aGVyXHJcbiAgICAgICAgLy8gb3IgaGF2aW5nIG11bHRpcGxlIG1lbnVzIG9wZW5cclxuICAgICAgICBtb3JlT3B0aW9uc01lbnVJdGVtLm9uKCdjbGljaycsIHZpZGVvanMuYmluZCh0aGlzLCB0aGlzLmhpZGVDaGlsZHJlbikpO1xyXG5cclxuICAgICAgICAvLyBXZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiB0aGUgc2V0dGluZ3Mgc3ViIG1lbnUgZWxlbWVudFxyXG4gICAgICAgIG1vcmVPcHRpb25zTWVudUl0ZW0ub24oJ2NsaWNrJywgb3BlblN1Yk1lbnUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW9yZU9wdGlvbnNNZW51SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldENoaWxkcmVuKCkge1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBhbGwgdGhlIHN1YiBtZW51c1xyXG4gICAgICovXHJcbiAgICBoaWRlQ2hpbGRyZW4oKSB7XHJcbiAgICAgICAgdGhpcy5tZW51LmNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmhpZGVTdWJNZW51KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5tZW51LmNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWVudUNoaWxkLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3MtcGFuZWwnLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NQYW5lbENoaWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1wYW5lbC1jaGlsZCBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogJycsXHJcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gdGhpcy5pZF87XHJcbiAgICAgICAgY29uc3QgZGlhbG9nTGFiZWxJZCA9ICdUVHNldHRpbmdzTW9yZU9wdGlvbnNEaWFsb2dMYWJlbC0nICsgdW5pcXVlSWQ7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nRGVzY3JpcHRpb25JZCA9ICdUVE1vcmVPcHRpb25zRGlhbG9nRGVzY3JpcHRpb24tJyArIHVuaXF1ZUlkO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLW1vcmVvcHRpb25zLWRpYWxvZyB2anMtbW9kYWwtb3ZlcmxheScsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogJycsXHJcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGRpYWxvZ0xhYmVsSWQsXHJcbiAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogZGlhbG9nRGVzY3JpcHRpb25JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuTW9yZU9wdGlvbnNCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdTZXR0aW5ncyc7XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vcmVPcHRpb25zQnV0dG9uJywgTW9yZU9wdGlvbnNCdXR0b24pO1xyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vcmVPcHRpb25zRGlhbG9nJywgTW9yZU9wdGlvbnNEaWFsb2cpO1xyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NldHRpbmdzUGFuZWwnLCBTZXR0aW5nc1BhbmVsKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc1BhbmVsQ2hpbGQnLCBTZXR0aW5nc1BhbmVsQ2hpbGQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iLCJjb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL0NhcHRpb25Ub2dnbGUuc2Nzc1wiKTtcclxuXHJcbmNsYXNzIENhcHRpb25Ub2dnbGUgZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ2NhcHRpb25Ub2dnbGUnO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHJhY2tMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllci5jYXB0aW9uVG9nZ2xlID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcbiAgICAgICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tzW2ldWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnIHx8IHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0xpc3QucHVzaCh0cmFja3NbaV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy50cmFja0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRoaXMudHJhY2tMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtY2FwdGlvbi10b2dnbGUgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvblByZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhY2tUb1NlbGVjdFsnbW9kZSddID0gJ3Nob3dpbmcnO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrID0gdHJhY2tUb1NlbGVjdDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRoaXMubGFzdFNlbGVjdGVkVHJhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyXy5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhY2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrTGlzdFtpXVsnbW9kZSddID0gJ2Rpc2FibGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcl8ubW9yZU9wdGlvbnNCdXR0b24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0cmFja1RvU2VsZWN0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFja3NbaV1bJ21vZGUnXSA9PT0gJ3Nob3dpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUcmFjayA9IHRyYWNrc1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5ncyh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIGxldCB0cmFja1RvU2VsZWN0ID0gdGhpcy5nZXRUcmFja1RvU2VsZWN0KHRyYWNrcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFja1RvU2VsZWN0KHRyYWNrcykge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTZWxlY3RlZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrc1tpXVsna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja1RvU2VsZWN0ID0gdHJhY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0cmFja1RvU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRyYWNrVG9TZWxlY3QgPSB0cmFja3NbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cmFja1RvU2VsZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0cmluZ3ModHJhY2ssIGNsaWNrZWQpIHtcclxuICAgICAgICBsZXQgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgbGV0IGFyaWFMYWJlbCA9ICdDYXB0aW9ucyBhcmUgY3VycmVudGx5IG9mZiwgQ2FwdGlvbiB0b2dnbGUnO1xyXG4gICAgICAgIGlmICh0cmFja1sna2luZCddID09PSAnY2FwdGlvbnMnICYmICFjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnQ2FwdGlvbnMgb24nO1xyXG4gICAgICAgICAgICBhcmlhTGFiZWwgPSAnQ2FwdGlvbnMgYXJlIGN1cnJlbnRseSBvZmYsIENhcHRpb24gdG9nZ2xlJztcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycgJiYgY2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ0NhcHRpb25zIG9mZic7XHJcbiAgICAgICAgICAgIGFyaWFMYWJlbCA9ICdDYXB0aW9ucyBhcmUgY3VycmVudGx5IG9uLCBDYXB0aW9uIHRvZ2dsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyYWNrWydraW5kJ10gPT09ICdzdWJ0aXRsZXMnICYmICFjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnU3VidGl0bGVzIG9uJztcclxuICAgICAgICAgICAgYXJpYUxhYmVsID0gJ1N1YnRpdGxlcyBhcmUgY3VycmVudGx5IG9mZiwgU3VidGl0bGUgdG9nZ2xlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ3N1YnRpdGxlcycgJiYgY2xpY2tlZCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ1N1YnRpdGxlcyBvZmYnO1xyXG4gICAgICAgICAgICBhcmlhTGFiZWwgPSAnU3VidGl0bGVzIGFyZSBjdXJyZW50bHkgb24sIFN1YnRpdGxlIHRvZ2dsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUodGV4dCkpKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxvY2FsaXplKGFyaWFMYWJlbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5DYXB0aW9uVG9nZ2xlLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnU3VidGl0bGVzL0NDJztcclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblRvZ2dsZScsIENhcHRpb25Ub2dnbGUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsInZhciBNb3VzZVRpbWVEaXNwbGF5ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01vdXNlVGltZURpc3BsYXknKTtcclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5cclxucmVxdWlyZSgnLi9Nb3VzZVRpbWVUb29sdGlwLnNjc3MnKTtcclxuXHJcbmNsYXNzIE1vdXNlVGltZVRvb2x0aXAgZXh0ZW5kcyBNb3VzZVRpbWVEaXNwbGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbHRpcFBvaW50ZXIgPSB2aWRlb2pzLmNyZWF0ZUVsKCdzcGFuJywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbXAtdGltZS10b29sdGlwLXBvaW50ZXInXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMudG9vbHRpcFBvaW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShuZXdUaW1lLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShuZXdUaW1lLCBwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBBbXBUb29sdGlwUG9zaXRpb25fKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKCkuY29udHJvbEJhciAmJiB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sICYmIHRoaXMucGxheWVyKCkuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuc2Vla0Jhcikge1xyXG4gICAgICAgICAgICBsZXQgc2Vla0JhcldpZHRoID0gdGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyLnByb2dyZXNzQ29udHJvbC5zZWVrQmFyLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXJXaWR0aCA9IHRoaXMucGxheWVyKCkud2lkdGgoKTtcclxuICAgICAgICAgICAgbGV0IHNlZWtCYXJQYWRkaW5nID0gKHBsYXllcldpZHRoIC0gc2Vla0JhcldpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIGxldCB0b29sdGlwV2lkdGhIYWxmID0gdGhpcy50b29sdGlwU3Bhbi5vZmZzZXRXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWxQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgdG9vbHRpcFdpZHRoSGFsZiAtIHNlZWtCYXJQYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWxQb3NpdGlvbiA9IE1hdGguY2VpbCh0aGlzLnRvb2x0aXBTcGFuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gcG9zaXRpb24gLSBzZWVrQmFyUGFkZGluZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPiAoc2Vla0JhcldpZHRoIC0gdG9vbHRpcFdpZHRoSGFsZiArIHNlZWtCYXJQYWRkaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsUG9zaXRpb24gPSBNYXRoLmZsb29yKHNlZWtCYXJXaWR0aCAtIHBvc2l0aW9uICsgc2Vla0JhclBhZGRpbmcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsUG9zaXRpb24gPSB0b29sdGlwV2lkdGhIYWxmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNwYW4uc3R5bGUucmlnaHQgPSAtYWN0dWFsUG9zaXRpb24gKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdNb3VzZVRpbWVUb29sdGlwJywgTW91c2VUaW1lVG9vbHRpcCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvTW91c2VUaW1lVG9vbHRpcC9Nb3VzZVRpbWVUb29sdGlwLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwiLy8gQ2hhbmdpbmcgaG92ZXIgdG8gY2xpY2tzIG9uIGNvbnRyb2wgYnV0dG9ucy5cclxudmFyIE1lbnVCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUJ1dHRvbicpO1xyXG5cclxuTWVudUJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvblByZXNzZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVCdXR0b24ucHJvdG90eXBlLmhhbmRsZU1vdXNlT3ZlciA9IGZ1bmN0aW9uICgpIHsgfVxyXG5NZW51QnV0dG9uLnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkgeyB9XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9hbXBPdmVycmlkZXMuanNcbiAqKi8iLCJhbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQ2FwdGlvbnMgb2ZmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkNhcHRpb25zIG9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkNhcHRpb25zIC8gU3VidGl0bGVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiUmV2ZXJzZSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlJldmVyc2Ugc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJMYXJnZVwiXSA9IFwiTGFyZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGl1bVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlNtYWxsXCJdID0gXCJTbWFsbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJGdWxsIHNjcmVlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkV4aXQgZnVsbCBzY3JlZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJPZmZcIl0gPSBcIk9mZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJQbGF5YmFjayBzcGVlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlNldHRpbmdzXCJdID0gXCJTZXR0aW5nc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidGl0bGVzIG9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0bGVzIG9mZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGhlYXRlciBtb2RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkV4aXQgdGhlYXRlciBtb2RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW8gcXVhbGl0eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU2VhcmNoXCJdID0gXCJTZWFyY2hcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJBdXRvXCJdID0gXCJBdXRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiT25cIl0gPSBcIk9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXh0IGNvbG9yOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGV4dCBzaXplOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiQmFjayB0byBtYWluIG1lbnVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi2LTZgdin2YHZitipINin2YTYrtmE2YHZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLYpdmK2YLYp9mBINiq2LTYutmK2YQg2KfZhNiq2LPZhdmK2KfYqiDYp9mE2KrZiNi22YrYrdmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi2KrYtNi62YrZhCDYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqSAvINin2YTYudmG2KfZiNmK2YYg2KfZhNmB2LHYudmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi2KXYudiv2KfYr9in2Kog2KfZhNiq2LPZhdmK2KfYqiDYp9mE2KrZiNi22YrYrdmK2KkgLyDYp9mE2LnZhtin2YjZitmGINin2YTZgdix2LnZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi2LnZg9izINin2YTYqNmG2Yog2KfZhNiv2KfZg9mGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi2LnZg9izINin2YTZgtmK2KfYs9mKXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU2VwaWFcIl0gPSBcItin2YTYqNmG2Yog2KfZhNiv2KfZg9mGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU3RhbmRhcmRcIl0gPSBcItmC2YrYp9iz2YpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJMYXJnZVwiXSA9IFwi2YPYqNmK2LFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJNZWRpdW1cIl0gPSBcItmF2KrZiNiz2LdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTbWFsbFwiXSA9IFwi2LXYutmK2LFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi2YXZhNihINin2YTYtNin2LTYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItil2YbZh9in2KEg2LnYsdi2INmF2YTYoSDYp9mE2LTYp9i02KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJPZmZcIl0gPSBcIuKAj+KAj9il2YrZgtin2YEg2KfZhNiq2LTYutmK2YRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi2LPYsdi52Kkg2KfZhNiq2LTYutmK2YRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi2KfZhNix2KzZiNi5INil2YTZiSDYp9mE2KXYudiv2KfYr9in2Kog2KfZhNin2YHYqtix2KfYttmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTZXR0aW5nc1wiXSA9IFwi2KXYudiv2KfYr9in2KpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItiq2LTYutmK2YQg2KfZhNi52YbYp9mI2YrZhiDYp9mE2YHYsdi52YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItil2YrZgtin2YEg2KrYtNi62YrZhCDYp9mE2LnZhtin2YjZitmGINin2YTZgdix2LnZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLZiNi22Lkg2KfZhNmF2LPYsditXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItil2YbZh9in2KEg2LnYsdi2INmI2LbYuSDYp9mE2YXYs9ix2K1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLYrNmI2K/YqSDZhdmC2LfYuSDYp9mE2YHZitiv2YrZiFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwi2LnYsdi2INmB2YogTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlNlYXJjaFwiXSA9IFwi2KjYrdirXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQXV0b1wiXSA9IFwi2KrZhNmC2KfYptmKXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQ0NcIl0gPSBcItmG2LPYrtipINil2YTZiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIk9uXCJdID0gXCLigI/igI/Yqti02LrZitmEXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLZhNmI2YYg2KfZhNmG2LU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLYrdis2YUg2KfZhNmG2LU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLYp9mE2LnZiNiv2Kkg2KXZhNmJINin2YTZgtin2KbZhdipINin2YTYsdim2YrYs9mK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfRgNCw0YfQvdC+0YHRgiDQvdCwINGE0L7QvdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQndCw0LTQv9C40YHQuCDQuNC30LrQu9GO0YfQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0J3QsNC00L/QuNGB0Lgg0LLQutC70Y7Rh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLQndCw0LTQv9C40YHQuC/RgdGD0LHRgtC40YLRgNC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcItCd0LDRgdGC0YDQvtC50LrQuCDQvdCwINC90LDQtNC/0LjRgdC4L9GB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQntCx0YDRitGJ0LDQvdC1INC90LAg0YHQtdC/0LjRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCe0LHRgNGK0YnQsNC90LUg0L3QsCDRgdGC0LDQvdC00LDRgNGC0L3QuCDRhtCy0LXRgtC+0LLQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiTGFyZ2VcIl0gPSBcItCT0L7Qu9GP0LzQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIk1lZGl1bVwiXSA9IFwi0KHRgNC10LTQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU21hbGxcIl0gPSBcItCc0LDQu9C60L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi0KbRj9C7INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQmNC30YXQvtC0INC+0YIg0YbRj9C7INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJPZmZcIl0gPSBcItCY0LfQutC70Y7Rh9C10L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQodC60L7RgNC+0YHRgiDQvdCwINCy0YrQt9C/0YDQvtC40LfQstC10LbQtNCw0L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQktGA0YrRidCw0L3QtSDQtNC+INC90LDRgdGC0YDQvtC50LrQuCDQv9C+INC/0L7QtNGA0LDQt9Cx0LjRgNCw0L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlNldHRpbmdzXCJdID0gXCLQndCw0YHRgtGA0L7QudC60LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCh0YPQsdGC0LjRgtGA0Lgg0LLQutC70Y7Rh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0Lgg0LjQt9C60LvRjtGH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQoNC10LbQuNC8IOKAntC60LjQvdC+4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCY0LfRhdC+0LQg0L7RgiDRgNC10LbQuNC8IOKAntC60LjQvdC+4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0JrQsNGH0LXRgdGC0LLQviDQvdCwINCy0LjQtNC10L7QutC70LjQv9CwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9GA0LXQs9C70LXQtCDQsiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU2VhcmNoXCJdID0gXCLQotGK0YDRgdC10L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkF1dG9cIl0gPSBcItCQ0LLRgtC+0LzQsNGC0LjRh9C90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDQ1wiXSA9IFwi0K/QmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIk9uXCJdID0gXCLQktC60LsuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQptCy0Y/RgiDQvdCwINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCg0LDQt9C80LXRgCDQvdCwINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCd0LDQt9Cw0LQg0LrRitC8INCz0LvQsNCy0L3QvtGC0L4g0LzQtdC90Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXLDqG5jaWEgZGVsIGZvbnNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlN1YnTDrXRvbHMgZGVzYWN0aXZhdHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU3VidMOtdG9scyBhY3RpdmF0c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJTdWJ0w610b2xzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7MgZGVscyBzdWJ0w610b2xzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU8OocGlhIGludmVyc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkVzdMOgbmRhcmQgaW52ZXJzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU2VwaWFcIl0gPSBcIlPDqHBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3TDoG5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiTGFyZ2VcIl0gPSBcIkdyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJNZWRpdW1cIl0gPSBcIk1pdGrDoFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlNtYWxsXCJdID0gXCJQZXRpdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU3VydCBkZSBsYSBwYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiT2ZmXCJdID0gXCJEZXNhY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaXRhdCBkZSByZXByb2R1Y2Npw7NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVG9ybmEgYSBsYSBjb25maWd1cmFjacOzIHBlciBkZWZlY3RlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnTDrXRvbHMgYWN0aXZhdHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610b2xzIGRlc2FjdGl2YXRzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RlIGRlIHBhbnRhbGxhIHNlbmNlcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiU3VydCBkZWwgbW9kZSBkZSBwYW50YWxsYSBzZW5jZXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGl0YXQgZGUgdsOtZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXN1YWxpdHphLWhvIGFsIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTZWFyY2hcIl0gPSBcIkNlcmNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQXV0b1wiXSA9IFwiQXV0b23DoHRpY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNDXCJdID0gXCJBL0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJPblwiXSA9IFwiQWN0aXZhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29sb3IgZGVsIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJNaWRhIGRlbCB0ZXh0OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVG9ybmEgYWwgbWVuw7ogcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByxa9obGVkbm9zdCBwb3phZMOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJQb3Bpc2t5IHZ5cG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiUG9waXNreSB6YXBudXR5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlBvcGlza3kgbmVibyB0aXR1bGt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuw60gcHJvIHBvcGlza3kgbmVibyB0aXR1bGt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiT2Jyw6F0aXQgc8OpcGlvdsO9IHTDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPYnLDoXRpdCBzdGFuZGFyZG7DrSB0w7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpb3bDvSB0w7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiTGFyZ2VcIl0gPSBcIlZlbGvDvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIk1lZGl1bVwiXSA9IFwiU3TFmWVkbsOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU21hbGxcIl0gPSBcIk1hbMO9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkNlbMOhIG9icmF6b3ZrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlVrb27EjWl0IHJlxb5pbSBjZWzDqSBvYnJhem92a3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJPZmZcIl0gPSBcIlZ5cG51dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiUnljaGxvc3QgcMWZZWhyw6F2w6Fuw61cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVnLDoXRpdCB2w71jaG96w60gbmFzdGF2ZW7DrVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlNldHRpbmdzXCJdID0gXCJOYXN0YXZlbsOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJUaXR1bGt5IHphcG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlJlxb5pbSBjZWzDqSBvYnJhem92a3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVWtvbsSNaXQgcmXFvmltIGNlbMOpIG9icmF6b3ZreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkt2YWxpdGEgdmlkZWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlpvYnJheml0IHZlIHNsdcW+YsSbIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTZWFyY2hcIl0gPSBcIkhsZWRhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpY2t5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQ0NcIl0gPSBcIktvcGllXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiT25cIl0gPSBcIlphcG51dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJhcnZhIHRleHR1OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVmVsaWtvc3QgdGV4dHU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJacMSbdCBuYSBobGF2bsOtIG5hYsOtZGt1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkJhZ2dydW5kc2dlbm5lbXNpZ3RpZ2hlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVW5kZXJ0ZWtzdGVyIGZyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJVbmRlcnRla3N0ZXIgdGlsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlVuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbmRzdGlsbGluZ2VyIGZvciB1bmRlcnRla3N0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJUaWxiYWdlZsO4ciBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlRpbGJhZ2Vmw7hyIHRpbCBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiTWVkaXVtXCJdID0gXCJNZWxsZW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJTbWFsbFwiXSA9IFwiTGlsbGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiRnVsZCBza8Omcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJBZnNsdXQgZnVsZCBza8Omcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJPZmZcIl0gPSBcIkZyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBZnNwaWxuaW5nc2hhc3RpZ2hlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHZW5kYW4gc3RhbmRhcmRpbmRzdGlsbGluZ2VybmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5kc3RpbGxpbmdlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiVW5kZXJ0ZWtzdGVyIHRpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlVuZGVydGVrc3RlciBmcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIkJpb2dyYWZ0aWxzdGFuZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJBZnNsdXQgYmlvZ3JhZnRpbHN0YW5kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW9rdmFsaXRldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmlzIGkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNlYXJjaFwiXSA9IFwiU8O4Z1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpc2tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJDQ1wiXSA9IFwiQ2NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJPblwiXSA9IFwiVGlsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGZhcnZlOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdHN0w7hycmVsc2U6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlRpbGJhZ2UgdGlsIGhvdmVkbWVudWVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkhpbnRlcmdydW5kdHJhbnNwYXJlbnpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlIGRlYWt0aXZpZXJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJVbnRlcnRpdGVsIGbDvHIgSMO2cmdlc2Now6RkaWd0ZSBha3RpdmllcmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlL1VudGVydGl0ZWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiRWluc3RlbGx1bmdlbiBmw7xyIFVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlL1VudGVydGl0ZWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJJbnZlcnRpZXJ0IFNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiSW52ZXJ0aWVydCBTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkxhcmdlXCJdID0gXCJHcm/Dn1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIk1lZGl1bVwiXSA9IFwiTWl0dGVsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU21hbGxcIl0gPSBcIktsZWluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlZvbGxiaWxkbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsYmlsZHNjaGlybSBiZWVuZGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiT2ZmXCJdID0gXCJBdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiV2llZGVyZ2FiZWdlc2Nod2luZGlna2VpdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJTdGFuZGFyZGVpbnN0ZWxsdW5nZW4gd2llZGVyaGVyc3RlbGxlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlNldHRpbmdzXCJdID0gXCJFaW5zdGVsbHVuZ2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJVbnRlcnRpdGVsIGFrdGl2aWVyZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJVbnRlcnRpdGVsIGRlYWt0aXZpZXJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiS2lub21vZHVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktpbm9tb2R1cyBiZWVuZGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW9xdWFsaXTDpHRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkluIE1pY3Jvc29mdCBTdHJlYW0gYW56ZWlnZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTZWFyY2hcIl0gPSBcIlN1Y2hlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpc2NoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQ0NcIl0gPSBcIkNjXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiT25cIl0gPSBcIkVpblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGV4dGZhcmJlOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGV4dGdyw7bDn2U6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJadXLDvGNrIHp1bSBIYXVwdG1lbsO8XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIs6UzrnOsc+GzqzOvc61zrnOsSDPhs+Mzr3PhM6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIs6Rz4DOtc69zrXPgc6zzr/PgM6/zq/Ot8+DzrcgzrvOtc62zrHOvc+Ez47OvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLOlc69zrXPgc6zzr/PgM6/zq/Ot8+DzrcgzrvOtc62zrHOvc+Ez47OvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLOm861zrbOrM69z4TOtc+CL8+Fz4DPjM+EzrnPhM67zr/OuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLOoc+FzrjOvM6vz4POtc65z4IgzrvOtc62zrHOvc+Ez47OvS/Phc+Az4zPhM65z4TOu8+Jzr1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLOo86tz4DOuc6xIM68zrUgzrHOvc+EzrnPg8+Ez4HOv8+Gzq5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLOpM+Fz4DOuc66zq4gzrHOvc+EzrnPg8+Ez4HOv8+Gzq5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZXBpYVwiXSA9IFwizqPOrc+AzrnOsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlN0YW5kYXJkXCJdID0gXCLOpM+Fz4DOuc66z4xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJMYXJnZVwiXSA9IFwizpzOtc6zzqzOu86/XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiTWVkaXVtXCJdID0gXCLOnM61z4POsc6vzrFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTbWFsbFwiXSA9IFwizpzOuc66z4HPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLOoM67zq7Pgc63z4Igzr/OuM+Mzr3Ot1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIs6Izr7Ov860zr/PgiDOsc+Az4wgz4TOt869IM+AzrvOrs+Bzrcgzr/OuM+Mzr3Ot1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIk9mZlwiXSA9IFwizpHOvc61zr3Otc+BzrPPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLOpM6xz4fPjc+EzrfPhM6xIM6xzr3Osc+AzrHPgc6xzrPPic6zzq7PglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLOlc+AzrHOvc6xz4bOv8+Bzqwgz4PPhM65z4Igz4DPgc6/zrXPgM65zrvOtc6zzrzOrc69zrXPgiDPgc+FzrjOvM6vz4POtc65z4JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZXR0aW5nc1wiXSA9IFwizqHPhc64zrzOr8+DzrXOuc+CXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLOlc69zrXPgc6zzr/PgM6/zq/Ot8+Dzrcgz4XPgM+Mz4TOuc+EzrvPic69XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwizpHPgM61zr3Otc+BzrPOv8+Azr/Or863z4POtyDPhc+Az4zPhM65z4TOu8+Jzr1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIs6bzrXOuc+Ezr/Phc+BzrPOr86xIM66zrnOvc63zrzOsc+Ezr/Os8+BzqzPhs6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwizojOvs6/zrTOv8+CIM6xz4DPjCDPhM63IM67zrXOuc+Ezr/Phc+BzrPOr86xIM66zrnOvc63zrzOsc+Ezr/Os8+BzqzPhs6/z4VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLOoM6/zrnPjM+EzrfPhM6xIM6yzq/Ovc+EzrXOv1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwizqDPgc6/zrLOv867zq4gz4PPhM6/IE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTZWFyY2hcIl0gPSBcIs6Rzr3Osc62zq7PhM63z4POt1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkF1dG9cIl0gPSBcIs6Rz4XPhM+MzrzOsc+Ezr9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJDQ1wiXSA9IFwizprOv865zr0uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiT25cIl0gPSBcIs6Vzr3Otc+BzrPPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwizqfPgc+OzrzOsSDOus61zrnOvM6tzr3Ov8+FOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLOnM6tzrPOtc64zr/PgiDOus61zrnOvM6tzr3Ov8+FOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLOlc+AzrnPg8+Ez4HOv8+Gzq4gz4PPhM6/IM66z43Pgc65zr8gzrzOtc69zr/PjVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuY2lhIGVuIHNlZ3VuZG8gcGxhbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkRlc2FjdGl2YXIgdMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQWN0aXZhciB0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUw610dWxvcy9zdWJ0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJDb25maWd1cmFjacOzbiBkZSB0w610dWxvcy9zdWJ0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkludmVydGlyIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiSW52ZXJ0aXIgZXN0w6FuZGFyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIkVzdMOhbmRhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU21hbGxcIl0gPSBcIlBlcXVlw7FvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2FsaXIgZGUgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJPZmZcIl0gPSBcIkRlc2FjdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZCBkZSByZXByb2R1Y2Npw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGlyIGEgbGEgY29uZmlndXJhY2nDs24gcHJlZGV0ZXJtaW5hZGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkFjdGl2YXIgc3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJEZXNhY3RpdmFyIHN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RvIGRlIHBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlNhbGlyIGRlbCBtb2RvIGRlIHBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQ2FsaWRhZCBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlciBlbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiU2VhcmNoXCJdID0gXCJCdXNjYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJBdXRvXCJdID0gXCJBdXRvbcOhdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIk9uXCJdID0gXCJBY3RpdmFkb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29sb3IgZGVsIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGFtYcOxbyBkZWwgdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWb2x2ZXIgYWwgbWVuw7ogcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRhdXN0YSBsw6RiaXBhaXN0dnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMw7xsaXRhIHBlYWxkaXNlZCB2w6RsamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTMO8bGl0YSBwZWFsZGlzZWQgc2lzc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiUGVhbGRpc2VkL3N1YnRpaXRyaWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUGVhbGRpc3RlL3N1YnRpaXRyaXRlIHPDpHR0ZWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJUw7xoaXN0YSBzZWVwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJUw7xoaXN0YSBzdGFuZGFyZG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2VwaWFcIl0gPSBcIlNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkxhcmdlXCJdID0gXCJTdXVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiTWVkaXVtXCJdID0gXCJLZXNrbWluZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlNtYWxsXCJdID0gXCJWw6Rpa2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiVMOkaXNla3JhYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWw6RsanUgdMOkaXNla3JhYW5pc3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJPZmZcIl0gPSBcIlbDpGxqYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVGFhc2VzaXR1c2Uga2lpcnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkVubmlzdGEgdmFpa2Vzw6R0dGVkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIlPDpHR0ZWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkzDvGxpdGEgc3VidGlpdHJpZCBzaXNzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkzDvGxpdGEgc3VidGlpdHJpZCB2w6RsamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlRlYXRyaXJlxb5paW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVsOkbGp1IHRlYXRyaXJlxb5paW1pc3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBrdmFsaXRlZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkt1dmEgTWljcm9zb2Z0IFN0cmVhbWlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU2VhcmNoXCJdID0gXCJPdHNpbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWFhdG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiQ0NcIl0gPSBcIktvb3BpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIk9uXCJdID0gXCJTZWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGkgdsOkcnY6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdGkgc3V1cnVzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGFnYXNpIHBlYW1lbsO8w7xzc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiQXR6ZWtvIHBsYW5vYXJlbiBnYXJkZW50YXN1bmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkVwaWdyYWZlYWsgZGVzYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJFcGlncmFmZWFrIGFrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiRXBpZ3JhZmVhay9BenBpdGl0dWx1YWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiRXBpZ3JhZmVlbiBlZG8gYXpwaXRpdHVsdWVuIGV6YXJwZW5ha1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlNlcGlhLXRvbnVhIGFsZGVyYW50emlrYXR1YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkVzdGFuZGFyIGFsZGVyYW50emlrYXR1YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYS10b251YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3RhbmRhcnJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiTGFyZ2VcIl0gPSBcIkhhbmRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIk1lZGl1bVwiXSA9IFwiRXJ0YWluYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlNtYWxsXCJdID0gXCJUeGlraWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGFudGFpbGEgb3NvYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIklydGVuIHBhbnRhaWxhIG9zb2tvIG1vZHV0aWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJPZmZcIl0gPSBcIkRlc2FrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiRXJyZXByb2R1a3ppb2FyZW4gYWJpYWR1cmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiTGVoZW5lcmF0dSBlemFycGVuIGxlaGVuZXRzaWFrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkV6YXJwZW5ha1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiQXpwaXRpdHVsdWFrIGFrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJBenBpdGl0dWx1YWsgZGVzYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiWmluZW1hIG1vZHVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIklydGVuIHppbmVtYSBtb2R1dGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQmlkZW8ta2FsaXRhdGVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJJa3VzaSBNaWNyb3NvZnQgU3RyZWFtLWVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU2VhcmNoXCJdID0gXCJCaWxhdHVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWtvYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIk9uXCJdID0gXCJBa3RpYmF0dXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXN0dWFyZW4ga29sb3JlYTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRlc3R1YXJlbiB0YW1haW5hOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiSXR6dWxpIG1lbnUgbmFndXNpcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVGF1c3RhbiBsw6RwaW7DpGt5dnl5c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGVrc3RpdHlzIGVpIGvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlRla3N0aXR5cyBrw6R5dMO2c3PDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUZWtzdGl0eXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGVrc3RpdHlzYXNldHVrc2V0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiS8Okw6RudGVpbmVuIHNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkvDpMOkbnRlaW5lbiB2YWtpb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlNlcGlhXCJdID0gXCJTZWVwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTdGFuZGFyZFwiXSA9IFwiTm9ybWFhbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJMYXJnZVwiXSA9IFwiU3V1cmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJNZWRpdW1cIl0gPSBcIk5vcm1hYWxpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU21hbGxcIl0gPSBcIlBpZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIktva28gbsOkeXR0w7ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJQb2lzdHUga29rbyBuw6R5dMO2biB0aWxhc3RhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiT2ZmXCJdID0gXCJFaSBrw6R5dMO2c3PDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJUb2lzdG9ub3BldXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUGFsYXV0YSBvbGV0dXNhc2V0dWtzZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQXNldHVrc2V0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJUZWtzdGl0eXMga8OkeXTDtnNzw6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUZWtzdGl0eXMgcG9pcyBrw6R5dMO2c3TDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGVhdHRlcml0aWxhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlBvaXN0dSB0ZWF0dGVyaXRpbGFzdGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb24gbGFhdHVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIk7DpHl0w6QgTWljcm9zb2Z0IFN0cmVhbWlzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU2VhcmNoXCJdID0gXCJIYWVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWFhdHRpbmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ0NcIl0gPSBcIktvcGlvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiT25cIl0gPSBcIkvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGluIHbDpHJpOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RpbiBrb2tvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGFrYWlzaW4gcMOkw6R2YWxpa2tvb25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXJlbmNlIGRlIGwnYXJyacOocmUtcGxhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTMOpZ2VuZGVzIGTDqXNhY3RpdsOpZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTMOpZ2VuZGVzIGFjdGl2w6llc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMw6lnZW5kZXMvc291cy10aXRyZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUGFyYW3DqHRyZXMgZGVzIGzDqWdlbmRlcy9zb3VzLXRpdHJlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkFubnVsZXIgbGUgdG9uIHPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlLDqXRhYmxpciBsYSBjb3VsZXVyIHN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIk1lZGl1bVwiXSA9IFwiTW95ZW5uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlNtYWxsXCJdID0gXCJQZXRpdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGxlaW4gw6ljcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiUXVpdHRlciBsZSBwbGVpbiDDqWNyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJPZmZcIl0gPSBcIkTDqXNhY3RpdsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZpdGVzc2UgZGUgbGVjdHVyZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSw6l0YWJsaXIgbGVzIHBhcmFtw6h0cmVzIHBhciBkw6lmYXV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBhcmFtw6h0cmVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTb3VzLXRpdHJlcyBhY3RpdsOpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlNvdXMtdGl0cmVzIGTDqXNhY3RpdsOpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kZSBjaW7DqW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlF1aXR0ZXIgbGUgbW9kZSBjaW7DqW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGl0w6kgdmlkw6lvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJBZmZpY2hlciBkYW5zIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJTZWFyY2hcIl0gPSBcIlJlY2hlcmNoZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aXF1ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIk9uXCJdID0gXCJBY3RpdsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb3VsZXVyIGR1IHRleHRlwqA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYWlsbGUgZHUgdGV4dGXCoDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlJldG91ciBhdSBtZW51IHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuY2lhIGRvIGZvbmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU3VidMOtdHVsb3MgYWN0aXZhZG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NuIGRlIHN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiSW52ZXJ0ZXIgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJJbnZlcnRlciBlc3TDoW5kYXIgaW52ZXJzb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlN0YW5kYXJkXCJdID0gXCJFc3TDoW5kYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlNtYWxsXCJdID0gXCJQZXF1ZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBhbnRhbGxhIGNvbXBsZXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2HDrXIgZGEgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJPZmZcIl0gPSBcIkRlc2FjdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdWNpw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkludmVydGVyIMOhIGNvbmZpZ3VyYWNpw7NuIHByZWRlZmluaWRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTdWJ0w610dWxvcyBhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZG8gY2luZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTYcOtciBkbyBtb2RvIGNpbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJDYWxpZGFkZSBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlciBlbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU2VhcmNoXCJdID0gXCJCdXNjYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJBdXRvXCJdID0gXCJBdXRvbcOhdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIk9uXCJdID0gXCJPblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29yIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGFtYcOxbyBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlZvbHZlciBhbyBtZW7DuiBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi16nXp9eZ16TXldeqINeo16fXolwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi15vXqteV15HXmdeV16og15zXm9eR15PXmSDXqdee15nXoteUINeb15HXldeZ15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLXm9eq15XXkdeZ15XXqiDXnNeb15HXk9eZINep157Xmdei15Qg16TXldei15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIteb16rXldeR15nXldeqINec15vXkdeT15kg16nXnteZ16LXlCAvINeb16rXldeR15nXldeqINeo15LXmdec15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLXlNeS15PXqNeV16og15vXqteV15HXmdeV16og15zXm9eR15PXmSDXqdee15nXoteUIC8g15vXqteV15HXmdeV16og16jXkteZ15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi15fXldedINeb15TXlCDXlNek15XXmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItem15HXoiDXqNeS15nXnCDXlNek15XXmlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlNlcGlhXCJdID0gXCLXl9eV150g15vXlNeUXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU3RhbmRhcmRcIl0gPSBcIteo15LXmdecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiTGFyZ2VcIl0gPSBcIteS15PXldecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiTWVkaXVtXCJdID0gXCLXkdeZ16DXldeg15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTbWFsbFwiXSA9IFwi16fXmNefXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItee16HXmiDXntec15BcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLXpteQINee157XodeaINee15zXkFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIk9mZlwiXSA9IFwi4oCP4oCP15vXkdeV15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi157XlNeZ16jXldeqINeU16TXotec15RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi15fXlteV16gg15zXlNeS15PXqNeV16og15HXqNeZ16jXqiDXlNee15fXk9ecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU2V0dGluZ3NcIl0gPSBcIteU15LXk9eo15XXqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi15vXqteV15HXmdeV16og16TXldei15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi15vXqteV15HXmdeV16og15vXkdeV15nXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLXntem15Eg16fXldec16DXldeiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItem15Ag157Xntem15Eg16fXldec16DXldeiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi15DXmdeb15XXqiDXldeZ15PXkNeVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLXlNem15Ig15EtIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTZWFyY2hcIl0gPSBcIteX16TXqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkF1dG9cIl0gPSBcIteQ15XXmNeV157XmNeZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ0NcIl0gPSBcIteb16rXldeR15nXldeqINee16fXldeT15PXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiT25cIl0gPSBcIuKAj+KAj9ek15XXotecXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLXpteR16Ig15jXp9eh15g6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLXkteV15PXnCDXmNen16HXmDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIteX15bXqNeUINec16rXpNeo15nXmCDXlNeo15DXqdeZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuCkquClg+Ckt+CljeCkoOCkreClguCkruCkvyDgpKrgpL7gpLDgpKbgpLDgpY3gpLbgpL/gpKTgpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuCkleCliOCkquCljeCktuCkqCDgpKzgpILgpKYg4KSV4KSw4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIuCkleCliOCkquCljeCktuCkqCDgpJrgpL7gpLLgpYIg4KSV4KSw4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuCkleCliOCkquCljeCktuCkqCAvIOCkieCkquCktuClgOCksOCljeCkt+CklVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLgpJXgpYjgpKrgpY3gpLbgpKggLyDgpIngpKrgpLbgpYDgpLDgpY3gpLfgpJUg4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi4KSw4KS/4KS14KSw4KWN4KS4IOCkuOClh+CkquCkv+Ckr+CkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIuCksOCkv+CkteCksOCljeCkuCDgpK7gpL7gpKjgpJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTZXBpYVwiXSA9IFwi4KS44KWH4KSq4KS/4KSv4KS+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU3RhbmRhcmRcIl0gPSBcIuCkruCkvuCkqOCklVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkxhcmdlXCJdID0gXCLgpKzgpKHgpLzgpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJNZWRpdW1cIl0gPSBcIuCkruCkp+CljeCkr+CkrlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlNtYWxsXCJdID0gXCLgpJvgpYvgpJ/gpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi4KSq4KWC4KSw4KWN4KSjIOCkuOCljeCkleCljeCksOClgOCkqFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIuCkquClguCksOCljeCkoyDgpLjgpY3gpJXgpY3gpLDgpYDgpKgg4KS44KWHIOCkrOCkvuCkueCksCDgpKjgpL/gpJXgpLLgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJPZmZcIl0gPSBcIuCkrOCkguCkplwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLgpKrgpY3gpLLgpYfgpKzgpYjgpJUg4KS44KWN4KSq4KWA4KShXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIuCkoeCkv+Ckq+CkvOClieCksuCljeCknyDgpLjgpYfgpJ/gpL/gpILgpJfgpY3gpLgg4KSV4KWAIOCkquClguCksOCljeCkteCkuOCljeCkpeCkv+CkpOCkvyDgpKrgpLAg4KSy4KS+4KSP4KSBXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuCkuOClh+Ckn+Ckv+CkguCkl+CljeCkuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi4KSJ4KSq4KS24KWA4KSw4KWN4KS34KSVIOCkmuCkvuCksuClgiDgpJXgpLDgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLgpIngpKrgpLbgpYDgpLDgpY3gpLfgpJUg4KSs4KSC4KSmIOCkleCksOClh+CkglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi4KSl4KS/4KSv4KWH4KSf4KSwIOCkruCli+CkoVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLgpKXgpL/gpK/gpYfgpJ/gpLAg4KSu4KWL4KShIOCkuOClhyDgpKzgpL7gpLngpLAg4KSo4KS/4KSV4KSy4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi4KS14KWA4KSh4KS/4KSv4KWLIOCkl+ClgeCko+CkteCkpOCljeCkpOCkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSDgpK7gpYfgpIIg4KSm4KWH4KSW4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU2VhcmNoXCJdID0gXCLgpJbgpYvgpJzgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJBdXRvXCJdID0gXCLgpLjgpY3gpLXgpJrgpL7gpLLgpL/gpKRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDQ1wiXSA9IFwi4KSq4KWN4KSw4KSk4KS/4KSy4KS/4KSq4KS/XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiT25cIl0gPSBcIuCkmuCkvuCksuClglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi4KSq4KS+4KSgIOCkleCkviDgpLDgpILgpJc6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLgpKrgpL7gpKAg4KSV4KS+IOCkhuCkleCkvuCksDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuCkruClgeCkluCljeCkryDgpK7gpYfgpKjgpYIg4KSq4KSwIOCkteCkvuCkquCkuCDgpJzgpL7gpI/gpIFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiUHJvemlybm9zdCBwb3phZGluZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGl0bG92aSBpc2tsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJUaXRsb3ZpIHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVEl0bG92aSAvIHBvZG5hc2xvdmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2UgdGl0bG92YSAvIHBvZG5hc2xvdmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJudXRhIHNlcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9icm51dGkgc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJMYXJnZVwiXSA9IFwiVmVsaWtvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiTWVkaXVtXCJdID0gXCJTcmVkbmplXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU21hbGxcIl0gPSBcIk1hbG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2lqZWxpIHphc2xvblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkl6bGF6IGl6IGNpamVsb2cgemFzbG9uYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIk9mZlwiXSA9IFwiSXNrbGp1xI1lbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQnJ6aW5hIHJlcHJvZHVrY2lqZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcmHEh2FuamUgbmEgemFkYW5lIHBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJQb2RuYXNsb3ZpIHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJQb2RuYXNsb3ZpIGlza2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJOYcSNaW4ga2luby1wcmlrYXphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkl6bGF6IGl6IG5hxI1pbmEga2luby1wcmlrYXphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3ZhbGl0ZXRhIHZpZGVvemFwaXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJQcmlrYXogdSB6bmHEjWFqY2kgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlNlYXJjaFwiXSA9IFwiUHJldHJhxb5pdmFuamVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0c2tpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiQ0NcIl0gPSBcIktvcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIk9uXCJdID0gXCJVa2xqdcSNZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJCb2phIHRla3N0YTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlbGnEjWluYSB0ZWtzdGE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJOYXRyYWcgbmEgZ2xhdm5pIGl6Ym9ybmlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkjDoXR0w6lyIMOhdHRldHN6xZFzw6lnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rIGtpa2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rIGJla2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQWthZMOhbHltZW50ZXMgZmVsaXJhdG9rL2ZlbGlyYXRva1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJBa2Fkw6FseW1lbnRlcyBmZWxpcmF0b2svZmVsaXJhdG9rIGJlw6FsbMOtdMOhc2FpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiRm9yZMOtdG90dCBzesOpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiRm9yZMOtdG90dCBub3Jtw6FsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU2VwaWFcIl0gPSBcIlN6w6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJTdGFuZGFyZFwiXSA9IFwiTm9ybcOhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkxhcmdlXCJdID0gXCJOYWd5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiTWVkaXVtXCJdID0gXCJLw7Z6ZXBlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNtYWxsXCJdID0gXCJLaWNzaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJUZWxqZXMga8OpcGVybnnFkVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlRlbGplcyBrw6lwZXJuecWRcyBtw7NkIGJlesOhcsOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJPZmZcIl0gPSBcIktpa2FwY3NvbHZhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkxlasOhdHN6w6FzIHNlYmVzc8OpZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiQWxhcMOpcnRlbG1lemV0dCBiZcOhbGzDrXTDoXNvayB2aXNzemHDoWxsw610w6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNldHRpbmdzXCJdID0gXCJCZcOhbGzDrXTDoXNva1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiRmVsaXJhdG9rIGJla2FwY3NvbMOhc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJGZWxpcmF0b2sga2lrYXBjc29sw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW96aSBtw7NkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktpbMOpcMOpcyBhIG1vemkgbcOzZGLDs2xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlw7MgbWluxZFzw6lnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWVndGVraW50w6lzIGEgTWljcm9zb2Z0IFN0cmVhbWJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlNlYXJjaFwiXSA9IFwiS2VyZXPDqXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWt1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNDXCJdID0gXCJNw6Fzb2xhdG90IGthcFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIk9uXCJdID0gXCJCZWthcGNzb2x2YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiU3rDtnZlZyBzesOtbmU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJTesO2dmVnIG3DqXJldGU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWaXNzemEgYSBmxZFtZW7DvGJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyYW5zaSBsYXRhciBiZWxha2FuZ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiS2V0ZXJhbmdhbiBub25ha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJLZXRlcmFuZ2FuIGFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIktldGVyYW5nYW4gLyBTdWJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJQZW5nYXR1cmFuIEtldGVyYW5nYW4gLyBTdWJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlNlcGlhIGJhbGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiU3RhbmRhciBiYWxpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJMYXJnZVwiXSA9IFwiQmVzYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGl1bVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlNtYWxsXCJdID0gXCJLZWNpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJMYXlhciBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIktlbHVhciBkYXJpIGxheWFyIHBlbnVoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiT2ZmXCJdID0gXCJOb25ha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJLZWNlcGF0YW4gcGVtdXRhcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIktlbWJhbGlrYW4ga2UgcGVuZ2F0dXJhbiBkZWZhdWx0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBlbmdhdHVyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnRpdGVsIGFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0ZWwgbm9uYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZGUgdGVhdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIktlbHVhciBkYXJpIG1vZGUgdGVhdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3VhbGl0YXMgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkxpaGF0IGRpIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTZWFyY2hcIl0gPSBcIkNhcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJBdXRvXCJdID0gXCJPdG9tYXRpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIk9uXCJdID0gXCJBa3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiV2FybmEgdGVrczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlVrdXJhbiB0ZWtzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiS2VtYmFsaSBrZSBtZW51IHV0YW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYXNwYXJlbnphIHNmb25kb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiU290dG90aXRvbGkgZGlzYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiU290dG90aXRvbGkgYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiU290dG90aXRvbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiSW1wb3N0YXppb25pIHNvdHRvdGl0b2xpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VwcGlhIGludmVydGl0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkIGludmVydGl0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNlcGlhXCJdID0gXCJTZXBwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNtYWxsXCJdID0gXCJQaWNjb2xvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlNjaGVybW8gaW50ZXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiQ2hpdWRpIGxhIHZpc3VhbGl6emF6aW9uZSBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIk9mZlwiXSA9IFwiRGlzYXR0aXZhdG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpdMOgIHJpcHJvZHV6aW9uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJSaXByaXN0aW5hIGltcG9zdGF6aW9uaSBwcmVkZWZpbml0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNldHRpbmdzXCJdID0gXCJJbXBvc3RhemlvbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlNvdHRvdGl0b2xpIGF0dGl2YXRpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU290dG90aXRvbGkgZGlzYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZGFsaXTDoCBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJFc2NpIGRhbGxhIG1vZGFsaXTDoCBzY2hlcm1vIGludGVyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlF1YWxpdMOgIHZpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXN1YWxpenphIGluIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTZWFyY2hcIl0gPSBcIkNlcmNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGljb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNDXCJdID0gXCJDY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIk9uXCJdID0gXCJTw6xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvbG9yZSB0ZXN0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIkRpbWVuc2lvbmkgdGVzdG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUb3JuYSBhbCBtZW51IHByaW5jaXBhbGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi6IOM5pmv44Gu6YCP5piO5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLlrZfluZXjgqrjg5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi5a2X5bmV44Kq44OzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLlrZfluZXjga7oqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLjgrvjg5TjgqLjgpLlhYPjgavmiLvjgZlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLmqJnmupbjgavmiLvjgZlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJTZXBpYVwiXSA9IFwi44K744OU44KiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU3RhbmRhcmRcIl0gPSBcIuaomea6llwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkxhcmdlXCJdID0gXCLlpKdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNtYWxsXCJdID0gXCLlsI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi5YWo55S76Z2i6KGo56S6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi5YWo55S76Z2i6KGo56S644KS57WC5LqGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiT2ZmXCJdID0gXCLjgqrjg5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi5YaN55Sf6YCf5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIuaXouWumuOBruioreWumuOBq+aIu+OBmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNldHRpbmdzXCJdID0gXCLoqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIuWtl+W5leOCquODs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuWtl+W5leOCquODlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi44K344Ki44K/44O8IOODouODvOODiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLjgrfjgqLjgr/jg7wg44Oi44O844OJ44Gu57WC5LqGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi5YuV55S744Gu55S76LOqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFtIOOBp+ihqOekulwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNlYXJjaFwiXSA9IFwi5qSc57SiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQXV0b1wiXSA9IFwi6Ieq5YuVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiT25cIl0gPSBcIuOCquODs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi44OG44Kt44K544OI44Gu6ImyOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLjg4bjgq3jgrnjg4gg44K144Kk44K6OlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLjg6HjgqTjg7Mg44Oh44OL44Ol44O844Gr5oi744KLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcItCk0L7QvSDQvNOp0LvQtNGW0YDQu9GW0LPRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg06nRiNGW0YDRg9C70ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg0pvQvtGB0YPQu9GLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCh0YPQsdGC0LjRgtGA0LvQtdGAIC8g0KLQsNKb0YvRgNGL0L/RgtCw0YBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAgLyDQotCw0pvRi9GA0YvQv9GC0LDRgCDQv9Cw0YDQsNC80LXRgtGA0LvQtdGA0ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQmtC10YDRliDRgdC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi0JrQtdGA0ZYg0YHRgtCw0L3QtNCw0YDRglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLRgtGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiTGFyZ2VcIl0gPSBcItKu0LvQutC10L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJNZWRpdW1cIl0gPSBcItCe0YDRgtCw0YjQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNtYWxsXCJdID0gXCLQmtGW0YjRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLQotC+0LvRi9KbINGN0LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQotC+0LvRi9KbINGN0LrRgNCw0L3QvdCw0L0g0YjRi9KT0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJPZmZcIl0gPSBcItOo0YjRltGA0YPQu9GWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCe0LnQvdCw0YLRgyDQttGL0LvQtNCw0LzQtNGL0pPRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLTmNC00LXQv9C60ZYg0L/QsNGA0LDQvNC10YLRgNC70LXRgNC00ZYg0pvQsNC50YLQsNGA0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJTZXR0aW5nc1wiXSA9IFwi0J/QsNGA0LDQvNC10YLRgNC70LXRgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg0pvQvtGB0YvQu9KT0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0LvQtdGAINOp0YjRltGA0ZbQu9Cz0LXQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi0KLQtdCw0YLRgCDRgNC10LbQuNC80ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi0KLQtdCw0YLRgCDRgNC10LbQuNC80ZbQvdC10L0g0YjRi9KT0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLQkdC10LnQvdC1INGB0LDQv9Cw0YHRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSDSm9GL0LfQvNC10YLRltC90LTQtSDQutOp0YDRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNlYXJjaFwiXSA9IFwi0IbQt9C00LXRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkF1dG9cIl0gPSBcItCQ0LLRgtC+0LzQsNGC0YLRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNDXCJdID0gXCLQmtOp0YjRltGA0LzQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIk9uXCJdID0gXCLSmtC+0YHRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi0JzTmdGC0ZbQvSDRgtKv0YHRljogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCc05nRgtGW0L0g06nQu9GI0LXQvNGWOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi0JHQsNGB0YLRiyDQvNOZ0LfRltGA0LPQtSDQvtGA0LDQu9GDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuuwsOqyvSDtiKzrqoXrj4RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuy6oeyFmCDrgZRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi7Lqh7IWYIOy8rFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLsuqHshZgv7J6Q66eJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuy6oeyFmC/snpDrp4kg7ISk7KCVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi7IS47ZS87JWEIOuwmOyghFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIu2RnOykgCDrsJjsoIRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTZXBpYVwiXSA9IFwi7IS47ZS87JWEXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiU3RhbmRhcmRcIl0gPSBcIu2RnOykgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkxhcmdlXCJdID0gXCLtgazqsoxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJNZWRpdW1cIl0gPSBcIuuztO2GtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNtYWxsXCJdID0gXCLsnpHqsoxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi7KCE7LK0IO2ZlOuptFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIuyghOyytCDtmZTrqbQg64Gd64K06riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiT2ZmXCJdID0gXCLqurzsp5BcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi7J6s7IOdIOyGjeuPhFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLquLDrs7gg7ISk7KCV7Jy866GcIOuQmOuPjOumrOq4sFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNldHRpbmdzXCJdID0gXCLshKTsoJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIuyekOuniSDsvKxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLsnpDrp4kg64GUXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLqt7nsnqUg66qo65OcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIuq3ueyepSDrqqjrk5wg64Gd64K06riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi67mE65SU7JikIO2ZlOyniFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbeyXkOyEnCDrs7TquLBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTZWFyY2hcIl0gPSBcIuqygOyDiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkF1dG9cIl0gPSBcIuyekOuPmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNDXCJdID0gXCLssLjsobBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJPblwiXSA9IFwi7ISk7KCVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLthY3siqTtirgg7IOJOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi7YWN7Iqk7Yq4IO2BrOq4sDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuq4sOuzuCDrqZTribTroZwg64+M7JWE6rCA6riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkZvbm8gc2thaWRydW1hc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiScWhanVuZ3RpIHZhaXpkbyBhcHJhxaF1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLErmp1bmd0aSB2YWl6ZG8gYXByYcWhdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVmFpemRvIGFwcmHFoWFpIC8gc3VidGl0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlZhaXpkbyBhcHJhxaHFsyAvIHN1YnRpdHLFsyBwYXJhbWV0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiQXTFoWF1a3RpIHNlcGlqxIVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJBdMWhYXVrdGkgc3RhbmRhcnRpbsSZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFydGluaXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJMYXJnZVwiXSA9IFwiRGlkZWxpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk1lZGl1bVwiXSA9IFwiVmlkdXRpbmlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU21hbGxcIl0gPSBcIk1hxb5hc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJWaXNhcyBla3JhbmFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiScWhanVuZ3RpIHJvZHltxIUgdmlzYW1lIGVrcmFuZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk9mZlwiXSA9IFwiScWhanVuZ3RhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkxlaWRpbW8gZ3JlaXRpc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHcsSFxb5pbnRpIG51bWF0eXR1b3NpdXMgcGFyYW1ldHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlNldHRpbmdzXCJdID0gXCJQYXJhbWV0cmFpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLErmp1bmd0aSBzdWJ0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJJxaFqdW5ndGkgc3VidGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLigJ5TY2Vub3PigJwgcmXFvmltYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiScWhZWl0aSBpxaEg4oCec2Nlbm9z4oCcIHJlxb5pbW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWYWl6ZG8ga29reWLEl1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiUm9keXRpIG5hdWRvamFudCDigJ5NaWNyb3NvZnQgU3RyZWFt4oCcXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU2VhcmNoXCJdID0gXCJJZcWha290aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpbmlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ0NcIl0gPSBcIktvcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIk9uXCJdID0gXCLErmp1bmd0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGVrc3RvIHNwYWx2YTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRla3N0byBkeWRpczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkdyxK/FvnRpIMSvIHBhZ3JpbmRpbsSvIG1lbml1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkZvbmEgY2F1cnNwxKtkxKtndW1zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJJenNsxJNndCB0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiSWVzbMSTZ3QgdGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlRpdHJpL3N1YnRpdHJpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlRpdHJ1L3N1YnRpdHJ1IGllc3RhdMSranVtaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkFwZ3JpZXp0YSBzxJNwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiQXBncmllenRhIHN0YW5kYXJ0YSBrcsSBc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTZXBpYVwiXSA9IFwiU8STcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFydGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJMYXJnZVwiXSA9IFwiTGllbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJNZWRpdW1cIl0gPSBcIlZpZMSTanNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTbWFsbFwiXSA9IFwiTWF6c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQaWxuZWtyxIFuYSByZcW+xKttc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkl6aWV0IG5vIHBpbG5la3LEgW5hIHJlxb7Eq21hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiT2ZmXCJdID0gXCJJenNsxJNndHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQXRza2HFhm/FoWFuYXMgxIF0cnVtc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJBdGphdW5vdCBub2tsdXPEk2p1bWEgaWVzdGF0xKtqdW11c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNldHRpbmdzXCJdID0gXCJJZXN0YXTEq2p1bWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkllc2zEk2d0IHN1YnRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkl6c2zEk2d0IHN1YnRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGXEgXRyYSByZcW+xKttc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJJemlldCBubyB0ZcSBdHJhIHJlxb7Eq21hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW8ga3ZhbGl0xIF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiU2thdMSrdCBwYWthbHBvanVtxIEgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNlYXJjaFwiXSA9IFwiTWVrbMSTdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkF1dG9cIl0gPSBcIkF1dG9txIF0aXNraVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkNDXCJdID0gXCJLb3BpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJPblwiXSA9IFwiSWVzbMSTZ3RzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGEga3LEgXNhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RhIGxpZWx1bXM6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJBdGdyaWV6dGllcyBnYWx2ZW5hasSBIGl6dsSTbG7Ek1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJLZWx1dHNpbmFyYW4gbGF0YXIgYmVsYWthbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkthcHN5ZW4gdGlkYWsgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiS2Fwc3llbiBha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJLYXBzeWVuIC8gU2FyaSBrYXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlRldGFwYW4gS2Fwc3llbiAvIFNhcmkga2F0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlRlcmJhbGlra2FuIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiVGVyYmFsaWtrYW4gc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJMYXJnZVwiXSA9IFwiQmVzYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJNZWRpdW1cIl0gPSBcIlNlZGVyaGFuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNtYWxsXCJdID0gXCJLZWNpbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJTa3JpbiBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIktlbHVhciBza3JpbiBwZW51aFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIk9mZlwiXSA9IFwiTWF0aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJLZWxhanVhbiBtYWluIGJhbGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIktlbWJhbGkga2VwYWRhIHRldGFwYW4gbGFsYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiU2V0aW5nXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTYXJpIGthdGEgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTYXJpIGthdGEgdGlkYWsgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZCB0ZWF0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiS2VsdWFyIG1vZCBwYXdhZ2FtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3VhbGl0aSB2aWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTGloYXQgZGFsYW0gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNlYXJjaFwiXSA9IFwiQ2FyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDQ1wiXSA9IFwiU0tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJPblwiXSA9IFwiSGlkdXBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIldhcm5hIHRla3M6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJTYWl6IHRla3M6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJLZW1iYWxpIGtlIG1lbnUgdXRhbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiR2plbm5vbXNpa3RpZ2hldCBmb3IgYmFrZ3J1bm5lblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVGVrc3RpbmcgYXZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVGVrc3RpbmcgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlRla3N0aW5nL3VuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbm5zdGlsbGluZ2VyIGZvciB0ZWtzdGluZy91bmRlcnRla3N0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPbXZlbmR0IHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT212ZW5kdCBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiTWVkaXVtXCJdID0gXCJNaWRkZWxzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU21hbGxcIl0gPSBcIkxpdGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkZ1bGwgc2tqZXJtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiQXZzbHV0dCBmdWxsc2tqZXJtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiT2ZmXCJdID0gXCJBdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBdnNwaWxsaW5nc2hhc3RpZ2hldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJHw6UgdGlsYmFrZSB0aWwgc3RhbmRhcmRpbm5zdGlsbGluZ2VuZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlNldHRpbmdzXCJdID0gXCJJbm5zdGlsbGluZ2VyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJVbmRlcnRla3N0ZXIgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiVW5kZXJ0ZWtzdGVyIGF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJLaW5vbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiQXZzbHV0dCBraW5vbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb2t2YWxpdGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXMgaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU2VhcmNoXCJdID0gXCJTw7hrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQXV0b1wiXSA9IFwiQXV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNDXCJdID0gXCJLb3BpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiT25cIl0gPSBcIlDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiVGVrc3RmYXJnZTpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RzdMO4cnJlbHNlOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJCYWNrIHRvIG1haW4gbWVudVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJEb29yemljaHRpZ2hlaWQgdmFuIGFjaHRlcmdyb25kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJCaWpzY2hyaWZ0ZW4gdWl0Z2VzY2hha2VsZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJCaWpzY2hyaWZ0ZW4gaW5nZXNjaGFrZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkJpanNjaHJpZnRlbi9vbmRlcnRpdGVsc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbnN0ZWxsaW5nZW4gdm9vciBiaWpzY2hyaWZ0ZW4vb25kZXJ0aXRlbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPbWdla2VlcmRlIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT21nZWtlZXJkZSBzdGFuZGFhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJMYXJnZVwiXSA9IFwiR3Jvb3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJNZWRpdW1cIl0gPSBcIkdlbWlkZGVsZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNtYWxsXCJdID0gXCJLbGVpblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsZWRpZyBzY2hlcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJWb2xsZWRpZyBzY2hlcm0gdWl0c2NoYWtlbGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiT2ZmXCJdID0gXCJVaXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQWZzcGVlbHNuZWxoZWlkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkhlcnN0ZWxsZW4gbmFhciBzdGFuZGFhcmRpbnN0ZWxsaW5nZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5zdGVsbGluZ2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJPbmRlcnRpdGVscyBpbmdlc2NoYWtlbGRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJPbmRlcnRpdGVscyB1aXRnZXNjaGFrZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUaGVhdGVybW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVGhlYXRlcm1vZHVzIGFmc2x1aXRlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVva3dhbGl0ZWl0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJXZWVyZ2V2ZW4gaW4gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNlYXJjaFwiXSA9IFwiWm9la2VuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGlzY2hcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJDQ1wiXSA9IFwiQ0tcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJPblwiXSA9IFwiQWFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGtsZXVyOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrZW5ncm9vdHRlOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGVydWcgbmFhciBoZXQgaG9vZmRtZW51XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByemV6cm9jenlzdG/Fm8SHIHTFgmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlBvZHBpc3kgd3nFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiUG9kcGlzeSB3xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlBvZHBpc3kvbmFwaXN5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlVzdGF3aWVuaWEgcG9kcGlzw7N3L25hcGlzw7N3XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiT2R3csOzY29uYSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9kd3LDs2Nvbnkgc3RhbmRhcmRvd3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRvd2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJMYXJnZVwiXSA9IFwiRHXFvHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJNZWRpdW1cIl0gPSBcIsWacmVkbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTbWFsbFwiXSA9IFwiTWHFgnlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGXFgm55IGVrcmFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiWmFta25paiB3aWRvayBwZcWCbm9la3Jhbm93eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIk9mZlwiXSA9IFwiV3nFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiU3p5YmtvxZvEhyBvZHR3YXJ6YW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJQcnp5d3LDs8SHIHVzdGF3aWVuaWEgZG9tecWbbG5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlVzdGF3aWVuaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIk5hcGlzeSB3xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiTmFwaXN5IHd5xYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUcnliIGtpbm93eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJXeWpkxbogeiB0cnlidSBraW5vd2Vnb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkpha2/Fm8SHIHdpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJXecWbd2lldGwgdyB1c8WCdWR6ZSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiU2VhcmNoXCJdID0gXCJXeXN6dWthalwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXR5Y3puZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkNDXCJdID0gXCJCS1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIk9uXCJdID0gXCJXxYLEhWN6b25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJLb2xvciB0ZWtzdHU6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlJvem1pYXIgdGVrc3R1OlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJQb3dyw7N0IGRvIG1lbnUgZ8WCw7N3bmVnb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcsOqbmNpYSBkbyBwbGFubyBkZSBmdW5kb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTGVnZW5kYXMgZGVzYXRpdmFkYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTGVnZW5kYXMgYXRpdmFkYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiTGVnZW5kYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhw6fDtWVzIGRhcyBsZWdlbmRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlPDqXBpYSBpbnZlcnNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUGFkcsOjbyBpbnZlcnNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJNZWRpdW1cIl0gPSBcIk3DqWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlNtYWxsXCJdID0gXCJQZXF1ZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRlbGEgaW50ZWlyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlNhaXIgZGUgdGVsYSBpbnRlaXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiT2ZmXCJdID0gXCJEZXNhdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdcOnw6NvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGVyIHBhcmEgY29uZmlndXJhw6fDtWVzIHBhZHLDo29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhw6fDtWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJMZWdlbmRhcyBhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkxlZ2VuZGFzIGRlc2F0aXZhZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RvIGRlIHRlYXRyb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTYWlyIGRvIG1vZG8gZGUgdGVhdHJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGlkYWRlIGRlIHbDrWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiRXhpYmlyIG5vIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTZWFyY2hcIl0gPSBcIlBlc3F1aXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiT25cIl0gPSBcIkxpZ2FyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb3IgZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYW1hbmhvIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVm9sdGFyIGFvIG1lbnUgcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyw6puY2lhIGRlIGZ1bmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMZWdlbmRhcyBkZXNhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMZWdlbmRhcyBhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMZWdlbmRhcyAvIFN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkRlZmluacOnw7VlcyBkZSBMZWdlbmRhcyAvIFN1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiSW52ZXJ0ZXIgc8OpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUmV2ZXJ0ZXIgcGFkcsOjb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlNlcGlhXCJdID0gXCJTw6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJMYXJnZVwiXSA9IFwiR3JhbmRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiTWVkaXVtXCJdID0gXCJNw6lkaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTbWFsbFwiXSA9IFwiUGVxdWVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJFY3LDoyBpbnRlaXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2FpciBkbyBlY3LDoyBpbnRlaXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiT2ZmXCJdID0gXCJEZXNhdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZlbG9jaWRhZGUgZGUgcmVwcm9kdcOnw6NvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydGVyIHBhcmEgcHJlZGVmaW5pw6fDtWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkRlZmluacOnw7Vlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidMOtdHVsb3MgYXRpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0w610dWxvcyBkZXNhdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kbyBkZSBjaW5lbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiU2FpciBkbyBtb2RvIGRlIGNpbmVtYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlF1YWxpZGFkZSBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpc3RhIG5vIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTZWFyY2hcIl0gPSBcIlBlc3F1aXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiT25cIl0gPSBcIkF0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvciBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRhbWFuaG8gZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWb2x0ZSBhbyBtZW51IHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuyJvEgyBmdW5kYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkxlZ2VuZGUgZGV6YWN0aXZhdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiTGVnZW5kZSBhY3RpdmF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMZWdlbmRlL3N1YnRpdHLEg3JpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlNldMSDcmkgcGVudHJ1IGxlZ2VuZGUvc3VidGl0csSDcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJTZXBpYSBpbnZlcnNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZCBpbnZlcnNhdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkxhcmdlXCJdID0gXCJNYXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiTWVkaXVtXCJdID0gXCJNZWRpdVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlNtYWxsXCJdID0gXCJNaWNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiRWNyYW4gY29tcGxldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkllyJlpyJtpIGRpbiBtb2R1bCBlY3JhbiBjb21wbGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiT2ZmXCJdID0gXCJEZXphY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlZpdGV6xIMgZGUgcmVkYXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVuacibaSBsYSBzZXTEg3JpbGUgaW1wbGljaXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlNldMSDcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnRpdHLEg3JpIGFjdGl2YXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU3VidGl0csSDcmkgZGV6YWN0aXZhdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZHVsIHRlYXRydVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJJZciZacibaSBkaW4gbW9kdWwgdGVhdHJ1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQ2FsaXRhdGUgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZlZGXIm2kgw65uIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTZWFyY2hcIl0gPSBcIkPEg3V0YXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIk9uXCJdID0gXCJBY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDdWxvYXJlIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJEaW1lbnNpdW5lIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLDjm5hcG9pIGxhIG1lbml1bCBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfRgNCw0YfQvdC+0YHRgtGMINGE0L7QvdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQodGD0LHRgtC40YLRgNGLINC+0YLQutC70Y7Rh9C10L3Ri1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLQodGD0LHRgtC40YLRgNGLINCy0LrQu9GO0YfQtdC90YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi0KHRg9Cx0YLQuNGC0YDRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQn9Cw0YDQsNC80LXRgtGA0Ysg0YHRg9Cx0YLQuNGC0YDQvtCyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi0JjQt9C80LXQvdC40YLRjCDQvdCwINGB0LXQv9C40Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLQmNC30LzQtdC90LjRgtGMINC90LAg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDRhtCy0LXRglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlNlcGlhXCJdID0gXCLQodC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0YLQvdGL0LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJMYXJnZVwiXSA9IFwi0JHQvtC70YzRiNC+0LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJNZWRpdW1cIl0gPSBcItCh0YDQtdC00L3QuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU21hbGxcIl0gPSBcItCc0LXQu9C60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLQktC+INCy0LXRgdGMINGN0LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQktGL0LnRgtC4INC40Lcg0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LPQviDRgNC10LbQuNC80LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJPZmZcIl0gPSBcItCe0YLQutC7LlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQodC60L7RgNC+0YHRgtGMINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQktC10YDQvdGD0YLRjCDQuiDQv9Cw0YDQsNC80LXRgtGA0LDQvCDQv9C+INGD0LzQvtC70YfQsNC90LjRjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlNldHRpbmdzXCJdID0gXCLQn9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0LLQutC70Y7Rh9C10L3Ri1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0L7RgtC60LvRjtGH0LXQvdGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQoNC10LbQuNC8INGC0LXQsNGC0YDQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLQktGL0LnRgtC4INC40Lcg0YDQtdC20LjQvNCwINGC0LXQsNGC0YDQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItCa0LDRh9C10YHRgtCy0L4g0LLQuNC00LXQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwi0J/RgNC+0YHQvNC+0YLRgNC10YLRjCDQsiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU2VhcmNoXCJdID0gXCLQn9C+0LjRgdC6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQXV0b1wiXSA9IFwi0JDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIk9uXCJdID0gXCLQktC60LvRjtGH0LXQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi0KbQstC10YIg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0KDQsNC30LzQtdGAINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCS0L7Qt9Cy0YDQsNGCINC6INC+0YHQvdC+0LLQvdC+0LzRgyDQvNC10L3RjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJQcmllaMS+YWRub3PFpSBwb3phZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlRpdHVsa3kgemFwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVGl0dWxreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJOYXN0YXZlbmlhIHRpdHVsa292XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiWnJ1xaFpxaUgc8OpcGlvdsOpIHpvYnJhemVuaWVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJacnXFoWnFpSDFoXRhbmRhcmRuw6kgem9icmF6ZW5pZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlNlcGlhXCJdID0gXCJTw6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdGFuZGFyZFwiXSA9IFwixaB0YW5kYXJkbsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiTGFyZ2VcIl0gPSBcIlZlxL5rw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJNZWRpdW1cIl0gPSBcIlN0cmVkbsOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU21hbGxcIl0gPSBcIk1hbMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkNlbMOhIG9icmF6b3ZrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlNrb27EjWnFpSByZcW+aW0gY2VsZWogb2JyYXpvdmt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiT2ZmXCJdID0gXCJWeXBudXTDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJSw71jaGxvc8WlIHByZWhyw6F2YW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcsOhdGnFpSBuYSBwcmVkdm9sZW7DqSBuYXN0YXZlbmlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlRpdHVsa3kgemFwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUaXR1bGt5IHZ5cG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJSZcW+aW0ga2luYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJVa29uxI1pxaUgcmXFvmltIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdmFsaXRhIHZpZGVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJab2JyYXppxaUgdiBNaWNyb3NvZnQgU3RyZWFtZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlNlYXJjaFwiXSA9IFwiSMS+YWRhxaVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWNrw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDQ1wiXSA9IFwiS8OzcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiT25cIl0gPSBcIlphcG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJGYXJiYSB0ZXh0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlxL5rb3PFpSB0ZXh0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlNww6TFpSBuYSBobGF2bsO6IHBvbnVrdVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJQcm9zb2pub3N0IG96YWRqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiSXprbG9waSBuYXBpc2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVmtsb3BpIG5hcGlzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJOYXBpc2kvcG9kbmFzbG92aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJOYXN0YXZpdHZlIG5hcGlzb3YvcG9kbmFzbG92b3ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJhdG5hIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT2JyYXRuYSBzdGFuZGFyZG5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJMYXJnZVwiXSA9IFwiVmVsaWthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiTWVkaXVtXCJdID0gXCJTcmVkbmplIHZlbGlrYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNtYWxsXCJdID0gXCJNYWpobmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2Vsb3phc2xvbnNraSBuYcSNaW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJaYXByaSBjZWxvemFzbG9uc2tpIG5hxI1pblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIk9mZlwiXSA9IFwiSXprbG9wbGplbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiSGl0cm9zdCBwcmVkdmFqYW5qYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJQb3ZybmkgbmEgcHJpdnpldGUgbmFzdGF2aXR2ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNldHRpbmdzXCJdID0gXCJOYXN0YXZpdHZlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJWa2xvcGkgcG9kbmFzbG92ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkl6a2xvcGkgcG9kbmFzbG92ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTmHEjWluIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiWmFwcmkgbmHEjWluIGtpbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLYWtvdm9zdCB2aWRlb3Bvc25ldGthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJQcmlrYcW+aSB2IGFwbGlrYWNpamkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlNlYXJjaFwiXSA9IFwiSXNrYW5qZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkF1dG9cIl0gPSBcIlNhbW9kZWpub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNDXCJdID0gXCJLcFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIk9uXCJdID0gXCJWa2xvcGxqZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJCYXJ2YSBiZXNlZGlsYTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlbGlrb3N0IGJlc2VkaWxhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiTmF6YWogbmEgZ2xhdm5pIG1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLQotGA0LDQvdGB0L/QsNGA0LXQvdGC0L3QvtGB0YIg0L/QvtC30LDQtNC40L3QtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQndCw0YLQv9C40YHQuCDRgdGDINC40YHQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcItCd0LDRgtC/0LjRgdC4INGB0YMg0YPQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCd0LDRgtC/0LjRgdC4IC8g0L/QvtC00L3QsNGB0LvQvtCy0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQn2/RgdGC0LDQstC60LUg0L3QsNGC0L/QuNGB0LAgLyDQv9C+0LTQvdCw0YHQu9C+0LLQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi0J7QsdGA0L3Rg9GC0Lggc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCe0LHRgNC90YPRgtC+INGB0YLQsNC90LTQsNGA0LTQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlN0YW5kYXJkXCJdID0gXCLQodGC0LDQvdC00LDRgNC00L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiTGFyZ2VcIl0gPSBcItCS0LXQu9C40LrQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiTWVkaXVtXCJdID0gXCLQodGA0LXQtNGa0LVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlNtYWxsXCJdID0gXCLQnNCw0LvQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCm0LXQviDQtdC60YDQsNC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQndCw0L/Rg9GB0YLQuCDQv9GA0LjQutCw0Lcg0L/RgNC10LrQviDRhtC10LvQvtCzINC10LrRgNCw0L3QsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiT2ZmXCJdID0gXCLQmNGB0LrRmdGD0YfQtdC90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQkdGA0LfQuNC90LAg0YDQtdC/0YDQvtC00YPQutGG0LjRmNCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi0JLRgNCw0YLQuCDQvdCwINC/0L7QtNGA0LDQt9GD0LzQtdCy0LDQvdC1INC/0L7RgdGC0LDQstC60LVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlNldHRpbmdzXCJdID0gXCLQn9C+0YHRgtCw0LLQutC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcItCf0L7QtNC90LDRgdC70L7QstC4INGB0YMg0YPQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi0J/QvtC00L3QsNGB0LvQvtCy0Lgg0YHRgyDQuNGB0LrRmdGD0YfQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi0J/QvtC30L7RgNC40YjQvdC4INGA0LXQttC40LxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLQndCw0L/Rg9GB0YLQuCDQv9C+0LfQvtGA0LjRiNC90Lgg0YDQtdC20LjQvFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0JrQstCw0LvQuNGC0LXRgiDQstC40LTQtdC+INC30LDQv9C40YHQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9GA0LjQutCw0LbQuCDRgyDRg9GB0LvRg9C30LggTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU2VhcmNoXCJdID0gXCLQn9GA0LXRgtGA0LDQttC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJBdXRvXCJdID0gXCLQkNGD0YLQvtC80LDRgtGB0LrQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJPblwiXSA9IFwi0KPQutGZ0YPRh9C10L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQkdC+0ZjQsCDRgtC10LrRgdGC0LA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItCS0LXQu9C40YfQuNC90LAg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLQndCw0LfQsNC0INC90LAg0LPQu9Cw0LLQvdC4INC80LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXJlbnRub3N0IHBvemFkaW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIk5hdHBpc2kgc3UgaXNrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJOYXRwaXNpIHN1IHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJOYXRwaXNpIC8gcG9kbmFzbG92aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlBvc3RhdmtlIG5hdHBpc2EgLyBwb2RuYXNsb3ZhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnJudXRpIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPYnJudXRvIHN0YW5kYXJkbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkxhcmdlXCJdID0gXCJWZWxpa29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIk1lZGl1bVwiXSA9IFwiU3JlZG5qYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU21hbGxcIl0gPSBcIk1hbG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJDZW8gZWtyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIk5hcHVzdGkgcHJpa2F6IHByZWtvIGNlbG9nIGVrcmFuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiT2ZmXCJdID0gXCJJc2tsanXEjWVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkJyemluYSByZXByb2R1a2NpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcmF0aSBuYSBwb2RyYXp1bWV2YW5lIHBvc3RhdmtlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiUG9kbmFzbG92aSBzdSB1a2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJQb2RuYXNsb3ZpIHN1IGlza2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlBvem9yacWhbmkgcmXFvmltXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiTmFwdXN0aSBwb3pvcmnFoW5pIHJlxb5pbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3ZhbGl0ZXQgdmlkZW8gemFwaXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlByaWthxb5pIHUgdXNsdXppIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlNlYXJjaFwiXSA9IFwiUHJldHJhxb5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0c2tpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIk9uXCJdID0gXCJVa2xqdcSNZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJvamEgdGVrc3RhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJWZWxpxI1pbmEgdGVrc3RhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJOYXphZCBuYSBnbGF2bmkgbWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJCYWtncnVuZHN0cmFuc3BhcmVuc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQmlsZHRleHRlciBhdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJCaWxkdGV4dGVyIHDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJCaWxkdGV4dGVyL3VuZGVydGV4dGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkluc3TDpGxsbmluZ2FyIGbDtnIgYmlsZHRleHRlci91bmRlcnRleHRlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIsOEbmRyYSBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIsOEbmRyYSBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkxhcmdlXCJdID0gXCJTdG9yXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiTWVkaXVtXCJdID0gXCJNZWRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNtYWxsXCJdID0gXCJMaXRlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJIZWxza8Okcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJBdnNsdXRhIGZ1bGxza8Okcm1zbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJPZmZcIl0gPSBcIkF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlVwcHNwZWxuaW5nc2hhc3RpZ2hldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLDhXRlcnN0w6RsbCB0aWxsIHN0YW5kYXJkaW5zdMOkbGxuaW5nYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJTZXR0aW5nc1wiXSA9IFwiSW5zdMOkbGxuaW5nYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlVuZGVydGV4dGVyIHDDpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlVuZGVydGV4dGVyIGF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJCaW9ncmFmbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiQXZzbHV0YSBiaW9ncmFmbMOkZ2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb2t2YWxpdGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXNhIGkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNlYXJjaFwiXSA9IFwiU8O2a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkF1dG9cIl0gPSBcIkF1dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJDQ1wiXSA9IFwiS29waWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJPblwiXSA9IFwiUMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXh0ZsOkcmc6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZXh0c3RvcmxlazogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlRpbGxiYWthIHRpbGwgaHV2dWRtZW55blwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLguITguKfguLLguKHguYLguJvguKPguYjguIfguYPguKrguILguK3guIfguJ7guLfguYnguJnguKvguKXguLHguIdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuC4m+C4tOC4lOC4hOC4s+C4muC4o+C4o+C4ouC4suC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLguYDguJvguLTguJTguITguLPguJrguKPguKPguKLguLLguKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi4LiE4Liz4Lia4Lij4Lij4Lii4Liy4LiiIC8g4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuC4geC4suC4o+C4leC4seC5ieC4h+C4hOC5iOC4suC4hOC4s+C4muC4o+C4o+C4ouC4suC4oiAvIOC4i+C4seC4muC5hOC4leC5gOC4leC4tOC4pVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIuC4o+C4teC5gOC4p+C4tOC4o+C5jOC4quC4i+C4teC5gOC4m+C4teC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIuC4o+C4teC5gOC4p+C4tOC4o+C5jOC4quC4oeC4suC4leC4o+C4kOC4suC4mVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlNlcGlhXCJdID0gXCLguIvguLXguYDguJvguLXguKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJTdGFuZGFyZFwiXSA9IFwi4Lih4Liy4LiV4Lij4LiQ4Liy4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiTGFyZ2VcIl0gPSBcIuC4guC4meC4suC4lOC5g+C4q+C4jeC5iFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIk1lZGl1bVwiXSA9IFwi4Lib4Liy4LiZ4LiB4Lil4Liy4LiHXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU21hbGxcIl0gPSBcIuC4guC4meC4suC4lOC5gOC4peC5h+C4gVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLguYDguJXguYfguKHguIjguK1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLguK3guK3guIHguIjguLLguIHguYDguJXguYfguKHguIjguK1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJPZmZcIl0gPSBcIuC5hOC4oeC5iOC5hOC4lOC5ieC5g+C4iuC5ieC4h+C4suC4mVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLguITguKfguLLguKHguYDguKPguYfguKfguYPguJnguIHguLLguKPguYDguKXguYjguJlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi4LmA4Lib4Lil4Li14LmI4Lii4LiZ4LiB4Lil4Lix4Lia4LmA4Lib4LmH4LiZ4LiB4Liy4Lij4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4LmA4Lij4Li04LmI4Lih4LiV4LmJ4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuC4geC4suC4o+C4leC4seC5ieC4h+C4hOC5iOC4slwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi4LmA4Lib4Li04LiU4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi4Lib4Li04LiU4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLguYLguKvguKHguJTguYLguKPguIfguKDguLLguJ7guKLguJnguJXguKPguYxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi4Lit4Lit4LiB4LiI4Liy4LiB4LmC4Lir4Lih4LiU4LmC4Lij4LiH4Lig4Liy4Lie4Lii4LiZ4LiV4Lij4LmMXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi4LiE4Li44LiT4Lig4Liy4Lie4LiC4Lit4LiH4Lin4Li04LiU4Li14LmC4LitXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLguJTguLnguYPguJkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlNlYXJjaFwiXSA9IFwi4LiE4LmJ4LiZ4Lir4LiyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQXV0b1wiXSA9IFwi4Lit4Lix4LiV4LmC4LiZ4Lih4Lix4LiV4Li0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQ0NcIl0gPSBcIuC4quC4s+C5gOC4meC4suC4luC4tuC4h1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIk9uXCJdID0gXCLguYPguIrguYnguIfguLLguJnguK3guKLguLnguYhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIuC4quC4teC4guC5ieC4reC4hOC4p+C4suC4oTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuC4guC4meC4suC4lOC5geC4muC4muC4reC4seC4geC4qeC4ozogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuC4geC4peC4seC4muC5hOC4m+C4l+C4teC5iOC5gOC4oeC4meC4ueC4q+C4peC4seC4gVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJBcmthIHBsYW4gc2F5ZGFtbMSxxJ/EsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLFsYXIga2FwYWzEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJBw6fEsWtsYW1hbMSxIGFsdCB5YXrEsWxhciBhw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLFsYXIgLyBBbHQgeWF6xLFsYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQcOnxLFrbGFtYWzEsSBhbHQgeWF6xLEgLyBBbHQgeWF6xLEgYXlhcmxhcsSxXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VweWEgcmVuZ2kgZGXEn2nFn3RpclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJ0IHJlbmdpIGRlxJ9pxZ90aXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTZXBpYVwiXSA9IFwiU2VweWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcnRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJMYXJnZVwiXSA9IFwiQsO8ecO8a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIk1lZGl1bVwiXSA9IFwiT3J0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlNtYWxsXCJdID0gXCJLw7zDp8O8a1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJUYW0gZWtyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJUYW0gZWtyYW5kYW4gw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJPZmZcIl0gPSBcIkthcGFsxLFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiS2F5xLF0dGFuIHnDvHLDvHRtZSBoxLF6xLFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVmFyc2F5xLFsYW4gYXlhcmxhcmEgZ2VyaSBkw7ZuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkF5YXJsYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkFsdCB5YXrEsWxhciBhw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJBbHQgeWF6xLFsYXIga2FwYWzEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGl5YXRybyBtb2R1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlRpeWF0cm8gbW9kdW5kYW4gw6fEsWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBrYWxpdGVzaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTWljcm9zb2Z0IFN0cmVhbSdkZSBnw7Zyw7xudMO8bGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTZWFyY2hcIl0gPSBcIkFyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkF1dG9cIl0gPSBcIk90b21hdGlrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiT25cIl0gPSBcIkHDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiTWV0aW4gcmVuZ2k6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIk1ldGluIGJveXV0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkFuYSBtZW7DvHllIGTDtm5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0J/RgNC+0LfQvtGA0ZbRgdGC0Ywg0YTQvtC90YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItCS0LjQvNC60L3Rg9GC0Lgg0L/RltC00L/QuNGB0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0KPQstGW0LzQutC90YPRgtC4INC/0ZbQtNC/0LjRgdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCf0ZbQtNC/0LjRgdC4INGC0LAg0YHRg9Cx0YLQuNGC0YDQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0L/RltC00L/QuNGB0ZbQsiDRliDRgdGD0LHRgtC40YLRgNGW0LJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQntCx0LXRgNC90LXQvdCwINGB0LXQv9GW0Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLQntCx0LXRgNC90LXQvdC40Lkg0YHRgtCw0L3QtNCw0YDRgtC90LjQuSDQutC+0LvRltGAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU2VwaWFcIl0gPSBcItCh0LXQv9GW0Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTdGFuZGFyZFwiXSA9IFwi0KHRgtCw0L3QtNCw0YDRgtC90LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkxhcmdlXCJdID0gXCLQktC10LvQuNC60LjQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIk1lZGl1bVwiXSA9IFwi0KHQtdGA0LXQtNC90ZbQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlNtYWxsXCJdID0gXCLQnNCw0LvQuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCf0L7QstC90LjQuSDQtdC60YDQsNC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi0JLQuNC50YLQuCDQtyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INGA0LXQttC40LzRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIk9mZlwiXSA9IFwi0JLQuNC80LrQvdGD0YLQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLQqNCy0LjQtNC60ZbRgdGC0Ywg0LLRltC00YLQstC+0YDQtdC90L3Rj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQn9C+0LLQtdGA0L3Rg9GC0LjRgdGPINC00L4g0YHRgtCw0L3QtNCw0YDRgtC90LjRhSDQvdCw0LvQsNGI0YLRg9Cy0LDQvdGMXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU2V0dGluZ3NcIl0gPSBcItCd0LDRgdGC0YDQvtC50LrQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KPQstGW0LzQutC90YPRgtC4INGB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLQktC40LzQutC90YPRgtC4INGB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItCg0LXQttC40Lwg0YLQtdCw0YLRgNGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCS0LjQudGC0Lgg0Lcg0YDQtdC20LjQvNGDINGC0LXQsNGC0YDRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItCv0LrRltGB0YLRjCDQstGW0LTQtdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9C10YDQtdCz0LvRj9C90YPRgtC4INCyIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTZWFyY2hcIl0gPSBcItCf0L7RiNGD0LpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJBdXRvXCJdID0gXCLQkNCy0YLQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNDXCJdID0gXCLQmtC+0L/RltGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiT25cIl0gPSBcItCS0LjQvNC60L3Rg9GC0L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItCa0L7Qu9GW0YAg0YLQtdC60YHRgtGDOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0KDQvtC30LzRltGAINGC0LXQutGB0YLRgzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCf0L7QstC10YDQvdGD0YLQuNGB0Y8g0LTQviDQs9C+0LvQvtCy0L3QvtCz0L4g0LzQtdC90Y5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiTsOqzIBuIHRyb25nIHN1w7TMgXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlTEg8yBdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQsOizKN0IHBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJQaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGhpw6rMgXQgxJHEg8yjdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJRdWF5IGxhzKNpIG1hzIB1IG7DonUgxJFvzIlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJRdWF5IGxhzKNpIG1hzIB1IHRpw6p1IGNodcOizIluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU2VwaWFcIl0gPSBcIk1hzIB1IG7DonUgxJFvzIlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdGFuZGFyZFwiXSA9IFwiVGnDqnUgY2h1w6LMiW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJMYXJnZVwiXSA9IFwiTOG7m25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJNZWRpdW1cIl0gPSBcIlRydW5nIGLDrG5oXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU21hbGxcIl0gPSBcIk5o4buPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRvw6BuIG3DoG4gaMOsbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJUaG9hzIF0IHRvYcyAbiBtYcyAbiBoacyAbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJPZmZcIl0gPSBcIlThuq90XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlTDtMyBYyDEkcO0zKMgcGhhzIF0IGxhzKNpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlRyxqHMiSBsYcyjaSB0aGnDqsyBdCDEkcSDzKN0IG3Eg8yjYyDEkWnMo25oXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlRoacOqzIF0IMSRxIPMo3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkLDosyjdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJUxIPMgXQgcGh1zKMgxJHDqsyAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJDaMOqzIEgxJHDtMyjIHJhzKNwIGhhzIF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlRob2HMgXQgY2jDqsyBIMSRw7TMoyByYcyjcCBoYcyBdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkNow6LMgXQgbMawxqHMo25nIHZpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJYZW0gdHJvbmcgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlNlYXJjaFwiXSA9IFwiVMOsbSBraeG6v21cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJBdXRvXCJdID0gXCJU4buxIMSR4buZbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJPblwiXSA9IFwiQsOizKN0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJNYcyAdSB2xINuIGJhzIluOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiS2nMgWNoIHRoxrDGocyBYyB2xINuIGJhzIluOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiUXVheSBsYcyjaSBtZW51IGNoacyBbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLog4zmma/pgI/mmI7luqZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi5YWz6Zet6Kej6YeK5oCn5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi5byA5ZCv6Kej6YeK5oCn5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi6Kej6YeK5oCn5a2X5bmVL+WvueeZveWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuino+mHiuaAp+Wtl+W5lS/lr7nnmb3lrZfluZXorr7nva5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIuWPjeWQkeajleikkOiJslwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi5Y+N5ZCR5qCH5YeG6ImyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTZXBpYVwiXSA9IFwi5qOV6KSQ6ImyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTdGFuZGFyZFwiXSA9IFwi5qCH5YeGXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJMYXJnZVwiXSA9IFwi5aSnXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU21hbGxcIl0gPSBcIuWwj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIuWFqOWxj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi6YCA5Ye65YWo5bGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJPZmZcIl0gPSBcIuWFs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuaSreaUvumAn+W6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIui/mOWOn+S4uum7mOiupOiuvue9rlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuiuvue9rlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLlvIDlkK/lr7nnmb3lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuWFs+mXreWvueeZveWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLlvbHpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLpgIDlh7rlvbHpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIuinhumikei0qOmHj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLlnKggTWljcm9zb2Z0IFN0cmVhbSDkuK3mn6XnnItcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlNlYXJjaFwiXSA9IFwi5pCc57SiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJBdXRvXCJdID0gXCLoh6rliqhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNDXCJdID0gXCLmioTpgIFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIk9uXCJdID0gXCLlvIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi5paH5pys6aKc6ImyOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLmlofmnKzlpKflsI86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIui/lOWbnuS4u+iPnOWNlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuiDjOaZr+mAj+aYjuW6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLpl5zplonlrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLplovllZ/lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLlrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLlrZfluZXoqK3lrppcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIumChOWOn+W+qeWPpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi6YKE5Y6f5qiZ5rqWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTZXBpYVwiXSA9IFwi5b6p5Y+kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTdGFuZGFyZFwiXSA9IFwi5qiZ5rqWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJMYXJnZVwiXSA9IFwi5aSnXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJNZWRpdW1cIl0gPSBcIuS4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU21hbGxcIl0gPSBcIuWwj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIuWFqOieouW5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi57WQ5p2f5YWo6J6i5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJPZmZcIl0gPSBcIumXnOmWiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuaSreaUvumAn+W6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIumChOWOn+eCuumgkOioreioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU2V0dGluZ3NcIl0gPSBcIuioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLplovllZ/lrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIumXnOmWieWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLliofpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLntZDmnZ/liofpmaLmqKHlvI9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIuW9seeJh+WTgeizqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLlnKggTWljcm9zb2Z0IFN0cmVhbSDkuK3mqqLoppZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlNlYXJjaFwiXSA9IFwi5pCc5bCLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJBdXRvXCJdID0gXCLoh6rli5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkNDXCJdID0gXCLlia/mnKxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIk9uXCJdID0gXCLplovllZ9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi5paH5a2X6Imy5b2pOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLmloflrZflpKflsI86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuWbnuWIsOS4u+WKn+iDveihqFwiO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJMb2NTdHJpbmdzLmpzXG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnJlcXVpcmUoJy4vU3RyZWFtU2tpblBsdWdpbi5zY3NzJyk7XHJcblxyXG5hbXAuU3RyZWFtU2tpblBsdWdpbiA9IGFtcC5leHRlbmQoYW1wLmdldENvbXBvbmVudCgnQ29tcG9uZW50JyksIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAgICAgcGxheWVyLm9wdGlvbnNfID0gcGxheWVyLm9wdGlvbnNfIHx8IHt9O1xyXG4gICAgICAgIHBsYXllci5vcHRpb25zX1tcImluYWN0aXZpdHlUaW1lb3V0XCJdID0gMjI1MDtcclxuXHJcbiAgICAgICAgdmFyIGxvZ28gPSBwbGF5ZXIub3B0aW9uc18ubG9nbyxcclxuICAgICAgICAgICAgZW5hYmxlZCA9ICEhbG9nbyAmJiBsb2dvLmVuYWJsZWQgIT09IHVuZGVmaW5lZCA/IGxvZ28uZW5hYmxlZCA6IHRydWUsXHJcbiAgICAgICAgICAgIG9wYWNpdHkgPSAhIWxvZ28gJiYgISFsb2dvLm9wYWNpdHkgPyBsb2dvLm9wYWNpdHkgOiAwLjUsXHJcbiAgICAgICAgICAgIHRhcmdldFVybCA9ICEhbG9nbyAmJiAhIWxvZ28udGFyZ2V0VXJsID8gbG9nby50YXJnZXRVcmwgOiBudWxsLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSAhIWxvZ28gJiYgISFsb2dvLmhvcml6b250YWxQb3NpdGlvbiA/IGxvZ28uaG9yaXpvbnRhbFBvc2l0aW9uIDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uID0gISFsb2dvICYmICEhbG9nby52ZXJ0aWNhbFBvc2l0aW9uID8gbG9nby52ZXJ0aWNhbFBvc2l0aW9uIDogJ3RvcCc7XHJcblxyXG4gICAgICAgIC8vIEFkZCBza2luIHBsdWdpbnNcclxuICAgICAgICB2YXIgc2tpblBsdWdpbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHBsYXllci5vcHRpb25zXy50aXRsZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwbGF5ZXIub3B0aW9uc18uZGVzY3JpcHRpb24gfHwgJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nbzoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRVcmw6IHRhcmdldFVybFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplQ2xhc3NlczogcGxheWVyLm9wdGlvbnNfLnNpemVDbGFzc2VzIHx8IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFRvRG86IHdlIG5lZWQgdG8gdHJhbnNsYXRlIHRoZSBtZW51IHRpdGxlc1xyXG4gICAgICAgICAgICBsaXZlOiB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sVGV4dDogJ0xJVkUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3NlZENhcHRpb246IHtcclxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZTogJ0Nsb3NlZCBDYXB0aW9uaW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdWFsaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBtZW51VGl0bGU6ICdRdWFsaXR5JyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGF5YmFja1NwZWVkOiBwbGF5ZXIub3B0aW9uc18ucGxheWJhY2tTcGVlZCB8fCB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWRMZXZlbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcyLjB4JywgdmFsdWU6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjc1eCcsIHZhbHVlOiAxLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMS41eCcsIHZhbHVlOiAxLjUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjI1eCcsIHZhbHVlOiAxLjI1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMS4weCcsIHZhbHVlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnMC41eCcsIHZhbHVlOiAwLjUgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW1wVm9sdW1lTWVudUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGlkZVZvbHVtZUJhck9uSW5BY3Rpdml0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBjb250cm9sQmFySWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZnRJY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdwbGF5VG9nZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAndm9sdW1lQ29udHJvbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpdmVEaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAnY3VycmVudFRpbWVEaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZURpdmlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbkRpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1haW5pbmdUaW1lRGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWlkZGxlSWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRJY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdjYXB0aW9uVG9nZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbW9yZU9wdGlvbnNCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuVG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZU90aGVySWNvbnM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU9uTWVudUl0ZW1zOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSXQncyB0b28gbGF0ZSB0byBtZXJnZSBwbHVnaW4gb3B0aW9ucyB0byBwbGF5ZXIgb3B0aW9ucyxcclxuICAgICAgICAvLyBleHBsaWNpdGx5IHN0YXJ0IGVhY2ggcGx1Z2luIGluc3RlYWRcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhza2luUGx1Z2lucykuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyW3BsdWdpbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJbcGx1Z2luTmFtZV0oc2tpblBsdWdpbnNbcGx1Z2luTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHdoaWxlIHVzaW5nIG1vdXNlIHZvbHVtZSBiYXIgc2hvdWxkIG9ubHkgaGlkZSB3aGVuIHdlIGxlYXZlIHRoZSBsZWZ0IGNvbnRyb2wgYmFyLlxyXG4gICAgICAgIHZhciBWb2x1bWVDb250cm9sID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1ZvbHVtZUNvbnRyb2wnKTtcclxuICAgICAgICBWb2x1bWVDb250cm9sLnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkgeyB9XHJcbiAgICAgICAgcGxheWVyLm9uKFwibG9hZGVkbWV0YWRhdGFcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgY29udHJvbEJhckNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdWJDb250cm9sQmFyID0gY29udHJvbEJhckNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YkNvbnRyb2xCYXIuZWwoKSAmJiBzdWJDb250cm9sQmFyLmVsKCkuY2xhc3NOYW1lID09PSBcImFtcC1jb250cm9sYmFyaWNvbnMtbGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViQ29udHJvbEJhci5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci52b2x1bWVDb250cm9sLnVucHJlc3NCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5YmFja1NwZWVkVXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyW1wiTW9yZU9wdGlvbnNwbGF5YmFja1NwZWVkQnV0dG9uXCJdLnJlYnVpbGQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xCYXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZS5pbmRleE9mKCdhbXAtY29udHJvbGJhcmljb25zJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YkNvbnRyb2xiYXIgPSBjb250cm9sQmFyQ2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkQ29udHJvbHMgPSBzdWJDb250cm9sYmFyLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQ29udHJvbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGNoaWxkQ29udHJvbHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSXRlbS5vbignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhck90aGVyTWVudXMoY2hpbGRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYXllci5vbihcInBsYXlpbmdBdExpdmVEVlJFZGdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmxpdmVEaXNwbGF5LmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdWaWV3aW5nIGxpdmUgYnJvYWRjYXN0JykpKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmxpdmVEaXNwbGF5LmVsXy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdWaWV3aW5nIGxpdmUgYnJvYWRjYXN0JykpKTtcclxuICAgICAgICAgICAgICAgIHBsYXliYWNrU3BlZWRVcGRhdGVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLm9uKFwicGxheWluZ0F0U3RhcnREVlJFZGdlXCIsIHBsYXliYWNrU3BlZWRVcGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBwbGF5ZXIub24oXCJwbGF5aW5nSW5EVlJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIubGl2ZURpc3BsYXkuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1NraXAgdG8gbGl2ZSBicm9hZGNhc3QnKSkpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIubGl2ZURpc3BsYXkuZWxfLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1NraXAgdG8gbGl2ZSBicm9hZGNhc3QnKSkpO1xyXG4gICAgICAgICAgICAgICAgcGxheWJhY2tTcGVlZFVwZGF0ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbihcImNhbnBsYXl0aHJvdWdoXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGxheWVyLmNhcHRpb25Ub2dnbGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJPdGhlck1lbnVzKGNoaWxkSXRlbSkge1xyXG4gICAgICAgICAgICBsZXQgY29udHJvbEJhckNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKSAmJiBjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKS5jbGFzc05hbWUuaW5kZXhPZignYW1wLWNvbnRyb2xiYXJpY29ucycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJDb250cm9sYmFyID0gY29udHJvbEJhckNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZENvbnRyb2xzID0gc3ViQ29udHJvbGJhci5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZENvbnRyb2xzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbnRyb2xzW2pdICE9PSBjaGlsZEl0ZW0gJiYgY2hpbGRDb250cm9sc1tqXS51bnByZXNzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRyb2xzW2pdLnVucHJlc3NCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICogRGlzcG9zZSBtZXRob2QuXHJcbiAqIE5vdCBkb2luZyBhbnl0aGluZywgYXMgdGhpcyBpcyBub3QgYW4gYWN0dWFsIGNvbnRyb2wuXHJcbiAqL1xyXG5hbXAuU3RyZWFtU2tpblBsdWdpbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBTdHJlYW1Ta2luUGx1Z2luIGNvbXBvbmVudFxyXG4gKi9cclxuYW1wLnJlZ2lzdGVyQ29tcG9uZW50KCdzdHJlYW1Ta2luUGx1Z2luJywgYW1wLlN0cmVhbVNraW5QbHVnaW4pO1xyXG5cclxuYW1wLmdldENvbXBvbmVudCgnQ29udHJvbEJhcicpLnByb3RvdHlwZS5vcHRpb25zXyA9IHtcclxuICAgIGxvYWRFdmVudDogJ3BsYXknLFxyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICAncGxheVRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdjdXJyZW50VGltZURpc3BsYXknOiB7fSxcclxuICAgICAgICAndGltZURpdmlkZXInOiB7fSxcclxuICAgICAgICAnZHVyYXRpb25EaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3JlbWFpbmluZ1RpbWVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ2xpdmVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3Byb2dyZXNzQ29udHJvbCc6IHt9LFxyXG4gICAgICAgICdmdWxsc2NyZWVuVG9nZ2xlJzoge30sXHJcbiAgICAgICAgJ1RleHRUcmFja0xpc3QnOiB7fSxcclxuICAgICAgICAnY2FwdGlvbnNCdXR0b24nOiB7fSxcclxuICAgICAgICAnc3RyZWFtU2tpblBsdWdpbic6IHt9LFxyXG4gICAgICAgICdjYXB0aW9uVG9nZ2xlJzoge30sXHJcbiAgICAgICAgJ21vcmVPcHRpb25zQnV0dG9uJzoge1xyXG4gICAgICAgICAgICBlbnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAncGxheWJhY2tTcGVlZEJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAnY2FwdGlvblN1YnRpdGxlQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICdjYXB0aW9uU2V0dGluZ3NCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgJ3F1YWxpdHlCdXR0b24nXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG5cclxudmlkZW9qcy5nZXRDb21wb25lbnQoJ1NlZWtCYXInKS5wcm90b3R5cGUub3B0aW9uc18gPSB7XHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICAnbG9hZFByb2dyZXNzQmFyJyxcclxuICAgICAgJ21vdXNlVGltZVRvb2x0aXAnLFxyXG4gICAgICAncGxheVByb2dyZXNzQmFyJyxcclxuICAgICAgJ3NlZWtIYW5kbGUnXHJcbiAgICBdLFxyXG4gICAgJ2Jhck5hbWUnOiAncGxheVByb2dyZXNzQmFyJyxcclxuICAgICdoYW5kbGVOYW1lJzogJ3NlZWtIYW5kbGUnXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG5yZXF1aXJlKFwiLi9TZWFyY2hQbHVnaW4uc2Nzc1wiKTtcclxuXHJcbmNsYXNzIFNlYXJjaEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSAnc2VhcmNoQnV0dG9uJztcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtc2VhcmNoLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnBsYXllcigpLnRyaWdnZXIoJ3NlYXJjaFBsdWdpbicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TZWFyY2hCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdTZWFyY2gnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTZWFyY2hCdXR0b24nLCBTZWFyY2hCdXR0b24pO1xyXG5cclxuY29uc3QgU2VhcmNoUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHNlYXJjaFBsdWdpbiA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaEJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnU2VhcmNoQnV0dG9uJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hCdXR0b24gPSByaWdodENvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoc2VhcmNoQnV0dG9uLmVsKCksIHBsYXllci5jb250cm9sQmFyLmNhcHRpb25Ub2dnbGUuZWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc2VhcmNoQnV0dG9uID0gc2VhcmNoQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbignc2VhcmNoUGx1Z2luJywgU2VhcmNoUGx1Z2luKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TZWFyY2hQbHVnaW4vU2VhcmNoUGx1Z2luLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1NlYXJjaFBsdWdpbi9TZWFyY2hQbHVnaW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=