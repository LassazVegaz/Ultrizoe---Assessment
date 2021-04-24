import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/list", (req, res) => {
	res.render("list");
});

app.listen(port, () => {
	console.log(`Server is listening to ${port}`);
});
