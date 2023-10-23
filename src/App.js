import logo from './logo.svg';
import './App.css';
let pessoas = [
  { cod: '001', nome: 'Anderson' },
  { cod: '002', nome: 'Almir' },
  { cod: '003', nome: 'André' },
  { cod: '004', nome: 'Julia' }
];

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

      { pessoas.map( (pessoa) =>

      <tr>
        <td>{pessoa.cod}</td>
        <td>{pessoa.nome}</td>
      </tr> 
      ) }


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
