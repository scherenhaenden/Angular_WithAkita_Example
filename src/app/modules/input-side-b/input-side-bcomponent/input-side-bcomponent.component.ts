import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionStore } from 'src/app/store/session-store';
import { SessionQuery } from 'src/app/store/session.query';

@Component({
  selector: 'app-input-side-bcomponent',
  templateUrl: './input-side-bcomponent.component.html',
  styleUrls: ['./input-side-bcomponent.component.scss']
})
export class InputSideBComponentComponent implements OnInit {

  public name: string = '';
  public subscr = new Subscription();
  public subscr2 = new Subscription();


  constructor(
    private store: SessionStore,
    private query: SessionQuery) {

      this.name = query.selectName;
     }


  ngOnInit(): void {
    this.initSubject();
  }

  public initSubject(): void {



    this.subscr =this.query.selectName$.subscribe(
      x => {

        this.name = x;
        this.store.update(({name}) => ({name: this.name}));
        console.log('-------->',this.name);

      },

      );

    this.subscr2 =this.query.selectName$.subscribe({
      next(name) {
        console.log('it worked ', name);

      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });



  }



  public saverange(): void {
    console.log(this.name);

    this.store.update(({name}) => ({name: this.name}));

    const url = new URL(window.location.href);



    //history.pushState(stringify(this.store), '', window.location.href)

  }

}
