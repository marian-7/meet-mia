export interface ProductCategory {
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  price: number;
  category: ProductCategory;
  imgUrl: string;
}

export const productCategories: ProductCategory[] = [
  {
    name: "Torte",
    slug: "torte",
  },
  {
    name: "Kolači",
    slug: "kolaci",
  },
  {
    name: "Slane poslastice",
    slug: "slano",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Torta Cvječarka",
    rating: 4,
    price: 450,
    category: productCategories[0],
    imgUrl: "/torta1.jpeg",
  },
  {
    id: 2,
    name: "Dugina Torta",
    rating: 5,
    price: 300,
    category: productCategories[0],
    imgUrl: "/torta2.jpeg",
  },
  {
    id: 3,
    name: "Slatki Grijeh",
    rating: 3,
    price: 350,
    category: productCategories[0],
    imgUrl: "/torta3.jpeg",
  },
  {
    id: 4,
    name: "Vrtlar",
    rating: 5,
    price: 250,
    category: productCategories[0],
    imgUrl: "/torta4.jpeg",
  },
  {
    id: 5,
    name: "Crni Vrag",
    rating: 4,
    price: 30,
    category: productCategories[1],
    imgUrl: "/kolac1.jpeg",
  },
  {
    id: 6,
    name: "Majmunsko oko",
    rating: 5,
    price: 45,
    category: productCategories[1],
    imgUrl: "/kolac2.jpeg",
  },
  {
    id: 7,
    name: "Gorilla",
    rating: 5,
    price: 25,
    category: productCategories[1],
    imgUrl: "/krafna1.jpeg",
  },
  {
    id: 8,
    name: "TMNT Kroasan",
    rating: 4,
    price: 200,
    category: productCategories[2],
    imgUrl: "/kroasan1.jpeg",
  },
  {
    id: 9,
    name: "Kiša Jagoda",
    rating: 4,
    price: 30,
    category: productCategories[1],
    imgUrl: "/kolac3.jpeg",
  },
  {
    id: 10,
    name: "Elegantni Prstić",
    rating: 3,
    price: 15,
    category: productCategories[1],
    imgUrl: "/kolac5.jpeg",
  },
  {
    id: 11,
    name: "Suhan",
    rating: 3,
    price: 15,
    category: productCategories[1],
    imgUrl: "/kolac4.jpeg",
  },
  {
    id: 12,
    name: "Zlatni rez",
    rating: 4,
    price: 30,
    category: productCategories[1],
    imgUrl: "/kolac6.jpeg",
  },
  {
    id: 13,
    name: "Snickers",
    rating: 5,
    price: 20,
    category: productCategories[1],
    imgUrl: "/kolac7.jpeg",
  },
  {
    id: 14,
    name: "Basic K",
    rating: 4,
    price: 10,
    category: productCategories[2],
    imgUrl: "/kroasan2.jpeg",
  },
  {
    id: 15,
    name: "Redasan",
    rating: 4,
    price: 15,
    category: productCategories[2],
    imgUrl: "/kroasan3.jpeg",
  },
  {
    id: 16,
    name: "Vege Muffin",
    rating: 4,
    price: 20,
    category: productCategories[2],
    imgUrl: "/muffin-slano1.jpeg",
  },
  {
    id: 17,
    name: "Vegeel",
    rating: 4,
    price: 15,
    category: productCategories[2],
    imgUrl: "/sendvic1.jpeg",
  },
  {
    id: 18,
    name: "Tunawitch",
    rating: 5,
    price: 20,
    category: productCategories[2],
    imgUrl: "/sendvic2.jpeg",
  },
  {
    id: 19,
    name: "Slanikros",
    rating: 5,
    price: 20,
    category: productCategories[2],
    imgUrl: "/sendvic3.jpeg",
  },
  {
    id: 20,
    name: "Mladenka",
    rating: 5,
    price: 240,
    category: productCategories[0],
    imgUrl: "/torta5.jpeg",
  },
  {
    id: 21,
    name: "Lumen",
    rating: 4,
    price: 360,
    category: productCategories[0],
    imgUrl: "/torta6.jpeg",
  },
  {
    id: 22,
    name: "Rose",
    rating: 5,
    price: 320,
    category: productCategories[0],
    imgUrl: "/torta7.jpeg",
  },
  {
    id: 23,
    name: "Cloud",
    rating: 4,
    price: 270,
    category: productCategories[0],
    imgUrl: "/torta8.jpeg",
  },
  {
    id: 24,
    name: "Snješko",
    rating: 4,
    price: 15,
    category: productCategories[2],
    imgUrl: "/kroasan4.jpeg",
  },
];
