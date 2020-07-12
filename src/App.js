import React, { Component } from 'react';
import NavbarComponent from './components/navbar_component/navbar';
import Router from './components/router_component/router';
class App extends Component {
  render() {
    return (

      <React.Fragment>
        <NavbarComponent/>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;
