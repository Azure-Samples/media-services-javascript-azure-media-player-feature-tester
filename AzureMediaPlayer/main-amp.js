var myPlayer;
var videoTag;
var trackNumber = 0;
var bwGraph = null;
var bufferGraph = null;
var bitrateEventGraph = null;
var textFile = null;
var config = {
    url: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
    advanced: false,
    format: "auto",
    tech: "auto",
    protection: "none",
    token: "",
    aes: false,
    aestoken: "",
    playready: false,
    playreadytoken: "",
    widevine: false,
    widevinetoken: "",
    heuristicprofile: "hybrid",
    autoplay: true,
    muted: false,
    language: "en",
    disableurlrewriter: false,
    captions: [],
    subtitles: [],
    poster: "",
    mySourceList: [],
    myTrackList: [],
    myOptions: {},
    sessionID: ""
};

function generateInstanceId() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

var PropertyInfo = (function () {
    function PropertyInfo(n, f) {
        this.name = n;
        this.functionHandler = f;
        this.txtAreaAmpProperties = null;
    }
    return PropertyInfo;
})();

var properties = [
        new PropertyInfo("techname", function () {
            return this.currentTechName();
        }),
        new PropertyInfo("type", function () {
            return this.currentType();
        }),
        /*new PropertyInfo("heuristicProfile", function () {
            return this.currentHeuristicProfile();
        }),*/
        new PropertyInfo("isLive", function () {
            return this.isLive();
        }),
        new PropertyInfo("bufferedRange", function () {
            return PrettyPrint.timeTimeRange(this.buffered());
        }),
        new PropertyInfo("bufferAhead", function () {
            var buffer = calculateBufferAhead();
            return (buffer) ? buffer.toFixed(3) : "undefined";
        }),
        new PropertyInfo("currentTime", function () {
            return PrettyPrint.toFixed(this.currentTime(), 3);
        }),
        new PropertyInfo("absoluteTime", function () {
            return (this.currentAbsoluteTime()) ? PrettyPrint.toFixed(this.currentAbsoluteTime(), 3) : "undefined";
        }),
        new PropertyInfo("duration", function () {
            return PrettyPrint.toFixed(this.duration(), 3);
        }),
        new PropertyInfo("volume", function () {
            return this.volume();
        }),
        /*new PropertyInfo("readyState", function () {
            return PrettyPrint.readyState(this.readyState);
        }),*/
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
            return (this.error()) ? PrettyPrint.error(this.error().code) : "undefined";
        }),
        new PropertyInfo("playerResolution", function () {
            return this.width() + " x " + this.height();
        }),
        new PropertyInfo("playerAspectRatio", function () {
            return PrettyPrint.toFixed(this.width() / this.height(), 3);
        }),
        new PropertyInfo("videoResolution", function () {
            return this.videoWidth() + " x " + this.videoHeight();
        }),
        new PropertyInfo("videoAspectRatio", function () {
            return PrettyPrint.toFixed(this.videoWidth() / this.videoHeight(), 3);
        }),
        new PropertyInfo("videoBufferLevel", function () {
            return (this.videoBufferData()) ? PrettyPrint.toFixed(this.videoBufferData().bufferLevel, 3) : "undefined";
        }),
        new PropertyInfo("audioBufferLevel", function () {
            return (this.audioBufferData()) ? PrettyPrint.toFixed(this.audioBufferData().bufferLevel, 3) : "undefined";
        }),
        new PropertyInfo("perceivedBW (bps)", function () {
            return (this.videoBufferData()) ? PrettyPrint.toFixed(this.videoBufferData().perceivedBandwidth, 3) : "undefined";
        }),
        new PropertyInfo("downloadBR (bps)", function () {
            return (this.currentDownloadBitrate()) ? this.currentDownloadBitrate() : "undefined";
        }),
        new PropertyInfo("playbackBR (bps)", function () {
            return (this.currentPlaybackBitrate()) ? this.currentPlaybackBitrate() : "undefined";
        })
];

// put function into jQuery namespace
jQuery.redirect = function (url, params) {

    url = url || window.location.href || '';
    url = url.match(/\?/) ? url : url + '?';

    for (var key in params) {
        var re = RegExp(';?' + key + '=?[^&;]*', 'g');
        url = url.replace(re, '');
        url += ';' + key + '=' + params[key];
    }
    // cleanup url 
    url = url.replace(/[;&]$/, '');
    url = url.replace(/\?[;&]/, '?');
    url = url.replace(/[;&]{2}/g, ';');
    // $(location).attr('href', url);
    window.location.replace(url);
};

var queryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split(/=(.*)/);
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}();

