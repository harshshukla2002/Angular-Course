import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipes;
  @Output() selectedRecipe = new EventEmitter<void>();

  onRecipeSelect() {
    this.selectedRecipe.emit();
  }
}
