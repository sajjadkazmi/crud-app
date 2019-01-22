// const sql=require('mssql');
// const express=require('express');

// module.exports=sql.connect({
// user: 'SYBRID\sdg.internee9',
// // password: 'Sybr1d123',
// // server: '192.168.61.33',
// server: '(LocalDB)\LocalDBDemo', 
// database: 'Learning_DB',
// // database: 'MERNStock'
// },function (err) {
//     if (err) console.log(err);
//     else console.log("connection success")
//   })



// const mysql=require('mysql');
const express = require('express');

// var sql = require("mssql");
// module.exports = {
//   user: 'SYBRID\sdg.internee9',
//   password: '',
//   server: '(LocalDB)\LocalDBDemo',
//   database: 'Learning_DB',
//   port: 3001
// }
var sql = require("mssql");
module.exports = {
  user: 'sa1',
  password: 'Sybr1d123',
  server: 'localhost',
  database: 'test',
}