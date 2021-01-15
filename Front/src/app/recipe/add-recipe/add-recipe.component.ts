import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  addRecipeForm: FormGroup;
  success: boolean = false;
  addedRecipe: Recipe;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private recipeService: RecipeService) { 
    this.addRecipeForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      desc: ['', [Validators.minLength(10)]],
      categories:	[''],
      ingredients: ['',[Validators.required]],
      directions: ['',[Validators.required]],
      calories: ['', [Validators.required, Validators.min(0)]],
      fat: ['', [Validators.min(0)]],
      protein: ['', [Validators.min(0)]],
      sodium: ['', [Validators.min(0)]],
      rating: ['', [Validators.min(0), Validators.max(5)]]
    })
  }

  ngOnInit(): void {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {},
    (dismiss) => {
      this.addRecipeForm.reset()
    });
  }

  onSubmit(data) {
    //Separating instructions categories and ingredients by ;
    data.categories = data.categories.split(";");
    data.ingredients = data.ingredients.split(";");
    data.directions = data.directions.split(";");

    this.recipeService.addRecipe(data).subscribe(
      (response) => {
        this.success = true;
        this.addedRecipe = response;
      },
      (err) => {
        console.log(err.message)
      }
    )
  }
}
