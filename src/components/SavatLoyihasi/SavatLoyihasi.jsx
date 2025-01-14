import React, { useState } from "react";

import Savat from "./components/Savat";
import Card from "./components/Card";

// import
// import likeee from './assets/like.svg'
function SavatLoyihasi() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Qogoz",
      price: 42.0,
      discount: "2.900",
      star: "4.9 (21734 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 2,

      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "changyutgich",
      price: 215,
      discount: "212.570",
      star: "4.7 (256 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 3,

      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Televizor",
      price: 250,
      discount: "186.220",
      star: "4.9 (236 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 4,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Sovutgich",
      price: 230,
      discount: "324.000",
      star: "5.0 (26 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 5,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Oqartiruvchi Vanish",
      price: 5.49,
      discount: "4.213",
      star: "4.8 (10 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 6,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Nivea men soqol olish ",
      price: "48.000",
      discount: 4.4,
      star: "4.9 (104 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 7,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Sumka- yelkama meesenjer",
      price: 4.29,
      discount: "2.800",
      star: "4.8 (672 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 8,

      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Gilette FUSION ustara ",
      price: 2.9,
      discount: "6.792",
      star: "4.9 (30 sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 9,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Nivea soft ulta krem",
      price: 2.21,
      discount: "2.226",
      star: "4.9 (373   sharhlar)",
      islike: false,
      // likeIcon:likeee,
      quantity: 1,
    },
    {
      id: 10,
      img: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      name: "Nivea dush uchun krem",
      price: 8.54,
      quantity: 1,
      discount: "1.983",
      star: "4.9 (155 sharhlar)",
      islike: false,
      // likeIcon:likeee
    },
  ]);

  const updateProduct = (id) => {
    console.log(id);
    setProducts((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
    console.log(products);
  };

  const removeProduct = (id) => {
    setProducts((prev) =>
      prev.map((item) => {
        return item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
    );
  };

  const [cartState, setCartState] = useState([
    {
      rasm: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      nomi: "Macbook",
      narx: 1000,
    },
    {
      rasm: "https://images.uzum.uz/cth7tj4opsf31vcqka00/original.jpg",
      nomi: "Macbook",
      narx: 2000,
    },
  ]);

  return (
    <div className="container">
      <Savat cartState={cartState} />
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <h2>Arzon narxlar</h2>
      </div>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "auto auto",
        }}
      >
        {products.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              pay={item.discount}
              star={item.star}
              likeIcon={item.likeIcon}
              updateProduct={updateProduct}
              id={item.id}
              quantity={item.quantity}
              removeProduct={removeProduct}
              islike={item.islike}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SavatLoyihasi;
