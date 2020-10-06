import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {exam: false}
    }

    examiner = () => {
        this.setState(prevState => ({exam: !prevState.exam}))
    }

    render () {
        const {exam} = this.state;

        return (
            <header className={exam ? 'examIsOpen' : 'examIsClose'}>
                <div>
                    <div id="search">
                        <button>
                            <span className="lnr lnr-magnifier"></span>
                        </button>
                        <input placeholder='Search Anything ...' />
                    </div>
                </div>
                <div>
                    <h3>Coursefield</h3>
                </div>
                <div>
                    <div>
                        {exam ? (<button onClick={this.examiner} id='examCloseBtn'>&times;</button>)
                        : (<button onClick={this.examiner} id='examOpenBtn'>Go To Exams</button>)}
                        <button id='notification'>
                        <span className="lnr lnr-alarm"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
