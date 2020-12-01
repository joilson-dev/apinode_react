const express = require('express');
const path = require('path');
// const allowCors = require('./config/cors')
const app = express();
// app.use(allowCors);
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3000);