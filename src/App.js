import './GlobalStyle.css';
import Footer from './Components/Footer/index';
import React from 'react';
import Form from './Components/Form/index';

import Header from './Components/Header/index'

function App() {
  return (
    <div className="app">
      <Header />
      <Form/>
      <Footer/> 
    </div>
  );
}

export default App;
