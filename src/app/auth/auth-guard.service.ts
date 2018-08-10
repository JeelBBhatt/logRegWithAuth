import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
import {
  ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    // return this.authService.isAuthenticated();
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);    // redirect to login page for example
      return false;
    }
  }
  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    // return this.authService.isAuthenticated();

  if (this.authService.isAuthenticated()) {
    return true;
  } else {
    this.router.navigate(['/login']);    // redirect to login page for example
    return false;
  }}
  }


