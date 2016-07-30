import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TraceService {
    constructor(private http: Http) {
    }

    getTraceList() {
        return this.http.get('http://localhost:2001/Trace/Get').map(res => res.json());
    }

    getTraceById(id: number) {

    }
}