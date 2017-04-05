require('dotenv').config();
import  * as express from 'express';
import * as bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import { authRouter } from './authRoutes';
import { router } from './routes';
app.use('/auth', authRouter);
app.use('/api', router);

const port  = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))