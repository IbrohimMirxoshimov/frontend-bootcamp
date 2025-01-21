import { useEffect, useState } from "react";
import { Link } from "react-router";

function HomePage({ setMenu }) {
  return (
    <div>
      <h2>Home</h2>
      <Products setMenu={setMenu} />
    </div>
  );
}

export default HomePage;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(5, 17));
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
          >
            <div className="rounded-lg border p-1 shadow">
              <img
                className="rounded-md"
                src={item.images}
              />

              <h4 className="text-xs">{item.title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
