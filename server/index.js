const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../react-client/dist')));

app.use('/api', router);

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});

