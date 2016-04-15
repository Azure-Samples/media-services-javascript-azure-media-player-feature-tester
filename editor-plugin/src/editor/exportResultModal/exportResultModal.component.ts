import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {DisplayValue} from '../displayValue/displayValue.component.ts';

export interface ExportResult {
  title: string;
  description: string;
  videoSrc: string;
  markIn: string;
  markOut: string;
  thumbnail?: string;
}

@Component({
  selector: 'export-result-modal',
  template: require('./exportResultModal.html'),
  directives: [DisplayValue]
})
export class ExportResultModal {
  @Input() result: ExportResult;
  @Output() closeRequest: EventEmitter<any> = new EventEmitter();

  close() {
    this.closeRequest.emit(true);
  }
}
