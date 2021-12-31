import { Component } from '@angular/core';
import { AbstractMealComponent } from './abstract-meal/abstract-meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-diary';



  morningShake: any[] = [
    {
      "title": "Douglas  Pace"
    },
  ];
}





