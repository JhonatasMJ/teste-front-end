type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export type ProductProps = {
    success: boolean;
    products: Product[];
}