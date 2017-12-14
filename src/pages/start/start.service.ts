import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './../../app/app.constants';
import { PlaceInterface } from './../place/place.interface';


@Injectable()
export class StartService {
    private actionUrl: string;
    private headers: Headers;

    constructor(
        private _http: Http, 
        private _configuration: Configuration) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    colocarLocalidades(): Observable<any> {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}Localidades`;
        return this._http.get(this.actionUrl, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}