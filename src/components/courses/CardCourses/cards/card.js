import React, {Component} from 'react'
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {mark: false}
    }

    markHandler = () => {
        this.setState(prevState => ({mark: !prevState.mark}));
    }

    goToVideo = () => {
        window.open('https://www.youtube.com/c/Alitechacademy/playlists', '_blank');
    }

    render() {
        const {mark} = this.state;
        return(
            <div className="card">
                <div className="card-header">
                    <img src={this.props.URL} alt=""/>
                    <button onClick={this.markHandler} className="course-mark">
                        {mark 
                        ? (<i className="fas fa-bookmark"></i>)
                        : (<i className="far fa-bookmark"></i>)}
                    </button>
                </div>
                <div className="card-body">
                    <div>
                        <h3>{this.props.name}</h3>
                        <p><span className="lnr lnr-user"></span> {this.props.members}</p>
                    </div>
                    <div>
                        <button onClick={this.goToVideo} className='course-view'>View</button>
                        <p className="course-fame">
                            <span className="lnr lnr-star"></span>
                            <span className="lnr lnr-star"></span>
                            <span className="lnr lnr-star"></span>
                            <span className="lnr lnr-star"></span>
                            <span className="lnr lnr-star"></span>
                        </p>
                    </div>
                    <div>
                        <h5>{this.props.teacher}</h5>
                        <p className="course-price">{this.props.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;