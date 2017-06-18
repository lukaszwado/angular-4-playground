import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component( {
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: [ './collapse.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class CollapseComponent implements OnInit {

  open = true;

  constructor() {
  }

  toggle() {
    this.open = !this.open;
  }

  ngOnInit() {
  }

}
