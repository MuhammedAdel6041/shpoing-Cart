import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartPopOver from "./CartPopOver";
import { useShoppingCart } from "../hooks/useShoppingCart";

export default function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <NavigationMenu className="w-full bg-white px-8 py-4 shadow-md sticky top-0 z-50 border-b border-gray-200">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                {/* Logo or Brand */}
                <Link to="/" className="text-2xl font-bold text-red-500">
                    ShopMate
                </Link>

                {/* Navigation Links */}
                <NavigationMenuList className="flex gap-6">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/store" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
                                Store
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>

                {/* Shopping Cart Button */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" className="relative p-2 hover:bg-gray-100 transition-colors rounded-full">
                            <FaShoppingCart className="text-2xl text-gray-700 hover:text-red-500 transition-colors" />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs bg-red-500 text-white font-bold rounded-full flex items-center justify-center border border-white shadow-sm">
                                    {cartQuantity}
                                </span>
                            )}
                        </Button>
                    </DialogTrigger>
                    <CartPopOver />
                </Dialog>
            </div>
        </NavigationMenu>
    );
}
