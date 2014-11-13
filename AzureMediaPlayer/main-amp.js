var config = {
    url: "http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest",
    advanced: "false",
    format: "auto",
    tech: "auto",
    protection: "none",
    aestoken: "",
};
var myPlayer;

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
        config.url = queryString.url;
    }
    if (queryString.format) {
        config.advanced = "true";
        config.format = queryString.format.toLowerCase();
    }

    if (queryString.tech) {
        config.advanced = "true";
        config.tech = queryString.tech.toLowerCase();
    }

    if (queryString.protection) {
        config.advanced = "true";
        config.protection = queryString.protection.toLowerCase();
    }
    if (queryString.aestoken) {
        config.advanced = "true";
        config.protection = "aes";
        config.aestoken = queryString.aestoken;
    }


    console.log("Config chosen is: URL - " + config.url);

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

    //Setup UI for Advanced: Format
    $("#aesToken").hide();
    switch (config.protection) {
        case "none":
            $("#selectContentProtection").val("none");
            break;
        case "aes":
            $("#selectContentProtection").val("aes");
            $("#aesToken").show();
            if (config.aestoken != "") {
                $("#aesToken").val(decodeURIComponent(config.aestoken.replace(/\+/g, " ")));
            }
            break;
        case "playready":
            $("#selectContentProtection").val("playready");
            break;
        case "widevine":
            $("#selectContentProtection").val("widevine");
            break;
        default:
            $("#selectContentProtection").val("none");
            break;
    }
};

var appendSourceUrl = function (url) {

    if (config.format == "auto") {
        if (url.trim().toLowerCase().match('.ism/manifest')) {
            var mySourceList = [
                { src: url.trim() },
                //type: "application/vnd.ms-sstr+xml" },
                //{ src: url, type: "application/vnd.ms-sstr+xml" },
                //{ src: url + "(format=mpd-time-csf)", type: "application/dash+xml" },
                //{ src: url + "(format=m3u8-aapl-v3)", type: "application/vnd.apple.mpegurl" },
            ];
            mySourceList = UrlRewriter.expandSources(mySourceList);
        } else if (url.toLowerCase().match('.mpd$')) {
            var mySourceList = [{ src: url.trim(), type: "application/dash+xml" }, ];
        } else if (url.toLowerCase().match('.mp4$')) {
            var mySourceList = [{ src: url.trim(), type: "video/mp4" }, ];
        } else if (url.toLowerCase().match('.flv$')) {
            var mySourceList = [{ src: url.trim(), type: "video/x-flv" }, ];
        } else if (url.toLowerCase().match('.ogv$')) {
            var mySourceList = [{ src: url.trim(), type: "video/ogg" }, ];
        } else if (url.toLowerCase().match('.webm$')) {
            var mySourceList = [{ src: url.trim(), type: "video/webm" }, ];
        } else if (url.toLowerCase().match('.3gp$')) {
            var mySourceList = [{ src: url.trim(), type: "video/3gp" }, ];
        } else {
            var mySourceList = [{ src: url.trim() }, ];
        }
    } else if (config.format == "dash") {
        var mySourceList = [{ src: url.trim(), type: "application/dash+xml" }, ];
    } else if (config.format == "smooth") {
        var mySourceList = [{ src: url.trim(), type: "application/vnd.ms-sstr+xml" }, ];
    } else if (config.format == "hls") {
        var mySourceList = [{ src: url.trim(), type: "application/vnd.apple.mpegurl" }, ];
    } else {
        var mySourceList = [{ src: url.trim(), type: $("#formatOtherVal").val() }, ];
    }

    if (config.protection == "none") {
        if (config.tech == "auto") {
            vjs.options.techOrder = ["onePlayer", "osmfss", "html5", "flash"];
        } else if (config.tech == "js") {
            vjs.options.techOrder = ["onePlayer"];
        } else if (config.tech == "flash") {
            vjs.options.techOrder = ["osmfss", "flash"];
        } else if (config.tech == "silverlight") {
            //not supported yet
        } else if (config.tech == "html5") {
            vjs.options.techOrder = ["html5"];
        }
    } else if (config.protection == "aes") {
        if (config.aestoken != "") {
            vjs.options.osmfss.flashVars = { AdaptiveStreamingPlugin_encryptionKeyToken: config.aestoken };
            vjs.options.techOrder = ["osmfss"];
        } else {
            vjs.options.techOrder = ["onePlayer", "html5"];
        }
    } else if (config.protection == "playready") {
        //not supported yet
    } else if (config.protection == "widevine") {
        //not supported yet
    }

    /*UrlRewriter.setMediaFormats = ["SMOOTH", "HLS-V3"];
    mySourceList = UrlRewriter.expandSources(mySourceList);*/

    var myOptions = {
        sources: mySourceList,
        //techOrder: ["onePlayer", "osmfss", "html5", "flash"],
        "nativeControlsForTouch": false,
        "loop": false
        //"autoplay": true
    };

    if (url.trim().toLowerCase().match('http://samplescdn.origin.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/Sintel_WAMEH264AdaptiveBitrateMP4SetSD4x3iOSCellularOnly.ism/manifest'.toLowerCase())) {
        myOptions.tracks = [
            { src: "http://samplescdn.origin.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-en-us.vtt", srclang: "en", kind: "subtitles", label: "English" },
            { src: "http://samplescdn.origin.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-fr.vtt", srclang: "fr", kind: "subtitles", label: "French"},
            { src: "http://samplescdn.origin.mediaservices.windows.net/7c58a29f-4926-4a4e-9dbc-4b46f843561e/sintel-it.vtt", srclang: "it", kind: "subtitles", label: "Italian"}
        ];
    } else if (url.trim().toLowerCase().match('http://samplescdn.origin.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TearsOfSteel_WAMEH264SmoothStreaming720p.ism/manifest'.toLowerCase())) {
        myOptions.tracks = [
            { src: "http://samplescdn.origin.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-en.vtt", srclang: "en", kind: "subtitles", label: "English" },
            { src: "http://samplescdn.origin.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-es.vtt", srclang: "es", kind: "subtitles", label: "Spanish" },
            { src: "http://samplescdn.origin.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-fr.vtt", srclang: "fr", kind: "subtitles", label: "French" },
            { src: "http://samplescdn.origin.mediaservices.windows.net/11196e3d-2f40-4835-9a4d-fc52751b0323/TOS-it.vtt", srclang: "it", kind: "subtitles", label: "Italian" }
        ];
    }

    myPlayer = videojs("oneplayer", myOptions);

};



