import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosEntradaComponent } from './registros-entrada.component';

describe('RegistrosEntradaComponent', () => {
  let component: RegistrosEntradaComponent;
  let fixture: ComponentFixture<RegistrosEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
