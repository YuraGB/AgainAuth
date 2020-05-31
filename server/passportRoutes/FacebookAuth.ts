/**
 * The passport Facebook strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as FacebookStrategy from 'passport-facebook';
import passport from 'passport';

import User from '../mongoose/AuthModel/User';
import config from '../config.json';

passport.use(new FacebookStrategy.Strategy({
        clientID: config.env.FACEBOOK_APP_ID,
        clientSecret: config.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/callback"
    },
    async (
        accessToken, refreshToken, profile, cb) => {
        console.log(accessToken, refreshToken);
        try {
            const user = JSON.stringify({name: profile.displayName});
            const searchResult = await User.find({name : profile.displayName});

            if (!searchResult.length) {
                const user = new User({name: profile.displayName});

               await user.save((err, user) => {
                    return cb(err, user);
                })
            } else {
                return cb(null, user)
            }
        } catch (e) {
            return cb(e, null);
        }
    }
));
