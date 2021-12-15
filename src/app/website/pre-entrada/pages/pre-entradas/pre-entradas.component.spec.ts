import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEntradasComponent } from './pre-entradas.component';

describe('PreEntradasComponent', () => {
  let component: PreEntradasComponent;
  let fixture: ComponentFixture<PreEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
