import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import blog from './blog';
import user from './user';

router.use('/blog', blog);
router.use('/user', user);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api');
});

export default router;
