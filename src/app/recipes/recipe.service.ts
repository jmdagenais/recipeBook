import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe('Steak frites',
      'A delicious steak with french fries',
      'https://www.bistrolentracte.com/medias/img/articles/steak-frites.jpg',
      [
        new Ingredient('steak', 1),
        new Ingredient('fries', 20)
      ]),
    new Recipe('Chocolate pie',
      'Yummy!',
      'http://tastykitchen.com/wp-content/uploads/2012/05/Tasty-Kitchen-Blog-Easy-Chocolate-Pie-10.jpg',
      [
        new Ingredient('pie crust', 1),
        new Ingredient('chocolate mousse', 1)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  addIngredientsToShoppingList() {

  }
}
