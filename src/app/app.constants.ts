import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  Server: string = 'https://sportclubapisoftinsi.herokuapp.com/';
  ApiUrl: string = 'api/';
  ServerWithApiUrl = this.Server + this.ApiUrl;

}
