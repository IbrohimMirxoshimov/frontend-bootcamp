import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components-mini-shop/ProductCard";

export default function HomePage() {
  const [productState, set] = useState({
    products: [],
    loading: false,
  });

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=new_products"
      )
      .then((res) => {
        set({
          loading: false,
          products: res.data.data.data,
        });
      });
  }, []);


  return (
    <div>
      <h1 className="text-2xl">Home page</h1>
      {productState.loading ? (
        <div>Yuklanmoqda...</div>
      ) : (
        <ProductCards products={productState.products} />
      )}
    </div>
  );
}

function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
}
