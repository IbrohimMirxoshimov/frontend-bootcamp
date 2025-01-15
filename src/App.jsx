import React, { useState } from "react";
import "./style/index.css";
import Asosiy from "./components/MenuLesson/Asosiy";
import Meva from "./components/MenuLesson/Meva";

function App() {
  const [menu, setMenu] = useState("asosiy");

  if (menu === "asosiy") {
    return <Asosiy setMenu={setMenu} />;
  }

  if (menu === "meva") {
    return <Meva setMenu={setMenu} />;
  }

  return <div>Topilmadi</div>;
}

export default App;
