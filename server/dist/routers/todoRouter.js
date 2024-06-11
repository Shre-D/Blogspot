"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogRouter = express_1.default.Router();
blogRouter.get('/all', (req, res) => {
    res.json({
        "message": `all your blogs`
    });
});
blogRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        "message": `${id}`
    });
});
exports.default = blogRouter;
