export default function About() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-500 mb-6">About Us</h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-8">
        Welcome to <span className="font-semibold text-black">ShopMate</span>, your go-to destination for high-quality products at unbeatable prices.
        We’re passionate about creating a seamless shopping experience for everyone — fast, simple, and secure.
      </p>

      {/* Divider */}
      <hr className="border-t border-red-300 w-1/3 mx-auto my-10" />

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-red-500 mb-2">Trusted Quality</h3>
          <p className="text-gray-600">We hand-pick every product to ensure top-notch quality and satisfaction.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-red-500 mb-2">Affordable Prices</h3>
          <p className="text-gray-600">Our prices are designed to give you more value for your money.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-red-500 mb-2">Fast & Secure</h3>
          <p className="text-gray-600">Enjoy fast shipping and protected payments on every order.</p>
        </div>
      </div>
    </div>
  );
}
