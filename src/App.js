import './App.css';
import Home from './pages/Home';
import { GameProvider } from './context/GameContext'


function App() {
  return (
    <GameProvider>
      <div className="App">
        <Home />
      </div>
    </GameProvider>

  );
}

export default App;
