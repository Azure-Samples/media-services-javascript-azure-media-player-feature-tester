var assets = '{"content" :[' +
//Unencrypted VOD
'{ "title":"Azure Media Services", "src":"//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest", "protection":"none", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//PlayReady VOD
//'{ "title":"Big Buck Bunny", "src":"//amssamples.streaming.mediaservices.windows.net/8b661219-cef3-4413-9471-a0b02794cc4c/BigBuckBunny.ism/manifest", "protection":"PlayReady", "token":"Bearer=urn%3amicrosoft%3aazure%3amediaservices%3acontentkeyidentifier=ea388c3e-a0ec-4117-8564-ae40b31ca416&Audience=urn%3atest&ExpiresOn=4581880646&Issuer=http%3a%2f%2ftestacs.com%2f&HMACSHA256=Bk8lBOgQvNyfL5ztAqmud3y652FBTkVPmkG2CQuIup4%3d", "captions":"none", "audioTrackLabel":"none"   },' +
//DRM VOD
'{ "title":"Big Buck Bunny", "src":"//amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest", "protection":"drm", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//AES VOD
'{ "title":"Tears of Steel", "src":"//amssamples.streaming.mediaservices.windows.net/830584f8-f0c8-4e41-968b-6538b9380aa5/TearsOfSteelTeaser.ism/manifest", "protection":"AES", "token":"Bearer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiI5ZGRhMGJjYy01NmZiLTQxNDMtOWQzMi0zYWI5Y2M2ZWE4MGIiLCJpc3MiOiJodHRwOi8vdGVzdGFjcy5jb20vIiwiYXVkIjoidXJuOnRlc3QiLCJleHAiOjE3MTA4MDczODl9.lJXm5hmkp5ArRIAHqVJGefW2bcTzd91iZphoKDwa6w8", "captions":"none", "audioTrackLabel":"none"},' +
//Multi-Audio
'{ "title":"Multi-Audio", "src":"//amssamples.streaming.mediaservices.windows.net/55034fb3-11af-43e4-a4de-d1b3ca56c5aa/ElephantsDream_MultiAudio.ism/manifest", "protection":"none", "token":"none", "captions":"none", "audioTrackLabel":"auto"},' +
//Unencrypted Live
'{ "title":"Live Stream", "src":"//b028.wpc.azureedge.net/80B028/Samples/a38e6323-95e9-4f1f-9b38-75eba91704e4/5f2ce531-d508-49fb-8152-647eba422aec.ism/Manifest", "protection":"none", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//PlayReady Live
//'{ "title":"Live (Smooth Ingest)", "src":"//b028.wpc.azureedge.net/80B028/Samples/859b335f-eebc-4ff1-ac03-98e9b614e2c1/0cc164eb-193e-48cb-bc6b-041cc28307e4.ism/Manifest", "protection":"PlayReady", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//DRM Live
'{ "title":"Live Stream", "src":"//b028.wpc.azureedge.net/80B028/SampleStream/3f6088ec-9e1f-4db7-b7d9-3ec07183ce7d/e405bd0a-a34f-40e2-b70b-4322c46f5cb7.ism/manifest", "protection":"drm", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//AES Live
'{ "title":"Live Stream", "src":"//b028.wpc.azureedge.net/80B028/Samples/0e8848ca-1db7-41a3-8867-fe911144c045/d34d8807-5597-47a1-8408-52ec5fc99027.ism/Manifest", "protection":"AES", "token":"none", "captions":"none", "audioTrackLabel":"none"   },' +
//Indexer
'{ "title":"Indexer Demo", "src":"//nimbuspm.origin.mediaservices.windows.net/aed33834-ec2d-4788-88b5-a4505b3d032c/Microsoft\'s HoloLens Live Demonstration.ism/manifest", "protection":"none", "token":"none", "captions":"//nimbuspm.origin.mediaservices.windows.net/aed33834-ec2d-4788-88b5-a4505b3d032c/pp4_blog_demo.vtt", "audioTrackLabel":"none"},' +
//Multi-Audio
'{ "title":"Sintel", "src":"//amssamples.streaming.mediaservices.windows.net/f1ee994f-fcb8-455f-a15d-07f6f2081a60/Sintel_MultiAudio.ism/manifest", "protection":"none", "token":"none", "captions":"none", "audioTrackLabel":"manifest"},' +
//4K
'{ "title":"Llama Drama", "src":"//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest", "protection":"none", "token":"none", "captions":"none", "audioTrackLabel":"none"}' +
']}';

var videoNumber = 0;
var obj = JSON.parse(assets);
var numberAssetsToShow = Math.min(obj.content.length, 8);

var videoGrid = '<div id="videos-grid" class="hidden-xs container">';
var videosCarousel = '<div id="carousel-videos" class="carousel slide visible-xs" data-interval=""><div class="carousel-inner" role="listbox">';

