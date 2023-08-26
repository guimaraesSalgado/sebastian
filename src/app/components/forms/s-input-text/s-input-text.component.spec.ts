import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SInputTextComponent } from './s-input-text.component';

describe('SInputTextComponent', () => {
  let component: SInputTextComponent;
  let fixture: ComponentFixture<SInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
