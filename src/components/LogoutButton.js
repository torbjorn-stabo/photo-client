import React, { Component } from "react";
import { Redirect } from "react-router";
import { Button } from 'semantic-ui-react';

class LogoutButton extends Component {
    state = {
        navigate: false
    };

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/" push={true} />;
        }

        return <Button className={`infobar ${this.props.className}`} onClick={this.props.logoutFunc}>{this.props.children}</Button>
    }
}

export default LogoutButton;