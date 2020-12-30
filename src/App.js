import './GlobalStyle.css'
import Footer from './Components/Footer/index';

import Header from './Components/Header/index';
import { Component } from 'react';
/* import Form from './Components/Form/index';
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Footer/>
      {/* <Form /> */}
    </div>
  );
}

class App extends Component {
  state = {
    trackData: []
  }
  componentDidMount(){
      fetch('https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=LX002249507BR')
      .then(trackResult => trackResult.json())
      .then((data) => {
        this.setState({ trackData: data })
      })
      .catch(console.log)
    }
    
}

export default App;
