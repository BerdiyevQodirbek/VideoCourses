import React, {Component} from 'react'
import './list.css'

class List extends Component {

    goToVideo = () => {
        window.open('https://www.youtube.com/c/Alitechacademy/playlists', '_blank');
    }

    render() {
        return(
            <tr className='table-rows'>
                <td>
                    <img src={this.props.URL} alt={this.props.name}/>
                </td>
                <td>
                    <p>{this.props.name}</p>
                </td>
                <td>
                    <p>{this.props.teacher}</p>
                </td>
                <td>
                    <p><span className="lnr lnr-user"></span> {this.props.members}</p>
                </td>
                <td>
                    <p className="course-price">{this.props.price}</p>
                </td>
                <td>
                    <button onClick={this.goToVideo} className='classAttempt'>View</button>
                </td>
            </tr>
        )
    }
}

export default List;