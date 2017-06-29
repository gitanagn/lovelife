import React, {Component} from 'react';
import './Blockquote.css';
import Image from "../Home/Image";

class Blockquote extends Component {
    render() {
        return (
            <div className="about-first-row">
                <div className="about-image">
                    <img src="images/flower.jpg" alt="Apie projektą" width="800px" height="auto"/>
                    <div className="blockquote"><p>Nežinau, koks buvo tavo gyvenimas ligi šiol ir su kokiu jausmu
                        prabundi rytais. Bet
                        spėju, kad dar nepriklausai tiems, kurie neapsakomai žavisi gyvenimu ir laiko jį patraukliu,
                        jaudinančiu, didelės pagarbos vertu dalyku.</p>
                        <p>Kas būtų, jei rytą prabustum su mintimi:
                            „Puiku - aš galiu vėl nugyventi dieną šitame kūne Žemėje! Kokios dovanos šiandien manęs
                            laukia? Kokius susitikimus, lytėjimus, patirtis, atradimus teks šiandien patirti? Dėkui,
                            dėkui, dėkui už šią naują dieną! Dėkoju tam, kas mane sukūrė. Dėkoju tiems, kurie mane
                            pradėjo ir užaugino. Dėkoju visiems, kurie šiame gyvenime yra šalia manęs, mane liečia,
                            įkvepia ir pakumščiuoja. Ir sau dėkoju už jaudinamą kelią, kurį ir šiandien turiu eiti ir
                            tęsti šį nuotykį, vadinamą žmogaus gyvenimu.“</p>
                        <p>Spėju, kad tavo dienos pradžia atrodo
                            šiek tiek kitaip.</p>
                        <p>Kaip pradedi savo dienas, tokios jos ir yra.</p> <cite>Robert Betz</cite>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blockquote;