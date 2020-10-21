import React, {Component} from 'react'
import { Progress } from 'react-circle-progress-bar'
import {Link} from 'react-router-dom'

import './list.css'

class List extends Component {

    goToVideo = () => {
        window.open('https://www.youtube.com/c/Alitechacademy/playlists', '_blank');
    }

    render() {
        return(
            <li>
                <img src={this.props.URL} alt={this.props.name}/>
                <div>
                    <p><b>{this.props.name}</b></p>
                    <p className='course-comment'>I have no idea</p>
                </div>
                <div>
                    <p className="light"><small>{this.props.type}</small></p>
                </div>
                <div>
                    <p className='home-courses-duration'>{this.props.duration}</p>
                </div>
                <div>
                    <p className='course-duration'><i className="fab fa-gripfire"></i>{this.props.famous}</p>
                </div>
                <div>
                    <Progress strokeWidth="10" progress={this.props.percent} style={{width: "55px"}} gradient={[{stop: 0.0, color: '#00bcd4'}, {stop: 1, color: '#03a9f4'}]} />
                </div>
                <Link to='/courses/overview'>
                    <button className='continue-btn'>Continue</button>
                </Link>
            </li>
        )
    }
}

export default List;