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
                console.log('SKRR', records);
                let results = [];

                records.forEach(result => {
                    // let month = records[0]['date'].split('-')[1];
                    console.log('result')
                });




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
