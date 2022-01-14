import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product, products } from "../products";

function ProductPage() {
  const { id } = useProductPage();

  return <div></div>;
}

function useProductPage() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    const prodIndex = products.findIndex((p) => p.id === Number(id));
    setProduct(products[prodIndex]);
  }, [id, setProduct]);

  console.log(product);

  return { id };
}

export default ProductPage;
