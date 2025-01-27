import { useEffect, useState } from "react";
import "./style/index.css";
import axios from "axios";
import { Link } from "react-router";

function App() {
  const [kitob, setKitob] = useState();
  useEffect(() => {
    axios
      .get(
        "https://backend.book.uz/user-api/book/hazrati-abu-bakr-roziyallohu-anhu-1"
      )
      .then((response) => {
        setKitob(response.data);
      });
  }, []);

  if (!kitob) {
    return <>Yuklanmoqda...</>;
  }

  return (
    <Link to={`book/${kitob.data._id}`}>
      <div>
        <h2>{kitob.data.name}</h2>
        <img src={`https://backend.book.uz/user-api/${kitob.data.imgUrl}`} />
      </div>
    </Link>
  );
}

export default App;
