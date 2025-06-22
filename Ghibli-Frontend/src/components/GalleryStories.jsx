import { assets } from "../assets/assets.js";

const GalleryStories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {/* Story 1 */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Mountain Lake Ghibli Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={assets.grid_1}
              className="w-full h-56 lg:h-72 object-cover border border-gray-700"
              alt="Original Landscape"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={assets.grid_2}
              className="w-full h-56 lg:h-72 object-cover border border-gray-700"
              alt="Ghibli Style Landscape"
            />
          </div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Experience how our AI breathes magic into ordinary landscapes, turning them into whimsical scenes straight from a Studio Ghibli film. Every frame radiates serenity and charm.
        </p>
      </div>

      {/* Story 2 */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Urban Scene Ghibli AI Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={assets.grid_1}
              className="w-full h-56 lg:h-72 object-cover border border-gray-700"
              alt="Original City View"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={assets.grid_2}
              className="w-full h-56 lg:h-72 object-cover border border-gray-700"
              alt="Ghibli City Transformation"
            />
          </div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Watch how bustling city scenes are reimagined into tranquil, dreamlike towns filled with warmth and wonder — each detail crafted in the spirit of Ghibli.
        </p>
      </div>
    </div>
  );
};

export default GalleryStories;
