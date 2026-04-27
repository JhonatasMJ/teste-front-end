export type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
    listPrice?: number;
}

export type ProductProps = {
    success: boolean;
    products: Product[];
}