import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductItemcart } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root',
})

export class StorageService {
    loadProducts(): Observable<ProductItemcart[]> {
        const rawProducts = localStorage.getItem('products');

        return of ( rawProducts ? JSON.parse(rawProducts) : []);
    }

    saveProducts(products: ProductItemcart[]): void{
        localStorage.setItem('products', JSON.stringify(products));
    }
}