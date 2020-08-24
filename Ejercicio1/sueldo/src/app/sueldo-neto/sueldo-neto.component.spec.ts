import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SueldoNetoComponent } from './sueldo-neto.component';

describe('SueldoNetoComponent', () => {
  let component: SueldoNetoComponent;
  let fixture: ComponentFixture<SueldoNetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SueldoNetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SueldoNetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
