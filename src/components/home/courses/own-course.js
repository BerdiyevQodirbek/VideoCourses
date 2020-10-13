import React, {Component} from 'react'


class OwnCourses extends Component {
    render() {
        return(
            <div id='own-course-data'>
                <img src={this.props.Url} alt=""/>
                <div>
                    <p><b>{this.props.name}</b></p>
                    <p className='light'>{this.props.comment}</p>
                </div>
                <button className='continue-btn'>Continue</button>
            </div>
        )
    }
}

export default OwnCourses;