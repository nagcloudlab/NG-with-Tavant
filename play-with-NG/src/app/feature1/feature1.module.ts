import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ServiceOneService } from './service-one.service';



@NgModule({
  declarations: [
    CompOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompOneComponent
  ],
  // providers: [ServiceOneService]
})
export class Feature1Module { }
