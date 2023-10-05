import { ObjectId } from "mongodb";

export class User {
	_id: ObjectId;
	name: string;
	email: string;
	password: string;
	constructor(name: string, email: string, password: string) {
		this._id = new ObjectId();
		this.name = name;
		this.email = email;
		this.password = password;
	}
}
