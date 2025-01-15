import React, { useState } from "react";
import "./style/index.css";
import Asosiy from "./components/MenuLesson/Asosiy";
import Meva from "./components/MenuLesson/Meva";
import Sabzavot from "./components/MenuLesson/Sabzavot";

function App() {
  const [menu, setMenu] = useState("asosiy");

  if (menu === "asosiy") {
    return <Asosiy setMenu={setMenu} />;
  }

  if (menu === "meva") {
    return <Meva setMenu={setMenu} />;
  }

  if (menu === "sabzavot") {
    return <Sabzavot setMenu={setMenu} />;
  }

  return <div>Topilmadi</div>;
}

export default App;
