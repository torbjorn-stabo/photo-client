import React, { Component } from "react";
import LogoutButton from './LogoutButton';
import styled from 'styled-components';
import UserContext from "./UserContext";

const StyledLogoutButton = styled(LogoutButton)`
    margin-left: 1em;
`;
const StyledUsernameSpan = styled.span`
    color: #6795bd;
`;

class InfoBar extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    (userContext) => {
                        console.log('InfoBar consumer: ', userContext);
                        
                        return(
                            <aside className={`infobar ${this.props.className}`}>
                                Inloggad: <StyledUsernameSpan>{userContext.activeUser.email}</StyledUsernameSpan>
                                <StyledLogoutButton
                                    logoutFunc={userContext.logoutFunc}>Logga ut</StyledLogoutButton>
                            </aside>
                        );
                    }
                }
            </UserContext.Consumer>
        );
    }
}

export default InfoBar;