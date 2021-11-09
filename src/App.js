
import './App.css';
import NavBar from "./components/NavBar";
import Title from './components/Title'
import Button from './components/Button'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Title />
        <Button />
      </header>
      <footer>
        <Gallery />
      </footer>
    </div>
  );
}

export default App;
