import React from "react";
import MainImage from "./MainImage.jsx";
import App from "../app.jsx";
import Category from "./Category.jsx";
import Title from "./Title.jsx";
import Rating from "./Rating.jsx";
import Price from "./Price.jsx";
import AddToCart from "./AddToCart.jsx";
import Delivery from "./Delivery.jsx";
const ProductView = ({ productInfo, customerLocation }) => {
  // productInfo = productInfo
  return (
    <div>
      <div id="container">
        {/* name={productInfo.product_name} */}
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="product">
                <Category />
                <MainImage imageFile={productInfo.product_image} />
                {/* <SecondaryImages /> */}
              </div>
            </div>
            <div className="column">
              <div className="purchase">
                <Title title={productInfo.product_name} />
                <Rating
                  rating={productInfo.customer_review_AVG}
                  count={productInfo.customerReviewCount}
                />
                <Price price={productInfo.regularPrice} />
                <br />
                <hr />
                <Delivery
                  zip={customerLocation.zip}
                  city={customerLocation.city}
                />
                <br />
                <hr />
                <AddToCart />
                <br />
                <hr />
                <img id="help" src="https://i.ibb.co/PNh5FCm/help.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
