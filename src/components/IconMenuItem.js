import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class IconMenuItem extends Component {
    propTypes = {
        url: PropTypes.string.isRequired
    }

    render() {
        const StyledItem = styled.a.attrs(props => ({
            className: "menuitem",
            href: `/${this.props.url}`
          }))`
            background-image: url('/icons_62x62.png');
            background-position: ${props => (this.props.icon-1)*62}px 0px;
            background-repeat: repeat-x;
        `;

        return (
            <StyledItem>
                {this.props.children}
            </StyledItem>
        );
    }
}

export default IconMenuItem;