import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./sign.css"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {hasAccount: false}
    }

    AccountHandler= () => {
        this.setState(prevState => ({hasAccount: !prevState.hasAccount}))
    }

    
    render() {
        const {hasAccount} = this.state;
        return(
            <div className="Sign">
                <div id='Alitech'>
                    <img src='https://alitech.uz/wp-content/uploads/2020/04/logo-full.svg' alt='Alitech' />
                </div>
                <img src="https://media.istockphoto.com/photos/lightbulb-with-connecting-dots-picture-id1181771059?b=1&k=6&m=1181771059&s=170667a&w=0&h=qBPUMwCw_CSvF-0tzd8FrAlOW7VgkFXV1YvskWTuN2Y=" alt=""/>
                <div className='sign_form'>
                    {!hasAccount && (<div>
                        <label htmlFor="Name">Full name :</label>
                        <input type="text" name="Name" id="sign_name"/><br />
                    </div>)}
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input type="email" placeholder=' ' name="email" id="sign_mail"/><br />
                    </div>
                    <div>
                        <label htmlFor="psw">Password :</label>
                        <input type="password" name="psw" id="sign_psw"/><br />
                    </div>
                    <Link to='/'>
                        <button onClick={this.goHome}>
                            {hasAccount 
                            ? 'Sign In'
                        : 'Sign Up'}
                        </button>
                    </Link>
                </div>
                <button id='change' onClick={this.AccountHandler}><span className="lnr lnr-sync"></span></button>
            </div>
        )
    }
}

export default SignUp;