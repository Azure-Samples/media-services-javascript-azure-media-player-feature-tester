var amp;
(function (amp) {
    (function (EventLevel) {
        EventLevel[EventLevel["failure"] = 0] = "failure";
        EventLevel[EventLevel["informational"] = 1] = "informational";
        EventLevel[EventLevel["verbose"] = 2] = "verbose";
    })(amp.EventLevel || (amp.EventLevel = {}));
    var EventLevel = amp.EventLevel;

    (function (EventChannel) {
        EventChannel[EventChannel["instance"] = 0] = "instance";
        EventChannel[EventChannel["operational"] = 1] = "operational";
        EventChannel[EventChannel["download"] = 2] = "download";
    })(amp.EventChannel || (amp.EventChannel = {}));
    var EventChannel = amp.EventChannel;

    amp.plugin('EventHubQoS', EventHubQoS);

    function EventHubQoS(options) {
        var player = this;

        var instanceId;
        var eventHubUrl;
        var heartBeatHandle;
        var downloadFailCount = 0;
        var bitrateChangesCount = 0;
        var waitingCount = 0;
        var seekCount = 0;
        var pauseCount = 0;
        var playingCount = 0;
        var rebuffering = false;
        var seekWhileRebuffering = false;
        var rebufferData;

        var eventHubData = {
            "ampVersion": "1.1.1",
            "namespace": "mediaClientPrototypeStandard",
            "hubName": "ampdiagnostic",
            "publisher": "ampQoS",
            "token": "SharedAccessSignature sr=https%3a%2f%2fmediaclientprototypestandard.servicebus.windows.net%2fampdiagnostic%2fpublishers%2fampqos%2fmessages&sig=vHY7ubsCKMbw9h4mPzY2x71%2fIV%2fzwHCNw2U%2fkVFepuM%3d&se=130282302847&skn=Send"
        };

        var disableGeoLocation = false;
        var heartBeatInterval = 10000;
        if (options) {
            if (options['disableGeoLocation']) {
                disableGeoLocation = !!options['disableGeoLocation'];
            }

            if (options['heartBeatIntervalMs']) {
                heartBeatInterval = options['heartBeatIntervalMs'];
            }
        }

        init();

        function init() {
            eventHubUrl = "https://" + eventHubData.namespace + ".servicebus.windows.net/" + eventHubData.hubName + "/publishers/" + eventHubData.publisher + "/messages";

            player.ready(handleReady);
            player.addEventListener(amp.eventName.error, handleError);
        }

        function handleReady() {
            instanceId = generateInstanceId();

            if (!disableGeoLocation) {
                navigator.geolocation.getCurrentPosition(handlePosition);
            }
            options['instanceId'] = instanceId;
            player.addEventListener(amp.eventName.loadedmetadata, handleLoadedMetaData);

            var data = {
                ampVersion: eventHubData.ampVersion,
                appName: options['appName'],
                platform: platformStr(),
                browser: browserStr(),
                userAgent: navigator.userAgent,
                options: {
                    autoplay: player.options().autoplay,
                    heuristicProfile: player.options().heuristicProfile,
                    techOrder: JSON.stringify(player.options().techOrder)
                }
            };

            postData("InstanceCreated", 0 /* instance */, 1 /* informational */, instanceId, data);
        }

        function handlePosition(position) {
            var data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            postData("GeoLocation", 0 /* instance */, 1 /* informational */, instanceId, data);
        }

        function handleError() {
            var err = player.error();
            var data = {
                sessionId: player.currentSrc(),
                currentTime: player.currentTime(),
                code: "0x" + err.code.toString(16),
                message: err.message
            };

            postData("Error", 0 /* instance */, 0 /* failure */, instanceId, data);

            clearHeartBeatInterval();
        }

        function handleLoadedMetaData() {
            player.addEventListener(amp.eventName.playbackbitratechanged, handlePlaybackBitrateChanged);
            player.addEventListener(amp.eventName.playing, handlePlaying);
            player.addEventListener(amp.eventName.seeking, handleSeeking);
            player.addEventListener(amp.eventName.pause, handlePaused);
            player.addEventListener(amp.eventName.waiting, handleWaiting);
            player.addEventListener(amp.eventName.ended, handleEnded);

            if (player.audioBufferData()) {
                player.audioBufferData().addEventListener(amp.bufferDataEventName.downloadfailed, function () {
                    downloadFailCount++;

                    var data = {
                        sessionId: player.currentSrc(),
                        currentTime: player.currentTime(),
                        bufferLevel: player.audioBufferData().bufferLevel,
                        url: player.audioBufferData().downloadFailed.mediaDownload.url,
                        code: "0x" + player.audioBufferData().downloadFailed.code.toString(16),
                        message: player.audioBufferData().downloadFailed
                    };

                    postData("DownloadFailed", 2 /* download */, 0 /* failure */, instanceId, data);
                });
            }

            if (player.videoBufferData()) {
                player.videoBufferData().addEventListener(amp.bufferDataEventName.downloadfailed, function () {
                    downloadFailCount++;

                    var data = {
                        sessionId: player.currentSrc(),
                        currentTime: player.currentTime(),
                        bufferLevel: player.videoBufferData().bufferLevel,
                        url: player.videoBufferData().downloadFailed.mediaDownload.url,
                        code: "0x" + player.videoBufferData().downloadFailed.code.toString(16),
                        message: player.videoBufferData().downloadFailed
                    };

                    postData("DownloadFailed", 2 /* download */, 0 /* failure */, instanceId, data);
                });
            }

            clearHeartBeatInterval();
            if (heartBeatInterval > 0) {
                heartBeatHandle = setInterval(doHeartBeat, heartBeatInterval);
            }

            var data = {
                sessionId: player.currentSrc(),
                isLive: player.isLive(),
                duration: player.duration(),
                tech: player.currentTechName(),
                protection: ((player.currentProtectionInfo() && player.currentProtectionInfo()[0]) ? player.currentProtectionInfo()[0].type : "clear")
            };

            postData("PresentationInfo", 0 /* instance */, 1 /* informational */, instanceId, data);
        }

        function handlePlaybackBitrateChanged() {
            bitrateChangesCount++;
        }

        function handleWaiting() {
            rebuffering = true;
            seekWhileRebuffering = false;
            waitingCount++;

            rebufferData = {
                sessionId: player.currentSrc(),
                enterCurrentTime: player.currentTime(),
                enterUTCTime: Date.now().toString(),
                enterDuration: player.duration()
            };
        }

        function handlePlaying() {
            playingCount++;

            if (rebuffering) {
                rebuffering = false;

                if (!seekWhileRebuffering) {
                    rebufferData['exitCurrentTime'] = player.currentTime();
                    rebufferData['exitUTCTime'] = Date.now().toString();
                    rebufferData['enterDuration'] = player.duration();

                    postData("Rebuffer", 1 /* operational */, 1 /* informational */, instanceId, rebufferData);
                }
            }
        }

        function handleSeeking() {
            if (rebuffering) {
                seekWhileRebuffering = true;
            }
            seekCount++;
        }

        function handlePaused() {
            pauseCount++;
        }

        function handleEnded() {
            clearHeartBeatInterval();
        }

        function doHeartBeat() {
            var audioBufferlevel;
            if (player.audioBufferData()) {
                audioBufferlevel = player.audioBufferData().bufferLevel;
            }

            var videoBufferlevel;
            var perceivedBandwidth;
            if (player.videoBufferData()) {
                videoBufferlevel = player.videoBufferData().bufferLevel;
                perceivedBandwidth = player.videoBufferData().perceivedBandwidth;
            }

            var data = {
                sessionId: player.currentSrc(),
                currentTime: player.currentTime(),
                isLive: player.isLive(),
                downloadFail: downloadFailCount,
                bitrateChanges: bitrateChangesCount,
                videoBufferlevel: videoBufferlevel,
                audioBufferlevel: audioBufferlevel,
                bandwidth: perceivedBandwidth,
                downloadBitrate: player.currentDownloadBitrate(),
                playbackBitrate: player.currentPlaybackBitrate(),
                rebuffer: waitingCount,
                pause: pauseCount,
                seek: seekCount,
                playing: playingCount
            };

            heartBeatReset();
            postData("Heartbeat", 1 /* operational */, 1 /* informational */, instanceId, data);
        }

        function postData(eventId, channel, level, instanceId, data) {
            var eventData = {
                eventId: eventId,
                channel: channel,
                level: level,
                instanceId: instanceId,
                data: data
            };

            var eventDataStr = JSON.stringify(eventData);
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.open("POST", eventHubUrl, true);
            xmlHttpRequest.setRequestHeader('Content-Type', "application/atom+xml;type=entry;charset=utf-8");
            xmlHttpRequest.setRequestHeader("Authorization", eventHubData.token);

            xmlHttpRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    AMP.Logger.verbose(5 /* plugin */, "[EventHubQoS] " + (this.status == 201 ? "Sent: " : "Failed ") + eventDataStr);
                }
            };

            xmlHttpRequest.send(eventDataStr);
        }

        function clearHeartBeatInterval() {
            heartBeatReset();
            if (heartBeatHandle != undefined) {
                clearInterval(heartBeatHandle);
                heartBeatHandle = undefined;
            }
        }

        function heartBeatReset() {
            downloadFailCount = 0;
            bitrateChangesCount = 0;
            waitingCount = 0;
            seekCount = 0;
            pauseCount = 0;
            playingCount = 0;
        }

        function browserStr() {
            if (vjs.IS_FIREFOX) {
                return 'Firefox';
            } else if (vjs.IS_CHROME) {
                return 'Chrome';
            } else if (vjs.IS_SAFARI) {
                return 'Safari';
            } else if (vjs.IS_IE8) {
                return 'IE8';
            } else if (vjs.IS_IEMOBILE) {
                return 'IEMobile';
            } else {
                return 'unknown';
            }
        }

        function platformStr() {
            if (vjs.IS_ANDROID) {
                return 'Android' + vjs.ANDROID_VERSION;
            } else if (vjs.IS_IOS) {
                return 'iOS' + vjs.IOS_VERSION;
            } else {
                return navigator.platform;
            }
        }

        function generateInstanceId() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }
    }
})(amp || (amp = {}));