var initialize = function () {
    config.sessionID = generateInstanceId();
    //reset any state
    // reset();

    //read query strings
    if (queryString.url) {
        config.url = decodeURIComponent(queryString.url).replace(/\+/g, " ");
    }


    if (queryString.heuristicprofile) {
        if (queryString.heuristicprofile != "hybrid") {
            config.advanced = true;
            config.heuristicprofile = queryString.heuristicprofile.toLowerCase();
        }
    }

    if (queryString.autoplay) {
        if (queryString.autoplay == "false") {
            config.advanced = true;
            config.autoplay = false;
        }
    }

    if (queryString.muted) {
        if (queryString.muted == "true") {
            config.advanced = true;
            config.muted = true;
        }
    }

    if (queryString.format) {
        config.advanced = true;
        config.format = queryString.format.toLowerCase();
    }

    if (queryString.language) {
        config.advanced = true;
        config.language = queryString.language.toLowerCase();
    }

    if (queryString.disableurlrewriter) {
        if (queryString.disableurlrewriter == "true") {
            config.advanced = true;
            config.disableurlrewriter = true;
        }
    }

    if (queryString.player) { //legacy from old site
        config.advanced = true;
        config.tech = queryString.player.toLowerCase();
    }

    if (queryString.tech) {
        config.advanced = true;
        config.tech = queryString.tech.toLowerCase();
    }

    //legacy 
    if (queryString.protection) {
        config.advanced = true;
        config.protection = queryString.protection.toLowerCase();
    }

    //legacy + shared token
    if (queryString.token) {
        config.advanced = true;
        config.token = decodeURIComponent(queryString.token.replace(/\+/g, " "));
    }

    if (queryString.protection) {
        config.advanced = true;

        switch (queryString.protection.toLowerCase()) {
            case "aes":
                config.aes = true;
                if (queryString.token) {
                    config.aestoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));;
                }
                break;
            case "drm":
                config.playready = true;
                config.widevine = true;
                if (queryString.token) {
                    config.playreadytoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));;
                    config.widevinetoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));;
                }
                break;
            case "playready":
                config.playready = true;
                if (queryString.token) {
                    config.playreadytoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));;
                }
                break;
            case "widevine":
                config.widevine = true;
                if (queryString.token) {
                    config.widevinetoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));;
                }
                break;
            default:
        }

    }
    //cannot be aes AND drm -> only OR with current precedance for aes
    if (queryString.aes) {
        config.advanced = true;
        config.aes = true;
        if (queryString.token) {
            config.aestoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));
        }
        if (queryString.aestoken) {
            config.aestoken = decodeURIComponent(queryString.aestoken.replace(/\+/g, " "));
        }
    } else {
        if (queryString.playready) {
            config.advanced = true;
            config.playready = true;
            if (queryString.token) {
                config.playreadytoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));
            }
            if (queryString.playreadytoken) {
                config.playreadytoken = decodeURIComponent(queryString.playreadytoken.replace(/\+/g, " "));;
            }
        }
        if (queryString.widevine) {
            config.advanced = true;
            config.widevine = true;
            if (queryString.token) {
                config.widevinetoken = decodeURIComponent(queryString.token.replace(/\+/g, " "));
            }
            if (queryString.widevinetoken) {
                config.widevinetoken = decodeURIComponent(queryString.widevinetoken.replace(/\+/g, " "));
            }
        }
    }

    if (queryString.captions) {
        config.advanced = true;
        var captionslist = queryString.captions.split(";");
        for (var i = 0; i < captionslist.length; i++) {
            var captionspair = captionslist[i].split(",");
            config.captions.push({ "label": captionspair[0], "language": captionspair[1], "trackurl": (decodeURIComponent(captionspair[2].replace(/\+/g, " "))) });
        }
    }
    if (queryString.subtitles) {
        config.advanced = true;
        var subtitlelist = queryString.subtitles.split(";");
        for (var i = 0; i < subtitlelist.length; i++) {
            var subtitlespair = subtitlelist[i].split(",");
            config.subtitles.push({ "label": subtitlespair[0], "language": subtitlespair[1], "trackurl": (decodeURIComponent(subtitlespair[2].replace(/\+/g, " "))) });
        }
    }
    if (queryString.poster) {
        config.poster = decodeURIComponent(queryString.poster).replace(/\+/g, " ");
        config.advanced = true;
    }

    //make config nicer
    var consoleLogConfig = "";
    for (var key in config) {
        consoleLogConfig += "\t" + key + ": " + config[key] + "\n";
    }
    console.log("Configuration chosen is: \n" + consoleLogConfig);

    //Demo page UI setup 
    if (document.getElementById('assetConfig')) {
        //setup modal dialog
        $(".config-body #adaptive-url").val(config.url);

        //Show advanced options
        if (config.advanced == true) {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
        } else {
            $("#advancedOptions").hide();
            $("#urlHelp").show();
        }

        //Setup UI for Advanced: Playback
        $("#heuristicProfile").val(config.heuristicprofile);
        $("input[name='autoplay']").prop('checked', config.autoplay);
        $("input[name='muted']").prop('checked', config.muted);

        //Setup UI for Advanced: Format
        $("#formatOtherVal").hide();
        switch (config.format) {
            case "other":
                $("#selectFormat").val("other");
                $("#formatOtherVal").show();
                $("#formatOtherVal").val(config.format);
            default:
                $("#selectFormat").val(config.format);
        }
        $("input[name='disableUrlRewriter']").prop('checked', config.disableurlrewriter);

        //Setup UI for Advanced: Tech
        $("#selectTech").val(config.tech);

        //Setup UI for Advanced: Language
        $("#selectLang").val(config.language);

        //Setup UI for Advanced: Protection
        $("input[name='protection'][value='aes']").prop('checked', config.aes);
        $("#aesToken").val(config.aestoken);
        //disable DRM if AES selected
        $("input[name='protection'][value='playready']").attr('disabled', config.aes);
        $("#playreadyToken").attr('disabled', config.aes);
        $("input[name='protection'][value='widevine']").attr('disabled', config.aes);
        $("#widevineToken").attr('disabled', config.aes);

        $("input[name='protection'][value='playready']").prop('checked', config.playready);
        $("#playreadyToken").val(config.playreadytoken);
        $("input[name='protection'][value='widevine']").prop('checked', config.widevine);
        $("#widevineToken").val(config.widevinetoken);

        //Setup UI for Advanced: Tracks
        if (config.captions.length > 0) {
            for (var i = 0; i < config.captions.length; i++) {
                addTrack();
                $("#trackkind" + (trackNumber - 1)).val("captions")
                var obj = config.captions[i];
                for (var key in obj) {
                    if (key == "label") {
                        $("#tracklabel" + (trackNumber - 1)).val(obj[key].toString());
                    } else if (key == "language") {
                        $("#tracklang" + (trackNumber - 1)).val(obj[key].toString());
                    } else if (key == "trackurl") {
                        $("#trackurl" + (trackNumber - 1)).val(obj[key].toString());
                    }
                }
            }
        }
        if (config.subtitles.length > 0) {
            for (var i = 0; i < config.subtitles.length; i++) {
                addTrack();
                $("#trackkind" + (trackNumber - 1)).val("subtitles")
                var obj = config.subtitles[i];
                for (var key in obj) {
                    if (key == "label") {
                        $("#tracklabel" + (trackNumber - 1)).val(obj[key].toString())
                    } else if (key == "language") {
                        $("#tracklang" + (trackNumber - 1)).val(obj[key].toString());
                    } else if (key == "trackurl") {
                        $("#trackurl" + (trackNumber - 1)).val(obj[key].toString())
                    }
                }
            }
        }
        //Setup UI for Advanced: Protection
        $("#poster-url").val(config.poster);
    }
};

