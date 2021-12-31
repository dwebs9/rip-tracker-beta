import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent {

  // mealForm: FormGroup ;

  // mealForm = new FormGroup({
  //   title : new FormControl(''),
  //   carbs : new FormControl(''),
  //   protein: new FormControl(''),
  //   fats : new FormControl(''),
  //   note: new FormControl('')
  
  // });

  mealForm = this.fb.group({
    title: ['', Validators.required],
    carbs: [''],
    protein: [''],
    fats: [''],
    note: [''],

  })
  
  constructor( private fb: FormBuilder) { 
  }

  public onSubmit() {
    console.log("#### onSubmit() ");
    console.warn(this.mealForm.value);
  }

}
