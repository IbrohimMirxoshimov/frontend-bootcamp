import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router";
import useMyStore from "../my-store";

export default function HomePage() {
  const state = useMyStore();

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=new_products"
      )
      .then((res) => {
        useMyStore.setState({
          loading: false,
          products: res.data.data.data,
        });
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Home page</h1>
      {state.loading ? (
        <div>Yuklanmoqda...</div>
      ) : (
        <div>
          {state.products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
