import { useState } from "react";

function App() {
  const [savatcha, setSavatcha] = useState([]);
  const mahsultolar = [
    {
      id: 9,
      name: "Asus",
    },
    {
      id: 2,
      name: "Hp",
    },
    {
      id: 3,
      name: "Macbook",
    },
  ];

  function onAdd(item) {
    const bormi = savatcha.find((s) => {
      if (item.id === s.mahsulot.id) {
        return true;
      }

      return false;
    });

    if (bormi) {
      // o'zgartiraman
      const new_arr = savatcha.map((savat_item) => {
        if (savat_item.mahsulot.id === item.id) {
          return {
            ...savat_item,
            count: savat_item.count + 1,
          };
        }

        return savat_item;
      });

      setSavatcha(new_arr);
    } else {
      // qo'shaman
      const new_arr = savatcha.concat({
        count: 1,
        mahsulot: item,
      });
      setSavatcha(new_arr);
    }
  }

  return (
    <div className="h-screen m-2">
      <div className="bg-gray-300 p-2 rounded-lg border mb-2">
        <h2 className="border-b-2 mb-2 border-gray-600">
          Savatcha{" "}
          <span className="rounded-full bg-red-600 px-2 text-white">
            {savatcha.length}
          </span>
        </h2>
        <div className="text-xs">
          {savatcha.map((item, index) => {
            return (
              <div key={index}>
                {index + 1}
                {")"} {item.mahsulot.name} x {item.count}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border bg-gray-300 p-2 rounded-lg">
        <h2>Mahsultolar</h2>

        <div className="flex gap-2">
          {mahsultolar.map((item) => {
            return (
              <div
                key={item.id}
                className="border w-full border-gray-600 bg-white rounded p-2"
              >
                <h2>{item.name}</h2>

                <button
                  onClick={() => {
                    onAdd(item);
                  }}
                  className="bg-gray-500 w-full text-white px-3 rounded"
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
