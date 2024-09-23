import { inject, Injectable, Signal } from "@angular/core";
import { ProductItemcart } from "../interfaces/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { StorageService } from "./storage.service";
import { map, Observable} from "rxjs";

interface State{
    products: ProductItemcart[],
    loaded: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class cartStateService{

    private _storageService = inject(StorageService)

    private initialState: State = {
        products: [],
        loaded: false,
    };

    loadProducts$ = this._storageService
    .loadProducts().
    pipe(map((products) => ({products, loaded: true})))

    state = signalSlice ({
        initialState: this.initialState,
        sources: [this.loadProducts$],
        actionSources: {
            add: (state, action$: Observable<ProductItemcart>) =>
                action$.pipe(map((product) => this.add(state, product))),
        },

        effects: (state) => ({
            load: () => {
                if(state().loaded){
                    this._storageService.saveProducts(state().products);
                }
                console.log(state.products());
            },
        }),
    });
    
    private add(state: Signal<State>, product: ProductItemcart) {
        const isInCart = state().products.find(
            (productInCart) => productInCart.product.id === product.product.id);
        
        if(!isInCart) {
            return {
            products: [...state().products, {...product, quantity: 1}]
        };
    }

        isInCart.quantity += 1 ;
        return{
            products: [...state().products],
        };
    }
}