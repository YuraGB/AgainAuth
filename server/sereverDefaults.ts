/**
 * The Server default configuration
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import setRoutes from './routes';
import express from 'express';
import bodyParser from "body-parser";
import passport from "passport";
import startSessions from './sessions';

const router = express.Router();

export default function (app: express.Application) {
    //sessions
    startSessions(app);

    //parsers
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    //passport
    app.use(passport.initialize());
    app.use(passport.session());

    //routers
    setRoutes(router);
    app.use(router);
};