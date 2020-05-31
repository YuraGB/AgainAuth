/**
 * The Layout component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Auxx from "../Auxx/Auxx";
import HeaderComponent from "../../components/globalComponents/header/HeaderComponent/HeaderComponent";
import classes from './Layout.module.css';

const Layout: React.FC = (props) => {
    return (
        <Auxx>
            <HeaderComponent/>
            <main className={classes.Main}>
                {props.children}
            </main>
            <footer>
            </footer>
        </Auxx>
    )
};

export default Layout;