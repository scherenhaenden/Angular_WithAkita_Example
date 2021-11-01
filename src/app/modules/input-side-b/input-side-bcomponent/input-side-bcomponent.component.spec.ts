import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSideBComponentComponent } from './input-side-bcomponent.component';

describe('InputSideBComponentComponent', () => {
  let component: InputSideBComponentComponent;
  let fixture: ComponentFixture<InputSideBComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSideBComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSideBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
