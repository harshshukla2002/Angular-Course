import { Component } from '@angular/core';
import { Recipes } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  currentRecipe: Recipes;
}
