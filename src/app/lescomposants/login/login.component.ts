import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/LesClass/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  tablogin : Auth []=[];
  checkit : boolean = false;
  constructor(private loginService : AuthService,private fb :FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
    this.loginService.getLogin().subscribe((data:any)=>{
      this.tablogin = data
    })
   }
  change(){
    this.router.navigate(['/Signup']);
  }
  user : boolean = false;
  check(){
    this.loginService.getLogin().subscribe(res=>{
      this.user = res.find((a:any)=>{
        return a.email == this.loginForm.value.email && a.password==this.loginForm.value.password;
      })
      if(this.user){
        this.loginService.isconnected = true;
        this.router.navigate(['admin']);
      }
      else{
        this.loginService.isconnected = false;
        this.loginForm.reset();
      }
    })
  }

}
