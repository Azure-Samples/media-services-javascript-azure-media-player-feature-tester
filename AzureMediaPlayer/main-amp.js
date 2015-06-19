var myPlayer;
var config = {
    url: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
    advanced: "false",
    format: "auto",
    tech: "auto",
    protection: "none",
    token: "",
    autoplay: "false",

};

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
    //reset any state
    // reset();

    //read query strings
    if (queryString.url) {
        config.url = decodeURIComponent(queryString.url).replace(/\+/g, " ");
    }
    if (queryString.format) {
        config.advanced = "true";
        config.format = queryString.format.toLowerCase();
    }

    if (queryString.player) {
        config.advanced = "true";
        config.tech = queryString.player.toLowerCase();
    }

    if (queryString.tech) {
        config.advanced = "true";
        config.tech = queryString.tech.toLowerCase();
    }

    if (queryString.protection) {
        config.advanced = "true";
        config.protection = queryString.protection.toLowerCase();
    }
    if (queryString.token) {
        config.advanced = "true";
        config.token = queryString.token;
    }
    if (queryString.autoplay) {
        if (queryString.autoplay != "false") {
            config.autoplay = "true";
        }
    }

    //Add more here
    console.log("Configuration chosen is: URL - " + config.url);

    if ($("#assetConfig")) {
        //setup modal dialog
        $(".config-body #adaptive-url").val(config.url);

        //Show advanced options
        if (config.advanced == "true") {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
        } else {
            $("#advancedOptions").hide();
            $("#urlHelp").show();
        }

        //Setup UI for Advanced: Format
        $("#formatOtherVal").hide();
        switch (config.format) {
            case "auto":
                $("#selectFormat").val("auto");
                break;
            case "dash":
                $("#selectFormat").val("dash");
                break;
            case "smooth":
                $("#selectFormat").val("smooth");
                break;
            case "hls":
                $("#selectFormat").val("hls");
                break;
            case "mp4":
                $("#selectFormat").val("mp4");
                break;
            default:
                $("#selectFormat").val("other");
                $("#formatOtherVal").show();
                $("#formatOtherVal").val(config.format);
                break;
        }

        //Setup UI for Advanced: Tech
        switch (config.tech) {
            case "auto":
                $("#selectTech").val("auto");
                break;
            case "js":
                $("#selectTech").val("js");
                break;
            case "flash":
                $("#selectTech").val("flash");
                break;
            case "silverlight":
                $("#selectTech").val("silverlight");
                break;
            case "html5":
                $("#selectTech").val("html5");
                break;
            default:
                $("#selectTech").val("auto");
                break;
        }

        //Setup UI for Advanced: Protection
        $("#token").hide();
        switch (config.protection) {
            case "none":
                $("#selectContentProtection").val("none");
                break;
            case "aes":
                $("#selectContentProtection").val("aes");
                $("#token").show();
                if (config.token != "") {
                    $("#token").val(decodeURIComponent(config.token.replace(/\+/g, " ")));
                }
                break;
            case "playready":
                $("#selectContentProtection").val("playready");
                $("#token").show();
                if (config.token != "") {
                    $("#token").val(decodeURIComponent(config.token.replace(/\+/g, " ")));
                }
                break;
            case "widevine":
                $("#selectContentProtection").val("widevine");
                $("#token").show();
                if (config.token != "") {
                    $("#token").val(decodeURIComponent(config.token.replace(/\+/g, " ")));
                }
                break;
            default:
                $("#selectContentProtection").val("none");
                break;
        }
    }
};

