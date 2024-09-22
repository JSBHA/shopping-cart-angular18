import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductsSateService } from '../../data-access/product-state.service';
import { cartStateService } from '../../../shared/data-access/cart-state.service';
import { IProduct } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsSateService, ProductsService]
})


export default class ProductListComponent {

  productsState = inject(ProductsSateService);
  cartState = inject (cartStateService).state;

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  } 

  addToCart(product: IProduct){
    this.cartState.add({
      product,
      quantity: 1,
    })
  }

}
