import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { AddToCartPageComponent } from './components/add-to-cart-page/add-to-cart-page.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingComponent } from './components/product-detail-page/star-rating/star-rating.component';
import { NgbRatingComponent } from './components/product-detail-page/ngb-rating/ngb-rating.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailPageComponent,
    SearchComponent,
    AddToCartPageComponent,
    StarRatingComponent,
    NgbRatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
