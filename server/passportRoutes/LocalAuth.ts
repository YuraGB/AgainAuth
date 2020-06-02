/**
 * The passport Local strategy
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import * as LocalStrategy from 'passport-local';
import passport from 'passport';

import User from '../mongoose/AuthModel/User';

passport.use(new LocalStrategy.Strategy({usernameField: 'name'},
    function(username, _, done) {
        User.findOne({ name: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user);
        });
    }
));