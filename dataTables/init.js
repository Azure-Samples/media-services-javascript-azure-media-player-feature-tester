/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    var expandedData = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
    if (d.videoCodec != "") {
        expandedData += '<tr>' + '<td>Video Codec:</td>' + '<td>' + d.videoCodec + '</td>' + '</tr>';
    }
    if (d.audioCodec != "") {
        expandedData += '<tr>' + '<td>Audio Codec:</td>' + '<td>' + d.audioCodec + '</td>' + '</tr>';
    }
    if (d.timescale != "") {
        expandedData += '<tr>' + '<td>Time Scale:</td>' + '<td>' + d.timescale + '</td>' + '</tr>';
    }
    if (d.qualityLevels != "") {
        expandedData += '<tr>' + '<td>Quality Levels:</td>' + '<td>' + d.qualityLevels + '</td>' + '</tr>';
    }
    if (d.audioTracks != "") {
        expandedData += '<tr>' + '<td>No. of Audio Streams:</td>' + '<td>' + d.audioTracks + '</td>' + '</tr>';
    }
    if (d.subTracks != "") {
        expandedData += '<tr>' + '<td>No. of Subtitle Tracks:</td>' + '<td>' + d.subTracks + '</td>' + '</tr>';
    }
    if (d.encoder != "") {
        expandedData += '<tr>' + '<td>Encoder:</td>' + '<td>' + d.encoder + '</td>' + '</tr>';
    }
    if (d.profile != "") {
        expandedData += '<tr>' + '<td>Encoding Profile:</td>' + '<td>' + d.profile + '</td>' + '</tr>';
    }
    if (d.encodingPreset != "") {
        expandedData += '<tr>' + '<td>Encoding Preset:</td>' + '<td>' + d.encodingPreset + '</td>' + '</tr>';
    }
    if (d.cbrvbr != "") {
        expandedData += '<tr>' + '<td>CBR or VBR:</td>' + '<td>' + d.cbrvbr + '</td>' + '</tr>';
    }
    if (d.contentProtection.toLowerCase() != "none") {
        expandedData += '<tr>' + '<td>Content Protection:</td>' + '<td>' + d.contentProtection + '</td>' + '</tr>';
    }
    if (d.token != "") {
        expandedData += '<tr>' + '<td>Token:</td>' + '<td>' + d.token + '</td>' + '</tr>';
    }
    if (d.notes != "") {
        expandedData += '<tr>' + '<td>Notes:</td>' + '<td>' + d.notes + '</td>' + '</tr>';
    }
    //if (d. != "") {
    //    expandedData += '<tr>' + '<td>:</td>' + '<td>' + d. + '</td>' + '</tr>';
    //}

    return expandedData;
}

$(document).ready(function () {
        var table = $('#example').DataTable( {
        "ajax": "dataTables/data/amsStreams.txt",
        paging: false,
        jQueryUI: true,
        //responsive: true,
        //responsive: {
        //    details: false
        //},

        "order": [1, 'asc'],

        "columns": [
            {
                "class": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "content" },
            { "data": "type" },
            { "data": "advanced" },
            { "visible": false, "data": "videoCodec" },
            { "visible": false, "data": "audioCodec" },
            { "data": "length" },
            //{ "data": "duration" },
            { "visible": false, "data": "timescale" },
            //{ "data": "qualityLevels" },
            {
                "orderable": false,
                "data": "maxResolution"
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
                "data": "encodingPreset",
                "render": function (preset, type, full, meta) {
                    if (preset=="") {
                        return "N/A";
                    } else{
                        return preset;
                    }
                }
            },
            { "visible": false, "data": "cbrvbr" },
            { "data": "contentProtection" },
            { "visible": false, "data": "token" },
            //{ "data": "other" },
            
            {
                "data": "url",
                "render": function (url, type, full, meta) {
                    if (url.trim().toLowerCase().match('.mp4$')) {
                        return "<a href=" + url.trim() + ">MP4</a>";
                    } else if (url.trim().toLowerCase().match('manifest$')) {
                        return "<a href=" + url.trim() + ">Smooth</a>, <a href=" + url.trim() + "(format=mpd-time-csf)" + ">DASH</a>, <a href=" + url.trim() + "(format=m3u8-aapl)" + ">HLSv4</a>, <a href=" + url.trim() + "(format=m3u8-aapl=v3)" + ">HLSv3</a>";
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