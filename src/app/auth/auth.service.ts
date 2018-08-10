
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthService {
  isAuth = false;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}
    signInUser(email: string, password: string) {
    const obj = {
      email: email,
      password: password
    }
     return this.http.post('http://localhost:4600/users/login', obj)
        .subscribe(
          (res) => {
            if (res) {
              this.isAuth = true;
              console.log('Login Successfully', res);
              this.router.navigate(['home', res] );
            }
          },
        (err) => {
            console.log('Invalid Username or password');
      }
        );
    }
    isLogout() {
      this.isAuth = false;
      this.router.navigate(['login']);
    }
    isAuthenticated() {
    return this.isAuth!= false;
    }
}
