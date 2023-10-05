import express, { Application } from "express";
import "./config/mongodbConnection";
import user from "./routes/user.router";

const port: number = 6047;

const app: Application = express();

app.use(express.json());
app.use(user);

app.listen(port, () => {
	console.log("listening on port :", port);
});
