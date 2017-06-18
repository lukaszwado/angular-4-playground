import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdSliderModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';

import {HeaderComponent} from './header/header.component';
import {FiltersComponent} from './filters/filters.component';
import {CollapseComponent} from './collapse/collapse.component';
import {ListingsComponent} from './listings/listings.component';
import {ListingComponent} from './listing/listing.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ContentDrawerComponent} from './content-drawer/content-drawer.component';
import {SearchResultComponent} from './search-result/search-result.component';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    CollapseComponent,
    ListingsComponent,
    ListingComponent,
    SearchBarComponent,
    ContentDrawerComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdSliderModule,
    MdSelectModule,
    MdTabsModule,
    RouterModule.forRoot( [ {
      path: '',
      component: SearchResultComponent,
      pathMatch: 'full'
    } ] )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
