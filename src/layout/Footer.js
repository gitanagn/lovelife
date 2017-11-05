import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-left"><a href="http://m.me/EsuSekmingaMoteris">Atsiųsk savo citatą</a></div>
                <div className="footer-logo-div"><img className="footer-logo" src="images/sm-logo.jpg"
                                                      alt="Sėkminga moteris"/></div>
                <div className="footer-right">
                    &copy; 2017 Sėkminga moteris
                </div>
            </footer>
        );
    }
}

export default Footer;