var appendSourceUrl = function (url) {

    var mimeType = "application/vnd.ms-sstr+xml";
    var boolDisableURLRewrite = false;
    var isProtected = false;
    var protectionType = "";

    if (config.format == "auto") {
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
    } else if (config.format == "dash") {
        mimeType = "application/dash+xml";
        boolDisableURLRewrite = true;
    } else if (config.format == "smooth") {
        mimeType = "application/vnd.ms-sstr+xml";
        boolDisableURLRewrite = true;
    } else if (config.format == "hls") {
        mimeType = "application/vnd.apple.mpegurl";
        boolDisableURLRewrite = true;
    } else if (config.format == "mp4") {
        mimeType = "video/mp4";
        boolDisableURLRewrite = true;
    } else {
        mimeType = $("#formatOtherVal").val();
        boolDisableURLRewrite = true;
    }

    if (config.protection == "none") {
    } else if (config.protection == "aes") {
        isProtected = true;
        protectionType = "AES";
    } else if (config.protection == "playready") {
        isProtected = true;
        protectionType = "PlayReady";
    } else if (config.protection == "widevine") {
        isProtected = true;
        protectionType = "Widevine";
    }

    if (isProtected == false) {
        var mySourceList = [{ src: url.trim(), type: mimeType, disableUrlRewriter: boolDisableURLRewrite }, ];
    } else {
        var mySourceList = [{ src: url.trim(), type: mimeType, disableUrlRewriter: boolDisableURLRewrite, protectionInfo: [{ type: protectionType, authenticationToken: decodeURIComponent(config.token.replace(/\+/g, " ")) }] }, ];
        //alert("Source=" + url.trim() 
        //    +"\ntype=" + mimeType
        //    +"\ndisableUrlRewriter=" + boolDisableURLRewrite
        //    +"\nprotectionInfo=" + protectionType
        //    + "\nToken=" + decodeURIComponent(config.token.replace(/\+/g, " "))
        //    );
    }

    var myOptions = {
        //sources: mySourceList,
        "nativeControlsForTouch": false,
        "loop": false,
        heuristicProfile: "High Quality",
        customPlayerSettings: {
            "customHeuristicSettings": {
                "preRollInSec": 4,
                "windowSizeHeuristics": true
            }
        },
        plugins: {
            EventHubQoS: {
                "appName": "AMP Demo Page",
                "heartBeatIntervalMs": 10000,
                "disableGeoLocation": true
            }
        }
    };

    if (config.tech == "js") {
        myOptions.techOrder = ["azureHtml5JS"];
    } else if (config.tech == "flash") {
        myOptions.techOrder = ["flashSS", "flash"];
    } else if (config.tech == "silverlight") {
        myOptions.techOrder = ["silverlightSS"];
    } else if (config.tech == "html5") {
        myOptions.techOrder = ["html5"];
    } else {
        if (currentBrowser() == "Safari") {
            myOptions.techOrder = ["flashSS", "silverlightSS", "html5"];
        } else if (protectionType == "PlayReady" && currentBrowser() == "Chrome") {
            myOptions.techOrder = ["silverlightSS"];
        } else {
            myOptions.techOrder = ["azureHtml5JS", "flashSS", "silverlightSS", "html5", "flash"];
        }
    }

    var myTrackList;

    if (url.trim().toLowerCase().match('ams-samplescdn.streaming.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/Sintel_WAMEH264AdaptiveBitrateMP4SetSD4x3iOSCellularOnly.ism/manifest'.toLowerCase())) {
        myTrackList = [
            { src: "//ams-samplescdn.streaming.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-en-us.vtt", srclang: "en", kind: "subtitles", label: "english" },
            { src: "//ams-samplescdn.streaming.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-fr.vtt", srclang: "fr", kind: "subtitles", label: "fran&#231ais" },
            { src: "//ams-samplescdn.streaming.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-it.vtt", srclang: "it", kind: "subtitles", label: "italiano" }
        ];
    } else if (url.trim().toLowerCase().match('amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest'.toLowerCase())) {
        myTrackList = [
            { src: "//amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt", srclang: "en", kind: "subtitles", label: "english" },
            { src: "//amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt", srclang: "es", kind: "subtitles", label: "espa&#241ol" },
            { src: "//amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-fr.vtt", srclang: "fr", kind: "subtitles", label: "fran&#231ais" },
            { src: "//amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-it.vtt", srclang: "it", kind: "subtitles", label: "italiano" }
        ];
    } else if (url.trim().toLowerCase().match("nimbuspm.origin.mediaservices.windows.net/aed33834-ec2d-4788-88b5-a4505b3d032c/Microsoft's".toLowerCase())) {
        myTrackList = [
            { src: "http://nimbuspm.origin.mediaservices.windows.net/aed33834-ec2d-4788-88b5-a4505b3d032c/pp4_blog_demo.vtt", srclang: "en", kind: "subtitles", label: "english" }
        ];
    }

    if (!myPlayer) {
        myPlayer = amp("azuremediaplayer", myOptions);
    } else {
        myPlayer.options(myOptions);
    }
    if (config.autoplay == "true") {
        myPlayer.autoplay(true);
    }
    myPlayer.src(mySourceList, myTrackList);
};

