import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPitchComponent } from './cadastro-pitch.component';

describe('CadastroPitchComponent', () => {
  let component: CadastroPitchComponent;
  let fixture: ComponentFixture<CadastroPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
