import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cars: Car[];
  cols: any[];
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  getCars(): void {
    this.carService.getCarsSmall()
      .subscribe(cars => this.cars = cars);
  }

}
