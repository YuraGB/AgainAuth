import Link from "next/link";
import React from "react";

import classes from './Denied.module.css'
import hmFace from '../../assets/oops.jpeg';

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
            <section className={classes.emoji}>
                <img src={hmFace} alt="hm-face"/>
            </section>
        </article>
    )
};

export default DeniedComponent;