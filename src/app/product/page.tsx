"use client"; // Include this if you're using React hooks
import Image from "next/image";

export default function Productpage() {
  return (
    <div>
      {/* First Background Section */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/product1bg.jpg')", // Replace with your image path
        }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
  <h1 className="text-5xl font-extrabold text-white mb-4 text-center">
    Our Best Ice Cream
  </h1>
  <p className="text-lg text-white text-center max-w-2xl px-4 mb-8">
    Indulge in our delicious and creamy ice creams, crafted with the finest ingredients. 
    Whether you prefer classic flavors like vanilla and chocolate or adventurous options like 
    mango chili and lavender, we have something to satisfy every craving. 
    Come and experience the delightful world of ice cream like never before!
  </p>
</div>

      </div>

      {/* Second Background Section with Ice Cream Cards */}
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: "url('/productbg2.webp')", // Replace with your new image path
          minHeight: "100vh", // Ensure this section takes full height
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-6xl">
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center">Ice Cream Flavors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Sample ice cream products */}
            {[
              { name: "Vanilla", image: "/card1.jpg" },
              { name: "Chocolate", image: "/card2.jpg" },
              { name: "Mango Chili", image: "/card3.jpg" },
              { name: "Lavender", image: "/card4.jpg" },
              { name: "Strawberry", image: "/card5.png" }, // New ice cream card
              { name: "Pistachio", image: "/card6.png" }, // New ice cream card
              { name: "Cookies & Cream", image: "/card7.jpg" }, // New ice cream card
              { name: "Mint Chocolate Chip", image: "/card8.jpeg" }, // New ice cream card
              { name: "Coffee", image: "/card9.jpg" }, // Additional ice cream card
              { name: "Caramel Swirl", image: "/card10.jpg" }, // Additional ice cream card
              { name: "Peanut Butter Cup", image: "/card11.jpeg" }, // Additional ice cream card
              { name: "Rocky Road", image: "/card12.webp" }, // Additional ice cream card
              { name: "Matcha", image: "/card13.jpg" }, // Additional ice cream card
              { name: "Mango Sorbet", image: "/card14.jpg" }, // Additional ice cream card
            ].map((iceCream, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={iceCream.image} // Replace with your ice cream images
                  alt={iceCream.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <span className="text-lg font-semibold text-gray-800">{iceCream.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
