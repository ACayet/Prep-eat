import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  recipes: Array<object>
  recipesDefined = true;
  page = 1;
  pageSize=13;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      (data) => {
        console.log(data[1])
        this.recipes = data;
        this.recipesDefined = false
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  get getRecipes() { return (this.recipes) ? this.recipes : null }

  get recipesLength() { return (this.recipes && this.recipes.length) ? this.recipes.length : null}

}
