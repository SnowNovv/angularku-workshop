import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cal-product',
  templateUrl: './cal-product.component.html',
  styleUrls: ['./cal-product.component.css']
})
export class CalProductComponent implements OnInit {
  @Input() selectedProduct:any;


  addedProduct :any;
  constructor() { }

  addProduct(){
    this.addedProduct = this.selectedProduct;
  }
  ngOnInit() {
  }

}
