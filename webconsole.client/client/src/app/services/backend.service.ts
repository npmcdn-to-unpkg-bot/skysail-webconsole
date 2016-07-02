import {Injectable, OnInit} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Bundle} from '../domain/bundle';
import {ExportPackage} from '../domain/exportPackage';
import {LogEntry} from '../domain/logEntry';
import {Service} from '../domain/service';
import {Snapshot} from '../domain/snapshot';

import {ConfigService} from '../services/config.service';

@Injectable()
export class BackendServices {

    private _baseUrl = '';

    constructor(private _http: Http, private _config: ConfigService) {
        console.log("BackendServices constructor");
        this._baseUrl = "http://" + this._config.host + ":" + this._config.port + "/";
        console.log("base url set to '" + this._baseUrl + "'");
    }

    /*ngOnInit() {
        console.log("BackendServices onInit");
        this._baseUrl = "http://" + this._config.host + ":" + this._config.port + "/";
        console.log("base url set to '" + this._baseUrl + "'");
    }*/

    get(path) {
        var headers = new Headers();
        //headers.append('Authorization', 'Basic YWRtaW46c2t5c2FpbA==');
        return this._http.get(this._baseUrl + path, { headers: headers })
            .map(res => res.json());
    }

    getFramework(): Observable<any> {
        return this._http.get(this._baseUrl + 'backend/framework')
            .map(res => res.json());
    }

    getBundles(): Observable<Bundle[]> {
        return this._http.get(this._baseUrl + 'backend/bundles')
            .map(res => res.json());
    }

    getBundle(id): Observable<Bundle> {
        return this._http.get(this._baseUrl + 'backend/bundles/' + id)
            .map(res => res.json());
    }

    getBundleServices(id): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/bundles/' + id + "/services")
            .map(res => res.json());
    }

    getServices(): Observable<Service[]> {
        return this._http.get(this._baseUrl + 'backend/services')
            .map(res => res.json());
    }

    getService(id): Observable<Service> {
        return this._http.get(this._baseUrl + 'backend/services/' + id)
            .map(res => res.json());
    }

    getPackages(): Observable<ExportPackage[]> {
        return this._http.get(this._baseUrl + 'backend/packages')
            .map(res => res.json());
    }

    getLogs(): Observable<LogEntry[]> {
        return this._http.get(this._baseUrl + 'backend/logs')
            .map(res => res.json());
    }

    getSnapshots(): Observable<Snapshot[]> {
        return this._http.get(this._baseUrl + 'backend/snapshots')
            .map(res => res.json());
    }

    getLatestSnapshot(): Observable<Snapshot> {
        return this._http.get(this._baseUrl + 'backend/snapshotdetails/latest')
            .map(res => res.json());
    }

    createSnapshot() {
        return this._http.post(this._baseUrl + 'backend/snapshots/', JSON.stringify("create"))
            //.map(res => res.json())
            ;
    }

    getVersion() {
        return this._http.get(this._baseUrl + 'client/version')
            .map(res => res.text());
    }
}