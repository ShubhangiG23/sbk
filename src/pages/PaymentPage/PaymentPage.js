import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./PaymentPage.css";
import { cartSelector,clearCart } from "../../reducers/cartReducer";
import { useSelector, useDispatch } from 'react-redux';
import Login from "../Login/Login";
import { useNavigate } from 'react-router-dom';


function Payment() {
    const username = useSelector(cartSelector).userInfo;
    let navigate=useNavigate()
    const dispatch=useDispatch();
    console.log(username);
    function hendleSubmit(){
        alert("Your order is placed")
        navigate("/");
        dispatch(clearCart());

    }
    return (


        username.length > 0 ? (
            <div class=" mt-80 ">
              <div><Header /></div>
              <div class="container paymentBox">
        <div class="row">
            
            <div class="col-12 mt-4">
                <div class="card p-3">
                    <p class="mb-0 fw-bold h4">Payment Page</p>
                </div>
            </div>
            <div class="col-12">
                <div class="card p-3">
                   
                    <div class="card-body border p-0">
                       
                        <div class="collapse show p-3 pt-0" id="collapseExample">
                            <div class="row">
                                <div class="col-lg-5 mb-lg-0 mb-3">
                                    
                                </div>
                                <div class="col-lg-7">
                                    <form action="" class="form">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder="Card Number "/>
                                                    
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" MM / yy"/>
                                                  
                                                </div>
                                            </div>

                                            <div class="col-2">
                                                <div class="form__div">
                                                    <input type="password" class="form-control" placeholder=" CVV"/>
                                                  
                                                </div>
                                            </div>
                                            <div class="col-8">
                                                <div class="form__div">
                                                    <input type="text" class="form-control" placeholder=" Card Name"/>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-8">
                                                <div class="btn btn-primary w-100" onClick={hendleSubmit}>Sumbit</div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                
            </div>
        </div>
       
    </div>
              
      
              
              <div><Footer /></div>
      
            </div>
          ) : (
                
            <div class=" mt-80">
                {alert("Please Login or Sign up for complete the order")}
                    
                    <Login></Login>
      
              
              
              
            </div>)
    );

}
export default Payment;