import React from "react";
import { useStateValue } from "./StateProvider";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  // we deconstruct state of the App as { basket}
  // useReducer returns state and dispatch
  const [{ basket }, dispatch] = useStateValue();
  // console.log(`This is the basket`, basket);

  const addToBasket = () => {
    // dispatch the item into the data layer when click action has happened on ADD_TO_BASKET button
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // A function to have  currency format
  // const formatPrice = (price) => {
  //   let formattedPrice = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "ETB",
  //   }).format(price.toFixed(2));
  //   return formattedPrice;
  // };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((item, i) => (
              <p key={i}>★</p>
              // <p>⭐</p>
              // <p>⭐</p>
              // <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
