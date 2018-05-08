import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  public name : string = "Nguyen van A";
  public age : number = 20;
  public isMarried : boolean = false;  
  public link : string = "https://news.zing.vn";
  public textLink : string = "Go to Zing.vn";
  public user : object = {
    name : 'Nguyen van B',
    age : 21,
    isMarried : true
  }
  public isValid : boolean = false; 
  public tbWidth : number = 500;
  public isBorder : boolean = true;
  public isChecked : number = 0; //1: add class, 0 remove class
  public isSpecial : boolean = true;
  public size : number = 24;


  constructor() { }

  ngOnInit() {
  }
  showInfo(){
    return `Tên : ${this.user['name']}`;
  }

}
