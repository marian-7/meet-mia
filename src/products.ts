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
];
