const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;