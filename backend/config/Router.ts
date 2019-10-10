import * as express from "express";
import * as jwt from "express-jwt";
import { JwtRouter, DonateRouter } from "../app/routes";
import { config } from "../config";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const Sample = new DonateRouter();
const JWT = new JwtRouter();

export const ROUTER: IROUTER[] = [{
    handler: JWT.router,
    middleware: [],
    path: "/JWT",
}, {
    handler: Sample.router,
    middleware: [],
    path: "/donate",
}, {
    handler: Sample.router,
    middleware: [],
    path: "/",
}];
