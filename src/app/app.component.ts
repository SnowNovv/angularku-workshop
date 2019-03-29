import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){
  
  let x = {
    key:1,
    key2:2
  }

  let a = [{
    key:1, 
    key2:2
  },{
    key:1,
    key2:2
  }]
  
  for (const index of a) {
    console.log(index);
  }
}
  productList = [
    { productId: "0001", productName: "แปลงสีฟัน", productCost: 50 },
    { productId: "0002", productName: "ยาสีฟัน", productCost: 50 },
    { productId: "0003", productName: "แก้วน้ำ", productCost: 50 }
  ]
  newProduct = { productId: "", productName: "", productCost: 0 }
  selectedProduct = { productId: "", productName: "", productCost: 0 }

  selectProduct(product) {
    this.selectedProduct = product;
    console.log( this.selectedProduct)
  }
}




