import { Component, Input, OnInit } from '@angular/core';
import { Voiture } from 'src/app/LesClass/voiture';

@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {
  @Input("cars")c!:Voiture;
  constructor() { }

  ngOnInit(): void {
  }

}
