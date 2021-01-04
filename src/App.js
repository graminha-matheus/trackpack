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
      {/* <Form /> */}
    </div>
  );
}

/* class App extends Component {
  state = {
    trackData: []
  }
  componentDidMount(){

    
    }
    
} */

export default App;
