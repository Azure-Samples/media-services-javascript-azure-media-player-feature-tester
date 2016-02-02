//TMP referecent to PlayerAnalyticsCore instance/.
var xxx;
var timeHertBit = 10;
//instrumentationKey 
//var ApplicationID = "test1";    //dev enviroment KEY
//var ApplicationID = "demo1"; //Amit demo Key



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
            var that = this;
            //Load Geo info
            this._myIp = '';
            //
            $.getJSON('https://api.ipify.org/?format=json', function (result) {
                that._myIp = result.ip;
                //get GEO INFO
                $.getJSON('http://ip-api.com/json/' + that._myIp, function (result) {
                    that._country_code = result.countryCode;
                    that._country_name = result.country;
                    that._region_code = result.region;
                    that._region_name = result.regionName;
                    that._city = result.city;
                    that._latitude = result.lat;
                    that._longitude = result.lon;
                    console.log("Player IP: " + that._myIp);
                    console.log("Player _country_name: " + that._country_name);
                });
            });
            //TMP:switch Control 
            this._swHeartbeat = false;
            this._CurrentBitRate = 0;

            //TimeToReady
            this._TimeToReady = 0;
            this._HeartBitTime = 10;
            //VideoBufferLevelAVG
            this._videoBufferLevelLog = [];
            this._audioBufferLevelLog = [];

            this._eventBufferMaxLength = 10;
            //Stream Name
            this._streamName = "";

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
                //Token API EndPoint
                if (options && options['TokenApiUrl']) {
                    this._TokenApiUrl = "http://playeranalytics.azurewebsites.net/api/EventHubSasToken";
                    try {
                        this._TokenApiUrl = options['TokenApiUrl'];
                    }
                    catch (error) { }
                } else {
                    this._TokenApiUrl = "http://playeranalytics.azurewebsites.net/api/EventHubSasToken";
                }
                //ApplicationID
                if (options && options['ApplicationID']) {
                    this._ApplicationID = "test1";
                    try {
                        this._ApplicationID = options['ApplicationID'];
                    }
                    catch (error) { }
                } else {
                    this._ApplicationID = "test1";
                }
                //streamName
                if (options && options['streamName']) {
                    try {
                        this._streamName = options['streamName'];
                    } catch (e) {

                    }

                }
            }
            //Start Setup
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
                    //Time to Ready
                    var endTime = new Date();
                    var timeToReady = (endTime.getTime() - startTime.getTime()) / 1000;
                    that._TimeToReady = timeToReady;
                    //Set Strema ID
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



                    var videoBuffer = xxx._player.videoBufferData();
                    var audioBuffer = xxx._player.audioBufferData();
                    if (videoBuffer) {
                        that._videoBufferLevelLog = [];
                        videoBuffer.addEventListener(amp.bufferDataEventName.downloadcompleted, videoDownloadcompleted);
                    }
                    if (audioBuffer) {
                        that._audioBufferLevelLog = [];
                        audioBuffer.addEventListener(amp.bufferDataEventName.downloadcompleted, audioDownloadcompleted);
                    }


                    function videoDownloadcompleted(evtData) {

                        xxx._videoBufferLevelLog.push(videoBuffer.bufferLevel);
                    }
                    function audioDownloadcompleted(evtData) {

                        xxx._audioBufferLevelLog.push(audioBuffer.bufferLevel);
                    }



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
                evt.city = '';
                evt.region = '';
                evt.regionName = '';

                //Geo position
                try {
                    /*
                                            evt.playerIP = this._myIp;
                                            evt.country_code = this._country_code;
                                            evt.country_name = this._country_name;
                                            evt.geoLatitude = this._latitude;
                                            evt.geoLongitude = this._longitude;
                    */
                    evt.playerIP = this._myIp;
                    evt.country_code = this._country_code;
                    evt.country_name = this._country_name;
                    evt.geoLatitude = this._latitude;
                    evt.geoLongitude = this._longitude;
                    evt.city = this._city;
                    evt.region = this._region_code;
                    evt.regionName = this._region_name;

                } catch (e) {

                }

                //Time To Ready
                evt.TimeToReady = this._TimeToReady;

                //Technology
                evt.techName = that._player.techName;

                var accBuffer = 0;
                var minBuffer = 0.0;
                var count = 0;
                //Add Buffer Level
                if (xxx._videoBufferLevelLog && xxx._videoBufferLevelLog.length > 0) {

                    count = xxx._videoBufferLevelLog.length;
                    minBuffer = xxx._videoBufferLevelLog[0];
                    for (i = 0; i < count; i++) {
                        minBuffer = Math.min(minBuffer, xxx._videoBufferLevelLog[i]);

                    }
                    xxx._videoBufferLevelLog = [];

                }
                //evt.videoBufferData = that._player.videoBufferData() ? that._player.videoBufferData().bufferLevel : null;
                evt.videoBufferData = minBuffer;

                //evt.audioBufferData = that._player.audioBufferData() ? that._player.audioBufferData().bufferLevel : null;
                accBuffer = 0;
                minBuffer = 0.0;

                if (xxx._audioBufferLevelLog && xxx._audioBufferLevelLog.length > 0) {
                    count = xxx._audioBufferLevelLog.length;
                    minBuffer = xxx._audioBufferLevelLog[0];

                    for (var i = 0; i < count; i++) {
                        minBuffer = Math.min(minBuffer, xxx._audioBufferLevelLog[i]);
                    }
                    xxx._audioBufferLevelLog = [];

                }
                evt.audioBufferData = minBuffer;
                console.log('audioBufferData:' + evt.audioBufferData);
                console.log('videoBufferData: ' + evt.videoBufferData);

                //StreamName
                evt.streamName = this._streamName;
                return evt;
            }



            //aqui termina
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
                    this._eventHubProxy.SendEvents([event]);
                }
                else {
                    //TMP
                    xxx._eventBuffer.push(event);
                    console.log('Buffer event: ' + JSON.stringify(event));
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

                var now = new Date();

                if (now >= this._PlayerAnalyticsDataExpiration) {
                    //Renew Token
                    this._PlayerAnalyticsData = null;
                    //var urlX = TokenApiUrl + "?appID=" + ApplicationID + "&ClientId=" + this._publisherIdBase;
                    var urlX = xxx._TokenApiUrl + "?appID=" + xxx._ApplicationID + "&ClientId=" + this._publisherIdBase;

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

            }
        }
        return EventHubProxy;
    })();
    amp.EventHubProxy = EventHubProxy;
})(amp || (amp = {}));
//# sourceMappingURL=PlayerAnalyticsPlugin.js.map

