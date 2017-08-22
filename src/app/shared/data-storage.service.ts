import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
 import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {

  }

  storeRecipes(): Observable<Object> {
    const token: string = this.authService.getToken();
    return this.httpClient.put('https://jmd-udemy-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes(): Observable<Recipe[]> {
    const token: string = this.authService.getToken();
    return this.httpClient.get<Recipe[]>('https://jmd-udemy-recipe-book.firebaseio.com/recipes.json')
      .map((recipes: Recipe[]) => {
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
      });
  }
}
