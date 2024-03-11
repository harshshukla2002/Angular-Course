import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private recipeService: RecipeService) {}

  onFetchClick() {
    this.recipeService.getRecipes();
  }
}
