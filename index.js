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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_handler_1 = __importDefault(require("./db-handler"));
// create express app
const app = express_1.default();
// port number
const PORT = 3000;
// set view engine to EJS
app.set("view engine", "ejs");
// set middlewares
app.use(express_1.default.static(__dirname + "/views"));
app.use(express_1.default.urlencoded());
// ---- ROUTES START ----
app.get("/", (_req, res) => {
    res.render("home");
});
app.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // add User to DB
        yield db_handler_1.default.InsertUser(req.body);
        // redirect to list
        res.redirect("/list");
    }
    catch (error) {
        console.error(error);
        res.send(error.message);
    }
}));
app.get("/list", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get all users
        const users = yield db_handler_1.default.GetUsers();
        // render list
        res.render("list", { users });
    }
    catch (error) {
        console.error(error);
        res.send(error.message);
    }
}));
// ---- ROUTES END ----
// start server
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});
