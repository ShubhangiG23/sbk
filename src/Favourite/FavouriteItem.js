import "./FavouriteItem.css";

import { useDispatch} from 'react-redux';
import { add,removeFromFavCart,removeFromCart } from ".././reducers/cartReducer";
import { useState } from 'react';

function FavouriteItem(props) {
  
  let items = props.item;
  const[changeBtn,setchangeBtn]=useState(false);

  const dispatch = useDispatch()
  const handelRemoveFromFavCart = (item) => {
    dispatch(removeFromFavCart(items.id));
    setchangeBtn(!changeBtn);
  }
  function handleAddToCartEvent() {
    
    dispatch(add(items));
    setchangeBtn(!changeBtn);

  }
  function handleRemoveToCart(){
    dispatch(removeFromCart(items.id));
    setchangeBtn(!changeBtn);
  }


  return (
    <div >

      <div class="thumb-wrapper">

        <div className="img-box">
          <img src={items.image} class="img-fluid" alt="iPhone" />
        </div>
        <div className="thumb-content">
          <p>{items.title}</p>
          <p class="item-price"><strike>&#8377;369.00</strike> <span>&#8377;{items.price}</span></p>
          <div class="star-rating">
            <ul class="list-inline">
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            </ul>
          </div>

          <div className="favBtn">
          {changeBtn === false?( <button onClick={handleAddToCartEvent} className="btn btn-primary">
          Add To Cart
        </button>):(<button onClick={handleRemoveToCart} className="btn btn-primary" >Remove From Cart</button>)}
        <h4 className="navbar-brand removeBtn"onClick={handelRemoveFromFavCart}>Remove From Favourite</h4>
        </div>
          
        </div> 
        </div>

    </div>


  );
}

export default FavouriteItem;
