import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {VendorEntity} from "./entity/Vendor";

console.log("Here it comes..");

createConnection().then(async connection => {

    console.log("Inserting a new vendor into the database...");
    const vendor = new VendorEntity();
    vendor.licNoVerified = false;
    //vendor.licActive = true;
    vendor.name = "Test";
    await connection.manager.save(vendor);
    console.log("Saved a new vendor with id: " + vendor.id);

    console.log("Loading vendors from the database...");
    const vendors = await connection.manager.find(VendorEntity);
    console.log("Loaded vendors: ", vendors);

}).catch(error => console.log(error));


