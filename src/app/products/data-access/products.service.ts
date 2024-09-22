
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { IProduct } from "../../shared/interfaces/product.interface";

const LIMIT = 5;

@Injectable({providedIn: 'root'})
export class ProductsService extends BaseHttpService{
      getProducts(page: number):Observable<IProduct[]> {
        return this.http.get<[]>(`${this.apiUrl}/products`, {
         params: {
            limit: page * LIMIT,
         },
        });
     }

     getproduct(id: string): Observable<IProduct> {
       return this.http.get<IProduct>(`${this.apiUrl}/products/${id}`);

     }
}