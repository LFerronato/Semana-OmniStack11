// JSX - Javascript com HTML (XML)
function App() {
  const [counter, setCounter] = useState(0);
  // useState retorna Array [valor, function]

  function increment() {
    setCounter(counter + 1);
    //console.log(counter);
  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

import Logon from "./pages/Logon"; //já procura o index.js
