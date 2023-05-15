import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
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
                id: product.id,
                productName: product.productName,
                price: product.price,
                productImage: product.productImage,
              }
            } />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/form")}>Perzonalize Card</button>
          <button
            onClick={() => {
              checkout();
              navigate("/stripe", { replace: true });
            }}
          >
            {" "}
            Checkout{""}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      <>
        <Link to="/">
          <button className="backToShop">Back to Shop</button>
        </Link>
      </>
    </div>
  );
};