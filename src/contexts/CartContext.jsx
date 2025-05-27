import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartPrivider = ({ children }) => {
  // 장바구니로 추가된 아이템들 리스트
  const [cartItems, setCartItems] = useState([]);

  // 장바구니 리스트로 추가하는 함수
  const handleAddItem = item => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddItem }}>
      {children}
    </CartContext.Provider>
  );
};

// 커스텀 훅
export const useCart = () => useContext(CartContext);
