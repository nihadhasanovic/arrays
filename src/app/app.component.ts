import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arraysObjects';
  test = false;
  currentHome = "house";
  home = ["building", "apartman"];
  houses:any;


  addTypeOfHouse(newHouse: string){
    this.home.push(newHouse);
  }

  activate(event: any) {
    this.test = true
  }
}
