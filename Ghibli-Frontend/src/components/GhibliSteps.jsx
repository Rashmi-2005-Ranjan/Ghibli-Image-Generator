import { Image, Palette, Users } from "lucide-react";
import { assets } from "../assets/assets.js";

const GhibliSteps = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Content */}
        <div className="lg:w-1/2 text-gray-300">
          <h2 className="text-3xl font-extrabold text-white mb-4">Transform Your Photos Into Ghibli Magic</h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-8">
            Upload a photo and describe your vision—scene, mood, or emotion. Our advanced Ghibli AI brings it to life in the whimsical style of Studio Ghibli with astonishing detail and charm.
          </p>

          <ul className="space-y-6">
            {/* Step 1 */}
            <li className="flex items-start">
              <div className="bg-yellow-500/10 text-yellow-400 p-3 rounded-full mr-4">
                <Image size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Effortless Prompting</h3>
                <p className="text-gray-400 text-sm">
                  No need for complex commands—just describe your idea in plain language. The Ghibli AI handles the rest, turning your thoughts into magical visual scenes.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex items-start">
              <div className="bg-yellow-500/10 text-yellow-400 p-3 rounded-full mr-4">
                <Palette size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Style Customization</h3>
                <p className="text-gray-400 text-sm">
                  Choose themes inspired by iconic films like <em>Spirited Away</em> or <em>Howl’s Moving Castle</em> to fine-tune the look and feel of your final artwork.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex items-start">
              <div className="bg-yellow-500/10 text-yellow-400 p-3 rounded-full mr-4">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Personal Touch</h3>
                <p className="text-gray-400 text-sm">
                  Feature your pets, friends, or family in the scene. Ghibli AI integrates their essence with hand-drawn charm while preserving recognizable features.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <img
            src={assets.step1}
            alt="Photo to Ghibli Art Transformation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GhibliSteps;
