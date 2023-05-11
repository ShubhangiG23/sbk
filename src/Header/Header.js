import "./Header.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/fontawesome-free-regular";
import { cartSelector } from "../reducers/cartReducer";
import { Link, useLocation } from "react-router-dom";

import { faUserPlus, faHeart, faUser, faShoppingCart } from '@fortawesome/fontawesome-free-solid';


function Header(props) {

  const cartItemCount = useSelector(cartSelector).value.length;
  const cartItemCount2 = useSelector(cartSelector).totalQuantity;
  const username=useSelector(cartSelector).userInfo;
  console.log(username);
  var totalNoOfCartItem = 0
  if (cartItemCount > cartItemCount2) { totalNoOfCartItem = cartItemCount } else { totalNoOfCartItem = cartItemCount2 }

  const location =useLocation();
  const {pathname}=location;
  const splitLocation = pathname.split("/");
  function pageReload(){
    window.location.reload(true);
  }

  return (
    <div >
      <div className="HederSection">
        <div className="leftHeader">
          <a className="navbar-brand icon-container" href="/">
            <span><h1 className="firstside">SHOP</h1></span><span><h1 className="BrandLastName">LANE</h1></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
        <div className="rightHeader">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="DropDownState">
                <div>
                  <FontAwesomeIcon icon={faUserCircle} style={{ height: "25px" }} />
                  
                </div>
                <div >
                
                  <span  STYLE="font-size:18px" >&nbsp;{username.length>0?username :"Login  or Sign Up"}&nbsp;</span>
                </div>
              </div>

            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {username.length>0?<li onClick= {pageReload}class="dropdown-item" ><FontAwesomeIcon icon={faUser} style={{ height: "" }} /> Logout</li>:
              <li><Link to="/Login" class="dropdown-item" ><FontAwesomeIcon icon={faUser} style={{ height: "" }} /> Login</Link></li>}
              {username.length>0?<li><Link to="/cart"class="dropdown-item"><FontAwesomeIcon icon={faShoppingCart } style={{ height: "" }} /> Cart</Link></li>:<li><Link to="/register" class="dropdown-item" ><FontAwesomeIcon icon={faUserPlus} style={{ height: "" }} /> Sign Up</Link></li>
              }<li><Link to="/FavCart" class="dropdown-item" ><FontAwesomeIcon icon={faHeart} style={{ height: "" }} /> Favourite</Link></li>
              <li><Link to="/cart" class="dropdown-item" ><FontAwesomeIcon icon={faShoppingCart } style={{ height: "" }} /> Cart</Link></li>
            </ul>
          </div>
          <div className="cart">
            <Link to="/cart" className="navbar-brand icon-container" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              {
                totalNoOfCartItem > 0 &&
                <span className='badge badge-warning' id='lblCartCount'> {totalNoOfCartItem}</span>
              }
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item " className={splitLocation[1]===""?"mains":""}>
                <Link to="/" class="nav-link" >Home </Link>
              </li>
              <li class="nav-item" className={splitLocation[1]==="electronics"?"mains":""}>
                <Link to="/electronics" class="nav-link" >Electronic</Link>
              </li>
              <li class="nav-item" className={splitLocation[1]==="jewelery"?"mains":""}>
                <Link to="/jewelery" class="nav-link" >Jewelery</Link>
              </li>
              <li class="nav-item" className={splitLocation[1]==="mencloth"?"mains":""}>
                <Link to="/mencloth" class="nav-link">Men's Clothing</Link>
              </li>
              <li class="nav-item" className={splitLocation[1]==="womencloth"?"mains":""}>
                <Link to="/womencloth" class="nav-link">Women's Clothing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <hr></hr>
    </div>

  );
}



export default Header;
