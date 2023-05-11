import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ProductCard from "../../ProductCard/ProductCard";
import "./Electronic.css";
import { useEffect, useState } from "react";
import BarLoader from '../../PageLoader/PageLoader';

function Electronic() {
 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  
  // async call.

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((jsonResponse) => {
        
        // we are changing state of component.
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
        <BarLoader></BarLoader>
        <div><Footer /></div>

      </div>
    ) : (
    <div>
      <Header  />
      <div className="container ">
        {error && <h2 className="mt-3">No Products to Show</h2>}
       
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

export default Electronic;
