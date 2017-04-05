import '../decalredModules/modules';
import * as express from 'express-promise-router';
const router = express();
import db from '../repo';
import { Request, Response } from 'express';

router.post('/newErrand', async (req: Request, res: Response) => {
    let errand = await db.errands.addErrand(req.body);
    res.json(errand);
})

router.post('/updateErrand', async (req: Request, res: Response) => {
    let updated = await db.errands.updateErrand(req.body);
    res.json(updated);
})

router.get('/getAllErrands', async (req: Request, res: Response) => {
    let allErrands = await db.errands.getAllErrands(req.query.id);
    res.json(allErrands);
})

router.post('/deleteErrand', async (req: Request, res: Response) => {
    let deleted = await db.errands.deleteErrand(req.body.id);
    res.json(deleted);
})

export default router;