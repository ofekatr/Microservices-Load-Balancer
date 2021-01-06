import express from "express";

const { PORT, name: NAME } = process.env;

const port = PORT || 8080;
const app = express();

app.get("/", (_, res) => res.send(`The server you've reached is ${NAME}`));

app.use((_, res) => res.status(404).send("Not found."));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})