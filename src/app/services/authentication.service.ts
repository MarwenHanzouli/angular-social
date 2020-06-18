import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractHttpService } from '../AbstractHttpService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AbstractHttpService{

  apiUrl=this.url;

  constructor(private httpClient:HttpClient) { 
    super();
  }
  connectWithGoogle(){
    // return this.httpClient.get<Observable<any>>(this.GOOGLE_AUTH_URL);
    return this.GOOGLE_AUTH_URL;
  }
  connectWithFacebook(){
    //return this.httpClient.get<Observable<any>>(this.FACEBOOK_AUTH_URL);
    return this.FACEBOOK_AUTH_URL;
  }
  connectWithGithub(){
    //return this.httpClient.get<Observable<any>>(this.GITHUB_AUTH_URL);
    return this.GITHUB_AUTH_URL;
  }
}
