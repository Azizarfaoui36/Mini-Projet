import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/LesClass/voiture';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-selectedcar',
  templateUrl: './selectedcar.component.html',
  styleUrls: ['./selectedcar.component.css']
})
export class SelectedcarComponent implements OnInit {
  idCar!:number;
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private serviceCar:CarsService,private router : Router) { 
  }

  ngOnInit(): void {
    this.idCar = this.activatedRoute.snapshot.params['id'];
    this.getCar();
  }
  getCar(){
    this.serviceCar.getCarbyId(this.idCar).subscribe(res=>{
       this.data = res;
    })
  }
  goback(){
    this.router.navigate(['/cars']);
  }

}
