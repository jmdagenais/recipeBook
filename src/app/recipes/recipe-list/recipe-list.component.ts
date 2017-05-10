import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    moduleId: module.id,
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('test recipe', 'a test with a pinch of salt',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Pouding au chocolat', 'pouding au choco à la mijoteuse',
      'https://images.ricardocuisine.com/services/recipes/260x351_13783861245477d88bd6b72.jpg')
  ];
  constructor() { }

  ngOnInit() { }

}
