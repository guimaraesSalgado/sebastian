import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateListComponent } from './button-create-list.component';

describe('ButtonCreateListComponent', () => {
  let component: ButtonCreateListComponent;
  let fixture: ComponentFixture<ButtonCreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCreateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
