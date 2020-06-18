import { environment } from '../environments/environment';

export abstract class AbstractHttpService{
    url=environment.API_BASE_URL;
    OAUTH2_REDIRECT_URI = 'http://localhost:4200/home/oauth2/redirect';
    GOOGLE_AUTH_URL=this.url+'/oauth2/authorize/google?redirect_uri='+this.OAUTH2_REDIRECT_URI;
    FACEBOOK_AUTH_URL=this.url + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
    GITHUB_AUTH_URL=this.url + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
    constructor(){}
}

