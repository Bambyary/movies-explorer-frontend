import React from "react";
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__copyright">
                <p className="footer__element footer__element_color">© 2023</p>
                <ul className="footer__list-container">
                    <li className="footer__list"><a className="footer__link" href="https://practicum.yandex.ru" target='_blank'>Яндекс.Практикум</a></li>
                    <li className="footer__list"><a className="footer__link" href="https://github.com" target='_blank' >Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;