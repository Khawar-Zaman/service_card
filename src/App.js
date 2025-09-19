//import logo from './logo.svg';
import './App.css';
import ServiceList from './ServiceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App">
      <h1>Our Services</h1>
      <ServiceList />
    </div>
      </header>
    </div>
  );
}

export default App;
