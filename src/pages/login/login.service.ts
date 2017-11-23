import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './../../app/app.constants';
import { LoginInterface } from './login.interface';



@Injectable()
export class AuthService {
    
    isLoggedIn: boolean = false;
    
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    private actionUrl: string;
    private headers: Headers;

    constructor(
        private _http: Http, 
        private _configuration: Configuration,
        private localStorageService: LocalStorageService) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    login(values: LoginInterface): Observable<any> {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}usuarios/login`;
        const toAdd = JSON.stringify(values);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError)
            .do(val => {
                this.isLoggedIn = true;
                this.localStorageService.set('isLoggedIn', true);
            });
    }

    logout(): void {
        this.isLoggedIn = false;
        this.localStorageService.set('isLoggedIn', false);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}