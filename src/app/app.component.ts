import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Code for addtocart functionality
  public totalItem: number = 0;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}


  //// cart
  ngOnInit():void {
    this.productService.getItems()
    .subscribe(res => {
      this.totalItem = res.length;
      console.log(res);
    });
  }

  // search bar
  _searchInput: string = '';
  searchTerm: string = '';

  get searchInput(): string {
    return this._searchInput;
  }
  set searchInput(value: string) {
    this._searchInput = value;
  }

  getInput(searchInput: string) {
    this.productService.updateSearchTerm(this._searchInput);
    this.router.navigateByUrl('/search/'+this._searchInput);
  }





}
