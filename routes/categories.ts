import '../decalredModules/modules';
import * as express from 'express-promise-router';
const router = express();
import db from '../repo';
import { Request, Response } from 'express';

router.post('/newCategory', async (req: Request, res: Response) => {
    let category = await db.categories.addCategory(req.body);
    res.json(category);
})

router.post('/updateCategory', async (req: Request, res: Response) => {
    let updated = await db.categories.updateCategory(req.body);
    res.json(updated);
})

router.get('/getAllCategories', async (req: Request, res: Response) => {
    let allCategories = await db.categories.getAllCategories(req.query.id);
    res.json(allCategories);
})

router.post('/deleteCategory', async (req: Request, res: Response) => {
    let deleted = await db.categories.deleteCategory(req.body.id);
    res.json(deleted);
})

export default router;