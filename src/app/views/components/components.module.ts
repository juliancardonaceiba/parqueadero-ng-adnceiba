import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrmComponent } from '../../views/components/trm/trm.component';
import { TrmService } from '../../services/trm.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TrmComponent],
  declarations: [TrmComponent],
  providers: [TrmService]
})
export class ComponetsModule { }
