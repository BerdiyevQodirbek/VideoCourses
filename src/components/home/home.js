import React, {Component} from 'react'
import List from "./courses/course-list"
import Suggested from "./courses/suggested"
import OwnCourse from "./courses/own-course";
import './home.css'

class Home extends Component {
    render () {
        return (
            <>
                <div id="home-section">
                    <div>
                        <div id='home-profile'>
                            <div id='hello-profile'>
                                <div>
                                    <h2>Hey Dilnoza Mahkamova</h2>
                                    <p className='light'>It`s good to see you again</p>
                                </div>
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2016/11/22/21/42/adult-1850703_960_720.jpg" alt=""/>
                                </div>
                            </div>
                            <div id='own-courses'>
                                    {/* <div id='own-course-data'>
                                        <img src="https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png" alt=""/>
                                        <div>
                                            <p><b>Figma</b></p>
                                            <p>I have no idea</p>
                                        </div>
                                        <button>Continue</button>
                                    </div> */}
                                    <OwnCourse name='Figma' comment='I have no idea' Url="https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png" />
                                <div id='own-course-handler'>
                                    <button>
                                        <span className="lnr lnr-chevron-left-circle"></span>
                                    </button>
                                    <button>
                                        <span className="lnr lnr-chevron-right-circle"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id='home-courses'>
                            <h3>Courses</h3>
                            <div id='home-courses-link'>
                                <a href="#courses">All Courses</a>
                                <a href="#courses">The Newest</a>
                                <a href="#courses">Top Rated</a>
                                <a href="#courses">Most Popular</a>
                            </div>
                            <ul>
                                {/* <li>
                                    <img src="https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW_400x400.jpg" alt=""/>
                                    <div>
                                        <p><b>Instagram</b></p>
                                        <p className='course-comment'>I have no idea</p>
                                    </div>
                                    <p className='home-courses-duration'>6h 30min</p>
                                    <p className='course-duration'>4.8</p>
                                    <button className='course-viewer'>View course</button>
                                </li> */}
                                <List name='Instagram' Url="https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW_400x400.jpg"/>
                                <List name='React' Url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
                                <List name='HTML' Url="https://html5doctor.com/wp-content/uploads/2011/01/HTML5_Logo_256.png"/>
                                <List name='CSS' Url="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"/>
                                <List name='JavaScript' Url="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"/>
                                <List name='Photoshop' Url="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png"/>
                                <List name='Firebase' Url="https://www.gstatic.com/devrel-devsite/prod/v36e9b4a2fdc696650f09851e8c880b958655492821ded3455f80aaef87b6b52b/firebase/images/touchicon-180.png"/>
                                <List name='Bootstrap' Url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/480px-Bootstrap_logo.svg.png"/>
                                <List name='SASS' Url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"/>
                                <List name='MySQL' Url="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"/>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <div id='home-total-courses'>
                            <div>
                                 <div className="home-search">
                                     <button>
                                        <span className="lnr lnr-magnifier"></span>
                                     </button>
                                     <input type="text" placeholder='Search . . .' />
                                 </div>
                                 <button id='home-notification'>
                                     <span className="lnr lnr-alarm"></span>
                                 </button>
                                 <button id='home-user'>
                                     <img src="https://cdn.pixabay.com/photo/2016/11/22/21/42/adult-1850703_960_720.jpg" alt="user"/>
                                 </button>
                            </div>
                            <div>
                                <div>
                                    <p className="home-courses-number">11</p>
                                    <p>Courses completed</p>
                                </div>
                                <div>
                                    <p className="home-courses-number">4</p>
                                    <p>Courses in progress</p>
                                </div>
                            </div>
                        </div>
                        <div id='home-statistics'>
                            <p>Your statistics</p>
                            <div>
                                <p href="#home">Learning hours</p>
                                <p href="#home">My courses</p>
                                <select name="" id="">
                                    <option value="">Weekly</option>
                                    <option value="">Monthly</option>
                                </select>
                            </div>
                            <img src="https://i.pinimg.com/originals/89/6e/e9/896ee926f57de78a81716948d074cf9c.gif" alt=""/>
                        </div>
                        <Suggested name='Photoshop' comment='We suggest you to scale up' Url='https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png' />
                    </div>
                </div>
            </>
        )
    }
}

export default Home;