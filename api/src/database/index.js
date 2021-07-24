const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/keeperDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;