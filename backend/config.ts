import { env } from "process";

export const DIALECT = "sqlite";

const LOCAL_CONFIGURATION = {
    DB: `app.sqlite`
};

const PRODUCTION_CONFIGURATION = {
    DB: env.DB,
    PASSWORD: env.PASSWORD,
    PORT_DB: Number(env.PORT_DB),
    SERVER: env.SERVER,
    USER_DB: env.USER_DB,
};

export function isProduction(): boolean {
    return env.NODE_ENV === "PRODUCTION";
}

export const config = {
    DATABASE: isProduction() ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION,
    PORT_APP: 8080,
    SECRET: env.SECRET,
};
