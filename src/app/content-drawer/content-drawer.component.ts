import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingsService} from '../listings.service';

@Component( {
  selector: 'app-content-drawer',
  templateUrl: './content-drawer.component.html',
  styleUrls: [ './content-drawer.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class ContentDrawerComponent implements OnInit {

  listingId = null;
  listingDetails = {
    imgSm: '',
    imgLg: '',
    title: '',
    price: {
      auction: 0,
      bunNow: 0
    },
  };

  constructor( private route: ActivatedRoute,
               private router: Router,
               private listingSvc: ListingsService ) {
  }

  getListingId( params ) {
    return params.productId;
  }

  close() {
    this.router.navigate( [ '/' ] );
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe( ( params ) => {
        this.listingId = this.getListingId( params );
        if ( this.listingId !== undefined ) {
          const listingData = this.listingSvc.get( this.listingId ) || {}
          ;

          for ( let property in listingData ) {
            this.listingDetails[ property ] = listingData[ property ]
          }
        }
      } );

  }

}
