const dbConfig = require("../config/config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    url: dbConfig.url,
    notes: require("./noteModel.js")(mongoose)
};

module.exports = db;