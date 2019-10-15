import { Request, Response } from "express";
import { Donate } from "../models";
import { DonateService } from "../services";
import { Controller } from "./Controller";

import parse = require('csv-parse/lib/sync');

export class DonateController extends Controller {

    private sampleService: DonateService;
    private sample: Donate;

    constructor(req: any, res: Response) {
        super(req, res);
        this.sample = new Donate();
        this.sampleService = new DonateService();
    }

    public async all(): Promise<Response> {
        const sampleList = await this.sampleService.find(this.req.params.month);
        return this.res.send(sampleList);
    }

    public async stats(): Promise<Response> {
        const { year } = this.req.params as unknown as { year: string };
        
        const sampleList = await this.sampleService.stats(year);
        return this.res.send(sampleList);

        if (sampleList) {
            return this.res.status(200).send(sampleList);
        } else {
            return this.res.status(404).send({ text: "not found" });
        }
    }

    public async create(): Promise<Response> {
        try {
            let csvData = parse(this.req.body, {columns: true});
            let timestamp = new Date(Number(this.req.params.date));

            csvData = csvData.map((item: any) => {
                return {
                    donor_id: item.donor_id,
                    name: item.donor_name,
                    email: item.donor_email,
                    gender: item.donor_gender,
                    address: item.donor_address,
                    amount: item.donation_amount,
                    date: `${timestamp.getUTCFullYear()}-${timestamp.getUTCMonth() + 1}-0`
                };
            });
            
            await this.sampleService.bulkCreate(csvData);
            return this.res.status(200).send({"status": "success"});
        } catch (ex) {
            return this.res.status(404).send({ text: "ERROR", code: ex});
        }
    }
}
