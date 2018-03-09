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
  const query = `SELECT * FROM ${table}`;
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

async function whereAll(table, condition, checkfield) {
  const query = `SELECT * FROM ${table} WHERE ${checkfield} = "${condition}";`;
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

async function addReview(est_id, title, content, score) {
  const query = 'INSERT INTO review (Est_Id, Title, Content, Score)';
  const values = ` VALUES (${est_id}, "${title}", "${content}", "${score}");`;
  const insertQuery = query + values;

  const formattedQuery = sql.format(insertQuery);
  await sql.query(formattedQuery);
}

async function showCategory(table) {
  const query = "SELECT Establishment.Est_Id, Establishment.Name, Establishment.Address, Establishment.Town," +
  " Work_Time.Mon_Open, Work_Time.Mon_Close, Work_Time.Tue_Open,Work_Time.Tue_Close, Work_Time.Wed_Open, Work_Time.Wed_Close, Work_Time.Thu_Open, Work_Time.Thu_Close, Work_Time.Fri_Open, Work_Time.Fri_Close,Work_Time.Sat_Open, Work_Time.Sat_Close, Work_Time.Sun_Open, Work_Time.Sun_Close" +
  " FROM Establishment" +
  ` INNER JOIN ${table} on Establishment.Est_Id = ${table}.Est_Id` +
  " INNER JOIN Work_Time on Establishment.Est_Id = Work_Time.Est_Id;"
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

module.exports = {
  init: init,
  showAll: showAll,
  whereAll: whereAll,
  addReview: addReview,
  showCategory: showCategory
}
