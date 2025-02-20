import React from "react";
import { Route, Routes } from "react-router";
import CatalogPage from "../pages/CatalogPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "./Navbar";

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
