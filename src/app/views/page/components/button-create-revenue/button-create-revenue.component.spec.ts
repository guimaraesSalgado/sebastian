import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateRevenueComponent } from './button-create-revenue.component';

describe('ButtonCreateRevenueComponent', () => {
  let component: ButtonCreateRevenueComponent;
  let fixture: ComponentFixture<ButtonCreateRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCreateRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCreateRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
