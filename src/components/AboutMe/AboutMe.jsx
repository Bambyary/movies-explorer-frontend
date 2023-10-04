import React from "react";
import './AboutMe.css';
import Subtitle from "../Subitle/Subtitle";
import photo from '../../images/photo.jpg';

function AboutMe () {
    return (
        <section id='about-me' className="about-me">
            <Subtitle text='Студент' />
            <article className="about-me__info">
                <div className="about-me__description">
                    <h3 className="about-me__title">Марина</h3>
                    <h4 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h4>
                    <p className="about-me__text">Живу в городе Самара. Увлекаюсь чтением книг, психологией и ездой на велосипеде.
Закончила Самарский Государственный Социально-педагогический университет. <br />
Ещё во время учёбы осознала, что выбрала не ту профессию и начала искать своё призвание, остановившись, в итоге, на веб-разработке.
Пару месяцев обучалась самостоятельно. <br />
На данный момент, закончила курсы Яндекс Практикума и утвердилась в своём желании развиваться именно в этом направлении.
Теперь я нахожусь в поиске нового "пристанища",
где смогу применить уже имеющиеся навыки в веб-разработке, получить новые знания и опыт, и развиваться
в данной сфере. </p>
                    <a className="about-me__link" href='https://github.com/Bambyary' target='_blank'>Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фото" />
            </article>
        </section>
    )
}

export default AboutMe;