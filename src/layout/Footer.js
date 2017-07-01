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
                            <div className="register">Prenumerata</div>
                            <div className="footer-description">Įveskite savo elektroninio pašto adresą ir būkite tikri, kad nepraleisite naujausių įkvepiančių citatų! </div>
                            <form className="subscribe">
                                <input type="email" id="input-subscribe" placeholder="El.paštas"/>
                                <input type="submit" id="input-subscribe-submit" value="Siųsti"
                                       className="input-subscribe-submit"/>
                            </form>
                        </div>

                        {/*Facebook column*/}
                        <div className="footer-container-item">
                            <div className="footer-container-img"><img className="footer-container-img"
                                                                       src="images/friendship.png"
                                                                       alt="map" width="380" height="auto"/>
                                <div className="footer-img-text"><a href="https://www.facebook.com/EsuSekmingaMoteris/" target="_blank">SEKITE MUS<br/><span className="register">facebook</span></a></div></div>
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