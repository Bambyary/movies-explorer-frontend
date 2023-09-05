import React from "react";
import '../Header/Header.css';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import {useLocation} from 'react-router-dom';
import Burger from "../Burger/Burger";

function Header (props) {

    const location = useLocation();

    return (
        <header className={`header ${location.pathname !== '/' ? 'header_background-color' : ''}`}>
            <div className="header__menu">
                <Link className="header__link" to='/'><img className="header__logo" src={logo} alt="Лого" /></Link>
                {props.isLoggedIn ? 
                    <>
                        <Navigation />
                        <Burger/>
                    </>
                :
                <nav className="header__navigation">
                    <Link className="header__link" to='/signup'>Регистрация</Link>
                    <button className="header__button" type='button'><Link className="header__link header__link_color" to='/signin'>Войти</Link></button>
                </nav>
                    }
            </div>
        </header>
    );
}

export default Header;