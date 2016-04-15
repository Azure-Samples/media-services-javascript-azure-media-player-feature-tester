import {bootstrap} from 'angular2/platform/browser';
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';
import {Editor, EDITOR_PROVIDERS} from './editor';

require('./styles/main.scss')

export function main(initialHmrState?: any): Promise<any> {
  return bootstrap(Editor, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...EDITOR_PROVIDERS,
  ])
  .catch(err => console.error(err));
}

if (ENV === 'development' && HMR === true) {
  const ngHmr = require('angular2-hmr');

  ngHmr.hotModuleReplacement(main, module);
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}
