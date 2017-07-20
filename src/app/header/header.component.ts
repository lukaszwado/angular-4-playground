import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class HeaderComponent implements OnInit {

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
