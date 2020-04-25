import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import login from './login';
import signUp from './signUp';

router.use('./login', login);
router.use('./signUp', signUp);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/user');
});

export default router;
