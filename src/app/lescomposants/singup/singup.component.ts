import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  SignupForm !: FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private SignupService : AuthService) { }

  ngOnInit(): void {
    this.SignupForm = this.fb.nonNullable.group({
      email : ['',Validators.required],
      password : ['',Validators.minLength(5)]
    })
  }
  Add(){
    this.SignupService.prcessedLogin(this.SignupForm.value).subscribe();
    alert('successfully done');
    this.router.navigate(['/login']);
  }
  change(){
    this.router.navigate(['/login']);
  }
}
