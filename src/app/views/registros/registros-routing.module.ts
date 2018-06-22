import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosEntradaComponent } from './registros-entrada/registros-entrada.component';

const routes: Routes = [
  {
    path: 'entrada',
    component: RegistrosEntradaComponent,
    data: {
      title: 'registro de entrada'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
