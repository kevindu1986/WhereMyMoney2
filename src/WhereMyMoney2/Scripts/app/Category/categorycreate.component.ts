import {Component} from 'angular2/core';
import {CategoryService} from './category.service';
import {Category} from './category';

@Component({
    selector: 'categorycreate',
    templateUrl: './pages/category/categorycreate.html',
    providers: [CategoryService]
})

export class CategoryCreateComponent {
    public formTitle: string;
    public category: Category;

    constructor(private categoryService: CategoryService) {
        this.formTitle = "Create new Category...";
        this.category = new Category();
    }   

    createNewCategory() {
        this.categoryService.createNewCategory(this.category).subscribe(data => this.refreshData(data), err => console.log(err));
    }

    refreshData(data) {
        alert(JSON.stringify(this.category));
        this.category.categoryName = "";
        this.category.description = "";
        //alert(JSON.stringify(this.category));
    }
}