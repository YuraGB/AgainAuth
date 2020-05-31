/**
 * The Server
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import express, { Request, Response } from "express";
import next from "next";

import connectDb from "./mongoose/mongoose";
import defaults from './sereverDefaults';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();

        //default server configs
        defaults(server);

        server.get("*", (req: Request, res: Response) => {
            return handle(req, res);
        });

        const startServer: () => void= () => {
            server.listen(port);
            console.log(`App started on port ${port}`)
        };

        // connect to DB
        // re-connect if there was disconnect
        // start the server
        connectDb()
            .on('error', console.log)
            .on('disconnected', connectDb)
            .once('open', startServer);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();