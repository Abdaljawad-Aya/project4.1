import './AppOne.css';
import CardGo from './CardGo';
import React, { Component } from 'react';
import Weather from './Weather';

class AppOne extends Component{
  state = {
      
  }

  
  render(){
    if(this.state.isBooking && !this.state.error){
      sessionStorage.getItem('User' , ' ')

    }

    return (
        
      <div className="AppOne"> 
       <div className="grid-container">
             <div className='background'></div>
               
                <div className="userProfile">
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' alt="" height="120px" width="120px"/><br/>
                      </div>
                      <div className='data'>
                      <p><b>User:{this.state.User}</b></p> <br/>
                      <p><b>Email:{this.state.Email}</b> </p><br/>
                      <p><b>City:{this.state.City}</b> </p><br/>
                </div>
             </div>

      {/* Card */}
      <Weather />

         <CardGo
           User={""}
           Email={''} 
           City={''}
           location= {""}
           date={""}
           TimeOfSession={""}
           CameraMan={""}
           isBooking= {true}
           
         />
     
        
      </div>
      
      
      
    
  );   
};
};



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

