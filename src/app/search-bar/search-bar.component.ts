import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component( {
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: [ './search-bar.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class SearchBarComponent implements OnInit {

  drawerOpen = false;

  constructor( private route: ActivatedRoute ) {
  }

  checkIfDrawerIsOpen( params ) {
    return !!params.productId
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe( ( params ) => {
        this.drawerOpen = this.checkIfDrawerIsOpen( params );
      } )
  }

}
