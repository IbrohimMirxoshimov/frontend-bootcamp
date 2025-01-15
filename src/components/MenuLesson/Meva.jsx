import Navbar from "./Navbar";

function Meva({ setMenu }) {
  return (
    <div>
      <Navbar setMenu={setMenu} />
      <div>
        <h3>Mevalar sahifa</h3>
        <p>Bu mevalar sahifasi</p>
      </div>
    </div>
  );
}

export default Meva;
