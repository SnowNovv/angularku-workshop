import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  addedProduct: any;
  get cartProduct(): any {
    return this.addedProduct;
  }
  @Input()
  set cartProduct(val: any) {
    console.log(val);
    if(val){
      this.cartList.push(val);
    }
    console.log(this.cartList)
  }

  cartList: any = [];
  constructor() { }

  ngOnInit() {

  }

}
