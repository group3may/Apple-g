import db from "../server.js"
import pTable from "../Schema/schema.js"

let createTable = (req,res)=>{
  db.query(pTable,(err,result,fields)=>{
    if (err){
      console.log(err)
    }
    res.end("Tables created")
  })
}
export default createTable