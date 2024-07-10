import { Component, OnInit } from '@angular/core';
import { Location } from '../../UnitsInterfaces';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.sass']
})
export class CardsListComponent implements OnInit {
  unitsList: Location[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.locations$.subscribe(locations => {
      this.unitsList = locations;
    });
  }
}