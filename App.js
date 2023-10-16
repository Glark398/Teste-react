import logo from './logo.svg';
import './App.css';


/*
[
  {
      "COD": "001",
      "NOME": "Anderson"
  },
  {
      "COD": "002",
      "NOME": "Almir"
  },
  {
      "COD": "003",
      "NOME": "André"
  }
]
*/

function MyButton() {
  return (
    <button>Kauan Barbosa Machado</button>
  );
}

function MyTitle() {
  return (
    <h1>Cachorro</h1>
  );
}

function MyTable() {
  return (
    <table>

      <tr>
        <td>CÓDIGO</td>
        <td>NOME</td>
      </tr>

      <tr>
        <td>001</td>
        <td>Paulinho</td>
      </tr>

      <tr>
        <td>002</td>
        <td>Carlos</td>
      </tr>

      <tr>
        <td>003</td>
        <td>Júlia</td>
      </tr>

      <tr>
        <td>004</td>
        <td>Melissa</td>
      </tr>

    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyTitle />
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          <MyTable className="tabela" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
