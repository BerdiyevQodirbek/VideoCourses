import React, { Component } from "react"
import './preHeader.css'

class PreHeader extends Component {
    render () {
        return(
            <div id="preHeader">
                <div id='preHeader_courseType'>
                    <a href="#a">My courses</a>
                    <a href="#s">Wishlist</a>
                    <a href="#d">Completed</a>   
                </div>
                <div id='course-category'>
                        <label htmlFor="select" className='light'>Category </label>
                        <select>
                            <option value="">Design</option>
                            <option value="">Front End</option>
                            <option value="">Back End</option>
                        </select>
                    </div>
                <div id='course-condition'>
                        <button onClick={this.props.cardHandler} className='light'>
                            <i className="fas fa-th-large"></i>
                            Cards
                        </button>
                        <button onClick={this.props.listHandler} className='light'>
                            <i className="fas fa-bars"></i>
                            List
                        </button>
                    </div>
            </div>
        )
    }
}

export default PreHeader;