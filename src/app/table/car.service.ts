import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  private carsUrl = 'api/cars';  // URL to web api

  getCarsSmall(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carsUrl).pipe();
  }
}
