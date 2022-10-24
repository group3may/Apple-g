import db from "../server.js";

let showProduct = (req,res)=>{
  db.query("SELECT * FROM Products JOIN ProductDesc JOIN ProductPrice ON Products.product_id=ProductDesc.product_id AND products.product_id=ProductPrice.product_id",(err,rows,fields)=>{
  //   building Json
  let iphones={Products:[]};
  iphones.Products=rows;
  let stringIphones=JSON.stringify(iphones);
  if(!err)res.end(stringIphones);
  else console.log(err);
  })
  }

export default showProduct;
