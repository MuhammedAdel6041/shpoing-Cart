import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaTruck, FaCreditCard, FaLock } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopMate</h1>
          <p className="text-lg md:text-xl mb-6">
            The best place to buy quality products at affordable prices.
          </p>
          <Link to="/store">
            <Button className="bg-white text-red-500 font-bold hover:bg-red-100 transition">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <FaTruck className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">We ship all orders within 24 hours.</p>
          </div>
          <div>
            <FaCreditCard className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Pay safely with multiple options.</p>
          </div>
          <div>
            <FaLock className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy Guaranteed</h3>
            <p className="text-gray-600">Your data is safe with us.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
        <p className="text-gray-600 mb-6">Browse our store and discover amazing products today.</p>
        <Link to="/store">
          <Button className="bg-red-500 text-white hover:bg-red-600 transition">
            Visit Store
          </Button>
        </Link>
      </section>
    </>
  );
}
