import { DonateController } from "../controllers";
import { Validator } from "../middlewares";
import { createSample, deleteSample, updateSample } from "../schemas";
import { Router } from "./Router";

export class DonateRouter extends Router {
    constructor() {
        super(DonateController);
        this.router
            .get("/", this.handler(DonateController.prototype.all))
            .get("/:id", this.handler(DonateController.prototype.find))
            .post("/", [ Validator(createSample) ], this.handler(DonateController.prototype.create))
            .put("/", [ Validator(updateSample) ],  this.handler(DonateController.prototype.update))
            .delete("/", [ Validator(deleteSample) ], this.handler(DonateController.prototype.delete));
    }
}
