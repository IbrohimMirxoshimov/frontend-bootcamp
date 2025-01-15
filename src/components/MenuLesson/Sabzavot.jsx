import Navbar from "./Navbar";

function Sabzavot({ setMenu }) {
  return (
    <div>
      <Navbar setMenu={setMenu} />
      <div>
        <h3>Sabzavotlar sahifa</h3>
        <p>Bu Sabzavotlar sahifasi</p>
      </div>
    </div>
  );
}

export default Sabzavot;
