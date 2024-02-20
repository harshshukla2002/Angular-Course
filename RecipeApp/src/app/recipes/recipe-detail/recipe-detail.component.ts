import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipes;

  ngOnInit(): void {
    console.log(this.recipe);
  }
}
