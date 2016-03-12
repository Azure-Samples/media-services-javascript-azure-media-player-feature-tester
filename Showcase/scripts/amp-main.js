var myPlayer = null;
var currentEncryptionType = "Unencrypted";

var changeSrc = function (evt) {
    myPlayer.pause();
    var mySourceList = [];
    var myTrackList = [];

    //Creating Track list for captions
    if (evt.getAttribute('captions').toLowerCase().trim() !== 'none') {
        myTrackList = [{ src: evt.getAttribute('captions'), kind: "captions", srclang: "en", label: "Indexer" }];
    }

    //Creating source list for source
    if (evt.getAttribute('protection').toLowerCase().trim() === 'none' || evt.getAttribute('protection').toLowerCase().trim() === '' || evt.getAttribute('protection').toLowerCase().trim() === 'unencrypted') {
        mySourceList = [{ src: evt.getAttribute('src').trim(), type: "application/vnd.ms-sstr+xml" }, ];
    } else if (evt.getAttribute('protection').toLowerCase().trim() === 'drm') {
        mySourceList = [{ src: evt.getAttribute('src').trim(), type: "application/vnd.ms-sstr+xml", protectionInfo: [{ type: "PlayReady" }, { type: "Widevine" }] } ];
    }else {
        mySourceList = [{ src: evt.getAttribute('src').trim(), type: "application/vnd.ms-sstr+xml", protectionInfo: [{ type: evt.getAttribute('protection').trim(), authenticationToken: evt.getAttribute('token').trim() }] }, ];
    }

    //Update Audio Tracks button
    switch (evt.getAttribute('audioTrackLabel').toLowerCase().trim()) {
        case 'auto':
            $(".amp-audiotracks-control").show();
            //myPlayer.options_.skinConfig.audioTracksMenu.enabled = true;
            //myPlayer.options_.skinConfig.audioTracksMenu.useManifestForLabel = false;
            break;
        case 'manifest':
            $(".amp-audiotracks-control").show();
            //myPlayer.options_.skinConfig.audioTracksMenu.enabled = true;
            //myPlayer.options_.skinConfig.audioTracksMenu.useManifestForLabel = true;
            break;
        default:
            $(".amp-audiotracks-control").hide();
            //myPlayer.options_.skinConfig.audioTracksMenu.enabled = false;
            //myPlayer.options_.skinConfig.audioTracksMenu.useManifestForLabel = false;
    }

    //Updating protection info for the player infomation section
    switch (evt.getAttribute('protection').toLowerCase().trim()) {
        case 'aes':
            currentEncryptionType = 'AES';
            break;
        case 'playready':
            currentEncryptionType = 'PlayReady';
            break;
        case 'widevine':
            currentEncryptionType = 'Widevine';
            break;
        case 'drm':
            currentEncryptionType = 'Common Encryption DRM';
            break;
        case 'none':
            currentEncryptionType = "Unencrypted";
            break;
        case '':
            currentEncryptionType = "Unencrypted";
            break;
        case 'unencrypted':
            currentEncryptionType = "Unencrypted";
            break;
        default:
            currentEncryptionType = evt.getAttribute('protection');
    }
    //myPlayer.options(myOptions);
    myPlayer.autoplay(true);
    myPlayer.src(mySourceList, myTrackList)
    window.scrollTo(0, 0);
    //myPlayer.play();
    updatePlayerConfig();
    hoverPlayerInfo();

    //Auto select captions
    if (evt.getAttribute('captions').toLowerCase().trim() !== 'none') {
        for (var i = 0; i < myPlayer.textTracks_.length ; i++) {
            if (myPlayer.textTracks_.tracks_[i].mode != "disabled") {
                myPlayer.textTracks_.tracks_[i].mode = "disabled";
            }
        }
        myPlayer.textTracks_.tracks_[0].mode = "showing";
    }
}

var getCurrentType = function () {
    var currentMimeType = "";
    switch (myPlayer.currentType()) {
        case "video/mp4":
            currentMimeType = "MP4";
            break;
        case "application/vnd.ms-sstr+xml":
            currentMimeType = "Smooth";
            break;
        case "application/dash+xml":
            currentMimeType = "Dash";
            break;
        case "application/vnd.apple.mpegurl":
            currentMimeType = "HLS";
            break;
        default:
            currentMimeType = myPlayer.currentType();
            break;
    }
    return currentMimeType;
}

var getTech = function () {
    var currentTech = "";
    switch (myPlayer.techName) {
        case "AzureHtml5JS":
            currentTech = "JavaScript + HTML5 (MSE)";
            break;
        case "FlashSS":
            currentTech = "Flash";
            break;
        case "SilverlightSS":
            currentTech = "Silverlight";
            break;
        case "Flash":
            currentTech = "Flash";
            break;
        case "Html5":
            currentTech = "Native HTML5";
            break;
        default:
            currentTech = myPlayer.techName;
            break;
    }
    return currentTech;
}

