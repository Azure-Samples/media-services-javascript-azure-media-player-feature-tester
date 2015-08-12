/*! videojs-progressTips - v0.1.0 - 2013-09-16
* https://github.com/mickey/videojs-progressTips
* Copyright (c) 2013 Michael Bensoussan; Licensed MIT */

(function () {

    amp.plugin('progressTips', function (options) {
        var init;
        init = function () {
            var player = this;

            var progressTimeTip = document.createElement('div');
            progressTimeTip.className = "amp-time-tip";

            var progressTimeTipInner = document.createElement('div');
            progressTimeTipInner.className = "amp-time-tip-inner";

            progressTimeTip.appendChild(progressTimeTipInner);
            player.controlBar.el().appendChild(progressTimeTip);
            
            //Styling
            progressTimeTip.style.visibility = "hidden";
            progressTimeTip.style.display = "block";
            progressTimeTip.style.opacity = "1";
            progressTimeTip.style.fontSize = "11px";
            progressTimeTip.style.position = "absolute";
            progressTimeTip.style.zIndex = "100000";
            progressTimeTip.style.minWidth = "40px";
            progressTimeTipInner.style.padding = "4px 8px";
            progressTimeTipInner.style.backgroundColor = "#3c454f";
            progressTimeTipInner.style.color = "white";
            progressTimeTipInner.style.maxWidth = "200px";
            progressTimeTipInner.style.textAlign = "center";


            var mouseX;

            var timeTipUpdate = function (event) {
                var hours, minutes, seconds, seekBar, timeInSeconds, offset, hoursColon, minutesColon;
                seekBar = player.controlBar.progressControl.seekBar;
                offset = seekBar.el().getBoundingClientRect();

                if (event.type == "mousemove") {
                    mouseX = event.pageX;
                }

                var mousePosition = (mouseX - offset.left) / seekBar.width();
                timeInSeconds = mousePosition * player.duration();

                if (timeInSeconds === player.duration()) {
                    timeInSeconds = timeInSeconds - 0.1;
                }

                if (player.isLive() && timeInSeconds > player.duration() - /*player.currentPlayerSettingValue("liveEdgePlaybackThreshold") - */player.currentPlayerSettingValue("livePlaybackOffsetInSec")) {
                    progressTimeTipInner.innerHTML = "LIVE";
                } else {

                    hours = Math.floor(timeInSeconds / 60 / 60);
                    minutes = Math.floor(timeInSeconds / 60) % 60;
                    seconds = Math.floor(timeInSeconds) % 60;
                    hoursColon = ":";
                    minutesColon = ":";

                    if (hours == 0) {
                        hours = "";
                        hoursColon = "";
                    } else {
                        if (minutes < 10) {
                            minutes = "0" + minutes;
                        }
                    }

                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }

                    progressTimeTipInner.innerHTML = hours + hoursColon + minutes + minutesColon + seconds;
                }
                progressTimeTip.style.top = -1 * (player.controlBar.el().offsetHeight + 4) + "px";
                

                if (mouseX - offset.left < 0.625 * progressTimeTip.offsetWidth) {
                    progressTimeTip.style.left = "0px";

                } else if (seekBar.el().offsetWidth - mouseX + offset.left < 0.625 * progressTimeTip.offsetWidth) {
                    progressTimeTip.style.left = seekBar.el().offsetWidth - progressTimeTip.offsetWidth + "px";
                } else {
                    progressTimeTip.style.left = mouseX - offset.left - (progressTimeTip.offsetWidth / 2) + "px";
                }
                progressTimeTip.style.visibility = "visible";
            }

            player.addEventListener("durationchange", function (event) {
                if (progressTimeTip.style.visibility !== "hidden") {
                    timeTipUpdate(event);
                }
            });
            player.controlBar.progressControl.seekBar.el().addEventListener("mousemove", timeTipUpdate);
            player.controlBar.progressControl.el().addEventListener("mouseout", function () {
                progressTimeTip.style.visibility = "hidden";
            });
        };
        this.addEventListener("loadeddata", init);
    });

}).call(this);
