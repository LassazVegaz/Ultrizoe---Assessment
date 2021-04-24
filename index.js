"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.set("view engine", "ejs");
app.use(express_1.default.static(__dirname + "/views"));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/list", (req, res) => {
    res.render("list");
});
app.listen(port, () => {
    console.log(`Server is listening to ${port}`);
});
