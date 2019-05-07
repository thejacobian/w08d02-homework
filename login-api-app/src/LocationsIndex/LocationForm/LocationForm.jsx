import React, { Component } from 'react';

class LocationForm extends Component {
  constructor(){
    super();
    this.state = {
      location: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddLocation(this.state);
    document.querySelector("#new-location").childNodes.forEach((node) => {
      node.value = '';
    });
  }
  render() {
      return (
        <form id="new-location" onSubmit = {this.handleSubmit}>
            Desired location for weather data: <input onChange = {this.handleChange} type="text" name="location" placeholder="enter zip"/>
            <input type="submit"/><br/><br/>
        </form>
      )
  }
}

export default LocationForm