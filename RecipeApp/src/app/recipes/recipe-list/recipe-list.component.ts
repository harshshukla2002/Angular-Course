import { Component, OnInit } from '@angular/core';
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
  ];

  constructor() {}
  ngOnInit(): void {}
}
