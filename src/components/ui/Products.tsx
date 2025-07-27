type ProductProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    rating: number;
    imgUrl: string;
};
import { toast } from "sonner"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utilities/formatCurrency';
import { useShoppingCart } from './../../hooks/useShoppingCart';
import { Toaster } from "./sonner";

export default function Products({
    id,
    name,
    price,
    description,
    category,
    stock,
    rating,
    imgUrl,
}: ProductProps) {

    const { increaseCartQuantity } = useShoppingCart();

    return (
        <>
            <div key={id}>
                {/* Image with hover effect */}
                <div className="relative w-full h-40 flex justify-center items-center overflow-hidden">
                    <img
                        src={imgUrl}
                        alt={name}
                        className="w-40 h-40 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                    <div className="title flex justify-between items-center py-2 px-3 rounded-md">
                        <h2 className="text-xl font-medium text-black">{name || 'Product Name'}</h2>
                        <Badge className="bg-green-400 text-white text-xs font-medium" variant="secondary">
                            In stock
                        </Badge>
                    </div>

                    {/* Category, Stock, Rating */}
                    <div className="flex justify-around text-sm text-gray-600 mt-2 px-3">
                        <span className="font-medium">📦 {category}</span>
                        <span className="font-medium">🧮 {stock} in stock</span>
                        <span className="font-medium">⭐ {rating}/5</span>
                    </div>

                    {/* Price and Add Button */}
                    <div className="mt-4 flex items-center justify-between px-4 py-2 rounded-md">
                        <Toaster position="top-right" richColors />
                        <span className="font-semibold text-black text-2xl">
                            {formatCurrency(price)}
                        </span>
                        <Button
                            onClick={() => {
                                increaseCartQuantity(id);
                                toast("Added to cart");
                            }}
                            className="bg-white text-sm text-gray-800 font-medium px-4 py-2 rounded-full shadow-sm border border-gray-300 hover:bg-gray-100 transition"
                        >
                            Add to cart
                        </Button>
                    </div>

                    {/* Description Title */}
                    <div className="mt-6 border-b border-gray-300 flex justify-center text-sm font-semibold text-black pb-1">
                        Description
                    </div>

                    {/* Static Description Content */}
                    <div className="mt-3 px-2 text-sm text-gray-700">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
