import {Component} from 'angular2/core';
import {CategoryService} from './category.service';
import {CategoryCreateComponent} from './categorycreate.component';

@Component({
    selector: 'categorylist',
    templateUrl: './pages/category/categorylist.html',
    providers: [CategoryService],
    directives: [CategoryCreateComponent]
})

export class CategoryListComponent  {
    categoryList;

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategoryList().subscribe(data => this.loadTraceList(data), err => console.log(err));
    }

    loadTraceList(data) {
        this.categoryList = data;
    }
}