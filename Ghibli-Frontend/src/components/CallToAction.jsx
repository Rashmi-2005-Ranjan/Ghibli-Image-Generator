const CallToAction = ({ onNavigate }) => (
  <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-[#2e2e2e] to-[#1a1a1a] rounded-3xl p-12 text-center shadow-2xl">
        <h2 className="text-4xl font-extrabold text-white mb-5">
          Transform Imagination Into Ghibli-Inspired Magic
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Dive into a world of dreamlike visuals — craft breathtaking Studio Ghibli-style art powered by our AI. Let your creativity flow!
        </p>
        <button
          onClick={() => onNavigate('/create')}
          className="bg-gradient-to-r from-orange-600 to-yellow-400 text-black font-semibold py-3 px-8 rounded-xl transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Start Creating for Free
        </button>
      </div>
    </div>
  </div>
);

export default CallToAction;
