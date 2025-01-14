function Card({ name, img }) {
  return (
    <div
      style={{
        background: "grey",
        width: 250,
        padding: 10,
        borderRadius: 20,
      }}
    >
      <img
        width={225}
        style={{ borderRadius: 10 }}
        className="imgg"
        src={img}
        alt=""
      />

      {/* <i class="fa-solid fa-heart likee" style="color: #ff0000;"></i> */}

      <p style={{ width: 180, marginBottom: 10, marginLeft: 10 }}>{name} </p>

      <button
        style={{
          fontSize: 30,
        }}
        onClick={() => {
          // const newCartState = cartState.concat([
          //   {
          //     rasm: img,
          //     nomi: name,
          //     narx: price,
          //   },
          // ]);

          setCartState([]);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Card;
