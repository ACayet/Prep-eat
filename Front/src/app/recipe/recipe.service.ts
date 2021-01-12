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
    return this.httpClient.get<any>(environment.apiURL + '/recipes',  { observe: "body" })
  }
}
