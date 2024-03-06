import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/Day1/navBar/navBar.component';
import { FooterComponent } from './components/Day1/footer/footer.component';
import { AsideComponent } from './components/Day1/aside/aside.component';
import { HomeComponent } from './components/Day1/home/home.component';
import { SliderComponent } from './components/Day2/slider/slider.component';
import { StudentRegistrationComponent } from './components/Day2/student-registration/student-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/Day3/product/product.component';
import { ProductDetailsComponent } from './components/Day3/product-details/product-details.component';
import { ProductFormComponent } from './components/Day3/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    SliderComponent,
    StudentRegistrationComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
