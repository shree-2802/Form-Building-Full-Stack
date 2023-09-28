const express = require("express");
const cors = require("cors");
const pool = require("./database.js");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sample", async (req, res) => {
  try {
    const {
      emailInput,
      fnameInput,
      lnameInput,
      mobileInput,
      dobInput,
      addInput,
    } = req.body;

    const newArray = await pool.query(
      `INSERT INTO form_table(mailid,fname,lname,mobile,dob,address) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
      [emailInput, fnameInput, lnameInput, mobileInput, dobInput, addInput]
    );
    res.json(newArray);
  } catch (error) {
   console.log('key constraints mismatched ');
  }
});

app.get("/sample", async (req, res) => {
  const newArray = await pool.query("select * from form_table");
  res.json(newArray.rows);
});
app.get("/sample/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const arr = await pool.query(`select * from form_table where id=$1`, [id]);
    res.json(arr.rows);
    console.log("get!");
  } catch (err) {
    console.log(err.message);
  }
});
app.put("/sample/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      emailInput,
      fnameInput,
      lnameInput,
      mobileInput,
      dobInput,
      addInput,
    } = req.body;
    const arr = await pool.query(
      `Update form_table set mailid=$1,
  fname=$2,
  lname=$3,
  mobile=$4,
  dob=$5,
  address=$6 where id = $7`,
      [emailInput, fnameInput, lnameInput, mobileInput, dobInput, addInput, id]
    );
  } catch (err) {
    console.log(err.message);
  }
});
app.delete("/sample/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newArray = await pool.query("DELETE FROM form_table where id = $1", [
      id,
    ]);
    res.json(newArray);
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(4000, () => console.log("hello it is working"));
