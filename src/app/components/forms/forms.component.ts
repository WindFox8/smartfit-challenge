// forms.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../UnitsInterfaces';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  formGroup!: FormGroup;
  totalResults: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private locationsService: LocationsService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: ['', Validators.required],
      showClosed: [false]
    });

    this.locationsService.getLocations().subscribe(locations => {
      this.results = locations;
      this.sharedService.setLocations(locations);
    });
  }

  onSubmit(): void {
    const { hour, showClosed } = this.formGroup.value;
    this.locationsService.getLocations().subscribe(locations => {
      this.results = this.locationsService.filterLocations(locations, hour, showClosed);
      this.totalResults = this.results.length;
      this.sharedService.setLocations(this.results);
    });
  }

  onClean(): void {
    this.formGroup.reset();
    this.results = [];
    this.totalResults = 0;
    this.sharedService.setLocations([]);
  }
}
