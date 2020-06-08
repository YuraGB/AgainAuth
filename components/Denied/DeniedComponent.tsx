import Link from "next/link";
import React from "react";

import classes from './Denied.module.css'

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