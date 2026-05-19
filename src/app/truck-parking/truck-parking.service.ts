import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TruckParkingService {
  private readonly http = inject(HttpClient);

  getParkings() {
    return this.http.get('/api/parkings');
  }
}
