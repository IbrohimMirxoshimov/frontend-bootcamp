import { Button } from "antd";
import { Link } from "react-router";
import useMyStore from "../my-store";

export default function ProductCard({ product }) {
  const state = useMyStore();

  return (
    <Link
      to={`/product/${product.id}`}
      className="border shadow rounded p-1 shadow-black"
    >
      <img
        src={product.image}
        className="w-32"
      />
      <div>{product.name}</div>
      <div className="font-bold mt-2">
        {product.sale_price.toLocaleString("ru")} so'm
      </div>
      <Button
        type="primary"
        block
        onClick={(e) => {
          e.preventDefault();

          state.onAdd(product);
        }}
      >
        Savatga qo'shish
      </Button>
    </Link>
  );
}
