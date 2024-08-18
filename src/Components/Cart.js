import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../Utils/cartSlice";
import ShowButtonContext from "../../Utils/ShowButtonContext";

const Cart = () => {
  // Accessing context for showing/hiding buttons
  const { setShowButton } = useContext(ShowButtonContext);

  // State to manage total amount to be paid
  const [totalPay, setTotalPay] = useState(0);

  // State to manage count of items (might be for individual item quantities)
  const [itemCount, setItemCount] = useState(1);

  // Function to increment item count
  const incrementItemCount = () => {
    setItemCount((prev) => prev + 1);
  };

  // Function to decrement item count, ensuring it doesn't go below 0
  const dncrementItemCount = () => {
    if (itemCount === 0) {
      return false;
    }
    setItemCount((prev) => prev - 1);
  };

  // Fetch cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Function to clear the cart by dispatching clearCart action
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Effect to hide the button when the component mounts
  useEffect(() => {
    setShowButton(false);
  }, [setShowButton]);

  // Effect to calculate the total amount based on cart items
  useEffect(() => {
    let total = 0;

    cartItems.forEach((item) => {
      // Calculate item price considering possible price or defaultPrice field
      const itemPrice =
        item.card.info.defaultPrice / 100
          ? item.card.info.defaultPrice / 100
          : item.card.info.price / 100;
      total += itemPrice;
    });

    // Update totalPay state with calculated total
    setTotalPay(total);
  }, [cartItems]); // Runs when cartItems change

  return (
    <div className="py-2 w-full md:w-8/12 m-auto md:flex flex-col my-10">
      <h1 className="font-bold text-3xl text-center">Cart</h1>
      <div
        className={`${
          cartItems.length > 0
            ? "flex justify-end px-6 mt-6"
            : "flex justify-center mt-6 px-6"
        }`}
      >
        <button
          className="text-white bg-red-600 rounded-lg w-24 h-10"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length > 0 ? (
        <ItemList
          items={cartItems}
          incrementItemCount={incrementItemCount}
          dncrementItemCount={dncrementItemCount}
          itemCount={itemCount}
        />
      ) : (
        <h1 className="text-center p-4">
          Your Cart is empty, Add items to the cart
        </h1>
      )}
      {cartItems.length > 0 ? (
        <div className="w-11/12 flex justify-between m-auto">
          <span className="font-bold">Total Pay</span>
          <span className="font-bold">₹{totalPay}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
