import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secretKey = 'sjfslakdlhfdsjahflsaflsajfdslgs';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
 }
 
 export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
 
    if (!token) {
      throw new Error();
    }
 
    const decoded = jwt.verify(token, secretKey);
    (req as CustomRequest).token = decoded;
 
    next();
  } catch (err) {
    res.status(401).send('Please authenticate');
  }
 };