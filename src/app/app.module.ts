import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { AbstractMealComponent } from './abstract-meal/abstract-meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractMealComponent,
    MealFormComponent,
    DailySummaryComponent,

  
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
