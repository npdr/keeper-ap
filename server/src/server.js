const express = require("express");
const cors = require("cors");
const db = require("../database/models/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("../database/routes/routes")(app);

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});