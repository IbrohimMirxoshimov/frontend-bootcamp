import React, { useState } from "react";
import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="h-screen m-2">
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={<HomePage />}
        />
        <Route
          path={"/product/:id"}
          element={<ProductPage />}
        />
        <Route
          path={"/katalog/:slug"}
          element={<CatalogPage />}
        />
      </Routes>
    </div>
  );
}
export default App;

function Navbar() {
  return (
    <nav className="mb-4">
      <div>
        <Link
          to={"/"}
          className="text-2xl bg-blue-300 rounded px-2"
        >
          Logo
        </Link>
      </div>
      <TopMenu />
    </nav>
  );
}

function TopMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/header/top-categories`)
      .then((res) => {
        setCategories(res.data.data.data);
      });
  }, []);

  return (
    <div className="flex gap-2">
      {categories.map((item) => {
        return (
          <Link
            key={item.slug}
            to={`/katalog/${item.slug}`}
            className="text-xl bg-slate-200 rounded px-2"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
