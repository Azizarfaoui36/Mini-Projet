import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './lescomposants/nav/nav.component';
import { HomeComponent } from './lescomposants/home/home.component';
import { AboutComponent } from './lescomposants/about/about.component';
import { CarsComponent } from './lescomposants/cars/cars.component';
import { ContactComponent } from './lescomposants/contact/contact.component';
import { EuroPipe } from './euro.pipe';
import { ErrorComponent } from './lescomposants/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarslistComponent } from './lescomposants/carslist/carslist.component';
import { SelectedcarComponent } from './lescomposants/selectedcar/selectedcar.component';
import { AdminComponent } from './lescomposants/admin/admin.component';
import { LoginComponent } from './lescomposants/login/login.component';
import { SingupComponent } from './lescomposants/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CarsComponent,
    ContactComponent,
    EuroPipe,
    ErrorComponent,
    CarslistComponent,
    SelectedcarComponent,
    AdminComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
