import {Injectable} from '@angular/core';
import {Product} from "../models/Product";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];
  cartValue$: Subject<any> = new Subject<number>();

  constructor() {
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.sumCart();
  }

  sumCart(): Subject<any> {
    const price = this.cart.reduce((sum, product) => sum + product.price, 0);
    this.cartValue$.next(price);
    return this.cartValue$;
  }

  productsInCart(): Product[] {
    return this.cart;
  }

  removeProduct(i: number) {
    this.cart.splice(i, 1);
    this.sumCart();
  }
}
