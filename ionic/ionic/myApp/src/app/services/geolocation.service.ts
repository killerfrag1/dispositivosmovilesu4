import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {}

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return {
        lat: coordinates.coords.latitude,
        lon: coordinates.coords.longitude
      };
    } catch (error) {
      console.error('Error getting location', error);
      throw error;
    }
  }
}
