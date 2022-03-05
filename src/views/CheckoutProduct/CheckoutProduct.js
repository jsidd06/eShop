import React from 'react'
import "./CheckoutProduct.css"
function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="" />
      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
              </p>
              <p className="checkoutProduct__price">
                    <small>$</small><strong>"</strong>
                  </p>
                    <div className="checkoutProduct__rating">{Array("").fill().map((_,i) => (
                        <p>⭐</p>
                    ))}</div>
                    <button className="">Remove from Basket</button>
              </div>
    </div>
  );
}

export default CheckoutProduct