import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-black px-4 sm:px-6 md:px-24 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        FitVibe
      </div>

      {/* Links */}
     

<ul className="hidden md:flex gap-6 text-sm font-medium">
  <li><Link to="/" className="hover:text-gray-500 transition">Home</Link></li>
  <li><Link to="/programs" className="hover:text-gray-500 transition">Programs</Link></li>
  <li><Link to="/pricing" className="hover:text-gray-500 transition">Pricing</Link></li>
  <li><Link to="/about" className="hover:text-gray-500 transition">About</Link></li>
  <li><Link to="/contact" className="hover:text-gray-500 transition">Contact</Link></li>
</ul>


      {/* CTA Button */}
      <Link
        to="/pricing"
        className="hidden md:inline-block text-white bg-black hover:bg-gray-700 transition px-4 py-2 rounded-xl text-sm font-semibold"
      >
        Join Now
      </Link>

      {/* Mobile Icon */}
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