var getDownloadBitrate = function () {

    var bitrate = myPlayer.currentDownloadBitrate();
    var sizes = ['bps', 'kbps', 'mbps', 'gbps', 'tbps'];
    if (bitrate == 0) return 'n/a';
    if (bitrate == null) return 'unknown';
    var i = parseInt(Math.floor(Math.log(bitrate) / Math.log(1024)));
    if (i == 0) return bitrate + ' ' + sizes[i];
    return (bitrate / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}


var hoverPlayerInfo = function () {;
    //$('#player-info-txt').attr('data-content', '<p><span class="bold">Format:</span> <span class="sourceFormat">' + getCurrentType() + '</span></p><p><span class="bold">Technology:</span> <span class="tech">' + getTech() + '</span></p><p><span class="bold no-margin">Security:</span> <span class="encryptionType">' + currentEncryptionType + '</span></p><p><span class="bold no-margin dlbitrate">DL Bitrate:</span> <span class="bitrate dlbitrate"></span></p>');
    var data = '<table><tr><td><span style="padding-right:2em;" class="player-info-table-item bold">Source Format:</span></td><td><span class="player-info-table-item sourceFormat">' + getCurrentType() + '</span></td></tr><tr><td><span class="player-info-table-item bold">Technology:</span></td><td><span class="player-info-table-item tech">' + getTech() + '</span></td></tr><tr><td><span class="player-info-table-item bold no-margin">Security:</span></td><td><span class="player-info-table-item encryptionType">' + currentEncryptionType + '</span></td></tr>';
    if (myPlayer.techName !== "Html5") {
        data += '<tr><td><span class="player-info-table-item bold no-margin dlbitrate">DL Bitrate:</span></td><td><span class="player-info-table-item bitrate dlbitrate">' + getDownloadBitrate() + '</span></td></tr></table>';
    }
    $('#player-info-txt').attr('data-content', data);

    $('[data-toggle="popover"]').popover();

}

var updatePlayerConfig = function () {
    if ($(".sourceFormat")) {
        $(".sourceFormat").text(getCurrentType());
    }

    if ($(".tech")) {
        $(".tech").text(getTech())
    }

    if ($(".encryptionType")) {
        $(".encryptionType").text(currentEncryptionType);
    }

    if ($(".bitrate") && myPlayer) {
        $(".bitrate").text(getDownloadBitrate());
    }
}


$(document).ready(function () {
    $(".dlbitrate").hide();

    $('.carousel-control.right').click(function () {
        var pos = parseInt($('#count').html()) + 1;
        if (pos <= videoNumber) {
            $('#count').html(pos);
        } else {
            $('#count').html(1);
        }
    });

    $('.carousel-control.left').click(function () {
        var pos = parseInt($('#count').html()) - 1;
        if (pos > 0) {
            $('#count').html(pos);
        } else {
            $('#count').html(videoNumber);
        }
    });
    myPlayer = amp("azuremediaplayer", {
        "nativeControlsForTouch": false,
        "logo": {
            "enabled": false
        },
        traceConfig: {
            TraceTargets: [{ target: 'console' }],
            maxLogLevel: 1
        },
        heuristicProfile: "HighQuality",
        customPlayerSettings: {
            "customHeuristicSettings": {
                "preRollInSec": 4, //number of seconds the buffer must be filled before playback starts or start back after seek or buffering
                "maxBufferInSec": 30, //buffer size
                "livePlaybackOffsetInSec": 8, //number of seconds to offset from live edge (does nothing in the VOD case)
                "windowSizeHeuristics": true //takes into account
            }
        },
        skinConfig: {
            "audioTracksMenu": {
                "enabled": true,
                "useManifestForLabel": true
            }
        }
    }, function () {
        
    });

    setTimeout(function () {
        updatePlayerConfig();
        hoverPlayerInfo();
        $(".amp-audiotracks-control").hide();
    }, 2);
    $(".dlbitrate").show();
    myPlayer.addEventListener(amp.eventName.downloadbitratechanged, function () {
        $(".bitrate").text(getDownloadBitrate());
        hoverPlayerInfo();
    });
    if (myPlayer.techName === "FlashSS") {
        myPlayer.addEventListener(amp.eventName.timeupdate, function () {
                $(".bitrate").text(getDownloadBitrate());
                hoverPlayerInfo();
        });
    }

    //work around for audio track button not updating
    $(".amp-audiotracks-control").css('display', 'none');
});