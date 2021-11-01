import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsideAComponentComponent } from './inputside-acomponent/inputside-acomponent.component';
import { GenericComponentsModule } from '../generic-components/generic-components.module';



@NgModule({
  declarations: [
    InputsideAComponentComponent
  ],
  imports: [
    CommonModule,
    GenericComponentsModule
  ],
  exports:[GenericComponentsModule, InputsideAComponentComponent]
})
export class InputSideAModule { }
