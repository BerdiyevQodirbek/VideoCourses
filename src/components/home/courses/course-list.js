import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './list-style.css'

class List extends Component {
    render() {
        return(
            <>
                <li>
                    <img src={this.props.Url} alt=""/>
                    <div>
                        <p><b>{this.props.name}</b></p>
                        <p className='course-comment'>I have no idea</p>
                    </div>
                    <p className='home-courses-duration'>6h 30min</p>
                    <p className='course-duration'>4.8</p>
                    <Link to='/courses/overview'>
                        <button className='course-viewer'>View course</button>
                    </Link>
                </li>
            </>
        )
    }
}

export default List;