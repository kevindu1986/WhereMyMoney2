import {Component, ViewChild, AfterViewInit} from 'angular2/core';
import {CategoryService} from './category.service';
import {CategoryModalComponent} from './categorymodal.component';
import {LoadingDialogComponent} from '../Commons/loadingdialog.component';

@Component({
    selector: 'categorylist',
    templateUrl: './pages/category/categorylist.html',
    providers: [CategoryService],
    directives: [CategoryModalComponent, LoadingDialogComponent]
})

export class CategoryListComponent implements AfterViewInit {
    @ViewChild(CategoryModalComponent) categoryModal: CategoryModalComponent;
    @ViewChild(LoadingDialogComponent) loadingDialog: LoadingDialogComponent;
    categoryList;

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategoryList().subscribe(data => this.loadTraceList(data), err => console.log(err));
        
    }

    ngAfterViewInit() {
        this.loadingDialog.show();
    }

    create() {
        this.categoryModal.initCreateMode();
    }

    edit(id : number) {
        this.categoryModal.initEditMode(id);
    }

    loadTraceList(data) {
        this.categoryList = data;
        this.loadingDialog.hide();
    }
}