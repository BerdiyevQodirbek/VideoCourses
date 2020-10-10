import React, { Component } from 'react'
import './exTests.css'

class Tests extends Component {
    render () {
        return(
            <li>
                <div className='course-data'>
                    <h5>{this.props.name} Classes</h5>
                    <button className='classAttempt'>Attempt now</button>
                </div>
                <div>
                    <button className='course-settings'><i className="fas fa-ellipsis-v"></i></button>
                </div>
            </li>
        )
    }
}

export default Tests;