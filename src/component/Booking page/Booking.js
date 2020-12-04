import React, { Component } from "react";
import './Booking.css'
import {AddMsg} from './AddMsg';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Booking extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
           date: '',
           time: '',
           isSubmit:false,
        }
    }


    //Form events
    onChangeDate (e) {
        this.setState ({date: e.target.value})
    }
    onChangeTime (e) {
        this.setState ({time: e.target.value})
    }

          //React lifecycle
          componentDidMount() {
          this.userData = JSON.parse(localStorage.getItem('user')); 
        
        if (localStorage.getItem('user')) {
            this.setState({
                date: this.userData.date,
                time: this.userData.time
            })
        } else {
            this.setState({
                date: '',
                time: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user',JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.props)
    }


    
render(){
    let Close =() => this.setState({ isSubmit:false});
    return(
        <div class="form_wrapper">
        <div class="form_container">
            <div class="title_container">
            <h2>Book your photo shoot</h2>
            <h3>Book an appointment by filling out this fields, choose the date and time that suit for you, and we will call you soon! </h3>
            </div>
            <form onSubmit={this.onSubmit}>
            <div class="row clearfix">
                <div class="col_half">
                <label>Date:</label>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="date" name="date" placeholder="Choose the date" value={this.state.date} onChange={this.onChangeDate} required />
                </div>
                </div>
                <div class="col_half">
                <label>Time:</label>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                    <input type="time" name="time" placeholder="Choose the time" value={this.state.time} onChange={this.onChangeTime} required  />
                </div>
                </div>
            </div>
            
            <ButtonToolbar>
            <Button className="Button-Submit" onClick={()=> this.setState({isSubmit: true})}> Submit </Button>
            <AddMsg show={this.state.isSubmit}
            onHide = {Close} />
           </ButtonToolbar>
            </form>
        </div> 
        </div>
    )}}
 


export default Booking


