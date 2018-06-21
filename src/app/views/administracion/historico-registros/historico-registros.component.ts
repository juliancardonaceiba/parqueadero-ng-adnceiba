import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { RegistroService } from '../../../services/registro.service';

@Component({
  selector: 'app-historico-registros',
  templateUrl: './historico-registros.component.html',
  styleUrls: ['./historico-registros.component.scss']
})
export class HistoricoRegistrosComponent implements OnInit {

  private registros: any[] = [];

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.consultarRegistros();
  }

  public consultarRegistros() {
    this.registroService.consultarRegistrosHistoricos().subscribe(data => {
      this.registros = data;
    });
  }

}
