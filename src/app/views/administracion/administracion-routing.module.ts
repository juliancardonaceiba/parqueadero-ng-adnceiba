import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosActualesComponent } from './registros-actuales/registros-actuales.component';
import { HistoricoRegistrosComponent } from './historico-registros/historico-registros.component';

const routes: Routes = [
  {
    path: 'actuales',
    component: RegistrosActualesComponent,
    data: {
      title: 'registros actuales'
    }
  },
  {
    path: 'historico',
    component: HistoricoRegistrosComponent,
    data: {
      title: 'histórico de registros'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule {}
