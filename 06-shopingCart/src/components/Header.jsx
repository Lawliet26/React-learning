import React from 'react';
import Filters from "./Filters";

function Header({changeFilters}) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters changeFilters={changeFilters}></Filters>
        </header>
    );
}

export default Header;
