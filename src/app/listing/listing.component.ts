import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {ListingsService} from '../listings.service';

@Component( {
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: [ './listing.component.scss' ],
  encapsulation: ViewEncapsulation.None
} )
export class ListingComponent implements OnInit {

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

  constructor( private listingSvc: ListingsService ) {
  }

  ngOnInit() {
    const listingData = this.listingSvc.get( this.listingId )
    ;

    for ( let property in listingData ) {
      this.listingDetails[ property ] = listingData[ property ]
    }
  }

}
