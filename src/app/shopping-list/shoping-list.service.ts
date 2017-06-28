import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
export class ShoppingListService {
  ingredientChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Array<Ingredient> = [
    new Ingredient('Chicken legs', 4),
    new Ingredient('Tomatoes', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
