import React, { Component } from 'react'
import './galary.css'



class Galery extends Component {


    render() {
        return (

            <div className="mainCard">
                <div className='imgCard'>
                    <img src={this.props.img} width="150vw" height="150vh" alt="" />

                    <div className="CardContent">
                        <p>
                            {this.props.content}
                        </p>

                        <p>

                            THE COST $:
                            <i><b>
                                {this.props.cost}
                            </b>
                            </i>
                        </p>
                        <button onClick={this.props.setData}>book now</button>
                    </div>
                </div>

            </div>
        )
    }

}
export default Galery




