"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogRouter_1 = __importDefault(require("./routers/blogRouter"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('The backend for blogspot!');
});
app.use("/blog", blogRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
