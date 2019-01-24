import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { HomeComponent } from './components/home/home.component';
import { Constants } from './utilities/constants';
import { UserService } from '../app/Services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { RouterModule, Routes } from '@angular/router';
import { NavadminComponent } from './components/navadmin/navadmin.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'NavigationAdmin', component: NavadminComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    RegisterformComponent,
    NavadminComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false })
  ],
  providers: [Constants,UserService],   //Dependency injection entries
  bootstrap: [AppComponent]
})
export class AppModule { }
