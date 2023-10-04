import React from "react";
import './Burger.css';
import burger from '../../images/burger.svg';
import Navigation from "../Navigation/Navigation";

function Burger () {

    const [isBurgerActive, setIsBurgerActive] = React.useState(false); // Переменная отвечает за активное/неактивное состояние бургера
    const [isNavigationActive, setIsNavigationActive] = React.useState(false); // Переменная отвечает за автивное/неактивное состояние навигации

    // Функция меняет состояние переменной бургера и навигации
    function clickBurger () {
        setIsBurgerActive(true);
        setIsNavigationActive(true);
    }

    return (
        <div className='burger'>
            <button onClick={clickBurger} className="burger__button" type='button'><img className="burger__img" src={burger} alt="Бургер-меню" /></button>
            {isBurgerActive && <Navigation isNavigationActive={isNavigationActive} setIsNavigationActive={setIsNavigationActive} />}
        </div>
    )
}

export default Burger;