import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AppServiceModule} from "./app.service.module";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "./header/header.component";
import { DetailComponent } from './home/detail/detail.component';
import { ShortenPipe } from './shorten.pipe';
import { TestDirective } from './test.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    DetailComponent,
    ShortenPipe,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppServiceModule, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
