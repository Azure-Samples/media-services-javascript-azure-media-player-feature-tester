var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EventDataModel;
(function (EventDataModel) {
    var EventBase = (function () {
        function EventBase(sessionID, streamID, eventType, isRealtime, timestamp) {
            if (eventType === void 0) { eventType = 'EventBase'; }
            if (isRealtime === void 0) { isRealtime = false; }
            if (timestamp === void 0) { timestamp = new Date().toUTCString(); }
            this.eventType = eventType;
            this.sessionID = sessionID;
            //URLENCODE
            //this.streamID = encodeURI(streamID);
            //TMP encodeURIComponent
            this.streamID = encodeURIComponent(streamID);
            this.timestamp = timestamp;
            this.isRealtime = isRealtime;
        }
        return EventBase;
    })();
    EventDataModel.EventBase = EventBase;
})(EventDataModel || (EventDataModel = {}));
var EventDataModel;
(function (EventDataModel) {
    var Demographics;
    (function (Demographics) {
        var SourceLoadedEvent = (function (_super) {
            __extends(SourceLoadedEvent, _super);
            function SourceLoadedEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'SourceLoadedEvent', true);
            }
            return SourceLoadedEvent;
        })(EventDataModel.EventBase);
        Demographics.SourceLoadedEvent = SourceLoadedEvent;
        var PlaybackInfoEvent = (function (_super) {
            __extends(PlaybackInfoEvent, _super);
            function PlaybackInfoEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'PlaybackInfoEvent');
            }
            return PlaybackInfoEvent;
        })(EventDataModel.EventBase);
        Demographics.PlaybackInfoEvent = PlaybackInfoEvent;
    })(Demographics = EventDataModel.Demographics || (EventDataModel.Demographics = {}));
})(EventDataModel || (EventDataModel = {}));
var EventDataModel;
(function (EventDataModel) {
    var QoE;
    (function (QoE) {
        var PlayerSnapshot = (function () {
            function PlayerSnapshot(currentBufferSize, perceivedBandwidth) {
                this.currentBufferSize = currentBufferSize;
                this.perceivedBandwidth = perceivedBandwidth;
            }
            return PlayerSnapshot;
        })();
        QoE.PlayerSnapshot = PlayerSnapshot;
        var NetworkInfoEvent = (function (_super) {
            __extends(NetworkInfoEvent, _super);
            function NetworkInfoEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'NetworkInfoEvent');
            }
            return NetworkInfoEvent;
        })(EventDataModel.EventBase);
        QoE.NetworkInfoEvent = NetworkInfoEvent;
        var TimeToReadyEvent = (function (_super) {
            __extends(TimeToReadyEvent, _super);
            function TimeToReadyEvent(base, timeToReady) {
                _super.call(this, base.sessionID, base.streamID, 'TimeToReadyEvent');
                this.timeToReady = timeToReady;
            }
            return TimeToReadyEvent;
        })(EventDataModel.EventBase);
        QoE.TimeToReadyEvent = TimeToReadyEvent;
        var ErrorEvent = (function (_super) {
            __extends(ErrorEvent, _super);
            function ErrorEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'ErrorEvent');
            }
            return ErrorEvent;
        })(EventDataModel.EventBase);
        QoE.ErrorEvent = ErrorEvent;
        var RebufferingEvent = (function (_super) {
            __extends(RebufferingEvent, _super);
            function RebufferingEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'RebufferingEvent');
            }
            return RebufferingEvent;
        })(EventDataModel.EventBase);
        QoE.RebufferingEvent = RebufferingEvent;
        var OtherDownloadEvent = (function (_super) {
            __extends(OtherDownloadEvent, _super);
            function OtherDownloadEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'OtherDownloadEvent');
            }
            return OtherDownloadEvent;
        })(EventDataModel.EventBase);
        QoE.OtherDownloadEvent = OtherDownloadEvent;
        var ChunkDownloadEvent = (function (_super) {
            __extends(ChunkDownloadEvent, _super);
            function ChunkDownloadEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'ChunkDownloadEvent');
            }
            return ChunkDownloadEvent;
        })(EventDataModel.EventBase);
        QoE.ChunkDownloadEvent = ChunkDownloadEvent;
        var DownloadBitrateChangedEvent = (function (_super) {
            __extends(DownloadBitrateChangedEvent, _super);
            function DownloadBitrateChangedEvent(base, newBandwidth, oldBandwidth, dir) {
                _super.call(this, base.sessionID, base.streamID, 'DownloadBitrateChangedEvent');
                this.direction = dir;
                this.newBandwidth = newBandwidth;
                this.oldBandwidth = oldBandwidth;
            }
            return DownloadBitrateChangedEvent;
        })(EventDataModel.EventBase);
        QoE.DownloadBitrateChangedEvent = DownloadBitrateChangedEvent;
    })(QoE = EventDataModel.QoE || (EventDataModel.QoE = {}));
})(EventDataModel || (EventDataModel = {}));
var EventDataModel;
(function (EventDataModel) {
    var Engagement;
    (function (Engagement) {
        var UserExitEvent = (function (_super) {
            __extends(UserExitEvent, _super);
            function UserExitEvent(base, absoluteCurrentTime) {
                _super.call(this, base.sessionID, base.streamID, 'UserExitEvent');
                this.absoluteCurrentTime = absoluteCurrentTime;
            }
            return UserExitEvent;
        })(EventDataModel.EventBase);
        Engagement.UserExitEvent = UserExitEvent;
        var EndedEvent = (function (_super) {
            __extends(EndedEvent, _super);
            function EndedEvent(base, absoluteCurrentTime) {
                _super.call(this, base.sessionID, base.streamID, 'EndedEvent');
                this.absoluteCurrentTime = absoluteCurrentTime;
            }
            return EndedEvent;
        })(EventDataModel.EventBase);
        Engagement.EndedEvent = EndedEvent;
        var PlayEvent = (function (_super) {
            __extends(PlayEvent, _super);
            function PlayEvent(base, absoluteCurrentTime) {
                _super.call(this, base.sessionID, base.streamID, 'PlayEvent', true);
                this.absoluteCurrentTime = absoluteCurrentTime;
            }
            return PlayEvent;
        })(EventDataModel.EventBase);
        Engagement.PlayEvent = PlayEvent;
        var PauseEvent = (function (_super) {
            __extends(PauseEvent, _super);
            function PauseEvent(base, absoluteCurrentTime) {
                _super.call(this, base.sessionID, base.streamID, 'PauseEvent');
                this.absoluteCurrentTime = absoluteCurrentTime;
            }
            return PauseEvent;
        })(EventDataModel.EventBase);
        Engagement.PauseEvent = PauseEvent;
        var StopEvent = (function (_super) {
            __extends(StopEvent, _super);
            function StopEvent(base, absoluteCurrentTime) {
                _super.call(this, base.sessionID, base.streamID, 'StopEvent');
                this.absoluteCurrentTime = absoluteCurrentTime;
            }
            return StopEvent;
        })(EventDataModel.EventBase);
        Engagement.StopEvent = StopEvent;
        var ResizeEvent = (function (_super) {
            __extends(ResizeEvent, _super);
            function ResizeEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'ResizeEvent');
            }
            return ResizeEvent;
        })(EventDataModel.EventBase);
        Engagement.ResizeEvent = ResizeEvent;
        var WatchIntervalEvent = (function (_super) {
            __extends(WatchIntervalEvent, _super);
            function WatchIntervalEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'WatchIntervalEvent');
            }
            return WatchIntervalEvent;
        })(EventDataModel.EventBase);
        Engagement.WatchIntervalEvent = WatchIntervalEvent;
        //TMP
        var HertBitEvent = (function (_super) {
            __extends(HertBitEvent, _super);
            function HertBitEvent(base) {
                _super.call(this, base.sessionID, base.streamID, 'HeartbeatEvent');

            }
            return HertBitEvent;
        })(EventDataModel.EventBase);
        Engagement.HertBitEvent = HertBitEvent;
    })(Engagement = EventDataModel.Engagement || (EventDataModel.Engagement = {}));
})(EventDataModel || (EventDataModel = {}));
//# sourceMappingURL=DataModel.js.map