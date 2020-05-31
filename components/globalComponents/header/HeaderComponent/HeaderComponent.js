/**
 * The Header component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import AuthComponent from "../AuthComponent/AuthComponent";

const HeaderComponent = (props) => {
    return (
        <header>
            <div className='logo'>

            </div>
            <AuthComponent />
        </header>
    )
};

export default HeaderComponent;