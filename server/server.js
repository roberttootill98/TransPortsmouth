const express = require('express');
const app = express();
const fs = ('require');
const db = require('./ModelSQL.js');

app.get('/api/planner', updateTitle);

async function updateTitle(req, res) {
  await db.newTitle(req.query.t)
}
app.listen(8080);

app.use('/', express.static('webpages', { extensions: ['html'] }));
