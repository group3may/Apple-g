import express from "express"
import showProduct from "../Controller/displayProduct.js"

let displayRoute=express.Router();

displayRoute.get("/iphones",showProduct)

export default displayRoute

