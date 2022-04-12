import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = [
    {count : 5, cost : 93.18},
    {count : 9, cost : 162},
    {count : 1, cost : 3.99},
    {count : 12, cost : 267.1},
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
