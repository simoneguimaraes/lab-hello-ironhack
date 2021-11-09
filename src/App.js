
import './App.css';
import Navbar from "./components/Navbar";
import Title from './components/Title'
import Button from './components/Button'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
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
