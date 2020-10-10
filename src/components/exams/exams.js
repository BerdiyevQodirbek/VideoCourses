import React from 'react'
import './exams.css'
import Tests from './exTests/exTests'

const Exams = () => {
    return (
        <div id="exams">
            <div id='profile'>
                <img src="https://image.freepik.com/free-photo/portrait-young-smiling-man_171337-11976.jpg" alt="" />
                <h3>User Name</h3>
                <small id="user-email" className='light'>userEmail@mail.com</small>
                <button id='profile-edite-btn'>
                    <span className="lnr lnr-magic-wand"></span>
                </button>
            </div>
            <div id="courses">
                <ul>
                    <small className='light'><b>COMING UP</b></small>
                    <Tests name='HTML'/>
                    <Tests name='CSS'/>
                    <Tests name='JavaScript'/>
                </ul>
            </div>
        </div>
    )
}

export default Exams;