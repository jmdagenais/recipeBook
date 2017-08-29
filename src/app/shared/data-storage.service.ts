import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService) {

  }

}
