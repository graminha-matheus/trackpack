import './GlobalStyle.css'
import Footer from './Components/Footer/index';

import Header from './Components/Header/index';
import React from 'react';
import Form from './Components/Form/index';


function App() {



  return (
    <div className="App">
      <Header />
      <Form/>
      <Footer/> 
    </div>
  );
}

export default App;
