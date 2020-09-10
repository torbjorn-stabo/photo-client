import React, { Component } from 'react';
import SignupBox from './SignupBox';

import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <h1>Välkommen. Registrera dig och vänta på att bli godkänd.</h1>
                <SignupBox/>
            </div>
        );
    }
}

export default Signup;