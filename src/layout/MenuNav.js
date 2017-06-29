import React, {Component} from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import './MenuNav.css'

//------------------------------------------------------------------------------------------
class MenuNav extends Component {
    render() {
        return (
            <nav className="menu-container">
                <ul>
                    <li className="menu-item">
                        <NavLink className="menu-link"
                              exact to="/"
                              activeClassName="menu-active">CITATOS</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link"
                              to="/Books"
                              activeClassName="menu-active">MINTYS IŠ KNYGŲ</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link"
                                 to="/About"
                                 activeClassName="menu-active">APIE PROJEKTĄ</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link"
                              to="/Insert"
                              activeClassName="menu-active">ATSIŲSK CITATĄ</NavLink>
                    </li>
                    {/*<li className="menu-item">*/}
                        {/*<a className="menu-link">PADARYTI PAGRINDINIU</a>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        );
    }
}

export default MenuNav;