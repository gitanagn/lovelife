import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo-placeholder">
                    <div className="logo-title">Sėkminga moteris</div>
                    <div className="logo-tagline">ĮKVĖPIMO IR MOTYVACIJOS ŠALTINIS</div>
                </div>
            </div>
        );
    }
}

export default Header;