import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Units, Location } from '../UnitsInterfaces';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private url = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Units>(this.url).pipe(
      map(units => units.locations)
    );
  }

  filterLocations(locations: Location[], hour: string, showClosed: boolean): Location[] {
    let filteredLocations = locations.filter(location => {
      if (location.schedules) {
        return showClosed || location.opened || location.schedules.length === 0;
      } else {
        return showClosed;
      }
    });
  
    if (hour) {
      filteredLocations = filteredLocations.filter(location => 
        !location.schedules || location.schedules.some(schedule => this.isHourInRange(schedule.hour, hour))
      );
    }
  
    return filteredLocations;
  }

  private isHourInRange(scheduleHour: string, selectedHour: string): boolean {
    const ranges: { [key: string]: [number, number] } = {
      morning: [6, 12],
      afternoon: [12, 18],
      night: [18, 23]
    };
  
    const hourRangeRegex = /(\d{2})h às (\d{2})h/;
    const match = hourRangeRegex.exec(scheduleHour);
  
    if (!match) {
      return false;
    }
  
    const startHour = parseInt(match[1], 10);
    const endHour = parseInt(match[2], 10);
    const [selectedStart, selectedEnd] = ranges[selectedHour];
  
    return (startHour <= selectedEnd && endHour >= selectedStart);
  }
}