import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-remove-recipe',
  templateUrl: './remove-recipe.component.html',
  styleUrls: ['./remove-recipe.component.css']
})
export class RemoveRecipeComponent implements OnInit {

  constructor(private modalService: NgbModal, private recipeService: RecipeService, private router: Router) { }

  @Input() recipe: any;

  

  ngOnInit(): void {
  }

  openVerticallyCentered(content){
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.recipeService.removeRecipe(this.recipe._id).subscribe((data) => {
        location.reload();
      }),
      (err) => {
        console.log(err.message);
      }
    }, (dismiss) => {});
  }
}
