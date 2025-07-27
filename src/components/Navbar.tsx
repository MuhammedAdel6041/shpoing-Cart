import React from 'react'

import {
    NavigationMenu,

    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useShoppingCart } from './../hooks/useShoppingCart';
import { Button } from './ui/button';
export default function Navbar() {

    const { cartQuantity, openCart } = useShoppingCart();
    return (
        < >
            <NavigationMenu className="w-full bg-red-400 px-6 py-3 mb-2 shadow-2xl">
                <div className="flex justify-between items-center w-full">
                    {/* Left Side Links */}
                    <NavigationMenuList className="flex gap-4">
                        {/* Home Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/" className="text-white font-semibold">
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* About Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/about" className="text-white font-semibold">
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* Store Link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/store" className="text-white font-semibold">
                                    Store
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    {/* Right Side Cart Icon */}
                    <Button onClick={openCart} variant="ghost" className="relative">

                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <div className="relative text-white text-xl cursor-pointer hover:scale-110 transition-transform duration-200">
                                    <FaShoppingCart className="text-white text-4xl" />
                                    <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-[4px] rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center shadow-md border border-white">
                                        {cartQuantity}
                                    </span>
                                </div>
                            </NavigationMenuItem>
                        </NavigationMenuList>

                    </Button>


                </div>
            </NavigationMenu>
        </>
    )
}
