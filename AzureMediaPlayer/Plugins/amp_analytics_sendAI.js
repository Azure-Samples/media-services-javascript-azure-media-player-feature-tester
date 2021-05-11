/*
*
* Application Insights plugin for Azure Media Player - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
* Attribution: Google Analytics plugin for Azure Media Player - Microsoft Sample Code - Copyright (c) 2015 - Licensed MIT
* Attribution: "videojs-ga - v0.4.2" - Copyright (c) 2015 Michael Bensoussan - Licensed MIT
*
*/

(function () {
    var __indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    amp.plugin('analytics_sendAI', function (options) {
        try {
            var player = this;
            var unloaddatasent = false;


            var parsedOptions;
            if (options == null) {
                options = {};
            }
            var dataSetupOptions = {};
            if (this.options()["data-setup"]) {
                parsedOptions = JSON.parse(this.options()["data-setup"]);
                if (parsedOptions.appInsights) {
                    dataSetupOptions = parsedOptions.appInsights;
                }
            }

            var trackAllDownloadedSegments = options.trackAllDownloadedSegments || dataSetupOptions.trackAllDownloadedSegments || false;

            //App Insights Config
            appInsights.config.maxBatchInterval = sendInterval = options.sendInterval || dataSetupOptions.sendInterval || 15;
            appInsights.config.disableFlushOnBeforeUnload = true;
            appInsights.config.enableSessionStorageBuffer = true;
            appInsights.config.maxAjaxCallsPerView = -1;
            appInsights.context.addTelemetryInitializer(function (envelope) {
                if (!trackAllDownloadedSegments) {
                    if (envelope.data.baseType === "RemoteDependencyData") {
                        var name = envelope.data.baseData.name.toLowerCase();
                        if (name.match("ism") && name.match("qualitylevels") && name.match("fragments")) {
                            if (envelope.data.baseData.success) {
                                //by returning null on successes, it allows to only track AJAX failures instead of all AJAX calls
                                return null;
                            }
                        }
                    }
                }

                if (options.debug) {
                    console.log("Logging to AI: " + stringify);
                }
            });



            function sendToAI(event, metricsObj) {
                if (window.appInsights) {
                    var properties = player.getTelemetryProperties() || {};
                    var metrics = metricsObj || {};

                    if (event == "error") {
                        properties.errorMessage = player.getData.errorMessage;

                        appInsights.trackTrace(event, properties, metrics);
                        if (player.analyticsDebug) {
                            console.log("queuing to Application Insights Error Trace");
                        }

                    }

                    if (event == "playbackSummary" || event == "heartbeat") {
                        if (player.error()) {
                            properties.errorMessage = player.getData.errorMessage;
                        }
                        properties.playIntervals = player.getData.playIntervals;
                    }

                    appInsights.trackEvent(event, properties, metrics);
                    if (player.analyticsDebug) {
                        console.log("queuing to Application Insights...'event': " + event);
                        console.log("'properties': ");
                        console.log(properties);
                        console.log("'metrics': ");
                        console.log(metrics);
                        console.log("\n")
                    }
                } else if (player.analyticsDebug) {
                    console.log("App Insights not detected");
                }
            }

            for (var key in player.analyticsEvents) {

                var obj = player.analyticsEvents[key];
                addEvent(obj.name, obj.label);

            }

            function addEvent(name, label, properties) {
                player.addEventListener(name, function (evt) {
                    sendToAI(label, player.getEventMetrics(evt.type));
                });
            }

            //special case for beforeunloadevent which needs to be fired from send plugin to increase probability that data will send
            function exit() {
                //Check that you haven't already sent this data
                //iOS fires event twice
                if (!unloaddatasent) {
                    unloaddatasent = true;
                    //FINISH THIS
                }
            };

            if (player.metricsToTrack.playTime || player.metricsToTrack.bitrateQuality || player.metricsToTrack.playbackSummary || player.metricsToTrack.heartbeat) {
                window.addEventListener("beforeunload", exit, false);
                window.addEventListener("pagehide", exit, false);
                player.addEventListener("disposing", function () {
                    window.removeEventListener("beforeunload", exit);
                    window.removeEventListener("pagehide", exit);
                });
            }
        }
        catch (err) {
            console.log("Unable to load correctly due to exception." + err);
        }
    });

}).call(this);