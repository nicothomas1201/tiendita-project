import { useState, useContext, createContext, use } from "react";

const CartContext = createContext()

export function CartContextProvider({children}){
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext(){
  const context = useContext(CartContext)
  if(!context) throw new Error('useCartaContext must be use within a UserContextProvider')
  return context
}
