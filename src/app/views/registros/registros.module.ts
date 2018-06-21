import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { RegistrosEntradaComponent } from './registros-entrada/registros-entrada.component';
import { RegistrosSalidaComponent } from './registros-salida/registros-salida.component';
import { RegistrosRoutingModule } from './registros-routing.module';
import { VehiculoService } from '../../services/vehiculo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    RegistrosRoutingModule
  ],
  declarations: [RegistrosEntradaComponent, RegistrosSalidaComponent],
  providers: [MessageService, VehiculoService]
})
export class RegistrosModule { }
