import React, { Component } from 'react';
import Link from './links/links'
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
                        <Link Url='#Home' iconClass="lnr lnr-home" link={isOpen && ('Home')} />
                        <Link Url='#Dashboard' iconClass="lnr lnr-chart-bars" link={isOpen && ('Dashboard')} />
                        <Link Url='#Courses' iconClass="lnr lnr-film-play" link={isOpen && ('Courses')} />
                        <Link Url='#Assignments' iconClass="lnr lnr-layers" link={isOpen && ('Assignments')} />
                        {/* <Link Url='#Exams' iconClass="lnr lnr-pencil" link={isOpen && ('Exams')} /> */}
                        {/* <Link Url='#Result' iconClass="lnr lnr-license" link={isOpen && ('Results')} /> */}
                        <Link Url='#Settings' iconClass="lnr lnr-cog" link={isOpen && ('Settings')} />
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