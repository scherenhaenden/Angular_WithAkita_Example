import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {

  @Input() name = '';
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  public updateValue(): void{
    //this.name = name;
    this.nameChange.emit(this.name);
  }

}
