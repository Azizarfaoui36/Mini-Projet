import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../LesClass/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  isconnected : boolean = false;
  prcessedLogin(param : any){
     return this.http.post("http://localhost:3000/login",param);
  }
  getLogin(){
     return this.http.get<any>('http://localhost:3000/login');
  }
}
