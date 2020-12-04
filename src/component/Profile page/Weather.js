import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap';
import './Weather.css';
import image from '../images/Icon1.png';



// const ApiKey
const Apple='e878455cf802e75a0251521f06c4fe5f';
var lat=0;
var lon=0;
var url = '';

// Class Weather

 class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude:0,
      longitude:0,
      current_weather_c:0,
      relative_humidity:0,
      feels_like:0,
      country:'',
      city:'',
      icon_url:''
    }
  }

  // *User the position parameter to get location in 
  //  *latitude and longitude
   
  setWeather=(position)=>{
    this.lat=position.coords.latitude;
    this.lon=position.coords.longitude;
    this.setState({
      latitude:this.lat,
      longitude:this.lon
    });

    //setting up the URL
    url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon +'e878455cf802e75a0251521f06c4fe5f'+Apple+ 
    this.lat+','+
    this.lon+'.json';
    
    //using fetch to get all the data


    fetch(url)// fetch data from url
    .then(data => data.json())// convert the fetched data to JSON
    .then(parsedData => this.setState({ // used the parsed data to setState
      country : parsedData.current_observation.display_location.state_name,
      city :parsedData.current_observation.observation_location.city,
      current_weather_c : parsedData.current_observation.temp_c,
      relative_humidity : parsedData.current_observation.relative_humidity,
      feelslike : parsedData.current_observation.feelslike_c,
      icon_url : parsedData.current_observation.icon_url
    }));
  }


  /* here, call the getCurrentPosition method and pass the value to
   * setWeather
   */

  getLocation=()=>{
    navigator.geolocation.getCurrentPosition(this.setWeather);
  }

  // Once component mounts call the getLocation method

  componentWillMount(){
    this.getLocation();
  }

  //render method
  
  render() {
    return (
      <div id="appContainer">
          <Container>
            <Row className="showGrid" id="imgRow">
              <img src={image} alt="" id="weatherImage" />
            </Row>
            <Row className="showGrid" id="tempRow">
              <label className="bigText">{this.state.current_weather_c}ºC</label>
            </Row>
            <Row className="showGrid" id="humidityRow">
              <label className="regularText">Humidity:</label>
              <label className="regularText">{this.state.relative_humidity}</label>
            </Row> 
            <Row className="showGrid" id="locationRow">
              <label className="regularText">{this.state.city},</label>
              <label className="regularText"> {this.state.country}</label>
            </Row>
          </Container>
      </div>
    )
  }
}

export default Weather;