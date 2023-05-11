import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProductCard from "../../ProductCard/ProductCard";
import "./Jewelery.css";
import { useEffect, useState } from "react";
import Loader from '../../PageLoader/PageLoader';
import BarLoader from "../..//PageLoader/PageLoader";

function Jewelery() {
  //console.log("rerendering");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((jsonResponse) => {
      
       
        setProducts(jsonResponse);
        setError();
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  

  return (
    products.length === 0 ? (
      
      <div class="container-fluid  mt-80">
        <div><Header /></div>
        <Loader></Loader>
        <div><Footer /></div>

      </div>
    ) : (
    <div>
      <Header  />
      <div className="container">
        {error && 
       <BarLoader></BarLoader>
        
        }
        
        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-md-3">
              <ProductCard 
              item={p} 
              key={i}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  ));
}

export default Jewelery;
