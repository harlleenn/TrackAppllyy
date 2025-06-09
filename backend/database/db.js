const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    database:'TrackApply',
    user:'root',
    password:'harleenkaurkukreja@1201',
})
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log(" Database connected successfully!");
    connection.release(); // Release after test
  }
});
module.exports = pool.promise();
