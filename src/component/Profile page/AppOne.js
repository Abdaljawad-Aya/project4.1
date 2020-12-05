import './weather.css';
import "../../index.css"
import { WeatherData } from './WeatherData'
import {StatusData} from "./StatusData"


import CardGo from './CardGo';
import React, { Component, Profiler } from 'react';
class AppOne extends Component{
  state = {
      
  }

  
  render(){
    if(this.state.isBooking && !this.state.error){
      sessionStorage.getItem('User' , ' ')
    }

    return (
      <div className="profile_page">
        <div className="profile_page_left_part">
          <div className="profile_page_user_info">
            <div><b><i className="fas fa-user"></i>User:{this.state.User} Dana</b></div>
            <div><b><i className="fas fa-envelope"></i>Email:{this.state.Email} danatoughoj</b></div>
            <div><b><i className="fas fa-map-marker-alt"></i>City:{this.state.City} amman jordan</b></div>
            <hr />
          </div>
          <div className="profile_page_weather">
              <MyWeather/>
          </div>
        </div>
        <div className="profile_page_right_part">
          <div className="booked_photo_sessions">
            <div className='Booking'>
              BOOKED SESSIONS
            </div>
            <CardGo User={""} Email={''}  City={''} location= {""} date={""} TimeOfSession={""} CameraMan={""} isBooking= {true}/>
            <CardGo User={""} Email={''}  City={''} location= {""} date={""} TimeOfSession={""} CameraMan={""} isBooking= {true}/>
            <CardGo User={""} Email={''}  City={''} location= {""} date={""} TimeOfSession={""} CameraMan={""} isBooking= {true}/>

          </div>
        </div>

      </div>
    );   
  };
};




class MyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      isLoaded: false,
      weatherData: null
    }
  }

  abortController = new AbortController();
  controllerSignal = this.abortController.signal;

  weatherInit = () => {

    const success = (position) => {
      this.setState({status: 'fetching'});
      localStorage.setItem('location-allowed', true);
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    }
  
    const error = () => {
      this.setState({status: 'unable'});
      localStorage.removeItem('location-allowed');
      alert('Unable to retrieve location.');
    }
  
    if (navigator.geolocation) {
      this.setState({status: 'fetching'});
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      this.setState({status: 'unsupported'});
      alert('Your browser does not support location tracking, or permission is denied.');
    }
  }

  getWeatherData = (lat, lon) => {
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=31ed3ec2c5926cdafe59889e9b18386f`;
  
    fetch(weatherApi, { signal: this.controllerSignal })
    .then(response => response.json())
    .then(
      (result) => {
        console.log(result);
        const { name } = result;
        const { country } = result.sys;
        const { temp, temp_min, temp_max, feels_like, humidity } = result.main;
        const { description, icon } = result.weather[0];
        const { speed, deg } = result.wind;
  
        this.setState({
          status: 'success',
          isLoaded: true,
          weatherData: {
            name,
            country,
            description,
            icon,
            temp: temp.toFixed(1),
            feels_like: feels_like.toFixed(1),
            temp_min: temp_min.toFixed(1),
            temp_max: temp_max.toFixed(1),
            speed,
            deg,
            humidity
          }
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  returnActiveView = (status) => {
    switch(status) {
      case 'init':
        return(
          <button 
          className='btn-main' 
          onClick={this.onClick}
          >
            Get My Location
          </button>
        );
      case 'success':
        return <WeatherData data={this.state.weatherData} />;
      default:
        return <StatusData status={status} />;
    }
  }
  onClick = () => {
    this.weatherInit();
  }

  componentDidMount() {
    if(localStorage.getItem('location-allowed')) {
      this.weatherInit();
    } else {
      return;
    }
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    return (
      <div className='weather_section'>
        <div className='weather_container'>
          {this.returnActiveView(this.state.status)}
        </div>
      </div>
    );
  }
}



export default AppOne;



  // onChangeUser(e) {
  //   this.setState({ User: e.target.value})
  // }

  // onChangeEmail(e) {
  //   this.setState({ Email: e.target.value})
  // }
  // onChangeCity(e) {
  //   this.setState({ City: e.target.value})
  // }
  // onChangeIndoor(e) {
  //   this.setState({ Indoor: e.target.value})
  // }
  // onChangeData(e) {
  //   this.setState({ date: e.target.value})
  // }
  // onChangeTime(e) {
  //  this.setState({ Time: e.target.value})
  // }
  // onSubmit(e) {
  //   e.preventDefault() 
  //   this.setState({
  //     User: "",
  //     Email: "",
  //      City: "",
  //      Indoor: "",
  //      date:"",
  //      Time:"",
  //   })
  // }

//   componentDidMount() {
//     this.userData = JSON.parse(sessionStorage.getItem('user'))
//     if (sessionStorage.getItem('user')) {
//       this.setState({
//         User: this.userData.User,
//         Email: this.userData.Email,
//          City: this.userData.City,
//          Indoor: this.userData.Indoor,
//          date: this.userData.date,
//          Time: this.userData.Time,
//       })
//     }else{
//       this.setState({
//         User: "",
//         Email: "",
//         City: "",
//         Indoor: "",
//         date:"",
//         Time:"",
//       })
//     }
//   }
//  componentWillDidUpdate(nextProps, nextState) {
//    sessionStorage.setItem('user', JSON.stringify(nextState));
//  }

