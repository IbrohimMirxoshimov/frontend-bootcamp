import React, { useState } from "react";
import Asosiy from "./Asosiy";
import Meva from "./Meva";
import Sabzavot from "./Sabzavot";

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
