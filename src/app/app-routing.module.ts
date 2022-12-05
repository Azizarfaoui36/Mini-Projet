import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './lescomposants/about/about.component';
import { AdminComponent } from './lescomposants/admin/admin.component';
import { CarsComponent } from './lescomposants/cars/cars.component';
import { ContactComponent } from './lescomposants/contact/contact.component';
import { ErrorComponent } from './lescomposants/error/error.component';
import { HomeComponent } from './lescomposants/home/home.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { SelectedcarComponent } from './lescomposants/selectedcar/selectedcar.component';
import { SingupComponent } from './lescomposants/singup/singup.component';

const routes: Routes = [
  {path:'home', title:'Car For You', component:HomeComponent},
  {path:'contact', title:'Contact', component:ContactComponent},
  {path:'cars', title:'Cars', component:CarsComponent},
  {path:'about', title:'About', component:AboutComponent},
  {path:'cars/:id',title:'Selected Car', component:SelectedcarComponent},
  {path:'admin', title:'Admin', component:AdminComponent,canActivate:[AuthGuard]},
  {path:'login', title:'login', component:LoginComponent},
  {path:'Signup', title:'Signup', component:SingupComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', title:'Erreur', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
