import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
    <div className="container mx-auto px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand Column */}
        <div>
          <div className="flex items-center mb-3">
            <div className="bg-yellow-500 text-black w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg mr-3">
              G
            </div>
            <h3 className="text-2xl font-bold text-white">Ghibli AI</h3>
          </div>
          <p className="text-sm text-gray-400">
            Crafted for fans of Studio Ghibli’s enchanting style. This is a tribute project and not officially associated with Studio Ghibli Inc.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/create" className="hover:text-yellow-400">Create</Link></li>
            <li><Link to="/features" className="hover:text-yellow-400">Features</Link></li>
            <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
            <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
          </ul>
        </div>

        {/* Features Column */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Capabilities</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Photo to Ghibli Art</a></li>
            <li><a href="#" className="hover:text-yellow-400">Text to Ghibli Art</a></li>
            <li><a href="#" className="hover:text-yellow-400">Character Creator</a></li>
            <li><a href="#" className="hover:text-yellow-400">Scene & Backgrounds</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 Ghibli AI. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400"><Twitter size={20} /></a>
          <a href="#" className="hover:text-yellow-400"><Instagram size={20} /></a>
          <a href="#" className="hover:text-yellow-400"><Facebook size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
