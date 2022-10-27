import { Component, OnInit } from '@angular/core';
import {LandingService, User} from "../services/landing.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user!: User
  input=false;
  valueInput: User = {
    name: '',
    surname: '',
    id: '',
    age: 0
  }

  constructor(public landing: LandingService) { }

  ngOnInit(): void {
    this.user = this.landing.user
  }

  enterValue() {
    console.log(this.valueInput)
    this.input=true;
  }

  showValue(a){
    a= this.valueInput;
    return a;
  }

  getInfoFromService(){
    this.user=this.landing.getInfo();
    return this.user;

  }

  add(){
    this.landing.user=this.valueInput;
  }





}
