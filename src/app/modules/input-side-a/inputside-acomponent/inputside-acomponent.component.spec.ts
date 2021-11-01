import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsideAComponentComponent } from './inputside-acomponent.component';

describe('InputsideAComponentComponent', () => {
  let component: InputsideAComponentComponent;
  let fixture: ComponentFixture<InputsideAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsideAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsideAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
