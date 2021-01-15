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

  addRecipe(data) {
    return this.httpClient.post<any>(environment.apiURL + '/recipes', data, {observe: "body"})
  }

  removeRecipe(recipeId){
    return this.httpClient.delete<any>(environment.apiURL + `/recipes/${recipeId}`, {observe: "body"})
  }

  editRecipe(recipeId, editedData){
    return this.httpClient.put<any>(environment.apiURL + `/recipes/${recipeId}`, editedData, {observe: "body"})
  }

  arrayToString(array){
    let res: string = ""
    for (let index = 0; index < array.length; index++) {
      if(array.length - index == 1){
        res += array[index]
      } else {
        res += array[index] + ";";
      }
    }
    return res;
  }

}
