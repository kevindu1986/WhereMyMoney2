///<reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', './tracelist.component', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, tracelist_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (tracelist_component_1_1) {
                tracelist_component_1 = tracelist_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(tracelist_component_1.TraceListComponent, [http_1.Http]);
        }
    }
});
