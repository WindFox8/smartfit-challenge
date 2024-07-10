import { Component, OnInit } from '@angular/core';
import { Location } from '../../UnitsInterfaces';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {
  unitsList: Location[] = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe(locations => {
      this.unitsList = locations;
    });
  }
}
