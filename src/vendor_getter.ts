import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {VendorEntity} from "./entity/Vendor";

console.log("Here it comes..");

createConnection().then(async connection => {
    console.log("Loading vendors from the database...");
    const vendors = await connection.manager.find(VendorEntity);
    console.log("Loaded vendors: ", vendors);
}).catch(error => console.log(error));
