import { Component, OnInit } from '@angular/core';
import { IReviews, Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { PRODUCTS } from 'src/app/models/product.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  // review = PRODUCTS;
  // rev = this.review.reviews;
  sum = 0;

  // =====Practice array to. Napapalabas ko average pag ganito.========
  // arrays: any = [
  //   {
  //     userName: 'blah',
  //     rating: 5,
  //     comment: 'balhj',
  //   },
  //   {
  //     userName: 'blah',
  //     rating: 5,
  //     comment: 'balhj',
  //   },
  //   {
  //     userName: 'blah',
  //     rating: 9,
  //     comment: 'balhj',
  //   },
  // ];
  //  =====Practice array to. Napapalabas ko average pag ganito.========

  constructor(private productService: ProductService) {
    // this.getStarSum();
  }

  ngOnInit(): void {
    this.getProducts();
    // this.getStarSum();
  }
  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  //SUM PALANG KINIKUHA NUNG MGA FUNCTIONS BELOW
  // getStarSum() {
  //   this.sum = this.arrays.reduce((acc: any, val: any) => {
  //     return acc + val.rating;
  //   }, 0);
  // }

  // getStarSum(num: number) {
  //   this.sum += num;
  //   console.log(this.sum);
  // }
}
