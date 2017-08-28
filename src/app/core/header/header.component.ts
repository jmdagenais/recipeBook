import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

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

  onLogout() {
    this.authService.logout();
  }
}
