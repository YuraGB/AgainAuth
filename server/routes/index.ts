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
        passport.authenticate('facebook')
    );

    router.get('/auth/facebook/callback',
        passport.authenticate(
            'facebook',
            {failureRedirect: '/', session: true}
        ),
        (req, res) => {
            console.log('facebook', req.session, req.cookies, req.isAuthenticated());
            // Successful authentication, redirect home.
            res.send('ok');
        }
        );

    router.get('/auth/google/callback',
        passport.authenticate(
            'google',
            {failureRedirect: '/', session: true}
        ),
         (req, res) => {
            res.send(req.user);
        }
    );


    router.post('/register', passport.authenticate('local',
        { failureRedirect: '/404' }),
        (_: express.Request, res: express.Response) => {
            res.redirect('https://auth-4e13a.web.app/');
        }
    );
    return router;
}
