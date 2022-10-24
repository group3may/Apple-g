import db from "../server.js"

let  insertIphone=((req,res)=>{
    const {productname,briefdescription,imglink,productdescription,path,priceRange,productprice}=req.body
    let insertP = `INSERT INTO products(product_url,product_name) VALUES ('${url}','${productname}')`;
    // db.query(insertP, (err, results, fields) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("row inserted");
    //     }
    //   });
    db.query(`SELECT * FROM products WHERE product_id=3`,(err,rows,fields)=>{
        //   // extracting foregin key
        //   console.log("rows=>",rows);
        //   let addID=rows[0].product_id
        //   console.log(addID);
    let insertID=`INSERT INTO ProductDescription(description_id,product_id,product_brief_description,product_description) VALUES ('${addID}','${addID}','${briefdescription}','${productdescription}')`;
        //   db.query(insertID,(err,result,fields)=>{
      //       if(err){console.log(err)}else{
      //           console.log("new row");
    //         }
    //     })
    })
    db.query(`SELECT * FROM products WHERE product_id=3`,(err,rows,fields)=>{
        let giveID=rows[0].product_id
          let prange=`INSERT INTO ProductPrice(product_id,starting_price,price_range)VALUES ('${giveID}','${productprice}','${priceRange}')`
      // db.query(prange,(err,results,fields)=>{
      //   if(err){console.log(err)}else{console.log("new row")}
      // })
      })
      db.query(`SELECT * FROM products WHERE product_id=1`,(err,rows,fields)=>{
        let newID=rows[0].product_id
        let insertDes=`INSERT INTO ProductDesc(description_id,product_id,product_brief_description,product_description,product_img,product_link) VALUES ('${newID}','${newID}','${briefdescription}','${productdescription}','${imglink}','${path}')`;
        // db.query(insertDes,(err,results,fields)=>{
        //   if(err){console.log(err)}else{console.log("new row")}
          
        // })

})
res.end('new product added')
})

export default insertIphone