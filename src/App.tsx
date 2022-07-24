import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import { useState } from 'react';
import { DarkTheme } from './themes/dark-theme';
import Home from './pages/Home/Home';
import ThemeContext from './contexts/ThemeContext';
import WorldEditor from './components/WorldEditor/WorldEditor';

function App() {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Router>
          <Routes>
            <Route path='' element={<Home/>}>
              <Route path='' element={<Navigate to='world-editor'/>}></Route>
              <Route path='world-editor' element={<WorldEditor/>}></Route>
            </Route>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
