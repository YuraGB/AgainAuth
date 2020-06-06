/**
 * The passport Github strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as GitHubStrategy from 'passport-github';
import passport from 'passport';

import config from '../config.json';
import User from "../mongoose/AuthModel/SocialUser";
import {IprofileFields} from "./system";


passport.use(new GitHubStrategy.Strategy({
        clientID: config.env.GITHUB_CLIENT_ID,
        clientSecret: config.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    async (
        _,
        __,
        profile,
        cb: (err?: Error | any, user?: string | any) => void
    ) => {
        const {login = '', email = 'without email', avatar_url = ''} = <IprofileFields>profile._json;

        try {
            const savedUser = await User.findOne({id: profile.id});

            if (!savedUser) {
                const user = new User(
                    {
                        id: profile.id,
                        name: login,
                        email: email,
                        picture: avatar_url,
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
