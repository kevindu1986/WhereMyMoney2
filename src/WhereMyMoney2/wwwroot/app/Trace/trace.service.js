System.register(["angular2/core","angular2/http","rxjs/add/operator/map"],function(a,b){"use strict";var c,d,e,f=(b&&b.id,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),g=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};return{setters:[function(a){c=a},function(a){d=a},function(a){}],execute:function(){e=function(){function a(a){this.http=a}return a.prototype.getTraceList=function(){return this.http.get("http://localhost:2001/Trace/Get").map(function(a){return a.json()})},a=f([c.Injectable(),g("design:paramtypes",[d.Http])],a)}(),a("TraceService",e)}}});
//# sourceMappingURL=trace.service.js.map