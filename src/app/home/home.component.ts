import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AppServiceModule} from "../app.service.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;
  id: any;
  flag = false;
  constructor(private authService: AuthService, private route: ActivatedRoute,
              private service: AppServiceModule,  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params ) => {
      console.log(params)
      this.user = this.service.getUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });

    // this.route.queryParams.subscribe(
    //   (params) => {
    //     this.id = params['id'];
    //     this.service.getUser(this.id).subscribe(res => {
    //       this.user = res;
    //       console.log(this.user);
    //     });
    //
    //   });
  }
  onClick() {
    this.router.navigate(['detail'],{relativeTo: this.route});
    this.flag = true;
  }

}
