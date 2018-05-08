import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  public title : string = 'Event Binding';
  public count : number = 0;
  public username : string = "";
  public name : string ='';

  constructor() { }

  ngOnInit() {
  }
  onClickMe(event){
    // alert('Hellooooo');
    console.log(event.target.innerText);
  };

  onDbClickMe(event){
    console.log(event.target.innerText);
  };

  onInc(){
    this.count += 1;
  };

  onKeyUp(event){
    // console.log(event.target.value);
    this.username = event.target.value; 
  };
  onKeyUpEnter(event){
    this.name = event.target.value;
  }

}
