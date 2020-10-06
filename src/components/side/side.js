import React, { Component } from 'react';
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
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-home"></span>
                            {isOpen && ('Home')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-chart-bars"></span>
                            {isOpen && ('Dashboard')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-film-play"></span>
                            {isOpen && ('Courses')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-layers"></span>
                            {isOpen && ('Assignments')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-pencil"></span>
                            {isOpen && ('Exams')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-license"></span>
                            {isOpen && ('Results')}
                            </a>
                        </li>
                        <li>
                            <a href='#link' className='light'>
                            <span className="lnr lnr-cog"></span>
                            {isOpen && ('Settings')}
                            </a>
                        </li>
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