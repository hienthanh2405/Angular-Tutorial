import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public isShow : boolean = false;
  public userName : string = "Nguyen van A";
  public isChecked : boolean = false;
  public age : number;

  constructor() { }

  ngOnInit() {
  }
  
  onToggle(){
    this.isShow = !this.isShow;
  }

  onChange(value){
    this.isChecked = value;
  }

}
