import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Handler from "./handler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/", function (req, res) {
    const request_object = req.body;

    Handler[request_object.type](request_object).then(function (
        response_object
    ) {
        res.json(response_object);
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

export default app;
