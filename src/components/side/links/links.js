import React, {Component} from "react"


class Link extends Component {
    render() {
        return(
            <li>
                <a href={this.props.Url} className='light'>
                    <span className={this.props.iconClass}></span>
                    {this.props.link}
                </a>
            </li>
        )
    }
}

export default Link;