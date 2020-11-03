const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');

app.use(morgan('dev'));
app.use(express.json());

app.use('/sendtome', require('./routes/sendToMe'));

// console.log that your server is up and running
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));