import React, {Component} from 'react';
import './Description.css';

class Description extends Component {
    render() {
        return (
            <div className="body-max-width">
                <h1>Kas yra „Love life“?</h1>
                <div className="description">
                    <p>Nuolatos mūsų gyvenime esantis laimės šaltinis po truputį praranda savo galią. Kitaip tariant, prie nuolatinės laimės yra greitai priprantama ir nebevertinama. Buvo imta mąstyti, kaip išvengti šio pripratimo reiškinio. Apskritai yra dvi išeitys. Pirmoji: retsykiais patirti šių „gerų įprastų dalykų“, prie kurių taip greitai priprantame, stygių: elektros tinklo gedimas padeda suvokti, kokia laimė, kad elektrą mes turime; artimųjų nutolimas padeda įsisavinti, kokia laimė gyventi šalia jų; kojos lūžis parodo, kaip nuostabu yra vaikščioti, ir pan. Antroji: nuolatos stengtis įsisamoninti, kokia sėkmė mus lydi kasdien...</p>
                    <p>Norint gyventi laimingai, reikia mėgautis dabarties akimirka, nenutolti nuo gamtos, gerbti kitus žmones, gyventi paprastą ir kuklų gyvenimą, neskubėti pykti ir pan. </p>
                    <p>Juo labiau sąmonė klaidžioja, juo mažiau mes laimingi: proto išsiblaškymas lemiamai veikia laimę. Vienas geriausių teigiamas emocijas sukeliančių veiksnių yra ne mūsų veiklos pobūdis, o veikiau dėmesingumo lygis, kurį išlaikome ją atlikdami: pavyzdžiui, susitelkę į atliekamą darbą esam laimingesni negu pramogaudami, bet tuo pat metu galvodami apie ką nors kita.</p>
                    <p>Projektas <em>Love life</em> vaizdingai pateikia žymių žmonių ir išminčių citatas, priverčiančias mus stabtelti, susimąstyti, šypsotis. Skiltyje „Mintys iš knygų“ rasite geriausias ištraukas iš psichologinių, savęs pažinimo vadovėlių. Jei turite Jus motyvuojančių ir įkvepiančių citatų, maloniai prašome pasidalinkite skiltyje „Atsiųsk citatą“.</p>
                    <p>Kad pasikeistum, svarbiausia ne tai, ką žinai, o tai, ką darai.</p>
                    <p>Malonaus skaitymo. Prasmingų atradimų. Būkite laimingi. <em>Love life!</em></p>
                    <p className="signature">Gitana</p>
                </div>
            </div>
        );
    }
}

export default Description;