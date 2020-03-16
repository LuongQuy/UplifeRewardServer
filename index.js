const express = require('express');
const bodyParser = require('body-parser');
const ownerRouter = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', ownerRouter);

app.listen(3000, () => console.log('Uplife Reward Server start on port 3000!'))