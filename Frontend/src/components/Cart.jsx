import React from "react";
import { useCart } from "../context/CartContext";
import { Link,useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, BookOpen } from "lucide-react";
import Navbar from "./Navbar";


function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  // Create a unique key for each item
  const getItemKey = (item) =>
    JSON.stringify({
      id: item._id,
      name: item.name,
      price: item.price,
    });
  // console.log(cartItems);
  const navigate = useNavigate();
  const handleProceedToPayment = () => {
    navigate('/payment');
  };
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <header>
          <Navbar />
        </header>
        <div className="text-center bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
          <ShoppingCart className="mx-auto mb-6 text-pink-500" size={64} />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any books yet.
          </p>
          <Link
            to="/course"
            className="flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <BookOpen size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 lg:mt-20">
      <header>
        <Navbar />
      </header>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <ShoppingCart className="text-pink-500" size={36} />
                Your Cart
              </h2>
              <p className="text-gray-600">
                {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => {
              const itemKey = getItemKey(item);
              return (
                <div
                  key={itemKey}
                  className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 transition"
                >
                  <div className="col-span-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 mt-1">{item.category}</p>
                    <p className="text-pink-600 font-bold mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="col-span-4 flex items-center justify-end space-x-4">
                    <div className="flex items-center border rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(itemKey, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-100 rounded-l-full"
                      >
                        <Minus size={16} className="text-gray-600" />
                      </button>
                      <span className="px-4 text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(itemKey, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-100 rounded-r-full"
                      >
                        <Plus size={16} className="text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(itemKey)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-6 py-8 bg-gray-100 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={clearCart}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
              >
                <Trash2 size={20} />
                Clear Cart
              </button>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  Total:{" "}
                  <span className="text-pink-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </p>
                <button
                  onClick={handleProceedToPayment}
                  className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <BookOpen size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
