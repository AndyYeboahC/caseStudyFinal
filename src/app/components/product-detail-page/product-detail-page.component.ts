import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PRODUCTS } from 'src/app/models/product.mock';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | undefined;

  public productList: any;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();

    this.productService.getItems().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any,) => {
        Object.assign(a, { total: a.price });
      });


    });
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  goBack(): void {
    this.location.back();
  }

  addcart(product: any) {
  //CHECK IF EXISTING SI ITEM NA UNG ITEM USING cartItem.id
    if(this.productList.some((cartItem:any,) => cartItem.id === product.id)){
      product.quantity++;


  // first attempt, quantity will be = to 1 because of line 32 to 33... what we need is grab that quantity then increment by 1
    } else {
  // KUNG WALA, ILALAGAY NYA UNG ITEM NA UN SA ARRAY.. CALLING addtoCart
      let cartItem = this.productService.addtoCart(product);
      product.quantity++;
    }
  }
}
