import { inject, Injectable } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductsService } from "../../products/data-access/products.service";
import { catchError, map, of, startWith, Subject, switchMap } from "rxjs";
import { IProduct } from "../../shared/interfaces/product.interface";

interface State {
    products: IProduct[];
    status: 'loading' | 'success' | 'error';
    page: number;

}

@Injectable()
export class ProductsSateService {
    private productsService = inject(ProductsService);


    private initialState: State = {
        products: [],
        status: 'loading' as const,
        page: 1,
      };

      changePage$ = new Subject<number>();
      
      LoadProducts$ = this.changePage$.pipe(
        startWith(1),
        switchMap ((page) => this.productsService.getProducts(page)),
        map((products) => ({products, status: 'success' as const})),
        catchError(() =>{
          return of({
            products: [],
            status: 'error' as const,
          });
        })
      );

      state = signalSlice ({
        initialState:  this.initialState,
        sources:[
          this.changePage$.pipe(
            map((page) => ({page, status: 'loading' as const}))
          ),
           this.LoadProducts$
        ],
      });

}