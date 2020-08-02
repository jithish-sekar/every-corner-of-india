import React, { Component } from 'react';
import NavbarComponent from './components/navbar_component/navbar';
import Router from './components/router_component/router';
import FooterComponent from './components/footer_component/footer_component';
class App extends Component {
  render() {
    return (

      <React.Fragment>
        <NavbarComponent/>
        <Router/>
        <FooterComponent/>
       </React.Fragment>
     );
  }
}

export default App;
