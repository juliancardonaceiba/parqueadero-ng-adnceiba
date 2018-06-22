import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { HistoricoRegistrosComponent } from './historico-registros/historico-registros.component';
import { RegistrosActualesComponent } from './registros-actuales/registros-actuales.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { RegistroService } from '../../services/registro.service';
@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    AdministracionRoutingModule
  ],
  declarations: [HistoricoRegistrosComponent, RegistrosActualesComponent],
  providers: [ConfirmationService, RegistroService]
})
export class AdministracionModule { }
