import { EntityRepository, Repository, getConnection } from "typeorm";
import { Donate } from "../models";

@EntityRepository(Donate)
export class DonateRepository extends Repository<Donate> {

    public bulkCreate(Samples: Donate[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(Donate).values(Samples).execute();
    }

    public getStats(dateString: string): Promise<Donate[]> {
        return getConnection()
            .createQueryBuilder()
            .select("COALESCE(NULLIF(gender,''), 'Anon') as gender, round(sum(amount), 2) as amount, strftime('%m', date)")
            .from(Donate, "donate")
            .where("date >= :start and date < :end", { start: `${dateString}-0-0`, end: `${Number(dateString) + 1}-0-0` })
            .groupBy("gender, date")
            .orderBy("date")
            .getRawMany()
    }

    public async removeById(id: number): Promise<Donate> {
        const itemToRemove: Donate = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByDate(date: string): Promise<Donate[]> {
        return this.manager.find(Donate, {where: {date: date + "-0"}});
    }

    public findOneById(id: number): Promise<Donate> {
        return this.manager.findOne(Donate, {where: {id}});
    }

}
