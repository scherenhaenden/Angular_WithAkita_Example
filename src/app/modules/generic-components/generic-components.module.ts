import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [GenericInputComponent]
})
export class GenericComponentsModule { }
