// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-pink-500 py-8"> {/* Teal and Pink gradient */}
      <div className="container mx-auto px-4 text-center text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <ul className="mb-4">
          <li className="inline-block mx-2">
            <a href="/" className="hover:text-gray-600">Home</a>
          </li>
          <li className="inline-block mx-2">
            <a href="/location" className="hover:text-gray-600">Our Location</a>
          </li>
          <li className="inline-block mx-2">
            <a href="/product" className="hover:text-gray-600">Products</a>
          </li>
          <li className="inline-block mx-2">
            <a href="/location" className="hover:text-gray-600">Information</a>
          </li>
        </ul>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Email: contact@icecreamstation.com</p>
          <p className="text-sm">Phone: (0300) 1234567</p>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ice Cream Station. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
