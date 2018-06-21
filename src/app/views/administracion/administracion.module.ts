import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoRegistrosComponent } from './historico-registros/historico-registros.component';
import { RegistrosActualesComponent } from './registros-actuales/registros-actuales.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ],
  declarations: [HistoricoRegistrosComponent, RegistrosActualesComponent]
})
export class AdministracionModule { }
