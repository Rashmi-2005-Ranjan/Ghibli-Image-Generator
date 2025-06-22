import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-[#0e0d0c] text-gray-300 pt-16 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                {/* Brand Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="bg-orange-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg mr-2 shadow-inner">
                            G
                        </div>
                        <h3 className="text-2xl font-semibold text-white">Ghibli AI</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        A tribute to the enchanting worlds of Studio Ghibli. This fan-made project is not affiliated with Studio Ghibli Inc.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                        <li><Link to="/create" className="hover:text-orange-400 transition-colors">Create</Link></li>
                        <li><Link to="/features" className="hover:text-orange-400 transition-colors">Features</Link></li>
                        <li><Link to="/gallery" className="hover:text-orange-400 transition-colors">Gallery</Link></li>
                        <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Capabilities */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Capabilities</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Photo to Ghibli Art</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Text to Ghibli Image</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Character Generator</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Background Scenes</a></li>
                    </ul>
                </div>

                {/* Legal Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Ghibli AI. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" aria-label="Twitter" className="hover:text-orange-400 transition-colors"><FaTwitter size={18} /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-orange-400 transition-colors"><FaInstagram size={18} /></a>
                    <a href="#" aria-label="Facebook" className="hover:text-orange-400 transition-colors"><FaFacebook size={18} /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
