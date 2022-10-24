import express from "express"
import insertIphone from "../Controller/InsertController.js"

let insertRoute= express.Router();

insertRoute.post("/insert",insertIphone);

export default insertRoute