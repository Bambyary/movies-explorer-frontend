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
            document.querySelector('.navigation-menu__container').classList.remove('navigation-menu__container_active');
            document.querySelector('.navigation-menu__container').classList.add('navigation-menu__container_inactive');
            setTimeout(() => {
                document.querySelector('.navigation-menu__container').classList.remove('navigation-menu__container_inactive');
            }, 200);
        }
    }

    return (
        <section className={`navigation-menu ${props.isNavigationActive ? 'navigation-menu_overlay' : ''}`}>
            <nav className={`navigation-menu__container ${props.isNavigationActive ? 'navigation-menu__container_active' : ''}`}>
                <ul className="navigation-menu__links">
                    <li className="navigation-menu__list"><Link className="navigation-menu__link navigation-menu__link_font-size navigation-menu__link_visible" to='/'>Главная</Link></li>
                    <li className="navigation-menu__list"><Link className={`navigation-menu__link navigation-menu__link_font-size ${location.pathname === '/movies' && 'navigation-menu__link_checked'}`} to='/movies'>Фильмы</Link></li>
                    <li className="navigation-menu__list"><Link className={`navigation-menu__link navigation-menu__link_font-size ${location.pathname === '/saved-movies' && 'navigation-menu__link_checked'}`} to='/saved-movies'>Сохранённые фильмы</Link></li>
                </ul>
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
        </section>
    )
}

export default Navigation;