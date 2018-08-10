import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppServiceModule} from "../app.service.module";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: AppServiceModule) { }

  ngOnInit() {
  }

  onAddUser(form: NgForm) {
    console.log(form.value);
    this.service.addUser(form.value.name, form.value.email, form.value.password);
    form.reset();
  }

}
