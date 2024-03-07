import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  index: number;
  edit: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = params['index'];
      this.edit = params['index'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImageUrl: string = '';
    let recipeDescription: string = '';

    if (this.edit) {
      const recipe = this.recipeService.getRecipeWithIndex(this.index);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImageUrl = recipe.imageUrl;
    }

    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName),
      recipeImageUrl: new FormControl(recipeImageUrl),
      recipeDescription: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
