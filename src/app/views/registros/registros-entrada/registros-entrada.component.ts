import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { VehiculoService } from '../../../services/vehiculo.service';
import { RegistroService } from '../../../services/registro.service';
@Component({
  selector: 'app-registros-entrada',
  templateUrl: './registros-entrada.component.html',
  styleUrls: ['./registros-entrada.component.scss']
})
export class RegistrosEntradaComponent implements OnInit {

  private mostrarRecibo: boolean = false;

  private msgs: any[] = [];

  private dto: any = {};

  private recibo: any = null;

  constructor(private messageService: MessageService, private vehiculoService: VehiculoService, private registroService: RegistroService) { }

  ngOnInit() {
  }

  public cancelar() {
    this.dto = {};
  }

  public guardar() {
    if (this.dto.id != null) {
      this.crearRegistro();
    } else {
      this.crearVehiculo();
    }
  }

  public crearRegistro() {
    this.registroService.registrarEntrada(this.dto.placa).subscribe(data => {
      this.dto = {};
      this.recibo=data;
      this.imprimirRecibo();
    });
  }

  public imprimirRecibo() {
    this.mostrarRecibo = true;
  }

  public cerrarRecibo() {
    this.mostrarRecibo = false;
  }

  public crearVehiculo() {
    this.vehiculoService.crearVehiculo(this.dto).subscribe(data => {
      this.crearRegistro();
    });
  }

  public consultarVehiculo() {
    this.vehiculoService.getVehiculo(this.dto.placa).subscribe(data => {
      if (data != null) {
        this.dto = data;
      }
    });
  }


}
