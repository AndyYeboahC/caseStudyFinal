import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product.interface';
import { PRODUCTS } from 'src/app/models/product.mock';
import { InteractionService } from './interaction.service';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private interactionService: InteractionService) {}
  getProducts(): Observable<Product[]> {
    const heroes = of(PRODUCTS);
    this.interactionService.add('InteractionService: fetched heroes');
    return heroes;
  }
  getProduct(id: number): Observable<Product> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const product = PRODUCTS.find((x) => x.id === id)!;
    this.interactionService.add(`HeroService: fetched hero id=${id}`);
    return of(product);
  }
}
