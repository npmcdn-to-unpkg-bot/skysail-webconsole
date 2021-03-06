import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../../services/backend.service';
import {Snapshot} from '../../domain/snapshot';

declare var jQuery:any;

@Component({
    selector: 'bundles',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, NgFor, NgFormModel],
    providers: [BackendServices],
    templateUrl: 'app/html/snapshots.template.html'
})
export class SnapshotsComponent implements OnInit {

    snapshots: Snapshot[];

    constructor(private router: Router, private _backend: BackendServices) {
    }

    ngOnInit() {
        this._backend.getSnapshots()
            .subscribe(res => this.snapshots = res);
    }



}
