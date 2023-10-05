import { Request, Response } from "express";
import { client } from "../config/mongodbConnection";
import { User } from "../schema/user.schema";

const col = client.db("StoreZee").collection("users");

export const createUser = async (req: Request, res: Response) => {
	try {
		await client.connect();

		const { name, email, password } = req.body;

		const newUser = new User(name, email, password);

		const result = await col.insertOne(newUser);

		return res.json({
			message: "Successfully created a user",
			createdUser: result,
		});
	} catch (err) {
		return res.status(500).json({
			message: "An error occurred",
			error: err,
		});
	}
};

export const viewUsers = async (req: Request, res: Response) => {
	try {
		await client.connect();

		const result = await col.find().toArray();

		return res.json({
			message: "Successfully created a user",
			createdUser: result,
		});
	} catch (err) {
		return res.status(500).json({
			message: "An error occurred",
			error: err,
		});
	}
};
