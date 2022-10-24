import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../commonResource/css/bootstrap.css"
import axios from "axios"
import IphoneProducts from "../ProductsPage/IphoneProducts";


function Iphone() {
  // to store and update the coming data
  const [products, setProducts] = useState([]);
  // to display the data when the page load we use useEffect
  useEffect(() => {
    // to get the data useing the link we use fetch method(it sends http request to the server & return data)
    fetch("http://localhost:3009/user/iphones")
      .then((res) => {
        // the response is a text that l[ks like jason so we need to change the text to jason
        return res.json();
      })
      .then((data) => {
        let productData=data.Products
        console.log(productData);
        return setProducts(data.Products);
      });
  //    const show=async ()=>{
  //     try{
  //       const response = await axios.get("http://localhost:3009/user/iphones")
  //       let converted = JSON.parse(JSON.stringify(response.data))
  //       setProducts(converted)
  //     }catch(err){
  //        console.log(err)
  //     }
  //  }
     
  }, []);

  return (
    <section className=" top-25">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 mt-5 pt-5">
          <h1 className="font-weight-bold">Iphones</h1>
          <h1 className="brief">Big and Bigger</h1>
          {/* b/c the data comes in an array we can use the map method to atterate similar data  */}
          {products?.map((products) => {
            let id = products.product_id;
            let url=products.Product_url;
            let name=products.product_name;
            let desId=products.description_id;
            let brief= products.Product_brief_description
            let desc=products.Product_description;
            let priId=products.price_id;
            let startPrice=products.starting_price;
            let range=products.price_range;
            let img=products.Product_img
            let IphoneProducts="/iphone/"+url;
            let flip=true
            let order1=1;
            let order2=2;
            if(flip){
                order1=2
                order2=1

                flip=!flip
            }else{
                flip=!flip
            }
            let iphoneProduct = (
              <div key={id} className="row justify-content-center text-center top-100">
                <div className={`col-sm-12 col-md-6 mt-5 order-${order1}`}>
                <div className="title">{desc} </div>
                <div className="brief">{brief} </div>
                <div className="sprice">{startPrice} </div>
                <div>{range} </div>
                </div>
                <div>
                    <div className={`col-sm-12 col-md-6 mt-5 order-${order2}`}>
                      <Link to={IphoneProducts}>Learn More </Link>
                        <img className="prodcut-img" src={img} alt="products"/>
                    </div>
                </div>
                
              </div>
            );
            return iphoneProduct;
          })}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Iphone