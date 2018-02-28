const express = require('express');
const app = express();
const fs = ('require');
const db = require('./ModelSQL.js');


app.get('/api/category', getAll);
app.get('/api/establishment', getEstab);
db.init();

async function getAll(req, res) {
  res.json(await db.showAll(req.query.cat));
}

app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));
