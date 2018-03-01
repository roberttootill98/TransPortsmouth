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
  const query = 'SELECT * FROM ' + table;
  const formattedQuery = sql.format(query);
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

async function addReview() {
  console.log("hi");
}

module.exports = {
  init: init,
  showAll: showAll,
  whereAll: whereAll,
  addReview: addReview
}
