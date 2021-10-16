import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-to-cart-page',
  templateUrl: './add-to-cart-page.component.html',
  styleUrls: ['./add-to-cart-page.component.scss']
})
export class AddToCartPageComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getItems().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.productService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.productService.removeCartItem(item);
  }

  emptycart(){
    this.productService.removeAllCart();
  }
}
