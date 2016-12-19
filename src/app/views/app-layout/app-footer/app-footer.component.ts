import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
    selector: 'app-footer',
    templateUrl: 'app-footer.component.html',
    styleUrls: ['app-footer.component.scss'],
})
export class AppFooterComponent implements OnInit, OnDestroy {
    private ngt = 'https://www.npmjs.com/package/angular-cli-tools';
    private url = 'https://github.com/littleuniversestudios/ng2-bootstrap-seed';

    constructor() {

    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