$(document).ready(function () {
    initialize();
    appendSourceUrl(config.url);

    setTimeout(function () {

        switch (myPlayer.currentType()) {
            case "video/mp4":
                $("#sourceFormat").append("MP4");
                break;
            case "application/vnd.ms-sstr+xml":
                $("#sourceFormat").append("Smooth");
                break;
            case "application/dash+xml":
                $("#sourceFormat").append("DASH");
                break;
            case "application/vnd.apple.mpegurl":
                $("#sourceFormat").append("HLS");
                break;
            default:
                $("#sourceFormat").append(myPlayer.currentType());
        }

        switch (myPlayer.techName) {
            case "OnePlayer":
                $("#tech").append("JavaScript");
                break;
            case "Osmfss":
                $("#tech").append("Flash");
                break;
            case "Ssme":
                $("#tech").append("Silverlight");
                break;
            case "Flash":
                $("#tech").append("Flash");
                break;
            case "Html5":
                $("#tech").append("HTML5");
                break;
            default:
                $("#tech").append(myPlayer.techName);
        }

        if (config.url.match(/sintel/i)) {
            $("#copyrightInfo").append('Sintel video - &copy; copyright Blender Foundation | <a href="http://durian.blender.org" target="_blank">durian.blender.org</a>');
        }
        if (config.url.match(/big/i) && config.url.match(/buck/i) && config.url.match(/bunny/i)) {
            $("#copyrightInfo").append('Big Buck Bunny video - &copy; copyright 2008, Blender Foundation | <a href="http://www.bigbuckbunny.org" target="_blank">bigbuckbunny.org</a>');
        }
        if (config.url.match(/elephant/i) && config.url.match(/dream/i)) {
            $("#copyrightInfo").append('Elephant\'s Dream video - &copy; copyright 2006, Blender Foundation / Netherlands Media Art Institute | <a href="http://www.elephantsdream.org" target="_blank">elephantsdream.org</a>');
        }
        if (config.url.match(/tears/i) && config.url.match(/steel/i)) {
            $("#copyrightInfo").append('Tears of Steel video - &copy; Blender Foundation | <a href="http://www.mango.blender.org" target="_blank">mango.blender.org</a>');
        }

    }, 2);

    //Reload page with new configurations once Update Player is selected
    $(".config-body #config-save").click(function (e) {
        config.url = $("#adaptive-url").val();
        var options = "";
        if ($("input[name='advanced']").is(':checked')) {
            switch ($("#selectFormat").val()) {
                case "auto":
                    //options += "&format=auto";
                    break;
                case "dash":
                    options += "&format=dash";
                    break;
                case "smooth":
                    options += "&format=smooth";
                    break;
                case "hls":
                    options += "&format=hls";
                    break;
                case "other":
                    options += "&format=" + $("#formatOtherVal").val();
                    break;
                default:
                    break;
            }
            switch ($("#selectTech").val()) {
                case "auto":
                    //options += "&tech=auto";
                    break;
                case "js":
                    options += "&tech=js";
                    break;
                case "flash":
                    options += "&tech=flash";
                    break;
                case "silverlight":
                    options += "&tech=silverlight";
                    break;
                case "html5":
                    options += "&tech=html5";
                    break;
                default:
                    break;
            }
            switch ($("#selectContentProtection").val()) {
                case "none":
                    //options += "&protection=none";
                    break;
                case "aes":
                    options += "&protection=aes";
                    if ($("#aesToken").val() != "Token") {
                        options += "&aestoken=" + encodeURIComponent($("#aesToken").val()).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    break;
                case "playready":
                    options += "&protection=playready";
                    break;
                case "widevine":
                    options += "&protection=widevine";
                    break;
                default:
                    break;
            }

        }

        window.location.search = "?url=" + config.url + options;
    });

    //Updated source from the selectable samples
    $("#selectSource").change(function (e) {
        $(".config-body #adaptive-url").val($("#selectSource").val());

        if ($(".config-body #adaptive-url").val().match('http://samplescdn.origin.mediaservices.windows.net/cdc285bd-4f9b-422b-9f9f-c1cabcce04d2/BigBuckBunny.ism/manifest')) {
            $("input[name='advanced'][value='advanced']").prop('checked', true);
            $("#advancedOptions").show();
            $("#urlHelp").hide();
            $("#selectTech").val("flash");
            $("#selectContentProtection").val("aes");
            $("#aesToken").show();
            $("#aesToken").val(decodeURIComponent("Bearer%3Durn%253amicrosoft%253aazure%253amediaservices%253acontentkeyidentifier%3Dca841fd4-b469-4326-9e61-59b613c63971%26Audience%3Durn%253atest%26ExpiresOn%3D1764547200%26Issuer%3Dhttp%253a%252f%252ftestacs.com%252f%26HMACSHA256%3DoPeHvCz%252fLvc2fBXiH9%252bhoOjslCnrWgezq0DT%252btj6lC4%253d".replace(/\+/g, " ")));
        }
    });

    //Setting up the embed code
    $('#embed-url').click(function (e) {
        var embedOptions = "";
        if (config.advanced == "true") {
            switch (config.format) {
                case "auto":
                    //embedOptions += "&format=auto";
                    break;
                case "dash":
                    embedOptions += "&format=dash";
                    break;
                case "smooth":
                    embedOptions += "&format=smooth";
                    break;
                case "hls":
                    embedOptions += "&format=hls";
                    break;
                case "other":
                    embedOptions += "&format=" + $("#formatOtherVal").val();
                    break;
                default:
                    break;
            }
            switch (config.tech) {
                case "auto":
                    //embedOptions += "&tech=auto";
                    break;
                case "js":
                    embedOptions += "&tech=js";
                    break;
                case "flash":
                    embedOptions += "&tech=flash";
                    break;
                case "silverlight":
                    embedOptions += "&tech=silverlight";
                    break;
                case "html5":
                    embedOptions += "&tech=html5";
                    break;
                default:
                    break;
            }

            switch (config.protection) {
                case "none":
                    //embedOptions += "&protection=none";
                    break;
                case "aes":
                    embedOptions += "&protection=aes";
                    if (config.aestoken) {
                        embedOptions += "&aestoken=" + encodeURIComponent(config.aestoken).replace(/'/g, "%27").replace(/"/g, "%22");
                    }
                    break;
                case "playready":
                    embedOptions += "&protection=playready";
                    break;
                case "widevine":
                    embedOptions += "&protection=widevine";
                    break;
                default:
                    break;
            }
        }
        $('.embed-code-box textarea').val('<iframe src="http://amsplayer.azurewebsites.net/AzureMediaPlayer/azuremediaplayer_iframe.html?url=' + config.url + embedOptions + '" name="azuremediaplayer" scrolling="no" frameborder="no" align="center" height="280px" width="500px" allowfullscreen></iframe>');
        $('.embed-code-box').toggle();
    });

    $('.embed-code-box .close').click(function (e) {
        $('.embed-code-box').hide();
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

    //protection = aes display token text
    $("#selectContentProtection").change(function (e) {
        if ($("#selectContentProtection").val() == "aes") {
            $("#aesToken").show();
        } else {
            $("#aesToken").hide();
        }
    });
});