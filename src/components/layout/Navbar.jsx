import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold"
          >
            Atlantic Bridge Exchange
          </Link>
        </div>

        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;