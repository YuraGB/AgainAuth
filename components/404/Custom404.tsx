/**
 * The 404 component wat is the body of
 * the 404 page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import Link from "next/link";
import React from "react";

import classes from './404.module.css'

/**
 * CompCustom404
 *
 * @constructor
 * @return {*} JSX.Element
 */
const CompCustom404 = () => {
    return (
        <article className={classes.Denied}>
            <section className={classes.deniedInfo}>
                <h3 className={classes.title}>
                    404
                </h3>
                <span className={classes.separator}>|</span>
                <span>
                    The web page doesn't exist. Return to the
                </span>
                <Link href='/'><a className={classes.link} title='back to the login'>Home Page.</a></Link>
            </section>
        </article>
    )
};

export default CompCustom404;