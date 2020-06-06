/**
 * The passport Linkedin strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as LinkedInStrategy from 'passport-linkedin-oauth2';
import passport from 'passport';

import config from '../config.json';
import User from "../mongoose/AuthModel/SocialUser";
import {IprofileFields} from "./system";
import {Profile} from "passport-linkedin-oauth2";


passport.use(new (LinkedInStrategy.Strategy as any)({
        clientID: config.env.LINKEDIN_CLIENT_ID,
        clientSecret: config.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/linkedin/callback",
        scope: ['r_emailaddress', 'r_basicprofile'],
    },
    async (
        _: string,
        __: string,
        profile: Profile | any,
        cb: (err?: Error | any, user?: string | any) => void
    ) => {

        const {displayName, id, email = 'without email', photos} = <IprofileFields>profile;

        try {
            const savedUser = await User.findOne({id: profile.id});

            if (!savedUser) {
                const user = new User(
                    {
                        id: id,
                        name: displayName,
                        email: email,
                        picture: photos ? photos[0].value: 'no foto',
                        social: 'Github',
                        _createdAt: new Date(),
                        _updatedAt: new Date()
                    }
                );

                await user.save();
                return cb(null, user);
            } else {
                savedUser._updatedAt = new Date();
                await savedUser.save();

                return cb(null, savedUser)
            }
        } catch (e) {
            return cb(e, null);
        }
    }
));
