import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'felipefln';
    private client_id = 'd6a4c24df51a45a4152a';
    private client_secret = '73f910d21e1d437c244de3c272bc134909871656';

    constructor(private _http:Http){
        console.log('Coisa linda, chamou o Github service...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
} 
