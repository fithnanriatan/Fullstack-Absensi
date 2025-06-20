const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = 3200;

const sequelize = require("./db.config");
sequelize.sync().then( () => console.log("database ready!") );

const userEndpoint = require("./routes/users");
const absenEndpoint = require('./routes/absensi')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userEndpoint);
app.use("/absensi", absenEndpoint)

app.listen(port, () =>
  console.log(`running server on http://localhost:${port}`)
);
