import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex gap-3 p-2 border-2 bg-slate-300">
      <Link
        to="/"
        className="bg-gray-900 text-white p-3"
      >
        Logo
      </Link>

      <Link
        to="/about"
        className="bg-gray-900 text-white p-3"
      >
        Biz haqimizda
      </Link>

      <Link
        to="/liked"
        className="bg-gray-900 text-white p-3"
      >
        Sevimlilar
      </Link>
    </div>
  );
}

export default Navbar