import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import post from './post';

router.use('./post', post);

router.get('/', (req: Request, res: Response) => {
    res.send('blog');
});

export default router;
