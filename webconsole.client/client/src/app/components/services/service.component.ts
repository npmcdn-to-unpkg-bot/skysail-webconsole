import {Component, OnInit,ElementRef} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, NgFor, NgFormModel} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {BackendServices} from '../../services/backend.service';
import {Bundle} from '../../domain/bundle';
import {KeyValue} from '../../domain/keyValue';
import {Service} from '../../domain/service';
import {Tabs} from '../../components/tabs';
import {Tab} from '../../components/tab';

import {DerpPipe} from '../../pipes/derp.pipe';

@Component({
    selector: 'service',
    directives: [FORM_DIRECTIVES, NgFor, NgFormModel,Tabs, Tab],
    pipes: [DerpPipe],
    providers: [BackendServices, HTTP_PROVIDERS],
    templateUrl: 'app/html/services/service.template.html'
})
export class ServiceComponent implements OnInit {

    isLoading = true;
    service: Service = new Service();
    properties: KeyValue[] = [];
    usingBundles: Bundle[] = [];

    constructor(private router: Router, private _backend: BackendServices) {
    }

    onSelect(bundleId: string) {
        this.router.navigate( ['Bundle', { id: bundleId }]  );
    }
    
    ngOnInit() {
        let id = 4;//this._routeParams.get('id');
        
        this._backend.getService(id)
            .subscribe(res => {
                this.service = res;
                var props = <Map<string,string>>res.properties;
                for (var key in props) {
                    this.properties.push(new KeyValue(key,props[key]));
                };
                this.usingBundles = <Bundle[]>res.usingBundles;
                this.isLoading = false;
            }
        );
    }
}
