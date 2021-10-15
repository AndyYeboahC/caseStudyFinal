import { Component, OnInit } from '@angular/core';
// import { Http2ServerResponse } from 'http2';
import { Product } from 'src/app/models/product.interface';
// import { PRODUCTS } from 'src/app/models/product.mock';
import { ProductService } from './../../services/product.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
