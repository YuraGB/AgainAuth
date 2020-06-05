/**
 * The passport Facebook strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as FacebookStrategy from 'passport-facebook';
import passport from 'passport';

import User from '../mongoose/AuthModel/SocialUser';
import config from '../config.json';

passport.use(new FacebookStrategy.Strategy({
        clientID: config.env.FACEBOOK_APP_ID,
        clientSecret: config.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback"
    },
    async (
        _, __, profile, cb) => {
        try {
            const user = JSON.stringify({name: profile.displayName});
            const savedUser = await User.findOne({name : profile.displayName});
            console.log("savedUser" , savedUser);
            console.log("profile" , profile);

            if (!savedUser) {
                const user = new User(
                    {
                        name: profile.displayName,
                        email: (profile.emails as any)[0].value,
                        social: 'Facebook',
                        _createdAt: new Date(),
                        _updatedAt: new Date()
                    });

               await user.save((err, user) => {
                    return cb(err, user);
                })
            } else {
                savedUser._updatedAt = new Date();
                return cb(null, user);
            }
        } catch (e) {
            return cb(e, null);
        }
    }
));
