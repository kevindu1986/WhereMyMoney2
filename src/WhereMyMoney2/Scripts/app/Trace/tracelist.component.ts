import {Component} from 'angular2/core';
import {TraceService} from './trace.service';

@Component({
    selector: 'tracelist',
    templateUrl: './pages/trace/tracelist.html',
    providers: [TraceService]
})

export class TraceListComponent  {
    traceList;

    constructor(private traceService: TraceService) {
        this.traceService.getTraceList().subscribe(data => this.loadTraceList(data), err => console.log(err));
    }

    loadTraceList(data) {
        this.traceList = data;
    }
}