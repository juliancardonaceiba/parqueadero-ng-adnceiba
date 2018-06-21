import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosActualesComponent } from './registros-actuales.component';

describe('RegistrosActualesComponent', () => {
  let component: RegistrosActualesComponent;
  let fixture: ComponentFixture<RegistrosActualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosActualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
