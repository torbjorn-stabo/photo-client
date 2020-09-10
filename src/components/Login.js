import React, { Component } from 'react';
import LoginBox from './LoginBox';

import './Login.css'

class Login extends Component {
    constructor() {
        super();
        this.loginSuccess = this.loginSuccess.bind(this);
    }

    loginSuccess() {
        this.props.history.push('/main');
    }

    render() {
        return (
            <div className="login">
                <h1>Välkommen till kphoto-web.</h1>
                <LoginBox success={this.loginSuccess}/>
            </div>
        );
    }
}

export default Login;