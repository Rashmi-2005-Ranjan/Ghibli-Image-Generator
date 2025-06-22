import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="border-b border-gray-700 sticky top-0 bg-black/70 backdrop-blur-md z-50">
    <nav className="container mx-auto flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center text-xl font-bold tracking-wider text-white"
      >
        <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-2">
          G
        </div>
        Ghibli AI
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors text-gray-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `transition-colors text-gray-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-semibold" : ""
            }`
          }
        >
          Create
        </NavLink>
        <NavLink
          to="/features"
          className={({ isActive }) =>
            `transition-colors text-gray-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-semibold" : ""
            }`
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `transition-colors text-gray-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-semibold" : ""
            }`
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `transition-colors text-gray-300 hover:text-yellow-400 ${
              isActive ? "text-yellow-400 font-semibold" : ""
            }`
          }
        >
          FAQ
        </NavLink>
      </div>

      {/* CTA Button */}
      <Link to="/create">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition cursor-pointer">
          Launch Studio
        </button>
      </Link>
    </nav>
  </header>
);

export default Header;
