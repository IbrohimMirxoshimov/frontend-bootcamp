function Navbar({ setMenu }) {
  return (
    <nav className="flex justify-between border bg-slate-500 text-white">
      <div
        onClick={() => {
          setMenu("asosiy");
        }}
      >
        Asosiy
      </div>
      <div
        onClick={() => {
          setMenu("meva");
        }}
      >
        Mevalar
      </div>
      <div
        onClick={() => {
          setMenu("sabzavot");
        }}
      >
        Sabzavotlar
      </div>
    </nav>
  );
}

export default Navbar;
