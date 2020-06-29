let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let db = require("./db");
let router = require("./router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
