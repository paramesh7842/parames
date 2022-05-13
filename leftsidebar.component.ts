import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {
  customerName:any;
  x:any
  addMenu:any;
  storeitems:any = [];

  constructor() { }

  ngOnInit(): void {
  }
  UserName(event:any){
    this.x=this.customerName;
    this.customerName = "";
  }
  menuitemsadding(event:any){
    this.addMenu;
    this.storeitems.push(this.addMenu);
    this.addMenu="";

  }
}

