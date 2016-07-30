System.register(['angular2/core', 'angular2/common', './category.service', './category', '../Commons/loadingdialog.component'], function(exports_1, context_1) {
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
    var core_1, common_1, category_service_1, category_1, loadingdialog_component_1;
    var CategoryModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (category_1_1) {
                category_1 = category_1_1;
            },
            function (loadingdialog_component_1_1) {
                loadingdialog_component_1 = loadingdialog_component_1_1;
            }],
        execute: function() {
            CategoryModalComponent = (function () {
                function CategoryModalComponent(categoryService, elementRef, builder) {
                    this.categoryService = categoryService;
                    this.elementRef = elementRef;
                    this.builder = builder;
                    this.category = new category_1.Category();
                    //Initialize Control and Control Group objects for Form Validation
                    this.categoryNameInput = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required]));
                    this.categoryForm = builder.group({
                        categoryNameInput: this.categoryNameInput
                    });
                }
                CategoryModalComponent.prototype.initCreateMode = function () {
                    this.formTitle = 'Create new Category...';
                    this.category.Id = 0;
                    this.category.CategoryName = null;
                    this.category.Description = '';
                    //Workaround for reset validation after clicking on "Create New" button
                    this.validForm = true;
                    this.categoryNameInput.updateValue(null);
                };
                CategoryModalComponent.prototype.initEditMode = function (id) {
                    var _this = this;
                    this.formTitle = 'Edit Category...';
                    this.loadingDialog.show();
                    this.categoryService.getCategoryById(id).subscribe(function (data) { return _this.bindAfterGet(data); }, function (err) { return console.log(err); });
                };
                CategoryModalComponent.prototype.bindAfterGet = function (data) {
                    var bindItem;
                    bindItem = JSON.parse(JSON.stringify(data));
                    this.category.Id = bindItem.Id;
                    this.category.CategoryName = bindItem.CategoryName;
                    this.category.Description = bindItem.Description;
                    //Workaround for reset validation after clicking on "Update" button
                    this.validForm = true;
                    this.categoryNameInput.updateValue(this.category.CategoryName);
                    this.loadingDialog.hide();
                };
                CategoryModalComponent.prototype.save = function () {
                    var _this = this;
                    //Workaround for reset validation after clicking on "Create New" button
                    //When clicking on Create new button and not assign any value to inputs yet, click "Save" and it will perform the validation.
                    if (this.categoryNameInput.value == undefined || this.categoryNameInput.value == null) {
                        this.categoryNameInput.updateValue('');
                        this.categoryNameInput.markAsDirty();
                    }
                    this.validForm = true;
                    if (!this.categoryForm.valid) {
                        this.validForm = false;
                    }
                    if (this.validForm) {
                        this.loadingDialog.show();
                        this.categoryService.saveCategory(this.category).subscribe(function (data) { return _this.refreshAfterSave(data); }, function (err) { return console.log(err); });
                    }
                };
                CategoryModalComponent.prototype.refreshAfterSave = function (data) {
                    $(this.elementRef.nativeElement).find('#categorycreate').modal('toggle');
                    this.loadingDialog.hide();
                };
                __decorate([
                    core_1.ViewChild(loadingdialog_component_1.LoadingDialogComponent), 
                    __metadata('design:type', loadingdialog_component_1.LoadingDialogComponent)
                ], CategoryModalComponent.prototype, "loadingDialog", void 0);
                CategoryModalComponent = __decorate([
                    core_1.Component({
                        selector: 'categorymodal',
                        templateUrl: './pages/category/categorymodal.html',
                        providers: [category_service_1.CategoryService],
                        directives: [loadingdialog_component_1.LoadingDialogComponent]
                    }),
                    __param(1, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService, core_1.ElementRef, common_1.FormBuilder])
                ], CategoryModalComponent);
                return CategoryModalComponent;
            }());
            exports_1("CategoryModalComponent", CategoryModalComponent);
        }
    }
});
