require('dotenv').config();
const express = require('express');
const cosr = require('cors');
const morgan = require('morgan');
const app = express();

const db = require('./config/db');
app.use(cosr());
app.use(express.json());
// app.use(express.static("storage"))
app.use(morgan(`dev`));

const port = process.env.PORT || 3001

app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`server on port,${port}`);
});