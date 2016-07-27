System.register(['angular2/core', './category.service', './category'], function(exports_1, context_1) {
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
    var core_1, category_service_1, category_1;
    var CategoryCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (category_1_1) {
                category_1 = category_1_1;
            }],
        execute: function() {
            CategoryCreateComponent = (function () {
                function CategoryCreateComponent(categoryService) {
                    this.categoryService = categoryService;
                    this.formTitle = "Create new Category...";
                    this.category = new category_1.Category();
                }
                CategoryCreateComponent.prototype.createNewCategory = function () {
                    var _this = this;
                    this.categoryService.createNewCategory(this.category).subscribe(function (data) { return _this.refreshData(data); }, function (err) { return console.log(err); });
                };
                CategoryCreateComponent.prototype.refreshData = function (data) {
                    alert(JSON.stringify(this.category));
                    this.category.categoryName = "";
                    this.category.description = "";
                    //alert(JSON.stringify(this.category));
                };
                CategoryCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'categorycreate',
                        templateUrl: './pages/category/categorycreate.html',
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryCreateComponent);
                return CategoryCreateComponent;
            }());
            exports_1("CategoryCreateComponent", CategoryCreateComponent);
        }
    }
});
