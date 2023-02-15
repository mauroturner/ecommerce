import { createContext, useState, useContext } from "react";
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const agregarCarrito = (product) => {
        setCartList([...cartList, product]);
    }
    const vaciarCarrito = () => {
        setCartList([]);
    }
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}