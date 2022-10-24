import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


export default function IphoneProducts() {
    const[iphone,setIphone]=useState([]);
    // to catch the url we use
    const {ID}=useParams();

    useEffect(()=>{
        fetch("http://localhost:3009/user/iphones")
        .then((res) => {
            return res.json();})
        .then((data)=>{
            // const iphones=data.Products;
            const listItem=data.Products.filter((iphone)=>
            iphone.Product_url=== ID)
            setIphone(listItem);
        },[ID])
        
    })
  return (
    <section className=" top-25">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 mt-5 pt-5">
          <h1 className="font-weight-bold">Iphones</h1>
          <h1 className="brief">New Product</h1>
          {/* b/c the data comes in an array we can use the map method to atterate similar data  */}
          {iphone?.map((products) => {
            let id = products.product_id;
            let url=products.product_url;
            let name=products.product_name;
            let desId=products.description_id;
            let brief= products.Product_brief_description
            let desc=products.Product_description;
            let priId=products.price_id;
            let startPrice=products.starting_price;
            let range=products.price_range;
            let img=products.Product_img
            let iphoneList = (
              <div key={id} className="row justify-content-center text-center top-100">
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="title">{desc} </div>
                <div className="brief">{brief} </div>
                <div className="sprice">{startPrice} </div>
                <div>{range} </div>
                </div>
                <div>
                    <div className="col-sm-12 col-md-6 mt-5">
                        <img src={img} alt="products"/>
                    </div>
                </div>
                
              </div>
            );
            return iphoneList;
          })}
        </div>
      </div>
    </div>
    </section>
  )
}
