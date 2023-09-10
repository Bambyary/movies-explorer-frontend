import React from "react";
import './Profile.css';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Profile (props) {

    const [isClicked, setIsClicked] = React.useState(false);

    function handleButtonEditClick () {
        setIsClicked(true);
    }

    function handleButtonSaveClick () {
        setIsClicked(false);
    }

    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="profile">
                <section className="profile__section">
                    <h1 className="profile__title">Привет, Марина!</h1>
                    <form className="profile__form" name='profile-form'>
                        <fieldset className="profile__info">
                            <label className="profile__label" htmlFor="name"> Имя
                                <input className="profile__input" 
                                    id='name' 
                                    type="text"
                                    placeholder="Марина"
                                    minLength='2' maxLength='30'
                                    required
                                    disabled={!isClicked} />
                            </label>
                        </fieldset>
                        <fieldset className="profile__info">
                            <label className="profile__label" htmlFor="email"> E-mail
                                <input className="profile__input" 
                                    id='email' 
                                    type="email"
                                    placeholder="pochta@yandex.ru"
                                    minLength='2' maxLength='30'
                                    required
                                    disabled={!isClicked} />
                            </label>
                        </fieldset>
                    </form>

                    {!isClicked ? 
                        <div className="profile__button-container">
                            <button className="profile__button-edit" type='button' onClick={handleButtonEditClick}>Редактировать</button>
                            <Link className="profile__link" to='/'>Выйти из аккаунта</Link>
                        </div>
                        :
                        <div className="profile__button-save-container">
                            <span className="profile__error"></span>
                            <button className="profile__button-save" type="submit" onClick={handleButtonSaveClick}>Сохранить</button>
                        </div>}
                </section>

            </main>
        </>
    )
}

export default Profile;