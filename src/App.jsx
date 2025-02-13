import React, { useState } from "react";
import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import useMyStore from "./my-store";

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
  const state = useMyStore();
  return (
    <nav className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <Link
          to={"/"}
          className="text-2xl bg-blue-300 rounded px-2"
        >
          Logo
        </Link>
        <Button type="primary">Savat {state.savatcha.length}</Button>
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
    <div className="flex gap-2 overflow-x-auto">
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
