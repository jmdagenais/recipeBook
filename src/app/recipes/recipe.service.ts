import {Subject} from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes.slice();
    this.recipeChanged.next(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }


}
