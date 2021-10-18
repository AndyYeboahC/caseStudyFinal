import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  OnInit {

  public _searchInput = '';
  

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  performSearch(searchBy: string): Product[] {
    searchBy = searchBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.name.toLocaleLowerCase().includes(searchBy) || product.description.toLocaleLowerCase().includes(searchBy) );
  }
 
  ngOnInit(): void {
    this.getFilteredProducts();
    this._searchInput = this.productService.getSearchTerm();
    this.filteredProducts = this.performSearch(this._searchInput);
  }
  
  getFilteredProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  
 

}
