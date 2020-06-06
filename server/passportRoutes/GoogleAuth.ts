/**
 * The passport Google strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import passport from 'passport';
import * as GoogleStrategy from 'passport-google-oauth20';

import User from '../mongoose/AuthModel/SocialUser';
import config from '../config.json';
import {IprofileFields} from "./system";

passport.use(
    new GoogleStrategy.Strategy({
        clientID: config.env.GOOGLE_CLIENT_ID,
        clientSecret: config.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
        },
        async (
            _,
            __,
            profile,
            cb: (err?: Error | any, user?: string | any) => void
        ) => {
            const {name = '', email = 'without email', picture = ''} = <IprofileFields>profile._json;

            try {
                const savedUser = await User.findOne({id: profile.id});

                if (!savedUser) {
                    const user = new User(
                        {
                            id: profile.id,
                            name: name,
                            email: email,
                            picture: picture,
                            social: 'Google+',
                            _createdAt: new Date(),
                            _updatedAt: new Date()
                        }
                    );

                    await user.save();
                    return cb(null, user);
                } else {

                    savedUser._updatedAt = new Date();
                    await savedUser.save();

                    return cb(null, savedUser);
                }

            } catch (e) {
               return cb(e, null);
            }
        }
    )
);
