const CallToAction = ({ onNavigate }) => (
  <div className="py-24 bg-[#121212]">
    <div className="container mx-auto px-6">
      <div className="bg-[#1a1918] border border-gray-700 rounded-2xl p-12 text-center flex flex-col items-center shadow-md shadow-orange-500/10 transition-all">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug drop-shadow">
          Start Your Ghibli-Inspired Adventure
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 text-base md:text-lg">
          Turn ordinary moments into extraordinary art. Join creators around the world bringing their imagination to life with Ghibli AI.
        </p>
        <button
          onClick={() => onNavigate("/create")}
          className="bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-orange-500/20 cursor-pointer"
        >
          Generate Your Ghibli Art Now
        </button>
      </div>
    </div>
  </div>
);

export default CallToAction;
