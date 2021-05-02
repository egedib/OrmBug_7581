import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {VendorEntity} from "./entity/Vendor";

createConnection().then(async connection => {
    console.log("Updating the vendor with the problematic value....");

    const now = new Date();
    const cslbUpdater: Partial<VendorEntity> = {
        licNoVerified: false,
        licActive: false,
        licFrom: null,
        licTo: null,
        licLastRefresh: now
    };

    const id = 1;

    await getRepository(VendorEntity)
        .createQueryBuilder()
        .update()
        .set(cslbUpdater)
        .where('id = :id', {id})
        .execute();

    console.log("done!");
}).catch(error => console.log(error));
