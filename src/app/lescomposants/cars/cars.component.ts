import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/LesClass/voiture';
import { CarsService } from 'src/app/services/cars.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  AllCars: Voiture[] = [];
  Keyword: string = '';
  prix : number = 200;
  constructor(private carService: CarsService) {}
  ngOnInit(): void {
    this.carService.getAllcars().subscribe((car: any) => {
      this.AllCars = car;
    });
  }
 getwithfilter() {
    if (this.Keyword == '') {
      this.carService.getAllcars().subscribe((car:any): void => {
        this.AllCars = car;
      });
    } else {
      this.AllCars = this.AllCars.filter((res) =>
        res.Marque.toLowerCase().includes(this.Keyword.toLowerCase())
      );
    }
  }
  changeValue(event:any){
    this.prix = event.target.value;
    if(this.prix==200){
      this.carService.getAllcars().subscribe((car:any): void => {
        this.AllCars = car;
      });
    }
    else{
      this.carService.getAllcars().subscribe((car:any): void => {
        this.AllCars = this.AllCars.filter(value=>value.Prix<this.prix);
      });
    }
  }
}
