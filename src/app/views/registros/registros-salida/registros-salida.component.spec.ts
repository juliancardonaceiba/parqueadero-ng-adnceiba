import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosSalidaComponent } from './registros-salida.component';

describe('RegistrosSalidaComponent', () => {
  let component: RegistrosSalidaComponent;
  let fixture: ComponentFixture<RegistrosSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
