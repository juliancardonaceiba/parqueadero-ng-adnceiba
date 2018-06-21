import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoRegistrosComponent } from './historico-registros.component';

describe('HistoricoRegistrosComponent', () => {
  let component: HistoricoRegistrosComponent;
  let fixture: ComponentFixture<HistoricoRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
