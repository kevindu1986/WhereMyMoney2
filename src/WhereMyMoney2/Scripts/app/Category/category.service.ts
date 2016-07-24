import { Injectable, Inject } from 'angular2/core'
import { Http } from 'angular2/http';
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
}