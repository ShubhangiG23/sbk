import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Login.css";
import { useState } from "react";
import { useLocation,useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import loginDetails from '../../data/loginDetails.json';
import { addUser } from "../../reducers/cartReducer";

function Login() {
  let navigate = useNavigate();
  const dispatch=useDispatch();
  let location = useLocation();
  
  

  console.log(location.pathname);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    

  });


  const { email, password } = formData;
  function handleSubmit(e) {
    e.preventDefault();
    
   

    alert("Login successfully")
    
  }


  // function handleChange(e) {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log(formData);
  // }

  return (
    <div>
      <Header></Header>

      <form className="login-container">

        <div class="  form-outline mb-4">
          <input type="email" placeholder="Email" class="form-control" name="email" id="email"  value={email}/>
          
        </div>


        <div class="form-outline mb-4">
          <input type="password" name="password" placeholder="Password" id="password"  value={password} class="form-control" />
          
        </div>


        <div class="row mb-4">
          <div class="col d-flex justify-content-center">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>


        <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Login</button>


        <div class="text-center">
          <p>Do't have an account?  Signup here <Link to="/register">Register</Link> </p>
          
         

          
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}
export default Login;

