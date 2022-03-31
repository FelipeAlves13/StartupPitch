import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapitchComponent } from './consultapitch.component';

describe('ConsultapitchComponent', () => {
  let component: ConsultapitchComponent;
  let fixture: ComponentFixture<ConsultapitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultapitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultapitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
