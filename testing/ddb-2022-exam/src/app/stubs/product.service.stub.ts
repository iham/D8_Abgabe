import {of} from "rxjs";
import {PRODUCTS} from "../mock-data/products";

export class ProductServiceStub {
  getProducts() {
    return of(PRODUCTS);
  }
}
