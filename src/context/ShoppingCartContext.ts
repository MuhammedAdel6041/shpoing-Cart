import { createContext } from "react";
import type { ShoppingCartContextType } from "./ShoppingCartProvider";

export const ShoppingCartContext = createContext({}as ShoppingCartContextType);