import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useMyStore from "../my-store";
import LoginButtonWithModal from "./LoginButtonWithModal";

export default function Navbar() {
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
        <div>
          <LoginButtonWithModal />
          <Button type="primary">Savat {state.savatcha.length}</Button>
        </div>
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
