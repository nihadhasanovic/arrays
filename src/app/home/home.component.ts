import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  tempArray=[10,2,35,43,59,88,99,105,200,5,7];

  array2: any;
  array3: any;
  array4: any;
  array5: any;
  total: any;
  totalSum: any;
  totalSum2: any;
  ascendingArray: any;
  t:any;
  x:any;
  y:any;
  z:any;


  @Input() hamdija: any;
  @Output() hamdija2: any = new EventEmitter<any>();

  @Input() home = "building";
  @Output() newHouse = new EventEmitter<string>();

  @Output() newNumberEvent = new EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }


  //creating a random number between 0 and 50
  addNewNumber()
  {
    let value = Math.random()*50;
    this.newNumberEvent.emit(value);
  }

  //adding new item to an array of strings [homes]
  addNewType(value: string)
  {
    this.newHouse.emit(value);
  }

  insertNumber() {
    this.tempArray.push(Math.random())
  }


  //map() method for multiplying each element in an array with 10
  mapMethod(){

    this.array2 = this.tempArray.map(el=>el*10)
    this.z=this.array2.join(", ");
  }


  //find() to find first number in an array greater than 50

  findMethod() {

    this.array3=this.tempArray.find(el=> el>50)
  }



 //filter() to find every element bigger than 10 and smaller than 50
  filterMethod(){

    this.array4 = this.tempArray.filter(el=> el>10 && el<50)
    this.y=this.array4.join(", ");
  }

  sumOfElements(){
    let sum = 0;
    for (let i=0; i<this.tempArray.length; i++){
      sum = sum+this.tempArray[i];
    }
    this.total=sum;
  }


  sortElements(){

    this.array5 = this.tempArray.sort();
    this.x=this.array5.join(", ");
  }

  sortNumbersAscending(){

    this.ascendingArray=this.tempArray.sort((a,b)=>a-b);
    this.t=this.ascendingArray.join(", ");

  }

  forEachFunction(){
    let totalSum=0;
    this.tempArray.forEach(i=> {totalSum=totalSum+i})
    this.totalSum2=totalSum;
  }
}
