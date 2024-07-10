import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../UnitsInterfaces';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  formGroup!: FormGroup;
  totalResults: number = 0;

  constructor(private formBuilder: FormBuilder, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: ['', Validators.required],
      showClosed: [false]
    });

    this.locationsService.getLocations().subscribe(locations => {
      this.results = locations;
    });
  }

  onSubmit(): void {
    const { hour, showClosed } = this.formGroup.value;
    this.locationsService.getLocations().subscribe(locations => {
      this.results = this.locationsService.filterLocations(locations, hour, showClosed);
      this.totalResults = this.results.length;
    });
  }

  onClean(): void {
    this.formGroup.reset();
    this.results = [];
    this.totalResults = 0;
  }
}