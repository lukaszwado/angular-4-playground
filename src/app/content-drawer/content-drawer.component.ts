import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component( {
  selector: 'app-content-drawer',
  templateUrl: './content-drawer.component.html',
  styleUrls: [ './content-drawer.component.scss' ]
} )
export class ContentDrawerComponent implements OnInit {

  open = false;

  constructor( private route: ActivatedRoute,
               private router: Router ) {
  }

  checkIfOpen( params ) {
    return !!params.productId
  }

  close() {
    this.router.navigate( [ '/' ] );
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe( ( params ) => {
        this.open = this.checkIfOpen( params );
      } )
  }

}
