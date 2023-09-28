// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = 
  [
    { id: 1, name: 'Elegant Necklace', price: 49.99, image: 'necklace.jpg',},
    {id: 2, name: 'Floral Dress', price: 79.99, image: 'dress.jpg',},
    { id: 3, name: 'Luxury Watch', price: 129.99, image: 'watch.jpg',},
    { id: 4, name: 'Crystal Earrings', price: 29.99, image: 'earrings.jpg',},
  ];

  return (
    <div className="bg-gradient-to-b from-pink-100 to-pink-50">
      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-pink-600">My Fancy Store</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-700 hover:text-pink-600">Home</a></li>
            <li><a href="/products" className="text-gray-700 hover:text-pink-600">Products</a></li>
            <li><a href="/cart" className="text-gray-700 hover:text-pink-600">Cart</a></li>
            <li><a href="/profile" className="text-gray-700 hover:text-pink-600">Profile</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-400 to-pink-200 py-16 text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold leading-tight mb-4"
          >
            Discover Elegant Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8"
          >
            Explore our curated collection of beautifully designed items
          </motion.p>
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white py-2 px-6 rounded-full text-lg font-semibold transition-transform duration-300 ease-in-out"
          >
            Shop Now
          </motion.a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-pink-600">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-pink-600">{product.name}</h3>
                  <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
                  <div className="mt-4">
                    <button className="bg-pink-600 text-white rounded-full py-2 px-4 hover:bg-pink-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-pink-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-8">Stay updated with our latest elegant products and promotions.</p>
          <form className="max-w-sm mx-auto">
            <div className="flex items-center border rounded-full shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 px-4 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white rounded-full py-2 px-4 ml-2 hover:bg-pink-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
