import express from "express";
import DBHandler from "./db-handler";
import User from "./user";

// create express app
const app = express();

// port number
const PORT = 3000;

// set view engine to EJS
app.set("view engine", "ejs");

// set middlewares
app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded());

// ---- ROUTES START ----
app.get("/", (_req, res) => {
	res.render("home");
});

app.post<any, any, User>("/add", async (req, res) => {
	try {
		// add User to DB
		await DBHandler.InsertUser(req.body);

		// redirect to list
		res.redirect("/list");
	} catch (error) {
		console.error(error);
		res.send(error.message);
	}
});

app.get("/list", async (_req, res) => {
	try {
		// get all users
		const users = await DBHandler.GetUsers();

		// render list
		res.render("list", { users });
	} catch (error) {
		console.error(error);
		res.send(error.message);
	}
});
// ---- ROUTES END ----

// start server
app.listen(PORT, () => {
	console.log(`Server is listening to ${PORT}`);
});
