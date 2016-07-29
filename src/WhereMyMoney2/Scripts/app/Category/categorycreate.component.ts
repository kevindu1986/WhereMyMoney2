import {Component, ElementRef, Inject, ViewChild } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {CategoryService} from './category.service';
import {Category} from './category';
import {LoadingDialogComponent} from '../Commons/loadingdialog.component';

declare var $: any;

@Component({
    selector: 'categorycreate',
    templateUrl: './pages/category/categorycreate.html',
    providers: [CategoryService],
    directives: [LoadingDialogComponent]
})

export class CategoryCreateComponent {
    @ViewChild(LoadingDialogComponent) loadingDialog: LoadingDialogComponent;
    public formTitle: string;
    public category: Category;

    //Forms and Input for validation purpose.
    public categoryForm: ControlGroup;
    public categoryNameInput: Control;
    public validForm: boolean;

    constructor(private categoryService: CategoryService, @Inject(ElementRef) private elementRef: ElementRef, private builder: FormBuilder) {
        this.formTitle = 'Create new Category...';
        this.category = new Category();

        //Initialize Control and Control Group objects for Form Validation
        this.categoryNameInput = new Control('', Validators.compose([Validators.required]));
        this.categoryForm = builder.group({
            categoryNameInput: this.categoryNameInput
        });
    }   

    init() {
        this.category.categoryName = null;
        this.category.description = '';

        //Workaround for reset validation after clicking on "Create New" button
        this.validForm = true;
        this.categoryNameInput.updateValue(null);
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
            this.categoryService.createNewCategory(this.category).subscribe(data => this.refresh(data), err => console.log(err));
        }
    }

    refresh(data) {
        $(this.elementRef.nativeElement).find('#categorycreate').modal('toggle');
        this.loadingDialog.hide();
    }
}