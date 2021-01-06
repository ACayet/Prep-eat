import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from  './user';
import jwt_decode from "jwt-decode";

import { environment } from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,private routeur: Router) { }
  
  login(username:string, password:string) {
    this.httpClient.post<any>(environment.apiURL + '/users/login', { username, password }, { observe: "body" })
    .subscribe(
      (data) => {
        let res = {
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          username: data.user.username,
          jwtToken: data.token,
          tokenExp: jwt_decode(data.token)['exp']
        }
        localStorage.setItem('USER', JSON.stringify(res));
        this.routeur.navigate(["/accueil"]);
      },
      (err) => {
        console.log(err.message);
        alert("Login failed. Please try again");
      }
    )
  }

  register(user: User) {
    this.httpClient.post<any>(environment.apiURL + '/users/register', user, { observe: "response" })
    .subscribe(
      (data) => {
        console.log(data.body)
        if (data.body.succes === true){
          this.login(user.username, user.password)
        } else {
          alert("The server failed to create user. Please try again");
          this.routeur.navigate(["/register"]);
        }
      },
      (err) => {
        console.log(err.message);
        alert("Register failed. Please try again");
      }
    )
  }
  
  logout() {
    localStorage.removeItem('USER');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('USER') !==  null;
  }

}
