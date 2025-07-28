import { useState, type ReactNode } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import CartPopOver from './../components/CartPopOver';
import { useLocalStorage } from './../hooks/useLocalStorage';

type CartItem = {
    id: number,
    quantity: number,

}
export type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    openCart: () => void;
    closeCart: () => void;
    cartItems: CartItem[];
    cartQuantity: number;
}

type ShoppingCartProps = {
    children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProps) {


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItemValue", []);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id: number) {
        console.log("Getting quantity for item with id:", id);

        return cartItems.find(item => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id: number) {
        console.log("Increasing quantity for item with id:", id);

        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            }
        });
    }
    function decreaseCartQuantity(id: number) {
        console.log("Decreasing quantity for item with id:", id);

        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
            }
        });
    }
    function removeFromCart(id: number) {
        console.log("Removing item with id:", id);

        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }
    <CartPopOver />
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}



