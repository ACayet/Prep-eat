import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  editRecipeForm: FormGroup;
  success: boolean = false;
  editedRecipe: Recipe;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private recipeService: RecipeService) {  }

  ngOnInit(): void {

    let formatedCategories: string = this.recipeService.arrayToString(this.recipe.categories)
    let formatedIngredients: string = this.recipeService.arrayToString(this.recipe.ingredients)
    let formatedDirections: string = this.recipeService.arrayToString(this.recipe.directions)

    this.editRecipeForm = this.formBuilder.group({
      title: [this.recipe.title, [Validators.required, Validators.minLength(3)]],
      desc: [this.recipe.desc, [Validators.minLength(10)]],
      categories:	[formatedCategories],
      ingredients: [formatedIngredients,[Validators.required]],
      directions: [formatedDirections,[Validators.required]],
      calories: [this.recipe.calories, [Validators.required, Validators.min(0)]],
      fat: [this.recipe.fat, [Validators.min(0)]],
      protein: [this.recipe.protein, [Validators.min(0)]],
      sodium: [this.recipe.sodium, [Validators.min(0)]],
      rating: [this.recipe.rating, [Validators.min(0), Validators.max(5)]]
    })
  }




  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size:'lg' }).result.then((result) => {},
    (dismiss) => {
      let formatedCategories: string = this.recipeService.arrayToString(this.recipe.categories)
      let formatedIngredients: string = this.recipeService.arrayToString(this.recipe.ingredients)
      let formatedDirections: string = this.recipeService.arrayToString(this.recipe.directions)
      this.editRecipeForm.reset({
        title: this.recipe.title,
        desc: this.recipe.desc,
        categories: formatedCategories,
        ingredients: formatedIngredients,
        directions: formatedDirections,
        calories: this.recipe.calories,
        fat: this.recipe.fat,
        protein: this.recipe.protein,
        sodium: this.recipe.sodium,
        rating: this.recipe.rating
      })
      this.success = false;
    });
  }

  onSubmit(data){

    data.categories = data.categories.split(";");
    data.ingredients = data.ingredients.split(";");
    data.directions = data.directions.split(";");

    this.recipeService.editRecipe(this.recipe._id,data).subscribe(
      (response) => {
        this.success = true;
        this.editedRecipe = response;
      },
      (err) => {
        console.log(err.message)
      }
    )
  }
}
