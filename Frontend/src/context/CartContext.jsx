import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from local storage or empty array
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item) => {
    // Create a unique identifier for the item that includes more details
    const uniqueItemKey = JSON.stringify({
      id: item._id,
      name: item.name,
      price: item.price,
      // Add other unique identifying properties
    });
    console.log(item);
    
    // Check if item is already in cart
    const existingItemIndex = cartItems.findIndex(cartItem => 
      JSON.stringify({
        id: cartItem._id,
        name: cartItem.name,
        price: cartItem.price,
      }) === uniqueItemKey
    );
    
    if (existingItemIndex !== -1) {
      // If item exists, increase quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1
      };
      setCartItems(updatedCartItems);
    } else {
      // If item is new, add to cart with quantity 1
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  };

  // Remove item from cart
  const removeFromCart = (itemKey) => {
    setCartItems(cartItems.filter(item => 
      JSON.stringify({
        id: item._id,
        name: item.name,
        price: item.price,
      }) !== itemKey
    ));
  };

  // Update item quantity
  const updateQuantity = (itemKey, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity is less than 1, remove the item
      removeFromCart(itemKey);
    } else {
      setCartItems(cartItems.map(item => {
        const currentItemKey = JSON.stringify({
          id: item._id,
          name: item.name,
          price: item.price,
        });
        
        return currentItemKey === itemKey 
          ? {...item, quantity: newQuantity} 
          : item
      }));
    }
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Provide cart context with state and methods
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};