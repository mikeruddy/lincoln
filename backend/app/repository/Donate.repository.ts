import { EntityRepository, Repository } from "typeorm";
import { Donate } from "../models";

@EntityRepository(Donate)
export class DonateRepository extends Repository<Donate> {

    public bulkCreate(Samples: Donate[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(Donate).values(Samples).execute();
    }

    public async removeById(id: number): Promise<Donate> {
        const itemToRemove: Donate = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByText(text: string): Promise<Donate[]> {
        return this.manager.find(Donate, {where: {text}});
    }

    public findOneById(id: number): Promise<Donate> {
        return this.manager.findOne(Donate, {where: {id}});
    }

}
