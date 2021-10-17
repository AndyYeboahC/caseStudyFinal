import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
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

// search bar
  _searchInput: string = '';
  searchTerm: string = '';
  //// cart
  ngOnInit():void {
    this.productService.getItems()
    .subscribe(res => {
      this.totalItem = res.length;
      console.log(res);
    });
  }

  get searchInput(): string {
    return this._searchInput;
  }
  set searchInput(value: string) {
    this._searchInput = value;
   // this.filteredProducts = this.performSearch(value);
  }
  getInput(searchInput: string) {
    this.productService.updateSearchTerm(this._searchInput);
    this.router.navigateByUrl('/search/'+this._searchInput);
    console.log('trial' + searchInput);
  }





}
