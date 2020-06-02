/**
 * The passport Google strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import passport from 'passport';
import * as GoogleStrategy from 'passport-google-oauth20';

import User from '../mongoose/AuthModel/User';
import config from '../config.json';

passport.use(
    new GoogleStrategy.Strategy({
        clientID: config.env.GOOGLE_CLIENT_ID,
        clientSecret: config.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
        },
        async (
            accessToken,
            refreshToken,
            profile,
            cb: (err?: Error | string | any, user?: string | any) => void
        ) => {
            console.log(accessToken, refreshToken);
            try {
                if((profile.name as any).givenName) {
                    const user = JSON.stringify({name: (profile.name as any).givenName});
                    const searchResult = await User.find({name: (profile.name as any).givenName});

                    if (!searchResult.length) {
                        const user = new User({name: (profile.name as any).givenName});

                        await user.save((err, user) => {
                            return cb(err, user);
                        })
                    } else {
                        return cb(null, user)
                    }
                }
            } catch (e) {
               return cb(e, null);
            }
    }));
