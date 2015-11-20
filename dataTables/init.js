/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    var expandedData = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    if (d.videocodec != "") {
        expandedData += '<tr>' + '<td>Video Codec:</td>' + '<td>' + d.videocodec + '</td>' + '</tr>';
    }
    if (d.audiocodec != "") {
        expandedData += '<tr>' + '<td>Audio Codec:</td>' + '<td>' + d.audiocodec + '</td>' + '</tr>';
    }
    if (d.timescale != "") {
        expandedData += '<tr>' + '<td>Time Scale:</td>' + '<td>' + d.timescale + '</td>' + '</tr>';
    }
    if (d.qualitylevels != "") {
        expandedData += '<tr>' + '<td>Quality Levels:</td>' + '<td>' + d.qualitylevels + '</td>' + '</tr>';
    }
    if (d.audiotracks != "") {
        expandedData += '<tr>' + '<td>No. of Audio Streams:</td>' + '<td>' + d.audiotracks + '</td>' + '</tr>';
    }
    /*if (d.subtracks != "") {
        expandedData += '<tr>' + '<td>No. of Subtitle Tracks:</td>' + '<td>' + d.subtracks + '</td>' + '</tr>';
    }*/
    if (d.encoder != "") {
        expandedData += '<tr>' + '<td>Encoder:</td>' + '<td>' + d.encoder + '</td>' + '</tr>';
    }
    if (d.profile != "") {
        expandedData += '<tr>' + '<td>Encoding Profile:</td>' + '<td>' + d.profile + '</td>' + '</tr>';
    }
    if (d.encodingpreset != "") {
        expandedData += '<tr>' + '<td>Encoding Preset:</td>' + '<td>' + d.encodingpreset + '</td>' + '</tr>';
    }
    if (d.cbrvbr != "") {
        expandedData += '<tr>' + '<td>CBR or VBR:</td>' + '<td>' + d.cbrvbr + '</td>' + '</tr>';
    }
    if (d.contentprotection.toLowerCase() != "none") {
        expandedData += '<tr>' + '<td>Content Protection:</td>' + '<td>' + d.contentprotection + '</td>' + '</tr>';
    }
    if (d.token != "") {
        expandedData += '<tr>' + '<td>Token:</td>' + '<td>' + d.token + '</td>' + '</tr>';
    }
    if (d.other != "") {
        expandedData += '<tr>' + '<td>Other Information:</td>' + '<td>' + d.other + '</td>' + '</tr>';
    }
    if (d.notes != "") {
        expandedData += '<tr>' + '<td>Notes:</td>' + '<td>' + d.notes + '</td>' + '</tr>';
    }
    expandedData += '<tr>' + '<td>Play:</td>' + '<td>' + '<a target="_blank" href="//aka.ms/azuremediaplayer?' + getAMPUrl(d) + '"' + '>Click to Play</a>' + '</td>' + '</tr>';
    //if (d. != "") {
    //    expandedData += '<tr>' + '<td>:</td>' + '<td>' + d. + '</td>' + '</tr>';
    //}

    return expandedData;
}

function getAMPUrl(d) {
    var AMPUrl = "";
    
    //Manifest URL
    AMPUrl += "url=";
    if (d.url.trim().match('#$')) {
        AMPUrl += encodeURIComponent(d.url.slice(0, -1) +")");
    }else{
        AMPUrl += encodeURIComponent(d.url);
    }

    if(d.contentprotection.toLowerCase().trim()=="aes"){
        AMPUrl += "&protection=aes";
    } else {
        if (d.contentprotection.toLowerCase().trim().match("playready") && d.contentprotection.toLowerCase().trim().match("widevine")) {
            AMPUrl += "&protection=drm";
        }else if (d.contentprotection.toLowerCase().trim().match("playready")) {
            AMPUrl += "&protection=playready";
        }else if (d.contentprotection.toLowerCase().trim().match("widevine")) {
            AMPUrl += "&protection=widevine";
        }
    }

    if (d.token.trim() != "") {
        AMPUrl += "&token=" + encodeURIComponent(d.token)
    }

    return AMPUrl;
    
}

$(document).ready(function () {
        var table = $('#example').DataTable( {
        "ajax": "dataTables/data/amsSamples.txt",
        paging: false,
        jQueryUI: true,
        //responsive: true,
        //responsive: {
        //    details: false
        //},

        "order": [2, 'asc'],

        "columns": [
            {
                "class": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": '',
                "width": "4px"
            },
            { "data": "stream" },
            { "data": "content" },
            { "data": "type" },
            { "data": "advanced" },
            { "visible": false, "data": "videocodec" },
            { "visible": false, "data": "audiocodec" },
            { "data": "length" },
            //{ "data": "duration" },
            { "visible": false, "data": "timescale" },
            //{ "data": "qualityLevels" },
            {
                "orderable": false,
                "data": "maxresolution"
            },
            //{ "data": "maxHeight" },
            //{ "data": "maxWidth" },
            //{ "data": "audioTracks" },
            //{ "data": "subTracks" },
            //{ "data": "audioChannels" },
            { "visible": false, "data": "encoder" },
            { "visible": false, "data": "profile" },
            {
                "visible": false,
                "data": "encodingpreset",
                "render": function (preset, type, full, meta) {
                    if (preset=="") {
                        return "N/A";
                    } else{
                        return preset;
                    }
                }
            },
            { "visible": false, "data": "cbrvbr" },
            { "data": "contentprotection" },
            { "visible": false, "data": "token" },
            //{ "data": "other" },
            
            {
                "data": "url",
                "render": function (url, type, full, meta) {
                    if (url.trim().toLowerCase().match('.mp4$')) {
                        return "<a href=" + url.trim() + ">MP4</a>";
                    } else if (url.trim().toLowerCase().match('manifest$')) {
                        return "<a href=" + url.trim() + ">Smooth</a>, <a href=" + url.trim() + "(format=mpd-time-csf)" + ">DASH</a>, <a href=" + url.trim() + "(format=m3u8-aapl)" + ">HLSv4</a>, <a href=" + url.trim() + "(format=m3u8-aapl-v3)" + ">HLSv3</a>";
                    } else if(url.trim().toLowerCase().match('#$')){
                        return "<a href=" + url.trim().slice(0, -1) + ")>Smooth</a>, <a href=" + url.trim().slice(0, -1) + ",format=mpd-time-csf)" + ">DASH</a>, <a href=" + url.trim().slice(0, -1) + ",format=m3u8-aapl)" + ">HLSv4</a>, <a href=" + url.trim().slice(0, -1) + ",format=m3u8-aapl-v3)" + ">HLSv3</a>";
                    } else {
                        return url;
                    }
                }
            },
            /*{
                "data": "url",
                "render": function (url, type, full, meta) {
                    if (url.trim().match('.mp4$') || url.trim().match('manifest$')) {
                        return "<a href=http://amsplayer.azurewebsites.net/oneplayer/oneplayer.html?url:=" + url.trim() + " target='_blank'>Play</a>";
                    }else{
                        return "";
                    }
                }
            },*/
            {
                "data": "copyright",
                "render": function (copyright, type, full, meta) {
                    if (copyright == "") {
                        return null;
                    } else {
                        return "<button onclick='alert(\"" + copyright + "\");'>Click</button>";
                    }
                }
            },
            { "data": "notes" }
        ],

    });

    // Add event listener for opening and closing details
    $('#example tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

} );