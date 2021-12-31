import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'abstract-meal',
  templateUrl: './abstract-meal.component.html',
  styleUrls: ['./abstract-meal.component.css']
})
export class AbstractMealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("####one abstract meal constructed");
  }

}
