import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component( {
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: [ './search-result.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class SearchResultComponent implements OnInit {

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
