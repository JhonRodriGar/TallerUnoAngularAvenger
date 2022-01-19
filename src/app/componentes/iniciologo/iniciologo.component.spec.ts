import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciologoComponent } from './iniciologo.component';

describe('IniciologoComponent', () => {
  let component: IniciologoComponent;
  let fixture: ComponentFixture<IniciologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
