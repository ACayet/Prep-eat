import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient,private routeur: Router) { }

  getAllRecipes(){
    this.httpClient.get<any>(environment.apiURL + '/recipes',  { observe: "body" })
    .subscribe(
      (data) => {
        console.log(data[1])
        return data;
      },
      (err) => {
        console.log(err.message);
      }
    )
  }
}
