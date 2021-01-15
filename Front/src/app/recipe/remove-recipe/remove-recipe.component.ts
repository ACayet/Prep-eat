import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-remove-recipe',
  templateUrl: './remove-recipe.component.html',
  styleUrls: ['./remove-recipe.component.css']
})
export class RemoveRecipeComponent implements OnInit {

  constructor(private modalService: NgbModal, private recipeService: RecipeService) { }

  @Input() recipe: any;

  

  ngOnInit(): void {
  }

  openVerticallyCentered(content){
    this.modalService.open(content, { centered: true }).result.then((result) => {
      console.log(this.recipe._id);
      this.recipeService.removeRecipe(this.recipe._id).subscribe((data) => {
        location.reload();
      }),
      (err) => {
        console.log(err.message);
      }
    }, (dismiss) => {});
  }
}
