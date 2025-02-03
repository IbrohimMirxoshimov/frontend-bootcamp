import "./style/index.css";

function App() {
  const data = "1995/12/03";

  console.log(data.split("/").join("-"));

  return <div className="h-screen m-2"></div>;
}

export default App;
