export interface IProduct {

    category:    string;
    description: string;
    id:          number;
    image:       string;
    price:       number;
    title:       string;
    rating:      {rate: number; count: number};
    
}

export interface ProductItemcart {
    product: IProduct;
    quantity: number;

}