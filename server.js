import express from "express";
import mysql from "mysql";
import cors from "cors";
import insertRoute from "./Routes/insertRoute.js";
import displayRoute from "./Routes/displayRoute.js";
import createRoute from "./Routes/createRoute.js";

const server = express();
// // to extract information from front end (html) and use it as an object form.
server.use(express.urlencoded({ extended: true }));
// // to give access to the front end
const corsOption = {
  origin: ["http://localhost:3000"],
};
server.use(cors());
server.use(express.json());
// // middleware
server.use('/user', createRoute);
server.use("/user", insertRoute);
server.use("/user", displayRoute);

const db = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "productadder",
  password: "productadder1",
  database: "appleAdd",
});
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("on the run!");
  }
});

server.listen(3009, () => {
  console.log("listening");
});

export default db;
