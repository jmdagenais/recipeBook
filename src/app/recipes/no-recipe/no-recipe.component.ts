import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-recipe',
  template: '<p>Please select a recipe</p>',
  styleUrls: ['./no-recipe.component.css']
})
export class NoRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
