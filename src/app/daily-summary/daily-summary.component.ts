import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'daily-summary',
  templateUrl: './daily-summary.component.html',
  styleUrls: ['./daily-summary.component.css']
})
export class DailySummaryComponent implements OnInit {
  public remaining = {
    carbs : 10,
    protein : 10,
    fat : 10,
   };
   public current = {
    carbs : 184,
    protein : 70,
    fat : 48,
   };

  constructor() { }

  ngOnInit(): void {

    



  }

}
