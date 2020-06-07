import React from "react";
import {SocialMediaIconsReact} from "social-media-icons-react";

import classes from "./Social.module.css";

const SocialsComponent = () => {
    return (
        <section>
            <span className={classes.separator}>
                or
            </span>
            <p className={classes.socialInventation}>
                You can log in using socials and let me know who you are
            </p>
            <div className={classes.socials}>
                <SocialMediaIconsReact icon="facebook" iconSize={32} url="/facebook"/>
                <SocialMediaIconsReact icon="linkedin" iconSize={32} url="/linkedin"/>
                <SocialMediaIconsReact icon="github" iconSize={32} url="/github"/>
                <SocialMediaIconsReact icon="googleplus" iconSize={32} url="/google"/>
            </div>
        </section>
    )
};

export default SocialsComponent;