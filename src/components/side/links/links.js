import React, {Component} from "react"


class Li extends Component {
    render() {
        return(
            <li className='light'>
                <span className={this.props.iconClass}></span>
                {this.props.link}
            </li>
        )
    }
}

export default Li;