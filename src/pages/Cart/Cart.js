import "./Cart.css";
import Header from "../../Header/Header";
import CartItem from "../../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { getTotal, clearCart } from "../../reducers/cartReducer";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from '../../Footer/Footer';


const Cart = (props) => {
  const items = useSelector(cartSelector).value;
  const totaBill = useSelector(cartSelector).totalPrice;
  const totalQuantity = useSelector(cartSelector).totalQuantity;
  const userName=useSelector(cartSelector).userInfo;
  let navigat=useNavigate();
  
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getTotal());
  }, [items, dispatch])
 
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  function checkout(){
    navigat("/payment");
  }
  console.log()
  return (
    items.length === 0 ? (
      <div class=" mt-80">
        <div><Header /></div>
        <div class="row">

          <div class="col-md-10">

            <div class="">

              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                    width="130" height="130" class="img-fluid mb-4 mr-3" alt="" />
                  <h3><strong>Your Cart is Empty</strong></h3>
                 
                  <Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>


                </div>
              </div>
            </div>


          </div>

        </div>
        <div><Footer /></div>

      </div>
    ) : (

      <div>

        <div className="cartDisplay">
          <Header />
          <div class=" cartBill btn-group btn-group-toggle" data-toggle="buttons">
            
            <label class="btn btn-secondary active">
              <input type="radio" name="options" id="option2" autocomplete="off" onClick={handleClearCart}/>Clear Cart
            </label>
            <label class="cartBillP ">Cart Bill &#8377;{(totaBill + 200 + 55)}
              
            </label>
            <label class="btn btn-secondary active">
              <input type="radio" name="options" id="option3" autocomplete="off" /> CheckOut
            </label>
          </div>
          
          <div className="left">
            {items &&
              items.map((cartItem, i) => (
                <CartItem item={cartItem} key={i} />
              ))}
          </div>

          <div className="right">
            <div class="col-md-30">
              <div class="flex wrap mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush ">
                    <li
                      class=" list-group-item d-flex justify-content-between align-items-center ">
                      Products ({totalQuantity} items)
                      <span>&#8377;{totaBill}</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center ">
                      Shipping
                      <span>&#8377;40</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Tax
                      <span>&#8377;{Math.round((totaBill*18)/100)}</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center  mb-3">
                      <div>
                        <strong>ToT amount</strong>
                        <strong>
                          <p class="mb-0">(including 18% GST)</p>
                        </strong>
                      </div>
                      <span><strong>&#8377;{Math.round((totaBill + 40 + ((totaBill*18)/100)))}</strong></span>
                    </li>
                  </ul>

                  <button onClick={checkout} type="button" class="btn btn-primary btn-lg btn-block">
                    Order NOW
                  </button>
                  <button onClick={handleClearCart} className="btn btn-primary btn-lg btn-block">
                   Clear 
                  </button>

                </div>
                <br></br><br></br>
              </div>
            </div>
          </div>



          <div><Footer /></div>

        </div>
      </div>)

  );
}

export default Cart;
