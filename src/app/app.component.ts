import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Code for addtocart functionality
  public totalItem: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getItems().subscribe((res) => {
      this.totalItem = res.length;
      console.log(res);
    });
  }
}
