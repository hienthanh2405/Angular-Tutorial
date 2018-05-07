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

  constructor() { }

  ngOnInit() {
  }
  showInfo(){
    return `Tên : ${this.user['name']}`;
  }

}
