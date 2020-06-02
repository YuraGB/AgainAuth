/**
 * The passport Local strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as LocalStrategy from 'passport-local';
import passport from 'passport';

import User from '../mongoose/AuthModel/User';

passport.use(new LocalStrategy.Strategy({usernameField: 'name', passwordField: 'password'},
    function(username, password, done) {
        User.findOne(
            { name: username },
            function (err, user: any) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (!user.validatePassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    }
));