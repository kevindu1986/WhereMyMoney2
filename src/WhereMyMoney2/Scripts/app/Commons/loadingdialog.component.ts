import {Component, ElementRef, Inject} from 'angular2/core';

declare var $: any;

@Component({
    selector: 'loadingdialog',
    templateUrl: './pages/commons/loadingdialog.html'
})

export class LoadingDialogComponent {
    constructor(@Inject(ElementRef) private elementRef: ElementRef) {
    }

    show() {
        $(this.elementRef.nativeElement).find('#loadingDialog').modal();
    }

    hide() {
        $(this.elementRef.nativeElement).find('#loadingDialog').modal('hide');
    }
}