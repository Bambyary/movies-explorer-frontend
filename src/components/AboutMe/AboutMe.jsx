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
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы. </p>
                    <a className="about-me__link" href='https://github.com/Bambyary' target='_blank'>Github</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фото" />
            </article>
        </section>
    )
}

export default AboutMe;