var currentBrowser = function () {
    //this function determines what browser is currently being used
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 4);
    }
        // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
        // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("Trident")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
        // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
        // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
        // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
        // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
              (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    /*document.write(''
     +'Browser name  = '+browserName+'<br>'
     +'Full version  = '+fullVersion+'<br>'
     +'Major version = '+majorVersion+'<br>'
     +'navigator.appName = '+navigator.appName+'<br>'
     +'navigator.userAgent = '+navigator.userAgent+'<br>'
    )*/
    return browserName;

}

var displayConfig = function () {
    //This function updates the "Chosen Player Options" display to the user

    //$("#sourceURL").text("<button onclick='alert(\"" + myPlayer.currentSrc() + "\");'>URL</button>");
    //$("#sourceURL").text(myPlayer.currentSrc());

    if ($("#sourceFormat")) {
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

    if ($("#tech")) {
        switch (myPlayer.techName) {
            case "AzureHtml5JS":
                $("#tech").text("JavaScript");
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
                $("#tech").text("HTML5");
                break;
            default:
                $("#tech").text(myPlayer.techName);
        }
    }

    if ($("#protection")) {
        switch (config.protection) {
            case "aes":
                $("#protection").text("AES-128 bit");
                break;
            case "playready":
                $("#protection").text("PlayReady");
                break;
            case "widevine":
                $("#protection").text("Widevine");
                break;
            default:
                $("#protection").text("None/Unknown");
        }
    }

    //if (config.token != "") {
    //    $("#currentToken").text("<button onclick='alert(\"" + config.token + "\");'>Token</button>");
    //    //$("#currentToken").text(config.token);
    //} else {
    //    $("#currentToken").text("None");
    //}

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
        }
    }
}

