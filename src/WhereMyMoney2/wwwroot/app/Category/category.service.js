System.register(["angular2/core","angular2/http","rxjs/add/operator/map"],function(a,b){"use strict";var c,d,e,f=(b&&b.id,this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),g=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},h=this&&this.__param||function(a,b){return function(c,d){b(c,d,a)}};return{setters:[function(a){c=a},function(a){d=a},function(a){}],execute:function(){e=function(){function a(a,b){this.http=a,this.globalHost=b,this.controller="CategoryApi",this.route="api"}return a.prototype.getCategoryList=function(){return this.http.get(this.globalHost+"/"+this.route+"/"+this.controller).map(function(a){return a.json()})},a=f([c.Injectable(),h(1,c.Inject("globalHost")),g("design:paramtypes",[d.Http,String])],a)}(),a("CategoryService",e)}}});
//# sourceMappingURL=category.service.js.map