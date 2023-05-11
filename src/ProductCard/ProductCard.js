
import "./ProductCard.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, cartSelector, addFav, removeFromCart, removeFromFavCart } from "../reducers/cartReducer";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function ProductCard(props) {
  const [changeColor, setChangeColor] = useState(false);
  const [changeBtn, setchangeBtn] = useState(false);
  const nav = useNavigate();


  let product = props.item;
  const dispatch = useDispatch();
  const setNotify = props.notify;
  function handleAddToCartEvent() {
    // using dispatch to send add action and payload.
    dispatch(add(product));
    setchangeBtn(!changeBtn);
    setNotify(true);
    

  }
  function handleAddToFavourite() {
    if (!changeColor) {
      setChangeColor(!changeColor)
      dispatch(addFav(product));
      
    } else {
      setChangeColor(!changeColor)
      dispatch(removeFromFavCart(product.id));
      
    }

   

  }
  function handleRemoveToCart() {
    dispatch(removeFromCart(product.id));
    setchangeBtn(!changeBtn);
    
  }
  



  

  return (

    <div>

      <div class=" allproduct">
        <span>
          {
            changeColor === false ? (<i onClick={handleAddToFavourite} className="fa fa-heart"></i>) : (
              <i onClick={handleAddToFavourite} className="bk fa fa-heart"></i>
            )
          }

        </span>

        
        <Link to={`/products/${product.id}`}>
          <div className="img-box">
            <img src={product.image} class=" message" alt="product pic" />
          </div> </Link>
          <div className="thumb-content">
            <div className="Brand">
            <h1 className="brand">Brand,</h1><p> {product.title}</p>
            </div>
           
            <p class="item-price"> <span>&#8377;{product.price}</span></p>
            <div class="star-rating">
              <ul class="list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
              </ul>
            </div>
            {
              changeBtn === false ? (<button onClick={handleAddToCartEvent} className=" buttonadd">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="false"></i>  Add To Cart
              </button>) : (<button onClick={handleRemoveToCart} className=" buttonremove">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> Remove From Cart
              </button>)

            }
          </div>
       
      </div>

     




    </div>
  );
}

export default ProductCard;
