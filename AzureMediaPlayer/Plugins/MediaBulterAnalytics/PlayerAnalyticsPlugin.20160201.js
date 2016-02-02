//TMP referecent to PlayerAnalyticsCore instance/.
var xxx;
var timeHertBit = 10;
//instrumentationKey 
//var ApplicationID = "test1";    //dev enviroment KEY
var ApplicationID = "demo1"; //demo Key

var TokenApiUrl = "http://playeranalytics.azurewebsites.net/api/EventHubSasToken";

///<reference path='../lib/azuremediaplayer.d.ts'/>
///<reference path='DataModel.ts'/>

var amp;
(function (amp) {
    //document.write("<script src='Analytics/DataModel.js'><\/script>");
    amp.plugin('PlayerAnalytics', function PlayerAnalytics(options) {
        var _player = this;
        var _playerAnalyticsCore;
        var that = this;
        if (options) {
            _playerAnalyticsCore = new PlayerAnalyticsCore(_player, options);
            //TMP: axiliar objcet instance
            xxx = _playerAnalyticsCore;
        }
    });
    var PlayerAnalyticsCore = (function () {
        function PlayerAnalyticsCore(player, options) {
            //TMP:switch Control 
            this._swHeartbeat = false;
            this._CurrentBitRate = 0;
            this._myIp = '';
            //TimeToReady
            this._TimeToReady = 0;

            this._eventBufferMaxLength = 10;
            var that = this;
            if (options['eventHubNamespace'] && options['eventHubQueueName'] && options['eventHubPublisherId']) {
                this._player = player;
                this._eventHubProxy =
                    new EventHubProxy(options['eventHubNamespace'], options['eventHubQueueName'], options['eventHubPublisherId']);
                if (options && options['eventBufferLength']) {
                    try {
                        var eventBufferLengthVal = parseInt(options['eventBufferLength']);
                        if (eventBufferLengthVal) {
                            this._eventBufferMaxLength = eventBufferLengthVal;
                        }
                    }
                    catch (error) { }
                }
                this._eventBuffer = new Array();
                var sessionID = (options && options['sessionID']) ? options['sessionID'] : this.generateUUID();
                var streamID = '';
                this._baseEvent = new EventDataModel.EventBase(sessionID, streamID);
                this._player.addEventListener('sourceset', function () {
                    this._CurrentBitRate = 0;
                    var startTime = new Date();
                    that._player.addEventListener('loadedmetadata', loadedData);
                    function loadedData() {
                        that._player.removeEventListener('loadeddata', loadedData);
                        var endTime = new Date();

                        var timeToReady = endTime.getTime() - startTime.getTime() / 1000;
                        that._TimeToReady = timeToReady;

                        that._baseEvent.streamID = that._player.currentSrc();
                        var evt = new EventDataModel.Demographics.SourceLoadedEvent(that._baseEvent);
                        evt.playerName = 'AMP';
                        evt.playerVersion = that._player.getAmpVersion();
                        evt.userAgent = navigator.userAgent;
                        evt.locale = navigator.userLanguage || navigator.language;
                        evt.deviceResolution = [screen.availWidth, screen.availHeight, screen.deviceXDPI, screen.deviceYDPI];
                        /* try {
                             if (navigator.geolocation) {
                                 navigator.geolocation.getCurrentPosition(function (position) {
                                     evt.geoLocation = [position.coords.latitude, position.coords.longitude];
                                 });
                             }
                         }
                         catch (error) { }
                         */
                        that.enqueueEvent(evt);
                        that.enqueueEvent(new EventDataModel.QoE.TimeToReadyEvent(that._baseEvent, timeToReady));
                        this._CurrentBitRate = that._player.currentDownloadBitrate();
                    }
                });
                this._player.addEventListener('play', function () {
                    //TMP: hertbit controle
                    that._swHeartbeat = true;
                    that.enqueueEvent(new EventDataModel.Engagement.PlayEvent(that._baseEvent, that._player.currentAbsoluteTime()));
                });
                this._player.addEventListener('pause', function () {
                    that.enqueueEvent(new EventDataModel.Engagement.PauseEvent(that._baseEvent, that._player.currentAbsoluteTime()));
                });
                this._player.addEventListener('ended', function () {
                    //TMP: hertbit controle
                    that._swHeartbeat = false;
                    that.enqueueEvent(new EventDataModel.Engagement.EndedEvent(that._baseEvent, that._player.currentAbsoluteTime()));
                });
                this._player.addEventListener('downloadbitratechanged', function () {
                    //TMP
                    var dir = 'base';
                    var cdBit = that._player.currentDownloadBitrate();
                    if (this._CurrentBitRate) {
                        dir = 'up';
                        if (this._CurrentBitRate > cdBit) {
                            dir = 'down';
                        }
                    }
                    var evt = new EventDataModel.QoE.DownloadBitrateChangedEvent(that._baseEvent, cdBit, this._CurrentBitRate, dir);
                    that.enqueueEvent(evt);
                    this._CurrentBitRate = that._player.currentDownloadBitrate();
                });
                this._player.addEventListener('resize', function () {
                    var evt = new EventDataModel.Engagement.ResizeEvent(that._baseEvent);
                    evt.absoluteCurrentTime = that._player.currentAbsoluteTime();
                    evt.isFullScreen = that._player.isFullscreen();
                    evt.size = [that._player.el_.clientWidth, that._player.el_.clientHeight];
                    that.enqueueEvent(evt);
                });

                // Might be redundant
                this._player.addEventListener('fullscreen', function () {
                    var evt = new EventDataModel.Engagement.ResizeEvent(that._baseEvent);
                    evt.absoluteCurrentTime = that._player.currentAbsoluteTime();
                    evt.isFullScreen = that._player.isFullscreen();
                    evt.size = [that._player.el_.clientWidth, that._player.el_.clientHeight];
                    that.enqueueEvent(evt);
                });
                this._player.addEventListener('error', function (error) {
                    var evt = new EventDataModel.QoE.ErrorEvent(that._baseEvent);
                    evt.absoluteCurrentTime = that._player.currentAbsoluteTime();
                    evt.errorCode = that._player.error().code;
                    evt.errorMessage = that._player.error().message;
                    if (that._player.videoBufferData()) {
                        evt.playerSnapshot = new EventDataModel.QoE.PlayerSnapshot(that._player.videoBufferData().bufferLevel, that._player.videoBufferData().perceivedBandwidth);
                    }
                    that.enqueueEvent(evt);
                });
                window.addEventListener('beforeunload', function () {
                    that.enqueueEvent(new EventDataModel.Engagement.UserExitEvent(that._baseEvent, that._player.currentAbsoluteTime()), true);
                });


                //TMP:HeartBit Event
                this.HeartbeatEvent = function () {
                    var evt = (new EventDataModel.Engagement.HertBitEvent(that._baseEvent));

                    evt.playerName = 'AMP';
                    evt.playerVersion = that._player.getAmpVersion();
                    evt.userAgent = navigator.userAgent;
                    evt.locale = navigator.userLanguage || navigator.language;
                    //Screen Resolution
                    //evt.deviceResolution = [screen.availWidth, screen.availHeight, screen.deviceXDPI, screen.deviceYDPI];
                    evt.deviceResolutionavailWidth = screen.availWidth;
                    evt.deviceResolutionavailHeight = screen.availHeight;
                    evt.deviceResolutiondeviceXDPI = screen.deviceXDPI;
                    evt.deviceResolutiondeviceYDPI = screen.deviceYDPI;
                    //Stream protocol
                    evt.streamProtocol = that._player.currentType();

                    evt.country_code = '';
                    evt.country_name = '';
                    evt.geoLongitude = '';
                    evt.geoLongitude = '';
                    //Geo position
                    try {
                        evt.playerIP = this._myIp;
                        evt.country_code = this._country_code;
                        evt.country_name = this._country_name;
                        evt.geoLatitude = this._latitude;
                        evt.geoLongitude = this._longitude;

                    } catch (e) {

                    }

                    //Time To Ready
                    evt.TimeToReady = this._TimeToReady;

                    /*
                    try {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(function (position) {
                                evt.geoLatitud = position.coords.latitude;
                                evt.geoLongitude=position.coords.longitude;
                            });
                        }
                    }

                    catch (error)
                    {
                        console.log("Error HeartbeatEvent : " + error)
                    }
                    */
                    //Technology
                    evt.techName = that._player.techName;

                    //Add Buffer Level

                    evt.videoBufferData = that._player.videoBufferData() ? that._player.videoBufferData().bufferLevel : null;
                    evt.audioBufferData = that._player.audioBufferData() ? that._player.audioBufferData().bufferLevel : null;

                    return evt;
                }

            }
        }




        PlayerAnalyticsCore.prototype.generateUUID = function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        PlayerAnalyticsCore.prototype.enqueueEvent = function (event, forceSend) {
            if (forceSend === void 0) { forceSend = false; }
            if (this._eventBuffer) {
                if (event.isRealtime == true) {

                    //TMP
                    //this._eventHubProxy.sendEvents([event]);
                    this._eventHubProxy.SendEvents([event]);
                }
                else {
                    //TMP
                    //this._eventBuffer.push(event);
                    xxx._eventBuffer.push(event);
                    console.log('Buffer event: ' + JSON.stringify(event));
                    //JP: buffer timer replace it
                    /*
                    if (forceSend == true || this._eventBuffer.length >= this._eventBufferMaxLength) {
                        this._eventHubProxy.sendEvents(this._eventBuffer);
                        //Clear the buffer
                        this._eventBuffer.splice(0);
                        
                    }*/
                }
            }
            else {
            }
        };

        //TMP
        PlayerAnalyticsCore.prototype.Tick = function () {
            console.log(new Date());
            //var myBuffer = amp.PlayerAnalyticsCore.EventBuffer;
            if (xxx._eventBuffer) {
                //If HeratBit is active => add Event
                if (xxx._swHeartbeat) {
                    xxx._eventBuffer.push(xxx.HeartbeatEvent());

                }
                console.log("Buffer leng: " + xxx._eventBuffer.length);
                if (xxx._eventBuffer.length >= 1) {
                    //send Data
                    xxx._eventHubProxy.SendEvents(xxx._eventBuffer);
                    xxx._eventBuffer.splice(0);
                }
            }
        };
        //TMP: Trigger Buffer watcher
        setInterval(PlayerAnalyticsCore.prototype.Tick, timeHertBit * 1000);

        return PlayerAnalyticsCore
    })();
    amp.PlayerAnalyticsCore = PlayerAnalyticsCore;

    var EventHubProxy = (function () {
        function EventHubProxy(eventHubNamespace, eventHubName, publisherIdBase) {
            var that = this;
            this._eventHubNamespace = eventHubNamespace;
            this._eventHubName = eventHubName;
            this._publisherIdBase = publisherIdBase;
            this._PlayerAnalyticsData;
            this._PlayerAnalyticsDataExpiration = new Date();
        }
        EventHubProxy.PublisherIdBase;
        //TMP:Update Token API
        //EventHubProxy.prototype.GetPlayerAnalyticsData = function () {
        //    try
        //    {
        //        var now = new Date();
        //        if (now >=this._PlayerAnalyticsDataExpiration) {
        //            //Renew Token
        //            this._PlayerAnalyticsData = null;
        //            var url = TokenApiUrl + "?appID=" + ApplicationID + "&ClientId=" + this._publisherIdBase;
        //            var xhr = new XMLHttpRequest();
        //            xhr.open('GET', url, false);
        //            xhr.send();
        //            var response = xhr.responseText;
        //            if (response && response.length >= 3) {
        //                //var token = xhr.responseText.substr(1, xhr.responseText.length - 2);
        //                console.log('EventHubProxy.GetPlayerAnalyticsData() : Got token: ' + response);
        //                this._PlayerAnalyticsData = JSON.parse(response);
        //                this._PlayerAnalyticsDataExpiration.setSeconds(this._PlayerAnalyticsDataExpiration.getSeconds() + this._PlayerAnalyticsData.TTL);
        //            }
        //            else {
        //                console.log('EventHubProxy.GetPlayerAnalyticsData() : ERROR: COULD NOT GET SAS TOKEN!');
        //            }
        //        } else {
        //            //Use Token Cache
        //            console.log("EventHubProxy.GetPlayerAnalyticsData() :  Using Token Cache until " + this._PlayerAnalyticsDataExpiration);
        //        }
        //        return this._PlayerAnalyticsData;
        //    }
        //    catch (error) {
        //        console.log('EventHubProxy.getSasToken() : ERROR: ' + error);
        //    }
        //}
        EventHubProxy.prototype.SendEvents = function (events) {
            if (events && events.length > 0) {
                var payload = '[';
                for (var i = 0; i < events.length; i++) {
                    var evt = events[i];
                    evt.sequence = i;
                    payload += JSON.stringify(evt) + ",";
                    console.log(i + ':' + JSON.stringify(events[i]));
                }
                payload = payload.substring(0, payload.length - 1);
                payload += ']';

                //Get IP
                if (xxx._myIp == '') {

                    $.getJSON('https://api.ipify.org/?format=json', function (result) {
                        xxx._myIp = result.ip;
                        //get GEO INFO
                        $.getJSON('http://freegeoip.net/json/' + xxx._myIp, function (result) {
                            xxx._country_code = result.country_code;
                            xxx._country_name = result.country_name;
                            xxx._latitude = result.latitude;
                            xxx._longitude = result.longitude;

                        });


                    });

                }
                var now = new Date();
                if (now >= this._PlayerAnalyticsDataExpiration) {
                    //Renew Token
                    this._PlayerAnalyticsData = null;
                    var urlX = TokenApiUrl + "?appID=" + ApplicationID + "&ClientId=" + this._publisherIdBase;

                    $.getJSON(urlX, function (result) {
                        var playerinfo = result;
                        xxx._eventHubProxy._PlayerAnalyticsData = result;
                        console.log("Renew Token " + playerinfo.Token);
                        xxx._eventHubProxy._PlayerAnalyticsDataExpiration.setSeconds(xxx._eventHubProxy._PlayerAnalyticsDataExpiration.getSeconds() + xxx._eventHubProxy._PlayerAnalyticsData.TTL);
                        //second call, send Events
                        $.ajax({
                            url: playerinfo.EndPoint,
                            data: payload,
                            type: "POST",
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader('Content-Type', 'application/atom+xml;type=entry;charset=utf-8');
                                xhr.setRequestHeader('Authorization', playerinfo.Token);
                                xhr.setRequestHeader('Type', 'Player Event');
                                xhr.setRequestHeader('deviceID', this._publisherIdBase);
                            },
                            success: function () {
                                console.log('Events Sent: ' + payload);
                            },
                            error: function (xhr, error) {
                                console.error("Send Event Error: " + error);
                            }
                        });

                    });
                } else {
                    //use token cache
                    console.log("Cache Token " + xxx._eventHubProxy._PlayerAnalyticsData.Token);
                    $.ajax({
                        url: xxx._eventHubProxy._PlayerAnalyticsData.EndPoint,
                        data: payload,
                        type: "POST",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Content-Type', 'application/atom+xml;type=entry;charset=utf-8');
                            xhr.setRequestHeader('Authorization', xxx._eventHubProxy._PlayerAnalyticsData.Token);
                            xhr.setRequestHeader('Type', 'Player Event');
                            xhr.setRequestHeader('deviceID', xxx._eventHubProxy._publisherIdBase);
                        },
                        success: function () {
                            console.log('Events Sent: ' + payload);
                        },
                        error: function (xhr, error) {
                            console.error("Send Event Error: " + error);
                        }
                    });
                }





                //var eventHubConnData = this.GetPlayerAnalyticsData();
                //if (eventHubConnData) {
                //    try {
                //        var xhr = new XMLHttpRequest();
                //        xhr.open('POST', eventHubConnData.EndPoint, false);
                //        xhr.setRequestHeader('Content-Type', 'application/atom+xml;type=entry;charset=utf-8');
                //        xhr.setRequestHeader('Authorization', eventHubConnData.Token);
                //        xhr.setRequestHeader('Type', 'Player Event');
                //        xhr.setRequestHeader('deviceID', this._publisherIdBase);
                //        var response=xhr.send(payload);
                //        console.log('EventHubProxy.sendEvent() : Events Sent: ' + payload);
                //    }
                //    catch (error) {
                //        console.log('EventHubProxy.sendEvent() : ERROR: ' + error);
                //    }
                //}
                //else {
                //    console.log('EventHubProxy.sendEvents() : ERROR: NO TOKEN!');
                //}
            }
        }
        //EventHubProxy.prototype.getSasToken = function () {
        //    try {
        //        this.GetPlayerAnalyticsData();
        //        //RANDOMIZE pub id
        //        this._publisherIdToken = this._publisherIdBase + '_' + Math.floor((Math.random() * 10000000) + 1);
        //        var url = 'http://playeranalytics.azurewebsites.net/api/eventhubsastoken/' + this._publisherIdToken;
        //        var xhr = new XMLHttpRequest();
        //        xhr.open('GET', url, false);
        //        xhr.send();
        //        var response = xhr.responseText;
        //        if (response && response.length >= 3) {
        //            var token = xhr.responseText.substr(1, xhr.responseText.length - 2);
        //            console.log('EventHubProxy.getSasToken() : Got token: ' + token);
        //            return token;
        //        }
        //        else {
        //            console.log('EventHubProxy.getSasToken() : ERROR: COULD NOT GET SAS TOKEN!');
        //        }
        //    }
        //    catch (error) {
        //        console.log('EventHubProxy.getSasToken() : ERROR: ' + error);
        //    }
        //};
        //EventHubProxy.prototype.sendEvents = function (events) {
        //    if (events && events.length > 0) {
        //        var payload = '[';
        //        for (var i = 0; i < events.length; i++) {
        //            payload += JSON.stringify(events[i]);
        //        }
        //        payload += ']';
        //        var token = this.getSasToken();
        //        if (token) {
        //            try {
        //                var xhr = new XMLHttpRequest();
        //                var url = 'https://' + this._eventHubNamespace +
        //                    '.servicebus.windows.net/' +
        //                    this._eventHubName +
        //                    '/publishers/' +
        //                    this._publisherIdToken +
        //                    '/messages';
        //                xhr.open('POST', url, false);
        //                xhr.setRequestHeader('Content-Type', 'application/atom+xml;type=entry;charset=utf-8');
        //                xhr.setRequestHeader('Authorization', token);
        //                // optional: set property on the message. 
        //               xhr.setRequestHeader('Type', 'Player Event');
        //               xhr.setRequestHeader('deviceID', this._publisherIdBase);
        //                xhr.send(payload);
        //                console.log('EventHubProxy.sendEvent() : Events Sent: ' + payload);
        //            }
        //            catch (error) {
        //                console.log('EventHubProxy.sendEvent() : ERROR: ' + error);
        //            }
        //        }
        //        else {
        //            console.log('EventHubProxy.sendEvents() : ERROR: NO TOKEN!');
        //        }
        //    }
        //};
        return EventHubProxy;
    })();
    amp.EventHubProxy = EventHubProxy;
})(amp || (amp = {}));
//# sourceMappingURL=PlayerAnalyticsPlugin.js.map