import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionStore } from './store/session-store';
import { SessionQuery } from './store/session.query';
import { SessionService } from './store/session.service';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { InputSideBModule } from './modules/input-side-b/input-side-b.module';
import { InputSideAModule } from './modules/input-side-a/input-side-a.module';
import { GenericComponentsModule } from './modules/generic-components/generic-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    InputSideBModule,
    InputSideAModule,
    GenericComponentsModule
  ],
  providers: [SessionService, SessionQuery, SessionStore, { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
