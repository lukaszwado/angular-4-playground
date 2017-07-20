import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component( {
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: [ './collapse.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class CollapseComponent implements OnInit {

  @Input('open')
  open = true;

  constructor() {
  }

  toggle() {
    this.open = !this.open;
  }

  ngOnInit() {
  }

}
