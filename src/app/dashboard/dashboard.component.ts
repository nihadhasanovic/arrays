import { Component, OnInit } from '@angular/core';
import {LandingService, User} from "../services/landing.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user!: User
  valueInput: User = {
    name: '',
    surname: '',
    id: '',
    age: 0
  }

  constructor(public landingService: LandingService) { }

  ngOnInit(): void {
    this.user = this.landingService.user
  }

  enterValue() {
    console.log(this.valueInput, 'samo da vidis sta je ovo')
  }

}
