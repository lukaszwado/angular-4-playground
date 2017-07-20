import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {ListingsService} from '../listings.service';
import {ActivatedRoute} from '@angular/router';

@Component( {
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: [ './listing.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class ListingComponent implements OnInit {

  drawerOpen = false;

  @Input( 'listingId' )
  listingId: number;

  @Input( 'activeListing' )
  activeListing: number;

  listingDetails = {
    imgSm: '',
    imgLg: '',
    title: '',
    price: {
      auction: 0,
      bunNow: 0
    },
  };

  constructor( private listingSvc: ListingsService,
               private route: ActivatedRoute) {
  }

  checkIfDrawerIsOpen( params ) {
    return !!params.productId
  }

  ngOnInit() {
    const listingData = this.listingSvc.get( this.listingId )
    ;

    for ( let property in listingData ) {
      this.listingDetails[ property ] = listingData[ property ]
    }

    this.route.queryParams
      .subscribe( ( params ) => {
        this.drawerOpen = this.checkIfDrawerIsOpen( params );
      } )
  }

}
