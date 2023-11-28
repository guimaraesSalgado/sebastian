import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingTextComponent } from './greeting-text.component';

describe('GreetingTextComponent', () => {
  let component: GreetingTextComponent;
  let fixture: ComponentFixture<GreetingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
