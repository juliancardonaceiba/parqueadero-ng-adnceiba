import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosEntradaComponent } from './registros-entrada/registros-entrada.component';
import { RegistrosSalidaComponent } from './registros-salida/registros-salida.component';

const routes: Routes = [
  {
    path: 'entrada',
    component: RegistrosEntradaComponent,
    data: {
      title: 'registro de entrada'
    }
  },
  {
    path: 'salida',
    component: RegistrosSalidaComponent,
    data: {
      title: 'registro de salida'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule {}
