import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes(
      'Pasta',
      'White Sause Pasta',
      'https://www.cheflingmeals.com/wp-content/uploads/2021/02/white-sauce-pasta-Autosaved-1536x1024.jpg'
    ),
    new Recipes(
      'Paneer',
      'Kadhai Paneer',
      'https://i.redd.it/54c1clhx3uh11.jpg'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipes>();

  constructor() {}
  ngOnInit(): void {}

  OnSelect(recipe: Recipes) {
    this.recipeSelected.emit(recipe);
  }
}
