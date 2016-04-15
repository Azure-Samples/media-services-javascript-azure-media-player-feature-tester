import {provide, PLATFORM_PIPES} from 'angular2/core';

export const APPLICATION_PIPES = [];

export const PIPES = [
  provide(PLATFORM_PIPES, {useValue: APPLICATION_PIPES, multi: true})
];
