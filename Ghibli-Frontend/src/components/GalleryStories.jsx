import { assets } from "../assets/assets.js";

const GalleryStories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
      {/* Story Card 1 */}
      <div className="bg-[#1e1d1c] border border-gray-700 rounded-2xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Mountain Lake Ghibli Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assets.grid_1}
              alt="Original mountain lake"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover border border-gray-700"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assets.grid_2}
              alt="Transformed Ghibli lake"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover border border-gray-700"
            />
          </div>
        </div>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Discover how our Ghibli AI breathes life into natural landscapes. What was once a simple mountain lake becomes a tranquil, hand-painted Ghibli masterpiece — full of charm, depth, and studio magic.
        </p>
      </div>

      {/* Story Card 2 */}
      <div className="bg-[#1e1d1c] border border-gray-700 rounded-2xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Urban Scene Ghibli AI Makeover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assets.grid_1}
              alt="Original urban scene"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover border border-gray-700"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={assets.grid_2}
              alt="Ghibli-style urban art"
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover border border-gray-700"
            />
          </div>
        </div>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Witness the charm of city streets reimagined by Ghibli AI. Every lamppost, rooftop, and alley is touched with magic — turning the mundane into a dreamy, nostalgic Ghibli-style setting.
        </p>
      </div>
    </div>
  );
};

export default GalleryStories;
