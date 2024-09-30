import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { cartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemcart } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styles: ``
})

export  default class CartComponent {

  state = inject(cartStateService).state;

  onRemove(id: number) {
    this.state.remove(id)
  }

  onIncrease(product: ProductItemcart) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity +1,
    });
  }

  onDecrease(product: ProductItemcart) {
    this.state.udpate({
      ...product,
      quantity: product.quantity -1,
    });
  }


}
