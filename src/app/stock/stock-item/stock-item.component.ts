import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  name : string;
  code: string;
  price : number;
  previousPrice : number;

  /**
   *
   */
  constructor() {
    this.name = "Moody's Corporation";
    this.code = "MCO";
    this.price = 340;
    this.previousPrice = 335;      
  }

}
