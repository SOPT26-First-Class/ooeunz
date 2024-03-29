import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import api from './api';

router.use('/api', api);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('index');
});

export default router;
