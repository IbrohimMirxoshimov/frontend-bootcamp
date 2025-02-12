import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${params.id}`)
      .then((res) => {
        setProduct(res.data.data.data);
      });
  }, []);

  if (!product) {
    return <div>Yuklanmoqda</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">Product page</h1>
      <div className="flex gap-2 overflow-auto">
        {product.large_images.map((image) => {
          return (
            <img
              key={image}
              src={image}
              className="h-40"
            />
          );
        })}
      </div>
      <div className="text-xl font-bold">{product.name}</div>
    </div>
  );
}
