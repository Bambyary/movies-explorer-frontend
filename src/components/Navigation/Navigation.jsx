import React from "react";
import '../Header/Header.css';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import icon from '../../images/icon.svg';
import './Navigation.css';
import exit from '../../images/exit.svg';
import icon_black from '../../images/icon_black.svg';


function Navigation (props) {

    const location = useLocation();

    const handleNavigationClose = () => {
        if(props.isNavigationActive) {
            props.setIsNavigationActive(false);
            document.querySelector('.navigation-menu').classList.remove('navigation-menu_active');
            document.querySelector('.navigation-menu').classList.add('navigation-menu_inactive');
            setTimeout(() => {
                document.querySelector('.navigation-menu').classList.remove('navigation-menu_inactive');
            }, 200);
        }
    }

    return (
        <nav className={`navigation-menu ${props.isNavigationActive ? 'navigation-menu_active' : ''}`}>
            <div className="navigation-menu__links">
                <Link className="navigation-menu__link navigation-menu__link_font-size navigation-menu__link_visible" to='/'>Главная</Link>
                <Link className={`navigation-menu__link navigation-menu__link_font-size ${location.pathname === '/movies' && 'navigation-menu__link_checked'}`} to='/movies'>Фильмы</Link>
                <Link className={`navigation-menu__link navigation-menu__link_font-size ${location.pathname === '/saved-movies' && 'navigation-menu__link_checked'}`} to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <div className="navigation-menu__account-link">
                <Link className="navigation-menu__link navigation-menu__link_font-size navigation-menu__link_checked" to='/profile'>
                    Аккаунт
                    <div className={`navigation-menu__icon ${location.pathname !== '/' ? 'navigation-menu__icon-background' : ''}`}>
                        <img className="navigation-menu__icon-img" src={ location.pathname === '/' && props.isNavigationActive || location.pathname !== '/' ? icon_black : icon} alt="Иконка пользователя" />
                    </div>
                </Link>
                <button className="navigation-menu__button" type='button'><img className="navigation-menu__exit" onClick={handleNavigationClose} src={exit} alt="Кнопка выхода" /></button>
                
            </div>
        </nav>
    )
}

export default Navigation;