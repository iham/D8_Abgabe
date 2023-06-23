import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: number | undefined = 0;
  products: Product[] = [];
  visible: boolean = false;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.sumCart().subscribe((value) => {
      this.total = value;
    });

    this.products = this.cartService.productsInCart();
  }

  toggleCart() {
    this.visible = !this.visible;
  }

  removeProduct(i: number) {
    this.cartService.removeProduct(i);
  }
}
