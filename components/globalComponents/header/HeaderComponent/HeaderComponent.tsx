/**
 * The Header component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import classes from './Header.module.css';

/**
 * HeaderComponent
 *
 * @constructor
 * @return {*} JSX.Element
 */
const HeaderComponent:React.FC = () => {
    return (
        <header className={classes.header}>
            <div >
                <p>This application build with &nbsp;
                    <a className={classes.next} href="https://nextjs.org/">Next.js</a>&nbsp;
                    and is using &nbsp; <a className={classes.mongo} href="https://account.mongodb.com/account/login">MongoDB cloud</a>,&nbsp;
                    <a className={classes.passport} href="http://www.passportjs.org/">Passport.js</a>, and&nbsp;
                    <a className={classes.mongoose} href="https://mongoosejs.com/">Mongoose</a>.
                </p>
                <p>You can take a review it on the <a className={classes.git} href="https://github.com/YuraGB/AgainAuth">Github</a>.</p>
            </div>
        </header>
    )
};

export default HeaderComponent;