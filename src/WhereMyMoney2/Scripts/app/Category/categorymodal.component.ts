import {Component, ElementRef, Inject, ViewChild, Input } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {CategoryService} from './category.service';
import {Category} from './category';
import {LoadingDialogComponent} from '../Commons/loadingdialog.component';

declare var $: any;

@Component({
    selector: 'categorymodal',
    templateUrl: './pages/category/categorymodal.html',
    providers: [CategoryService],
    directives: [LoadingDialogComponent]
})

export class CategoryModalComponent {
    @ViewChild(LoadingDialogComponent) loadingDialog: LoadingDialogComponent;
    @Input() categoryList;
    public formTitle: string;
    public category: Category;

    //Forms and Input for validation purpose.
    public categoryForm: ControlGroup;
    public categoryNameInput: Control;
    public validForm: boolean;

    constructor(private categoryService: CategoryService, @Inject(ElementRef) private elementRef: ElementRef, private builder: FormBuilder) {
        this.category = new Category();

        //Initialize Control and Control Group objects for Form Validation
        this.categoryNameInput = new Control('', Validators.compose([Validators.required]));
        this.categoryForm = builder.group({
            categoryNameInput: this.categoryNameInput
        });
    }   

    initCreateMode() {
        this.formTitle = 'Create new Category...';

        this.category.Id = 0;
        this.category.CategoryName = null;
        this.category.Description = '';

        //Workaround for reset validation after clicking on "Create New" button
        this.validForm = true;
        this.categoryNameInput.updateValue(null);
    }

    initEditMode(id : number) {
        this.formTitle = 'Edit Category...';
        this.loadingDialog.show();

        this.categoryService.getCategoryById(id).subscribe(data => this.bindAfterGet(data), err => console.log(err));
    }

    bindAfterGet(data) {
        let bindItem: Category;
        bindItem = JSON.parse(JSON.stringify(data));

        this.category.Id = bindItem.Id;
        this.category.CategoryName = bindItem.CategoryName;
        this.category.Description = bindItem.Description;

        //Workaround for reset validation after clicking on "Update" button
        this.validForm = true;
        this.categoryNameInput.updateValue(this.category.CategoryName);

        this.loadingDialog.hide();
    }

    save() {
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
            this.categoryService.saveCategory(this.category).subscribe(data => this.refreshAfterSave(data), err => console.log(err));
        }
    }

    refreshAfterSave(data) {
        $(this.elementRef.nativeElement).find('#categorymodal').modal('toggle');

        alert(JSON.stringify(this.categoryList));

        //this.categoryList.
        this.loadingDialog.hide();
    }
}