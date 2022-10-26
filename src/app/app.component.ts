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
  colorChar='red';
  bla = [4,5,6,7];

  car:{type: string, model: string, year: number, modern:boolean, expensive:boolean}[]=[
    {type: "Golf", model: "mk4", year: 2001, modern:false, expensive: false},
    {type: "Audi", model: "rs6", year: 2020, modern:true, expensive: true},
    {type: "BMW", model: "e60", year: 2010, modern: false, expensive: false},
    {type: "Passat", model: "b8", year: 2019, modern: true, expensive: false},
    {type: "Nissan", model: "Gtr", year: 2020, modern:true, expensive: true},
    {type: "Kia", model: "sportage", year: 2015, modern: false, expensive: false},
  ];

  arr = ['abcdef','ghijkl','mnoprs','stuvwxyz'];
  styles:any[]=[];

  //change function to complete an action and reverse it
  toggle(index:number)  //A function that change the variable
  {
    if (!this.styles[index])
      this.styles[index]={
        'background-color':'yellow',
        'border':'lightgray',
        'font-size':'20px',
        'color':'darkgreen'}
    else
      this.styles[index]=null;
  }

  selectedIndex:number=-1

  toggleS(index:number)
  {
    if (this.selectedIndex==index)
      this.selectedIndex=-1;
    else
      this.selectedIndex=index;
  }


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

  styleText(a)
  {
    let myStyle;
    if(a.modern==true && a.expensive==true) {
      myStyle = {
        'background-color': 'red',
        'font-size.px': 20,
        'text-decoration': 'underline',
        'font-style': 'italic'
      }
    }
    return myStyle;
  }

  change() {
    return {
      'firstStyle': true,
      'secondStyle': false
    }
  }

}
