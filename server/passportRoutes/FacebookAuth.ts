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
import {IprofileFields} from "./system";

passport.use(new FacebookStrategy.Strategy({
        clientID: config.env.FACEBOOK_APP_ID,
        clientSecret: config.env.FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'emails', 'name']
    },
    async (
        _,
        __,
        profile,
        cb) => {
        const {last_name = '', first_name = '', email = 'without email', id} = <IprofileFields>profile._json;

        try {
            const savedUser = await User.findOne({id: id});

            if (!savedUser) {
                const user = new User(
                    {
                        id: id,
                        name: `${first_name} ${last_name}`,
                        email: email,
                        social: profile.provider,
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
));
