var AmpDiagnosticCenter;
(function (AmpDiagnosticCenter) {
    "use strict";

    var PropertyInfo = (function () {
        function PropertyInfo(n, f) {
            this.name = n;
            this.functionHandler = f;
            this.txtAreaAmpProperties = null;
        }
        return PropertyInfo;
    })();

    AmpDiagnosticCenter.myPlayer = null;
    var defaultOptions = {
        "nativeControlsForTouch": false
    };

    function createAMPInstance(options, ready) {
        AmpDiagnosticCenter.myPlayer = amp("vid1");
        _registerAmpEvents();
        AmpDiagnosticCenter.ChartControl.SetupCharts();

        AmpDiagnosticCenter.myPlayer.width(document.getElementById('videoContainer').clientWidth - document.getElementById('statsNavBar').clientWidth - 20);
        AmpDiagnosticCenter.myPlayer.height(document.getElementById('videoContainer').clientHeight);
        $(window).resize(function () {
            var elem = document.getElementById('videoContainer');
            var borderWidth = "";
            try  {
                borderWidth = getComputedStyle(elem).getPropertyValue('width');
            } catch (e) {
                borderWidth = elem.currentStyle.width;
            }
            var borderWidthNumber = parseInt(borderWidth.replace("px", ""), 10);

            AmpDiagnosticCenter.myPlayer.width(borderWidthNumber - 20);
            if (document.getElementById('videoContainer').clientHeight !== 1) {
                AmpDiagnosticCenter.myPlayer.height(document.getElementById('videoContainer').clientHeight);
            }
        });

        function _registerAmpEvents() {
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.volumechange, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.ended, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.timeupdate, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.durationchange, _ampEventHandler);

            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.pause, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.play, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.playing, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.seeking, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.seeked, _ampEventHandler);

            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.loadstart, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.loadeddata, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.loadedmetadata, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.fullscreenchange, _ampEventHandler);

            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.waiting, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.canplaythrough, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.error, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.downloadbitratechanged, _ampEventHandler);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.playbackbitratechanged, _ampEventHandler);
        }
    }
    AmpDiagnosticCenter.createAMPInstance = createAMPInstance;

    function initialize(isScriptSetup) {
        AzureHtml5JS.Log.setConsoleOutputByLevel(3 /* verbose */);

        var selectSource = document.getElementById("selectSource");
        var txtUrl = document.getElementById("txtUrl");
        var txtToken = document.getElementById("txtToken");
        var txtType = document.getElementById("txtType");
        _initializeProperties();

        document.getElementById("vid1").setAttribute("height", document.getElementById("mediaRow").clientHeight.toString());
        document.getElementById("mediaUrlTxt").value = "//ams-samplescdn.streaming.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest";

        btnSrcClick();

        function _initializeProperties() {
            for (var i = 0; i < properties.length; i++) {
                var propDiv = document.getElementById('propertiesDiv');
                var indivDiv = document.createElement('div');
                indivDiv.className = "input-group";
                var nameDiv = document.createElement('div');
                nameDiv.className = 'input-group-addon';
                nameDiv.innerText = properties[i].name;
                var valueTxt = document.createElement('input');
                valueTxt.type = 'text';
                valueTxt.readOnly = true;
                valueTxt.className = 'form-control';

                indivDiv.appendChild(nameDiv);
                indivDiv.appendChild(valueTxt);
                properties[i].txtAreaAmpProperties = valueTxt;

                propDiv.appendChild(indivDiv);
            }
        }
    }
    AmpDiagnosticCenter.initialize = initialize;

    var properties = [
        new PropertyInfo("techname", function () {
            return this.currentTechName();
        }),
        new PropertyInfo("type", function () {
            return this.currentType();
        }),
        new PropertyInfo("buffered", function () {
            return AmpDiagnosticCenter.PrettyPrint.timeTimeRange(this.buffered());
        }),
        new PropertyInfo("autoplay", function () {
            return this.autoplay();
        }),
        new PropertyInfo("currentTime", function () {
            return AmpDiagnosticCenter.PrettyPrint.toFixed(this.currentTime(), 3);
        }),
        new PropertyInfo("duration", function () {
            return AmpDiagnosticCenter.PrettyPrint.toFixed(this.duration(), 3);
        }),
        new PropertyInfo("volume", function () {
            return this.volume();
        }),
        new PropertyInfo("seeking", function () {
            return this.seeking();
        }),
        new PropertyInfo("paused", function () {
            return this.paused();
        }),
        new PropertyInfo("ended", function () {
            return this.ended();
        }),
        new PropertyInfo("error", function () {
            return (this.error()) ? AmpDiagnosticCenter.PrettyPrint.error(this.error().code) : "undefined";
        }),
        new PropertyInfo("width", function () {
            return this.width();
        }),
        new PropertyInfo("height", function () {
            return this.height();
        }),
        new PropertyInfo("videoWidth", function () {
            return this.videoWidth();
        }),
        new PropertyInfo("videoHeight", function () {
            return this.videoHeight();
        }),
        new PropertyInfo("bufferAhead*", function () {
            var buffer = calculateBufferAhead();
            return (buffer) ? buffer.toFixed(3) : "undefined";
        }),
        new PropertyInfo("heuristicProfile", function () {
            return this.currentHeuristicProfile();
        })
    ];

    function btnSrcClick() {
        if (!AmpDiagnosticCenter.myPlayer) {
            createAMPInstance(defaultOptions);
        }

        AmpDiagnosticCenter.ChartControl.ClearCharts();

        var config = {
            url: "//ams-samplescdn.streaming.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest",
            advanced: "false",
            format: "auto",
            tech: "auto",
            protection: "none",
            token: "",
            autoplay: "false"
        };

        var mimeType = "application/vnd.ms-sstr+xml";
        var boolDisableURLRewrite = false;
        var streamingFormats = [];
        var isProtected = false;
        var protectionType = "";

        var url = $('#mediaUrlTxt').val();
        if (!url) {
            url = config.url;
        }

        var myOptions = {
            "nativeControlsForTouch": false,
            "loop": false
        };

        switch ($("#selectFormat").val()) {
            case "auto":
                if ((url.trim().toLowerCase().match('.ism/manifest')) || (url.trim().toLowerCase().match('.isml/manifest'))) {
                } else if (url.toLowerCase().match('.mpd$')) {
                    mimeType = "application/dash+xml";
                    boolDisableURLRewrite = true;
                } else if (url.toLowerCase().match('.flv$')) {
                    mimeType = "video/x-flv";
                    boolDisableURLRewrite = true;
                } else if (url.toLowerCase().match('.ogv$')) {
                    mimeType = "video/ogg";
                    boolDisableURLRewrite = true;
                } else if (url.toLowerCase().match('.webm$')) {
                    mimeType = "video/webm";
                    boolDisableURLRewrite = true;
                } else if (url.toLowerCase().match('.3gp$')) {
                    mimeType = "video/3gp";
                    boolDisableURLRewrite = true;
                } else if (url.toLowerCase().match('.mp4')) {
                    mimeType = "video/mp4";
                    boolDisableURLRewrite = true;
                }
                break;
            case "dash":
                streamingFormats.push("DASH");
                break;
            case "smooth":
                streamingFormats.push("SMOOTH");
                break;
            case "hls":
                streamingFormats.push("HLS-V3");
                streamingFormats.push("HLS-V4");
                break;
            case "mp4":
                mimeType = "video/mp4";
                boolDisableURLRewrite = true;
                break;
            case "other":
                config.format = $("#formatOtherVal").val();
                boolDisableURLRewrite = true;
                break;
            default:
                break;
        }
        switch ($("#selectTech").val()) {
            case "auto":
                myOptions.techOrder = ["azureHtml5JS", "flashSS", "silverlightSS", "html5", "flash"];
                break;
            case "azureHtml5JS":
                myOptions.techOrder = ["azureHtml5JS"];
                break;
            case "flashSS":
                myOptions.techOrder = ["flashSS", "flash"];
                break;
            case "silverlightSS":
                myOptions.techOrder = ["silverlightSS"];
                break;
            case "html5":
                myOptions.techOrder = ["html5"];
                break;
            default:
                break;
        }
        switch ($("#selectContentProtection").val()) {
            case "aes":
                isProtected = true;
                protectionType = "AES";
                break;
            case "playready":
                isProtected = true;
                protectionType = "PlayReady";
                break;
            default:
                break;
        }

        switch ($("#selectHeuristicProfile").val()) {
            case "quickStart":
                myOptions.heuristicProfile = "QuickStart";
                break;
            case "highQuality":
                myOptions.heuristicProfile = "HighQuality";
                break;
            default:
                break;
        }

        var mySourceList;
        if (isProtected == false) {
            mySourceList = [{ src: url.trim(), type: mimeType, disableUrlRewriter: boolDisableURLRewrite, streamingFormats: (streamingFormats.length > 0) ? streamingFormats : undefined }];
        } else {
            mySourceList = [{ src: url.trim(), type: mimeType, disableUrlRewriter: boolDisableURLRewrite, streamingFormats: (streamingFormats.length > 0) ? streamingFormats : undefined, protectionInfo: [{ type: protectionType }] }];
            if ($("#token").val().trim() != "") {
                mySourceList[0].protectionInfo[0].authenticationToken = $("#token").val();
            }
        }

        var traceTargets = [];
        if (document.getElementById('isTraceEnabledChk').checked === true) {
            traceTargets.push({ target: "console" });
        }
        if (document.getElementById('isMemoryEnabledChk').checked === true) {
            traceTargets.push({ target: "memory" });
        }
        if (traceTargets.length > 0) {
            myOptions.traceConfig = { maxLogLevel: Number($("#selectLogLevel").val()), TraceTargets: traceTargets };
        } else {
            myOptions.traceConfig = undefined;
        }
        myOptions.autoplay = document.getElementById('autoplayChk').checked;

        AmpDiagnosticCenter.myPlayer.options(myOptions);
        AmpDiagnosticCenter.myPlayer.src(mySourceList);
    }
    AmpDiagnosticCenter.btnSrcClick = btnSrcClick;

    function generateDownloadLink(event) {
        var textToWrite = AmpDiagnosticCenter.myPlayer.getMemoryLog(true);
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        var fileName = "AmpDiagnosticCenterTrace" + Date.now().toString();

        if (textToWrite) {
            var link = document.getElementById("downloadlink");
            link.download = fileName;
            link.style.display = "inline-block";
            link.href = 'data:text/plain;charset=utf-8,' + textToWrite;
        }
    }
    AmpDiagnosticCenter.generateDownloadLink = generateDownloadLink;

    function memoryTraceChanged() {
        var memTraceChk = document.getElementById('isMemoryEnabledChk');
        if (memTraceChk.checked) {
            document.getElementById("downloadTraceBtn").style.display = 'inline-block';
        } else {
            document.getElementById("downloadTraceBtn").style.display = 'none';
            document.getElementById("downloadlink").style.display = 'none';
        }
    }
    AmpDiagnosticCenter.memoryTraceChanged = memoryTraceChanged;

    function selectTrackChange() {
        var selectTracks = document.getElementById("selectTracks");

        if (selectTracks.selectedIndex !== undefined) {
            var videoStreams = AmpDiagnosticCenter.myPlayer.currentVideoStreamList();
            var selectedStream = videoStreams.selectedIndex;
            videoStreams.streams[selectedStream].selectTrackByIndex(selectTracks.selectedIndex - 1);
        }
    }

    function _unRegisterAmpEvents(myplayer) {
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.volumechange, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.ended, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.timeupdate, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.durationchange, _ampEventHandler);

        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.pause, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.play, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.playing, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.seeking, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.seeked, _ampEventHandler);

        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.loadstart, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.loadeddata, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.fullscreenchange, _ampEventHandler);

        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.waiting, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.canplaythrough, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.error, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.downloadbitratechanged, _ampEventHandler);
        AmpDiagnosticCenter.myPlayer.removeEventListener(amp.eventName.playbackbitratechanged, _ampEventHandler);
    }

    function _ampEventHandler(evt) {
        var eventsLog = document.getElementById("eventsLog");
        var logStr;

        if (amp.eventName.timeupdate !== evt.type) {
            logStr = evt.type;
        }
        if (amp.eventName.error === evt.type) {
            logStr += " " + AmpDiagnosticCenter.PrettyPrint.errorInfo(AmpDiagnosticCenter.myPlayer.error());
        }

        if (logStr) {
            AmpDiagnosticCenter.PrettyPrint.log(eventsLog, "amp: " + logStr + ", currentTime: " + AmpDiagnosticCenter.myPlayer.currentTime().toFixed(3));
        }

        for (var i = 0; i < properties.length; i++) {
            var value = properties[i].functionHandler.call(AmpDiagnosticCenter.myPlayer);
            if (value != properties[i].txtAreaAmpProperties) {
                properties[i].txtAreaAmpProperties.value = value;
            }
        }
    }

    function calculateBufferAhead() {
        var output = 0;

        var buffered = AmpDiagnosticCenter.myPlayer.buffered(), currentTime = AmpDiagnosticCenter.myPlayer.currentTime();

        if (!buffered) {
            return undefined;
        }

        for (var i = 0; i < buffered.length; i++) {
            if (currentTime >= buffered.start(i) && currentTime <= buffered.end(i)) {
                output = (buffered.end(i) - currentTime);
            }
        }

        return output;
    }
    AmpDiagnosticCenter.calculateBufferAhead = calculateBufferAhead;

    window.onerror = function (err) {
        alert(err);
    };
})(AmpDiagnosticCenter || (AmpDiagnosticCenter = {}));
