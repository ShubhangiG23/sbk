import "./CartItem.css";
import { useDispatch } from 'react-redux';
import { add, removeFromCart, decreaseCart } from "../reducers/cartReducer";

function CartItem(props) {
  const items = props.item;
  
  const dispatch = useDispatch()
  const handelRemoveFromCart = (item) => {hgdghh
   
    // using dispatch to send remove action and payload.

    dispatch(removeFromCart(items.id));
  }
  const handelAddItemQuantity = () => {
    
    dispatch(add(items))

  }
  const handelRemoveQuantity = () => {
   
  

    dispatch(decreaseCart(items));
  }

  return (

    <div className="cartItem">
      <img src={props.item.image}></img>

      <div>
        <p>{props.item.title}</p>

      </div>
      <div>
        <span className="itemRate">Price: </span>
        <span>{props.item.price}/pcs</span>
      </div>
  
        <button onClick={handelAddItemQuantity} className="cart btn btn-success">+</button>{' '}
        <button onClick={handelRemoveQuantity} className="cart btn btn-success">-</button>
      
      <p>{props.item.quantity}Pcs X {props.item.price} = {props.item.quantity * props.item.price}</p>
      <div className="DeleteItem">
        <i class="fa fa-trash" aria-hidden="true" onClick={handelRemoveFromCart}></i>

      </div>
    </div>




  );
}

export default CartItem;

