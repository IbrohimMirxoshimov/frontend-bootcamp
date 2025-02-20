import { Button } from "antd";
import React, { useState } from "react";

function App() {
  const xona = {
    nomi: "Microsoft",
    partalar: [
      {
        stullar: [
          {
            rang: "green",
            oquvchi: {
              ism: "Ozodbek Nazirov",
              yosh: 100,
            },
          },
          {
            rang: "gray",
            oquvchi: {
              ism: "Abdulaziz",
              yosh: 100,
            },
          },
          {
            rang: "green",
            oquvchi: null,
          },
        ],
        rang: "orange",
      },
      {
        stullar: [
          {
            rang: "green",
            oquvchi: {
              ism: "Muhammad",
              yosh: 100,
            },
          },
          {
            rang: "green",
            oquvchi: null,
          },
          {
            rang: "green",
            oquvchi: {
              ism: "Jahongir",
              yosh: 100,
            },
          },
        ],
        rang: "orange",
      },
      {
        stullar: [
          {
            rang: "green",
            oquvchi: null,
          },
          {
            rang: "green",
            oquvchi: null,
          },
          {
            rang: "green",
            oquvchi: {
              ism: "Firdavs ustoz",
              yosh: 100,
            },
          },
        ],
        rang: "orange",
      },
      {
        stullar: [
          {
            rang: "green",
            oquvchi: {
              ism: "Ozodbek",
              yosh: 100,
            },
          },
          {
            rang: "green",
            oquvchi: {
              ism: "Samandar",
              yosh: 100,
            },
          },
          {
            rang: "green",
            oquvchi: null,
          },
        ],
        rang: "orange",
      },
      {
        stullar: [
          {
            rang: "gray",
            oquvchi: {
              ism: "Abdulloh",
              yosh: 100,
            },
          },

          {
            rang: "green",
            oquvchi: {
              ism: "Bahrombek",
              yosh: 100,
            },
          },
          {
            rang: "green",
            oquvchi: null,
          },
        ],
        rang: "orange",
      },
      {
        stullar: [
          {
            rang: "green",
            oquvchi: null,
          },
          {
            rang: "green",
            oquvchi: null,
          },
          {
            rang: "green",
            oquvchi: null,
          },
        ],
        rang: "orange",
      },
    ],
  };

  let count = 0;

  xona.partalar.forEach((parta) => {
    parta.stullar.forEach((stul) => {
      if (stul.oquvchi) {
        count++;
      }
    });
  });

  const [random, setRandom] = useState({
    partaRandomIndex: Math.floor(Math.random() * xona.partalar.length),
    stulRandomIndex: Math.floor(Math.random() * 3),
  });

  const [chempions, setChempions] = useState([]);

  const yutgan_oquvchi_ismi =
    xona.partalar[random.partaRandomIndex].stullar[random.stulRandomIndex]
      .oquvchi?.ism;

  return (
    <div className="font-bold m-2">
      <div>Xona: {xona.nomi}</div>
      <div>Partalar soni: {xona.partalar.length}</div>
      <div>Xonada bor o'quvchilar soni: {count}</div>
      <div>Yutgan parta: {random.partaRandomIndex + 1}</div>
      <div>Yutgan stul: {random.stulRandomIndex + 1}</div>
      <div>Yutgan o'quvchi: {yutgan_oquvchi_ismi}</div>

      <div className="grid grid-cols-2 gap-6 rounded mt-6 text-white">
        {xona.partalar.map((parta, partaIndex) => {
          return (
            <Parta
              key={partaIndex}
              partaIndex={partaIndex}
              parta={parta}
              random={random}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-2">
        <Button
          type="primary"
          size="large"
          onClick={() => {
            const random = {
              partaRandomIndex: Math.floor(
                Math.random() * xona.partalar.length
              ),
              stulRandomIndex: Math.floor(Math.random() * 3),
            };

            setRandom(random);

            const hozir_yutgan =
              xona.partalar[random.partaRandomIndex].stullar[
                random.stulRandomIndex
              ].oquvchi?.ism;

            if (hozir_yutgan) {
              setChempions(
                chempions.concat({
                  ism: {
                    ism: "Asadbek",
                    yosh: 100,
                  },
                  count: 1,
                })
              );
            }
          }}
        >
          Random
        </Button>
      </div>

      <div>
        {chempions.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

function Parta({ parta, partaIndex, random }) {
  return (
    <div key={partaIndex}>
      <div
        className={`w-full ${
          random.partaRandomIndex === partaIndex &&
          parta.stullar[random.stulRandomIndex].oquvchi
            ? "bg-red-500"
            : "bg-orange-400"
        } h-16 rounded text-center`}
      >
        {partaIndex + 1}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-1">
        {parta.stullar.map((stul, stulIndex) => {
          return (
            <Stul
              stul={stul}
              key={stulIndex}
              random={random}
              partaIndex={partaIndex}
              stulIndex={stulIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

function Stul({ stul, random, partaIndex, stulIndex }) {
  return (
    <div
      className={`${
        random.partaRandomIndex === partaIndex &&
        random.stulRandomIndex === stulIndex &&
        stul.oquvchi
          ? "bg-red-500"
          : "bg-green-500"
      } text-center p-1 text-sm text-black font-bold rounded overflow-hidden text-ellipsis ${
        stul.oquvchi ? "h-8" : "h-4"
      }`}
    >
      {stul.oquvchi && stul.oquvchi.ism}
    </div>
  );
}

export default App;
