'use strict';

const fs = require('fs');
const util = require('util');
const config = require('./config');
const mysql = require('mysql2/promise');
let sql;


/**
* initialises database connection
* only run once
*/
async function init() {
  sql = await mysql.createConnection(config.mysql);
}

/**
* gets records from given table
* @param {table} table to be queried
* @return {records} result of query
*/
async function showAll(table) {
  const query = `SELECT * FROM ${table}`;
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

/**
* gets all records where the condition is met
* @param {table} table to be queried
* @param {condition} data to be searched on
* @param {checkfield} field from table to checked
* @return {records} result of query
*/
async function whereAll(table, condition, checkfield) {
  const query = `SELECT * FROM ${table} WHERE ${checkfield} = "${condition}";`;
  const formattedQuery = sql.format(query);
  const rows = await sql.query(formattedQuery);
  return rows[0];
}

/**
* adds a new review to the database
* @param {est_id} id of the establishment
* @param {author} author of the review
* @param {content} content of the review
* @param {score} score of the review
*/
async function addReview(est_id, author, content, score) {
  const query = 'INSERT INTO Review SET ? ;';
  const formattedQuery = sql.format(query, {est_id, author, content, score});
  await sql.query(formattedQuery);
}

/**
* gets all of the data about the establishment and all opening times
* @param table to be queried from, must be category, eg. Restaurant
* @return {records} result of query
*/
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
