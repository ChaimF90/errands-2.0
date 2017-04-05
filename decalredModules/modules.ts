declare namespace Express {
    export interface Request {
        userId?: number
    }
}

declare module 'express-promise-router';