import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'heroes', component: ProductsPageComponent },
  { path: 'search', component: SearchComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
