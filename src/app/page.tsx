"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/homeimage1.jpg", // Replace with your image paths
  "/homeimage2.webp",
  "/homeimage3.jpg",
  // Add more images as needed
];

export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        return images[(currentIndex + 1) % images.length];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      {/* Background with changing images */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 animate-gradient-text text-center mb-4">
            Welcome to Ice Cream Station
          </h1>
          <Link href="/product">
  <button className="bg-gradient-to-r from-pink-400 to-pink-300 text-white font-bold text-lg tracking-wider italic py-3 px-8 flex items-center justify-center space-x-3 shadow-lg transition-transform transform hover:scale-105 animate-pulse mt-6 rounded-xl">
    <span>🛒</span>  
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
      Order Now
    </span>
  </button>
</Link>
        </div>
      </div>

      {/* New Arrival Section with Background Image */}
      <div
        className="md:flex md:justify-between md:items-center bg-cover bg-center bg-no-repeat py-12 px-6 md:px-12"
        style={{
          backgroundImage: `url('/arrivalbgimage.jpg')`, // Replace with your background image path
        }}
      >
        {/* Left Side: New Arrivals Heading and Flavors */}
<div className="md:w-6/12 mb-8 md:mb-0 bg-white bg-opacity-0 p-6 rounded-lg">
  <h2 className="text-4xl font-bold text-pink-600 mb-4 bg-transparent">
    New Arrivals
  </h2>
  <ul className="space-y-3 text-lg">
    <li className="text-gray-700 bg-transparent">🍦 Mango Delight</li>
    <li className="text-gray-700 bg-transparent">🍦 Raspberry Ripple</li>
    <li className="text-gray-700 bg-transparent">🍦 Chocolate Fudge</li>
    <li className="text-gray-700 bg-transparent">🍦 Caramel Swirl</li>
    <li className="text-gray-700 bg-transparent">🍦 Minty Fresh</li>
  </ul>
</div>


        {/* Right Side: Image of New Arrival */}
        <div className="md:w-6/12">
          <img
            src="/arrivalimage.jpg" // Replace with your image path
            alt="New Arrival Ice Cream"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
