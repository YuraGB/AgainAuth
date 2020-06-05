/**
 * The Server routes
 * passport routes
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import express from 'express';
import passport from 'passport';
import '../passportRoutes/GoogleAuth';
import '../passportRoutes/FacebookAuth'
import '../passportRoutes/LocalAuth';
import successfulLogin from './utils/successfulLogin';

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

export default function (router: express.IRouter) {
    router.get('/google',
        passport.authenticate(
            'google',
            {
                scope: ['profile', 'email']
            })
    );

    router.get('/facebook',
        passport.authenticate('facebook', {
            scope: ['emails']
        })
    );

    router.get('/auth/facebook/callback',
        passport.authenticate(
            'facebook',
            {failureRedirect: '/denied', session: true}
        ),
        successfulLogin
    );

    router.get('/auth/google/callback',
        passport.authenticate(
            'google',
            {failureRedirect: '/denied', session: true}
        ),
        successfulLogin
    );

    router.post('/register',
        passport.authenticate('local',
        { failureRedirect: '/denied', session: true}
        ),
        successfulLogin
    );

    return router;
};
