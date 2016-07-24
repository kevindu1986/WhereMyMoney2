import {Component} from 'angular2/core';
import {CategoryService} from './category.service';

@Component({
    selector: 'categorycreate',
    templateUrl: './pages/category/categorycreate.html',
    providers: [CategoryService]
})

export class CategoryCreateComponent {
}