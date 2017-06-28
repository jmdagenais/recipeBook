import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  //@Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    let name: string = this.nameInput.nativeElement.value;
    let amount: number = this.amountInput.nativeElement.valueAsNumber;
    if (name.length > 0 && amount > 0) {
      let ingredient: Ingredient = new Ingredient(name, amount);
      this.shoppingListService.addIngredient(ingredient);
    }
  }

}
