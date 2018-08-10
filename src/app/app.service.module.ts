import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
@Injectable()
export class AppServiceModule {
    constructor(private http: HttpClient) {}

    addUser(name, email, pwd) {
      this.http.post('http://localhost:4600/users/signup',
        {
          name: name,
          email: email,
          password: pwd
        })
        .subscribe(
          (res) => {
            console.log('Added Successfully');
          }
        );
    }
  //   getUser(id: any) {
  //     console.log(id)
  //     return this.http.get('http://localhost:4600/users',{
  //     params: {
  //       'id': id
  //     }
  //   }).map( (res) => {
  //       return res;
  //     });
  // }
  getUser(id: any) {
    console.log(id)
    return this.http.get('http://localhost:4600/users/' + id).map( (res) => {
      return res;
    });
  }
}
