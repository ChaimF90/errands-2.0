import '../decalredModules/modules';
import * as express from 'express-promise-router';
const authRouter = express();
import users from './users';

authRouter.use('/users', users);
export { authRouter };