import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Li from './Links/Links'
import './side.css'

class Side extends Component {
    constructor(props) {
        super(props);
        this.state= {isOpen: false}
    }
    expand = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}))
        }

    render() {
        const {isOpen} = this.state;

        return (
            <>
                <aside className={isOpen ? 'openSide' : 'closeSide'}>
                    <h2 id='logo'>
                    <button id='expandSideBar' onClick={this.expand}>
                        <span className="lnr lnr-menu"></span>
                    </button>
                    <a href='https://alitech.uz/' target='blank'>{isOpen && ('Alitech')}</a>
                 </h2>
                <div>
                    <ul id="links">
                        <Link to='/home'>
                            <Li iconClass="lnr lnr-home" link={isOpen && ('Home')} />
                        </Link>
                        <Li iconClass="lnr lnr-chart-bars" link={isOpen && ('Dashboard')} />
                        <Link to='/courses'>
                            <Li iconClass="lnr lnr-film-play" link={isOpen && ('Courses')} />
                        </Link>
                        <Li iconClass="lnr lnr-layers" link={isOpen && ('Assignments')} />
                        {/* <Li Url='#Exams' iconClass="lnr lnr-pencil" link={isOpen && ('Exams')} /> */}
                        {/* <Li Url='#Result' iconClass="lnr lnr-license" link={isOpen && ('Results')} /> */}
                        <Li iconClass="lnr lnr-cog" link={isOpen && ('Settings')} />
                    </ul>
                </div>
                <div id='language'>
                    {/* <button>
                        <img src="https://cdn.countryflags.com/thumbs/russia/flag-button-round-250.png" alt=""/>
                    </button>
                    <button>
                        <img src="https://dejpknyizje2n.cloudfront.net/marketplace/products/united-states-flag-glossy-button-sticker-1541454818.9536505.png" alt=""/>
                    </button>
                    <button>
                        <img src="https://cdn.countryflags.com/thumbs/uzbekistan/flag-button-round-250.png" alt=""/>
                    </button> */}
                </div>
                </aside>
            </>
        )
    }
}
 
export default Side;