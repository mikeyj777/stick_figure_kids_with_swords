import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { GameStateProvider } from './contexts/GameStateContext';
// import { AudioProvider } from './contexts/AudioContext';
import MainMenu from './components/ui/MainMenu';
import GameModes from './components/game/GameModes';
// import Options from './components/ui/Options';
import LayoutTest from './tests/LayoutTest';
import './styles/App.css';

const App = () => {
  return (
    // <GameStateProvider>
    //   <AudioProvider>
        <Router>
          <Routes>
            <Route path="/layout-testing" element={<LayoutTest />} />
             <Route path="/" element={<MainMenu />} />
            <Route path="/play/*" element={<GameModes />} />
            {/* <Route path="/options" element={<Options />} />  */}
          </Routes>
        </Router>
    //   </AudioProvider>
    // </GameStateProvider>
  );
};

export default App;
