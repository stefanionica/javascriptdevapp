"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_session_1 = require("express-session");
const userRouter_1 = require("./routes/userRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.session)({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use("/users", userRouter_1.userRouter);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server!!!!');
    //res.sendFile(path.join(__dirname+'/acasa.html'));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
