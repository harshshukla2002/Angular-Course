import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

export class ShoppingListService {
  newIncredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 8),
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIncredient(incredientItem: Ingredient) {
    this.ingredients.push(incredientItem);
    this.newIncredient.emit(this.ingredients.slice());
  }

  addIngredientFromShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIncredient.emit(this.ingredients.slice());
  }
}
