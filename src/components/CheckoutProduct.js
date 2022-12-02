import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* This Array() constructor w/h takes integer value as a parameter method creates an empty array that can hold this many array elemets. It holds space for this many number of the upcoming array elements that will be filled by fill() method */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>★</p>
              // <p>⭐</p>
              // <p>⭐</p>
              //<p key={i}>🌟</p>
            ))}
        </div>
        <Link>
          {/* When hideButton doesn't exist, display Remove from Basket button, but when hideButton exists, don't display the button. Check Order.js  */}
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </Link>
      </div>
    </div>
  );
}

export default CheckoutProduct;
