import React from 'react'
import './Constants/CommonStyles/CommonStyles.scss'
import { BrowserRouter } from 'react-router-dom';
import { Routerpaths } from './Components/RouterPages/Routerpaths';
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routerpaths />
      </BrowserRouter>
    </div>
  );
}

export default App;
