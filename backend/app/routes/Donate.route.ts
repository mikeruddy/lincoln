import { DonateController } from "../controllers";
import { Validator } from "../middlewares";
import { createSample, deleteSample, updateSample } from "../schemas";
import { Router } from "./Router";

export class DonateRouter extends Router {
    constructor() {
        super(DonateController);
        this.router
            .get("/:month", this.handler(DonateController.prototype.all))
            .get("/stats/:year", this.handler(DonateController.prototype.stats))
            .post("/:date", [], this.handler(DonateController.prototype.create));
    }
}
