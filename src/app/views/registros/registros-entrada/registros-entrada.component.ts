import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { VehiculoService } from '../../../services/vehiculo.service';
@Component({
  selector: 'app-registros-entrada',
  templateUrl: './registros-entrada.component.html',
  styleUrls: ['./registros-entrada.component.scss']
})
export class RegistrosEntradaComponent implements OnInit {

  private msgs: any[] = [];

  private dto: any = {};

  constructor(private messageService: MessageService, private vehiculoService: VehiculoService) { }

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
    this.vehiculoService.crearVehiculo(this.dto).subscribe(data => {
      this.dto = {};
    });
  }

  public crearVehiculo() {
    this.vehiculoService.crearVehiculo(this.dto).subscribe(data => {
      this.dto = {};
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
