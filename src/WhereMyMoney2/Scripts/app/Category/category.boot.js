///<reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', 'angular2/core', './categorylist.component', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, categorylist_component_1, http_1;
    function main(globalHost) {
        browser_1.bootstrap(categorylist_component_1.CategoryListComponent, [
            http_1.HTTP_PROVIDERS,
            core_1.provide('globalHost', { useValue: globalHost })
        ]);
    }
    exports_1("main", main);
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (categorylist_component_1_1) {
                categorylist_component_1 = categorylist_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
        }
    }
});
