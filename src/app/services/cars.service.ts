import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../LesClass/voiture';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http:HttpClient) { }
  getAllcars(){
   return this.http.get('http://localhost:3000/Cars');
  }
  getCarbyId(id:number){
    return this.http.get('http://localhost:3000/Cars/'+id);
  }
  deleteCar(id:number){
    return this.http.delete('http://localhost:3000/Cars/'+ id);
  }
  addCar(l:Voiture):Observable<Voiture>{
    return this.http.post<Voiture>('http://localhost:3000/Cars/',l);
  }
  updateCar(id:number, c:Voiture):Observable<Voiture>{
    return this.http.put<Voiture>('http://localhost:3000/Cars/'+ id, c);
  }
}
