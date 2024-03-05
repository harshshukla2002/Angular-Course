import { Ingredient } from '../Shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  newIncredient = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 8),
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIncredient(incredientItem: Ingredient) {
    this.ingredients.push(incredientItem);
    this.newIncredient.next(this.ingredients.slice());
  }

  addIngredientFromShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIncredient.next(this.ingredients.slice());
  }
}
