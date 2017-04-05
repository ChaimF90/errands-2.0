import '../decalredModules/modules';
import * as express from 'express-promise-router';
const router = express();
import db from '../repo';
import { Request, Response } from 'express';

router.post('/newUser', async (req: Request, res: Response) => {
    let user = await db.users.createUser(req.body);
    res.json(user);
})

export default router;