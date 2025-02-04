import "./style/index.css";

function App() {
  const arr = [
    { name: "Ali", scores: [80, 90, 70] },
    { name: "Zuhra", scores: [85, 95, 100] },
    { name: "Anvar", scores: [50, 95, 100] },
  ];

  // CHIQISHI KERAK: kichkina harf bo'ladi
  // [
  //   { name: "ali", scores: [80, 90, 70] },
  //   { name: "zuhra", scores: [85, 95, 100] },
  //   { name: "anvar", scores: [50, 95, 100] },
  // ];

  // CHIQISHI KERAK: uzunligi qo'shiladi
  // [
  //   { name: "ali", scores: [80, 90, 70], uzunligi: 3 },
  //   { name: "zuhra", scores: [85, 95, 100], uzunligi: 5 },
  //   { name: "anvar", scores: [50, 95, 100], uzunligi: 5 },
  // ];

  // CHIQISHI KERAK: faqat anvar uzunligi qo'shiladi va kichkina harfda bo'lsin
  // [
  //   { name: "Ali", scores: [80, 90, 70] },
  //   { name: "Zuhra", scores: [85, 95, 100] },
  //   { name: "anvar", scores: [50, 95, 100], uzunligi: 5 },
  // ];

  // CHIQISHI KERAK:
  // [
  //   { name: "Ali", scores: [90] },
  //   { name: "Zuhra", scores: [90, 99] },
  //   { name: "Anvar", scores: [95, 100] },
  // ];

  // CHIQISHI KERAK:
  // [
  //   { name: "Ali", scores: [90], clone: { name: "Ali", scores: [90] } },
  //   { name: "Zuhra", scores: [90, 99] },
  //   { name: "Anvar", scores: [95, 100] },
  // ];
  return <div className="h-screen m-2"></div>;
}

export default App;
