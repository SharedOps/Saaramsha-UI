import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './controllers/home/home.component';
import { AboutUsComponent } from './controllers/about-us/about-us.component';
import { ContactUsComponent } from './controllers/contact-us/contact-us.component';
import { ClientsComponent } from './controllers/clients/clients.component';
import { ServicesComponent } from './controllers/services/services.component';
import { PartnersComponent } from './controllers/partners/partners.component';
import { LoginComponent } from './controllers/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ClientsComponent,
    ServicesComponent,
    PartnersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
