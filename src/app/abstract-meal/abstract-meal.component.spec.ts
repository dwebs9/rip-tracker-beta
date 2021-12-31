import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractMealComponent } from './abstract-meal.component';

describe('AbstractMealComponent', () => {
  let component: AbstractMealComponent;
  let fixture: ComponentFixture<AbstractMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
