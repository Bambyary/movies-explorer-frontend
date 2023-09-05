import React from "react";
import './AboutProject.css';
import Subtitle from '../Subitle/Subtitle';

function AboutProject () {
    return (
        <section id='about-project' className="about-project">
            <Subtitle text='О проекте' />
            <article className="about-project__description">
                <div className="about-project__column">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
            <div className="about-project__parts">
                <div className="about-project__weeks">
                    <p className="about-project__week">1 неделя</p>
                    <p className="about-project__task">Back-end</p>
                </div>
                <div className="about-project__weeks about-project__weeks_width">
                    <p className="about-project__week about-project__week_color">4 недели</p>
                    <p className="about-project__task">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;