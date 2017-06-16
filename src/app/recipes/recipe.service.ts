import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe('test recipe', 'a test with a pinch of salt',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Pouding au chocolat', 'pouding au choco à la mijoteuse',
      'https://images.ricardocuisine.com/services/recipes/260x351_13783861245477d88bd6b72.jpg')
  ];

  getRecipes() {
    return this.recipes;
  }
}
