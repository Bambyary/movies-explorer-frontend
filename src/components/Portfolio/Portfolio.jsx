import React from "react";
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio () {
    return (
        <section className="portfolio">
            <h5 className="portfolio__subtitle">Портфолио</h5>
            <ul className="portfolio__lists">
                    <li className="portfolio__list">
                        <p className="portfolio__website">Статичный сайт</p>
                        <a className="portfolio__link" href='https://bambyary.github.io/how-to-learn/' target='_blank'>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <p className="portfolio__website">Адаптивный сайт</p>
                        <a className="portfolio__link" href='https://bambyary.github.io/russian-travel/' target='_blank'>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <p className="portfolio__website">Одностраничное приложение</p>
                        <a className="portfolio__link" href='https://bambyary.nomoreparties.co' target='_blank'>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                </ul>
        </section>
    )
}

export default Portfolio;