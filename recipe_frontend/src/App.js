import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', paddingBottom: 0 }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <h1 className="title" style={{ color: "var(--primary-accent)", fontWeight: 800, fontSize: "2rem", marginTop: "2.4rem" }}>RecipeVault</h1>
        <p className="subtitle" style={{ marginBottom: "1.65rem", color: "#4E2C1E99", fontWeight: 500, fontSize: "1.13rem" }}>
          Discover beautiful recipes and inspiration!
        </p>
      </header>
      <RecipeList />
    </div>
  );
}

export default App;
