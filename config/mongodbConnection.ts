import { MongoClient } from "mongodb";

const url = "mongodb://localhost";
export const client = new MongoClient(url);

const mainConnection = async () => {
	await client.connect();
	console.log("connection successfull");

	return "done.";
};

mainConnection()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
