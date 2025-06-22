import { Image, Palette, Users } from "lucide-react";
import { assets } from "../assets/assets.js";

const GhibliSteps = () => {
  return (
    <div className="bg-[#1a1918] text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-4">
            Transform Your Photo Into Ghibli Fantasy
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Ghibli AI turns your everyday photos into magical hand-drawn moments,
            inspired by the enchanting worlds of Studio Ghibli. Just upload, describe, and watch the magic unfold.
          </p>

          <ul className="space-y-6">
            {/* Step 1 */}
            <li className="flex items-start">
              <div className="p-3 bg-orange-800/20 text-orange-400 rounded-full mr-4 shadow-md">
                <Image size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-1">Describe Your Vision</h3>
                <p className="text-gray-400 text-sm">
                  Use simple language to describe the scene or feeling — like “a quiet night in the woods.”
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex items-start">
              <div className="p-3 bg-orange-800/20 text-orange-400 rounded-full mr-4 shadow-md">
                <Palette size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-1">Select Ghibli Style</h3>
                <p className="text-gray-400 text-sm">
                  Pick from vibes like <em>Totoro’s forest</em>, <em>Kiki’s seaside town</em>, or <em>Howl’s castle</em>.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex items-start">
              <div className="p-3 bg-orange-800/20 text-orange-400 rounded-full mr-4 shadow-md">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-1">Add Characters</h3>
                <p className="text-gray-400 text-sm">
                  Include your friends, family, or pets and see them reimagined in charming Ghibli style.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <img
            src={assets.step1}
            alt="Ghibli AI Art Example"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GhibliSteps;
