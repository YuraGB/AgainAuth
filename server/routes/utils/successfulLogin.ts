import {Request, Response} from 'express';

export default (req:Request, res:Response) => {
    if (req.isAuthenticated()) {
        res.redirect('https://auth-4e13a.web.app/');
        return;
    }
};