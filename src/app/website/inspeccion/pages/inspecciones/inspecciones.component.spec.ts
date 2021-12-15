import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionesComponent } from './inspecciones.component';

describe('InspeccionesComponent', () => {
  let component: InspeccionesComponent;
  let fixture: ComponentFixture<InspeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspeccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
