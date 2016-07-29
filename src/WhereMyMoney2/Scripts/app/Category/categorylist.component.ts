import {Component, ViewChild, AfterViewInit} from 'angular2/core';
import {CategoryService} from './category.service';
import {CategoryCreateComponent} from './categorycreate.component';
import {LoadingDialogComponent} from '../Commons/loadingdialog.component';

@Component({
    selector: 'categorylist',
    templateUrl: './pages/category/categorylist.html',
    providers: [CategoryService],
    directives: [CategoryCreateComponent, LoadingDialogComponent]
})

export class CategoryListComponent implements AfterViewInit {
    @ViewChild(CategoryCreateComponent) categoryCreate: CategoryCreateComponent;
    @ViewChild(LoadingDialogComponent) loadingDialog: LoadingDialogComponent;
    categoryList;

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategoryList().subscribe(data => this.loadTraceList(data), err => console.log(err));
        
    }

    ngAfterViewInit() {
        this.loadingDialog.show();
    }

    create() {
        this.categoryCreate.init();
        
    }

    loadTraceList(data) {
        this.categoryList = data;
        this.loadingDialog.hide();
    }
}