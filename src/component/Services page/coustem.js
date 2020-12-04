import React, { Component } from 'react'
import './coustem.css'
import { Accordion, Card, Button } from 'react-bootstrap';


class Coustem extends Component {
    userData;
    state = {
        value: 0,
        value2: 0,
        theme: 0,
        photographer: 0,

    };



    onChange = e => { this.setState({ [e.target.name]: e.target.value }) }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                value: this.userData.value,
                value2: this.userData.value2,
                theme: this.userData.theme,
                photographer: this.userData.photographer
            })
        } else {
            this.setState({
                value: 0,
                value2: 0,
                theme: 0,
                photographer: 0
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        // console.log(this.state.props)
    }


    render() {
        const { value, value2, theme, photographer } = this.state
        return (
            <div className='customization'>


                <div className='coustem-txt'>


                    <div className='coustem-form' >
                        <form onSubmit={this.onSubmit}>
                            <label for="theme">Chose photo session time:</label>
                            <br />
                            <select id="time" name="value" onChange={this.onChange}>
                                <option value="5">one hour</option>
                                <option value="10">tow hour</option>

                            </select>


                            <br />
                            <br />

                            <label for="theme">Chose the session location:</label>
                            <br />
                            <select id="location" name="value2" onChange={this.onChange}>
                                <option value="15">Indoor</option>
                                <option value="20">Outdoor</option>

                            </select>
                            <br />
                            <br />

                            <label for="theme"> Photography accessories:</label>
                            <br />
                            <select id="them" name="theme" onChange={this.onChange}>
                                <option value="7">yes</option>
                                <option value="0">no</option>

                            </select>

                            <br />
                            <br />

                            <label for="photographer">Chose the photographer:</label>
                            <br />

                            <select id="photographer" name="photographer" onChange={this.onChange}>
                                <option value="15">Ali saadi</option>
                                <option value="20">anas al-kurdi</option>
                                <option value="25">linda al-koury</option>
                                <option value="30">omar khyami</option>
                            </select>

                            <br />
                            <br />
                            <br />


                            <h5>The cost of your photo session is({eval(value) + eval(value2) + eval(theme) + eval(photographer)})</h5>
                            <button>Book now</button>

                        </form>

                    </div>
                    {/* <h5>YOU CAN COUSTMIZE YOUR SESSION FROM <a onClick={() => this.setState({ shown: !this.state.shown })}>HRER</a></h5> */}
                </div>

                <br />



            </div>

        )
    }

}
export default Coustem




