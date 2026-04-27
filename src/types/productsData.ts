export type Product = {
    productName: string;
    descriptionShort: string;
    photo: string;
    /** Preço atual em centavos */
    price: number;
    /** Preço anterior (de) em centavos — opcional; exibe riscado quando maior que price */
    listPrice?: number;
}

export type ProductProps = {
    success: boolean;
    products: Product[];
}