import { getCustomRepository } from "typeorm";
import { Donate } from "../models";
import { DonateRepository } from "../repository";

export class DonateService {

    public findByText(text: string): Promise<Donate[]> {
        return getCustomRepository(DonateRepository).findByText(text);
    }

    public bulkCreate(Donations: Donate[]): Promise<Donate[]> {
        return getCustomRepository(DonateRepository).bulkCreate(Donations);
    }

    public findOneById(id: number): Promise<Donate> {
        return getCustomRepository(DonateRepository).findOneById(id);
    }

    public find(): Promise<Donate[]> {
        return getCustomRepository(DonateRepository).find();
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
