import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../UnitsInterfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card!: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
