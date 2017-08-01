import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
 import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) {

  }

  storeRecipes(): Observable<Response> {
    const token: string = this.authService.getToken();
    return this.http.put('https://jmd-udemy-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .map((response: Response) => response.json());
  }

  getRecipes(): Observable<Recipe[]> {
    const token: string = this.authService.getToken();
    return this.http.get('https://jmd-udemy-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
      });
  }
}
