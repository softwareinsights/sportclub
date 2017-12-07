import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './../../app/app.constants';
import { PlaceInterface } from './place.interface';


@Injectable()
export class PlaceService {
    private actionUrl: string;
    private headers: Headers;

    constructor(
        private _http: Http, 
        private _configuration: Configuration) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8'); //tipos de datos del headers
    }

    create(values: PlaceInterface): Observable<any> {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}Localidades`;
        const toAdd = JSON.stringify(values);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}