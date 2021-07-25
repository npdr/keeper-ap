const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

require('./controllers/authController')(app);
require('./controllers/noteController')(app);

app.listen(3003);