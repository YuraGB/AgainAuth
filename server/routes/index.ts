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
import User from "../mongoose/AuthModel/User";

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

    router.get('/auth/google/callback',
        passport.authenticate(
            'google',
            {failureRedirect: '/', session: true}
        ),
         (req, res) => {
            console.log('google', req.session, req.cookies, req.isAuthenticated());
            // Successful authentication, redirect home.
            res.send(req.user);
        });

    router.get('/auth/facebook/callback',
        passport.authenticate(
            'facebook',
            {failureRedirect: '/', session: true}
        ),
         (req, res) => {
            console.log('facebook', req.session, req.cookies, req.isAuthenticated());
            // Successful authentication, redirect home.
            res.send('ok');
        });

    router.post('/register', passport.authenticate('local',
        { failureRedirect: '/404' }),
        (req: express.Request, res: express.Response) => {
            console.log(req);
            res.redirect('/403');
        }
    );

    router.post('/register2', (req: express.Request, res: express.Response) => {
        console.log(req.body.name);
        User.findOne({ name: req.body.name }, function (err, user) {
            if (err) {
                console.log(err);
                res.send(err)
            }
            if (!user) {
                console.log("No User");
                res.send('Not found')
            }
            res.send('Fuck')
        });

    });

    return router;
}
