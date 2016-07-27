///<reference path="../../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {CategoryListComponent} from './categorylist.component'
import { HTTP_PROVIDERS } from 'angular2/http';

export function main(globalHost) {
    bootstrap(CategoryListComponent, [
        HTTP_PROVIDERS,
        provide('globalHost', { useValue: globalHost })
        //add more 'provide' for more javascript's variables.
    ]);
}