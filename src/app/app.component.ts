import { Component } from '@angular/core';
import { SessionStore } from './store/session-store';
import { SessionQuery } from './store/session.query';
// ESM
import {parse, stringify, toJSON, fromJSON} from 'flatted';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAkitaCrudExampleV2';
  name$ = this.query.select('name');

  public myModel= 'anything'

  constructor(
    private store: SessionStore,
    private query: SessionQuery
  ) {

    this.myModel = query.selectName;
    console.log('name')

  }



  public saverange(): void {
    console.log(this.myModel);

    this.store.update(({name}) => ({name: this.myModel}));

    const url = new URL(window.location.href);



    //history.pushState(stringify(this.store), '', window.location.href)

  }



}
