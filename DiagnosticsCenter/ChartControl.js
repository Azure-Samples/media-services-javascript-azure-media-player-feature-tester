var AmpDiagnosticCenter;
(function (AmpDiagnosticCenter) {
    (function (ChartControl) {
        "use strict";

        var bwGraph = null;
        var bufferGraph = null;
        var bitrateEventGraph = null;

        var graphs = [];
        var graphData = [];
        var startTime = Date.now();

        var bwGraphData = [];
        var bufferGraphData = [];

        function SetupCharts() {
            bwGraph = new Dygraph(document.getElementById("BWGraphsDiv"), bwGraphData, {
                labels: ['time', 'MeasuredBW', 'AverageBW', 'DownloadBR', 'PlaybackBR'],
                strokeWidth: 2,
                drawPoints: true,
                pointSize: 3,
                ylabel: 'Bandwidth(Mbps)',
                y2label: 'Bitrate(Mbps)',
                y2LabelWidth: 30,
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
                labels: ['time', 'videoBuffer', 'audioBuffer'],
                strokeWidth: 2,
                drawPoints: true,
                pointSize: 3,
                ylabel: 'buffer(s)',
                y2LabelWidth: 30,
                labelsKMB: true,
                labelsDiv: 'BufferGraphsLegendDiv',
                legend: 'always',
                axes: {
                    y: {}
                }
            });
            graphs.push(bufferGraph);

            var sync = Dygraph.synchronize(graphs, {
                zoom: false,
                selection: true
            });

            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.loadedmetadata, registerBufferDataEvents);
            AmpDiagnosticCenter.myPlayer.addEventListener(amp.eventName.playbackbitratechanged, handleBufferData);
        }
        ChartControl.SetupCharts = SetupCharts;

        function registerBufferDataEvents() {
            var bufferData = AmpDiagnosticCenter.myPlayer.videoBufferData();
            if (bufferData) {
                bufferData.addEventListener(amp.bufferDataEventName.downloadcompleted, handleBufferData);
            }
        }

        function handleBufferData() {
            var bufferData = AmpDiagnosticCenter.myPlayer.videoBufferData();
            if (bufferData) {
                var completed = bufferData.downloadCompleted;
                var download = completed.mediaDownload;

                if (bwGraphData.length > 30) {
                    bwGraphData.shift();
                }

                if (bufferGraphData.length > 30) {
                    bufferGraphData.shift();
                }

                bwGraphData.push([(Date.now() - startTime) / 1000, completed.measuredBandwidth, bufferData.perceivedBandwidth, download.bitrate, AmpDiagnosticCenter.myPlayer.currentPlaybackBitrate()]);
                bufferGraphData.push([(Date.now() - startTime) / 1000, bufferData.bufferLevel, AmpDiagnosticCenter.myPlayer.audioBufferData().bufferLevel]);

                bwGraph.updateOptions({ file: bwGraphData });
                bufferGraph.updateOptions({ file: bufferGraphData });
            }
        }

        function ClearCharts() {
            bwGraphData.length = 0;
            bufferGraphData.length = 0;

            for (var i = 0; i < graphs.length; i++) {
                var data = [];
                graphs[i].updateOptions({ file: data });
            }
        }
        ChartControl.ClearCharts = ClearCharts;
    })(AmpDiagnosticCenter.ChartControl || (AmpDiagnosticCenter.ChartControl = {}));
    var ChartControl = AmpDiagnosticCenter.ChartControl;
})(AmpDiagnosticCenter || (AmpDiagnosticCenter = {}));
