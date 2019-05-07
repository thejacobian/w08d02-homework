import React, { Component } from 'react';
import LocationForm from './LocationForm/LocationForm';

class LocationsIndex extends Component {
    constructor(){
        super();
        this.state = {
            zipcodes: [],
            locations: []
        }
    }
    handleAddLocation = async (formData) => {
        const searchURL = `http://api.openweathermap.org/data/2.5/weather?zip=${formData.location}&appid=16716bb032eb934ffcdf28d5ca0065ab`;
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            zipcodes: [...this.state.zipcodes, formData.location],
            locations: [...this.state.locations, parsedResult] // .results.filter(planet => planet.population !== "unknown") 
        });
    }
    render() {
    const locationsList = this.state.locations.map((location, index) => {
        return (<li key={index}>The weather for zipcode: {this.state.zipcodes[index]} is currently "
                    {
                        location.weather[0].description ?
                        location.weather[0].description
                        : 'unavailable'
                    }" with
                    { 
                        location.rain['1h'] ?
                        ` ${location.rain['1h']}`
                        : ' 0' 
                    } mm of rainfall in the last hour.
                </li>)
    });
    return(
        <div>
            <h1>Welcome to your personal "scooter weather" app {this.props.username}!</h1><hr/>
            <h3>Please add additional locations you might want to visit by scooter below:</h3>
            <LocationForm handleAddLocation = {this.handleAddLocation}/><hr/>
            {
                this.state.locations.length > 0 ?
                <ul> { locationsList } </ul>
                : null
            }
        </div>
        )
    }
}

export default LocationsIndex
