import React from 'react';
// import React, { useState } from "react";

class CardGo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    };
  }
  // const setData() {
  //   this.userData = JSON.parse(sessionStorage.getItem('user'))
  //   let data sessionStorage.getItem('user')) 
     
         
  render() {
    return (
       
      <div className="App">  
            
        
                      <div className="Photography">
                           <div className='Booking'>
                           <h1>BOOKED SESSION</h1>
                           </div> <br/>
                           <p>Location{this.state.location}</p>
                           <p>Date{this.state.date}</p>
                           <p>Time{this.state.TimeOfSession}</p>
                           <p>Photographer Name{this.state.CameraMan}</p>
                          
                      </div>
                            
              </div>
    );
  }
}



export default CardGo;