import logo from './logo.svg';
import './App.css';

function App() {
  // var s = "In Greek mythology, Gaia also spelled Gaea is the personification of the Earth and one of the Greek primordial deities.";
  var s = "I am ";         s += "John";
  console.log(s)
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:"blue"}}>paragraph</p>
        <font color = "red">This text will appear white on black background.</font>
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