var updateConfig = function () {
    config.url = $("#adaptive-url").val();
    config.advanced = "false";
    config.format = "auto";
    config.tech = "auto";
    config.protection = "none";
    config.token = "";

    if ($("input[name='advanced']").is(':checked')) {
        config.advanced = "true";

        switch ($("#selectFormat").val()) {
            case "auto":
                //config.format = "auto";
                break;
            case "dash":
                config.format = "dash";
                break;
            case "smooth":
                config.format = "smooth";
                break;
            case "hls":
                config.format = "hls";
                break;
            case "mp4":
                config.format = "mp4";
                break;
            case "other":
                config.format = $("#formatOtherVal").val();
                break;
            default:
                break;
        }
        switch ($("#selectTech").val()) {
            case "auto":
                //config.tech = "auto";
                break;
            case "js":
                config.tech = "js";
                break;
            case "flash":
                config.tech = "flash";
                break;
            case "silverlight":
                config.tech = "silverlight";
                break;
            case "html5":
                config.tech = "html5";
                break;
            default:
                break;
        }
        switch ($("#selectContentProtection").val()) {
            case "none":
                //config.protection = "none"
                break;
            case "aes":
                config.protection = "aes";
                if ($("#token").val() != "Token" && $("#token").val().trim() != "") {
                    config.token = encodeURIComponent($("#token").val()).replace(/'/g, "%27").replace(/"/g, "%22");
                }
                break;
            case "playready":
                config.protection = "playready";
                if ($("#token").val() != "Token" && $("#token").val().trim() != "") {
                    config.token = encodeURIComponent($("#token").val()).replace(/'/g, "%27").replace(/"/g, "%22");
                }
                break;
            case "widevine":
                config.protection = "widevine";
                if ($("#token").val() != "Token" && $("#token").val().trim() != "") {
                    config.token = encodeURIComponent($("#token").val()).replace(/'/g, "%27").replace(/"/g, "%22");
                }
                break;
            default:
                break;
        }
    }
}

var updateParamsInAddressURL = function () {
    var urlParams = "";
    var manifestURL = config.url.trim().toLowerCase();
    if (manifestURL.match("^http://") || manifestURL.match("^https://")||manifestURL.match("^//")) {
        manifestURL = config.url.trim();
    } else {
        manifestURL = "//" + config.url.trim();
    }
    urlParams += "?url=" + encodeURIComponent(manifestURL).replace(/'/g, "%27").replace(/"/g, "%22");
    if (config.advanced == "true") {
        switch (config.format) {
            case "auto":
                //urlParams += "&format=auto";
                break;
            case "dash":
                urlParams += "&format=dash";
                break;
            case "smooth":
                urlParams += "&format=smooth";
                break;
            case "hls":
                urlParams += "&format=hls";
                break;
            case "mp4":
                urlParams += "&format=mp4"
            case "other":
                urlParams += "&format=" + $("#formatOtherVal").val();
                break;
            default:
                break;
        }
        switch (config.tech) {
            case "auto":
                //urlParams += "&tech=auto";
                break;
            case "js":
                urlParams += "&tech=js";
                break;
            case "flash":
                urlParams += "&tech=flash";
                break;
            case "silverlight":
                urlParams += "&tech=silverlight";
                break;
            case "html5":
                urlParams += "&tech=html5";
                break;
            default:
                break;
        }

        switch (config.protection) {
            case "none":
                //urlParams += "&protection=none";
                break;
            case "aes":
                urlParams += "&protection=aes";
                if (config.token) {
                    urlParams += "&token=" + config.token;
                }
                break;
            case "playready":
                urlParams += "&protection=playready";
                if (config.token) {
                    urlParams += "&token=" + config.token;
                }
                break;
            case "widevine":
                urlParams += "&protection=widevine";
                if (config.token) {
                    urlParams += "&token=" + config.token;
                }
                break;
            default:
                break;
        }
    }
    return urlParams;
}

var updateEmbedCode = function () {
    $('.embed-code-box textarea').val('<iframe src="//aka.ms/azuremediaplayeriframe' + updateParamsInAddressURL() + '&autoplay=false" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>');
}

var updateShareUrl = function () {
    $('.share-url-box textarea').val("http://aka.ms/azuremediaplayer" + updateParamsInAddressURL());
}

var loadPlugins = function () {
    myPlayer.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableMute: true,
        enableFullscreen: true
    });
}

$(document).ready(function () {
    initialize();
    appendSourceUrl(config.url);

    setTimeout(function () {
        displayConfig();
        displayCopyrightInfo();
    }, 2);

    //Update Player is selected
    $(".config-body #config-save").click(function (e) {
        updateConfig()
        //Page Reload Method
        window.location.search = updateParamsInAddressURL();

        //Channel change method
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
        //$("input[name='advanced'][value='advanced']").prop('checked', false);
        //$("#advancedOptions").hide();
        $("#urlHelp").show();
        $("#selectTech").val("auto");
        $("#selectContentProtection").val("none");
        $("#token").hide();
        $("#token").val("Token");

        switch (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("protection")) {
            case "aes":
                $("input[name='advanced'][value='advanced']").prop('checked', true);
                $("#advancedOptions").show();
                $("#urlHelp").hide();
                $("#selectContentProtection").val("aes");
                $("#token").show();
                if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("token") != "none") {
                    $("#token").val(decodeURIComponent(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("token")).replace(/\+/g, " "));
                }
                break;
            case "playready":
                $("input[name='advanced'][value='advanced']").prop('checked', true);
                $("#advancedOptions").show();
                $("#urlHelp").hide();
                $("#selectContentProtection").val("playready");
                $("#token").show();
                if (document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("token") != "none") {
                    $("#token").val(decodeURIComponent(document.getElementById("selectSource").options[document.getElementById("selectSource").selectedIndex].getAttribute("token")).replace(/\+/g, " "));
                }
                break;
            default:
                break;

        }

    });

    //Setting up the embed code
    $('#embed-url').click(function (e) {
        updateEmbedCode();
        $('.share-url-box').hide();
        $('.embed-code-box').toggle();
    });

    $('.embed-code-box .close').click(function (e) {
        $('.embed-code-box').hide();
    });

    //Setting up the share url
    $('#share-url').click(function (e) {
        updateShareUrl();
        $('.embed-code-box').hide();
        $('.share-url-box').toggle();
    });

    $('.share-url-box .close').click(function (e) {
        $('.share-url-box').hide();
    });

    //toggle advanded functions
    $("input[name='advanced'][value='advanced']").change(
    function () {
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

    //protection display token text
    $("#selectContentProtection").change(function (e) {
        if ($("#selectContentProtection").val() != "none") {
            $("#token").show();
        } else {
            $("#token").hide();
        }
    });
});