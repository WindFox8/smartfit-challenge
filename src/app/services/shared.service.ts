import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../UnitsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private locationsSubject = new BehaviorSubject<Location[]>([]);
  locations$ = this.locationsSubject.asObservable();

  setLocations(locations: Location[]): void {
    this.locationsSubject.next(locations);
  }

  getLocations(): Location[] {
    return this.locationsSubject.getValue();
  }
}