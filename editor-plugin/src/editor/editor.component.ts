import {Component, ViewEncapsulation} from 'angular2/core';
import {DisplayValue} from './displayValue/displayValue.component';
import {ExportResult, ExportResultModal} from './exportResultModal/exportResultModal.component';
import {SampleVideos} from './sampleVideos';

@Component({
  selector: 'editor',
  encapsulation: ViewEncapsulation.None,
  template: require('./editor.html'),
  directives: [DisplayValue, ExportResultModal]
})
export class Editor {
  shouldShowExportResultsModal: boolean = false;
  player: amp.Player;
  customURL: string = null;
  samples = SampleVideos;
  selectedSample= this.samples[0];
  exportResult: ExportResult = { title: '', description: '', videoSrc: '', markIn: '', markOut: '', thumbnail: '' };

  ngOnInit() {
    this.instantiatePlayer();
  }

  instantiatePlayer() {
    const playerOptions = {
      nativeControlsForTouch: false,
      autoplay: true,
      controls: true,
      plugins: {
        AMVE: {
          containerId: 'video-player-container',
          clipdataCallback: this.showExportResultsModal.bind(this),
          keyboardShortcutConfig: new amp.AdobePremierProShortcutConfig()
        }
      }
    };

    this.player = amp('#video-player', playerOptions);

    this.updatePlayerSrc();

    setTimeout(() => this.player.play(), 1000);
  }

  updatePlayerSrc() {
    let videoSrc = '';

    if (!this.selectedSample.isCustom) {
      videoSrc = this.selectedSample.url;
    } else {
      videoSrc = this.customURL;
    }

    this.player.src({ src: videoSrc, type: 'application/dash+xml' });
  }

  showExportResultsModal(clipData) {
    if (clipData) {
      this.exportResult.title = clipData.title;
      this.exportResult.description = clipData.description;
      this.exportResult.videoSrc = clipData.src;
      this.exportResult.markIn = clipData.markIn;
      this.exportResult.markOut = clipData.markOut;
      this.exportResult.thumbnail = clipData.thumbnail ? clipData.thumbnail.dataUrl : null;

      this.shouldShowExportResultsModal = true;
    }
  }

  closeExportResultsModal() {
    this.shouldShowExportResultsModal = false;
  }
}
