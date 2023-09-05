import React from "react";
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__copyright">
                <p className="footer__element footer__element_color">© 2023</p>
                <div className="footer__container">
                    <p className="footer__element">Яндекс.Практикум</p>
                    <p className="footer__element">Github</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;