import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { Voiture } from 'src/app/LesClass/voiture';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Allcars : Voiture[]=[];
  CarForm !: FormGroup;
  hideform = true;
  changeForm(){
    if(this.hideform==true){
      this.hideform = false
    }
    else{
      this.hideform = true
    }
  }
  constructor(private serviceCar : CarsService,private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.CarForm = this.fb.nonNullable.group({
      Marque : [''],
      Photo : [''],
      Prix : 0,
      Dispo : true,
      Location : [''],
      Typedecarbirant : [''],
      nbplace : 5,
      gear : ['']
    });
    this.serviceCar.getAllcars().subscribe((res:any)=>{
      this.Allcars = res;
    })
  }
  Delete(c:number){
    this.serviceCar.deleteCar(c).subscribe(
      () =>  this.Allcars = this.Allcars.filter(l=> l.id != c)
    );
  }
  Add(){
    this.serviceCar.addCar(this.CarForm.value).subscribe(
      data => this.Allcars.push(data)
    )
  }
  Change(form : Voiture){
    this.hideform = false;
    this.CarForm.get('Marque')?.setValue(form.Marque);
    this.CarForm.get('Photo')?.setValue(form.Photo);
    this.CarForm.get('Prix')?.setValue(form.Prix);
    this.CarForm.get('Dispo')?.setValue(form.Dispo);
    this.CarForm.get('Location')?.setValue(form.Location);
    this.CarForm.get('Typedecarbirant')?.setValue(form.Typedecarbirant);
    this.CarForm.get('nbplace')?.setValue(form.nbplace);
    this.CarForm.get('gear')?.setValue(form.gear);
  }
  Update(c:Voiture){
    this.serviceCar.updateCar(c.id,this.CarForm.value).subscribe();
  }


}
