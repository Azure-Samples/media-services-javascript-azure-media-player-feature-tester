import {Component, Input, ElementRef} from 'angular2/core';

const Clipboard = require('clipboard');

@Component({
  selector: 'display-value',
  template: require('./displayValue.html'),
})
export class DisplayValue {
  @Input() value: string;
  @Input() canCopy: boolean = true;

  private rootNode: ElementRef;
  private clipboard: any;
  private input: any;
  private copyButton: any;

  constructor(private elementRef: ElementRef) {
    this.rootNode = elementRef;
  }

  ngAfterViewInit() {
    if (this.canCopy) {
      this.input = this.rootNode.nativeElement.querySelector('.readonly-input');
      this.copyButton = this.rootNode.nativeElement.querySelector('.copy-button');

      this.clipboard = new Clipboard(this.copyButton, { target: () => this.input });
    }
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }
}
