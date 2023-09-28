const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "Shree@28",
  host: "localhost",
  port: 5432,
  database: "form",
});

/*const TableQry = `Create table form_table (
    mailId varchar(255) PRIMARY KEY,
    fname varchar(200) not null,
    lname varchar(200) not null,
    mobile bigint not null,
    dob date not null,
    address varchar(255)
);`;
const alterTbl = `Alter table form_table drop constraint primary key;`;
pool
  .query(alterTbl)
  .then((Response) => {
    console.log("Database Created");
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  });*/

  
module.exports = pool;
