import { Injectable, Inject } from 'angular2/core'
import { Http, Headers } from 'angular2/http';
import { Category } from './category'
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    controller = 'CategoryApi';
    route = 'api';

    constructor(private http: Http, @Inject('globalHost') private globalHost: string) {
    }

    getCategoryList() {
        return this.http.get(this.globalHost + '/' + this.route + '/' + this.controller).map(res => res.json());
    }

    createNewCategory(category: Category) {
        let body = JSON.stringify(category);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        return this.http.post(this.globalHost + '/' + this.route + '/' + this.controller, body, { headers: headers }).map(res => res.json());
    }
}