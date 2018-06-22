import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { RegistrosEntradaComponent } from './registros-entrada/registros-entrada.component';
import { RegistrosRoutingModule } from './registros-routing.module';
import { VehiculoService } from '../../services/vehiculo.service';
import { RegistroService } from '../../services/registro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    CardModule,
    DialogModule,
    RegistrosRoutingModule
  ],
  declarations: [RegistrosEntradaComponent],
  providers: [MessageService, VehiculoService, RegistroService]
})
export class RegistrosModule { }
