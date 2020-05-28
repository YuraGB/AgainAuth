const express = require('express');
const next = require('next');

const port = parseInt((process as any).env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/a', (req: any, res: Response) => {
        return app.render(req, res, '/a', req.query);
    });

    server.get('/b', (req: any, res: Response) => {
        return app.render(req, res, '/b', req.query);
    });

    server.all('*', (req: any, res: any) => {
        return handle(req, res)
    });

    server.listen(port, (err: Error) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
