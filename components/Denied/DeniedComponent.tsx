/**
 * The DeniedComponent component wat is the body of
 * the Denied page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import Link from "next/link";
import React from "react";

import classes from './Denied.module.css'

/**
 * DeniedComponent
 *
 * @constructor
 * @return {*} JSX.Element
 */
const DeniedComponent = () => {
    return (
        <article className={classes.Denied}>
            <section className={classes.deniedInfo}>
                <h3 className={classes.title}>
                    403
                </h3>
                <span className={classes.separator}>|</span>
                <span>
                    you entered incorrect data please
                </span>
                <Link href='/'><a className={classes.link} title='back to the login'>try again</a></Link>
            </section>
        </article>
    )
};

export default DeniedComponent;