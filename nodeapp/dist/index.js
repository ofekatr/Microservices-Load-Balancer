"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { PORT, name } = process.env;
const port = PORT || 8080;
const app = express_1.default();
app.get("/", (_, res) => res.send(`The server you've reached is ${name}`));
app.use((_, res) => res.status(404).send("Not found."));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map