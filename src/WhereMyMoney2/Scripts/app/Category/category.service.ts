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

    getCategoryById(id: number) {
        return this.http.get(this.globalHost + '/' + this.route + '/' + this.controller + '/' + id.toString()).map(res => res.json());
    }

    saveCategory(category: Category) {
        let body = JSON.stringify(category);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        if (category.Id > 0) {
            return this.http.put(this.globalHost + '/' + this.route + '/' + this.controller + '/' + category.Id.toString(), body, { headers: headers }).map(res => res.json());
        }
        else {
            return this.http.post(this.globalHost + '/' + this.route + '/' + this.controller, body, { headers: headers }).map(res => res.json());
        }
    }
}