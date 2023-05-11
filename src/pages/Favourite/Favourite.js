import "./Favourite.css";
import Header from "../../Header/Header";
import { useSelector } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";
import Footer from '../../Footer/Footer';
import FavouriteItem from "../../Favourite/FavouriteItem";


const FavCart = (props) => {
  const items = useSelector(cartSelector).Favourite;

  return (
    items.length === 0 ? (
      
      <div class=" mt-80">
        <div><Header /></div>
        <div class="row">

          <div class="col-md-10">

            <div class="">
             
              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="https://cdn.pixabay.com/photo/2016/03/31/18/34/bookmark-1294473_1280.png" 
                  width="130" height="130" class="img-fluid mb-4 mr-3" alt=""/>
                    <h3><strong>Your favourite list is empty</strong></h3>
                    
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
        <Header />
        <div className="container ">

          <div className="row">
            {items.map((p, i) => (
              <div key={i} className="col-md-3">
                <FavouriteItem
                  item={p}
                  key={i} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

    )
  );
}

export default FavCart;


