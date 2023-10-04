import React from "react";
import './InfoTooltip.css';

function InfoTooltip (props) {

    return (
        <section className={`popup ${props.isSuccess ? 'popup_opened' : ''}`} id='popup'>
            <div className="popup__container">
                <div className='popup__mark'></div>
                <h2 className="popup__title popup__title_mark">Данные успешно изменены.</h2>
                <button className="popup__button-exit" type="button"
                   onClick={() => { props.setIsSuccess(false) }} ></button>
            </div>
        </section>
    )
}

export default InfoTooltip;