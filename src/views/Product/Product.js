import React from 'react'
import "./Product.css"
import {useStateValue} from "../StateProvider/StateProvider"
function Product({id,title,rating,price,image}) {

  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  }


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
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button style={{ cursor: "pointer" }} onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product