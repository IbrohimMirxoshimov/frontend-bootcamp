import { Link, NavLink, Route, Routes } from "react-router";
import "./style/index.css";
import axios from "axios";
import { useState } from "react";
import Modal from "./form-modal/Modal";

function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={(obj) => {
        return `p-2 rounded-lg mb-2 ${obj.isActive ? "bg-blue-700" : ""}`;
      }}
    >
      {children}
    </NavLink>
  );
}

function SideMenu() {
  return (
    <div className="w-64 bg-slate-900 text-white p-3 h-full">
      <h2 className="text-2xl mb-4">Admin</h2>

      <div className="flex flex-col">
        <MenuLink to={"/"}>Home</MenuLink>
        <MenuLink to={"/posts"}>Posts</MenuLink>
        <MenuLink to={"/todos"}>Todos</MenuLink>
        <MenuLink to={"/sms"}>Telegram Xabar</MenuLink>
      </div>
    </div>
  );
}

function Navbar() {
  return <div className="w-full bg-neutral-300 p-4 text-end">Avatar</div>;
}

function TelegramXabar() {
  const [message, setMessage] = useState("");

  const token = "1688519835:AAHyTjIOU2v3NA5XvPoq7Dc3hUMAmZd-_cI";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  return (
    <div className="p-4 flex flex-col">
      <div>Xabar matni</div>
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
        className="border border-gray-500"
      />
      <button
        onClick={() => {
          axios
            .post(url, {
              chat_id: "863381603",
              text: message,
            })
            .then(() => {
              alert("Yuborildi");
            })
            .catch(() => {
              alert("Xatolik");
            });

          setMessage("");
        }}
      >
        Yuborish
      </button>
    </div>
  );
}

function PostPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          QO'shish
        </button>
        <Modal
          open={visible}
          onClose={() => {
            setVisible(false);
          }}
          title={"Post qo'shish"}
        >
          My form
        </Modal>
      </div>
    </div>
  );
}

function Main() {
  return (
    <Routes>
      <Route
        path="/"
        element={<div>Home</div>}
      />
      <Route
        path="/posts"
        element={<PostPage></PostPage>}
      />
      <Route
        path="/todos"
        element={<div>Todos</div>}
      />
      <Route
        path="/sms"
        element={<TelegramXabar></TelegramXabar>}
      />
    </Routes>
  );
}

function App() {
  return (
    <div className="flex h-screen">
      <SideMenu />

      <div className="flex flex-col w-full">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
