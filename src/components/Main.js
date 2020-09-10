import React, { Component } from 'react';

import Menu from './Menu';
import IconMenu from './IconMenu';
import InfoBar from './InfoBar';
import styled from 'styled-components';

import './Main.css';

const PopupMenu = styled(Menu)`
    position: fixed;
    top: 0px;
    left: -10em;
    bottom: 0px;
    background-color: rgba(100, 0, 0, 0.5);
    width: 10em;
    padding-right: 2em;
`;

const StyledInfoBar = styled(InfoBar)`
    padding: 0.2em 0.5em;
    text-align: right;
`;

class Main extends Component {    
    render() {
        console.log('Main:', this.props.user);
        
        return (
            <div>
                <PopupMenu/>
                <StyledInfoBar user={this.props.user}/>
                <IconMenu/>
            </div>
        );
    }
}

export default Main;