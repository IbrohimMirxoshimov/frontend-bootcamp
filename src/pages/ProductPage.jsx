import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useMyStore from "../my-store";
import ProductCard from "../components-mini-shop/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState();
  const state = useMyStore();

  useEffect(() => {
    setProduct();
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${params.id}`)
      .then((res) => {
        setProduct(res.data.data.data);
      });
  }, [params.id]);

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
      <Button
        type="primary"
        block
        onClick={() => {
          state.onAdd(product);
        }}
      >
        Savatga qo'shish
      </Button>
      {product ? <Accessuar productId={params.id} /> : <></>}
    </div>
  );
}

function Accessuar({ productId }) {
  const [accessories, setAccessories] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/accessories?id=${productId}`
      )
      .then((res) => {
        setAccessories(res.data.data.data);
      });
  }, []);

  if (accessories.length === 0) {
    return <>Loading..</>;
  }

  return (
    <div>
      <div className="text-2xl my-2">Аксессуарлар</div>
      <div className="flex gap-2 flex-wrap my-2">
        {accessories.map((acc, index) => {
          return (
            <Button
              onClick={() => {
                setActiveIndex(index);
              }}
              type={activeIndex === index ? "primary" : "default"}
              key={acc.name}
            >
              {acc.name}
            </Button>
          );
        })}
      </div>

      <div className="flex gap-2 overflow-x-auto">
        {accessories[activeIndex].products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}
