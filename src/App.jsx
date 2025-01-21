import { Route, Routes } from "react-router";
import Navbar from "./components/ui-components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./style/index.css";

function App() {
  return (
    <div className="w-full m-auto container p-4">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/liked"
          element={<div>Sevimlilar</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
