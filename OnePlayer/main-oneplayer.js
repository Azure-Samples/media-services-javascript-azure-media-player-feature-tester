var config = {
    url: "http://samplescdn.origin.mediaservices.windows.net/e0e820ec-f6a2-4ea2-afe3-1eed4e06ab2c/AzureMediaServices_Overview.ism/manifest",
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
        var pair = vars[i].split(":=");
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

    console.log("Config chosen is: URL - " + config.url);

    //get ther right format specific url
    //var url = config.url;

    //setup modal dialog
    $(".config-body #adaptive-url").val(config.url);


    //setup UI
    /*$("."+config.player).show();
	$("[data-player='"+config.player+"']").toggleClass("active");
	$("[data-format='"+config.format+"']").toggleClass("btn-default");
	$("[data-format='"+config.format+"']").toggleClass("btn-primary");*/
};

var appendSourceUrl = function (url) {
    //var myPlayer = videojs("oneplayer", { techOrder: ["onePlayer", "html5", "osmfss", "flash"], "nativeControlsForTouch": false });
    //myPlayer.src([
    //  { src: "http://iis-wms101/clienttestmedia/Automation/Smooth/H264/EE4-H264/Content.ism/manifest(format=mpd-time-csf)", type: "application/dash+xml" },
    //  { src: "http://iis-wms101/clienttestmedia/Automation/Smooth/H264/EE4-H264/Content.ism/manifest(format=m3u8-aapl)", type: "application/vnd.apple.mpegurl" },
    //]);
    var myPlayer = videojs("oneplayer", { techOrder: ["onePlayer", "html5", "osmfss", "flash"], "nativeControlsForTouch": false });
    //var myPlayer = videojs("oneplayerVideo", { techOrder: ["osmfss"], "nativeControlsForTouch": false });

    if (url.match('/manifest$')) {
        //$(".oneplayer").append('<video id="oneplayerVideo" class="video vjs-default-skin vjs-big-play-centered" autoplay controls preload="auto" width="100%" height="500" poster="" data-setup=\'{"techOrder": ["oneplayer", "html5" , "osmfss" , "flash" ], "nativeControlsForTouch":false}\'> <source src="' + url + '" type="application/vnd.ms-sstr+xml"> <source src="' + url + '(format=mpd-time-csf)" type="application/dash+xml"> <source src="' + url + '(format=m3u8-aapl)" type="application/vnd.apple.mpegurl"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>');
        myPlayer.src([
            { src: url, type: "application/vnd.ms-sstr+xml" },
            { src: url + "(format=mpd-time-csf)", type: "application/dash+xml" },
            { src: url + "(format=m3u8-aapl-v3)", type: "application/vnd.apple.mpegurl" },
        ]);

    } else if (url.match('.mp4$')) {
        //$(".oneplayer").append('<video id="vid1" class="video-js vjs-default-skin" autoplay controls preload="auto" width="100%" height="500" poster="" data-setup=\'{"techOrder": ["onePlayer", "html5", "osmfss", "flash"], "nativeControlsForTouch": false, "autoplay": true}\'> <source src="' + url + '" type="video/mp4"></video>');
        myPlayer.src([{ src: url, type: "video/mp4" }, ]);
    } else if (url.match('.flv$')) {
        myPlayer.src([{ src: url, type: "video/x-flv" }, ]);
    } else if (url.match('.ogv$')) {
        myPlayer.src([{ src: url, type: "video/ogg" }, ]);
    } else if (url.match('.webm$')) {
        myPlayer.src([{ src: url, type: "video/webm" }, ]);
    } else if (url.match('.3gp$')) {
        myPlayer.src([{ src: url, type: "video/3gp" }, ]);
    } else if (url.match('/manifest!$')) {
        myPlayer.src([{ src: url.substring(0, url.length - 1), type: "application/vnd.ms-sstr+xml" }, ]);
    } else if (url.match('format=mpd-time-csf')) {
        myPlayer.src([{ src: url, type: "application/dash+xml" }, ]);
    } else if (url.match('format=m3u8-aapl')) {
        myPlayer.src([{ src: url, type: "application/vnd.apple.mpegurl" }, ]);
    }
};

$(document).ready(function () {
    initialize();
    appendSourceUrl(config.url);

    setTimeout(function () {

        switch (videojs.players.oneplayer.currentType_) {
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
                $("#sourceFormat").append(videojs.players.oneplayer.currentType_);
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

    $(".config-body #config-save").click(function (e) {
        config.url = $("#adaptive-url").val();
        window.location.search = "?url:=" + config.url;
    });

    $("#selectSource").change(function (e) {
        $(".config-body #adaptive-url").val($("#selectSource").val());
    });
});