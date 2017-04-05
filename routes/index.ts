import '../decalredModules/modules';
import * as express from 'express-promise-router';
const router = express();
import categories from './categories';
import errands from './errands';

router.use('/categories', categories);
router.use('/errands', errands);
export { router };