System.register(["angular2/core","./trace.service"],function(a,b){"use strict";var c,d,e,f=(b&&b.id,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),g=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a){var b=this;this.traceService=a,this.traceService.getTraceList().subscribe(function(a){return b.loadTraceList(a)},function(a){return console.log(a)})}return a.prototype.loadTraceList=function(a){this.traceList=a},a=f([c.Component({selector:"tracelist",templateUrl:"./pages/trace/tracelist.html",providers:[d.TraceService]}),g("design:paramtypes",[d.TraceService])],a)}(),a("TraceListComponent",e)}}});
//# sourceMappingURL=tracelist.component.js.map