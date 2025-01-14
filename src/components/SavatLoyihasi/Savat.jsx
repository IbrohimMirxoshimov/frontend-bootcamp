import React from "react";

function Savat({ cartState }) {
  return (
    <div
      style={{
        border: "1px solid grey",
      }}
    >
      {cartState.map((item, i) => {
        return (
          <CartItem
            key={i}
            nomi={item.nomi}
            rasm={item.rasm}
            narx={item.narx}
          />
        );
      })}
      <button>Tozalash</button>
    </div>
  );
}

function CartItem({ rasm, nomi, narx }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: 300,
        }}
      >
        <img
          width={50}
          height={50}
          src={rasm}
          alt=""
        />
        <div
          style={{
            marginLeft: 5,
          }}
        >
          <p>{nomi}</p>
          <p>${narx}</p>
        </div>
      </div>
    </div>
  );
}

export default Savat;
