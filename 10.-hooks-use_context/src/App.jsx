import React from 'react';
import { useState } from 'react';
import './App.css'
import { Layout } from './components/Layout/Layout';
import { ThemeContext, themes } from './components/ThemeContext/ThemeContext';

function App() {

  const [theme, setTheme] = useState(themes.light)
  
  const changeTheme = () => {
    return theme === themes.light ? setTheme( themes.dark ) : setTheme( themes.light )
  }

  return (
    <div className="app__container">
      <h1> useContext </h1>
      
      <ThemeContext.Provider value={ theme }>
        <button 
          onClick={ changeTheme }
        >
          Dark Mode
        </button>
        <Layout />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
