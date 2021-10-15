import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { AddToCartPageComponent } from './components/add-to-cart-page/add-to-cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    InteractionComponent,
    SearchComponent,
    AddToCartPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
