import { Component } from '@angular/core';
import { products } from 'src/app/_shared/fake/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products = products;
  basket: Product[] = [];


  getTotal(): string {
    let total = 0;
    
    for (let item of this.basket) {
      total += item.price * item.quantity;

    }
    return total.toFixed(2) + 'TL';

  }
  decreaseAmount(product: Product): void {
    if (product.quantity == 0) {
      return;
    }
    product.quantity--;
     this.removeIfZero(product);


  }

  increaseAmount(product: Product): void {
   this.addIfNotInBasket(product);
    product.quantity++;
  }
  removeIfZero (product : Product) : void {
    if(product.quantity == 0) {
      let index = this.basket.indexOf(product);
      this.basket.splice(index, 1);
}
  }
  addIfNotInBasket(product : Product) : void {
    if (!this.basket.includes(product) && product.quantity > 0) {
      this.basket.push(product);
    }
  }
  updateBasket (product : Product) : void {
    this.removeIfZero(product);
    this.addIfNotInBasket(product);
  }
  

}
type Product = {
  id: number,
  name: string,
  photoPath: string,
  price: number,
  unit: string,
  quantity: number
}
