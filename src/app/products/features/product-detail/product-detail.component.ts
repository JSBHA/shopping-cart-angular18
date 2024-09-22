import { Component, inject,} from '@angular/core';
import { ProductsDetailSateService } from '../../data-access/product-detail-service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductsDetailSateService]
  
})
export default class ProductDetailComponent {

   id?: string;

  productsDetailState = inject(ProductsDetailSateService).state;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? ''; // Captura el ID de la ruta
      console.log(this.id); // Verifica que estás capturando el ID correctamente
      this.productsDetailState.getById(this.id); // Llama a la función para obtener el producto
    });
  }
}


