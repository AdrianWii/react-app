import "./App.css";

function App() {
  const name = "ADR";
  const names = ['ADRIAN', 'MACIEJ', 'PAWEL', 'BARBARA', 'ZOFIA', "MARCELI"];

  return (
    <>
      <div className="App">
        <p> { name.length > 4 ? name : 'Hello friends!'} </p>
        <p> { names.map((name) => <li key={name}>{name}</li>) } </p>
      </div>
      <p>TEST</p>
    </>

  );
}

export default App;
