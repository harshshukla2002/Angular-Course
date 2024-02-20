import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @Output() newIncredient = new EventEmitter<Ingredient>();

  onAdd(incredientName, incredientAmount) {
    const createIncredient = new Ingredient(
      incredientName.value,
      incredientAmount.value
    );
    this.newIncredient.emit(createIncredient);
  }
}
