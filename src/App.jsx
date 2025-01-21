import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import "./style/index.css";
import ProductPage from "./components/router/ProductPage";
import AboutPage from "./components/router/AboutPage";

function App() {
  return (
    <div className="w-full m-auto container p-4">
      <div className="flex gap-3">
        <Link
          to="/"
          className="bg-gray-900 text-white p-3"
        >
          Logo
        </Link>

        <Link
          to="/about"
          className="bg-gray-900 text-white p-3"
        >
          Biz haqimizda
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/product"
          element={<ProductPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </div>
  );
}

function HomePage({ setMenu }) {
  return (
    <div>
      <h2>Home</h2>
      <Products setMenu={setMenu} />
    </div>
  );
}

function Products({ setMenu }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((item) => {
        return (
          <Link to="/product">
            <img
              onClick={() => {
                setMenu("product");
              }}
              style={{
                height: 100,
              }}
              src={item.images}
            />
          </Link>
        );
      })}
    </div>
  );
}
export default App;
