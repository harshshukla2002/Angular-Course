import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipes } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private http: HttpClient) {}

  postRecipes(postRecipe: Recipes) {
    return this.http.post(
      'https://recipeappbackend-3636e-default-rtdb.firebaseio.com/recipes.json',
      postRecipe
    );
  }

  fetchRecipes() {
    return this.http
      .get<{ [key: string]: Recipes }>(
        'https://recipeappbackend-3636e-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((responseData) => {
          const recipeArray: Recipes[] = [];

          for (let key in responseData) {
            console.log(key);
            if (responseData.hasOwnProperty(key))
              recipeArray.push({ ...responseData[key] });
          }
          return recipeArray;
        })
      );
  }
}
