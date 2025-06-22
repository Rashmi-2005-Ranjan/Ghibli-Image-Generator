import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", to: "/" },
        { label: "Create", to: "/create" },
        { label: "Features", to: "/features" },
        { label: "Gallery", to: "/gallery" },
        { label: "FAQ", to: "/faq" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#0e0d0c]/90 border-b border-gray-700/50 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto flex justify-between items-center p-4 px-6 lg:px-12">
                {/* Brand / Logo */}
                <Link
                    to="/"
                    className="flex items-center text-white text-xl font-semibold tracking-wider"
                >
                    <div className="bg-orange-700 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg mr-2 shadow-inner">
                        G
                    </div>
                    Ghibli Generator
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
                    {navItems.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `hover:text-white transition-colors duration-200 ${
                                    isActive ? "text-white font-semibold" : ""
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* CTA Button */}
                <Link to="/create" className="hidden md:block">
                    <button className="bg-orange-600 cursor-pointer hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200">
                        Try Ghibli AI
                    </button>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-200"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0e0d0c] border-t border-gray-700">
                    <div className="flex flex-col space-y-4 p-4 text-gray-300 text-base">
                        {navItems.map(({ label, to }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `hover:text-white transition-colors ${
                                        isActive ? "text-white font-semibold" : ""
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <Link to="/create" onClick={() => setMenuOpen(false)}>
                            <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 rounded-full transition-all">
                                Try Ghibli AI
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
