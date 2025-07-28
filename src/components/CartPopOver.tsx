import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "../hooks/useShoppingCart";
import CartItem from "./CartItem";
import products from "../data/products.json";
import { formatCurrency } from "@/utilities/formatCurrency";

export default function CartPopOver() {
    const { cartItems } = useShoppingCart();

    const total = cartItems.reduce((sum, cartItem) => {
        const item = products.find((i) => i.id === cartItem.id);
        return sum + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-xl">🛒 Your Cart</DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                    Here's what you’ve added.
                </DialogDescription>
            </DialogHeader>

            {cartItems.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                    Your cart is empty 🛍️
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
                        ))}
                    </div>

                    <div className="flex justify-between items-center border-t pt-4 font-semibold text-lg">
                        <span>Total:</span>
                        <span>{formatCurrency(total)}</span>
                    </div>
                </>
            )}

            <DialogFooter className="pt-4">
                <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                </DialogClose>
                {cartItems.length > 0 && (
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Checkout
                    </Button>
                )}
            </DialogFooter>
        </DialogContent>
    );
}
