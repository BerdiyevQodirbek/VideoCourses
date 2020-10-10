import React, {Component} from 'react'
import './list-style.css'

class Suggested extends Component {
    render() {
        return (
            <div id='home-suggested-course'>
                <div>
                    <p><b>{this.props.name}</b></p>
                    <p className='course-comment'>{this.props.comment}</p>
                    <button>View Course</button>
                </div>
                <div>
                    <img src={this.props.Url} alt=""/>
                </div>
            </div>
        )
    }
}

export default Suggested;