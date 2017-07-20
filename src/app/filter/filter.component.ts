import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component( {
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: [ './filter.component.scss' ]
} )
export class FilterComponent implements OnInit {

  @Input( 'filterData' )
  filterData;

  @Input( 'open' )
  open = false;

  @Output() change = new EventEmitter()

  constructor() {
  }

  changeState() {

  }

  ngOnInit() {
  }

}
