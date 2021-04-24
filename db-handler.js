"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// database name
const DB_NAME = "mydb";
// users collection name
const COLLECTION_NAME = "users";
// connection string
//todo: Add your Mongo DB connection string here
const CONNECTION_STRING = "";
/**
 * Handle Mongo DB through this class
 */
class DBHandler {
}
exports.default = DBHandler;
/**
 * Insert a user into database
 * @param user User to be inserted
 */
DBHandler.InsertUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // connect to mongo db server
    const connection = yield mongodb_1.MongoClient.connect(CONNECTION_STRING);
    // insert data
    yield connection
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .insertOne(user);
    console.log("Data were inserted");
    // close connection
    connection.close();
});
/**
 * Get all users
 */
DBHandler.GetUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let users = [];
    // connect to mongo db server
    const connection = yield mongodb_1.MongoClient.connect(CONNECTION_STRING);
    // get all users
    users = yield connection
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .find({})
        .toArray();
    console.log("Data were abstracted");
    // close db
    yield connection.close();
    // return users
    return users;
});
