(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["player-skin"] = factory();
    else
        root["player-skin"] = factory();
})(this, function () {
    return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
                /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
}
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
        /******/
})
/************************************************************************/
/******/({

/***/ 0:
/***/ function (module, exports, __webpack_require__) {

                "use strict";

                __webpack_require__(936);
                __webpack_require__(944);
                __webpack_require__(946);
                __webpack_require__(948);
                __webpack_require__(949);
                __webpack_require__(951);
                __webpack_require__(952);
                __webpack_require__(953);
                __webpack_require__(955);
                __webpack_require__(957);
                __webpack_require__(959);
                __webpack_require__(960);
                __webpack_require__(961);
                __webpack_require__(963);

                /***/
},

/***/ 936:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 944:
/***/ function (module, exports, __webpack_require__) {

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

                __webpack_require__(945);

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

                /***/
},

/***/ 945:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 946:
/***/ function (module, exports, __webpack_require__) {

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

                __webpack_require__(947);

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

                /***/
},

/***/ 947:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 948:
/***/ function (module, exports) {

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

                /***/
},

/***/ 949:
/***/ function (module, exports, __webpack_require__) {

                'use strict';

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                __webpack_require__(950);

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

                            menu.focus = function () { };

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

                /***/
},

/***/ 950:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 951:
/***/ function (module, exports) {

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

                /***/
},

/***/ 952:
/***/ function (module, exports) {

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
                                if (headerChild.hasClass("dialog-header")) {
                                    backButton.addClass("dialog-header");
                                }
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

                /***/
},

/***/ 953:
/***/ function (module, exports, __webpack_require__) {

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

                __webpack_require__(954);

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

                /***/
},

/***/ 954:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 955:
/***/ function (module, exports, __webpack_require__) {

                'use strict';

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Component = videojs.getComponent('Component');
                var Button = videojs.getComponent('Button');

                __webpack_require__(956);

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

                /***/
},

/***/ 956:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 957:
/***/ function (module, exports, __webpack_require__) {

                'use strict';

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
                var Component = videojs.getComponent('Component');

                __webpack_require__(958);

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

                /***/
},

/***/ 958:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 959:
/***/ function (module, exports) {

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

                MenuButton.prototype.handleMouseOver = function () { };
                MenuButton.prototype.handleMouseLeave = function () { };

                /***/
},

/***/ 960:
/***/ function (module, exports) {

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

                /***/
},

/***/ 961:
/***/ function (module, exports, __webpack_require__) {

                'use strict';

                //-----------------------------------------------------------------------
                // <copyright company="Microsoft Corporation">
                //        Copyright (c) Microsoft Corporation.  All rights reserved.
                // </copyright>
                //-----------------------------------------------------------------------

                __webpack_require__(962);

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
                amp.StreamSkinPlugin.prototype.dispose = function () { };

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

                /***/
},

/***/ 962:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
},

/***/ 963:
/***/ function (module, exports, __webpack_require__) {

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

                __webpack_require__(964);

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

                /***/
},

/***/ 964:
/***/ function (module, exports) {

                // removed by extract-text-webpack-plugin

                /***/
}

            /******/
})
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDk3YTU3MTIyN2NmOTk1NmE2NTNiP2Q2YmIqIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9QbGF5ZXJQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1JY29uL1N0cmVhbUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9UaGVhdGVyTW9kZS9UaGVhdGVyTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvVGhlYXRlck1vZGUvVGhlYXRlck1vZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblN1YnRpdGxlL09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU2V0dGluZ3MvQ2FwdGlvblNldHRpbmdzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3JlT3B0aW9ucy9Nb3JlT3B0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5zY3NzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvUGxheWVyTG9jU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLmpzIiwid2VicGFjazovLy8uL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUixFOzs7Ozs7O0FDYkEsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7QUFDTixLQUFNLFNBQVMsUUFBUSxZQUFSLENBQXFCLFFBQXJCLENBQVQ7O0FBRU4scUJBQVEsR0FBUjs7S0FFTTs7O0FBQ0YsK0JBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7O0FBQ3pCLGlCQUFRLElBQVIsR0FBZSxrQkFBZixDQUR5Qjs7eUlBRW5CLFFBQVEsVUFGVzs7QUFHekIsZUFBSyxHQUFMLENBQVMsWUFBVCxDQUFzQixZQUF0QixFQUFvQyxNQUFLLFFBQUwsQ0FBYyx1QkFBZCxDQUFwQyxFQUh5Qjs7TUFBN0I7Ozs7eUNBTWdCO0FBQ1osMktBRFk7Ozs7dUNBSUY7QUFDVixpQkFBSSxlQUFlLENBQUMsQ0FBQyxLQUFLLE9BQUwsSUFBZ0IsQ0FBQyxDQUFDLEtBQUssT0FBTCxFQUFELEdBQWtCLEtBQUssT0FBTCxHQUFlLFlBQWYsR0FBOEIsSUFBbkUsQ0FEVDtBQUVWLG9CQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLFFBQTFCLEVBRlU7Ozs7O0dBWGE7O0FBa0IvQixrQkFBaUIsU0FBakIsQ0FBMkIsWUFBM0IsR0FBMEMsMEJBQTFDO0FBQ0EsU0FBUSxpQkFBUixDQUEwQixrQkFBMUIsRUFBOEMsZ0JBQTlDOztBQUVBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFVLE9BQVYsRUFBbUI7QUFDeEMsU0FBSSxTQUFTLElBQVQsQ0FEb0M7QUFFeEMsU0FBSSxlQUFlLENBQUMsQ0FBQyxPQUFELEdBQVcsUUFBUSxZQUFSLEdBQXVCLElBQW5DLENBRnFCOztBQUl4QyxZQUFPLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFZO0FBQ3BDLGFBQUkscUJBQXFCLE9BQU8sVUFBUCxDQUFrQixRQUFsQixFQUFyQixDQURnQztBQUVwQyxhQUFJLG1CQUFtQixJQUFuQixDQUZnQztBQUdwQyxjQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBbUIsTUFBbkIsRUFBMkIsR0FBL0MsRUFBb0Q7QUFDaEQsaUJBQUksbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLE1BQThCLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixHQUEyQixTQUEzQixLQUF5QywyQkFBekMsRUFBc0U7QUFDcEcscUJBQUksa0JBQWtCLE9BQU8sVUFBUCxDQUFrQixRQUFsQixHQUE2QixDQUE3QixDQUFsQixDQURnRztBQUVwRyxxQkFBSSxtQkFBbUIsS0FBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLGtCQUF6QixFQUE2QyxPQUE3QyxDQUFuQixDQUZnRztBQUdwRyxvQ0FBbUIsZ0JBQWdCLFFBQWhCLENBQXlCLGdCQUF6QixDQUFuQixDQUhvRztjQUF4RztBQUtBLGlCQUFJLGdCQUFKLEVBQXNCO0FBQ2xCLHdCQUFPLFVBQVAsQ0FBa0IsZ0JBQWxCLEdBQXFDLGdCQUFyQyxDQURrQjtjQUF0QjtVQU5KO01BSHdCLENBQTVCLENBSndDO0VBQW5COztBQW9CekIsU0FBUSxNQUFSLENBQWUsa0JBQWYsRUFBbUMsZ0JBQW5DLEU7Ozs7Ozs7QUNwREEsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7QUFDTixLQUFNLFNBQVMsUUFBUSxZQUFSLENBQXFCLFFBQXJCLENBQVQ7O0FBRU4scUJBQVEsR0FBUjs7S0FFTTs7O0FBQ0YsZ0NBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7O0FBQ3pCLGlCQUFRLElBQVIsR0FBZSxtQkFBZixDQUR5Qjs7MklBRW5CLFFBQVEsVUFGVzs7QUFHekIsZUFBSyxXQUFMLENBQWlCLE1BQUssVUFBTCxDQUFnQixNQUFLLFFBQUwsQ0FBYyxjQUFkLENBQWhCLENBQWpCLEVBSHlCO0FBSXpCLGVBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsWUFBdEIsRUFBb0MsTUFBSyxRQUFMLENBQWMsY0FBZCxDQUFwQyxFQUp5Qjs7TUFBN0I7Ozs7eUNBT2dCO0FBQ1osOEtBRFk7Ozs7dUNBSUY7QUFDVixrQkFBSyxpQkFBTCxHQURVOzs7OzZDQUlNO0FBQ2hCLGlCQUFJLEtBQUssUUFBTCxDQUFjLHlCQUFkLENBQUosRUFBOEM7QUFDMUMsc0JBQUssV0FBTCxDQUFpQix5QkFBakIsRUFEMEM7QUFFMUMsc0JBQUssTUFBTCxHQUFjLE9BQWQsQ0FBc0IsaUJBQXRCLEVBRjBDO0FBRzFDLHNCQUFLLFdBQUwsQ0FBaUIsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBaEIsQ0FBakIsRUFIMEM7QUFJMUMsc0JBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsWUFBdEIsRUFBb0MsS0FBSyxRQUFMLENBQWMsY0FBZCxDQUFwQyxFQUowQztjQUE5QyxNQU1LO0FBQ0Qsc0JBQUssUUFBTCxDQUFjLHlCQUFkLEVBREM7QUFFRCxzQkFBSyxNQUFMLEdBQWMsT0FBZCxDQUFzQixrQkFBdEIsRUFGQztBQUdELHNCQUFLLFdBQUwsQ0FBaUIsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLG1CQUFkLENBQWhCLENBQWpCLEVBSEM7QUFJRCxzQkFBSyxHQUFMLENBQVMsWUFBVCxDQUFzQixZQUF0QixFQUFvQyxLQUFLLFFBQUwsQ0FBYyxtQkFBZCxDQUFwQyxFQUpDO2NBTkw7Ozs7O0dBakJ3Qjs7QUFnQ2hDLG1CQUFrQixTQUFsQixDQUE0QixZQUE1QixHQUEyQyxjQUEzQztBQUNBLFNBQVEsaUJBQVIsQ0FBMEIsbUJBQTFCLEVBQStDLGlCQUEvQzs7QUFFQSxLQUFNLG9CQUFvQixTQUFwQixpQkFBb0IsQ0FBVSxPQUFWLEVBQW1CO0FBQ3pDLFNBQUksU0FBUyxJQUFULENBRHFDO0FBRXpDLFNBQUksZUFBZSxDQUFDLENBQUMsT0FBRCxHQUFXLFFBQVEsWUFBUixHQUF1QixJQUFuQyxDQUZzQjs7QUFJekMsWUFBTyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBWTtBQUNwQyxhQUFJLHFCQUFxQixPQUFPLFVBQVAsQ0FBa0IsUUFBbEIsRUFBckIsQ0FEZ0M7QUFFcEMsYUFBSSxvQkFBb0IsSUFBcEIsQ0FGZ0M7QUFHcEMsYUFBSSxnQkFBZ0IsSUFBaEIsQ0FIZ0M7QUFJcEMsY0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksbUJBQW1CLE1BQW5CLEVBQTJCLEdBQS9DLEVBQW9EO0FBQ2hELGlCQUFJLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixNQUE4QixtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsR0FBMkIsU0FBM0IsS0FBeUMsMkJBQXpDLEVBQXNFO0FBQ3BHLHFCQUFJLGtCQUFrQixPQUFPLFVBQVAsQ0FBa0IsUUFBbEIsR0FBNkIsQ0FBN0IsQ0FBbEIsQ0FEZ0c7QUFFcEcsaUNBQWdCLEtBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixtQkFBekIsRUFBOEMsT0FBOUMsQ0FBaEIsQ0FGb0c7QUFHcEcscUNBQW9CLGdCQUFnQixFQUFoQixHQUFxQixZQUFyQixDQUFrQyxjQUFjLEVBQWQsRUFBbEMsRUFBc0QsT0FBTyxVQUFQLENBQWtCLGdCQUFsQixDQUFtQyxFQUFuQyxFQUF0RCxDQUFwQixDQUhvRztjQUF4RztBQUtBLGlCQUFJLHFCQUFxQixhQUFyQixFQUFvQztBQUNwQyx3QkFBTyxVQUFQLENBQWtCLGlCQUFsQixHQUFzQyxhQUF0QyxDQURvQztjQUF4Qzs7O0FBTmdELG9CQVdoRCxDQUFRLFlBQVIsQ0FBcUIsUUFBckIsRUFBK0IsU0FBL0IsQ0FBeUMsaUJBQXpDLEdBQTZELFlBQVk7QUFDckUscUJBQUksS0FBSyxVQUFMLENBQWdCLGlCQUFoQixFQUFtQztBQUNuQywwQkFBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxpQkFBbEMsR0FEbUM7a0JBQXZDO2NBRHlELENBWGI7VUFBcEQ7TUFKd0IsQ0FBNUIsQ0FKeUM7RUFBbkI7O0FBNEIxQixTQUFRLE1BQVIsQ0FBZSxtQkFBZixFQUFvQyxpQkFBcEMsRTs7Ozs7OztBQzFFQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7QUFDTixLQUFNLG9CQUFvQixRQUFRLFlBQVIsQ0FBcUIsbUJBQXJCLENBQXBCOztLQUVBOzs7QUFFRix5Q0FBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTRCOzs7OztBQUd4QixpQkFBUSxPQUFSLElBQW1CO0FBQ2YscUJBQVEsUUFBUSxNQUFSLENBQVI7QUFDQSx1QkFBVSxNQUFWO0FBQ0Esc0JBQVMsS0FBVDtBQUNBLHdCQUFXLEtBQVg7QUFDQSxxQkFBUSxVQUFSO1VBTEo7OztBQUh3QixnQkFZeEIsQ0FBUSxZQUFSLElBQXdCLElBQXhCLENBWndCOzs2SkFjbEIsUUFBUSxVQWRVOztBQWV4QixlQUFLLFFBQUwsQ0FBYyxJQUFkLEVBZndCOztNQUE1Qjs7Ozs0Q0FrQm1CLE9BQU07QUFDckIsaUJBQUksU0FBUyxLQUFLLE1BQUwsR0FBYyxVQUFkLEVBQVQsQ0FEaUI7QUFFckIsaUJBQUksV0FBVyxJQUFYLENBRmlCOztBQUlyQixrQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxNQUFQLEVBQWUsSUFBSSxDQUFKLEVBQU8sR0FBMUMsRUFBK0M7QUFDM0MscUJBQUksUUFBUSxPQUFPLENBQVAsQ0FBUixDQUR1QztBQUUzQyxxQkFBSSxNQUFNLE1BQU4sTUFBa0IsU0FBbEIsRUFBNkI7QUFDN0IsZ0NBQVcsS0FBWCxDQUQ2QjtBQUU3QiwyQkFGNkI7a0JBQWpDO2NBRko7O0FBUUEsa0JBQUssUUFBTCxDQUFjLFFBQWQsRUFacUI7Ozs7O0dBcEJZOztBQW9DekMsV0FBVSxpQkFBVixDQUE0Qiw0QkFBNUIsRUFBMEQsMEJBQTFELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQSxxQkFBUSxHQUFSOztBQUVBLEtBQU0sWUFBWSxRQUFRLFlBQVIsQ0FBcUIsV0FBckIsQ0FBWjtBQUNOLEtBQU0sYUFBYSxRQUFRLFlBQVIsQ0FBcUIsWUFBckIsQ0FBYjs7S0FFQTs7O0FBQ0Ysb0NBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7O21KQUNuQixRQUFRLFVBRFc7O0FBRXpCLGVBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsTUFBSyxRQUFMLENBQWMsK0JBQWQsQ0FBaEIsQ0FBbEIsQ0FGeUI7O0FBSXpCLGdCQUFPLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFNO0FBQzlCLGlCQUFJLFNBQVMsTUFBSyxPQUFMLENBQWEsVUFBYixFQUFULENBRDBCO0FBRTlCLGlCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUFQLEVBQWU7QUFDM0IsdUJBQUssSUFBTCxHQUQyQjtBQUUzQix3QkFGMkI7Y0FBL0I7VUFGd0IsQ0FBNUIsQ0FKeUI7OztNQUE3Qjs7Ozt5Q0FjZ0I7QUFDWixrTUFEWTs7OztzQ0FJSDtBQUNULGlCQUFJLE9BQU8sSUFBSSxTQUFKLENBQWMsS0FBSyxPQUFMLEVBQWM7QUFDbkMscUJBQUksUUFBUSxRQUFSLENBQWlCLElBQWpCLEVBQXVCO0FBQ3ZCLGdDQUFXLFVBQVg7QUFDQSwrQkFBVSxDQUFDLENBQUQ7a0JBRlYsQ0FBSjtjQURPLENBQVAsQ0FESzs7QUFRVCxrQkFBSyxLQUFMLEdBQWEsWUFBWSxFQUFaLENBUko7O0FBVVQsaUJBQUkscUJBQXFCLElBQUksU0FBSixDQUFjLEtBQUssT0FBTCxFQUFjO0FBQ2pELHFCQUFJLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QjtBQUN2QixnQ0FBVywrQkFBWDtBQUNBLGdDQUFXLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYywrQkFBZCxDQUFoQixDQUFYO0FBQ0EsK0JBQVUsQ0FBQyxDQUFEO2tCQUhWLENBQUo7Y0FEcUIsQ0FBckIsQ0FWSzs7QUFrQlQsZ0NBQW1CLEVBQW5CLENBQXNCLFNBQXRCLEVBQWlDLFVBQVUsS0FBVixFQUFpQjtBQUM5QyxxQkFBSSxNQUFNLEtBQU4sS0FBZ0IsRUFBaEIsRUFBb0I7QUFDcEIsMkJBQU0sd0JBQU4sR0FEb0I7a0JBQXhCO2NBRDZCLENBQWpDLENBbEJTOztBQXdCVCxrQkFBSyxRQUFMLENBQWMsa0JBQWQsRUF4QlM7QUF5QlQsa0JBQUssUUFBTCxDQUFjLElBQUksZUFBSixDQUFvQixLQUFLLE9BQUwsQ0FBbEMsRUF6QlM7O0FBMkJULGtCQUFLLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVUsS0FBVixFQUFpQjtBQUM5Qix1QkFBTSx3QkFBTixHQUQ4QjtjQUFqQixDQUFqQixDQTNCUzs7QUErQlQsb0JBQU8sSUFBUCxDQS9CUzs7Ozs7R0FuQm1COztBQXNEcEMsV0FBVSxpQkFBVixDQUE0Qix1QkFBNUIsRUFBcUQscUJBQXJEOztLQUVNOzs7QUFDRiw4QkFBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCOzs7d0lBQ25CLFFBQVEsVUFEVzs7QUFFekIsZ0JBQUssUUFBTCxDQUFjLDJCQUFkLEVBRnlCOztBQUl6QixnQkFBTyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBTTtBQUM5QixvQkFBSyxJQUFMLEdBRDhCOztBQUc5QixvQkFBTyxpQkFBUCxVQUg4Qjs7QUFLOUIsaUJBQUksK0JBQStCLFNBQS9CLDRCQUErQixDQUFVLEtBQVYsRUFBaUI7QUFDaEQscUJBQUksVUFBVyxNQUFNLE1BQU4sQ0FBYSxZQUFiLENBQTBCLGNBQTFCLE1BQThDLE1BQTlDLENBRGlDO0FBRWhELHNCQUFLLDBCQUFMLENBQWdDLENBQUMsT0FBRCxDQUFoQyxDQUZnRDtBQUdoRCxzQkFBSyxhQUFMLEdBSGdEO2NBQWpCLENBTEw7O0FBVzlCLGlCQUFJLGNBQWMsU0FBZCxXQUFjLEdBQVk7QUFDMUIsc0JBQUssU0FBTCxDQUFlO0FBQ1gsMENBQXFCLEdBQXJCO0FBQ0Esb0NBQWUsTUFBZjtBQUNBLHVDQUFrQixZQUFsQjtrQkFISixFQUQwQjtjQUFaLENBWFk7O0FBbUI5QixpQkFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQVUsS0FBVixFQUFpQjtBQUNwQyxzQkFBSyxtQkFBTCxHQURvQztBQUVwQyxzQkFBSyxhQUFMLEdBRm9DO2NBQWpCOzs7QUFuQk8sd0JBeUI5QixDQUFZLElBQVosU0F6QjhCOztBQTJCOUIsaUJBQUksT0FBSyxRQUFMLENBQWMsd0JBQWQsRUFBd0M7QUFDeEMsd0JBQUssZUFBTCxHQUR3QztjQUE1Qzs7QUFJQSxvQkFBSyxDQUFMLDBDQUFnRCxnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsNkJBQTZCLElBQTdCLFFBQTFFLEVBL0I4QjtBQWdDOUIsb0JBQUssQ0FBTCxDQUFPLHNCQUFQLEVBQStCLGdCQUEvQixDQUFnRCxPQUFoRCxFQUF5RCxPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsUUFBekQsRUFoQzhCO0FBaUM5QixvQkFBSyxDQUFMLENBQU8sdUJBQVAsRUFBZ0MsZ0JBQWhDLENBQWlELE9BQWpELEVBQTBELGlCQUFpQixJQUFqQixRQUExRCxFQWpDOEI7QUFrQzlCLG9CQUFLLENBQUwsQ0FBTyw2QkFBUCxFQUFzQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBWSxJQUFaLFFBQWhFLEVBbEM4Qjs7QUFvQzlCLG9CQUFLLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLE9BQUssY0FBTCxDQUFvQixJQUFwQixRQUFuQixFQXBDOEI7VUFBTixDQUE1QixDQUp5Qjs7TUFBN0I7Ozs7b0NBNENXO0FBQ1AsK0lBQXNCLE1BQU07QUFDeEIsNEJBQVcsMkJBQVg7QUFDQSx1QkFBTSxjQUFOO0FBQ0EsNEJBQVcsMkJBQTJCLElBQTNCLENBQWdDLElBQWhDLEVBQXNDLEtBQUssR0FBTCxDQUFqRDtBQUNBLDJCQUFVLENBQUMsQ0FBRDtnQkFDWCxHQUxILENBRE87Ozs7d0NBU0ksT0FBTztBQUNsQixpQkFBSSxNQUFNLEtBQU4sS0FBZ0IsQ0FBaEIsRUFBbUI7QUFDbkIscUJBQUksb0JBQW9CLEtBQUssRUFBTCxDQUFRLDBCQUFSLENBQXBCLENBRGU7QUFFbkIscUJBQUksTUFBTSxNQUFOLEtBQWlCLGtCQUFrQixrQkFBa0IsTUFBbEIsR0FBMkIsQ0FBM0IsQ0FBbkMsRUFBa0U7QUFDbEUsMEJBQUssT0FBTCxDQUFhLGlCQUFiLENBQStCLFVBQS9CLENBQTBDLElBQTFDLEVBRGtFO2tCQUF0RTtjQUZKOzs7O3lDQVFZO0FBQ1osaUJBQUksWUFBWSxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLGtCQUF0QixDQUFaLENBRFE7QUFFWixpQkFBSSxTQUFKLEVBQWU7QUFDWCwyQkFBVSxhQUFWLEdBRFc7QUFFWCxzQkFBSyxZQUFMLEdBRlc7Y0FBZjs7OztxQ0FNUTtBQUNSLGlCQUFNLGNBQWMsS0FBSyxDQUFMLENBQU8sZ0NBQVAsRUFBeUMsS0FBekMsQ0FEWjtBQUVSLGlCQUFNLGlCQUFpQixLQUFLLENBQUwsQ0FBTyxpQ0FBUCxFQUEwQyxLQUExQyxDQUZmO0FBR1IsaUJBQUksZ0JBQUosQ0FIUTtBQUlSLGlCQUFJLGdCQUFKLENBSlE7QUFLUixxQkFBUSxjQUFSO0FBQ0ksc0JBQUssWUFBTDtBQUNJLCtCQUFVLFNBQVYsQ0FESjtBQUVJLCtCQUFVLFNBQVYsQ0FGSjtBQUdJLDJCQUhKO0FBREosc0JBS1MsZ0JBQUw7QUFDSSwrQkFBVSxTQUFWLENBREo7QUFFSSwrQkFBVSxTQUFWLENBRko7QUFHSSwyQkFISjtBQUxKLHNCQVNTLFdBQUw7QUFDSSwrQkFBVSxTQUFWLENBREo7QUFFSSwrQkFBVSxTQUFWLENBRko7QUFHSSwyQkFISjtBQVRKLHNCQWFTLFlBQUwsQ0FiSjtBQWNJO0FBQ0ksK0JBQVUsU0FBVixDQURKO0FBRUksK0JBQVUsU0FBVixDQUZKOztBQWRKLGNBTFE7O0FBeUJSLGlCQUFJLGlCQUFpQixLQUFLLENBQUwsQ0FBTyx1Q0FBUCxFQUFnRCxZQUFoRCxDQUE2RCxjQUE3RCxDQUFqQixDQXpCSTtBQTBCUixpQkFBTSxZQUFZLG1CQUFtQixNQUFuQixHQUE0QixHQUE1QixHQUFrQyxHQUFsQyxDQTFCVjs7QUE0QlIsaUJBQUksU0FBUztBQUNULHNDQUFxQixTQUFyQjtBQUNBLDBCQUFTLE9BQVQ7QUFDQSxvQ0FBbUIsT0FBbkI7QUFDQSxnQ0FBZSxXQUFmO0FBQ0EsbUNBQWtCLGNBQWxCO2NBTEEsQ0E1Qkk7QUFtQ1Isa0JBQUssSUFBSSxJQUFKLElBQVksTUFBakIsRUFBeUI7QUFDckIscUJBQUksT0FBTyxJQUFQLE1BQWlCLEVBQWpCLElBQXVCLE9BQU8sSUFBUCxNQUFpQixNQUFqQixJQUE0QixTQUFTLGFBQVQsSUFBMEIsT0FBTyxJQUFQLE1BQWlCLElBQWpCLEVBQXdCO0FBQ3JHLDRCQUFPLE9BQU8sSUFBUCxDQUFQLENBRHFHO2tCQUF6RztjQURKO0FBS0Esb0JBQU8sTUFBUCxDQXhDUTs7OzttQ0EyQ0YsUUFBUTtBQUNkLGtCQUFLLENBQUwsQ0FBTyxvQ0FBb0MsT0FBTyxjQUFQLEdBQXdCLElBQTVELENBQVAsQ0FBeUUsT0FBekUsR0FBbUYsSUFBbkYsQ0FEYztBQUVkLGtCQUFLLG1CQUFMLEdBRmM7QUFHZCxrQkFBSyxDQUFMLENBQU8sbUNBQW1DLE9BQU8sV0FBUCxHQUFxQixJQUF4RCxDQUFQLENBQXFFLE9BQXJFLEdBQStFLElBQS9FLENBSGM7QUFJZCxrQkFBSywwQkFBTCxDQUFnQyxPQUFPLFNBQVAsS0FBcUIsQ0FBckIsQ0FBaEMsQ0FKYzs7OztvREFPUyxXQUFXO0FBQ2xDLGtCQUFLLENBQUwsMENBQWdELFlBQWhELENBQTZELGNBQTdELEVBQTZFLFNBQTdFLEVBRGtDO0FBRWxDLGtCQUFLLENBQUwsQ0FBTyw0Q0FBUCxFQUFxRCxTQUFyRCxHQUFpRSxZQUFZLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQWhCLENBQVosR0FBbUQsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBaEIsQ0FBbkQsQ0FGL0I7Ozs7K0NBS2hCO0FBQ2xCLGlCQUFNLGlCQUFpQixLQUFLLENBQUwsQ0FBTyxpQ0FBUCxFQUEwQyxLQUExQyxDQURMO0FBRWxCLGlCQUFJLG9CQUFvQixFQUFwQixDQUZjO0FBR2xCLHFCQUFRLGNBQVI7QUFDSSxzQkFBSyxZQUFMO0FBQ0kseUNBQW9CLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxrQkFBZCxDQUFoQixDQUFwQixDQURKO0FBRUksMkJBRko7QUFESixzQkFJUyxnQkFBTDtBQUNJLHlDQUFvQixLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFoQixDQUFwQixDQURKO0FBRUksMkJBRko7QUFKSixzQkFPUyxXQUFMO0FBQ0kseUNBQW9CLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxlQUFkLENBQWhCLENBQXBCLENBREo7QUFFSSwyQkFGSjtBQVBKLHNCQVVTLFlBQUwsQ0FWSjtBQVdJO0FBQ0kseUNBQW9CLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxVQUFkLENBQWhCLENBQXBCLENBREo7QUFYSixjQUhrQjs7QUFrQmxCLGtCQUFLLENBQUwsQ0FBTyxrQ0FBUCxFQUEyQyxTQUEzQyxHQUF1RCxLQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUF2RCxDQWxCa0I7Ozs7d0NBcUJQO0FBQ1gsaUJBQUksQ0FBQyxLQUFLLFFBQUwsQ0FBYyx3QkFBZCxFQUF3QztBQUN6Qyx3QkFEeUM7Y0FBN0M7O0FBSUEsaUJBQUksU0FBUyxLQUFLLFNBQUwsRUFBVCxDQUxPO0FBTVgsaUJBQUk7QUFDQSxxQkFBSSxPQUFPLG1CQUFQLENBQTJCLE1BQTNCLEVBQW1DLE1BQW5DLEdBQTRDLENBQTVDLEVBQStDO0FBQy9DLDRCQUFPLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsd0JBQTVCLEVBQXNELEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBdEQsRUFEK0M7a0JBQW5ELE1BRU87QUFDSCw0QkFBTyxZQUFQLENBQW9CLFVBQXBCLENBQStCLHdCQUEvQixFQURHO2tCQUZQO2NBREosQ0FNRSxPQUFPLENBQVAsRUFBVTtBQUNSLHFCQUFJLElBQUosQ0FBUyxDQUFULEVBRFE7Y0FBVjs7OzsyQ0FLWTtBQUNkLGlCQUFJLFlBQUo7aUJBQVMsZUFBVCxDQURjOztBQUdkLGlCQUFJO3VDQUNnQixlQUFlLE9BQU8sWUFBUCxDQUFvQixPQUFwQixDQUE0Qix3QkFBNUIsQ0FBZixFQURoQjs7OztBQUNDLDJDQUREO0FBQ00sOENBRE47OztBQUdBLHFCQUFJLEdBQUosRUFBUztBQUNMLHlCQUFJLEtBQUosQ0FBVSxHQUFWLEVBREs7a0JBQVQ7Y0FISixDQU1FLE9BQU8sQ0FBUCxFQUFVO0FBQ1IscUJBQUksSUFBSixDQUFTLENBQVQsRUFEUTtjQUFWOztBQUlGLGlCQUFJLE1BQUosRUFBWTtBQUNSLHNCQUFLLFNBQUwsQ0FBZSxNQUFmLEVBRFE7Y0FBWjs7Ozs7R0FqTHNCOztBQXVMOUIsVUFBUywwQkFBVCxDQUFvQyxRQUFwQyxFQUE4Qzs7QUFFMUMsU0FBSSwwSkFFd0UsbUJBQWEsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLGFBQWQsQ0FBaEIsbUpBQ2dDLGdKQUNMLHNPQUUvRCxtQkFBYSxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFoQix3S0FFbUQsdU9BRS9ELG1CQUFhLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQWhCLHVLQUVpRCxxT0FFL0QsbUJBQWEsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBaEIscUpBSVksbUJBQWEsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBaEIsMk1BR0Esb0RBQTJDLEtBQUssUUFBTCxDQUFjLGNBQWQsb1NBRThDLEtBQUssUUFBTCxDQUFjLFVBQWQsZ1dBSUYsS0FBSyxRQUFMLENBQWMsZUFBZCwwV0FJVSxLQUFLLFFBQUwsQ0FBYyxPQUFkLGtXQUlSLEtBQUssUUFBTCxDQUFjLGtCQUFkLHlSQU1oRixtQkFBYSxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMseUJBQWQsQ0FBaEIsNlFBRXdGLGdGQUMzSixLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFoQixrUUFJNkUsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLDRCQUFkLENBQWhCLDZEQWhEdkgsQ0FGc0M7O0FBdUQxQyxZQUFPLFFBQVAsQ0F2RDBDOzs7Ozs7OztBQ3BQOUMsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQSxLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7QUFDTixLQUFNLGtCQUFrQixRQUFRLFlBQVIsQ0FBcUIsaUJBQXJCLENBQWxCO0FBQ04sS0FBTSw2QkFBNkIsUUFBUSxZQUFSLENBQXFCLDRCQUFyQixDQUE3QjtBQUNOLEtBQU0sb0JBQW9CLFFBQVEsWUFBUixDQUFxQixtQkFBckIsQ0FBcEI7O0tBRUE7OztBQUVGLG9DQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkIsS0FBN0IsRUFBb0M7OzttSkFDMUIsUUFBUSxTQUFTLFFBRFM7O0FBRWhDLGVBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsTUFBSyxRQUFMLENBQWMsc0JBQWQsQ0FBaEIsQ0FBbEIsQ0FGZ0M7O01BQXBDOzs7O3lDQUtnQjtBQUNaLG1NQURZOzs7O2tDQUlQO0FBQ0wsa0pBREs7O0FBR0wsaUJBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQVQsQ0FIQztBQUlMLGlCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUFQLEVBQWU7QUFDM0Isc0JBQUssSUFBTCxHQUQyQjtBQUUzQix3QkFGMkI7Y0FBL0I7QUFJQSxrQkFBSyxJQUFMLEdBUks7Ozs7cUNBV0csT0FBTztBQUNmLHFCQUFRLFNBQVMsRUFBVCxDQURPOztBQUdmLGlCQUFJLHFCQUFxQixJQUFJLFNBQUosQ0FBYyxLQUFLLE9BQUwsRUFBYztBQUNqRCxxQkFBSSxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsRUFBdUI7QUFDdkIsZ0NBQVcsaUJBQVg7QUFDQSxnQ0FBVyxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsc0JBQWQsQ0FBaEIsQ0FBWDtBQUNBLCtCQUFVLENBQUMsQ0FBRDtrQkFIVixDQUFKO2NBRHFCLENBQXJCLENBSFc7QUFVZixtQkFBTSxJQUFOLENBQVcsa0JBQVgsRUFWZTs7QUFZZixtQkFBTSxJQUFOLENBQVcsSUFBSSwwQkFBSixDQUErQixLQUFLLE9BQUwsRUFBYyxFQUFFLFFBQVEsS0FBSyxLQUFMLEVBQXZELENBQVgsRUFaZTs7QUFjZixpQkFBSSxTQUFTLEtBQUssT0FBTCxDQUFhLFVBQWIsRUFBVCxDQWRXO0FBZWYsaUJBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCx3QkFBTyxLQUFQLENBRFM7Y0FBYjs7QUFJQSxrQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxNQUFQLEVBQWUsR0FBbkMsRUFBd0M7QUFDcEMscUJBQUksUUFBUSxPQUFPLENBQVAsQ0FBUjs7O0FBRGdDLHFCQUloQyxNQUFNLE1BQU4sTUFBa0IsV0FBbEIsSUFBaUMsTUFBTSxNQUFOLE1BQWtCLFVBQWxCLEVBQThCO0FBQy9ELHlCQUFJLFlBQVksSUFBSSxpQkFBSixDQUFzQixLQUFLLE9BQUwsRUFBYzs7QUFFaEQsdUNBQWMsSUFBZDtBQUNBLGtDQUFTLEtBQVQ7c0JBSFksQ0FBWixDQUQyRDs7QUFPL0QseUJBQUksTUFBTSxNQUFOLE1BQWtCLFVBQWxCLEVBQThCO0FBQzlCLG1DQUFVLEdBQVYsQ0FBYyxTQUFkLEdBQTBCLFVBQVUsR0FBVixDQUFjLFNBQWQsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFoQyxDQURJO0FBRTlCLDZCQUFJLFFBQVEsVUFBVSxRQUFWLENBQW1CLE9BQW5CLENBQVIsQ0FGMEI7QUFHOUIsbUNBQVUsUUFBVixDQUFtQixPQUFuQixJQUE4QixRQUFRLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBUixDQUhBO0FBSTlCLG1DQUFVLEdBQVYsQ0FBYyxZQUFkLENBQTJCLFlBQTNCLEVBQTBDLFFBQVEsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFSLENBQTFDLENBSjhCO3NCQUFsQzs7QUFPQSwyQkFBTSxJQUFOLENBQVcsU0FBWCxFQWQrRDtrQkFBbkU7Y0FKSjtBQXFCQSxvQkFBTyxLQUFQLENBeENlOzs7OztHQXRCYTs7QUFrRXBDLHVCQUFzQixTQUF0QixDQUFnQyxLQUFoQyxHQUF3QyxZQUF4Qzs7QUFFQSxtQkFBa0IsU0FBbEIsQ0FBNEIsV0FBNUIsR0FBMEMsVUFBUyxLQUFULEVBQWdCO0FBQ3RELFNBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQVQsQ0FEa0Q7O0FBR3RELFNBQUksQ0FBQyxNQUFELEVBQVMsT0FBYjs7QUFFQSxVQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsRUFBZSxHQUFuQyxFQUF3QztBQUNwQyxhQUFJLFFBQVEsT0FBTyxDQUFQLENBQVIsQ0FEZ0M7O0FBR3BDLGFBQUksTUFBTSxNQUFOLE1BQWtCLFdBQWxCLElBQWlDLE1BQU0sTUFBTixNQUFrQixVQUFsQixJQUFnQyxNQUFNLE1BQU4sTUFBa0IsWUFBbEIsRUFBZ0M7QUFDakcsc0JBRGlHO1VBQXJHOztBQUlBLGFBQUksVUFBVSxLQUFLLEtBQUwsRUFBWTtBQUN0QixtQkFBTSxNQUFOLElBQWdCLFNBQWhCLENBRHNCO1VBQTFCLE1BRU87QUFDSCxtQkFBTSxNQUFOLElBQWdCLFVBQWhCLENBREc7VUFGUDs7QUFNQSxjQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLE1BQTNCLEdBYm9DO01BQXhDO0VBTHNDOztBQXNCMUMsV0FBVSxpQkFBVixDQUE0Qix1QkFBNUIsRUFBcUQscUJBQXJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQSxLQUFNLFdBQVcsUUFBUSxZQUFSLENBQXFCLFVBQXJCLENBQVg7QUFDTixLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7O0tBRUE7OztBQUVGLGtDQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkIsS0FBN0IsRUFBb0MsVUFBcEMsRUFBZ0Q7OzsrSUFDdEMsUUFBUSxVQUQ4Qjs7QUFHNUMsZUFBSyxjQUFMLEdBQXNCLFVBQXRCLENBSDRDO0FBSTVDLGVBQUssTUFBTCxHQUFjLE1BQUssY0FBTCxDQUFvQixNQUFwQixDQUo4QjtBQUs1QyxlQUFLLFFBQUwsR0FBZ0IsTUFBSyxjQUFMLENBQW9CLElBQXBCLENBTDRCO0FBTTVDLGVBQUssS0FBTCxHQUFhLE1BQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsZUFBckIsQ0FBYixDQU40QztBQU81QyxlQUFLLFVBQUwsR0FBa0IsTUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixvQkFBcEIsQ0FBbEIsQ0FQNEM7QUFRNUMsZUFBSyxZQUFMLEdBQW9CLE1BQUssVUFBTCxDQUFnQixHQUFoQixDQVJ3Qjs7QUFVNUMsZUFBSyxJQUFMLEdBQVksSUFBWjs7O0FBVjRDLGNBYTVDLENBQUssVUFBTCxHQUFrQixVQUFsQixDQWI0Qzs7QUFlNUMsYUFBTSxjQUFjLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUFoQyxDQWZ3QjtBQWdCNUMsYUFBTSxtQkFBbUIsUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQW5CLENBaEJzQzs7QUFrQjVDLGFBQUksQ0FBQyxnQkFBRCxFQUFtQjtBQUNuQixtQkFBTSxJQUFJLEtBQUosZ0JBQXVCLCtCQUF2QixDQUFOLENBRG1CO1VBQXZCO0FBR0EsZUFBSyxPQUFMLEdBQWUsSUFBSSxnQkFBSixDQUFxQixNQUFLLE1BQUwsRUFBckIsRUFBb0MsT0FBcEMsRUFBNkMsVUFBN0MsUUFBZixDQXJCNEM7QUFzQjVDLGVBQUssbUJBQUwsR0F0QjRDOztBQXdCNUMsZUFBSyxhQUFMLEdBeEI0Qzs7QUEwQjVDLGdCQUFPLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFNO0FBQzlCLG1CQUFLLEtBQUwsR0FEOEI7QUFFOUIsbUJBQUssS0FBTCxHQUY4QjtVQUFOLENBQTVCLENBMUI0Qzs7TUFBaEQ7Ozs7eUNBZ0NnQjs7QUFFWixrQkFBSyxPQUFMLENBQWEsY0FBYixHQUE4QixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBOUIsQ0FGWTtBQUdaLGtCQUFLLHNCQUFMLEdBQThCLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBOUIsQ0FIWTtBQUlaLGtCQUFLLG1CQUFMLEdBQTJCLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUEzQixDQUpZO0FBS1osa0JBQUssb0JBQUwsR0FBNEIsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQTVCLENBTFk7Ozs7b0NBUUwsT0FBTTtBQUNiLGlCQUFJLE1BQU0sS0FBTixLQUFnQixFQUFoQixJQUFzQixNQUFNLEtBQU4sS0FBZ0IsRUFBaEIsRUFBb0I7QUFDMUMsc0JBQUssV0FBTCxDQUFpQixLQUFqQixFQUQwQztjQUE5QyxNQUdLLElBQUksTUFBTSxLQUFOLEtBQWdCLEVBQWhCLElBQXNCLE1BQU0sS0FBTixLQUFnQixDQUFoQixFQUFtQjs7QUFDOUMsc0JBQUssY0FBTCxDQUFvQixVQUFwQixDQUErQixJQUEvQixFQUQ4QztjQUE3Qzs7OzsyQ0FLUyxPQUFNO0FBQ3BCLGlCQUFHLE1BQU0sS0FBTixLQUFnQixFQUFoQixFQUNIOzs7QUFHSSxzQkFBSyxjQUFMLENBQW9CLEtBQXBCLEVBSEo7Y0FEQTs7QUFPQSxpQkFBSSxNQUFNLEtBQU4sS0FBZ0IsRUFBaEIsSUFBdUIsTUFBTSxLQUFOLEtBQWdCLENBQWhCLElBQXFCLE1BQU0sTUFBTixDQUFhLFNBQWIsQ0FBdUIsT0FBdkIsQ0FBK0IsZUFBL0IsTUFBb0QsQ0FBQyxDQUFELEVBQUs7O0FBQ3JHLHNCQUFLLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBK0IsSUFBL0IsRUFEcUc7Y0FBekc7Ozs7d0NBS1csT0FBTzs7O0FBQ2xCLGlCQUFJLFNBQVMsSUFBVCxDQURjOztBQUdsQixpQkFBSSxNQUFNLElBQU4sS0FBZSxLQUFmLEVBQXNCO0FBQ3RCLDBCQUFTLE1BQU0sTUFBTixDQURhO2NBQTFCLE1BRU87QUFDSCwwQkFBUyxNQUFNLGFBQU4sQ0FETjtjQUZQOztBQU1BLGlCQUFJLE9BQU8sU0FBUCxDQUFpQixRQUFqQixDQUEwQixpQkFBMUIsQ0FBSixFQUFrRDtBQUM5QyxzQkFBSyxZQUFMLEdBRDhDO0FBRTlDLHdCQUY4QztjQUFsRCxNQUlLO0FBQ0Qsc0JBQUssY0FBTCxDQUFvQixHQUFwQixDQUF3QixLQUF4QixHQURDO2NBSkw7Ozs7QUFUa0IsdUJBbUJsQixDQUFXLFlBQU07QUFDYix3QkFBSyxNQUFMLENBQVksS0FBWixFQURhO2NBQU4sRUFFUixDQUZILEVBbkJrQjs7OztvQ0F3Qlg7QUFDUCxpQkFBTSxLQUFLLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QjtBQUM5Qiw0QkFBVyxlQUFYO2NBRE8sQ0FBTCxDQURDOztBQUtQLGtCQUFLLGtCQUFMLEdBQTBCLFFBQVEsUUFBUixDQUFpQixLQUFqQixFQUF3QjtBQUM5Qyw0QkFBVyx1QkFBWDtjQURzQixDQUExQixDQUxPOztBQVNQLG9CQUFPLEVBQVAsQ0FUTzs7OzsrQ0FZVTtBQUNqQixrQkFBSyx1QkFBTCxHQUErQixRQUFRLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0I7QUFDbkQsNEJBQVcsNkJBQVg7Y0FEMkIsQ0FBL0IsQ0FEaUI7O0FBS2pCLGtCQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLFdBQWpCLENBQTZCLEtBQUssdUJBQUwsQ0FBN0IsQ0FMaUI7O0FBT2pCLGtCQUFLLHVCQUFMLEdBQStCLFFBQVEsUUFBUixDQUFpQixLQUFqQixFQUF3QjtBQUNuRCw0QkFBVyw2QkFBWDtjQUQyQixDQUEvQixDQVBpQjs7QUFXakIsa0JBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsV0FBakIsQ0FBNkIsS0FBSyx1QkFBTCxDQUE3QixDQVhpQjtBQVlqQixrQkFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixhQUF6QixFQVppQjtBQWFqQixrQkFBSyxPQUFMLENBQWEsUUFBYixDQUFzQixlQUF0QixFQWJpQjtBQWNqQixrQkFBSyxHQUFMLEdBQVcsS0FBSyxPQUFMLENBQWEsR0FBYixDQWRNO0FBZWpCLGtCQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLENBQUMsQ0FBRCxDQWZIO0FBZ0JqQixrQkFBSyxFQUFMLENBQVEsQ0FBQyxLQUFELEVBQVEsT0FBUixDQUFSLEVBQTBCLEtBQUssV0FBTCxDQUExQixDQWhCaUI7Ozs7d0NBb0JOLE9BQU07QUFDakIsaUJBQUcsTUFBTSxLQUFOLElBQWUsQ0FBZixFQUFpQjtBQUNoQix1QkFBTSxjQUFOLEdBRGdCO0FBRWhCLHVCQUFNLHdCQUFOLEdBRmdCO0FBR2hCLHNCQUFLLGNBQUwsQ0FBb0IsVUFBcEIsR0FIZ0I7Y0FBcEIsTUFLSztBQUNELDBKQUFxQixNQUFyQixDQURDO2NBTEw7Ozs7cUNBV1EsT0FBTzs7O0FBQ2YsbUJBQU0sY0FBTixHQURlOztBQUdmLGtCQUFLLFVBQUwsR0FBa0IsU0FBbEI7O0FBSGUsb0JBS2YsQ0FBUSxXQUFSLENBQW9CLEtBQUssR0FBTCxFQUFVLE1BQTlCLEVBTGU7O0FBT2YsbUpBUGU7O0FBU2Ysa0JBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsR0FBbEM7O0FBVGUsaUJBV1gsUUFBUSxRQUFSLENBQWlCLEtBQUssa0JBQUwsRUFBeUIsWUFBMUMsQ0FBSixFQUE2RDtBQUN6RCx5QkFBUSxXQUFSLENBQW9CLEtBQUssa0JBQUwsRUFBeUIsWUFBN0M7OztBQUR5RCwyQkFJekQsQ0FBVyxZQUFNO0FBQ2IsNEJBQUssa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBOEIsT0FBOUIsR0FBd0MsR0FBeEMsQ0FEYTtBQUViLDRCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLFdBQTlCLEdBQTRDLEtBQTVDLENBRmE7a0JBQU4sRUFHUixDQUhILEVBSnlEOztBQVN6RCxzQkFBSyxjQUFMLENBQW9CLGFBQXBCLENBQWtDLEtBQUssSUFBTCxDQUFsQyxDQVR5RDtBQVV6RCxzQkFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixTQUFsQixDQUE0QixDQUE1QixFQUErQixHQUEvQixDQUFtQyxLQUFuQyxHQVZ5RDtjQUE3RCxNQVdPO0FBQ0gseUJBQVEsUUFBUixDQUFpQixLQUFLLGtCQUFMLEVBQXlCLFlBQTFDLEVBREc7Y0FYUDs7Ozs0Q0FnQmU7QUFDZixpQkFBSSxvQkFBSixDQURlO0FBRWYsaUJBQUksbUJBQW1CLENBQUMsQ0FBRCxDQUZSO0FBR2YsaUJBQUksbUJBQUosQ0FIZTtBQUlmLGlCQUFJLGtCQUFrQixLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFNBQWxCLENBSlA7QUFLZixrQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksZ0JBQWdCLE1BQWhCLEVBQXdCLEdBQTVDLEVBQWlEO0FBQzdDLHFCQUFHLGdCQUFnQixDQUFoQixFQUFtQixRQUFuQixDQUE0QixpQkFBNUIsQ0FBSCxFQUFrRDtBQUM5QyxtQ0FBYyxnQkFBZ0IsQ0FBaEIsQ0FBZCxDQUQ4QztBQUU5Qyx3Q0FBbUIsQ0FBbkIsQ0FGOEM7QUFHOUMsMkJBSDhDO2tCQUFsRDtjQURKOztBQVFBLGlCQUFHLFdBQUgsRUFBZTtBQUNYLHNCQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFdBQWxCLENBQThCLFdBQTlCO0FBRFcsMkJBRVgsR0FBYSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFFBQWxCLENBQTJCLFVBQTNCLEVBQXVDLEVBQXZDLEVBQTJDLENBQTNDLENBQWIsQ0FGVztBQUdYLDRCQUFXLEdBQVgsQ0FBZSxTQUFmLEdBQTJCLHdDQUF3QyxLQUFLLFVBQUwsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsWUFBWSxHQUFaLENBQWdCLFNBQWhCLENBQTlCLENBQXhDLEdBQW9HLFNBQXBHLENBSGhCO0FBSVgscUJBQUcsWUFBWSxRQUFaLENBQXFCLGVBQXJCLENBQUgsRUFBeUM7QUFDckMsZ0NBQVcsUUFBWCxDQUFvQixlQUFwQixFQURxQztrQkFBekM7Y0FKSixNQVFJO0FBQ0EsOEJBQWEsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixRQUFsQixDQUEyQixVQUEzQixFQUF1QyxFQUF2QyxFQUEyQyxDQUEzQyxDQUFiLENBREE7QUFFQSw0QkFBVyxHQUFYLENBQWUsU0FBZixHQUEyQixvQ0FBb0MsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLG1CQUFkLENBQWhCLENBQXBDLEdBQTBGLFNBQTFGLENBRjNCO0FBR0EsNEJBQVcsR0FBWCxDQUFlLFNBQWYsR0FBMkIsRUFBM0IsQ0FIQTtjQVJKO0FBYUEsd0JBQVcsS0FBWCxHQUFtQixZQUFuQixDQTFCZTtBQTJCZix3QkFBVyxHQUFYLENBQWUsWUFBZixDQUE0QixZQUE1QixFQUEwQyxLQUFLLFFBQUwsQ0FBYyxtQkFBZCxDQUExQyxFQTNCZTtBQTRCZix3QkFBVyxRQUFYLENBQW9CLGlCQUFwQixFQTVCZTs7Ozt1Q0ErQkwsU0FBUyxNQUFNLFVBQStCO2lCQUFyQiw2RUFBUyxXQUFZOztBQUN4RCxpQkFBSSxTQUFTLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsSUFBbEIsRUFBd0IsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBVCxDQURvRDs7QUFHeEQsa0JBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDO0FBQ3BDLHFCQUFJLENBQUMsT0FBTyxDQUFQLENBQUQsRUFBWTtBQUNaLDRCQUFPLEtBQUssV0FBTCxFQUFQLENBRFk7a0JBQWhCOztBQUlBLHFCQUFJLFdBQVcsVUFBWCxFQUF1QjtBQUN2Qiw2QkFBUSxnQkFBUixDQUF5QixPQUFPLENBQVAsSUFBWSxJQUFaLEVBQWtCLFFBQTNDLEVBQXFELEtBQXJELEVBRHVCO2tCQUEzQixNQUVPLElBQUksV0FBVyxhQUFYLEVBQTBCO0FBQ2pDLDZCQUFRLG1CQUFSLENBQTRCLE9BQU8sQ0FBUCxJQUFZLElBQVosRUFBa0IsUUFBOUMsRUFBd0QsS0FBeEQsRUFEaUM7a0JBQTlCO2NBUFg7Ozs7eUNBYVksT0FBTztBQUNuQixpQkFBSSxNQUFNLFlBQU4sS0FBdUIsY0FBdkIsRUFBdUM7QUFDdkMsd0JBRHVDO2NBQTNDOztBQUlBLGlCQUFJLEtBQUssVUFBTCxLQUFvQixVQUFwQixFQUFnQzs7QUFFaEMseUJBQVEsUUFBUixDQUFpQixLQUFLLGtCQUFMLEVBQXlCLFlBQTFDOzs7QUFGZ0MscUJBS2hDLENBQUssa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBOEIsT0FBOUIsR0FBd0MsR0FBeEMsQ0FMZ0M7Y0FBcEM7Ozs7aUNBU0k7QUFDSixxQkFBUSxRQUFSLENBQWlCLEtBQUssa0JBQUwsRUFBeUIsWUFBMUMsRUFESTtBQUVKLGtCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLE9BQTlCLEdBQXdDLEdBQXhDLENBRkk7QUFHSixrQkFBSyxTQUFMLEdBSEk7Ozs7d0NBTU87OztBQUNYLGtCQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEVztBQUVYLGtCQUFLLFFBQUwsQ0FBYyxJQUFkLEdBRlc7QUFHWCxrQkFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFsQixDQUF3QixPQUF4QixHQUFrQyxHQUFsQzs7O0FBSFcsaUJBTVgsQ0FBSyxjQUFMLENBQW9CLGFBQXBCLENBQWtDLENBQUMsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXhEOzs7QUFOVyx1QkFTWCxDQUFXLFlBQU07OztBQUdiLHdCQUFLLFNBQUwsR0FIYTtBQUliLHdCQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEdBQWtDLEdBQWxDLENBSmE7QUFLYix3QkFBSyxRQUFMLENBQWMsS0FBZCxHQUxhO2NBQU4sRUFNUixDQU5ILEVBVFc7Ozs7aUNBa0JQO0FBQ0osa0JBQUssdUJBQUwsQ0FBNkIsU0FBN0IsR0FBeUMsS0FBSyxVQUFMLENBQWdCLEtBQUssUUFBTCxDQUFjLEtBQUssT0FBTCxDQUFhLFlBQWIsSUFBNkIsS0FBSyxPQUFMLENBQWEsVUFBYixDQUEzRCxDQUF6QyxDQURJO0FBRUosa0JBQUssa0JBQUwsQ0FBd0IsV0FBeEIsQ0FBb0MsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixHQUFsQixDQUFwQyxDQUZJO0FBR0osa0JBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixLQUFLLGtCQUFMLENBQTlCLENBSEk7O0FBS0osa0JBQUssTUFBTCxHQUxJO0FBTUosa0JBQUssZ0JBQUwsR0FOSTs7QUFRSixrQkFBSyxNQUFMLEdBQWMsVUFBZCxDQUF5QixLQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQXpCLElBQWdELEtBQUssT0FBTCxDQVI1QztBQVNKLGlCQUFHLEtBQUssTUFBTCxHQUFjLFVBQWQsQ0FBeUIsS0FBSyxPQUFMLENBQWEsSUFBYixFQUF6QixFQUE4QyxnQkFBOUMsRUFBK0Q7QUFDOUQsc0JBQUssTUFBTCxHQUFjLFVBQWQsQ0FBeUIsS0FBSyxPQUFMLENBQWEsSUFBYixFQUF6QixFQUE4QyxnQkFBOUMsR0FEOEQ7Y0FBbEU7O0FBSUEsa0JBQUssT0FBTCxHQWJJO0FBY0osa0JBQUssZUFBTCxHQWRJOztBQWdCSixpQkFBRyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLFlBQXRCLENBQUgsRUFBd0M7QUFDcEMsc0JBQUssSUFBTCxHQURvQztjQUF4Qzs7O0FBaEJJLGlCQXFCSixDQUFLLGFBQUwsQ0FDSSxLQUFLLGtCQUFMLEVBQ0EsZUFGSixFQUdJLEtBQUssb0JBQUwsRUFDQSxVQUpKLEVBckJJOzs7Ozs7Ozs7OztnQ0FrQ0QsT0FBTzs7O0FBQ1YsaUJBQUksU0FBUyxJQUFULENBRE07QUFFVixpQkFBSSxVQUFVLEtBQUssT0FBTCxDQUFhLElBQWIsRUFBVixDQUZNOztBQUlWLGlCQUFJLFNBQVMsTUFBTSxJQUFOLEtBQWUsS0FBZixFQUFzQjtBQUMvQiwwQkFBUyxNQUFNLE1BQU4sQ0FEc0I7Y0FBbkMsTUFFTyxJQUFJLEtBQUosRUFBVztBQUNkLDBCQUFTLE1BQU0sYUFBTixDQURLO2NBQVg7O0FBSVAsa0JBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsU0FBbEIsQ0FBNEIsT0FBNUIsQ0FBb0MsVUFBQyxXQUFELEVBQWlCO0FBQ2pELHFCQUFJLEVBQUUsdUJBQXVCLFNBQXZCLENBQUYsRUFBcUM7QUFDckMsNEJBRHFDO2tCQUF6Qzs7QUFJQSxxQkFBSSxZQUFZLFFBQVosQ0FBcUIsY0FBckIsQ0FBSixFQUEwQztBQUN0Qyw0QkFBSyx1QkFBTCxDQUE2QixTQUE3QixHQUF5QyxPQUFLLFFBQUwsQ0FBYyxZQUFZLFFBQVosQ0FBcUIsS0FBckIsQ0FBdkQsQ0FEc0M7QUFFdEMsNEJBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsZUFBakIsQ0FBaUMsWUFBakMsRUFGc0M7a0JBQTFDO2NBTGdDLENBQXBDLENBVlU7O0FBcUJWLGlCQUFJLFVBQVUsQ0FBQyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsaUJBQTFCLENBQUQsRUFBK0M7QUFDekQsc0JBQUssY0FBTCxDQUFvQixVQUFwQixHQUR5RDtjQUE3RDs7OzsyQ0FLYzs7O0FBQ2Qsa0JBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsUUFBbEIsR0FBNkIsT0FBN0IsQ0FBcUMsVUFBQyxJQUFELEVBQVE7QUFDekMscUJBQUksRUFBRSxnQkFBZ0IsU0FBaEIsQ0FBRixJQUFnQyxLQUFLLFFBQUwsQ0FBYywyQkFBZCxDQUFoQyxFQUE0RTtBQUM1RSw0QkFENEU7a0JBQWhGO0FBR0Esc0JBQUssRUFBTCxDQUFRLENBQUMsS0FBRCxFQUFRLE9BQVIsQ0FBUixFQUEwQixPQUFLLG1CQUFMLENBQTFCLENBSnlDO0FBS3pDLHNCQUFLLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLE9BQUssc0JBQUwsQ0FBbkIsQ0FMeUM7Y0FBUixDQUFyQyxDQURjOzs7Ozs7OzttQ0FZUjtBQUNOLGtCQUFLLE1BQUwsQ0FBWSxXQUFaLENBQXdCLFlBQXhCLEVBRE07QUFFTixrQkFBSyxJQUFMLEdBQVksS0FBSyxjQUFMLENBQW9CLGdCQUFwQixDQUFxQyxLQUFLLGtCQUFMLENBQWpELENBRk07QUFHTixrQkFBSyxTQUFMLEdBSE07QUFJTixrQkFBSyxNQUFMLENBQVksUUFBWixDQUFxQixZQUFyQixFQUpNO0FBS04scUJBQVEsUUFBUixDQUFpQixLQUFLLGtCQUFMLEVBQXlCLFlBQTFDLEVBTE07Ozs7cUNBUUU7d0NBQ00sS0FBSyxJQUFMO2lCQUFULGlCQURHOztBQUdSLGtCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLFdBQTlCLFNBQWdELFlBQWhELENBSFE7Ozs7Ozs7Ozt1Q0FTRTs7QUFFVixpQkFBSSxDQUFDLEtBQUssR0FBTCxFQUFVO0FBQ1gsd0JBRFc7Y0FBZjs7QUFJQSxpQkFBSSxRQUFRLFFBQVIsQ0FBaUIsS0FBSyxHQUFMLEVBQVUsTUFBM0IsQ0FBSixFQUF3QztBQUNwQyx5QkFBUSxRQUFSLENBQWlCLEtBQUssa0JBQUwsRUFBeUIsWUFBMUMsRUFEb0M7QUFFcEMseUJBQVEsV0FBUixDQUFvQixLQUFLLEdBQUwsRUFBVSxNQUE5QixFQUZvQztjQUF4Qzs7Ozs7R0FuVjBCOztBQTJWbEMscUJBQW9CLFNBQXBCLENBQThCLGFBQTlCLEdBQThDLFFBQTlDOztBQUVBLFNBQVEsaUJBQVIsQ0FBMEIscUJBQTFCLEVBQWlELG1CQUFqRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoV0EscUJBQVEsR0FBUjs7QUFFQSxLQUFNLE9BQU8sUUFBUSxZQUFSLENBQXFCLE1BQXJCLENBQVA7QUFDTixLQUFNLFlBQVksUUFBUSxZQUFSLENBQXFCLFdBQXJCLENBQVo7QUFDTixLQUFNLHFCQUFxQixRQUFRLFlBQVIsQ0FBcUIsb0JBQXJCLENBQXJCO0FBQ04sS0FBTSxzQkFBc0IsUUFBUSxZQUFSLENBQXFCLHFCQUFyQixDQUF0Qjs7S0FFQTs7O0FBQ0YsZ0NBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7OzJJQUNuQixRQUFRLFVBRFc7O0FBRXpCLGVBQUssZUFBTCxHQUF1QixNQUF2QixDQUZ5Qjs7QUFJekIsZUFBSyxNQUFMLEdBQWMsT0FBTyxRQUFQLENBQWdCLG1CQUFoQixDQUFkLENBSnlCO0FBS3pCLGVBQUssUUFBTCxHQUFnQixNQUFLLE1BQUwsQ0FBWSxHQUFaLENBTFM7QUFNekIsZUFBSyxJQUFMLEdBQVksSUFBWixDQU55QjtBQU96QixlQUFLLEtBQUwsR0FBYSxNQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLGVBQXJCLENBQWIsQ0FQeUI7QUFRekIsZUFBSyxVQUFMLEdBQWtCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0Isb0JBQXBCLENBQWxCLENBUnlCOztBQVV6QixlQUFLLFFBQUwsQ0FBYyxjQUFkLEVBVnlCO0FBV3pCLGVBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsWUFBdEIsRUFBb0MsTUFBSyxRQUFMLENBQWMsVUFBZCxDQUFwQzs7O0FBWHlCLGNBY3pCLENBQUssc0JBQUwsR0FBOEIsTUFBSyxpQkFBTCxDQUF1QixJQUF2QixPQUE5QixDQWR5QjtBQWV6QixlQUFLLDBCQUFMLEdBQWtDLE1BQUsscUJBQUwsQ0FBMkIsSUFBM0IsT0FBbEMsQ0FmeUI7QUFnQnpCLGVBQUssa0JBQUwsR0FBMEIsTUFBSyxhQUFMLENBQW1CLElBQW5CLE9BQTFCLENBaEJ5QjtBQWlCekIsZUFBSyxtQkFBTCxHQUEyQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBM0IsQ0FqQnlCOztBQW1CekIsZUFBSyxTQUFMLEdBbkJ5QjtBQW9CekIsZUFBSyxVQUFMLEdBcEJ5QjtBQXFCekIsZUFBSyxHQUFMLENBQVMsWUFBVCxDQUFzQixNQUF0QixFQUE4QixPQUE5QixFQXJCeUI7O0FBdUJ6QixnQkFBTyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBTTtBQUM5QixvQkFBTyxpQkFBUCxTQUQ4QjtVQUFOLENBQTVCLENBdkJ5Qjs7QUEyQnpCLGdCQUFPLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFNOztBQUU5QixpQkFBSSxXQUFXLE1BQUssRUFBTCxDQUFRLGdCQUFSLEVBQTBCLE1BQUssTUFBTCxDQUFyQyxDQUYwQjtBQUc5QixrQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEdBQXJDLEVBQTBDO0FBQ3RDLDBCQUFTLENBQVQsRUFBWSxTQUFaLENBQXNCLEdBQXRCLENBQTBCLHlCQUExQixFQURzQztjQUExQzs7QUFJQSxpQkFBSSxvQkFBb0IsT0FBTyxFQUFQLENBQVUsd0NBQVYsQ0FBcEIsQ0FQMEI7QUFROUIsa0JBQUssSUFBSSxLQUFJLENBQUosRUFBTyxLQUFJLGtCQUFrQixNQUFsQixFQUEwQixJQUE5QyxFQUFtRDtBQUMvQyxtQ0FBa0IsRUFBbEIsRUFBcUIsZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLFVBQUMsS0FBRCxFQUFXO0FBQ3RELHlCQUFJLE1BQU0sSUFBTixLQUFlLE9BQWYsSUFBMEIsTUFBTSxPQUFOLEtBQWtCLENBQWxCLElBQXVCLE1BQU0sT0FBTixLQUFrQixDQUFsQixFQUFxQjtBQUN0RSxnQ0FBTyxXQUFQLENBQW1CLGlCQUFuQixFQURzRTtzQkFBMUU7a0JBRDJDLENBQS9DLENBRCtDO0FBTS9DLG1DQUFrQixFQUFsQixFQUFxQixnQkFBckIsQ0FBc0MsU0FBdEMsRUFBaUQsVUFBQyxLQUFELEVBQVc7QUFDeEQsNEJBQU8sUUFBUCxDQUFnQixpQkFBaEIsRUFEd0Q7a0JBQVgsQ0FBakQsQ0FOK0M7Y0FBbkQ7VUFSd0IsQ0FBNUIsQ0EzQnlCOztNQUE3Qjs7Ozt1Q0FnRGMsT0FBTztBQUNqQixpQkFBSSxNQUFNLE1BQU4sQ0FBYSxTQUFiLENBQXVCLFFBQXZCLENBQWdDLGNBQWhDLENBQUosRUFBcUQ7QUFDakQsd0JBRGlEO2NBQXJEOztBQUlBLGlCQUFJLENBQUMsS0FBSyxNQUFMLENBQVksUUFBWixDQUFxQixZQUFyQixDQUFELEVBQXFDO0FBQ3JDLHNCQUFLLFVBQUwsR0FEcUM7Y0FBekM7Ozs7K0NBS2tCLE9BQU8sTUFBTTtBQUMvQixpQkFBSSxTQUFTLFNBQVQsRUFBb0I7QUFDcEIscUJBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxRQUFWLEVBQVgsQ0FEZ0I7O0FBR3BCLHdCQUFPLFNBQVMsTUFBVCxHQUFrQixDQUFsQixFQUFxQjtBQUN4Qiw4QkFBUyxDQUFULEVBQVksT0FBWixHQUR3QjtBQUV4QiwwQkFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixTQUFTLENBQVQsQ0FBdEIsRUFGd0I7a0JBQTVCOztBQUtBLHNCQUFLLFFBQUwsQ0FBYyxZQUFkLEVBUm9CO2NBQXhCLE1BU087QUFDSCxxQkFBSSxPQUFPLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBUCxDQUREOztBQUdILHFCQUFHLElBQUgsRUFBUztBQUNMLDBCQUFLLE9BQUwsR0FESztBQUVMLDBCQUFLLElBQUwsQ0FBVSxXQUFWLENBQXNCLElBQXRCLEVBRks7a0JBQVQ7Y0FaSjs7QUFrQkEsa0JBQUssVUFBTCxHQW5CK0I7O0FBcUIvQixpQkFBRyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLE1BQXRCLEtBQWlDLENBQWpDLEVBQW9DO0FBQ25DLHNCQUFLLFFBQUwsQ0FBYyxZQUFkLEVBRG1DO2NBQXZDOzs7OzJDQUtjLE9BQU8sTUFBTTt3Q0FDSjtpQkFBbEI7aUJBQU8sbUJBRGU7O0FBRzNCLGtCQUFLLFdBQUwsQ0FBaUIsS0FBakIsRUFBd0IsT0FBeEIsRUFIMkI7QUFJM0Isa0JBQUssV0FBTCxDQUFpQixZQUFqQixFQUoyQjs7OzswQ0FPZDtBQUNiLGlCQUFJLENBQUMsS0FBSyxlQUFMLENBQXFCLE1BQXJCLEVBQUQsSUFBa0MsQ0FBQyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLFlBQXJCLENBQUQsRUFBcUM7QUFDdkUsc0JBQUssVUFBTCxDQUFnQixJQUFoQixFQUR1RTtjQUEzRTs7OztzQ0FLUztBQUNULGtCQUFLLGVBQUwsQ0FBcUIsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBSyxrQkFBTCxDQUFqQyxDQURTO0FBRVQsa0JBQUssZUFBTCxDQUFxQixFQUFyQixDQUF3QixpQkFBeEIsRUFBMkMsS0FBSyxzQkFBTCxDQUEzQyxDQUZTO0FBR1Qsa0JBQUssZUFBTCxDQUFxQixFQUFyQixDQUF3QixxQkFBeEIsRUFBK0MsS0FBSywwQkFBTCxDQUEvQyxDQUhTO0FBSVQsa0JBQUssZUFBTCxDQUFxQixFQUFyQixDQUF3QixjQUF4QixFQUF3QyxLQUFLLG1CQUFMLENBQXhDLENBSlM7Ozs7eUNBT0c7QUFDWixtTEFEWTs7Ozt1Q0FJRjtBQUNWLGlCQUFJLENBQUMsS0FBSyxrQkFBTCxFQUFELEVBQTRCOztBQUU1QixxQkFBSSxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLFlBQXJCLENBQUosRUFBd0M7QUFDcEMsMEJBQUssV0FBTCxHQURvQztrQkFBeEMsTUFFTztBQUNILDBCQUFLLGFBQUwsR0FERztBQUVILDBCQUFLLEdBQUwsQ0FBUyxLQUFULEdBRkc7a0JBRlA7Y0FGSjs7Ozt3Q0FXVyxPQUFNO0FBQ2pCLGlCQUFHLE1BQU0sS0FBTixLQUFnQixDQUFoQixFQUFrQjtBQUNqQixzQkFBSyxVQUFMLEdBRGlCO2NBQXJCO0FBR0Esa0pBQXFCLE1BQXJCLENBSmlCOzs7O3NDQU9SO0FBQ1Qsa0JBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLEdBQTlCLENBRFM7QUFFVCxrQkFBSyxNQUFMLENBQVksSUFBWixHQUZTO0FBR1Qsa0JBQUssYUFBTCxDQUFtQixLQUFLLGdCQUFMLENBQXNCLEtBQUssSUFBTCxDQUF6QyxFQUhTO0FBSVQsa0JBQUssSUFBTCxDQUFVLEtBQVYsR0FKUztBQUtULGtCQUFLLEdBQUwsQ0FBUyxZQUFULENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDLEVBTFM7QUFNVCxrQkFBSyxRQUFMLENBQWMsZ0JBQWQsRUFOUztBQU9ULGtCQUFLLGNBQUwsR0FBc0IsSUFBdEIsQ0FQUzs7OztzQ0FVcUI7aUJBQXZCLG9GQUFnQixNQUFPOztBQUM5QixrQkFBSyxNQUFMLENBQVksSUFBWixHQUQ4QjtBQUU5QixrQkFBSyxhQUFMLENBQW1CLEtBQUssZ0JBQUwsQ0FBc0IsS0FBSyxJQUFMLENBQXpDLEVBRjhCO0FBRzlCLGtCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZCxDQUFvQixPQUFwQixHQUE4QixHQUE5QixDQUg4QjtBQUk5QixrQkFBSyxhQUFMLEdBSjhCO0FBSzlCLGtCQUFLLEdBQUwsQ0FBUyxZQUFULENBQXNCLGVBQXRCLEVBQXVDLE9BQXZDLEVBTDhCO0FBTTlCLGtCQUFLLFdBQUwsQ0FBaUIsZ0JBQWpCLEVBTjhCO0FBTzlCLGtCQUFLLGNBQUwsR0FBc0IsS0FBdEIsQ0FQOEI7QUFROUIsaUJBQUcsYUFBSCxFQUFrQjtBQUNkLHNCQUFLLEdBQUwsQ0FBUyxLQUFULEdBRGM7Y0FBbEI7Ozs7dUNBS1U7QUFDVixrQkFBSyxVQUFMLEdBRFU7Ozs7eUNBSUU7QUFDWixrQkFBSyxVQUFMLEdBRFk7Ozs7OENBSUs7QUFDakIsb0JBQU8sS0FBUCxDQURpQjs7OzswQ0FJSixTQUFTO0FBQ3RCLGlCQUFJLFFBQVEsSUFBUixDQURrQjtBQUV0QixpQkFBSSxTQUFTLElBQVQ7OztBQUZrQixpQkFLbEIsbUJBQW1CLFNBQW5CLEVBQThCO0FBQzlCLHlCQUFRLFFBQVEsR0FBUixDQUFZLFdBQVosQ0FEc0I7QUFFOUIsMEJBQVMsUUFBUSxHQUFSLENBQVksWUFBWjs7O0FBRnFCLHdCQUs5QixDQUFRLEtBQVIsR0FBZ0IsS0FBaEIsQ0FMOEI7QUFNOUIseUJBQVEsTUFBUixHQUFpQixNQUFqQixDQU44QjtjQUFsQyxNQU9PO0FBQ0gseUJBQVEsUUFBUSxXQUFSLENBREw7QUFFSCwwQkFBUyxRQUFRLFlBQVIsQ0FGTjtjQVBQOztBQVlBLG9CQUFPLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBUCxDQWpCc0I7Ozs7NkNBb0JLOztpQkFBaEI7aUJBQU8sa0JBQVM7O0FBQzNCLGlCQUFJLE9BQU8sTUFBUCxLQUFrQixRQUFsQixFQUE0QjtBQUM1Qix3QkFENEI7Y0FBaEM7O0FBSUEsaUJBQUksU0FBUyxFQUFULENBTHVCO0FBTTNCLGlCQUFJLFlBQVksS0FBSyxlQUFMLENBQXFCLEdBQXJCLENBQXlCLFlBQXpCLEdBQXdDLE1BQXhDLENBTlc7O0FBUTNCLGlCQUFJLFNBQVMsU0FBVCxFQUFvQjtBQUNwQiwwQkFBUyxTQUFULENBRG9CO0FBRXBCLDBCQUFTLEVBQVQsQ0FGb0I7QUFHcEIsc0JBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxLQUFmLENBQXFCLFNBQXJCLEdBQW9DLGFBQXBDLENBSG9CO2NBQXhCLE1BSU8sSUFBSSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsS0FBZixDQUFxQixTQUFyQixLQUFtQyxFQUFuQyxFQUF1QztBQUM5QyxzQkFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBcUIsU0FBckIsR0FBaUMsRUFBakMsQ0FEOEM7Y0FBM0M7O0FBSVAsa0JBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsR0FBK0IsWUFBL0IsQ0FoQjJCO0FBaUIzQixrQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixNQUFwQixHQUFnQyxhQUFoQyxDQWpCMkI7Ozs7cUNBb0JuQjs7O0FBQ1Isa0JBQUssSUFBTCxHQUFZLElBQUksSUFBSixDQUFTLEtBQUssTUFBTCxFQUFULENBQVosQ0FEUTtBQUVSLGtCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLGVBQW5CLEVBRlE7QUFHUixpQkFBSSxVQUFVLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FITjs7QUFLUixpQkFBRyxRQUFRLE1BQVIsS0FBbUIsQ0FBbkIsRUFBc0I7QUFDckIsc0JBQUssUUFBTCxDQUFjLFlBQWQsRUFEcUI7QUFFckIsc0JBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixLQUFLLElBQUwsQ0FBekIsQ0FGcUI7QUFHckIsd0JBSHFCO2NBQXpCOztBQU1BLHFCQUFRLE9BQVIsQ0FBZ0IsVUFBQyxLQUFELEVBQVM7QUFDckIscUJBQUksVUFBVSxPQUFLLFdBQUwsQ0FBaUIsS0FBakIsRUFBd0IsT0FBSyxRQUFMLENBQWxDLENBRGlCO2NBQVQsQ0FBaEIsQ0FYUTs7QUFlUixrQkFBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLEtBQUssSUFBTCxDQUF6QixDQWZROzs7O3FDQWtCQSxPQUFPLFNBQVM7QUFDeEIsaUJBQU0sY0FBYyxTQUFkLFdBQWMsR0FBVztBQUMzQixxQkFBSSxRQUFRLFFBQVIsQ0FBaUIsS0FBSyxHQUFMLEVBQVUsTUFBM0IsQ0FBSixFQUF3QztBQUNwQyw2QkFBUSxXQUFSLENBQW9CLEtBQUssR0FBTCxFQUFVLE1BQTlCLEVBRG9DO2tCQUF4QyxNQUVPO0FBQ0gsNkJBQVEsUUFBUixDQUFpQixLQUFLLEdBQUwsRUFBVSxNQUEzQixFQURHO2tCQUZQO2NBRGdCLENBREk7O0FBU3hCLHFCQUFRLElBQVIsR0FBZSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBaEMsQ0FUUztBQVV4QixpQkFBSSxzQkFBc0IsSUFBSSxtQkFBSixDQUF3QixLQUFLLE1BQUwsRUFBeEIsRUFBdUMsT0FBdkMsRUFBZ0QsS0FBaEQsRUFBdUQsSUFBdkQsQ0FBdEIsQ0FWb0I7O0FBWXhCLGtCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLG1CQUFuQjs7OztBQVp3QixnQ0FnQnhCLENBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFFBQVEsSUFBUixDQUFhLElBQWIsRUFBbUIsS0FBSyxZQUFMLENBQW5EOzs7QUFoQndCLGdDQW1CeEIsQ0FBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsV0FBaEMsRUFuQndCOztBQXFCeEIsb0JBQU8sbUJBQVAsQ0FyQndCOzs7O3lDQXdCWjtBQUNaLGtCQUFLLElBQUwsQ0FBVSxRQUFWLEdBQXFCLE9BQXJCLENBQTZCLFVBQVMsU0FBVCxFQUFvQjtBQUM3QywyQkFBVSxLQUFWLEdBRDZDO2NBQXBCLENBQTdCLENBRFk7Ozs7Ozs7Ozt3Q0FTRDtBQUNYLGtCQUFLLElBQUwsQ0FBVSxRQUFWLEdBQXFCLE9BQXJCLENBQTZCLFVBQVMsU0FBVCxFQUFvQjtBQUM3QywyQkFBVSxXQUFWLEdBRDZDO2NBQXBCLENBQTdCLENBRFc7Ozs7a0NBTVA7QUFDSixrQkFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixPQUFyQixDQUE2QixVQUFTLFNBQVQsRUFBb0I7QUFDN0MsMkJBQVUsTUFBVixHQUQ2QztjQUFwQixDQUE3QixDQURJOzs7OztHQXBRb0I7O0tBNFExQjs7O0FBQ0YsNEJBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7OzhIQUNuQixRQUFRLFVBRFc7TUFBN0I7Ozs7b0NBSVc7QUFDUCwySUFBc0IsT0FBTztBQUN6Qiw0QkFBVyxvQkFBWDtBQUNBLDRCQUFXLEVBQVg7QUFDQSwyQkFBVSxDQUFDLENBQUQ7ZUFIZCxDQURPOzs7OztHQUxhOztLQWN0Qjs7O0FBQ0YsaUNBQVksTUFBWixFQUFvQixPQUFwQixFQUE2Qjs7O3dJQUNuQixRQUFRLFVBRFc7TUFBN0I7Ozs7b0NBSVc7QUFDUCxxSkFBc0IsT0FBTztBQUN6Qiw0QkFBVyxrREFBWDtBQUNBLDRCQUFXLEVBQVg7QUFDQSwyQkFBVSxDQUFDLENBQUQ7ZUFIZCxDQURPOzs7OztHQUxrQjs7S0FjM0I7OztBQUNGLGdDQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7Ozs0SUFDbkIsUUFBUSxVQURXOztBQUV6QixnQkFBSyxJQUFMLEdBRnlCOztNQUE3Qjs7OztvQ0FLVztBQUNQLGlCQUFNLFdBQVcsS0FBSyxHQUFMLENBRFY7QUFFUCxpQkFBTSxnQkFBZ0Isc0NBQXNDLFFBQXRDLENBRmY7QUFHUCxpQkFBTSxzQkFBc0Isb0NBQW9DLFFBQXBDLENBSHJCOztBQUtQLG1KQUFzQixPQUFPO0FBQ3pCLDRCQUFXLDBDQUFYO0FBQ0EsNEJBQVcsRUFBWDtBQUNBLDJCQUFVLENBQUMsQ0FBRDtnQkFDWDtBQUNDLHlCQUFRLGNBQVI7QUFDQSxvQ0FBbUIsYUFBbkI7QUFDQSxxQ0FBb0IsbUJBQXBCO2VBUEosQ0FMTzs7Ozs7R0FOaUI7O0FBd0JoQyxtQkFBa0IsU0FBbEIsQ0FBNEIsWUFBNUIsR0FBMkMsVUFBM0M7O0FBRUEsV0FBVSxpQkFBVixDQUE0QixtQkFBNUIsRUFBaUQsaUJBQWpEO0FBQ0EsV0FBVSxpQkFBVixDQUE0QixtQkFBNUIsRUFBaUQsaUJBQWpEO0FBQ0EsV0FBVSxpQkFBVixDQUE0QixlQUE1QixFQUE2QyxhQUE3QztBQUNBLFdBQVUsaUJBQVYsQ0FBNEIsb0JBQTVCLEVBQWtELGtCQUFsRCxFOzs7Ozs7O0FDbFZBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBTSxZQUFZLFFBQVEsWUFBUixDQUFxQixXQUFyQixDQUFaO0FBQ04sS0FBTSxTQUFTLFFBQVEsWUFBUixDQUFxQixRQUFyQixDQUFUOztBQUVOLHFCQUFRLEdBQVI7O0tBRU07OztBQUNGLDRCQUFZLE1BQVosRUFBb0IsT0FBcEIsRUFBNkI7OztBQUN6QixpQkFBUSxJQUFSLEdBQWUsZUFBZixDQUR5Qjs7bUlBRW5CLFFBQVEsVUFGVzs7QUFJekIsZUFBSyxhQUFMLEdBQXFCLEtBQXJCLENBSnlCO0FBS3pCLGVBQUssaUJBQUwsR0FBeUIsSUFBekIsQ0FMeUI7QUFNekIsZUFBSyxTQUFMLEdBQWlCLEVBQWpCLENBTnlCOztBQVF6QixnQkFBTyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBTTtBQUM5QixvQkFBTyxhQUFQLFNBRDhCO0FBRTlCLGlCQUFJLFNBQVMsTUFBSyxPQUFMLENBQWEsVUFBYixFQUFULENBRjBCO0FBRzlCLGlCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUFQLEVBQWU7QUFDM0IsdUJBQUssSUFBTCxHQUQyQjtBQUUzQix3QkFGMkI7Y0FBL0IsQ0FIOEI7O0FBUTlCLGtCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsRUFBZSxHQUFuQyxFQUF3QztBQUNwQyxxQkFBSSxPQUFPLENBQVAsRUFBVSxNQUFWLE1BQXNCLFdBQXRCLElBQXFDLE9BQU8sQ0FBUCxFQUFVLE1BQVYsTUFBc0IsVUFBdEIsRUFBa0M7QUFDdkUsMkJBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsT0FBTyxDQUFQLENBQXBCLEVBRHVFO2tCQUEzRTtjQURKOztBQU1BLGlCQUFJLENBQUMsTUFBSyxTQUFMLENBQWUsTUFBZixFQUF1QjtBQUN4Qix1QkFBSyxJQUFMLEdBRHdCO0FBRXhCLHdCQUZ3QjtjQUE1QixDQWQ4Qjs7QUFtQjlCLGlCQUFJLGdCQUFnQixNQUFLLGdCQUFMLENBQXNCLE1BQUssU0FBTCxDQUF0QyxDQW5CMEI7QUFvQjlCLG1CQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsRUFBK0IsS0FBL0IsRUFwQjhCOztBQXNCOUIsbUJBQUssSUFBTCxHQXRCOEI7VUFBTixDQUE1QixDQVJ5Qjs7TUFBN0I7Ozs7eUNBa0NnQjtBQUNaLHdLQURZOzs7O3VDQUlGO0FBQ1YsaUJBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQVQsQ0FETTtBQUVWLGlCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUFQLEVBQWU7QUFDM0Isc0JBQUssSUFBTCxHQUQyQjtBQUUzQix3QkFGMkI7Y0FBL0IsQ0FGVTs7QUFPVixpQkFBSSxnQkFBZ0IsS0FBSyxnQkFBTCxDQUFzQixNQUF0QixDQUFoQixDQVBNO0FBUVYsaUJBQUksQ0FBQyxLQUFLLGFBQUwsRUFBb0I7QUFDckIsc0JBQUssYUFBTCxHQUFxQixJQUFyQixDQURxQjtBQUVyQiwrQkFBYyxNQUFkLElBQXdCLFNBQXhCLENBRnFCO0FBR3JCLHNCQUFLLGlCQUFMLEdBQXlCLGFBQXpCLENBSHFCO0FBSXJCLHNCQUFLLFVBQUwsQ0FBZ0IsS0FBSyxpQkFBTCxFQUF3QixJQUF4QyxFQUpxQjtBQUtyQixzQkFBSyxHQUFMLENBQVMsWUFBVCxDQUFzQixjQUF0QixFQUFzQyxNQUF0QyxFQUxxQjtBQU1yQixzQkFBSyxPQUFMLENBQWEsaUJBQWIsQ0FBK0IsTUFBL0IsR0FOcUI7Y0FBekIsTUFRSztBQUNELHNCQUFLLGFBQUwsR0FBcUIsS0FBckIsQ0FEQztBQUVELHNCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLEdBQTNDLEVBQWdEO0FBQzVDLDBCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLE1BQWxCLElBQTRCLFVBQTVCLENBRDRDO2tCQUFoRDtBQUdBLHNCQUFLLE9BQUwsQ0FBYSxpQkFBYixDQUErQixNQUEvQixHQUxDO0FBTUQsc0JBQUssVUFBTCxDQUFnQixhQUFoQixFQUErQixLQUEvQixFQU5DO0FBT0Qsc0JBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsY0FBdEIsRUFBc0MsT0FBdEMsRUFQQztjQVJMOzs7O2tDQW1CSztBQUNMLGlCQUFJLFNBQVMsS0FBSyxPQUFMLENBQWEsVUFBYixFQUFULENBREM7QUFFTCxpQkFBSSxDQUFDLE1BQUQsSUFBVyxDQUFDLE9BQU8sTUFBUCxFQUFlO0FBQzNCLHNCQUFLLElBQUwsR0FEMkI7QUFFM0Isd0JBRjJCO2NBQS9CLENBRks7O0FBT0wsa0JBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDO0FBQ3BDLHFCQUFJLE9BQU8sQ0FBUCxFQUFVLE1BQVYsTUFBc0IsU0FBdEIsRUFBaUM7QUFDakMsMEJBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsY0FBdEIsRUFBc0MsTUFBdEMsRUFEaUM7QUFFakMsMEJBQUssYUFBTCxHQUFxQixJQUFyQixDQUZpQztBQUdqQywwQkFBSyxpQkFBTCxHQUF5QixPQUFPLENBQVAsQ0FBekIsQ0FIaUM7QUFJakMsMEJBQUssVUFBTCxDQUFnQixLQUFLLGlCQUFMLEVBQXdCLElBQXhDLEVBSmlDO0FBS2pDLDRCQUxpQztrQkFBckM7Y0FESjtBQVNBLGtCQUFLLEdBQUwsQ0FBUyxZQUFULENBQXNCLGNBQXRCLEVBQXNDLE9BQXRDLEVBaEJLO0FBaUJMLGlCQUFJLGdCQUFnQixLQUFLLGdCQUFMLENBQXNCLE1BQXRCLENBQWhCLENBakJDO0FBa0JMLGtCQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsRUFBK0IsS0FBL0IsRUFsQks7QUFtQkwsa0JBQUssYUFBTCxHQUFxQixLQUFyQixDQW5CSzs7OzswQ0FzQlEsUUFBUTtBQUNyQixpQkFBSSxLQUFLLGlCQUFMLEVBQXdCO0FBQ3hCLHdCQUFPLEtBQUssaUJBQUwsQ0FEaUI7Y0FBNUI7O0FBSUEsaUJBQUksc0JBQUosQ0FMcUI7QUFNckIsa0JBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDO0FBQ3BDLHFCQUFJLE9BQU8sQ0FBUCxFQUFVLE1BQVYsTUFBc0IsVUFBdEIsRUFBa0M7QUFDbEMscUNBQWdCLE9BQU8sQ0FBUCxDQUFoQixDQURrQztBQUVsQywyQkFGa0M7a0JBQXRDO2NBREo7QUFNQSxpQkFBSSxDQUFDLGFBQUQsRUFBZ0I7QUFDaEIsaUNBQWdCLE9BQU8sQ0FBUCxDQUFoQixDQURnQjtjQUFwQjtBQUdBLG9CQUFPLGFBQVAsQ0FmcUI7Ozs7b0NBa0JkLE9BQU8sU0FBUztBQUN2QixpQkFBSSxPQUFPLGFBQVAsQ0FEbUI7QUFFdkIsaUJBQUksWUFBWSw0Q0FBWixDQUZtQjtBQUd2QixpQkFBSSxNQUFNLE1BQU4sTUFBa0IsVUFBbEIsSUFBZ0MsQ0FBQyxPQUFELEVBQVU7QUFDMUMsd0JBQU8sYUFBUCxDQUQwQztBQUUxQyw2QkFBWSw0Q0FBWixDQUYwQztjQUE5QyxNQUlLLElBQUksTUFBTSxNQUFOLE1BQWtCLFVBQWxCLElBQWdDLE9BQWhDLEVBQXlDO0FBQzlDLHdCQUFPLGNBQVAsQ0FEOEM7QUFFOUMsNkJBQVksMkNBQVosQ0FGOEM7Y0FBN0MsTUFJQSxJQUFJLE1BQU0sTUFBTixNQUFrQixXQUFsQixJQUFpQyxDQUFDLE9BQUQsRUFBVTtBQUNoRCx3QkFBTyxjQUFQLENBRGdEO0FBRWhELDZCQUFZLDhDQUFaLENBRmdEO2NBQS9DLE1BSUEsSUFBSSxNQUFNLE1BQU4sTUFBa0IsV0FBbEIsSUFBaUMsT0FBakMsRUFBMEM7QUFDL0Msd0JBQU8sZUFBUCxDQUQrQztBQUUvQyw2QkFBWSw2Q0FBWixDQUYrQztjQUE5Qzs7QUFLTCxrQkFBSyxXQUFMLENBQWlCLEtBQUssVUFBTCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQWhCLENBQWpCLEVBcEJ1QjtBQXFCdkIsa0JBQUssR0FBTCxDQUFTLFlBQVQsQ0FBc0IsWUFBdEIsRUFBb0MsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFwQyxFQXJCdUI7Ozs7O0dBMUdIOztBQW1JNUIsZUFBYyxTQUFkLENBQXdCLFlBQXhCLEdBQXVDLGNBQXZDO0FBQ0EsU0FBUSxpQkFBUixDQUEwQixlQUExQixFQUEyQyxhQUEzQyxFOzs7Ozs7O0FDeklBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBSSxtQkFBbUIsUUFBUSxZQUFSLENBQXFCLGtCQUFyQixDQUFuQjtBQUNKLEtBQU0sWUFBWSxRQUFRLFlBQVIsQ0FBcUIsV0FBckIsQ0FBWjs7QUFFTixxQkFBUSxHQUFSOztLQUVNOzs7QUFDRiwrQkFBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCOzs7eUlBQ25CLFFBQVEsVUFEVzs7QUFHekIsZUFBSyxjQUFMLEdBQXNCLFFBQVEsUUFBUixDQUFpQixNQUFqQixFQUF5QjtBQUMzQyx3QkFBVywwQkFBWDtVQURrQixDQUF0QixDQUh5Qjs7QUFPekIsZUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixNQUFLLGNBQUwsQ0FBckIsQ0FQeUI7O01BQTdCOzs7O2dDQVVPLFNBQVMsVUFBVTtBQUN0Qix3SUFBYSxTQUFTLFNBQXRCLENBRHNCOzs7O2tEQUlELFVBQVU7QUFDL0IsaUJBQUksS0FBSyxNQUFMLEdBQWMsVUFBZCxJQUE0QixLQUFLLE1BQUwsR0FBYyxVQUFkLENBQXlCLGVBQXpCLElBQTRDLEtBQUssTUFBTCxHQUFjLFVBQWQsQ0FBeUIsZUFBekIsQ0FBeUMsT0FBekMsRUFBa0Q7QUFDMUgscUJBQUksZUFBZSxLQUFLLE1BQUwsR0FBYyxVQUFkLENBQXlCLGVBQXpCLENBQXlDLE9BQXpDLENBQWlELEtBQWpELEVBQWYsQ0FEc0g7QUFFMUgscUJBQUksY0FBYyxLQUFLLE1BQUwsR0FBYyxLQUFkLEVBQWQsQ0FGc0g7QUFHMUgscUJBQUksaUJBQWlCLENBQUMsY0FBYyxZQUFkLENBQUQsR0FBK0IsQ0FBL0IsQ0FIcUc7QUFJMUgscUJBQUksbUJBQW1CLEtBQUssV0FBTCxDQUFpQixXQUFqQixHQUErQixDQUEvQixDQUptRztBQUsxSCxxQkFBSSxpQkFBaUIsUUFBakIsQ0FMc0g7O0FBTzFILHFCQUFJLFdBQVcsbUJBQW1CLGNBQW5CLEVBQW1DO0FBQzlDLHNDQUFpQixLQUFLLElBQUwsQ0FBVSxLQUFLLFdBQUwsQ0FBaUIscUJBQWpCLEdBQXlDLEtBQXpDLEdBQWlELFFBQWpELEdBQTRELGNBQTVELENBQTNCLENBRDhDO2tCQUFsRCxNQUVPLElBQUksV0FBWSxlQUFlLGdCQUFmLEdBQWtDLGNBQWxDLEVBQW1EO0FBQ3RFLHNDQUFpQixLQUFLLEtBQUwsQ0FBVyxlQUFlLFFBQWYsR0FBMEIsY0FBMUIsQ0FBNUIsQ0FEc0U7a0JBQW5FLE1BRUE7QUFDSCxzQ0FBaUIsZ0JBQWpCLENBREc7a0JBRkE7QUFLUCxzQkFBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLEtBQXZCLEdBQStCLENBQUMsY0FBRCxHQUFrQixJQUFsQixDQWQyRjtjQUE5SDs7Ozs7R0FoQnVCOztBQW1DL0IsV0FBVSxpQkFBVixDQUE0QixrQkFBNUIsRUFBZ0QsZ0JBQWhELEU7Ozs7Ozs7QUN4Q0EsMEM7Ozs7Ozs7Ozs7QUNDQSxLQUFJLGFBQWEsUUFBUSxZQUFSLENBQXFCLFlBQXJCLENBQWI7QUFDSixLQUFJLG1CQUFtQixRQUFRLFlBQVIsQ0FBcUIsa0JBQXJCLENBQW5COztBQUVKLFlBQVcsU0FBWCxDQUFxQixXQUFyQixHQUFtQyxZQUFZO0FBQzNDLFNBQUksQ0FBQyxLQUFLLGtCQUFMLEVBQUQsRUFBNEI7QUFDNUIsY0FBSyxlQUFMLEdBRDRCO0FBRTVCLGFBQUksS0FBSyxjQUFMLEVBQXFCO0FBQ3JCLGtCQUFLLGFBQUwsR0FEcUI7VUFBekIsTUFFTztBQUNILGtCQUFLLFdBQUwsR0FERztVQUZQO01BRko7RUFEK0I7O0FBV25DLFlBQVcsU0FBWCxDQUFxQixlQUFyQixHQUF1QyxZQUFZLEVBQVo7QUFDdkMsWUFBVyxTQUFYLENBQXFCLGdCQUFyQixHQUF3QyxZQUFZLEVBQVosQzs7Ozs7Ozs7O0FDaEJ4QyxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCx5QkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELHNCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELCtCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxrQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxVQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsYUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxrQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsZ0JBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQsNEJBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxVQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxjQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELG1CQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCwwQkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxNQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxjQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsYUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxtQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCxnQkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdDQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsMEJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QsdUNBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsK0NBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxrQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxhQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsY0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLE9BQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxZQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHNCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsaUJBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsY0FBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxpQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx3QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLDhCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsWUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxzQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHlCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsS0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFFBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxVQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsU0FBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLFlBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxZQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELDZCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHFCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsbUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxrQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxrQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCwrQkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGdDQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxXQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELG9CQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsV0FBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCw0QkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxzQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFdBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG9CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx1QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDRCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGFBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsTUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsb0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQseUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsd0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx1QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG9CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELFdBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsNkJBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxjQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFdBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxrQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw2QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLFlBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsMEJBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQscUNBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxjQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsb0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyx1QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLDBCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELG1DQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsbUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsbUNBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsV0FBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLEtBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxTQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxpQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx5QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCxvQkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsaUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0Qsc0JBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0Qsb0NBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxxQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCx3QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLGFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxVQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFNBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsOEJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxTQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHFCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELDBCQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsV0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsaUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCw4QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQscUNBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsYUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLE9BQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxTQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGtCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHdCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELDBCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxrQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxjQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELGdDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QseUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLFlBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsbUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxLQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHNCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELGdDQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsZUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxpQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx3QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsd0JBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxLQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsWUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxLQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGlCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHlCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHdCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsNENBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QywwQ0FBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCwwQ0FBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCw0REFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGtCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHFCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHdCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsS0FBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCwyQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCx3Q0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx1QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsV0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxtQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsOEJBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsYUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxLQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGFBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsc0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsa0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx5QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLHVCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELG9CQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELDhCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MscUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsbUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsUUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGNBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsNEJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxVQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHVCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELHlDQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsV0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLHdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsMEJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QywyQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx5Q0FBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDhCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsV0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFVBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxPQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsUUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsbUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMkJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsZ0NBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGlCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELG9CQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELHFDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZ0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsbUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsU0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG1CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDRCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsYUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCwyQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCw0Q0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHVCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsMkJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQscUNBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxrQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCx5QkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxZQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFVBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG9CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELDBCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHFCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsd0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2Qyx3QkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxzQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCw4QkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELG9CQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsVUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxZQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHFCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsUUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxvQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxxQkFBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx5QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx1QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHlCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFlBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxRQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsTUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGVBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxpQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxvQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCwrQkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLDBCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsdUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QseUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsdUNBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyw2QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCwwQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLGFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxZQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFNBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw4QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLGVBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsNEJBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQsZ0NBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxXQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMseUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyw0QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsc0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxpQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCwyQkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxhQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFlBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLHFCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHNCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHNCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsdUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxvQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxXQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELG9CQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsbUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0Qsa0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxVQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGFBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsNEJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxhQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELGNBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQseUJBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxXQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsb0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyx5QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsd0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxjQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDRCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsS0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGVBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxPQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsVUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsdUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsZ0NBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG1CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELHNCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELHFDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msc0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsOEJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxTQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGFBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0Qsd0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxXQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELG9CQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELG9DQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsWUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLHFCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msd0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxhQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHdCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCxnQ0FBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFlBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxhQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFFBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG9CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELDBCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHdCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMseUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxzQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxZQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELDZCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZ0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsMkJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsU0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG1CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDJCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsYUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCwyQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxzQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsV0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxtQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHlCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFlBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsbUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsWUFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLDRCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsNEJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0Qsc0NBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsNkNBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxjQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGVBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxTQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsTUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsS0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLFNBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsYUFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLFFBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsY0FBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCwwQkFBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxnQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsWUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxnQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGFBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQseUJBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxLQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsU0FBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLGlCQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsUUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLFlBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELG1CQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHNCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsaUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxrQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxtQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCw0QkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsYUFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxNQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsTUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLE9BQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw4QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsZUFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCwwQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsWUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCwyQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDRCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFVBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxXQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsTUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHlCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHFCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsb0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxtQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxzQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCwrQkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDBCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsWUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxxQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCw2QkFBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHVCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsb0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsOEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyx1QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCxvQ0FBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLGVBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxZQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsUUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFdBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxlQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsbUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMkJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQscUJBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQ0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLHNDQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELG1DQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELCtDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0Qsa0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsUUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxTQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGlCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELCtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsYUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxxQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCw0Q0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4Qyx3QkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsVUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx1QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELG1DQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGFBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxlQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsYUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsaUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsbUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsNkJBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGtCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELHVCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELGtDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsYUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxjQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHlCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsVUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxxQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxrQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxnQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx5QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDJCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsTUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFVBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsT0FBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHVCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELG9CQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMseUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxzQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxhQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELDBCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0Qsb0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsU0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGdCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDBDQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsYUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCx1QkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxxQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxzQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMseUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsb0NBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxlQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELGdDQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFlBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsb0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsUUFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLE1BQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxNQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELElBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsT0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLFVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsT0FBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLEtBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxJQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsR0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLEdBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxHQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsT0FBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxVQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsSUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxNQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELFVBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxJQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsTUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLE1BQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxVQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELGFBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxPQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHNCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsSUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLElBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLFNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxXQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELGFBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsZ0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG1CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELHlCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELHNDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsWUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxlQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHFCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsU0FBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxtQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCw4QkFBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLHNCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxzQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGNBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsa0NBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsV0FBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFNBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxNQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGdCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHFCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELFFBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxNQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsTUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxPQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELFVBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxRQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELE9BQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxLQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsSUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLElBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxJQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsSUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLE9BQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsV0FBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLElBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsT0FBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxjQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsSUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLE1BQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxNQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsT0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxXQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsUUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCx1QkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLElBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxJQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxTQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsVUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxhQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELGlCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMseUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2Qyx3QkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCw0QkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCxxQ0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHNCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxTQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsV0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELCtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsVUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxpQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxtQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG9CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMkJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxlQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHFDQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGFBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxRQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsU0FBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMkJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsb0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxnQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGdCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELGdCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELDRCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsMkJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsV0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsTUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLG1CQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDRCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsVUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxxQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxtQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx3QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELHFDQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsUUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGFBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxRQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsVUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGdCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsa0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsK0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsNkJBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QscUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsNkJBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxtQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxzQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxVQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFdBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsYUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCxvQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLE1BQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QscUJBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQsOEJBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxRQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsaUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyx1QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLFlBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsb0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxlQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDhCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsTUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLE1BQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsT0FBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHVCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELGlDQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGFBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QsdUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QseUNBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxlQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxhQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELG9CQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsSUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCxzQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCx1Q0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxpQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGlCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsV0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxtQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsd0JBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxLQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsTUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLE1BQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGlCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELG1CQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELGlDQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsNEJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QywyQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCwwQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCw0Q0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGtCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHNCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsV0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxpQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw4QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QsaUJBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQsdUNBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxjQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsMEJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQywyQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGNBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsd0JBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxnQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCwrQkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxhQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLEtBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxjQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQscUJBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGtCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELGdCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELDZCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsaUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsdUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsYUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxRQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsTUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGFBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsNkJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxXQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHNCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELDhCQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsWUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msa0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxhQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHdCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsY0FBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCxxQ0FBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFVBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxjQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFVBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxlQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsaUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQseUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQix5QkFBL0IsSUFBNEQsaUNBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixjQUEvQixJQUFpRCxzQkFBakQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGFBQS9CLElBQWdELG1CQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0Isc0JBQS9CLElBQXlELFVBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQiwrQkFBL0IsSUFBa0UsNEJBQWxFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixlQUEvQixJQUFrRCxlQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0Isa0JBQS9CLElBQXFELGdCQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsT0FBL0IsSUFBMEMsT0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFVBQS9CLElBQTZDLFVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixPQUEvQixJQUEwQyxRQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0IsSUFBMkMsT0FBM0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLE9BQS9CLElBQTBDLFNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixhQUEvQixJQUFnRCxjQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0Isa0JBQS9CLElBQXFELHNCQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsS0FBL0IsSUFBd0MsWUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGdCQUEvQixJQUFtRCwwQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLDRCQUEvQixJQUErRCxvQ0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFVBQS9CLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixjQUEvQixJQUFpRCxtQkFBakQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGVBQS9CLElBQWtELHNCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsY0FBL0IsSUFBaUQsZ0JBQWpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixtQkFBL0IsSUFBc0Qsd0JBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixlQUEvQixJQUFrRCxvQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLDBCQUEvQixJQUE2RCw0QkFBN0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFFBQS9CLElBQTJDLFdBQTNDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixNQUEvQixJQUF5QyxZQUF6QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsSUFBL0IsSUFBdUMsSUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLElBQS9CLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixjQUEvQixJQUFpRCxnQkFBakQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGFBQS9CLElBQWdELG9CQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsbUJBQS9CLElBQXNELDBCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IseUJBQS9CLElBQTRELHdCQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsY0FBL0IsSUFBaUQsc0JBQWpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixhQUEvQixJQUFnRCxtQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLHNCQUEvQixJQUF5RCx1QkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLCtCQUEvQixJQUFrRSxxQ0FBbEU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGVBQS9CLElBQWtELGdCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0Isa0JBQS9CLElBQXFELGlCQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsT0FBL0IsSUFBMEMsT0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFVBQS9CLElBQTZDLFVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixPQUEvQixJQUEwQyxRQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsUUFBL0IsSUFBMkMsT0FBM0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLE9BQS9CLElBQTBDLFNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixhQUEvQixJQUFnRCxjQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0Isa0JBQS9CLElBQXFELHNCQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsS0FBL0IsSUFBd0MsWUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGdCQUEvQixJQUFtRCwwQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLDRCQUEvQixJQUErRCw2QkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFVBQS9CLElBQTZDLFlBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixjQUEvQixJQUFpRCxxQkFBakQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGVBQS9CLElBQWtELHdCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsY0FBL0IsSUFBaUQsZ0JBQWpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixtQkFBL0IsSUFBc0Qsd0JBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixlQUEvQixJQUFrRCxvQkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLDBCQUEvQixJQUE2RCwyQkFBN0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLFFBQS9CLElBQTJDLFdBQTNDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixNQUEvQixJQUF5QyxZQUF6QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsSUFBL0IsSUFBdUMsSUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLElBQS9CLElBQXVDLFNBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixPQUF0QixFQUErQixjQUEvQixJQUFpRCxnQkFBakQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLE9BQXRCLEVBQStCLGFBQS9CLElBQWdELG9CQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsbUJBQS9CLElBQXNELHlCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHFCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMscUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxrQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxvQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCxrQ0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGNBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsbUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE1BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsS0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsZ0NBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxZQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELGtCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELGdDQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsUUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLHFCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msd0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxjQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHlCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZ0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsNEJBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxTQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsU0FBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxTQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZ0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxtQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCw0QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCxtQkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLG9CQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsbUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QsVUFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCxxQkFBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDhCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxTQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFFBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGdDQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsT0FBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCwwQkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxtQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFdBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxtQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG9CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx3QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELGdDQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLGdCQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsSUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFNBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxlQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsaUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsc0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxpQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGlCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELFNBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QscUJBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQywyQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw4QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxZQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFNBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsK0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxTQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHNCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELGlDQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsWUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsaUJBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxZQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELG9CQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCw4QkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFFBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxhQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsT0FBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFNBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxlQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsaUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsdUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsbUJBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxnQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0QsbUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsZ0NBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxlQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELG9CQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFlBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsZ0JBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxRQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMscUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QsMkJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxhQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHFCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELCtCQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsWUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLG1CQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msb0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxZQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELGtCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msd0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsdUNBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxTQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsV0FBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxZQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxxQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxzQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLHlCQUFwQyxJQUFpRSwwQkFBakU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGNBQXBDLElBQXNELHNCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsYUFBcEMsSUFBcUQscUJBQXJEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxzQkFBcEMsSUFBOEQsc0JBQTlEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQywrQkFBcEMsSUFBdUUsK0JBQXZFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxlQUFwQyxJQUF1RCxlQUF2RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0Msa0JBQXBDLElBQTBELG9CQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsT0FBcEMsSUFBK0MsT0FBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLFVBQXBDLElBQWtELFlBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxPQUFwQyxJQUErQyxRQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsUUFBcEMsSUFBZ0QsUUFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLE9BQXBDLElBQStDLE1BQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxhQUFwQyxJQUFxRCxXQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0Msa0JBQXBDLElBQTBELG1DQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsS0FBcEMsSUFBNkMsV0FBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGdCQUFwQyxJQUF3RCxxQkFBeEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLDRCQUFwQyxJQUFvRSxpQ0FBcEU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLFVBQXBDLElBQWtELFVBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxjQUFwQyxJQUFzRCx3QkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGVBQXBDLElBQXVELHlCQUF2RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsY0FBcEMsSUFBc0QsaUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxtQkFBcEMsSUFBMkQseUJBQTNEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxlQUFwQyxJQUF1RCx1QkFBdkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLDBCQUFwQyxJQUFrRSxtQ0FBbEU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLFFBQXBDLElBQWdELFVBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxNQUFwQyxJQUE4QyxZQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsSUFBcEMsSUFBNEMsSUFBNUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLElBQXBDLElBQTRDLFVBQTVDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxjQUFwQyxJQUFzRCxlQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsYUFBcEMsSUFBcUQsbUJBQXJEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxtQkFBcEMsSUFBMkQsc0JBQTNEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyx5QkFBcEMsSUFBaUUsMEJBQWpFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxjQUFwQyxJQUFzRCx1QkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGFBQXBDLElBQXFELHNCQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0Msc0JBQXBDLElBQThELHNCQUE5RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsK0JBQXBDLElBQXVFLCtCQUF2RTtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsZUFBcEMsSUFBdUQsZUFBdkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGtCQUFwQyxJQUEwRCxvQkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLE9BQXBDLElBQStDLE9BQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxVQUFwQyxJQUFrRCxZQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsT0FBcEMsSUFBK0MsUUFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLFFBQXBDLElBQWdELFNBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxPQUFwQyxJQUErQyxNQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsYUFBcEMsSUFBcUQsV0FBckQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGtCQUFwQyxJQUEwRCxtQ0FBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLEtBQXBDLElBQTZDLFlBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxnQkFBcEMsSUFBd0QscUJBQXhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyw0QkFBcEMsSUFBb0UsaUNBQXBFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxVQUFwQyxJQUFrRCxVQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsY0FBcEMsSUFBc0QseUJBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxlQUFwQyxJQUF1RCwwQkFBdkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGNBQXBDLElBQXNELGlCQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsbUJBQXBDLElBQTJELHlCQUEzRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsZUFBcEMsSUFBdUQsdUJBQXZEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQywwQkFBcEMsSUFBa0UsbUNBQWxFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxRQUFwQyxJQUFnRCxVQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsTUFBcEMsSUFBOEMsWUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLElBQXBDLElBQTRDLElBQTVDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixZQUF0QixFQUFvQyxJQUFwQyxJQUE0QyxXQUE1QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsY0FBcEMsSUFBc0QsZUFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLGFBQXBDLElBQXFELG1CQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsbUJBQXBDLElBQTJELHNCQUEzRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELHNCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixzQkFBNUIsSUFBc0Qsd0JBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0QsMENBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxhQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGdCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxNQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsT0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxVQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELHdCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsSUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCx1QkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCxzQ0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGVBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxnQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsYUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCxxQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQseUJBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxLQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsTUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLE9BQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsWUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGVBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsMEJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsd0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxhQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsY0FBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxzQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCxnQ0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGlCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsUUFBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFNBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxVQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsU0FBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLFVBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxRQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELGNBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxjQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELG1CQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELG1DQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsWUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGVBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxjQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsaUJBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsdUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyxpQkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDBCQUE1QixJQUEwRCx1QkFBMUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLE9BQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixNQUE1QixJQUFzQyxXQUF0QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsVUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLFlBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxhQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZ0JBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsbUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qix5QkFBNUIsSUFBeUQsc0JBQXpEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QywrQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLDZCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELHNDQUF0RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsK0JBQTVCLElBQStELHlDQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msc0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0QseUJBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxPQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsVUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxNQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLFdBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixrQkFBNUIsSUFBa0Qsa0JBQWxEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixLQUE1QixJQUFxQyxRQUFyQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBQTVCLElBQWdELHVCQUFoRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsNEJBQTVCLElBQTRELDhCQUE1RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsSUFBMEMsU0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0Msb0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxjQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELHNCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsSUFBK0MsZ0JBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsK0JBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxLQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsVUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLElBQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxNQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGFBQTVCLElBQTZDLGdCQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsbUJBQTVCLElBQW1ELGdCQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIseUJBQTVCLElBQXlELGlCQUF6RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsa0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxtQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHNCQUE1QixJQUFzRCxxQkFBdEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLCtCQUE1QixJQUErRCxtQ0FBL0Q7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGdCQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELDZCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsT0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLGFBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxTQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsVUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLE9BQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxjQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsa0JBQTVCLElBQWtELCtCQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsSUFBcUMsVUFBckM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGdCQUE1QixJQUFnRCx1QkFBaEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLDRCQUE1QixJQUE0RCx3Q0FBNUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFVBQTVCLElBQTBDLFdBQTFDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG1CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsY0FBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCx1QkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGNBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwwQkFBNUIsSUFBMEQsZ0NBQTFEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixRQUE1QixJQUF3QyxPQUF4QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsSUFBc0MsTUFBdEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLElBQW9DLE9BQXBDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxVQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZ0JBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxpQkFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCwrQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLHlCQUE1QixJQUF5RCxrQkFBekQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGVBQTlDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixhQUE1QixJQUE2QyxlQUE3QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsc0JBQTVCLElBQXNELFVBQXREO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QiwrQkFBNUIsSUFBK0Qsc0JBQS9EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixlQUE1QixJQUErQyx3QkFBL0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCw0QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE9BQTVCLElBQXVDLGNBQXZDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxhQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsSUFBdUMsS0FBdkM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLElBQXdDLFlBQXhDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixPQUE1QixJQUF1QyxLQUF2QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMsZUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGtCQUE1QixJQUFrRCx5QkFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixnQkFBNUIsSUFBZ0QscUJBQWhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0Qiw0QkFBNUIsSUFBNEQsa0NBQTVEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixVQUE1QixJQUEwQyxhQUExQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsY0FBNUIsSUFBOEMsZUFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLGVBQS9DO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixjQUE1QixJQUE4QyxvQkFBOUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLG1CQUE1QixJQUFtRCwyQkFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLElBQStDLG9CQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsMEJBQTVCLElBQTBELDRCQUExRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsSUFBd0MsVUFBeEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLElBQXNDLFNBQXRDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixJQUE1QixJQUFvQyxJQUFwQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsSUFBb0MsTUFBcEM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLElBQXRCLEVBQTRCLGNBQTVCLElBQThDLGlCQUE5QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsSUFBNkMseUJBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixJQUF0QixFQUE0QixtQkFBNUIsSUFBbUQsdUJBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyx5QkFBakMsSUFBOEQsT0FBOUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGNBQWpDLElBQW1ELFNBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxhQUFqQyxJQUFrRCxTQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsc0JBQWpDLElBQTJELFlBQTNEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQywrQkFBakMsSUFBb0UsY0FBcEU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGVBQWpDLElBQW9ELE9BQXBEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxrQkFBakMsSUFBdUQsT0FBdkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLE9BQWpDLElBQTRDLEtBQTVDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxVQUFqQyxJQUErQyxJQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsT0FBakMsSUFBNEMsR0FBNUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLFFBQWpDLElBQTZDLEdBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxPQUFqQyxJQUE0QyxHQUE1QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsYUFBakMsSUFBa0QsSUFBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGtCQUFqQyxJQUF1RCxNQUF2RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsS0FBakMsSUFBMEMsR0FBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGdCQUFqQyxJQUFxRCxNQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsNEJBQWpDLElBQWlFLFNBQWpFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxVQUFqQyxJQUErQyxJQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsY0FBakMsSUFBbUQsUUFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGVBQWpDLElBQW9ELFFBQXBEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxjQUFqQyxJQUFtRCxNQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsbUJBQWpDLElBQXdELFFBQXhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxlQUFqQyxJQUFvRCxNQUFwRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsMEJBQWpDLElBQStELHdCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsUUFBakMsSUFBNkMsSUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLElBQTJDLElBQTNDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxJQUF5QyxJQUF6QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakMsSUFBeUMsR0FBekM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGNBQWpDLElBQW1ELFFBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxhQUFqQyxJQUFrRCxRQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsbUJBQWpDLElBQXdELE9BQXhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyx5QkFBakMsSUFBOEQsT0FBOUQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGNBQWpDLElBQW1ELE1BQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxhQUFqQyxJQUFrRCxNQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsc0JBQWpDLElBQTJELElBQTNEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQywrQkFBakMsSUFBb0UsTUFBcEU7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGVBQWpDLElBQW9ELE1BQXBEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxrQkFBakMsSUFBdUQsTUFBdkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLE9BQWpDLElBQTRDLElBQTVDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxVQUFqQyxJQUErQyxJQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsT0FBakMsSUFBNEMsR0FBNUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLFFBQWpDLElBQTZDLEdBQTdDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxPQUFqQyxJQUE0QyxHQUE1QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsYUFBakMsSUFBa0QsS0FBbEQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGtCQUFqQyxJQUF1RCxPQUF2RDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsS0FBakMsSUFBMEMsSUFBMUM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGdCQUFqQyxJQUFxRCxNQUFyRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsNEJBQWpDLElBQWlFLFNBQWpFO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxVQUFqQyxJQUErQyxJQUEvQztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsY0FBakMsSUFBbUQsTUFBbkQ7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGVBQWpDLElBQW9ELE1BQXBEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxjQUFqQyxJQUFtRCxNQUFuRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsbUJBQWpDLElBQXdELFFBQXhEO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxlQUFqQyxJQUFvRCxNQUFwRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsMEJBQWpDLElBQStELHdCQUEvRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsUUFBakMsSUFBNkMsSUFBN0M7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLElBQTJDLElBQTNDO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxJQUF5QyxJQUF6QztBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakMsSUFBeUMsSUFBekM7QUFDQSxLQUFJLE9BQUosQ0FBWSxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLGNBQWpDLElBQW1ELFFBQW5EO0FBQ0EsS0FBSSxPQUFKLENBQVksU0FBWixDQUFzQixTQUF0QixFQUFpQyxhQUFqQyxJQUFrRCxRQUFsRDtBQUNBLEtBQUksT0FBSixDQUFZLFNBQVosQ0FBc0IsU0FBdEIsRUFBaUMsbUJBQWpDLElBQXdELFFBQXhELEM7Ozs7Ozs7Ozs7Ozs7OztBQzcwQ0EscUJBQVEsR0FBUjs7QUFFQSxLQUFJLGdCQUFKLEdBQXVCLElBQUksTUFBSixDQUFXLElBQUksWUFBSixDQUFpQixXQUFqQixDQUFYLEVBQTBDO0FBQzdELFdBQU0sY0FBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCO0FBQzdCLHNCQUQ2Qjs7QUFHN0IsZ0JBQU8sUUFBUCxHQUFrQixPQUFPLFFBQVAsSUFBbUIsRUFBbkIsQ0FIVztBQUk3QixnQkFBTyxRQUFQLENBQWdCLG1CQUFoQixJQUF1QyxJQUF2QyxDQUo2Qjs7QUFNN0IsYUFBSSxPQUFPLE9BQU8sUUFBUCxDQUFnQixJQUFoQjthQUNQLFVBQVUsQ0FBQyxDQUFDLElBQUQsSUFBUyxLQUFLLE9BQUwsS0FBaUIsU0FBakIsR0FBNkIsS0FBSyxPQUFMLEdBQWUsSUFBdEQ7YUFDVixVQUFVLENBQUMsQ0FBQyxJQUFELElBQVMsQ0FBQyxDQUFDLEtBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxHQUFlLEdBQTFDO2FBQ1YsWUFBWSxDQUFDLENBQUMsSUFBRCxJQUFTLENBQUMsQ0FBQyxLQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLElBQTlDO2FBQ1oscUJBQXFCLENBQUMsQ0FBQyxJQUFELElBQVMsQ0FBQyxDQUFDLEtBQUssa0JBQUwsR0FBMEIsS0FBSyxrQkFBTCxHQUEwQixNQUFoRTthQUNyQixtQkFBbUIsQ0FBQyxDQUFDLElBQUQsSUFBUyxDQUFDLENBQUMsS0FBSyxnQkFBTCxHQUF3QixLQUFLLGdCQUFMLEdBQXdCLEtBQTVEOzs7QUFYTSxhQWN6QixjQUFjO0FBQ2QsMkJBQWM7QUFDVix3QkFBTyxPQUFPLFFBQVAsQ0FBZ0IsS0FBaEIsSUFBeUIsRUFBekI7QUFDUCw4QkFBYSxPQUFPLFFBQVAsQ0FBZ0IsV0FBaEIsSUFBK0IsRUFBL0I7Y0FGakI7QUFJQSxtQkFBTTtBQUNGLDBCQUFTLE9BQVQ7QUFDQSwwQkFBUyxPQUFUO0FBQ0EsNEJBQVcsU0FBWDtjQUhKO0FBS0EseUJBQVk7QUFDUiw4QkFBYSxPQUFPLFFBQVAsQ0FBZ0IsV0FBaEIsSUFBK0IsRUFBL0I7Y0FEakI7O0FBSUEsbUJBQU07QUFDRiw4QkFBYSxNQUFiO2NBREo7QUFHQSw0QkFBZTtBQUNYLDRCQUFXLG1CQUFYO2NBREo7QUFHQSxzQkFBUztBQUNMLDRCQUFXLFNBQVg7QUFDQSwrQkFBYyxDQUFkO2NBRko7QUFJQSw0QkFBZSxPQUFPLFFBQVAsQ0FBZ0IsYUFBaEIsSUFBaUM7QUFDNUMsMEJBQVMsSUFBVDtBQUNBLDhCQUFhLENBQ1QsRUFBRSxNQUFNLE1BQU4sRUFBYyxPQUFPLENBQVAsRUFEUCxFQUVULEVBQUUsTUFBTSxPQUFOLEVBQWUsT0FBTyxJQUFQLEVBRlIsRUFHVCxFQUFFLE1BQU0sTUFBTixFQUFjLE9BQU8sR0FBUCxFQUhQLEVBSVQsRUFBRSxNQUFNLE9BQU4sRUFBZSxPQUFPLElBQVAsRUFKUixFQUtULEVBQUUsTUFBTSxNQUFOLEVBQWMsT0FBTyxDQUFQLEVBTFAsRUFNVCxFQUFFLE1BQU0sTUFBTixFQUFjLE9BQU8sR0FBUCxFQU5QLENBQWI7Y0FGVztBQVVmLGtDQUFxQixFQUFFLFVBQVUsS0FBVixFQUF2Qjs7QUFFQSw4QkFBaUI7QUFDYiw0QkFBVyxDQUNQLFlBRE8sRUFFUCxxQkFGTyxFQUdQLGVBSE8sRUFJUCxvQkFKTyxFQUtQLGFBTE8sRUFNUCxpQkFOTyxFQU9QLHNCQVBPLENBQVg7QUFTQSw4QkFBYSxDQUNULGlCQURTLENBQWI7QUFHQSw2QkFBWSxDQUNSLGVBRFEsRUFFUixtQkFGUSxFQUdSLGtCQUhRLENBQVo7QUFLQSxtQ0FBa0IsSUFBbEI7Y0FsQko7QUFvQkEsc0JBQVM7QUFDTCxxQ0FBb0IsSUFBcEI7Y0FESjtVQXhEQTs7OztBQWR5QixlQTZFN0IsQ0FBTyxtQkFBUCxDQUEyQixXQUEzQixFQUF3QyxPQUF4QyxDQUFnRCxVQUFVLFVBQVYsRUFBc0I7QUFDbEUsaUJBQUksT0FBTyxVQUFQLENBQUosRUFBd0I7QUFDcEIsd0JBQU8sVUFBUCxFQUFtQixZQUFZLFVBQVosQ0FBbkIsRUFEb0I7Y0FBeEI7VUFENEMsQ0FBaEQsQ0E3RTZCOztBQW1GN0IsZ0JBQU8sRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFlBQVk7O0FBRXBDLGlCQUFJLHFCQUFxQixPQUFPLFVBQVAsQ0FBa0IsUUFBbEIsRUFBckIsQ0FGZ0M7QUFHcEMsaUJBQUksbUJBQW1CLElBQW5CLENBSGdDO0FBSXBDLGtCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBbUIsTUFBbkIsRUFBMkIsR0FBL0MsRUFBb0Q7QUFDaEQscUJBQUksbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLE1BQThCLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixHQUEyQixTQUEzQixDQUFxQyxPQUFyQyxDQUE2QyxxQkFBN0MsTUFBd0UsQ0FBQyxDQUFELEVBQUk7QUFDMUcseUJBQUksZ0JBQWdCLG1CQUFtQixDQUFuQixDQUFoQixDQURzRztBQUUxRyx5QkFBSSxnQkFBZ0IsY0FBYyxRQUFkLEVBQWhCLENBRnNHOztnREFHakc7QUFDTCw2QkFBSSxZQUFZLGNBQWMsQ0FBZCxDQUFaO0FBQ0osbUNBQVUsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBTTtBQUN4Qiw2Q0FBZ0IsU0FBaEIsRUFEd0I7MEJBQU4sQ0FBdEI7dUJBTHNHOztBQUcxRywwQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBYyxNQUFkLEVBQXNCLEdBQTFDLEVBQStDOytCQUF0QyxHQUFzQztzQkFBL0M7a0JBSEo7Y0FESjtVQUp3QixDQUE1QixDQW5GNkI7O0FBcUc3QixnQkFBTyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsWUFBWTtBQUNwQyxvQkFBTyxhQUFQLENBQXFCLE1BQXJCLEdBRG9DO0FBRXBDLG9CQUFPLGlCQUFQLENBQXlCLE1BQXpCLEdBRm9DO1VBQVosQ0FBNUIsQ0FyRzZCOztBQTBHN0Isa0JBQVMsZUFBVCxDQUF5QixTQUF6QixFQUFvQztBQUNoQyxpQkFBSSxxQkFBcUIsT0FBTyxVQUFQLENBQWtCLFFBQWxCLEVBQXJCLENBRDRCO0FBRWhDLGlCQUFJLG1CQUFtQixJQUFuQixDQUY0QjtBQUdoQyxrQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksbUJBQW1CLE1BQW5CLEVBQTJCLEdBQS9DLEVBQW9EO0FBQ2hELHFCQUFJLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixNQUE4QixtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsR0FBMkIsU0FBM0IsQ0FBcUMsT0FBckMsQ0FBNkMscUJBQTdDLE1BQXdFLENBQUMsQ0FBRCxFQUFJO0FBQzFHLHlCQUFJLGdCQUFnQixtQkFBbUIsQ0FBbkIsQ0FBaEIsQ0FEc0c7QUFFMUcseUJBQUksZ0JBQWdCLGNBQWMsUUFBZCxFQUFoQixDQUZzRztBQUcxRywwQkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBYyxNQUFkLEVBQXNCLEdBQTFDLEVBQStDO0FBQzNDLDZCQUFJLGNBQWMsQ0FBZCxNQUFxQixTQUFyQixJQUFrQyxjQUFjLENBQWQsRUFBaUIsYUFBakIsRUFBZ0M7QUFDbEUsMkNBQWMsQ0FBZCxFQUFpQixhQUFqQixHQURrRTswQkFBdEU7c0JBREo7a0JBSEo7Y0FESjtVQUhKO01BMUdFO0VBRGEsQ0FBdkI7Ozs7OztBQWlJQSxLQUFJLGdCQUFKLENBQXFCLFNBQXJCLENBQStCLE9BQS9CLEdBQXlDLFlBQVksRUFBWjs7Ozs7QUFLekMsS0FBSSxpQkFBSixDQUFzQixrQkFBdEIsRUFBMEMsSUFBSSxnQkFBSixDQUExQzs7QUFFQSxLQUFJLFlBQUosQ0FBaUIsWUFBakIsRUFBK0IsU0FBL0IsQ0FBeUMsUUFBekMsR0FBb0Q7QUFDaEQsZ0JBQVcsTUFBWDtBQUNBLGVBQVU7QUFDTix1QkFBYyxFQUFkO0FBQ0EsK0JBQXNCLEVBQXRCO0FBQ0Esd0JBQWUsRUFBZjtBQUNBLDRCQUFtQixFQUFuQjtBQUNBLGlDQUF3QixFQUF4QjtBQUNBLHdCQUFlLEVBQWY7QUFDQSw0QkFBbUIsRUFBbkI7QUFDQSw2QkFBb0IsRUFBcEI7QUFDQSwwQkFBaUIsRUFBakI7QUFDQSwyQkFBa0IsRUFBbEI7QUFDQSw2QkFBb0IsRUFBcEI7QUFDQSwwQkFBaUIsRUFBakI7QUFDQSw4QkFBcUI7QUFDakIsc0JBQVMsQ0FDTCxxQkFESyxFQUVMLHVCQUZLLEVBR0wsdUJBSEssRUFJTCxlQUpLLENBQVQ7VUFESjtNQWJKO0VBRko7O0FBMEJBLFNBQVEsWUFBUixDQUFxQixTQUFyQixFQUFnQyxTQUFoQyxDQUEwQyxRQUExQyxHQUFxRDtBQUNqRCxlQUFVLENBQ1IsaUJBRFEsRUFFUixrQkFGUSxFQUdSLGlCQUhRLEVBSVIsWUFKUSxDQUFWO0FBTUEsZ0JBQVcsaUJBQVg7QUFDQSxtQkFBYyxZQUFkO0VBUkosQzs7Ozs7OztBQzFLQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BLEtBQU0sWUFBWSxRQUFRLFlBQVIsQ0FBcUIsV0FBckIsQ0FBWjtBQUNOLEtBQU0sU0FBUyxRQUFRLFlBQVIsQ0FBcUIsUUFBckIsQ0FBVDs7QUFFTixxQkFBUSxHQUFSOztLQUVNOzs7QUFDRiwyQkFBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCOzs7QUFDekIsaUJBQVEsSUFBUixHQUFlLGNBQWYsQ0FEeUI7NEhBRW5CLFFBQVEsVUFGVztNQUE3Qjs7Ozt5Q0FLZ0I7QUFDWixtS0FEWTs7Ozt1Q0FJRjtBQUNWLGtCQUFLLE1BQUwsR0FBYyxPQUFkLENBQXNCLGNBQXRCLEVBRFU7Ozs7O0dBVlM7O0FBZTNCLGNBQWEsU0FBYixDQUF1QixZQUF2QixHQUFzQyxRQUF0QztBQUNBLFNBQVEsaUJBQVIsQ0FBMEIsY0FBMUIsRUFBMEMsWUFBMUM7O0FBRUEsS0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFVLE9BQVYsRUFBbUI7QUFDcEMsU0FBSSxTQUFTLElBQVQsQ0FEZ0M7QUFFcEMsU0FBSSxlQUFlLENBQUMsQ0FBQyxPQUFELEdBQVcsUUFBUSxZQUFSLEdBQXVCLElBQW5DLENBRmlCOztBQUlwQyxZQUFPLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixZQUFZO0FBQ3BDLGFBQUkscUJBQXFCLE9BQU8sVUFBUCxDQUFrQixRQUFsQixFQUFyQixDQURnQztBQUVwQyxhQUFJLGVBQWUsSUFBZixDQUZnQztBQUdwQyxjQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBbUIsTUFBbkIsRUFBMkIsR0FBL0MsRUFBb0Q7QUFDaEQsaUJBQUksbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLE1BQThCLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixHQUEyQixTQUEzQixLQUF5QywyQkFBekMsRUFBc0U7QUFDcEcscUJBQUksa0JBQWtCLE9BQU8sVUFBUCxDQUFrQixRQUFsQixHQUE2QixDQUE3QixDQUFsQixDQURnRztBQUVwRyxxQkFBSSxlQUFlLEtBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixjQUF6QixFQUF5QyxPQUF6QyxDQUFmLENBRmdHO0FBR3BHLGdDQUFlLGdCQUFnQixFQUFoQixHQUFxQixZQUFyQixDQUFrQyxhQUFhLEVBQWIsRUFBbEMsRUFBcUQsT0FBTyxVQUFQLENBQWtCLGFBQWxCLENBQWdDLEVBQWhDLEVBQXJELENBQWYsQ0FIb0c7Y0FBeEc7QUFLQSxpQkFBSSxZQUFKLEVBQWtCO0FBQ2Qsd0JBQU8sVUFBUCxDQUFrQixZQUFsQixHQUFpQyxZQUFqQyxDQURjO2NBQWxCO1VBTko7TUFId0IsQ0FBNUIsQ0FKb0M7RUFBbkI7O0FBb0JyQixTQUFRLE1BQVIsQ0FBZSxjQUFmLEVBQStCLFlBQS9CLEU7Ozs7Ozs7QUNqREEsMEMiLCJmaWxlIjoiYnVuZGxlcy9EZWJ1Zy9wbGF5ZXItc2tpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBsYXllci1za2luXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBsYXllci1za2luXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5N2E1NzEyMjdjZjk5NTZhNjUzYlxuICoqLyIsInJlcXVpcmUoXCIuL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9TdHJlYW1JY29uL1N0cmVhbUljb24uanNcIik7XHJcbnJlcXVpcmUoXCIuL1RoZWF0ZXJNb2RlL1RoZWF0ZXJNb2RlLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9DYXB0aW9uU3VidGl0bGUvT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0uanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25TZXR0aW5ncy9DYXB0aW9uU2V0dGluZ3MuanNcIik7XHJcbnJlcXVpcmUoXCIuL0NhcHRpb25TdWJ0aXRsZS9DYXB0aW9uU3VidGl0bGVcIik7XHJcbnJlcXVpcmUoXCIuL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanNcIik7XHJcbnJlcXVpcmUoXCIuL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9DYXB0aW9uVG9nZ2xlL0NhcHRpb25Ub2dnbGUuanNcIik7XHJcbnJlcXVpcmUoXCIuL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5qc1wiKTtcclxucmVxdWlyZShcIi4vU3RyZWFtU2tpblBsdWdpbi9hbXBPdmVycmlkZXMuanNcIik7XHJcbnJlcXVpcmUoXCIuL1BsYXllckxvY1N0cmluZ3MuanNcIik7XHJcbnJlcXVpcmUoXCIuL1N0cmVhbVNraW5QbHVnaW4vU3RyZWFtU2tpblBsdWdpbi5qc1wiKTtcclxucmVxdWlyZShcIi4vU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5qc1wiKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvUGxheWVyUGx1Z2luLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL3N0eWxlcy90aGVtZXMvc3RyZWFtLXNraW4vbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG5yZXF1aXJlKFwiLi9TdHJlYW1JY29uLnNjc3NcIik7XHJcblxyXG5jbGFzcyBTdHJlYW1JY29uQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMubmFtZSA9ICdzdHJlYW1JY29uQnV0dG9uJztcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ1ZpZXcgaW4gU3RyZWFtIGJ1dHRvbicpKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENTU0NsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBgYW1wLXN0cmVhbS1pY29uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgbGV0IGV4dGVybmFsTGluayA9ICEhdGhpcy5vcHRpb25zICYmICEhdGhpcy5vcHRpb25zKCkgPyB0aGlzLm9wdGlvbnMoKS5leHRlcm5hbExpbmsgOiBudWxsO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGV4dGVybmFsTGluaywgXCJfYmxhbmtcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5TdHJlYW1JY29uQnV0dG9uLnByb3RvdHlwZS5jb250cm9sVGV4dF8gPSAnVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtJztcclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnU3RyZWFtSWNvbkJ1dHRvbicsIFN0cmVhbUljb25CdXR0b24pO1xyXG5cclxuY29uc3QgU3RyZWFtSWNvblBsdWdpbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBsZXQgcGxheWVyID0gdGhpcztcclxuICAgIGxldCBleHRlcm5hbExpbmsgPSAhIW9wdGlvbnMgPyBvcHRpb25zLmV4dGVybmFsTGluayA6IG51bGw7XHJcblxyXG4gICAgcGxheWVyLm9uKFwibG9hZGVkbWV0YWRhdGFcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBzdHJlYW1JY29uQnV0dG9uID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xCYXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lID09PSBcImFtcC1jb250cm9sYmFyaWNvbnMtcmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0Q29udHJvbEJhciA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKClbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyZWFtaWNvbkJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnU3RyZWFtSWNvbkJ1dHRvbicsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtSWNvbkJ1dHRvbiA9IHJpZ2h0Q29udHJvbEJhci5hZGRDaGlsZChzdHJlYW1pY29uQnV0dG9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RyZWFtSWNvbkJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuc3RyZWFtSWNvbkJ1dHRvbiA9IHN0cmVhbUljb25CdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZpZGVvanMucGx1Z2luKCdzdHJlYW1JY29uUGx1Z2luJywgU3RyZWFtSWNvblBsdWdpbik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtSWNvbi9TdHJlYW1JY29uLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1N0cmVhbUljb24vU3RyZWFtSWNvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQnV0dG9uJyk7XHJcblxyXG5yZXF1aXJlKFwiLi9UaGVhdGVyTW9kZS5zY3NzXCIpO1xyXG5cclxuY2xhc3MgVGhlYXRlck1vZGVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gJ3RoZWF0ZXJNb2RlQnV0dG9uJztcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnVGhlYXRlciBtb2RlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtdGhlYXRlci1pY29uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUaGVhdGVyTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRoZWF0ZXJNb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKCdhbXAtdGhlYXRlci1leGl0LWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZXhpdFRoZWF0ZXJNb2RlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFRleHQodGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ1RoZWF0ZXIgbW9kZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2FtcC10aGVhdGVyLWV4aXQtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignZW50ZXJUaGVhdGVyTW9kZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xUZXh0KHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdFeGl0IHRoZWF0ZXIgbW9kZScpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ0V4aXQgdGhlYXRlciBtb2RlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuVGhlYXRlck1vZGVCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdUaGVhdGVyIG1vZGUnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdUaGVhdGVyTW9kZUJ1dHRvbicsIFRoZWF0ZXJNb2RlQnV0dG9uKTtcclxuXHJcbmNvbnN0IFRoZWF0ZXJNb2RlUGx1Z2luID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGxldCBwbGF5ZXIgPSB0aGlzO1xyXG4gICAgbGV0IGV4dGVybmFsTGluayA9ICEhb3B0aW9ucyA/IG9wdGlvbnMuZXh0ZXJuYWxMaW5rIDogbnVsbDtcclxuXHJcbiAgICBwbGF5ZXIub24oXCJsb2FkZWRtZXRhZGF0YVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoZWF0ZXJNb2RlQnV0dG9uID0gbnVsbDtcclxuICAgICAgICBsZXQgdGhlYXRlckJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpICYmIGNvbnRyb2xCYXJDaGlsZHJlbltpXS5lbCgpLmNsYXNzTmFtZSA9PT0gXCJhbXAtY29udHJvbGJhcmljb25zLXJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByaWdodENvbnRyb2xCYXIgPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhlYXRlckJ1dHRvbiA9IHRoaXMuY29udHJvbEJhci5hZGRDaGlsZCgnVGhlYXRlck1vZGVCdXR0b24nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoZWF0ZXJNb2RlQnV0dG9uID0gcmlnaHRDb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKHRoZWF0ZXJCdXR0b24uZWwoKSwgcGxheWVyLmNvbnRyb2xCYXIuZnVsbHNjcmVlblRvZ2dsZS5lbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhlYXRlck1vZGVCdXR0b24gJiYgdGhlYXRlckJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIudGhlYXRlck1vZGVCdXR0b24gPSB0aGVhdGVyQnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1JlZ2lzdGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgdGhlYXRlciBtb2RlIG91dHNpZGUgcGxheWVyXHJcbiAgICAgICAgICAgIHZpZGVvanMuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5wcm90b3R5cGUudG9nZ2xlVGhlYXRlck1vZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sQmFyLnRoZWF0ZXJNb2RlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sQmFyLnRoZWF0ZXJNb2RlQnV0dG9uLnRvZ2dsZVRoZWF0ZXJNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52aWRlb2pzLnBsdWdpbigndGhlYXRlck1vZGVQbHVnaW4nLCBUaGVhdGVyTW9kZVBsdWdpbik7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1RoZWF0ZXJNb2RlL1RoZWF0ZXJNb2RlLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1RoZWF0ZXJNb2RlL1RoZWF0ZXJNb2RlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5NDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IFRleHRUcmFja01lbnVJdGVtID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1RleHRUcmFja01lbnVJdGVtJyk7XHJcblxyXG5jbGFzcyBPZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbSBleHRlbmRzIFRleHRUcmFja01lbnVJdGVtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpe1xyXG4gICAgICAgIC8vIENyZWF0ZSBwc2V1ZG8gdHJhY2sgaW5mb1xyXG4gICAgICAgIC8vIFJlcXVpcmVzIG9wdGlvbnNbJ2tpbmQnXVxyXG4gICAgICAgIG9wdGlvbnNbJ3RyYWNrJ10gPSB7XHJcbiAgICAgICAgICAgICdraW5kJzogb3B0aW9uc1sna2luZCddLFxyXG4gICAgICAgICAgICAncGxheWVyJzogcGxheWVyLFxyXG4gICAgICAgICAgICAnbGFiZWwnOiAnT2ZmJyxcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBmYWxzZSxcclxuICAgICAgICAgICAgJ21vZGUnOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gTWVudUl0ZW0gaXMgc2VsZWN0YWJsZVxyXG4gICAgICAgIG9wdGlvbnNbJ3NlbGVjdGFibGUnXSA9IHRydWU7XHJcblxyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUcmFja3NDaGFuZ2UoZXZlbnQpe1xyXG4gICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcigpLnRleHRUcmFja3MoKTtcclxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRyYWNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrID0gdHJhY2tzW2ldO1xyXG4gICAgICAgICAgICBpZiAodHJhY2tbJ21vZGUnXSA9PT0gJ3Nob3dpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQoc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtJywgT2ZmQ2FwdGlvblN1YnRpdGxlTWVudUl0ZW0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TdWJ0aXRsZS9PZmZDYXB0aW9uU3VidGl0bGVNZW51SXRlbS5qc1xuICoqLyIsInJlcXVpcmUoJy4vQ2FwdGlvblNldHRpbmdzLnNjc3MnKTtcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgTWVudUJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51QnV0dG9uJyk7XHJcblxyXG5jbGFzcyBDYXB0aW9uU2V0dGluZ3NCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ0NhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzJykpO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICAgICAgaWYgKCF0cmFja3MgfHwgIXRyYWNrcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtY2FwdGlvbnMtc2V0dGluZ3MtYnV0dG9uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVudSgpIHtcclxuICAgICAgICBsZXQgbWVudSA9IG5ldyBDb21wb25lbnQodGhpcy5wbGF5ZXJfLCB7XHJcbiAgICAgICAgICAgIGVsOiB2aWRlb2pzLmNyZWF0ZUVsKCdsaScsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tZW51JyxcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiAtMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZW51LmZvY3VzID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5cclxuICAgICAgICBsZXQgbWVudVRpdGxlQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLnBsYXllcl8sIHtcclxuICAgICAgICAgICAgZWw6IHZpZGVvanMuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLW1lbnUtaGVhZGVyIGRpYWxvZy1oZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3MnKSksXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudVRpdGxlQ29tcG9uZW50Lm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRDaGlsZChtZW51VGl0bGVDb21wb25lbnQpO1xyXG4gICAgICAgIG1lbnUuYWRkQ2hpbGQobmV3IENhcHRpb25TZXR0aW5ncyh0aGlzLnBsYXllcl8pKTtcclxuXHJcbiAgICAgICAgbWVudS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgfVxyXG59XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NhcHRpb25TZXR0aW5nc0J1dHRvbicsIENhcHRpb25TZXR0aW5nc0J1dHRvbik7XHJcblxyXG5jbGFzcyBDYXB0aW9uU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKCdhbXAtbm9uLWNsaWNrYWJsZS1lbGVtZW50Jyk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnRleHRUcmFja1NldHRpbmdzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlc3NlZCA9IChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1wcmVzc2VkXCIpID09PSBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJnVHJhbnNwYXJlbmN5VG9nZ2xlKCFwcmVzc2VkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmRPcGFjaXR5JzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb250UGVyY2VudCc6ICcwLjc1JyxcclxuICAgICAgICAgICAgICAgICAgICAndGV4dENvbG9yVmFsdWUnOiAnd2hpdGVCbGFjaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dENvbG9yQ2hhbmdlZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0Q29sb3JUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgZGVmYXVsdHNcclxuICAgICAgICAgICAgc2V0RGVmYXVsdHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNfLnBlcnNpc3RUZXh0VHJhY2tTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4kKGAuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVCYWNrZ3JvdW5kVHJhbnNwYXJlbmN5LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtZm9udC1zaXplLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZURpc3BsYXkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCgnLmFtcC1mb250LWNvbG9yLWdyb3VwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZXh0Q29sb3JDaGFuZ2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1zZXR0aW5ncy1yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0RGVmYXVsdHMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbCgpIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2xpJywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbXAtY2FwdGlvbi1zZXR0aW5ncy1tZW51JyxcclxuICAgICAgICAgICAgcm9sZTogJ3ByZXNlbnRhdGlvbicsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogY2FwdGlvbk9wdGlvbnNNZW51VGVtcGxhdGUuY2FsbCh0aGlzLCB0aGlzLmlkXyksXHJcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gOSkge1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSB0aGlzLiQkKCcub3V0bGluZS1lbmFibGVkLWNvbnRyb2wnKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyXy5tb3JlT3B0aW9uc0J1dHRvbi5oaWRlRGlhbG9nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURpc3BsYXkoKSB7XHJcbiAgICAgICAgbGV0IHR0RGlzcGxheSA9IHRoaXMucGxheWVyXy5nZXRDaGlsZCgndGV4dFRyYWNrRGlzcGxheScpO1xyXG4gICAgICAgIGlmICh0dERpc3BsYXkpIHtcclxuICAgICAgICAgICAgdHREaXNwbGF5LnVwZGF0ZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZvbnRQZXJjZW50ID0gdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udFNpemVcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2xvclZhbHVlID0gdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBsZXQgZmdDb2xvcjtcclxuICAgICAgICBsZXQgYmdDb2xvcjtcclxuICAgICAgICBzd2l0Y2ggKHRleHRDb2xvclZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrV2hpdGUnOlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tMaWdodEdyYXknOlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjMzAyOTI2JztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnI2RkZGJkMyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2hpdGVHcmF5JzpcclxuICAgICAgICAgICAgICAgIGZnQ29sb3IgPSAnI2RkZGJkMyc7XHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yID0gJyMzMDI5MjYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlQmxhY2snOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZmdDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IgPSAnIzAwMDAwMCc7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJnVHJhbnNwYXJlbmN5ID0gdGhpcy4kKCcuYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5JykuZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKTtcclxuICAgICAgICBjb25zdCBiZ09wYWNpdHkgPSBiZ1RyYW5zcGFyZW5jeSA9PT0gJ3RydWUnID8gJzAnIDogJzEnO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAnYmFja2dyb3VuZE9wYWNpdHknOiBiZ09wYWNpdHksXHJcbiAgICAgICAgICAgICdjb2xvcic6IGZnQ29sb3IsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiBiZ0NvbG9yLFxyXG4gICAgICAgICAgICAnZm9udFBlcmNlbnQnOiBmb250UGVyY2VudCxcclxuICAgICAgICAgICAgJ3RleHRDb2xvclZhbHVlJzogdGV4dENvbG9yVmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0gPT09ICcnIHx8IHJlc3VsdFtuYW1lXSA9PT0gJ25vbmUnIHx8IChuYW1lID09PSAnZm9udFBlcmNlbnQnICYmIHJlc3VsdFtuYW1lXSA9PT0gMS4wMCkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZXModmFsdWVzKSB7XHJcbiAgICAgICAgdGhpcy4kKCdpbnB1dFtuYW1lPVwiZm9udENvbG9yXCJdW3ZhbHVlPVwiJyArIHZhbHVlcy50ZXh0Q29sb3JWYWx1ZSArICdcIl0nKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHRDb2xvclRleHQoKTtcclxuICAgICAgICB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250U2l6ZVwiXVt2YWx1ZT1cIicgKyB2YWx1ZXMuZm9udFBlcmNlbnQgKyAnXCJdJykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZSh2YWx1ZXMuYmdPcGFjaXR5ID09PSAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCZ1RyYW5zcGFyZW5jeVRvZ2dsZShpc1ByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLiQoYC5hbXAtY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3lgKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIiwgaXNQcmVzc2VkKTtcclxuICAgICAgICB0aGlzLiQoJy5hbXAtYmFja2dyb3VuZC10cmFuc3BhcmVuY3kgLnRvZ2dsZS12YWx1ZScpLmlubmVySFRNTCA9IGlzUHJlc3NlZCA/IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiT25cIikpIDogdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJPZmZcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRleHRDb2xvclRleHQoKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yVmFsdWUgPSB0aGlzLiQoJ2lucHV0W25hbWU9XCJmb250Q29sb3JcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yVGV4dCA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodGV4dENvbG9yVmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmxhY2tXaGl0ZSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHN0YW5kYXJkJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JsYWNrTGlnaHRHcmF5JzpcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3JUZXh0ID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoJ1NlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlR3JheSc6XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yVGV4dCA9IHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHNlcGlhJykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3doaXRlQmxhY2snOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnU3RhbmRhcmQnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQoJy5hbXAtY2FwdGlvbi1jb2xvci1zZWxlY3RlZC10ZXh0JykuaW5uZXJUZXh0ID0gdGhpcy5sb2NhbGl6ZShzZWxlY3RlZENvbG9yVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNldHRpbmdzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zXy5wZXJzaXN0VGV4dFRyYWNrU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2anMtdGV4dC10cmFjay1vcHRpb25zJywgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTZXR0aW5ncygpIHtcclxuICAgICAgICBsZXQgZXJyLCB2YWx1ZXM7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFtlcnIsIHZhbHVlc10gPSBzYWZlUGFyc2VUdXBsZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Zqcy10ZXh0LXRyYWNrLW9wdGlvbnMnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLndhcm4oZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXB0aW9uT3B0aW9uc01lbnVUZW1wbGF0ZSh1bmlxdWVJZCkge1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdhbXAtY2FwdGlvbi1zZXR0aW5nLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJyBpZD0nY2FwdGlvbnMtdGV4dC1zaXplLSR7dW5pcXVlSWR9Jz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiVGV4dCBzaXplOiBcIikpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uLWdyb3VwIGFtcC1mb250LXNpemUtZ3JvdXAnIHJvbGU9J3JhZGlvZ3JvdXAnIGFyaWEtbGFiZWxsZWRieT0nY2FwdGlvbnMtdGV4dC1zaXplLSR7dW5pcXVlSWR9Jz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtc2l6ZScgcm9sZT0ncmFkaW8nIGFyaWEtbGFiZWxsZWRieT0nY2FwdGlvbnMtdGV4dC1zaXplLXNtYWxsLSR7dW5pcXVlSWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRTaXplJyB2YWx1ZT0nMC43NScgY2xhc3MgPSdvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgYXJpYS1zZXRzaXplPSczJyBhcmlhLXBvc2luc2V0PScxJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdjYXB0aW9ucy10ZXh0LXNpemUtc21hbGwtJHt1bmlxdWVJZH0nPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJTbWFsbFwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtc2l6ZScgcm9sZT0ncmFkaW8nIGFyaWEtbGFiZWxsZWRieT0nY2FwdGlvbnMtdGV4dC1zaXplLW1lZGl1bS0ke3VuaXF1ZUlkfSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdmb250U2l6ZScgdmFsdWU9JzEuMDAnIGNsYXNzID0nb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtc2V0c2l6ZT0nMycgYXJpYS1wb3NpbnNldD0nMicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD0nY2FwdGlvbnMtdGV4dC1zaXplLW1lZGl1bS0ke3VuaXF1ZUlkfSc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIk1lZGl1bVwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtc2l6ZScgcm9sZT0ncmFkaW8nIGFyaWEtbGFiZWxsZWRieT0nY2FwdGlvbnMtdGV4dC1zaXplLWxhcmdlLSR7dW5pcXVlSWR9Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRTaXplJyB2YWx1ZT0nMS41MCcgY2xhc3MgPSdvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgYXJpYS1zZXRzaXplPSczJyBhcmlhLXBvc2luc2V0PSczJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2NhcHRpb25zLXRleHQtc2l6ZS1sYXJnZS0ke3VuaXF1ZUlkfSc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIkxhcmdlXCIpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJyBmb3I9J2NhcHRpb25zLXRleHQtY29sb3ItJHt1bmlxdWVJZH0nPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJUZXh0IGNvbG9yOiBcIikpfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3MgPSdhbXAtY2FwdGlvbi1jb2xvci1zZWxlY3RlZC10ZXh0Jz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSdhbXAtcmFkaW8tYnV0dG9uLWdyb3VwIGFtcC1mb250LWNvbG9yLWdyb3VwJyBpZD0nY2FwdGlvbi10ZXh0LWNvbG9yLSR7dW5pcXVlSWR9JyByb2xlPSdyYWRpb2dyb3VwJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoXCJUZXh0IGNvbG9yOiBcIil9Jz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtY29sb3InIHJvbGU9J3JhZGlvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J3doaXRlQmxhY2snIGFyaWEtc2V0c2l6ZT0nNCcgYXJpYS1wb3NpbnNldD0nMScgY2xhc3MgPSdhbXAtZm9udC1jb2xvci13aGl0ZUJsYWNrIG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsPScke3RoaXMubG9jYWxpemUoJ1N0YW5kYXJkJyl9Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtY29sb3InIHJvbGU9J3JhZGlvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J3doaXRlR3JheScgYXJpYS1zZXRzaXplPSc0JyBhcmlhLXBvc2luc2V0PScyJyBjbGFzcyA9J2FtcC1mb250LWNvbG9yLXdoaXRlR3JheSBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcgYXJpYS1sYWJlbD0nJHt0aGlzLmxvY2FsaXplKCdSZXZlcnNlIHNlcGlhJyl9Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1yYWRpby1idXR0b24gYW1wLWZvbnQtY29sb3InIHJvbGU9J3JhZGlvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2ZvbnRDb2xvcicgdmFsdWU9J2JsYWNrTGlnaHRHcmF5JyBhcmlhLXNldHNpemU9JzQnIGFyaWEtcG9zaW5zZXQ9JzMnIGNsYXNzID0nYW1wLWZvbnQtY29sb3ItYmxhY2tMaWdodEdyYXkgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtbGFiZWw9JyR7dGhpcy5sb2NhbGl6ZSgnU2VwaWEnKX0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzID0nYW1wLXJhZGlvLWJ1dHRvbiBhbXAtZm9udC1jb2xvcicgcm9sZT0ncmFkaW8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZm9udENvbG9yJyB2YWx1ZT0nYmxhY2tXaGl0ZScgYXJpYS1zZXRzaXplPSc0JyBhcmlhLXBvc2luc2V0PSc0JyBjbGFzcyA9J2FtcC1mb250LWNvbG9yLWJsYWNrV2hpdGUgb3V0bGluZS1lbmFibGVkLWNvbnRyb2wnIGFyaWEtbGFiZWw9JyR7dGhpcy5sb2NhbGl6ZSgnUmV2ZXJzZSBzdGFuZGFyZCcpfScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9J2FtcC1iYWNrZ3JvdW5kLXRyYW5zcGFyZW5jeSBhbXAtcm93LXdpdGgtYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsJyBpZD0nY2FwdGlvbnMtYmFja2dyb3VuZC10cmFuc3BhcmVuY3ktbGFiZWwtJHt1bmlxdWVJZH0nPiR7dGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUoXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiKSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FtcC10b2dnbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGNsYXNzID0nYW1wLWNhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5IG91dGxpbmUtZW5hYmxlZC1jb250cm9sJyBhcmlhLWxhYmVsbGVkYnk9J2NhcHRpb25zLWJhY2tncm91bmQtdHJhbnNwYXJlbmN5LWxhYmVsLSR7dW5pcXVlSWR9Jz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcyA9J3RvZ2dsZS12YWx1ZSc+JHt0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIk9mZlwiKSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0nYW1wLWNhcHRpb24tc2V0dGluZ3MtcmVzZXQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcyA9J2FtcC1jYXB0aW9uLXNldHRpbmdzLXJlc2V0IGFtcC1jYXB0aW9uLXNldHRpbmdzLWxhYmVsIG91dGxpbmUtZW5hYmxlZC1jb250cm9sJz4ke3RoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKFwiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIikpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25TZXR0aW5ncy9DYXB0aW9uU2V0dGluZ3MuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblNldHRpbmdzL0NhcHRpb25TZXR0aW5ncy5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5jb25zdCBUZXh0VHJhY2tCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnVGV4dFRyYWNrQnV0dG9uJyk7XHJcbmNvbnN0IE9mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ09mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtJyk7XHJcbmNvbnN0IFRleHRUcmFja01lbnVJdGVtID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1RleHRUcmFja01lbnVJdGVtJyk7XHJcblxyXG5jbGFzcyBDYXB0aW9uU3VidGl0bGVCdXR0b24gZXh0ZW5kcyBUZXh0VHJhY2tCdXR0b24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucywgcmVhZHkpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMsIHJlYWR5KTtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYHZqcy1jYXB0aW9ucy1zdWJ0aXRsZXMtYnV0dG9uICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICBpZiAoIXRyYWNrcyB8fCAhdHJhY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtcyhpdGVtcykge1xyXG4gICAgICAgIGl0ZW1zID0gaXRlbXMgfHwgW107XHJcblxyXG4gICAgICAgIHZhciBtZW51VGl0bGVDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMucGxheWVyXywge1xyXG4gICAgICAgICAgICBlbDogdmlkZW9qcy5jcmVhdGVFbCgnbGknLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhbXAtbWVudS1oZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSgnQ2FwdGlvbnMgLyBTdWJ0aXRsZXMnKSksXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdGVtcy5wdXNoKG1lbnVUaXRsZUNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3IE9mZkNhcHRpb25TdWJ0aXRsZU1lbnVJdGVtKHRoaXMucGxheWVyXywgeyAna2luZCc6IHRoaXMua2luZF8gfSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG4gICAgICAgIGlmICghdHJhY2tzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIG9ubHkgYWRkIHRyYWNrcyB0aGF0IGFyZSBvZiB0aGUgYXBwcm9wcmlhdGUga2luZCBhbmQgaGF2ZSBhIGxhYmVsXHJcbiAgICAgICAgICAgIGlmICh0cmFja1sna2luZCddID09PSAnc3VidGl0bGVzJyB8fCB0cmFja1sna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJhY2tJdGVtID0gbmV3IFRleHRUcmFja01lbnVJdGVtKHRoaXMucGxheWVyXywge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1lbnVJdGVtIGlzIHNlbGVjdGFibGVcclxuICAgICAgICAgICAgICAgICAgICAnc2VsZWN0YWJsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYWNrJzogdHJhY2tcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0cmFja1sna2luZCddID09PSAnY2FwdGlvbnMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tJdGVtLmVsXy5pbm5lckhUTUwgPSB0cmFja0l0ZW0uZWxfLmlubmVySFRNTCArICcgJyArIHRoaXMubG9jYWxpemUoJ0NDJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gdHJhY2tJdGVtLm9wdGlvbnNfWydsYWJlbCddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrSXRlbS5vcHRpb25zX1snbGFiZWwnXSA9IGxhYmVsICsgdGhpcy5sb2NhbGl6ZSgnIFtDQ10nKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja0l0ZW0uZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICBsYWJlbCArIHRoaXMubG9jYWxpemUoJyBbQ0NdJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godHJhY2tJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNhcHRpb25TdWJ0aXRsZUJ1dHRvbi5wcm90b3R5cGUua2luZF8gPSAndGV4dHRyYWNrcyc7XHJcblxyXG5UZXh0VHJhY2tNZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgbGV0IHRyYWNrcyA9IHRoaXMucGxheWVyXy50ZXh0VHJhY2tzKCk7XHJcblxyXG4gICAgaWYgKCF0cmFja3MpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gIT09IFwic3VidGl0bGVzXCIgJiYgdHJhY2tbJ2tpbmQnXSAhPT0gXCJjYXB0aW9uc1wiICYmIHRyYWNrWydraW5kJ10gIT09ICd0ZXh0dHJhY2tzJykge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFjayA9PT0gdGhpcy50cmFjaykge1xyXG4gICAgICAgICAgICB0cmFja1snbW9kZSddID0gJ3Nob3dpbmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYWNrWydtb2RlJ10gPSAnZGlzYWJsZWQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJfLmNhcHRpb25Ub2dnbGUudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnQ2FwdGlvblN1YnRpdGxlQnV0dG9uJywgQ2FwdGlvblN1YnRpdGxlQnV0dG9uKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9DYXB0aW9uU3VidGl0bGUvQ2FwdGlvblN1YnRpdGxlLmpzXG4gKiovIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8Y29weXJpZ2h0IGNvbXBhbnk9XCJNaWNyb3NvZnQgQ29ycG9yYXRpb25cIj5cclxuLy8gICAgICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gPC9jb3B5cmlnaHQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVJdGVtJyk7XHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuXHJcbmNsYXNzIE1vcmVPcHRpb25zTWVudUl0ZW0gZXh0ZW5kcyBNZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zLCBlbnRyeSwgbWVudUJ1dHRvbikge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24gPSBtZW51QnV0dG9uO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5kaWFsb2c7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IHRoaXMuc2V0dGluZ3NCdXR0b24ubWVudTtcclxuICAgICAgICB0aGlzLnBhbmVsID0gdGhpcy5kaWFsb2cuZ2V0Q2hpbGQoJ3NldHRpbmdzUGFuZWwnKTtcclxuICAgICAgICB0aGlzLnBhbmVsQ2hpbGQgPSB0aGlzLnBhbmVsLmdldENoaWxkKCdzZXR0aW5nc1BhbmVsQ2hpbGQnKTtcclxuICAgICAgICB0aGlzLnBhbmVsQ2hpbGRFbCA9IHRoaXMucGFuZWxDaGlsZC5lbF87XHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgc3RhdGUgb2Ygd2hhdCBtZW51IHR5cGUgaXMgbG9hZGluZyBuZXh0XHJcbiAgICAgICAgdGhpcy5tZW51VG9Mb2FkID0gJ21haW5tZW51JztcclxuXHJcbiAgICAgICAgY29uc3Qgc3ViTWVudU5hbWUgPSBlbnRyeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVudHJ5LnNsaWNlKDEpO1xyXG4gICAgICAgIGNvbnN0IFN1Yk1lbnVDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudChzdWJNZW51TmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghU3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCAke3N1Yk1lbnVOYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Yk1lbnUgPSBuZXcgU3ViTWVudUNvbXBvbmVudCh0aGlzLnBsYXllcigpLCBvcHRpb25zLCBtZW51QnV0dG9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFwcGVuZFN1Yk1lbnVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzKCk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICAvLyBvdmVycmlkZSBNZW51QnV0dG9ucyBrZXlQcmVzcyBFdmVudCB0byBub3QgcHJldmVudCBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmhhbmRsZUtleVByZXNzID0gdGhpcy5vbktleVByZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51S2V5UHJlc3NIYW5kbGVyID0gdGhpcy5vblN1Yk1lbnVLZXlQcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3VibWVudUNsaWNrSGFuZGxlciA9IHRoaXMub25TdWJtZW51Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyID0gdGhpcy5vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyIHx8IGV2ZW50LndoaWNoID09PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDI3IHx8IGV2ZW50LndoaWNoID09PSA5KSB7IC8vIGVzYyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJNZW51S2V5UHJlc3MoZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LndoaWNoID09PSAxMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy9ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5vblN1Ym1lbnVDbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3IHx8IChldmVudC53aGljaCA9PT0gOSAmJiBldmVudC50YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoXCJkaWFsb2ctaGVhZGVyXCIpID09PSAtMSkpIHsgLy8gZXNjIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5oaWRlRGlhbG9nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1lbnVDbGljayhldmVudCkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RhcCcpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmpzLWJhY2stYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTWFpbk1lbnUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0J1dHRvbi5lbF8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRvIHVwZGF0ZSB0aGUgc3ViIG1lbnUgdmFsdWUgb24gY2xpY2ssIHNldFRpbWVvdXQgaXMgbmVlZGVkIGJlY2F1c2VcclxuICAgICAgICAvLyB1cGRhdGluZyB0aGUgdmFsdWUgaXMgbm90IGluc3RhbnRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoZXZlbnQpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdmlkZW9qcy5jcmVhdGVFbCgnbGknLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tZW51LWl0ZW0nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3Mtc3ViLW1lbnUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRTdWJNZW51QnV0dG9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N1Yk1lbnVUaXRsZUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51LXRpdGxlJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1Yk1lbnUuZWxfLmFwcGVuZENoaWxkKHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8pO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3Mtc3ViLW1lbnUtdmFsdWUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViTWVudS5lbF8uYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVWYWx1ZUVsXyk7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51LnJlbW92ZUNsYXNzKFwidmpzLWNvbnRyb2xcIik7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51LmFkZENsYXNzKFwidmpzLW1lbnUtaXRlbVwiKTtcclxuICAgICAgICB0aGlzLmVsXyA9IHRoaXMuc3ViTWVudS5lbF87XHJcbiAgICAgICAgdGhpcy5lbF8udGFiSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLm9uKFsndGFwJywgJ2NsaWNrJ10sIHRoaXMuaGFuZGxlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVLZXlQcmVzcyhldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQud2hpY2ggPT0gOSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLmhpZGVEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmhhbmRsZUtleVByZXNzKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51VG9Mb2FkID0gJ3N1Ym1lbnUnO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvcGVuIGNsYXNzIHRvIGVuc3VyZSBvbmx5IHRoZSBvcGVuIHN1Ym1lbnUgZ2V0cyB0aGlzIGNsYXNzXHJcbiAgICAgICAgdmlkZW9qcy5yZW1vdmVDbGFzcyh0aGlzLmVsXywgJ29wZW4nKTtcclxuXHJcbiAgICAgICAgc3VwZXIuaGFuZGxlQ2xpY2soKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluTWVudS5lbF8uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAvLyBXZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSB2anMtaGlkZGVuIGNsYXNzIG9uIHRoZSBzZXR0aW5nc1N1Yk1lbnVFbCBlbGVtZW50XHJcbiAgICAgICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgdmlkZW9qcy5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbiBub3QgcGxheWVkIHdpdGhvdXQgdGltZW91dFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5tYXJnaW5SaWdodCA9ICcwcHgnO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uc2V0RGlhbG9nU2l6ZSh0aGlzLnNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Yk1lbnUubWVudS5jaGlsZHJlbl9bMF0uZWxfLmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja0J1dHRvbigpIHtcclxuICAgICAgICBsZXQgaGVhZGVyQ2hpbGQ7XHJcbiAgICAgICAgbGV0IGhlYWRlckNoaWxkSW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgYmFja0J1dHRvbjtcclxuICAgICAgICBsZXQgc3ViTWVudUNoaWxkcmVuID0gdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHN1Yk1lbnVDaGlsZHJlbltpXS5oYXNDbGFzcyhcImFtcC1tZW51LWhlYWRlclwiKSl7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDaGlsZCA9IHN1Yk1lbnVDaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGhlYWRlckNoaWxkSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGhlYWRlckNoaWxkKXtcclxuICAgICAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUucmVtb3ZlQ2hpbGQoaGVhZGVyQ2hpbGQpOy8vLmNoaWxkcmVuXy5zcGxpY2UoaGVhZGVyQ2hpbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24gPSB0aGlzLnN1Yk1lbnUubWVudS5hZGRDaGlsZCgnTWVudUl0ZW0nLCB7fSwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b24uZWxfLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInZqcy1iYWNrLWJ1dHRvbi10ZXh0XCI+JyArIHRoaXMuaHRtbEVuY29kZSh0aGlzLmxvY2FsaXplKGhlYWRlckNoaWxkLmVsXy5pbm5lckhUTUwpKSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICBpZihoZWFkZXJDaGlsZC5oYXNDbGFzcyhcImRpYWxvZy1oZWFkZXJcIikpe1xyXG4gICAgICAgICAgICAgICAgYmFja0J1dHRvbi5hZGRDbGFzcyhcImRpYWxvZy1oZWFkZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYmFja0J1dHRvbiA9IHRoaXMuc3ViTWVudS5tZW51LmFkZENoaWxkKCdNZW51SXRlbScsIHt9LCAwKTtcclxuICAgICAgICAgICAgYmFja0J1dHRvbi5lbF8uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPicgKyB0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZShcIkJhY2sgdG8gbWFpbiBtZW51XCIpKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgYmFja0J1dHRvbi5lbF8uaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhY2tCdXR0b24ubmFtZV8gPSAnQmFja0J1dHRvbic7XHJcbiAgICAgICAgYmFja0J1dHRvbi5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sb2NhbGl6ZSgnQmFjayB0byBtYWluIG1lbnUnKSk7XHJcbiAgICAgICAgYmFja0J1dHRvbi5hZGRDbGFzcygndmpzLWJhY2stYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJlZml4ZWRFdmVudChlbGVtZW50LCB0eXBlLCBjYWxsYmFjaywgYWN0aW9uID0gJ2FkZEV2ZW50Jykge1xyXG4gICAgICAgIGxldCBwcmVmaXggPSBbJ3dlYmtpdCcsICdtb3onLCAnTVMnLCAnbycsICcnXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwcmVmaXgubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgaWYgKCFwcmVmaXhbcF0pIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdhZGRFdmVudCcpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihwcmVmaXhbcF0gKyB0eXBlLCBjYWxsYmFjaywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3JlbW92ZUV2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHByZWZpeFtwXSArIHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSAhPT0gJ21hcmdpbi1yaWdodCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVudVRvTG9hZCA9PT0gJ21haW5tZW51Jykge1xyXG4gICAgICAgICAgICAvLyBoaWRlIHN1Ym1lbnVcclxuICAgICAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgdG8gMFxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB2aWRlb2pzLmFkZENsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5zZXRNYXJnaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFpbk1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51VG9Mb2FkID0gJ21haW5tZW51JztcclxuICAgICAgICB0aGlzLm1haW5NZW51LnNob3coKTtcclxuICAgICAgICB0aGlzLm1haW5NZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cclxuICAgICAgICAvLyBiYWNrIGJ1dHRvbiB3aWxsIGFsd2F5cyB0YWtlIHlvdSB0byBtYWluIG1lbnUsIHNvIHNldCBkaWFsb2cgc2l6ZXNcclxuICAgICAgICB0aGlzLnNldHRpbmdzQnV0dG9uLnNldERpYWxvZ1NpemUoW3RoaXMubWFpbk1lbnUud2lkdGgsIHRoaXMubWFpbk1lbnUuaGVpZ2h0XSk7XHJcblxyXG4gICAgICAgIC8vIGFuaW1hdGlvbiBub3QgdHJpZ2dlcmVkIHdpdGhvdXQgdGltZW91dCAoc29tZSBhc3luYyBzdHVmZiA/IT8pXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFuaXRtYXRlIG1hcmdpbiBhbmQgb3BhY2l0eSBiZWZvcmUgaGlkaW5nIHRoZSBzdWJtZW51XHJcbiAgICAgICAgICAgIC8vIHRoaXMgdHJpZ2dlcnMgQ1NTIFRyYW5zaXRpb24gZXZlbnRcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVudS5lbF8uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVudS5mb2N1cygpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8uaW5uZXJIVE1MID0gdGhpcy5odG1sRW5jb2RlKHRoaXMubG9jYWxpemUodGhpcy5zdWJNZW51LmNvbnRyb2xUZXh0XyB8fCB0aGlzLnN1Yk1lbnUuYnV0dG9uVGV4dCkpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLmFwcGVuZENoaWxkKHRoaXMuc3ViTWVudS5tZW51LmVsXyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkRWwuYXBwZW5kQ2hpbGQodGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja0J1dHRvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0gPSB0aGlzLnN1Yk1lbnU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyW3RoaXMuc3ViTWVudS5uYW1lKCldLnNldEluaXRpYWxWYWx1ZXMpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXJbdGhpcy5zdWJNZW51Lm5hbWUoKV0uc2V0SW5pdGlhbFZhbHVlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRTaXplKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdWJNZW51Lmhhc0NsYXNzKFwidmpzLWhpZGRlblwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByZWZpeGVkIGV2ZW50IGxpc3RlbmVycyBmb3IgQ1NTIFRyYW5zaXRpb25FbmRcclxuICAgICAgICB0aGlzLlByZWZpeGVkRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLFxyXG4gICAgICAgICAgICAnVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgICdhZGRFdmVudCdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAgICogVXBkYXRlIHRoZSBzdWIgbWVudXNcclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAbWV0aG9kIHVwZGF0ZVxyXG4gICAgICAgICovXHJcbiAgICB1cGRhdGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc3ViTWVudSA9IHRoaXMuc3ViTWVudS5uYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAndGFwJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW5fLmZvckVhY2goKHN1Yk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKHN1Yk1lbnVJdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ViTWVudUl0ZW0uaGFzQ2xhc3MoJ3Zqcy1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfLmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoc3ViTWVudUl0ZW0ub3B0aW9uc18ubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJNZW51LmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zqcy1iYWNrLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NCdXR0b24uaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ2xpY2tFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW4oKS5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgQ29tcG9uZW50KSB8fCBpdGVtLmhhc0NsYXNzKCdhbXAtbm9uLWNsaWNrYWJsZS1lbGVtZW50JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLm9uKFsndGFwJywgJ2NsaWNrJ10sIHRoaXMuc3VibWVudUNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGl0ZW0ub24oJ2tleWRvd24nLCB0aGlzLnN1Yk1lbnVLZXlQcmVzc0hhbmRsZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2F2ZSBzaXplIG9mIHN1Ym1lbnVzIG9uIGZpcnN0IGluaXRcclxuICAgIC8vIGlmIG51bWJlciBvZiBzdWJtZW51IGl0ZW1zIGNoYW5nZSBkaW5hbWljYWxseSBtb3JlIGxvZ2ljIHdpbGwgYmUgbmVlZGVkXHJcbiAgICBnZXRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLnJlbW92ZUNsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5zZXR0aW5nc0J1dHRvbi5nZXRDb21wb25lbnRTaXplKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfKTtcclxuICAgICAgICB0aGlzLnNldE1hcmdpbigpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLmFkZENsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXJnaW4oKSB7XHJcbiAgICAgICAgbGV0IFt3aWR0aF0gPSB0aGlzLnNpemU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLnN0eWxlLm1hcmdpblJpZ2h0ID0gYC0ke3dpZHRofXB4YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgICAqIEhpZGUgdGhlIHN1YiBtZW51XHJcbiAgICAgICAgKi9cclxuICAgIGhpZGVTdWJNZW51KCkge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nIHNldHRpbmdzIGl0ZW0gdGhpcy5lbF8gPT09IG51bGxcclxuICAgICAgICBpZiAoIXRoaXMuZWxfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2aWRlb2pzLmhhc0NsYXNzKHRoaXMuZWxfLCAnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5zZXR0aW5nc1N1Yk1lbnVFbF8sICd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuTW9yZU9wdGlvbnNNZW51SXRlbS5wcm90b3R5cGUuY29udGVudEVsVHlwZSA9ICdidXR0b24nO1xyXG5cclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnTW9yZU9wdGlvbnNNZW51SXRlbScsIE1vcmVPcHRpb25zTWVudUl0ZW0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zTWVudUl0ZW0uanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZShcIi4vTW9yZU9wdGlvbnMuc2Nzc1wiKTtcclxuXHJcbmNvbnN0IE1lbnUgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudScpO1xyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IENsaWNrYWJsZUNvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDbGlja2FibGVDb21wb25lbnQnKTtcclxuY29uc3QgTW9yZU9wdGlvbnNNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb3JlT3B0aW9uc01lbnVJdGVtJyk7XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc0J1dHRvbiBleHRlbmRzIENsaWNrYWJsZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50ID0gcGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZyA9IHBsYXllci5hZGRDaGlsZCgnbW9yZU9wdGlvbnNEaWFsb2cnKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ0VsID0gdGhpcy5kaWFsb2cuZWxfO1xyXG4gICAgICAgIHRoaXMubWVudSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYW5lbCA9IHRoaXMuZGlhbG9nLmFkZENoaWxkKCdzZXR0aW5nc1BhbmVsJyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkID0gdGhpcy5wYW5lbC5hZGRDaGlsZCgnc2V0dGluZ3NQYW5lbENoaWxkJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1zZXR0aW5ncycpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoJ1NldHRpbmdzJykpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBoYW5kbGVyc1xyXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ3NJdGVtSGFuZGxlciA9IHRoaXMub25BZGRTZXR0aW5nc0l0ZW0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRpc3Bvc2VTZXR0aW5nc0l0ZW1IYW5kbGVyID0gdGhpcy5vbkRpc3Bvc2VTZXR0aW5nc0l0ZW0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllckNsaWNrSGFuZGxlciA9IHRoaXMub25QbGF5ZXJDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXNlckluYWN0aXZlSGFuZGxlciA9IHRoaXMub25Vc2VySW5hY3RpdmUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZE1lbnUoKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ3JvdXAnKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLm1vcmVPcHRpb25zQnV0dG9uID0gdGhpcztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gd29yayBhcm91bmQgZm9yIHRoZSBvdXRsaW5lLCBiZWNhdXNlIHRoZSBkaWFsb2cgaXMgbm90IHBhcnQgb2YgdGhlIGNvbnRyb2wgYmFyIG5vdy4gXHJcbiAgICAgICAgICAgIGxldCBjb250cm9scyA9IHRoaXMuJCQoJy52anMtbWVudS1pdGVtJywgdGhpcy5kaWFsb2cpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sc1tpXS5jbGFzc0xpc3QuYWRkKFwib3V0bGluZS1lbmFibGVkLWNvbnRyb2xcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjbGlja2FibGVDb250cm9scyA9IHBsYXllci4kJCgnLm91dGxpbmUtZW5hYmxlZC1jb250cm9sLCAudmpzLWNvbnRyb2wnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2FibGVDb250cm9scy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlQ29udHJvbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5jbGllbnRYICE9PSAwICYmIGV2ZW50LmNsaWVudFkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnJlbW92ZUNsYXNzKCdvdXRsaW5lLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUNvbnRyb2xzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkQ2xhc3MoJ291dGxpbmUtZW5hYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBsYXllckNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zqcy1zZXR0aW5ncycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kaWFsb2cuaGFzQ2xhc3MoJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNwb3NlU2V0dGluZ3NJdGVtKGV2ZW50LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLm1lbnUuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlQ2hpbGQoY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLm1lbnUuZ2V0Q2hpbGQobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5yZW1vdmVDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oaWRlRGlhbG9nKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9uc18uZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFkZFNldHRpbmdzSXRlbShldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGxldCBbZW50cnksIG9wdGlvbnNdID0gZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRNZW51SXRlbShlbnRyeSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlckluYWN0aXZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGF5ZXJDb21wb25lbnQucGF1c2VkKCkgJiYgIXRoaXMuZGlhbG9nLmhhc0NsYXNzKCd2anMtaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRGlhbG9nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCdjbGljaycsIHRoaXMucGxheWVyQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignYWRkc2V0dGluZ3NpdGVtJywgdGhpcy5hZGRTZXR0aW5nc0l0ZW1IYW5kbGVyKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvbXBvbmVudC5vbignZGlzcG9zZXNldHRpbmdzaXRlbScsIHRoaXMuZGlzcG9zZVNldHRpbmdzSXRlbUhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29tcG9uZW50Lm9uKCd1c2VyaW5hY3RpdmUnLCB0aGlzLnVzZXJJbmFjdGl2ZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ1NTQ2xhc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbXAtbW9yZS1vcHRpb25zLWljb24gJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzSnVzdEJlZW5DbGlja2VkKCkpIHtcclxuICAgICAgICAgICAgLy90aGlzLmNsZWFyT3RoZXJNZW51cygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaWFsb2cuaGFzQ2xhc3MoJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsXy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC53aGljaCA9PT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5oYW5kbGVLZXlQcmVzcyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpYWxvZygpIHtcclxuICAgICAgICB0aGlzLm1lbnUuZWxfLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKCd2anMtbm8tdG9vbHRpcCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZF8gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVEaWFsb2coZm9jdXNUb0J1dHRvbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGlhbG9nU2l6ZSh0aGlzLmdldENvbXBvbmVudFNpemUodGhpcy5tZW51KSk7XHJcbiAgICAgICAgdGhpcy5tZW51LmVsXy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ3Zqcy1uby10b29sdGlwJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkXyA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGZvY3VzVG9CdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5lbF8uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlc3NCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5wcmVzc0J1dHRvbigpIHtcclxuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNKdXN0QmVlbkNsaWNrZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBvbmVudFNpemUoZWxlbWVudCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIENvdWxkIGJlIGNvbXBvbmVudCBvciBqdXN0IERPTSBlbGVtZW50XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgd2lkdGggPSBlbGVtZW50LmVsXy5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5lbF8ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8ga2VlcCB3aWR0aC9oZWlnaHQgYXMgcHJvcGVydGllcyBmb3IgZGlyZWN0IHVzZVxyXG4gICAgICAgICAgICBlbGVtZW50LndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpYWxvZ1NpemUoW3dpZHRoLCBoZWlnaHRdKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSA0MDtcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gdGhpcy5wbGF5ZXJDb21wb25lbnQuZWxfLm9mZnNldEhlaWdodCAtIG9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoICs9IDE3O1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbC5lbF8uc3R5bGUubWF4SGVpZ2h0ICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nRWwuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dFbC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTWVudSgpIHtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSh0aGlzLnBsYXllcigpKTtcclxuICAgICAgICB0aGlzLm1lbnUuYWRkQ2xhc3MoJ3Zqcy1tYWluLW1lbnUnKTtcclxuICAgICAgICBsZXQgZW50cmllcyA9IHRoaXMub3B0aW9uc18uZW50cmllcztcclxuXHJcbiAgICAgICAgaWYoZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndmpzLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsQ2hpbGQuYWRkQ2hpbGQodGhpcy5tZW51KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcclxuICAgICAgICAgICAgbGV0IHN1Ykl0ZW0gPSB0aGlzLmFkZE1lbnVJdGVtKGVudHJ5LCB0aGlzLm9wdGlvbnNfKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbENoaWxkLmFkZENoaWxkKHRoaXMubWVudSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWVudUl0ZW0oZW50cnksIG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBvcGVuU3ViTWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodmlkZW9qcy5oYXNDbGFzcyh0aGlzLmVsXywgJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9qcy5yZW1vdmVDbGFzcyh0aGlzLmVsXywgJ29wZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvcHRpb25zLm5hbWUgPSBlbnRyeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGVudHJ5LnNsaWNlKDEpO1xyXG4gICAgICAgIGxldCBtb3JlT3B0aW9uc01lbnVJdGVtID0gbmV3IE1vcmVPcHRpb25zTWVudUl0ZW0odGhpcy5wbGF5ZXIoKSwgb3B0aW9ucywgZW50cnksIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnUuYWRkQ2hpbGQobW9yZU9wdGlvbnNNZW51SXRlbSk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgY2hpbGRyZW4gdG8gYXZvaWQgc3ViIG1lbnVzIHN0YWNraW5nIG9uIHRvcCBvZiBlYWNoIG90aGVyXHJcbiAgICAgICAgLy8gb3IgaGF2aW5nIG11bHRpcGxlIG1lbnVzIG9wZW5cclxuICAgICAgICBtb3JlT3B0aW9uc01lbnVJdGVtLm9uKCdjbGljaycsIHZpZGVvanMuYmluZCh0aGlzLCB0aGlzLmhpZGVDaGlsZHJlbikpO1xyXG5cclxuICAgICAgICAvLyBXZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiB0aGUgc2V0dGluZ3Mgc3ViIG1lbnUgZWxlbWVudFxyXG4gICAgICAgIG1vcmVPcHRpb25zTWVudUl0ZW0ub24oJ2NsaWNrJywgb3BlblN1Yk1lbnUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbW9yZU9wdGlvbnNNZW51SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldENoaWxkcmVuKCkge1xyXG4gICAgICAgIHRoaXMubWVudS5jaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24obWVudUNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1lbnVDaGlsZC5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBhbGwgdGhlIHN1YiBtZW51c1xyXG4gICAgICovXHJcbiAgICBoaWRlQ2hpbGRyZW4oKSB7XHJcbiAgICAgICAgdGhpcy5tZW51LmNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWVudUNoaWxkLmhpZGVTdWJNZW51KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5tZW51LmNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbihtZW51Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWVudUNoaWxkLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3MtcGFuZWwnLFxyXG4gICAgICAgICAgICBpbm5lckhUTUw6ICcnLFxyXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NQYW5lbENoaWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUVsKCdkaXYnLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1zZXR0aW5ncy1wYW5lbC1jaGlsZCBvdXRsaW5lLWVuYWJsZWQtY29udHJvbCcsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogJycsXHJcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb3JlT3B0aW9uc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsKCkge1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gdGhpcy5pZF87XHJcbiAgICAgICAgY29uc3QgZGlhbG9nTGFiZWxJZCA9ICdUVHNldHRpbmdzTW9yZU9wdGlvbnNEaWFsb2dMYWJlbC0nICsgdW5pcXVlSWQ7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nRGVzY3JpcHRpb25JZCA9ICdUVE1vcmVPcHRpb25zRGlhbG9nRGVzY3JpcHRpb24tJyArIHVuaXF1ZUlkO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLW1vcmVvcHRpb25zLWRpYWxvZyB2anMtbW9kYWwtb3ZlcmxheScsXHJcbiAgICAgICAgICAgIGlubmVySFRNTDogJycsXHJcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJyxcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGRpYWxvZ0xhYmVsSWQsXHJcbiAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogZGlhbG9nRGVzY3JpcHRpb25JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuTW9yZU9wdGlvbnNCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdTZXR0aW5ncyc7XHJcblxyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vcmVPcHRpb25zQnV0dG9uJywgTW9yZU9wdGlvbnNCdXR0b24pO1xyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01vcmVPcHRpb25zRGlhbG9nJywgTW9yZU9wdGlvbnNEaWFsb2cpO1xyXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NldHRpbmdzUGFuZWwnLCBTZXR0aW5nc1BhbmVsKTtcclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc1BhbmVsQ2hpbGQnLCBTZXR0aW5nc1BhbmVsQ2hpbGQpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vcmVPcHRpb25zL01vcmVPcHRpb25zLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsImNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuY29uc3QgQnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0J1dHRvbicpO1xyXG5cclxucmVxdWlyZShcIi4vQ2FwdGlvblRvZ2dsZS5zY3NzXCIpO1xyXG5cclxuY2xhc3MgQ2FwdGlvblRvZ2dsZSBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSAnY2FwdGlvblRvZ2dsZSc7XHJcbiAgICAgICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRUcmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50cmFja0xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgcGxheWVyLm9uKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyLmNhcHRpb25Ub2dnbGUgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgdHJhY2tzID0gdGhpcy5wbGF5ZXJfLnRleHRUcmFja3MoKTtcclxuICAgICAgICAgICAgaWYgKCF0cmFja3MgfHwgIXRyYWNrcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFja3NbaV1bJ2tpbmQnXSA9PT0gJ3N1YnRpdGxlcycgfHwgdHJhY2tzW2ldWydraW5kJ10gPT09ICdjYXB0aW9ucycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrTGlzdC5wdXNoKHRyYWNrc1tpXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyYWNrTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3QgPSB0aGlzLmdldFRyYWNrVG9TZWxlY3QodGhpcy50cmFja0xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZ3ModHJhY2tUb1NlbGVjdCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYGFtcC1jYXB0aW9uLXRvZ2dsZSAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG4gICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3QgPSB0aGlzLmdldFRyYWNrVG9TZWxlY3QodHJhY2tzKTtcclxuICAgICAgICBpZiAoIXRoaXMuYnV0dG9uUHJlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFja1RvU2VsZWN0Wydtb2RlJ10gPSAnc2hvd2luZyc7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNlbGVjdGVkVHJhY2sgPSB0cmFja1RvU2VsZWN0O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZ3ModGhpcy5sYXN0U2VsZWN0ZWRUcmFjaywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJfLm1vcmVPcHRpb25zQnV0dG9uLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25QcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFja0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tMaXN0W2ldWydtb2RlJ10gPSAnZGlzYWJsZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyXy5tb3JlT3B0aW9uc0J1dHRvbi51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRyYWNrVG9TZWxlY3QsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCB0cmFja3MgPSB0aGlzLnBsYXllcl8udGV4dFRyYWNrcygpO1xyXG4gICAgICAgIGlmICghdHJhY2tzIHx8ICF0cmFja3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRyYWNrc1tpXVsnbW9kZSddID09PSAnc2hvd2luZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZFRyYWNrID0gdHJhY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdzKHRoaXMubGFzdFNlbGVjdGVkVHJhY2ssIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGV0IHRyYWNrVG9TZWxlY3QgPSB0aGlzLmdldFRyYWNrVG9TZWxlY3QodHJhY2tzKTtcclxuICAgICAgICB0aGlzLnNldFN0cmluZ3ModHJhY2tUb1NlbGVjdCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYWNrVG9TZWxlY3QodHJhY2tzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFNlbGVjdGVkVHJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdFNlbGVjdGVkVHJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhY2tUb1NlbGVjdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHJhY2tzW2ldWydraW5kJ10gPT09ICdjYXB0aW9ucycpIHtcclxuICAgICAgICAgICAgICAgIHRyYWNrVG9TZWxlY3QgPSB0cmFja3NbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRyYWNrVG9TZWxlY3QpIHtcclxuICAgICAgICAgICAgdHJhY2tUb1NlbGVjdCA9IHRyYWNrc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyYWNrVG9TZWxlY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RyaW5ncyh0cmFjaywgY2xpY2tlZCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gJ0NhcHRpb25zIG9uJztcclxuICAgICAgICBsZXQgYXJpYUxhYmVsID0gJ0NhcHRpb25zIGFyZSBjdXJyZW50bHkgb2ZmLCBDYXB0aW9uIHRvZ2dsZSc7XHJcbiAgICAgICAgaWYgKHRyYWNrWydraW5kJ10gPT09ICdjYXB0aW9ucycgJiYgIWNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdDYXB0aW9ucyBvbic7XHJcbiAgICAgICAgICAgIGFyaWFMYWJlbCA9ICdDYXB0aW9ucyBhcmUgY3VycmVudGx5IG9mZiwgQ2FwdGlvbiB0b2dnbGUnO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ2NhcHRpb25zJyAmJiBjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnQ2FwdGlvbnMgb2ZmJztcclxuICAgICAgICAgICAgYXJpYUxhYmVsID0gJ0NhcHRpb25zIGFyZSBjdXJyZW50bHkgb24sIENhcHRpb24gdG9nZ2xlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHJhY2tbJ2tpbmQnXSA9PT0gJ3N1YnRpdGxlcycgJiYgIWNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGV4dCA9ICdTdWJ0aXRsZXMgb24nO1xyXG4gICAgICAgICAgICBhcmlhTGFiZWwgPSAnU3VidGl0bGVzIGFyZSBjdXJyZW50bHkgb2ZmLCBTdWJ0aXRsZSB0b2dnbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0cmFja1sna2luZCddID09PSAnc3VidGl0bGVzJyAmJiBjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnU3VidGl0bGVzIG9mZic7XHJcbiAgICAgICAgICAgIGFyaWFMYWJlbCA9ICdTdWJ0aXRsZXMgYXJlIGN1cnJlbnRseSBvbiwgU3VidGl0bGUgdG9nZ2xlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250cm9sVGV4dCh0aGlzLmh0bWxFbmNvZGUodGhpcy5sb2NhbGl6ZSh0ZXh0KSkpO1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubG9jYWxpemUoYXJpYUxhYmVsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNhcHRpb25Ub2dnbGUucHJvdG90eXBlLmNvbnRyb2xUZXh0XyA9ICdTdWJ0aXRsZXMvQ0MnO1xyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdDYXB0aW9uVG9nZ2xlJywgQ2FwdGlvblRvZ2dsZSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvQ2FwdGlvblRvZ2dsZS9DYXB0aW9uVG9nZ2xlLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL0NhcHRpb25Ub2dnbGUvQ2FwdGlvblRvZ2dsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iLCJ2YXIgTW91c2VUaW1lRGlzcGxheSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb3VzZVRpbWVEaXNwbGF5Jyk7XHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuXHJcbnJlcXVpcmUoJy4vTW91c2VUaW1lVG9vbHRpcC5zY3NzJyk7XHJcblxyXG5jbGFzcyBNb3VzZVRpbWVUb29sdGlwIGV4dGVuZHMgTW91c2VUaW1lRGlzcGxheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2x0aXBQb2ludGVyID0gdmlkZW9qcy5jcmVhdGVFbCgnc3BhbicsIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYW1wLXRpbWUtdG9vbHRpcC1wb2ludGVyJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLnRvb2x0aXBQb2ludGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobmV3VGltZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlci51cGRhdGUobmV3VGltZSwgcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYW1wQW1wVG9vbHRpcFBvc2l0aW9uXyhwb3NpdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcigpLmNvbnRyb2xCYXIgJiYgdGhpcy5wbGF5ZXIoKS5jb250cm9sQmFyLnByb2dyZXNzQ29udHJvbCAmJiB0aGlzLnBsYXllcigpLmNvbnRyb2xCYXIucHJvZ3Jlc3NDb250cm9sLnNlZWtCYXIpIHtcclxuICAgICAgICAgICAgbGV0IHNlZWtCYXJXaWR0aCA9IHRoaXMucGxheWVyKCkuY29udHJvbEJhci5wcm9ncmVzc0NvbnRyb2wuc2Vla0Jhci53aWR0aCgpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyV2lkdGggPSB0aGlzLnBsYXllcigpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGxldCBzZWVrQmFyUGFkZGluZyA9IChwbGF5ZXJXaWR0aCAtIHNlZWtCYXJXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICBsZXQgdG9vbHRpcFdpZHRoSGFsZiA9IHRoaXMudG9vbHRpcFNwYW4ub2Zmc2V0V2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgYWN0dWFsUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IHRvb2x0aXBXaWR0aEhhbGYgLSBzZWVrQmFyUGFkZGluZykge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsUG9zaXRpb24gPSBNYXRoLmNlaWwodGhpcy50b29sdGlwU3Bhbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHBvc2l0aW9uIC0gc2Vla0JhclBhZGRpbmcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID4gKHNlZWtCYXJXaWR0aCAtIHRvb2x0aXBXaWR0aEhhbGYgKyBzZWVrQmFyUGFkZGluZykpIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbFBvc2l0aW9uID0gTWF0aC5mbG9vcihzZWVrQmFyV2lkdGggLSBwb3NpdGlvbiArIHNlZWtCYXJQYWRkaW5nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbFBvc2l0aW9uID0gdG9vbHRpcFdpZHRoSGFsZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTcGFuLnN0eWxlLnJpZ2h0ID0gLWFjdHVhbFBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnTW91c2VUaW1lVG9vbHRpcCcsIE1vdXNlVGltZVRvb2x0aXApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL01vdXNlVGltZVRvb2x0aXAvTW91c2VUaW1lVG9vbHRpcC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9Nb3VzZVRpbWVUb29sdGlwL01vdXNlVGltZVRvb2x0aXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk1OFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiLy8gQ2hhbmdpbmcgaG92ZXIgdG8gY2xpY2tzIG9uIGNvbnRyb2wgYnV0dG9ucy5cclxudmFyIE1lbnVCdXR0b24gPSB2aWRlb2pzLmdldENvbXBvbmVudCgnTWVudUJ1dHRvbicpO1xyXG52YXIgTW91c2VUaW1lRGlzcGxheSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNb3VzZVRpbWVEaXNwbGF5Jyk7XHJcblxyXG5NZW51QnV0dG9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5oYXNKdXN0QmVlbkNsaWNrZWQoKSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJPdGhlck1lbnVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uUHJlc3NlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy51bnByZXNzQnV0dG9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVzc0J1dHRvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTWVudUJ1dHRvbi5wcm90b3R5cGUuaGFuZGxlTW91c2VPdmVyID0gZnVuY3Rpb24gKCkgeyB9XHJcbk1lbnVCdXR0b24ucHJvdG90eXBlLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7IH1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL2FtcE92ZXJyaWRlcy5qc1xuICoqLyIsImFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJDYXB0aW9ucyBvZmZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiQ2FwdGlvbnMgb25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJSZXZlcnNlIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUmV2ZXJzZSBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkxhcmdlXCJdID0gXCJMYXJnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIk1lZGl1bVwiXSA9IFwiTWVkaXVtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU21hbGxcIl0gPSBcIlNtYWxsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkZ1bGwgc2NyZWVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiRXhpdCBmdWxsIHNjcmVlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIk9mZlwiXSA9IFwiT2ZmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlBsYXliYWNrIHNwZWVkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU2V0dGluZ3NcIl0gPSBcIlNldHRpbmdzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTdWJ0aXRsZXMgb25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0aXRsZXMgb2ZmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUaGVhdGVyIG1vZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiRXhpdCB0aGVhdGVyIG1vZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBxdWFsaXR5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVuXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJTZWFyY2hcIl0gPSBcIlNlYXJjaFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkF1dG9cIl0gPSBcIkF1dG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJPblwiXSA9IFwiT25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZW5cIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRleHQgY29sb3I6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZXh0IHNpemU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlblwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJCYWNrIHRvIG1haW4gbWVudVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLYtNmB2KfZgdmK2Kkg2KfZhNiu2YTZgdmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItil2YrZgtin2YEg2KrYtNi62YrZhCDYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLYqti02LrZitmEINin2YTYqtiz2YXZitin2Kog2KfZhNiq2YjYttmK2K3ZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItin2YTYqtiz2YXZitin2Kog2KfZhNiq2YjYttmK2K3ZitipIC8g2KfZhNi52YbYp9mI2YrZhiDYp9mE2YHYsdi52YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLYpdi52K/Yp9iv2KfYqiDYp9mE2KrYs9mF2YrYp9iqINin2YTYqtmI2LbZitit2YrYqSAvINin2YTYudmG2KfZiNmK2YYg2KfZhNmB2LHYudmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLYudmD2LMg2KfZhNio2YbZiiDYp9mE2K/Yp9mD2YZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLYudmD2LMg2KfZhNmC2YrYp9iz2YpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTZXBpYVwiXSA9IFwi2KfZhNio2YbZiiDYp9mE2K/Yp9mD2YZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJTdGFuZGFyZFwiXSA9IFwi2YLZitin2LPZilwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkxhcmdlXCJdID0gXCLZg9io2YrYsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIk1lZGl1bVwiXSA9IFwi2YXYqtmI2LPYt1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlNtYWxsXCJdID0gXCLYtdi62YrYsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLZhdmE2KEg2KfZhNi02KfYtNipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi2KXZhtmH2KfYoSDYudix2LYg2YXZhNihINin2YTYtNin2LTYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIk9mZlwiXSA9IFwi4oCP4oCP2KXZitmC2KfZgSDYp9mE2KrYtNi62YrZhFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLYs9ix2LnYqSDYp9mE2KrYtNi62YrZhFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLYp9mE2LHYrNmI2Lkg2KXZhNmJINin2YTYpdi52K/Yp9iv2KfYqiDYp9mE2KfZgdiq2LHYp9i22YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlNldHRpbmdzXCJdID0gXCLYpdi52K/Yp9iv2KfYqlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi2KrYtNi62YrZhCDYp9mE2LnZhtin2YjZitmGINin2YTZgdix2LnZitipXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi2KXZitmC2KfZgSDYqti02LrZitmEINin2YTYudmG2KfZiNmK2YYg2KfZhNmB2LHYudmK2KlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItmI2LbYuSDYp9mE2YXYs9ix2K1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi2KXZhtmH2KfYoSDYudix2LYg2YjYtti5INin2YTZhdiz2LHYrVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJhclwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItis2YjYr9ipINmF2YLYt9i5INin2YTZgdmK2K/ZitmIXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLYudix2LYg2YHZiiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiU2VhcmNoXCJdID0gXCLYqNit2KtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJBdXRvXCJdID0gXCLYqtmE2YLYp9im2YpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJDQ1wiXSA9IFwi2YbYs9iu2Kkg2KXZhNmJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiT25cIl0gPSBcIuKAj+KAj9iq2LTYutmK2YRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYXJcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItmE2YjZhiDYp9mE2YbYtTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcItit2KzZhSDYp9mE2YbYtTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImFyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItin2YTYudmI2K/YqSDYpdmE2Ykg2KfZhNmC2KfYptmF2Kkg2KfZhNix2KbZitiz2YrYqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLQn9GA0L7Qt9GA0LDRh9C90L7RgdGCINC90LAg0YTQvtC90LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItCd0LDQtNC/0LjRgdC4INC40LfQutC70Y7Rh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLQndCw0LTQv9C40YHQuCDQstC60LvRjtGH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcItCd0LDQtNC/0LjRgdC4L9GB0YPQsdGC0LjRgtGA0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi0J3QsNGB0YLRgNC+0LnQutC4INC90LAg0L3QsNC00L/QuNGB0Lgv0YHRg9Cx0YLQuNGC0YDQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcItCe0LHRgNGK0YnQsNC90LUg0L3QsCDRgdC10L/QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi0J7QsdGA0YrRidCw0L3QtSDQvdCwINGB0YLQsNC90LTQsNGA0YLQvdC4INGG0LLQtdGC0L7QstC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU2VwaWFcIl0gPSBcItCh0LXQv9C40Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJTdGFuZGFyZFwiXSA9IFwi0KHRgtCw0L3QtNCw0YDRgtC90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJMYXJnZVwiXSA9IFwi0JPQvtC70Y/QvNC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiTWVkaXVtXCJdID0gXCLQodGA0LXQtNC90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJTbWFsbFwiXSA9IFwi0JzQsNC70LrQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLQptGP0Lsg0LXQutGA0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItCY0LfRhdC+0LQg0L7RgiDRhtGP0Lsg0LXQutGA0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIk9mZlwiXSA9IFwi0JjQt9C60LvRjtGH0LXQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCh0LrQvtGA0L7RgdGCINC90LAg0LLRitC30L/RgNC+0LjQt9Cy0LXQttC00LDQvdC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcItCS0YDRitGJ0LDQvdC1INC00L4g0L3QsNGB0YLRgNC+0LnQutC4INC/0L4g0L/QvtC00YDQsNC30LHQuNGA0LDQvdC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU2V0dGluZ3NcIl0gPSBcItCd0LDRgdGC0YDQvtC50LrQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQuCDQstC60LvRjtGH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQuCDQuNC30LrQu9GO0YfQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItCg0LXQttC40Lwg4oCe0LrQuNC90L7igJxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi0JjQt9GF0L7QtCDQvtGCINGA0LXQttC40Lwg4oCe0LrQuNC90L7igJxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLQmtCw0YfQtdGB0YLQstC+INC90LAg0LLQuNC00LXQvtC60LvQuNC/0LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcItCf0YDQtdCz0LvQtdC0INCyIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJTZWFyY2hcIl0gPSBcItCi0YrRgNGB0LXQvdC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiQXV0b1wiXSA9IFwi0JDQstGC0L7QvNCw0YLQuNGH0L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJiZ1wiXVtcIkNDXCJdID0gXCLQr9CaXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImJnXCJdW1wiT25cIl0gPSBcItCS0LrQuy5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItCm0LLRj9GCINC90LAg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0KDQsNC30LzQtdGAINC90LAg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiYmdcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi0J3QsNC30LDQtCDQutGK0Lwg0LPQu9Cw0LLQvdC+0YLQviDQvNC10L3RjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcsOobmNpYSBkZWwgZm9uc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiU3VidMOtdG9scyBkZXNhY3RpdmF0c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJTdWJ0w610b2xzIGFjdGl2YXRzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlN1YnTDrXRvbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDsyBkZWxzIHN1YnTDrXRvbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJTw6hwaWEgaW52ZXJzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiRXN0w6BuZGFyZCBpbnZlcnNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTZXBpYVwiXSA9IFwiU8OocGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU3RhbmRhcmRcIl0gPSBcIkVzdMOgbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJMYXJnZVwiXSA9IFwiR3JhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIk1lZGl1bVwiXSA9IFwiTWl0asOgXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiU21hbGxcIl0gPSBcIlBldGl0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBhbnRhbGxhIHNlbmNlcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJTdXJ0IGRlIGxhIHBhbnRhbGxhIHNlbmNlcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJPZmZcIl0gPSBcIkRlc2FjdGl2YXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpdGF0IGRlIHJlcHJvZHVjY2nDs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJUb3JuYSBhIGxhIGNvbmZpZ3VyYWNpw7MgcGVyIGRlZmVjdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDs1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidMOtdG9scyBhY3RpdmF0c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlN1YnTDrXRvbHMgZGVzYWN0aXZhdHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZGUgZGUgcGFudGFsbGEgc2VuY2VyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTdXJ0IGRlbCBtb2RlIGRlIHBhbnRhbGxhIHNlbmNlcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJRdWFsaXRhdCBkZSB2w61kZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpc3VhbGl0emEtaG8gYWwgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIlNlYXJjaFwiXSA9IFwiQ2VyY2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY2FcIl1bXCJBdXRvXCJdID0gXCJBdXRvbcOgdGljXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiQ0NcIl0gPSBcIkEvQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIk9uXCJdID0gXCJBY3RpdmF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb2xvciBkZWwgdGV4dDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNhXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIk1pZGEgZGVsIHRleHQ6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjYVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUb3JuYSBhbCBtZW7DuiBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiUHLFr2hsZWRub3N0IHBvemFkw61cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlBvcGlza3kgdnlwbnV0eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJQb3Bpc2t5IHphcG51dHlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiUG9waXNreSBuZWJvIHRpdHVsa3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiTmFzdGF2ZW7DrSBwcm8gcG9waXNreSBuZWJvIHRpdHVsa3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPYnLDoXRpdCBzw6lwaW92w70gdMOzblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9icsOhdGl0IHN0YW5kYXJkbsOtIHTDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTZXBpYVwiXSA9IFwiU8OpcGlvdsO9IHTDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJMYXJnZVwiXSA9IFwiVmVsa8O9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiTWVkaXVtXCJdID0gXCJTdMWZZWRuw61cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTbWFsbFwiXSA9IFwiTWFsw71cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2Vsw6Egb2JyYXpvdmthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiVWtvbsSNaXQgcmXFvmltIGNlbMOpIG9icmF6b3ZreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIk9mZlwiXSA9IFwiVnlwbnV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJSeWNobG9zdCBwxZllaHLDoXbDoW7DrVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWcsOhdGl0IHbDvWNob3rDrSBuYXN0YXZlbsOtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiU2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuw61cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlRpdHVsa3kgemFwbnV0eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlRpdHVsa3kgdnlwbnV0eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiUmXFvmltIGNlbMOpIG9icmF6b3ZreVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJVa29uxI1pdCByZcW+aW0gY2Vsw6kgb2JyYXpvdmt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiS3ZhbGl0YSB2aWRlYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiWm9icmF6aXQgdmUgc2x1xb5ixJsgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlNlYXJjaFwiXSA9IFwiSGxlZGF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGlja3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJDQ1wiXSA9IFwiS29waWVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiY3NcIl1bXCJPblwiXSA9IFwiWmFwbnV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQmFydmEgdGV4dHU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJjc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJWZWxpa29zdCB0ZXh0dTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImNzXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlpwxJt0IG5hIGhsYXZuw60gbmFiw61ka3VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiQmFnZ3J1bmRzZ2VubmVtc2lndGlnaGVkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJVbmRlcnRla3N0ZXIgZnJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlVuZGVydGVrc3RlciB0aWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVW5kZXJ0ZWtzdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkluZHN0aWxsaW5nZXIgZm9yIHVuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlRpbGJhZ2Vmw7hyIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiVGlsYmFnZWbDuHIgdGlsIHN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiTGFyZ2VcIl0gPSBcIlN0b3JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJNZWRpdW1cIl0gPSBcIk1lbGxlbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNtYWxsXCJdID0gXCJMaWxsZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJGdWxkIHNrw6ZybVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkFmc2x1dCBmdWxkIHNrw6ZybVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIk9mZlwiXSA9IFwiRnJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkFmc3BpbG5pbmdzaGFzdGlnaGVkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkdlbmRhbiBzdGFuZGFyZGluZHN0aWxsaW5nZXJuZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlNldHRpbmdzXCJdID0gXCJJbmRzdGlsbGluZ2VyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJVbmRlcnRla3N0ZXIgdGlsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiVW5kZXJ0ZWtzdGVyIGZyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiQmlvZ3JhZnRpbHN0YW5kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkFmc2x1dCBiaW9ncmFmdGlsc3RhbmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb2t2YWxpdGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJWaXMgaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiU2VhcmNoXCJdID0gXCJTw7hnXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGlza1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIkNDXCJdID0gXCJDY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkYVwiXVtcIk9uXCJdID0gXCJUaWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRla3N0ZmFydmU6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRhXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRla3N0c3TDuHJyZWxzZTpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGFcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGlsYmFnZSB0aWwgaG92ZWRtZW51ZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiSGludGVyZ3J1bmR0cmFuc3BhcmVuelwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVW50ZXJ0aXRlbCBmw7xyIEjDtnJnZXNjaMOkZGlndGUgZGVha3RpdmllcmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlVudGVydGl0ZWwgZsO8ciBIw7ZyZ2VzY2jDpGRpZ3RlIGFrdGl2aWVyZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVW50ZXJ0aXRlbCBmw7xyIEjDtnJnZXNjaMOkZGlndGUvVW50ZXJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJFaW5zdGVsbHVuZ2VuIGbDvHIgVW50ZXJ0aXRlbCBmw7xyIEjDtnJnZXNjaMOkZGlndGUvVW50ZXJ0aXRlbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIkludmVydGllcnQgU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJJbnZlcnRpZXJ0IFN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiTGFyZ2VcIl0gPSBcIkdyb8OfXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiTWVkaXVtXCJdID0gXCJNaXR0ZWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTbWFsbFwiXSA9IFwiS2xlaW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiVm9sbGJpbGRtb2R1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlZvbGxiaWxkc2NoaXJtIGJlZW5kZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJPZmZcIl0gPSBcIkF1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJXaWVkZXJnYWJlZ2VzY2h3aW5kaWdrZWl0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlN0YW5kYXJkZWluc3RlbGx1bmdlbiB3aWVkZXJoZXJzdGVsbGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiU2V0dGluZ3NcIl0gPSBcIkVpbnN0ZWxsdW5nZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlVudGVydGl0ZWwgYWt0aXZpZXJlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlVudGVydGl0ZWwgZGVha3RpdmllcmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJLaW5vbW9kdXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiS2lub21vZHVzIGJlZW5kZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlb3F1YWxpdMOkdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiSW4gTWljcm9zb2Z0IFN0cmVhbSBhbnplaWdlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlNlYXJjaFwiXSA9IFwiU3VjaGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGlzY2hcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJDQ1wiXSA9IFwiQ2NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZGVcIl1bXCJPblwiXSA9IFwiRWluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZXh0ZmFyYmU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJkZVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZXh0Z3LDtsOfZTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImRlXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlp1csO8Y2sgenVtIEhhdXB0bWVuw7xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwizpTOuc6xz4bOrM69zrXOuc6xIM+Gz4zOvc+Ezr/PhVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwizpHPgM61zr3Otc+BzrPOv8+Azr/Or863z4POtyDOu861zrbOsc69z4TPjs69XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIs6Vzr3Otc+BzrPOv8+Azr/Or863z4POtyDOu861zrbOsc69z4TPjs69XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIs6bzrXOts6szr3PhM61z4Ivz4XPgM+Mz4TOuc+EzrvOv865XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIs6hz4XOuM68zq/Pg861zrnPgiDOu861zrbOsc69z4TPjs69L8+Fz4DPjM+EzrnPhM67z4nOvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIs6jzq3PgM65zrEgzrzOtSDOsc69z4TOuc+Dz4TPgc6/z4bOrlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIs6kz4XPgM65zrrOriDOsc69z4TOuc+Dz4TPgc6/z4bOrlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlNlcGlhXCJdID0gXCLOo86tz4DOuc6xXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiU3RhbmRhcmRcIl0gPSBcIs6kz4XPgM65zrrPjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkxhcmdlXCJdID0gXCLOnM61zrPOrM67zr9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJNZWRpdW1cIl0gPSBcIs6czrXPg86xzq/OsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlNtYWxsXCJdID0gXCLOnM65zrrPgc+MXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIs6gzrvOrs+BzrfPgiDOv864z4zOvc63XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwizojOvs6/zrTOv8+CIM6xz4DPjCDPhM63zr0gz4DOu86uz4HOtyDOv864z4zOvc63XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiT2ZmXCJdID0gXCLOkc69zrXOvc61z4HOs8+MXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIs6kzrHPh8+Nz4TOt8+EzrEgzrHOvc6xz4DOsc+BzrHOs8+JzrPOrs+CXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIs6Vz4DOsc69zrHPhs6/z4HOrCDPg8+EzrnPgiDPgM+Bzr/Otc+AzrnOu861zrPOvM6tzr3Otc+CIM+Bz4XOuM68zq/Pg861zrnPglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlNldHRpbmdzXCJdID0gXCLOoc+FzrjOvM6vz4POtc65z4JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIs6Vzr3Otc+BzrPOv8+Azr/Or863z4POtyDPhc+Az4zPhM65z4TOu8+Jzr1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLOkc+AzrXOvc61z4HOs86/z4DOv86vzrfPg863IM+Fz4DPjM+EzrnPhM67z4nOvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwizpvOtc65z4TOv8+Fz4HOs86vzrEgzrrOuc69zrfOvM6xz4TOv86zz4HOrM+Gzr/PhVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLOiM6+zr/OtM6/z4IgzrHPgM+MIM+EzrcgzrvOtc65z4TOv8+Fz4HOs86vzrEgzrrOuc69zrfOvM6xz4TOv86zz4HOrM+Gzr/PhVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIs6gzr/Ouc+Mz4TOt8+EzrEgzrLOr869z4TOtc6/XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLOoM+Bzr/Oss6/zrvOriDPg8+Ezr8gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIlNlYXJjaFwiXSA9IFwizpHOvc6xzrbOrs+EzrfPg863XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQXV0b1wiXSA9IFwizpHPhc+Ez4zOvM6xz4TOv1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlbFwiXVtcIkNDXCJdID0gXCLOms6/zrnOvS5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZWxcIl1bXCJPblwiXSA9IFwizpXOvc61z4HOs8+MXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLOp8+Bz47OvM6xIM66zrXOuc68zq3Ovc6/z4U6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIs6czq3Os861zrjOv8+CIM66zrXOuc68zq3Ovc6/z4U6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVsXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIs6Vz4DOuc+Dz4TPgc6/z4bOriDPg8+Ezr8gzrrPjc+BzrnOvyDOvM61zr3Ov8+NXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyZW5jaWEgZW4gc2VndW5kbyBwbGFub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiRGVzYWN0aXZhciB0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJBY3RpdmFyIHTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlTDrXR1bG9zL3N1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkNvbmZpZ3VyYWNpw7NuIGRlIHTDrXR1bG9zL3N1YnTDrXR1bG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiSW52ZXJ0aXIgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJJbnZlcnRpciBlc3TDoW5kYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTdGFuZGFyZFwiXSA9IFwiRXN0w6FuZGFyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiTGFyZ2VcIl0gPSBcIkdyYW5kZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIk1lZGl1bVwiXSA9IFwiTWVkaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTbWFsbFwiXSA9IFwiUGVxdWXDsW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJTYWxpciBkZSBwYW50YWxsYSBjb21wbGV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIk9mZlwiXSA9IFwiRGVzYWN0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpZGFkIGRlIHJlcHJvZHVjY2nDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUmV2ZXJ0aXIgYSBsYSBjb25maWd1cmFjacOzbiBwcmVkZXRlcm1pbmFkYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlNldHRpbmdzXCJdID0gXCJDb25maWd1cmFjacOzblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiQWN0aXZhciBzdWJ0w610dWxvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkRlc2FjdGl2YXIgc3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZG8gZGUgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiU2FsaXIgZGVsIG1vZG8gZGUgcGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJDYWxpZGFkIGRlIHbDrWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmVyIGVuIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXNcIl1bXCJTZWFyY2hcIl0gPSBcIkJ1c2NhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiT25cIl0gPSBcIkFjdGl2YWRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb2xvciBkZWwgdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJlc1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYW1hw7FvIGRlbCB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImVzXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlZvbHZlciBhbCBtZW7DuiBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVGF1c3RhIGzDpGJpcGFpc3R2dXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkzDvGxpdGEgcGVhbGRpc2VkIHbDpGxqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMw7xsaXRhIHBlYWxkaXNlZCBzaXNzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJQZWFsZGlzZWQvc3VidGlpdHJpZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJQZWFsZGlzdGUvc3VidGlpdHJpdGUgc8OkdHRlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlTDvGhpc3RhIHNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlTDvGhpc3RhIHN0YW5kYXJkbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJTZXBpYVwiXSA9IFwiU2VlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiTGFyZ2VcIl0gPSBcIlN1dXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJNZWRpdW1cIl0gPSBcIktlc2ttaW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU21hbGxcIl0gPSBcIlbDpGlrZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJUw6Rpc2VrcmFhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlbDpGxqdSB0w6Rpc2VrcmFhbmlzdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIk9mZlwiXSA9IFwiVsOkbGphc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJUYWFzZXNpdHVzZSBraWlydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiRW5uaXN0YSB2YWlrZXPDpHR0ZWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJTZXR0aW5nc1wiXSA9IFwiU8OkdHRlZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiTMO8bGl0YSBzdWJ0aWl0cmlkIHNpc3NlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiTMO8bGl0YSBzdWJ0aWl0cmlkIHbDpGxqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiVGVhdHJpcmXFvmlpbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJWw6RsanUgdGVhdHJpcmXFvmlpbWlzdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVvIGt2YWxpdGVldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiS3V2YSBNaWNyb3NvZnQgU3RyZWFtaXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJTZWFyY2hcIl0gPSBcIk90c2luZ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYWF0bmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJDQ1wiXSA9IFwiS29vcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiT25cIl0gPSBcIlNlZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXRcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRla3N0aSB2w6RydjogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV0XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRla3N0aSBzdXVydXM6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUYWdhc2kgcGVhbWVuw7zDvHNzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJBdHpla28gcGxhbm9hcmVuIGdhcmRlbnRhc3VuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiRXBpZ3JhZmVhayBkZXNha3RpYmF0dXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkVwaWdyYWZlYWsgYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJFcGlncmFmZWFrL0F6cGl0aXR1bHVha1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJFcGlncmFmZWVuIGVkbyBhenBpdGl0dWx1ZW4gZXphcnBlbmFrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VwaWEtdG9udWEgYWxkZXJhbnR6aWthdHVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiRXN0YW5kYXIgYWxkZXJhbnR6aWthdHVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhLXRvbnVhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU3RhbmRhcmRcIl0gPSBcIkVzdGFuZGFycmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJMYXJnZVwiXSA9IFwiSGFuZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiTWVkaXVtXCJdID0gXCJFcnRhaW5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU21hbGxcIl0gPSBcIlR4aWtpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQYW50YWlsYSBvc29hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiSXJ0ZW4gcGFudGFpbGEgb3Nva28gbW9kdXRpa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIk9mZlwiXSA9IFwiRGVzYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJFcnJlcHJvZHVremlvYXJlbiBhYmlhZHVyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJMZWhlbmVyYXR1IGV6YXJwZW4gbGVoZW5ldHNpYWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJTZXR0aW5nc1wiXSA9IFwiRXphcnBlbmFrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJBenBpdGl0dWx1YWsgYWt0aWJhdHV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkF6cGl0aXR1bHVhayBkZXNha3RpYmF0dXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJaaW5lbWEgbW9kdWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiSXJ0ZW4gemluZW1hIG1vZHV0aWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJCaWRlby1rYWxpdGF0ZWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIklrdXNpIE1pY3Jvc29mdCBTdHJlYW0tZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJTZWFyY2hcIl0gPSBcIkJpbGF0dVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpa29hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImV1XCJdW1wiT25cIl0gPSBcIkFrdGliYXR1dGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRlc3R1YXJlbiBrb2xvcmVhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZXVcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVzdHVhcmVuIHRhbWFpbmE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJldVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJJdHp1bGkgbWVudSBuYWd1c2lyYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUYXVzdGFuIGzDpHBpbsOka3l2eXlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJUZWtzdGl0eXMgZWkga8OkeXTDtnNzw6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVGVrc3RpdHlzIGvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlRla3N0aXR5c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJUZWtzdGl0eXNhc2V0dWtzZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJLw6TDpG50ZWluZW4gc2VlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiS8Okw6RudGVpbmVuIHZha2lvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiU2VwaWFcIl0gPSBcIlNlZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlN0YW5kYXJkXCJdID0gXCJOb3JtYWFsaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkxhcmdlXCJdID0gXCJTdXVyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIk1lZGl1bVwiXSA9IFwiTm9ybWFhbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTbWFsbFwiXSA9IFwiUGllbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiS29rbyBuw6R5dHTDtlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlBvaXN0dSBrb2tvIG7DpHl0w7ZuIHRpbGFzdGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJPZmZcIl0gPSBcIkVpIGvDpHl0w7Zzc8OkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlRvaXN0b25vcGV1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJQYWxhdXRhIG9sZXR1c2FzZXR1a3NldFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlNldHRpbmdzXCJdID0gXCJBc2V0dWtzZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlRla3N0aXR5cyBrw6R5dMO2c3PDpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlRla3N0aXR5cyBwb2lzIGvDpHl0w7ZzdMOkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZpXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUZWF0dGVyaXRpbGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiUG9pc3R1IHRlYXR0ZXJpdGlsYXN0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVvbiBsYWF0dVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTsOkeXTDpCBNaWNyb3NvZnQgU3RyZWFtaXNzw6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJTZWFyY2hcIl0gPSBcIkhhZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYWF0dGluZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJDQ1wiXSA9IFwiS29waW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJPblwiXSA9IFwiS8OkeXTDtnNzw6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZmlcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRla3N0aW4gdsOkcmk6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdGluIGtva286IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmaVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUYWthaXNpbiBww6TDpHZhbGlra29vblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVuY2UgZGUgbCdhcnJpw6hyZS1wbGFuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMw6lnZW5kZXMgZMOpc2FjdGl2w6llc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMw6lnZW5kZXMgYWN0aXbDqWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkzDqWdlbmRlcy9zb3VzLXRpdHJlc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJQYXJhbcOodHJlcyBkZXMgbMOpZ2VuZGVzL3NvdXMtdGl0cmVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiQW5udWxlciBsZSB0b24gc8OpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiUsOpdGFibGlyIGxhIGNvdWxldXIgc3RhbmRhcmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJTZXBpYVwiXSA9IFwiU8OpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiTGFyZ2VcIl0gPSBcIkdyYW5kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiTWVkaXVtXCJdID0gXCJNb3llbm5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU21hbGxcIl0gPSBcIlBldGl0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQbGVpbiDDqWNyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJRdWl0dGVyIGxlIHBsZWluIMOpY3JhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIk9mZlwiXSA9IFwiRMOpc2FjdGl2w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVml0ZXNzZSBkZSBsZWN0dXJlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlLDqXRhYmxpciBsZXMgcGFyYW3DqHRyZXMgcGFyIGTDqWZhdXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJTZXR0aW5nc1wiXSA9IFwiUGFyYW3DqHRyZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlNvdXMtdGl0cmVzIGFjdGl2w6lzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiU291cy10aXRyZXMgZMOpc2FjdGl2w6lzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RlIGNpbsOpbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiUXVpdHRlciBsZSBtb2RlIGNpbsOpbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJRdWFsaXTDqSB2aWTDqW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIkFmZmljaGVyIGRhbnMgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIlNlYXJjaFwiXSA9IFwiUmVjaGVyY2hlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJmclwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpcXVlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiT25cIl0gPSBcIkFjdGl2w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvdWxldXIgZHUgdGV4dGXCoDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImZyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRhaWxsZSBkdSB0ZXh0ZcKgOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZnJcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiUmV0b3VyIGF1IG1lbnUgcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyZW5jaWEgZG8gZm9uZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlN1YnTDrXR1bG9zIGRlc2FjdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJTdWJ0w610dWxvcyBhY3RpdmFkb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiU3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDs24gZGUgc3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJJbnZlcnRlciBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkludmVydGVyIGVzdMOhbmRhciBpbnZlcnNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU3RhbmRhcmRcIl0gPSBcIkVzdMOhbmRhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiU21hbGxcIl0gPSBcIlBlcXVlbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiUGFudGFsbGEgY29tcGxldGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJTYcOtciBkYSBwYW50YWxsYSBjb21wbGV0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIk9mZlwiXSA9IFwiRGVzYWN0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpZGFkZSBkZSByZXByb2R1Y2nDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiSW52ZXJ0ZXIgw6EgY29uZmlndXJhY2nDs24gcHJlZGVmaW5pZGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQ29uZmlndXJhY2nDs25cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlN1YnTDrXR1bG9zIGFjdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlN1YnTDrXR1bG9zIGRlc2FjdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kbyBjaW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlNhw61yIGRvIG1vZG8gY2luZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkNhbGlkYWRlIGRlIHbDrWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmVyIGVuIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJTZWFyY2hcIl0gPSBcIkJ1c2NhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tw6F0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiT25cIl0gPSBcIk9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImdsXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJDb3IgZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJnbFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUYW1hw7FvIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiZ2xcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVm9sdmVyIGFvIG1lbsO6IHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLXqden15nXpNeV16og16jXp9eiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLXm9eq15XXkdeZ15XXqiDXnNeb15HXk9eZINep157Xmdei15Qg15vXkdeV15nXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIteb16rXldeR15nXldeqINec15vXkdeT15kg16nXnteZ16LXlCDXpNeV16LXnNeV16pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi15vXqteV15HXmdeV16og15zXm9eR15PXmSDXqdee15nXoteUIC8g15vXqteV15HXmdeV16og16jXkteZ15zXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIteU15LXk9eo15XXqiDXm9eq15XXkdeZ15XXqiDXnNeb15HXk9eZINep157Xmdei15QgLyDXm9eq15XXkdeZ15XXqiDXqNeS15nXnNeV16pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLXl9eV150g15vXlNeUINeU16TXldeaXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi16bXkdeiINeo15LXmdecINeU16TXldeaXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU2VwaWFcIl0gPSBcIteX15XXnSDXm9eU15RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTdGFuZGFyZFwiXSA9IFwi16jXkteZ15xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJMYXJnZVwiXSA9IFwi15LXk9eV15xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJNZWRpdW1cIl0gPSBcIteR15nXoNeV16DXmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlNtYWxsXCJdID0gXCLXp9eY159cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi157XodeaINee15zXkFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItem15Ag157Xnteh15og157XnNeQXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiT2ZmXCJdID0gXCLigI/igI/Xm9eR15XXmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLXnteU15nXqNeV16og15TXpNei15zXlFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLXl9eW15XXqCDXnNeU15LXk9eo15XXqiDXkdeo15nXqNeqINeU157Xl9eT15xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTZXR0aW5nc1wiXSA9IFwi15TXkteT16jXldeqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLXm9eq15XXkdeZ15XXqiDXpNeV16LXnNeV16pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLXm9eq15XXkdeZ15XXqiDXm9eR15XXmdeV16pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItee16bXkSDXp9eV15zXoNeV16JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi16bXkCDXntee16bXkSDXp9eV15zXoNeV16JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLXkNeZ15vXldeqINeV15nXk9eQ15VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIteU16bXkiDXkS0gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoZVwiXVtcIlNlYXJjaFwiXSA9IFwi15fXpNepXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiQXV0b1wiXSA9IFwi15DXldeY15XXnteY15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJDQ1wiXSA9IFwi15vXqteV15HXmdeV16og157Xp9eV15PXk9eV16pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJPblwiXSA9IFwi4oCP4oCP16TXldei15xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItem15HXoiDXmNen16HXmDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhlXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIteS15XXk9ecINeY16fXodeYOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGVcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi15fXlteo15Qg15zXqtek16jXmdeYINeU16jXkNep15lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi4KSq4KWD4KS34KWN4KSg4KSt4KWC4KSu4KS/IOCkquCkvuCksOCkpuCksOCljeCktuCkv+CkpOCkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi4KSV4KWI4KSq4KWN4KS24KSoIOCkrOCkguCkpiDgpJXgpLDgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi4KSV4KWI4KSq4KWN4KS24KSoIOCkmuCkvuCksuClgiDgpJXgpLDgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi4KSV4KWI4KSq4KWN4KS24KSoIC8g4KSJ4KSq4KS24KWA4KSw4KWN4KS34KSVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuCkleCliOCkquCljeCktuCkqCAvIOCkieCkquCktuClgOCksOCljeCkt+CklSDgpLjgpYfgpJ/gpL/gpILgpJfgpY3gpLhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLgpLDgpL/gpLXgpLDgpY3gpLgg4KS44KWH4KSq4KS/4KSv4KS+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi4KSw4KS/4KS14KSw4KWN4KS4IOCkruCkvuCkqOCklVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlNlcGlhXCJdID0gXCLgpLjgpYfgpKrgpL/gpK/gpL5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTdGFuZGFyZFwiXSA9IFwi4KSu4KS+4KSo4KSVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiTGFyZ2VcIl0gPSBcIuCkrOCkoeCkvOCkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIk1lZGl1bVwiXSA9IFwi4KSu4KSn4KWN4KSv4KSuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU21hbGxcIl0gPSBcIuCkm+Cli+Ckn+CkvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLgpKrgpYLgpLDgpY3gpKMg4KS44KWN4KSV4KWN4KSw4KWA4KSoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi4KSq4KWC4KSw4KWN4KSjIOCkuOCljeCkleCljeCksOClgOCkqCDgpLjgpYcg4KSs4KS+4KS54KSwIOCkqOCkv+CkleCksuClh+CkglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIk9mZlwiXSA9IFwi4KSs4KSC4KSmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuCkquCljeCksuClh+CkrOCliOCklSDgpLjgpY3gpKrgpYDgpKFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi4KSh4KS/4KSr4KS84KWJ4KSy4KWN4KSfIOCkuOClh+Ckn+Ckv+CkguCkl+CljeCkuCDgpJXgpYAg4KSq4KWC4KSw4KWN4KS14KS44KWN4KSl4KS/4KSk4KS/IOCkquCksCDgpLLgpL7gpI/gpIFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTZXR0aW5nc1wiXSA9IFwi4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLgpIngpKrgpLbgpYDgpLDgpY3gpLfgpJUg4KSa4KS+4KSy4KWCIOCkleCksOClh+CkglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuCkieCkquCktuClgOCksOCljeCkt+CklSDgpKzgpILgpKYg4KSV4KSw4KWH4KSCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLgpKXgpL/gpK/gpYfgpJ/gpLAg4KSu4KWL4KShXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIuCkpeCkv+Ckr+Clh+Ckn+CksCDgpK7gpYvgpKEg4KS44KWHIOCkrOCkvuCkueCksCDgpKjgpL/gpJXgpLLgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLgpLXgpYDgpKHgpL/gpK/gpYsg4KSX4KWB4KSj4KS14KSk4KWN4KSk4KS+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFtIOCkruClh+CkgiDgpKbgpYfgpJbgpYfgpIJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJTZWFyY2hcIl0gPSBcIuCkluCli+CknOClh+CkglwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkF1dG9cIl0gPSBcIuCkuOCljeCkteCkmuCkvuCksuCkv+CkpFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoaVwiXVtcIkNDXCJdID0gXCLgpKrgpY3gpLDgpKTgpL/gpLLgpL/gpKrgpL9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJPblwiXSA9IFwi4KSa4KS+4KSy4KWCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLgpKrgpL7gpKAg4KSV4KS+IOCksOCkguCklzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhpXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuCkquCkvuCkoCDgpJXgpL4g4KSG4KSV4KS+4KSwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaGlcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi4KSu4KWB4KSW4KWN4KSvIOCkruClh+CkqOClgiDgpKrgpLAg4KS14KS+4KSq4KS4IOCknOCkvuCkj+CkgVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJQcm96aXJub3N0IHBvemFkaW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJUaXRsb3ZpIGlza2xqdcSNZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIlRpdGxvdmkgdWtsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUSXRsb3ZpIC8gcG9kbmFzbG92aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJQb3N0YXZrZSB0aXRsb3ZhIC8gcG9kbmFzbG92YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIk9icm51dGEgc2VwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT2JybnV0aSBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlNlcGlhXCJdID0gXCJTZXBpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkxhcmdlXCJdID0gXCJWZWxpa29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJNZWRpdW1cIl0gPSBcIlNyZWRuamVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTbWFsbFwiXSA9IFwiTWFsb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJDaWplbGkgemFzbG9uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiSXpsYXogaXogY2lqZWxvZyB6YXNsb25hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiT2ZmXCJdID0gXCJJc2tsanXEjWVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJCcnppbmEgcmVwcm9kdWtjaWplXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlZyYcSHYW5qZSBuYSB6YWRhbmUgcG9zdGF2a2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlBvZG5hc2xvdmkgdWtsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlBvZG5hc2xvdmkgaXNrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk5hxI1pbiBraW5vLXByaWthemFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiSXpsYXogaXogbmHEjWluYSBraW5vLXByaWthemFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdmFsaXRldGEgdmlkZW96YXBpc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlByaWtheiB1IHpuYcSNYWpjaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiU2VhcmNoXCJdID0gXCJQcmV0cmHFvml2YW5qZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJoclwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRza2lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJDQ1wiXSA9IFwiS29waWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiT25cIl0gPSBcIlVrbGp1xI1lbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJvamEgdGVrc3RhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHJcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVmVsacSNaW5hIHRla3N0YTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImhyXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIk5hdHJhZyBuYSBnbGF2bmkgaXpib3JuaWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiSMOhdHTDqXIgw6F0dGV0c3rFkXPDqWdlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJBa2Fkw6FseW1lbnRlcyBmZWxpcmF0b2sga2lrYXBjc29sw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJBa2Fkw6FseW1lbnRlcyBmZWxpcmF0b2sgYmVrYXBjc29sw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJBa2Fkw6FseW1lbnRlcyBmZWxpcmF0b2svZmVsaXJhdG9rXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkFrYWTDoWx5bWVudGVzIGZlbGlyYXRvay9mZWxpcmF0b2sgYmXDoWxsw610w6FzYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJGb3Jkw610b3R0IHN6w6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJGb3Jkw610b3R0IG5vcm3DoWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJTZXBpYVwiXSA9IFwiU3rDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlN0YW5kYXJkXCJdID0gXCJOb3Jtw6FsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiTGFyZ2VcIl0gPSBcIk5hZ3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJNZWRpdW1cIl0gPSBcIkvDtnplcGVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU21hbGxcIl0gPSBcIktpY3NpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRlbGplcyBrw6lwZXJuecWRXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiVGVsamVzIGvDqXBlcm55xZFzIG3Ds2QgYmV6w6Fyw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIk9mZlwiXSA9IFwiS2lrYXBjc29sdmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiTGVqw6F0c3rDoXMgc2ViZXNzw6lnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJBbGFww6lydGVsbWV6ZXR0IGJlw6FsbMOtdMOhc29rIHZpc3N6YcOhbGzDrXTDoXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkJlw6FsbMOtdMOhc29rXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJGZWxpcmF0b2sgYmVrYXBjc29sw6FzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkZlbGlyYXRvayBraWthcGNzb2zDoXNhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb3ppIG3Ds2RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaHVcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiS2lsw6lww6lzIGEgbW96aSBtw7NkYsOzbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGXDsyBtaW7FkXPDqWdlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNZWd0ZWtpbnTDqXMgYSBNaWNyb3NvZnQgU3RyZWFtYmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiU2VhcmNoXCJdID0gXCJLZXJlc8Opc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJodVwiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpa3VzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQ0NcIl0gPSBcIk3DoXNvbGF0b3Qga2FwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiT25cIl0gPSBcIkJla2FwY3NvbHZhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJTesO2dmVnIHN6w61uZTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlN6w7Z2ZWcgbcOpcmV0ZTogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImh1XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlZpc3N6YSBhIGbFkW1lbsO8YmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXJhbnNpIGxhdGFyIGJlbGFrYW5nXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJLZXRlcmFuZ2FuIG5vbmFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIktldGVyYW5nYW4gYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiS2V0ZXJhbmdhbiAvIFN1YnRpdGVsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIlBlbmdhdHVyYW4gS2V0ZXJhbmdhbiAvIFN1YnRpdGVsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU2VwaWEgYmFsaWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJTdGFuZGFyIGJhbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkxhcmdlXCJdID0gXCJCZXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIk1lZGl1bVwiXSA9IFwiTWVkaXVtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiU21hbGxcIl0gPSBcIktlY2lsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkxheWFyIHBlbnVoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiS2VsdWFyIGRhcmkgbGF5YXIgcGVudWhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJPZmZcIl0gPSBcIk5vbmFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIktlY2VwYXRhbiBwZW11dGFyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiS2VtYmFsaWthbiBrZSBwZW5nYXR1cmFuIGRlZmF1bHRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTZXR0aW5nc1wiXSA9IFwiUGVuZ2F0dXJhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidGl0ZWwgYWt0aWZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0aXRlbCBub25ha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kZSB0ZWF0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiS2VsdWFyIGRhcmkgbW9kZSB0ZWF0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdWFsaXRhcyB2aWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiTGloYXQgZGkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIlNlYXJjaFwiXSA9IFwiQ2FyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkF1dG9cIl0gPSBcIk90b21hdGlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiT25cIl0gPSBcIkFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImlkXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJXYXJuYSB0ZWtzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaWRcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVWt1cmFuIHRla3M6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpZFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJLZW1iYWxpIGtlIG1lbnUgdXRhbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhc3BhcmVuemEgc2ZvbmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJTb3R0b3RpdG9saSBkaXNhdHRpdmF0aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJTb3R0b3RpdG9saSBhdHRpdmF0aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJTb3R0b3RpdG9saVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJJbXBvc3Rhemlvbmkgc290dG90aXRvbGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJTZXBwaWEgaW52ZXJ0aXRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmQgaW52ZXJ0aXRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiU2VwaWFcIl0gPSBcIlNlcHBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiU21hbGxcIl0gPSBcIlBpY2NvbG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiU2NoZXJtbyBpbnRlcm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJDaGl1ZGkgbGEgdmlzdWFsaXp6YXppb25lIHNjaGVybW8gaW50ZXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiT2ZmXCJdID0gXCJEaXNhdHRpdmF0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJWZWxvY2l0w6Agcmlwcm9kdXppb25lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlJpcHJpc3RpbmEgaW1wb3N0YXppb25pIHByZWRlZmluaXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkltcG9zdGF6aW9uaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU290dG90aXRvbGkgYXR0aXZhdGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTb3R0b3RpdG9saSBkaXNhdHRpdmF0aVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kYWxpdMOgIHNjaGVybW8gaW50ZXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkVzY2kgZGFsbGEgbW9kYWxpdMOgIHNjaGVybW8gaW50ZXJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGl0w6AgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpc3VhbGl6emEgaW4gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlNlYXJjaFwiXSA9IFwiQ2VyY2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aWNvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQ0NcIl0gPSBcIkNjXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiT25cIl0gPSBcIlPDrFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJpdFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29sb3JlIHRlc3RvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiaXRcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiRGltZW5zaW9uaSB0ZXN0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIml0XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlRvcm5hIGFsIG1lbnUgcHJpbmNpcGFsZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLog4zmma/jga7pgI/mmI7luqZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIuWtl+W5leOCquODlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLlrZfluZXjgqrjg7NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuWtl+W5leOBruioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIuOCu+ODlOOCouOCkuWFg+OBq+aIu+OBmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIuaomea6luOBq+aIu+OBmVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlNlcGlhXCJdID0gXCLjgrvjg5TjgqJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJTdGFuZGFyZFwiXSA9IFwi5qiZ5rqWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiTGFyZ2VcIl0gPSBcIuWkp1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIk1lZGl1bVwiXSA9IFwi5LitXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU21hbGxcIl0gPSBcIuWwj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLlhajnlLvpnaLooajnpLpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLlhajnlLvpnaLooajnpLrjgpLntYLkuoZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJPZmZcIl0gPSBcIuOCquODlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLlho3nlJ/pgJ/luqZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi5pei5a6a44Gu6Kit5a6a44Gr5oi744GZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJqYVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi5a2X5bmV44Kq44OzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi5a2X5bmV44Kq44OVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLjgrfjgqLjgr/jg7wg44Oi44O844OJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIuOCt+OCouOCv+ODvCDjg6Ljg7zjg4njga7ntYLkuoZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLli5XnlLvjga7nlLvos6pcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIk1pY3Jvc29mdCBTdHJlYW0g44Gn6KGo56S6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiU2VhcmNoXCJdID0gXCLmpJzntKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJBdXRvXCJdID0gXCLoh6rli5VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiamFcIl1bXCJPblwiXSA9IFwi44Kq44OzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLjg4bjgq3jgrnjg4jjga7oibI6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuODhuOCreOCueODiCDjgrXjgqTjgro6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImphXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIuODoeOCpOODsyDjg6Hjg4vjg6Xjg7zjgavmiLvjgotcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi0KTQvtC9INC806nQu9C00ZbRgNC70ZbQs9GWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLQodGD0LHRgtC40YLRgNC70LXRgCDTqdGI0ZbRgNGD0LvRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLQodGD0LHRgtC40YLRgNC70LXRgCDSm9C+0YHRg9C70YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAgLyDQotCw0pvRi9GA0YvQv9GC0LDRgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCLQodGD0LHRgtC40YLRgNC70LXRgCAvINCi0LDSm9GL0YDRi9C/0YLQsNGAINC/0LDRgNCw0LzQtdGC0YDQu9C10YDRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcItCa0LXRgNGWINGB0LXQv9C40Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLQmtC10YDRliDRgdGC0LDQvdC00LDRgNGCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU2VwaWFcIl0gPSBcItCh0LXQv9C40Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJTdGFuZGFyZFwiXSA9IFwi0KHRgtCw0L3QtNCw0YDRgtGC0YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJMYXJnZVwiXSA9IFwi0q7Qu9C60LXQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIk1lZGl1bVwiXSA9IFwi0J7RgNGC0LDRiNCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU21hbGxcIl0gPSBcItCa0ZbRiNGWXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCi0L7Qu9GL0psg0Y3QutGA0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItCi0L7Qu9GL0psg0Y3QutGA0LDQvdC90LDQvSDRiNGL0pPRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIk9mZlwiXSA9IFwi06jRiNGW0YDRg9C70ZZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi0J7QudC90LDRgtGDINC20YvQu9C00LDQvNC00YvSk9GLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcItOY0LTQtdC/0LrRliDQv9Cw0YDQsNC80LXRgtGA0LvQtdGA0LTRliDSm9Cw0LnRgtCw0YDRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlNldHRpbmdzXCJdID0gXCLQn9Cw0YDQsNC80LXRgtGA0LvQtdGAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLQodGD0LHRgtC40YLRgNC70LXRgCDSm9C+0YHRi9C70pPQsNC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDQu9C10YAg06nRiNGW0YDRltC70LPQtdC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQotC10LDRgtGAINGA0LXQttC40LzRllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLQotC10LDRgtGAINGA0LXQttC40LzRltC90LXQvSDRiNGL0pPRg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcItCR0LXQudC90LUg0YHQsNC/0LDRgdGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFtINKb0YvQt9C80LXRgtGW0L3QtNC1INC606nRgNGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiU2VhcmNoXCJdID0gXCLQhtC30LTQtdGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQXV0b1wiXSA9IFwi0JDQstGC0L7QvNCw0YLRgtGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiQ0NcIl0gPSBcItCa06nRiNGW0YDQvNC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiT25cIl0gPSBcItKa0L7RgdGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtrXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQnNOZ0YLRltC9INGC0q/RgdGWOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia2tcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0JzTmdGC0ZbQvSDTqdC70YjQtdC80ZY6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJra1wiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCLQkdCw0YHRgtGLINC805nQt9GW0YDQs9C1INC+0YDQsNC70YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi67Cw6rK9IO2IrOuqheuPhFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi7Lqh7IWYIOuBlFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLsuqHshZgg7LysXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuy6oeyFmC/snpDrp4lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi7Lqh7IWYL+yekOuniSDshKTsoJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLshLjtlLzslYQg67CY7KCEXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi7ZGc7KSAIOuwmOyghFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNlcGlhXCJdID0gXCLshLjtlLzslYRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJTdGFuZGFyZFwiXSA9IFwi7ZGc7KSAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiTGFyZ2VcIl0gPSBcIu2BrOqyjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIk1lZGl1bVwiXSA9IFwi67O07Ya1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiU21hbGxcIl0gPSBcIuyekeqyjFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCLsoITssrQg7ZmU66m0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwi7KCE7LK0IO2ZlOuptCDrgZ3rgrTquLBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJPZmZcIl0gPSBcIuq6vOynkFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCLsnqzsg50g7IaN64+EXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIuq4sOuzuCDshKTsoJXsnLzroZwg65CY64+M66as6riwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiU2V0dGluZ3NcIl0gPSBcIuyEpOyglVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi7J6Q66eJIOy8rFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIuyekOuniSDrgZRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIuq3ueyepSDrqqjrk5xcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi6re57J6lIOuqqOuTnCDrgZ3rgrTquLBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLruYTrlJTsmKQg7ZmU7KeIXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFt7JeQ7IScIOuztOq4sFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlNlYXJjaFwiXSA9IFwi6rKA7IOJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQXV0b1wiXSA9IFwi7J6Q64+ZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImtvXCJdW1wiQ0NcIl0gPSBcIuywuOyhsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIk9uXCJdID0gXCLshKTsoJVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIu2FjeyKpO2KuCDsg4k6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJrb1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLthY3siqTtirgg7YGs6riwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wia29cIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi6riw67O4IOuplOuJtOuhnCDrj4zslYTqsIDquLBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiRm9ubyBza2FpZHJ1bWFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJJxaFqdW5ndGkgdmFpemRvIGFwcmHFoXVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIsSuanVuZ3RpIHZhaXpkbyBhcHJhxaF1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJWYWl6ZG8gYXByYcWhYWkgLyBzdWJ0aXRyYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVmFpemRvIGFwcmHFocWzIC8gc3VidGl0csWzIHBhcmFtZXRyYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJBdMWhYXVrdGkgc2VwaWrEhVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIkF0xaFhdWt0aSBzdGFuZGFydGluxJlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJ0aW5pc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkxhcmdlXCJdID0gXCJEaWRlbGlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiTWVkaXVtXCJdID0gXCJWaWR1dGluaXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTbWFsbFwiXSA9IFwiTWHFvmFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlZpc2FzIGVrcmFuYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJJxaFqdW5ndGkgcm9keW3EhSB2aXNhbWUgZWtyYW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiT2ZmXCJdID0gXCJJxaFqdW5ndGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiTGVpZGltbyBncmVpdGlzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkdyxIXFvmludGkgbnVtYXR5dHVvc2l1cyBwYXJhbWV0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiU2V0dGluZ3NcIl0gPSBcIlBhcmFtZXRyYWlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIsSuanVuZ3RpIHN1YnRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIknFoWp1bmd0aSBzdWJ0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIuKAnlNjZW5vc+KAnCByZcW+aW1hc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJJxaFlaXRpIGnFoSDigJ5zY2Vub3PigJwgcmXFvmltb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZhaXpkbyBrb2t5YsSXXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJSb2R5dGkgbmF1ZG9qYW50IOKAnk1pY3Jvc29mdCBTdHJlYW3igJxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJTZWFyY2hcIl0gPSBcIkllxaFrb3RpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdGluaXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJDQ1wiXSA9IFwiS29waWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiT25cIl0gPSBcIsSuanVuZ3RhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx0XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdG8gc3BhbHZhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGVrc3RvIGR5ZGlzOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiR3LEr8W+dGkgxK8gcGFncmluZGluxK8gbWVuaXVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiRm9uYSBjYXVyc3DEq2TEq2d1bXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkl6c2zEk2d0IHRpdHJ1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJJZXNsxJNndCB0aXRydXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVGl0cmkvc3VidGl0cmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGl0cnUvc3VidGl0cnUgaWVzdGF0xKtqdW1pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiQXBncmllenRhIHPEk3BpamFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJBcGdyaWV6dGEgc3RhbmRhcnRhIGtyxIFzYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNlcGlhXCJdID0gXCJTxJNwaWphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJ0YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIkxhcmdlXCJdID0gXCJMaWVsc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIk1lZGl1bVwiXSA9IFwiVmlkxJNqc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlNtYWxsXCJdID0gXCJNYXpzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlBpbG5la3LEgW5hIHJlxb7Eq21zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiSXppZXQgbm8gcGlsbmVrcsSBbmEgcmXFvsSrbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJPZmZcIl0gPSBcIkl6c2zEk2d0c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBdHNrYcWGb8WhYW5hcyDEgXRydW1zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkF0amF1bm90IG5va2x1c8STanVtYSBpZXN0YXTEq2p1bXVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiU2V0dGluZ3NcIl0gPSBcIkllc3RhdMSranVtaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiSWVzbMSTZ3Qgc3VidGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiSXpzbMSTZ3Qgc3VidGl0cnVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUZcSBdHJhIHJlxb7Eq21zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkl6aWV0IG5vIHRlxIF0cmEgcmXFvsSrbWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJWaWRlbyBrdmFsaXTEgXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJTa2F0xKt0IHBha2FscG9qdW3EgSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiU2VhcmNoXCJdID0gXCJNZWtsxJN0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQXV0b1wiXSA9IFwiQXV0b23EgXRpc2tpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQ0NcIl0gPSBcIktvcGlqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIk9uXCJdID0gXCJJZXNsxJNndHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibHZcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRla3N0YSBrcsSBc2E6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJsdlwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdGEgbGllbHVtczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcImx2XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkF0Z3JpZXp0aWVzIGdhbHZlbmFqxIEgaXp2xJNsbsSTXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIktlbHV0c2luYXJhbiBsYXRhciBiZWxha2FuZ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiS2Fwc3llbiB0aWRhayBha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJLYXBzeWVuIGFrdGlmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkthcHN5ZW4gLyBTYXJpIGthdGFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVGV0YXBhbiBLYXBzeWVuIC8gU2FyaSBrYXRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiVGVyYmFsaWtrYW4gc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJUZXJiYWxpa2thbiBzdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkxhcmdlXCJdID0gXCJCZXNhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIk1lZGl1bVwiXSA9IFwiU2VkZXJoYW5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiU21hbGxcIl0gPSBcIktlY2lsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlNrcmluIHBlbnVoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiS2VsdWFyIHNrcmluIHBlbnVoXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiT2ZmXCJdID0gXCJNYXRpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIktlbGFqdWFuIG1haW4gYmFsaWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiS2VtYmFsaSBrZXBhZGEgdGV0YXBhbiBsYWxhaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlNldHRpbmdzXCJdID0gXCJTZXRpbmdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlNhcmkga2F0YSBha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlNhcmkga2F0YSB0aWRhayBha3RpZlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kIHRlYXRlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJLZWx1YXIgbW9kIHBhd2FnYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibXNcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdWFsaXRpIHZpZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJMaWhhdCBkYWxhbSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiU2VhcmNoXCJdID0gXCJDYXJpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQXV0b1wiXSA9IFwiQXV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIkNDXCJdID0gXCJTS1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIk9uXCJdID0gXCJIaWR1cFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJtc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiV2FybmEgdGVrczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlNhaXogdGVrczogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm1zXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIktlbWJhbGkga2UgbWVudSB1dGFtYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJHamVubm9tc2lrdGlnaGV0IGZvciBiYWtncnVubmVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJUZWtzdGluZyBhdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJUZWtzdGluZyBww6VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiVGVrc3RpbmcvdW5kZXJ0ZWtzdGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIklubnN0aWxsaW5nZXIgZm9yIHRla3N0aW5nL3VuZGVydGVrc3RlclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIk9tdmVuZHQgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPbXZlbmR0IHN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiTGFyZ2VcIl0gPSBcIlN0b3JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJNZWRpdW1cIl0gPSBcIk1pZGRlbHNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJTbWFsbFwiXSA9IFwiTGl0ZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiRnVsbCBza2plcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJBdnNsdXR0IGZ1bGxza2plcm1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJPZmZcIl0gPSBcIkF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIkF2c3BpbGxpbmdzaGFzdGlnaGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIkfDpSB0aWxiYWtlIHRpbCBzdGFuZGFyZGlubnN0aWxsaW5nZW5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiU2V0dGluZ3NcIl0gPSBcIklubnN0aWxsaW5nZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlVuZGVydGVrc3RlciBww6VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJVbmRlcnRla3N0ZXIgYXZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIktpbm9tb2R1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJBdnNsdXR0IGtpbm9tb2R1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVva3ZhbGl0ZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpcyBpIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJTZWFyY2hcIl0gPSBcIlPDuGtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJBdXRvXCJdID0gXCJBdXRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQ0NcIl0gPSBcIktvcGlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmJcIl1bXCJPblwiXSA9IFwiUMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJUZWtzdGZhcmdlOlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJuYlwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtzdHN0w7hycmVsc2U6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5iXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIkJhY2sgdG8gbWFpbiBtZW51XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkRvb3J6aWNodGlnaGVpZCB2YW4gYWNodGVyZ3JvbmRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkJpanNjaHJpZnRlbiB1aXRnZXNjaGFrZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkJpanNjaHJpZnRlbiBpbmdlc2NoYWtlbGRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiQmlqc2NocmlmdGVuL29uZGVydGl0ZWxzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIkluc3RlbGxpbmdlbiB2b29yIGJpanNjaHJpZnRlbi9vbmRlcnRpdGVsc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIk9tZ2VrZWVyZGUgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPbWdla2VlcmRlIHN0YW5kYWFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkxhcmdlXCJdID0gXCJHcm9vdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIk1lZGl1bVwiXSA9IFwiR2VtaWRkZWxkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiU21hbGxcIl0gPSBcIktsZWluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlZvbGxlZGlnIHNjaGVybVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlZvbGxlZGlnIHNjaGVybSB1aXRzY2hha2VsZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJPZmZcIl0gPSBcIlVpdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJBZnNwZWVsc25lbGhlaWRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiSGVyc3RlbGxlbiBuYWFyIHN0YW5kYWFyZGluc3RlbGxpbmdlblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlNldHRpbmdzXCJdID0gXCJJbnN0ZWxsaW5nZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIk9uZGVydGl0ZWxzIGluZ2VzY2hha2VsZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIk9uZGVydGl0ZWxzIHVpdGdlc2NoYWtlbGRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlRoZWF0ZXJtb2R1c1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJUaGVhdGVybW9kdXMgYWZzbHVpdGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiVmlkZW9rd2FsaXRlaXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIldlZXJnZXZlbiBpbiBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcIm5sXCJdW1wiU2VhcmNoXCJdID0gXCJab2VrZW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0aXNjaFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkNDXCJdID0gXCJDS1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIk9uXCJdID0gXCJBYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wibmxcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRla3N0a2xldXI6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJUZWtlbmdyb290dGU6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJubFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJUZXJ1ZyBuYWFyIGhldCBob29mZG1lbnVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiUHJ6ZXpyb2N6eXN0b8WbxIcgdMWCYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiUG9kcGlzeSB3ecWCxIVjem9uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJQb2RwaXN5IHfFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwiUG9kcGlzeS9uYXBpc3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiVXN0YXdpZW5pYSBwb2RwaXPDs3cvbmFwaXPDs3dcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJPZHdyw7Njb25hIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiT2R3csOzY29ueSBzdGFuZGFyZG93eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZG93YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkxhcmdlXCJdID0gXCJEdcW8eVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIk1lZGl1bVwiXSA9IFwixZpyZWRuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlNtYWxsXCJdID0gXCJNYcWCeVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJQZcWCbnkgZWtyYW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJaYW1rbmlqIHdpZG9rIHBlxYJub2VrcmFub3d5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiT2ZmXCJdID0gXCJXecWCxIVjem9uZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJTenlia2/Fm8SHIG9kdHdhcnphbmlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlByenl3csOzxIcgdXN0YXdpZW5pYSBkb215xZtsbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTZXR0aW5nc1wiXSA9IFwiVXN0YXdpZW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwbFwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiTmFwaXN5IHfFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJOYXBpc3kgd3nFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlRyeWIga2lub3d5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIld5amTFuiB6IHRyeWJ1IGtpbm93ZWdvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiSmFrb8WbxIcgd2lkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIld5xZt3aWV0bCB3IHVzxYJ1ZHplIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJTZWFyY2hcIl0gPSBcIld5c3p1a2FqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQXV0b1wiXSA9IFwiQXV0b21hdHljem5lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQ0NcIl0gPSBcIkJLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiT25cIl0gPSBcIlfFgsSFY3pvbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIktvbG9yIHRla3N0dTpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicGxcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiUm96bWlhciB0ZWtzdHU6XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInBsXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlBvd3LDs3QgZG8gbWVudSBnxYLDs3duZWdvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyw6puY2lhIGRvIHBsYW5vIGRlIGZ1bmRvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJMZWdlbmRhcyBkZXNhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMZWdlbmRhcyBhdGl2YWRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJMZWdlbmRhc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJDb25maWd1cmHDp8O1ZXMgZGFzIGxlZ2VuZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiU8OpcGlhIGludmVyc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJQYWRyw6NvIGludmVyc29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTZXBpYVwiXSA9IFwiU8OpcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiTGFyZ2VcIl0gPSBcIkdyYW5kZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIk1lZGl1bVwiXSA9IFwiTcOpZGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU21hbGxcIl0gPSBcIlBlcXVlbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiVGVsYSBpbnRlaXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2FpciBkZSB0ZWxhIGludGVpcmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJPZmZcIl0gPSBcIkRlc2F0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpZGFkZSBkZSByZXByb2R1w6fDo29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUmV2ZXJ0ZXIgcGFyYSBjb25maWd1cmHDp8O1ZXMgcGFkcsOjb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlNldHRpbmdzXCJdID0gXCJDb25maWd1cmHDp8O1ZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIkxlZ2VuZGFzIGF0aXZhZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiTGVnZW5kYXMgZGVzYXRpdmFkYXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIk1vZG8gZGUgdGVhdHJvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlNhaXIgZG8gbW9kbyBkZSB0ZWF0cm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJRdWFsaWRhZGUgZGUgdsOtZGVvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJFeGliaXIgbm8gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIlNlYXJjaFwiXSA9IFwiUGVzcXVpc2FyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiQXV0b1wiXSA9IFwiQXV0b23DoXRpY29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJPblwiXSA9IFwiTGlnYXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtYnJcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkNvciBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LWJyXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRhbWFuaG8gZG8gdGV4dG86IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1iclwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJWb2x0YXIgYW8gbWVudSBwcmluY2lwYWxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwiVHJhbnNwYXLDqm5jaWEgZGUgZnVuZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIkxlZ2VuZGFzIGRlc2F0aXZhZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkxlZ2VuZGFzIGF0aXZhZGFzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkxlZ2VuZGFzIC8gU3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiRGVmaW5pw6fDtWVzIGRlIExlZ2VuZGFzIC8gU3VidMOtdHVsb3NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJJbnZlcnRlciBzw6lwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJSZXZlcnRlciBwYWRyw6NvXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFyZFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkxhcmdlXCJdID0gXCJHcmFuZGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJNZWRpdW1cIl0gPSBcIk3DqWRpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlNtYWxsXCJdID0gXCJQZXF1ZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkVjcsOjIGludGVpcm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCJTYWlyIGRvIGVjcsOjIGludGVpcm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJPZmZcIl0gPSBcIkRlc2F0aXZhZG9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVmVsb2NpZGFkZSBkZSByZXByb2R1w6fDo29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUmV2ZXJ0ZXIgcGFyYSBwcmVkZWZpbmnDp8O1ZXNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJTZXR0aW5nc1wiXSA9IFwiRGVmaW5pw6fDtWVzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJTdWJ0w610dWxvcyBhdGl2YWRvc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlN1YnTDrXR1bG9zIGRlc2F0aXZhZG9zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJNb2RvIGRlIGNpbmVtYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJTYWlyIGRvIG1vZG8gZGUgY2luZW1hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiUXVhbGlkYWRlIGRlIHbDrWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmlzdGEgbm8gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlNlYXJjaFwiXSA9IFwiUGVzcXVpc2FyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQXV0b1wiXSA9IFwiQXV0b23DoXRpY29cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJPblwiXSA9IFwiQXRpdmFkb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJwdC1wdFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQ29yIGRvIHRleHRvOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicHQtcHRcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVGFtYW5obyBkbyB0ZXh0bzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInB0LXB0XCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIlZvbHRlIGFvIG1lbnUgcHJpbmNpcGFsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlRyYW5zcGFyZW7Im8SDIGZ1bmRhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTGVnZW5kZSBkZXphY3RpdmF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJMZWdlbmRlIGFjdGl2YXRlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkxlZ2VuZGUvc3VidGl0csSDcmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiU2V0xINyaSBwZW50cnUgbGVnZW5kZS9zdWJ0aXRyxINyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlNlcGlhIGludmVyc1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkIGludmVyc2F0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiTGFyZ2VcIl0gPSBcIk1hcmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGl1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiU21hbGxcIl0gPSBcIk1pY1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJFY3JhbiBjb21wbGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiSWXImWnIm2kgZGluIG1vZHVsIGVjcmFuIGNvbXBsZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJPZmZcIl0gPSBcIkRlemFjdGl2YXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVml0ZXrEgyBkZSByZWRhcmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiUmV2ZW5pyJtpIGxhIHNldMSDcmlsZSBpbXBsaWNpdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTZXR0aW5nc1wiXSA9IFwiU2V0xINyaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiU3VidGl0csSDcmkgYWN0aXZhdGVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCJTdWJ0aXRyxINyaSBkZXphY3RpdmF0ZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiTW9kdWwgdGVhdHJ1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIkllyJlpyJtpIGRpbiBtb2R1bCB0ZWF0cnVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJDYWxpdGF0ZSB2aWRlb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiVmVkZcibaSDDrm4gTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJyb1wiXVtcIlNlYXJjaFwiXSA9IFwiQ8SDdXRhcmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJBdXRvXCJdID0gXCJBdXRvbWF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiT25cIl0gPSBcIkFjdGl2YXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicm9cIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkN1bG9hcmUgdGV4dDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIkRpbWVuc2l1bmUgdGV4dDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJvXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIsOObmFwb2kgbGEgbWVuaXVsIHByaW5jaXBhbFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLQn9GA0L7Qt9GA0LDRh9C90L7RgdGC0Ywg0YTQvtC90LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0L7RgtC60LvRjtGH0LXQvdGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcItCh0YPQsdGC0LjRgtGA0Ysg0LLQutC70Y7Rh9C10L3Ri1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLQodGD0LHRgtC40YLRgNGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcItCf0LDRgNCw0LzQtdGC0YDRiyDRgdGD0LHRgtC40YLRgNC+0LJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQmNC30LzQtdC90LjRgtGMINC90LAg0YHQtdC/0LjRjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCY0LfQvNC10L3QuNGC0Ywg0L3QsCDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INGG0LLQtdGCXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU2VwaWFcIl0gPSBcItCh0LXQv9C40Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJTdGFuZGFyZFwiXSA9IFwi0KHRgtCw0L3QtNCw0YDRgtC90YvQuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkxhcmdlXCJdID0gXCLQkdC+0LvRjNGI0L7QuVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIk1lZGl1bVwiXSA9IFwi0KHRgNC10LTQvdC40LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJTbWFsbFwiXSA9IFwi0JzQtdC70LrQuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcItCS0L4g0LLQtdGB0Ywg0Y3QutGA0LDQvVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItCS0YvQudGC0Lgg0LjQtyDQv9C+0LvQvdC+0Y3QutGA0LDQvdC90L7Qs9C+INGA0LXQttC40LzQsFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIk9mZlwiXSA9IFwi0J7RgtC60LsuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCh0LrQvtGA0L7RgdGC0Ywg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcItCS0LXRgNC90YPRgtGMINC6INC/0LDRgNCw0LzQtdGC0YDQsNC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU2V0dGluZ3NcIl0gPSBcItCf0LDRgNCw0LzQtdGC0YDRi1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDRiyDQstC60LvRjtGH0LXQvdGLXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi0KHRg9Cx0YLQuNGC0YDRiyDQvtGC0LrQu9GO0YfQtdC90YtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcItCg0LXQttC40Lwg0YLQtdCw0YLRgNCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCS0YvQudGC0Lgg0LjQtyDRgNC10LbQuNC80LAg0YLQtdCw0YLRgNCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0JrQsNGH0LXRgdGC0LLQviDQstC40LTQtdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCLQn9GA0L7RgdC80L7RgtGA0LXRgtGMINCyIE1pY3Jvc29mdCBTdHJlYW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJTZWFyY2hcIl0gPSBcItCf0L7QuNGB0LpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJBdXRvXCJdID0gXCLQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiQ0NcIl0gPSBcIkNDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiT25cIl0gPSBcItCS0LrQu9GO0YfQtdC9XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInJ1XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLQptCy0LXRgiDRgtC10LrRgdGC0LA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJydVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLQoNCw0LfQvNC10YAg0YLQtdC60YHRgtCwOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wicnVcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi0JLQvtC30LLRgNCw0YIg0Log0L7RgdC90L7QstC90L7QvNGDINC80LXQvdGOXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByaWVoxL5hZG5vc8WlIHBvemFkaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIlRpdHVsa3kgdnlwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwiVGl0dWxreSB6YXBudXTDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJUaXR1bGt5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIk5hc3RhdmVuaWEgdGl0dWxrb3ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJacnXFoWnFpSBzw6lwaW92w6kgem9icmF6ZW5pZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlpydcWhacWlIMWhdGFuZGFyZG7DqSB6b2JyYXplbmllXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU2VwaWFcIl0gPSBcIlPDqXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlN0YW5kYXJkXCJdID0gXCLFoHRhbmRhcmRuw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJMYXJnZVwiXSA9IFwiVmXEvmvDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIk1lZGl1bVwiXSA9IFwiU3RyZWRuw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTbWFsbFwiXSA9IFwiTWFsw6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiQ2Vsw6Egb2JyYXpvdmthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiU2tvbsSNacWlIHJlxb5pbSBjZWxlaiBvYnJhem92a3lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJPZmZcIl0gPSBcIlZ5cG51dMOpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIlLDvWNobG9zxaUgcHJlaHLDoXZhbmlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlZyw6F0acWlIG5hIHByZWR2b2xlbsOpIG5hc3RhdmVuaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJTZXR0aW5nc1wiXSA9IFwiTmFzdGF2ZW5pYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiVGl0dWxreSB6YXBudXTDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlRpdHVsa3kgdnlwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIlJlxb5pbSBraW5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIlVrb27EjWnFpSByZcW+aW0ga2luYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIkt2YWxpdGEgdmlkZWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlpvYnJhemnFpSB2IE1pY3Jvc29mdCBTdHJlYW1lXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNrXCJdW1wiU2VhcmNoXCJdID0gXCJIxL5hZGHFpVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRpY2vDqVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJza1wiXVtcIkNDXCJdID0gXCJLw7NwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJPblwiXSA9IFwiWmFwbnV0w6lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkZhcmJhIHRleHR1OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVmXEvmtvc8WlIHRleHR1OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2tcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiU3DDpMWlIG5hIGhsYXZuw7ogcG9udWt1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIlByb3Nvam5vc3Qgb3phZGphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJJemtsb3BpIG5hcGlzZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJWa2xvcGkgbmFwaXNlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIk5hcGlzaS9wb2RuYXNsb3ZpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIk5hc3Rhdml0dmUgbmFwaXNvdi9wb2RuYXNsb3ZvdlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIk9icmF0bmEgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCJPYnJhdG5hIHN0YW5kYXJkbmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJTZXBpYVwiXSA9IFwiU2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkxhcmdlXCJdID0gXCJWZWxpa2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJNZWRpdW1cIl0gPSBcIlNyZWRuamUgdmVsaWthXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU21hbGxcIl0gPSBcIk1hamhuYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkZ1bGwgc2NyZWVuXCJdID0gXCJDZWxvemFzbG9uc2tpIG5hxI1pblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlphcHJpIGNlbG96YXNsb25za2kgbmHEjWluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiT2ZmXCJdID0gXCJJemtsb3BsamVub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJIaXRyb3N0IHByZWR2YWphbmphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlBvdnJuaSBuYSBwcml2emV0ZSBuYXN0YXZpdHZlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU2V0dGluZ3NcIl0gPSBcIk5hc3Rhdml0dmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIlZrbG9waSBwb2RuYXNsb3ZlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiSXprbG9waSBwb2RuYXNsb3ZlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJOYcSNaW4ga2luYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJaYXByaSBuYcSNaW4ga2luYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIktha292b3N0IHZpZGVvcG9zbmV0a2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlByaWthxb5pIHYgYXBsaWthY2lqaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiU2VhcmNoXCJdID0gXCJJc2thbmplXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQXV0b1wiXSA9IFwiU2Ftb2Rlam5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiQ0NcIl0gPSBcIktwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNsXCJdW1wiT25cIl0gPSBcIlZrbG9wbGplbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIkJhcnZhIGJlc2VkaWxhOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic2xcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiVmVsaWtvc3QgYmVzZWRpbGE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzbFwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJOYXphaiBuYSBnbGF2bmkgbWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcItCi0YDQsNC90YHQv9Cw0YDQtdC90YLQvdC+0YHRgiDQv9C+0LfQsNC00LjQvdC1XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcItCd0LDRgtC/0LjRgdC4INGB0YMg0LjRgdC60ZnRg9GH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJDYXB0aW9ucyBvblwiXSA9IFwi0J3QsNGC0L/QuNGB0Lgg0YHRgyDRg9C60ZnRg9GH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi0J3QsNGC0L/QuNGB0LggLyDQv9C+0LTQvdCw0YHQu9C+0LLQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcItCfb9GB0YLQsNCy0LrQtSDQvdCw0YLQv9C40YHQsCAvINC/0L7QtNC90LDRgdC70L7QstCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCLQntCx0YDQvdGD0YLQuCBzZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi0J7QsdGA0L3Rg9GC0L4g0YHRgtCw0L3QtNCw0YDQtNC90L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlNlcGlhXCJdID0gXCJTZXBpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU3RhbmRhcmRcIl0gPSBcItCh0YLQsNC90LTQsNGA0LTQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJMYXJnZVwiXSA9IFwi0JLQtdC70LjQutC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJNZWRpdW1cIl0gPSBcItCh0YDQtdC00ZrQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU21hbGxcIl0gPSBcItCc0LDQu9C+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi0KbQtdC+INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcItCd0LDQv9GD0YHRgtC4INC/0YDQuNC60LDQtyDQv9GA0LXQutC+INGG0LXQu9C+0LMg0LXQutGA0LDQvdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJPZmZcIl0gPSBcItCY0YHQutGZ0YPRh9C10L3QvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCR0YDQt9C40L3QsCDRgNC10L/RgNC+0LTRg9C60YbQuNGY0LBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLQktGA0LDRgtC4INC90LAg0L/QvtC00YDQsNC30YPQvNC10LLQsNC90LUg0L/QvtGB0YLQsNCy0LrQtVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiU2V0dGluZ3NcIl0gPSBcItCf0L7RgdGC0LDQstC60LVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwi0J/QvtC00L3QsNGB0LvQvtCy0Lgg0YHRgyDRg9C60ZnRg9GH0LXQvdC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLQn9C+0LTQvdCw0YHQu9C+0LLQuCDRgdGDINC40YHQutGZ0YPRh9C10L3QuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCLQn9C+0LfQvtGA0LjRiNC90Lgg0YDQtdC20LjQvFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcItCd0LDQv9GD0YHRgtC4INC/0L7Qt9C+0YDQuNGI0L3QuCDRgNC10LbQuNC8XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLQmtCy0LDQu9C40YLQtdGCINCy0LjQtNC10L4g0LfQsNC/0LjRgdCwXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcItCf0YDQuNC60LDQttC4INGDINGD0YHQu9GD0LfQuCBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJTZWFyY2hcIl0gPSBcItCf0YDQtdGC0YDQsNC20LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIkF1dG9cIl0gPSBcItCQ0YPRgtC+0LzQsNGC0YHQutC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItY3lybC1jc1wiXVtcIk9uXCJdID0gXCLQo9C60ZnRg9GH0LXQvdC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcItCR0L7RmNCwINGC0LXQutGB0YLQsDogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWN5cmwtY3NcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi0JLQtdC70LjRh9C40L3QsCDRgtC10LrRgdGC0LA6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1jeXJsLWNzXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcItCd0LDQt9Cw0LQg0L3QsCDQs9C70LDQstC90Lgg0LzQtdC90LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJUcmFuc3BhcmVudG5vc3QgcG96YWRpbmVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiTmF0cGlzaSBzdSBpc2tsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIk5hdHBpc2kgc3UgdWtsanXEjWVuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIk5hdHBpc2kgLyBwb2RuYXNsb3ZpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiUG9zdGF2a2UgbmF0cGlzYSAvIHBvZG5hc2xvdmFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIk9icm51dGkgc2VwaWFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIk9icm51dG8gc3RhbmRhcmRub1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTdGFuZGFyZFwiXSA9IFwiU3RhbmRhcmRuaVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiTGFyZ2VcIl0gPSBcIlZlbGlrb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiTWVkaXVtXCJdID0gXCJTcmVkbmphXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJTbWFsbFwiXSA9IFwiTWFsb1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkNlbyBla3JhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiRXhpdCBmdWxsIHNjcmVlblwiXSA9IFwiTmFwdXN0aSBwcmlrYXogcHJla28gY2Vsb2cgZWtyYW5hXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJPZmZcIl0gPSBcIklza2xqdcSNZW5vXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiQnJ6aW5hIHJlcHJvZHVrY2lqYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIlZyYXRpIG5hIHBvZHJhenVtZXZhbmUgcG9zdGF2a2VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlNldHRpbmdzXCJdID0gXCJQb3N0YXZrZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCJQb2RuYXNsb3ZpIHN1IHVrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlBvZG5hc2xvdmkgc3UgaXNrbGp1xI1lbmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwiUG96b3JpxaFuaSByZcW+aW1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJOYXB1c3RpIHBvem9yacWhbmkgcmXFvmltXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInNyLWxhdG4tcnNcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCJLdmFsaXRldCB2aWRlbyB6YXBpc2FcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlZpZXcgaW4gTWljcm9zb2Z0IFN0cmVhbVwiXSA9IFwiUHJpa2HFvmkgdSB1c2x1emkgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiU2VhcmNoXCJdID0gXCJQcmV0cmHFvmlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkF1dG9cIl0gPSBcIkF1dG9tYXRza2lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiT25cIl0gPSBcIlVrbGp1xI1lbm9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ItbGF0bi1yc1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwiQm9qYSB0ZWtzdGE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlZlbGnEjWluYSB0ZWtzdGE6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzci1sYXRuLXJzXCJdW1wiQmFjayB0byBtYWluIG1lbnVcIl0gPSBcIk5hemFkIG5hIGdsYXZuaSBtZW5pXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkJha2dydW5kc3RyYW5zcGFyZW5zXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJCaWxkdGV4dGVyIGF2XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkJpbGR0ZXh0ZXIgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIkJpbGR0ZXh0ZXIvdW5kZXJ0ZXh0ZXJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwiSW5zdMOkbGxuaW5nYXIgZsO2ciBiaWxkdGV4dGVyL3VuZGVydGV4dGVyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwiw4RuZHJhIHNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiw4RuZHJhIHN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiU2VwaWFcIl0gPSBcIlNlcGlhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiU3RhbmRhcmRcIl0gPSBcIlN0YW5kYXJkXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiTGFyZ2VcIl0gPSBcIlN0b3JcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJNZWRpdW1cIl0gPSBcIk1lZGVsXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiU21hbGxcIl0gPSBcIkxpdGVuXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIkhlbHNrw6RybVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIkF2c2x1dGEgZnVsbHNrw6RybXNsw6RnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIk9mZlwiXSA9IFwiQXZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVXBwc3BlbG5pbmdzaGFzdGlnaGV0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcIsOFdGVyc3TDpGxsIHRpbGwgc3RhbmRhcmRpbnN0w6RsbG5pbmdhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlNldHRpbmdzXCJdID0gXCJJbnN0w6RsbG5pbmdhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiVW5kZXJ0ZXh0ZXIgcMOlXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwiVW5kZXJ0ZXh0ZXIgYXZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIkJpb2dyYWZsw6RnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCJBdnNsdXRhIGJpb2dyYWZsw6RnZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVva3ZhbGl0ZXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlZpc2EgaSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiU2VhcmNoXCJdID0gXCJTw7ZrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiQXV0b1wiXSA9IFwiQXV0b1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIkNDXCJdID0gXCJLb3BpYVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJzdlwiXVtcIk9uXCJdID0gXCJQw6VcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIlRleHRmw6RyZzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInN2XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIlRleHRzdG9ybGVrOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wic3ZcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiVGlsbGJha2EgdGlsbCBodXZ1ZG1lbnluXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuC4hOC4p+C4suC4oeC5guC4m+C4o+C5iOC4h+C5g+C4quC4guC4reC4h+C4nuC4t+C5ieC4meC4q+C4peC4seC4h1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi4Lib4Li04LiU4LiE4Liz4Lia4Lij4Lij4Lii4Liy4LiiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIuC5gOC4m+C4tOC4lOC4hOC4s+C4muC4o+C4o+C4ouC4suC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLguITguLPguJrguKPguKPguKLguLLguKIgLyDguIvguLHguJrguYTguJXguYDguJXguLTguKVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi4LiB4Liy4Lij4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4LiE4Liz4Lia4Lij4Lij4Lii4Liy4LiiIC8g4LiL4Lix4Lia4LmE4LiV4LmA4LiV4Li04LilXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi4Lij4Li14LmA4Lin4Li04Lij4LmM4Liq4LiL4Li14LmA4Lib4Li14LiiXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwi4Lij4Li14LmA4Lin4Li04Lij4LmM4Liq4Lih4Liy4LiV4Lij4LiQ4Liy4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU2VwaWFcIl0gPSBcIuC4i+C4teC5gOC4m+C4teC4olwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlN0YW5kYXJkXCJdID0gXCLguKHguLLguJXguKPguJDguLLguJlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJMYXJnZVwiXSA9IFwi4LiC4LiZ4Liy4LiU4LmD4Lir4LiN4LmIXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiTWVkaXVtXCJdID0gXCLguJvguLLguJnguIHguKXguLLguIdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJTbWFsbFwiXSA9IFwi4LiC4LiZ4Liy4LiU4LmA4Lil4LmH4LiBXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIuC5gOC4leC5h+C4oeC4iOC4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIuC4reC4reC4geC4iOC4suC4geC5gOC4leC5h+C4oeC4iOC4rVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIk9mZlwiXSA9IFwi4LmE4Lih4LmI4LmE4LiU4LmJ4LmD4LiK4LmJ4LiH4Liy4LiZXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcIuC4hOC4p+C4suC4oeC5gOC4o+C5h+C4p+C5g+C4meC4geC4suC4o+C5gOC4peC5iOC4mVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCLguYDguJvguKXguLXguYjguKLguJnguIHguKXguLHguJrguYDguJvguYfguJnguIHguLLguKPguJXguLHguYnguIfguITguYjguLLguYDguKPguLTguYjguKHguJXguYnguJlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJTZXR0aW5nc1wiXSA9IFwi4LiB4Liy4Lij4LiV4Lix4LmJ4LiH4LiE4LmI4LiyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLguYDguJvguLTguJTguIvguLHguJrguYTguJXguYDguJXguLTguKVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJTdWJ0aXRsZXMgb2ZmXCJdID0gXCLguJvguLTguJTguIvguLHguJrguYTguJXguYDguJXguLTguKVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIuC5guC4q+C4oeC4lOC5guC4o+C4h+C4oOC4suC4nuC4ouC4meC4leC4o+C5jFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIkV4aXQgdGhlYXRlciBtb2RlXCJdID0gXCLguK3guK3guIHguIjguLLguIHguYLguKvguKHguJTguYLguKPguIfguKDguLLguJ7guKLguJnguJXguKPguYxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJWaWRlbyBxdWFsaXR5XCJdID0gXCLguITguLjguJPguKDguLLguJ7guILguK3guIfguKfguLTguJTguLXguYLguK1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIuC4lOC4ueC5g+C4mSBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiU2VhcmNoXCJdID0gXCLguITguYnguJnguKvguLJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJBdXRvXCJdID0gXCLguK3guLHguJXguYLguJnguKHguLHguJXguLRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJDQ1wiXSA9IFwi4Liq4Liz4LmA4LiZ4Liy4LiW4Li24LiHXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRoXCJdW1wiT25cIl0gPSBcIuC5g+C4iuC5ieC4h+C4suC4meC4reC4ouC4ueC5iFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0aFwiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi4Liq4Li14LiC4LmJ4Lit4LiE4Lin4Liy4LihOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwi4LiC4LiZ4Liy4LiU4LmB4Lia4Lia4Lit4Lix4LiB4Lip4LijOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widGhcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi4LiB4Lil4Lix4Lia4LmE4Lib4LiX4Li14LmI4LmA4Lih4LiZ4Li54Lir4Lil4Lix4LiBXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIkFya2EgcGxhbiBzYXlkYW1sxLHEn8SxXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCJBw6fEsWtsYW1hbMSxIGFsdCB5YXrEsWxhciBrYXBhbMSxXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIkHDp8Sxa2xhbWFsxLEgYWx0IHlhesSxbGFyIGHDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCJBw6fEsWtsYW1hbMSxIGFsdCB5YXrEsWxhciAvIEFsdCB5YXrEsWxhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJBw6fEsWtsYW1hbMSxIGFsdCB5YXrEsSAvIEFsdCB5YXrEsSBheWFybGFyxLFcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJSZXZlcnNlIHNlcGlhXCJdID0gXCJTZXB5YSByZW5naSBkZcSfacWfdGlyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiUmV2ZXJzZSBzdGFuZGFyZFwiXSA9IFwiU3RhbmRhcnQgcmVuZ2kgZGXEn2nFn3RpclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlNlcGlhXCJdID0gXCJTZXB5YVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlN0YW5kYXJkXCJdID0gXCJTdGFuZGFydFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkxhcmdlXCJdID0gXCJCw7x5w7xrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiTWVkaXVtXCJdID0gXCJPcnRhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiU21hbGxcIl0gPSBcIkvDvMOnw7xrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiRnVsbCBzY3JlZW5cIl0gPSBcIlRhbSBla3JhblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlRhbSBla3JhbmRhbiDDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIk9mZlwiXSA9IFwiS2FwYWzEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlBsYXliYWNrIHNwZWVkXCJdID0gXCJLYXnEsXR0YW4gecO8csO8dG1lIGjEsXrEsVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlJldmVydCB0byBkZWZhdWx0IHNldHRpbmdzXCJdID0gXCJWYXJzYXnEsWxhbiBheWFybGFyYSBnZXJpIGTDtm5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJTZXR0aW5nc1wiXSA9IFwiQXlhcmxhclwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiQWx0IHlhesSxbGFyIGHDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIkFsdCB5YXrEsWxhciBrYXBhbMSxXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiVGhlYXRlciBtb2RlXCJdID0gXCJUaXlhdHJvIG1vZHVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVGl5YXRybyBtb2R1bmRhbiDDp8Sxa1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlZpZGVvIHF1YWxpdHlcIl0gPSBcIlZpZGVvIGthbGl0ZXNpXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiVmlldyBpbiBNaWNyb3NvZnQgU3RyZWFtXCJdID0gXCJNaWNyb3NvZnQgU3RyZWFtJ2RlIGfDtnLDvG50w7xsZVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ0clwiXVtcIlNlYXJjaFwiXSA9IFwiQXJhXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiQXV0b1wiXSA9IFwiT3RvbWF0aWtcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJDQ1wiXSA9IFwiQ0NcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJPblwiXSA9IFwiQcOnxLFrXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInRyXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCJNZXRpbiByZW5naTpcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJUZXh0IHNpemU6IFwiXSA9IFwiTWV0aW4gYm95dXR1OiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widHJcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwiQW5hIG1lbsO8eWUgZMO2blwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCLQn9GA0L7Qt9C+0YDRltGB0YLRjCDRhNC+0L3Rg1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwi0JLQuNC80LrQvdGD0YLQuCDQv9GW0LTQv9C40YHQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLQo9Cy0ZbQvNC60L3Rg9GC0Lgg0L/RltC00L/QuNGB0LhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlc1wiXSA9IFwi0J/RltC00L/QuNGB0Lgg0YLQsCDRgdGD0LHRgtC40YLRgNC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcItCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQv9GW0LTQv9C40YHRltCyINGWINGB0YPQsdGC0LjRgtGA0ZbQslwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcItCe0LHQtdGA0L3QtdC90LAg0YHQtdC/0ZbRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcItCe0LHQtdGA0L3QtdC90LjQuSDRgdGC0LDQvdC00LDRgNGC0L3QuNC5INC60L7Qu9GW0YBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTZXBpYVwiXSA9IFwi0KHQtdC/0ZbRj1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlN0YW5kYXJkXCJdID0gXCLQodGC0LDQvdC00LDRgNGC0L3QuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiTGFyZ2VcIl0gPSBcItCS0LXQu9C40LrQuNC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiTWVkaXVtXCJdID0gXCLQodC10YDQtdC00L3RltC5XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU21hbGxcIl0gPSBcItCc0LDQu9C40LlcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi0J/QvtCy0L3QuNC5INC10LrRgNCw0L1cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLQktC40LnRgtC4INC3INC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0YDQtdC20LjQvNGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiT2ZmXCJdID0gXCLQktC40LzQutC90YPRgtC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiUGxheWJhY2sgc3BlZWRcIl0gPSBcItCo0LLQuNC00LrRltGB0YLRjCDQstGW0LTRgtCy0L7RgNC10L3QvdGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiUmV2ZXJ0IHRvIGRlZmF1bHQgc2V0dGluZ3NcIl0gPSBcItCf0L7QstC10YDQvdGD0YLQuNGB0Y8g0LTQviDRgdGC0LDQvdC00LDRgNGC0L3QuNGFINC90LDQu9Cw0YjRgtGD0LLQsNC90YxcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJTZXR0aW5nc1wiXSA9IFwi0J3QsNGB0YLRgNC+0LnQutC4XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiU3VidGl0bGVzIG9uXCJdID0gXCLQo9Cy0ZbQvNC60L3Rg9GC0Lgg0YHRg9Cx0YLQuNGC0YDQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcItCS0LjQvNC60L3Rg9GC0Lgg0YHRg9Cx0YLQuNGC0YDQuFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlRoZWF0ZXIgbW9kZVwiXSA9IFwi0KDQtdC20LjQvCDRgtC10LDRgtGA0YNcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwi0JLQuNC50YLQuCDQtyDRgNC10LbQuNC80YMg0YLQtdCw0YLRgNGDXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi0K/QutGW0YHRgtGMINCy0ZbQtNC10L5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcItCf0LXRgNC10LPQu9GP0L3Rg9GC0Lgg0LIgTWljcm9zb2Z0IFN0cmVhbVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlNlYXJjaFwiXSA9IFwi0J/QvtGI0YPQulwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIkF1dG9cIl0gPSBcItCQ0LLRgtC+XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInVrXCJdW1wiQ0NcIl0gPSBcItCa0L7Qv9GW0Y9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJPblwiXSA9IFwi0JLQuNC80LrQvdGD0YLQvlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlRleHQgY29sb3I6IFwiXSA9IFwi0JrQvtC70ZbRgCDRgtC10LrRgdGC0YM6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ1a1wiXVtcIlRleHQgc2l6ZTogXCJdID0gXCLQoNC+0LfQvNGW0YAg0YLQtdC60YHRgtGDOiBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widWtcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi0J/QvtCy0LXRgNC90YPRgtC40YHRjyDQtNC+INCz0L7Qu9C+0LLQvdC+0LPQviDQvNC10L3RjlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkJhY2tncm91bmQgdHJhbnNwYXJlbmN5XCJdID0gXCJOw6rMgG4gdHJvbmcgc3XDtMyBdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNhcHRpb25zIG9mZlwiXSA9IFwiVMSDzIF0IHBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNhcHRpb25zIG9uXCJdID0gXCJCw6LMo3QgcGh1zKMgxJHDqsyAXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIlBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzIHNldHRpbmdzXCJdID0gXCJUaGnDqsyBdCDEkcSDzKN0IHBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlJldmVyc2Ugc2VwaWFcIl0gPSBcIlF1YXkgbGHMo2kgbWHMgHUgbsOidSDEkW/MiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlJldmVyc2Ugc3RhbmRhcmRcIl0gPSBcIlF1YXkgbGHMo2kgbWHMgHUgdGnDqnUgY2h1w6LMiW5cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTZXBpYVwiXSA9IFwiTWHMgHUgbsOidSDEkW/MiVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlN0YW5kYXJkXCJdID0gXCJUacOqdSBjaHXDosyJblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkxhcmdlXCJdID0gXCJM4bubblwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIk1lZGl1bVwiXSA9IFwiVHJ1bmcgYsOsbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTbWFsbFwiXSA9IFwiTmjhu49cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwiVG/DoG4gbcOgbiBow6xuaFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkV4aXQgZnVsbCBzY3JlZW5cIl0gPSBcIlRob2HMgXQgdG9hzIBuIG1hzIBuIGhpzIBuaFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIk9mZlwiXSA9IFwiVOG6r3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwiVMO0zIFjIMSRw7TMoyBwaGHMgXQgbGHMo2lcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwiVHLGocyJIGxhzKNpIHRoacOqzIF0IMSRxIPMo3QgbcSDzKNjIMSRacyjbmhcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJTZXR0aW5nc1wiXSA9IFwiVGhpw6rMgXQgxJHEg8yjdFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlN1YnRpdGxlcyBvblwiXSA9IFwiQsOizKN0IHBodcyjIMSRw6rMgFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlN1YnRpdGxlcyBvZmZcIl0gPSBcIlTEg8yBdCBwaHXMoyDEkcOqzIBcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIkNow6rMgSDEkcO0zKMgcmHMo3AgaGHMgXRcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJFeGl0IHRoZWF0ZXIgbW9kZVwiXSA9IFwiVGhvYcyBdCBjaMOqzIEgxJHDtMyjIHJhzKNwIGhhzIF0XCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwiQ2jDosyBdCBsxrDGocyjbmcgdmlkZW9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIlhlbSB0cm9uZyBNaWNyb3NvZnQgU3RyZWFtXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInZpXCJdW1wiU2VhcmNoXCJdID0gXCJUw6xtIGtp4bq/bVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkF1dG9cIl0gPSBcIlThu7EgxJHhu5luZ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkNDXCJdID0gXCJDQ1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIk9uXCJdID0gXCJCw6LMo3RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1widmlcIl1bXCJUZXh0IGNvbG9yOiBcIl0gPSBcIk1hzIB1IHbEg24gYmHMiW46IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIlRleHQgc2l6ZTogXCJdID0gXCJLacyBY2ggdGjGsMahzIFjIHbEg24gYmHMiW46IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ2aVwiXVtcIkJhY2sgdG8gbWFpbiBtZW51XCJdID0gXCJRdWF5IGxhzKNpIG1lbnUgY2hpzIFuaFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQmFja2dyb3VuZCB0cmFuc3BhcmVuY3lcIl0gPSBcIuiDjOaZr+mAj+aYjuW6plwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQ2FwdGlvbnMgb2ZmXCJdID0gXCLlhbPpl63op6Pph4rmgKflrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNhcHRpb25zIG9uXCJdID0gXCLlvIDlkK/op6Pph4rmgKflrZfluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkNhcHRpb25zIC8gU3VidGl0bGVzXCJdID0gXCLop6Pph4rmgKflrZfluZUv5a+555m95a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJDYXB0aW9ucyAvIFN1YnRpdGxlcyBzZXR0aW5nc1wiXSA9IFwi6Kej6YeK5oCn5a2X5bmVL+WvueeZveWtl+W5leiuvue9rlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi5Y+N5ZCR5qOV6KSQ6ImyXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLlj43lkJHmoIflh4boibJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlNlcGlhXCJdID0gXCLmo5XopJDoibJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIlN0YW5kYXJkXCJdID0gXCLmoIflh4ZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkxhcmdlXCJdID0gXCLlpKdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIk1lZGl1bVwiXSA9IFwi5LitXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTbWFsbFwiXSA9IFwi5bCPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi5YWo5bGPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLpgIDlh7rlhajlsY9cIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIk9mZlwiXSA9IFwi5YWzXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi5pKt5pS+6YCf5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi6L+Y5Y6f5Li66buY6K6k6K6+572uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTZXR0aW5nc1wiXSA9IFwi6K6+572uXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIuW8gOWQr+WvueeZveWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi5YWz6Zet5a+555m95a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIuW9semZouaooeW8j1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIumAgOWHuuW9semZouaooeW8j1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi6KeG6aKR6LSo6YePXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIuWcqCBNaWNyb3NvZnQgU3RyZWFtIOS4reafpeeci1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiU2VhcmNoXCJdID0gXCLmkJzntKJcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFuc1wiXVtcIkF1dG9cIl0gPSBcIuiHquWKqFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiQ0NcIl0gPSBcIuaKhOmAgVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiT25cIl0gPSBcIuW8gFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLmlofmnKzpopzoibI6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW5zXCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuaWh+acrOWkp+WwjzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnNcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi6L+U5Zue5Li76I+c5Y2VXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJCYWNrZ3JvdW5kIHRyYW5zcGFyZW5jeVwiXSA9IFwi6IOM5pmv6YCP5piO5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJDYXB0aW9ucyBvZmZcIl0gPSBcIumXnOmWieWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ2FwdGlvbnMgb25cIl0gPSBcIumWi+WVn+Wtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXNcIl0gPSBcIuWtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ2FwdGlvbnMgLyBTdWJ0aXRsZXMgc2V0dGluZ3NcIl0gPSBcIuWtl+W5leioreWumlwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiUmV2ZXJzZSBzZXBpYVwiXSA9IFwi6YKE5Y6f5b6p5Y+kXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJSZXZlcnNlIHN0YW5kYXJkXCJdID0gXCLpgoTljp/mqJnmupZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlNlcGlhXCJdID0gXCLlvqnlj6RcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIlN0YW5kYXJkXCJdID0gXCLmqJnmupZcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkxhcmdlXCJdID0gXCLlpKdcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIk1lZGl1bVwiXSA9IFwi5LitXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTbWFsbFwiXSA9IFwi5bCPXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJGdWxsIHNjcmVlblwiXSA9IFwi5YWo6J6i5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJFeGl0IGZ1bGwgc2NyZWVuXCJdID0gXCLntZDmnZ/lhajonqLluZVcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIk9mZlwiXSA9IFwi6Zec6ZaJXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJQbGF5YmFjayBzcGVlZFwiXSA9IFwi5pKt5pS+6YCf5bqmXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJSZXZlcnQgdG8gZGVmYXVsdCBzZXR0aW5nc1wiXSA9IFwi6YKE5Y6f54K66aCQ6Kit6Kit5a6aXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTZXR0aW5nc1wiXSA9IFwi6Kit5a6aXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJTdWJ0aXRsZXMgb25cIl0gPSBcIumWi+WVn+Wtl+W5lVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU3VidGl0bGVzIG9mZlwiXSA9IFwi6Zec6ZaJ5a2X5bmVXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJUaGVhdGVyIG1vZGVcIl0gPSBcIuWKh+mZouaooeW8j1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiRXhpdCB0aGVhdGVyIG1vZGVcIl0gPSBcIue1kOadn+WKh+mZouaooeW8j1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVmlkZW8gcXVhbGl0eVwiXSA9IFwi5b2x54mH5ZOB6LOqXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJWaWV3IGluIE1pY3Jvc29mdCBTdHJlYW1cIl0gPSBcIuWcqCBNaWNyb3NvZnQgU3RyZWFtIOS4reaqouimllwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiU2VhcmNoXCJdID0gXCLmkJzlsItcIjtcclxuYW1wLm9wdGlvbnMubGFuZ3VhZ2VzW1wiemgtaGFudFwiXVtcIkF1dG9cIl0gPSBcIuiHquWLlVwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiQ0NcIl0gPSBcIuWJr+acrFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiT25cIl0gPSBcIumWi+WVn1wiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVGV4dCBjb2xvcjogXCJdID0gXCLmloflrZfoibLlvak6IFwiO1xyXG5hbXAub3B0aW9ucy5sYW5ndWFnZXNbXCJ6aC1oYW50XCJdW1wiVGV4dCBzaXplOiBcIl0gPSBcIuaWh+Wtl+Wkp+WwjzogXCI7XHJcbmFtcC5vcHRpb25zLmxhbmd1YWdlc1tcInpoLWhhbnRcIl1bXCJCYWNrIHRvIG1haW4gbWVudVwiXSA9IFwi5Zue5Yiw5Li75Yqf6IO96KGoXCI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1BsYXllckxvY1N0cmluZ3MuanNcbiAqKi8iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxjb3B5cmlnaHQgY29tcGFueT1cIk1pY3Jvc29mdCBDb3Jwb3JhdGlvblwiPlxyXG4vLyAgICAgICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyA8L2NvcHlyaWdodD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZSgnLi9TdHJlYW1Ta2luUGx1Z2luLnNjc3MnKTtcclxuXHJcbmFtcC5TdHJlYW1Ta2luUGx1Z2luID0gYW1wLmV4dGVuZChhbXAuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKSwge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgICAgICBwbGF5ZXIub3B0aW9uc18gPSBwbGF5ZXIub3B0aW9uc18gfHwge307XHJcbiAgICAgICAgcGxheWVyLm9wdGlvbnNfW1wiaW5hY3Rpdml0eVRpbWVvdXRcIl0gPSAyMjUwO1xyXG5cclxuICAgICAgICB2YXIgbG9nbyA9IHBsYXllci5vcHRpb25zXy5sb2dvLFxyXG4gICAgICAgICAgICBlbmFibGVkID0gISFsb2dvICYmIGxvZ28uZW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gbG9nby5lbmFibGVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgb3BhY2l0eSA9ICEhbG9nbyAmJiAhIWxvZ28ub3BhY2l0eSA/IGxvZ28ub3BhY2l0eSA6IDAuNSxcclxuICAgICAgICAgICAgdGFyZ2V0VXJsID0gISFsb2dvICYmICEhbG9nby50YXJnZXRVcmwgPyBsb2dvLnRhcmdldFVybCA6IG51bGwsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9ICEhbG9nbyAmJiAhIWxvZ28uaG9yaXpvbnRhbFBvc2l0aW9uID8gbG9nby5ob3Jpem9udGFsUG9zaXRpb24gOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb24gPSAhIWxvZ28gJiYgISFsb2dvLnZlcnRpY2FsUG9zaXRpb24gPyBsb2dvLnZlcnRpY2FsUG9zaXRpb24gOiAndG9wJztcclxuXHJcbiAgICAgICAgLy8gQWRkIHNraW4gcGx1Z2luc1xyXG4gICAgICAgIHZhciBza2luUGx1Z2lucyA9IHtcclxuICAgICAgICAgICAgY29udGVudFRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcGxheWVyLm9wdGlvbnNfLnRpdGxlIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHBsYXllci5vcHRpb25zXy5kZXNjcmlwdGlvbiB8fCAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgICAgICAgICAgICAgIHRhcmdldFVybDogdGFyZ2V0VXJsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgIHNpemVDbGFzc2VzOiBwbGF5ZXIub3B0aW9uc18uc2l6ZUNsYXNzZXMgfHwge31cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gVG9Ebzogd2UgbmVlZCB0byB0cmFuc2xhdGUgdGhlIG1lbnUgdGl0bGVzXHJcbiAgICAgICAgICAgIGxpdmU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xUZXh0OiAnTElWRSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xvc2VkQ2FwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbWVudVRpdGxlOiAnQ2xvc2VkIENhcHRpb25pbmcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IHtcclxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZTogJ1F1YWxpdHknLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYXliYWNrU3BlZWQ6IHBsYXllci5vcHRpb25zXy5wbGF5YmFja1NwZWVkIHx8IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZExldmVsczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzIuMHgnLCB2YWx1ZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzEuNzV4JywgdmFsdWU6IDEuNzUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjV4JywgdmFsdWU6IDEuNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJzEuMjV4JywgdmFsdWU6IDEuMjUgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcxLjB4JywgdmFsdWU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICcwLjV4JywgdmFsdWU6IDAuNSB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbXBWb2x1bWVNZW51QnV0dG9uOiB7IHZlcnRpY2FsOiBmYWxzZSB9LFxyXG5cclxuICAgICAgICAgICAgY29udHJvbEJhckljb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0SWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAncGxheVRvZ2dsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FtcFZvbHVtZU1lbnVCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaXZlSW5kaWNhdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnY3VycmVudFRpbWVEaXNwbGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAndGltZURpdmlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbkRpc3BsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZW1haW5pbmdUaW1lRGlzcGxheScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWlkZGxlSWNvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQ29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRJY29uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdjYXB0aW9uVG9nZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbW9yZU9wdGlvbnNCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuVG9nZ2xlJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZU90aGVySWNvbnM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU9uTWVudUl0ZW1zOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSXQncyB0b28gbGF0ZSB0byBtZXJnZSBwbHVnaW4gb3B0aW9ucyB0byBwbGF5ZXIgb3B0aW9ucyxcclxuICAgICAgICAvLyBleHBsaWNpdGx5IHN0YXJ0IGVhY2ggcGx1Z2luIGluc3RlYWRcclxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhza2luUGx1Z2lucykuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyW3BsdWdpbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJbcGx1Z2luTmFtZV0oc2tpblBsdWdpbnNbcGx1Z2luTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sQmFyQ2hpbGRyZW4gPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtSWNvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbEJhckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lLmluZGV4T2YoJ2FtcC1jb250cm9sYmFyaWNvbnMnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViQ29udHJvbGJhciA9IGNvbnRyb2xCYXJDaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250cm9scyA9IHN1YkNvbnRyb2xiYXIuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb250cm9scy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gY2hpbGRDb250cm9sc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRJdGVtLm9uKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyT3RoZXJNZW51cyhjaGlsZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIub24oXCJjYW5wbGF5dGhyb3VnaFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5jYXB0aW9uVG9nZ2xlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBwbGF5ZXIubW9yZU9wdGlvbnNCdXR0b24udXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyT3RoZXJNZW51cyhjaGlsZEl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xCYXJDaGlsZHJlbiA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHZhciBzdHJlYW1JY29uQnV0dG9uID0gbnVsbDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250cm9sQmFyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKSAmJiBjb250cm9sQmFyQ2hpbGRyZW5baV0uZWwoKS5jbGFzc05hbWUuaW5kZXhPZignYW1wLWNvbnRyb2xiYXJpY29ucycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJDb250cm9sYmFyID0gY29udHJvbEJhckNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZENvbnRyb2xzID0gc3ViQ29udHJvbGJhci5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZENvbnRyb2xzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbnRyb2xzW2pdICE9PSBjaGlsZEl0ZW0gJiYgY2hpbGRDb250cm9sc1tqXS51bnByZXNzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRyb2xzW2pdLnVucHJlc3NCdXR0b24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICogRGlzcG9zZSBtZXRob2QuXHJcbiAqIE5vdCBkb2luZyBhbnl0aGluZywgYXMgdGhpcyBpcyBub3QgYW4gYWN0dWFsIGNvbnRyb2wuXHJcbiAqL1xyXG5hbXAuU3RyZWFtU2tpblBsdWdpbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgfTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBTdHJlYW1Ta2luUGx1Z2luIGNvbXBvbmVudFxyXG4gKi9cclxuYW1wLnJlZ2lzdGVyQ29tcG9uZW50KCdzdHJlYW1Ta2luUGx1Z2luJywgYW1wLlN0cmVhbVNraW5QbHVnaW4pO1xyXG5cclxuYW1wLmdldENvbXBvbmVudCgnQ29udHJvbEJhcicpLnByb3RvdHlwZS5vcHRpb25zXyA9IHtcclxuICAgIGxvYWRFdmVudDogJ3BsYXknLFxyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICAncGxheVRvZ2dsZSc6IHt9LFxyXG4gICAgICAgICdjdXJyZW50VGltZURpc3BsYXknOiB7fSxcclxuICAgICAgICAndGltZURpdmlkZXInOiB7fSxcclxuICAgICAgICAnZHVyYXRpb25EaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3JlbWFpbmluZ1RpbWVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ2xpdmVEaXNwbGF5Jzoge30sXHJcbiAgICAgICAgJ3Byb2dyZXNzQ29udHJvbCc6IHt9LFxyXG4gICAgICAgICdmdWxsc2NyZWVuVG9nZ2xlJzoge30sXHJcbiAgICAgICAgJ1RleHRUcmFja0xpc3QnOiB7fSxcclxuICAgICAgICAnY2FwdGlvbnNCdXR0b24nOiB7fSxcclxuICAgICAgICAnc3RyZWFtU2tpblBsdWdpbic6IHt9LFxyXG4gICAgICAgICdjYXB0aW9uVG9nZ2xlJzoge30sXHJcbiAgICAgICAgJ21vcmVPcHRpb25zQnV0dG9uJzoge1xyXG4gICAgICAgICAgICBlbnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAncGxheWJhY2tTcGVlZEJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAnY2FwdGlvblN1YnRpdGxlQnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICdjYXB0aW9uU2V0dGluZ3NCdXR0b24nLFxyXG4gICAgICAgICAgICAgICAgJ3F1YWxpdHlCdXR0b24nXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG5cclxudmlkZW9qcy5nZXRDb21wb25lbnQoJ1NlZWtCYXInKS5wcm90b3R5cGUub3B0aW9uc18gPSB7XHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICAnbG9hZFByb2dyZXNzQmFyJyxcclxuICAgICAgJ21vdXNlVGltZVRvb2x0aXAnLFxyXG4gICAgICAncGxheVByb2dyZXNzQmFyJyxcclxuICAgICAgJ3NlZWtIYW5kbGUnXHJcbiAgICBdLFxyXG4gICAgJ2Jhck5hbWUnOiAncGxheVByb2dyZXNzQmFyJyxcclxuICAgICdoYW5kbGVOYW1lJzogJ3NlZWtIYW5kbGUnXHJcbn07XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL01lZGlhUGxheWVyUGx1Z2lucy9TdHJlYW1Ta2luUGx1Z2luL1N0cmVhbVNraW5QbHVnaW4uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU3RyZWFtU2tpblBsdWdpbi9TdHJlYW1Ta2luUGx1Z2luLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5NjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGNvcHlyaWdodCBjb21wYW55PVwiTWljcm9zb2Z0IENvcnBvcmF0aW9uXCI+XHJcbi8vICAgICAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIDwvY29weXJpZ2h0PlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcbmNvbnN0IEJ1dHRvbiA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdCdXR0b24nKTtcclxuXHJcbnJlcXVpcmUoXCIuL1NlYXJjaFBsdWdpbi5zY3NzXCIpO1xyXG5cclxuY2xhc3MgU2VhcmNoQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMubmFtZSA9ICdzZWFyY2hCdXR0b24nO1xyXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgICAgICByZXR1cm4gYGFtcC1zZWFyY2gtaWNvbiAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyKCkudHJpZ2dlcignc2VhcmNoUGx1Z2luJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNlYXJjaEJ1dHRvbi5wcm90b3R5cGUuY29udHJvbFRleHRfID0gJ1NlYXJjaCc7XHJcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ1NlYXJjaEJ1dHRvbicsIFNlYXJjaEJ1dHRvbik7XHJcblxyXG5jb25zdCBTZWFyY2hQbHVnaW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgbGV0IHBsYXllciA9IHRoaXM7XHJcbiAgICBsZXQgZXh0ZXJuYWxMaW5rID0gISFvcHRpb25zID8gb3B0aW9ucy5leHRlcm5hbExpbmsgOiBudWxsO1xyXG5cclxuICAgIHBsYXllci5vbihcImxvYWRlZG1ldGFkYXRhXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udHJvbEJhckNoaWxkcmVuID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKTtcclxuICAgICAgICB2YXIgc2VhcmNoUGx1Z2luID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRyb2xCYXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkgJiYgY29udHJvbEJhckNoaWxkcmVuW2ldLmVsKCkuY2xhc3NOYW1lID09PSBcImFtcC1jb250cm9sYmFyaWNvbnMtcmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJpZ2h0Q29udHJvbEJhciA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKClbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoQnV0dG9uID0gdGhpcy5jb250cm9sQmFyLmFkZENoaWxkKCdTZWFyY2hCdXR0b24nLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEJ1dHRvbiA9IHJpZ2h0Q29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZShzZWFyY2hCdXR0b24uZWwoKSwgcGxheWVyLmNvbnRyb2xCYXIuY2FwdGlvblRvZ2dsZS5lbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5zZWFyY2hCdXR0b24gPSBzZWFyY2hCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZpZGVvanMucGx1Z2luKCdzZWFyY2hQbHVnaW4nLCBTZWFyY2hQbHVnaW4pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vTWVkaWFQbGF5ZXJQbHVnaW5zL1NlYXJjaFBsdWdpbi9TZWFyY2hQbHVnaW4uanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9NZWRpYVBsYXllclBsdWdpbnMvU2VhcmNoUGx1Z2luL1NlYXJjaFBsdWdpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9