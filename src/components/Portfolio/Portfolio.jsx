import React from "react";
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio () {
    return (
        <section className="portfolio">
            <h2 className="portfolio__subtitle">Портфолио</h2>
            <ul className="portfolio__lists">
                    <li className="portfolio__list">
                        <a className="portfolio__link" href='https://bambyary.github.io/how-to-learn/' target='_blank'>
                            <p className="portfolio__website">Статичный сайт</p>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <a className="portfolio__link" href='https://bambyary.github.io/russian-travel/' target='_blank'>
                            <p className="portfolio__website">Адаптивный сайт</p>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className="portfolio__list">
                        <a className="portfolio__link" href='https://bambyary.nomoreparties.co' target='_blank'>
                            <p className="portfolio__website">Одностраничное приложение</p>
                            <img className="portfolio__icon" src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                </ul>
        </section>
    )
}

export default Portfolio;