import { Component, input, output } from '@angular/core';
import { ProductItemcart } from '../../../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemcart>();

  onRemove = output<number>();

  onIncrease = output<ProductItemcart>();

  onDecrease = output<ProductItemcart>();

}
