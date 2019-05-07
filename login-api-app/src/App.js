import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import LocationsIndex from './LocationsIndex/LocationIndex';

class App extends Component{
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render() {
    return (
      <div className="App">
        <h1>"Should I take the scooter today?" Weather App</h1>
        {
          this.state.loggedIn === true ? // ternary operator can be returned
          <LocationsIndex username={this.state.username}></LocationsIndex>
          :
          <LoginForm handleLogin={this.handleLogin}></LoginForm>
        }
      </div>
    );
  }
}

export default App;
