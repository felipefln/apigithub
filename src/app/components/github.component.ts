import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { HttpModule } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers: [GithubService]
})

export class GithubComponent { 

    user: any;
    repos: any;
    username: string;
    imput: string;


    constructor(private _githubService:GithubService){
        console.log('Dale, chamou Github componente...');

        
    }

    
    search(){
        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(users => {
            //console.log(users);
            this.user = users;

        });

        this._githubService.getRepos().subscribe(repos => {
            //console.log(repos);
            this.repos = repos;

        });
    }
}