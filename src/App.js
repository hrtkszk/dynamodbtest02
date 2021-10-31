import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Dynamodbtest01 } from './models';

function App() {
    DataStore.save(
      new Dynamodbtest01({
      "timestamp": 1023123,
      "datetime": "1970-01-01T12:30:23.999Z"
    })
    );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