var appendSourceUrl = function (url) {

    //determine mime type
    var mimeType = "application/vnd.ms-sstr+xml";
    if (config.format == "auto") {
        if ((url.trim().toLowerCase().match('.ism/manifest')) || (url.trim().toLowerCase().match('.isml/manifest'))) {
        } else if (url.toLowerCase().match('.mpd$')) {
            mimeType = "application/dash+xml";
        } else if (url.toLowerCase().match('.flv$')) {
            mimeType = "video/x-flv";
        } else if (url.toLowerCase().match('.ogv$')) {
            mimeType = "video/ogg";
        } else if (url.toLowerCase().match('.webm$')) {
            mimeType = "video/webm";
        } else if (url.toLowerCase().match('.3gp$')) {
            mimeType = "video/3gp";
        } else if (url.toLowerCase().match('.mp4')) {
            mimeType = "video/mp4";
        }
    } else if (config.format == "dash") {
        mimeType = "application/dash+xml";
    } else if (config.format == "smooth") {
        mimeType = "application/vnd.ms-sstr+xml";
    } else if (config.format == "hls") {
        mimeType = "application/vnd.apple.mpegurl";
    } else if (config.format == "mp4") {
        mimeType = "video/mp4";
    } else {
        mimeType = $("#formatOtherVal").val();
    }

    //setup source object
    var mySourceList = [];
    var sourceListObject = new Object;
    if (url.match("^//")) {
        sourceListObject.src = location.protocol + url.trim();
    } else {
        sourceListObject.src = url.trim();
    }
    sourceListObject.type = mimeType;
    if (config.disableurlrewriter) {
        sourceListObject.disableUrlRewriter = config.disableurlrewriter;
    } else if (config.format != "auto") {

        if (config.format == "dash") {
            sourceListObject.streamingFormats = [];
            sourceListObject.streamingFormats.push("DASH");
        } else if (config.format == "smooth") {
            sourceListObject.streamingFormats = [];
            sourceListObject.streamingFormats.push("SMOOTH");
        } else if (config.format == "hls") {
            sourceListObject.streamingFormats = [];
            sourceListObject.streamingFormats.push("HLS-V4");
            sourceListObject.streamingFormats.push("HLS-V3");
        }
    }
    if (config.aes) {
        sourceListObject.protectionInfo = [];
        var aesProtectionInfo = new Object;
        aesProtectionInfo.type = "AES";
        if (config.aestoken) {
            aesProtectionInfo.authenticationToken = config.aestoken;
        }
        sourceListObject.protectionInfo.push(aesProtectionInfo);
    } else {
        if (config.playready || config.widevine) {
            sourceListObject.protectionInfo = [];
        }
        if (config.playready) {
            var playreadyProtectionInfo = new Object;
            playreadyProtectionInfo.type = "PlayReady";
            if (config.playreadytoken) {
                playreadyProtectionInfo.authenticationToken = config.playreadytoken;
            }
            sourceListObject.protectionInfo.push(playreadyProtectionInfo);
        }
        if (config.widevine) {
            var widevineProtectionInfo = new Object;
            widevineProtectionInfo.type = "Widevine";
            if (config.widevinetoken) {
                widevineProtectionInfo.authenticationToken = config.widevinetoken;
            }
            sourceListObject.protectionInfo.push(widevineProtectionInfo);
        }
    }
    mySourceList.push(sourceListObject);

    //setup track objects
    var myTrackList = [];
    if (config.captions.length > 0) {
        for (var i = 0; i < config.captions.length; i++) {
            var captionsListObject = new Object;
            captionsListObject.src = config.captions[i].trackurl;
            captionsListObject.srclang = config.captions[i].language;
            captionsListObject.label = config.captions[i].label;
            captionsListObject.kind = "captions";
            myTrackList.push(captionsListObject);
        }
    }
    if (config.subtitles.length > 0) {
        for (var i = 0; i < config.subtitles.length; i++) {
            var subtitlesListObject = new Object;
            subtitlesListObject.src = config.subtitles[i].trackurl;
            subtitlesListObject.srclang = config.subtitles[i].language;
            subtitlesListObject.label = config.subtitles[i].label;
            subtitlesListObject.kind = "subtitles";
            myTrackList.push(subtitlesListObject);
        }
    }

    //setup options
    var myOptions = {
        //sources: mySourceList,
        "nativeControlsForTouch": false,
        "controls": true,
        "autoplay": config.autoplay,
        "muted": config.muted,
        "language": config.language,
        skinConfig: {
            audioTracksMenu: {
                "enabled": true,
                "useManifestForLabel": false
            }
        },
        traceConfig: {
            TraceTargets: [{ target: 'memory' }],
            maxLogLevel: 3
        },
        hotkeys: {
            "volumeStep": 0.1,
            "seekStep": 5,
            "enableMute": true,
            "enableFullscreen": true,
            "enableNumbers": true,
            "enableJogStyle": false
        },
        plugins: {
            /*EventHubQoS: {
                "appName": "AMP Demo Page",
                "heartBeatIntervalMs": 10000,
                "disableGeoLocation": true
            },*/
            ga: {
                'eventsToTrack': ['playerConfig', 'loaded', 'playTime', 'percentsPlayed', 'start', 'end', 'play', 'pause', 'error', 'buffering', 'fullscreen', 'bitrate'],
                'debug': false
            },
            PlayerAnalytics: {
                sessionID: config.sessionID,
                eventHubNamespace: 'mediaanalytics',
                eventHubQueueName: 'ma',
                eventHubPublisherId: 'AMP' + '_' + Math.floor((Math.random() * 10000000) + 1),
                eventBufferLength: 2
            }

        }
    };
    switch (config.heuristicprofile) {
        case "quickstart":
            myOptions.heuristicProfile = "Quick Start";
            break;
        case "highquality":
            myOptions.heuristicProfile = "High Quality";
            break;
        default:
            myOptions.heuristicProfile = "High Quality",
            myOptions.customPlayerSettings = {
                "customHeuristicSettings": {
                    "preRollInSec": 4,
                    "windowSizeHeuristics": true
                }
            }
    }
    //Options for tech order
    switch (config.tech) {
        case "js":
            myOptions.techOrder = ["azureHtml5JS"];
            break;
        case "flash":
            myOptions.techOrder = ["flashSS"];
            break;
        case "silverlight":
            myOptions.techOrder = ["silverlightSS"];
            break;
        case "html5":
            myOptions.techOrder = ["html5"];
            break;
        default:
            myOptions.techOrder = ["azureHtml5JS", "flashSS", "silverlightSS", "html5"];
    }
    //Options for audio menu
    if (url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net/f1ee994f-fcb8-455f-a15d-07f6f2081a60/SintelMultiAudio.ism/manifest'.toLowerCase())) {
        myOptions.skinConfig.audioTracksMenu.enabled = true;
        myOptions.skinConfig.audioTracksMenu.useManifestForLabel = true;
    } else if (url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net/7ceb010f-d9a3-467a-915e-5728acced7e3/ElephantsDreamMultiAudio.ism/manifest'.toLowerCase())) {
        myOptions.skinConfig.audioTracksMenu.enabled = true;
        myOptions.skinConfig.audioTracksMenu.useManifestForLabel = false;
    } else if (url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net'.toLowerCase())) {
        myOptions.skinConfig.audioTracksMenu.enabled = false;
        myOptions.skinConfig.audioTracksMenu.useManifestForLabel = false;
    } else {
        myOptions.skinConfig.audioTracksMenu.enabled = true;
        myOptions.skinConfig.audioTracksMenu.useManifestForLabel = false;
    }
    //Options for poster
    if (config.poster != "") {
        myOptions.poster = config.poster;
    }

    //add axinom header for Axinom Widevine content
    if ((url.trim().toLowerCase().match("samplestreamseu.streaming.mediaservices.windows.net/65b76566-1381-4540-87ab-7926568901d8/bbb_sunflower_1080p_30fps_normal.ism".toLowerCase())) || ((url.trim().toLowerCase().match("samplestreamseu.streaming.mediaservices.windows.net/60d15401-a440-4f1f-bb97-0e1ffa2ff17d/76474ddb-f917-4b1a-9f13-042ed1365e4e.ism".toLowerCase())))) {
        AzureHtml5JS.KeySystem.WidevineCustomAuthorizationHeader = "X-AxDRM-Message";
    }

    //initialize player and set options
    if (!myPlayer) {
        myPlayer = amp("azuremediaplayer", myOptions);
    } else {
        myPlayer.options(myOptions);
    }

    //save settings
    config.mySourceList = mySourceList;
    config.myTrackList = myTrackList;
    config.myOptions = myOptions;

    //Register Events
    if (document.getElementById("playerdiagnostics")) {
        registerEvents();
        //chartControl();
    }

    //set source
    myPlayer.src(mySourceList, myTrackList);
};

