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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
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
                function CategoryCreateComponent(categoryService, elementRef) {
                    this.categoryService = categoryService;
                    this.elementRef = elementRef;
                    this.formTitle = "Create new Category...";
                    this.category = new category_1.Category();
                }
                CategoryCreateComponent.prototype.ngOnInit = function () {
                };
                CategoryCreateComponent.prototype.createNewCategory = function () {
                    var _this = this;
                    this.categoryService.createNewCategory(this.category).subscribe(function (data) { return _this.refreshData(data); }, function (err) { return console.log(err); });
                };
                CategoryCreateComponent.prototype.refreshData = function (data) {
                    this.category.categoryName = "";
                    this.category.description = "";
                    $(this.elementRef.nativeElement).find('#categorycreate').modal('toggle');
                };
                CategoryCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'categorycreate',
                        templateUrl: './pages/category/categorycreate.html',
                        providers: [category_service_1.CategoryService]
                    }),
                    __param(1, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService, core_1.ElementRef])
                ], CategoryCreateComponent);
                return CategoryCreateComponent;
            }());
            exports_1("CategoryCreateComponent", CategoryCreateComponent);
        }
    }
});
//# sourceMappingURL=categorycreate.component.js.map