import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppServiceModule} from "../../app.service.module";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 // user: any;
  constructor(private route: ActivatedRoute, private service: AppServiceModule) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.user = this.service.getUser(params['id']).subscribe(res => {
    //     this.user = res;
    //   });
    // });
  }

}