var displayConfig = function () {
    //This function updates the "Chosen Player Options" display to the user
    if (document.getElementById('sourceFormat')) {
        switch (myPlayer.currentType()) {
            case "video/mp4":
                $("#sourceFormat").text("MP4");
                break;
            case "application/vnd.ms-sstr+xml":
                $("#sourceFormat").text("Smooth");
                break;
            case "application/dash+xml":
                $("#sourceFormat").text("DASH");
                break;
            case "application/vnd.apple.mpegurl":
                $("#sourceFormat").text("HLS");
                break;
            default:
                $("#sourceFormat").text(myPlayer.currentType());
        }
    }

    if (document.getElementById('tech')) {
        switch (myPlayer.techName) {
            case "AzureHtml5JS":
                $("#tech").text("JavaScript + HTML5 (MSE)");
                break;
            case "FlashSS":
                $("#tech").text("Flash");
                break;
            case "SilverlightSS":
                $("#tech").text("Silverlight");
                break;
            case "Flash":
                $("#tech").text("Flash");
                break;
            case "Html5":
                $("#tech").text("Native HTML5 (Type 1)");
                break;
            default:
                $("#tech").text(myPlayer.techName);
        }
    }

    if (document.getElementById('protection')) {
        if (config.aes) {
            $("#protection").text("AES-128 bit");
        } else {
            if (config.playready && config.widevine) {
                $("#protection").text("DRM Common Encryption");
            } else if (config.playready) {
                $("#protection").text("PlayReady");
            } else if (config.widevine) {
                $("#protection").text("Widevine");
            } else {
                $("#protection").text("None/Unknown");
            }
        }
    }

    if (document.getElementById('ampVersion')) {
        $("#ampVersion").text(myPlayer.getAmpVersion());
    }
}

var displayCopyrightInfo = function () {
    //this function updates the copyright info if applicable
    if (document.getElementById('copyrightInfo')) {
        if (config.url.match(/sintel/i)) {
            document.getElementById('copyrightInfo').innerHTML = 'Sintel video - &copy; copyright Blender Foundation | <a href="http://durian.blender.org" target="_blank">durian.blender.org</a>';
        } else if (config.url.match(/big/i) && config.url.match(/buck/i) && config.url.match(/bunny/i)) {
            document.getElementById('copyrightInfo').innerHTML = 'Big Buck Bunny video - &copy; copyright 2008, Blender Foundation | <a href="http://www.bigbuckbunny.org" target="_blank">bigbuckbunny.org</a>';
        } else if (config.url.match(/elephant/i) && config.url.match(/dream/i)) {
            document.getElementById('copyrightInfo').innerHTML = 'Elephant\'s Dream video - &copy; copyright 2006, Blender Foundation / Netherlands Media Art Institute | <a href="http://www.elephantsdream.org" target="_blank">elephantsdream.org</a>';
        } else if (config.url.match(/tears/i) && config.url.match(/steel/i)) {
            document.getElementById('copyrightInfo').innerHTML = 'Tears of Steel video - &copy; Blender Foundation | <a href="http://www.mango.blender.org" target="_blank">mango.blender.org</a>';
        } else if (config.url.match(/caminandes/i) && config.url.match(/llama/i)) {
            document.getElementById('copyrightInfo').innerHTML = 'Caminandes video - &copy; copyright 2013, Blender Foundation | <a href="http://caminandes.com" target="_blank">caminandes.com</a>';
        }
    }
}

var updateConfig = function () {
    config.url = $("#adaptive-url").val().trim();
    config.advanced = false;
    config.format = "auto";
    config.tech = "auto";
    config.protection = "none";
    config.token = "";
    config.aes = false;
    config.aestoken = "";
    config.playready = false;
    config.playreadytoken = "";
    config.widevine = false;
    config.widevinetoken = "";
    config.heuristicprofile = "hybrid",
    config.autoplay = true;
    config.muted = false;
    config.language = "en";
    config.disableurlrewriter = false,
    config.captions = [];
    config.subtitles = [];
    config.poster = "";

    if ($("input[name='advanced']").is(':checked')) {
        config.advanced = true;

        config.heuristicprofile = $("#heuristicProfile").val();

        if (!($("input[name='autoplay']").is(':checked'))) {
            config.autoplay = false;
        }

        if (($("input[name='muted']").is(':checked'))) {
            config.muted = true;
        }

        switch ($("#selectFormat").val()) {
            case "other":
                config.format = $("#formatOtherVal").val();
                break;
            default:
                config.format = $("#selectFormat").val();
                break;
        }
        if ($("input[name='disableUrlRewriter']").is(':checked')) {
            config.disableurlrewriter = true;
        }

        config.tech = $("#selectTech").val();
        config.language = $("#selectLang").val();
        config.poster = $("#poster-url").val().trim();

        for (var i = 0; i < trackNumber; i++) {
            if ($("#trackurl" + i).val().trim() != "") {
                if ($("#trackkind" + i).val() == "captions") {
                    config.captions.push({ "label": ($("#tracklabel" + i).val().trim() || ($("#tracklang" + i).val() || "Caption")), "language": ($("#tracklang" + i).val() || "und"), "trackurl": $("#trackurl" + i).val().trim() });
                } else if ($("#trackkind" + i).val() == "subtitles") {
                    config.subtitles.push({ "label": ($("#tracklabel" + i).val().trim() || ($("#tracklang" + i).val() || "Subtitle")), "language": ($("#tracklang" + i).val() || "und"), "trackurl": $("#trackurl" + i).val().trim() });
                }
            }
        }

        //cannot be aes AND drm -> only OR with current precedance for aes
        if ($("input[name='protection'][value='aes']").is(':checked')) {
            config.aes = true;
            config.aestoken = $("#aesToken").val();
        } else {
            if ($("input[name='protection'][value='playready']").is(':checked')) {
                config.playready = true;
                config.playreadytoken = $("#playreadyToken").val();
            }
            if ($("input[name='protection'][value='widevine']").is(':checked')) {
                config.widevine = true;
                config.widevinetoken = $("#widevineToken").val();
            }
            if (config.playreadytoken == config.widevinetoken) {
                config.token = config.playreadytoken;
            }
        }
    }
}

