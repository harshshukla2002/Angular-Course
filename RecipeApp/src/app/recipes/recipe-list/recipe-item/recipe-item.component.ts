import { Component, Input } from '@angular/core';
import { Recipes } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipes;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
