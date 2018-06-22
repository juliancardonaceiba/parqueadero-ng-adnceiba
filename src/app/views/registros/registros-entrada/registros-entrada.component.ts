import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { VehiculoService } from '../../../services/vehiculo.service';
import { RegistroService } from '../../../services/registro.service';
import { messagesDs } from '../../../messages'
@Component({
  selector: 'app-registros-entrada',
  templateUrl: './registros-entrada.component.html',
  styleUrls: ['./registros-entrada.component.scss']
})
export class RegistrosEntradaComponent implements OnInit {

  private mostrarRecibo: boolean = false;

  private msgs: any[] = [];

  private tipoVehiculo = null;

  private recibo: any = null;

  @ViewChild('form')
  private form: NgForm;


  constructor(private messageService: MessageService, private vehiculoService: VehiculoService, private registroService: RegistroService) { }

  ngOnChanges() {
    this.limpiar();
    console.log("dd");
  }

  ngOnInit() {
    this.limpiar();
  }

  public limpiar() {
    this.form.reset();
  }

  public submit(form) {
    this.form = form;
    this.guardar();
  }

  public guardar() {
    if (this.form.value.id != null) {
      this.crearRegistro();
    } else {
      this.crearVehiculo();
    }
  }

  public crearRegistro() {
    this.registroService.registrarEntrada(this.form.value.placa).subscribe(data => {
      this.limpiar();
      this.recibo = data;
      this.imprimirRecibo();
    }, excepcion => {
      this.procesarExcepcion(excepcion);
    });
  }

  public imprimirRecibo() {
    this.mostrarRecibo = true;
  }

  public cerrarRecibo() {
    this.mostrarRecibo = false;
  }

  public crearVehiculo() {
    this.vehiculoService.crearVehiculo(this.form.value).subscribe(data => {
      this.crearRegistro();
    }, excepcion => {
      this.procesarExcepcion(excepcion);
    });
  }

  public consultarVehiculo() {
    this.vehiculoService.getVehiculo(this.form.value.placa).subscribe(data => {
      if (data != null) {
        this.form.setValue(data);
      }
    });
  }

  private procesarExcepcion(excepcion) {
    if (excepcion.error != null && excepcion.error.message != null) {
      this.messageService.add({ severity: 'error', summary: 'ERROR', detail: messagesDs[excepcion.error.message] });
      return;
    }else{
      this.messageService.add({ severity: 'error', summary: 'ERROR', detail: messagesDs['error'] });
    }
  }


}
