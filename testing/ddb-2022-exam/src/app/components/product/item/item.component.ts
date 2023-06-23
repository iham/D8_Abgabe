import {Component, Input} from "@angular/core";
import {Product} from "../../../models/Product";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input('product') product: Product | undefined;

  constructor(private cartService: CartService) {
  }

  addToCart(product: Product | undefined): void {
    if (product === undefined) return;
    this.cartService.addToCart(product);
  }

}
