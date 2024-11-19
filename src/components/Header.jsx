import React from "react";
import './Header.css';
import StarWarsLogo from './StarWarsOpeningLogo.svg';

const Header = () => (
    <div className="title">
        <img src={StarWarsLogo} className="logo" alt="StarWars" />
        <h1>Вселенная <i>"Звёздных войн"</i></h1>
    </div>
);

export default Header;