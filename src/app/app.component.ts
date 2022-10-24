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
  numbers =  [1,2,3,4,5];



  //pushing number generated in child component to an array in parent component
  addNumber(newNumber: number) {
    this.numbers.push(newNumber);
  }

  //pushing string generated in child component to an array in parent component
  addTypeOfHouse(newHouse: string){
    this.home.push(newHouse);
  }

  activate(event: any) {
    this.test = true
  }
}