var updateParamsInAddressURL = function () {
    var urlParams = "";
    manifestURL = config.url.trim().toLowerCase();
    if (manifestURL.match("^http://") || manifestURL.match("^https://") || manifestURL.match("^//") || manifestURL.match("^file://")) {
        manifestURL = config.url.trim();
    } else {
        manifestURL = "//" + config.url.trim();
    }

    urlParams += "?url=" + encodeURIComponent(manifestURL).replace(/'/g, "%27").replace(/"/g, "%22");
    if (config.advanced == true) {
        if (config.format != "auto") {
            urlParams += "&format=" + config.format;
        }
        if (config.disableurlrewriter == true) {
            urlParams += "&disableurlrewriter=true"
        }
        if (config.tech != "auto") {
            urlParams += "&tech=" + config.tech;
        }
        if (config.language != "en") {
            urlParams += "&language=" + config.language;
        }
        if (config.heuristicprofile != "hybrid") {
            urlParams += "&heuristicprofile=" + config.heuristicprofile;
        }
        if (config.autoplay == false) {
            urlParams += "&autoplay=false";
        }
        if (config.muted == true) {
            urlParams += "&muted=true";
        }
        if (config.captions.length > 0) {
            urlParams += "&captions="
            for (var i = 0; i < config.captions.length; i++) {
                var obj = config.captions[i];
                for (var key in obj) {
                    if (key == "label" || key == "language") {
                        urlParams += obj[key].toString() + ",";
                    } else if (key == "trackurl") {
                        urlParams += encodeURIComponent(obj[key].toString()).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                }
                if (i < config.captions.length - 1) {
                    urlParams += ";";
                }
            }
        }
        if (config.subtitles.length > 0) {
            urlParams += "&subtitles="
            for (var i = 0; i < config.subtitles.length; i++) {
                var obj = config.subtitles[i];
                for (var key in obj) {
                    if (key == "label" || key == "language") {
                        urlParams += obj[key].toString() + ",";
                    } else if (key == "trackurl") {
                        urlParams += encodeURIComponent(obj[key].toString()).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                }
                if (i < config.subtitles.length - 1) {
                    urlParams += ";";
                }
            }
        }
        if (config.aes == true) {
            urlParams += "&aes=true";
            if (config.aestoken != "") {
                urlParams += "&aestoken=" + encodeURIComponent(config.aestoken).replace(/'/g, "%27").replace(/"/g, "%22");
            }
        } else {
            if (config.playready && config.widevine && config.token) {
                urlParams += "&playready=true&widevine=true&token=" + encodeURIComponent(config.token).replace(/'/g, "%27").replace(/"/g, "%22");
            } else {
                if (config.playready) {
                    urlParams += "&playready=true";
                    if (config.playreadytoken != "") {
                        urlParams += "&playreadytoken=" + encodeURIComponent(config.playreadytoken).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                }
                if (config.widevine) {
                    urlParams += "&widevine=true";
                    if (config.widevinetoken != "") {
                        urlParams += "&widevinetoken=" + encodeURIComponent(config.widevinetoken).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                }
            }
        }
        if (config.poster != "") {
            urlParams += "&poster=" + encodeURIComponent(config.poster).replace(/'/g, "%27").replace(/"/g, "%22");;
        }
    }
    return urlParams;
}

var updateEmbedCode = function () {
    $('.embed-code-box textarea').val('<iframe src="//aka.ms/azuremediaplayeriframe' + updateParamsInAddressURL() + '" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>');
}

var updateShareUrl = function () {
    $('.share-url-box textarea').val(location.protocol + "//aka.ms/azuremediaplayer" + updateParamsInAddressURL());
}

var playerCode = function () {
    $('#playercode-head').val('<link href="//amp.azure.net/libs/amp/' + myPlayer.getAmpVersion() + '/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">\n<script src="//amp.azure.net/libs/amp/' + myPlayer.getAmpVersion() + '/azuremediaplayer.min.js"></script>');
    $('#playercode-body').val('<video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" tabindex="0"></video>');

    //create the JS code
    var jscode = "";

    jscode += "var myOptions = {\n"
            + "\t" + "\"nativeControlsForTouch\": false," + "\n"
            + "\t" + "controls: true," + "\n"
            + "\t" + "autoplay: " + config.autoplay + "," + "\n"
            + "\t" + "width: \"640\"," + "\n"
            + "\t" + "height: \"400\"," + "\n";
    if (config.muted) {
        jscode += "\t" + "muted: " + config.muted + "," + "\n"
    }
    if (config.language != "en") {
        jscode += "\t" + "language: " + config.language + "," + "\n"
    }

    //Options for tech order
    switch (config.tech) {
        case "js":
            jscode += "\t" + "techOrder: [\"azureHtml5JS\"]," + "\n";
            break;
        case "flash":
            jscode += "\t" + "techOrder: [\"flashSS\"]," + "\n";
            break;
        case "silverlight":
            jscode += "\t" + "techOrder: [\"silverlightSS\"]," + "\n";
            break;
        case "html5":
            jscode += "\t" + "techOrder: [\"html5\"]," + "\n";
            break;
        default:

    }
    //options for heuristic profile
    switch (config.heuristicprofile) {
        case "quickstart":
            break;
        case "highquality":
            jscode += "\t" + "heuristicProfile: \"High Quality\"," + "\n";
            break;
        default:
            /*jscode += "\t" + "heuristicProfile: \"High Quality\"," + "\n"
                    + "\t" + "customPlayerSettings: {" + "\n"
                    + "\t\t" + "\"customHeuristicSettings\": {" + "\n"
                    + "\t\t\t" + "\"preRollInSec\": 4," + "\n"
                    + "\t\t\t" + "\"windowSizeHeuristics\": true" + "\n"
                    + "\t\t" + "}" + "\n"
                    + "\t" + "}," + "\n";*/
    }

    //options for audio track menu 
    /*jscode += "\t" + "skinConfig: {" + "\n"
            + "\t\t" + "audioTracksMenu: {" + "\n";
    if (config.url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net/f1ee994f-fcb8-455f-a15d-07f6f2081a60/SintelMultiAudio.ism/manifest'.toLowerCase())) {
        jscode += "\t\t\t" + "\"enabled\": true," + "\n"
        + "\t\t\t" + "\"useManifestForLabel\": true" + "\n"
    } else if (config.url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net/3efdfbaa-f8f4-43ac-9ab8-013ff4a34f7f/ElephantsDreamMultiAudio.ism/manifest'.toLowerCase())) {
        jscode += "\t\t\t" + "\"enabled\": true," + "\n"
        + "\t\t\t" + "\"useManifestForLabel\": false" + "\n"
    } else if (config.url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net'.toLowerCase())) {
        jscode += "\t\t\t" + "\"enabled\": false," + "\n"
        + "\t\t\t" + "\"useManifestForLabel\": false" + "\n"
    } else {
        jscode += "\t\t\t" + "\"enabled\": true," + "\n"
        + "\t\t\t" + "\"useManifestForLabel\": false" + "\n"
    }
    jscode += "\t\t" + "}" + "\n"
            + "\t" + "}," + "\n";*/

    //options for poster
    if (config.poster != "") {
        jscode += "\t" + "poster: \"" + config.poster + "\"" + "\n"
    }

    //close options bracket
    jscode += "}" + "\n"

    var mySourceListTemp = config.mySourceList;
    mySourceListTemp[0].src = config.url.trim();

    //initialize player code
    jscode += "myPlayer = amp(\"azuremediaplayer\", myOptions);" + "\n"
            + "myPlayer.src(" + JSON.stringify(mySourceListTemp, null, 8);
    if (config.myTrackList.length > 0) {
        jscode += ",\n" + JSON.stringify(config.myTrackList, null, 8);
    }
    jscode += ");";

    $('#playercode-javascript').val(jscode);


}

var addTrack = function () {
    if (document.getElementById("tracksList")) {
        $("#tracksList").append('<div id="track' + trackNumber + '">'
                                    + '<div class="col-md-2 col-md-offset-2"><select id="trackkind' + trackNumber + '" style="width: 100%" class="form-control"></select></div>'
                                    + '<div class="col-md-2" style="padding-top:2px"><input style="width:100%;display:inline-block" type="text" class="input-sm form-control" id="tracklabel' + trackNumber + '" placeholder="Track Label"></div>'
                                    + '<div class="col-md-3"><select id="tracklang' + trackNumber + '" style="width: 100%" class="form-control"><option selected disabled value=" ">Language</option></select></div>'
                                    + '<div class="col-md-3" style="padding-top:2px"><input style="width:100%;display:inline-block" type="text" class="input-sm form-control" id="trackurl' + trackNumber + '" placeholder="WebVTT URL"></div>'
                                    + '<br /><br /></div>');

        $("#trackkind" + trackNumber).append($("<option></option>").attr("value", "none").text("Kind"));
        $("#trackkind" + trackNumber).append($("<option></option>").attr("value", "captions").text("Captions"));
        $("#trackkind" + trackNumber).append($("<option></option>").attr("value", "subtitles").text("Subtitles"));
        if (jsonLanguageList.length > 0) {
            for (var i = 0; i < jsonLanguageList.length; i++) {
                $("#tracklang" + trackNumber).append($("<option></option>").attr("value", jsonLanguageList[i].code).text(jsonLanguageList[i].name));
            }
        }
        trackNumber++;
    }
}

var removeTrack = function () {
    if (trackNumber > 0) {
        $("#track" + (trackNumber - 1)).remove();
        trackNumber--;
    }
}

var updateSampleList = function () {
    if (document.getElementById("selectSource")) {
        if (jsonSamplesList.length > 0) {
            for (var i = 0; i < jsonSamplesList.length; i++) {
                $("#selectSource")
                .append($("<option></option>")
                .attr("value", jsonSamplesList[i].src)
                .attr("format", jsonSamplesList[i].format)
                .attr("aes", jsonSamplesList[i].aes)
                .attr("aestoken", jsonSamplesList[i].aestoken)
                .attr("playready", jsonSamplesList[i].playready)
                .attr("playreadytoken", jsonSamplesList[i].playreadytoken)
                .attr("widevine", jsonSamplesList[i].widevine)
                .attr("widevinetoken", jsonSamplesList[i].widevinetoken)
                .attr("captions", jsonSamplesList[i].captions)
                .attr("subtitles", jsonSamplesList[i].subtitles)
                .attr("poster", jsonSamplesList[i].poster)
                .text(jsonSamplesList[i].title));
            }
        } else {
            setTimeout(updateSampleList, 100);
        }
    }
}

var chartControl = function () {

    var graphs = [];
    var graphData = [];
    var startTime = Date.now();

    var bwGraphData = [];
    var bufferGraphData = [];

    function setupCharts() {
        bwGraph = new Dygraph(document.getElementById("BWGraphsDiv"), bwGraphData, {
            labels: ['time', 'MeasuredBW', 'AverageBW', 'DownloadBR', 'PlaybackBR'],
            strokeWidth: 2,
            drawPoints: true,
            pointSize: 3,
            axisLabelFontSize: 10,
            ylabel: 'Bandwidth (bps)',
            y2label: 'Bitrate (bps)',
            y2LabelWidth: 20,
            labelsKMB: true,
            labelsDiv: 'BWGraphsLegendDiv',
            legend: 'always',
            series: {
                MeasuredBW: { axis: 'y' },
                AverageBW: { axis: 'y' },
                DownloadBR: { axis: 'y2' },
                PlaybackBR: { axis: 'y2' }
            },
            axes: {
                x: {},
                y: {},
                y2: {}
            }
        });
        graphs.push(bwGraph);

        bufferGraph = new Dygraph(document.getElementById("BufferGraphsDiv"), bufferGraphData, {
            labels: ['time', 'videoBuffer', 'audioBuffer', 'videoDLTime'],
            strokeWidth: 2,
            drawPoints: true,
            pointSize: 2,
            axisLabelFontSize: 10,
            ylabel: 'Buffer Size (s)',
            y2label: 'Download Time (ms)',
            y2LabelWidth: 0,
            labelsKMB: true,
            labelsDiv: 'BufferGraphsLegendDiv',
            legend: 'always',
            series: {
                videoBuffer: { axis: 'y' },
                audioBuffer: { axis: 'y' },
                videoDLTime: { axis: 'y2' }
            },
            axes: {
                x: {},
                y: {},
                y2: {}
            }
        });
        graphs.push(bufferGraph);

        var sync = Dygraph.synchronize(graphs, {
            zoom: false,
            selection: true
        });

        myPlayer.addEventListener("loadedmetadata", registerBufferDataEvents);
        myPlayer.addEventListener("playbackbitratechanged", handleBufferData);
    }

    function registerBufferDataEvents() {
        var bufferData = myPlayer.videoBufferData();
        if (bufferData) {
            bufferData.addEventListener("downloadcompleted", handleBufferData);
        }
    }

    function handleBufferData() {
        var bufferData = myPlayer.videoBufferData();
        if (bufferData) {
            var completed = bufferData.downloadCompleted;
            var download = completed.mediaDownload;

            if (bwGraphData.length > 30) {
                bwGraphData.shift();
            }

            if (bufferGraphData.length > 30) {
                bufferGraphData.shift();
            }

            bwGraphData.push([(Date.now() - startTime) / 1000, completed.measuredBandwidth, bufferData.perceivedBandwidth, download.bitrate, myPlayer.currentPlaybackBitrate()]);
            bufferGraphData.push([(Date.now() - startTime) / 1000, bufferData.bufferLevel, myPlayer.audioBufferData().bufferLevel, completed.totalDownloadMs]);

            bwGraph.updateOptions({ file: bwGraphData });
            bufferGraph.updateOptions({ file: bufferGraphData });
        }
    }
    setupCharts();
}

var setupProperties = function () {
    var propTable = document.getElementById("propertiesDiv");
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < properties.length; i++) {


        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(properties[i].name));
        tr.appendChild(td);

        var td1 = document.createElement("td");
        properties[i].txtAreaAmpProperties = td1;
        tr.appendChild(td1);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    propTable.appendChild(table);
}

var registerEvents = function () {
    myPlayer.addEventListener(amp.eventName.volumechange, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.ended, _ampEventHandler);
    //myPlayer.addEventListener(amp.eventName.timeupdate, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.durationchange, _ampEventHandler);

    myPlayer.addEventListener(amp.eventName.pause, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.play, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.playing, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.seeking, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.seeked, _ampEventHandler);

    myPlayer.addEventListener(amp.eventName.loadstart, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.loadeddata, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.loadedmetadata, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.fullscreenchange, _ampEventHandler);

    myPlayer.addEventListener(amp.eventName.waiting, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.canplaythrough, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.error, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.downloadbitratechanged, _ampEventHandler);
    myPlayer.addEventListener(amp.eventName.playbackbitratechanged, _ampEventHandler);

    var videoTag;

    if ($("#azuremediaplayer_html5_api")) {
        videoTag = document.getElementById("azuremediaplayer_html5_api");
    } else {
        videoTag = document.getElementById("azuremediaplayer");
    }

    if (videoTag) {
        //videoTag.addEventListener("loadstart", _videoEventHandler, false);
        //videoTag.addEventListener("progress", _videoEventHandler, false);
        videoTag.addEventListener("suspend", _videoEventHandler, false);
        videoTag.addEventListener("abort", _videoEventHandler, false);
        videoTag.addEventListener("error", _videoEventHandler, false);
        videoTag.addEventListener("emptied", _videoEventHandler, false);
        videoTag.addEventListener("stalled", _videoEventHandler, false);
        //videoTag.addEventListener("play", _videoEventHandler, false);
        // videoTag.addEventListener("pause", _videoEventHandler, false);
        videoTag.addEventListener("loadedmetadata", _videoEventHandler, false);
        //videoTag.addEventListener("loadeddata", _videoEventHandler, false);
        videoTag.addEventListener("waiting", _videoEventHandler, false);
        //videoTag.addEventListener("playing", _videoEventHandler, false);
        videoTag.addEventListener("canplay", _videoEventHandler, false);
        //videoTag.addEventListener("canplaythrough", _videoEventHandler, false);
        //videoTag.addEventListener("seeking", _videoEventHandler, false);
        //videoTag.addEventListener("seeked", _videoEventHandler, false);
        //videoTag.addEventListener("timeupdate", _videoEventHandler, false);
        //videoTag.addEventListener("ended", _videoEventHandler, false);
        videoTag.addEventListener("ratechange", _videoEventHandler, false);
        //videoTag.addEventListener("durationchange", _videoEventHandler, false);
        //videoTag.addEventListener("volumechange", _videoEventHandler, false);
    }
}

function updateconfigtextbox() {
    document.getElementById("txtLog").value += "user-agent: " + navigator.userAgent + "\n" + "source: " + myPlayer.currentSrc() + "\n";
}

function _videoEventHandler(event) {
    var txtLog = document.getElementById("txtLog");

    if ("progress" !== event.type && "timeupdate" !== event.type) {
        PrettyPrint.log(txtLog, "videoTag: " + event.type + ", currentTime: " + myPlayer.currentTime());
    }
}

function _ampEventHandler(evt) {
    var txtLog = document.getElementById("txtLog");
    var logStr;

    if (amp.eventName.timeupdate !== evt.type) {
        logStr = evt.type;
    } else {
        return;
    }

    if (amp.eventName.error === evt.type) {
        logStr += " " + PrettyPrint.errorInfo(myPlayer.error());
    } else if (amp.eventName.playbackbitratechanged === evt.type) {
        logStr += " " + myPlayer.currentPlaybackBitrate();
    } else if (amp.eventName.downloadbitratechanged === evt.type) {
        logStr += " " + myPlayer.currentDownloadBitrate();
    }

    if (logStr) {
        PrettyPrint.log(txtLog, "amp: " + logStr + ", currentTime: " + myPlayer.currentTime());
    }

    _updateProperties();

}

var _updateProperties = function () {
    if (!myPlayer) {
        return;
    }

    for (var i = 0; i < properties.length; i++) {
        var value = properties[i].functionHandler.call(myPlayer);
        if (value != properties[i].txtAreaAmpProperties) {
            properties[i].txtAreaAmpProperties.innerHTML = value;
        }
    }
}

function calculateBufferAhead() {
    var output = 0;

    var buffered = myPlayer.buffered(), currentTime = myPlayer.currentTime();

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

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var email = function (toEmail) {
    if (validateEmail(toEmail)) {

        var textToWrite = myPlayer.getMemoryLog(false);
        var fileName = "AmpTrace" + Date.now().toString();

        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'G5HmPfV6pJ25VaB1_Be_fw',
                'message': {
                    'from_email': 'ampinfo@microsoft.com',
                    'to': [
                        {
                            'email': toEmail,
                            'name': 'AMP User',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'AMP Test - Verbose Log',
                    'html': 'See attachment for Verbose Log' + '<br><br>' + '<br><br>' + 'Log: ' + $("#txtLog").val().replace(/\n/g, '<br/>'),
                    "attachments": [
                        {
                            "type": "text/plain",
                            "name": fileName,
                            "content": btoa(textToWrite)
                        }
                    ]
                }
            }
        });
        document.getElementById("email-success").innerHTML = "Log sent at " + Date();
        $("#email-success").show();
    } else {
        document.getElementById("email-success").innerHTML = "Logs not sent. Not a valid email address";
        $("#email-success").show();
    }
}

$(document).ready(function () {
    initialize();
    if (document.getElementById("selectSource")) {
        updateSampleList();
        $('#playersetup').show();
        $('#playerdiagnostics').hide();
        $('#playercode').hide();
        $('#embedcode').hide();
        $('#shareurl').hide();
        updateEmbedCode();
        updateShareUrl();
        setupProperties();
    }

    appendSourceUrl(config.url);

    if (document.getElementById("selectSource")) {
        if (myPlayer.videoBufferData()) {
            chartControl();
        } else {
            $(".graphsRow").hide();
        }
        playerCode();
        myPlayer.addEventListener("loadedmetadata", function (e) {
            displayConfig();
            displayCopyrightInfo();
            updateconfigtextbox()
        });
        setInterval(_updateProperties, 1000);
    }

    document.getElementById("azuremediaplayer").focus();



    //Update Player is selected
    $(".config-body #config-save").click(function (e) {
        updateConfig()
        //Page Reload Method
        window.location.search = updateParamsInAddressURL();

        //----------Channel change method---------------------
        //myPlayer.dispose();
        //myPlayer = null;
        //document.getElementById("video").innerHTML = '<video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" autoplay controls preload="auto" width="100%" height="500" poster=""><p class="amp-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></video>';
        ////$('#video').append('<video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" autoplay controls preload="auto" width="100%" height="500" poster=""><p class="amp-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></video>');
        //appendSourceUrl(config.url);
        //window.history.pushState(null, null, updateParamsInAddressURL());
        //updateShareUrl();
        //updateEmbedCode();
        //displayConfig();
        //displayCopyrightInfo();
        //loadPlugins();
    });

    //Updated source from the selectable samples
    $("#selectSource").change(function (e) {

        $(".config-body #adaptive-url").val($("#selectSource").val());

        //Reset options on the page to default
        //$("input[name='advanced'][value='advanced']").prop('checked', false);
        //$("#advancedOptions").hide();
        $("#urlHelp").show();
        $("#heuristicprofile").val("hybrid");
        $("input[name='autoplay']").prop('checked', true);
        $("input[name='muted']").prop('checked', false);
        $("#selectFormat").val("auto");
        $("#selectLang").val("en");
        $("#formatOtherVal").hide();
        $("input[name='disableUrlRewriter']").prop('checked', false);
        $("#selectTech").val("auto");
        $("input[name='protection'][value='aes']").prop('checked', false);
        $("#aesToken").val("");
        $("input[name='protection'][value='playready']").prop('checked', false).attr('disabled', false);
        $("#playreadyToken").val("").attr('disabled', false);
        $("input[name='protection'][value='widevine']").prop('checked', false).attr('disabled', false);
        $("#widevineToken").val("").attr('disabled', false);
        while (trackNumber > 0) {
            removeTrack();
        }
        $("#poster-url").val("");

        //set values based on selected stream
        if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("aes") == "true") {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
            $("input[name='protection'][value='aes']").prop('checked', true);
            if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("aestoken") != "") {
                $("#aesToken").val(decodeURIComponent(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("aestoken")).replace(/\+/g, " "));
            }
            //disable drm
            $("input[name='protection'][value='playready']").prop('checked', false).attr('disabled', true);
            $("input[name='protection'][value='widevine']").prop('checked', false).attr('disabled', true);
            $("#playreadyToken").attr('disabled', true);
            $("#widevineToken").attr('disabled', true);
        } else {
            if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("playready") == "true") {
                $("input[name='advanced'][value='advanced']").prop('checked', true);
                $("#advancedOptions").show();
                $("#urlHelp").hide();
                $("input[name='protection'][value='playready']").prop('checked', true);
                if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("playreadytoken") != "") {
                    $("#playreadyToken").val(decodeURIComponent(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("playreadytoken")).replace(/\+/g, " "));
                }
            }
            if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("widevine") == "true") {
                $("input[name='advanced'][value='advanced']").prop('checked', true);
                $("#advancedOptions").show();
                $("#urlHelp").hide();
                $("input[name='protection'][value='widevine']").prop('checked', true);
                if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("widevinetoken") != "") {
                    $("#widevineToken").val(decodeURIComponent(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("widevinetoken")).replace(/\+/g, " "));
                }
            }
        }

        if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("poster") != "") {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
            $("#poster-url").val(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("poster"))
        }

        var captionslistfromsourcelist = document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("captions");
        if (captionslistfromsourcelist != "") {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
            var captionslist = captionslistfromsourcelist.split(";");
            for (var i = 0; i < captionslist.length; i++) {
                addTrack();
                $("#trackkind" + (trackNumber - 1)).val("captions")
                var captionspair = captionslist[i].split(",");
                $("#tracklabel" + (trackNumber - 1)).val(captionspair[0]);
                $("#tracklang" + (trackNumber - 1)).val(captionspair[1]);
                $("#trackurl" + (trackNumber - 1)).val(captionspair[2]);
            }

        }
        var subtitleslistfromsourcelist = document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("subtitles");
        if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("subtitles") != "") {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
            var subtitleslist = subtitleslistfromsourcelist.split(";");
            for (var i = 0; i < subtitleslist.length; i++) {
                addTrack();
                $("#trackkind" + (trackNumber - 1)).val("subtitles")
                var subtitlespair = subtitleslist[i].split(",");
                $("#tracklabel" + (trackNumber - 1)).val(subtitlespair[0]);
                $("#tracklang" + (trackNumber - 1)).val(subtitlespair[1]);
                $("#trackurl" + (trackNumber - 1)).val(subtitlespair[2]);
            }
        }

    });

    $(".nav-pills .menuitem").click(function (e) {
        $('#playersetup').hide();
        $('#playerdiagnostics').hide();
        $('#playercode').hide();
        $('#embedcode').hide();
        $('#shareurl').hide();
        $('#playersetup-button').removeClass("active");
        $('#playerdiagnostics-button').removeClass("active");
        $('#playercode-button').removeClass("active");
        $('#embedcode-button').removeClass("active");
        $('#shareurl-button').removeClass("active");
        $('#code-button').css("background-color", "none");;

        var buttonId = e.currentTarget.id;

        $('#' + buttonId).addClass("active");
        if (buttonId == "playercode-button" || buttonId == "embedcode-button" || buttonId == "shareurl-button") {
            $('#code-button').css("background-color", "#eee");
        }

        $('#' + buttonId.split("-button")[0]).show();
        if (buttonId == "playerdiagnostics-button") {
            if (bwGraph) {
                bwGraph.resize();
            }
            if (bufferGraph) {
                bufferGraph.resize();
            }
        }
    });

    $('#getshareurlbutton').click(function (e) {
        $('#playersetup').hide();
        $('#playerdiagnostics').hide();
        $('#playercode').hide();
        $('#embedcode').hide();
        $('#shareurl').hide();
        $('#playersetup-button').removeClass("active");
        $('#playerdiagnostics-button').removeClass("active");
        $('#playercode-button').removeClass("active");
        $('#embedcode-button').removeClass("active");
        $('#shareurl-button').removeClass("active");
        $('#code-button').css("background-color", "none");;

        var buttonId = e.currentTarget.id;

        $('#shareurl-button').addClass("active");
        $('#code-button').css("background-color", "#eee");
        $('#shareurl').show();
    });

    $('#download-logs').click(function (e) {
        /*try {
            var isFileSaverSupported = !!new Blob;
        } catch (e) {
            isFileSaverSupported = false;
        }*/

        var textToWrite = myPlayer.getMemoryLog(false);
        var fileName = "AmpTrace" + Date.now().toString() + ".txt";

        if (textToWrite) {
            if (window.saveAs) {
                var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
                saveAs(textFileAsBlob, fileName);
            } else if (window.saveTextAs) {
                saveTextAs(textToWrite, fileName);
            } else {
                var link = document.getElementById("downloadlink");
                link.download = fileName;
                link.style.display = "inline-block";
                link.href = 'data:text/plain;charset=utf-8,' + textToWrite;
            }
        }
    });

    $("#emailAddress").bind('keyup', function (event) {
        $("#email-logs").prop("disabled", !validateEmail($("#emailAddress").val()));
    });

    $("#email-logs").click(function (e) {
        email($("#emailAddress").val());
    });

    //toggle advanded functions
    $("input[name='advanced'][value='advanced']").change(function () {
        if ($(this).is(':checked')) {
            $("#advancedOptions").show();
            $("#urlHelp").hide();
        } else {
            $("#advancedOptions").hide();
            $("#urlHelp").show();
        }
    });

    //format = other display text
    $("#selectFormat").change(function (e) {
        if ($("#selectFormat").val() == "other") {
            $("#formatOtherVal").show();
        } else {
            $("#formatOtherVal").hide();
        }
    });

    //disable DRM if AES selected
    $("input[name='protection'][value='aes']").change(function () {
        if ($(this).is(':checked')) {

            $("input[name='protection'][value='playready']").prop('checked', false).attr('disabled', true);
            $("#playreadyToken").attr('disabled', true);
            $("input[name='protection'][value='widevine']").prop('checked', false).attr('disabled', true);
            $("#widevineToken").attr('disabled', true);
        } else {
            $("input[name='protection'][value='playready']").attr('disabled', false);
            $("#playreadyToken").attr('disabled', false);
            $("input[name='protection'][value='widevine']").attr('disabled', false);
            $("#widevineToken").attr('disabled', false);
        }
    });

    //protection display token text
    $("#selectContentProtection").change(function (e) {
        if ($("#selectContentProtection").val() != "none") {
            $("#token").show();
        } else {
            $("#token").hide();
        }
    });

    //add tracks
    $("#addtrack").click(function (e) {
        addTrack();
    });


});