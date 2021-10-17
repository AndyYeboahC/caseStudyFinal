import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  
  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  
  

}
