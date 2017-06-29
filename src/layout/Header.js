import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="pink-line"></div>
                <div className="flex-logo">
                    <div className="logo-title">Love</div>
                        <img src="http://www.gitanastudio.com/gimtadienis/images/love-life-heart.png"
                             width="90"
                             height="auto" alt="Love life"/>
                    <div className="logo-title">life</div>
                </div>
            </div>
        );
    }
}

export default Header;