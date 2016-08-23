/*
*
* Application Insights plugin for Azure Media Player - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
* Attribution: Google Analytics plugin for Azure Media Player - Microsoft Sample Code - Copyright (c) 2015 - Licensed MIT
* Attribution: "videojs-ga - v0.4.2" - Copyright (c) 2015 Michael Bensoussan - Licensed MIT
*
*/

(function () {
    var __indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    amp.plugin('analytics_collectData', function (options) {
        var player = this;

        var analyticsEvents = {
            analyticsstreamloaded: {
                name: "analyticsstreamloaded",
                label: "loaded",
                properties: ["loadTime"],
            },
            analyticsstreamstarted: {
                name: "analyticsstreamstarted",
                label: "started",
                properties: []
            },
            analyticsstreamendreached: {
                name: "analyticsstreamendreached",
                label: "endreached",
                properties: ["endReached"]
            },
            analyticspercentreached: {
                name: "analyticspercentreached",
                label: "percentReached",
                properties: ["percentReached"]
            },
            analyticsplay: {
                name: "analyticsplay",
                label: "play",
                properties: ["currentTime"]
            },
            analyticspause: {
                name: "analyticspause",
                label: "pause",
                properties: ["currentTime"]
            },
            analyticsseek: {
                name: "analyticsseek",
                label: "seek",
                properties: ["currentTime", "seekTime"]
            },
            analyticsfullscreen: {
                name: "analyticsfullscreen",
                label: "fullscreen",
                properties: ["enteringFullscreen", "currentTime"]
            },
            analyticserror: {
                name: "analyticserror",
                label: "error",
                properties: ["errorCode", "currentTime"]
            },
            analyticsbuffering: {
                name: "analyticsbuffering",
                label: "buffering",
                properties: ["currentTime", "bufferingTime", "bufferedAhead", "perceivedBandwidth"]
            },
            analyticsplaybackfinishedplaytime: {
                name: "analyticsplaybackfinishedplaytime",
                label: "playTime",
                properties: ["playTime"]
            },
            analyticsheartbeat: {
                name: "analyticsheartbeat",
                label: "heartbeat",
                properties: ["playTime", "fullscreenTime", "percentPlayed", "duration", "endReached", "suspendedTriggered", "enteredFullscreen", "currentTime", "loadTime", "seekCount", "seekTimeTotal", "maxSeekTime", "avgSeekTime", "rebufferCount", "rebufferTimeTotal", "maxRebufferTime", "avgRebufferTime", "qualityLevelCount", "minQualityLevel", "maxQualityLevel", "avgBitrate", "modeBitrate", "avgPerceivedBandwidth", "avgMeasuredBandwidth", "Br_0Kbps_300Kbps", "Br_300Kbps_500Kbps", "Br_500Kbps_1Mbps", "Br_1Mbps_1_5Mbps", "Br_1_5Mbps_3Mbps", "Br_3Mbps_5Mbps", "Br_5Mbps_6Mbps", "Br_6Mbps_20Mbps", "Br_20Mbps_above", "failedDownloadCount", "errorCode"]
            },
            analyticsplaybackfinished: {
                name: "analyticsplaybackfinished",
                label: "playbackSummary",
                properties: ["playTime", "fullscreenTime", "percentPlayed", "duration", "endReached", "suspendedTriggered", "enteredFullscreen", "currentTime", "loadTime", "seekCount", "seekTimeTotal", "maxSeekTime", "avgSeekTime", "rebufferCount", "rebufferTimeTotal", "maxRebufferTime", "avgRebufferTime", "qualityLevelCount", "minQualityLevel", "maxQualityLevel", "avgBitrate", "modeBitrate", "avgPerceivedBandwidth", "avgMeasuredBandwidth", "Br_0Kbps_300Kbps", "Br_300Kbps_500Kbps", "Br_500Kbps_1Mbps", "Br_1Mbps_1_5Mbps", "Br_1_5Mbps_3Mbps", "Br_3Mbps_5Mbps", "Br_5Mbps_6Mbps", "Br_6Mbps_20Mbps", "Br_20Mbps_above", "failedDownloadCount", "errorCode"]
            }/*,
            analyticsdownloadcompleted: {

            },
            analyticsdownloadfailed: {

            }*/


        };
        //Exposing list of available events to AMP
        amp.Player.prototype.analyticsEvents = analyticsEvents;

        var propertyNames = {
            playbackSummary: "playbackSummary",
            loadTime: "loadTime",
            buffering: "buffering",
            downloadCompleted: "downloadCompleted",
            downloadFailed: "downloadFailed",
            bitrateQuality: "bitrateQuality",
            playTime: "playTime",
            percentReached: "percentReached",
            percentPlayed: "percentPlayed",
            rebufferTime: "rebufferTime"
        };

        var getData = {
            //current information
            currentTime: function () { return Math.round(player.currentTime()) || 0 },  //current time of the playback experience
            duration: function () { return (!player.isLive() ? load.duration : (player.duration()).toFixed(2)) || null },  //duration of the content which will generally flucuate with live

            //loading information
            loadTime: function () { return load.loadTime; },
            timeToStartPlayback: function () { },
            suspendedTriggered: function () { return load.suspended ? 1 : 0; },

            //playback time information
            playIntervals: function () { return playIntervals.arrayOfTimes || null },
            uniquePlayIntervals: function () { return playIntervals.getUniqueArrayOfTimes() || null },
            playTime: function () { return player.isLive() ? playTimeLive.totalSeconds : playIntervals.totalSecondsWatched; },
            fullscreenTime: function () { return player.isLive() ? playTimeLive.totalSecondsFullscreen : playIntervals.totalSecondsWatchedFullscreen; },
            percentReached: function () { return Math.round(Math.round(player.currentTime()) / Math.round(player.duration()) * 100); },
            percentPlayed: function () { return !player.isLive() ? Math.min(Math.round((playIntervals.getUniquePlayTime() / player.duration()) * 100), 100) || 0 : null },
            endReached: function () { return load.endedReached ? 1 : 0; },

            //bandwidth information
            perceivedBandwidth: function () { return download.videoBuffer ? Math.round(download.videoBuffer.perceivedBandwidth) : null; },  //most recent percieved bandwidth
            avgPerceivedBandwidth: function () { return download.videoBuffer ? Math.round(download.sumPerceivedBandwidth / download.downloadedChunks) : null },
            avgMeasuredBandwidth: function () { return download.videoBuffer ? Math.round(download.sumMeasuredBandwidth / download.downloadedChunks) : null },

            //Bitrate information
            qualityLevelCount: function () { return download.qualityLevels || null },
            minQualityLevel: function () { return download.minQualityLevel || null },
            maxQualityLevel: function () { return download.maxQualityLevel || null },
            avgBitrate: function () { return download.downloadedChunks > 0 ? Math.round(download.sumBitrate / download.downloadedChunks) : null; },
            modeBitrate: function () { return download.getModeBitrate(); },
            Br_0Kbps_300Kbps: function () { return download.chunksInBitrateRange.Br_0Kbps_300Kbps },
            Br_300Kbps_500Kbps: function () { return download.chunksInBitrateRange.Br_300Kbps_500Kbps },
            Br_500Kbps_1Mbps: function () { return download.chunksInBitrateRange.Br_500Kbps_1Mbps },
            Br_1Mbps_1_5Mbps: function () { return download.chunksInBitrateRange.Br_1Mbps_1_5Mbps },
            Br_1_5Mbps_3Mbps: function () { return download.chunksInBitrateRange.Br_1_5Mbps_3Mbps },
            Br_3Mbps_5Mbps: function () { return download.chunksInBitrateRange.Br_3Mbps_5Mbps },
            Br_5Mbps_6Mbps: function () { return download.chunksInBitrateRange.Br_5Mbps_6Mbps },
            Br_6Mbps_20Mbps: function () { return download.chunksInBitrateRange.Br_6Mbps_20Mbps },
            Br_20Mbps_above: function () { return download.chunksInBitrateRange.Br_20Mbps_above },

            //error information
            failedDownloadCount: function () { return download.videoBuffer ? download.failedChunks : null },
            errorCode: function () { return player.error() ? player.error().code.toString(16) : null; },
            errorMessage: function () { return player.error() ? player.error().message : null; },

            //buffering information
            bufferingTime: function () { return buffering.bufferingTime }, //most recent buffer time
            bufferedAhead: function () { return calculateBufferAhead ? calculateBufferAhead() : null; }, //amount buffered ahead at the current time
            rebufferCount: function () { return buffering.state ? buffering.count + 1 : buffering.count; },
            rebufferTimeTotal: function () { return buffering.state ? buffering.bufferingTimeTotal + (Math.abs(Date.now() - buffering.bufferingTimeStart)) : buffering.bufferingTimeTotal; },
            maxRebufferTime: function () { return buffering.maxBufferingTime },
            avgRebufferTime: function () { return Math.round(this.rebufferTimeTotal() / this.rebufferCount()) || 0 },

            //seek information
            seekTime: function () { return seek.seekTime },  //most recent seek time
            seekTimeTotal: function () { return seek.seekTimeTotal },
            maxSeekTime: function () { return seek.maxSeekTime },
            avgSeekTime: function () { return Math.round(seek.seekTimeTotal / seek.seekCount) || 0 },
            seekCount: function () { return seek.seekCount },

            //fullscreen information
            enteringFullscreen: function () { return player.isFullscreen() ? 1 : 0; },
            enteredFullscreen: function () { return (playIntervals.totalSecondsWatchedFullscreen > 0 || playTimeLive.totalSecondsFullscreen > 0) ? 1 : 0 },

            //Summary level information
            playbackSummary: function () { getPlaybackSummary() },
        }

        //exposing getData to AMP
        amp.Player.prototype.getData = getData;

        player.telemetryData = {};

        var pluginVersion = 0.4;
        var parsedOptions;
        if (options == null) {
            options = {};
        }
        var dataSetupOptions = {};
        if (this.options()["data-setup"]) {
            parsedOptions = JSON.parse(this.options()["data-setup"]);
            if (parsedOptions.analytics_collectData) {
                dataSetupOptions = parsedOptions.analytics_collectData;
            }
        }

        /* All implemented metrics include: ['loaded', 'viewed', 'ended', 'playTime', 'percentsPlayed', 'play', 'pause', 'seek', 'fullscreen', 'error', 'buffering', 'bitrateQuality', 'playbackSummary', 'downloadInfo']; */
        var defaultMetricsToTrack = ['playbackSummary'];

        var listMetricsToTrack = options.metricsToTrack || dataSetupOptions.metricsToTrack || defaultMetricsToTrack;
        var metricsToTrack = {};
        listMetricsToTrack.forEach(function (value, index, array) {
            metricsToTrack[value] = true;
        });
        //exposing metricsToTrack to AMP
        amp.Player.prototype.metricsToTrack = metricsToTrack;

        var heartbeatInterval = options.heartbeatInterval || dataSetupOptions.heartbeatInterval || 30000;

        var percentsPlayedInterval = options.percentsPlayedInterval || dataSetupOptions.percentsPlayedInterval || 20;
        var analyticsDebug = options.debug || dataSetupOptions.debug || false;
        amp.Player.prototype.analyticsDebug = analyticsDebug;

        var streamId = options.streamId || dataSetupOptions.streamId || null;

        //Initializing tracking variables
        var percentsAlreadyTracked = [];
        var lastPercentTracked = -1;
        var percentPlayed = 0;
        var currentProtectionInfo = null;

        //Trim the manifest url to get a streamId
        function mapManifestUrlToId(manifest) {
            if (manifest) {
                var sourceManifest = "";
                var sourceManifestSplit = manifest.split("//");

                if (sourceManifestSplit.length > 1) {
                    for (var i = 1; i < sourceManifestSplit.length; i++) {
                        if (i > 1) {
                            sourceManifest += "//";
                        }
                        sourceManifest += sourceManifestSplit[i]
                    }
                } else {
                    sourceManifest = manifest;
                }

                if (sourceManifest.match(/.ism\/manifest/i)) {
                    sourceManifest = sourceManifest.split(/.ism\/manifest/i)[0] + ".ism/manifest";
                }
            }
            return sourceManifest || "unknown";
        }

        function mapProtectionInfo(protectionType) {
            var protectionInfo = "unknown";
            if (protectionType) {
                switch (protectionType.toLowerCase()) {
                    case "aes":
                        protectionInfo = "aes";
                        break;
                    case "playready":
                        protectionInfo = "drm";
                        break;
                    case "widevine":
                        protectionInfo = "drm";
                        break;
                    case "fairplay":
                        protectionInfo = "drm";
                        break;
                    default:
                        protectionInfo = "none";
                }
            }
            return protectionInfo;
        }

        //Calculating bufferedAhead *Does not work in SilverlightSS
        function calculateBufferAhead() {
            var buffered = player.buffered();
            var currentTime = player.currentTime();

            if (!buffered) {
                return undefined;
            }

            return Math.max(0, buffered.end(buffered.length - 1) - currentTime).toFixed(2);
        }

        //Loading information for tracking start, load times, unload events
        //loadTime is in milliseconds
        var load = {
            loadTime: 0,
            canplaythrough: false,
            suspended: false,
            //incase loadedmetadata doesn't fire set start time
            loadTimeStart: Date.now(),
            duration: null,
            firstPlay: false,
            endedReached: false,
            videoElementUsed: false,
            updateLoadTime: function () {
                if (!player.error()) {
                    this.duration = player.duration().toFixed(2);
                }
                this.loadTime = Math.abs(Math.round(Date.now() - this.loadTimeStart));

                if (analyticsDebug) {
                    console.log("Player Load Time determined: " + this.loadTime + "ms");
                    console.log("Load Time since pageload determined: " + performance.now().toFixed(2) + "ms");

                }
                if (metricsToTrack.loaded) {
                    player.trigger(analyticsEvents.analyticsstreamloaded.name);
                }
            },
            reset: function () {
                this.loadTime = 0;
                this.loadTimeStart = Date.now();
                this.duration = null;
                this.isLive = false;
                this.firstPlay = false;
                this.endedReached = false;
                this.canplaythrough = false;
                this.suspended = false;
                streamId = options.streamId || dataSetupOptions.streamId || null;
            }
        }

        //Buffering information for tracking waiting events
        //bufferingTime is in milliseconds
        var buffering = {
            state: false,
            bufferingTime: 0,
            bufferingTimeStart: 0,
            bufferingTimeTotal: 0,
            maxBufferingTime: 0,
            count: 0,
            enterBuffering: function () {
                if (load.firstPlay) {
                    this.bufferingTimeStart = Date.now();
                    this.state = true;
                    this.count++;
                    if (analyticsDebug) {
                        console.log("Entering buffering state...");
                    }
                }
            },
            send: function () {
                if (this.state) {
                    var bufferTime = Math.abs(Date.now() - this.bufferingTimeStart);
                    if (bufferTime > 10) {
                        this.bufferingTime = bufferTime
                        this.maxBufferingTime = Math.max(this.maxBufferingTime, this.bufferingTime);
                        var currentTime = Math.round(player.currentTime());
                        if (currentTime !== 0) {
                            if (metricsToTrack.buffering) {
                                player.trigger(analyticsEvents.analyticsbuffering.name);
                            }
                        }
                        this.bufferingTimeTotal += this.bufferingTime;
                        if (analyticsDebug) {
                            console.log("Exiting buffering state.  Time spent rebuffering was " + this.bufferingTime + "ms");
                        }
                    } else {
                        if (analyticsDebug) {
                            console.log("Exit buffering state...no buffering detected");
                        }
                    }
                    this.state = false;
                }
            },
            reset: function () {
                this.bufferingTime = 0;
                this.bufferingTimeStart = 0;
                this.bufferingTimeTotal = 0;
                this.count = 0;
                this.state = false;
                this.maxBufferingTime = 0;
            }
        };

        var download = {
            videoBuffer: null,
            audioBuffer: null,
            sumBitrate: 0,
            sumPerceivedBandwidth: 0,
            sumMeasuredBandwidth: 0,
            downloadedChunks: 0,
            failedChunks: 0,
            qualityLevels: null,
            maxQualityLevel: null,
            minQualityLevel: null,
            downloadsByBitrate: null,
            chunksInBitrateRange: {
                Br_0Kbps_300Kbps: 0,
                Br_300Kbps_500Kbps: 0,
                Br_500Kbps_1Mbps: 0,
                Br_1Mbps_1_5Mbps: 0,
                Br_1_5Mbps_3Mbps: 0,
                Br_3Mbps_5Mbps: 0,
                Br_5Mbps_6Mbps: 0,
                Br_6Mbps_20Mbps: 0,
                Br_20Mbps_above: 0
            },
            setQualityLevels: function () {
                if (this.videoBuffer) {
                    var stream = player.currentVideoStreamList().streams ? player.currentVideoStreamList().streams[0] : undefined;
                    if (stream) {
                        this.qualityLevels = stream.tracks.length;
                        this.downloadsByBitrate = {}
                        for (var i = 0; i < this.qualityLevels; i++) {
                            this.downloadsByBitrate[stream.tracks[i].bitrate] = 0;
                            this.maxQualityLevel = this.maxQualityLevel ? Math.max(this.maxQualityLevel, stream.tracks[i].bitrate) : stream.tracks[i].bitrate;
                            this.minQualityLevel = this.minQualityLevel ? Math.min(this.minQualityLevel, stream.tracks[i].bitrate) : stream.tracks[i].bitrate;
                        }
                    }
                }
            },
            getModeBitrate: function () {
                var modeBitrate = null;
                var testBitrate = 0;

                if (this.videoBuffer) {
                    for (var key in this.downloadsByBitrate) {
                        if (this.downloadsByBitrate.hasOwnProperty(key)) {
                            var obj = this.downloadsByBitrate[key];
                            if (obj >= testBitrate) {
                                testBitrate = obj;
                                modeBitrate = parseInt(key);
                            }
                        }
                    }
                }

                return testBitrate ? modeBitrate : null;
            },
            completed: function () {
                if (!this.qualityLevels) {
                    this.setQualityLevels();
                }
                if (player.currentDownloadBitrate()) {
                    this.downloadedChunks += 1;
                    this.sumBitrate += player.currentDownloadBitrate();
                    this.downloadsByBitrate[player.currentDownloadBitrate()] += 1;

                    if (this.videoBuffer) {
                        if (metricsToTrack.downloadInfo) {
                            player.telemetryData[propertyNames.downloadCompleted] = { "bitrate": player.currentDownloadBitrate(), "measuredBandwidth": this.videoBuffer.downloadCompleted.measuredBandwidth, "perceivedBandwidth": this.videoBuffer.perceivedBandwidth };
                            //player.trigger(eventNames.downloadCompleted);
                        }

                        this.sumPerceivedBandwidth += this.videoBuffer.perceivedBandwidth;
                        this.sumMeasuredBandwidth += this.videoBuffer.downloadCompleted.measuredBandwidth;
                    }

                    var currentDownloadBr = player.currentDownloadBitrate();
                    if (currentDownloadBr < 300000) this.chunksInBitrateRange.Br_0Kbps_300Kbps++;
                    if (currentDownloadBr > 300000 && currentDownloadBr < 500000) this.chunksInBitrateRange.Br_300Kbps_500Kbps++;
                    if (currentDownloadBr > 500000 && currentDownloadBr < 1000000) this.chunksInBitrateRange.Br_500Kbps_1Mbps++;
                    if (currentDownloadBr > 1000000 && currentDownloadBr < 1500000) this.chunksInBitrateRange.Br_1Mbps_1_5Mbps++;
                    if (currentDownloadBr > 1500000 && currentDownloadBr < 3000000) this.chunksInBitrateRange.Br_1_5Mbps_3Mbps++;
                    if (currentDownloadBr > 3000000 && currentDownloadBr < 5000000) this.chunksInBitrateRange.Br_3Mbps_5Mbps++;
                    if (currentDownloadBr > 5000000 && currentDownloadBr < 6000000) this.chunksInBitrateRange.Br_5Mbps_6Mbps++;
                    if (currentDownloadBr > 6000000 && currentDownloadBr < 20000000) this.chunksInBitrateRange.Br_6Mbps_20Mbps++;
                    if (currentDownloadBr > 20000000) this.chunksInBitrateRange.Br_20Mbps_above++;
                }
            },
            failed: function (type) {
                if (metricsToTrack.downloadInfo) {

                    if (type.toLowerCase() == "audio") {
                        var isVideo = 0;
                        var code = this.audioBuffer.downloadFailed.code.toString(8);
                    } else {
                        var isVideo = 1;
                        var code = this.videoBuffer.downloadFailed.code.toString(8);
                    }

                    player.telemetryData[propertyNames.downloadFailed] = { "isVideo": isVideo, "error": code };
                    //player.trigger(eventNames.downloadFailed);
                }
                this.failedChunks++;
            },
            send: function () {
                if (metricsToTrack.bitrateQuality) {
                    if (this.downloadedChunks > 0) {
                        bitrateQualityMetrics = {
                            "avgBitrate": this.sumBitrate / this.downloadedChunks
                        }

                        if (this.videoBuffer) {

                            var AverageMeasuredBandwidth = Math.round(this.sumMeasuredBandwidth / this.downloadedChunks);
                            var AveragePerceivedBandwidth = Math.round(this.sumPerceivedBandwidth / this.downloadedChunks);

                            bitrateQualityMetrics.avgMeasuredBandwidth = AverageMeasuredBandwidth;
                            bitrateQualityMetrics.avgPerceivedBandwidth = AveragePerceivedBandwidth;

                        }
                        player.telemetryData[propertyNames.telemetryData] = bitrateQualityMetrics;
                        //player.trigger(eventNames.bitrateQuality);
                    }
                }
            },
            reset: function () {
                this.videoBuffer = null;
                this.audioBuffer = null;
                this.sumBitrate = 0;
                this.sumPerceivedBandwidth = 0;
                this.sumMeasuredBandwidth = 0;
                this.downloadedChunks = 0;
                this.failedChunks = 0;
                this.qualityLevels = null;
                this.minQualityLevel = null;
                this.maxQualityLevel = null;
                this.downloadsByBitrate = null;
                this.chunksInBitrateRange = {
                    Br_0Kbps_300Kbps: 0,
                    Br_300Kbps_500Kbps: 0,
                    Br_500Kbps_1Mbps: 0,
                    Br_1Mbps_1_5Mbps: 0,
                    Br_1_5Mbps_3Mbps: 0,
                    Br_3Mbps_5Mbps: 0,
                    Br_5Mbps_6Mbps: 0,
                    Br_6Mbps_20Mbps: 0,
                    Br_20Mbps_above: 0
                }
            }
        };

        //seekTime is in milliseconds
        var seek = {
            seeking: false,
            seekTime: 0,
            seekTimeTotal: 0,
            seekCount: 0,
            seekTimeStart: Date.now(),
            maxSeekTime: 0,
            enterSeek: function () {
                if (buffering.state) {
                    buffering.send()
                }
                this.seeking = true;
                this.seekTimeStart = Date.now();
            },
            exitSeek: function () {
                if (this.seeking) {

                    this.seekTime = Math.abs(Date.now() - this.seekTimeStart);
                    this.seekCount++;
                    this.seekTimeTotal += this.seekTime;
                    this.maxSeekTime = Math.max(this.maxSeekTime, this.seekTime);
                    if (metricsToTrack.seek) {
                        player.trigger(analyticsEvents.analyticsseek.name);
                    }
                    this.seeking = false;
                }
            },
            avgSeekTime: function () {
                return this.seekTimeTotal / this.seekCount || 0;
            },
            reset: function () {
                this.seeking = false;
                this.seekTime = 0;
                this.seekTimeTotal = 0;
                this.seekCount = 0;
                this.seekTimeStart = Date.now();
                this.maxSeekTime = 0;

            }
        };

        //playIntervals tracks the intervals of time in which the viewer watched on
        var playIntervals = {
            startTime: 0,
            endTime: 0,
            added: false,
            lastCheckedTime: 0,
            arrayOfTimes: [],
            arrayOfTimesFullscreen: [],
            uniqueArrayOfTimesFullscreen: [],
            totalSecondsWatched: 0,
            totalSecondsWatchedFullscreen: 0,
            sortAlgorithm: function (a, b) {

                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
                return 0;

            },
            update: function (time) {
                if (time == this.lastCheckedTime + 1) {
                    this.added = false;
                    this.totalSecondsWatched += 1;
                    if (player.isFullscreen()) {
                        this.totalSecondsWatchedFullscreen += 1;
                    }
                }

                if (!(time == this.lastCheckedTime || time == this.lastCheckedTime + 1)) {
                    this.pushOn();
                    this.startTime = time;
                }
                this.lastCheckedTime = time;

            },
            pushOn: function () {
                this.endTime = this.lastCheckedTime;
                this.arrayOfTimes.push([this.startTime, this.endTime]);
                this.startTime = Math.round(player.currentTime());
                if (this.startTime == this.endTime) {
                    this.startTime++;
                }
                this.added = true;
            },
            getArrayOfTimes: function () {
                var tempArray = [];
                tempArray = this.arrayOfTimes.slice();
                if (!this.added) {
                    tempArray.push([this.startTime, Math.round(player.currentTime())]);
                    x = this.arrayOfTimes;
                }
                return tempArray;
            },
            getUniqueArrayOfTimes: function () {
                var tempArrayOfTimes = this.getArrayOfTimes().slice();
                tempArrayOfTimes.sort(this.sortAlgorithm);
                var uniqueArrayOfTimes = [];

                if (tempArrayOfTimes.length > 1) {
                    uniqueArrayOfTimes.push(tempArrayOfTimes[0]);
                    for (var i = 1; i < tempArrayOfTimes.length; i++) {
                        if (tempArrayOfTimes[i][0] <= uniqueArrayOfTimes[uniqueArrayOfTimes.length - 1][1]) {
                            if (tempArrayOfTimes[i][1] > uniqueArrayOfTimes[uniqueArrayOfTimes.length - 1][1]) {
                                var t0 = uniqueArrayOfTimes[uniqueArrayOfTimes.length - 1][0];
                                var t1 = tempArrayOfTimes[i][1];
                                uniqueArrayOfTimes.pop();
                                uniqueArrayOfTimes.push([t0, t1]);
                            }
                        } else {
                            uniqueArrayOfTimes.push(tempArrayOfTimes[i]);
                        }
                    }
                } else {
                    uniqueArrayOfTimes = tempArrayOfTimes;
                }
                return uniqueArrayOfTimes;
            },
            getPlayTime: function () {
                var array = this.getArrayOfTimes();
                var time = 0;
                for (var i = 0; i < array.length; i++) {
                    time += array[i][1] - array[i][0];
                }
                return Math.round(time);
            },
            getUniquePlayTime: function () {
                var array = this.getUniqueArrayOfTimes();
                var time = 0;
                for (var i = 0; i < array.length; i++) {
                    time += array[i][1] - array[i][0];
                }
                return Math.round(time);
            },
            reset: function () {
                this.startTime = 0;
                this.endTime = 0;
                this.lastCheckedTime = 0;
                this.totalSecondsWatched = 0;
                this.totalSecondsWatchedFullscreen = 0;
                this.added = false;
                this.arrayOfTimes = [];
                this.arrayOfTimesFullscreen = [];
                this.uniqueArrayOfTimesFullscreen = [];
            }
        };

        //amp.Player.prototype.playIntervals = playIntervals;

        //Timer for playTime tracking for Live playback
        //Tracking totalSeconds in seconds
        var playTimeLive = {
            totalSeconds: 0,
            totalSecondsFullscreen: 0,
            start: function () {
                var self = this;
                this.interval = setInterval(function () {
                    self.totalSeconds += 1;
                    if (player.isFullscreen()) {
                        self.totalSecondsFullscreen += 1;
                    }
                }, 1000);
            },
            pause: function () {
                clearInterval(this.interval);
                delete this.interval;
            },
            resume: function () {
                if (!this.interval) this.start();
            },
            reset: function () {
                this.totalSeconds = 0;
                this.totalSecondsFullscreen = 0;
            }
        };

        var heartbeat = {
            heartbeatOn: false,
            intervalHeartbeatFunction: null,
            startHeartbeat: function () {
                if (!this.heartbeatOn) {
                    this.intervalHeartbeatFunction = setInterval(this.sendHeartbeat, heartbeatInterval);
                    this.heartbeatOn = true;
                }
            },
            stopHeartbeat: function () {
                if (this.heartbeatOn) {
                    clearInterval(this.intervalHeartbeatFunction);
                    this.sendHeartbeat();
                    this.heartbeatOn = false;
                }
            },
            sendHeartbeat: function () {
                player.trigger(analyticsEvents.analyticsheartbeat.name);
            },
            reset: function () {
                clearInterval(this.intervalHeartbeatFunction);
                this.intervalHeartbeatFunction = null;
                this.heartbeatOn = false;
            }
        };

        var sourceset = function () {

            if (load.videoElementUsed) {
                unloadData();
            }

            //resetting state for source change scenario
            load.reset()
            buffering.reset();
            playTimeLive.reset();
            playIntervals.reset();
            download.reset();
            seek.reset();
            heartbeat.reset();
            percentPlayed = 0;
            lastPercentTracked = null;
            currentProtectionInfo = null;
            streamId = null;


            if (analyticsDebug) {
                console.log("Resetting App Insight Plugin Config");
            }

        }

        var loaded = function () {

            streamId = options.streamId || dataSetupOptions.streamId || null;
            if (!streamId) {
                streamId = mapManifestUrlToId(player.currentSrc());
            }
            if (analyticsDebug) {
                console.log("streamId set as: " + streamId);
            }

            if (player.currentProtectionInfo()) {
                currentProtectionInfo = mapProtectionInfo(player.currentProtectionInfo()[0].type);
            } else {
                currentProtectionInfo = "none";
            }

            if (analyticsDebug) {
                console.log("protectionInfo set as: " + currentProtectionInfo);
            }

            //used to track if the video element is reused to appropriately send unload data
            load.videoElementUsed = true;

        };

        var canplaythrough = function () {
            if (!load.canplaythrough) {
                load.updateLoadTime();
                load.canplaythrough = true;
            }
        }

        var suspend = function () {
            if (!load.firstPlay) {
                load.suspended = true;
                canplaythrough();
            }
        }

        var timeupdate = function () {
            if (streamId) {
                var currentTime = Math.round(player.currentTime());

                if (metricsToTrack.playbackSummary || metricsToTrack.heartbeat || metricsToTrack.playTime) {
                    playIntervals.update(currentTime);
                }

                if (metricsToTrack.percentsPlayed) {
                    //Currently not tracking percentage watched information for Live
                    if (!this.isLive()) {
                        var duration = Math.round(player.duration());

                        var currentTimePercent = Math.round(currentTime / duration * 100);
                        if (currentTimePercent != lastPercentTracked) {

                            if (currentTimePercent % percentsPlayedInterval == 0 && currentTimePercent <= 100) {
                                if (__indexOf.call(percentsAlreadyTracked, currentTimePercent) < 0) {
                                    if (currentTimePercent !== 0) {
                                        percentPlayed += percentsPlayedInterval;
                                    }
                                    percentsAlreadyTracked.push(currentTimePercent);
                                }
                                //player.telemetryData[propertyNames.percentReached] = { "percent": currentTimePercent };
                                player.trigger(analyticsEvents.analyticspercentreached.name);
                            }
                        }
                        lastPercentTracked = currentTimePercent;
                    }
                }


                if (metricsToTrack.bitrateQuality || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                    if (!download.videoBuffer && player.currentDownloadBitrate()) {
                        download.completed();
                    }
                }
            }
        };

        var play = function () {
            if (metricsToTrack.play) {
                if (!seek.seeking) {
                    player.trigger(analyticsEvents.analyticsplay.name);
                }
            }
        };

        var playing = function () {
            //incase canplaythrough doesn't fire
            if (!load.canplaythrough) {
                canplaythrough();
            }
            seek.seeking = false;
            if (!load.firstPlay) {
                if (metricsToTrack.viewed) {
                    player.trigger(analyticsEvents.analyticsstreamstarted.name);
                }
                load.firstPlay = true;
            }
            if (metricsToTrack.buffering || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                buffering.send();
            }

            if (metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                if (player.isLive()) {
                    if (playTimeLive.totalSeconds == 0) {
                        playTimeLive.start();
                    } else {
                        playTimeLive.resume();
                    }
                }
            }
        }

        var pause = function () {
            if (metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                if (player.isLive()) {
                    playTimeLive.pause();
                }
            }

            if (metricsToTrack.pause) {
                //adding a timeout because in the seeking case, pause is triggered before seeking and that is not a user initiated pause
                setTimeout(function () {
                    var currentTime = Math.round(player.currentTime());
                    var duration = Math.round(player.duration());

                    if (currentTime !== duration && !seek.seeking) {
                        if (metricsToTrack.pause) {
                            player.trigger(analyticsEvents.analyticspause.name);
                        }
                    }
                }, 100);

            }
        }

        var end = function () {
            if (!load.endedReached) {
                load.endedReached = true;
            }

            if (metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                if (player.isLive()) {
                    playTimeLive.pause();
                }
            }
            if (metricsToTrack.ended) {
                player.trigger(analyticsEvents.analyticsstreamendreached.name)
            }
        };

        var seeking = function () {
            seek.enterSeek();
        }

        var seeked = function () {
            seek.exitSeek();
        }

        var waiting = function () {
            buffering.enterBuffering();
        }

        var downloadcompleted = function () {
            download.completed();
        }

        var downloadfailed = function () {

        }

        var fullscreen = function () {
            player.trigger(analyticsEvents.analyticsfullscreen.name);
        };

        var error = function () {
            if (load.loadTime == 0) {
                load.updateLoadTime();
            }

            if (metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
                if (player.isLive()) {
                    playTimeLive.pause();
                }
            }
            if (metricsToTrack.error) {
                player.trigger(analyticsEvents.analyticserror.name);
            }
        };

        function unloadData() {
            if (buffering.state) {
                buffering.send();
            }

            //send events
            if (metricsToTrack.playTime) {
                //player.telemetryData[propertyNames.playTime] = { "time": totalPlayTime };
                player.trigger(analyticsEvents.analyticsplaybackfinishedplaytime.name);
            }
            if (metricsToTrack.heartbeat) {
                heartbeat.stopHeartbeat();
                heartbeat.sendHeartbeat();
            }
            //if (metricsToTrack.percentsPlayed) {
            //    if (!player.isLive()) {
            //        player.telemetryData[propertyNames.percentPlayed] = { "percentage": percentPlayed };
            //        //player.trigger(eventNames.percentPlayed);
            //    }
            //}
            //if (metricsToTrack.bitrateQuality) {
            //    download.send();
            //}
            //if (metricsToTrack.buffering) {
            //    player.telemetryData[propertyNames.rebufferTime] = { 'count': buffering.count, "totalRebufferTime": buffering.bufferingTimeTotal };
            //    //player.trigger(eventNames.rebufferTime);
            //}
            if (metricsToTrack.playbackSummary) {
                //player.telemetryData[propertyNames.playbackSummary] = getSummaryData();
                player.trigger(analyticsEvents.analyticsplaybackfinished.name);
            }
        }

        //add event listeners for tracking
        player.addEventListener("sourceset", sourceset);
        player.addEventListener("loadedmetadata", loaded);
        player.addEventListener("canplaythrough", canplaythrough);
        var playerIdTag = player.tagAttributes.id;
        if (document.getElementById(playerIdTag + "_html5_api")) {
            videoTag = document.getElementById(playerIdTag + "_html5_api");
        } else {
            videoTag = document.getElementById(playerIdTag);
        }
        videoTag.addEventListener("suspend", function () { canplaythrough });

        if (metricsToTrack.bitrateQuality || metricsToTrack.downloadInfo || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            //does this double send on a change source?
            player.addEventListener("loadedmetadata", function () {
                download.videoBuffer = player.videoBufferData();
                if (download.videoBuffer) {
                    download.videoBuffer.addEventListener("downloadcompleted", function () { download.completed() });
                    download.videoBuffer.addEventListener("downloadfailed", function () { download.failed("video") });
                }
                download.audioBuffer = player.audioBufferData();
                if (download.audioBuffer) {
                    download.audioBuffer.addEventListener("downloadfailed", function () { download.failed("audio") });
                }
            });
        }
        if (metricsToTrack.error || metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("error", error);
        }
        if (metricsToTrack.end || metricsToTrack.playTime || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("ended", end);
        }
        if (metricsToTrack.heartbeat) {

            player.addEventListener("error", function () {
                heartbeat.sendHeartbeat();
                heartbeat.stopHeartbeat();
            });
            player.addEventListener("canplaythrough", function () {
                heartbeat.sendHeartbeat();
            });
            player.addEventListener("playing", function () {
                heartbeat.startHeartbeat()
            });
            player.addEventListener("ended", function () {
                heartbeat.stopHeartbeat();
            });
            player.addEventListener("pause", function () {
                setTimeout(function () {
                    if (player.paused()) {
                        heartbeat.stopHeartbeat();
                    }
                }, 1000);
            });

        }

        if (metricsToTrack.percentsPlayed || metricsToTrack.bitrateQuality || metricsToTrack.playbackSummary || metricsToTrack.playTime || metricsToTrack.heartbeat) {
            player.addEventListener("timeupdate", timeupdate);
        }

        player.addEventListener("playing", playing);
        if (metricsToTrack.playTime || metricsToTrack.bitrateQuality || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("disposing", function () {

                unloadData();
                for (var key in player.analyticsEvents) {

                    var obj = player.analyticsEvents[key];
                    player.removeEventListener(obj.name);

                }
            });
        }

        if (metricsToTrack.play) {
            player.addEventListener("play", play);
        }
        if (metricsToTrack.pause || metricsToTrack.playTime || metricsToTrack.buffering || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("pause", pause);
        }
        if (metricsToTrack.buffering || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("waiting", waiting);
        }
        if (metricsToTrack.buffering || metricsToTrack.seek || metricsToTrack.playbackSummary || metricsToTrack.heartbeat) {
            player.addEventListener("seeking", seeking);
            player.addEventListener("seeked", seeked);
        }
        if (metricsToTrack.fullscreen) {
            player.addEventListener("fullscreenchange", fullscreen);
        }

        function getTelemetryProperties() {

            var properties = {
                StreamId: streamId || "unknown",
                PageUrl: (window.location != window.parent.location) ? document.referrer : document.location.href || "unknown",
                TrafficRefferer: (window.location == window.parent.location) ? (document.referrer || "none") : "unknown",
                PluginVersion: pluginVersion,
                PlayerVersion: player.getAmpVersion() || "unknown",
                PlaybackTech: player.currentTechName() || "unknown",
                MimeType: player.currentType() || "unknown",
                ProtectionType: currentProtectionInfo || "unknown",
                isLive: player.isLive() ? "live" : "vod" || "unknown",
                Sdn: player.options_.sdn.name || "none",
                autoPlay: player.autoplay() || "unknown",
                heuristicsProfile: player.currentHeuristicProfile() || "unknown"
            };

            //additional logic incase loadedmetadata event hasn't fired to set streamId
            if (!streamId) {
                var sourceManifest = "unknown";
                if (player.options_.sourceList[0]) {
                    sourceManifest = mapManifestUrlToId(player.options_.sourceList[0].src)
                }
                properties.StreamId = sourceManifest;
            }

            //additional logic incase loadedmetadata event hasn't fired to set protetction info
            if (!currentProtectionInfo) {
                var protectionInfo = "unknown";
                if (player.options_.sourceList[0]) {
                    if (player.options_.sourceList[0].protectionInfo) {
                        protectionInfo = mapProtectionInfo(player.options_.sourceList[0].protectionInfo[0].type);
                    } else {
                        protectionInfo = "none";
                    }
                }
                properties.ProtectionType = protectionInfo;
            }

            return properties;
        }

        //exposing telemetry properties through AMP
        amp.Player.prototype.getTelemetryProperties = getTelemetryProperties;

        //metrics can only be numbers
        function getEventMetrics(eventName) {
            var metrics = {};
            if (analyticsEvents[eventName]) {
                if (analyticsEvents[eventName].hasOwnProperty("properties")) {
                    analyticsEvents[eventName].properties.forEach(function (value, index, array) {
                        if (getData[value]) {
                            if (typeof getData[value] === "function") {
                                var metricValue = getData[value]();

                                if (metricValue !== null && !isNaN(metricValue)) {
                                    metrics[value] = metricValue;
                                }
                            }
                        }
                    });
                }
            }


            return metrics;
        }
        //exposing method to get get data for metrics through AMP
        amp.Player.prototype.getEventMetrics = getEventMetrics;
    });

}).call(this);