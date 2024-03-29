import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as _ from 'lodash';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.scss']
})
export class PlacesPageComponent implements OnInit {
places :Venue[] = [];

  constructor(private api: ApiService) {
    console.log("place component");
    this.api.getplaces().subscribe((results => {
      this.places = results.response.venues;
    }));
  }

  ngOnInit() {}

}
