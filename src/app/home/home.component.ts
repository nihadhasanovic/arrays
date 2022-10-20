import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tempArray=[10,2,35,43,59,88,99,105,200,5,7];

  arrayOfObjects:{year:number,  name:string, color: string, wheels: number, doors: number}[] = [
    {
      year:  2001, name: "golf", color: "yellow", wheels: 18, doors: 4
    },
    {
      year: 2005, name: "audi", color: "blue", wheels: 20, doors: 2
    },
    {
      year: 2008, name: "bmw", color: "green", wheels: 19, doors: 4
    }
  ]
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


  constructor() { }

  ngOnInit(): void {
  }

  insertNumber() {
    this.tempArray.push(Math.random())
  }


  //map() method for multiplying each element in an array with 10
  mapMethod(){
    let array2 = [];
    this.array2 = this.tempArray.map(el=>el*10)
    let z = [];
    this.z=this.array2.join(", ");
  }


  //find() to find first number in an array greater than 50

  findMethod() {
    let array3 = [];
    this.array3=this.tempArray.find(el=> el>50)
  }



 //filter() to find every element bigger than 10 and smaller than 50
  filterMethod(){
    let array4 = [];
    this.array4 = this.tempArray.filter(el=> el>10 && el<50)
    let y = [];
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
    let array5 = [];
    this.array5 = this.tempArray.sort();
    let x = [];
    this.x=this.array5.join(", ");
  }

  sortNumbersAscending(){
    let ascendingArray=[];
    this.ascendingArray=this.tempArray.sort((a,b)=>a-b);
    let t = [];
    this.t=this.ascendingArray.join(", ");
  }

  forEachFunction(){
    let totalSum=0;
    this.tempArray.forEach(i=> {totalSum=totalSum+i})
    this.totalSum2=totalSum;
  }
}
