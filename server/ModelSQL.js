'use strict';

const fs = require('fs');
const util = require('util');
const config = require('./config');
const mysql = require('mysql2/promise');
let sql;

// promisify some filesystem functions
//fs.unlinkAsync = fs.unlinkAsync || util.promisify(fs.unlink);
//fs.renameAsync = fs.renameAsync || util.promisify(fs.rename);

async function init() {
  sql = await mysql.createConnection(config.mysql);
}

async function showAll(table) {
  const filter = '%' + table + '%'
  const query = sql.format('SELECT * FROM ?', [table]);
  //const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

async function whereAll(table, condition) {
  const checkfield = table + 'Id';
  const query = 'SELECT * FROM ' + table + ' WHERE ' + checkfield + ' = ' + condition;
  console.log(query);
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

async function addReview(est_id, title, content, score) {
  const query = 'INSERT INTO review (Est_Id, Title, Content, Score)';
  const values = ' VALUES (' + est_id + ', "' + title + '", "' + content + '", "' + score + '");';
  const insertQuery = query + values;

  const formattedQuery = sql.format(insertQuery);
  await sql.query(formattedQuery);
}

module.exports = {
  init: init,
  showAll: showAll,
  whereAll: whereAll,
  addReview: addReview
}
