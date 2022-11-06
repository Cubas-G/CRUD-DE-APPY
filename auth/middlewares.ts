import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { AuthException } from './exceptions';
import repository from './repository';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        validateHeader(req);
        validateToken(req);


    } catch (error: any) {
        res.status(401).json({
            message: error.message
        })
        return;
    }
    next();
};

const validateHeader = (req: Request) => {
    if (!req.headers.authorization) {
        throw new AuthException('Missing authorization header');
    }
};

const validateToken = (req: Request) => {
    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) throw new AuthException('Missing token');

    const decodedToken = jwt.verify(token, config.secret);

    if (typeof decodedToken == 'object') {
        const user = repository.findUserById(decodedToken.id);
    }
};

export { requireAuth };