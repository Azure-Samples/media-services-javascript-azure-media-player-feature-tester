import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';

export const APPLICATION_DIRECTIVES = [];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
