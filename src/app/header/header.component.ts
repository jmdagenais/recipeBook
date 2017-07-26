import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipe.service';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router) { }

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe((data: any) => {
        console.log(data);
      })
  }

  onFetchData() {
    this.dataStorageService.getRecipes()
      .subscribe((data: any) => {
        this.recipeService.setRecipes(data);

        this.router.navigate(['/recipes']);
      })
  }
}
