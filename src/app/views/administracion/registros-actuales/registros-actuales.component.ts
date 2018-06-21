import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { RegistroService } from '../../../services/registro.service';

@Component({
  selector: 'app-registros-actuales',
  templateUrl: './registros-actuales.component.html',
  styleUrls: ['./registros-actuales.component.scss']
})
export class RegistrosActualesComponent implements OnInit {

  private registros: any[] = [];

  constructor(private registroService: RegistroService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.consultarRegistros();
  }

  public consultarRegistros() {
    this.registroService.consultarRegistrosActuales().subscribe(data => {
      this.registros = data;
    });
  }

  public registrarSalida(placa: string) {
    this.registroService.registrarSalida(placa).subscribe(data => {
      this.consultarRegistros();
    })
  }

  public confirmarSalida(placa: string) {
    this.confirmationService.confirm({
      message: '¿Desea registrar la salida del vehiculo con placa '+placa+' y realizar el cobro?',
      accept: () => {
        this.registrarSalida(placa);
      }
    });
  }

}
