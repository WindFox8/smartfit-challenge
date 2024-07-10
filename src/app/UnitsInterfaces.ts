export interface Schedule {
  weekdays: string;
  hour: string;
}

export interface Location {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: 'required' | 'recommended';
  towel: 'required' | 'recommended';
  fountain: 'partial' | 'not_allowed';
  locker_room: 'allowed' | 'closed';
  schedules: Schedule[];
}

export interface Units {
  current_country_id: number;
  locations: Location[];
}
