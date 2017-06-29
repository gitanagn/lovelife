import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>

                {/*Subscribe column*/}
                <div className="body-max-width">
                    <div className="footer-container">
                        <div className="footer-container-item">
                            <p className="register">prenumeruok</p>
                            <p>Įvesk savo elektroninio pašto adresą ir būk tikra, kad nepraleisi naujausių motyvuojančių
                                citatų.
                                Registruokis jau dabar! </p>
                            <form className="subscribe">
                                <input type="email" id="input-subscribe" placeholder="El.paštas"/>
                                <input type="submit" id="input-subscribe-submit" value="Siųsti"
                                       className="input-subscribe-submit"/>
                            </form>
                        </div>

                        {/*Facebook column*/}
                        <div className="footer-container-item">
                            <div className="footer-container-img"><img className="footer-container-img"
                                                                       src="images/map.png"
                                                                       alt="map" width="400" height="auto"/>
                                SEK MUS<br/><span className="register">facebook</span></div>
                        </div>
                    </div>
                </div>

                {/*Footer full width*/}
                <div className="text-muted">
                    &copy; 2017 | Love &#x2661; life | Sprendimas: GitanaStudio.com
                </div>

            </footer>
        );
    }
}

export default Footer;