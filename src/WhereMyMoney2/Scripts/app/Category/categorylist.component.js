System.register(['angular2/core', './category.service', './categorycreate.component'], function(exports_1, context_1) {
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
    var core_1, category_service_1, categorycreate_component_1;
    var CategoryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (categorycreate_component_1_1) {
                categorycreate_component_1 = categorycreate_component_1_1;
            }],
        execute: function() {
            CategoryListComponent = (function () {
                function CategoryListComponent(categoryService) {
                    var _this = this;
                    this.categoryService = categoryService;
                    this.categoryService.getCategoryList().subscribe(function (data) { return _this.loadTraceList(data); }, function (err) { return console.log(err); });
                }
                CategoryListComponent.prototype.loadTraceList = function (data) {
                    this.categoryList = data;
                };
                CategoryListComponent = __decorate([
                    core_1.Component({
                        selector: 'categorylist',
                        templateUrl: './pages/category/categorylist.html',
                        providers: [category_service_1.CategoryService],
                        directives: [categorycreate_component_1.CategoryCreateComponent]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryListComponent);
                return CategoryListComponent;
            }());
            exports_1("CategoryListComponent", CategoryListComponent);
        }
    }
});
