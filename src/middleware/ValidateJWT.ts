import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
require('dotenv').config()

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token)
    if (!token) {
      const err = { statusCode: 401, message: 'Token not found' };
      return res.status(err.statusCode).json({ message: err.message })
    }
    
    /* const tokenSlice = token.slice(7); */
  
    try {
      const result = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (e) {
      const err = { statusCode: 401, message: 'Expired or invalid token' };
      return res.status(err.statusCode).json({ message: err.message })
    }
  };
  