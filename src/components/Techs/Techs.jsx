import React from "react";
import './Techs.css';
import Subtitle from '../Subitle/Subtitle';
import Title from '../Title/Title';

function Techs () {
    return (
        <section id='techs' className="techs">
            <article className="techs__body">
                <Subtitle text='Технологии' />
                <Title text='7 технологий' />
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__lists">
                    <li className="techs__list">HTML</li>
                    <li className="techs__list">CSS</li>
                    <li className="techs__list">JS</li>
                    <li className="techs__list">React</li>
                    <li className="techs__list">Git</li>
                    <li className="techs__list">Express.js</li>
                    <li className="techs__list">mongoDB</li>
                </ul>
            </article>
        </section>
    )
}

export default Techs;