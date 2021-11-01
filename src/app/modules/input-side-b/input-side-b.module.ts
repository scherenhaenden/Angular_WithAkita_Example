import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSideBComponentComponent } from './input-side-bcomponent/input-side-bcomponent.component';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';



@NgModule({
  declarations: [
    InputSideBComponentComponent
  ],
  imports: [
    CommonModule,
    GenericComponentsModule,
    AkitaNgRouterStoreModule
  ],
  exports:[GenericComponentsModule, InputSideBComponentComponent]
})
export class InputSideBModule { }
