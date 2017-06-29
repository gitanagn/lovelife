import React, {Component} from 'react';
import './Insert/Insert.css';


class Insert extends Component {
    render() {
        return (

            <div className="body-max-width">
                <div className="half left">
                    <h1>Atsiųsk citatą</h1>
                    <p>Turite mėgstamą citatą, kuri jus motyvuoja, įkvepia ir padrąsina? O gal perskaitėte knygą, kurios
                        mintimis norite pasidalinti? Atsiųskite mums ir mes ja pasidžiaugsime su mūsų skaitytojais.</p>

                    <form className="insert-quote" id="quote-form" name="quote-form">
                        <div className="">
                            <input type="text" name="vardas" id="input-name" placeholder="Jūsų vardas"/>
                            <input type="email" name="email" id="input-email" placeholder="El.paštas"/>
                            <input type="text" name="autorius" id="input-subject" placeholder="Autorius"/>
                            <textarea name="citata" id="input-message" placeholder="Jūsų mėgstama citata(os)"></textarea>
                            <button className="input-submit">Siųsti</button>
                        </div>
                    </form>

                </div>
                <div className="half right"><img className="footer-container-img" src="images/flowers-insert.jpg" alt="Ačiū už dalinimąsi"
                                                 width="400" height="auto"/></div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Insert;