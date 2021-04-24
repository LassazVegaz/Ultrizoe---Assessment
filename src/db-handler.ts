import { MongoClient } from "mongodb";
import User from "./user";

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
export default class DBHandler {
	/**
	 * Insert a user into database
	 * @param user User to be inserted
	 */
	static InsertUser = async (user: User) => {
		// connect to mongo db server
		const connection = await MongoClient.connect(CONNECTION_STRING);

		// insert data
		await connection
			.db(DB_NAME)
			.collection<User>(COLLECTION_NAME)
			.insertOne(user);
		console.log("Data were inserted");

		// close connection
		connection.close();
	};

	/**
	 * Get all users
	 */
	static GetUsers = async () => {
		let users: User[] = [];

		// connect to mongo db server
		const connection = await MongoClient.connect(CONNECTION_STRING);

		// get all users
		users = await connection
			.db(DB_NAME)
			.collection<User>(COLLECTION_NAME)
			.find({})
			.toArray();
		console.log("Data were abstracted");

		// close db
		await connection.close();

		// return users
		return users;
	};
}
