/**
 * The passport Local strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as localStrategy from 'passport-local';
import passport from 'passport';

import User from '../mongoose/AuthModel/User';

passport.use(new localStrategy.Strategy(
    async (username, password, done) => {
        console.log(username, password, done);
        await  User.findOne({ username: username },
            (err, user) => {
            console.log('fire');
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            console.log('dddddddddd');
            return done(null, user);
        });
    }
));
