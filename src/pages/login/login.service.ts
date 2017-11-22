import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;

@Injectable()

export class UsuarioService {
    private actionUrl:string;
    private headers:Headers;

    constructor(/*private _http:Http*/){
     /*   this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json,charset=UTF-8'); */
    }
/*
    login():Observable{
        this.actionUrl="";
        this._http.post("url",{},headers)
    } */
}