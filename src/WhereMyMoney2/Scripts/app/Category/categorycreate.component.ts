import {Component, ElementRef, Inject, OnInit} from 'angular2/core';
import {CategoryService} from './category.service';
import {Category} from './category';

declare var $: any;

@Component({
    selector: 'categorycreate',
    templateUrl: './pages/category/categorycreate.html',
    providers: [CategoryService]
})

export class CategoryCreateComponent implements OnInit {
    public formTitle: string;
    public category: Category;

    constructor(private categoryService: CategoryService, @Inject(ElementRef) private elementRef: ElementRef) {
        this.formTitle = "Create new Category...";
        this.category = new Category();
    }   

    ngOnInit() {
    }

    createNewCategory() {
        this.categoryService.createNewCategory(this.category).subscribe(data => this.refreshData(data), err => console.log(err));
    }

    refreshData(data) {
        this.category.categoryName = "";
        this.category.description = "";
        $(this.elementRef.nativeElement).find('#categorycreate').modal('toggle');
    }
}