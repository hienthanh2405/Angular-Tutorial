import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public isShow: boolean = false;
  public userName: string = "Nguyen van A";
  public isChecked: boolean = false;
  public age: number;
  public names: string[] = ['TPHCM', 'Hà Nội', 'Vĩnh Long', 'Cần thơ'];
  public dataFromServer : string[] = ['TPHCM', 'Hà Nội', 'Vĩnh Long', 'Cần thơ', 'Hạ Long', 'Tiền Giang'];
  public products: any[] = [
    {
      id: 1,
      name: 'Iphone 6 plus',
      price: 200000
    },
    {
      id: 2,
      name: 'Iphone 7 plus',
      price: 200000
    },
    {
      id: 3,
      name: 'samsung S6',
      price: 200000
    },
    {
      id: 4,
      name: 'samsung S7',
      price: 200000
    },
    {
      id: 5,
      name: 'samsung S8',
      price: 200000
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.isShow = !this.isShow;
  }

  onChange(value) {
    this.isChecked = value;
  }

  onLoadData(){
    this.names = this.dataFromServer;
  }
  myTrackByFunction(index, item){
    return item.id;
  }


}
