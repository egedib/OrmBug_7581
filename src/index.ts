import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {VendorEntity} from "./entity/Vendor";

/*createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));*/

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


