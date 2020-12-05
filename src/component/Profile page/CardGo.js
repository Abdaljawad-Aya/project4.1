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
      <div>  
        <div className="Photography">
          <div className="booked_photo_sessions_cards">
            <div>Location: {this.state.location}</div>
            <div>Date: {this.state.date}</div>
            <div>Time: {this.state.TimeOfSession}</div>
            <div>Photographer: {this.state.CameraMan}</div>
          </div>
        </div>
      </div>
    );
  }
}



export default CardGo;