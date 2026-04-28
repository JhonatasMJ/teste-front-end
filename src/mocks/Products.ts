import type { Product, ProductProps } from "@/types/productsData";

const rawProducts: Omit<Product, "listPrice">[] = [
  {
    productName: "Iphone 11 PRO MAX BRANCO 1",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 15000,
  },
  {
    productName: "IPHONE 13 MINI 1",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 9000,
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 2",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 14990,
  },
  {
    productName: "IPHONE 13 MINI 2",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 12000,
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 3",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 4550,
  },
  {
    productName: "IPHONE 13 MINI 3",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 38000,
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 4",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 42000,
  },
  {
    productName: "IPHONE 13 MINI 4",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 520,
  },
  {
    productName: "Iphone 11 PRO MAX BRANCO 5",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 149990,
  },
  {
    productName: "IPHONE 13 MINI 5",
    descriptionShort:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    photo:
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
    price: 100000,
  },
];

export const productsData: ProductProps = {
  success: true,
  products: rawProducts.map((p) => ({
    ...p,
    listPrice: Math.round(p.price * 1.08),
  })),
};
