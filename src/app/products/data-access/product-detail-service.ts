import { inject, Injectable } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductsService } from "../../products/data-access/products.service";
import { IProduct } from "../../shared/interfaces/product.interface";
import { map, Observable, switchMap } from "rxjs";

interface State {
    product: IProduct | null;
    status: 'loading' | 'success' | 'error';
  

}

@Injectable()
export class ProductsDetailSateService {

    private productsService = inject(ProductsService);


    private initialState: State = {
        product: null ,
        status: 'loading' as const,
      };

      state = signalSlice ({
        initialState:  this.initialState,
        actionSources:{
            getById: (_state, $: Observable<string>) =>
                 $.pipe(
                switchMap((id) => this.productsService.getproduct(id)),
                map((data) => ({ product: data,
                     status: 'success' as const })),
              )
        }
      });

}