for (var i = 0; i < numberAssetsToShow ; i++) {
    videoGrid += '<div class="video-card video'+ (i%8+1) + ' col-sm-6 col-md-6 col-lg-3" onclick="changeSrc(this)" ' +
        'src="' + obj.content[i].src + '" ' +
        'protection="' + obj.content[i].protection + '" ' +
        'token="' + obj.content[i].token + '" ' +
        'captions="' + obj.content[i].captions + '" ' +
        'audioTrackLabel="' + obj.content[i].audioTrackLabel + '" ' +
        '><div class="video-card-details inline"><h3 style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">';
    if (obj.content[i].title.toLowerCase().match("llama drama")) {
        videoGrid += '<span style="font-variant: small-caps"><strong>4k</strong></span> ';
    }
    if (obj.content[i].title.toLowerCase().match("live")) {
        videoGrid += '<span class="fa fa-video-camera"></span> ';
    }
    if (obj.content[i].audioTrackLabel.toLowerCase()!="none") {
        videoGrid += '<span class="fa fa-file-audio-o"></span> ';
    }
    if (obj.content[i].protection.toLowerCase().match("aes")) {
        videoGrid += '<span class="fa fa-envelope"></span> ';
    } else if (obj.content[i].protection.toLowerCase().match("playready") || obj.content[i].protection.toLowerCase().match("widevine") || obj.content[i].protection.toLowerCase().match("drm")) {
        videoGrid += '<span class="fa fa-lock"></span> ';
    }
    if (obj.content[i].captions.toLowerCase() != "none") {
        videoGrid += '<span class="fa fa-comment"></span> ';
    }
    if (obj.content[i].title && obj.content[i].title !== "") {
        videoGrid += obj.content[i].title;
    } else {
        videoGrid += "Video";
    }
    videoGrid += '</h3><p>';
    switch (obj.content[i].protection.toLowerCase()) {
        case 'none':
            videoGrid += "Unencrypted";
            break;
        case '':
            videoGrid += "Unencrypted";
            break;
        case 'aes':
            videoGrid += "AES";
            break;
        case 'playready':
            videoGrid += "PlayReady";
            break;
        case 'widevine':
            videoGrid += "Widevine";
            break;
        case 'drm':
            videoGrid += "Common Encryption DRM";
            break;
        default:
            videoGrid += "Unknown";
            break;
    }
    videoGrid += '</p></div><div class="video-card-play inline"><span class="fa fa-play-circle"></span></div></div>';

    videosCarousel += '<div class="item';
    if (i === 0) {
        videosCarousel += ' active';
    }
    videosCarousel += '"><div class="video-card video' + (i % 8 + 1) + '" ' + 'onclick="changeSrc(this)" ' +
        'src="' + obj.content[i].src + '" ' +
        'protection="' + obj.content[i].protection + '" ' +
        'token="' + obj.content[i].token + '" ' +
        'captions="' + obj.content[i].captions + '" ' +
        'audioTrackLabel="' + obj.content[i].audioTrackLabel + '" ' +
        '><div class="video-card-details inline"><h3>';
    if (obj.content[i].title.toLowerCase().match("llama drama")) {
        videosCarousel += '<span style="font-variant: small-caps"><strong>4k</strong></span> ';
    }
    if(obj.content[i].title.toLowerCase().match("live")) {
        videosCarousel += '<span class="fa fa-video-camera"></span> ';
    }
    if (obj.content[i].audioTrackLabel.toLowerCase() != "none") {
        videosCarousel += '<span class="fa fa-file-audio-o"></span> ';
    }
    if (obj.content[i].protection.toLowerCase().match("aes")) {
        videosCarousel += '<span class="fa fa-envelope"></span> ';
    } else if (obj.content[i].protection.toLowerCase().match("playready") || obj.content[i].protection.toLowerCase().match("widevine") || obj.content[i].protection.toLowerCase().match("drm")) {
        videosCarousel += '<span class="fa fa-lock"></span> ';
    }
    if (obj.content[i].captions.toLowerCase() != "none") {
        videosCarousel += '<span class="fa fa-comment"></span> ';
    }
    if (obj.content[i].title && obj.content[i].title !== "") {
        videosCarousel += obj.content[i].title;
    } else {
        videosCarousel += "Video";
    }
    videosCarousel += '</h3><p>';
    switch (obj.content[i].protection.toLowerCase()) {
        case 'none':
            videosCarousel += "Unencrypted";
            break;
        case '':
            videosCarousel += "Unencrypted";
            break;
        case 'aes':
            videosCarousel += "AES";
            break;
        case 'playready':
            videosCarousel += "PlayReady";
            break;
        case 'widevine':
            videosCarousel += "Widevine";
            break;
        case 'drm':
            videosCarousel += "Common Encryption DRM";
            break;
        default:
            videosCarousel += "Unknown";
            break;
    }
    videosCarousel += '</p></div><div class="video-card-play inline"><span class="fa fa-play-circle"></span><div>Play</div></div></div></div>';

    videoNumber++;
}

videoGrid += '</div>';
videosCarousel += '</div>';

var controls = '<a class="left carousel-control" href="#carousel-videos" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-videos" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div><div id="carousel-info-mobile" class="container visible-xs"><span id="count">1</span>/'+ videoNumber +' Videos</div>';

$("#carousel-videos-container").append(videoGrid + videosCarousel + controls);