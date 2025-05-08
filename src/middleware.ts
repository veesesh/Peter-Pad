//auth middleware

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "../config.json"
// const JWT_PASSWORD = "123121212"


export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD) // make ts happy for now (header)
    if(decoded) {
        // override the types of express request object
        //@ts-ignore
        req.userId  = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "You're not logged in"
        })
    }

} 