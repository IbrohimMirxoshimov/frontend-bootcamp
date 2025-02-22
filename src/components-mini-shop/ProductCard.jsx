import { Button } from "antd";
import { Link } from "react-router";
import useMyStore from "../my-store";

export default function ProductCard({ product }) {
  const state = useMyStore();

  return (
    <Link
      to={`/product/${product.id}`}
      className="border shadow-lg p-1 shadow-slate-400 rounded-lg h-68"
    >
      <div className="w-full h-32 overflow-hidden">
        <img
          src={product.image}
          className="w-full bg-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-36">
        <div>{product.name}</div>
        <div>
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
        </div>
      </div>
    </Link>
  );
}
