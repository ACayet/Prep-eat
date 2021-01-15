import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private recipeService: RecipeService) { }

  @Input() recipe: any;
  editRecipeForm;
  success: boolean = false;

  ngOnInit(): void {
  }



  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onSubmit(data){
    this.recipeService.editRecipe(this.recipe._id,data).subscribe(
      (response) => {
        this.success = true;
        this.recipe = response;
      },
      (err) => {
        console.log(err.message)
      }
    )
  }
}
