import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FiltersService} from './filters.service'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [FiltersService],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  filters;

  constructor(private filterSvc: FiltersService) {
  }

  ngOnInit() {
    this.filters = this.filterSvc.get()
  }

}
