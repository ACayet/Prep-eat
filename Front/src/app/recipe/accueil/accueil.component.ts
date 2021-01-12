import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  recipes
  page = 1;
  pageSize=13;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      (data) => {
        console.log(data[1])
        this.recipes = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

}
