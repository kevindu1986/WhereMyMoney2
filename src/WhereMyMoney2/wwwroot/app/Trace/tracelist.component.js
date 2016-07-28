System.register(['angular2/core', './trace.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, trace_service_1;
    var TraceListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (trace_service_1_1) {
                trace_service_1 = trace_service_1_1;
            }],
        execute: function() {
            TraceListComponent = (function () {
                function TraceListComponent(traceService) {
                    var _this = this;
                    this.traceService = traceService;
                    this.traceService.getTraceList().subscribe(function (data) { return _this.loadTraceList(data); }, function (err) { return console.log(err); });
                }
                TraceListComponent.prototype.loadTraceList = function (data) {
                    this.traceList = data;
                };
                TraceListComponent = __decorate([
                    core_1.Component({
                        selector: 'tracelist',
                        templateUrl: './pages/trace/tracelist.html',
                        providers: [trace_service_1.TraceService]
                    }), 
                    __metadata('design:paramtypes', [trace_service_1.TraceService])
                ], TraceListComponent);
                return TraceListComponent;
            }());
            exports_1("TraceListComponent", TraceListComponent);
        }
    }
});
//# sourceMappingURL=tracelist.component.js.map