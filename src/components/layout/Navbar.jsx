import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold text-white sm:text-xl lg:text-1xl"
        >
          Atlantic
          <span className="text-cyan-400"> Bridge</span>
          <span className="hidden sm:inline"> Exchange</span>
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-20">
          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Services
          </Link>

          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium hidden sm:block"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 text-sm"
          >
            Register
          </Link>

          <Link
           to="/contact?request=quote"
           className="
bg-cyan-500
text-white
px-4
py-1.5
rounded-lg
font-medium
text-sm
hover:bg-cyan-400
hover:scale-105
transition-all
duration-300
shadow-lg
hover:shadow-cyan-500/40
"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
