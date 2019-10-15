import { getCustomRepository } from "typeorm";
import { Donate } from "../models";
import { DonateRepository } from "../repository";

export class DonateService {
    public bulkCreate(Donations: Donate[]): Promise<Donate[]> {
        return getCustomRepository(DonateRepository).bulkCreate(Donations);
    }

    public findOneById(id: number): Promise<Donate> {
        return getCustomRepository(DonateRepository).findOneById(id);
    }

    public find(date: string): Promise<Donate[]> {
        return getCustomRepository(DonateRepository).findByDate(date);
    }

    public stats(dateParam: string): Promise<Donate[]> {
        return new Promise(function(resolve, reject) {
            let statsPromise = getCustomRepository(DonateRepository).getStats(dateParam);
            statsPromise.then(records => {
                let results: any[] = new Array();

                for(let i = 0; i < 12; i++) {
                    results[i] = {
                        "Anon": 0,
                        "Female": 0,
                        "Male": 0
                    }
                }

                records.forEach((result, i) => {
                    let month = result.date as string;
                    let mo = Number(month.split('-')[1]) - 1;
                    if(!results[mo]) {
                        results[mo] = {};
                    }

                    results[mo][result.gender] = result.amount;
                });

                resolve(results);
            });
            
        });
        
    }

    public remove(Donation: Donate): Promise<Donate> {
        return getCustomRepository(DonateRepository).remove(Donation);
    }

    public removeById(id: number): Promise<Donate> {
        return getCustomRepository(DonateRepository).removeById(id);
    }

    public save(donation: Donate): Promise<Donate> {
        return getCustomRepository(DonateRepository).save(donation);
    }

}
