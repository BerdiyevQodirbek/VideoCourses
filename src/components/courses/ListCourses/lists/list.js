import React, {Component} from 'react'
import { Progress } from 'react-circle-progress-bar'

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
                    <button className='continue-btn'>Continue</button>
                </li>
            // <tr className='table-rows'>
            //     <td>
            //         <img src={this.props.URL} alt={this.props.name}/>
            //     </td>
            //     <td>
            //         <p>{this.props.name}</p>
            //     </td>
            //     <td>
            //         <p>{this.props.teacher}</p>
            //     </td>
            //     <td>
            //         <p><span className="lnr lnr-user"></span> {this.props.members}</p>
            //     </td>
            //     <td>
            //         <p className="course-price">{this.props.price}</p>
            //     </td>
            //     <td>
            //         <button onClick={this.goToVideo} className='classAttempt'>View</button>
            //     </td>
            // </tr>
        )
    }
}

export default List;