import product from "../data/products.json";

import Products from "@/components/ui/Products";

export default function Store() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to the Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {product.map((item, key) => (
          <>
            <div className="group max-w-sm rounded-2xl bg-gray-100 p-6 shadow-md font-sans cursor-pointer hover:shadow-xl transition-shadow duration-300" key={key} > <Products {...item} /></div>

          </>

        ))}
      </div>
    </>
  );
}

