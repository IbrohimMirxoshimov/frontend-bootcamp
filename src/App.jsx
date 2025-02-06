import axios from "axios";
import { useEffect, useState } from "react";
import { create } from "zustand";

const useMyState = create(() => {
  return {
    cart: ["Product 1"],
  };
});

function App() {
  return (
    <div className="h-screen m-4">
      <HomePage />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
}

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-placeholder.mock.beeceptor.com/posts")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((item) => {
        return (
          <ProductCard
            key={item}
            cart={cart}
            setCart={setCart}
            name={item.title.slice(0, 7)}
          />
        );
      })}
    </div>
  );
}

function ProductCard({ name }) {
  const state = useMyState();
  return (
    <div className="border border-blue-300 p-2 w-full rounded hover:shadow-lg hover:shadow-gray-400 transition-all hover:scale-110">
      <div className="text-sm">{name}</div>
      <button
        onClick={() => {
          const new_arr = state.cart.concat(name);

          useMyState.setState({
            cart: new_arr,
          });
        }}
        className="rounded bg-blue-500 text-white px-3 w-full mt-3 active:scale-90 transition-all"
      >
        +
      </button>
    </div>
  );
}

function Banner() {
  return (
    <div className="rounded border border-blue-400 p-2 py-4 my-2">Banner</div>
  );
}

function TopMenu() {
  return <div className="rounded border border-blue-400 p-2">Top menu</div>;
}

function CenterNavbar() {
  const state = useMyState();
  return (
    <div className="rounded flex justify-between border border-blue-400 border-y-0 p-2">
      <div>Logo</div>
      <div>Search input</div>
      <div className="cart transition">
        Savatcha
        {state.cart.length > 0 ? (
          <span className="rounded-full bg-red-600 text-white px-1 m-1">
            {state.cart.length}
          </span>
        ) : (
          <></>
        )}
        <div className="cart-items hidden transition-all border border-blue-400 p-2 absolute z-10 bg-white rounded">
          {state.cart.map((item, i) => {
            return (
              <div>
                {i + 1}. {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MainMenu() {
  return <div className="rounded border border-blue-400 p-2">Main menu</div>;
}

function Navbar({ cart }) {
  return (
    <div>
      <TopMenu />
      <CenterNavbar cart={cart} />
      <MainMenu />
    </div>
  );
}

function Sekundomer() {
  const [date, set] = useState(new Date());

  useEffect(() => {
    const a = setInterval(() => {
      set(new Date());
    }, 1000);

    return () => {
      clearInterval(a);
    };
  }, []);

  return (
    <div>
      {date.getMinutes() + 5}:{date.getSeconds().toString().padStart(2, "0")}
    </div>
  );
}
export default App;
