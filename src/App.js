import React from 'react';
import { GlobalStyle } from './GlobalStyles'
import Home from "./components/Home"
// Components
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
