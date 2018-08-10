import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthGuard} from "./auth/auth-guard.service";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./home/detail/detail.component";

export const appRoute: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
   {path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard], children: [
     {path: 'detail', component: DetailComponent, canActivateChild: [AuthGuard]}
     // { path: '**', redirectTo: '/login', pathMatch: 'full'}
    // {path: ':id', component: HomeComponent, canActivate: [AuthGuard]}
   ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
