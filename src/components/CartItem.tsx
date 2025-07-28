import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import products from "../data/products.json";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { formatCurrency } from "@/utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  const item = products.find((i) => i.id === id);

  if (!item) return null;

  return (
    <div className="flex items-center gap-4 border-b pb-3">
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8"
            onClick={() => decreaseCartQuantity(id)}
            disabled={quantity === 1}
          >
            <Minus size={16} />
          </Button>
          <span className="font-semibold">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8"
            onClick={() => increaseCartQuantity(id)}
          >
            <Plus size={16} />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {formatCurrency(item.price)} × {quantity} ={" "}
          <span className="font-bold">
            {formatCurrency(item.price * quantity)}
          </span>
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeFromCart(id)}
      >
        <Trash className="text-red-500" size={18} />
      </Button>
    </div>
  );
}
