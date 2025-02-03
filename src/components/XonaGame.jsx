import "./style/index.css";

function App() {
  const partalar = [
    [
      {
        bormi: true,
        oquvchi: {
          name: "samandar",
          age: 56,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "abdulaziz",
          age: 105,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "baxrom",
          age: 15,
        },
      },
    ],
    [
      {
        bormi: true,
        oquvchi: {
          name: "muhammad",
          age: 44,
        },
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: true,
        oquvchi: {
          name: "asadbek",
          age: 48,
        },
      },
    ],

    [
      {
        bormi: true,
        oquvchi: {
          name: "ozodbek",
          age: 51,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "nazirov",
          age: 21,
        },
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: true,
        oquvchi: {
          name: "abdulloh",
          age: 32,
        },
      },
    ],
    [
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
      {
        bormi: false,
        oquvchi: null,
      },
    ],
  ];

  const xona = {
    patalok_rangi: "yashil",
    proyektor_model: "epson",
    partalar: partalar,
    oynalar: [
      {
        jalyuzi_ochiqligi_foizi: 2,
        boyi: 150,
        eni: 100,
        jalyuzi_rangi: "kulrang",
        osmon: "chang",
      },
      {
        jalyuzi_ochiqligi_foizi: 0,
        boyi: 150,
        eni: 100,
        jalyuzi_rangi: "kulrang",
        osmon: "chang",
      },
    ],
    konditsoiner: {
      yoqiq: false,
      rangi: "oq",
    },
  };

  const random_parta = Math.floor(Math.random() * 6);
  const random_stul = Math.floor(Math.random() * 3);

  return (
    <div className="h-screen m-2">
      <div className="flex justify-between">
        <div>Parta: {random_parta + 1}</div>
        <div>Stul: {random_stul + 1}</div>
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {xona.partalar.map((parta, parta_index) => {
          const tanlandi = random_parta === parta_index;
          return (
            <div key={parta_index}>
              <div
                className={`w-32 h-10 ${
                  tanlandi ? "bg-red-500" : "bg-yellow-500"
                } rounded`}
              ></div>
              <div className="flex justify-around mt-1">
                {parta.map((stul, stul_index) => {
                  return (
                    <div
                      key={stul_index}
                      className={`${stul.bormi ? "h-7" : "h-2"} w-7 ${
                        tanlandi && random_stul === stul_index
                          ? "bg-red-500"
                          : "bg-green-700"
                      } rounded text-xs text-white text-center`}
                    >
                      {stul.oquvchi?.name.slice(0, 1)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
