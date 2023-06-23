import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../../../models/Product";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {

  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productService.getProducts();
  }


}
