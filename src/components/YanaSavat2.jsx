import { useState } from "react";
import Sekundomer from "./Sekundomer";
import { DeleteOutlined } from "@ant-design/icons";

function App() {
  const [savatcha, setSavatcha] = useState([]);
  const mahsultolar = [
    {
      id: 9,
      name: "Asus",
      price: 300,
    },
    {
      id: 2,
      name: "Hp",
      price: 200,
    },
    {
      id: 3,
      name: "Macbook",
      price: 250,
    },
  ];

  function onAdd(mahsulot_item) {
    const shartga_togri_kelgan_birinchisi = savatcha.find((savat_item) => {
      if (savat_item.mahsulot.id === mahsulot_item.id) {
        return true;
      }

      return false;
    });

    if (shartga_togri_kelgan_birinchisi) {
      const new_savatcha = savatcha.map((savat_item) => {
        if (savat_item.mahsulot.id === mahsulot_item.id) {
          return {
            ...savat_item,
            count: savat_item.count + 1,
          };
        }

        return savat_item;
      });

      setSavatcha(new_savatcha);
    } else {
      const new_savatcha = savatcha.concat({
        count: 1,
        mahsulot: mahsulot_item,
      });

      setSavatcha(new_savatcha);
    }
  }

  const eski = [
    {
      name: "Ali",
      id: 1,
      count: 1,
    },
    {
      name: "Samandar",
      id: 2,
      count: 1,
    },
  ];

  function onPlus(savat_item) {
    // countni bittaga oshiramiz
    const new_savatcha = savatcha.map((item) => {
      if (savat_item.mahsulot.id === item.mahsulot.id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }

      return item;
    });

    setSavatcha(new_savatcha);
  }
  function onMinus(savat_item) {
    // countni bittaga kamaytiramiz
    // countni bittaga oshiramiz
    const new_savatcha = savatcha.map((item) => {
      if (savat_item.mahsulot.id === item.mahsulot.id) {
        return {
          ...item,
          count: item.count>1?item.count-1:item.count,
        };
      }

      return item;
    });

    setSavatcha(new_savatcha);
  }

  function onRemove(id) {
    const new_arr = savatcha.filter(i=>i.mahsulot.id !== id)
    setSavatcha(new_arr)
  }

  return (
    <div className="h-screen m-2">
      <Sekundomer />
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
              <div
                className="flex justify-between"
                key={index}
              >
                <div>
                  {index + 1}
                  {")"} {item.mahsulot.name} - ${item.mahsulot.price}
                </div>
                <div className="">
                  <button
                    onClick={() => {
                      onPlus(item);
                    }}
                  >
                    +
                  </button>{" "}
                  {item.count}{" "}
                  <button
                    onClick={() => {
                      onMinus(item);
                    }}
                  >
                    -
                  </button>{" "}
                </div>
                <div className="flex gap-2">
                  = ${(item.count * item.mahsulot.price).toLocaleString("ru")}
                  <button onClick={()=>onRemove(item.mahsulot.id)}>
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border bg-gray-300 p-2 rounded-lg">
        <h2>Mahsultolar</h2>

        <div className="flex gap-2">
          {mahsultolar.map((mahsulot_item) => {
            return (
              <div
                key={mahsulot_item.id}
                className="border w-full border-gray-600 bg-white rounded p-2"
              >
                <h2>{mahsulot_item.name}</h2>
                <h2>${mahsulot_item.price}</h2>

                <button
                  onClick={() => {
                    onAdd(mahsulot_item);
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
