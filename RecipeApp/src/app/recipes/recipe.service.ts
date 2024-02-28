import { EventEmitter, Injectable } from '@angular/core';
import { Recipes } from './recipe.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes(
      'Pasta',
      'White Sause Pasta',
      'https://www.cheflingmeals.com/wp-content/uploads/2021/02/white-sauce-pasta-Autosaved-1536x1024.jpg',
      [new Ingredient('Pasta', 20), new Ingredient('Maida', 15)]
    ),
    new Recipes(
      'Paneer',
      'Kadhai Paneer',
      'https://i.redd.it/54c1clhx3uh11.jpg',
      [new Ingredient('Paneer', 70), new Ingredient('Masala', 10)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientFromShoppingList(ingredients);
  }
}
