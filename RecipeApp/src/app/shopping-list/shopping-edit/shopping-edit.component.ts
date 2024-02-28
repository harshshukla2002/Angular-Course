import { Component } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(incredientName, incredientAmount) {
    const createIncredient = new Ingredient(
      incredientName.value,
      incredientAmount.value
    );
    this.shoppingListService.addIncredient(createIncredient);
  }
}
