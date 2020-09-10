import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className={"navbar "+this.props.className}>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/val1">Val 1</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;