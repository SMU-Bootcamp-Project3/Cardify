
import React from "react";
// import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { QUERY_CARDS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
// import { Link } from "react-router-dom";

import "./cart.css";
export const Home = () => {
  const { cartItems, getTotalCartAmount, checkout } = useQuery(QUERY_CARDS);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={
                {
                    ...product,
                    amount: cartItems[product.id],
                }


            } />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}>Perzonalize Card</button>
          <button
            onClick={() => {
              checkout();
              navigate("/stripe");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      <>
        
      </>
    </div>
  );
};

export default Home;